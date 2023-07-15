<?php

namespace App\Repository\Diary;
use App\Calendar;
use App\HourChart;
use App\Modelist;
use App\Stem;
use App\Star;
use App\Door;
use App\Deitie;

class GenerateHourChart
{
    public function getChart($date,$hour){
        $folder = "";
        $calendar = $this->getDayStem($date);
        $jia = $this->getCalendar($date);

        return response()->json([
            'chart' => $this->validateHourChart($calendar,$hour),
            'folder' => '/diary/'.($calendar->stem == "Jia"?$jia->stem.'/'.$jia->branch.'/':$calendar->stem.'/'),
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

    public function getAsker($date,$id){
        $models = Modelist::where('type','hour')->get();
        $hourChart = HourChart::with('center')->find($id);

        $parts = array();
        $calendar = $this->getCalendar($date);
    
        

        $stem = ($calendar->stem == "Jia"?$this->getSixBat($calendar->branch):$calendar->stem);

        if($hourChart->center->value == $stem){
            foreach ($models as $key => $model) {
                $chart_parts = $model->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')
                                            ->where('chart_id',$id)
                                            ->whereHas('heaven_stem',function($q) use ($stem){
                                                $q->where('heaven',true);
                                            })
                                            ->first();
                if($chart_parts != null){
                    $parts[] = $chart_parts;    
                }
            }
            return $parts;  
        }

        foreach ($models as $key => $model) {
            $chart_parts = $model->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')
                                        ->where('chart_id',$id)
                                        ->whereHas('heaven_stem',function($q) use ($stem){
                                            $q->where('value',$stem);
                                        })
                                        ->first();
            if($chart_parts != null){
                $parts[] = $chart_parts;    
            }
        }
        return $parts;  
    }

    public function getCalendar($date){
        $date = explode(',',$date);
        return Calendar::where([
            'month' => $date[0],
            'day' => $date[1],
            'year' => $date[2]
        ])->first();
    }

    public function getOutcome($id){
        
        $models = Modelist::where('type','hour')->get();

        $hourChart = HourChart::with('hourStem')->where('id',$id)->first();

        $stem = ($hourChart->hourStem->id == 1?$this->getSixBatViaId($hourChart->hourBranch->id):$hourChart->hourStem->id);

        $part = $models->map(function($model)use($id,$stem){
            return $model->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')
                                            ->where('chart_id',$id)
                                            ->where('heaven_stem_id',$stem)
                                            ->first();
        })->filter()->first();

        if($part != ""){
            return $part;
        }
        
        return $models->map(function($model)use($id,$stem){
            return $model->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')
                                            ->where('chart_id',$id)
                                            ->where('heaven',true)
                                            ->first();
        })->filter()->first();

        
    }

    public function getSixBat($branch){
        switch ($branch) {
            case 'Wu':
                return "Xin";
                break;
                
            case 'Zi':
                return "Wu";
                break;

            case 'Xu':
                return "Ji";
                break;

            case 'Shen':
                return "Yi";
                break;

            case 'Chen':
                return "Ren";
                break;

            case 'Yin':
                return "Gui";
                break;
        }
    }

    public function getSixBatViaId($id){
        switch ($id) {
            case 7:
                return 8;
                break;
            case 1:
                return 5;
                break;
            case 11:
                return 6;
                break;
            case 9:
                return 2;
                break;
            case 5:
                return 9;
                break;
            case 3:
                return 10;
                break;
        }
    }

    public function getAttribute($attri,$keyword){
        switch ($attri) {
            case 'heaven':
                return Stem::with(
                                'nameQimen',
                                'represent',
                                'month',
                                'astronomy',
                                'environment',
                                'people',
                                'material',
                                'building',
                                'career',
                                'nourishment',
                                'characteristic',
                                'fitness',
                                'voice',
                                'organ',
                                'part',
                                'taste',
                                'colour'
                            )
                            ->where('id',$keyword)
                            ->first();        
                break;
        }
    }

    public function getStem($id){
        return Stem::with(
            'nameQimen',
            'represent',
            'month',
            'astronomy',
            'environment',
            'people',
            'material',
            'building',
            'career',
            'nourishment',
            'characteristic',
            'fitness',
            'voice',
            'organ',
            'part',
            'taste',
            'colour'
            )->find($id);  
    }

    public function getStar($id){
        return Star::with(
            'branch',
            'attribute',
            'characteristic',
            'represents',
            'weather',
            'appearance',
            'geography',
            'people',
            'material',
            'property',
            'career',
            'part',
            'temperament',
            'nourishment',
            'illness',
            'marriage'
            )->find($id);   
    }

    public function getDoor($id){
        return Door::with(
            'description',
            'attribute',
            'branch',
            'envoy',
            'achievement',
            'weather',
            'personality',
            'geography',
            'people',
            'material',
            'property',
            'career',
            'part',
            'temperament',
            'nourishment',
            'birth',
            'marriage',
            'illness',
            'litigation',
            )->find($id);   
    }

    public function getDeity($id){
        return Deitie::with(
            'represents',
            'suitable',
            'characteristic',
            'colour',
            'number',
            'shape',
            'weather',
            'personality',
            'environment',
            'people',
            'material',
            'property',
            'career',
            'parts',
            'temperament',
            'nourishment',
            'birth',
            'unsuitable',
            'marriage',
            'illness',
            'litigation',
            'features',
            'animal',
            'communication',
            'plants',
            )->find($id);   
    }
    public function getPart($data){
        $result = array();
        $index = 0;
        $model = Modelist::where('type','hour')->get();
        
        switch ($data['point']) {
            case 1:
                $index = 2;
                break;
            case 2:
                $index = 6;
                break;
            case 3:
                $index = 1;
                break;
            case 4:
                $index = 0;
                break;
            case 5:
                $result[] = $model->map(function($model)use($data){
                    return $model->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')
                                                    ->where('chart_id',$data['id'])
                                                    ->where('heaven',true)
                                                    ->first();
                })->filter()->first();
                return $result;
                break;
            case 6:
                $index = 4;
                break;
            case 7:
                $index = 7;
                break;
            case 8:
                $index = 3;
                break;
            case 9:
                $index = 5;
                break;
        }
        $result[] = $model[$index]->model::with('heaven_stem','earth_stem','star','deitie','door','formation1','formation2','formation3','formation4','formation5','formation6','formation7','relationship')->where('chart_id',$data['id'])->first();
        return $result;
    }

}
