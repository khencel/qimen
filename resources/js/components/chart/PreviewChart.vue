<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-7">
                <button @click="downloadChart" class="btn btn-success w-25">Download Chart</button>
            </div>
        </div>
        
        <div id="captureWithCons" class="chart-const-cont" >
            <div class="se position-absolute">
                
            </div>
            <div class="sw position-absolute">
                
            </div>
            <div class="ne position-absolute">
                
            </div>
            <div class="nw position-absolute">
                
            </div>
            <div class="n position-absolute">
                
            </div>
            <div class="s position-absolute">
                
            </div>
            <div class="e position-absolute">
                
            </div>
            <div class="w position-absolute">
                
            </div>
            <div id="capture" class=" border position-relative chart-container" :style="structure == 'Yin Structure'?'background-color:#CD8D8D;':'background-color:#AE2526;'">
                 
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;left:0"> 
                        <img class="mb-2" src="/img/xun.png" width="80" height="35" alt=""><span style="color:white;font-weight:bold;position:relative;top:-12px">4</span>
                    </div>
                    <div class="text-white position-absolute text-center mt-1" style="z-index:1;top:0;width:100px;right:50%;margin-right:-50px;">
                    <span style="color:white;font-weight:bold;position:relative;top:-12px">9</span><img class="mb-2" src="/img/li.png" width="60" height="35" alt="">
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;right:0">
                        <span style="color:white;font-weight:bold;position:relative;top:-12px">2</span><img class="mb-2" src="/img/kun.png" width="80" height="35" alt="">
                    </div>
                    <div class="text-center text-white position-absolute ml-1" style="height:20px;z-index:1;left:0;bottom:50%;margin-bottom:-2px;">
                        <span style="color:white;font-weight:bold;position:absolute;left:3px;">3</span><img class="mb-2" src="/img/zhen.png" width="45" height="80" alt="">
                    </div>
                    <div class="text-center text-white position-absolute mr-1" style="height:20px;z-index:1;right:0;bottom:50%;margin-bottom:2px;">
                    <img class="mb-2" src="/img/dui.png" width="45" height="80" alt=""><span style="color:white;font-weight:bold;position:absolute;right:3px;">7</span>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;left:0">
                    <img src="/img/gen.png" width="80" height="35" alt=""><span style="color:white;font-weight:bold;position:relative;top:-10px">8</span>
                    </div>
                    <div class="text-white position-absolute text-center mb-1" style="z-index:1;bottom:0;width:120px;right:50%;margin-right:-60px;">
                        <span style="color:white;font-weight:bold;position:relative;top:-10px">1</span><img src="/img/kan.png" width="60" height="35" alt="">
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;right:0">
                        <span style="color:white;font-weight:bold;position:relative;top:-10px">6</span><img src="/img/qian.png" width="80" height="35" alt="">
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
                            <input type="hidden" :value="chart_id" id="chartid">
                        </div>
                    </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import html2canvas from 'html2canvas';
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
            },
            downloadChart(){
                html2canvas(document.querySelector("#capture")).then(function(canvas) {
                    var id = document.getElementById('chartid').value;
                    simulateDownloadImageClick(canvas.toDataURL(), id+'.PNG');
                });
            
                function simulateDownloadImageClick(uri, filename) {
                var link = document.createElement('a');
                if (typeof link.download !== 'string') {
                    window.open(uri);
                } else {
                    link.href = uri;
                    link.download = filename;
                    accountForFirefox(clickLink, link);
                }
                }

                function clickLink(link) {
                link.click();
                }

                function accountForFirefox(click) { // wrapper function
                let link = arguments[1];
                document.body.appendChild(link);
                click(link);
                document.body.removeChild(link);
                }
            },
        }
    }
</script>

<style scoped>
    #capture{
        width: 100% !important;
        padding-left: 4%;
        padding-right: 4%;
        padding-bottom: 6%;
        padding-top: 6%;
    }

    .chart-const-cont{
        width:74% !important;
        margin:auto;
        padding: 10%;
        position: relative;
        border-width:5px;  
        border-style:groove;
        /* background-image: url('/img/maroon.jpg'); */
    }

    .se{
        border: 5px solid #AE2526;
        top: 0;
        left: 0;
        width: 30%;
        height: 30%;
        border-width:5px;  
        border-style:double;
        background-color: linen;
    }

    .sw{
        border: 5px solid #AE2526;
        top: 0;
        right: 0;
        width: 30%;
        height: 30%;
        border-width:5px;  
        border-style:double;
        background-color: linen;
    }

    .ne{
        border: 5px solid #AE2526;
        bottom: 0;
        left: 0;
        width: 30%;
        height: 30%;
        border-width:5px;  
        border-style:double;
        background-color: linen;
    }

    .nw{
        border: 5px solid #AE2526;
        bottom: 0;
        right: 0;
        width: 30%;
        height: 30%;
        border-width:5px;  
        border-style:double;
        background-color: linen;
    }

    .s{
        top: 0;
        left: 50%;
        margin-left: -15%;
        width: 30%;
        height: 30%;
        background-color: linen;
    }

    .n{
        bottom: 0;
        left: 50%;
        margin-left: -15%;
        width: 30%;
        height: 30%;
        background-color: linen;
    }
    .e{
        top: 50%;
        left: 0;
        margin-top:-15%;
        width: 30%;
        height: 30%;
        background-color: linen;
    }
    .w{
        top: 50%;
        right: 0;
        margin-top:-15%;
        width: 30%;
        height: 30%;
        background-color: linen;
    }
</style>
