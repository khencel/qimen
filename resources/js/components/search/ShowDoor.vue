<template>
    <div>
        <div>
            <h2>
                {{results.name}}
            </h2>
            
            <div class="row border">
                <div class="col-md-3">
                    <strong>Envoy</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.envoy" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Achievement</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.achievement" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Weather</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.weather" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Personality</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.personality" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Geography</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.geography" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
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
                    <strong>Property</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.property" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
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
                    <strong>Temperament</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.temperament" :key="index">
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
                    <strong>Birth</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.birth" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Marriage</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.marriage" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span class="text-capitalize" v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Illness</strong>
                </div>
                <div class="col-md-9 text-capitalize">
                    <span v-for="(item, index) in results.illness" :key="index">
                        <span :class="item.value == keyword.replace(/%20/g, ' ')?'bg-warning':''">
                            <span v-show="index != 0">,</span>{{item.value}}
                        </span>
                    </span>
                </div>
            </div>
            <div class="row border">
                <div class="col-md-3">
                    <strong>Litigation</strong>
                </div>
                <div class="col-md-9">
                    <span v-for="(item, index) in results.litigation" :key="index">
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
