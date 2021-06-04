<template>
<div>
    <div class="card">
        <div class="card-header">
            Yin Four
        </div>
        <div class="card-body">
            <table class="table table-hover ">
                <thead class="thead-dark">
                    <th>ID</th>
                    <th>#</th>
                    <th>Yin Type</th>
                    <th>Name</th>
                    <th></th>
                </thead>
                <tbody>
                   
                    <tr v-for="(chart, index) in charts.data" :key="chart.id">
                        <td>{{chart.id}}</td>
                        <td v-if="index.length == index.length" v-text="chart.id*2 +2"></td>
                        <td v-else v-text="chart.id*2 + 4"></td>
                        <td>{{chart.yin_type}}</td>
                        <td><span class="font-italic mr-1">{{chart.stem.value}} {{chart.branch.name}}</span><span class="h5 font-weight-bold">{{chart.element.name}} {{chart.english.name}}</span>({{chart.start_date | moment("MMMM Do")}}-{{chart.end_date | moment("MMMM Do")}}) 
                        </td>
                        <td>
                            <a :href="'/chart/chartEnv/'+chart.id+'/'+chart_type">
                                <b-badge variant="primary" class="p-2">View and Edit Chart</b-badge>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="w-100 mt-1">
                <pagination class="float-right" :data="charts" @pagination-change-page="loadChart"></pagination>
            </div>
            
        </div>
    </div> 
</div>
    
</template>

<script>
    Vue.component('pagination', require('laravel-vue-pagination'));
    export default {
        data(){
            return {
                charts:{},
                chart_type:'month',
                yin_type:'Yin Four',
            }
        },
        mounted() {
            this.loadChart();
        },
        methods:{
            loadChart(page = 1){
                axios.post('/api/chartList?page='+page,{chart:this.chart_type,yin_type:this.yin_type})
                .then(response => {
                    this.charts = response.data;
                });
            },
            createModal(){
                this.$refs.createChart.modalShow = true;
                this.$refs.createChart.chart.yin_type = this.yin_type
                this.$refs.createChart.loadContent();
            },
        }

    }
</script>
