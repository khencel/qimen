<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HourChart;
use App\Door;
use App\Star;
use App\Stem;
use App\Number;
use App\Deitie;
use App\Position;
use App\Relationship;
use App\HourChartNW;
use App\Http\Controllers\API\AutoFetch\HourChartValidationController;

class HourChartController extends Controller
{
    public function hourChartYang(){
        $url = url()->current();
        // $url = "https://qimen.jennelcheng.com/hour/yang/one";
        
        $path = explode("/", $url);
        $basename = $path[4];
        $structure = $path[5];
        
        $charts = HourChart::with('day1Stem','element1','day2Stem','element2','hourStem','hourBranch','hourElement','hourEnglish')
                            ->where('structure',$structure)
                            ->where('is_yang',$basename)
                            ->get();
        
        return view('chart.hour_chart.yang_one.index',compact('basename','structure','charts'));
    }

    //Delete this function after you use

    public function generateChart(){
        
        $chart = $this->getLastChart();

        $stem = $chart->hour_stem_id+1;
        $branch = $chart->hour_branch_id+1;
        $english = $chart->hour_english_id+1;
        $stem1 = $chart->day_1_stem+1;
        $stem2 = $chart->day_2_stem+1;
        $structure1 = $chart->day_1_structure;
        $structure2 = $chart->day_2_structure;
        $element2 = $chart->day_2_element+1;

        for ($i=1; $i <= 12; $i++) { 
            $element = $this->getElement();
            $element = $element->hour_element_id+1;

            if($element == 6){
                $element = 1;
            }
            if($stem == 11){
                $stem = 1;
            }

            if($branch == 13){
                $branch = 1;
            }

            if($english == 13){
                $english = 1;
            }

            if($stem1 == 13){
                $stem1 = 1;
            }

            if($stem2 == 13){
                $stem2 = 1;
            }

            if($structure1 == "yang"){
                $structure1 = "yin";
            }

            if($structure2 == "yang"){
                $structure2 = "yin";
            }

            if($element2 == 6){
                $element = 1;
            }
            
            HourChart::create([
                'is_yang' => "yang",
                'structure' => "one",
                'day_1_stem' => $stem1,
                'day_1_structure' => $structure1,
                'day_1_element' => 5,
                'day_2_stem' => $stem2,
                'day_2_structure' => $structure2,
                'day_2_element' => $element2,
                'hour_stem_id' => $stem++,
                'hour_branch_id' => $branch++,
                'hour_element_id' => $element,
                'hour_english_id' => $english++,
                'center_id' => 9
            ]);
        }
        // return $chart;
    }

    public function getElement(){
        return HourChart::orderBy('id','DESC')->skip(1)->first();
        
    }

    public function getLastChart(){
        return HourChart::orderBy('id','DESC')->first();
    }

    //delete

