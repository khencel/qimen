<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row bg-white">
            <div class="col-md-4 border p-2">
                <div class="row">
                    <div class="col-md-8">
                        <input type="text" class="form-control" v-model="form.attribute">
                    </div>
                    <div class="col-4 pt-1">
                        <span @click="addAttribute" class="badge badge-success p-2 cursor-pointer" v-text="'UPDATE'"></span>
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
    export default {
        components:{
            Preview
        },
        props:['id','attribute'],
        data(){
            return{
                form: new Form({
                    attribute_name:this.attribute,
                    attribute:''
                }),
            }
        },
        methods:{
            addAttribute(){
                this.form.put('/api/deitie/store/'+this.id+'?api_token='+window.token)
                .then(res => {
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
                this.form.put('/api/deitie/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.form.attribute = res.data;
                    this.$refs.preview.showAttributes(this.id);
                });
            }
        },
        mounted() {
            this.showAttribute();
        }
    }
</script>
