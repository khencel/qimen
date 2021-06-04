<template>
<div>
    <notifications group="notification" position="bottom right" />
    <div class="row mt-2">
        <div class="col-md-7">
            
            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Structure Type</label>
                    <select v-model="chart.structure_type" class="form-control">
                        <option value="" disabled hidden>Select Type</option>
                        <option v-for="type in types" :key="type.id" :value="type.name">
                            {{type.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.yin_type" v-text="errors.yin_type[0]"></span>

                </div>

                <div class="col-md-6">
                    <label for="">Structure Type</label>
                    <select v-model="chart.cycle_type" class="form-control">
                        <option value="" disabled hidden>Select Type</option>
                        <option v-for="cycle in cycles" :key="cycle.id" :value="cycle.name">
                            {{cycle.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.yin_type" v-text="errors.yin_type[0]"></span>

                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Yang Number</label>
                    <select v-model="chart.yang_number" class="form-control">
                        <option value="" disabled hidden>Select Yang Number</option>
                        <option v-for="number in yang_numbers" :key="number.id" :value="number">
                            Yang {{number}}
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
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props:['chart_id'],
        data(){
            return {
                chart_type:'day',
                errors:{},
                stems:{},
                branches:{},
                elements:{},
                englishes:{},
                stem:'',
                branch:'',
                element:'',
                english:'',
                yang_numbers:[1,2,3,4,5,6,7,8,9],
                cycles:[
                    {
                        name:'Upper Cycle'
                    },
                    {
                        name:'Middle Cycle'
                    },
                    {
                        name:'Lower Cycle'
                    },
                ],
                types:[
                    {
                        name:'Yang Structure'
                    },
                    {
                        name:'Yin Structure'
                    },
                ],
                chart: new Form({
                    structure_type:'',
                    yang_number:'',
                    cycle_type:'',
                    stem:'',
                    branch:'',
                    element:'',
                    english:'',
                    type:'day',
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
                this.chart.get('/api/chart/'+this.chart_id+'/'+this.chart_type)
                .then(response => {
                    this.chart.structure_type = response.data.chart.structure_type;
                    this.chart.cycle_type = response.data.chart.cycle_type;
                    this.chart.yang_number = response.data.chart.number;
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
