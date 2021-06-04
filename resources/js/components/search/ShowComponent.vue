<template>
    <div>
        <div v-if="category == 'deitie'">
            <Deitie ref="result"></Deitie>
        </div>
        <div v-if="category == 'door'">
            <Door ref="result"></Door>
        </div>
        <div v-if="category == 'star'">
            <Star ref="result"></Star>
        </div>
        <div v-if="category == 'stem'">
            <Stem ref="result"></Stem>
        </div>
    </div>
</template>

<script>
    import Deitie from '../search/ShowDeitie';
    import Door from '../search/ShowDoor';
    import Star from '../search/ShowStar';
    import Stem from '../search/ShowStem';
    export default {
        props:['id','keyword','category'],
        components:{
            Deitie,Door,Star,Stem
        },
        data(){
            return{
                deities:{},
                doors:{}
            }
        },
        methods: {
            show(){
                axios.get('/api/show/'+this.id+'/'+this.keyword+'/'+this.category+'?api_token='+window.token)
                .then(res => {
                    this.deities = res.data;
                    this.$refs.result.results = res.data;
                    this.$refs.result.keyword = this.keyword;
                })
            }
        },
        mounted() {
            this.show();
        }
    }
</script>
