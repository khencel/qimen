<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StemEnvironment extends Model
{
    protected $fillable = [
        'stem_id','value'
    ];
    public function stem(){
        return $this->belongsTo(Stem::class);
    }
}
