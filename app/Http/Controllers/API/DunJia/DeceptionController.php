<?php

namespace App\Http\Controllers\API\DunJia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Modelist;

class DeceptionController extends Controller
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

    public function real($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getReal($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getReal($model,$ids,$structure);
        }
    }

    public function double($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getDouble($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getDouble($model,$ids,$structure);
        }
    }

    public function nobility($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getHeaven($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getHeaven($model,$ids,$structure);
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
