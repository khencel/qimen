<template>
    <div>
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">First Name</label>

            <div class="col-md-6">
                <input type="text" style="background-color:#F3F3F3" class="form-control text-capitalize" v-model="form.first_name" required autocomplete="first_name" autofocus placeholder="Enter First Name">
                <span class="text-danger font-italic" v-if="errors.first_name" v-text="errors.first_name[0]"></span>
            </div>
        </div>

        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">Last Name</label>

            <div class="col-md-6">
                <input type="text" style="background-color:#F3F3F3" class="form-control text-capitalize" v-model="form.last_name" required autocomplete="last_name" autofocus placeholder="Enter Last Name">
                <span class="text-danger font-italic" v-if="errors.last_name" v-text="errors.last_name[0]"></span>
            </div>
        </div>

        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">Date of Birth</label>

            <div class="col-md-6">
                <input type="date" v-model="form.birth_date" style="background-color:#F3F3F3" class="form-control">
                <span class="text-danger font-italic" v-if="errors.birth_date" v-text="errors.birth_date[0]"></span>
            </div>
        </div>

        <div class="form-group row">
            <label for="name"  class="col-md-4 col-form-label text-md-right">Time of Birth</label>

            <div class="col-md-6">
                <input type="time" style="background-color:#F3F3F3" v-model="form.birth_time" class="form-control">
                <span class="text-danger font-italic" v-if="errors.birth_time" v-text="errors.birth_time[0]"></span>

            </div>
        </div>


        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

            <div class="col-md-6">
                <input id="email" style="background-color:#F3F3F3" type="email" class="form-control" v-model="form.email" required autocomplete="email" placeholder="Enter Email Address">
                <span class="text-danger font-italic" v-if="errors.email" v-text="errors.email[0]"></span>

            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">Country</label>

            <div class="col-md-6">
                <country-select class="form-control" style="background-color:#F3F3F3" v-model="form.country" :countryName="true" :country="form.country" topCountry="US" />
                <span class="text-danger font-italic" v-if="errors.country" v-text="errors.country[0]"></span>

            </div>
        </div>
       
        <div class="form-group row">
            
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

            <div class="col-md-6">
                <input id="password" style="background-color:#F3F3F3" placeholder="Password" type="password" class="form-control" v-model="form.password" required autocomplete="new-password">
                <span class="text-danger font-italic" v-if="errors.password" v-text="errors.password[0]"></span>
            </div>
        </div>

        <div class="form-group row">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

            <div class="col-md-6">
                <input id="password-confirm" type="password" class="form-control" v-model="form.password_confirmation" required autocomplete="new-password">
                <small>Password must be at least 8 characters long, contain a number and an uppercase letter</small> 
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <pulse-loader class="float-right" :loading="loading" :size="size"></pulse-loader>
            </div>
        </div>  
        
        <div v-show="loading == false" class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button @click="btnRegister" class="buttonSuccess btn-block text-white">
                    Register
                </button>
            </div>
        </div>       
    </div>
</template>

<script>
    import vueCountryRegionSelect from 'vue-country-region-select'
    export default {
        data(){
            Vue.use(vueCountryRegionSelect)
            return {
                errors:{},
                loading:false,
                size:'22px',
                form: new Form({
                    first_name:'',
                    last_name:'',
                    birth_date:'',
                    birth_time:'',
                    email:'',
                    country: '',
                    password:'',
                    password_confirmation:''
                }),
            }
        },
        mounted() {
            
        },
        methods:{
            btnRegister(){
                this.loading = true;
                this.form.post('/api/register')
                .then(response => {
                    window.location = "/login"
                })
                .catch(error => {
                    this.loading = false;
                    this.errors = error.response.data.errors;
                });
            },
           
        }
    }
</script>

<style>
    .v-pulse1{
        background-color: #B4E253 !important;
    }
    .v-pulse1{
        background-color: #459623 !important;
    }
    .v-pulse1{
        background-color: #F76E1E !important;
    }
</style>
