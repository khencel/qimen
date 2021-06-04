<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HourChartE extends Model
{
    protected $guarded = [];

    public function door(){
        return $this->belongsTo(Door::class);
    }

    public function relationship(){
        return $this->belongsTo(Relationship::class);
    }

    public function star(){
        return $this->belongsTo(Star::class);
    }

    public function heaven_stem(){
        return $this->belongsTo(Stem::class,'heaven_stem_id');
    }

    public function earth_stem(){
        return $this->belongsTo(Stem::class,'earth_stem_id');
    }

    public function number(){
        return $this->belongsTo(Number::class,'number_id');
    }

    public function deitie(){
        return $this->belongsTo(Deitie::class);
    }

    public function formation1(){
        return $this->belongsTo(Position::class,'formation_1');
    }
    public function formation2(){
        return $this->belongsTo(Position::class,'formation_2');
    }
    public function formation3(){
        return $this->belongsTo(Position::class,'formation_3');
    }
    public function formation4(){
        return $this->belongsTo(Position::class,'formation_4');
    }
    public function formation5(){
        return $this->belongsTo(Position::class,'formation_5');
    }
    public function formation6(){
        return $this->belongsTo(Position::class,'formation_6');
    }
    public function formation7(){
        return $this->belongsTo(Position::class,'formation_7');
    }
    public function hour(){
        return $this->belongsTo(HourChart::class,'chart_id');
    }
}
