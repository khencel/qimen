<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->group(function(){
    Route::resources([
        'profile' => 'API\Setting\ProfileController'
    ]);

    Route::post('change-password','API\Setting\ChangePassword@changepassword');
    Route::post('password-change','API\Setting\ChangePassword@passwordchange');

    Route::post('victory','API\victory\Victory@castVictory');
    Route::get('victory/cast','API\victory\Victory@alreadyCast');

    Route::post('last-day-chart','API\ChartController@loadLastDayChart');

    
    

    //year
        Route::post('get-last-date','API\YearChart\YearController@getLasMonth');
        Route::post('create','API\YearChart\YearController@create');
        Route::get('index','API\YearChart\YearController@index');
    //

    //subscription
        Route::post('subscription','API\Subscription\SubscribeController@subscription');
    //

    // trigram
    Route::prefix('trigram')->group(function(){
        Route::put('/store/{id}','API\Trigram\TrigramController@storeTrigramAttributes');
        Route::get('/show/{id}','API\Trigram\TrigramController@showTrigramAttributes');
        Route::put('/show/attributes/{id}','API\Trigram\TrigramController@showMultipleAttributes');
        Route::post('/delete/attributes','API\Trigram\TrigramController@deleteAttributes');
    });

    // stem
    Route::prefix('stem')->group(function(){
        Route::put('/store/{id}','API\Stem\StemController@storeAttribute');
        Route::put('/show/{id}','API\Stem\StemController@show');
        Route::get('/showAttribute/{id}','API\Stem\StemController@showAttributes');
        Route::post('/delete/attributes','API\Stem\StemController@deleteAttributes');
        Route::post('/add/formation','API\Stem\StemController@addFormation');
        Route::get('/show/formation/{id}','API\Stem\StemController@showFormation');
        Route::post('/edit/formation','API\Stem\StemController@editFormation');
        Route::post('/update/formation','API\Stem\StemController@updateFormation');
        Route::get('/delete/formation/{id}','API\Stem\StemController@deleteFormation');

        Route::post('/list','API\Stem\StemController@stem');

    });

    // door
    Route::prefix('door')->group(function(){
        Route::put('/store/{id}','API\Door\DoorController@storeAttribute');
        Route::put('/show/{id}','API\Door\DoorController@show');
        Route::get('/showAttribute/{id}','API\Door\DoorController@showAttributes');
        Route::post('/delete/attributes','API\Door\DoorController@deleteAttributes');

        Route::post('/stem','API\Door\DoorStemController@stem');
        Route::post('/stem/store','API\Door\DoorStemController@store');
        Route::get('/stem/show/{id}','API\Door\DoorStemController@show');
        Route::post('/doorStem/show','API\Door\DoorStemController@showDoorStem');
        Route::put('/doorStem/update/{id}','API\Door\DoorStemController@update');
        Route::get('/doorStem/delete/{id}','API\Door\DoorStemController@delete');

        Route::post('/palace/list','API\Door\DoorFormationController@showPalaceList');
        Route::post('/formation/store','API\Door\DoorFormationController@store');
        Route::get('/formation/list/{id}','API\Door\DoorFormationController@list');
        Route::post('/formation/edit','API\Door\DoorFormationController@edit');
        Route::put('/formation/update/{id}','API\Door\DoorFormationController@update');
        Route::get('/formation/delete/{id}','API\Door\DoorFormationController@delete');
    });

    // star
    Route::prefix('star')->group(function(){
        Route::put('/store/{id}','API\Star\StarController@storeAttribute');
        Route::put('/show/{id}','API\Star\StarController@show');
        Route::get('/showAttribute/{id}','API\Star\StarController@showAttributes');
        Route::post('/delete/attributes','API\Star\StarController@deleteAttributes');

        Route::post('/combo/english','API\Star\StarComboContentController@english');
        Route::post('/combo/door','API\Star\StarComboContentController@door');

        Route::post('/combo/store','API\Star\StarComboController@store');
        Route::get('/combo/show/{type}/{id}','API\Star\StarComboController@show');
        Route::post('/combo/edit','API\Star\StarComboController@edit');
        Route::put('/combo/update/{id}','API\Star\StarComboController@update');
        Route::get('/combo/delete/{type}/{id}','API\Star\StarComboController@destroy');
    });

    // deitie
    Route::prefix('deitie')->group(function(){
        Route::put('/store/{id}','API\Deitie\DeitieController@storeAttribute');
        Route::put('/show/{id}','API\Deitie\DeitieController@show');
        Route::get('/showAttribute/{id}','API\Deitie\DeitieController@showAttributes');
        Route::post('/delete/attributes','API\Deitie\DeitieController@deleteAttributes');
    });

    // Guest 
    Route::prefix('guest')->group(function(){
        Route::resource('/user-guest','API\Guest\GuestUserController');
        Route::post('/purchase-guest','API\Guest\GuestUserController@userPurchase');
        Route::get('/already-cast-guest/{id}','API\victory\Victory@alreadyCastGuest');
    });

    //hour chart
    Route::prefix('hour')->group(function(){
        Route::get('resources/{category}/{id}/{type}/{structure}','HourChartController@fetchResources');
        Route::post('store','API\HourController@store');
        Route::put('show/{id}','API\HourController@show');
        Route::get('getHourchart/{id}/{structure}/{period}','API\HourController@getChart');
        Route::get('part/{id}/{structure}/{number}/{palace}','API\HourController@showPart');
        Route::get('chart/{day}/{branch}/{period}/{time}/{structure}','HourChartController@all');
        Route::get('formation','API\HourChart\FormationController@formation');
        Route::post('addFormation','API\HourChart\FormationController@addFormation');
    });

    Route::prefix('search')->group(function(){
        Route::get('/{searchBy}/{keyword}','API\Search\SearchController@search');
    });

    Route::get('/show/{id}/{keyword}/{category}','API\Search\SearchController@show');
    Route::get('door/{id}','API\Search\SearchController@door');
    Route::get('/list','API\Search\SearchController@list');
    Route::get('/selected/{keyword}','API\Search\SearchController@selectedList');

    Route::get('set/{set}','API\sample\SampleController@set');


    Route::prefix('diary')->group(function(){
        Route::get('getHourChart/{date}/{hour}','API\Diary\HourChartController@getHourChart');
        Route::get('getVicDay/{email}','API\Diary\HourChartController@getVictoryDay');
        Route::get('getasker/{date}/{id}','API\Diary\HourChartController@getAsker');
        Route::get('getOutcome/{id}','API\Diary\HourChartController@getOutcome');

        // Route::get('getDetails/{attri}/{keyword}','API\Diary\HourChartController@getAttribute');
        Route::get('getDetails/{id}/{attr}','API\Diary\HourChartController@getDetails');
        Route::get('getNewAsker/{id}/{point}','API\Diary\HourChartController@getNewAsker');
    });

    Route::get('generate-month-chart/{year}','API\MonthChartGenerate@generate');
    Route::get('show-month-chart/{id}','API\MonthChartGenerate@getDetails');
});

