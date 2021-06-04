<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\User;

class Token extends Controller
{
    public function token(){
        $user = User::find(\Auth::user()->id);
        return $user->update([
            'api_token' => Str::random(60),
            
        ]);
    }
}
