<?php

namespace App\Http\Controllers\Symbols;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Door;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;

class DoorController extends Controller
{

    public function doorValidation($door){
        if($door == 3){
            return 8;
        }
        if($door == 8){
            return 3;
        }
        if($door == 2){
            return 5;
        }
        if($door == 5){
            return 2;
        }
        if($door == 4){
            return 6;
        }
        if($door == 6){
            return 4;
        }
        if($door == 7){
            return 1;
        }
        if($door == 1){
            return 7;
        }
    }

    public function doors($id,$type,$part){
        $doors = array();
        if($part != 'se'){
            $se = SE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($se){
                $doors[] = $se->door_id != null?$se->door_id:'';
            }
        }
        
        if($part != 's'){
            $s = S::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($s){
                $doors[] = $s->door_id != null?$s->door_id:'';
            }
        }

        if($part != 'sw'){
            $sw = SW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($sw){
                $doors[] = $sw->door_id != null?$sw->door_id:'';
            }
        }

        if($part != 'e'){
            $e = E::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($e){
                $doors[] = $e->door_id != null?$e->door_id:'';
            }
        }

        if($part != 'w'){
            $w = W::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($w){
                $doors[] = $w->door_id != null?$w->door_id:'';
            }
        }

        if($part != 'ne'){
            $ne = NE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($ne){
                $doors[] = $ne->door_id  != null?$ne->door_id:'';
            }
        }

        if($part != 'n'){
            $n = N::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($n){
                $doors[] = $n->door_id != null?$n->door_id:'';
            }
        }

        if($part != 'nw'){
            $nw = NW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($nw){
                $doors[] = $nw->door_id != null?$nw->door_id:'';
            }
        }
        
        return Door::whereNotIn('id',$doors)->get();
    }
}
