<?php

namespace App\Http\Controllers\API\LandingPage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\YearChart;
use App\Center;

class LandingPageController extends Controller
{
    public function getHomeChart(){
        $chart = YearChart::with('dayChart.stem','dayChart.branch','dayChart.element','dayChart.english')->where(['month' => request()->month,'day' => request()->day,'year' => request()->year])->first();
        return $chart;
    }
}
