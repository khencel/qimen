<?php

namespace App\Repository\MonthChart;

use App\GenerateMonthChart;
use App\YearChart;
use Illuminate\Support\Facades\Http;

class GenerateChart
{
    public $url;
    public $token;

    public function __construct()
    {
        $this->token = env('TOKEN');
        $this->url = env("FORECASTING_URL");
    }
    public function generateMonth(){
        $year = $this->getLastYear();
        $charts = YearChart::where('year',$year+1)->get()->unique('month_chart_id');
        foreach ($charts as $chart) {
            $data = [
                'month_chart_id' => $chart->month_chart_id,
                'year' => $chart->year,
                'constellation' => $this->getCons(),
                'star_level' => $this->starLevel()
            ];
            GenerateMonthChart::create($data);
        }
        // return $this->getCons();
    }


    public function getLastYear(){
        $chart = GenerateMonthChart::orderBy('id','desc')->first();
        return $chart->year;
    }

    public function getCons(){
        return Http::get($this->url.'api/getContellation');
    }

    private function starLevel(){
        $numberArray = [0,1,2,3,4,5,6,7];
        shuffle($numberArray);

        $numbers = "";
        foreach ($numberArray as $number){
            $numbers .= $number;
        }

        return $numbers;

    }
}