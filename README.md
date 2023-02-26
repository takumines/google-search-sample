# Google Search Sample App

## 使用技術
- PHP 8.2.2
- Laravel 9.52.0
- React 18.2
- Inertia (SPA構成を行うために使用)
- Chakra UI

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
3. Custom Search Json API Setting
   ```
   CUSTOM_SEARCH_API_KEY=<api key>
   CUSTOM_SEARCH_ENGINE_ID=<engine key>
   ```
4. Install PHP packages
    ```sh
    $ docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php81-composer:latest \
        composer install --ignore-platform-reqs
    ```
5. Start the docker containers and generate key
    ```sh
    $ ./vendor/bin/sail up -d
    $ ./vendor/bin/sail artisan key:generate
    ```
6. Install node_modules package and build
   ```sh
   $ ./vendor/bin/sail npm install
   $ ./vendor/bin/sail npm run dev
   ```
   