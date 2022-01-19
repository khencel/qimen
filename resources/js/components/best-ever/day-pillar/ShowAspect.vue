<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row">
            <div class="col-md-6">
                <strong>
                    <label for="">Wealth</label>
                </strong>
                <textarea class="form-control" placeholder="Input wealth here..." id="" cols="30" rows="10" v-model="form.wealth"></textarea>
            </div>
            <div class="col-md-6">
                <strong>
                    <label for="">Relationships</label>
                </strong>
                <textarea class="form-control" placeholder="Input relationships here..." id="" cols="30" rows="10" v-model="form.relationship"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <strong>
                    <label for="">Health</label>
                </strong>
                <textarea class="form-control" placeholder="Input health here..." id="" cols="30" rows="10" v-model="form.health"></textarea>
            </div>
            <div class="col-md-6">
                <strong>
                    <label for="">Career</label>
                </strong>
                <textarea class="form-control" placeholder="Input career here..." id="" cols="30" rows="10" v-model="form.career"></textarea>
            </div>
        </div>
        <div class="row justify-content-end mt-2 mb-2">
            <div class="col-md-6">
                <button v-if="!loading" class="btn btn-success w-25 float-right" @click="storeAspect">Save</button>
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
                    wealth:'',
                    career:'',
                    relationship:'',
                    health:'',
                    pillar_id:this.id
                }),
            }
        },
        methods: {
            async show(){
                const res = await axios.get(window.besteverLive+'/api/pillar/aspect/show/'+this.id);
                this.form.wealth = res.data.wealth;
                this.form.career = res.data.career;
                this.form.relationship = res.data.relationship;
                this.form.health = res.data.health;
            },
            storeAspect(){
                this.loading = true;
                this.form.post(window.besteverLive+'/api/pillar/aspect/store')
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
