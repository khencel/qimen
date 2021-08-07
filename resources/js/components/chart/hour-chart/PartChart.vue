<template>
<div>
    <notifications group="notification" position="bottom right" />
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="w-100">
                <h3>Preview</h3>
            </div>
            <div class="w-100">
                <hour-chart-part-preview ref="partChart"></hour-chart-part-preview>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="w-100">
                    <h3>{{label}}</h3> 
                     <!-- delete when deplo -->
                    <div>
                        <span class="mr-1 border" v-for="(set,index) in sets" :key="index">
                            <input autofocus type="radio" name="sample" :value="set" @change="fetchSet(set)"> {{samples[index]}}    
                        </span>
                    </div>
                    <!-- delete when deplo -->
                </div>
                <div class="col-md-6 border-right p-2">
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Heaven Stem</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" disabled @change="preview" v-model="form.heaven_stem_id">
                                <option value="" disabled hidden>Select Stem</option>
                                <option v-for="(item, index) in heaven_stems" :key="index" :value="item">{{item.value}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Star</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" disabled @change="preview" v-model="form.star_id">
                                <option value="" disabled hidden>Select Star</option>
                                <option v-for="(item, index) in stars" :key="index" :value="item">{{item.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Deity</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" disabled @change="preview" v-model="form.deitie_id">
                                <option value="" disabled hidden>Select Deity</option>
                                <option v-for="(item, index) in deities" :key="index" :value="item">{{item.value}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Earth Stem</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" @change="preview" v-model="form.earth_stem_id" disabled>
                                <option value="" disabled hidden>Select Stem</option>
                                <option v-for="(item, index) in earth_stems" :key="index" :value="item">{{item.value}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Door</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" autofocus @change="preview" v-model="form.door_id">
                                <option value="" disabled hidden>Select Door</option>
                                <option v-for="(item, index) in doors" :key="index" :value="item">{{item.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Number</label>
                        </div>
                        <div class="col-8">
                            {{form.number}}
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Relationship</label>
                        </div>
                        <div class="col-8">
                            <select class="form-control" @change="preview" v-model="form.relationship_id">
                                <option value="" disabled hidden>Select Relationship</option>
                                <option v-for="(item, index) in relationships" :key="index" :value="item.id">{{item.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="">Explanation</label>
                        </div>
                        <div class="col-8">
                            <textarea cols="30" rows="5" class="form-control" v-model="form.explanation"></textarea>
                        </div>
                    </div>
                   
                </div>
                <div class="col-md-6 border-bottom">
                    <div class="border-bottom">
                        <div class="row mt-2" v-show="type == 'se' || type == 's' || type == 'sw' || type == 'ne' || type == 'n' || type == 'nw'">
                            <div class="col-4">
                                <label for="">Top and Bottom:</label>
                            </div>
                            <div class="col-8">
                                <span v-for="(item, index) in outsideFormation" :key="index"> 
                                    <input type="radio" v-model="form.outside_top" @change="populatePreview" :value="item"> {{item}}
                                </span>
                            </div>
                        </div>
                        <div class="row mt-2" v-show="type == 'se' || type == 'sw' || type == 'ne' || type == 'nw' || type == 'e' || type == 'w'">
                            <div class="col-4">
                                <label for="">Left and Right:</label>
                            </div>
                            <div class="col-8">
                                <span v-for="(item, index) in outsideFormation" :key="index"> 
                                    <input type="radio" v-model="form.outside_left_right" @change="populatePreviewLeftRight" :value="item"> {{item}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom">
                        <div class="row mt-2">
                            <div class="col-4">
                                <label for="">Heaven:</label>
                            </div>
                            <div class="col-8">
                                <input type="checkbox" v-model="form.heaven" :checked="form.heaven" @change="heavenCenter">{{center}}
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-4">
                                <label for="">Earth:</label>
                            </div>
                            <div class="col-8">
                                <input type="checkbox" v-model="form.earth" :checked="form.earth" @change="earthCenter">{{center}}
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-4">
                                <label for="">Others:</label>
                            </div>
                            <div class="col-8">
                                <input type="checkbox" v-model="form.other" :checked="form.other" @change="others">Qin Bird
                            </div>
                        </div>
                    </div>
                    <div>
                        <strong>Formation</strong>
                        <div class="row mt-2">
                            <div class="col-4">
                                <label for="">Others:</label>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" v-model="test.formation">
                                <span class="ml-auto text-primary" style="cursor:pointer" @click="addFormation">Add Formation</span> 
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-4">
                                <label for="">Formation List:</label>
                            </div>
                            <div class="col-8">
                                <select v-model="form.formationAus" @change="formationList" class="form-control">
                                    <option disabled hidden value="">Select formation</option>
                                    <option v-for="(item, index) in listFormation" :key="index"  :value="item">{{item.formation}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div v-for="(item, index) in this.form.formationList" :key="index" >
                            <div class="row mt-1">
                                <div class="col-md-10">
                                    {{item.formation}}
                                </div>
                                <div class="col-md-2">
                                    <button @click="deleteFormation(item)" class="btn btn-danger">x</button>
                                </div>
                            </div>
                             
                        </div>
                    </div>

                    <div class="mt-2">
                        <button class="btn btn-primary w-100" @click="submit">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</div>
</template>

<script>
    export default {
        props:['label','type','center','id','category','structure'],
        data(){
            return{
                sets:[1,2,3,4,5,6,7,8,9], //delete when deploy
                samples:["Yi","Bing","Ding","Wu","Ji","Geng","Xin","Ren","Gui"], //delete when deploy
                outsideFormation:[
                    "HS",'DE',"HS DE"
                ],
                listFormation:{},
                doors:{},
                stars:{},
                heaven_stems:{},
                earth_stems:{},
                deities:{},
                positions:{},
                positions1:{},
                positions2:{},
                relationships:{},
                check_3:false,
                
                form:new Form({
                    outside_top:'',
                    outside_left_right:'',
                    door_id:'',
                    star_id:'',
                    heaven_stem_id:'',
                    earth_stem_id:'',
                    number:'',
                    deitie_id:'',
                    position_1:'',
                    position_2:'',
                    position_3:'',
                    position_4:'',
                    position_5:'',
                    position_6:'',
                    position_7:'',
                    relationship_id:'',
                    formationAus:'',
                    formationIn:'',
                    formationList:[],
                    formationListIn:[],
                    explanation:'',
                    type:this.type,
                    category:this.category,
                    chart_id: this.id,
                    heaven:false,
                    earth:false,
                    other:false,
                }),
                test:new Form({
                    formation:'',
                })
            }
        },
        methods:{
            submit(){
                this.form.post('/api/hour/store?api_token='+window.token)
                .then(res => {
                    console.log(res.data);
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Chart',
                        text: 'Chart has been updated'
                    });
                })
                .catch(erro => {
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid Chart',
                        text: 'All fields are required'
                    });
                })
                
            },
            show(){
                this.form.put('/api/hour/show/'+this.id+'?api_token='+window.token)
                .then(res => {
                    this.form.relationship_id = res.data.chart == null || res.data.chart.relationship == null?'':res.data.chart.relationship.id;
                    this.$refs.partChart.center = this.center;
                    this.form.door_id = res.data.door == null?'':res.data.door;
                    this.form.star_id = res.data.chart == null?'':res.data.chart.star;
                    this.form.heaven_stem_id = res.data.chart == null?'':res.data.chart.heaven_stem;
                    this.form.deitie_id = res.data.chart == null?'':res.data.chart.deitie;
                    this.form.explanation = res.data.chart == null?'':res.data.chart.explanation;
                    this.form.outside_top = res.data.chart == null?'':res.data.chart.top_bottom;
                    this.form.outside_left_right = res.data.chart == null?'':res.data.chart.left_right;
                    this.form.heaven = res.data.chart == null?'':res.data.chart.heaven == null?'':res.data.chart.heaven == 0?false:true;
                    this.form.earth = res.data.chart == null?'':res.data.chart.earth == null?'':res.data.chart.earth == 0?false:true;
                    this.form.other = res.data.chart == null?'':res.data.chart.other == null?'':res.data.chart.other == 0?false:true;
                    this.form.formationList = res.data.formation_left;
                    this.form.formationListIn = res.data.formation_right;
                    console.log(res.data);
                    this.preview();
                })
            },
            populatePreview(){
                this.$refs.partChart.outside_top = this.form.outside_top == null?'':this.form.outside_top.split(' ');
            },

            populatePreviewLeftRight(){
                this.$refs.partChart.outside_left_right = this.form.outside_left_right == null?'':this.form.outside_left_right.split(' ');
            },


            fetchResources(){
                axios.get('/api/hour/resources/'+this.category+'/'+this.id+'/'+this.type+'/'+this.structure+'?api_token='+window.token)
                .then(res => {
                    this.doors = res.data.door;
                    this.stars = res.data.star;
                    this.earth_stems = res.data.stem;
                    this.form.number = res.data.number.original.num;
                    this.deities = res.data.deity;
                    this.positions = res.data.position;
                    this.positions1 = res.data.position1;
                    this.positions2 = res.data.position2;
                    this.relationships = res.data.relationship;
                    this.form.earth_stem_id = res.data.number.original.earth;
                    this.heaven_stems = res.data.heaven_stem;
                })
            },

            preview(){
                this.$refs.partChart.door = this.form.door_id;
                this.$refs.partChart.star = this.form.star_id;
                this.$refs.partChart.heaven_stem = this.form.heaven_stem_id;
                this.$refs.partChart.earth_stem = this.form.earth_stem_id;
                this.$refs.partChart.deitie = this.form.deitie_id;
                this.$refs.partChart.number = this.form.number;
                this.$refs.partChart.center_top = this.form.heaven;  
                this.$refs.partChart.center_bottom = this.form.earth;  
                this.$refs.partChart.qin_bird = this.form.other;  
                this.$refs.partChart.auspicious = this.form.formationList;
                this.$refs.partChart.inauspicious = this.form.formationListIn;
                this.populatePreview();
                this.populatePreviewLeftRight();                             
            },

            heavenCenter(){
                this.$refs.partChart.center_1 = this.center;
                this.$refs.partChart.center_upper();
            },
            earthCenter(){
                this.$refs.partChart.center_2 = this.center;
                this.$refs.partChart.center_lower();
            },

            others(){
                this.$refs.partChart.others();
            },
            fetchSet(num){
                axios.get('/api/set/'+num+'/?api_token='+window.token)
                .then(res => {
                    this.form.heaven_stem_id = res.data.heaven;
                    this.form.star_id = res.data.star;
                    this.form.deitie_id = res.data.deity;
                    this.preview();
                });
            },
            formation(){
                axios.get('/api/hour/formation?api_token='+window.token)
                .then(res => {
                    this.listFormation = res.data;
                })
            },
            formationList(){
                this.form.formationList.push(this.form.formationAus);
                this.$refs.partChart.auspicious = this.form.formationList;
                
            },

            formationListIn(){
                this.form.formationListIn.push(this.form.formationIn);    
                this.$refs.partChart.inauspicious = this.form.formationListIn;
            },

            deleteFormation(index){
                this.form.formationList.splice(this.form.formationList.indexOf(index),1);
            },

            deleteFormationIn(index){
                this.form.formationListIn.splice(this.form.formationListIn.indexOf(index),1);
            },

            addFormation(){
               
                this.test.post('/api/hour/addFormation?api_token='+window.token)
                .then(res => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Formation Added',
                        text: 'Formation has been added'
                    });
                    this.test.formation = "";
                    this.formation();
                })
                .catch(erro => {
                    this.$notify({
                        group: 'notification',
                        type:'error',
                        title: 'Invalid formation',
                        text: 'Formation fields is required or formation already exist'
                    });
                });
            }
        },
        mounted() {
            this.$refs.partChart.type = this.type;
            this.fetchResources();
            this.show();
            this.formation();
        }
    }
</script>

<style scoped>
    input[type='radio'] {
        transform: scale(1.5);
    }
</style>

