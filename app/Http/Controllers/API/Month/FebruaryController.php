<?php

namespace App\Http\Controllers\API\Month;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;
use App\DayChart;


class FebruaryController extends Controller
{
    public function store($request,$last_chart){
        $minusDay = $request->total_days-18;
        $x = 1;
        $chart = YearChart::orderBy('id', 'desc')->first();
        $month_id = $chart->month_chart_id;
        for($i = 1;$i <= ($request->total_days - $minusDay);$i++){
            $my_chart = YearChart::create([
                'month_chart_id' => $month_id,
                'day_chart_id' => $last_chart > 60?$x++:$last_chart++,
                'month' => $request->month,
                'day' => $i,
                'year' => $request->year,
            ]);
            if($my_chart->month == 2 && $my_chart->day == 3){
                $month_id = $month_id+1;
            }
        }

        return $this->yangUpper($request,$month_id);
    }

    public function yangUpper($request,$month_id){
        $elementChart = YearChart::with('dayChart')->orderBy('id', 'desc')->skip(1)->take(1)->first();;
        $englishChart = YearChart::with('dayChart')->get()->last();
        $element = $elementChart->dayChart->element_id+1;
        $english = $englishChart->dayChart->english_id+1;

        if($element == 6){
            $element = 1;
        }

        if($english == 13){
            $english = 1;
        }
        
        $lower = DayChart::where('structure_type','Yang Structure')
                        ->where('cycle_type','Middle Cycle')
                        ->where('element_id', $element)
                        ->where('english_id', $english)
                        ->first();
        $x = 61;
        for($i = 19;$i <= $request->total_days;$i++){
            
            YearChart::create([
                'month_chart_id' => $month_id,
                'day_chart_id' => $lower->id > 120?$x++:$lower->id++,
                'month' => $request->month,
                'day' => $i,
                'year' => $request->year,
            ]);
        }
    }
}
