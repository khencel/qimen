<?php

namespace App\Http\Middleware;

use Closure;

class IsVerified
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(\Auth::user()->email_verified_at != null){
            return $next($request);
        }
        \Auth::logout();
        return redirect('email_verify');
    }
}
