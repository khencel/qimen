<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row bg-white">
            <div class="col-md-4 border p-2">
                <div class="row">
                    <div class="col-md-8" v-if="attribute == 'Name in Qi Men'">
                        <textarea class="form-control" v-model="form.attribute" cols="30" rows="10"></textarea>
                    </div>
                    <div class="col-md-8" v-else>
                        <input type="text" class="form-control" v-model="form.attribute">
                    </div>
                    <div class="col-4 pt-1" v-show="!loading">
                        <span @click="addAttribute" class="badge badge-success p-2 cursor-pointer" v-text="'UPDATE'"></span>
                    </div>
                    <div class="col-4 pt-1" v-show="loading">
                        <PulseLoader :loading="loading"></PulseLoader>
                    </div>
                </div>
            </div>
            <div class="col-md-8 border p-2">
                <PreviewStem ref="preview"></PreviewStem>
            </div>
        </div>
    </div>
</template>

<script>
    import PreviewStem from '../stem/PreviewStem';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    export default {
        components:{
            PreviewStem,PulseLoader
        },
        props:['id','attribute'],
        data(){
            return{
                loading:false,
                form: new Form({
                    attribute_name:this.attribute,
                    attribute:'',
                }),
            }
        },
        methods:{
            addAttribute(){
                this.loading = true;
                this.form.put('/api/stem/store/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update'+this.attribute,
                        text: this.attribute+' has been updated'
                    });
                    this.showAttribute();
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

            showAttribute(){
                this.form.put('/api/stem/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.form.attribute = res.data.value;
                    this.$refs.preview.showAttributes(this.id);
                });
            }
        },
        mounted() {
            this.showAttribute();
        }
    }
</script>
