<?php

namespace App\Http\Controllers\API\sample;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Star;
use App\Stem;
use App\Deitie;

class SampleController extends Controller
{
    public function set($num){
        $format = array();
        $format = $this->setFormat($num);
        
        $heaven = Stem::where('id',$format[0])->first();
        $star = Star::where('id',$format[1])->first();

        return response()->json([
            'heaven' => $heaven,
            'star' => $star,
        ]);
        
    }


    public function setFormat($num){
        if($num == 1){
            $format = array(2,8);
        }
        if($num == 2){
            $format = array(3,7);
        }
        if($num == 3){
            $format = array(4,1);
        }
        if($num == 4){
            $format = array(5,3);
        }
        if($num == 5){
            $format = array(6,9);
        }
        if($num == 6){
            $format = array(7,4);
        }
        if($num == 7){
            $format = array(8,5);
        }
        if($num == 8){
            $format = array(9,6);
        }
        if($num == 9){
            $format = array(10,1);
        }
        
        return $format;
    }
}
