<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row bg-white">
            <div class="col-md-4 border p-2">
                <div class="row">
                    <div class="col-md-8">
                        <input type="text" class="form-control" v-model="form.element">
                    </div>
                    <div class="col-4 pt-1" v-show="!loading">
                        <span @click="storeElement" class="badge badge-success p-2 cursor-pointer" v-text="'UPDATE'"></span>
                    </div>
                    <div class="col-4 pt-1" v-show="loading">
                        <PulseLoader :loading="loading"></PulseLoader>
                    </div>
                </div>
            </div>
            <div class="col-md-8 border p-2">
                <Preview ref="preview"></Preview>
            </div>
        </div>
    </div>
</template>

<script>
    import Preview from '../trigram/PreviewTrigram';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    export default {
        components:{
            Preview,PulseLoader
        },
        props:['id'],
        data(){
            return{
                loading:false,
                form: new Form({
                    
                    attributes_name:"element",
                    element:"",
                }),
            }
        },
        methods:{
            storeElement(){
                this.loading = true;
                this.form.put('/api/trigram/store/'+this.id+'?api_token='+window.token)
                .then(res =>{
                    this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Number',
                        text: 'Number has been updated'
                    });
                    this.$refs.preview.showAttributes(this.id)
                })
            },

            showElement(){
                axios.get('/api/trigram/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.form.element = res.data.element;
                    this.$refs.preview.showAttributes(this.id)
                });
            }
        },
        mounted() {
            this.showElement();
        }
    }
</script>
