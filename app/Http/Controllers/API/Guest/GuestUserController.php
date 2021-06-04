<?php

namespace App\Http\Controllers\API\Guest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\GuestUser;
use App\GuestPurchase;

class GuestUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return GuestUser::where('user_id',\Auth::user()->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $guest = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'date_of_birth' => 'required'
        ]);
        
        GuestUser::create($guest+[
            'user_id' => \Auth::user()->id,
            'time_of_birth' => $request->time_of_birth
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return GuestUser::find($id);
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
        $guest = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'date_of_birth' => 'required'
        ]);
        
        GuestUser::find($id)->update($guest+[
            'time_of_birth' => $request->time_of_birth
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $guest = GuestUser::find($id);
        $guest->delete();
    }

    public function userPurchase(Request $request){
        $guest = GuestUser::find($request->id);
        $guest->update([
            'divine_light' => $request->light,
            'divine_blessing' => $request->bless,
            'divine_force' => $request->force,
        ]);

        GuestPurchase::create([
            'guest_id' => $request->id
        ]);

    }
}
