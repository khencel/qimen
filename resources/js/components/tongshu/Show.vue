<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row">
            <div class="col-md-2">
                <table class="table table-hover">
                    <thead>
                        <th>Day Officers</th>
                        
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in officers" :key="index" @click="addDetails(index+1,item)" :class="index+1 == selectedIndex?'active':''">
                            <td class="text-uppercase">{{item.day_officers.name}}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div class="col-md-10 border">
                <table class="table table-hover text-center">
                    <thead>
                        <th>Day Officer</th>
                        <th>Animal Sign of the Day</th>
                        <th>Dong Gong Description</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="w-25"><input type="text" readonly class="form-control text-uppercase" v-model="data.dong_gong"></td>
                            <td class="w-25">
                                <div>
                                    <select class="form-control" v-model="data.branch">
                                        <option selected hidden value="">Select Branch</option>
                                        <option v-for="(item, index) in branches" :key="index" :value="item.id">
                                            {{item.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="mt-2">
                                    <select class="form-control" v-model="data.animal_id">
                                        <option selected hidden value="">Select Animal</option>
                                        <option v-for="(item, index) in animals" :key="index" :value="item.id">
                                            {{item.name}}
                                        </option>
                                    </select>
                                </div>
                                <div class="mt-2">
                                    <select class="form-control" v-model="data.period">
                                        <option selected hidden value="">Select Period</option>
                                        <option value="Yin">Yin</option>
                                        <option value="Yang">Yang</option>
                                    </select>
                                </div>
                                <div class="mt-2">
                                    <select class="form-control" v-model="data.element">
                                        <option selected hidden value="">Select Element</option>
                                        <option v-for="(item, index) in elements" :key="index" :value="item.name">
                                            {{item.name}}
                                        </option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <textarea class="form-control" placeholder="Description here..." v-model="data.description" cols="30" rows="10">
                                    
                                </textarea>
                            </td>
                            <td>
                                <div>
                                    <label for="">Rating for Wood</label>
                                    <select class="form-control" v-model="data.rating[0]">
                                        <option v-for="(item, index) in ratingList" :key="index" :value="item">{{item}}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Rating for Wood</label>
                                    <select class="form-control" v-model="data.rating[1]">
                                        <option v-for="(item, index) in ratingList" :key="index" :value="item">{{item}}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Rating for Wood</label>
                                    <select class="form-control" v-model="data.rating[2]">
                                        <option v-for="(item, index) in ratingList" :key="index" :value="item">{{item}}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Rating for Wood</label>
                                    <select class="form-control" v-model="data.rating[3]">
                                        <option v-for="(item, index) in ratingList" :key="index" :value="item">{{item}}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Rating for Wood</label>
                                    <select class="form-control" v-model="data.rating[4]">
                                        <option v-for="(item, index) in ratingList" :key="index" :value="item">{{item}}</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="">Suit</label>
                                <br>
                                <select v-model="selected_suit" class="form-control" @change="storeSuit">
                                    <option value="" selected hidden>Select Suit</option>
                                    <option v-for="(item, index) in suit_avoid_list" :key="index" :value="item.name" >
                                        {{item.name}}
                                    </option>
                                </select>
                                <button class="btn btn-danger w-100" @click="clearSuit">Clear</button>
                                <br>
                                <div v-for="(item, index) in data.selected_suit_list" :key="index" >
                                    {{item}}
                                </div>
                            </td>
                            <td>
                                <label for="">Avoid</label>
                                <br>
                                <select v-model="selected_avoid" class="form-control" @change="storeAvoid">
                                    <option value="" selected hidden>Select Avoid</option>
                                    <option v-for="(item, index) in suit_avoid_list" :key="index" :value="item.name" >
                                        {{item.name}}
                                    </option>
                                </select>
                                <button class="btn btn-danger w-100" @click="clearAvoid">Clear</button>
                                <br>
                                <div v-for="(item, index) in data.selected_avoid_list" :key="index" >
                                    {{item}}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row justify-content-end">
                    <div class="col-md-2">
                        <div class="w-100">
                            <ClipLoader :loading="loading"></ClipLoader>
                        </div>
                        <button class="btn btn-success w-100" v-if="!loading" @click="storeData">Save</button>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
    import Swal from 'sweetalert2';
    export default {
        props:['id'],
        components:{
            ClipLoader
        },
        data(){
            return{
                loading:false,
                officers:{},
                branches:{},
                animals:{},
                elements:{},
                selectedIndex:'',
                data:{
                    dong_gong:"",
                    dong_gong_month_id:"",
                    branch:"",
                    animal_id:"",
                    period:"",
                    element:"",
                    rating:[],
                    description:"",
                    id:"",
                    selected_suit_list:[],
                    selected_avoid_list:[]
                },
                ratingList:["Excellent","Auspicious","Fair","Inauspicious","Dire",],
                suit_avoid_list:[],
                selected_suit:"",
                selected_avoid:""
                
            }
        },
        methods: {
            async index(){
                const res = await axios.get('/api/tong-shu/dong-gong/'+this.id);
                this.officers = res.data;
                // this.officers = JSON.parse(localStorage.getItem('officer'));
                this.branches = JSON.parse(localStorage.getItem('branch'));
                this.animals = JSON.parse(localStorage.getItem('animal'));
                this.elements = JSON.parse(localStorage.getItem('element'));
            },

            addDetails(index,data){
                this.data.suitList = [];
                this.data.avoidList = [];
                this.data.suitList = data.suit != null?data.suit.split(','):'';
                this.data.avoidList = data.avoid != null?data.avoid.split(','):'';
                this.selectedIndex = index;
                this.data.description = data.description
                this.data.id = data.id;
                this.data.dong_gong = data.day_officers.name
                this.data.branch = data.branch_id
                this.data.animal_id = data.english_id
                this.data.period = data.branch.value.split(' ')[0]
                this.data.element = data.branch.value.split(' ')[1]
                this.data.rating = data.rating.split(',');
                console.log(this.data);
                this.data.selected_suit_list = this.data.suitList != ""?this.data.suitList:[]
                this.data.selected_avoid_list = this.data.avoidList != ""?this.data.avoidList:[]
                this.index();
                this.suitAvoidList();
                this.selected_suit_list = "";
                this.selected_avoid_list = "";
                
            },

            storeData(){
                this.loading = true;
               
                if(this.data.id == ""){
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid Update',
                        text: 'Please select at least one dong gong'
                    });
                    this.loading = false;
                }
                else{
                    axios.post('/api/tong-shu/update',{data:this.data})
                    .then(res => {
                        this.$notify({
                            group: 'notification',
                            type:'success',
                            title: 'Update Dong Gong',
                            text: 'Dong Gong has been updated'
                        });
                        this.loading = false;
                    });
                }                
            },

            suitAvoidList(){
                axios.get('/api/tong-shu/dong-gong/suit-avoid/list')
                .then(res => {
                    this.suit_avoid_list = res.data;
                });
            },
            storeSuit(){
                var data = this.selected_suit;
                
                
                this.suit_avoid_list = this.suit_avoid_list.filter((item)=>{
                    return item.name != data;
                });
                if(data != null){
                    this.data.selected_suit_list.push(data);
                }
            },

            storeAvoid(){
                var data = this.selected_avoid;
               
                this.suit_avoid_list = this.suit_avoid_list.filter((item)=>{
                    return item.name != data;
                });
                if(data != null){
                    this.data.selected_avoid_list.push(data);
                }
                
                
            },
            clearSuit(){
                this.data.selected_suit_list = [];
                this.suitAvoidList();
            },
            clearAvoid(){
                this.data.selected_avoid_list = [];
                this.suitAvoidList();
            }
        },
        beforeMount(){
            this.index();
            this.suitAvoidList();
            
        },
        mounted() {
            
        }
    }
</script>

<style scoped>
    .active{
        border-left: 3px solid salmon;
        font-weight: bold;
    }
</style>
