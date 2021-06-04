<template>
    <div class="row">
            <notifications group="notification" position="bottom right" />
            <div class="col-md-3 border pt-3 pb-3">
                <div class="border-bottom:1px solid">
                    <table class="table table-hover">
                        <thead style="background-image: linear-gradient(#F78A30, #F9CE5A);">
                            <th>User</th>
                            <th>DL</th>
                            <th>DB</th>
                            <th>DF</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in guest" :key="item.id" style="cursor:pointer" @click="seletedUser(item.id)" :class="item.id == id?'bg-warning':''">
                                <td class="font-weight-bold text-capitalize">{{item.first_name}} {{item.last_name}}</td>
                                <td>{{item.divine_light != null?item.divine_light:'N/A'}}</td>
                                <td>{{item.divine_blessing != null?item.divine_blessing:'N/A'}}</td>
                                <td>{{item.divine_force != null?item.divine_force:'N/A'}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn button-success w-100" @click="createGuest">Create Guest</button>
                </div>
                <div>
                    <h3>Guest Information</h3>
                    <div class="mt-2">
                        <label for="">First Name:</label>
                        <input type="text" class="form-control text-capitalize" placeholder="First Name" v-model="form.first_name">
                        <span class="text-danger font-italic" v-if="errors.first_name" v-text="errors.first_name[0]"></span>
                    </div>
                    <div class="mt-2">
                        <label for="">Last Name:</label>
                        <input type="text" class="form-control text-capitalize" placeholder="Last Name" v-model="form.last_name">
                        <span class="text-danger font-italic" v-if="errors.last_name" v-text="errors.last_name[0]"></span>
                    </div>
                    <div class="mt-2">
                        <label for="">Date of Birth:</label>
                        <input type="date" class="form-control" v-model="form.date_of_birth">
                        <span class="text-danger font-italic" v-if="errors.date_of_birth" v-text="errors.date_of_birth[0]"></span>
                    </div>
                    <div class="mt-2">
                        <label for="">Time of Birth:</label>
                        <input type="time" class="form-control" v-model="form.time_of_birth">
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <button class="btn btn-secondary form-control" @click="deleteGuest(id)">Delete Guest</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-success form-control" @click="updateGuest(id)">Update Guest</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9 border">
                <div class="border" v-show="light == null">
                    <button class="btn btn-success" @click="castVicDay">Generate Victory Day for this Guest</button>
                </div>
                <div v-show="id != '' && light != null">
                    <div class="ml-5 mt-2">
                        <h2>{{first}} {{last}}</h2>
                    </div>
                    <Victory ref="guestVictoryDay"></Victory>
                </div>
                <div v-show="id == ''">
                    <Main></Main>
                </div>
            </div>
            <CreateGuest ref="createModal" @loadGuest="loadGuest"></CreateGuest>
            <VicDay ref="victoryDay"></VicDay>
    </div> 
</template>

<script>
    import Swal from 'sweetalert2';
    import Main from '../user-side/VictoryDay';
    import Victory from '../user-side/VictoryDayGuest';
    import CreateGuest from '../modal/CreateGuest';
    import VicDay from '../modal/VictoryDayGuest';
    export default {
        components:{
            Victory,
            CreateGuest,
            VicDay,
            Main
        },
        data(){
            return{
                first:'',
                last:'',
                errors:{},
                guest:{},
                id:'',
                light:'',
                form:new Form({
                    first_name:'',
                    last_name:'',
                    date_of_birth:'',
                    time_of_birth:''
                }),
            }
        },
        mounted() {
            this.loadGuest();
        },
        methods: {
            createGuest(){
                this.$refs.createModal.showModal();
            },
            loadGuest(){
                axios.get('/api/guest/user-guest?api_token='+window.token)
                .then(res => {
                    this.guest = res.data;
                })
            },
            seletedUser(id){
                this.form.get('/api/guest/user-guest/'+id+'?api_token='+window.token)
                .then(res => {
                    this.id = res.data.id;
                    this.form.first_name = res.data.first_name;
                    this.form.last_name = res.data.last_name;
                    this.form.date_of_birth = res.data.date_of_birth;
                    this.form.time_of_birth = res.data.time_of_birth;
                    this.light = res.data.divine_light;
                    this.first = res.data.first_name;
                    this.last = res.data.last_name;
                    if(res.data.divine_light != null){
                        this.$refs.guestVictoryDay.alreadyCast(id);
                    }
                })
            },
            updateGuest(id){
                this.form.put('/api/guest/user-guest/'+id+'?api_token='+window.token)
                .then(response => {
                    this.loadGuest();
                    this.errors = [];
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                })
            },
            deleteGuest(id){
                if(id == ""){
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Please Select Guest',
                        text: 'Select Guest you want to delete'
                    });
                }else{
                    Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.form.delete('/api/guest/user-guest/'+id+'?api_token='+window.token)
                            .then(res => {
                                Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                                )
                                this.loadGuest();
                            })
                        }
                    })
                }
                
            },
            castVicDay(){
                this.$refs.victoryDay.showModal();
                this.$refs.victoryDay.form.id = this.id;
            },
        },
    }
</script>
