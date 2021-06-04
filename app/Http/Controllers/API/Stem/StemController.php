<?php

namespace App\Http\Controllers\API\Stem;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\StemNameQimen;
use App\Stem;
use App\StemMonth;
use App\StemRepresent;
use App\StemAstronomy;
use App\StemEnvironment;
use App\StemPeople;
use App\StemMaterial;
use App\StemBuilding;
use App\StemCareer;
use App\StemNourishment;
use App\StemCharacteristic;
use App\StemFitness;
use App\StemVoice;
use App\StemOrgan;
use App\StemPart;
use App\StemTaste;
use App\StemColour;
use App\StemFormation;

class StemController extends Controller
{
    public function storeAttribute(Request $request, $id){
        if($request->attribute_name == "Name in Qi Men"){
            StemNameQimen::updateOrCreate(['stem_id' => $id],[
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Represents"){
            StemRepresent::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attribute_name == "Five Element"){
            $stem = Stem::find($id);
            $stem->update([
                'name' => $request->attribute,
            ]);
        }

        if($request->attribute_name == "Direction"){
            $stem = Stem::find($id);
            $stem->update([
                'direction' => $request->attribute,
            ]);
        }

        if($request->attribute_name == "Season"){
            $stem = Stem::find($id);
            $stem->update([
                'season' => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Month"){
            StemMonth::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Astronomy"){
            StemAstronomy::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Environment"){
            StemEnvironment::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "People"){
            StemPeople::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Material"){
            StemMaterial::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }

        if($request->attributes_name == "Building"){
            StemBuilding::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Career"){
            StemCareer::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Nourishment"){
            StemNourishment::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Characteristic"){
            StemCharacteristic::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Fitness"){
            StemFitness::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Voice"){
            StemVoice::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Organ"){
            StemOrgan::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Part"){
            StemPart::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Taste"){
            StemTaste::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
        if($request->attributes_name == "Colour"){
            StemColour::create([
                'stem_id' => $id,
                'value'   => $request->attribute,
            ]);
        }
    }

    public function show(Request $request, $id){
        if($request->attribute_name == "Name in Qi Men"){
            return StemNameQimen::where('stem_id',$id)->first();
        }

        if($request->attributes_name == "Represents"){
            return StemRepresent::where('stem_id',$id)->get();
        }

        if($request->attribute_name == "Five Element"){
            $stem = Stem::find($id);
            return response()->json([
                'id' => $stem->id,
                'value' => $stem->name
            ]);
        }

        if($request->attribute_name == "Direction"){
            $stem = Stem::find($id);
            return response()->json([
                'id' => $stem->id,
                'value' => $stem->direction
            ]);
        }

        if($request->attribute_name == "Season"){
            $stem = Stem::find($id);
            return response()->json([
                'id' => $stem->id,
                'value' => $stem->season
            ]);
        }
        if($request->attributes_name == "Month"){
            return StemMonth::where('stem_id',$id)->get();
        }

        if($request->attributes_name == "Astronomy"){
            return StemAstronomy::where('stem_id',$id)->get();
        }

        if($request->attributes_name == "Environment"){
            return StemEnvironment::where('stem_id',$id)->get();
        }

        if($request->attributes_name == "People"){
            return StemPeople::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Material"){
            return StemMaterial::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Building"){
            return StemBuilding::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Career"){
            return StemCareer::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Nourishment"){
            return StemNourishment::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Characteristic"){
            return StemCharacteristic::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Fitness"){
            return StemFitness::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Voice"){
            return StemVoice::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Organ"){
            return StemOrgan::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Part"){
            return StemPart::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Taste"){
            return StemTaste::where('stem_id',$id)->get();
        }
        if($request->attributes_name == "Colour"){
            return StemColour::where('stem_id',$id)->get();
        }
    }

    public function deleteAttributes(Request $request){
        if($request->attributes_name == "Represents"){
            $represent = StemRepresent::find($request->id);
            $represent->delete();
        }

        if($request->attributes_name == "Month"){
            $represent = StemMonth::find($request->id);
            $represent->delete();
        }

        if($request->attributes_name == "Astronomy"){
            $represent = StemAstronomy::find($request->id);
            $represent->delete();
        }

        if($request->attributes_name == "Environment"){
            $represent = StemEnvironment::find($request->id);
            $represent->delete();
        }

        if($request->attributes_name == "People"){
            $represent = StemPeople::find($request->id);
            $represent->delete();
        }

        if($request->attributes_name == "Material"){
            $represent = StemMaterial::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Building"){
            $represent = StemBuilding::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Career"){
            $represent = StemCareer::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Nourishment"){
            $represent = StemNourishment::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Characteristic"){
            $represent = StemCharacteristic::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Fitness"){
            $represent = StemFitness::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Voice"){
            $represent = StemVoice::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Organ"){
            $represent = StemOrgan::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Part"){
            $represent = StemPart::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Taste"){
            $represent = StemTaste::find($request->id);
            $represent->delete();
        }
        if($request->attributes_name == "Colour"){
            $represent = StemColour::find($request->id);
            $represent->delete();
        }
    }

    public function showAttributes($id){
        return Stem::with('nameQimen','represent','month','astronomy','environment','people','material','building','career','nourishment','characteristic','fitness','voice','organ','part','taste','colour')->find($id);
    }

    public function addFormation(Request $request){
        StemFormation::create([
            'stem_id' => $request->id,
            'earthly_stem' => $request->earthly_stem,
            'english_term' => $request->english_term,
            'rating' => $request->rating,
            'description' => $request->description
        ]);
    }

    public function showFormation($id){
        return StemFormation::with('stem')->where('stem_id',$id)->get();
    }

    

    public function updateFormation(Request $request){
        StemFormation::find($request->edit_id)->update([
            'earthly_stem' => $request->earthly_stem,
            'english_term' => $request->english_term,
            'rating' => $request->rating,
            'description' => $request->description
        ]);
    }

    public function deleteFormation($id){
        $formation = StemFormation::find($id);
        $formation->delete();
    }

    public function editFormation(Request $request){
        $stem = StemFormation::find($request->edit_id);
        $selected = $stem->earthly_stem;

        $current = $this->stemNotShowIfExist($request->id,$selected);
        $stem = Stem::whereNotIn('id', $current)->get();
        $formation = StemFormation::with('stem')->find($request->edit_id);

        return response()->json([
            'stem' => $stem,
            'formation' => $formation
        ]);
    }

    public function stem(Request $request){
        $selected_id = null;
        $current_stem = $this->stemNotShowIfExist($request->id,$selected_id);
        return Stem::whereNotIn('id', $current_stem)->get();
    }

    public function stemNotShowIfExist($id,$selected_id){
        $existingStem = array();
        $selected = array();
        $selected[] = $selected_id;

        $doorStem = StemFormation::where('stem_id',$id)->get();
        foreach ($doorStem as $value) {
            $existingStem[] = $value->earthly_stem;
        }
        return array_diff($existingStem,$selected);
    }
}
