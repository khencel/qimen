<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stem extends Model
{
    protected $guarded = [];

    public function nameQimen(){
        return $this->hasMany(StemNameQimen::class);
    }

    public function represent(){
        return $this->hasMany(StemRepresent::class);
    }

    public function month(){
        return $this->hasMany(StemMonth::class);
    }

    public function astronomy(){
        return $this->hasMany(StemAstronomy::class);
    }

    public function environment(){
        return $this->hasMany(StemEnvironment::class);
    }
    public function people(){
        return $this->hasMany(StemPeople::class);
    }
    public function material(){
        return $this->hasMany(StemMaterial::class);
    }
    public function building(){
        return $this->hasMany(StemBuilding::class);
    }
    public function career(){
        return $this->hasMany(StemCareer::class);
    }
    public function nourishment(){
        return $this->hasMany(StemNourishment::class);
    }
    public function characteristic(){
        return $this->hasMany(StemCharacteristic::class);
    }
    public function fitness(){
        return $this->hasMany(StemFitness::class);
    }
    public function voice(){
        return $this->hasMany(StemVoice::class);
    }
    public function organ(){
        return $this->hasMany(StemOrgan::class);
    }
    public function part(){
        return $this->hasMany(StemPart::class);
    }
    public function taste(){
        return $this->hasMany(StemTaste::class);
    }
    public function colour(){
        return $this->hasMany(StemColour::class);
    }

}
