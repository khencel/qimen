<template>
    <div class="container-fluid">
        <div class="row mt-5 text-center text-font">
            <div class="col-md-4">
                    <label for="">Divine Light</label>
                    <br>
                    <select v-model="form.light" :disabled="disabledLight">
                        <option value="" disabled hidden>Enter Divine Light Palace:</option>
                        <option v-for="(item, index) in palaces" :key="index" :value="item">
                            {{item}}
                        </option>
                    </select>
            </div>
            <div class="col-md-4">
                    <label for="">Divine Blessing</label>
                    <br>
                    <select v-model="form.blessing" :disabled="disabledBlessing">
                        <option value="" disabled hidden>Enter Divine Light Palace:</option>
                        <option v-for="(item, index) in palaces" :key="index" :value="item">
                            {{item}}
                        </option>
                    </select>
            </div>
            <div class="col-md-4">
                    <label for="">Divine Force</label>
                    <br>
                    <select v-model="form.force" :disabled="disabledForce">
                        <option value="" disabled hidden>Enter Divine Light Palace:</option>
                        <option v-for="(item, index) in palaces" :key="index" :value="item">
                            {{item}}
                        </option>
                    </select>
            </div>
        </div>
        <div class="row justify-content-center text-center mt-3">
            <div class="col-md-10">
                <button :disabled="btnSubmitCast" class="btn button-success w-25" @click="btnSubmit">Submit</button>
            </div>
        </div>
        <div class="w-100 text-center mt-3">
            <button class="btn button-deny w-25 text-font" v-if="Object.keys(month_list).length != 0" @click="print">Print</button>
            <pulse-loader :loading="loading"></pulse-loader>
        </div>  
        
        <div class="row justify-content-center" id="print">
            <div class="col-md-11">
                <div v-for="(item, index) in month_list" :key="index" class="mt-3">
                    <h4><strong><span style="color:#F77925">{{months[item.month-1]}}</span> {{item.year}}</strong></h4> 
                    <div class="row p-0" style="background-image:url('/img/qimen-logo.png');background-size: 30% 50%;background-repeat:no-repeat;background-position:center center;">
                        <div v-for="(day, index) in days" :key="index" v-show="item.month == day.month && item.year == day.year" class="border col-1 p-1" 
                        style="height:150px;background-color:rgba(197,118,118,0.7)">
                            {{day.day}}
                            <br>
                            <span v-for="(victory, index) in charts" :key="index" >
                                    <div v-if="victory.year == item.year && victory.month == item.month && victory.day == day.day" class="text-uppercase text-font">
                                        <div :class="victory.divine == 'DL'?'bg-warning avatar text-center mt-1 shadow-sm':'' || victory.divine == 'DB'?'bg-success avatar text-center mt-1 shadow-sm':'' || victory.divine == 'DF'?'bg-primary avatar text-center mt-1 shadow-sm':''">
                                            <small>
                                                {{victory.palace}}<br>{{victory.divine}}
                                                <!-- <br>
                                                {{victory.day_chart.structure_type}}
                                                <br>
                                                {{victory.day_chart.cycle_type}}
                                                <br>
                                                {{victory.day_chart.element.name}}
                                                <br>
                                                {{victory.day_chart.english.name}} -->
                                            </small>
                                        </div>
                                    </div>
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    
    export default {
        
        data(){
            return{  
                btnSubmitCast:false,
                disabledLight:false,
                disabledBlessing:false,
                disabledForce:false,
                month_list:{},
                days:{},
                loading:false,
                charts:{},
                year: 0,
                palaces:["NE","N","NW","E","W","SE","S","SW"],
                months:['January','February','March','April','May','June','July','August','September','October','November','December'],
                monthVictories:{},
                victoryChart:{},
                form: new Form({
                    light:'',
                    blessing:'',
                    force:'',
                    user_type:"Main"
                }),
            }
        },
        mounted() {
            this.alreadyCast();
        },
       
        methods:{
            print () {
            // Pass the element id here
                this.$htmlToPaper('print');
            },
            alreadyCast(){
                axios.get('/api/victory/cast?api_token='+window.token)
                .then(response =>{
                    if(response.data != ''){
                        // this.btnSubmitCast = true;
                        // this.disabledLight = true;
                        // this.disabledBlessing = true;
                        // this.disabledForce = true;
                        this.form.light = response.data.light;
                        this.form.blessing = response.data.blessing;
                        this.form.force = response.data.force;
                        
                        this.btnSubmit();
                    }
                });
            },
            getDaysInMonth(month,year){
                return new Date(year, month, 0).getDate();
            },
            
            btnSubmit(){
                this.loading = true;
                axios.post('/api/victory?api_token='+window.token,this.form)
                .then(response => {
                    this.loading = false;
                    // this.btnSubmitCast = true;
                    // this.disabledLight = true;
                    // this.disabledBlessing = true;
                    // this.disabledForce = true;
                    this.charts = response.data;
                    this.month_list = response.data.month_list
                    this.charts = response.data.monthChart;
                    this.days = response.data.get_days;
                    console.log(response.data);
                });
            }
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap');
    .text-font{
        font-family: 'Vampiro One', cursive;
    }
    .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
