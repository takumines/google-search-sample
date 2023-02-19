<?php

namespace App\Exceptions;

use Exception;
use Throwable;

class CustomSearchException extends Exception
{
    public function __construct(int $code, string $message = '', ?Throwable $e = null)
    {
        parent::__construct($message, $code, $e);
    }
}
