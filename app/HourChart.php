<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HourChart extends Model
{
    public function day1Stem(){
        return $this->belongsTo(Stem::class,'day_1_stem');
    }
    public function day2Stem(){
        return $this->belongsTo(Stem::class,'day_2_stem');
    }

    public function element1(){
        return $this->belongsTo(Element::class,'day_1_element');
    }
    public function element2(){
        return $this->belongsTo(Element::class,'day_2_element');
    }
    public function hourStem(){
        return $this->belongsTo(Stem::class,'hour_stem_id');
    }
    public function hourBranch(){
        return $this->belongsTo(Branch::class,'hour_branch_id');
    }
    public function hourElement(){
        return $this->belongsTo(Element::class,'hour_element_id');
    }
    public function hourEnglish(){
        return $this->belongsTo(English::class,'hour_english_id');
    }

    public function center(){
        return $this->belongsTo(Stem::class,'center_id');
    }

    public function door(){
        return $this->belongsTo(Door::class);
    }

    protected $guarded = [];
}
