#!/usr/bin/env python3
"""Nettoyage des PDF generes automatiquement par Dolibarr (generation a la demande, Copyright by MKO-LIDIA).

Supprime, dans le bucket S3 monte sur /mnt/facture-docs, le PDF genere d'un document (fichier <ref>/<ref>.pdf)
pour : propositions, commandes, expeditions, interventions, propositions et commandes fournisseurs, receptions.
  - JAMAIS les factures (document comptable, conserve) ;
  - JAMAIS les pieces jointes deposees par un utilisateur (seul le fichier nomme comme son document est vise) ;
  - seulement les fichiers modifies apres la date de mise en service (/opt/facture/.ondemand-since) : les PDF
    historiques ne sont pas touches ;
  - seulement apres 24 h, pour laisser le temps de les envoyer par e-mail.
Les entrees correspondantes de l'index ECM (llx_ecm_files) sont supprimees aussi.
Le PDF se regenere a la demande avec le bouton "PDF" des fiches (module sisiaondemand).
Usage : purge-docs.py [--dry-run]. Planifie par /etc/cron.d/facture-purge-docs (04:10)."""
import os
import re
import subprocess
import sys
import time

ROOT = '/mnt/facture-docs'
MARK = '/opt/facture/.ondemand-since'
MAX_AGE_SEC = 24 * 3600
DIRS = ['propale', 'commande', 'expedition/sending', 'ficheinter', 'supplier_proposal',
        'fournisseur/commande', 'reception']
SAFE = re.compile(r'^[A-Za-z0-9_().\-]+$')   # references ordinaires uniquement
dry = '--dry-run' in sys.argv


def env(name):
    for line in open('/opt/facture/.env', encoding='utf8'):
        if line.startswith(name + '='):
            return line.split('=', 1)[1].strip()
    raise SystemExit('variable absente : ' + name)


if not os.path.exists(MARK):
    raise SystemExit('marqueur absent, rien a faire : ' + MARK)
since = os.path.getmtime(MARK)
now = time.time()
removed = []
for d in DIRS:
    base = os.path.join(ROOT, d)
    if not os.path.isdir(base):
        continue
    for ref in os.listdir(base):
        f = os.path.join(base, ref, ref + '.pdf')
        if not SAFE.match(ref) or not os.path.isfile(f):
            continue
        m = os.path.getmtime(f)
        if m <= since or now - m < MAX_AGE_SEC:
            continue
        removed.append((d + '/' + ref, ref + '.pdf', f))

for _, _, f in removed:
    print(('[essai] ' if dry else 'supprime ') + f)
    if not dry:
        os.remove(f)
        try:
            os.rmdir(os.path.dirname(f))   # seulement si le dossier est vide
        except OSError:
            pass

if removed and not dry:
    pairs = ','.join("('%s','%s')" % (a, b) for a, b, _ in removed)
    sql = 'DELETE FROM llx_ecm_files WHERE (filepath, filename) IN (%s)' % pairs
    subprocess.run(['docker', 'exec', 'facture-db', 'mariadb', '-uroot', '-p' + env('DB_ROOT_PASSWORD'), 'dolibarr', '-e', sql], check=True)
print('%s PDF %s' % (len(removed), 'a supprimer (essai)' if dry else 'supprimes'))
