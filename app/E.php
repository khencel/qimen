<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class E extends Model
{
    protected $guarded = [];

    public function stem_top(){
        return $this->belongsTo(Stem::class,'stem_top_id');
    }

    public function stem_bottom(){
        return $this->belongsTo(Stem::class,'stem_bottom_id');
    }

    public function star(){
        return $this->belongsTo(Star::class);
    }

    public function deitie(){
        return $this->belongsTo(Deitie::class);
    }

    public function door(){
        return $this->belongsTo(Door::class);
    }

    public function position_1(){
        return $this->belongsTo(Position::class,'position_1');
    }

    public function position_2(){
        return $this->belongsTo(Position::class,'position_2');
    }

    public function position_3(){
        return $this->belongsTo(Position::class,'position_3');
    }

    public function position_4(){
        return $this->belongsTo(Position::class,'position_4');
    }

    public function position_5(){
        return $this->belongsTo(Position::class,'position_5');
    }

    public function position_6(){
        return $this->belongsTo(Position::class,'position_6');
    }

    public function position_7(){
        return $this->belongsTo(Position::class,'position_7');
    }

    public function dayChart(){
        return $this->belongsTo(DayChart::class,'yin_chart_id');
    }
}
