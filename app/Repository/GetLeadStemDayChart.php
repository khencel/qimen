<?php

namespace App\Repository;



class GetLeadStemDayChart
{
    public function getstem($models,$ids){
        $chart = array();
        $stem = array();
        foreach ($models as $model) {
            $partChart = $model->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('deitie_id',1)
                                ->get();

            foreach ($partChart as $dayChart) {
               $stem[] = $dayChart->stem_top_id;
            }
        }
        return $stem;
    }

    public function getEarthStem($models,$ids){
        $chart = array();
        $stem = array();
        foreach ($models as $model) {
            $partChart = $model->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('deitie_id',1)
                                ->get();

            foreach ($partChart as $dayChart) {
               $stem[] = $dayChart->stem_bottom_id;
            }
        }
        return $stem;
    }
}
