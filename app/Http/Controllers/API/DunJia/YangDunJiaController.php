<?php

namespace App\Http\Controllers\API\DunJia;

use App\Http\Controllers\Controller;
use App\Repository\DayChart;
use App\Repository\HourChart;
use Illuminate\Http\Request;
use App\Modelist;

class YangDunJiaController extends Controller
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
            return $this->hourChart->getHeaven($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getHeaven($model,$ids,$structure);
        }
    }

    public function earthly($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getEarthly($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getEarthly($model,$ids,$structure);
        }
    }

    public function man($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getMan($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getMan($model,$ids,$structure);
        }
    }

    public function dragon($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getDragon($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getDragon($model,$ids,$structure);
        }
    }

    public function tiger($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getTiger($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getTiger($model,$ids,$structure);
        }
    }

    public function wind($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getWind($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getWind($model,$ids,$structure);
        }
    }

    public function cloud($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getCloud($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getCloud($model,$ids,$structure);
        }
    }

    public function deitie($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getDeitie($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getDeitie($model,$ids,$structure);
        }
    }

    public function ghost($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->getGhost($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->getGhost($model,$ids,$structure);
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
