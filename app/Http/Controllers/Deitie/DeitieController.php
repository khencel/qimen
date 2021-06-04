<?php

namespace App\Http\Controllers\Deitie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Deitie;

class DeitieController extends Controller
{
    public function index(){
        $deitie = Deitie::all();
        return view('compedium.deitie.deitie-list',compact('deitie'));
    }
    public function attribute($id){
        $deitie = Deitie::find($id);
        return view('compedium.deitie.deitie-singleAttribute',compact('deitie'));
    }
    public function multipleAttribute($id){
        $deitie = Deitie::find($id);
        return view('compedium.deitie.deitie-multiple',compact('deitie'));
    }
}
