<template>
    <div>
        <table class="table table-hover">
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Animal</th>
                <th>Branche</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dong_gong" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.animal}}</td>
                    <td>{{item.period}}</td>
                    <td><a :href="'/tong-shu/show?month='+item.name+'&id='+item.id" class="btn btn-info">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dong_gong:{}
            }
        },
        methods: {
            async index(){
                const res = await axios.get('/api/tong-shu/index');
                this.dong_gong = res.data.month;
                console.log(res.data);
                localStorage.setItem('animal',JSON.stringify(res.data.animal));
                localStorage.setItem('branch',JSON.stringify(res.data.branch));
                localStorage.setItem('element',JSON.stringify(res.data.element));
                localStorage.setItem('officer',JSON.stringify(res.data.officer));
            }
        },
        mounted() {
            this.index();
        }
    }
</script>
