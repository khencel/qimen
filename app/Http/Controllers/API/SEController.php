<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Symbols\DoorController;
use App\Http\Controllers\API\NWController;
use App\Http\Controllers\ChartType\MonthChartController;
use App\Http\Controllers\ChartType\DayChartController;
use Illuminate\Http\Request;
use App\SE;
use App\YinChart;
use App\DayChart;
use App\Center;

class SEController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
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
        $nwController = new NWController();
        $doorController = new DoorController();
        if($request->chart_type == "day"){
            $num = $this->checkChart($request->chart_type,$id);
        }

        if($request->chart_type == "month"){
            $num = $this->checkChart($request->chart_type,$id);
        }
        
        SE::updateOrCreate(['yin_chart_id' => $id,'chart_type' => $request->chart_type],[
            'chart_type' => $request->chart_type,
            'yin_chart_id' => $id,
            'stem_top_id' => $request->stem_top['id'],
            'star_id' => $request->star['id'],
            'deitie_id' => $request->deitie['id'],
            'stem_bottom_id' => $num[1],
            'door_id' => $request->door['id'],
            'number' => $num[0],
            'stem_1' => $request->stem_1,
            'stem_2' => $request->stem_2,
            'stem_3' => $request->stem_3,
            'stem_4' => $request->stem_4,
            'position_1' => $request->position_1['id'],
            'position_2' => $request->position_2['id'],
            'position_3' => $request->position_3['id'],
            'position_4' => $request->position_4['id'],
            'position_5' => $request->position_5['id'],
            'position_6' => $request->position_6['id'],
            'position_7' => $request->position_7['id'],
            'seTop' => implode(',',$request->seTop),
            'seLeft' => implode(',',$request->seLeft),
        ]);
        $nw = $doorController->doorValidation($request->door['id']);
        $doorNw = array($request->chart_type,$nw);
        $nwController->senw($doorNw,$id);
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

    public function seShow($id,$type){

        $monthChartController = new MonthChartController();
        $dayChartController = new DayChartController();

        if($type == "month"){
            return $monthChartController->seShow($id,$type);
        }

        if($type == "day"){
            return $dayChartController->seShow($id,$type);
        }
    }

    public function checkChart($type,$id){
        
        if($type == "month"){
            $se = YinChart::with('se')->where('id',$id)->first();
            return $this->checkYinType($se->yin_type);
            
        }
        if($type == "day"){
            $se = DayChart::where('id',$id)->first();
            return $this->checkDayChart($se->structure_type,$se->cycle_type,$se->number);
        }
    }

    public function checkYinType($yin_type){
        if($yin_type == "Yin One"){
            $se = array(9,4);
            return $se;
        }

        if($yin_type == "Yin Four"){
            $se = array(3,5);
            return $se;
        }
        if($yin_type == "Yin Seven"){
            $se = array(6,8);
            return $se;
        }
    }


    public function checkDayChart($structure_type,$cycle_type,$number){
        if($structure_type == "Yang Structure"){
            return $this->checkCycle($cycle_type,$number);
        }

        if($structure_type == "Yin Structure"){
            return $this->checkCycleYin($cycle_type,$number);
        }
    }

    public function checkCycle($cycle_type,$number){
        if($cycle_type == "Upper Cycle"){
            return $this->checkNumb($number);
        }

        if($cycle_type == "Middle Cycle"){
            return $this->checkNumb($number);
        }

        if($cycle_type == "Lower Cycle"){
            return $this->checkNumb($number);
        }
    }

    // stem
    // 1 = jia
    // 2 = yi
    // 3 = bing
    // 4 = ding
    // 5 = wu
    // 6 = ji
    // 7 = geng
    // 8 = xin
    // 9 = ren
    // 10 = gui

    public function checkNumb($number){
        switch ($number){
            case 1:
                return array(9,8);
                break;
            case 2:
                return array(1,7);
                break;
            case 3:
                return array(2,6);
                break;
            case 4:
                return array(3,5);
                break;
            case 5:
                return array(4,2);
                break;
            case 6:
                return array(5,3);
                break;
            case 7:
                return array(6,4);
                break;
            case 8:
                return array(7,10);
                break;
            case 9:
                return array(8,9);
                break;
        }
    }

    public function checkCycleYin($cycle_type,$number){
        if($cycle_type == "Upper Cycle"){
            return $this->checkNumbYin($number);
        }

        if($cycle_type == "Middle Cycle"){
            return $this->checkNumbYin($number);
        }

        if($cycle_type == "Lower Cycle"){
            return $this->checkNumbYin($number);
        }
    }

    // stem
    // 1 = jia
    // 2 = yi
    // 3 = bing
    // 4 = ding
    // 5 = wu
    // 6 = ji
    // 7 = geng
    // 8 = xin
    // 9 = ren
    // 10 = gui

    public function checkNumbYin($number){
        switch ($number){
            case 1:
                return array(9,4);
                break;
            case 2:
                return array(1,3);
                break;
            case 3:
                return array(2,2);
                break;
            case 4:
                return array(3,5);
                break;
            case 5:
                return array(4,6);
                break;
            case 6:
                return array(5,7);
                break;
            case 7:
                return array(6,8);
                break;
            case 8:
                return array(7,9);
                break;
            case 9:
                return array(8,10);
                break;
        }
    }
}
