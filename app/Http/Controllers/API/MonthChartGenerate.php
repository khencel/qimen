<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\GenerateMonthChart;
use App\YinChart;

class MonthChartGenerate extends Controller
{
    public function generate($year){
        
        $attribute = $this->getAttribute($year);
        return $attribute;
    }

    public function getAttribute($year){
        return GenerateMonthChart::with('chart.stem','chart.branch','chart.element','chart.english','chart.yearChart')
                ->whereHas('chart.yearChart',function($q) use ($year){
                    $q->where('year',$year);
                })
                ->where('year',$year)->get();
    }

    public function getDetails($id){
        $chart = GenerateMonthChart::with('chart.stem','chart.branch','chart.element','chart.english','chart.yearChart')->where('month_chart_id',$id)->first();
        return response()->json([
            'constellation' => json_decode($chart->constellation,true),
            'chart' =>  $chart->chart,
            'level' =>  $chart->star_level
        ]);
    }
}
