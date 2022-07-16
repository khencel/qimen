<?php

namespace App\Http\Controllers\API\TongShu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DongGongController extends Controller
{
    public function index(){
        $tongshu = Http::get(env('TONG_SHU').'api/tongshu/get-dropdown');
        $tongshu = json_decode($tongshu,true);
        $branch = new \App\Branch();
        $element = new \App\Element();

        return response()->json([
            'month'     =>  $tongshu['dong-gong-month'],
            'officer'   =>  $tongshu['day-officer'],
            'animal'    =>  $tongshu['animal'],
            'dongGong'  =>  $tongshu['dongGong'],
            'branch'    =>  $branch->all(),
            'element'   =>  $element->all(),
        ]);
        
    }

    public function getDongGong($id){
        $tongshu = Http::get(env('TONG_SHU').'api/tongshu/get-dropdown');
        
        return collect($tongshu['dongGong'])->filter(function($item) use ($id){
            if($item['dong_gong_month_id'] == $id){
                return $item;
            }
        });

    }

    public function update(Request $request){
        $tongshu = Http::post(env('TONG_SHU').'api/tongshu/update/dong-gong',$request->all());
        return $tongshu;
    }
}
