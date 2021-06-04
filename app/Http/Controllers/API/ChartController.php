<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\DataValidationController;
use App\Http\Controllers\ChartType\MonthChartController;
use App\Http\Controllers\ChartType\DayChartController;
use App\Http\Controllers\StructureType\YinController;
use App\Http\Controllers\StructureType\YangController;
use App\Http\Controllers\API\CenterController;
use Illuminate\Http\Request;
use App\YinChart;
use App\DayChart;
use App\Center;
use App\YearChart;

class ChartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        // return YinChart::with('stem','branch','element','english')->get();
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataValidationController = new DataValidationController();

        
        if($request->chart_type == "month"){
            if($request->yin_type == "Yin One"){
                $request['stem_id'] = 10;
            }

            if($request->yin_type == "Yin Four"){
                $request['stem_id'] = 2;
            }

            if($request->yin_type == "Yin Seven"){
                $request['stem_id'] = 7;
            }
            
            $dataValidationController->monthChartValidation($request);
            $monthChartController = new MonthChartController();
            $chart = $monthChartController->store($request);
            
        }

        if($request->chart_type == "day"){
            $dataValidationController->dayChartValidation($request);

            $request['stem_id'] = $this->checkStructure($request->structure_type,$request->cycle_type,$request->yang_number);

            $dayChartController = new DayChartController();
            $chart = $dayChartController->store($request);
            
        }
    
        $request['chart_id'] = $chart->id;
        
        $CenterController = new CenterController();
        $CenterController->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($request->type == "day"){
            $dayChartController = new DayChartController();
            return $dayChartController->updateChart($request, $id);
        }

        if($request->type == "month"){
            YinChart::find($id)->update([
                'yin_type' => $request->yin_type,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'stem_id' => $request->stem,
                'branch_id' => $request->branch,
                'element_id' => $request->element,
                'english_id' => $request->english,
            ]);
        }
        
        
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function fetchChart(){
        if(request()->chart == "month"){
            return YinChart::with('stem','branch','element','english')
                            ->where('yin_type',request()->yin_type)
                            ->latest()->paginate(10);
        }

        if(request()->chart == "day"){
            return DayChart::with('stem','branch','element','english')
            ->where(['structure_type' => request()->structure, 'cycle_type' => request()->cycle])
            ->latest()->paginate(10);
        }
    }

    public function showChart($id,$type){
        if($type == "month"){
            $monthChartController = new MonthChartController();
            return $monthChartController->show($id);
        }

        if($type == "day"){
            $dayChartController = new DayChartController();
            return $dayChartController->show($id);
        }
    }

    public function checkStructure($type,$cycle,$numb){
        $yinController = new YinController();
        $yangController = new YangController();
        if($type == "Yang Structure"){
            return $yangController->checkCycle($cycle,$numb);
        }

        if($type == "Yin Structure"){
            return $yinController->checkCycle($cycle,$numb);
        }
    }

    public function loadLastMonthChart(Request $request){
        return 123;
    }

    public function loadLastDayChart(Request $request){
        $count = 0;
        $request->chart_type == "day"?$yang_num = DayChart::latest()->first():$yang_num = YinChart::latest()->first();

        $stem = $yang_num->stem_id+1;
        $branch = $yang_num->branch_id+1;
        
        $english = $yang_num->english_id+1;

        if($english == 13){
            $english = 1;
        }

        if($stem == 11){
            $stem = 1;
        }

        if($branch == 13){
            $branch = 1;
        }

        if($request->chart_type == "day"){
            if($request->structure_type == 'Yang Structure'){
                $count = $yang_num->number+1;
                if($count == 10){
                    $count = 1;
                }
            }

            if($request->structure_type == 'Yin Structure'){
                $count = $yang_num->number-1;
                if($count == 0){
                    $count = 9;
                }
            }
        }
        
        
        $request->chart_type == "day"?$chart = DayChart::latest()->skip(1)->first():$chart = YinChart::latest()->skip(1)->first();;
        
        $element = $chart->element_id+1;
        if($element == 6){
            $element = 1;
        }
        
        return response()->json([
            'count' => $count,
            'element' => $element,
            'english' => $english,
            'stem' => $stem,
            'branch' => $branch,
        ]);
    }

    
}
