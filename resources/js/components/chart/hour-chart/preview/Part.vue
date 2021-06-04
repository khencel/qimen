<template>
<div class="text-dark position-relative">
    <div v-show="palace == 'SE' || palace == 'NE' || palace == 'S' || palace == 'N'" :class="palace_se_ne_style">
            <span v-show="palace == 'SE'">
                <img class="mb-2" src="/img/xun.png" width="80" height="35" alt="">
            </span>
            <span v-show="palace == 'S'">
                <img class="mb-2" src="/img/li.png" width="60" height="35" alt="">
            </span>
            <span v-show="palace == 'NE'">
                <img src="/img/gen.png" width="80" height="35" alt="">
            </span>
            <span v-show="palace == 'N'">
                <img src="/img/kan.png" width="60" height="35" alt="">
            </span>
    </div>

    <div v-show="palace == 'SW' || palace == 'NW'" :class="palace_sw_nw_style">
            <span v-show="palace == 'SW'">
                <img class="mb-2" src="/img/kun.png" width="80" height="35" alt="">
            </span>
            <span v-show="palace == 'NW'">
                <img src="/img/qian.png" width="80" height="35" alt="">
            </span>
    </div>

    <div v-show="palace == 'E' || palace == 'W'" :class="palace_e_w_style">
            <span v-show="palace == 'E'">
                <img class="mb-2" src="/img/zhen.png" width="50" height="80" alt="">
            </span>
            <span v-show="palace == 'W'">
                <img class="mb-2" src="/img/dui.png" width="50" height="80" alt="">
            </span>
    </div>

    <div class="row m-0 text-center" style="height:70px">
        <div class="col-md-4 pt-2 p-0 position-relative">
            <p>
                <img :src="heaven.photo != null?'/img/'+heaven.photo:''" width="20" alt="">
                <br>
                <small>
                    <strong>
                        {{heaven.value}}
                    </strong>
                </small>
            </p>
            <div class="bg-warning position-absolute" style="top:0px;right:-25%;width:50%;">
                <div class="w-100">
                 
                    <div class="position-relative"
                        v-if="heaven.value == stemhour || stem_top == stemhour"
                         style="top:0px;background-color:brown;color:white;font-size:8px;">
                        <strong>Hour</strong>
                    </div>
                    <div class="position-relative" 
                        v-if="heaven.value == stemday || stem_top == stemday"
                        style="top:0px;background-color:skyblue;color:white;font-size:8px;">
                        <strong>Day</strong>
                    </div> 
                    <div class="position-relative" v-show="deitie.value == jiachief" style="top:0px;background-color:orange;color:white;font-size:8px;">
                        <strong>Jia</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 pt-2 p-0 position-relative">
            <div v-show="stem_top" class="position-absolute w-50 h-50 pt-2" style="bottom:-25%;left:-25%;">
                <p>
                    <i class="fas fa-align-justify"></i>
                    <br>
                    <small style="font-size:10px;">
                         <strong>
                            {{center}}
                        </strong>
                    </small>
                </p>
            </div>
            <div v-show="other" class="position-absolute w-50 h-50 pt-2" style="bottom:-10%;right:-25%;">
                <p>
                    <i class="fas fa-align-justify"></i>
                    <br>
                    <small style="font-size:10px;">
                         <strong>
                            Qin
                            <br>
                            Bird
                        </strong>
                    </small>
                </p>
            </div>

            <!-- outer top and bottom top portion-->
            <div v-show="palace == 'SE' || palace == 'SW' || palace == 'S'"  :class="outer_top_bottom">
                <div class="row justify-content-center m-0 pl-2 pr-2">
                    <div v-for="(item, index) in top_bottom" :key="index" class="col-6 p-0">
                        <strong>{{item}}</strong>
                    </div>
                </div>
            </div>
            <p>
                <img :src="star.photo != null?'/img/'+star.photo:''" width="20" alt="">
                <br>
                <small> 
                    <strong>
                        {{star.chinese}}
                    </strong>
                </small>
                <br>
                <small>
                    <strong>{{star.name}}</strong>
                </small>
            </p>
        </div>
        <div class="col-md-4 pt-2 p-0">
            <p :class="deitie_red.includes(deitie.id)?'text-danger':''">
                <img :src="deitie.photo != null?'/img/'+deitie.photo:''" width="20" alt="">
                <br>
                <small>
                    <strong>{{deitie.chinese}}</strong>
                </small>
                <br>
                <small>
                    <strong>{{deitie.value}}</strong>
                </small>
            </p>
        </div>
    </div>
    <div class="w-100 m-0 position-relative" style="height:80px">
        <!-- left and right outer -->
        <div :class="outer_left_right">
            <div v-for="(item, index) in left_right" :key="index" :class="Object.keys(left_right).length == 1?'h-50 mt-3 pt-2':'h-50 pt-2'">
                <strong>{{item}}</strong>
            </div>
        </div>

        <div style="width:26%;margin-left:4%;" class="float-left h-100 ">
            <div class="row text-center justify-content-center m-0 h-100">
                <div v-show="formation1 != null" class="col-6 pt-4 p-0 text-danger">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation1 != null?formation1.first_word:''}}
                            <br>
                            {{formation1 != null?formation1.second_word:''}}
                        </small>
                    </p>
                </div>
                <div v-show="formation2 != null" class="col-6 pt-4 p-0 text-danger">
                   <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation2 != null?formation2.first_word:''}}
                            <br>
                            {{formation2 != null?formation2.second_word:''}}
                        </small>
                    </p>
                </div>
            </div>
        </div>
        <div style="width:40%" class="float-left h-100">
            <div :class="formation3 != null && formation4 != null?'row text-center m-0 h-100 justify-content-center':'row text-center m-0 h-100'">
                <div v-show="formation3 != null" class="col-4 pt-4 p-0">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation3 != null?formation3.first_word:''}}
                            <br>
                            {{formation3 != null?formation3.second_word:''}}
                        </small>
                    </p>
                </div>
                <div v-show="formation4 != null" class="col-4 pt-4 p-0">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation4 != null?formation4.first_word:''}}
                            <br>
                            {{formation4 != null?formation4.second_word:''}}
                        </small>
                    </p>
                </div>
                <div v-show="formation5 != null" class="col-4 ml-auto pt-4 p-0">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation5 != null?formation5.first_word:''}}
                            <br>
                            {{formation5 != null?formation5.second_word:''}}
                        </small>
                    </p>
                </div>
            </div>
        </div>
        <div style="width:26%;margin-right:4%;" class=" float-right h-100">
            <div class="row justify-content-center m-0 text-center h-100">
                <div v-show="formation6 != null" class="col-6 pt-4 p-0">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation6 != null?formation6.first_word:''}}
                            <br>
                            {{formation6 != null?formation6.second_word:''}}
                        </small>
                    </p>
                </div>
                <div v-show="formation7 != null" class="col-6 pt-4 p-0">
                    <p>
                        <i class="fas fa-align-justify"></i>
                        <br>
                        <small style="font-size:10px;font-weight:bold">
                            {{formation7 != null?formation7.first_word:''}}
                            <br>
                            {{formation7 != null?formation7.second_word:''}}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row m-0 text-center" style="height:70px">
        <div class="col-md-4 pt-2 p-0">
            <p>
                <img :src="earth_stem.photo != null?'/img/'+earth_stem.photo:''" width="20" alt="">
                <br>
                <small>
                    <strong>
                        {{earth_stem.value}}
                    </strong>
                </small>
            </p>
        </div>
        <div class="col-md-4 pt-2 p-0 position-relative">
            <!-- outer top and bottom bottom portion-->
            <div v-show="palace == 'NE' || palace == 'NW' || palace == 'N'"  :class="outer_top_bottom">
                <div class="row justify-content-center m-0 pl-2 pr-2">
                    <div v-for="(item, index) in top_bottom" :key="index" class="col-6 p-0">
                        <strong>{{item}}</strong>
                    </div>
                </div>
            </div>
            <div v-show="stem_bottom" class="position-absolute w-50 h-50 pt-2" style="top:-25%;left:-25%;">
                <p>
                    <i class="fas fa-align-justify"></i>
                    <br>
                    <small style="font-size:10px;">
                         <strong>
                            {{center}}
                        </strong>
                    </small>
                </p>
            </div>
            <p :class="door_red.includes(door.id)?'text-danger':''">
                <img :src="door.photo != null?'/img/'+door.photo:''" width="20" alt="">
                <br>
                <small>
                    <strong>{{door.chinese}}</strong>
                </small>
                <br>
                <small>
                    <strong>{{door.name}}</strong>
                </small>
            </p>
        </div>
        <div class="col-md-4 pt-2 p-0">
            <h2>
                <strong>
                    {{number}}
                </strong>
            </h2>
        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        props:['palace','text','text2','structure','chart_numb','id','stem','type','day','jiabranch','jiaformation','stemday','jiachief','stemhour'],
        data(){
            return{
                jia:'',
                jiaday:'',
                door_red:[1,2,3,8],
                deitie_red:[1,2,3,4,5],
                heaven_red:[],
                earth_red:[],
                palace_se_ne_style:'',
                palace_sw_nw_style:'',
                palace_e_w_style: '',
                outer_top_bottom:'',
                outer_left_right:'',
                earth_stem: {},
                star:{},
                deitie:{},
                heaven:{},
                door:{},
                number:"",
                stem_top:false,
                stem_bottom:false,
                other:false,
                formation1:{},
                formation2:{},
                formation3:{},
                formation4:{},
                formation5:{},
                formation6:{},
                formation7:{},
                top_bottom:[],
                left_right:[],
                center:"",
                stemcenter:''
            }
        },
        methods: {
            palaceStyle(){
                if(this.palace == "SE"){
                    this.palace_se_ne_style = "position-absolute text-white se-outer";
                }

                if(this.palace == "NE"){
                    this.palace_se_ne_style = "position-absolute text-white ne-outer";
                }

                if(this.palace == "SW"){
                    this.palace_sw_nw_style = "position-absolute text-white sw-outer";
                }

                if(this.palace == "NW"){
                    this.palace_sw_nw_style = "position-absolute text-white nw-outer";
                }
                if(this.palace == "S"){
                    this.palace_se_ne_style = "position-absolute text-white s-outer";
                }
                if(this.palace == "N"){
                    this.palace_se_ne_style = "position-absolute text-white n-outer";
                }
                if(this.palace == "E"){
                    this.palace_e_w_style = "position-absolute text-center text-white e-outer";
                }
                if(this.palace == "W"){
                    this.palace_e_w_style = "position-absolute text-center text-white w-outer";
                }
            },
            outerStyle(){
                if(this.palace == "SE"){
                    this.outer_top_bottom = "position-absolute w-100 se_outer";
                    this.outer_left_right = "position-absolute h-100 text-warning outer-left"
                }

                if(this.palace == "NE"){
                    this.outer_top_bottom = "position-absolute w-100 ne_outer";
                    this.outer_left_right = "position-absolute h-100 text-warning outer-left"
                }

                if(this.palace == "SW"){
                    this.outer_top_bottom = "position-absolute w-100 se_outer";
                    this.outer_left_right = "position-absolute h-100 text-warning outer-right"
                }

                if(this.palace == "NW"){
                    this.outer_top_bottom = "position-absolute w-100 ne_outer";
                    this.outer_left_right = "position-absolute h-100 text-warning outer-right"
                }
                if(this.palace == "S"){
                    this.outer_top_bottom = "position-absolute w-100 s_outer";
                }
                if(this.palace == "N"){
                   this.outer_top_bottom = "position-absolute w-100 n_outer";
                }
                if(this.palace == "E"){
                    this.outer_left_right = "position-absolute h-100 text-warning outer-left-e"
                }
                if(this.palace == "W"){
                    this.outer_left_right = "position-absolute h-100 text-warning outer-right-w"
                }
            },

            loadPartChart(){
                axios.get('/api/hour/part/'+this.id+'/'+this.structure+'/'+this.chart_numb+'/'+this.palace+'/?api_token='+window.token)
                .then(res => {
                    // console.log(res.data);
                    this.earth_stem = res.data.chart.earth_stem;
                    this.star = res.data.chart.star;
                    this.deitie = res.data.chart.deitie;
                    this.heaven = res.data.chart.heaven_stem;
                    this.door = res.data.chart.door;
                    this.number = res.data.chart.number_id;
                    this.stem_top = res.data.chart.heaven;
                    this.stem_bottom = res.data.chart.earth;
                    this.other = res.data.chart.other;
                    this.formation1 = res.data.chart.formation1;
                    this.formation2 = res.data.chart.formation2;
                    this.formation3 = res.data.chart.formation3;
                    this.formation4 = res.data.chart.formation4;
                    this.formation5 = res.data.chart.formation5;
                    this.formation6 = res.data.chart.formation6;
                    this.formation7 = res.data.chart.formation7;
                    this.top_bottom = res.data.chart.top_bottom != null?res.data.chart.top_bottom.split(" "):'';
                    this.left_right = res.data.chart.left_right != null?res.data.chart.left_right.split(" "):'';

                    this.center = res.data.center.center.value
                })
            },

            
        },
        mounted() {
            this.palaceStyle();
            this.loadPartChart();
            this.outerStyle();
            // console.log(this.stemhour);
        }
    }
