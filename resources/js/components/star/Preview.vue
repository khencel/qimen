<template>
    <div>
        <table class="table table-hover">
           <thead>
               <th>Attributes</th>
               <th>Description</th>
           </thead>
           <tbody>
               <tr>
                   <td class="preview-label">Star Name</td>
                   <td>
                       {{attributes.star_name}}
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Polarity</td>
                   <td>
                       {{attributes.polarity}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Gua</td>
                   <td>
                        {{attributes.gua}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Palace</td>
                   <td>
                       {{attributes.palace}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Direction</td>
                   <td>
                       {{attributes.direction}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">5 Elements</td>
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
                   <td class="preview-label">Quality</td>
                   <td>
                       {{attributes.quality}}
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
                   <td class="preview-label">Characteristic</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.characteristic" :key="item.id">
                           {{item.value}}
                       </span>
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
                   <td class="preview-label">Appearance</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.appearance" :key="item.id">
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
                   <td class="preview-label">Illness</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.illness" :key="item.id">
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
               
           </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                attributes:{},
            }
        },
        methods:{
            showAttributes(id){
                axios.get('/api/star/showAttribute/'+id+'?api_token='+window.token)
                .then(res => {
                    this.attributes = res.data;
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

