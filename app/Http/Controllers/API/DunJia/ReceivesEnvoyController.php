<?php

namespace App\Http\Controllers\API\DunJia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Modelist;

class ReceivesEnvoyController extends Controller
{
    private $dayChart;
    private $hourChart;

    public function __construct(){
        $this->dayChart = new DayChart();
        $this->hourChart = new HourChart();
    }

    public function value($value,$ids,$structure,$type){
        $model = Modelist::where('type',$type)->get();
        return $this->$value($model,$ids,$structure,$type);
    }

    public function yi($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->yi($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->yi($model,$ids,$structure);
        }
    }

    public function bing($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->bing($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->bing($model,$ids,$structure);
        }
    }

    public function ding($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->ding($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->ding($model,$ids,$structure);
        }
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
