<?php

namespace App\Http\Controllers\API\Deitie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Deitie;

class DeitieController extends Controller
{
    public function storeAttribute(Request $request, $id){
        if($request->attribute_name == "Deity"){
            return Deitie::find($id)->update([
                'deity' => $request->attribute
            ]);
        }

        if($request->attribute_name == "Element"){
            return Deitie::find($id)->update([
                'element' => $request->attribute
            ]);
        }

        if($request->attribute_name == "Quality"){
            return Deitie::find($id)->update([
                'quality' => $request->attribute
            ]);
        }

        $model = '\\App\\' . 'Deitie'. $request->attribute_name; 
        
        $model::create([
            'deitie_id' => $id,
            'value'   => $request->attribute,
        ]);
    }

    public function show(Request $request, $id){
        if($request->attribute_name == "Deity"){
            $deity= Deitie::find($id);
            return $deity->deity;
        }

        if($request->attribute_name == "Element"){
            $deity= Deitie::find($id);
            return $deity->element;
        }

        if($request->attribute_name == "Quality"){
            $deity= Deitie::find($id);
            return $deity->quality;
        }

        $model = '\\App\\' . 'Deitie'. $request->attribute_name; 

        return $model::where('deitie_id',$id)->get();
    }

    public function deleteAttributes(Request $request){
        $model = '\\App\\' . 'Deitie'. $request->attribute_name; 
        $deity = $model::find($request->id);
        $deity->delete();
    }

    public function showAttributes($id){
        return Deitie::with('represents','suitable','characteristic','colour','number','shape','weather','personality','environment','people','material','property','career','parts','temperament','nourishment','birth','unsuitable','marriage','illness','litigation','features','animal','communication','plants')->find($id);
    }
}
