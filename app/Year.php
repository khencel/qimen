<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Year extends Model
{
    protected $table = 'tb_year';
    protected $fillable = ['element_id','english_id','year'];
}
