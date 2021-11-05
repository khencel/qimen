<template>
    <div class="container-fluid">
        <div class="row mt-2 justify-content-center">
            <div class="col-md-10 border p-2">
                
                <div class="row m-0">
                    <div v-for="(chart, index) in charts" :key="index" class="col-md-2 border hover-success">
                        <a :href="'/monthChart/show?id='+chart.month_chart_id+'&index='+index">
                            <div>
                                {{chart.chart.stem.value}} {{chart.chart.branch.name}}
                                <br>
                                {{chart.chart.element.name}} {{chart.chart.english.name}}
                                <br>
                                {{index == 0?monthList[chart.chart.year_chart.month-11 - 1]:monthList[chart.chart.year_chart.month-1]}} {{index == 0?chart.chart.year_chart.year+1:chart.chart.year_chart.year}} 
                            </div>
                        </a>
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
                charts:{},
                year: new Date().getFullYear(),
                monthList:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            }
        },
       
        methods: {
            generateChart(){
                axios.get('/api/generate-month-chart/'+this.year+'?api_token='+window.token)
                .then(res => {
                    this.charts = res.data;
                })
            }
        },
        mounted() {
            this.generateChart();
        }
    }
</script>

<style scoped>
    .hover-success{
        cursor: pointer;
    }
    .hover-success:hover{
        background-color: #00FF96;
    }
</style>
