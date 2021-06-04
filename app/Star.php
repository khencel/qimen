<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    protected $guarded = [];

    public function branch(){
        return $this->hasMany(StarBranch::class);
    }
    public function attribute(){
        return $this->hasMany(StarAttribute::class);
    }
    public function characteristic(){
        return $this->hasMany(StarCharacteristic::class);
    }
    public function represents(){
        return $this->hasMany(StarRepresents::class);
    }

    public function weather(){
        return $this->hasMany(StarWeather::class);
    }
    public function appearance(){
        return $this->hasMany(StarAppearance::class);
    }
    public function geography(){
        return $this->hasMany(StarGeography::class);
    }
    public function people(){
        return $this->hasMany(Starpeople::class);
    }
    public function material(){
        return $this->hasMany(StarMaterial::class);
    }
    public function property(){
        return $this->hasMany(StarProperty::class);
    }
    public function career(){
        return $this->hasMany(StarCareer::class);
    }
    public function part(){
        return $this->hasMany(StarPart::class);
    }
    public function temperament(){
        return $this->hasMany(StarTemperament::class);
    }
    public function nourishment(){
        return $this->hasMany(StarNourishment::class);
    }
    public function illness(){
        return $this->hasMany(StarIllness::class);
    }
    public function marriage(){
        return $this->hasMany(StarMarriage::class);
    }

    public function dayChart(){
        return $this->belongsTo(DayChart::class,'yin_chart_id');
    }

}
