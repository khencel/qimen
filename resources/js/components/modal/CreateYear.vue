<template>
    <div>
        <b-modal v-model="modalShow" @ok="handleOk" title="Create Month Day Chart">
            <div class="row">
                <div class="col-md-6">
                    {{months[form.month-1]}}
                </div>
                <div class="col-md-6">
                    {{form.year}}
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
export default {
    data(){
        return{
            modalShow:false,
            months:['January','February','March','April','May','June','July','August','September','October','November','December'],
            lastDate:{},
            form: new Form({
                total_days:0,
                month_chart_id:0,
                month:0,
                year:0,
            }),
        }
    },
    mounted(){
        this.getLastDate();
    },
    methods:{
        getNumberOfDay(){
            var getDaysInMonth = function(month,year) {
                return new Date(year, month, 0).getDate();
            }; 
            this.form.total_days = getDaysInMonth(this.lastDate.lastMonth, this.form.year);
        },

        handleOk(bvModalEvt) {
            this.form.post('/api/create?api_token='+window.token)
            .then(response => {
                console.log(response.data);
                this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Add Chart',
                        text: 'Chart has been Added'
                });
                location.reload();
                this.getLastDate();
            });
        },

        getLastDate(){
            axios.post('/api/get-last-date?api_token='+window.token)
            .then(response => {
                console.log(response.data.last_month_chart);
                this.lastDate = response.data;
                this.form.month = response.data.lastMonth;
                this.form.month_chart_id = response.data.last_month_chart;
                this.form.year = response.data.last_year;
            });
        }
    }
}
</script>