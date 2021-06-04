<template>
<div>
    <notifications group="notification" position="bottom right" />
    <div class="row mt-2">
        <div class="col-md-7">
            <div class="row">
                <div class="col-md-6">
                    <label for="">Start Date</label>
                    <input type="date" class="form-control" v-model="chart.start_date">
                    <span class="font-italic text-danger" v-if="errors.start_date" v-text="errors.start_date[0]"></span>
                </div>
                <div class="col-md-6">
                    <label for="">End Date</label>
                    <input type="date" class="form-control" v-model="chart.end_date">
                    <span class="font-italic text-danger" v-if="errors.end_date" v-text="errors.end_date[0]"></span>

                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Yin Type</label>
                    <select v-model="chart.yin_type" class="form-control">
                        <option value="" disabled hidden>Select Type</option>
                        <option v-for="type in types" :key="type.id" :value="type.name">
                            {{type.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.yin_type" v-text="errors.yin_type[0]"></span>

                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Stem</label>
                    <select v-model="chart.stem" class="form-control">
                        <option value="" disabled hidden>Select Stem</option>
                        <option v-for="stem in stems" :key="stem.id" :value="stem.id">
                            {{stem.value}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span>

                </div>

                <div class="col-md-6">
                    <label for="">Branch</label>
                    <select v-model="chart.branch" class="form-control">
                        <option value="" disabled hidden>Select Branch</option>
                        <option v-for="branch in branches" :key="branch.id" :value="branch.id">
                            {{branch.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.branch" v-text="errors.branch[0]"></span>
                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Element</label>
                    <select v-model="chart.element" class="form-control">
                        <option value="" disabled hidden>Select Element</option>
                        <option v-for="element in elements" :key="element.id" :value="element.id">
                            {{element.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.element" v-text="errors.element[0]"></span>

                </div>

                <div class="col-md-6">
                    <label for="">English</label>
                    <select v-model="chart.english" class="form-control">
                        <option value="" disabled hidden>Select English</option>
                        <option v-for="english in englishes" :key="english.id" :value="english.id">
                            {{english.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.english" v-text="errors.english[0]"></span>
                </div>
            </div>
            <div class="mt-2">
                <b-button variant="success" class="float-right" @click="updateChart">Update</b-button>
            </div>
        </div>
        <div class="col-md-5 border p-4">
            <h3>Output</h3>
            <span class="font-italic">{{stem}} {{branch}}</span> <span class="h4 font-weight-bold">{{element}} {{english}}</span>
            <span v-show="type == 'month'">({{chart.start_date | moment("MMMM Do")}}-{{chart.end_date | moment("MMMM Do")}})</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props:['chart_id','type'],
        data(){
            return {
                errors:{},
                stems:{},
                branches:{},
                elements:{},
                englishes:{},
                stem:'',
                branch:'',
                element:'',
                english:'',
                types:[
                    {
                        name:'Yin One'
                    },
                    {
                        name:'Yin Four'
                    },
                    {
                        name:'Yin Seven'
                    },
                ],
                chart: new Form({
                    yin_type:'',
                    start_date:'',
                    end_date:'',
                    stem:'',
                    branch:'',
                    element:'',
                    english:'',
                    type:'month'
                }),
            }
        },
        mounted() {
            this.loadContent();
            this.loadChartName();
        },
        methods:{
            loadContent(){
                axios.get('/api/content')
                .then(response => {
                    this.stems = response.data.stem;
                    this.branches = response.data.branch;
                    this.elements = response.data.element;
                    this.englishes = response.data.english;
                });
            },
            loadChartName(){
                this.chart.get('/api/chart/'+this.chart_id+'/'+this.type)
                .then(response => {
                  
                    this.chart.yin_type = response.data.chart.yin_type;
                    this.chart.start_date = response.data.chart.start_date;
                    this.chart.end_date = response.data.chart.end_date;
                    this.chart.stem = response.data.chart.stem_id;
                    this.chart.branch = response.data.chart.branch_id;
                    this.chart.element = response.data.chart.element_id;
                    this.chart.english = response.data.chart.english_id;
                    this.stem = response.data.chartDetails.stem.value;
                    this.branch = response.data.chartDetails.branch.name;
                    this.element = response.data.chartDetails.element.name;
                    this.english = response.data.chartDetails.english.name;
                });
            },

            updateChart(){
                this.chart.put('/api/chart/'+this.chart_id)
                .then(response => {
                    console.log(response.data);
                    this.loadChartName();
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
            }


        }
    }
</script>
