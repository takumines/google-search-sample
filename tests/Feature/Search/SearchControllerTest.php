<?php

namespace Tests\Feature\Search;

use App\Exceptions\CustomSearchException;
use App\Services\CustomSearchService;
use Inertia\Testing\AssertableInertia as Assert;
use Mockery;
use Mockery\MockInterface;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class SearchControllerTest extends TestCase
{
    private MockInterface $mockCustomSearchService;

    public function setUp(): void
    {
        parent::setUp();
        $this->mockCustomSearchService = Mockery::mock(CustomSearchService::class);
    }

    /**
     * @noinspection NonAsciiCharacters
     * @test
     */
    public function 検索結果画面に検索データが表示されること()
    {
        $json = file_get_contents(base_path() . '/tests/MockData/SearchResult.json');
        $data = json_decode($json, true);
        ;
        $this->mockCustomSearchService->shouldReceive('getSearchResults')
            ->withArgs([
                'word' => 'Laravel',
                'page' => '1'
            ])
            ->andReturn($data);
        $word = 'Laravel';
        $response = $this->get(route('search') . '?word=' . $word);

        $response->assertInertia(fn (Assert $page) => $page
            ->component('search/Result')
            ->has('results', 10)
            ->has('meta')
        );
    }

    /**
     * @noinspection NonAsciiCharacters
     * @test
     */
    public function 検索キーワードが未入力の場合、バリデーションエラーとなること()
    {
        $response = $this->get(route('search'));
        $response->assertSessionHas('errors');
    }

    /**
     * @noinspection NonAsciiCharacters
     * @test
     */
    public function 検索処理でエラーが発生した際404画面が表示されること()
    {
        $this->mockCustomSearchService->shouldReceive('getSearchResults')
            ->withArgs([
                'word' => 'Laravel',
                'page' => '100'
            ])
            ->andThrowExceptions([new CustomSearchException(Response::HTTP_BAD_REQUEST, 'hoge')]);
        $queryParams = '?word=Laravel&page=1000';
        $response = $this->get(route('search') . $queryParams);

        $response->assertStatus(Response::HTTP_NOT_FOUND);
    }
}
