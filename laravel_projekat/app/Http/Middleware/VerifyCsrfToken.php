<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
<<<<<<< HEAD
       protected $except = [
        'api/users', // Izuzmite sve rute pod /api
    ];


=======
    protected $except = [
        // URIs that should be excluded from CSRF verification.
    ];
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
}
