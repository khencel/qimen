<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeitieMarriage extends Model
{
    protected $table = 'deitie_marrieages';
    protected $fillable = [
        'deitie_id','value'
    ];
    public function deitie(){
        return $this->belongsTo(Deitie::class);
    }
}
