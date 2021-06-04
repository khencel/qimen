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
                   <td class="preview-label">Name in Qi Men</td>
                   <td>
                       <span v-for="(item, index) in attributes.name_qimen" :key="index" >
                           {{item.value}}
                       </span>
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Represents</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.represent" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Five Element</td>
                   <td>
                       {{attributes.name}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Direction</td>
                   <td>
                       {{attributes.direction}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Season</td>
                   <td>
                       {{attributes.season}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Month</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.month" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Astronomy</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.astronomy" :key="item.id">
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
                   <td class="preview-label">Building</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.building" :key="item.id">
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
                   <td class="preview-label">Nourishment</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.nourishment" :key="item.id">
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
                   <td class="preview-label">Physical Fitness</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.fitness" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Voice</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.voice" :key="item.id">
                           {{item.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Internal Organ</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.organ" :key="item.id">
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
                   <td class="preview-label">Taste</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.taste" :key="item.id">
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
                axios.get('/api/stem/showAttribute/'+id+'?api_token='+window.token)
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

