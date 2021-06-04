<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GuestUser extends Model
{
    protected $fillable = [
        'user_id','first_name','last_name','date_of_birth','time_of_birth','divine_light','divine_blessing','divine_force'
    ];
}
