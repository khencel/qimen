<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row">
            <div class="col-md-6">
                <strong>
                    <label for="">Overview</label>
                </strong>
                <textarea v-model="form.overview" class="form-control" placeholder="Text here..." cols="30" rows="10"></textarea>
                <button  v-if="!loading" class="btn btn-success w-25 mt-2 float-right" @click="storePillar">Save</button>
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
                    id: this.id,
                    overview:''
                })
            }
        },
        methods: {
            async showPillar(){
                const res = await axios.get(window.besteverLive+'/api/pillar/show/'+this.id);
                this.form.overview = res.data.overview;
            },
            storePillar(){
                this.loading = true;
                this.form.post(window.besteverLive+'/api/pillar/store')
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
            this.showPillar();
        }
    }
</script>
