<?php

namespace App\Http\Controllers\API\victoryChartType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Year;
use App\YinChart;
use App\NE;

class MonthChartController extends Controller
{
   public function getMonthChart($request){
       
        $victory_start = array();
        $chart_list = array();
            
        $start = Year::where('year',$request->year)->first();
        
        $id = YinChart::where('yin_type',"Yin Four")
                        ->where('element_id',$start->element_id)
                        ->where('english_id',$start->english_id)
                        ->first();

        $yin_id = $id->id;
        for($i = 1;$i <= 24;$i++){
            $chart_list[] = $yin_id;
            $yin_id++;
            if($yin_id == 121){
                $yin_id = 61;
            }
        }
    
        $month = YinChart::whereIn('id',$chart_list)->get();


        foreach ($month as $key => $value) {
            if(date('m',strtotime($value->start_date)) == $request->month){
                $victory_start[] = $value->id;
            }
        }

        if($request->light == "NE"){
            $chart_month = array();
            $devineLight = array();
            $lightMonthChart = array();
            $currentChart = array();
            
            if(in_array(61,$chart_list,true)){
                for($i = $victory_start[1];$i <= 120;$i++){
                    $currentChart[] = $i;
                }
    
                for($i = 61;$i <= $victory_start[0];$i++){
                    $currentChart[] = $i;
                }
                $chart_month = NE::with('monthChart.stem','monthChart.branch','monthChart.element','monthChart.english')
                            ->whereIn('yin_chart_id',$currentChart)
                            ->get();
            }else{
                $chart_month = NE::with('monthChart.stem','monthChart.branch','monthChart.element','monthChart.english')
                    ->whereBetween('yin_chart_id',[$victory_start[0],$victory_start[1]])
                    ->get();
            }
            
            foreach ($chart_month as $key => $value) {
                if($value->door_id == 1 || $value->deitie_id == 2){
                    $devineLight[] = $value;
                } 
            }

            foreach ($devineLight as $key => $value) {
                $lightMonthChart[] = $value->monthChart;
            }
            return $lightMonthChart;   
        }
   }
}
