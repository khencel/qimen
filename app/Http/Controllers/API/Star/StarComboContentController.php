<?php

namespace App\Http\Controllers\API\Star;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\English;
use App\Door;
use App\StarComboOne;
use App\StarComboTwo;

class StarComboContentController extends Controller
{
    public function english(Request $request){
        $selected_id = null;
        $current_stem = $this->palaceNotShowIfExist($request->star_id,$selected_id);

        return English::whereNotIn('id', $current_stem)->get();
    }

    public function palaceNotShowIfExist($id,$selected_id){
        $existingStem = array();
        $selected = array();
        $selected[] = $selected_id;

        $doorFormation = StarComboOne::where('star_id',$id)->get();
        foreach ($doorFormation as $value) {
            $existingStem[] = $value->english_id;
        }
        return array_diff($existingStem,$selected);
    }

    public function door(Request $request){
        $selected_id = null;
        $current_stem = $this->doorNotShowIfExist($request->star_id,$selected_id);

        return Door::whereNotIn('id', $current_stem)->get();
    }

    public function doorNotShowIfExist($id,$selected_id){
        $existingStem = array();
        $selected = array();
        $selected[] = $selected_id;

        $doorFormation = StarComboTwo::where('star_id',$id)->get();
        foreach ($doorFormation as $value) {
            $existingStem[] = $value->door_id;
        }
        return array_diff($existingStem,$selected);
    }
}
