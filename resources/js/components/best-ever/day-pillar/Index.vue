<template>
    <div>
        <table class="table table-hover">
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="(pillar, index) in pillars" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{pillar.name}}</td>
                    <td><a :href="'/best-year/day-forecast/show?pillar='+pillar.name+'&id='+pillar.id+'&page=main'" class="btn btn-info text-white">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pillars:{}
            }
        },
        methods: {
            async index(){
                const res = await axios.get(window.besteverLive+'/api/pillar/index');
                this.pillars = res.data;
            }
        },
        mounted() {
            this.index();
        }
    }
</script>
