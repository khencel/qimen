<?php

namespace App\Http\Controllers\API\Search;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Deitie;
use App\Door;
use App\Star;
use App\Stem;
use App\Http\Controllers\API\Search\ListController;
class SearchController extends Controller
{
    public function search($searchBy,$keyword){

        $list = array();
        $label = array();
        if($searchBy == "Represent"){
            $modelList = array(array("deitie","star","stem"),array("\DeitieRepresents","\StarRepresents","\StemRepresent"));
        }

        if($searchBy == "Suitable for"){
            $modelList = array(array("deitie"),array("\DeitieSuitable"));
        }

        if($searchBy == "Unsuitable for"){
            $modelList = array(array("deitie"),array("\DeitieUnsuitable"));
        }

        if($searchBy == "Characteristics"){
            $modelList = array(array("deitie","star","stem"),array("\DeitieCharacteristic","\StarCharacteristic","\StemCharacteristic"));
        }

        if($searchBy == "Colour"){
            $modelList = array(array("deitie","stem"),array("\DeitieColour","\StemColour"));
        }

        if($searchBy == "Number"){
            $modelList = array(array('deitie'),array("\DeitieNumber"));
        }

        if($searchBy == "Shape"){
            $modelList = array(array("deitie"),array("\DeitieShape"));
        }

        if($searchBy == "Weather"){
            $modelList = array(array("deitie","door","star"),array("\DeitieWeather","\DoorWeather","\StarWeather"));
        }

        if($searchBy == "Personality"){
            $modelList = array(array("deitie","door"),array("\DeitiePersonality","\DoorPersonality"));
        }

        if($searchBy == "Environment"){
            $modelList = array(array("deitie","stem"),array("\DeitieEnvironment","\StemEnvironment"));
        }

        if($searchBy == "People"){
            $modelList = array(array("deitie","door","star","stem"),array("\DeitiePeople","\DoorPeople","\StarPeople","\StemPeople"));
        }

        if($searchBy == "Material"){
            $modelList = array(array("deitie","door","star","stem"),array("\DeitieMaterial","\DoorMaterial","\StarMaterial","\StemMaterial"));
        }

        if($searchBy == "Property"){
            $modelList = array(array("deitie","door","star"),array("\DeitieProperty","\DoorProperty","\StarProperty"));
        }

        if($searchBy == "Career"){
            $modelList = array(array("deitie","door","star","stem"),array("\DeitieCareer","\DoorCareer","\StarCareer","\StemCareer"));
        }

        if($searchBy == "Parts"){
            $modelList = array(array("deitie","door","star","stem"),array("\DeitieParts","\DoorPart","\StarPart","\StemPart"));
        }

        if($searchBy == "Temperament"){
            $modelList = array(array("deitie","door","star"),array("\DeitieTemperament","\DoorTemperament","\StarTemperament"));
        }

        if($searchBy == "Nourishment"){
            $modelList = array(array("deitie","door","star","stem"),array("\DeitieNourishment","\DoorNourishment","\StarNourishment","\StemNourishment"));
        }

        if($searchBy == "Birth"){
            $modelList = array(array("deitie","door"),array("\DeitieBirth","\DoorBirth"));
        }

        if($searchBy == "Marriage"){
            $modelList = array(array("deitie","door","star"),array("\DeitieMarriage","\DoorMarriage","\StarMarriage"));
        }

        if($searchBy == "Illness"){
            $modelList = array(array("deitie","door","star"),array("\DeitieIllness","\DoorIllness","\StarIllness"));
        }

        if($searchBy == "Litigation"){
            $modelList = array(array("deitie","door","star"),array("\DeitieLitigation","\DoorLitigation","\StarIllness"));
        }

        if($searchBy == "Features"){
            $modelList = array(array("deitie"),array("\DeitieFeatures"));
        }

        if($searchBy == "Animal"){
            $modelList = array(array("deitie"),array("\DeitieAnimal"));
        }

        if($searchBy == "Communication"){
            $modelList = array(array("deitie"),array("\DeitieCommunication"));
        }

        if($searchBy == "Plants"){
            $modelList = array(array("deitie"),array("\DeitiePlants"));
        }

        if($searchBy == "Attributes"){
            $modelList = array(array("door","star"),array("\DoorAttribute","\StarAttribute"));
        }

        if($searchBy == "Envoy"){
            $modelList = array(array("door"),array("\DoorEnvoy"));
        }

        if($searchBy == "Achievement"){
            $modelList = array(array("door"),array("\DoorAchievement"));
        }

        if($searchBy == "Geography"){
            $modelList = array(array("door"),array("\DoorGeography"));
        }
        if($searchBy == "Body Part"){
            $modelList = array(array("door"),array("\DoorPart"));
        }
        if($searchBy == "Appearance"){
            $modelList = array(array("star"),array("\StarAppearance"));
        }
        if($searchBy == "Month"){
            $modelList = array(array("stem"),array("\StemMonth"));
        }
        if($searchBy == "Astronomy"){
            $modelList = array(array("stem"),array("\StemAstronomy"));
        }
        if($searchBy == "Building"){
            $modelList = array(array("stem"),array("\StemBuilding"));
        }
        if($searchBy == "Physical Fitness"){
            $modelList = array(array("stem"),array("\StemFitness"));
        }
        if($searchBy == "Voice"){
            $modelList = array(array("stem"),array("\StemVoice"));
        }
        if($searchBy == "Internal Organ"){
            $modelList = array(array("stem"),array("\StemOrgan"));
        }
        if($searchBy == "Taste"){
            $modelList = array(array("stem"),array("\StemTaste"));
        }

        foreach ($modelList[1] as $key => $value) {
            $model = app("App".$value);
            $relationship = $modelList[0][$key];

            $list[] = $model::with($relationship)->where('value',$keyword)->get();
            $label[] = $modelList[0][$key];
        }


        return response()->json([
            'list' => $list,
            'labels' => $label
        ]);
    }

    public function show($id,$keyword,$category){
        if($category == "deitie"){
            return Deitie::with('animal','colour','number','shape','weather','environment','people','material','property','career','parts','temperament','nourishment','birth','marriage','illness','litigation','features','communication','plants','represents','suitable','unsuitable','characteristic','personality')->find($id);
        }

        if($category == "door"){
            return Door::with("envoy","achievement","weather","personality","geography","people","material","property","career","part","temperament","nourishment","birth","marriage","illness","litigation")->find($id);
        }
        if($category == "star"){
            return Star::with("attribute","appearance","weather","geography","property","temperament","illness","marriage","represents","characteristic","people","material","career","part","nourishment")->find($id);
        }
        if($category == "stem"){
            return Stem::with("represent","month","astronomy","environment","building","characteristic","fitness","voice","organ","taste","colour","people","material","career","part","nourishment")->find($id);
        }
        
    }

    public function list(){
        $options = array("Represent",'Suitable for','Unsuitable for','Characteristics','Colour','Number','Shape','Weather','Personality','Environment','People','Material','Property','Career','Parts','Temperament','Nourishment','Birth','Marriage','Illness','Litigation','Features','Animal','Communication','Plants','Attributes','Envoy','Achievement','Geography','Body Part','Appearance','Month','Astronomy','Building','Physical Fitness','Voice','Internal Organ','Taste');
        return response()->json([
            'options' => $options
        ]);
    }

    public function selectedList($keyword){
        $listController = new ListController();
        $list = array();
        $list = $listController->represent($keyword);
        return $list;
    }

     
}
