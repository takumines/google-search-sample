<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Custom Search Json API Key
    |--------------------------------------------------------------------------
    | Custom Search Json API keyを設定
    | https://developers.google.com/custom-search/v1/reference/rest?hl=ja
    |
    */
    'apiKey' => env('CUSTOM_SEARCH_API_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Search Engine ID
    |--------------------------------------------------------------------------
    | 検索エンジンIDを設定
    | https://programmablesearchengine.google.com/about/
    |
    */
    'engineId' => env('CUSTOM_SEARCH_ENGINE_ID'),
];
