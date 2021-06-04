<template>
    <div>
        <b-modal v-model="modalShow" @ok="handleOk" title="Create Day Chart">
            
            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Yang Number</label>
                    <select v-model="chart.yang_number" class="form-control" disabled>
                        <option value="" disabled hidden>Select Number</option>
                        <option v-for="number in numbers" :key="number.id" :value="number">
                            {{number}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.yang_number" v-text="errors.yang_number[0]"></span>

                </div>
            </div>

            <div class="row mt-2">
                <div class="col-md-6">
                    <label for="">Stem</label>
                    <select v-model="chart.stem" class="form-control" disabled>
                        <option value="" disabled hidden>Select Stem</option>
                        <option v-for="stem in stems" :key="stem.id" :value="stem.id">
                            {{stem.value}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span>

                </div>

                <div class="col-md-6">
                    <label for="">Branch</label>
                    <select v-model="chart.branch" class="form-control" disabled>
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
                    <select v-model="chart.element" class="form-control" disabled>
                        <option value="" disabled hidden>Select Element</option>
                        <option v-for="element in elements" :key="element.id" :value="element.id">
                            {{element.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.element" v-text="errors.element[0]"></span>

                </div>

                <div class="col-md-6">
                    <label for="">English</label>
                    <select v-model="chart.english" class="form-control" disabled>
                        <option value="" disabled hidden>Select English</option>
                        <option v-for="english in englishes" :key="english.id" :value="english.id">
                            {{english.name}}
                        </option>
                    </select>
                    <span class="font-italic text-danger" v-if="errors.english" v-text="errors.english[0]"></span>
                </div>
            </div>
            
        </b-modal>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                modalShow:false,
                errors:{},
                stems:{},
                branches:{},
                elements:{},
                englishes:{},
                numbers:[1,2,3,4,5,6,7,8,9],
                chart: new Form({
                    chart_type:'day',
                    cycle_type:'',
                    structure_type:'',
                    yang_number:'',
                    stem:'',
                    branch:'',
                    element:'',
                    english:''
                }),
            }
        },
        mounted() {
            
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

            handleOk(bvModalEvt) {
               this.chart.post('/api/chart')
               .then(response => {
                   this.$emit('chart');
                   this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Add Chart',
                        text: 'Chart has been Added'
                    });
               })
               .catch(error => {
                   this.errors = error.response.data.errors;
                   this.modalShow = true;
               });
            },

            loadLastChart(){
                axios.post('/api/last-day-chart?api_token='+window.token,this.chart)
                .then(response => {
                    this.chart.yang_number = response.data.count;
                    this.chart.element = response.data.element;
                    this.chart.english = response.data.english;
                    this.chart.stem = response.data.stem;
                    this.chart.branch = response.data.branch;
                });
            }
        },
        

    }
</script>
