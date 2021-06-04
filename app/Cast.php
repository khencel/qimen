<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cast extends Model
{
    protected $fillable = [
        'user_id','light','blessing','force'
    ];
}
