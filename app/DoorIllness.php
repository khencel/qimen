<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoorIllness extends Model
{
    protected $fillable = [
        'door_id','value'
    ];
    public function door(){
        return $this->belongsTo(Door::class);
    }
}
