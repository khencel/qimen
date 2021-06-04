<?php

namespace App\Repository;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Repository\GetLeadStemDayChart;
use App\Modelist;

class DragonController extends Controller
{
    private $dayChart;
    private $hourChart;
    private $leadStem;

    public function __construct(){
        $this->dayChart = new DayChart();
        $this->hourChart = new HourChart();
        $this->leadStem = new GetLeadStemDayChart();
    }

    public function value($value,$ids,$structure,$type){
        $model = Modelist::where('type',$type)->get();
        $heavenStem = "";

        if($type == "hour"){
            $newIds = array();
            foreach ($ids as $key => $value) {
                $heavenStem = $this->getHeavenStem($model,$ids[$key]);
                $newIds[] = $this->real($model,$ids[$key],$heavenStem,$type,$structure);
            }
            
            $realId = call_user_func_array('array_merge', $newIds);
            return $realId;
        }

        return $this->$value($model,$ids,$heavenStem,$type,$structure);
        
    }


    public function real($model,$ids,$heavenStem,$type,$structure){ 
        if($type == "hour"){
            $chart = array();
            foreach ($model as $key => $value) {
                $partChart = $value->model::with('hour.hourStem','hour.hourBranch','hour.hourElement','hour.hourEnglish')
                                    ->whereIn('chart_id',$ids)
                                    ->whereHas('hour',function($q) use ($heavenStem){
                                        $q->whereIn('heaven_stem_id',$heavenStem)
                                        ->orWhere('heaven_stem_id',5);
                                    })
                                    ->where('earth_stem_id',3)
                                    ->get();
    
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }   
    
            return $chart;
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            $stem = $this->leadStem->getstem($model,$ids);
            return $this->dayChart->real($model,$ids,$stem);
        }
       
    }

    public function getHeavenStem($model,$ids){
        $heavenStem = array();
        $chart = array();
        $stem = array();

        foreach ($model as $key => $value) {
            $partChart = $value->model::whereIn('chart_id',$ids)
                                ->where('deitie_id',1)
                                ->get();
            foreach ($partChart as $hourChart) {
                $chart[] = $hourChart;
                $stem[] = $hourChart->heaven_stem_id;
            }
        }

        return $stem;
    }

    public function structureConvert($structure){
        if($structure == "yang"){
            return "Yang Structure";
        }
        if($structure == "yin"){
            return "Yin Structure";
        }
    }
}
