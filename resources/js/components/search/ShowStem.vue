<template>
    <div>
        <div>
            <h2>
                {{results.value}}({{results.name}})
            </h2>
            
            <div class="row border">
                <div class="col-md-3">
                    <strong>Represents</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.represent" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Month</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.month" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Astronomy</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.astronomy" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Environment</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.environment" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>People</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.people" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Material</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.material" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Building</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.building" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Career</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.career" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Nourishment</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.nourishment" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Characteristic</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.characteristic" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Physical Fitness</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.fitness" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Voice</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.voice" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Internal Organ</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.organ" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Body Part</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.part" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Taste</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.taste" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Colour</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.colour" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                results:{},
                keyword:''
            }
        },
        mounted() {
            console.log(this.results)
        }
    }
</script>
