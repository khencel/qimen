<?php

namespace App\Http\Controllers\API\TongShu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function getChief(Request $request){
       
        $date = new \App\YearChart();

        $chart_id = $date->where('month',$request->month)
                    ->where('day',$request->day)
                    ->where('year',$request->year)
                    ->first('day_chart_id');

        return getResultChief($chart_id['day_chart_id']);
        
    }
}

function getResultChief($id){
    $ne = new \App\NE();
    $n = new \App\N();
    $nw = new \App\NW();
    $e = new \App\E();
    $w = new \App\W();
    $se = new \App\SE();
    $s = new \App\S();
    $sw = new \App\SW();

    $check_ne = $ne->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();

    if($check_ne){
        return "NE";
    }

    $check_n = $n->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_n){
        return "N";
    }

    $check_nw = $nw->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_nw){
        return "NW";
    }

    $check_e = $e->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_e){
        return "E";
    }

    //w
    $check_w = $w->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_e){
        return "W";
    }

    //se
    $check_se = $se->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_se){
        return "SE";
    }

    //s
    $check_s = $s->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_s){
        return "S";
    }

    //SW
    $check_sw = $sw->where('deitie_id',1)
                ->where('yin_chart_id',$id)
                ->where('chart_type','day')
                ->first();
                
    if($check_sw){
        return "SW";
    }
}
