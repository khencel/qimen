<template>
<div>
    <notifications group="notification" position="bottom right" />
    <div class="card">
        <b-button variant="success" @click="createModal" class="float-right">Create Chart</b-button>
        <div class="card-body">
            <table class="table table-hover ">
                <thead class="thead-dark">
                    <th>ID</th>
                    <th>#</th>
                    <th>Structure Type</th>
                    <th>Cycle Type</th>
                    <th>Yang Number</th>
                    <th>Chart</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="chart in charts.data" :key="chart.id">
                        <td>{{chart.id}}</td>
                        <td v-if="chart.cycle_type == 'Upper Cycle'">{{chart.id*2 +2}}</td>
                        <td v-else-if="chart.cycle_type == 'Middle Cycle'" >{{chart.id*2 +4}}</td>
                        <td v-else>{{chart.id*2 +6}}</td>
                        <td>{{chart.structure_type}}</td>
                        <td>{{chart.cycle_type}}</td>
                        <td>Yang {{chart.number}}</td>
                        <td><span class="font-italic mr-1">{{chart.stem.value}} {{chart.branch.name}}</span><span class="h5 font-weight-bold">{{chart.element.name}} {{chart.english.name}}</span>
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
        props:['structure_type','cycle'],
        data(){
            return {
                charts:{},
                chart_type:'day'
            }
        },
        mounted() {
            this.loadChart();
        },
        methods:{
            loadChart(page = 1){
                axios.post('/api/chartList?page='+page,{chart:this.chart_type,structure:this.structure_type,cycle:this.cycle})
                .then(response => {
                    this.charts = response.data;
                });
            },
            createModal(){
                this.$refs.createChart.loadLastChart();
                this.$refs.createChart.modalShow = true;
                this.$refs.createChart.chart.structure_type = this.structure_type;
                this.$refs.createChart.chart.cycle_type = this.cycle;
                this.$refs.createChart.loadContent();
                
            },
        }

    }
</script>
