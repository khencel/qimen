<?php

namespace App\Http\Controllers\API\Setting;

use App\Http\Controllers\Controller;
use App\Rules\InvalidPassword;
use App\Rules\PasswordFormat;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;

class ChangePassword extends Controller
{
    public function changePassword(Request $request){
        $request->validate([
            'current_password' => ['required',new InvalidPassword]
        ]);
    }

    public function passwordChange(Request $request){
        
        $password = $request->validate([
            'password' => ['required',new PasswordFormat,'confirmed'],
        ]);

        User::find(\Auth::user()->id)->update([
            'password' => Hash::make($request->password)
        ]);
    }
}
