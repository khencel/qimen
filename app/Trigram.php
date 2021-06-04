<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trigram extends Model
{
    protected $fillable = ["element","number"];

    public function people(){
        return $this->hasMany(TrigramPeople::class);
    }

    public function parts(){
        return $this->hasMany(TrigramParts::class);
    }

    public function animals(){
        return $this->hasMany(TrigramAnimal::class);
    }

    public function sickness(){
        return $this->hasMany(TrigramSickness::class);
    }

    public function colour(){
        return $this->hasMany(TrigramColour::class);
    }
}
