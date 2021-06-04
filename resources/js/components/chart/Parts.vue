<template>
    <div>
        <pulse-loader :loading="loading"></pulse-loader>
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
                        {{se.star.name}}
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
                se:{},
            }
        },
        mounted() {
            this.loadChart();
        },
        methods:{
            loadChart(){
                axios.get('/api/preview/'+this.chart.chart_id+'/'+this.chart.type+'/'+this.chart.chart_type)
                .then(response => {
                    this.se = response.data.se;
                    
                });
            }
        }
    }
</script>
