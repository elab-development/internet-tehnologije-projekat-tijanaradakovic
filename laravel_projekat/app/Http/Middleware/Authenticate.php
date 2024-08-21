<?php

namespace App\Http\Middleware;

<<<<<<< HEAD
use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    public function handle($request, Closure $next, ...$guards)
    {
        if (Auth::guard($guards)->guest()) {
            return response()->json(['message' => 'Unauthorized.'], 401);
        }

        return $next($request);
    }
}

=======
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
>>>>>>> 6dde6a648998229c17154e1b752db4e1c246e004
