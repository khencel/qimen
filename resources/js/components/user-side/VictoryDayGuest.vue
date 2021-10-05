<template>
    <div class="container-fluid">
        <div class="w-100 text-center mt-3">
            <pulse-loader :loading="loading"></pulse-loader>
        </div>  
        <div class="w-100 ml-5"><button class="btn button-deny w-25 text-font" v-if="Object.keys(month_list).length != 0" @click="print">Print</button></div>
        <div class="row justify-content-center" id="print" v-show="!loading">
            
            <div class="col-md-11">
                <div v-for="(item, index) in month_list" :key="index" class="mt-3 p-2 print-style" style="border-width:5px;border-style:outset;">
                    <h4><strong><span style="color:#F77925">{{months[item.month-1]}}</span> {{item.year}}</strong></h4> 
                    <div class="row p-0 m-0 calendar-style" style="background-image:url('/img/poenixTrans.png');background-size: 30% 50%;background-repeat:no-repeat;background-position:center center;">
                        <div v-for="(day, index) in days" :key="index" v-show="item.month == day.month && item.year == day.year" class="border col-1 p-1 day-style" 
                        style="height:150px;background-color:rgba(197,118,118,0.7)">
                            {{day.day}}
                            <br>
                            <span v-for="(victory, index) in charts" :key="index" >
                                    <div v-if="victory.year == item.year && victory.month == item.month && victory.day == day.day" class="text-uppercase text-font">
                                        <div :class="victory.divine == 'DL'?'bg-warning avatar text-center mt-1 shadow-sm':'' || victory.divine == 'DB'?'bg-success avatar text-center mt-1 shadow-sm':'' || victory.divine == 'DF'?'bg-primary avatar text-center mt-1 shadow-sm':''">
                                            <small>
                                                {{victory.palace}}<br>{{victory.divine}}
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
                    user_type:"Guest"
                }),
            }
        },
        mounted() {
            
        },
       
        methods:{
            print () {
                var divContents = document.getElementById("print").innerHTML;
                var a = window.open('','', 'height=500, width=500');
                a.document.write(divContents);
                a.document.write('<style> .calendar-style{display:flex; width:100%} .day-style{width:20%;background-color:none !important;border-width:5px; border-style:ridge;} .print-style{margin-top:15px;}</style>');
                a.print();
                a.close();
            },
            alreadyCast(id){
                axios.get('/api/guest/already-cast-guest/'+id+'?api_token='+window.token)
                .then(response =>{
                    if(response.data != ''){
                        this.form.light = response.data.divine_light;
                        this.form.blessing = response.data.divine_blessing;
                        this.form.force = response.data.divine_force;
                        this.btnSubmit();
                    }
                })
                .catch(error => {

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
                    this.charts = response.data != null?response.data:'';
                    this.month_list = response.data.month_list
                    this.charts = response.data.monthChart != null?response.data.monthChart:'';
                    this.days = response.data.get_days;
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
