<?php

namespace App\Repository;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Repository\GetLeadStemDayChart;
use App\Modelist;

class YangAusController extends Controller
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
        $earthStem = "";
        if($type == "hour" && $value == "maiden"){
            $newIds = array();
            foreach ($ids as $key => $value) {
                $doors = $this->hourChart->envoyList($model,$ids[$key]);
                $newIds[] = $this->hourChart->maidenProcess($model,$doors,$ids[$key]);
            }
            $maidenId = call_user_func_array('array_merge', $newIds);
            return $maidenId;
        }

        if($type == "hour" && $value == "fall"){
            $newIds = array();
            
            foreach ($ids as $key => $value) {
                $earthStem = $this->getStem($model,$ids[$key]);
                $newIds[] = $this->fall($model,$ids[$key],$earthStem,$type,$structure);
            }
            $fallId = call_user_func_array('array_merge', $newIds);
            return $fallId;
        }

        if($type == "hour" && $value == "yi"){
            $newIds = array();
            
            foreach ($ids as $key => $value) {
                $earthStem = $this->getStem($model,$ids[$key]);
                $newIds[] = $this->yi($model,$ids[$key],$earthStem,$type,$structure);
            }
            $yiId = call_user_func_array('array_merge', $newIds);
            return $yiId;
        }

        if($type == "hour" && $value == "zou"){
            $newIds = array();
            
            foreach ($ids as $key => $value) {
                $earthStem = $this->getStem($model,$ids[$key]);
                $newIds[] = $this->zou($model,$ids[$key],$earthStem,$type,$structure);
            }
            $zouId = call_user_func_array('array_merge', $newIds);
            return $zouId;
        }

        return $this->$value($model,$ids,$earthStem,$type,$structure);
    }

    public function fall($model,$ids,$earthStem,$type,$structure){
        if($type == "hour"){
            $chart = array();
            foreach ($model as $key => $value) {
                $partChart = $value->model::with('hour.hourStem','hour.hourBranch','hour.hourElement','hour.hourEnglish')
                                    ->whereIn('chart_id',$ids)
                                    ->whereHas('hour',function($q) use ($earthStem){
                                        $q->whereIn('earth_stem_id',$earthStem)
                                        ->orWhere('earth_stem_id',5);
                                    })
                                    ->where('heaven_stem_id',3)
                                    ->get();

                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }   

            return $chart;
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            $stem = $this->leadStem->getEarthStem($model,$ids);
            return $this->dayChart->fall($model,$ids,$stem);
        }
        
    }

    public function yi($model,$ids,$earthStem,$type,$structure){
        if($type == "hour"){
            $chart = array();
            foreach ($model as $key => $value) {
                $partChart = $value->model::with('hour.hourStem','hour.hourBranch','hour.hourElement','hour.hourEnglish')
                                    ->whereIn('chart_id',$ids)
                                    ->whereHas('hour',function($q){
                                        $q->where('heaven_stem_id',2)
                                            ->orWhere('heaven_stem_id',3)
                                            ->orWhere('heaven_stem_id',4);
                                    })
                                    ->whereIn('earth_stem_id',$earthStem)
                                    ->get();

                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }   

            return $chart;
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            $stem = $this->leadStem->getEarthStem($model,$ids);
            return $this->dayChart->getyi($model,$ids,$stem);
        }
    }
    public function zou($model,$ids,$heavenStem,$type,$structure){
        if($type == "hour"){
            $chart = array();
            foreach ($model as $key => $value) {
                $partChart = $value->model::with('hour.hourStem','hour.hourBranch','hour.hourElement','hour.hourEnglish')
                                    ->whereIn('chart_id',$ids)
                                    ->whereHas('hour',function($q){
                                        $q->where('earth_stem_id',2)
                                            ->orWhere('earth_stem_id',3)
                                            ->orWhere('earth_stem_id',4);
                                    })
                                    ->whereIn('heaven_stem_id',$heavenStem)
                                    ->get();

                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }   

            return $chart;
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            $stem = $this->leadStem->getEarthStem($model,$ids);
            return $this->dayChart->zou($model,$ids,$stem);
        }
    }

    public function maiden($model,$ids,$structure,$type){
        $structure = $this->structureConvert($structure);
        return $this->dayChart->maiden($model,$ids,$structure);
    }

    public function structureConvert($structure){
        if($structure == "yang"){
            return "Yang Structure";
        }
        if($structure == "yin"){
            return "Yin Structure";
        }
    }

    public function getStem($model,$ids){
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
}
