<template>
    <div class="row justify-content-center">
            <div class="col-7 border p-0">
                <div class="pt-5" style="width: 100%;height:755px;background-color:darkcyan">
                    <div style="height:660px;width:87%;background-color:white;margin:0px auto">
                        <div class=" h-100">
                            <div class="row m-0" style="height:220px;">
                                <div class="col-4 border p-0">
                                    <chart-review-parts :palace="palace" :text='text' :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                                <div class="col-4 border p-0">
                                    <chart-review-parts :palace="palace" :text='text' :type="type" :stem="stem" :structure="structure" :chart_numb="chart_numb" :id="id"></chart-review-parts>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
</template>

<script>
    export default {
        props:['palace','text','type','stem','structure','chart_numb','id'],
        data(){
            return{
                
            }
        },
        mounted() {
            console.log(this.type);
        }
    }
</script>
