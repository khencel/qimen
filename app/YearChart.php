<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class YearChart extends Model
{
    protected $guarded = [];

    public function dayChart(){
        return $this->belongsTo(DayChart::class);
    }

    public function monthChart(){
        return $this->belongsTo(YinChart::class);
    }
}
