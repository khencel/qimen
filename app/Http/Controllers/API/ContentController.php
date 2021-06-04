<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Symbols\DeitieController;
use App\Http\Controllers\Symbols\StarController;
use App\Http\Controllers\Symbols\DoorController;
use App\Http\Controllers\Symbols\NumberController;
use Illuminate\Http\Request;
use App\Stem;
use App\Branch;
use App\Element;
use App\English;
use App\Star;
use App\Deitie;
use App\Door;
use App\Position;




class ContentController extends Controller
{
    
    public function index()
    {
        return response()->json([
            'stem' => $this->stem(),
            'branch' => $this->branch(),
            'element' => $this->element(),
            'english' => $this->english(),
            'star' => $this->star(),
            'deitie' => $this->deitie(),
            'door' => $this->door(),
            'position' => $this->position(),
        ]);
    }

    public function loadContent(){
        return response()->json([
            'deitie' => $this->deitie(),
            'stem' => $this->stem(),
            'branch' => $this->branch(),
            'element' => $this->element(),
            'english' => $this->english(),
            'star' => $this->star(),
            'door' => $this->door(),
            'position' => $this->position(),
        ]);
    }

    public function stem(){
        return Stem::all();
    }

    public function branch(){
        return Branch::all();
    }

    public function element(){
        return Element::all();
    }

    public function english(){
        return English::all();
    }

    public function star(){
        return Star::all();
    }

    public function deitie(){
        return Deitie::all();
    }

    public function door(){
        return Door::all();
    }

    public function position(){
        return Position::all();
    }

    

    public function loadContentWithID($id,$type,$part){
       
        return response()->json([
            'deitie' => $this->deitieWithId($id,$type,$part),
            'stem' => $this->stem(),
            'branch' => $this->branch(),
            'element' => $this->element(),
            'english' => $this->english(),
            'star' => $this->starWithId($id,$type,$part),
            'door' => $this->doorWithId($id,$type,$part),
            'position' => $this->position(),
            'number'=> $this->number($id,$type,$part),
        ]);
    }

    public function starWithId($id,$type,$part){
        $starController = new StarController();
        return $starController->stars($id,$type,$part);
    }

    public function deitieWithId($id,$type,$part){
        $deitieController = new DeitieController();
        return $deitieController->deities($id,$type,$part);
    }
        
    public function doorWithId($id,$type,$part){
        $doorController = new DoorController();
        return $doorController->doors($id,$type,$part);
    }
    public function number($id,$type,$part){
        $numberController = new NumberController();
        return $numberController->numbers($id,$type,$part);
        
    }
}
