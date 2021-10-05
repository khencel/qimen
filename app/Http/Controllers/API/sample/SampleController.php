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

    //star

    // assistant       1
    // Bird            2
    // Ambassador      3
    // Grass           4
    // Grain           5
    // Destructor      6
    // Heart           7
    // Pillar          8
    // Hero            9

    //deity

    // Chief       1
    // Heaven      2
    // Earth       3
    // Moon        4
    // Harmony     5
    // Phoenix     6
    // Tortoise    7
    // Tiger       8
    // Hook        9
    // Snake       10

    public function setFormat($num){
        // yi
        if($num == 1){
            $format = array(2,8,4);
        }
        //bing
        if($num == 2){
            $format = array(3,3,2);
        }
        // ding
        if($num == 3){
            $format = array(4,9,8);
        }
        //wu
        if($num == 4){
            $format = array(5,7,10);
        }
        // Ji
        if($num == 5){
            $format = array(6,3,4);
        }
        // geng
        if($num == 6){
            $format = array(7,1,7);
        }
        // xin
        if($num == 7){
            $format = array(8,6,3);
        }
        // ren
        if($num == 8){
            $format = array(9,5,5);
        }
        //gui
        if($num == 9){
            $format = array(10,4,1);
        }
        
        return $format;
    }
}
