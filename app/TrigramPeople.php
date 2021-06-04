<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TrigramPeople extends Model
{
    protected $fillable = [
        'trigram_id',
        'value'
    ];

    public function trigram(){
        return $this->belongsTo(Trigram::class);
    }
}
