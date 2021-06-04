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
                            <!-- <div class="row m-0" style="height:220px;">
                                <div class="col-4 border p-0">
                                    <chart-review-parts palace="E" text="Zhen" type="{{$type}}" stem="{{$chart->hourStem->value}}" text2="Wood" structure="{{$structure}}" chart_numb="{{$category}}" id="{{$id}}"></chart-review-parts>
                                </div>
                                <div class="col-4 border p-0 position-relative" style="color:black">
                                    <div class=" pt-1 pl-3">
                                        <img src="/img/{{$chart->center->photo}}" width="20" alt="">
                                        <br>
                                        {{$chart->center->value}}
                                    </div>
                                    <div class=" position-absolute pt-1 pl-3" style="bottom:7%">
                                        <img src="/img/{{$chart->center->photo}}" width="20" alt="">
                                        <br>
                                        {{$chart->center->value}}
                                    </div>
                                </div>
                                <div class="col-4 border p-0">
                                    <chart-review-parts palace="W" text="Dui" text2="Metal" type="{{$type}}" stem="{{$chart->hourStem->value}}" structure="{{$structure}}" chart_numb="{{$category}}" id="{{$id}}"></chart-review-parts>
                                </div>
                            </div> -->
                            <!-- <div class="row m-0" style="height:220px;">
                                <div class="col-4 border p-0">
                                    <chart-review-parts palace="NE" text='Gen Earth' type="{{$type}}" stem="{{$chart->hourStem->value}}" structure="{{$structure}}" chart_numb="{{$category}}" id="{{$id}}"></chart-review-parts>
                                </div>
                                <div class="col-4 border p-0">
                                    <chart-review-parts palace="N" text='Kan Water' type="{{$type}}" stem="{{$chart->hourStem->value}}" structure="{{$structure}}" chart_numb="{{$category}}" id="{{$id}}"></chart-review-parts>
                                </div>
                                <div class="col-4 border p-0">
                                    <chart-review-parts palace="NW" text='Metal Qian' type="{{$type}}" stem="{{$chart->hourStem->value}}" structure="{{$structure}}" chart_numb="{{$category}}" id="{{$id}}"></chart-review-parts>
                                </div>
                            </div> -->
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
