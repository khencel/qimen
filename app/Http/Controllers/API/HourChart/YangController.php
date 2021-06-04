<?php

namespace App\Http\Controllers\API\HourChart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\HourChart;

class YangController extends Controller
{
    public function yangPart($palace,$number,$id){

        if($palace == "SE"){
            $modelName = 'App\HourChartSe';
        }

        if($palace == "S"){
            $modelName = 'App\HourChartSouth';
        }

        if($palace == "SW"){
            $modelName = 'App\HourChartSW';
        }

        if($palace == "E"){
            $modelName = 'App\HourChartE';
        }

        if($palace == "W"){
            $modelName = 'App\HourChartW';
        }

        if($palace == "NE"){
            $modelName = 'App\HourChartNE';
        }

        if($palace == "N"){
            $modelName = 'App\HourChartN';
        }

        if($palace == "NW"){
            $modelName = 'App\HourChartNW';
        }

        $model = app($modelName);
        $chart = $model::with('door','relationship','star','heaven_stem','earth_stem','number','deitie','formation1','formation2','formation3','formation4','formation5','formation6','formation7')
                    ->where('category',$number)
                    ->where('chart_id',$id)
                    ->first();

        $center = Hourchart::with('center')->find($id);
        
        return response()->json([
            'chart' => $chart,
            'center' => $center
        ]);
    }
}
