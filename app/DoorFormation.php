<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DoorFormation extends Model
{
    protected $fillable = [
        'door_id','trigram_id','hexagram','relationship','description'
    ];

    public function trigram(){
        return $this->belongsTo(Trigram::class);
    }
}
