<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="card">
            <table class="table table-hover">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index" v-show="user.first_name  != 'api'">
                        <td class="text-capitalize">{{user.first_name}}</td>
                        <td class="text-capitalize">{{user.last_name}}</td>
                        <td>{{user.email}}</td>
                        <td>
                           <span @click="changeStatus(user.id)" style="cursor:pointer" :class="user.is_subscribed == null?'badge badge-primary p-1':'badge badge-danger p-1'">
                               {{user.is_subscribed == null?"Subscribe Now":"Unsubscribe"}}
                           </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        props:['type'],
        data(){
            return{
                users:{},
            }
        },
        mounted() {
            this.index();
        },
        methods:{
            index(){
                if(this.type == "qimen"){
                    this.userList();
                }
                if(this.type == "forecast"){
                    this.forecastingUser();
                }
            },
            userList(){
                axios.get('/api/user')
                .then(response => {
                    this.users = response.data;
                });
            },
            forecastingUser(){
                axios.get(window.forecast+'/api/user/index?api_token='+window.forecastToken)
                .then(res => {
                    this.users = res.data.data;
                })
            },
            changeStatus(id){
                if(this.type == "forecast"){
                    axios.get(window.forecast+'/api/user/update?id='+id+'&api_token='+window.forecastToken)
                    .then(res => {
                        this.index();
                        this.$notify({
                            group: 'notification',
                            type:res.data.code == 200?'success':error,
                            title: 'Update Status',
                            text: res.data.message
                        });
                    });
                }
            },
        }
    }
</script>
