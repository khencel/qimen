<template>
    <div>
        <table class="table table-hover">
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="(animal, index) in animals" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{animal.name}}</td>
                    <td><a :href="'/best-year/animal/show?animal='+animal.name+'&id='+animal.id+'&page=main'" class="btn btn-info text-white">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                animals:{}
            }
        },
        methods: {
            async index(){
                const res = await axios.get(window.besteverLive+'/api/animal/index');
                this.animals = res.data;
            }
        },
        mounted() {
            this.index();
        }
    }
</script>
