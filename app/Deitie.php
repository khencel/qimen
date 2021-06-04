<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deitie extends Model
{
    protected $guarded = [];

    public function represents(){
        return $this->hasMany(DeitieRepresents::class);
    }
    public function suitable(){
        return $this->hasMany(DeitieSuitable::class);
    }
    public function characteristic(){
        return $this->hasMany(DeitieCharacteristic::class);
    }
    public function colour(){
        return $this->hasMany(DeitieColour::class);
    }
    public function number(){
        return $this->hasMany(DeitieNumber::class);
    }
    public function shape(){
        return $this->hasMany(DeitieShape::class);
    }

    public function weather(){
        return $this->hasMany(DeitieWeather::class);
    }
    public function personality(){
        return $this->hasMany(DeitiePersonality::class);
    }
    public function environment(){
        return $this->hasMany(DeitieEnvironment::class);
    }
    public function people(){
        return $this->hasMany(DeitiePeople::class);
    }
    public function material(){
        return $this->hasMany(DeitieMaterial::class);
    }
    public function property(){
        return $this->hasMany(DeitieProperty::class);
    }
    public function career(){
        return $this->hasMany(DeitieCareer::class);
    }
    public function parts(){
        return $this->hasMany(DeitieParts::class);
    }
    public function temperament(){
        return $this->hasMany(DeitieTemperament::class);
    }
    public function nourishment(){
        return $this->hasMany(DeitieNourishment::class);
    }
    public function birth(){
        return $this->hasMany(DeitieBirth::class);
    }
    public function unsuitable(){
        return $this->hasMany(DeitieUnsuitable::class);
    }
    public function marriage(){
        return $this->hasMany(DeitieMarriage::class);
    }
    public function illness(){
        return $this->hasMany(DeitieIllness::class);
    }
    public function litigation(){
        return $this->hasMany(DeitieLitigation::class);
    }
    public function features(){
        return $this->hasMany(DeitieFeatures::class);
    }
    public function animal(){
        return $this->hasMany(DeitieAnimal::class);
    }
    public function communication(){
        return $this->hasMany(DeitieCommunication::class);
    }
    public function plants(){
        return $this->hasMany(DeitiePlants::class);
    }
}
