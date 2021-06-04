<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarNourishment extends Model
{
    protected $fillable = [
        'star_id','value'
    ];
    public function star(){
        return $this->belongsTo(Star::class);
    }
}
