<?php

namespace App\Http\Controllers\StructureType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class YangController extends Controller
{
    public function checkCycle($cycle,$numb){
        if($cycle == "Upper Cycle"){
            return $this->checkNumb($numb);
        }

        if($cycle == "Middle Cycle"){
            return $this->checkNumb($numb);
        }

        if($cycle == "Lower Cycle"){
            return $this->checkNumb($numb);
        }
    }

    public function checkNumb($numb){
        switch ($numb){
            case 1:
                return 9;
                break;
            case 2:
                return 8;
                break;
            case 3:
                return 7;
                break;
            case 4:
                return 6;
                break;
            case 5:
                return 5;
                break;
            case 6:
                return 2;
                break;
            case 7:
                return 3;
                break;
            case 8:
                return 4;
                break;
            case 9:
                return 10;
                break;
        }
    }
}
