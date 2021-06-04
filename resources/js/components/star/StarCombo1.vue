<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <table class="table table-hover bg-white">
                <thead class="thead-dark">
                    <th>Hour</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in comboOne" :key="index">
                        <td style="width:20%;">
                            {{item.english.name}}
                            <br>
                            {{item.start_hour}}-{{item.end_hour}}
                        </td>
                        <td style="width:40%;">
                            {{item.description}}
                        </td>
                        <td style="width:15%;">
                            <img :src="'/img/rating/'+item.rating+'.png'" style="width:40px;" alt="">
                        </td>
                        <td>
                            <span class="badge badge-primary p-2 cursor-pointer" @click="edit(item.id)" style="width:25%">Edit</span>
                            <span class="badge badge-danger p-2 cursor-pointer" @click="deleteItem(item.id)" style="width:25%">X</span>
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            <select v-model="form.english_id" class="form-control" id="combo">
                                <option value="" selected hidden>Select English</option>
                                <option v-for="(item, index) in englishes" :key="index" :value="item.id">{{item.name}}</option>
                            </select>
                            <select class="form-control mt-1" v-model="form.start_hour">
                                <option value="" hidden selected>Start Hour</option>
                                <option v-for="(item, index) in hours" :key="index" :value="item">{{item}}</option>
                            </select>
                            <select class="form-control mt-1" v-model="form.end_hour">
                                <option value="" hidden selected>End Hour</option>
                                <option v-for="(item, index) in hours" :key="index" :value="item">{{item}}</option>
                            </select>
                        </td>
                        <td>
                            <textarea class="form-control" placeholder="Description" v-model="form.description" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <select v-model="form.rating" class="form-control">
                                <option value="" hidden selected>Rating</option>
                                <option value="1">Inauspicious</option>
                                <option value="2">Moderate</option>
                                <option value="3">Auspicious</option>
                            </select>
                        </td>
                        <td>
                            <span v-if="!editMode" class="badge button-success p-2 cursor-pointer w-50 mb-1" @click="addComboOne">Add</span>
                            <span v-else class="badge badge-warning p-2 cursor-pointer w-50 mb-1" @click="update">Update</span>
                            <span class="badge badge-danger p-2 cursor-pointer w-50" @click="cancelTransaction">Cancel</span>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'
    export default {
        props:['id'],
        data(){
            return{
                hours:["11 am","11 pm","12:59 am","12:59 pm","1 am","1 pm","2:59 am","2:59 pm","3 am","3 pm","4:59 am","4:59 pm","5 am","5 pm","6:59 am","6:59 pm","7 am","7 pm","8:59 am","8:59 pm","9 am","9 pm","10:59 am","10:59 pm"],
                englishes:{},
                comboOne:{},
                editMode:false,
                selected_id:'',
                form:new Form({
                    start_hour:'',
                    end_hour:"",
                    english_id:'',
                    star_id: this.id,
                    description:'',
                    rating:'',
                    type:"one",
                }),
            }
        },
        methods:{
            english(){
                axios.post('/api/star/combo/english?api_token='+window.token,{star_id:this.id})
                .then(res => {
                    this.englishes = res.data;
                });
            },

            addComboOne(){
                this.form.post('/api/star/combo/store?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Add '+this.attribute,
                        text: this.attribute+' has been Added'
                    });
                    this.form.reset();
                    this.show();
                })
                .catch(erre => {
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid Data',
                        text: 'All fields are required'
                    });
                });
            },
            show(){
                axios.get('/api/star/combo/show/'+this.form.type+'/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.comboOne = res.data;
                }); 
            },
            edit(id){
                this.editModeFormation(id);
                axios.post('/api/star/combo/edit?api_token='+window.token,{selected_id:id,id:this.id,type:this.form.type})
                .then(res => {
                    this.selected_id = id;
                    this.form.english_id = res.data.comboOne.english_id;
                    this.form.start_hour = res.data.comboOne.start_hour;
                    this.form.end_hour = res.data.comboOne.end_hour;
                    this.form.description = res.data.comboOne.description;
                    this.form.rating = res.data.comboOne.rating;
                    this.englishes = res.data.english;
                });
            },
            update(){
                this.form.put('/api/star/combo/update/'+this.selected_id+'?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update '+this.attribute,
                        text: this.attribute+' has been Updated'
                    });
                    this.form.reset();
                    this.show();
                    this.editMode = false;
                })
            },

            deleteItem(id){
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
                        this.form.get('/api/star/combo/delete/'+this.form.type+'/'+id+'?api_token='+window.token)
                        .then(res => {
                            Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                            this.show();
                        })
                    }
                })
                
            },
            editModeFormation(id){
                this.editMode = true;
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                $('#combo').focus();
            },
            cancelTransaction(){
               this.form.reset();
                this.editMode = false;
            }
        },
        mounted(){
            this.english();
            this.show();
        } 
    }
</script>
