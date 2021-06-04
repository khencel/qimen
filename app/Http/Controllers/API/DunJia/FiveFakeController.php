<?php

namespace App\Http\Controllers\API\DunJia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Modelist;

class FiveFakeController extends Controller
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

    public function heavenly($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->heavenly($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->heavenly($model,$ids,$structure);
        }
    }

    public function earthly($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->earthly($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->earthly($model,$ids,$structure);
        }
    }

    public function man($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->man($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->man($model,$ids,$structure);
        }
    }

    public function deitie($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->deitie($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->deitie($model,$ids,$structure);
        }
    }

    public function ghost($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->ghost($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->ghost($model,$ids,$structure);
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
