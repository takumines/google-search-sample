# Google Search Sample App

## Installation
1. Clone the repository
    ```sh
    $ git@github.com:takumines/google-search-sample.git
    $ cd google-search-sample
    ```
2. Copy env file
    ```sh
    $ cp .env.example .env
    ```
3. Install PHP packages
    ```sh
    $ docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php81-composer:latest \
        composer install --ignore-platform-reqs
    ```
4. Start the docker containers and generate key
    ```sh
    $ ./vendor/bin/sail up -d
    $ ./vendor/bin/sail artisan key:generate
    ```
