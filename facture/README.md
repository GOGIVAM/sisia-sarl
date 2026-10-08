# Facturation SISIA (Dolibarr) — https://facture.sisia-sarl.com

Dolibarr 24 sur le même EC2 que la messagerie (`/opt/facture`). Copyright by MKO-LIDIA.

| Élément | Où |
|---|---|
| Application | conteneur `facture-app` (PHP 8.2 + Apache), image construite depuis le tag Dolibarr (`DOLIBARR_VERSION`) + `app/custom/` |
| Base | conteneur `facture-db` (MariaDB 10.11), volume `facture-db-data`, sauvegarde quotidienne `deploy/backup-db.sh` → `s3://sisia-facture-documents/_sauvegardes-db/` (60 j) |
| Documents | **uniquement** le bucket S3 `sisia-facture-documents` (versionné, chiffré), monté sur `/mnt/facture-docs` par rclone (`deploy/facture-docs.service`, rôle IAM de l'instance, aucune clé) |
| HTTPS | Caddy de la messagerie (bloc `facture.sisia-sarl.com` dans `message-api/deploy/Caddyfile`) |
| Secrets | `/opt/facture/.env` et `/opt/facture/conf/conf.php` : **sur le serveur seulement**, jamais dans git |

## Déploiement
Un push sur `main` qui modifie `facture/**` lance `.github/workflows/deploy-facture.yml` (secrets `EC2_HOST`, `EC2_SSH_KEY`).

## Personnalisation
Tout ce qui est propre à SISIA (modules, CSS, thème) va dans `app/custom/` : le noyau Dolibarr n'est jamais modifié, ce qui permet de monter de version en changeant seulement `DOLIBARR_VERSION`.

## Ne jamais commiter
`appsisia/` (ancienne copie : conf de production, sauvegardes SQL, documents clients) est ignoré par `.gitignore`.
