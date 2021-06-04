<?php

namespace App\Http\Controllers\API\victory;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\VictoryChartType\MonthChartController;
use App\Http\Controllers\API\victory\DivineBlessingController;
use App\Http\Controllers\API\victory\DivineForceController;
use App\Http\Controllers\API\victory\DivineLightController;
use Illuminate\Http\Request;
use App\YearChart;
use App\Cast;
use App\GuestUser;


class Victory extends Controller
{
    public function castVictory(Request $request){
        return $this->charts();
    }

    public function charts(){
        $divineBlessingController = new DivineBlessingController();
        $divineForceController = new DivineForceController();
        $divineLightController = new DivineLightController();

        $get_month = \Auth::user()->is_subscribed;
        $timestamp = strtotime($get_month);

        $month = date('m', $timestamp);
        $year = date('Y', $timestamp);
        $term = \Auth::user()->no_of_terms;
        // $month = 10;
        // $year = 2019;

        $monthmin = Yearchart::where('month',$month)
                            ->where('year',$year)
                            ->orderBy('day','ASC')
                            ->first();

        $monthmax = Yearchart::where('month',$month)
                            ->where('year',$year+$term)
                            ->orderBy('day','ASC')
                            ->first();
  
        $get_month_list = Yearchart::select('month','year')->distinct('year','month')->whereBetween('id',[$monthmin->id,$monthmax->id-1])
        ->get();

        $get_days = Yearchart::whereBetween('id',[$monthmin->id,$monthmax->id-1])
        ->get();

        Cast::updateOrCreate([
            'user_id' => \Auth::user()->id,
            'light' => request()->light,
            'blessing' => request()->blessing,
            'force' => request()->force,
        ]);
        
        $blessing = $divineBlessingController->blessing(request()->blessing,$monthmin->id,$monthmax->id-1);
        $force = $divineForceController->force(request()->force,$monthmin->id,$monthmax->id-1);
        $light = $divineLightController->light(request()->light,$monthmin->id,$monthmax->id-1);

        $result = array_merge($blessing, $light,$force);
        return response()->json([
            'monthChart' => $result,
            'year' => $year,
            'month_list' => $get_month_list,
            'get_days' => $get_days
        ]); 
    }

    public function alreadyCast(){
        $user = \Auth::user()->id;
        return Cast::where('user_id',$user)->first();
    }

    public function alreadyCastGuest($id){
        return GuestUser::where('id',$id)->first();
    }
}
