<?php

namespace App\Http\Controllers\API\Diary;

use App\Http\Controllers\Controller;
use App\Repository\Diary\GenerateHourChart;
use App\Repository\Diary\GenerateVicDay;
use Illuminate\Http\Request;

class HourChartController extends Controller
{
    private $hourChart;
    private $vicDay;

    public function __construct(){
        $this->hourChart = new GenerateHourChart();
        $this->vicDay = new GenerateVicDay();
    }

    public function getHourChart($date,$hour){
        return $this->hourChart->getChart($date,$hour);
    }

    public function getVictoryDay($email){
        return $this->vicDay->getVicDay($email);
    }

    public function getAsker($date,$id){
        return $this->hourChart->getAsker($date,$id);
    }

    public function getOutcome($id){
        return $this->hourChart->getOutcome($id);
    }

    public function getAttribute($attri,$keyword){
        return $this->hourChart->getAttribute($attri,$keyword);
    }

    public function getDetails($id,$attr){
        if($attr == 'heaven' || $attr == 'earthly'){
            return $this->hourChart->getStem($id);
        }

        if($attr == 'star'){
            return $this->hourChart->getStar($id);
        }
        
    }
}
