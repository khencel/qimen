<template>
    <div>
        <pulse-loader :loading="loading"></pulse-loader>
        <div style="width:100px" :class="hexagramStyle+' position-absolute'">
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
        <div v-for="se in se" :key="se.id">
            <div class="row m-0 part-chart-t-b">
                <div  class="col-4 p-0 position-relative">
                    <div>
                        <img :src="'/img/'+se.stem_top.photo" class="icon-img"  alt="">
                    </div>
                    <div :class="deitie_red.includes(se.stem_top.id)?'text-danger chart-text':'chart-text'">
                        {{se.stem_top.value}}
                    </div>
                    <div v-show="se.stem_1 == 1" class="position-absolute text-center center-part-cont">
                        <div class="chart-text" style="line-height:5px;">
                            <svg class="img-center" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </svg>
                            <br>
                            {{center}}
                        </div>
                    </div>
                </div>
                <div class="col-4 p-0 position-relative">
                    <div>
                        
                        <img :src="'/img/'+se.star.photo" class="icon-img"  alt="">
                        
                    </div>
                    <div :class="door_red.includes(se.star.id)?'text-danger chart-text':'chart-text'">
                        {{se.star.chinese}}
                        <br>
                        {{se.star.name}}{{se.star.code}}
                    </div>
                    <div v-show="se.bird_2 == 1" class="position-absolute text-center" style="width:30px;z-index:1;bottom:0;right:0;margin-right:-15px;">
                        <div class="chart-text" style="line-height:5px;">
                            <svg class="img-center" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </svg>
                            Qin
                            <br><br>
                            Bird
                        </div>
                    </div>
                    <div v-show="se.stem_2 == 1" class="position-absolute text-center" style="width:30px;z-index:1;bottom:0;right:0;margin-right:-15px;">
                        <div class="chart-text" style="line-height:5px;">
                            <svg class="img-center" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </svg>
                            <br>
                            {{center}}
                        </div>
                    </div>
                </div>
                <div class="col-4 p-0">
                    <div>
                        <img :src="'/img/'+se.deitie.photo" class="icon-img"  alt="">
                    </div>
                    <div :class="deitie_red.includes(se.deitie.id)?'text-danger chart-text':'chart-text'">
                        {{se.deitie.chinese}}
                        <br>
                        {{se.deitie.value}}
                    </div>
                </div>
            </div>

            <div class="row text-center m-0 part-chart-middle">
                <div class="col-4 p-0 ">
                    <div class="row justify-content-center">
                        <div v-show="se.position_1 != null" class="col-5 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_1 == null?'':se.position_1.first_word}}
                                <br>
                                {{se.position_1 == null?'':se.position_1.second_word}}
                            </div>
                        </div>
                        <div v-show="se.position_2 != null" class="col-5 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_2 == null?'':se.position_2.first_word}}
                                <br>
                                {{se.position_2 == null?'':se.position_2.second_word}}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4 p-0">
                    <div class="row justify-content-center">
                        <div v-show="se.position_3 != null" class="col-4 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_3 == null?'':se.position_3.first_word}}
                                <br>
                                {{se.position_3 == null?'':se.position_3.second_word}}
                            </div>
                        </div>
                        <div v-show="se.position_4 != null" class="col-4 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_4 == null?'':se.position_4.first_word}}
                                <br>
                                {{se.position_4 == null?'':se.position_4.second_word}}
                            </div>
                        </div>
                        <div v-show="se.position_5 != null" class="col-4 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_5 == null?'':se.position_5.first_word}}
                                <br>
                                {{se.position_5 == null?'':se.position_5.second_word}}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4 p-0">
                    <div class="row justify-content-center">
                        <div v-show="se.position_6 != null" class="col-5 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_6 == null?'':se.position_6.first_word}}
                                <br>
                                {{se.position_6 == null?'':se.position_6.second_word}}
                            </div>
                        </div>
                        <div v-show="se.position_7 != null" class="col-5 p-0">
                            <div>
                                <svg class="icon-img" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                </svg>
                            </div>
                            <div class="chart-text">
                                {{se.position_7 == null?'':se.position_7.first_word}}
                                <br>
                                {{se.position_7 == null?'':se.position_7.second_word}}
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="row m-0 part-chart-t-b">
                <div class="col-4 p-0 position-relative">
                    <div class="">
                        <img :src="'/img/'+se.stem_bottom.photo" class="icon-img"  alt="">
                    </div>
                    <div :class="deitie_red.includes(se.stem_bottom.id)?'text-danger chart-text':'chart-text'">
                        {{se.stem_bottom.value}}
                    </div>
                    <div v-show="se.stem_3 == 1" class="position-absolute text-center center-chart-bottom">
                        <div class="chart-text" style="line-height:5px;">
                            <svg class="img-center" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </svg>
                            <br>
                            {{center}}
                        </div>
                    </div>
                </div>
                <div class="col-4 p-0 position-relative">
                    <div class="">
                        <!-- <svg class="icon-img" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                        </svg> -->
                        <img :src="'/img/'+se.door.photo" class="icon-img"  alt="">
                    </div>
                    <div :class="door_red.includes(se.door.id)?'text-danger chart-text':'chart-text'">
                        {{se.door.chinese}}
                        <br>
                        {{se.door.name}}
                    </div>
                    <div v-show="se.stem_4 == 1" class="position-absolute text-center" style="height:30px;width:30px;z-index:1;top:0;right:0;margin-right:-15px;margin-top:-15px;">
                        <div class="chart-text" style="line-height:5px;">
                            <svg class="img-center" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                            </svg>
                            <br>
                            {{center}}
                        </div>
                    </div>
                </div>
                <div class="col-4 p-0 h1 font-weight-bold">
                    {{se.number}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['chart','center'],
        data(){
            return {
                deitie_red:[1,2,3,4,5],
                door_red:[1,2,3,8],
                stem_red:[1,2,3,4,5],
                star_red:[1,2,3,7,9],
                date:new Date(),
                loading:false,
                hexagram:'',
                se:{},
                topTrigram:'',
                bottomTrigram:'',
                hexagramStyle:''
            }
        },
        mounted() {
            this.loadChart();
            this.hexStyle();
        },
        methods:{
            hexStyle(){
                console.log(this.chart.type);
                if(this.chart.type == 'se'){
                    this.hexagramStyle = 'seStyle';
                }
                if(this.chart.type == 'sw'){
                    this.hexagramStyle = 'swStyle';
                }
                if(this.chart.type == 'ne'){
                    this.hexagramStyle = 'neStyle';
                }
                if(this.chart.type == 'nw'){
                    this.hexagramStyle = 'nwStyle';
                }
                if(this.chart.type == 's'){
                    this.hexagramStyle = 'sStyle';
                }
                if(this.chart.type == 'n'){
                    this.hexagramStyle = 'nStyle';
                }
                if(this.chart.type == 'e'){
                    this.hexagramStyle = 'eStyle';
                }
                if(this.chart.type == 'w'){
                    this.hexagramStyle = 'wStyle';
                }
            },
            loadChart(){
                axios.get('/api/preview/'+this.chart.chart_id+'/'+this.chart.type+'/'+this.chart.chart_type)
                .then(response => {
                    this.se = response.data.se;
                    this.trigramTopValidation(response.data.se[0].star.code);
                    this.trigramBottomValidation(response.data.se[0].door.code);
                    this.getHex(response.data.se[0].star.code+response.data.se[0].door.code);
                });
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
        }
    }
</script>

<style scoped>
   .seStyle{
       top: 0;
       left: 0;
       margin-left: -85%;
       margin-top: -70%;
   }
   .swStyle{
       top: 0;
       right: 0;
       margin-right: -85%;
       margin-top: -70%;
   }
   .neStyle{
       bottom: 0;
       left:0; 
       margin-left: -85%;
       margin-bottom: -60%;
   }
   .nwStyle{
       bottom: 0;
       right:0; 
       margin-right: -85%;
       margin-bottom: -60%;
   }
   .sStyle{
       top: -7%;
       margin-top: -70%;
   }
   .nStyle{
       bottom: 0;
       margin-bottom: -75%;
   }
   .eStyle{
       left:0; 
       margin-left: -85%;
   }
   .wStyle{
       right:0; 
       margin-right: -85%;
   }
</style>
