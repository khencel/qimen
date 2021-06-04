<?php

namespace App\Http\Controllers\Summary;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\StemFormation;
use App\Stem;

class SummaryController extends Controller
{
    public function stemA(){
        $stemList = StemFormation::orderBy('id')->get();
        $stem = StemFormation::with('stemList')->get()->unique('stem_id');
        return view('compedium.summary.stem-a',compact('stem','stemList'));
    }

    public function stemB(){
        $stemList = StemFormation::orderBy('id')->get();
        $stem = StemFormation::with('stemList')->get()->unique('stem_id');
        return view('compedium.summary.stem-b',compact('stem','stemList'));
    }

    public function stemF(){
        $stemList = Stem::orderBy('id')->get();
        return $stemList;
        $stem = StemFormation::with('stemList')->get()->unique('stem_id');
        return view('compedium.summary.stem-f',compact('stem','stemList'));
    }
}
