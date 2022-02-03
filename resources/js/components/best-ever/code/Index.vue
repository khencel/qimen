<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="w-100 mt-2">
            <button @click="createCode" class="btn btn-success float-right mb-2">Generate Code</button>
        </div>
        <div>
            <table class="table table-hover">
                <thead>
                    <th>#</th>
                    <th>Description</th>
                    <th>Code</th>
                    <th>No. of Users</th>
                    <th>Expiration Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    <!-- <th>Action</th> -->
                </thead>
                <tbody>
                    <tr v-for="(code, index) in codes" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{code.description}}</td>
                        <td>{{code.code}}</td>
                        <td>{{code.numb_of_users}}</td>
                        <td>
                            {{ code.exp_date | moment("dddd, MMMM Do YYYY") }}
                        </td>
                        <td>
                            <span v-if="code.status == 0" class="badge badge-danger p-2">Expired</span>
                            <span v-if="code.status == 1" class="badge badge-success p-2">Active</span>
                        </td>
                        <td>
                            <button v-if="code.status == 1" @click="showCode(code.id)" class="btn btn-primary">Edit</button>
                        </td>
                        <!-- <td><button :disabled="code.status == 0?true:false" class="btn btn-danger">Deactivate</button></td> -->
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- modal -->
        <div class="modal fade" id="modalCode" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Generate Code</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">

                        <div class="col-md-10">
                            <strong>
                                <label for="">Code</label>
                            </strong>
                            <input type="text" class="form-control" placeholder="Code here(optional)..." v-model="form.code">
                        </div>

                        <div class="col-md-10">
                            <strong>
                                <label for="">Description</label>
                            </strong>
                            <textarea class="form-control" placeholder="Description here..." cols="30" v-model="form.description" rows="10"></textarea>
                        </div>
                        <div class="col-md-10">
                            <strong>
                                <label for="">Expiration Date</label>
                            </strong>
                            <input v-model="form.exp_date" type="date" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="storeCode">Generate</button>
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
                codes:{},
                is_active:'',
                form:new Form({
                    id:'',
                    year: new Date().getFullYear(),
                    month: new Date().getMonth()+1,
                    day: new Date().getDate(),
                    time: new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
                    exp_date:'',
                    description:'',
                    code:'',
                    numb_of_users:''
                }),
            }
        },
        methods: {
            async index(){
                const res = await axios.get(window.besteverLive+'/api/generate-code/index');
                this.codes = res.data;
            },

            async checkIfActive(){
                const res = await axios.get(window.besteverLive+'/api/code/checkIfActive');
                this.is_active = res.data;
            },
            createCode(){
                this.form.code = '';
                this.form.description = '';
                this.form.exp_date = '';
                $('#modalCode').modal('show');
            },
            storeCode(){
                this.form.post(window.besteverLive+'/api/generate-code/store')
                .then(res => {
                    
                    if(res.data == "Invalid Expiration Date"){
                        alert(res.data);
                    }else{
                        console.log(res.data);
                        this.index();
                        $('#modalCode').modal('hide');
                        this.$notify({
                            group: 'notification',
                            type:'success',
                            title: 'Create Data',
                            text: 'Data has been Created'
                        });
                    }
                })
            },

            async showCode(id){
                this.form.id = id;
                $('#modalCode').modal('show');
                const res = await axios.get(window.besteverLive+'/api/code/show/'+id);
                this.form.id = res.data.id;
                this.form.description = res.data.description;
                this.form.code = res.data.code;
                this.form.exp_date = res.data.exp_date.split(' ')[0];
                this.form.numb_of_users = res.data.numb_of_users
            }
        },
        mounted() {
            this.index();
            this.checkIfActive();
        }
    }
</script>
