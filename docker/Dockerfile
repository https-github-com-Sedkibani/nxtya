FROM php:7.4-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    && pecl install redis \
    && docker-php-ext-enable redis

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip soap

# Install PHPUnit
RUN curl -sSLo /tmp/phpunit.phar https://phar.phpunit.de/phpunit.phar \
    && chmod +x /tmp/phpunit.phar \
    && mv /tmp/phpunit.phar /usr/local/bin/phpunit

# Set working directory
WORKDIR /home/sedki/Documents/nxtya/

# Copy existing application directory contents
COPY . /home/sedki/Documents/nxtya

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies using Composer
COPY --from=composer:1.10.1 . /home/sedki/Documents/nxtya/docker/docker-composer.yml
COPY composer.json composer.lock /home/sedki/Documents/nxtya/
#RUN composer install --from=composer:1.10.1 /home/sedki/Bureau/Nxtya/docker

# Set Laravel environment variables
#ENV APP_NAME=Laravel
#ENV APP_ENV=local
#ENV APP_KEY=
#ENV APP_DEBUG=true
#ENV APP_URL=http://localhost

#ENV LOG_CHANNEL=stack
#ENV LOG_LEVEL=debug

#ENV DB_CONNECTION=mysql
#ENV DB_HOST=mysql
#ENV DB_PORT=3306
#ENV DB_DATABASE=laravel
#ENV DB_USERNAME=root
#ENV DB_PASSWORD=

#ENV BROADCAST_DRIVER=log
#ENV CACHE_DRIVER=file
#ENV QUEUE_CONNECTION=sync
#ENV SESSION_DRIVER=file
#ENV SESSION_LIFETIME=120

#ENV REDIS_HOST=redis
#ENV REDIS_PASSWORD=null
#ENV REDIS_PORT=6379

#ENV MAIL_MAILER=smtp
#ENV MAIL_HOST=mailhog
#ENV MAIL_PORT=1025
#ENV MAIL_USERNAME=null
#ENV MAIL_PASSWORD=null
#ENV MAIL_ENCRYPTION=null
#ENV MAIL_FROM_ADDRESS=null
#ENV MAIL_FROM_NAME="${APP_NAME}"

#ENV AWS_ACCESS_KEY_ID=
#ENV AWS_SECRET_ACCESS_KEY=
#ENV AWS_DEFAULT_REGION=us-east-1
#ENV AWS_BUCKET=

#ENV PUSHER_APP_ID=
#ENV PUSHER_APP_KEY=
#ENV PUSHER_APP_SECRET=
#ENV PUSHER_APP_CLUSTER=mt1

#ENV MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
#ENV MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

#ENV MIX_API_URL="http://localhost:8000/api"
#ENV MIX_APP_URL="http://localhost:8000"
#ENV MIX_API_STORAGE="http://localhost:8000/storage/"
#ENV MIX_QUESTIONS_URL="http://localhost:8000/images/questions/"

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
