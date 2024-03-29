<?php

namespace App\Http\Controllers\API\Dunjia\Hour;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Calendar;
use App\Stem;
use App\HourChart;
use App\Modelist;
use App\Formation;

use App\Http\Controllers\API\DunJia\Hour\Palace\SEController;


class HourController extends Controller
{
    private $SE;
    
    public function __construct(){
        $this->SE = new SEController();
    }

    public function getDunjia($month,$day,$year,$category,$value){
        $result = array();
        $ids = $this->getCalendarValidation($month,$day,$year);
        $stems = "";
        // return $ids;
        if($category == "nine-dun" && $value == "dragon"){
            $result[] = $this->SE->getN($ids,$category,$value,$stems);
            
            return $result;
        }

        if($category == "nine-dun" && $value == "tiger"){
            $result[] = $this->SE->getNE($ids,$category,$value,$stems);
            return $result;
        }

        if($category == "nine-dun" && $value == "wind"){
            $result[] = $this->SE->getSe($ids,$category,$value,$stems);
            return $result;
        }

        if($category == "palace" && $value == "noble1"){
            $result[] = $this->SE->getE($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "palace" && $value == "noble2"){
            $result[] = $this->SE->getS($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "palace" && $value == "noble3"){
            $result[] = $this->SE->getW($ids,$category,$value,$stems);
            return $result;
        }

        if($category == "envoy" && $value == "yi"){
            $result[] = $this->SE->getS($ids,$category,$value,$stems);
            $result[] = $this->SE->getNW($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "envoy" && $value == "bing"){
            $result[] = $this->SE->getSW($ids,$category,$value,$stems);
            $result[] = $this->SE->getN($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "envoy" && $value == "ding"){
            $result[] = $this->SE->getSe($ids,$category,$value,$stems);
            $result[] = $this->SE->getNE($ids,$category,$value,$stems);
            return $result;
        }

        if($category == "wanders" && $value == "sun"){
            $result[] = $this->SE->getSe($ids,$category,$value,$stems);
            $result[] = $this->SE->getN($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "wanders" && $value == "moon"){
            $result[] = $this->SE->getSe($ids,$category,$value,$stems);
            $result[] = $this->SE->getE($ids,$category,$value,$stems);
            return $result;
        }
        if($category == "wanders" && $value == "star"){
            $result[] = $this->SE->getSe($ids,$category,$value,$stems);
            $result[] = $this->SE->getS($ids,$category,$value,$stems);
            return $result;
        }

        if($category == "dragon" || $category == "xiang" || $category == "bird" || $category == "quan"){
            $stems = $this->getLeadStemHeaven($ids);
            // return $stems;
        }

        if($category == "jade"){
            $stems = $this->envoyList($ids);
            // return $stems;
        }
        
        $result[] = $this->SE->getSe($ids,$category,$value,$stems);
        $result[] = $this->SE->getS($ids,$category,$value,$stems);
        $result[] = $this->SE->getSW($ids,$category,$value,$stems);
        $result[] = $this->SE->getE($ids,$category,$value,$stems);
        $result[] = $this->SE->getW($ids,$category,$value,$stems);
        $result[] = $this->SE->getNE($ids,$category,$value,$stems);
        $result[] = $this->SE->getN($ids,$category,$value,$stems);
        $result[] = $this->SE->getNW($ids,$category,$value,$stems);
        return $result;
    }

    public function getLeadStemHeaven($ids){
        $stems = array();
        $models = Modelist::where('type','hour')->get();
        foreach ($models as $model) {
            $stem = $model->model::whereIn('chart_id',$ids)
                                    ->where('deitie_id',1)
                                    ->get();
            foreach ($stem as $key => $value) {
                $stems[] = $value->heaven_stem_id;
            }
        }
        $result = array_unique($stems);
        foreach ($result as $key => $value) {
            $test[] = $value;
        }

        return $test;
    }

    public function envoyList($ids){
        $chart = array();
        $starID = array();
        $door = array();
        $models = Modelist::where('type','hour')->get();
        foreach ($models as $key => $value) {
            $partChart = $value->model::whereIn('chart_id',$ids)
                                ->where('deitie_id',1)
                                ->get();
            foreach ($partChart as $hourChart) {
                $chart[] = $hourChart;
                $door[] = $this->checkStar($hourChart->star_id);
            }
            
        }   
        $result = array_unique($door);
        foreach ($result as $key => $value) {
            $test[] = $value;
        }

        return $test;
    }

    public function checkStar($id){
        if($id == 1){
            return 5;
        }
        if($id == 9){
            return 8;
        }
        if($id == 5){
            return 7;
        }
        if($id == 6){
            return 4;
        }
        if($id == 8){
            return 6;
        }
        if($id == 3){
            return 1;
        }
        if($id == 4){
            return 3;
        }
        if($id == 7){
            return 2;
        }
    }

    public function getCalendarValidation($month,$day,$year){
        $calendar = Calendar::where([
            'month' => $month,
            'day'   => $day,
            'year'  => $year
        ])->first();

        $stem = $calendar->stem;
        $structure = $calendar->structure;
        $period = $calendar->period;

        // if($calendar->stem == "Jia"){
        //     $stem = $this->battalion($calendar->branch);
        // }

        return $this->getchart($stem,$structure,$period);

    }

    

    public function getchart($stem,$structure,$period){
        $stem_id = Stem::where('value',$stem)->first('id');
        $stem = $stem_id->id;
        $period = $this->periodToNumb($period);

        return HourChart::where('day_1_stem',$stem)
                        ->where('is_yang',$structure)
                        ->where('structure',$period)
                        ->orWhere('day_2_stem',$stem)
                        ->where('is_yang',$structure)
                        ->where('structure',$period)
                        ->get('id');
    }

    public function battalion($branch){
        switch ($branch) {
            case 'Wu':
                return "Xin";
                break;
                
            case 'Zi':
                return "Wu";
                break;

            case 'Xu':
                return "Ji";
                break;

            case 'Shen':
                return "Yi";
                break;

            case 'Chen':
                return "Ren";
                break;

            case 'Yin':
                return "Gui";
                break;
        }
    }

    public function periodToNumb($period){
        
        switch ($period) {
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
        }
    }

    public function formation(){
        return Formation::all();
    }

}
