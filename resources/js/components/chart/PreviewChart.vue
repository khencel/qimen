<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-xl-6 border position-relative chart-container" :style="structure == 'Yin Structure'?'background-color:#CD8D8D':'background-color:#AE2526'">
                <div class="text-white position-absolute m-1" style="z-index:1;top:0;left:0">
                        <strong>SE</strong>
                        <span>
                            <img src="/img/4.png" style="width:30px;" alt="">
                        </span>
                        <span><small>Xun</small></span>
                        <span><small>Wood</small></span>
                </div>
                <div class="text-white position-absolute text-center mt-1" style="z-index:1;top:0;width:100px;right:50%;margin-right:-50px;">
                    <strong>S</strong>
                        <span>
                            <img src="/img/9.png" style="width:30px;" alt="">
                        </span>
                        <span><small>Li</small></span>
                        <span><small>Fire</small></span>
                </div>
                <div class="text-white position-absolute m-1" style="z-index:1;top:0;right:0">
                        <span><small>Earth</small></span>
                        <span><small>Kun</small></span>
                        <span>
                            <img src="/img/2.png" style="width:30px;" alt="">
                        </span>
                    <strong>SW</strong>
                </div>
                <div class="text-center text-white position-absolute ml-1" style="height:20px;z-index:1;left:0;bottom:50%;margin-bottom:-10px;">
                    <strong>E</strong>
                    <div>
                        <img src="/img/3.png" style="width:30px;" alt="">
                    </div>
                    <div class="mt-1" style="line-height:2px;">
                        <p><small>Zhen</small></p>
                        <p><small>Wood</small></p>
                    </div>
                    
                </div>
                <div class="text-center text-white position-absolute mr-1" style="height:20px;z-index:1;right:0;bottom:50%;margin-bottom:-10px;">
                    <strong>W</strong>
                    <div>
                        <img src="/img/7.png" style="width:30px;" alt="">
                    </div>
                    <div class="mt-1" style="line-height:2px;">
                        <p><small>Dui</small></p>
                        <p><small>Metal</small></p>
                    </div>
                </div>
                <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;left:0">
                    <strong>NE</strong>
                        <span>
                            <img src="/img/8.png" style="width:30px;" alt="">
                        </span>
                        <span><small>Gen</small></span>
                        <span><small>Earth</small></span>
                </div>
                <div class="text-white position-absolute text-center mb-1" style="z-index:1;bottom:0;width:120px;right:50%;margin-right:-60px;">
                    <strong>N</strong>
                        <span>
                            <img src="/img/1.png" style="width:30px;" alt="">
                        </span>
                        <span><small>Kan</small></span>
                        <span><small>Water</small></span>
                </div>
                <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;right:0">
                        
                        <span><small>Metal</small></span>
                        <span><small>Qian</small></span>
                        <span>
                            <img src="/img/6.png" style="width:30px;" alt="">
                        </span>
                    <strong>NW</strong>
                </div>

                <div class="bg-white">
                    <div class="bg-logo" style="background-image:url('/img/logo.png');background-size: 90% 70%;background-repeat:no-repeat;background-position:center center;">
                        <div style="background-color: rgb(255,255,255,0.8)">
                            <div class="row m-0 p-0 chart-content">
                                <div class="col-4 chart-border p-0 text-center position-relative" style="background-color: rgba(174,37,38,0.2)">

                                    <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-25px;top:-30px;">
                                        <div class="row justify-content-center">
                                            <div v-for="(item, index) in seTop" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="position-absolute" style="z-index:1;height:50px;top:50%;margin-top:-25px;left:-27px;">
                                        <div v-for="(item, index) in seLeft" :key="index" class="" v-show="item != ''">
                                            <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'se',chart_type:chart_type}"></chart-parts>
                                </div>
                                <div class="col-4 chart-border p-0 text-center" >

                                    <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-80px;top:-30px;">
                                        <div class="row justify-content-center">
                                            <div v-for="(item, index) in sTop" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'s',chart_type:chart_type}"></chart-parts>
                                </div>
                                <div class="col-4 chart-border p-0 text-center">
                                    <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-25px;top:-30px;">
                                        <div class="row justify-content-center">
                                            <div v-for="(item, index) in swTop" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="position-absolute" style="z-index:1;height:50px;top:50%;margin-top:-25px;right:-27px;">
                                        <div v-for="(item, index) in swRight" :key="index" class="" v-show="item != ''">
                                            <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'sw',chart_type:chart_type}"></chart-parts>
                                </div>
                            </div>

                            <div class="row m-0 chart-content">
                                <div class="col-4 chart-border p-0 text-center" style="background-color: rgba(174,37,38,0.2)">
                                    <div class="position-absolute" style="z-index:1;height:50px;top:75%;margin-top:10px;left:-27px;">
                                        <div v-for="(item, index) in e" :key="index" class="" v-show="item != ''">
                                            <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'e',chart_type:chart_type}"></chart-parts>
                                </div>

                                <div class="col-4 chart-border p-0 text-center">
                                    <div class="row m-0 part-chart-t-b">
                                        <div  class="col-4 p-0 position-relative">
                                            <div>
                                                <img :src="'/img/'+center_img" class="icon-img"  alt="">
                                            </div>
                                            <div class="chart-text">
                                                {{center}}
                                            </div>
                                        </div>
                                        <div class="col-4 p-0 position-relative">
                                           
                                        </div>
                                        <div class="col-4 p-0">
                                           
                                        </div>
                                    </div>

                                    <div class="row text-center m-0 part-chart-middle">
                                    </div>

                                    <div class="row m-0 part-chart-t-b">
                                        <div class="col-4 p-0 position-relative">
                                            <div class="">
                                                <img :src="'/img/'+center_img" class="icon-img"  alt="">
                                            </div>
                                            <div class="chart-text">
                                                {{center}}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-4 chart-border p-0 text-center">
                                    <div class="position-absolute" style="z-index:1;height:50px;top:50%;margin-top:-60px;right:-27px;">
                                        <div v-for="(item, index) in w" :key="index" class="" v-show="item != ''">
                                            <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'w',chart_type:chart_type}"></chart-parts>
                                </div>
                            </div>

                            <div class="row m-0 chart-content">
                                <div class="col-4 chart-border p-0 text-center" style="background-color: rgba(174,37,38,0.2)">
                                        <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-25px;bottom:-27px;">
                                            <div class="row justify-content-center">
                                                <div v-for="(item, index) in neBottom" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                    <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-absolute" style="z-index:1;height:50px;top:50%;margin-top:-25px;left:-27px;">
                                            <div v-for="(item, index) in neLeft" :key="index" class="" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'ne',chart_type:chart_type}"></chart-parts>
                                </div>
                                <div class="col-4 chart-border p-0 text-center" style="background-color: rgba(174,37,38,0.2)">
                                    <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-100px;bottom:-27px;">
                                        <div class="row justify-content-center">
                                            <div v-for="(item, index) in nBottom" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'n',chart_type:chart_type}"></chart-parts>
                                </div>
                                <div class="col-4 chart-border p-0 text-center">
                                    <div class="position-absolute" style="width:50px;z-index:1;left:50%;margin-left:-25px;bottom:-20px;">
                                        <div class="row justify-content-center">
                                            <div v-for="(item, index) in nwBottom" :key="index" class="col-6 p-0 text-center" v-show="item != ''">
                                                <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="position-absolute" style="z-index:1;height:50px;top:50%;margin-top:-25px;right:-27px;">
                                        <div v-for="(item, index) in nwRight" :key="index" class="" v-show="item != ''">
                                            <small><b-badge variant="success" class="p-1" v-text="item"></b-badge></small>
                                        </div>
                                    </div>
                                    <chart-parts :center="center" :chart="{chart_id,type:'nw',chart_type:chart_type}"></chart-parts>
                                </div>
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
        props:['chart_id','type'],
        data(){
            return {
                chart_type:this.type,
                center_img:'',
                center:'',
                seTop:{},
                seLeft:{},
                sTop:{},
                swTop:{},
                swRight:{},
                e:{},
                w:{},
                neLeft:{},
                neBottom:{},
                nwRight:{},
                nwBottom:{},
                nBottom:{},
                structure:'',
            }
        },
        mounted(){
            this.loadCenter();
            this.loadOutside();
        },
        methods:{
            loadCenter(){
                axios.get('/api/previewChart/'+this.chart_id+'/'+this.type)
                .then(response => {
                    this.structure = response.data.day_chart.structure_type;
                    this.center = response.data.stem_id != null?response.data.stem.value:'';
                    this.center_img = response.data.stem_id != null?response.data.stem.photo:'';
                });
            },

            loadOutside(){
                axios.get('/api/preview/'+this.chart_id+'/'+this.type)
                .then(response => {
                    this.seTop = response.data.se != null?response.data.se.seTop.split(','):'';
                    this.seLeft = response.data.se != null?response.data.se.seLeft.split(','):'';
                    this.sTop = response.data.s != null?response.data.s.sTop.split(','):'';
                    this.swTop = response.data.sw != null?response.data.sw.swTop.split(','):'';
                    this.swRight = response.data.sw != null?response.data.sw.swRight.split(','):'';
                    this.e = response.data.e != null?response.data.e.eLeft.split(','):'';
                    this.w = response.data.w != null?response.data.w.wRight.split(','):'';
                    this.neLeft = response.data.ne != null?response.data.ne.neLeft.split(','):'';
                    this.neBottom = response.data.ne != null?response.data.ne.neBottom.split(','):'';
                    this.nwRight = response.data.nw != null?response.data.nw.nwRight.split(','):'';
                    this.nwBottom = response.data.nw != null?response.data.nw.nwBottom.split(','):'';
                    this.nBottom = response.data.nw != null?response.data.n.nBottom.split(','):'';
                });
            }
        }
    }
</script>
