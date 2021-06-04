<?php

namespace App\Http\Controllers\API\Door;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Door;
use App\DoorDescription;
use App\DoorAttribute;
use App\DoorBranch;
use App\DoorEnvoy;
use App\Doorachievement;
use App\DoorWeather;
use App\DoorPersonality;
use App\DoorGeography;
use App\DoorPeople;
use App\DoorMaterial;
use App\DoorProperty;
use App\DoorCareer;
use App\DoorPart;
use App\DoorTemperament;
use App\DoorNourishment;
use App\DoorBirth;
use App\DoorMarriage;
use App\DoorIllness;
use App\DoorLitigation;

class DoorController extends Controller
{
    public function storeAttribute(Request $request, $id){
        if($request->attribute_name == "Description"){
            DoorDescription::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Attribute"){
            DoorAttribute::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Element"){
            Door::find($id)->update([
                'element' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Branch"){
            DoorBranch::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Gua"){
            Door::find($id)->update([
                'gua' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Direction"){
            Door::find($id)->update([
                'direction' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Shu"){
            Door::find($id)->update([
                'shu' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Envoy"){
            DoorEnvoy::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Achievement"){
            Doorachievement::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Weather"){
            DoorWeather::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Personality"){
            DoorPersonality::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Geography"){
            DoorGeography::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "People"){
            DoorPeople::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Material"){
            DoorMaterial::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Property"){
            DoorProperty::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Career"){
            DoorCareer::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Part"){
            DoorPart::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Temperament"){
            DoorTemperament::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Nourishment"){
            DoorNourishment::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Birth"){
            DoorBirth::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Marriage"){
            DoorMarriage::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Illness"){
            DoorIllness::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Litigation"){
            DoorLitigation::create([
                'door_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
    }

    public function show(Request $request, $id){
        if($request->attribute_name == "Description"){
            return DoorDescription::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Attribute"){
            return DoorAttribute::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Element"){
            $door = Door::find($id);
            return $door->element;
        }
        if($request->attribute_name == "Branch"){
            return DoorBranch::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Gua"){
            $door = Door::find($id);
            return $door->gua;
        }
        if($request->attribute_name == "Direction"){
            $door = Door::find($id);
            return $door->direction;
        }
        if($request->attribute_name == "Shu"){
            $door = Door::find($id);
            return $door->shu;
        }
        if($request->attribute_name == "Envoy"){
            return DoorEnvoy::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Achievement"){
            return Doorachievement::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Weather"){
            return DoorWeather::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Personality"){
            return DoorPersonality::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Geography"){
            return DoorGeography::where('door_id',$id)->get();
        }
        if($request->attribute_name == "People"){
            return DoorPeople::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Material"){
            return DoorMaterial::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Property"){
            return DoorProperty::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Career"){
            return DoorCareer::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Part"){
            return DoorPart::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Temperament"){
            return DoorTemperament::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Nourishment"){
            return DoorNourishment::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Birth"){
            return DoorBirth::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Marriage"){
            return DoorMarriage::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Illness"){
            return DoorIllness::where('door_id',$id)->get();
        }
        if($request->attribute_name == "Litigation"){
            return DoorLitigation::where('door_id',$id)->get();
        }
        
    }

    public function deleteAttributes(Request $request){
        if($request->attribute_name == "Description"){
            $Branch = DoorDescription::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Attribute"){
            $Branch = DoorAttribute::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Branch"){
            $Branch = DoorBranch::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Envoy"){
            $Branch = DoorEnvoy::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Achievement"){
            $Branch = Door::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Weather"){
            $Branch = DoorWeather::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Personality"){
            $Branch = DoorPersonality::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Geography"){
            $Branch = DoorGeography::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "People"){
            $Branch = DoorPeople::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Material"){
            $Branch = DoorMaterial::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Property"){
            $Branch = DoorProperty::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Career"){
            $Branch = DoorCareer::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Part"){
            $Branch = DoorPart::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Temperament"){
            $Branch = DoorTemperament::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Nourishment"){
            $Branch = DoorNourishment::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Birth"){
            $Branch = DoorBirth::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Marriage"){
            $Branch = DoorMarriage::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Illness"){
            $Branch = DoorIllness::find($request->id);
            $Branch->delete();
        }
        if($request->attribute_name == "Litigation"){
            $Branch = DoorLitigation::find($request->id);
            $Branch->delete();
        }
    }

    public function showAttributes($id){
        return Door::with('branch','envoy','achievement','description','attribute','weather','personality','geography','people','material','property','career','part','temperament','nourishment','birth','marriage','illness','litigation')->find($id);
    }
    
}
