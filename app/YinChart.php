<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class YinChart extends Model
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
        return $this->hasOne(SE::class);
    }

    public function s(){
        return $this->hasOne(S::class);
    }

    public function sw(){
        return $this->hasOne(SW::class);
    }

    public function e(){
        return $this->hasOne(E::class);
    }

    public function w(){
        return $this->hasOne(W::class);
    }

    public function ne(){
        return $this->hasOne(NE::class);
    }
    public function n(){
        return $this->hasOne(N::class);
    }
    public function nw(){
        return $this->hasOne(NW::class);
    }

    public function yearChart(){
        return $this->hasOne(YearChart::class,'month_chart_id');
    }
}
