<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row mt-2">
            <div class="col-md-6">
                <div class="row justify-content-center text-center">
                    <div class="col-md-11" style="border:5px solid;border-color:#D68FC6">

                        <div class="row" style="height:150px;">
                            <div class="col-md-4 pt-2 position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="center.stem">
                                        <option value="" disabled hidden>Select Stem</option>
                                        <option v-for="stem in stems" :key="stem.id" :value="stem.id">
                                            {{stem.value}}
                                        </option>
                                    </select>
                                    <br>
                                    <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span>
                                </div>
                                <div style="height:100px;width:100px;bottom:0;right:0;margin-right:-50px;margin-bottom:-50px;z-index:1" class="position-absolute">
                                    
                                </div>
                            </div>
                            <div class="col-md-4 position-relative">
                                
                                <div style="height:100px;width:100px;bottom:0;right:0;margin-right:-50px;margin-bottom:-50px;z-index:1" class="position-absolute">
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                
                            </div>
                        </div>

                        <div class="row" style="height:200px;">
                            <div class="col-md-4">
                                <div class="row" style="height:200px;">
                                    <div class="col-md-6 ">
                                        
                                    </div>
                                    <div class="col-md-6 ">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row" style="height:200px;">
                                    <div class="col-md-6">
                                        
                                    </div>
                                    <div class="col-md-6">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row" style="height:200px;">
                                    <div class="col-md-6">
                                        
                                    </div>
                                    <div class="col-md-6">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="height:150px;">
                            <div class="col-md-4 position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="center.stem" disabled>
                                        <option value="" disabled hidden>Select Stem</option>
                                        <option v-for="stem in stems" :key="stem.id" :value="stem.id">
                                            {{stem.value}}
                                        </option>
                                    </select>
                                </div>
                                <div style="height:100px;width:100px;top:0;right:0;margin-right:-50px;margin-top:-50px;z-index:1" class="position-absolute">
                                    
                                </div>
                            </div>
                            <div class="col-md-4 position-relative">
                                
                                <div style="height:100px;width:100px;top:0;right:0;margin-right:-50px;margin-top:-50px;z-index:1" class="position-absolute">
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mt-2">
                    <b-button variant="success" class="float-right" @click="btnUpdate">Update</b-button>
                </div>
            </div>
            <div class="col-md-6 border">
                <div class=" pt-4 pb-4 pl-5 pr-5 position-relative" style="background-color:black">
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;left:0">
                        <strong>SE</strong>
                    </div>
                    <div class="text-white position-absolute text-center" style="z-index:1;top:0;width:20px;right:50%;margin-right:-10px;">
                        <strong>S</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;right:0">
                        <strong>SW</strong>
                    </div>
                    <div class="text-white position-absolute ml-1" style="height:20px;z-index:1;left:0;bottom:50%;margin-bottom:-10px;">
                        <strong>E</strong>
                    </div>
                    <div class="text-white position-absolute mr-1" style="height:20px;z-index:1;right:0;bottom:50%;margin-bottom:-10px;">
                        <strong>W</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;left:0">
                        <strong>NE</strong>
                    </div>
                    <div class="text-white position-absolute text-center" style="z-index:1;bottom:0;width:20px;right:50%;margin-right:-10px;">
                        <strong>N</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;right:0">
                        <strong>NW</strong>
                    </div>

                    <div class="row" style="height:200px;">
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                    </div>

                    <div class="row" style="height:200px;">
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            <div class="bg-white" style="height:50px;margin-top:10px;">
                                <div class="row">
                                    <div class="col-4 text-center p-0">
                                        <div>
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            {{stem}}
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        
                                    </div>
                                    <div class="col-4">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="" style="height:80px;">
                            
                            </div>
                            <div class="bg-white" style="height:50px;">
                                <div class="row">
                                    <div class="col-4 text-center p-0">
                                        <div>
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            {{stem}}
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        
                                    </div>
                                    <div class="col-4">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                    </div>

                    <div class="row" style="height:200px;">
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['chart_id','type'],
        data(){
            return{
                
                errors:{},
                stems:{},
                stem:'',
                center:new Form({
                    chart_type:this.type,
                    yin_chart_id: this.chart_id,
                    stem:'',
                }),
            }
        },
        mounted() {
            this.loadContent();
            this.loadCenter();
        },

        methods:{
            loadContent(){
                axios.get('/api/content')
                .then(response => {
                    this.stems = response.data.stem;
                });
            },

            btnUpdate(){
                this.center.put('/api/center/'+this.chart_id)
                .then(response => {
                   
                    this.loadCenter();  
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Chart',
                        text: 'Chart has been updated'
                    });
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            },

            loadCenter(){
                axios.get('/api/center/'+this.chart_id+'/'+this.type)
                .then(response => {
                    this.center.stem = response.data.stem_id;
                    this.stem = response.data.stem.value;
                })
                .catch(error => {
                    this.center.stem = '';
                });
            }
        }
    
    }
</script>
