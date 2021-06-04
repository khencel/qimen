<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Door extends Model
{
    protected $guarded = [];

    public function description(){
        return $this->hasMany(DoorDescription::class);
    }
    public function attribute(){
        return $this->hasMany(DoorAttribute::class);
    }
    public function branch(){
        return $this->hasMany(DoorBranch::class);
    }
    public function envoy(){
        return $this->hasMany(DoorEnvoy::class);
    }
    public function achievement(){
        return $this->hasMany(DoorAchievement::class);
    }
    public function weather(){
        return $this->hasMany(DoorWeather::class);
    }
    public function personality(){
        return $this->hasMany(DoorPersonality::class);
    }
    public function geography(){
        return $this->hasMany(DoorGeography::class);
    }
    public function people(){
        return $this->hasMany(DoorPeople::class);
    }
    public function material(){
        return $this->hasMany(DoorMaterial::class);
    }
    public function property(){
        return $this->hasMany(DoorProperty::class);
    }
    public function career(){
        return $this->hasMany(DoorCareer::class);
    }
    public function part(){
        return $this->hasMany(DoorPart::class);
    }
    public function temperament(){
        return $this->hasMany(DoorTemperament::class);
    }
    public function nourishment(){
        return $this->hasMany(DoorNourishment::class);
    }
    public function birth(){
        return $this->hasMany(DoorBirth::class);
    }
    public function marriage(){
        return $this->hasMany(DoorMarriage::class);
    }
    public function illness(){
        return $this->hasMany(DoorIllness::class);
    }
    public function litigation(){
        return $this->hasMany(DoorLitigation::class);
    }
}
