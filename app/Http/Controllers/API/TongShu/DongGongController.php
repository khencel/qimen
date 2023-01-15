<?php

namespace App\Http\Controllers\API\TongShu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\SuitAvoid;
use App\YearChart;
use App\TimeStar;
use App\TimeStarValue;

class DongGongController extends Controller
{
    public function index(){
        $tongshu = Http::get(env('TONG_SHU').'api/tongshu/get-dropdown');
        
        $tongshu = json_decode($tongshu,true);
        $branch = new \App\Branch();
        $element = new \App\Element();
        
        
        return response()->json([
            'month'     =>  $tongshu['dong-gong-month'],
            'officer'   =>  $tongshu['day-officer'],
            'animal'    =>  $tongshu['animal'],
            'dongGong'  =>  $tongshu['dongGong'],
            'branch'    =>  $branch->all(),
            'element'   =>  $element->all(),
        ]);
        
    }

    public function getDongGong($id){
        $tongshu = Http::get(env('TONG_SHU').'api/tongshu/get-dropdown');
        
        return collect($tongshu['dongGong'])->filter(function($item) use ($id){
            if($item['dong_gong_month_id'] == $id){
                return $item;
            }
        });

    }

    public function update(Request $request){
        $tongshu = Http::post(env('TONG_SHU').'api/tongshu/update/dong-gong',$request->all());
        return $tongshu;
    }


    // Suit and Avoid 
    public function addSuitAvoid(Request $request){
        return SuitAvoid::create([
            'name'  => $request->suitAvoid
        ]);
    }

    public function suitAvoidList(){
        $suitAvoid = new \App\SuitAvoid();
        return $suitAvoid->orderBy('name')->get();
    }

    public function showSuitAvoid($id){
        return SuitAvoid::find($id);
    }

    public function updateSuitAvoid($id, Request $request){
        return SuitAvoid::find($id)->update([
            'name'  =>  $request->suit_avoid_name
        ]);
    }

    public function getDate($year,$day,$month){
        return YearChart::with('dayChart.stem','dayChart.branch')
                            ->where('year',$year)
                            ->where('day',$day)
                            ->where('month',$month)
                            ->get();
    }

    public function timeStar(){
        return TimeStar::all();
    }

    public function showTimeStar($id){
        return TimeStar::find($id);
    }


    public function showAllTimeStarValue(){
        return TimeStarValue::orderBy('name')->get();
    }

    public function showAllTimeStarStore(Request $request){
        return TimeStar::find($request->id)->update([
            'value_1'   =>  implode(',',$request->value_1_list),
            'value_2'   =>  implode(',',$request->value_2_list),
            'value_3'   =>  implode(',',$request->value_3_list),
            'value_4'   =>  implode(',',$request->value_4_list),
            'value_5'   =>  implode(',',$request->value_5_list),
            'value_6'   =>  implode(',',$request->value_6_list),
            'value_7'   =>  implode(',',$request->value_7_list),
            'value_8'   =>  implode(',',$request->value_8_list),
            'value_9'   =>  implode(',',$request->value_9_list),
            'value_10'   =>  implode(',',$request->value_10_list),
            'value_11'   =>  implode(',',$request->value_11_list),
            'value_12'   =>  implode(',',$request->value_12_list),
        ]);
    }
}
