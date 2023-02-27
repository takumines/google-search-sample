<?php

namespace Tests\Feature\Search;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class IndexControllerTest extends TestCase
{
    /**
     * @noinspection NonAsciiCharacters
     * @test
     */
    public function 検索画面が表示されること()
    {
        $response = $this->get(route('index'));

        $response->assertInertia(fn (Assert $page) => $page
            ->component('search/Index'));
    }
}
