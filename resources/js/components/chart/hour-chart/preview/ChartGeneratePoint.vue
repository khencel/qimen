<template>
    <div class="row justify-content-center">

            <div class="col-md-2 p-2" v-show="disableDay">
                <div>
                    <div class="w-100 text-center border-bottom"><strong>Day Batallions</strong></div>
                    <div v-for="(item, index) in sixBatallions" :key="index">
                        <span style="cursor:pointer" @click="dayGenerate(item)">{{item}}</span>
                    </div>
                </div>
            </div>

            <div class="col-6 p-0 ">
                <div class="row p-2" style="margin-bottom:20%">
                    <div class="w-100 text-center border-bottom"><strong>Day Option</strong></div>
                    <div class="col-md-6 text-center" v-for="(item, index) in chart.split(',')" :key="index">
                        <button class="btn btn-success form-control" @click="generateHourChart(item)">{{item}}</button>
                    </div>
                </div>
                <div class="pt-5 position-relative " :style="structure == 'yang'?'width: 100%;height:755px;background-color:darkcyan':'width: 100%;height:755px;background-color:maroon;margin-bottom:20%;'">
                    
                    <!-- SE,S,SW -->
                    <div class="position-absolute" style="top:0;margin-top:7px;margin-left:7px">
                        <img class="mb-2" src="/img/xun.png" width="80" height="35" alt=""><span style="color:white;font-weight:bold;position:relative;top:-12px">4</span>
                    </div>
                    <div class="position-absolute" style="left:50%;top:0;margin-left:-25px;margin-top:7px;">
                        <span style="color:white;font-weight:bold;position:relative;top:-12px">9</span><img class="mb-2" src="/img/li.png" width="60" height="35" alt="">
                    </div>
                    <div class="position-absolute" style="right:0;top:0;margin-top:7px;margin-right:7px">
                        <span style="color:white;font-weight:bold;position:relative;top:-12px">2</span><img class="mb-2" src="/img/kun.png" width="80" height="35" alt="">
                    </div>
                    <!-- --- -->

                    <!-- E,W -->
                        <div class="position-absolute" style="top:0;top:50%;margin-top:-25px">
                            <span style="color:white;font-weight:bold;position:absolute;left:3px;">3</span><img class="mb-2" src="/img/zhen.png" width="50" height="80" alt="">
                        </div>
                        <div class="position-absolute" style="top:0;top:50%;margin-top:-25px;right:0">
                            <img class="mb-2" src="/img/dui.png" width="50" height="80" alt=""><span style="color:white;font-weight:bold;position:absolute;right:3px;">7</span>
                        </div>
                    <!-- --- -->

                    <!-- NE,N,NW -->
                        <div class="position-absolute" style="bottom:0;margin-bottom:7px;margin-left:7px;">
                            <img src="/img/gen.png" width="80" height="35" alt=""><span style="color:white;font-weight:bold;position:relative;top:-10px">8</span>
                        </div>
                        <div class="position-absolute" style="bottom:0;right:50%;margin-right:-25px;margin-bottom:7px">
                            <span style="color:white;font-weight:bold;position:relative;top:-10px">1</span><img src="/img/kan.png" width="60" height="35" alt="">
                        </div>
                        <div class="position-absolute" style="bottom:0;right:0;margin-bottom:7px;margin-right:7px;">
                            <span style="color:white;font-weight:bold;position:relative;top:-10px">6</span><img src="/img/qian.png" width="80" height="35" alt="">
                        </div>
                    <!-- --- -->
                    <div style="height:660px;width:87%;background-image:url('/img/logo.png');background-size: 90% 70%;background-repeat:no-repeat;background-position:center center;margin:0px auto;background-color:white">
                        <div class=" h-100" style="background-color: rgb(255,255,255,0.8)">
                            <div class="row m-0" style="height:220px;">
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-info':'col-4 p-0 border-top border-yin border-bottom border-right yin-box'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="SE" text='Zun Wood' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-info':'col-4 p-0 border-top border-yin border-bottom border-right'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="S" text='Li Fire' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-info':'col-4 p-0 border-top border-yin border-bottom'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour" :jiabranch="jiabranch" :jiaformation="jiaformation" palace="SW" text='Earth Kun' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                            </div>
                            <div class="row m-0" style="height:220px;">
                                <div :class="structure == 'yang'?'col-4 p-0 border-right border-info':'col-4 p-0 border-right border-yin yin-box'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="E" text="Zhen" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                                <div class="col-4 p-0 position-relative border-right border-yin" style="color:black">
                                    <div class=" pt-1 pl-3">
                                        <img :src="'/img/'+image" width="20" alt="">
                                        <br>
                                        {{center}}
                                    </div>
                                    <div class=" position-absolute pt-1 pl-3" style="bottom:7%">
                                        <img :src="'/img/'+image" width="20" alt="">
                                        <br>
                                        {{center}}
                                    </div>
                                    <div class="position-absolute" style="bottom:0;font-weight:bold;font-size:20px;right:0">
                                        © Jennel Cheng
                                    </div>
                                    
                                </div>
                                <div :class="structure == 'yang'?'col-4 p-0 border-info':'col-4 p-0 border-yin'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="W" text="Dui" text2="Metal" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                            </div>
                            <div class="row m-0" style="height:220px;">
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-right border-info':'col-4 p-0 border-top border-right border-yin yin-box'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="NE" text='Gen' text2="Earth" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-right border-info':'col-4 p-0 border-top border-right border-yin yin-box'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="N" text='Kan Water' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                                <div :class="structure == 'yang'?'col-4 p-0 border-top border-info':'col-4 p-0 border-top border-yin'">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour" :jiabranch="jiabranch" :jiaformation="jiaformation" palace="NW" text='Metal Qian' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id" :img="image"></chart-review-parts>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props:['palace','text','text2','structure','chart_numb','id','stem','type','day','jiabranch','jiaformation','center','image','chart'],
        data(){
            return{
                sixBatallions: ['Wu','Zi','Xu','Shen','Chen','Yin'],
                dayBatallion:false,
                disableDay:false,
                jia:'',
                stemDay:'',
                stemHour:'',
            }
        },
        methods: {
            dayGenerate(stem){
                var bat = this.get6BatallionDay(stem)
                this.stemDay = bat;
                if(bat == this.center){
                    this.stemDay = 1;
                }
                this.jia = "Chief"
                this.stemHour = this.stem;

                if(this.stem == "Jia"){
                    var bathour = this.get6BatallionDay(this.jiabranch)
                    this.stemHour = bathour;
                }
                if(this.stem == this.center){
                    this.stemHour = 1;
                }
            },
            
            checkDayIfJia(){
                if(this.chart.split(',').includes("Jia")){
                    this.disableDay = true;
                }
            },

            generateHourChart(stem){
                this.stemDay = stem;
                this.jia = "Chief"
                if(stem == this.center){
                    this.stemDay = 1;
                }
                this.stemHour = this.stem;
                if(this.stem == this.center){
                    this.stemHour = 1;
                }
                if(this.stem == "Jia"){
                    var bathour = this.get6BatallionDay(this.jiabranch)
                    this.stemHour = bathour;
                }
            },
            get6BatallionDay(stem){
                if(stem == "Wu"){
                    return "Xin"
                }
                if(stem == "Zi"){
                    return "Wu"
                }
                if(stem == "Xu"){
                    return "Ji"
                }
                if(stem == "Shen"){
                    return "Geng"
                }
                if(stem == "Chen"){
                    return "Ren"
                }
                if(stem == "Yin"){
                    return "Gui"
                }
            },
        },
        mounted() {
            this.checkDayIfJia();
            this.checkHourIfJia();
            
        }
    }
</script>
<style scoped>
    .border-yin{
        border-color: maroon !important;
    }
    .yin-box{
        background-color: rgba(255, 196, 196, 0.5);
    }
</style>
