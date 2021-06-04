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
            <div class="col-6 p-0">
                <div class="row p-2">
                    <div class="w-100 text-center border-bottom"><strong>Day Option</strong></div>
                    <div class="col-md-6 text-center" v-for="(item, index) in chart.split(',')" :key="index">
                        <button class="btn btn-success form-control" @click="generateHourChart(item)">{{item}}</button>
                    </div>
                </div>
                <div class="pt-5" style="width: 100%;height:755px;background-color:darkcyan">
                    <div style="height:660px;width:87%;background-image:url('/img/logo.png');background-size: 90% 70%;background-repeat:no-repeat;background-position:center center;margin:0px auto;background-color:white">
                        <div class=" h-100" style="background-color: rgb(255,255,255,0.8)">
                            <div class="row m-0" style="height:220px;">
                                <div class="col-4 border-right border-bottom p-0 border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="SE" text='Zun Wood' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 border-right border-bottom p-0 border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="S" text='Li Fire' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 border-right border-bottom p-0 border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour" :jiabranch="jiabranch" :jiaformation="jiaformation" palace="SW" text='Earth Kun' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                            </div>
                            <div class="row m-0" style="height:220px;">
                                <div class="col-4 p-0 border-right border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="E" text="Zhen" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 p-0 position-relative" style="color:black">
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
                                </div>
                                <div class="col-4 p-0 border-left border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="W" text="Dui" text2="Metal" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                            </div>
                            <div class="row m-0" style="height:220px;">
                                <div class="col-4 p-0 border-top border-right border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="NE" text='Gen' text2="Earth" :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 p-0 border-top border-right border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour"  :jiabranch="jiabranch" :jiaformation="jiaformation" palace="N" text='Kan Water' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 p-0 border-top border-info">
                                    <chart-review-parts :stemday="stemDay" :jiachief="jia" :stemhour="stemHour" :jiabranch="jiabranch" :jiaformation="jiaformation" palace="NW" text='Metal Qian' :day="day" :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
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
