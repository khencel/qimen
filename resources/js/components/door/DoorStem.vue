<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <table class="table table-hover bg-white">
                <thead class="thead-dark">
                    <th>Stems</th>
                    <th>Description</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-show="loadingList">
                        <td colspan="5">
                            <RingLoader :loading="loadingList"></RingLoader>
                        </td>
                    </tr>
                    <tr v-show="!loadingList" v-for="doorStem in doorStems" :key="doorStem.id" >
                        <td>
                            {{doorStem.stem.value}}({{doorStem.stem.name}})
                        </td>
                        <td style="width:60%">
                            {{doorStem.description}}
                        </td>
                        <td>
                            <span class="badge badge-primary p-2 cursor-pointer" @click="edit(doorStem.id)" style="width:25%">Edit</span>
                            <span class="badge badge-danger p-2 cursor-pointer" @click="deleteItem(doorStem.id)" style="width:25%">X</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <select v-model="form.stem_id" class="form-control">
                                <option value="" selected hidden>Select Stem</option>
                                <option v-for="(item, index) in stems" :key="index" :value="item.id">{{item.value}}({{item.name}})</option>
                            </select>
                        </td>
                        <td>
                            <textarea class="form-control" placeholder="Description" v-model="form.description" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <span v-show="!loading" v-if="!form.editMode" class="badge button-success p-2 cursor-pointer w-50 mb-1" @click="addDoorStem">Add</span>
                            <span v-else class="badge badge-warning p-2 cursor-pointer w-50 mb-1" @click="update">Update</span>
                            <span v-show="loading">
                                <PulseLoader :loading="loading"></PulseLoader>
                            </span>
                            <span class="badge badge-danger p-2 cursor-pointer w-50" @click="cancelTransaction">Cancel</span>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import RingLoader from 'vue-spinner/src/RingLoader.vue';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    export default {
        components:{
            RingLoader,PulseLoader
        },
        props:['id'],
        data(){
            return{
                loadingList:true,
                loading:false,
                stems:{},
                doorStems:{},
                form:new Form({
                    stem_id:'',
                    description:'',
                    door_id: this.id,
                    selected_id:'',
                    editMode:false,
                }),
            }
        },
        methods:{
            stem(){
                this.form.post('/api/door/stem?api_token='+window.token)
                .then(res => {
                    this.stems = res.data;
                });
            },

            addDoorStem(){
                this.loading = true;
                this.form.post('/api/door/stem/store?api_token='+window.token)
                .then(res => {
                    this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Add '+this.attribute,
                        text: this.attribute+' has been Added'
                    });
                    this.form.stem_id = "";
                    this.form.description = "";
                    this.show();
                    this.stem();
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
                axios.get('/api/door/stem/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.doorStems = res.data;
                    this.loadingList = false;
                }); 
            },
            edit(id){
                this.editModeFormation(id);
                axios.post('/api/door/doorStem/show?api_token='+window.token,{selected_id:id,id:this.id})
                .then(res => {
                    this.form.selected_id = id;
                    this.stems = res.data.stem;
                    this.form.stem_id = res.data.selected.stem_id;
                    this.form.description = res.data.selected.description;
                });
            },
            update(){
                this.form.put('/api/door/doorStem/update/'+this.form.selected_id+'?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update '+this.attribute,
                        text: this.attribute+' has been Updated'
                    });
                    this.form.stem_id = "";
                    this.form.description = "";
                    this.show();
                    this.form.editMode = false;
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
                        this.form.get('/api/door/doorStem/delete/'+id+'?api_token='+window.token)
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
                this.form.editMode = true;
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                $('#earthly').focus();
            },
            cancelTransaction(){
                this.form.stem_id = "";
                this.form.description = "";
                this.stem();
                this.form.editMode = false;
            }
        },
        mounted(){
            this.stem();
            this.show();
        } 
    }
</script>
