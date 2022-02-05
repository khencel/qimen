<template>
    <div>
        <div class="w-100 mt-1">
            <pagination :limit="3" align="right" size="small" :data="notifications" @pagination-change-page="index"></pagination>
        </div>

        <table class="table table-hover">
            <thead>
                <th>Name <span class="badge badge-primary p-2" v-if="num_of_new_notif != 0">{{num_of_new_notif}}</span></th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Country</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-if="Object.keys(notifications.data).length == 0">
                    <td colspan="5">No Message...</td>
                </tr>
                <tr v-else v-for="(item, index) in notifications.data" :key="index" :class="item.status == 0?'font-weight-bold':''">
                    <td class="text-capitalize">{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.mobile != null?item.mobile:'none'}}</td>
                    <td>{{item.country}}</td>
                    <td>
                        <a :href="'/best-year/notification/show?id='+item.id+'&name='+item.name" class="btn btn-primary">View</a>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
    Vue.component('pagination', require('laravel-vue-pagination'));
    export default {
        data(){
            return{
               notifications:{},
               num_of_new_notif:''
            }
        },
        methods: {
            async index(page=1){
                const res = await axios.get(window.besteverLive+'/api/contact/index?page='+page);
                this.notifications = res.data;
            },

            async showNewNotif(){
                const res = await axios.get(window.besteverLive+'/api/contact/notif');
                this.num_of_new_notif = res.data;
            }
        },
        mounted() {
            this.index();
            this.showNewNotif();
        }
    }
</script>
