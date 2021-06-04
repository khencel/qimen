<?php

namespace App\Repository;

class DayInauspecious 
{
    public function dragon($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',2)
                                ->where('stem_bottom_id',8)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function tiger($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',8)
                                ->where('stem_bottom_id',2)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function snake($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',10)
                                ->where('stem_bottom_id',4)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function phoenix($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',4)
                                ->where('stem_bottom_id',10)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function great($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where('stem_bottom_id',3)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function shimmering($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',3)
                                ->where('stem_bottom_id',7)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function war($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where('stem_bottom_id',7)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function big($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where('stem_bottom_id',10)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function noble($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where(function($que){
                                    $que->where('stem_bottom_id',2)
                                        ->orWhere('stem_bottom_id',3)
                                        ->orWhere('stem_bottom_id',4);
                                })
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function hidden($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where('stem_bottom_id',9)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    public function punishment($model,$ids,$structure){
        $chart = array();
        foreach ($model as $key => $value) {
            $partChart = $value->model::with('dayChart')
                                ->whereIn('yin_chart_id',$ids)
                                ->where('chart_type','day')
                                ->where('stem_top_id',7)
                                ->where('stem_bottom_id',6)
                                ->whereHas('dayChart',function($q) use ($structure) {
                                    $q->where('structure_type',$structure);
                                })
                                ->get();
            if($partChart){
                foreach ($partChart as $key => $value) {
                    $chart[] = $value;
                }
            }
        }   

        return $chart;
    }

    // public function flying($model,$ids){
    //     $chart = array();
    //     foreach ($model as $key => $value) {
    //         $partChart = $value->model::with('dayChart')
    //                             ->whereIn('yin_chart_id',$ids)
    //                             ->where('stem_top_id',7)
    //                             ->where('stem_bottom_id',6)
    //                             ->get();
    //         if($partChart){
    //             foreach ($partChart as $key => $value) {
    //                 $chart[] = $value;
    //             }
    //         }
    //     }   

    //     return $chart;
    // }
    
    // public function sitting($model,$ids){
    //     $chart = array();
    //     foreach ($model as $key => $value) {
    //         $partChart = $value->model::with('dayChart')
    //                             ->whereIn('yin_chart_id',$ids)
    //                             ->where('stem_top_id',7)
    //                             ->where('stem_bottom_id',6)
    //                             ->get();
    //         if($partChart){
    //             foreach ($partChart as $key => $value) {
    //                 $chart[] = $value;
    //             }
    //         }
    //     }   

    //     return $chart;
    // }

    public function controls($model,$ids,$structure){
        $chart = array();
        $model = app($model[2]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',3)
                            ->orWhereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',4)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function riZhi($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[4],$model[7]];
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

    public function grave($model,$ids,$structure){
        $chart = array();
        $model = app($model[3]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',4)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function ri($model,$ids,$structure){
        $chart = array();
        $modelist = [$model[4],$model[6]];
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

    public function yue($model,$ids,$structure){
        $chart = array();
        $model = app($model[4]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',3)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }
    
    public function crest($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',10)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function ji($model,$ids,$structure){
        $chart = array();
        $model = app($model[6]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',6)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function xin($model,$ids,$structure){
        $chart = array();
        $model = app($model[5]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',8)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function wu($model,$ids,$structure){
        $chart = array();
        $model = app($model[1]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',5)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function geng($model,$ids,$structure){
        $chart = array();
        $model = app($model[3]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',7)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }

    public function ren($model,$ids,$structure){
        $chart = array();
        $model = app($model[0]->model);
        $partChart = $model::with('dayChart')
                            ->whereIn('yin_chart_id',$ids)
                            ->where('chart_type','day')
                            ->where('stem_top_id',9)
                            ->whereHas('dayChart',function($q) use ($structure) {
                                $q->where('structure_type',$structure);
                            })
                            ->get();
      
            foreach ($partChart as $key => $value) {
                $chart[] = $value != ''?$value:null;
            }
       
        return $chart;
    }
}
