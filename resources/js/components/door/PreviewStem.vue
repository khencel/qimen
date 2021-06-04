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
                   <td class="preview-label">Description</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.description" :key="item.id">
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Attribute</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.attribute" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Element</td>
                   <td>
                        {{attributes.element}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Earthly Branch</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.branch" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Original Gua</td>
                   <td>
                       {{attributes.gua}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Direction</td>
                   <td>
                       {{attributes.direction}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Luo Shu</td>
                   <td>
                       {{attributes.shu}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Envoy</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.envoy" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Achievement</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.achievement" :key="item.id">
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
                   <td class="preview-label">Geography</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.geography" :key="item.id">
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
                   <td class="preview-label">Body Part</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.part" :key="item.id">
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
                axios.get('/api/door/showAttribute/'+id+'?api_token='+window.token)
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

