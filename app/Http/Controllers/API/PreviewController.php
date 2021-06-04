<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ChartType\MonthChartController;
use App\Http\Controllers\ChartType\DayChartController;
use Illuminate\Http\Request;
use App\SE;
use App\S;
use App\SW;
use App\E;
use App\W;
use App\NE;
use App\N;
use App\NW;
use App\Center;

class PreviewController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Center::with('stem')->where('yin_chart_id',$id)->first();
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
        //
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

    public function previewCenter($id,$type){
        return Center::with('stem','dayChart')->where('yin_chart_id',$id)
                                    ->where('chart_type',$type)
                                    ->first();
    }

    public function preview($id,$type,$chart){
       
        if($type == 'se'){
            $se = SE::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 's'){
            $se = S::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 'sw'){
            $se = SW::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 'e'){
            $se = E::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 'w'){
            $se = W::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 'ne'){
            $se = NE::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)
                    ->get();
        }

        if($type == 'n'){
            $se = N::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('yin_chart_id',$id)
                    ->where('chart_type',$chart)->get();
        }

        if($type == 'nw'){
            $se = NW::with('stem_top','star','deitie','stem_bottom','door','position_1','position_2','position_3','position_4','position_5','position_6','position_7')
                    ->where('chart_type',$chart)
                    ->where('yin_chart_id',$id)
                    ->get();
        }
        
        $center = Center::with('stem')
                        ->where('yin_chart_id',$id)
                        
                        ->first();
        return response()->json([
            'se' => $se,
            'center' => $center
        ]);
    }

    public function outside($id,$type){
        $se = SE::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $s = S::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $sw = SW::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $e = E::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $w = W::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $ne = NE::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();
        $nw = NW::where('yin_chart_id',$id)
                    ->where('chart_type',$type)
                    ->first();

        $n = N::where('yin_chart_id',$id)
        ->where('chart_type',$type)
        ->first();

        return response()->json([
            'se' => $se,
            's' => $s,
            'sw' => $sw,
            'e' => $e,
            'w' => $w,
            'ne' => $ne,
            'nw' => $nw,
            'n' => $n,
        ]);
    }
}
