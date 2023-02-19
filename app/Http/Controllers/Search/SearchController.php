<?php

namespace App\Http\Controllers\Search;

use App\Exceptions\CustomSearchException;
use App\Http\Controllers\Controller;
use App\Http\Response\SearchResultResponse;
use App\Services\CustomSearchService;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{
    /**
     * 1ページあたりに表示するアイテム数
     */
    private const PER_PAGE = 10;

    public function __construct(private readonly CustomSearchService $customSearchService)
    {}

    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @return Response
     * @throws CustomSearchException
     */
    public function __invoke(Request $request): Response
    {
        $word = $request->input('word');
        $page = $request->input('page', 1);
        $result = $this->customSearchService->getSearchResults($word, $page);
        $paginator = $this->generatePaginator(
            $result->searchInformation->totalResults,
            $result->items,
            $page
        );
        $response = SearchResultResponse::body($paginator);

        return Inertia::render('search/Result', $response);
    }

    /**
     * @param int $total
     * @param array $list
     * @param int $page
     * @return LengthAwarePaginator
     */
    private function generatePaginator(int $total, array $list, int $page): LengthAwarePaginator
    {
        return new LengthAwarePaginator($list, $total, self::PER_PAGE, $page);
    }
}
