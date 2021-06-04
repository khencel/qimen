<template>
    <div>
        <notifications group="notification" position="bottom right" />
        <div class="row mt-2">
            <div class="col-md-5">
                <div class="row justify-content-end text-center pb-5 bg-black position-relative">
                    <div class="text-white position-absolute m-1" style=";height:30px;z-index:1;bottom:0;left:0;">
                        <h3>NE</h3>
                    </div>
                    <div class=" position-absolute mt-1" style=";width:100px;z-index:1;bottom:0;left:50%;margin-left:-27px;">
                        <div class="row justify-content-center">
                            <div  v-for="(item, index) in outsidePositions" :key="index" class="col-6">
                                <b-badge variant="success" class="p-2" v-text="item.value"></b-badge>
                                <br>
                                <input type="checkbox" v-model="se.neBottom" :value="item.value">
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute" style="height:100px;z-index:1;top:45%;left:0;margin-top:-50px;">
                        <div v-for="(item, index) in outsidePositions" :key="index" class="h-50 pt-2">
                            <b-badge variant="success" class="p-2" v-text="item.value"></b-badge>
                            <input type="checkbox" v-model="se.neLeft" :value="item.value">
                        </div>
                    </div>
                    <div class="col-md-11" style="border:5px solid;border-color:#D68FC6">
                        <div class="row" style="height:150px;">
                            <div class="col-md-4 bg-white position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="se.stem_top">
                                        <option :value="{id:'',name:''}" disabled hidden>Select Stem</option>
                                        <option v-for="stem in stems" :key="stem.id" :value="{id:stem.id,name:stem.value}">
                                            {{stem.value}}
                                        </option>
                                    </select>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                                
                                <div style="height:100px;width:100px;bottom:0;right:0;margin-right:-50px;margin-bottom:-30px;z-index:1" class="position-absolute bg-white">
                                    <div>
                                        <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <small>
                                            {{center}}
                                        </small>
                                        <br>
                                        <input type="checkbox" v-model="se.stem_1">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 bg-white position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="se.star">
                                        <option :value="{id:'',name:'',chinese:''}" disabled hidden>Select Star</option>
                                        <option v-for="star in stars" :key="star.id" :value="{id:star.id,name:star.name,chinese:star.chinese}">
                                            {{star.name}}
                                        </option>
                                    </select>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                                <div style="height:100px;width:50px;top:0;right:0;margin-right:-25px;z-index:1" class="position-absolute bg-white">
                                    <div>
                                        <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <small>
                                            Qin
                                        </small>
                                        <small>
                                            Bird
                                        </small>
                                        <br>
                                        <input type="checkbox" v-model="se.bird_2">
                                    </div>
                                </div>
                                <div style="height:100px;width:100px;bottom:0;right:0;margin-right:-50px;margin-bottom:-30px;z-index:1" class="position-absolute bg-white">
                                    <div>
                                        <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <small>
                                            {{center}}
                                        </small>
                                        <br>
                                        <input type="checkbox" v-model="se.stem_2">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 bg-white">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="se.deitie">
                                        <option :value="{id:'',name:'',chinese:''}" disabled hidden>Select Deitie</option>
                                        <option v-for="deitie in deities" :key="deitie.id" :value="{id:deitie.id,name:deitie.value,chinese:deitie.chinese}">
                                            {{deitie.value}}
                                        </option>
                                    </select>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                            </div>
                        </div>

                        <div class="row bg-white" style="height:200px;">
                            <div class="col-md-4">
                                <div class="row justify-content-center" style="height:200px;">
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_1">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>Position</option>
                                                    <option :value="{id:0,fword:'',lword:''}" selected>None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                            {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_2">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>Position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row" style="height:200px;">
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_3">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_4">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_5">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row justify-content-center" style="height:200px;">
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_6">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <div class="mt-5">
                                            <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <small>
                                                <select v-model="se.position_7">
                                                    <option :value="{id:0,fword:'',lword:''}" disabled hidden>position</option>
                                                    <option :value="{id:0,fword:'',lword:''}">None</option>
                                                    <option v-for="position in positions" :key="position.id" :value="{id:position.id,fword:position.first_word,lword:position.second_word}">
                                                        {{position.first_word}} {{position.second_word}} 
                                                    </option>
                                                </select>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="height:150px;">
                            <div class="col-md-4 bg-white position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="se.stem_bottom" disabled>
                                        <option :value="{id:'',name:''}" disabled hidden>Select Stem</option>
                                        <option v-for="stem in stems" :key="stem.id" :value="{id:stem.id,name:stem.value}">
                                            {{stem.value}}
                                        </option>
                                    </select>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                                <div style="height:100px;width:100px;top:0;right:0;margin-right:-50px;margin-top:-50px;z-index:1" class="position-absolute bg-white">
                                    <div>
                                        <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <small>
                                            {{center}}
                                        </small>
                                        <br>
                                        <input type="checkbox" v-model="se.stem_3">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 bg-white position-relative">
                                <div>
                                    <svg style="width:50px;height:50px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                    </svg>
                                </div>
                                <div>
                                    <select v-model="se.door" disabled>
                                        <option :value="{id:'',name:'',chinese:''}" disabled hidden>Select Door</option>
                                        <option v-for="door in doors" :key="door.id" :value="{id:door.id,name:door.name,chinese:door.chinese}">
                                            {{door.name}}
                                        </option>
                                    </select>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                                <div style="height:100px;width:100px;top:0;right:0;margin-right:-50px;margin-top:-50px;z-index:1" class="position-absolute bg-white">
                                    <div>
                                        <svg style="width:30px;height:30px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <small>
                                            {{center}}
                                        </small>
                                        <br>
                                        <input type="checkbox" v-model="se.stem_4">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 bg-white">
                                <div>
                                    <h2>
                                        <select v-model="se.number" disabled>
                                            <option value="" disabled hidden>#</option>
                                            <option v-for="number in numbers" :key="number.id" :value="number.number">
                                                {{number.number}}
                                            </option>
                                        </select>
                                    </h2>
                                    <br>
                                    <!-- <span class="font-italic text-danger" v-if="errors.stem" v-text="errors.stem[0]"></span> -->
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="mt-2">
                    <b-button variant="success" class="float-right" @click="chartUpdate">Update</b-button>
                </div>
            </div>

            <div class="col-md-7 border">
                <div class=" pt-4 pb-4 pl-5 pr-5 position-relative" style="background-color:black">
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;left:0">
                        <strong>SE</strong>
                    </div>
                    <div class="text-white position-absolute text-center" style="z-index:1;top:0;width:20px;right:50%;margin-right:-10px;">
                        <strong>S</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;top:0;right:0">
                        <strong>SW</strong>
                    </div>
                    <div class="text-white position-absolute ml-1" style="height:20px;z-index:1;left:0;bottom:50%;margin-bottom:-10px;">
                        <strong>E</strong>
                    </div>
                    <div class="text-white position-absolute mr-1" style="height:20px;z-index:1;right:0;bottom:50%;margin-bottom:-10px;">
                        <strong>W</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;left:0">
                        <strong>NE</strong>
                    </div>
                    <div class="text-white position-absolute text-center" style="z-index:1;bottom:0;width:20px;right:50%;margin-right:-10px;">
                        <strong>N</strong>
                    </div>
                    <div class="text-white position-absolute m-1" style="z-index:1;bottom:0;right:0">
                        <strong>NW</strong>
                    </div>

                    <div class=" position-absolute text-center" style="width:60px;z-index:1;bottom:0;left:15%">
                        <div class="row justify-content-center text-white" >
                            <div v-for="(item, index) in se.neBottom" :key="index" class="col-6" v-show="item != ''">
                                <b-badge variant="success" v-text="item"></b-badge>
                            </div>
                        </div>
                    </div>

                    <div class=" position-absolute" style="height:50px;z-index:1;bottom:16%;left:0">
                        <div v-for="(item, index) in se.neLeft" :key="index">
                            <b-badge variant="success" v-text="item"></b-badge>
                        </div>
                    </div>

                    <div class="row"  style="height:200px;">
                        
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                    </div>

                    <div class="row" style="height:200px;">
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        
                        
                    </div>

                    <div class="row" style="height:200px;">
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">

                            <div class="row text-center font-italic" style="height:60px;font-size:12px;">
                                <div class="col-4 p-0 position-relative">
                                    <div>
                                       <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                   </div>
                                   <div class="chart-text">
                                       {{se.stem_top.name}}
                                   </div>
                                   <div v-show="se.stem_1" class="position-absolute text-center" style="width:30px;z-index:1;bottom:0;right:0;margin-right:-15px;">
                                       <div style="line-height:5px;font-size:9px;">
                                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                            <br>
                                            {{center}}
                                        </div>
                                   </div>
                                </div>
                                <div class="col-4 p-0 position-relative">
                                    <div>
                                       <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div class="chart-text">
                                        {{se.star.chinese}}
                                        <br>
                                        {{se.star.name}}
                                    </div>
                                    <div v-show="se.bird_2" class="position-absolute text-center" style="width:30px;z-index:1;bottom:0;right:0;margin-right:-15px;">
                                       <div style="line-height:5px;font-size:9px;">
                                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                            <br>
                                            Qin<br><br>
                                            Bird
                                        </div>
                                   </div>
                                   <div v-show="se.stem_2" class="position-absolute text-center" style="width:30px;z-index:1;bottom:0;right:0;margin-right:-15px;">
                                       <div style="line-height:5px;font-size:9px;">
                                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                            <br>
                                            {{center}}
                                        </div>
                                   </div>
                                </div>
                                <div class="col-4 p-0">
                                    <div>
                                       <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                   </div>
                                   <div class="chart-text">
                                       {{se.deitie.chinese}}
                                       <br>
                                       {{se.deitie.name}}
                                   </div>
                                </div>
                            </div>

                           <div class="row text-center pt-3" style="height:80px;font-size:12px;">
                               <div class="col-md-4">
                                   <div class="row justify-content-center">
                                       <div v-show="se.position_1.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_1.fword}}
                                                <br>
                                                {{se.position_1.lword}}
                                            </div>
                                        </div>
                                        <div v-show="se.position_2.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_2.fword}}
                                                <br>
                                                {{se.position_2.lword}}
                                            </div>
                                        </div>
                                   </div>
                               </div>

                               <div class="col-md-4">
                                   <div class="row justify-content-center">
                                       <div v-show="se.position_3.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_3.fword}}
                                                <br>
                                                {{se.position_3.lword}}
                                            </div>
                                        </div>
                                        <div v-show="se.position_4.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_4.fword}}
                                                <br>
                                                {{se.position_4.lword}}
                                            </div>
                                        </div>

                                        <div v-show="se.position_5.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_5.fword}}
                                                <br>
                                                {{se.position_5.lword}}
                                            </div>
                                        </div>
                                   </div>
                               </div>
                               
                               <div class="col-md-4">
                                   <div class="row justify-content-center">
                                       <div v-show="se.position_6.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_6.fword}}
                                                <br>
                                                {{se.position_6.lword}}
                                            </div>
                                        </div>
                                        <div v-show="se.position_7.fword != ''" class="col-4 p-0">
                                            <div>
                                                <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                                    </svg>
                                            </div>
                                            <div class="chart-text">
                                                {{se.position_7.fword}}
                                                <br>
                                                {{se.position_7.lword}}
                                            </div>
                                        </div>
                                   </div>
                               </div>
                           </div>

                           <div class="row text-center" style="height:60px;font-size:12px;">
                                <div class="col-4 p-0 position-relative">
                                    <div>
                                       <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                    </div>
                                    <div class="chart-text">
                                        {{se.stem_bottom.name}}
                                    </div>
                                    <div v-show="se.stem_3" class="position-absolute text-center" style="height:30px;width:30px;z-index:1;top:0;right:0;margin-right:-15px;margin-top:-15px">
                                       <div style="line-height:5px;font-size:9px;">
                                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                            <br>
                                            {{center}}
                                        </div>
                                   </div>
                                </div>
                                <div class="col-4 p-0 position-relative">
                                    <div>
                                       <svg style="width:25px;height:25px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                        </svg>
                                   </div>
                                   <div class="chart-text">
                                       {{se.door.chinese}}
                                       <br>
                                       {{se.door.name}}
                                   </div>
                                   <div v-show="se.stem_4" class="position-absolute text-center" style="height:30px;width:30px;z-index:1;top:0;right:0;margin-right:-15px;margin-top:-15px">
                                       <div style="line-height:5px;font-size:9px">
                                            <svg style="width:20px;height:20px" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" />
                                            </svg>
                                            <br>
                                            {{center}}
                                        </div>
                                   </div>
                                </div>
                                <div class="col-4">
                                    <h2>
                                        {{se.number}}
                                    </h2>
                                </div>
                            </div>


                        </div>
                        <div class="col-md-4 bg-white position-relative" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                        <div class="col-md-4 bg-white" style="border:2px solid;border-color:#D68FC6;">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['chart_id','type'],
        data(){
            return{
                part:'ne',
                erros:{},
                stems:{},
                stars:{},
                deities:{},
                doors:{},
                positions:{},
                center:'',
                outsidePositions:[
                    {
                        value:'DE'
                    },
                    {
                        value:'HS'
                    },
                ],
                numbers:{},
                se:new Form({
                    chart_type:this.type,
                    stem_top:{id:'',name:''},
                    star:{id:'',name:'',chinese:''},
                    deitie:{id:'',name:'',chinese:''},
                    stem_bottom:{id:'',name:''},
                    door:{id:'',name:'',chinese:''},
                    number:'',
                    stem_1:false,
                    stem_2:false,
                    stem_3:false,
                    stem_4:false,
                    position_1:{id:0,fword:'',lword:''},
                    position_2:{id:0,fword:'',lword:''},
                    position_3:{id:0,fword:'',lword:''},
                    position_4:{id:0,fword:'',lword:''},
                    position_5:{id:0,fword:'',lword:''},
                    position_6:{id:0,fword:'',lword:''},
                    position_7:{id:0,fword:'',lword:''},
                    neBottom:[],
                    neLeft:[],
                    bird_2:false,
                }),
            }
        },
        mounted() {
            this.loadContent();
            this.chartDetails();
            this.fetchChartStem();
            this.fetchChartPosition();
        },
        methods:{
            loadContent(){
                axios.get('/api/content/'+this.chart_id+'/'+this.type+'/'+this.part)
                .then(response => {
                    this.stems = response.data.stem;
                    this.stars = response.data.star;
                    this.deities = response.data.deitie;
                    this.doors = response.data.door;
                    this.positions = response.data.position;
                    this.numbers = response.data.number;
                });
            },

            chartUpdate(){
                this.se.put('/api/ne/'+this.chart_id)
                .then(response => {
                    this.$notify({
                        group: 'notification',
                        type:'success',
                        title: 'Update Chart',
                        text: 'Chart has been updated'
                    });
                    this.chartDetails();
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                });
            },

            chartDetails(){
                this.se.get('/api/ne/'+this.chart_id+'/'+this.type)
                .then(response => {
                     this.center = response.data.center.stem.value;
                    this.se.stem_top = response.data.se.stem_top != null?{id:response.data.se.stem_top.id,name:response.data.se.stem_top.value}:this.se.stem_top;
                    this.se.star = response.data.se.star != null?{id:response.data.se.star.id,name:response.data.se.star.name,chinese:response.data.se.star.chinese}:this.se.star;
                    this.se.deitie = response.data.se.deitie != null?{id:response.data.se.deitie.id,name:response.data.se.deitie.value,chinese:response.data.se.deitie.chinese}:this.se.deitie;
                    this.se.stem_bottom = response.data.se.stem_bottom != null?{id:response.data.se.stem_bottom.id,name:response.data.se.stem_bottom.value}:this.se.stem_bottom;
                    this.se.number = response.data.se.number != null?response.data.se.number:this.se.number;
                    this.se.door = {id:response.data.se.door.id,name:response.data.se.door.name,chinese:response.data.se.door.chinese};

                    response.data.se.neBottom.split(",").forEach(element => {
                        this.se.neBottom.push(element);
                    });

                    response.data.se.neLeft.split(",").forEach(element => {
                        this.se.neLeft.push(element);
                    });
                    
                })
                .catch(error => {

                });
            },

            fetchChartStem(){
                this.se.get('/api/ne/'+this.chart_id+'/'+this.type)
                .then(response => {
                    this.se.stem_1 = response.data.stem.stem_1;
                    this.se.stem_2 = response.data.stem.stem_2;
                    this.se.stem_3 = response.data.stem.stem_3;
                    this.se.stem_4 = response.data.stem.stem_4;
                    this.se.bird_2 = response.data.stem.bird_2;
                })
                .catch(error => {

                });
            },

            fetchChartPosition(){
                this.se.get('/api/ne/'+this.chart_id+'/'+this.type)
                .then(response => {
                        this.se.position_1 = response.data.position.position_1 == null?this.se.position_1 = {id:0,fword:'',lword:''}:{id:response.data.position.position_1.id,fword:response.data.position.position_1.first_word,lword:response.data.position.position_1.second_word};

                        this.se.position_2 = response.data.position.position_2 == null?this.se.position_2 = {id:0,fword:'',lword:''}:{id:response.data.position.position_2.id,fword:response.data.position.position_2.first_word,lword:response.data.position.position_2.second_word};

                        this.se.position_3 = response.data.position.position_3 == null?this.se.position_3 = {id:0,fword:'',lword:''}:{id:response.data.position.position_3.id,fword:response.data.position.position_3.first_word,lword:response.data.position.position_3.second_word};

                        this.se.position_4 = response.data.position.position_4 == null?this.se.position_4 = {id:0,fword:'',lword:''}:{id:response.data.position.position_4.id,fword:response.data.position.position_4.first_word,lword:response.data.position.position_4.second_word};

                        this.se.position_5 = response.data.position.position_5 == null?this.se.position_5 = {id:0,fword:'',lword:''}:{id:response.data.position.position_5.id,fword:response.data.position.position_5.first_word,lword:response.data.position.position_5.second_word};

                        this.se.position_6 = response.data.position.position_6 == null?this.se.position_6 = {id:0,fword:'',lword:''}:{id:response.data.position.position_6.id,fword:response.data.position.position_6.first_word,lword:response.data.position.position_6.second_word}; 

                        this.se.position_7 = response.data.position.position_7 == 0?this.se.position_7 = {id:0,fword:'',lword:''}:{id:response.data.position.position_7.id,fword:response.data.position.position_7.first_word,lword:response.data.position.position_7.second_word}; 
                })
                .catch(error => {

                });
            }
        }
        
    }
</script>
