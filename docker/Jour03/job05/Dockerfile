FROM nginx:alpine

# Installer PHP et ses extensions
RUN apk add --no-cache \
    php82 \
    php82-fpm \
    php82-json

# Copier les fichiers
COPY index.html /usr/share/nginx/html/
COPY save.php /usr/share/nginx/html/
COPY results.json /usr/share/nginx/html/

# Configuration Nginx avec support PHP
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location ~ \.php$ { \
        fastcgi_pass 127.0.0.1:9000; \
        fastcgi_index index.php; \
        include fastcgi_params; \
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Permissions pour PHP
RUN chown -R nginx:nginx /usr/share/nginx/html \
    && chmod 777 /usr/share/nginx/html/results.json

EXPOSE 80

# Démarrer PHP-FPM et Nginx
CMD php-fpm82 && nginx -g 'daemon off;'
