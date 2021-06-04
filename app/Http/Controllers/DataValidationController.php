<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class DataValidationController extends Controller
{
    public function registerValidation($data){
        return $data->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'birth_date' => 'required',
            'birth_time' => 'required',
            'country' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed'
        ]);
    }

    public function monthChartValidation($data){
        return $data->validate([
            'yin_type' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'stem' => 'required',
            'branch' => 'required',
            'element' => 'required',
            'english' => 'required',
        ]);
    }

    public function dayChartValidation($data){
        return $data->validate([
            'yang_number' => 'required',
            'stem' => 'required',
            'branch' => 'required',
            'element' => 'required',
            'english' => 'required',
        ]);
    }

    public function profile($data){
        return $data->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'birth_date' => 'required',
            'birth_time' => 'required',
            'country' => 'required',
        ]);
    }
}
