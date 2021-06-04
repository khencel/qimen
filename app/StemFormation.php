<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StemFormation extends Model
{
    protected $fillable = [
        'stem_id',
        'earthly_stem',
        'english_term',
        'rating',
        'description'
    ];

    public function stem(){
        return $this->belongsTo(Stem::class,'earthly_stem');
    }

    public function stemList(){
        return $this->belongsTo(Stem::class,'stem_id');
    }
}
