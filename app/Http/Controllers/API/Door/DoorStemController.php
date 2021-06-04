<?php

namespace App\Http\Controllers\API\Door;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Stem;
use App\DoorStem;

class DoorStemController extends Controller
{
    public function stem(Request $request){
        $selected_id = null;
        $current_stem = $this->stemNotShowIfExist($request->door_id,$selected_id);
        return Stem::whereNotIn('id', $current_stem)->get();
    }

    public function store(Request $request){
        DoorStem::create($request->all());
    }

    public function show($id){
        return DoorStem::with('stem')->where('door_id',$id)->get();
    }

    public function showDoorStem(Request $request){
        $door = DoorStem::find($request->selected_id);
        $selected = $door->stem_id;

        $current = $this->stemNotShowIfExist($request->id,$selected);
        $stem = Stem::whereNotIn('id', $current)->get();

        return response()->json([
            'stem' => $stem,
            'selected' => $door
        ]);
    }

    public function update(Request $request, $id){
        DoorStem::find($id)->update([
            'stem_id' => $request->stem_id,
            'description' => $request->description
        ]);
    }

    public function delete($id){
        $doorStem = DoorStem::find($id);
        $doorStem->delete();
    }

    
    public function stemNotShowIfExist($id,$selected_id){
        $existingStem = array();
        $selected = array();
        $selected[] = $selected_id;

        $doorStem = DoorStem::where('door_id',$id)->get();
        foreach ($doorStem as $value) {
            $existingStem[] = $value->stem_id;
        }
        return array_diff($existingStem,$selected);
    }
}
