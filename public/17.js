(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{131:function(t,e,r){"use strict";r.r(e);var o={props:["label","type","center","id","category","structure"],data:function(){return{sets:[1,2,3,4,5,6,7,8,9],samples:["Yi","Bing","Ding","Wu","Ji","Geng","Xin","Ren","Gui"],outsideFormation:["HS","DE","HS DE"],doors:{},stars:{},heaven_stems:{},earth_stems:{},deities:{},positions:{},positions1:{},positions2:{},relationships:{},check_3:!1,form:new Form({outside_top:"",outside_left_right:"",door_id:"",star_id:"",heaven_stem_id:"",earth_stem_id:"",number:"",deitie_id:"",position_1:"",position_2:"",position_3:"",position_4:"",position_5:"",position_6:"",position_7:"",relationship_id:"",formation:"",explanation:"",type:this.type,category:this.category,chart_id:this.id,heaven:!1,earth:!1,other:!1})}},methods:{submit:function(){var t=this;this.form.post("/api/hour/store?api_token="+window.token).then((function(e){console.log(e.data),t.$notify({group:"notification",type:"success",title:"Update Chart",text:"Chart has been updated"})})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Chart",text:"All fields are required"})}))},show:function(){var t=this;this.form.put("/api/hour/show/"+this.id+"?api_token="+window.token).then((function(e){t.form.relationship_id=null==e.data.chart||null==e.data.chart.relationship?"":e.data.chart.relationship.id,t.$refs.partChart.center=t.center,t.form.door_id=null==e.data.door?"":e.data.door,t.form.star_id=null==e.data.chart?"":e.data.chart.star,t.form.heaven_stem_id=null==e.data.chart?"":e.data.chart.heaven_stem,t.form.deitie_id=null==e.data.chart?"":e.data.chart.deitie,t.form.formation=null==e.data.chart?"":e.data.chart.formation,t.form.explanation=null==e.data.chart?"":e.data.chart.explanation,t.form.outside_top=null==e.data.chart?"":e.data.chart.top_bottom,t.form.outside_left_right=null==e.data.chart?"":e.data.chart.left_right,t.form.heaven=null==e.data.chart||null==e.data.chart.heaven?"":0!=e.data.chart.heaven,t.form.earth=null==e.data.chart||null==e.data.chart.earth?"":0!=e.data.chart.earth,t.form.other=null==e.data.chart||null==e.data.chart.other?"":0!=e.data.chart.other,t.form.position_1=null==e.data.chart||null==e.data.chart.formation1?"":e.data.chart.formation1,t.form.position_2=null==e.data.chart||null==e.data.chart.formation2?"":e.data.chart.formation2,t.form.position_3=null==e.data.chart||null==e.data.chart.formation3?"":e.data.chart.formation3,t.form.position_4=null==e.data.chart||null==e.data.chart.formation4?"":e.data.chart.formation4,t.form.position_5=null==e.data.chart||null==e.data.chart.formation5?"":e.data.chart.formation5,t.form.position_6=null==e.data.chart||null==e.data.chart.formation6?"":e.data.chart.formation6,t.form.position_7=null==e.data.chart||null==e.data.chart.formation7?"":e.data.chart.formation7,t.preview()}))},populatePreview:function(){this.$refs.partChart.outside_top=null==this.form.outside_top?"":this.form.outside_top.split(" ")},populatePreviewLeftRight:function(){this.$refs.partChart.outside_left_right=null==this.form.outside_left_right?"":this.form.outside_left_right.split(" ")},fetchResources:function(){var t=this;axios.get("/api/hour/resources/"+this.category+"/"+this.id+"/"+this.type+"/"+this.structure+"?api_token="+window.token).then((function(e){t.doors=e.data.door,t.stars=e.data.star,t.earth_stems=e.data.stem,t.form.number=e.data.number.original.num,t.deities=e.data.deity,t.positions=e.data.position,t.positions1=e.data.position1,t.positions2=e.data.position2,t.relationships=e.data.relationship,t.form.earth_stem_id=e.data.number.original.earth,t.heaven_stems=e.data.heaven_stem}))},preview:function(){this.$refs.partChart.door=this.form.door_id,this.$refs.partChart.star=this.form.star_id,this.$refs.partChart.heaven_stem=this.form.heaven_stem_id,this.$refs.partChart.earth_stem=this.form.earth_stem_id,this.$refs.partChart.deitie=this.form.deitie_id,this.$refs.partChart.number=this.form.number,this.$refs.partChart.formation_1=this.form.position_1,this.$refs.partChart.formation_2=this.form.position_2,this.$refs.partChart.formation_3=this.form.position_3,this.$refs.partChart.formation_4=this.form.position_4,this.$refs.partChart.formation_5=this.form.position_5,this.$refs.partChart.formation_6=this.form.position_6,this.$refs.partChart.formation_7=this.form.position_7,this.$refs.partChart.center_top=this.form.heaven,this.$refs.partChart.center_bottom=this.form.earth,this.$refs.partChart.qin_bird=this.form.other,this.populatePreview(),this.populatePreviewLeftRight()},heavenCenter:function(){this.$refs.partChart.center_1=this.center,this.$refs.partChart.center_upper()},earthCenter:function(){this.$refs.partChart.center_2=this.center,this.$refs.partChart.center_lower()},others:function(){this.$refs.partChart.others()},fetchSet:function(t){var e=this;axios.get("/api/set/"+t+"/?api_token="+window.token).then((function(t){e.form.heaven_stem_id=t.data.heaven,e.form.star_id=t.data.star,e.form.deitie_id=t.data.deity,e.preview()}))}},mounted:function(){this.$refs.partChart.type=this.type,this.fetchResources(),this.show()}},a=(r(79),r(0)),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 border-right"},[t._m(0),t._v(" "),r("div",{staticClass:"w-100"},[r("hour-chart-part-preview",{ref:"partChart"})],1)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"row"},[r("div",{staticClass:"w-100"},[r("h3",[t._v(t._s(t.label))]),t._v(" "),r("div",t._l(t.sets,(function(e,o){return r("span",{key:o,staticClass:"mr-1 border"},[r("input",{attrs:{autofocus:"",type:"radio",name:"sample"},domProps:{value:e},on:{change:function(r){return t.fetchSet(e)}}}),t._v(" "+t._s(t.samples[o])+"    \n                        ")])})),0)]),t._v(" "),r("div",{staticClass:"col-md-6 border-right p-2"},[r("div",{staticClass:"row mt-2"},[t._m(1),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.heaven_stem_id,expression:"form.heaven_stem_id"}],staticClass:"form-control",attrs:{disabled:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"heaven_stem_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Stem")]),t._v(" "),t._l(t.heaven_stems,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.value))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(2),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.star_id,expression:"form.star_id"}],staticClass:"form-control",attrs:{disabled:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"star_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Star")]),t._v(" "),t._l(t.stars,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.name))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(3),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.deitie_id,expression:"form.deitie_id"}],staticClass:"form-control",attrs:{disabled:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"deitie_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Deity")]),t._v(" "),t._l(t.deities,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.value))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(4),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.earth_stem_id,expression:"form.earth_stem_id"}],staticClass:"form-control",attrs:{disabled:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"earth_stem_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Stem")]),t._v(" "),t._l(t.earth_stems,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.value))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(5),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.door_id,expression:"form.door_id"}],staticClass:"form-control",attrs:{autofocus:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"door_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Door")]),t._v(" "),t._l(t.doors,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.name))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(6),t._v(" "),r("div",{staticClass:"col-8"},[t._v("\n                            "+t._s(t.form.number)+"\n                        ")])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(7),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.relationship_id,expression:"form.relationship_id"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"relationship_id",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select Relationship")]),t._v(" "),t._l(t.relationships,(function(e,o){return r("option",{key:o,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(8),t._v(" "),r("div",{staticClass:"col-8"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.formation,expression:"form.formation"}],staticClass:"form-control",attrs:{cols:"30",rows:"3"},domProps:{value:t.form.formation},on:{input:function(e){e.target.composing||t.$set(t.form,"formation",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(9),t._v(" "),r("div",{staticClass:"col-8"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.explanation,expression:"form.explanation"}],staticClass:"form-control",attrs:{cols:"30",rows:"5"},domProps:{value:t.form.explanation},on:{input:function(e){e.target.composing||t.$set(t.form,"explanation",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"col-md-6 border-bottom"},[r("div",{staticClass:"border-bottom"},[r("div",{directives:[{name:"show",rawName:"v-show",value:"se"==t.type||"s"==t.type||"sw"==t.type||"ne"==t.type||"n"==t.type||"nw"==t.type,expression:"type == 'se' || type == 's' || type == 'sw' || type == 'ne' || type == 'n' || type == 'nw'"}],staticClass:"row mt-2"},[t._m(10),t._v(" "),r("div",{staticClass:"col-8"},t._l(t.outsideFormation,(function(e,o){return r("span",{key:o},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.outside_top,expression:"form.outside_top"}],attrs:{type:"radio"},domProps:{value:e,checked:t._q(t.form.outside_top,e)},on:{change:[function(r){return t.$set(t.form,"outside_top",e)},t.populatePreview]}}),t._v(" "+t._s(e)+"\n                                ")])})),0)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"se"==t.type||"sw"==t.type||"ne"==t.type||"nw"==t.type||"e"==t.type||"w"==t.type,expression:"type == 'se' || type == 'sw' || type == 'ne' || type == 'nw' || type == 'e' || type == 'w'"}],staticClass:"row mt-2"},[t._m(11),t._v(" "),r("div",{staticClass:"col-8"},t._l(t.outsideFormation,(function(e,o){return r("span",{key:o},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.outside_left_right,expression:"form.outside_left_right"}],attrs:{type:"radio"},domProps:{value:e,checked:t._q(t.form.outside_left_right,e)},on:{change:[function(r){return t.$set(t.form,"outside_left_right",e)},t.populatePreviewLeftRight]}}),t._v(" "+t._s(e)+"\n                                ")])})),0)])]),t._v(" "),r("div",{staticClass:"border-bottom"},[r("div",{staticClass:"row mt-2"},[t._m(12),t._v(" "),r("div",{staticClass:"col-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.heaven,expression:"form.heaven"}],attrs:{type:"checkbox"},domProps:{checked:t.form.heaven,checked:Array.isArray(t.form.heaven)?t._i(t.form.heaven,null)>-1:t.form.heaven},on:{change:[function(e){var r=t.form.heaven,o=e.target,a=!!o.checked;if(Array.isArray(r)){var i=t._i(r,null);o.checked?i<0&&t.$set(t.form,"heaven",r.concat([null])):i>-1&&t.$set(t.form,"heaven",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"heaven",a)},t.heavenCenter]}}),t._v(t._s(t.center)+"\n                            ")])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(13),t._v(" "),r("div",{staticClass:"col-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.earth,expression:"form.earth"}],attrs:{type:"checkbox"},domProps:{checked:t.form.earth,checked:Array.isArray(t.form.earth)?t._i(t.form.earth,null)>-1:t.form.earth},on:{change:[function(e){var r=t.form.earth,o=e.target,a=!!o.checked;if(Array.isArray(r)){var i=t._i(r,null);o.checked?i<0&&t.$set(t.form,"earth",r.concat([null])):i>-1&&t.$set(t.form,"earth",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"earth",a)},t.earthCenter]}}),t._v(t._s(t.center)+"\n                            ")])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(14),t._v(" "),r("div",{staticClass:"col-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.other,expression:"form.other"}],attrs:{type:"checkbox"},domProps:{checked:t.form.other,checked:Array.isArray(t.form.other)?t._i(t.form.other,null)>-1:t.form.other},on:{change:[function(e){var r=t.form.other,o=e.target,a=!!o.checked;if(Array.isArray(r)){var i=t._i(r,null);o.checked?i<0&&t.$set(t.form,"other",r.concat([null])):i>-1&&t.$set(t.form,"other",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"other",a)},t.others]}}),t._v("Qin Bird\n                            ")])])]),t._v(" "),r("div",[t._m(15),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(16),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_1,expression:"form.position_1"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_1",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions1,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(17),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_2,expression:"form.position_2"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_2",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions1,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),t._m(18),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(19),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_3,expression:"form.position_3"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_3",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(20),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_4,expression:"form.position_4"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_4",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(21),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_5,expression:"form.position_5"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_5",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),t._m(22),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(23),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_6,expression:"form.position_6"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_6",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions2,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),r("div",{staticClass:"row mt-2"},[t._m(24),t._v(" "),r("div",{staticClass:"col-8"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.position_7,expression:"form.position_7"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"position_7",e.target.multiple?r:r[0])},t.preview]}},[r("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select position")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("None")]),t._v(" "),t._l(t.positions2,(function(e,o){return r("option",{key:o,domProps:{value:e}},[t._v(t._s(e.first_word)+" "+t._s(e.second_word))])}))],2)])]),t._v(" "),r("button",{staticClass:"form-control mt-2 btn btn-primary mb-2",on:{click:t.submit}},[t._v("Save")])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-100"},[e("h3",[this._v("Preview")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Heaven Stem")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Deity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Earth Stem")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Door")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Number")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Relationship")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Explanation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Top and Bottom:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Left and Right:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Heaven:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Earth:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Others:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("strong",[e("small",{staticClass:"text-danger"},[this._v("Left Formation")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 2")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("strong",[e("small",{staticClass:"text-danger"},[this._v("Middle Formation")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 4")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 5")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("strong",[e("small",{staticClass:"text-danger"},[this._v("Right Formation")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 6")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("label",{attrs:{for:""}},[this._v("Formation 7")])])}],!1,null,"11865454",null);e.default=i.exports},34:function(t,e,r){var o=r(80);"string"==typeof o&&(o=[[t.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(4)(o,a);o.locals&&(t.exports=o.locals)},79:function(t,e,r){"use strict";r(34)},80:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,"input[type=radio][data-v-11865454]{transform:scale(1.5)}",""])}}]);