<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\YearChart;

class ChartController extends Controller
{
    public function chartName($id,$type){
        if($type == "month"){
            return view('chart.part_chart.part_chart_env',compact('id','type'));
        }
        if($type == "day"){
            return view('chart.part_chart.part_day_chart_env',compact('id','type'));
        }
    }

    public function chartCenter($id,$type){
        return view('chart.part_chart.chart_center',compact('id','type'));
    }

    public function chartSE($id,$type){
        return view('chart.part_chart.se_chart',compact('id','type'));
    }

    public function chartS($id,$type){
        return view('chart.part_chart.s_chart',compact('id','type'));
    }

    public function chartSW($id,$type){
        return view('chart.part_chart.sw_chart',compact('id','type'));
    }

    public function chartE($id,$type){
        return view('chart.part_chart.e_chart',compact('id','type'));
    }

    public function chartW($id,$type){
        return view('chart.part_chart.w_chart',compact('id','type'));
    }

    public function chartNE($id,$type){
        return view('chart.part_chart.ne_chart',compact('id','type'));
    }

    public function chartN($id,$type){
        return view('chart.part_chart.n_chart',compact('id','type'));
    }

    public function chartNW($id,$type){
        return view('chart.part_chart.nw_chart',compact('id','type'));
    }

    public function chartPreview($id,$type){
        return view('chart.part_chart.preview_chart',compact('id','type'));
    }

   
}
