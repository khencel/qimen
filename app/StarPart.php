<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarPart extends Model
{
    protected $fillable = [
        'star_id','value'
    ];
    public function star(){
        return $this->belongsTo(Star::class);
    }
}
