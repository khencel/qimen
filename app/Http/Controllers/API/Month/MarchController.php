<?php

namespace App\Http\Controllers\API\Month;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;

class MarchController extends Controller
{
    public function store($request,$last_chart){
        $x = 61;
        $y = 120;
        $chart = YearChart::orderBy('id', 'desc')->first();
        $month_id = $chart->month_chart_id;
        for($i = 1;$i <= $request->total_days; $i++){
            $my_chart = YearChart::create([
                'month_chart_id' => $month_id,
                'day_chart_id' => $last_chart > $y?$x++:$last_chart++,
                'month' => $request->month,
                'day' => $i,
                'year' => $request->year,
            ]);
            if($my_chart->month == 3 && $my_chart->day == 5){
                $month_id = $month_id+1;
            }
        }
    }
}
