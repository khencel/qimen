<?php

namespace App\Http\Controllers\Symbols;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Number;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;

class NumberController extends Controller
{
    public function numbers($id,$type,$part){
        $number = array();
        if($part != 'se'){
            $se = SE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($se){
                $number[] = $se->number != null?$se->number:'';
            }
        }
        
        if($part != 's'){
            $s = S::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($s){
                $number[] = $s->number != null?$s->number:'';
            }
        }

        if($part != 'sw'){
            $sw = SW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($sw){
                $number[] = $sw->number  != null?$sw->number:'';
            }
        }

        if($part != 'e'){
            $e = E::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($e){
                $number[] = $e->number  != null?$e->number:'';
            }
        }

        if($part != 'w'){
            $w = W::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($w){
                $number[] = $w->number  != null?$w->number:'';
            }
        }

        if($part != 'ne'){
            $ne = NE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($ne){
                $number[] = $ne->number  != null?$ne->number:'';
            }
        }

        if($part != 'n'){
            $n = N::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($n){
                $number[] = $n->number != null?$n->number:'';
            }
        }

        if($part != 'nw'){
            $nw = NW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($nw){
                $number[] = $nw->number != null?$nw->number:'';
            }
        }
        return Number::whereNotIn('number',$number)->get();
    }
    
}
