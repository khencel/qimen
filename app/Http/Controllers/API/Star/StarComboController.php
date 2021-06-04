<?php

namespace App\Http\Controllers\API\Star;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\Star\StarComboContentController;
use App\StarComboOne;
use App\StarComboTwo;
use App\English;
use App\Door;

class StarComboController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->type == "one"){
            StarComboOne::create($request->all());
        }
        if($request->type == "two"){
            StarComboTwo::create($request->all());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($type,$id)
    {
        if($type == "one"){
            return StarComboOne::with('english')->where('star_id',$id)->get();
        }
        if($type == "two"){
            return StarComboTwo::with('door')->where('star_id',$id)->get();
        }
    }

    public function edit(Request $request){
        if($request->type == "one"){
            $starComboContentController = new StarComboContentController();
            
            $english = StarComboOne::find($request->selected_id);
            $selected = $english->english_id;
            $current = $starComboContentController->palaceNotShowIfExist($request->id,$selected);
            $english = English::whereNotIn('id', $current)->get();

            $comboOne = StarComboOne::with('english')->find($request->selected_id);
            return response()->json([
                'comboOne' => $comboOne,
                'english' => $english
            ]);
        }
        if($request->type == "two"){
            $starComboContentController = new StarComboContentController();
            
            $door = StarComboTwo::find($request->selected_id);
            $selected = $door->door_id;
            $current = $starComboContentController->doorNotShowIfExist($request->id,$selected);
            $door = Door::whereNotIn('id', $current)->get();

            $comboTwo = StarComboTwo::with('door')->find($request->selected_id);
            return response()->json([
                'comboTwo' => $comboTwo,
                'door' => $door
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($request->type == "one"){
            StarComboOne::find($id)->update($request->all());
        }

        if($request->type == "two"){
            StarComboTwo::find($id)->update($request->all());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($type,$id)
    {
        if($type == "one"){
            StarComboOne::find($id)->delete();
        }

        if($type == "two"){
            StarComboTwo::find($id)->delete();
        }
    }
}
