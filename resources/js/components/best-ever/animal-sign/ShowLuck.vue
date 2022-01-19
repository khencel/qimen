<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row">
            <div class="col-md-4">
                <strong>
                    <label for="">February 4th - March 4th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_1"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">March 5th - April 4th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_2"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">April 5th - May 4th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_3"></textarea>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-4">
                <strong>
                    <label for="">May 5th - June 5th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_4"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">June 6th - July 6th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_5"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">July 7th - August 6th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_6"></textarea>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-4">
                <strong>
                    <label for="">August 7th - September 6th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_7"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">September 7th - October 7th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_8"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">October 8th - November 6th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_9"></textarea>
            </div>
        </div>

        <div class="row mt-2">
            <div class="col-md-4">
                <strong>
                    <label for="">November 7th - December 6th</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_10"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">December 7th 2022 - January 4th 2023</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_11"></textarea>
            </div>
            <div class="col-md-4">
                <strong>
                    <label for="">January 5th - February 3rd 2023</label>
                </strong>
                <textarea class="form-control" placeholder="Input text here..." id="" cols="30" rows="10" v-model="form.month_12"></textarea>
            </div>
        </div>
        <div class="row justify-content-end mt-2 mb-2">
            <div class="col-md-6">
                <button v-if="!loading" class="btn btn-success w-25 float-right" @click="storeLuck">Save</button>
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
                loading:false,
                form:new Form({
                    month_1:'',
                    month_2:'',
                    month_3:'',
                    month_4:'',
                    month_5:'',
                    month_6:'',
                    month_7:'',
                    month_8:'',
                    month_9:'',
                    month_10:'',
                    month_11:'',
                    month_12:'',
                    animal_id:this.id
                }),
            }
        },
        methods: {
            async show(){
                const res = await axios.get(window.besteverLive+'/api/luck/show/'+this.id);
                this.form.month_1 = res.data.month_1;
                this.form.month_2 = res.data.month_2;
                this.form.month_3 = res.data.month_3;
                this.form.month_4 = res.data.month_4;
                this.form.month_5 = res.data.month_5;
                this.form.month_6 = res.data.month_6;
                this.form.month_7 = res.data.month_7;
                this.form.month_8 = res.data.month_8;
                this.form.month_9 = res.data.month_9;
                this.form.month_10 = res.data.month_10;
                this.form.month_11 = res.data.month_11;
                this.form.month_12 = res.data.month_12;
            },
            storeLuck(){
                this.loading = true;
                this.form.post(window.besteverLive+'/api/luck/store')
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Data',
                        text: 'Data has been updated'
                    });
                    this.loading = false;
                });
            }
        },
        mounted() {
           this.show();
        }
    }
</script>
