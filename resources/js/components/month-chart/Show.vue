<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div>
                    <button class="btn btn-success mb-2" @click="printbtn">Print or Download</button>
                </div>
                <div class="w-75 m-auto p-3 position-relative" id="chartImage">
                    <div v-for="(constellation, index) in constellations" :key="index">
                        <!-- star level -->
                        <img class="level0" :src="'/img/level/'+starNumb[0]+'.png'" width="20" alt="" style="position:absolute;left:55%;top:15.5%">
                        <img class="level1" :src="'/img/level/'+starNumb[1]+'.png'" width="20" alt="" style="position:absolute;right:0;top:19%;right:17%;">
                        <img class="level2" :src="'/img/level/'+starNumb[2]+'.png'" width="20" alt="" style="position:absolute;right:0;top:57%;right:17%;">
                        <img class="level3" :src="'/img/level/'+starNumb[3]+'.png'" width="20" alt="" style="position:absolute;right:0;top:77%;right:17%;">
                        <img class="level4" :src="'/img/level/'+starNumb[4]+'.png'" width="20" alt="" style="position:absolute;left:55%;bottom:15%">
                        <img class="level5" :src="'/img/level/'+starNumb[5]+'.png'" width="20" alt="" style="position:absolute;left:0;top:77%;left:17%;">
                        <img class="level6" :src="'/img/level/'+starNumb[6]+'.png'" width="20" alt="" style="position:absolute;left:0;top:57%;left:17%;">
                        <img class="level7" :src="'/img/level/'+starNumb[7]+'.png'" width="20" alt="" style="position:absolute;left:0;top:19%;left:17%;">
                        <!-- constellation -->
                        <span class="s">
                            {{constellation['S']}}
                        </span>
                        <span class="se">
                            {{constellation['SE']}}
                        </span>
                        <span class="sw">
                            {{constellation['SW']}}
                        </span>
                        <span class="e">
                            {{constellation['E']}}
                        </span>
                        <span class="w">
                            {{constellation['W']}}
                        </span>
                        <span class="ne">
                            {{constellation['NE']}}
                        </span>
                        <span class="nw">
                            {{constellation['NW']}}
                        </span>
                        <span class="n">
                            {{constellation['N']}}
                        </span>
                    </div>
                    <img class="w-100" id="chart-img" :src="'/img/month-chart/'+id+'.PNG'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return{
                constellations:{},
                starNumb:[]
            }
        },
        methods: {
            loadChart(){
                axios.get('/api/show-month-chart/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.constellations = res.data.constellation
                    this.starNumb = res.data.level
                });
            },
            printbtn(){
                var content = document.getElementById("chartContent").innerHTML;
                var image = document.getElementById("chartImage").innerHTML;
                var a = window.open('', '', 'height=500, width=500');
                a.document.write('<div style="text-align:center; width:100%">'+content+'</div>');

                a.document.write('<div style="position:relative">');
                a.document.write('<div style="text-align:center; width:100%">'+image+'</div>');
                a.document.write('<style>#chart-img{width:100%}.se{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(270deg);background-color: #AE2526;top: 19%;left: 0;color: white;}.e{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(270deg);background-color: #AE2526;top: 55%;left: 0;color: white;}.ne{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(270deg);background-color: #AE2526;top: 76%;left: 0;color: white;}.sw{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(90deg);background-color: #AE2526;top: 19%;right: 0;color: white;}.w{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(90deg);background-color: #AE2526;top: 55%;right: 0;color: white;}.nw{position:absolute;font-weight: bold;width: 13%;text-align: center;transform: rotate(90deg);background-color: #AE2526;top: 76%;right: 0;color: white;}.s{position:absolute;font-weight: bold;width: 13%;text-align: center;background-color: #AE2526;top: 6%;right: 38%;color: white;}.n{position:absolute;font-weight: bold;width: 13%;text-align: center;background-color: #AE2526;bottom: 9%;right: 38%;color: white;} .level0{top:14.3%!important;width:2.2%} .level7{left:16%!important;width:2.2%} .level6{left:16%!important;width:2.2%} .level5{left:16%!important;width:2.2%} .level1{right:16%!important;width:2.2%} .level2{right:16%!important;width:2.2%} .level3{right:16%!important;width:2.2%} .level4{bottom:14%!important;width:2.2%}</style>')
                a.document.write('</div>');
                a.print();
                a.close();
            }
        },
        mounted() {
            this.loadChart();
        }
    }
</script>
<style scoped>
    .se{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(270deg);
        background-color: #AE2526;
        top: 19%;
        left: 0;
        color: white;
    }
    .e{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(270deg);
        background-color: #AE2526;
        top: 55%;
        left: 0;
        color: white;
    }

    .ne{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(270deg);
        background-color: #AE2526;
        top: 76%;
        left: 0;
        color: white;
    }

    .sw{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(90deg);
        background-color: #AE2526;
        top: 19%;
        right: 0;
        color: white;
    }

    .w{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(90deg);
        background-color: #AE2526;
        top: 55%;
        right: 0;
        color: white;
    }

    .nw{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        transform: rotate(90deg);
        background-color: #AE2526;
        top: 76%;
        right: 0;
        color: white;
    }

    .s{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        background-color: #AE2526;
        top: 6%;
        right: 38%;
        color: white;
    }
    .n{
        position:absolute;
        font-weight: bold;
        width: 13%;
        text-align: center;
        background-color: #AE2526;
        bottom: 9%;
        right: 38%;
        color: white;
    }
</style>
