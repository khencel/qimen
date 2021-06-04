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
                   <td class="preview-label">Element</td>
                   <td>
                       {{attributes.element}}
                    </td>
               </tr>
               <tr>
                   <td class="preview-label">Number</td>
                   <td>
                       {{attributes.number}}
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">People</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="people in attributes.people" :key="people.id">
                           {{people.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Body Parts</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="part in attributes.parts" :key="part.id">
                           {{part.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Animals</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="animal in attributes.animals" :key="animal.id">
                           {{animal.value}}
                       </span>
                   </td>
               </tr>
               <tr>
                   <td class="preview-label">Sickness</td>
                   <td>
                       <span class="badge badge-success p-1 mr-1" v-for="item in attributes.sickness" :key="item.id">
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
                axios.get('/api/trigram/show/'+id+'?api_token='+window.token)
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

