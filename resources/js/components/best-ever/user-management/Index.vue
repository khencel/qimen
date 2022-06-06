<template>
    <div>
        <div class="w-100 mt-1">
            <pagination :limit="3" align="right" size="small" :data="users" @pagination-change-page="index"></pagination>
        </div>
        <table class="table table-hover">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in users.data" :key="index">
                    <td>{{item.first_name}} {{item.last_name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.country}}</td>
                    <td><button @click="changeStatus(item.is_active,item.id)" :class="item.is_active == 1?'btn btn-primary':'btn btn-danger'">{{item.is_active == 1?"Active":"Deactivate"}}</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    Vue.component('pagination', require('laravel-vue-pagination'));
    import Swal from 'sweetalert2'
    export default {
        data(){
            return{
                users:{}
            }
        },
        methods: {
            async index(page = 1){
                const res = await axios.get(window.besteverLive+'/api/user/index?page='+page);
                this.users = res.data;
            },
            changeStatus(status,id){
                var message = "";
                if(status == 1){
                    message = "Are you sure? You want to DEACTIVATE this user";
                }else{
                    message = "Are you sure? You want to ACTIVATE this user";
                }
                Swal.fire({
                    icon: 'question',
                    title: 'Oops...',
                    text: message,
                    showCancelButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        if(status == 1){
                            status = 0;
                        }else{
                            status = 1;
                        }
                        axios.post(window.besteverLive+'/api/user/changeStatus',{status:status,user_id:id})
                        .then(res => {
                            this.index();
                        });    
                    }
                })
                
            }
        },
        mounted() {
            this.index();
        }
    }
</script>
