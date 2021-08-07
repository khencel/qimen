<?php

namespace App\Http\Controllers\API\HourChart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Formation;

class FormationController extends Controller
{
    public function formation(){
        return Formation::orderBy('formation')->get();
    }

    public function addFormation(Request $request){
        $form = $request->validate([
            'formation' => 'required|unique:formations'
        ]);

        Formation::create($form);
    }

}
