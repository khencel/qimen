<?php

namespace App\Http\Controllers\API\YearChart;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\Month\JanuaryController;
use App\Http\Controllers\API\Month\FebruaryController;
use App\Http\Controllers\API\Month\MarchController;
use App\Http\Controllers\API\Month\AprilController;
use App\Http\Controllers\API\Month\MayController;
use App\Http\Controllers\API\Month\JuneController;
use App\Http\Controllers\API\Month\JulyController;
use App\Http\Controllers\API\Month\AugustController;
use App\Http\Controllers\API\Month\SeptemberController;
use App\Http\Controllers\API\Month\OctoberController;
use App\Http\Controllers\API\Month\NovemberController;
use App\Http\Controllers\API\Month\DecemberController;
use Illuminate\Http\Request;
use App\YearChart;
use App\DayChart;
use App\Year;
use App\MonthPlate;
use App\YinChart;

class YearController extends Controller
{
    public function index(){
        return YearChart::with('dayChart.element','dayChart.english')->paginate(10);
    }
    public function getLasMonth(Request $request){
        $lastDate = YearChart::with('monthChart')->latest()->first();
        $last_month = $lastDate->month+1;
        $last_month_chart = $lastDate->month_chart_id+1;
        $last_year = $lastDate->year;

        if($last_month_chart == 61){
            $last_month_chart = 1;
        }

        if($last_month_chart == 121){
            $last_month_chart = 61;
        }

        if($last_month_chart == 181){
            $last_month_chart = 121;
        }

        if($last_month == 13){
            $last_month = 1;
            $last_year = $last_year+1;
            
        }

        if($last_month == 1){
            $last_month_chart = $this->getYinChart($lastDate);
        }
        
       return response()->json([
           'last_year' => $last_year,
           'lastMonth' => $last_month,
           'last_month_chart' => $last_month_chart,
       ]);

    }

    public function getYinChart($data){
       $last_year = $data->year+1;
       $year_chart = Year::where('year',$last_year)->first();
       $yin_type = MonthPlate::where([
                            'element_id' => $year_chart->element_id,
                            'english_id' => $year_chart->english_id
                        ])->first();
        $month = YearChart::orderBy('id', 'desc')->skip(1)->take(1)->first();
        $get_next_chart = YinChart::where('id',$month->month_chart_id+1)->first();
        $month_chart_id = YinChart::where([
                            'element_id' => $get_next_chart->element_id,
                            'english_id' => $get_next_chart->english_id,
                            'yin_type' => $yin_type->yin_type,
                        ])->first();
        return $month_chart_id->id;
        
    }

    
    public function create(Request $request){
       
        $decemberController = new DecemberController();
        $januaryController = new JanuaryController();
        $februaryController = new FebruaryController();
        $marchController = new MarchController();
        $aprilController = new AprilController();
        $mayController = new MayController();
        $juneController = new JuneController();
        $julyController = new JulyController();
        $augustController = new AugustController();
        $septemberController = new SeptemberController();
        $octoberController = new OctoberController();
        $novemberController = new NovemberController();
        
        $lastDate = YearChart::all()->last();
        $last_chart = $lastDate->day_chart_id+1;
        
        if($request->month == 1){
            return $januaryController->store($request,$last_chart);
        }

        if($request->month == 2){
            return $februaryController->store($request,$last_chart);
        }

        if($request->month == 3){
            return $marchController->store($request,$last_chart);
        }

        if($request->month == 4){
            return $aprilController->store($request,$last_chart);
        }

        if($request->month == 5){
            return $mayController->store($request,$last_chart);
        }

        if($request->month == 6){
            return $juneController->store($request,$last_chart);
        }

        if($request->month == 7){
            return $julyController->store($request,$last_chart);
        }

        if($request->month == 8){
            return $augustController->store($request,$last_chart);
        }

        if($request->month == 9){
            return $septemberController->store($request,$last_chart);
        }

        if($request->month == 10){
            return $octoberController->store($request,$last_chart);
        }

        if($request->month == 11){
            return $novemberController->store($request,$last_chart);
        }

        if($request->month == 12){
            $this->checkYinType();
            return $decemberController->store($request,$last_chart);
        }
    }

    public function checkYinType(){
        $year = Year::orderBy('id', 'desc')->skip(1)->take(1)->first();
        $newYear = $year->year+2;
        $element_id = $year->element_id+1;
        $english_id = $year->english_id+2;
        if($element_id == 6){
            $element_id = 1;
        }
        if($english_id == 13){
            $english_id = 1;
        }
        Year::create([
            'element_id' => $element_id,
            'english_id' => $english_id,
            'year' => $newYear,
        ]);
    }

    public function getMonthChart(){
        return YearChart::where('year',2021)->get()->unique('month');
    }
}
