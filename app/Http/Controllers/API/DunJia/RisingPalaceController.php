<?php

namespace App\Http\Controllers\API\DunJia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayChart;
use App\Repository\HourChart;
use App\Modelist;

class RisingPalaceController extends Controller
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

    public function noble1($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->noble1($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->noble1($model,$ids,$structure);
        }
    }

    public function noble2($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->noble2($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->noble2($model,$ids,$structure);
        }
    }

    public function noble3($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->noble3($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->noble3($model,$ids,$structure);
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
