<?php

namespace App\Http\Controllers\API\AutoFetch;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Controllers\API\AutoFetch\YangController;


class HourChartValidationController extends Controller
{
    public function number($category,$structure,$type){

        if($structure == "yang"){
            return $this->validateCategory($category,$type);
        }

        if($structure == "yin"){
            return "yin";
        }

    }

    public function validateCategory($category,$type){
        $yangController = new YangController();
        if($category == "one"){
            return $yangController->one($type);
        }
        if($category == "two"){
            return $yangController->two($type);
        }
        if($category == "three"){
            return $yangController->three($type);
        }
        if($category == "four"){
            return $yangController->four($type);
        }
        if($category == "five"){
            return $yangController->five($type);
        }
        if($category == "six"){
            return $yangController->six($type);
        }
        if($category == "seven"){
            return $yangController->seven($type);
        }
        if($category == "eight"){
            return $yangController->eight($type);
        }
        if($category == "nine"){

        }
    }

    public function door($door_id){
        if($door_id == 1){
            return 7;
        } 
        if($door_id == 2){
            return 5;
        } 
        if($door_id == 3){
            return 8;
        } 
        if($door_id == 4){
            return 6;
        } 
        if($door_id == 5){
            return 2;
        } 
        if($door_id == 6){
            return 4;
        } 
        if($door_id == 7){
            return 1;
        } 
        if($door_id == 8){
            return 3;
        } 
    }
}
