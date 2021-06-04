<?php

namespace App\Http\Controllers\API\Door;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Trigram;
use App\DoorFormation;

class DoorFormationController extends Controller
{
    public function showPalaceList(Request $request){
        $selected_id = null;
        $current_stem = $this->palaceNotShowIfExist($request->door_id,$selected_id);
        return Trigram::whereNotIn('id', $current_stem)->get();
    }

    public function store(Request $request){
        DoorFormation::create($request->all());
    }
    public function list($id){
        return DoorFormation::with('trigram')->where('door_id',$id)->get();
    }
    
    public function edit(Request $request){
        $trigram = DoorFormation::find($request->selected_id);
        $selected = $trigram->trigram_id;

        $current = $this->palaceNotShowIfExist($request->id,$selected);
        $trigram = Trigram::whereNotIn('id', $current)->get();
        $formation = DoorFormation::with('trigram')->find($request->selected_id);
        
        return response()->json([
            'trigram' => $trigram,
            'formation' => $formation
        ]);
    }

    public function update(Request $request,$id){
        DoorFormation::find($id)->update($request->all());
    }

    public function delete($id){
        DoorFormation::find($id)->delete();
    }

    public function palaceNotShowIfExist($id,$selected_id){
        $existingStem = array();
        $selected = array();
        $selected[] = $selected_id;

        $doorFormation = DoorFormation::where('door_id',$id)->get();
        foreach ($doorFormation as $value) {
            $existingStem[] = $value->trigram_id;
        }
        return array_diff($existingStem,$selected);
    }
}
