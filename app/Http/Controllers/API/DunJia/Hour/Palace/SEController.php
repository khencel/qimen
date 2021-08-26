<?php

namespace App\Http\Controllers\API\DunJia\Hour\Palace;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\HourChartSe;
use App\HourChartSouth;
use App\HourChartSW;
use App\HourChartE;
use App\HourChartW;
use App\HourChartNE;
use App\HourChartN;
use App\HourChartNW;
use App\Http\Controllers\API\DunJia\Hour\Palace\Auspicious;

 class SEController extends Controller
{
    private $auspicious;
    public function __construct(){
        $this->auspicious = new Auspicious();
    }
    public function getSe($ids,$category,$value,$stems){
        $part = HourChartSe::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getS($ids,$category,$value,$stems){
        $part = HourChartSouth::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getSW($ids,$category,$value,$stems){
        $part = HourChartSW::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getE($ids,$category,$value,$stems){
        $part = HourChartE::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getW($ids,$category,$value,$stems){
        $part = HourChartW::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getNE($ids,$category,$value,$stems){
        $part = HourChartNE::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getN($ids,$category,$value,$stems){
        $part = HourChartN::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }

    public function getNW($ids,$category,$value,$stems){
        $part = HourChartNW::with('hour','door','star','heaven_stem','earth_stem','relationship')->whereIn('chart_id',$ids)->get();
        return $this->auspicious->getResult($part,$category,$value,$stems);
    }
}
