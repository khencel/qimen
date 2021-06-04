<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\HourChart\YangController;
use Illuminate\Http\Request;
use App\Http\Controllers\API\AutoFetch\HourChartValidationController;
use App\HourChartE;
use App\HourChartW;
use App\HourChartSW;
use App\HourChartSouth;
use App\HourChartSE;
use App\Door;


class HourController extends Controller
{
    public function store(Request $request){
        $hourChartValidationController = new HourChartValidationController();
        if($request->type == "se"){
            $modelName = 'App\HourChartSe';
            $formation1 = 'top_bottom';
            $formation2 = 'left_right';
        }

        if($request->type == "s"){
            $modelName = 'App\HourChartSouth';
            $formation1 = 'top_bottom';
            $formation2 = 'none';
        }

        if($request->type == "sw"){
            $modelName = 'App\HourChartSW';
            $formation1 = 'top_bottom';
            $formation2 = 'left_right';
        }
        if($request->type == "e"){
            $modelName = 'App\HourChartE';
            $formation1 = 'none';
            $formation2 = 'left_right';
        }
        if($request->type == "w"){
            $modelName = 'App\HourChartW';
            $formation1 = 'none';
            $formation2 = 'left_right';
        }

        if($request->type == "ne"){
            $modelName = 'App\HourChartNE';
            $formation1 = 'top_bottom';
            $formation2 = 'left_right';
        }
        if($request->type == "n"){
            $modelName = 'App\HourChartN';
            $formation1 = 'top_bottom';
            $formation2 = 'none';
        }

        if($request->type == "nw"){
            $modelName = 'App\HourChartNW';
            $formation1 = 'top_bottom';
            $formation2 = 'left_right';
        }


        $model = app($modelName);
        $model->updateOrCreate(['chart_id' => $request->chart_id],[
            'category' => $request->category,
            'chart_id' => $request->chart_id,
            'door_id' => $request->door_id != null?$request->door_id['id']:null,
            'relationship_id' => $request->relationship_id,
            'star_id' => $request->star_id == null?null:$request->star_id['id'],
            'heaven_stem_id' => $request->heaven_stem_id != null?$request->heaven_stem_id['id']:null,
            'earth_stem_id' => $request->earth_stem_id != null?$request->earth_stem_id['id']:null,
            'number_id' => $request->number,
            'deitie_id' => $request->deitie_id != null?$request->deitie_id['id']:null,
            'formation' => $request->formation,
            'explanation' => $request->explanation,
            $formation1 => $request->outside_top,
            $formation2 => $request->outside_left_right,
            'heaven' => $request->heaven,
            'earth' => $request->earth,
            'other' => $request->other,
            'formation_1' => $request->position_1 == null?null:$request->position_1['id'],
            'formation_2' => $request->position_2 == null?null:$request->position_2['id'],
            'formation_3' => $request->position_3 == null?null:$request->position_3['id'],
            'formation_4' => $request->position_4 == null?null:$request->position_4['id'],
            'formation_5' => $request->position_5 == null?null:$request->position_5['id'],
            'formation_6' => $request->position_6 == null?null:$request->position_6['id'],
            'formation_7' => $request->position_7 == null?null:$request->position_7['id'],
        ]);
    }

    public function show(Request $request,$id){
        $hourChartValidationController = new HourChartValidationController();
        
        if($request->type == "se"){
            $modelName = 'App\HourChartSe';
            $getDoorId = $modelName::where('chart_id',$id)->first();
            $doorID = $getDoorId == null?'':$getDoorId->door_id;
        }

        if($request->type == "s"){
            $modelName = 'App\HourChartSouth';
            $getDoorId = $modelName::where('chart_id',$id)->first();
            $doorID = $getDoorId == null?'':$getDoorId->door_id;
        }

        if($request->type == "sw"){
            $modelName = 'App\HourChartSW';
            $getDoorId = $modelName::where('chart_id',$id)->first();
            $doorID = $getDoorId == null?'':$getDoorId->door_id;
        }

        if($request->type == "e"){
            $modelName = 'App\HourChartE';
            $getDoorId = $modelName::where('chart_id',$id)->first();
            $doorID = $getDoorId == null?'':$getDoorId->door_id;
        }

        if($request->type == "w"){
            $modelName = 'App\HourChartW';
            $getDoorId = HourChartE::where('chart_id',$id)->first();
            $doorID = $hourChartValidationController->door($getDoorId == ''?:$getDoorId->door_id);
        }

        if($request->type == "ne"){
            $modelName = 'App\HourChartNE';
            $getDoorId = HourChartSW::where('chart_id',$id)->first();
            $doorID = $hourChartValidationController->door($getDoorId == ''?:$getDoorId->door_id);
        }

        if($request->type == "n"){
            $modelName = 'App\HourChartN';
            $getDoorId = HourChartSouth::where('chart_id',$id)->first();
            $doorID = $hourChartValidationController->door($getDoorId == ''?:$getDoorId->door_id);
        }

        if($request->type == "nw"){
            $modelName = 'App\HourChartNW';   
            $getDoorId = HourChartSE::where('chart_id',$id)->first();
            $doorID = $hourChartValidationController->door($getDoorId == ''?:$getDoorId->door_id);
        }
            
        
        $door = Door::find($doorID);

        $model = app($modelName);
        $chart = $model->with('door','relationship','star','heaven_stem','earth_stem','number','deitie','formation1','formation2','formation3','formation4','formation5','formation6','formation7')
                    ->where('chart_id',$id)
                    ->where('category',$request->category)
                    ->first();
        return response()->json([
            'door' => $door,
            'chart' => $chart
        ]);
      
    }

    public function showPart($id,$structure,$number,$palace){
        $yangController = new YangController();
        if($structure == "yang"){
            return $yangController->yangPart($palace,$number,$id);
        }

        if($structure == "yin"){
            
        }
    }

    
}
