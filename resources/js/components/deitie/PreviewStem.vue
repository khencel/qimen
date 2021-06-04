<template>
    <div>
        <div class="w-100 text-center" v-show="loading">
            <RingLoader :loading="loading"></RingLoader>
        </div>
        <table class="table table-hover" v-show="!loading">
           <thead>
               <th>Attributes</th>
               <th>Description</th>
           </thead>
           <tbody>
               <tr>
                   <td class="preview-label">Deity</td>
                   <td>
                        {{attributes.deity}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Elements</td>
                   <td>
                        {{attributes.element}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Quality</td>
                   <td>
                        {{attributes.quality}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Represents</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.represents" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Suitable for</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.suitable" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Unsuitable for</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.unsuitable" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Characteristic</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.characteristic" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Colour</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.colour" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Number</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.number" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Shape</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.shape" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Weather</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.weather" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Personality</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.personality" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Environment</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.environment" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">People</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.people" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Material</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.material" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Property</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.property" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Career</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.career" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Parts</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.parts" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Temperament</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.temperament" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Nourishment</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.nourishment" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Birth</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.birth" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Marriage</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.marriage" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Illness</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.illness" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Litigation</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.litigation" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Features</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.features" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Animal</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.animal" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Communication</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.communication" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Plants</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.plants" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
           </tbody>
        </table>
    </div>
</template>

<script>
    import RingLoader from 'vue-spinner/src/RingLoader.vue';
    export default {
        components:{
            RingLoader
        },
        data(){
            return{
                attributes:{},
                loading:true,
            }
        },
        methods:{
            showAttributes(id){
                axios.get('/api/deitie/showAttribute/'+id+'?api_token='+window.token)
                .then(res => {
                    this.attributes = res.data;
                    this.loading = false;
                });
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .preview-label{
        background-color: linen;
        font-style: italic;
        font-weight: bold;
    }
</style>

