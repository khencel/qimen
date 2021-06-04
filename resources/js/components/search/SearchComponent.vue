<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <div>
                            <div class="row mb-2">
                                <div class="col-md-3">
                                    Search By:
                                </div>
                                <div class="col-md-9">
                                    <select v-model="searchBy" class="form-control" @change="loadList">
                                        <option value="" disabled hidden>Search By</option>
                                        <option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
                                    </select>
                                </div>
                            </div>
                            <select v-model="keyword" class="form-control">
                                <option :value="null" disabled hidden>Select</option>
                                <option v-for="(item, index) in list" :key="index" :value="item">{{item}}</option>
                            </select>
                            <button @click="searchText">Search</button>

                            <div v-for="(item, index) in results.labels" :key="index">
                                <h2 v-show="Object.keys(results.list[index]).length != 0">
                                    {{item}}
                                </h2>
                                <div v-for="(value, index) in results.list[index]" :key="index">
                                    <a :href="'/search/'+value[item].id+'/'+keyword+'/'+item" target="_blank">
                                        {{value[item].value || value[item].name}}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                keyword:null,
                results:{},
                doors:{},
                searchBy:'',
                options:{},
                list:{},
            }
        },
        methods: {
            searchText(){
              
                axios.get('/api/search/'+this.searchBy+'/'+this.keyword+'?api_token='+window.token)
                .then(res => {
                    this.results = res.data;  
                });
            },  

            searchList(){
                
                axios.get('/api/list?api_token='+window.token)
                .then(res => {
                    this.options = res.data.options;
                });
            },

            loadList(){
                this.keyword = null;
                axios.get('/api/selected/'+this.searchBy+'?api_token='+window.token)
                .then(res => {
                    this.list = res.data;
                });
            }
        },
        mounted() {
            this.searchList();
        }
    }
</script>
