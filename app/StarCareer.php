<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarCareer extends Model
{
    protected $fillable = [
        'star_id','value'
    ];
    public function star(){
        return $this->belongsTo(Star::class);
    }
}
