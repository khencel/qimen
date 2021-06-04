<template>
    <div>
        <div class="text-center">
            <pulse-loader :loading="loading"></pulse-loader>
        </div>
        <div class="row justify-content-center m-0" v-show="!loading">
            <div class="col-md-5">
                <strong>{{stem}} {{branch}}</strong> <h3><strong>{{element}} {{english}}</strong></h3>
                <img :src="'/'+photo" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['chart_id','type'],
        data(){
            return {
                dayChart:{},
                loading:false,
                date:new Date(),
                chart_type:this.type,
                photo:'',
                stem:'',
                branch:'',
                element:'',
                english:'',
            }
        },
        mounted(){
            this.getChart();
        },
        methods:{
            getChart(){
                this.loading = true;
                axios.post('/api/get-home-chart',{month:this.date.getMonth()+1,day:this.date.getDate(),year:this.date.getFullYear()})
                .then(response => {
                    this.loading = false;
                    this.photo = response.data.day_chart.photo;
                    this.stem = response.data.day_chart.stem.value;
                    this.branch = response.data.day_chart.branch.name;
                    this.element = response.data.day_chart.element.name;
                    this.english = response.data.day_chart.english.name;
                });
            },
            
          
        }
    }
</script>
