<?php

namespace App\Http\Controllers\ChartType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\DayChart;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;
use App\Center;

class DayChartController extends Controller
{
    public function store($data){
        
        return DayChart::create([
            'structure_type' => $data->structure_type,
            'number' => $data->yang_number,
            'cycle_type' => $data->cycle_type,
            'stem_id' => $data->stem,
            'branch_id' => $data->branch,
            'element_id' => $data->element,
            'english_id' => $data->english,
        ]);
    }

    public function updateChart($request,$id){
        DayChart::find($id)->update([
            'number' => $request->yang_number,
            'stem_id' => $request->stem,
            'branch_id' => $request->branch,
            'element_id' => $request->element,
            'english_id' => $request->english,
        ]);
    }

    public function show($id){
        $chart = DayChart::find($id);
        $chartDetails = DayChart::with('stem','branch','element','english')->find($id);

        return response()->json([
            'chart' => $chart,
            'chartDetails' => $chartDetails
        ]);
    }

    public function seShow($id,$type){
        $se = SE::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = SE::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = SE::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function sShow($id,$type){
        
        $se = S::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = S::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = S::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function swShow($id,$type){
        
        $se = SW::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = SW::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = SW::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function eShow($id,$type){
        
        $se = E::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = E::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = E::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function wShow($id,$type){
        
        $se = W::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = W::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = W::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function neShow($id,$type){
        
        $se = NE::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = NE::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = NE::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function nShow($id,$type){
        
        $se = N::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = N::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = N::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

    public function nwShow($id,$type){
        
        $se = NW::with('stem_top','star','deitie','stem_bottom','door')
                ->where('yin_chart_id',$id)
                ->where('chart_type',$type)
                ->first();
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        $stem = NW::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $position = NW::with('position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                        ->where('yin_chart_id',$id)
                        ->where('chart_type',$type)
                        ->first();
        
        return response()->json([
            'se' => $se,
            'center' => $center,
            'stem' => $stem,
            'position' => $position,
        ]);
    }

}
