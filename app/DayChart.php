<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DayChart extends Model
{
    protected $guarded = [];
    public function stem(){
        return $this->belongsTo(Stem::class);
    }

    public function branch(){
        return $this->belongsTo(Branch::class);
    }

    public function element(){
        return $this->belongsTo(Element::class);
    }

    public function english(){
        return $this->belongsTo(English::class);
    }

    public function se(){
        return $this->belongsTo(SE::class,'id','yin_chart_id');
    }

    public function s(){
        return $this->belongsTo(S::class,'id','yin_chart_id');
    }

    public function sw(){
        return $this->belongsTo(SW::class,'id','yin_chart_id');
    }

    public function e(){
        return $this->belongsTo(E::class,'id','yin_chart_id');
    }

    public function w(){
        return $this->belongsTo(W::class,'id','yin_chart_id');
    }

    public function ne(){
        return $this->belongsTo(NE::class,'id','yin_chart_id');
    }
    public function n(){
        return $this->belongsTo(N::class,'id','yin_chart_id');
    }
    public function nw(){
        return $this->belongsTo(NW::class,'id','yin_chart_id');
    }
}
