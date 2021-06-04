<?php

namespace App\Http\Controllers\Stem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Stem;

class StemController extends Controller
{
    public function index(){
        $stem = Stem::all();
        return view('compedium.stem.stem-list',compact('stem'));
    }

    public function nameQimen($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-name',compact('stem'));
    }

    public function represent($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-represent',compact('stem'));
    }

    public function element($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-element',compact('stem'));
    }

    public function direction($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-direction',compact('stem'));
    }

    public function season($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-season',compact('stem'));
    }

    public function month($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-month',compact('stem'));
    }

    public function astronomy($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-astronomy',compact('stem'));
    }

    public function environment($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-environment',compact('stem'));
    }
    public function attribute($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-multiple',compact('stem'));
    }
    public function formation(){
        $stem = Stem::all();
        return view('compedium.stem.stem-formation',compact('stem'));
    }
    public function formationList($id){
        $stem = Stem::find($id);
        return view('compedium.stem.stem-formation-list',compact('stem'));
    }

}
