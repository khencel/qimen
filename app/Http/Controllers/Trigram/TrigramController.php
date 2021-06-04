<?php

namespace App\Http\Controllers\Trigram;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Trigram;

class TrigramController extends Controller
{
    public function index(){
        $trigram = Trigram::all();
        return view('compedium.trigrams.trigram-list',compact('trigram'));
    }

    public function trigram($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigrams.trigram-each',compact('trigram'));
    }

    public function number($id){
        $trigram = Trigram::find($id);
        return view('compedium.number.trigram-number-list',compact('trigram'));
    }

    public function people($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigram-people-list',compact('trigram'));
    }

    public function bodyParts($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigram-bodyParts-list',compact('trigram'));
    }

    public function animals($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigram-animal-list',compact('trigram'));
    }

    public function sickness($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigram-sickness-list',compact('trigram'));
    }

    public function colour($id){
        $trigram = Trigram::find($id);
        return view('compedium.trigram-colour-list',compact('trigram'));
    }
}
