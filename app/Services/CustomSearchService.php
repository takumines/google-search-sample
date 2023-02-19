<?php

namespace App\Services;

use App\Exceptions\CustomSearchException;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class CustomSearchService
{
    private readonly string $apiKey;
    private readonly string $engineId;

    /**
     * Custom Search Json APIでの検索時に使用するベースURL
     */
    private const SEARCH_URL = 'https://customsearch.googleapis.com/customsearch/v1';

    /**
     * 検索結果の数
     */
    private const NUM_RESULTS = 10;

    public function __construct()
    {
        $this->apiKey = (string)config('customSearch.apiKey');
        $this->engineId = (string)config('customSearch.engineId');
    }

    /**
     * 検索結果を取得
     *
     * @param string $word
     * @param int $page
     * @return object
     * @throws CustomSearchException
     */
    public function getSearchResults(string $word, int $page): object
    {
        $searchQueryParam = $this->generateSearchQueryParam($word, $page);
        try {
            $response = Http::get(self::SEARCH_URL . $searchQueryParam)->throw();
        } catch (RequestException $e) {
            Log::error($e->getMessage());
            throw new CustomSearchException($e->getCode(), $e->getMessage(), $e);
        }

        return (object)$response->object();
    }

    /**
     * 検索時のクエリパラメータを生成
     *
     * @param string $word
     * @param int $page
     * @return string
     */
    private function generateSearchQueryParam(string $word, int $page): string
    {
        /**
         * NOTE: 検索結果を取得するスタート位置を格納する変数
         *  Custom Search Json APIの検索結果は1ページあたりデフォルトで10件なので,
         *  次のページの結果を取得する際は11件目からになる。
         * @see https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list?hl=ja&apix_params=%7B%22cx%22%3A%22f7bb8875558c54dfb%22%2C%22q%22%3A%22%E5%BB%B6%E5%B2%A1%E5%B8%82%22%2C%22start%22%3A2%7D#query-parameters
         */
        $start = self::NUM_RESULTS * $page - 9;

        return '?cx=' . $this->engineId . '&' . http_build_query(
            [
                'key' => $this->apiKey,
                'q' => $word,
                'num' => self::NUM_RESULTS,
                'start' => $start,
            ]);
    }
}
