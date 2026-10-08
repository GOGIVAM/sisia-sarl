ARG DOLIBARR_VERSION=24.0.2

# 1) Code Dolibarr officiel a la version voulue (aucune modification du noyau)
FROM alpine/git AS src
ARG DOLIBARR_VERSION
RUN git clone -q --depth 1 --branch ${DOLIBARR_VERSION} https://github.com/Dolibarr/dolibarr.git /src && rm -rf /src/.git

# 2) Image d execution
FROM php:8.2-apache
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && install-php-extensions mysqli gd intl zip opcache && rm -rf /var/lib/apt/lists/*
COPY php.ini /usr/local/etc/php/conf.d/zz-facture.ini
COPY apache.conf /etc/apache2/conf-enabled/zz-facture.conf
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY --from=src --chown=root:root /src/htdocs/ /var/www/html/
# Personnalisations SISIA (modules, theme, CSS) : tout ce qui est dans app/custom
COPY --chown=root:root custom/ /var/www/html/custom/
RUN chmod +x /usr/local/bin/entrypoint.sh && a2enmod remoteip headers >/dev/null && mkdir -p /var/documents
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["apache2-foreground"]
