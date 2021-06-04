<?php

namespace App\Repository\Diary;

use App\Http\Controllers\API\victory\DivineBlessingController;
use App\Http\Controllers\API\victory\DivineForceController;
use App\Http\Controllers\API\victory\DivineLightController;
use App\YearChart;
use App\User;

class GenerateVicDay
{
   public function getVicDay($email){
        $divineBlessingController = new DivineBlessingController();
        $divineForceController = new DivineForceController();
        $divineLightController = new DivineLightController();
        $user = $this->user($email);
        $get_month = $user->is_subscribed;
        $timestamp = strtotime($get_month);

        $month = date('m', $timestamp);
        $year = date('Y', $timestamp);
        $term = $user->no_of_terms;
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

        $blessingPalace = $user->cast->blessing;
        $force = $user->cast->force;
        $light = $user->cast->light;
        


        $blessing = $divineBlessingController->blessing($blessingPalace,$monthmin->id,$monthmax->id-1);
        $force = $divineForceController->force($force,$monthmin->id,$monthmax->id-1);
        $light = $divineLightController->light($light,$monthmin->id,$monthmax->id-1);

        $result = array_merge($blessing, $light,$force);
        return response()->json([
            'monthChart' => $result,
            'year' => $year,
            'month_list' => $get_month_list,
            'get_days' => $get_days
        ]); 
   }

   public function user($email){
        return User::with('cast')->where('email',$email)->first();
   }
}
