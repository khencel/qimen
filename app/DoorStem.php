<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoorStem extends Model
{
    protected $fillable = [
        'door_id','stem_id','description'
    ];

    public function stem(){
        return $this->belongsTo(Stem::class);
    }
}
