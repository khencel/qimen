<template>
<div class="ml-5 mr-5">
    <div class="modal fade" id="modalShow" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content modalDesign">
            <div class="modal-header">
                <img src="/img/yinyang.png" id="yinyang" alt="">
                <img src="/img/yinbig.png" id="yinBig" alt="">
                <h5 class="modal-title text-white" id="exampleModalLabel">Create Guest</h5>
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-white">
                <div>
                    <label for="First Name">First Name</label>
                    <input type="text" class="form-control" v-model="form.first_name" placeholder="First Name">
                    <span class="text-danger font-italic" v-if="errors.first_name" v-text="errors.first_name[0]"></span>
                </div>
                <div class="mt-2">
                    <label for="Last Name">Last Name</label>
                    <input type="text" class="form-control" v-model="form.last_name" placeholder="Last Name">
                    <span class="text-danger font-italic" v-if="errors.last_name" v-text="errors.last_name[0]"></span>
                </div>
                <div class="mt-2">
                    <label for="Date of Birth">Date of Birth</label>
                    <input type="date" class="form-control" v-model="form.date_of_birth">
                    <span class="text-danger font-italic" v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]"></span>
                </div>
                <div class="mt-2">
                    <label for="">Time of Birth</label>
                    <input type="time" class="form-control" v-model="form.time_of_birth">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="buttonCancel" data-dismiss="modal">Close</button>
                <button type="button" class="buttonSuccess" @click="guestStore">Create Guest</button>
            </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        data(){
            return{
                errors:{},
                form:new Form({
                    first_name:'',
                    last_name:'',
                    date_of_birth:'',
                    time_of_birth:''
                }),
            }
        },
        mounted() {
            
        },
        methods: {
            showModal(){
                $('#modalShow').modal('show');
            },
            guestStore(){
                this.form.post('/api/guest/user-guest?api_token='+window.token)
                .then(response => {
                    $('#modalShow').modal('hide');
                    this.$emit('loadGuest');
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            }
        },
    }
</script>

