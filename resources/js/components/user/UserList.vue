<template>
    <div>
        <div class="card">
            <table class="table table-hover">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{user.name}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                users:{},
            }
        },
        mounted() {
            this.userList();
        },
        methods:{
            userList(){
                axios.get('/api/user')
                .then(response => {
                    this.users = response.data
                });
            }
        }
    }
</script>
