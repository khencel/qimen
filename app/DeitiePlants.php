<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeitiePlants extends Model
{
    protected $fillable = [
        'deitie_id','value'
    ];
    public function deitie(){
        return $this->belongsTo(Deitie::class);
    }
}
