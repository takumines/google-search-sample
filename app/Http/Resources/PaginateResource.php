<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaginateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'total' => $this['total'],
            'perPage' => $this['per_page'],
            'currentPage' => $this['current_page'],
            'lastPage' => $this['last_page'],
            'from' => $this['from'],
            'to' => $this['to'],
        ];
    }
}
