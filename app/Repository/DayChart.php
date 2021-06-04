<?php

namespace App\Repository;

class DayChart 
{
    public function getHeaven($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',3)
                                ->where('stem_bottom_id',4)
                                ->where('door_id',1)
                                ->whereHas('dayChart',function($que) use ($structure){
                                    $que->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',3)
                                ->where('stem_bottom_id',5)
                                ->where('door_id',1)
                                ->whereHas('dayChart',function($que) use ($structure){
                                    $que->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',3)
                                ->where('door_id',2)
                                ->whereHas('dayChart',function($que) use ($structure){
                                    $que->where('structure_type',$structure);
                                })
                                ->get();
           
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   
        return $chart;
    }

    public function getEarthly($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('stem_bottom_id',6)
                                ->where('door_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function getMan($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',4)
                                ->where('door_id',3)
                                ->where('deitie_id',4)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   
        return $chart;
    }

    public function getDragon($model,$ids,$structure){
            $chart = array();
            $model = app($model[2]->model);
            $partChart = $model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('door_id',3)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('door_id',1)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('door_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        
        return $chart;
    }

    public function getTiger($model,$ids,$structure){
        $chart = array();
        $model = app($model[3]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('stem_bottom_id',8)
                            ->where('door_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',7)
                            ->where('door_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function getWind($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        // \DB::connection()->enableQueryLog();
        $partChart = $model::
                            with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('door_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('door_id',1)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('door_id',3)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
        // return dd(\DB::getQueryLog());                    
        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function getCloud($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('stem_bottom_id',8)
                            ->where('door_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('stem_bottom_id',8)
                            ->where('door_id',1)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where('stem_bottom_id',8)
                            ->where('door_id',3)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();

        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function getDeitie($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',3)
                            ->where('door_id',1)
                            ->where('deitie_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();

        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function getGhost($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',4)
                            ->where(function($query){
                                $query->where('door_id',3)
                                      ->orWhere('door_id',1)
                                      ->orWhere('door_id',2);
                            })
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->where('deitie_id',3)
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->where(function($query){
                                $query->where('door_id',5)
                                      ->orWhere('door_id',1)
                                      ->orWhere('door_id',2);
                            })
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->where('deitie_id',3)
                            ->get();
        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }


    public function getReal($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function($que){
                                    $que->where('stem_top_id',2)
                                        ->orWhere('stem_top_id',3)
                                        ->orWhere('stem_top_id',4);
                                })
                                ->where(function($que){
                                    $que->where('door_id',3)
                                        ->orWhere('door_id',1)
                                        ->orWhere('door_id',2);

                                })
                                ->where('deitie_id',4)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function getDouble($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function($que){
                                    $que->where('stem_top_id',2)
                                        ->orWhere('stem_top_id',3)
                                        ->orWhere('stem_top_id',4);
                                })
                                ->where(function($que){
                                    $que->where('door_id',3)
                                        ->orWhere('door_id',1)
                                        ->orWhere('door_id',2);

                                })
                                ->where('deitie_id',3)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function getNobility($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function($que){
                                    $que->where('stem_top_id',2)
                                        ->orWhere('stem_top_id',3)
                                        ->orWhere('stem_top_id',4);
                                })
                                ->where(function($que){
                                    $que->where('door_id',3)
                                        ->orWhere('door_id',1)
                                        ->orWhere('door_id',2);

                                })
                                ->where('deitie_id',5)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function heavenly($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('door_id',8)
                                ->where('deitie_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',3)
                                ->where('door_id',8)
                                ->where('deitie_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->orWhereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',4)
                                ->where('door_id',8)
                                ->where('deitie_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function earthly($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::
                                with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function ($query){
                                    $query->where('stem_top_id',4)
                                        ->orWhere('stem_top_id',6)
                                        ->orWhere('stem_top_id',10);
                                })
                                ->where('door_id',5)
                                ->where(function($query){
                                    $query->where('deitie_id',3)
                                        ->orWhere('deitie_id',4)
                                        ->orWhere('deitie_id',5);
                                })
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function man($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::
                                with('dayChart')->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',9)
                                ->where('door_id',6)
                                ->where('deitie_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function deitie($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::
                                with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function($que){
                                        $que->where('stem_top_id',4)
                                                ->orWhere('stem_top_id',6)
                                                ->orWhere('stem_top_id',10);
                                })
                                ->where('door_id',4)
                                ->where(function($que){
                                        $que->where('deitie_id',3)
                                                ->orWhere('deitie_id',4)
                                                ->orWhere('deitie_id',5);
                                })
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function ghost($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::
                                with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where(function($que){
                                        $que->where('stem_top_id',4)
                                                ->orWhere('stem_top_id',6)
                                                ->orWhere('stem_top_id',10);
                                })
                                ->where('door_id',7)
                                ->where(function($que){
                                        $que->where('deitie_id',3)
                                                ->orWhere('deitie_id',4)
                                                ->orWhere('deitie_id',5);
                                })
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function noble1($model,$ids,$structure){
        $chart = array();
        $model = app($model[1]->model);
        $partChart = $model::with('dayChart')->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',2)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();

        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function noble2($model,$ids,$structure){
        $chart = array();
        $model = app($model[5]->model);
        $partChart = $model::with('dayChart')->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',3)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();

        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function noble3($model,$ids,$structure){
        $chart = array();
        $model = app($model[7]->model);
        $partChart = $model::with('dayChart')->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',4)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();

        foreach ($partChart as $key => $value) {
            $chart[] = $value;
        }
        return $chart;
    }

    public function yi($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[4],$model[5]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',2)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function bing($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[2],$model[6]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',3)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function ding($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[0],$model[3]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',4)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function sun($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[0],$model[2]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')
                    ->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',2)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function moon($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[0],$model[1]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')
                    ->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',3)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function star($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[0],$model[5]];
        foreach ($modelist as $key => $value) {   
            $partChart = $value->model::with('dayChart')
                    ->whereIn('yin_chart_id',$ids)
                    ->where('chart_type','day')
                    ->where('stem_top_id',4)
                    ->whereHas('dayChart',function($q) use ($structure) {
                        $q->where('structure_type',$structure);
                    })
                    ->get();
            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }
        return $chart;
    }

    public function real($model,$ids,$stem){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->whereHas('dayChart',function($que) use ($stem){
                                    $que->whereIn('stem_top_id',$stem)
                                    ->orWhere('stem_top_id',5);
                                })
                                ->where('stem_bottom_id',3)
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }
    // yang auspecious #8
    public function fall($model,$ids,$stem){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->whereHas('dayChart',function($que) use ($stem){
                                    $que->whereIn('stem_top_id',$stem)
                                    ->orWhere('stem_top_id',5);
                                })
                                ->where('stem_bottom_id',3)
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function getyi($model,$ids,$stem){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->whereHas('dayChart',function($que){
                                    $que->where('stem_top_id',2)
                                        ->orWhere('stem_top_id',3)
                                        ->orWhere('stem_top_id',4);
                                    
                                })
                                ->whereIn('stem_bottom_id',$stem)
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }
    public function zou($model,$ids,$stem){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->whereHas('dayChart',function($que){
                                    $que->where('stem_bottom_id',2)
                                        ->orWhere('stem_bottom_id',3)
                                        ->orWhere('stem_bottom_id',4);
                                    
                                })
                                ->whereIn('stem_top_id',$stem)
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;
            }
        }   

        return $chart;
    }

    public function maiden($model,$ids){
        $envoy = $this->envoyList($model,$ids);
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',4)
                                ->whereIn('door_id',$envoy)
                                ->get();

            foreach ($partChart as $key => $value) {
                $chart[] = $value;  
            }
        }   

        return $chart;
    }

    public function envoyList($model,$ids){
        $chart = array();
        $door = array();
        $starID = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('deitie_id',1)
                                ->get();

            foreach ($partChart as $key => $dayChart) {
                $starID[] = $dayChart->star_id;
                $door[] = $this->checkStar($dayChart->star_id);
                $chart[] = $dayChart;
            }
        }   

        return $door;
    }

    public function checkStar($id){
        if($id == 1){
            return 5;
        }
        if($id == 9){
            return 8;
        }
        if($id == 5){
            return 7;
        }
        if($id == 6){
            return 4;
        }
        if($id == 8){
            return 6;
        }
        if($id == 3){
            return 1;
        }
        if($id == 4){
            return 3;
        }
        if($id == 7){
            return 2;
        }
    }

}