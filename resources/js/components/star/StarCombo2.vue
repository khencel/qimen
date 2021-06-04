<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <table class="table table-hover bg-white">
                <thead class="thead-dark">
                    <th>Door</th>
                    <th>Gua</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in comboTwo" :key="index">
                        <td style="width:10%;">
                            {{item.door.name}}
                        </td>
                        <td>
                            {{item.hexagram}}
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
                    <tr v-show="loading">
                        <td><pulse-loader :loading="loading"></pulse-loader></td>
                    </tr>
                
                    <tr v-show="!loading">
                        <td>
                            <select v-model="form.door_id" class="form-control" id="combo">
                                <option value="" selected hidden>Select Door</option>
                                <option v-for="(item, index) in doors" :key="index" :value="item.id">{{item.name}}</option>
                            </select>
                        </td>
                        <td>
                            <select v-model="form.hexagram" class="form-control">
                                <option value="" selected hidden>Select Gua</option>
                                <option v-for="(item, index) in hexagrams" :key="index" :value="item.name">{{item.name}}</option>
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
                            <span v-if="!editMode" class="badge button-success p-2 cursor-pointer w-50 mb-1" @click="addComboTwo">Add</span>
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
                doors:{},
                hexagrams:{},
                loading:true,
                comboTwo:{},
                editMode:false,
                selected_id:'',
                form:new Form({
                    door_id:'',
                    hexagram:'',
                    star_id: this.id,
                    description:'',
                    rating:'',
                    type:"two",
                }),
            }
        },
        methods:{
            door(){
                axios.post('/api/star/combo/door?api_token='+window.token,{star_id:this.id})
                .then(res => {
                    this.doors = res.data;
                });
            },
            showHexagram(){
                axios.get('https://yijing.jennelcheng.com/api/hexagram/list?api_token=1TLxV5nRi60rNhwcaQR5Z4WvXIGNbgu5aSkphU4PvYIrKtg726JSdBu9rUrv')
                .then(res => {
                    this.hexagrams = res.data;
                    this.loading = false;
                }); 
            },

            addComboTwo(){
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
                    this.comboTwo = res.data;
                }); 
            },
            edit(id){
                this.editModeFormation(id);
                axios.post('/api/star/combo/edit?api_token='+window.token,{selected_id:id,id:this.id,type:this.form.type})
                .then(res => {
                    this.selected_id = id;
                    this.form.door_id = res.data.comboTwo.door_id;
                    this.form.hexagram = res.data.comboTwo.hexagram;
                    this.form.description = res.data.comboTwo.description;
                    this.form.rating = res.data.comboTwo.rating;
                    this.doors = res.data.door;
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
            this.door();
            this.showHexagram();
            this.show();
        } 
    }
</script>
