<template>
    <div :class="type == 'se'?'outline-top-bottom':'' || type == 's'?'outline-middle-top-bottom':'' || type == 'sw'?'outline-top-bottom':'' || type == 'e'?'outline-left-right':'' || type == 'w'?'outline-left-right':'' || type == 'ne'?'outline-top-bottom':'' || type == 'n'?'outline-middle-top-bottom':'' || type == 'nw'?'outline-top-bottom':''">

        <div :class="type == 'se'?'outside-top-se position-absolute':'' || type == 's'?'outside-top-s position-absolute':'' || type == 'sw'?'outside-top-sw position-absolute':'' || type == 'ne'?'outside-bottom-ne position-absolute':'' || type == 'n'?'outside-bottom-n position-absolute':'' || type == 'nw'?'outside-bottom-nw position-absolute':''">
            <div class="mx-auto" style="width:120px;height:50px;">
                <div class="row font-weight-bold m-0 h-100 justify-content-center p-2">
                    <div v-for="(item, index) in outside_top" :key="index" class="col-6 text-white">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>


        <div :class="type == 'se'?'position-absolute outside-left':'' || type == 'sw'?'position-absolute outside-right':'' || type == 'e'?'position-absolute outside-left':'' || type == 'w'?'position-absolute outside-right':'' || type == 'ne'?'position-absolute outside-bottom-left':'' || type == 'nw'?'position-absolute outside-bottom-right':''">
            <div class="font-weight-bold" style="width:100%;height:100px;margin:175px auto;">
                <div v-for="(item, index) in outside_left_right" :key="index" class="h-50 text-white pt-2 pl-2">
                    {{item}}
                </div>
            </div>
        </div>
        <div :class="type == 'se'?'inline-se':'' || type == 's'?'inline-s':'' || type == 'sw'?'inline-sw':'' || type == 'e'?'inline-e':'' || type == 'w'?'inline-w':'' || type == 'ne'?'inline-ne':'' || type == 'n'?'inline-n':'' || type == 'nw'?'inline-nw':''">
            <div class="upper-div">
                <div class="row m-0 h-100 text-center">
                    <div class="col-4 pt-4 position-relative">
                        <p style="line-height:15px;">
                            <img :src="heaven_stem.photo != null?'/img/'+heaven_stem.photo:''" width="40" alt="">
                            <br>
                            {{heaven_stem.value}}
                        </p>
                        <div v-show="center_top" class="position-absolute pt-2" style="height:70px;width:70px;bottom:0;right:0;margin-right:-35px;margin-bottom:-35px;">
                            <small>
                                <p style="line-height:15px;">
                                    <i class="fas fa-align-justify fa-2x"></i>
                                    <br>
                                    {{center}}
                                </p>
                            </small>
                        </div>
                    </div>
                    <div class="col-4 pt-4">
                        <p style="line-height:15px;">
                            <img :src="star.photo != null?'/img/'+star.photo:''" width="40" alt="">
                            <br>
                            {{star.chinese}}
                            <br>
                            {{star.name}}
                        </p>
                    </div>
                    <div class="col-4 pt-4 position-relative">
                        <p style="line-height:15px;">
                            <img :src="deitie.photo != null?'/img/'+deitie.photo:''" width="40" alt="">
                            <br>
                            {{deitie.chinese}}
                            <br>
                            {{deitie.value}}
                        </p>
                        <div v-show="qin_bird" class="position-absolute pt-2" style="height:70px;width:70px;bottom:0;left:0;margin-left:-35px;margin-bottom:-35px;">
                            <small>
                                <p style="line-height:15px;">
                                    <i class="fas fa-align-justify fa-2x"></i>
                                    <br>
                                    Qin
                                    <br>
                                    Bird
                                </p>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle-div w-100 pt-5">
                <div class="row justify-content-center">
                    <div v-for="(item, index) in auspicious" :key="index" class="col-md-4 text-center">
                        <p>
                            {{item.formation}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="bottom-div">
                <div class="row m-0 h-100 text-center">
                    <div class="col-4 pt-4 position-relative">
                        <p style="line-height:15px;">
                            <img :src="earth_stem.photo != null?'/img/'+earth_stem.photo:''" width="40" alt="">
                            <br>
                            {{earth_stem.value}}
                        </p>
                        <div v-show="center_bottom" class="position-absolute pt-2" style="height:70px;width:70px;top:0;right:0;margin-right:-35px;margin-top:-35px;">
                            <small>
                                <p style="line-height:15px;">
                                    <i class="fas fa-align-justify fa-2x"></i>
                                    <br>
                                    {{center}}
                                </p>
                            </small>
                        </div>
                    </div>
                    <div class="col-4 pt-4">
                        <p style="line-height:15px;">
                            <img :src="door.photo != null?'/img/'+door.photo:''" width="40" alt="">
                            <br>
                            {{door.chinese}}
                            <br>
                            {{door.name}}
                        </p>
                    </div>
                    <div class="col-4 pt-4">
                        <p style="line-height:15px;font-size:50px;font-weight:bold">
                            {{number}}
                        </p>
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
                type:'',
                outside_top:[],
                outside_left_right:[],
                door:{},
                star:{},
                heaven_stem:{},
                earth_stem:{},
                deitie:{},
                number:"",
                formation_1:{},
                formation_2:{},
                formation_3:{},
                formation_4:{},
                formation_5:{},
                formation_6:{},
                formation_7:{},
                check_3:true,
                check_4:true,
                check_5:true,
                center:'',
                center_top:false,
                center_bottom:false,
                qin_bird:false,
                auspicious:[],
                inauspicious:[]
            }
        },
        methods: {
            check_3_change(){
                if(this.check_3 == false){
                    this.check_3 = true;
                }else{
                    this.check_3 = false;
                }
            },
            check_4_change(){
                if(this.check_4 == false){
                    this.check_4 = true;
                }else{
                    this.check_4 = false;
                }
            },
            check_5_change(){
                if(this.check_5 == false){
                    this.check_5 = true;
                }else{
                    this.check_5 = false;
                }
            },

            center_upper(){
                if(this.center_top == false){
                    this.center_top = true;
                }else{
                    this.center_top = false;
                }
            },

            center_lower(){
                if(this.center_bottom == false){
                    this.center_bottom = true;
                }else{
                    this.center_bottom = false;
                }
            },
            others(){
                if(this.qin_bird == false){
                    this.qin_bird = true;
                }else{
                    this.qin_bird = false;
                }
            }
        },
        mounted() {
            
        }
    }
