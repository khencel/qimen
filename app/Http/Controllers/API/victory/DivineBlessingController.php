<?php

namespace App\Http\Controllers\API\victory;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;

class DivineBlessingController extends Controller
{
    public function blessing($blessing,$from,$to){
        request()->blessing = $blessing;
        $monthChart = array();
        if(request()->blessing == 'SE'){
            $palace = "se";
            $charts = YearChart::with('monthChart.se','dayChart.se','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'S'){
            $palace = "s";
            $charts = YearChart::with('monthChart.s','dayChart.s','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'SW'){
            $palace = "sw";
            $charts = YearChart::with('monthChart.sw','dayChart.sw','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'E'){
            $palace = "e";
            $charts = YearChart::with('monthChart.e','dayChart.e','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'W'){
            $palace = "w";
            $charts = YearChart::with('monthChart.w','dayChart.w','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'NE'){
            $palace = "ne";
            $charts = YearChart::with('monthChart.ne','dayChart.ne','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'N'){
            $palace = "n";
            $charts = YearChart::with('monthChart.n','dayChart.n','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->blessing == 'NW'){
            $palace = "nw";
            $charts = YearChart::with('monthChart.nw','dayChart.nw','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }


        foreach($charts as $item){
            if($item->monthChart->$palace->door_id == 1 && $item->dayChart->$palace->deitie_id == 1){
                if(!in_array($item,$monthChart)){
                    $item->palace = $palace;
                    $item->divine = "DB";
                    $monthChart[] = $item;
                }
            }

            if($item->monthChart->$palace->deitie_id == 1 && $item->dayChart->$palace->door_id == 1){
                if(!in_array($item,$monthChart)){
                    $item->palace = $palace;
                    $item->divine = "DB";
                    $monthChart[] = $item;
                }
            }
        }

        return $monthChart;
    }
}
