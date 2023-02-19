<?php

namespace App\Http\Response;

use App\Http\Resources\PaginateResource;
use App\Http\Resources\SearchResultResource;
use Illuminate\Pagination\LengthAwarePaginator;

class SearchResultResponse
{
    /**
     * @param LengthAwarePaginator $paginator
     * @return array
     */
    public static function body(LengthAwarePaginator $paginator): array
    {
        return [
            'results' => SearchResultResource::collection($paginator->items())->toArray(request()),
            'meta' => PaginateResource::make($paginator->toArray())->toArray(request()),
        ];
    }
}