<?php

namespace App\Http\Controllers\door;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Door;

class DoorController extends Controller
{
    public function index(){
        $door = Door::all();
        return view('compedium.door.door-list',compact('door'));
    }
    public function attribute($id){
        $door = Door::find($id);
        return view('compedium.door.door-singleAttribute',compact('door'));
    }
    public function multipleAttribute($id){
        $door = Door::find($id);
        return view('compedium.door.door-multiple',compact('door'));
    }

    public function doorStemList(){
        $door = Door::all();
        return view('compedium.door.door-stem-list',compact('door'));
    }
    public function doorStem($id){
        $door = Door::find($id);
        return view('compedium.door.door-stem',compact('door'));
    }

    public function doorPalaceList(){
        $door = Door::all();
        return view('compedium.door.door-palace-list',compact('door'));
    }
    public function doorPalace($id){
        $door = Door::find($id);
        return view('compedium.door.door-palace',compact('door'));
    }
}
