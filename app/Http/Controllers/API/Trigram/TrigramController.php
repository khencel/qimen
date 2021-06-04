<?php

namespace App\Http\Controllers\API\Trigram;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Trigram;
use App\TrigramPeople;
use App\TrigramParts;
use App\TrigramAnimal;
use App\TrigramSickness;
use App\TrigramColour;

class TrigramController extends Controller
{
    public function storeTrigramAttributes(Request $reques, $id){

        if($reques->attributes_name == "element"){
            Trigram::find($id)->update([
                'element' => $reques->element
            ]);
        }

        if($reques->attributes_name == "number"){
            Trigram::find($id)->update([
                'number' => $reques->number
            ]);
        }

        if($reques->attributes_name == "People"){
            TrigramPeople::create([
                'trigram_id' => $id,
                'value'      => $reques->attribute
            ]);
        }

        if($reques->attributes_name == "Body Parts"){
            TrigramParts::create([
                'trigram_id' => $id,
                'value'      => $reques->attribute
            ]);
        }

        if($reques->attributes_name == "Animal"){
            TrigramAnimal::create([
                'trigram_id' => $id,
                'value'      => $reques->attribute
            ]);
        }

        if($reques->attributes_name == "Sickness"){
            TrigramSickness::create([
                'trigram_id' => $id,
                'value'      => $reques->attribute
            ]);
        }

        if($reques->attributes_name == "Colour"){
            TrigramColour::create([
                'trigram_id' => $id,
                'value'      => $reques->attribute
            ]);
        }
    }

    public function showTrigramAttributes($id){
        return Trigram::with('people','parts','animals','sickness','colour')->find($id);
    }

    public function showMultipleAttributes(Request $reques, $id){
        if($reques->attributes_name == "People"){
            return TrigramPeople::where('trigram_id',$id)->get();
        }

        if($reques->attributes_name == "Body Parts"){
            return TrigramParts::where('trigram_id',$id)->get();
        }

        if($reques->attributes_name == "Animal"){
            return TrigramAnimal::where('trigram_id',$id)->get();
        }

        if($reques->attributes_name == "Sickness"){
            return TrigramSickness::where('trigram_id',$id)->get();
        }

        if($reques->attributes_name == "Colour"){
            return TrigramColour::where('trigram_id',$id)->get();
        }
        
    }

    public function deleteAttributes(Request $reques){
        if($reques->attributes_name == "People"){
            $people = TrigramPeople::find($reques->id);
            $people->delete();
        }

        if($reques->attributes_name == "Body Parts"){
            $people = TrigramParts::find($reques->id);
            $people->delete();
        }

        if($reques->attributes_name == "Animal"){
            $people = TrigramAnimal::find($reques->id);
            $people->delete();
        }

        if($reques->attributes_name == "Sickness"){
            $people = TrigramSickness::find($reques->id);
            $people->delete();
        }

        if($reques->attributes_name == "Colour"){
            $people = TrigramColour::find($reques->id);
            $people->delete();
        }
    }
}
