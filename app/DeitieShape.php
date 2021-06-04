<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeitieShape extends Model
{
    protected $fillable = [
        'deitie_id','value'
    ];
    public function deitie(){
        return $this->belongsTo(Deitie::class);
    }
}
