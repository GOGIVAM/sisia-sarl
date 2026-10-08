#!/bin/sh
# N arrive qu une fois le bucket S3 monte (fichier-sentinelle), sinon Dolibarr ecrirait sur le disque local.
i=0
until [ -f /var/documents/.s3-monte ]; do
  i=$((i+1)); [ $i -gt 90 ] && { echo "bucket S3 non monte, abandon" >&2; exit 1; }
  sleep 2
done
exec docker-php-entrypoint "$@"
