<?php

namespace App\Http\Controllers\API\Subscription;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class SubscribeController extends Controller
{
    public function subscription(){
        $current = now();
        $expired = date('Y-m-d H:i:s', strtotime(date("Y-m-d H:i:s", strtotime($current)) . " +1 year"));
        $terms = $this->terms(request()->price);
        $user = \Auth::user()->id;
        User::find($user)->update([
            'is_subscribed'     => $current,
            'end_subscribed'    => $expired,
            'no_of_terms'       => $terms
        ]);
    }

    public function terms($price){
        if($price == 3){
            return 1;
        }

        if($price == 6){
            return 2;
        }

        if($price == 10){
            return 5;
        }
    }
}