</script>
<style scoped>
    .outline-top-bottom{
        width: 80%;
        position: relative;
        background-color: black;
        height: 500px;
        border: 2px solid #EE82EE;
    }

    .outline-middle-top-bottom{
        width: 72%;
        position: relative;
        background-color: black;
        height: 500px;
        border: 2px solid #EE82EE;
    }

    .outline-left-right{
        width: 72%;
        position: relative;
        background-color: black;
        height: 450px;
        border: 2px solid #EE82EE;
    }

    .inline-se{
        width: 92%;
        background-color: white;
        height: 450px;
        position:absolute;
        bottom: 0%;
        right: 0%;
    }

    .inline-s{
        width: 100%;
        background-color: white;
        height: 450px;
        position:absolute;
        bottom: 0%;
    }

    .inline-sw{
        width: 92%;
        background-color: white;
        height: 450px;
        position:absolute;
        bottom: 0%;
        left: 0%;
    }

    .inline-e{
        width: 92%;
        background-color: white;
        height: 100%;
        position:absolute;
        bottom: 0%;
        right: 0%;
    }

    .inline-w{
        width: 92%;
        background-color: white;
        height: 100%;
        position:absolute;
        bottom: 0%;
        left: 0%;
    }

    .inline-ne{
        width: 92%;
        background-color: white;
        height: 450px;
        position:absolute;
        top: 0%;
        right: 0%;
    }

    .inline-n{
        width: 100%;
        background-color: white;
        height: 450px;
        position:absolute;
        top: 0%;
    }

    .inline-nw{
        width: 92%;
        background-color: white;
        height: 450px;
        position:absolute;
        top: 0%;
        left: 0%;
    }

    .outside-top-se{
        width:92%;
        height:50px;
        right:0
    }

    .outside-top-s{
        width:100%;
        height:50px;
        right:0
    }

    .outside-top-sw{
        width:92%;
        height:50px;
        left:0
    }

    .outside-bottom-ne{
        width:92%;
        height:50px;
        right:0;
        bottom: 0;
    }

    .outside-bottom-n{
        width:100%;
        height:50px;
        right:0;
        bottom: 0;
    }

    .outside-bottom-nw{
        width:92%;
        height:50px;
        left:0;
        bottom: 0;
    }

    .outside-left{
        width:8%;
        height:450px;
        bottom:0;
    }

    .outside-right{
        width:8%;
        height:450px;
        bottom:0;
        right: 0;
    }

    .outside-bottom-left{
        width:8%;
        height:450px;
        top:0;
    }

    .outside-bottom-right{
        width:8%;
        height:450px;
        top:0;
        right: 0;
    }

    .upper-div{
        height: 125px;
    }

    .middle-div{
        height: 200px;
    }

    .bottom-div{
        height: 125px;
    }
    
</style>
