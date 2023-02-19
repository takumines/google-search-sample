<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'title' => $this->title,
            'htmlTitle' => $this->htmlTitle,
            'link' => $this->link,
            'snippet' => $this->snippet,
            'htmlSnippet' => $this->htmlSnippet,
        ];
    }
}
