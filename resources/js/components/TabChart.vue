<template>
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartEnv/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartEnv/'+id+'/'+type">Chart Name</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartPreview/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartPreview/'+id+'/'+type">Chart Preview</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartCenter/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartCenter/'+id+'/'+type">Center</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartSE/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartSE/'+id+'/'+type">SE</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartS/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartS/'+id+'/'+type">S</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartSW/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartSW/'+id+'/'+type">SW</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartE/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartE/'+id+'/'+type">E</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartW/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartW/'+id+'/'+type">W</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartNE/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartNE/'+id+'/'+type">NE</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartN/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartN/'+id+'/'+type">N</a>
    </li>
    <li class="nav-item" role="presentation">
        <a :class="path == '/chart/chartNW/'+id+'/'+type?'nav-link active':'nav-link'" :href="'/chart/chartNW/'+id+'/'+type">NW</a>
    </li>
</ul>
</template>

<script>
    export default {
        props:['chart_id','type'],
        data(){
            return{
                id:this.chart_id,
                path: window.location.pathname
            }
        },
        mounted() {
        }
    }
</script>
