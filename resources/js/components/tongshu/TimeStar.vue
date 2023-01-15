<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Data</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in data" :key="index" @click="showTimeStar(item.id)">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.value_1}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:{}
            }
        },
        methods: {
            index(){
                axios.get('/api/tong-shu/time-star/index')
                .then(res =>{
                    this.data = res.data;
                    console.log(res.data);
                })
            },
            showTimeStar(id){
                window.location = "/tong-shu/timestar/update?id="+id
            }
        },
        mounted() {
            this.index();
        }
    }
</script>
