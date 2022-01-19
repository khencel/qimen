<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row">
            <div class="col-md-6">
                <strong>
                    <label for="">Overall Forecast For The Year</label>
                </strong>
                <textarea v-model="form.forecast" class="form-control" placeholder="Text here..." cols="30" rows="10"></textarea>
            </div>
            <div class="col-md-6 border-left">
                <strong>
                    <label for="">Year of the {{animals.name}}</label>
                </strong>
                <div class="row">
                    <div class="col-md-6">
                        <input type="number" placeholder="Input year" class="form-control" v-model="year">
                        <button class="btn btn-success mt-2" @click="addYear">Add</button>
                        <div class="row">
                            <div class="col-md-4" v-for="(item, index) in form.years" :key="index">
                                <span class="badge badge-primary p-2 mt-2 w-50">{{item}}</span>
                                <span class="badge badge-danger p-2 mt-2" @click="deleteYear(index)" style="cursor:pointer">X</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <textarea v-model="form.year_text" placeholder="Input text here..." class="form-control" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <button v-if="!loading" class="btn btn-success w-25 mt-2 float-right" @click="storeData">Save</button>
                <PulseLoader class="float-right mr-5 mt-3" v-else :loading="loading"></PulseLoader>
            </div>
        </div>
    </div>
    
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    export default {
        props:['id'],
        components:{
            PulseLoader
        },
        data(){
            return{
                animals:{},
                year:'',
                loading:false,
                form:new Form({
                    years:[],
                    forecast:'',
                    year_text:'',
                    id:this.id
                }),
            }
        },
        methods: {
            async show(){
                const res = await axios.get(window.besteverLive+'/api/animal/show/'+this.id);
                this.animals = res.data;
                this.form.forecast = res.data.forecast_for_the_year;
                this.form.year_text = res.data.text_for_the_year;
                res.data.year.forEach(element => {
                    this.form.years.push(element.year);
                });
            },
            addYear(){
                this.form.years.push(this.year);
                this.year = '';
            },

            deleteYear(index){
                this.form.years.splice(index, 1);
            },

            storeData(){
                this.loading = true;
                this.form.post(window.besteverLive+'/api/animal/store')
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Data',
                        text: 'Data has been updated'
                    });
                    this.loading = false;
                })
            }
        },
        mounted() {
            this.show();
        }
    }
</script>