Route::get('getMonthChart','API\YearChart\YearController@getMonthChart');

Route::prefix('dunJia')->group(function(){
    // Route::get('/{structure}/{category}/{value}/{id}/{type}','API\DunJiaController@getDunJia');
    Route::get('getHourDunJia/{month}/{day}/{year}/{category}/{value}','API\Dunjia\Hour\HourController@getDunjia');
    Route::get('formation','API\Dunjia\Hour\HourController@formation');
    Route::get('dates/{date}','API\DunJiaController@getDates');
    Route::get('getDate/{id}','API\DunJiaController@getDateIntervel');
    Route::get('dateList/{id}','API\DunJiaController@getDateList');
    Route::get('chartList/{id}','API\DunJiaController@getChartList');
});

//home
Route::post('get-home-chart','API\LandingPage\LandingPageController@getHomeChart');



Route::resources([
    'chart' => 'API\ChartController',
    'se' => 'API\SEController',
    'center' => 'API\CenterController',
    'south' => 'API\SController',
    'sw' => 'API\SWController',
    'east' => 'API\EController',
    'west' => 'API\WController',
    'ne' => 'API\NEController',
    'north' => 'API\NController',
    'nw' => 'API\NWController',
    'previewChart' => 'API\PreviewController', 
    'user' => 'API\UserController',
    'register' => 'API\User\RegistrationController',
    
]);

// preview
Route::get('previewChart/{id}/{type}','API\PreviewController@previewCenter');
Route::get('preview/{id}/{type}/{chart}','API\PreviewController@preview');

// se
Route::get('se/{id}/{type}','API\SEController@seShow');

// s
Route::get('south/{id}/{type}','API\SController@sShow');

// sw
Route::get('sw/{id}/{type}','API\SWController@swShow');

// e
Route::get('east/{id}/{type}','API\EController@eShow');

// w
Route::get('west/{id}/{type}','API\WController@wShow');

// ne
Route::get('ne/{id}/{type}','API\NEController@neShow');

//n
Route::get('north/{id}/{type}','API\NController@nShow');

//nw
Route::get('nw/{id}/{type}','API\NWController@nwShow');



Route::post('chartList','API\ChartController@fetchChart');
Route::get('chart/{id}/{type}','API\ChartController@showChart');

Route::get('center/{id}/{type}','API\CenterController@center');



Route::get('preview/{id}/{type}','API\PreviewController@outside');


Route::get('content','API\ContentController@loadContent');
Route::get('content/{id}/{type}/{part}','API\ContentController@loadContentWithID');
// Route::get('content','API\ContentController@index');

Route::get('sample',function(){
    return 123;
});


Route::prefix('tong-shu')->group(function(){
    Route::get('/index','API\TongShu\DongGongController@index');
    Route::get('/dong-gong/{id}','API\TongShu\DongGongController@getDongGong');
    
    Route::post('/dong-gong/suit-avoid','API\TongShu\DongGongController@addSuitAvoid');
    Route::get('/dong-gong/suit-avoid/list','API\TongShu\DongGongController@suitAvoidList');
    Route::put('/dong-gong/suit-avoid/update/{id}','API\TongShu\DongGongController@updateSuitAvoid');
   

    Route::post('/update','API\TongShu\DongGongController@update');
    Route::post('report/get-chief','API\TongShu\ReportController@getChief');

    Route::get('/getDate/{year}/{day}/{month}','API\TongShu\DongGongController@getDate');
    Route::get('/time-star/index','API\TongShu\DongGongController@timeStar');
    Route::get('/time-star/show/{id}','API\TongShu\DongGongController@showTimeStar');
    Route::get('/time-star/value','API\TongShu\DongGongController@showAllTimeStarValue');
    Route::post('/time-star/store','API\TongShu\DongGongController@showAllTimeStarStore');
});