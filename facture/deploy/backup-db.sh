#!/usr/bin/env bash
# Sauvegarde quotidienne de la base Dolibarr vers S3 (s3://sisia-facture-documents/_sauvegardes-db/), conservee 60 jours.
# Les documents sont deja dans le bucket (versionne). Identifiants = role IAM de l'instance, aucune cle.
# Planifie par /etc/cron.d/facture-backup (03:50). Restauration : gunzip -c fichier.sql.gz | docker exec -i facture-db mariadb -uroot -p... dolibarr
set -euo pipefail
cd /opt/facture
. ./.env
STAMP="$(date -u +%Y%m%d-%H%M)"
TMP="$(mktemp /tmp/facture-db.XXXXXX.sql.gz)"
trap 'rm -f "$TMP"' EXIT
docker exec facture-db mariadb-dump -uroot -p"$DB_ROOT_PASSWORD" --single-transaction --routines dolibarr | gzip -9 > "$TMP"
[ "$(stat -c %s "$TMP")" -gt 100000 ] || { echo "sauvegarde suspecte (trop petite)" >&2; exit 1; }
rclone copyto "$TMP" ":s3,provider=AWS,env_auth=true,region=eu-north-1,no_check_bucket=true:sisia-facture-documents/_sauvegardes-db/dolibarr-$STAMP.sql.gz"
echo "$(date -u +%FT%TZ) sauvegarde base $STAMP envoyee ($(du -h "$TMP" | cut -f1))"
