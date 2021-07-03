<?php

namespace App\Http\Controllers\API\AutoFetch;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Stem;

class YinController extends Controller
{
    public function nine($type){
        
        if($type == "se"){
            $num = 8;
            $earth = Stem::find(10);
        }
        if($type == "s"){
            $num = 4;
            $earth = Stem::find(5);
        }
        if($type == "sw"){
            $num = 6;
            $earth = Stem::find(3);
        }
        if($type == "e"){
            $num = 7;
            $earth = Stem::find(4);
        }
        if($type == "w"){
            $num = 2;
            $earth = Stem::find(7);
        }
        if($type == "ne"){
            $num = 3;
            $earth = Stem::find(6);
        }
        if($type == "n"){
            $num = 5;
            $earth = Stem::find(2);
        }
        if($type == "nw"){
            $num = 1;
            $earth = Stem::find(8);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function three($type){
        
        if($type == "se"){
            $num = 2;
            $earth = Stem::find(2);
        }
        if($type == "s"){
            $num = 7;
            $earth = Stem::find(8);
        }
        if($type == "sw"){
            $num = 9;
            $earth = Stem::find(6);
        }
        if($type == "e"){
            $num = 1;
            $earth = Stem::find(5);
        }
        if($type == "w"){
            $num = 5;
            $earth = Stem::find(10);
        }
        if($type == "ne"){
            $num = 6;
            $earth = Stem::find(9);
        }
        if($type == "n"){
            $num = 8;
            $earth = Stem::find(7);
        }
        if($type == "nw"){
            $num = 4;
            $earth = Stem::find(4);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function six($type){
        
        if($type == "se"){
            $num = 5;
            $earth = Stem::find(7);
        }
        if($type == "s"){
            $num = 1;
            $earth = Stem::find(4);
        }
        if($type == "sw"){
            $num = 3;
            $earth = Stem::find(9);
        }
        if($type == "e"){
            $num = 4;
            $earth = Stem::find(8);
        }
        if($type == "w"){
            $num = 8;
            $earth = Stem::find(2);
        }
        if($type == "ne"){
            $num = 9;
            $earth = Stem::find(3);
        }
        if($type == "n"){
            $num = 2;
            $earth = Stem::find(10);
        }
        if($type == "nw"){
            $num = 7;
            $earth = Stem::find(5);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }
}
