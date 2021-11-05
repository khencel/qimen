<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GenerateMonthChart extends Model
{
    protected $guarded = [];
    public function chart(){
        return $this->belongsTo(YinChart::class,'month_chart_id');
    }
}
