<?php

namespace App\Http\Controllers\Symbols;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Deitie;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;

class DeitieController extends Controller
{
    public function deities($id,$type,$part){
        $deitie = array();
        if($part != 'se'){
            $se = SE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($se){
                $deitie[] = $se->deitie_id != null?$se->deitie_id:'';
            }
        }
        
        if($part != 's'){
            $s = S::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($s){
                $deitie[] = $s->deitie_id != null?$s->deitie_id:'';
            }
        }

        if($part != 'sw'){
            $sw = SW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($sw){
                $deitie[] = $sw->deitie_id != null?$sw->deitie_id:'';
            }
        }

        if($part != 'e'){
            $e = E::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($e){
                $deitie[] = $e->deitie_id != null?$e->deitie_id:'';
            }
        }

        if($part != 'w'){
            $w = W::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($w){
                $deitie[] = $w->deitie_id != null?$w->deitie_id:'';
            }
        }

        if($part != 'ne'){
            $ne = NE::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($ne){
                $deitie[] = $ne->deitie_id != null?$ne->deitie_id:'';
            }
        }

        if($part != 'n'){
            $n = N::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($n){
                $deitie[] = $n->deitie_id != null?$n->deitie_id:'';
            }
        }

        if($part != 'nw'){
            $nw = NW::where('yin_chart_id',$id)->where('chart_type',$type)->first();
            if($nw){
                $deitie[] = $nw->deitie_id != null?$nw->deitie_id:'';
            }
        }
        
        return Deitie::whereNotIn('id',$deitie)->get();
    }
}
