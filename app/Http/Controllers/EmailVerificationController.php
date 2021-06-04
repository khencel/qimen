<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class EmailVerificationController extends Controller
{
    public function verify($id){
        
        User::find($id)->update([
            "email_verified_at" => now(),
        ]);

        return redirect("/");
    }
}
