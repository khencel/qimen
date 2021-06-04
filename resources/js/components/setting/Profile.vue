<template>
<div class="">
    <notifications group="notification" position="bottom right" />
    <div class="row">
        <div class="col-md-7 border p-3 bg-white">
            <h3>Profile</h3>
            <div class="row mt-4">
                <div class="col-md-2 text-center">
                    <div class="image">
                        <img src="/img/user.png" class="img-circle elevation-2" width="100px;" alt="User Image">
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-6">
                            <table>
                                <tr>
                                    <td style="width:80px;" class="font-weight-bold">First Name:</td>
                                    <td class="text-blue"><span>{{form.first_name}}</span></td>
                                </tr>
                                <tr>
                                    <td style="width:80px;" class="font-weight-bold">Last Name:</td>
                                    <td class="text-blue"><span>{{form.last_name}}</span></td>
                                </tr>
                                <tr>
                                    <td style="width:80px;" class="font-weight-bold">Email:</td>
                                    <td class="text-blue"><span>{{form.email}}</span></td>
                                </tr>
                            </table>
                        </div>

                        <div class="col-md-6">
                            <table>
                                <tr>
                                    <td style="width:100px;" class="font-weight-bold">Date of Birth:</td>
                                    <td class="text-blue"><span>{{form.birth_date}}</span></td>
                                </tr>
                                <tr>
                                    <td style="width:100px;" class="font-weight-bold">Time of Birth:</td>
                                    <td class="text-blue"><span>{{form.birth_time}}</span></td>
                                </tr>
                                <tr>
                                    <td style="width:100px;" class="font-weight-bold">Country:</td>
                                    <td class="text-blue"><span>{{form.country}}</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="col-md-5  p-3 border bg-white">
            <h3>Edit Profile</h3>
            <div class="row mt-4">
                <div class="col-md-10">
                    <div class="mt-2">
                        <label for="">First Name:</label>
                        <input type="text" v-model="form.first_name" placeholder="Enter First Name" class="form-control">
                        <span class="text-danger font-italic" v-if="errors.first_name" v-text="errors.first_name[0]"></span>
                    </div>

                    <div class="mt-2">
                        <label for="">Last Name:</label>
                        <input type="text" v-model="form.last_name" placeholder="Enter Last Name" class="form-control">
                        <span class="text-danger font-italic" v-if="errors.last_name" v-text="errors.last_name[0]"></span>
                    </div>

                    <div class="mt-2">
                        <label for="">Date of Birth:</label>
                        <input type="date" v-model="form.birth_date" class="form-control">
                        <span class="text-danger font-italic" v-if="errors.birth_date" v-text="errors.birth_date[0]"></span>
                    </div>

                    <div class="mt-2">
                        <label for="">Date of Birth:</label>
                        <input type="time" v-model="form.birth_time" class="form-control">
                        <span class="text-danger font-italic" v-if="errors.birth_time" v-text="errors.birth_time[0]"></span>
                    </div>

                    <div class="mt-2">
                        <label for="">Country:</label>
                        <country-select class="form-control" v-model="form.country" :countryName="true" :country="form.country" topCountry="US" />
                        <span class="text-danger font-italic" v-if="errors.country" v-text="errors.country[0]"></span>
                    </div>

                    <div class="mt-2 text-right">
                        <button class="buttonSuccess" @click="btnUpdate">Update</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
    import vueCountryRegionSelect from 'vue-country-region-select'
    export default {
        data(){
            Vue.use(vueCountryRegionSelect)
            return{
                details:{},
                errors:{},
                form:new Form({
                    first_name:'',
                    last_name:'',
                    birth_date:'',
                    birth_time:'',
                    country:'',
                    email:''
                }),
            }
        },  
        mounted() {
            this.loadDetails();
        },
        methods:{
            async loadDetails(){
                axios.get('/api/profile?api_token='+window.token)
                .then(response => {
                    this.details = response.data;
                    this.form.fill(response.data);
                });
            },
            async btnUpdate(){
                this.form.put('/api/profile/1?api_token='+window.token)
                .then(response => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Profile',
                        text: 'Chart has been updated'
                    });
                })
                .catch(error => {
                        this.errors = error.response.data.errors;
                });;
            },

        }
    }
</script>
