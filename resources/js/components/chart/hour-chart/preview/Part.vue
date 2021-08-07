<template>
<div class="text-dark position-relative">

    <div :class="constilationCont">

    </div>

    <div style="width:100px" :class="hexagramStyle">
        <div class="text-center">
            <img :src="topTrigram" width="50" alt="">
        </div>
        <div class="mt-1 text-center">
            <img :src="bottomTrigram" width="50" alt="">
        </div>
        <div class="text-center">
            {{hexagram}}
        </div>
    </div>
    <div class="row m-0" style="height:70px">
        <div class="col-4 pt-2">
            <p :class="stem_aus.includes(heaven.id)?'auspicious':''">
                <img :src="heaven.photo != null?'/img/'+heaven.photo:''" width="30" height="30" alt="">
                <br>
                <small>
                    <strong>
                        {{heaven.value}}
                    </strong>
                </small>
            </p>
            <div class=" position-absolute" style="top:0px;right:-25%;width:60%;">
                <div class="w-100">
                    <div class="position-relative text-center"
                        v-if="(heaven.value == stemhour) ||
                                (stemhour == center?(stem_top == true && stemhour):(stem_top == stemhour)) 
                            "
                         style="top:0px;background-color:brown;color:white;font-size:10px;border-radius:25%;">
                        <strong>Outcome</strong>
                    </div>
                    <div class="position-relative text-center" 
                        v-if="heaven.value == stemday || stem_top == stemday"
                        style="top:0px;background-color:skyblue;color:white;font-size:10px;border-radius:25%;">
                        <strong>Asker</strong>
                    </div> 
                    <div class="position-relative text-center" v-show="deitie.value == jiachief" style="top:0px;background-color:orange;color:white;font-size:10px;border-radius:25%;">
                        <strong>Jia</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 pt-2">
            <div v-show="stem_top" class="position-absolute w-50 h-50 pt-2" style="bottom:-0.5px;left:-25%;">
                <p>
                    <img :src="/img/+img" width="20" height="20" alt="">
                    
                    <br>
                    <small style="font-size:10px;">
                         <strong>
                            {{center}}
                        </strong>
                    </small>
                </p>
            </div>
            <div v-show="other" class="position-absolute w-50 h-50 pt-2" style="right:-25%;">
                <p>
                    <img src="/img/bird.png" width="20" height="20" alt="">
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
            <!-- --- -->

            <p :class="star_aus.includes(star.id)?'auspicious':''">
                <img :src="star.photo != null?'/img/'+star.photo:''" width="30" height="30" alt="">
                <br>
                <small>
                    <strong>{{star.name}}</strong>
                </small>
            </p>
        </div>
        <div class="col-4 pt-2">
            <p :class="deitie_red.includes(deitie.id)?'auspicious':''">
                <img :src="deitie.photo != null?'/img/'+deitie.photo:''" width="30" height="30" alt="">
                <br>
                <small>
                    <strong>{{deitie.value}}</strong>
                </small>
            </p>
        </div>
    </div>


    <div class="row m-0 position-relative justify-content-center" style="height:80px">
        <!-- left and right outer -->
        <div :class="outer_left_right">
            <div v-for="(item, index) in left_right" :key="index" :class="Object.keys(left_right).length == 1?'h-50 mt-3 pt-2':'h-50 pt-2'">
                <strong>{{item}}</strong>
            </div>
        </div>
        <!-- --- -->
        <div v-for="(item, index) in formations" :key="index" class="col-4 text-center p-0 mt-2">
            <p style="line-height:15px;font-size:12px;">
                {{item.formation}}
            </p>
        </div>
    </div>

    <div class="row m-0" style="height:70px">
        <div class="col-4 pt-2">
            <p  :class="stem_aus.includes(earth_stem.id)?'auspicious':''">
                <img :src="earth_stem.photo != null?'/img/'+earth_stem.photo:''" width="30" height="30" alt="">
                <br>
                <small>
                    <strong>
                        {{earth_stem.value}}
                    </strong>
                </small>
            </p>
        </div>
        <div class="col-4 pt-2">
            <!-- outer top and bottom bottom portion-->
            <div v-show="palace == 'NE' || palace == 'NW' || palace == 'N'"  :class="outer_top_bottom">
                <div class="row justify-content-center m-0 pl-2 pr-2">
                    <div v-for="(item, index) in top_bottom" :key="index" class="col-6 p-0">
                        <strong>{{item}}</strong>
                    </div>
                </div>
            </div>
            <!-- --- -->
            <div v-show="stem_bottom" class="position-absolute w-50 h-50 pt-2" style="top:-25%;left:-25%;">
                <p>
                    <img :src="/img/+img" width="20" height="20" alt="">
                    <br>
                    <small style="font-size:10px;">
                         <strong>
                            {{center}}
                        </strong>
                    </small>
                </p>
            </div>
            <p :class="door_red.includes(door.id)?'auspicious':''">
                <img :src="door.photo != null?'/img/'+door.photo:''" width="30" height="30" alt="">
                <br>
                <small>
                    <strong>{{door.name}}</strong>
                </small>
            </p>
        </div>
        <div class="col-4 pt-2">
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
        props:['palace','text','text2','structure','chart_numb','id','stem','type','day','jiabranch','jiaformation','stemday','jiachief','stemhour','img'],
        data(){
            return{
                jia:'',
                jiaday:'',
                door_red:[1,2,3,8],
                deitie_red:[1,2,3,4,5],
                star_aus:[1,2,3,7,9],
                stem_aus:[1,2,3,4,5],
                heaven_red:[],
                earth_red:[],
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
                formations:{},
                top_bottom:[],
                left_right:[],
                center:"",
                stemcenter:'',
                trigramTop:'',
                trigramBottom:'',
                hexagramStyle:'',
                hexagram:'',
                topTrigram:'',
                bottomTrigram:'',
                constilationCont:''
            }
        },
        methods: {
            hexagram_style(){
                var defaultStyle = "position-absolute"
                if(this.palace == "SE"){
                    this.hexagramStyle = defaultStyle+' se-hex';
                    this.constilationCont = defaultStyle+" cons-se"
                }

                if(this.palace == "NE"){
                    this.hexagramStyle = defaultStyle+' se-hex';
                    this.constilationCont = defaultStyle+" cons-ne"
                }

                if(this.palace == "SW"){
                    this.hexagramStyle = defaultStyle+' sw-hex'
                    this.constilationCont = defaultStyle+" cons-sw"
                }

                if(this.palace == "NW"){
                    this.hexagramStyle = defaultStyle+' sw-hex'
                    this.constilationCont = defaultStyle+" cons-nw"
                }
                if(this.palace == "S"){
                    this.hexagramStyle = defaultStyle+' s-hex'
                    this.constilationCont = defaultStyle+" cons-s"
                }
                if(this.palace == "N"){
                    this.hexagramStyle = defaultStyle+' n-hex'
                    this.constilationCont = defaultStyle+" cons-n"
                }
                if(this.palace == "E"){
                    this.hexagramStyle = defaultStyle+' se-hex';
                    this.constilationCont = defaultStyle+" cons-e"
                }
                if(this.palace == "W"){
                    this.hexagramStyle = defaultStyle+' sw-hex'
                    this.constilationCont = defaultStyle+" cons-w"
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
                    this.earth_stem = res.data.chart.earth_stem;
                    this.star = res.data.chart.star;
                    this.deitie = res.data.chart.deitie;
                    this.heaven = res.data.chart.heaven_stem;
                    this.door = res.data.chart.door;
                    this.number = res.data.chart.number_id;
                    this.stem_top = res.data.chart.heaven;
                    this.stem_bottom = res.data.chart.earth;
                    this.other = res.data.chart.other;
                    this.top_bottom = res.data.chart.top_bottom != null?res.data.chart.top_bottom.split(" "):'';
                    this.left_right = res.data.chart.left_right != null?res.data.chart.left_right.split(" "):'';
                    this.center = res.data.center.center.value;
                    this.formations = res.data.formation;
                    this.trigramTop = res.data.chart.star.code;
                    this.trigramBottom = res.data.chart.door.code;

                    this.trigramTopValidation(res.data.chart.star.code);
                    this.trigramBottomValidation(res.data.chart.door.code);
                    this.getHex(res.data.chart.star.code+res.data.chart.door.code);
                })
            },

            trigramTopValidation(top){
                if(top == "011"){
                    this.topTrigram = "/img/7.png";
                }
                if(top == "010"){
                    this.topTrigram = "/img/1.png";
                }
                if(top == "111"){
                    this.topTrigram = "/img/6.png";
                }
                if(top == "100"){
                    this.topTrigram = "/img/8.png";
                }
                if(top == "001"){
                    this.topTrigram = "/img/3.png";
                }
                if(top == "000"){
                    this.topTrigram = "/img/2.png";
                }
                if(top == "110"){
                    this.topTrigram = "/img/4.png";
                }
                if(top == "101"){
                    this.topTrigram = "/img/9.png";
                }
            },

            trigramBottomValidation(bottom){
                if(bottom == "011"){
                    this.bottomTrigram = "/img/7.png";
                }
                if(bottom == "010"){
                    this.bottomTrigram = "/img/1.png";
                }
                if(bottom == "111"){
                    this.bottomTrigram = "/img/6.png";
                }
                if(bottom == "100"){
                    this.bottomTrigram = "/img/8.png";
                }
                if(bottom == "001"){
                    this.bottomTrigram = "/img/3.png";
                }
                if(bottom == "000"){
                    this.bottomTrigram = "/img/2.png";
                }
                if(bottom == "110"){
                    this.bottomTrigram = "/img/4.png";
                }
                if(bottom == "101"){
                    this.bottomTrigram = "/img/9.png";
                }
            },

            getHex(hexCode){
                axios.get(window.yijing+'api/getHexagram/'+hexCode+'?api_token='+window.yijingToken)
                .then(res => {
                    this.hexagram = res.data.name;
                });
            }

            
        },
        mounted() {
            this.hexagram_style();
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
    .auspicious{
        color: #62b853;
    }

    .col-4{
        padding: 0px;
        text-align: center;
    }

    .se-hex{
        top:40%;
        left: -80%;
    }

    .s-hex{
        top:-71%;
        left: 50%;
        margin-left: -50px;
    }

    .n-hex{
        bottom:-71%;
        left: 50%;
        margin-left: -50px;
    }

    .sw-hex{
        top:40%;
        right: -80%;
    }

    .cons-se{
        width: 77.3%; 
        top: -22.5%;
        left:-100%;
        height: 122%;
        background-color: #F2BA49;
    }

    .cons-s{
        width: 500%; 
        top: -86%;
        left:-200%;
        border-top: 140px solid #FFFF9F;
        border-left: 158px solid transparent;
        border-right: 158px solid transparent;
        background-color: #F2BA49;
    }
    .cons-sw{
        width: 77.3%; 
        top: -22.5%;
        right:-100%;
        height: 122%;
        background-color: #F2BA49;
    }

    .cons-e{
        width: 77.3%; 
        top: 0;
        left:-100%;
        height: 99.3%;
        border: 1px solid;
        background-color: #FFFF9F;
    }

    .cons-w{
        width: 77.3%; 
        top: 0;
        right:-100%;
        height: 99.3%;
        border: 1px solid;
        background-color: #FFFF9F;
    }

    .cons-ne{
        width: 77.3%; 
        bottom: -21%;
        left:-100%;
        height: 122%;
        background-color: #F2BA49;
    }

    .cons-n{
        width: 500%; 
        bottom: -84%;
        left:-200%;
        border-bottom: 140px solid #FFFF9F;
        border-left: 158px solid transparent;
        border-right: 158px solid transparent;
        background-color: #F2BA49;
    }

    .cons-nw{
        width: 77.3%; 
        bottom: -21%;
        right:-100%;
        height: 122%;
        background-color: #F2BA49;
    }
</style>
