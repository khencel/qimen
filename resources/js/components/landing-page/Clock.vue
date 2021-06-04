<template>
        <div class="row justify-content-center ml-0 mr-0 mt-5">
            <div class="col-md-3 p-2 wow animate__animated animate__backInLeft">
                <div class="row justify-content-center m-0">
                    <div class="col-9">
                        <div class="row m-0">
                            <div class="col-4 text-right p-0">
                                <i class="fas fa-calendar-alt icon-style"></i>
                            </div>
                            <div class="col-8">
                                <div>
                                    <span class="date-label">Date</span>
                                </div>
                                <div>
                                    <span class="date-style">
                                        <p>{{months[date.getMonth()]}} {{date.getDate()}}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2 wow animate__animated animate__backInDown animate__delay-1s">
                <div class="row justify-content-center m-0">
                    <div class="col-9">
                        <div class="row">
                            <div class="col-4 text-right p-0">
                                <i class="fas fa-clock icon-style"></i>
                            </div>
                            <div class="col-8">
                                <div>
                                    <span class="date-label">Time</span>
                                </div>
                                <div>
                                    <span class="date-style">
                                        <digital-clock :twelveHour="true" :displaySeconds="true" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-2 wow animate__animated animate__backInRight">
                <div class="row justify-content-center m-0">
                    <div class="col-9">
                        <div class="row">
                            <div class="col-4 text-right p-0">
                                <i class="fas fa-globe-asia icon-style"></i>
                            </div>
                            <div class="col-8">
                                <div>
                                    <span class="date-label">Year</span>
                                </div>
                                <div>
                                    <span class="date-style">
                                        <p>{{date.getFullYear()}}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
   import DigitalClock from "vue-digital-clock";
    export default {
        components: {
            DigitalClock
        },
        data(){
            return{
                date: new Date(),
                months:['January','February','March','April','May','June','July','August','September','October','November','December'],
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap');
    .date-font{
        font-family: 'Vampiro One', cursive;
    }
</style>
