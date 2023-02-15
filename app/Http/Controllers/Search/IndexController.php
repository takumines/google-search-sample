<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * @return Response
     */
    public function __invoke(): Response
    {
        return Inertia::render('search/Index');
    }
}
