<?php

namespace App\Repository\Diary;
use App\Calendar;
use App\HourChart;

class GenerateHourChart
{
    public function getChart($date,$hour){
        $calendar = $this->getDayStem($date);
        return response()->json([
            'chart' => $this->validateHourChart($calendar,$hour),
            'folder' => '/img/'.$calendar->stem.'/'
        ]);
    }

    public function getDayStem($date){
        $selectedDate = explode(',',$date);
        return Calendar::where('month',$selectedDate[0])
                        ->where('day',$selectedDate[1])
                        ->where('year',$selectedDate[2])
                        ->first();
    }

    public function validateHourChart($calendar,$hour){
        $stem = $calendar->stem;
        $structure = $calendar->structure;
        $period = $calendar->period;
        $period = $this->convertPeriod($period);
        return HourChart::with('day1Stem')
                        ->where('is_yang',$structure)
                        ->where('structure',$period)
                        ->where(function($query) use ($stem){
                            $query->whereHas('day1Stem',function($que) use ($stem){
                                $que->where('value',$stem);
                            });
                            $query->orWhereHas('day2Stem',function($que) use ($stem){
                                $que->where('value',$stem);
                            });
                        })
                       
                        ->where('interval',$hour)
                        ->first();
    }

    public function convertPeriod($period){
        switch ($period) {
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
        }
    }
}
