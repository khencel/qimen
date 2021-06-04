<template>
    <div class="w-100">
        <notifications group="notification" position="bottom right" />
        <table class="table table-hover bg-white">
                <thead class="thead-dark">
                    <th>Earthly Stem</th>
                    <th>English Term</th>
                    <th style="width:10%">Rating</th>
                    <th>Desciption</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-show="loadingList">
                        <td colspan="5">
                            <RingLoader :loading="loadingList"></RingLoader>
                        </td>
                    </tr>
                    <tr v-show="!loadingList" v-for="(item, index) in formations" :key="index" >
                        <td>
                            <small>{{item.stem.value}}</small>
                            <br>
                            {{item.stem.name}}
                        </td>
                        <td>
                            {{item.english_term}}
                        </td>
                        <td>
                            <img :src="'/img/rating/'+item.rating+'.png'" style="width:20%" alt="">
                        </td>
                        <td>
                            {{item.description}}
                        </td>
                        <td>
                            <span class="badge badge-primary p-2 cursor-pointer w-100 mb-1" @click="editFormation(item.id)">Edit</span>
                            <span class="badge badge-danger p-2 cursor-pointer w-100" @click="deleteFormation(item.id)">X</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <select v-model="form.earthly_stem" class="form-control">
                                <option value="" selected hidden>Select Stem</option>
                                <option v-for="(item, index) in stems" :key="index" :value="item.id">{{item.value}}({{item.name}})</option>
                            </select>
                        </td>
                        <td>
                            <input type="text" class="form-control" placeholder="English" v-model="form.english_term">
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
                            <textarea class="form-control" placeholder="Description" v-model="form.description" cols="30" rows="10"></textarea>
                        </td>
                        <td>
                            <span v-show="!loading" v-if="!editMode" class="badge badge-success p-2 cursor-pointer w-100 mb-1" @click="addFormation">Add</span>
                            <span v-else class="badge badge-warning p-2 cursor-pointer w-100 mb-1" @click="updateFormation">Update</span>
                            <span v-show="loading">
                                <PulseLoader :loading="loading"></PulseLoader>
                            </span>
                            <span class="badge badge-danger p-2 cursor-pointer w-100" @click="cancelEdit">Cancel</span>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
    import RingLoader from 'vue-spinner/src/RingLoader.vue';
    export default {
        components:{
            PulseLoader,RingLoader
        },
        props:['id'],
        data(){
            return{
                loadingList:true,
                loading:false,
                editMode:false,
                formations:{},
                stems:{},
                form: new Form({
                    earthly_stem:'',
                    selected_id:'',
                    english_term:'',
                    rating:'',
                    description:'',
                    id:this.id,
                    edit_id:''
                }),
            }
        },
        methods:{
            stem(){
                this.form.post('/api/stem/list?api_token='+window.token)
                .then(res => {
                    this.stems = res.data;
                });
            },
            addFormation(){
                this.loading = true;
                this.form.post('/api/stem/add/formation?api_token='+window.token)
                .then(res => {
                    this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Formation added',
                        text: 'Formation has been added'
                    });
                    this.showFormation();
                    this.stem();
                    this.clearField();
                })
                .catch(err => {
                    this.loading = false;
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid Data',
                        text: 'All fields are required'
                    });
                });
            },
            showFormation(){
                axios.get('/api/stem/show/formation/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.formations = res.data;
                    this.loadingList = false;
                });
            },
            editFormation(id){
                this.editModeFormation(id);
                this.form.post('/api/stem/edit/formation?api_token='+window.token)
                .then(res => {
                    this.stems = res.data.stem;
                    this.form.earthly_stem = res.data.formation.earthly_stem;
                    this.form.english_term = res.data.formation.english_term;
                    this.form.rating = res.data.formation.rating;
                    this.form.description = res.data.formation.description;
                });
            },
            updateFormation(){
                this.form.post('/api/stem/update/formation?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Formation Update',
                        text: 'Formation has been Updated'
                    });
                    this.showFormation();
                    this.clearField();
                    this.editMode = false;
                });
            },
            deleteFormation(id){
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
                        this.form.get('/api/stem/delete/formation/'+id+'?api_token='+window.token)
                        .then(res => {
                            Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            )
                            this.showFormation();
                            this.stem();
                        })
                        
                    }
                })
                
            },

            cancelEdit(){
                this.editMode = false;
                this.clearField();
            },
            editModeFormation(id){
                this.editMode = true;
                this.form.edit_id = id;
                $("html, body").animate({ scrollTop: $(document).height() }, "slow");
                $('#earthly').focus();
            },

            clearField(){
                this.form.earthly_stem = "";
                this.form.english_term = "";
                this.form.rating = "";
                this.form.description = "";
            }
        },
        mounted() {
            this.showFormation();
            this.stem();
        }
    }
</script>
