<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row bg-white">
            <div class="col-md-4 border p-2">

                <div class="row" v-for="attribute in attributes" :key="attribute.id" >
                    <div class="col-md-8">
                        {{attribute.value}}
                    </div>
                    <div class="col-4 pt-1">
                        <span @click="deleteAttributes(attribute.id)" class="badge badge-danger p-2 cursor-pointer form-control" v-text="'-'"></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <input type="text" class="form-control" v-model="form.attribute">
                    </div>
                    <div class="col-4 pt-1" v-show="!loading">
                        <span @click="addAttributes" class="badge badge-success p-2 cursor-pointer form-control" v-text="'+'"></span>
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
    import Preview from '../deitie/PreviewStem';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    export default {
        components:{
            Preview,PulseLoader
        },
        props:['id','attribute'],
        data(){
            return{
                loading:false,
                attributes:{},
                form: new Form({
                    attribute_name:this.attribute,
                    addAttribute:""
                }),
            }
        },
        methods:{
           addAttributes(){
               this.loading = true;
               this.form.put('/api/deitie/store/'+this.id+'?api_token='+window.token)
               .then(res => {
                   this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update '+this.attribute,
                        text: this.attribute+' has been updated'
                    });
                    this.showAttributes();
                    this.form.attribute = "";
               })
               .catch(error => {
                   this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid Input',
                        text: this.attribute+' field is required'
                    });
               });
           },
           deleteAttributes(id){
               axios.post('/api/deitie/delete/attributes?api_token='+window.token,{attribute_name:this.form.attribute_name,id:id})
               .then(res => {
                   this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update '+this.attribute,
                        text: this.attribute+' has been deleted'
                    });
                    this.showAttributes();
               });
           },
            showAttributes(){
                this.form.put('/api/deitie/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.attributes = res.data;
                    this.$refs.preview.showAttributes(this.id);
                });
            }
        },
        mounted() {
            this.showAttributes();
        }
    }
</script>
