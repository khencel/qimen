<?php

namespace App\Http\Controllers\API\victory;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;

class DivineLightController extends Controller
{
    public function light($light,$from,$to){
        request()->light = $light;
        $monthChart = array();
        if(request()->light == 'SE'){
            $palace = "se";
            $charts = YearChart::with('monthChart.se','dayChart.se','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'S'){
            $palace = "s";
            $charts = YearChart::with('monthChart.s','dayChart.s','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'SW'){
            $palace = "sw";
            $charts = YearChart::with('monthChart.sw','dayChart.sw','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'E'){
            $palace = "e";
            $charts = YearChart::with('monthChart.e','dayChart.e','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'W'){
            $palace = "w";
            $charts = YearChart::with('monthChart.w','dayChart.w','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'NE'){
            $palace = "ne";
            $charts = YearChart::with('monthChart.ne','dayChart.ne','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'N'){
            $palace = "n";
            $charts = YearChart::with('monthChart.n','dayChart.n','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        if(request()->light == 'NW'){
            $palace = "nw";
            $charts = YearChart::with('monthChart.nw','dayChart.nw','dayChart.element','dayChart.english')->whereBetween('id',[$from,$to])
                        ->get();
        }

        foreach($charts as $item){
            $month_list[] = $item;
            if($item->monthChart->$palace->door_id == 1 && $item->dayChart->$palace->deitie_id == 2){
                if(!in_array($item,$monthChart)){
                    $item->palace = $palace;
                    $item->divine = "DL";
                    $monthChart[] = $item;
                }
            }

            if($item->monthChart->$palace->deitie_id == 2 && $item->dayChart->$palace->door_id == 1){
                if(!in_array($item,$monthChart)){
                    $item->palace = $palace;
                    $item->divine = "DL";
                    $monthChart[] = $item;
                }
            }
        }

        return $monthChart;
    }
}
