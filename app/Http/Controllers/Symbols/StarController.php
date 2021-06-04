<?php

namespace App\Http\Controllers\Symbols;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\star;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;

class StarController extends Controller
{
    public function stars($id,$type,$part){
        $star = array();
        if($part != 'se'){
            $se = SE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($se){
                $star[] = $se->star_id != null?$se->star_id:'';
            }
        }
        
        if($part != 's'){
            $s = S::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($s){
                $star[] = $s->star_id != null?$s->star_id:'';
            }
        }

        if($part != 'sw'){
            $sw = SW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($sw){
                $star[] = $sw->star_id != null?$sw->star_id:'';
            }
        }

        if($part != 'e'){
            $e = E::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($e){
                $star[] = $e->star_id != null?$e->star_id:'';
            }
        }

        if($part != 'w'){
            $w = W::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($w){
                $star[] = $w->star_id != null?$w->star_id:'';
            }
        }

        if($part != 'ne'){
            $ne = NE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($ne){
                $star[] = $ne->star_id != null?$ne->star_id:'';
            }
        }

        if($part != 'n'){
            $n = N::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($n){
                $star[] = $n->star_id != null?$n->star_id:'';
            }
        }

        if($part != 'nw'){
            $nw = NW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($nw){
                $star[] = $nw->star_id != null?$nw->star_id:'';
            }
        }
        
        return Star::whereNotIn('id',$star)->get();
    }
}