    public function showChart($structure,$id){
        
        $url = url()->current();
        $path = explode("/", $url);
        $type = $path[6];
        $category = $path[5];
        $structure = $path[4];
        $id = $path[7];
        $day = null;
        $jiaFormation = null;
        if(isset($path[8])){
            $day = $path[8];
        }

        if(isset($path[9])){
            $jiaFormation = $path[9];
        }

        $sixBatallion = ['Wu','Zi','Xu','Shen','Chen','Yin'];
        
        $chart = HourChart::with('day1Stem','element1','day2Stem','element2','hourStem','hourBranch','hourElement','hourEnglish','center')->find($id);

        if($type == "preview"){
            return view('chart.hour_chart.yang_one.hour_chart',compact('chart','structure','category','id','type','day','sixBatallion','jiaFormation'));
        }
        if($type == "day1"){
            return view('chart.hour_chart.yang_one.hour_chart',compact('chart','structure','category','id','type','day','sixBatallion','jiaFormation'));
        }
        if($type == "day2"){
            return view('chart.hour_chart.yang_one.hour_chart',compact('chart','structure','category','id','type','day','sixBatallion','jiaFormation'));
        }

        if($type == "jia"){
            return view('chart.hour_chart.yang_one.hour_chart',compact('chart','structure','category','id','type','day','sixBatallion','jiaFormation'));
        }

        if($type == "se"){
            $label = "Xun(Southeast)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "s"){
            $label = "Li(South)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "sw"){
            $label = "Kun(Southwest)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "e"){
            $label = "Zhen(East)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "w"){
            $label = "Dui(West)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "n"){
            
            $label = "Kan(North)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "ne"){
            $label = "Gen(Northeast)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }

        if($type == "nw"){
            $label = "Qian(NorthWest)";
            return view('chart.hour_chart.yang_one.part_chart',compact('chart','label','type','id','category','structure'));
        }
    }

    public function fetchResources($category,$id,$type,$structure){
        $hourChartValidationController = new HourChartValidationController();
        
        $doorSelected = array();
        $starSelected = array();
        $deitieSelected = array();
        $stemSelected = array();
        $heavenStem = array();
        $starId = array();
        $deitieId = array();
        $doorId = array();

        $modelList = ['App\HourChartSe','App\HourChartSouth','App\HourChartSW','App\HourChartE','App\HourChartW','App\HourChartNE','App\HourChartN','App\HourChartNW'];

        for ($i=0; $i < count($modelList); $i++) { 
            
            $model = $modelList[$i]::where('chart_id',$id)
                                ->where('category',$category)
                                ->first();
            if(isset($model)){
                $stemSelected[] = $model['heaven_stem_id'];
                $starSelected[] = $model['star_id'];
                $deitieSelected[] = $model['deitie_id'];
                $doorSelected[] = $model['door_id'];
            }
                                
        }    
        
        if($type == "se"){
            $selectedModel = $modelList[0];
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $deitieId[] = $chart == null?:$chart->deitie_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "s"){
            $selectedModel = $modelList[1]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "sw"){
            $selectedModel = $modelList[2]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
            
        }
        if($type == "e"){
            $selectedModel = $modelList[3]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "w"){
            $selectedModel = $modelList[4]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "ne"){
            $selectedModel = $modelList[5]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "n"){
            $selectedModel = $modelList[6]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        if($type == "nw"){
            $selectedModel = $modelList[7]; 
            $chart = $selectedModel::where('chart_id',$id)->first();
            $heavenStem[] = $chart == null?:$chart->heaven_stem_id;
            $starId[] = $chart == null?:$chart->star_id;
            $doorId[] = $chart == null?null:$chart->door_id;
        }
        
        $stem = $this->remove($stemSelected,$heavenStem);
        $star = $this->remove($starSelected,$starId);
        $deitie = $this->remove($deitieSelected,$deitieId);
        $door = $this->remove($doorSelected,$doorId);
        
        $door = Door::whereNotIn('id',$door)->get();
        $star = Star::whereNotIn('id',$star)->get();
        $heaven_stem = Stem::whereNotIn('id',$stem)->get();
        $stem = Stem::all();
        $number = $hourChartValidationController->number($category,$structure,$type);
        $deity = Deitie::whereNotIn('id',$deitie)->get();
        $position1 = Position::where('set',1)->get(); 
        $position2 = Position::where('set',2)->get(); 
        $position = Position::all(); 
        $relationship = Relationship::all(); 
        $earth_stem = $hourChartValidationController->number($category,$structure,$type);

        return response()->json([
            'door' => $door,
            'star' => $star,
            'stem' => $stem,
            'number' => $number,
            'deity' => $deity,
            'position1' => $position1,
            'position2' => $position2,
            'position' => $position,
            'relationship' => $relationship,
            'earth_stem' => $earth_stem,
            'heaven_stem' => $heaven_stem,
        ]);
    }

    public function all($day,$branch,$period,$time,$is_yang){
        
        $structure = $this->numbConvert($period);
        $time = $time;
        $stem = Stem::where('value',$day)->first();
        $stem_id = $stem->id;
        
        $chart = HourChart::with('day1Stem','element1','day2Stem','element2','hourStem','hourBranch','hourElement','hourEnglish','center')
                            ->where('is_yang',$is_yang)
                            ->where('day_1_stem',$stem_id)
                            ->where('structure',$structure)
                            ->whereRaw($time.' BETWEEN ' . 'start_hour' . ' AND ' . 'end_hour' . '')
                            ->orWhere('is_yang',$is_yang)
                            ->where('day_2_stem',$stem_id)
                            ->where('structure',$structure)
                            ->whereRaw($time.' BETWEEN ' . 'start_hour' . ' AND ' . 'end_hour' . '')
                            ->first();
        
        if($day == "Jia"){
            $day = $day.'/'.$branch;
        }
        $section = "/img/".$day.'/';
       
        return response()->json([
            'chart' => $chart,
            'section' => $section
        ]); 
    }


    public function numbConvert($period){
        if($period == 1){
            return "one";
        }
        if($period == 2){
            return "two";
        }
        if($period == 3){
            return "three";
        }
        if($period == 4){
            return "four";
        }
        if($period == 5){
            return "five";
        }
        if($period == 6){
            return "six";
        }
        if($period == 7){
            return "seven";
        }
        if($period == 8){
            return "eight";
        }
        if($period == 9){
            return "nine";
        }
    }

    public function remove($array1,$array2){
        return array_diff($array1,$array2);
    }    
}
