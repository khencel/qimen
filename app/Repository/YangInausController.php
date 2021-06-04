<?php

namespace App\Repository;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repository\DayInauspecious;
use App\Repository\HourInauspecious;
use App\Modelist;

class YangInausController extends Controller
{
    private $dayChart;
    private $hourChart;

    public function __construct(){
        $this->dayChart = new DayInauspecious();
        $this->hourChart = new HourInauspecious();
    }

    public function value($value,$ids,$structure,$type){
        $model = Modelist::where('type',$type)->get();
        return $this->$value($model,$ids,$structure,$type);
    }

    public function dragon($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->dragon($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->dragon($model,$ids,$structure);
        }
    }

    public function tiger($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->tiger($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->tiger($model,$ids,$structure);
        }
    }

    public function snake($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->snake($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->snake($model,$ids,$structure);
        }
    }

    public function phoenix($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->phoenix($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->phoenix($model,$ids,$structure);
        }
    }

    public function great($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->great($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->great($model,$ids,$structure);
        }
    }

    public function shimmering($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->shimmering($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->shimmering($model,$ids,$structure);
        }
    }

    public function war($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->war($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->war($model,$ids,$structure);
        }
    }

    public function big($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->big($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->big($model,$ids,$structure);
        }
    }

    public function noble($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->noble($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->noble($model,$ids,$structure);
        }
    }

    public function hidden($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->hidden($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->hidden($model,$ids,$structure);
        }
    }

    public function punishment($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->punishment($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->punishment($model,$ids,$structure);
        }
    }

    public function flying($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->flying($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->flying($model,$ids,$structure);
        }
    }
    
    public function sitting($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->sitting($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->sitting($model,$ids,$structure);
        }
    }

    public function controls($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->controls($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->controls($model,$ids,$structure);
        }
    }

    public function riZhi($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->riZhi($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->riZhi($model,$ids,$structure);
        }
    }

    public function grave($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->grave($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->grave($model,$ids,$structure);
        }
    }

    public function ri($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->ri($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->ri($model,$ids,$structure);
        }
    }

    public function yue($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->yue($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->yue($model,$ids,$structure);
        }
    }
    
    public function crest($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->crest($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->crest($model,$ids,$structure);
        }
    }

    public function ji($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->ji($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->ji($model,$ids,$structure);
        }
    }

    public function xin($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->xin($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->xin($model,$ids,$structure);
        }
    }

    public function wu($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->wu($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->wu($model,$ids,$structure);
        }
    }

    public function geng($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->geng($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->geng($model,$ids,$structure);
        }
    }

    public function ren($model,$ids,$structure,$type){
        if($type == "hour"){
            return $this->hourChart->ren($model,$ids,$structure);
        }
        if($type == "day"){
            $structure = $this->structureConvert($structure);
            return $this->dayChart->ren($model,$ids,$structure);
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
