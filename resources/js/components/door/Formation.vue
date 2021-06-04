<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <table class="table table-hover bg-white">
                <thead class="thead-dark">
                    <th>Palace</th>
                    <th>Gua</th>
                    <th>Relationship</th>
                    <th>Description</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in doorFormation" :key="index">
                        <td>
                            {{item.trigram.name}}
                        </td>
                        <td>
                            {{item.hexagram}}
                        </td>
                        <td>
                            {{item.relationship}}
                        </td>
                        <td style="width:35%">
                            {{item.description}}
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
                            <select id="formation" v-model="form.trigram_id" class="form-control">
                                <option value="" selected hidden>Select Palace</option>
                                <option v-for="(item, index) in palaces" :key="index" :value="item.id">{{item.name}}</option>
                            </select>
                        </td>
                        <td>
                            <select v-model="form.hexagram" class="form-control">
                                <option value="" selected hidden>Select Gua</option>
                                <option v-for="(item, index) in hexagrams" :key="index" :value="item.name">{{item.name}}</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" v-model="form.relationship" class="form-control" placeholder="Relationship">
                        </td>
                        <td>
                            <textarea class="form-control" placeholder="Description" v-model="form.description" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <span v-if="!editMode" class="badge button-success p-2 cursor-pointer w-50 mb-1" @click="addDoorStem">Add</span>
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
                editMode:false,
                loading:true,
                hexagrams:{},
                doorFormation:{},
                palaces:{},
                selected_id:'',
                form:new Form({
                    relationship:'',
                    description:'',
                    door_id: this.id,
                    trigram_id:'',
                    hexagram:''
                }),
            }
        },
        methods:{
            addDoorStem(){
                this.form.post('/api/door/formation/store?api_token='+window.token)
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
            showPalace(){
                axios.post('/api/door/palace/list?api_token='+window.token,{door_id:this.id})
                .then(res => {
                    this.palaces = res.data;
                }); 
            },
            showHexagram(){
                axios.get('https://yijing.jennelcheng.com/api/hexagram/list?api_token=1TLxV5nRi60rNhwcaQR5Z4WvXIGNbgu5aSkphU4PvYIrKtg726JSdBu9rUrv')
                .then(res => {
                    this.hexagrams = res.data;
                    this.loading = false;
                }); 
            },
            show(){
                axios.get('/api/door/formation/list/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.doorFormation = res.data;
                }); 
            },
            edit(id){
                this.editModeFormation(id);
                axios.post('/api/door/formation/edit?api_token='+window.token,{selected_id:id,id:this.id})
                .then(res => {
                    this.palaces = res.data.trigram;
                    this.form.relationship = res.data.formation.relationship;
                    this.form.description = res.data.formation.description;
                    this.form.trigram_id = res.data.formation.trigram.id;
                    this.form.hexagram = res.data.formation.hexagram;
                });
            },
            update(){
                this.form.put('/api/door/formation/update/'+this.selected_id+'?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update '+this.attribute,
                        text: this.attribute+' has been Updated'
                    });
                    this.form.reset();
                    this.show();
                    this.showPalace();
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
                        this.form.get('/api/door/formation/delete/'+id+'?api_token='+window.token)
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
            cancelTransaction(){
                this.form.reset();
                this.editMode = false;
            },
            editModeFormation(id){
                this.editMode = true;
                this.selected_id = id;
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                $('#formation').focus();
            },
        },
        mounted(){
            this.showPalace();
            this.showHexagram();
            this.show();
        } 
    }
</script>
