<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;
use App\HourChart;
use App\Calendar;
use App\HourChartSe;

use App\Http\Controllers\API\DunJia\YangDunJiaController;
use App\Http\Controllers\API\DunJia\FiveFakeController;
use App\Http\Controllers\API\DunJia\DeceptionController;
use App\Http\Controllers\API\DunJia\RisingPalaceController;
use App\Http\Controllers\API\DunJia\ReceivesEnvoyController;
use App\Repository\WandersController;
use App\Repository\DragonController;
use App\Repository\YangAusController;
use App\Repository\YangInausController;

class DunJiaController extends Controller
{
    public function getDunJia($structure,$category,$value,$id,$type){
        $yangDunJiaController = new YangDunJiaController();
        $fiveFakeController = new FiveFakeController();
        $deceptionController = new DeceptionController();
        $risingPalaceController = new RisingPalaceController();
        $receivesEnvoyController = new ReceivesEnvoyController();
        $wandersController = new WandersController();
        $dragonController = new DragonController();
        $yangAusController = new YangAusController();
        $yangInausController = new YangInausController();

        if($type == "hour"){
            $ids = $this->getDateIntervel($id,$value,$type);
            
        }
        if($type == "day"){
            $ids = $this->getDayIntervel($id); 
        }
        
        if($category == "nine-dun"){
            return $yangDunJiaController->value($value,$ids,$structure,$type);
        }
        if($category == "five-fake"){
            return $fiveFakeController->value($value,$ids,$structure,$type);
        }

        if($category == "deception"){
            return $deceptionController->value($value,$ids,$structure,$type);
        }

        if($category == "palace"){
            return $risingPalaceController->value($value,$ids,$structure,$type);
        }
        if($category == "envoy"){
            return $receivesEnvoyController->value($value,$ids,$structure,$type);
        }
        if($category == "wanders"){
            return $wandersController->value($value,$ids,$structure,$type);
        }
        if($category == "dragon"){
            return $dragonController->value($value,$ids,$structure,$type);
        }
        if($category == "bird" || $category == "quan" || $category == "xiang" || $category == "jade"){
            return $yangAusController->value($value,$ids,$structure,$type);
        }

        return $yangInausController->value($value,$ids,$structure,$type);
       
        
    }

    public function getDates($date){
        $date = explode(',',$date);
        $month = $date[0];
        // $month = 5;
        $day = $date[1];
        // $day = 1;
        $year = $date[2];
        $yearChart = YearChart::where('month',$month+1)
                        ->where('day',$day)
                        ->where('year',$year)
                        ->first();
                        
        return YearChart::where('id','>=',$yearChart->id)->limit(7)->get();
    }


    public function getDateList($id){
        $yearCharts = YearChart::with('dayChart')->where('id','>=',$id)->limit(7)->get();
        return $yearCharts;
    }

    public function getDayIntervel($id){
        
        $dayChart = array();
        $yearCharts = YearChart::with('dayChart')->where('id','>=',$id)->limit(7)->get();
        foreach ($yearCharts as $key => $value) {
            $dayChart[] = $value->day_chart_id;
        }
        return $dayChart;
    }

    public function getChartList($id){
        
        $yearCharts = YearChart::with('dayChart')->where('id','>=',$id)->limit(7)->get();
        $period = ["one","two","three","four","five","six","seven","eight","nine"];

        $stems = array();
        $structure = array();
        $type = array();
        $hours = array();
        
        foreach ($yearCharts as $yearChart) {
            $stems[] = $yearChart->dayChart->stem_id;
            $calendars = Calendar::where('month',$yearChart->month)
                                ->where('day',$yearChart->day)
                                ->where('year',$yearChart->year)
                                ->get();
            foreach ($calendars as $key => $calendar) {
                $structure[] = $calendar->period;
                $type[] = $calendar->structure;
            }
        } 
        
        foreach ($stems as $key => $stem) {
            $hourcharts = HourChart::with('hourStem')
                                    ->where('day_1_stem',$stem)
                                    ->where('structure',$period[$structure[$key]-1])
                                    ->where('is_yang',$type[$key])
                                    ->orWhere('day_2_stem',$stem)
                                    ->where('structure',$period[$structure[$key]-1])
                                    ->where('is_yang',$type[$key])
                                    ->get();                   
           $hours[] = $hourcharts;
        }
        return $hours;
    }
}
