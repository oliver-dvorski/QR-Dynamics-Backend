FROM php:7.2-apache-stretch

RUN apt-get update && apt-get install -y \
        libmcrypt-dev \
        mysql-client \
        libpq-dev \
        libsqlite3-dev \
        libssl-dev \
        zip \
        unzip \
        git
RUN docker-php-ext-install pdo pdo_mysql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www/html
RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --quiet \
    --prefer-dist

# RUN chown -R www-data /var/www/html

RUN cp /var/www/html/apache.conf /etc/apache2/sites-available/main.conf
RUN a2ensite main.conf
RUN a2dissite 000-default.conf
RUN a2enmod rewrite
