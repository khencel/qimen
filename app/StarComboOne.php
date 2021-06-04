<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarComboOne extends Model
{
    protected $fillable = [
        'star_id','english_id','start_hour','end_hour','description','rating'
    ];

    public function english(){
        return $this->belongsTo(English::class);
    }
}
