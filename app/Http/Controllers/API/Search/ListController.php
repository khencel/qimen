<?php

namespace App\Http\Controllers\API\Search;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ListController extends Controller
{
    public function represent($keyword){
        $list = array();
        if($keyword == "Represent"){
            $modelList = array("\DeitieRepresents","\StarRepresents","\StemRepresent");
        }

        if($keyword == "Suitable for"){
            $modelList = array("\DeitieSuitable");
        }

        if($keyword == "Unsuitable for"){
            $modelList = array("\DeitieUnsuitable");
        }

        if($keyword == "Characteristics"){
            $modelList = array("\DeitieCharacteristic","\StarCharacteristic","\StemCharacteristic");
        }

        if($keyword == "Colour"){
            $modelList = array("\DeitieColour","\StemColour");
        }

        if($keyword == "Number"){
            $modelList = array("\DeitieNumber");
        }

        if($keyword == "Shape"){
            $modelList = array("\DeitieShape");
        }

        if($keyword == "Weather"){
            $modelList = array("\DeitieWeather","\DoorWeather","\StarWeather");
        }

        if($keyword == "Personality"){
            $modelList = array("\DeitiePersonality","\DoorPersonality");
        }

        if($keyword == "Environment"){
            $modelList = array("\DeitieEnvironment","\StemEnvironment");
        }

        if($keyword == "People"){
            $modelList = array("\DeitiePeople","\DoorPeople","\StarPeople","\StemPeople");
        }

        if($keyword == "Material"){
            $modelList = array("\DeitieMaterial","\DoorMaterial","\StarMaterial","\StemMaterial");
        }

        if($keyword == "Property"){
            $modelList = array("\DeitieProperty","\DoorProperty","\StarProperty");
        }

        if($keyword == "Career"){
            $modelList = array("\DeitieCareer","\DoorCareer","\StarCareer","\StemCareer");
        }

        if($keyword == "Parts"){
            $modelList = array("\DeitieParts","\DoorPart","\StarPart","\StemPart");
        }

        if($keyword == "Temperament"){
            $modelList = array("\DeitieTemperament","\DoorTemperament","\StarTemperament");
        }

        if($keyword == "Nourishment"){
            $modelList = array("\DeitieNourishment","\DoorNourishment","\StarNourishment","\StemNourishment");
        }

        if($keyword == "Birth"){
            $modelList = array("\DeitieBirth","\DoorBirth");
        }

        if($keyword == "Marriage"){
            $modelList = array("\DeitieMarriage","\DoorMarriage","\StarMarriage");
        }

        if($keyword == "Illness"){
            $modelList = array("\DeitieIllness","\DoorIllness","\StarIllness");
        }

        if($keyword == "Litigation"){
            $modelList = array("\DeitieLitigation","\DoorLitigation","\StarIllness");
        }

        if($keyword == "Features"){
            $modelList = array("\DeitieFeatures");
        }

        if($keyword == "Animal"){
            $modelList = array("\DeitieAnimal");
        }

        if($keyword == "Communication"){
            $modelList = array("\DeitieCommunication");
        }

        if($keyword == "Plants"){
            $modelList = array("\DeitiePlants");
        }

        if($keyword == "Attributes"){
            $modelList = array("\DoorAttribute","\StarAttribute");
        }

        if($keyword == "Envoy"){
            $modelList = array("\DoorEnvoy");
        }

        if($keyword == "Achievement"){
            $modelList = array("\DoorAchievement");
        }

        if($keyword == "Geography"){
            $modelList = array("\DoorGeography");
        }
        if($keyword == "Body Part"){
            $modelList = array("\DoorPart");
        }
        if($keyword == "Appearance"){
            $modelList = array("\StarAppearance");
        }
        if($keyword == "Month"){
            $modelList = array("\StemMonth");
        }
        if($keyword == "Astronomy"){
            $modelList = array("\StemAstronomy");
        }
        if($keyword == "Building"){
            $modelList = array("\StemBuilding");
        }
        if($keyword == "Physical Fitness"){
            $modelList = array("\StemFitness");
        }
        if($keyword == "Voice"){
            $modelList = array("\StemVoice");
        }
        if($keyword == "Internal Organ"){
            $modelList = array("\StemOrgan");
        }
        if($keyword == "Taste"){
            $modelList = array("\StemTaste");
        }
        
        foreach ($modelList as $key => $value) {
            $model = app("App".$value);
            $reps = $model::all()->unique('value')->pluck('value');
            foreach ($reps as $rep) {
                $list[] = $rep;
            }
        }
        return $list;
    }
}
