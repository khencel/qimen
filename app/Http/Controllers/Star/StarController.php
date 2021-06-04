<?php

namespace App\Http\Controllers\Star;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Star;

class StarController extends Controller
{
    public function index(){
        $star = Star::all();
        return view('compedium.star.star-list',compact('star'));
    }
    public function attribute($id){
        $star = Star::find($id);
        return view('compedium.star.star-singleAttribute',compact('star'));
    }
    public function multipleAttribute($id){
        $star = Star::find($id);
        return view('compedium.star.star-multiple',compact('star'));
    }

    public function combo(){
        $url = url()->current();
        $path = basename($url);
        $star = Star::all();
        if($path == "one"){
            return view('compedium.star.star-combo-one-list',compact('star'));
        }
        if($path == "two"){
            return view('compedium.star.star-combo-two-list',compact('star'));
        }
    }

    public function comboStar($type,$id){
        $star = Star::find($id);
        if($type == "one"){
            return view('compedium.star.star-combo-one',compact('star'));
        }

        if($type == "two"){
            return view('compedium.star.star-combo-two',compact('star'));
        }
        
        
    }
}
