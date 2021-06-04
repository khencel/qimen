<?php

namespace App\Http\Controllers\API\Star;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Star;
use App\StarBranch;
use App\StarAttribute;
use App\StarCharacteristic;
use App\StarRepresents;
use App\StarWeather;

class StarController extends Controller
{
    public function storeAttribute(Request $request, $id){
        if($request->attribute_name == "Name"){
            return Star::find($id)->update([
                'star_name' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Polarity"){
            return Star::find($id)->update([
                'polarity' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Gua"){
            return Star::find($id)->update([
                'gua' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Palace"){
            return Star::find($id)->update([
                'palace' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Direction"){
            return Star::find($id)->update([
                'direction' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Element"){
            return Star::find($id)->update([
                'element' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Branch"){
            return StarBranch::create([
                'star_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Quality"){
            return Star::find($id)->update([
                'quality' => $request->attribute
            ]);
        }
        if($request->attribute_name == "Attribute"){
            return StarAttribute::create([
                'star_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Characteristic"){
            return StarCharacteristic::create([
                'star_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attribute_name == "Represents"){
            return StarRepresents::create([
                'star_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        $model = '\\App\\' . 'Star'. $request->attribute_name; 
        
        $model::create([
            'star_id' => $id,
            'value'   => $request->attribute,
        ]);
    }

    public function show(Request $request, $id){
        if($request->attribute_name == "Name"){
            $star= Star::find($id);
            return $star->star_name;
        }
        if($request->attribute_name == "Polarity"){
            $star= Star::find($id);
            return $star->polarity;
        }
        if($request->attribute_name == "Gua"){
            $star= Star::find($id);
            return $star->gua;
        }
        if($request->attribute_name == "Palace"){
            $star= Star::find($id);
            return $star->palace;
        }
        if($request->attribute_name == "Direction"){
            $star= Star::find($id);
            return $star->direction;
        }
        if($request->attribute_name == "Element"){
            $star= Star::find($id);
            return $star->element;
        }
        if($request->attribute_name == "Branch"){
            return StarBranch::where('star_id',$id)->get();
        }
        if($request->attribute_name == "Quality"){
            $star= Star::find($id);
            return $star->quality;
        }
        if($request->attribute_name == "Attribute"){
            return StarAttribute::where('star_id',$id)->get();
        }
        if($request->attribute_name == "Characteristic"){
            return StarCharacteristic::where('star_id',$id)->get();
        }
        if($request->attribute_name == "Represents"){
            return StarRepresents::where('star_id',$id)->get();
        }

        $model = '\\App\\' . 'Star'. $request->attribute_name; 

        return $model::where('star_id',$id)->get();

    }

    public function deleteAttributes(Request $request){
        if($request->attribute_name == "Branch"){
            $star = StarBranch::find($request->id);
            return $star->delete();
        }
        if($request->attribute_name == "Attribute"){
            $star = StarAttribute::find($request->id);
            return $star->delete();
        }
        if($request->attribute_name == "Characteristic"){
            $star = StarCharacteristic::find($request->id);
            return $star->delete();
        }
        if($request->attribute_name == "Represents"){
            $star = StarRepresents::find($request->id);
            return$star->delete();
        }

        $model = '\\App\\' . 'Star'. $request->attribute_name; 
        $star = $model::find($request->id);
        return $star->delete();
    }

    public function showAttributes($id){
        return Star::with('branch','attribute','characteristic','represents','weather','appearance','geography','people','material','property','career','part','temperament','nourishment','illness','marriage',)->find($id);
    }
}
