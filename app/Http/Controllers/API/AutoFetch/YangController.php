<?php

namespace App\Http\Controllers\API\AutoFetch;

use App\Http\Controllers\Controller;
use App\Stem;
use Illuminate\Http\Request;

class YangController extends Controller
{
    public function one($type){
        if($type == "se"){
            $num = 9;
            $earth = Stem::find(8);
        }
        if($type == "s"){
            $num = 5;
            $earth = Stem::find(2);
        }
        if($type == "sw"){
            $num = 7;
            $earth = Stem::find(6);
        }
        if($type == "e"){
            $num = 8;
            $earth = Stem::find(7);
        }
        if($type == "w"){
            $num = 3;
            $earth = Stem::find(4);
        }
        if($type == "ne"){
            $num = 4;
            $earth = Stem::find(3);
        }
        if($type == "n"){
            $num = 6;
            $earth = Stem::find(5);
        }
        if($type == "nw"){
            $num = 2;
            $earth = Stem::find(10);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function two($type){
        if($type == "se"){
            $num = 1;
            $earth = Stem::find(7);
        }
        if($type == "s"){
            $num = 6;
            $earth = Stem::find(3);
        }
        if($type == "sw"){
            $num = 8;
            $earth = Stem::find(5);
        }
        if($type == "e"){
            $num = 9;
            $earth = Stem::find(6);
        }
        if($type == "w"){
            $num = 4;
            $earth = Stem::find(10);
        }
        if($type == "ne"){
            $num = 5;
            $earth = Stem::find(4);
        }
        if($type == "n"){
            $num = 7;
            $earth = Stem::find(2);
        }
        if($type == "nw"){
            $num = 3;
            $earth = Stem::find(9);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function three($type){
        if($type == "se"){
            $num = 2;
            $earth = Stem::find(6);
        }
        if($type == "s"){
            $num = 7;
            $earth = Stem::find(4);
        }
        if($type == "sw"){
            $num = 9;
            $earth = Stem::find(2);
        }
        if($type == "e"){
            $num = 1;
            $earth = Stem::find(5);
        }
        if($type == "w"){
            $num = 5;
            $earth = Stem::find(9);
        }
        if($type == "ne"){
            $num = 6;
            $earth = Stem::find(10);
        }
        if($type == "n"){
            $num = 8;
            $earth = Stem::find(3);
        }
        if($type == "nw"){
            $num = 4;
            $earth = Stem::find(8);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function four($type){
        if($type == "se"){
            $num = 3;
            $earth = Stem::find(5);
        }
        if($type == "s"){
            $num = 8;
            $earth = Stem::find(10);
        }
        if($type == "sw"){
            $num = 1;
            $earth = Stem::find(3);
        }
        if($type == "e"){
            $num = 2;
            $earth = Stem::find(2);
        }
        if($type == "w"){
            $num = 6;
            $earth = Stem::find(8);
        }
        if($type == "ne"){
            $num = 7;
            $earth = Stem::find(9);
        }
        if($type == "n"){
            $num = 9;
            $earth = Stem::find(4);
        }
        if($type == "nw"){
            $num = 5;
            $earth = Stem::find(7);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function five($type){
        if($type == "se"){
            $num = 4;
            $earth = Stem::find(2);
        }
        if($type == "s"){
            $num = 9;
            $earth = Stem::find(9);
        }
        if($type == "sw"){
            $num = 2;
            $earth = Stem::find(4);
        }
        if($type == "e"){
            $num = 3;
            $earth = Stem::find(3);
        }
        if($type == "w"){
            $num = 7;
            $earth = Stem::find(7);
        }
        if($type == "ne"){
            $num = 8;
            $earth = Stem::find(8);
        }
        if($type == "n"){
            $num = 1;
            $earth = Stem::find(10);
        }
        if($type == "nw"){
            $num = 6;
            $earth = Stem::find(6);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function six($type){
        if($type == "se"){
            $num = 5;
            $earth = Stem::find(3);
        }
        if($type == "s"){
            $num = 1;
            $earth = Stem::find(8);
        }
        if($type == "sw"){
            $num = 3;
            $earth = Stem::find(10);
        }
        if($type == "e"){
            $num = 4;
            $earth = Stem::find(4);
        }
        if($type == "w"){
            $num = 8;
            $earth = Stem::find(6);
        }
        if($type == "ne"){
            $num = 9;
            $earth = Stem::find(7);
        }
        if($type == "n"){
            $num = 2;
            $earth = Stem::find(9);
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

    public function seven($type){
        if($type == "se"){
            $num = 6;
            $earth = Stem::find(4);
        }
        if($type == "s"){
            $num = 2;
            $earth = Stem::find(7);
        }
        if($type == "sw"){
            $num = 4;
            $earth = Stem::find(9);
        }
        if($type == "e"){
            $num = 5;
            $earth = Stem::find(10);
        }
        if($type == "w"){
            $num = 9;
            $earth = Stem::find(5);
        }
        if($type == "ne"){
            $num = 1;
            $earth = Stem::find(6);
        }
        if($type == "n"){
            $num = 3;
            $earth = Stem::find(8);
        }
        if($type == "nw"){
            $num = 8;
            $earth = Stem::find(2);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }

    public function eight($type){
        if($type == "se"){
            $num = 7;
            $earth = Stem::find(10);
        }
        if($type == "s"){
            $num = 3;
            $earth = Stem::find(6);
        }
        if($type == "sw"){
            $num = 5;
            $earth = Stem::find(8);
        }
        if($type == "e"){
            $num = 6;
            $earth = Stem::find(9);
        }
        if($type == "w"){
            $num = 1;
            $earth = Stem::find(2);
        }
        if($type == "ne"){
            $num = 2;
            $earth = Stem::find(5);
        }
        if($type == "n"){
            $num = 4;
            $earth = Stem::find(7);
        }
        if($type == "nw"){
            $num = 9;
            $earth = Stem::find(3);
        }

        return response()->json([
            'num' => $num,
            'earth' => $earth
        ]);
    }
}
