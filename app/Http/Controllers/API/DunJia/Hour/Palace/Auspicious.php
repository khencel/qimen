<?php

namespace App\Http\Controllers\API\DunJia\Hour\Palace;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Auspicious extends Controller
{
    public function getResult($part,$category,$value,$stems){
        
        if($category == "nine-dun" && $value == "heavenly"){
            return $this->nineDunHeaven($part);
        }

        if($category == "nine-dun" && $value == "earthly"){
            return $this->nineDunEarthly($part);
        }

        if($category == "nine-dun" && $value == "man"){
            return $this->nineDunMan($part);
        }

        if($category == "nine-dun" && $value == "dragon"){
            return $this->nineDragon($part);
        }

        if($category == "nine-dun" && $value == "tiger"){
            return $this->nineTiger($part);
        }

        if($category == "nine-dun" && $value == "wind"){
            return $this->nineWind($part);
        }

        if($category == "nine-dun" && $value == "cloud"){
            return $this->nineCloud($part);
        }

        if($category == "nine-dun" && $value == "deity"){
            return $this->nineDeity($part);
        }

        if($category == "nine-dun" && $value == "ghost"){
            return $this->nineGhost($part);
        }

        if($category == "five-fake" && $value == "heavenly"){
            return $this->fakeHeaven($part);
        }
        if($category == "five-fake" && $value == "earthly"){
            return $this->fakeEarthly($part);
        }

        if($category == "five-fake" && $value == "man"){
            return $this->fakeMan($part);
        }
        if($category == "five-fake" && $value == "deitie"){
            return $this->fakeDeity($part);
        }
        if($category == "five-fake" && $value == "ghost"){
            return $this->fakeGhost($part);
        }
        if($category == "deception"){
            $type = $category.$value;
            return $this->$type($part);
        }

        if($category == "palace"){
            $type = $category.$value;
            return $this->$type($part);
        }

        if($category == "envoy"){
            $type = $category.$value;
            return $this->$type($part);
        }

        if($category == "wanders"){
            $type = $category.$value;
            return $this->$type($part);
        }
        if($category == "dragon"){
            $type = $category.$value;
            return $this->$type($part,$stems);
        }

        if($category == "bird"){
            $type = $category.$value;
            return $this->$type($part,$stems);
        }

        if($category == "quan"){
            $type = $category.$value;
            return $this->$type($part,$stems);
        }

        if($category == "xiang"){
            $type = $category.$value;
            return $this->$type($part,$stems);
        }

        if($category == "jade"){
            $type = $category.$value;
            return $this->$type($part,$stems);
        }
    }

    public function nineDunHeaven($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 3 && $items->earth_stem_id == 4 && $items->door_id == 1){
                        $result = $items;
                    }   
                    
                    if($items->heaven_stem_id == 3 && $items->earth_stem_id == 5 && $items->door_id == 1){
                        $result = $items;
                    } 
                    
