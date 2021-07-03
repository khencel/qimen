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
        $deity = Deitie::where('id',$format[2])->first();

        return response()->json([
            'heaven' => $heaven,
            'star' => $star,
            'deity' => $deity
        ]);
        
    }


    public function setFormat($num){
        // yi
        if($num == 1){
            $format = array(2,8,7);
        }
        //bing
        if($num == 2){
            $format = array(3,3,4);
        }
        // ding
        if($num == 3){
            $format = array(4,9,2);
        }
        //wu
        if($num == 4){
            $format = array(5,7,8);
        }
        // Ji
        if($num == 5){
            $format = array(6,5,10);
        }
        // geng
        if($num == 6){
            $format = array(7,1,1);
        }
        // xin
        if($num == 7){
            $format = array(8,6,10);
        }
        // ren
        if($num == 8){
            $format = array(9,5,3);
        }
        //gui
        if($num == 9){
            $format = array(10,4,5);
        }
        
        return $format;
    }
}