</script>

<style scoped>
    .se-outer{
        left:-40px;
        top:-40px;
        width: 60%;
    }

    .ne-outer{
        left:-40px;
        bottom:-40px;
        width: 60%;
    }

    .sw-outer{
        right:-40px;
        top:-40px;
        text-align: right;
        width: 60%;
    }

    .nw-outer{
        right:-40px;
        bottom:-40px;
        width: 60%;
        text-align: right;
    }

    .s-outer{
        left:50%;
        top:-40px;
        width: 60%;
        margin-left: -30%;
        text-align: center;
    }
    .n-outer{
        left:50%;
        bottom:-40px;
        width: 60%;
        margin-left: -30%;
        text-align: center;
    }
    .e-outer{
        left:-50px;
        width: 20%;
        height: 60%;
        top: 50%;
        margin-top:-20%;
    }
    .w-outer{
        right:-40px;
        width: 20%;
        height: 60%;
        top: 50%;
        margin-top:-20%;
    }

    p{
        line-height: 10px;
    }

    .se_outer{
        top:-35px;
        color:yellow
    }
    .s_outer{
        top:-35px;
        left:-100%;
        color:yellow
    }
    .n_outer{
        bottom:-35px;
        left:-100%;
        color:yellow
    }

    .ne_outer{
        bottom:-35px;
        color:yellow
    }

    .outer-left{
        left:-17%;
    }

    .outer-left-e{
        left:-17%;
        bottom:-100%;
    }

    .outer-right{
        right:-17%;
    }
    .outer-right-w{
        right:-17%;
        top:-110%;
    }
</style>