                    if($items->heaven_stem_id == 3 && $items->door_id == 2){
                        $result = $items;
                    }
                    return $result;
                })->filter();
    }

    public function nineDunEarthly($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 2 && $items->earth_stem_id == 6 && $items->door_id == 1){
                        $result = $items;
                    }   
                    return $result;
                })->filter();
    }

    public function nineDunMan($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 4 && $items->door_id == 3 && $items->deitie_id == 4){
                        $result = $items;
                    }   
                    return $result;
                })->filter();
    }

    public function nineDragon($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 2 && ($items->door_id == 3 || $items->door_id == 1 || $items->door_id == 2)){
                        $result = $items;
                    }   
                    return $result;
                })->filter();
    }

    public function nineTiger($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 2 && $items->earth_stem_id == 8 && $items->door_id == 2){
                        $result = $items;
                    } 
                    
                    if($items->heaven_stem_id == 7 && $items->door_id == 2){
                        $result = $items;
                    }   
                    return $result;
                })->filter();
    }

    public function nineWind($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 2 && ($items->door_id == 3 || $items->door_id == 1 || $items->door_id == 2)){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function nineCloud($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 2 && $items->earth_stem_id == 8 && $items->door_id == 2 && ($items->door_id == 3 || $items->door_id == 1 || $items->door_id == 2)){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function nineDeity($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 3 && $items->door_id == 1 && $items->deitie_id == 2){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function nineGhost($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if($items->heaven_stem_id == 4 && ($items->door_id == 3 || $items->door_id == 1 || $items->door_id == 2) && $items->deitie_id == 3){
                        $result = $items;
                    } 
                    if($items->heaven_stem_id == 2 && ($items->door_id == 5 || $items->door_id == 1 || $items->door_id == 2) && $items->deitie_id == 3){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function fakeHeaven($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(($items->heaven_stem_id == 2 || $items->heaven_stem_id == 4 || $items->heaven_stem_id == 4) && ($items->door_id == 8) && $items->deitie_id == 2){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function fakeEarthly($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 4 || 
                            $items->heaven_stem_id == 6 || 
                            $items->heaven_stem_id == 10
                        ) && 
                        (
                            $items->door_id == 5
                        ) && 
                        (
                            $items->deitie_id == 3 ||
                            $items->deitie_id == 4 ||
                            $items->deitie_id == 5 
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function fakeMan($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 9
                        ) && 
                        (
                            $items->door_id == 6
                        ) && 
                        (
                            $items->deitie_id == 2
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function fakeDeity($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 4 ||
                            $items->heaven_stem_id == 6 ||
                            $items->heaven_stem_id == 10
                        ) && 
                        
                            $items->door_id == 4
                         && 
                        (
                            $items->deitie_id == 3 ||
                            $items->deitie_id == 4 ||
                            $items->deitie_id == 5
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function fakeGhost($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 3 ||
                            $items->heaven_stem_id == 6 ||
                            $items->heaven_stem_id == 10
                        ) && 
                        (
                            $items->door_id == 7
                        ) && 
                        (
                            $items->deitie_id == 3 ||
                            $items->deitie_id == 4 ||
                            $items->deitie_id == 5
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function deceptionreal($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 2 ||
                            $items->heaven_stem_id == 3 ||
                            $items->heaven_stem_id == 4
                        ) && 
                        (
                            $items->door_id == 1 ||
                            $items->door_id == 2 ||
                            $items->door_id == 3
                        ) && 
                        (
                            $items->deitie_id == 4
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function deceptiondouble($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 2 ||
                            $items->heaven_stem_id == 3 ||
                            $items->heaven_stem_id == 4
                        ) && 
                        (
                            $items->door_id == 1 ||
                            $items->door_id == 2 ||
                            $items->door_id == 3
                        ) && 
                        (
                            $items->deitie_id == 3
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function deceptionnobility($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        (
                            $items->heaven_stem_id == 2 ||
                            $items->heaven_stem_id == 3 ||
                            $items->heaven_stem_id == 4
                        ) && 
                        (
                            $items->door_id == 1 ||
                            $items->door_id == 2 ||
                            $items->door_id == 3
                        ) && 
                        (
                            $items->deitie_id == 5
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function palacenoble1($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 2 
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function palacenoble2($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 3 
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function palacenoble3($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 4
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function envoyyi($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 2
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function envoybing($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 3
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function envoyding($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 4
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function wanderssun($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 2
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function wandersmoon($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 3
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function wandersstar($part){
        return collect($part)
                ->map(function($items){
                    $result = array();
                    if(
                        $items->heaven_stem_id == 4
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function dragonreal($part,$stems){
        
        return collect($part)
                ->map(function($items) use ($stems){
                    $result = array();
                    if(
                        ($items->heaven_stem_id == $stems[0] || 
                        $items->heaven_stem_id == $stems[1] || 
                        $items->heaven_stem_id == 5
                        ) &&
                        $items->earth_stem_id == 3
                         
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function birdfall($part,$stems){
        
        return collect($part)
                ->map(function($items) use ($stems){
                    $result = array();
                    if(
                        ($items->earth_stem_id == $stems[0] || 
                        $items->earth_stem_id == $stems[1] || 
                        $items->earth_stem_id == 5
                        ) &&
                        $items->heaven_stem_id == 3
                         
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function quanyi($part,$stems){
        return collect($part)
                ->map(function($items) use ($stems){
                    $result = array();
                    if(
                        ($items->earth_stem_id == $stems[0] || 
                        $items->earth_stem_id == $stems[1]
                        ) &&
                        (
                        $items->heaven_stem_id == 2 ||
                        $items->heaven_stem_id == 3 ||
                        $items->heaven_stem_id == 4 
                        )
                         
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function xiangzou($part,$stems){
        return collect($part)
                ->map(function($items) use ($stems){
                    $result = array();
                    if(
                        ($items->heaven_stem_id == $stems[0] || 
                        $items->heaven_stem_id == $stems[1]
                        ) &&
                        (
                        $items->earth_stem_id == 2 ||
                        $items->earth_stem_id == 3 ||
                        $items->earth_stem_id == 4 
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }

    public function jademaiden($part,$stems){
        return collect($part)
                ->map(function($items) use ($stems){
                    $result = array();
                    if(
                        ($items->heaven_stem_id == 4 || 
                        $items->earth_stem_id == 4
                        ) &&
                        (
                        $items->door_id == $stems[0] ||
                        $items->door_id == $stems[1]
                        )
                    ){
                        $result = $items;
                    } 
                    return $result;
                })->filter();
    }
}
