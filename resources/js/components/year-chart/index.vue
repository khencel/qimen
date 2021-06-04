<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="card">
            <div>
                <button class="btn btn-success w-100" @click="createChart">
                    Create Month
                </button>
            </div>
            <table class="table table-hover">
                <thead>
                    <th>#</th>
                    <th>Structure</th>
                    <th>Cycle</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Year</th>
                    <th>Chart</th>
                </thead>
                <tbody>
                    <tr v-for="item in yearCharts.data" :key="item.id">
                        <td>{{item.day_chart_id}}</td>
                        <td>{{item.day_chart.structure_type}}</td>
                        <td>{{item.day_chart.cycle_type}}</td>
                        <td>{{months[item.month-1]}}</td>
                        <td>{{item.day}}</td>
                        <td>{{item.year}}</td>
                        <td>{{item.day_chart.element.name}} {{item.day_chart.english.name}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="w-100 mt-1">
                <pagination :limit="3" align="right" size="small" :data="yearCharts" @pagination-change-page="index"></pagination>
            </div>
        </div>
        <create-year-chart-modal ref="createYearChart" @loadChart="index()"></create-year-chart-modal>
    </div>
</template>

<script>
    Vue.component('pagination', require('laravel-vue-pagination'));
    export default {
        
        data(){
            return{
                months:['January','February','March','April','May','June','July','August','September','October','November','December'],
                yearCharts:{},
            }
        },
        mounted() {
            this.index();
        },
        methods:{
            createChart(){
                this.$refs.createYearChart.modalShow = true;
                this.$refs.createYearChart.getNumberOfDay();
                this.$refs.createYearChart.getLastDate();
            },

            index(page = 1){
                axios.get('/api/index?api_token='+window.token+'&page='+page)
                .then(response =>{
                    this.yearCharts = response.data;
                });
            }
        }
    }
</script>
