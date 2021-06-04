<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{
    protected $guarded = [];

    public function stem(){
        return $this->belongsTo(Stem::class);
    }

    public function dayChart(){
        return $this->belongsTo(DayChart::class,'yin_chart_id');
    }
}
