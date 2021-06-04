<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarComboTwo extends Model
{
    protected $fillable = [
        'star_id','door_id','hexagram','description','rating'
    ];

    public function door(){
        return $this->belongsTo(Door::class);
    }
}
