<template>
    <div class="container-fluid">
        <notifications group="notification" position="bottom right" />
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                       <h2>{{data.name}}</h2>
                       <div class="row">
                            <div class="col-md-6">
                                <label for="">value 1</label>
                                    <select class="form-control" v-model="value_1" @change="storeDataValue1">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_1" @change="storeDataValue1">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_1_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 2 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 2</label>
                                    <select class="form-control" v-model="value_2" @change="storeDataValue2">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_2" @change="storeDataValue2">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_2_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                         <!-- value 3 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 3</label>
                                    <select class="form-control" v-model="value_3" @change="storeDataValue3">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_3" @change="storeDataValue3">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_3_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                         <!-- value 4 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 4</label>
                                    <select class="form-control" v-model="value_4" @change="storeDataValue4">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_4" @change="storeDataValue4">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_4_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                         <!-- value 5 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 5</label>
                                    <select class="form-control" v-model="value_5" @change="storeDataValue5">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_5" @change="storeDataValue5">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_5_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 6 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 6</label>
                                    <select class="form-control" v-model="value_6" @change="storeDataValue6">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_6" @change="storeDataValue6">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_6_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 7 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 7</label>
                                    <select class="form-control" v-model="value_7" @change="storeDataValue7">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_7" @change="storeDataValue7">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_7_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 8 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 8</label>
                                    <select class="form-control" v-model="value_8" @change="storeDataValue8">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_8" @change="storeDataValue8">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_8_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 9 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 9</label>
                                    <select class="form-control" v-model="value_9" @change="storeDataValue9">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_9" @change="storeDataValue9">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_9_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 10 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 10</label>
                                    <select class="form-control" v-model="value_10" @change="storeDataValue10">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_10" @change="storeDataValue10">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_10_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 11 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 11</label>
                                    <select class="form-control" v-model="value_11" @change="storeDataValue11">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_11" @change="storeDataValue11">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_11_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>
                        <hr>
                        <!-- value 12 -->
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">value 12</label>
                                    <select class="form-control" v-model="value_12" @change="storeDataValue12">
                                        
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name">
                                            <span>
                                                {{item.name}}
                                            </span>
                                        </option>
                                    </select>

                                    <select class="form-control mt-2" v-model="value_12" @change="storeDataValue12">
                                       
                                        <option v-for="(item, index) in timeStarValue" :key="index" :value="item.name+' r'">{{item.name}}</option>
                                    </select>
                            </div>
                            <div class="col-md-4">
                                <label for="">Value</label>
                                <div v-for="(item, index) in post_Data.value_12_list" :key="index" class="w-100">
                                    {{item}}
                                </div>
                            </div>
                            <div class="col-md-2">
                                <button class="btn btn-success" @click="saveData">Save</button>
                            </div>
                        </div>



                        <hr>
                        <div class="w-100">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data() {
            return {
                data:{},
                timeStarValue:{},
                value_1:"",
                value_2:"",
                value_3:"",
                value_4:"",
                value_5:"",
                value_6:"",
                value_7:"",
                value_8:"",
                value_9:"",
                value_10:"",
                value_11:"",
                value_12:"",
                post_Data:{
                    id:this.id,
                    value_1_list:[],
                    value_2_list:[],
                    value_3_list:[],
                    value_4_list:[],
                    value_5_list:[],
                    value_6_list:[],
                    value_7_list:[],
                    value_8_list:[],
                    value_9_list:[],
                    value_10_list:[],
                    value_11_list:[],
                    value_12_list:[],
                }
                
            }
        },
        methods: {
           show(){
            axios.get('/api/tong-shu//time-star/show/'+this.id)
            .then(res => {
                this.data = res.data;
                this.post_Data.value_1_list = res.data.value_1.split(',')
                this.post_Data.value_2_list = res.data.value_2.split(',')
                this.post_Data.value_3_list = res.data.value_3.split(',')
                this.post_Data.value_4_list = res.data.value_4.split(',')
                this.post_Data.value_5_list = res.data.value_5.split(',')
                this.post_Data.value_6_list = res.data.value_6.split(',')
                this.post_Data.value_7_list = res.data.value_7.split(',')
                this.post_Data.value_8_list = res.data.value_8.split(',')
                this.post_Data.value_9_list = res.data.value_9.split(',')
                this.post_Data.value_10_list = res.data.value_10.split(',')
                this.post_Data.value_11_list = res.data.value_11.split(',')
                this.post_Data.value_12_list = res.data.value_12.split(',')
            });
           },

           timeStar(){
            axios.get('/api/tong-shu/time-star/value')
            .then(res => {
                this.timeStarValue = res.data;
                
                
            })
           },
            storeDataValue1(){
                this.post_Data.value_1_list.push(this.value_1);
            },
            storeDataValue2(){
                this.post_Data.value_2_list.push(this.value_2);
            },
            storeDataValue3(){
                this.post_Data.value_3_list.push(this.value_3);
            },
            storeDataValue4(){
                this.post_Data.value_4_list.push(this.value_4);
            },
            storeDataValue5(){
                this.post_Data.value_5_list.push(this.value_5);
            },
            storeDataValue6(){
                this.post_Data.value_6_list.push(this.value_6);
            },
            storeDataValue7(){
                this.post_Data.value_7_list.push(this.value_7);
            },
            storeDataValue8(){
                this.post_Data.value_8_list.push(this.value_8);
            },
            storeDataValue9(){
                this.post_Data.value_9_list.push(this.value_9);
            },
            storeDataValue10(){
                this.post_Data.value_10_list.push(this.value_10);
            },
            storeDataValue11(){
                this.post_Data.value_11_list.push(this.value_11);
            },
            storeDataValue12(){
                this.post_Data.value_12_list.push(this.value_12);
            },

            saveData(){
                axios.post('/api/tong-shu/time-star/store',this.post_Data)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Time Star',
                        text: 'Time Star has been updated'
                    });
                });
            }
        },
        mounted() {
            this.show();
            this.timeStar();
        }
    }
</script>
