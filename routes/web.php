<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('qimen');
});



Route::group(['middleware' => ['auth' => 'email_verified']], function(){
    if(\Auth::check()){
        Route::get('/', function () {
            return view('qimen');
        });   
    }
    Route::get('/home', 'HomeController@index')->name('home');
});

Route::get('email_verify', function(){
    return view('user-level.email_verify');
});


Auth::routes();

Route::group(['middleware' => ['auth']],function(){
    Route::prefix('chart')->group(function (){
        Route::get('list',function(){
            return view('chart.chart_list');
        });
        Route::get('list/four',function(){
            return view('chart.chart_list_yin_four');
        });
        Route::get('list/seven',function(){
            return view('chart.chart_list_yin_seven');
        });
    
        // yang chart
        Route::get('day/yang_structure/upper_cycle',function(){
            return view('chart.day_chart.yang_structure');
        });
    
        Route::get('day/yang_structure/middle_cycle',function(){
            return view('chart.day_chart.yang_structure_middle');
        });
    
        Route::get('day/yang_structure/lower_cycle',function(){
            return view('chart.day_chart.yang_structure_lower');
        });
        // yang chart
    
        //yin chart
        Route::get('day/yin_structure/upper_cycle',function(){
            return view('chart.day_chart.yin_structure_upper');
        });
    
        Route::get('day/yin_structure/middle_cycle',function(){
            return view('chart.day_chart.yin_structure_middle');
        });
    
        Route::get('day/yin_structure/lower_cycle',function(){
            return view('chart.day_chart.yin_structure_lower');
        });
    
        //year chart
    
    
        // part chart
        Route::get('chartEnv/{id}/{type}', 'ChartController@chartName');
        Route::get('chartCenter/{id}/{type}', 'ChartController@chartCenter');
        Route::get('chartSE/{id}/{type}', 'ChartController@chartSE');
        Route::get('chartS/{id}/{type}', 'ChartController@chartS');
        Route::get('chartSW/{id}/{type}', 'ChartController@chartSW');
        Route::get('chartE/{id}/{type}', 'ChartController@chartE');
        Route::get('chartW/{id}/{type}', 'ChartController@chartW');
        Route::get('chartNE/{id}/{type}', 'ChartController@chartNE');
        Route::get('chartN/{id}/{type}', 'ChartController@chartN');
        Route::get('chartNW/{id}/{type}', 'ChartController@chartNW');
        Route::get('chartPreview/{id}/{type}', 'ChartController@chartPreview');
    
        // end part chart
    });

    //yin chart
    Route::get('year-chart',function(){
        return view('chart.year_chart');
    });
    //year chart

    // setting
    Route::get('profile',function(){
        return view('setting.profile');
    });

    Route::get('change-password',function(){
        return view('setting.change_password');
    });

    Route::prefix('user')->group(function(){
        Route::get('list',function(){
            return view('users.index',[
                't' => request('t')
            ]);
        });
    });
    // user 
    Route::get('victory-day', function () {
        return view('user-level.user_home');
    });
    Route::get('victory-day-guest', function () {
        return view('victory.guest');
    });

    Route::get('user/change-password', function () {
        return view('users.change_password');
    });

    Route::get('user/profile', function () {
        return view('users.profile');
    });
    // trigram management
    Route::prefix('trigram')->group(function(){
        Route::get('/list','Trigram\TrigramController@index');
        Route::get('/palace/{id}','Trigram\TrigramController@trigram');
        Route::get('/number/{id}','Trigram\TrigramController@number');
        Route::get('/people/{id}','Trigram\TrigramController@people');
        Route::get('/parts/{id}','Trigram\TrigramController@bodyParts');
        Route::get('/animals/{id}','Trigram\TrigramController@animals');
        Route::get('/sickness/{id}','Trigram\TrigramController@sickness');
        Route::get('/colour/{id}','Trigram\TrigramController@colour');
    });
    // end trigram management

    // stem management
        Route::prefix('stem')->group(function(){
           Route::get('/list','Stem\StemController@index');
           Route::get('/v/name-qimen/{id}','Stem\StemController@nameQimen');
           Route::get('/v/represent/{id}','Stem\StemController@represent');
           Route::get('/v/element/{id}','Stem\StemController@element');
           Route::get('/v/direction/{id}','Stem\StemController@direction');
           Route::get('/v/season/{id}','Stem\StemController@season');
           Route::get('/v/month/{id}','Stem\StemController@month');
           Route::get('/v/astronomy/{id}','Stem\StemController@astronomy');
           Route::get('/v/environment/{id}','Stem\StemController@environment');
           Route::get('/v/people/{id}','Stem\StemController@attribute');
           Route::get('/v/material/{id}','Stem\StemController@attribute');
           Route::get('/v/building/{id}','Stem\StemController@attribute');
           Route::get('/v/career/{id}','Stem\StemController@attribute');
           Route::get('/v/nourishment/{id}','Stem\StemController@attribute');
           Route::get('/v/characteristic/{id}','Stem\StemController@attribute');
           Route::get('/v/fitness/{id}','Stem\StemController@attribute');
           Route::get('/v/voice/{id}','Stem\StemController@attribute');
           Route::get('/v/organ/{id}','Stem\StemController@attribute');
           Route::get('/v/part/{id}','Stem\StemController@attribute');
           Route::get('/v/taste/{id}','Stem\StemController@attribute');
           Route::get('/v/colour/{id}','Stem\StemController@attribute');
           Route::get('/formation','Stem\StemController@formation');
           Route::get('/formation-list/{id}','Stem\StemController@formationList');
        });
    // end stem management
        
    // door management
    Route::prefix('door')->group(function(){
        Route::get('/list','Door\DoorController@index');
        Route::get('/v/description/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/attribute/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/element/{id}','Door\DoorController@attribute');
        Route::get('/v/branch/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/gua/{id}','Door\DoorController@attribute');
        Route::get('/v/direction/{id}','Door\DoorController@attribute');
        Route::get('/v/shu/{id}','Door\DoorController@attribute');
        Route::get('/v/envoy/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/achievement/{id}','Door\DoorController@multipleAttribute');

        Route::get('/v/weather/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/personality/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/geography/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/people/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/material/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/property/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/career/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/part/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/temperament/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/nourishment/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/birth/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/marriage/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/illness/{id}','Door\DoorController@multipleAttribute');
        Route::get('/v/litigation/{id}','Door\DoorController@multipleAttribute');

        Route::get('/door/stem','Door\DoorController@doorStemList');
        Route::get('/door/stem/{id}','Door\DoorController@doorStem');

        Route::get('/palace','Door\DoorController@doorPalaceList');
        Route::get('/door/palace/{id}','Door\DoorController@doorPalace');
    });
    // end door management

     // star management
     Route::prefix('star')->group(function(){
        Route::get('/list','Star\StarController@index');
        Route::get('/v/name/{id}','Star\StarController@attribute');
        Route::get('/v/polarity/{id}','Star\StarController@attribute');
        Route::get('/v/gua/{id}','Star\StarController@attribute');
        Route::get('/v/palace/{id}','Star\StarController@attribute');
        Route::get('/v/direction/{id}','Star\StarController@attribute');
        Route::get('/v/element/{id}','Star\StarController@attribute');
        Route::get('/v/branch/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/quality/{id}','Star\StarController@attribute');
        Route::get('/v/attribute/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/characteristic/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/represents/{id}','Star\StarController@multipleAttribute');

        Route::get('/v/weather/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/appearance/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/geography/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/people/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/material/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/property/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/career/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/part/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/temperament/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/nourishment/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/illness/{id}','Star\StarController@multipleAttribute');
        Route::get('/v/marriage/{id}','Star\StarController@multipleAttribute');

        Route::get('/combo/one','Star\StarController@combo');
        Route::get('/combo/two','Star\StarController@combo');
        Route::get('/combo/{type}/{id}','Star\StarController@comboStar');
    });
    // end star management

    // deitie management
    Route::prefix('deitie')->group(function(){
        Route::get('/list','Deitie\DeitieController@index');
        Route::get('/v/deity/{id}','Deitie\DeitieController@attribute');
        Route::get('/v/element/{id}','Deitie\DeitieController@attribute');
        Route::get('/v/quality/{id}','Deitie\DeitieController@attribute');
        Route::get('/v/represents/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/suitable/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/unsuitable/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/characteristic/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/colour/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/number/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/shape/{id}','Deitie\DeitieController@multipleAttribute');

        Route::get('/v/weather/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/personality/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/environment/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/people/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/material/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/property/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/career/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/parts/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/temperament/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/nourishment/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/birth/{id}','Deitie\DeitieController@multipleAttribute');

        Route::get('/v/marriage/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/illness/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/litigation/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/features/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/animal/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/communication/{id}','Deitie\DeitieController@multipleAttribute');
        Route::get('/v/plants/{id}','Deitie\DeitieController@multipleAttribute');

    });
    // end deitie management

    // summary
    Route::prefix('summary')->group(function(){
        Route::get('stem-auspicious-inauspicious','Summary\SummaryController@stemA');
        Route::get('stem-comb-summary','Summary\SummaryController@stemB');
        Route::get('stem-transformation','Summary\SummaryController@stemF');
    });

    // Hour chart management
    Route::prefix('hour')->group(function(){
        // Yang Structure
        Route::prefix('yang')->group(function(){
            Route::get('one','HourChartController@hourChartYang');
            Route::get('two','HourChartController@hourChartYang');
            Route::get('three','HourChartController@hourChartYang');
            Route::get('four','HourChartController@hourChartYang');
            Route::get('five','HourChartController@hourChartYang');
            Route::get('six','HourChartController@hourChartYang');
            Route::get('seven','HourChartController@hourChartYang');
            Route::get('eight','HourChartController@hourChartYang');
            Route::get('nine','HourChartController@hourChartYang');

            Route::get('{structure}/preview/{id}','HourChartController@showChart');
            Route::get('{structure}/day1/{id}/{stem1}','HourChartController@showChart');
            Route::get('{structure}/day2/{id}/{stem1}','HourChartController@showChart');
            Route::get('{structure}/jia/{id}/{stem1}/{bat}','HourChartController@showChart');
            Route::get('{structure}/se/{id}','HourChartController@showChart');
            Route::get('{structure}/s/{id}','HourChartController@showChart');
            Route::get('{structure}/sw/{id}','HourChartController@showChart');
            Route::get('{structure}/e/{id}','HourChartController@showChart');
            Route::get('{structure}/w/{id}','HourChartController@showChart');
            Route::get('{structure}/ne/{id}','HourChartController@showChart');
            Route::get('{structure}/n/{id}','HourChartController@showChart');
            Route::get('{structure}/nw/{id}','HourChartController@showChart');
        });

        Route::prefix('yin')->group(function(){
            Route::get('one','HourChartController@hourChartYang');
            Route::get('two','HourChartController@hourChartYang');
            Route::get('three','HourChartController@hourChartYang');
            Route::get('four','HourChartController@hourChartYang');
            Route::get('five','HourChartController@hourChartYang');
            Route::get('six','HourChartController@hourChartYang');
            Route::get('seven','HourChartController@hourChartYang');
            Route::get('eight','HourChartController@hourChartYang');
            Route::get('nine','HourChartController@hourChartYang');

            Route::get('{structure}/preview/{id}','HourChartController@showChart');
            Route::get('{structure}/day1/{id}/{stem1}','HourChartController@showChart');
            Route::get('{structure}/day2/{id}/{stem1}','HourChartController@showChart');
            Route::get('{structure}/jia/{id}/{stem1}/{bat}','HourChartController@showChart');
            Route::get('{structure}/se/{id}','HourChartController@showChart');
            Route::get('{structure}/s/{id}','HourChartController@showChart');
            Route::get('{structure}/sw/{id}','HourChartController@showChart');
            Route::get('{structure}/e/{id}','HourChartController@showChart');
            Route::get('{structure}/w/{id}','HourChartController@showChart');
            Route::get('{structure}/ne/{id}','HourChartController@showChart');
            Route::get('{structure}/n/{id}','HourChartController@showChart');
            Route::get('{structure}/nw/{id}','HourChartController@showChart');
        });

       
    });

     // Best Year Ever
    Route::prefix('/best-year')->group(function(){
        Route::prefix('/animal')->group(function(){
            Route::get('index',function(){
                return view('best_year_ever.animal_sign.index');
            });
            Route::get('show',function(){
                return view('best_year_ever.animal_sign.show',[
                    'animal'    => request('animal'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('main');
           
            Route::get('show-aspects',function(){
                return view('best_year_ever.animal_sign.show-aspects',[
                    'animal'    => request('animal'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('aspects');

            Route::get('show-luck',function(){
                return view('best_year_ever.animal_sign.show-luck',[
                    'animal'    => request('animal'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('luck');
            
        });
        Route::prefix('day-forecast')->group(function(){
            Route::get('index',function(){
                return view('best_year_ever.day_forecast.index');
            });

            Route::get('show',function(){
                return view('best_year_ever.day_forecast.show',[
                    'pillar'    => request('pillar'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('main');

            Route::get('show-aspects',function(){
                return view('best_year_ever.day_forecast.show-aspects',[
                    'pillar'    => request('pillar'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('aspects');

            Route::get('show-luck',function(){
                return view('best_year_ever.day_forecast.show-luck',[
                    'pillar'    => request('pillar'),
                    'id'        => request('id'),
                    'page'      => request('page')        
                ]);
            })->name('luck');
        });

        Route::prefix('code')->group(function(){
            Route::get('index',function(){
                return view('best_year_ever.code.index');
            });
        }); 

        Route::prefix('user')->group(function(){
            Route::get('index',function(){
                return view('best_year_ever.user-management.index');
            });
        });
        
        Route::prefix('notification')->group(function(){
            Route::get('index',function(){
                return view('best_year_ever.notification.index');
            });
            Route::get('show',function(){
                return view('best_year_ever.notification.show',[
                    'id'    =>  request('id'),
                    'name'  =>  request('name')
                ]);
            });
        }); 
    });

    Route::get('generate','HourChartController@generateChart');

    Route::get('/search',function(){
        return view('search.search');
    });

    Route::get('/search/{id}/{keyword}/{category}', function(){
        return view('search.show');
    });

    Route::get('monthChart',function(){
        return view('month-chart.index');
    });

    Route::get('monthChart/show','ChartController@redirectToMonthChart');
});

Route::get('/privacy',function(){
    return view('data-privacy');
});
Route::get('/copyright',function(){
    return view('copyright');
});

//

Route::get('/db-seed', function() {
    $output = [];
    \Artisan::call('db:seed', $output);
    dd($output);
});

Route::get('/migrate', function() {
    $output = [];
    \Artisan::call('migrate', $output);
    dd($output);
});

Route::get('/month-generate', function() {
    $output = [];
    \Artisan::call('generate:month', $output);
    dd($output);
});

Route::get('email/verify/{id}','EmailVerificationController@verify');

Route::prefix('tong-shu')->group(function(){
    Route::get('/index',function(){
        return view('tongshu.index');
    });

    Route::get('/suit-avoid/index',function(){
        return view('tongshu.tongShuIndex');
    });

    Route::get('/show',function(){
        return view('tongshu.show',[
            'month' =>  request('month'),
            'id' =>  request('id')
        ]);
    });

    Route::get('timestar/index',function(){
        return view('tongshu.timestar');
    });

    Route::get('timestar/update',function(){
        return view('tongshu.timestarupdate',[
            'id'    =>  request('id')
        ]);
    });
});
