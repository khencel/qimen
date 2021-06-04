<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Stem;
use App\Branch;
use App\Element;
use App\User;
use App\English;
use App\Deitie;
use App\Door;
use App\Star;
use App\Number;
use App\Position;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->user();
        $this->stem();
        $this->branch();
        $this->element();
        $this->english();
        $this->deitie();
        $this->door();
        $this->star();
        $this->position();
        $this->number();
    }
    
    public function user(){
        User::insert([
            [
                'first_name' => 'Jennel',
                'last_name' => 'Cheng',
                'birth_date' => '',
                'birth_time' => '',
                'country' => '',
                'email' => 'jennelcheng@gmail.com',
                'email_verified_at' => now(),
                'api_token' => Str::random(60),
                'remember_token' => Str::random(10),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            ],
        ]);
    }

    public function stem(){
        Stem::insert([
            [
                'name' => 'Yang Wood',
                'value' => 'Jia'
            ],
            [
                'name' => 'Yin Wood',
                'value' => 'Yi'
            ],
            [
                'name' => 'Yang Fire',
                'value' => 'Bing'
            ],
            [
                'name' => 'Yin Fire',
                'value' => 'Ding'
            ],
            [
                'name' => 'Yang Earth',
                'value' => 'Wu'
            ],
            [
                'name' => 'Yin Earth',
                'value' => 'Ji'
            ],
            [
                'name' => 'Yang Metal',
                'value' => 'Geng'
            ],
            [
                'name' => 'Yin Metal',
                'value' => 'Xin'
            ],
            [
                'name' => 'Yang Water',
                'value' => 'Ren'
            ],
            [
                'name' => 'Yin Water',
                'value' => 'Gui'
            ],
        ]);
    }

    public function branch(){
        Branch::insert([
            [
                'name' => 'Zi'
            ],
            [
                'name' => 'Chou'
            ],
            [
                'name' => 'Yin'
            ],
            [
                'name' => 'Mao'
            ],
            [
                'name' => 'Chen'
            ],
            [
                'name' => 'Si'
            ],
            [
                'name' => 'Wu'
            ],
            [
                'name' => 'Wei'
            ],
            [
                'name' => 'Shen'
            ],
            [
                'name' => 'You'
            ],
            [
                'name' => 'Xu'
            ],
            [
                'name' => 'Hai'
            ],
        ]);
    }

    public function element(){
        Element::insert([
            [
                'name' => 'Fire'
            ],
            [
                'name' => 'Earth'
            ],
            [
                'name' => 'Metal'
            ],
            [
                'name' => 'Water'
            ],
            [
                'name' => 'Wood'
            ],
        ]);
    }

    public function english(){
        English::insert([
            [
                'name' => 'Rat'
            ],
            [
                'name' => 'Ox'
            ],
            [
                'name' => 'Tiger'
            ],
            [
                'name' => 'Rabbit'
            ],
            [
                'name' => 'Dragon'
            ],
            [
                'name' => 'Snake'
            ],
            [
                'name' => 'Horse'
            ],
            [
                'name' => 'Goat'
            ],
            [
                'name' => 'Monkey'
            ],
            [
                'name' => 'Rooster'
            ],
            [
                'name' => 'Dog'
            ],
            [
                'name' => 'Pig'
            ],
        ]);
    }

    public function deitie(){
        Deitie::insert([
            [
                'name' => 'Chief',
                'value' => 'Chief',
                'chinese' => 'Fu'
            ],
            [
                'name' => 'Nine Heaven',
                'value' => 'Heaven',
                'chinese' => 'Tian'
            ],
            [
                'name' => 'Nine Earth',
                'value' => 'Earth',
                'chinese' => 'Di'
            ],
            [
                'name' => 'Great Moon',
                'value' => 'Moon',
                'chinese' => 'Yin'
            ],
            [
                'name' => 'Six Harmony',
                'value' => 'Harmony',
                'chinese' => 'He'
            ],
            [
                'name' => 'Red Phoenix',
                'value' => 'Phoenix',
                'chinese' => 'Que'
            ],
            [
                'name' => 'Black Tortoise',
                'value' => 'Tortoise',
                'chinese' => 'Xuan'
            ],
            [
                'name' => 'White Tiger',
                'value' => 'Tiger',
                'chinese' => 'Hu'
            ],
            [
                'name' => 'Grappling Hook',
                'value' => 'Hook',
                'chinese' => 'Chen'
            ],
            [
                'name' => 'Surging Snake',
                'value' => 'Snake',
                'chinese' => 'She'
            ],
        ]);
    }

    public function door(){
        Door::insert([
            [
                'name' => 'Life',
                'chinese' => 'Sheng'
            ],
            [
                'name' => 'Open',
                'chinese' => 'Kai'
            ],
            [
                'name' => 'Rest',
                'chinese' => 'Xiu'
            ],
            [
                'name' => 'Harm',
                'chinese' => 'Shang'
            ],
            [
                'name' => 'Delusion',
                'chinese' => 'Du'
            ],
            [
                'name' => 'Fear',
                'chinese' => 'Jing'
            ],
            [
                'name' => 'Death',
                'chinese' => 'Si'
            ],
            [
                'name' => 'Scenery',
                'chinese' => 'Jing'
            ],
        ]);
    }

    public function star(){
        Star::insert([
            [
                'name' => 'Assistant',
                'chinese' => 'Fu',
            ],
            [
                'name' => 'Bird',
                'chinese' => ''
            ],
            [
                'name' => 'Ambassador',
                'chinese' => 'Ren'
            ],
            [
                'name' => 'Grass',
                'chinese' => 'Peng'
            ],
            [
                'name' => 'Grain',
                'chinese' => 'Rui'
            ],
            [
                'name' => 'Destructor',
                'chinese' => 'Chong'
            ],
            [
                'name' => 'Heart',
                'chinese' => 'Xin'
            ],
            [
                'name' => 'Pillar',
                'chinese' => 'Zhu'
            ],
            [
                'name' => 'Hero',
                'chinese' => 'Ying'
            ],
        ]);
    }

    public function position(){
        Position::insert([
            [
                'first_word' => 'Yue',
                'second_word' => 'Wang'
            ],
            [
                'first_word' => 'Shen',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Quan',
                'second_word' => 'Yi'
            ],
            [
                'first_word' => 'Die',
                'second_word' => 'Xue'
            ],
            [
                'first_word' => 'Shen',
                'second_word' => 'Jia'
            ],
            [
                'first_word' => 'Qi',
                'second_word' => 'Ge'
            ],
            [
                'first_word' => 'Yue',
                'second_word' => 'Sheng'
            ],
            [
                'first_word' => 'Zhu',
                'second_word' => 'Tou'
            ],
            [
                'first_word' => 'Xiang',
                'second_word' => 'Zuo'
            ],
            [
                'first_word' => 'Long',
                'second_word' => 'Fan'
            ],
            [
                'first_word' => 'Wu',
                'second_word' => 'Xing'
            ],
            [
                'first_word' => 'Ri',
                'second_word' => 'Shi'
            ],
            [
                'first_word' => 'Ri',
                'second_word' => 'Zhi'
            ],
            [
                'first_word' => 'Ri',
                'second_word' => 'Mu'
            ],
            [
                'first_word' => 'Xing',
                'second_word' => 'Ge'
            ],
            [
                'first_word' => 'Chong',
                'second_word' => 'Zha'
            ],
            [
                'first_word' => 'Yue',
                'second_word' => 'Shi'
            ],
            [
                'first_word' => 'Xing',
                'second_word' => 'Sheng'
            ],
            [
                'first_word' => 'Ri',
                'second_word' => 'Wang'
            ],

            [
                'first_word' => 'Xing',
                'second_word' => 'Wang'
            ],

            [
                'first_word' => 'Xing',
                'second_word' => 'Shi'
            ],

            [
                'first_word' => 'Geng',
                'second_word' => 'Xing'
            ],
            [
                'first_word' => 'Zhan',
                'second_word' => 'Ge'
            ],
            [
                'first_word' => 'Ren',
                'second_word' => 'Xing'
            ],
            [
                'first_word' => 'Da',
                'second_word' => 'Ge'
            ],
            [
                'first_word' => 'Yu',
                'second_word' => 'Nu'
            ],

            [
                'first_word' => 'Ji',
                'second_word' => 'Xing'
            ],

            [
                'first_word' => 'Tai',
                'second_word' => 'Huo'
            ],
            [
                'first_word' => 'Di',
                'second_word' => 'Jia'
            ],
            [
                'first_word' => 'Long',
                'second_word' => 'Zou'
            ],

            [
                'first_word' => 'Fei',
                'second_word' => 'Gong'
            ],

            [
                'first_word' => 'Xiu',
                'second_word' => 'Zha'
            ],
            [
                'first_word' => 'Feng',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Feng',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Gu',
                'second_word' => 'Xing'
            ],
            [
                'first_word' => 'She',
                'second_word' => 'Jiao'
            ],
            [
                'first_word' => 'Xin',
                'second_word' => 'Xing'
            ],
            [
                'first_word' => 'Xing',
                'second_word' => 'Mu'
            ],
            [
                'first_word' => 'Fu',
                'second_word' => 'Ge'
            ],
            [
                'first_word' => 'Di',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Hu',
                'second_word' => 'Chang'
            ],
            [
                'first_word' => 'Ying',
                'second_word' => 'Bai'
            ],
            [
                'first_word' => 'Fu',
                'second_word' => 'Gong'
            ],
            [
                'first_word' => 'Ri',
                'second_word' => 'Sheng'
            ],
            [
                'first_word' => 'Xing',
                'second_word' => 'Zhi'
            ],
            [
                'first_word' => 'Yun',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Yu',
                'second_word' => 'Nu'
            ],
            [
                'first_word' => 'Tian',
                'second_word' => 'Jia'
            ],
            [
                'first_word' => 'Zhen',
                'second_word' => 'Zha'
            ],
            [
                'first_word' => 'Gui',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Gui',
                'second_word' => 'Jia'
            ],
            [
                'first_word' => 'Long',
                'second_word' => 'Dun'
            ],
            [
                'first_word' => 'Ren',
                'second_word' => 'Jia'
            ],

            [
                'first_word' => 'Tian',
                'second_word' => 'Dun'
            ],

            [
                'first_word' => 'Ren',
                'second_word' => 'Dun'
            ],

            [
                'first_word' => 'Hu',
                'second_word' => 'Dun'
            ],
        ]);
    }

    public function number(){
        for($x = 2;$x <= 9;$x++){
            Number::insert([
                [
                    'number' => $x
                ],
            ]);
        }
        
    }

}
