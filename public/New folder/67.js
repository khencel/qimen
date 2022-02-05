(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{140:function(t,e,o){"use strict";o.r(e);var i=o(5),n=o.n(i),a={props:["id"],data:function(){return{hours:["11 am","11 pm","12:59 am","12:59 pm","1 am","1 pm","2:59 am","2:59 pm","3 am","3 pm","4:59 am","4:59 pm","5 am","5 pm","6:59 am","6:59 pm","7 am","7 pm","8:59 am","8:59 pm","9 am","9 pm","10:59 am","10:59 pm"],englishes:{},comboOne:{},editMode:!1,selected_id:"",form:new Form({start_hour:"",end_hour:"",english_id:"",star_id:this.id,description:"",rating:"",type:"one"})}},methods:{english:function(){var t=this;axios.post("/api/star/combo/english?api_token="+window.token,{star_id:this.id}).then((function(e){t.englishes=e.data}))},addComboOne:function(){var t=this;this.form.post("/api/star/combo/store?api_token="+window.token).then((function(e){t.$notify({group:"notification",type:"success",title:"Add "+t.attribute,text:t.attribute+" has been Added"}),t.form.reset(),t.show()})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Data",text:"All fields are required"})}))},show:function(){var t=this;axios.get("/api/star/combo/show/"+this.form.type+"/"+this.id+"?api_token="+window.token).then((function(e){t.comboOne=e.data}))},edit:function(t){var e=this;this.editModeFormation(t),axios.post("/api/star/combo/edit?api_token="+window.token,{selected_id:t,id:this.id,type:this.form.type}).then((function(o){e.selected_id=t,e.form.english_id=o.data.comboOne.english_id,e.form.start_hour=o.data.comboOne.start_hour,e.form.end_hour=o.data.comboOne.end_hour,e.form.description=o.data.comboOne.description,e.form.rating=o.data.comboOne.rating,e.englishes=o.data.english}))},update:function(){var t=this;this.form.put("/api/star/combo/update/"+this.selected_id+"?api_token="+window.token).then((function(e){t.$notify({group:"notification",type:"success",title:"Update "+t.attribute,text:t.attribute+" has been Updated"}),t.form.reset(),t.show(),t.editMode=!1}))},deleteItem:function(t){var e=this;n.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.isConfirmed&&e.form.get("/api/star/combo/delete/"+e.form.type+"/"+t+"?api_token="+window.token).then((function(t){n.a.fire("Deleted!","Your file has been deleted.","success"),e.show()}))}))},editModeFormation:function(t){this.editMode=!0,$("html, body").animate({scrollTop:$(document).height()},"slow"),$("#combo").focus()},cancelTransaction:function(){this.form.reset(),this.editMode=!1}},mounted:function(){this.english(),this.show()}},r=o(0),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),o("table",{staticClass:"table table-hover bg-white"},[t._m(0),t._v(" "),o("tbody",[t._l(t.comboOne,(function(e,i){return o("tr",{key:i},[o("td",{staticStyle:{width:"20%"}},[t._v("\n                        "+t._s(e.english.name)+"\n                        "),o("br"),t._v("\n                        "+t._s(e.start_hour)+"-"+t._s(e.end_hour)+"\n                    ")]),t._v(" "),o("td",{staticStyle:{width:"40%"}},[t._v("\n                        "+t._s(e.description)+"\n                    ")]),t._v(" "),o("td",{staticStyle:{width:"15%"}},[o("img",{staticStyle:{width:"40px"},attrs:{src:"/img/rating/"+e.rating+".png",alt:""}})]),t._v(" "),o("td",[o("span",{staticClass:"badge badge-primary p-2 cursor-pointer",staticStyle:{width:"25%"},on:{click:function(o){return t.edit(e.id)}}},[t._v("Edit")]),t._v(" "),o("span",{staticClass:"badge badge-danger p-2 cursor-pointer",staticStyle:{width:"25%"},on:{click:function(o){return t.deleteItem(e.id)}}},[t._v("X")])])])})),t._v(" "),o("tr",[o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.english_id,expression:"form.english_id"}],staticClass:"form-control",attrs:{id:"combo"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"english_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:"",hidden:""}},[t._v("Select English")]),t._v(" "),t._l(t.englishes,(function(e,i){return o("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.start_hour,expression:"form.start_hour"}],staticClass:"form-control mt-1",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"start_hour",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",hidden:"",selected:""}},[t._v("Start Hour")]),t._v(" "),t._l(t.hours,(function(e,i){return o("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.end_hour,expression:"form.end_hour"}],staticClass:"form-control mt-1",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"end_hour",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",hidden:"",selected:""}},[t._v("End Hour")]),t._v(" "),t._l(t.hours,(function(e,i){return o("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),t._v(" "),o("td",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",attrs:{placeholder:"Description",cols:"30",rows:"10"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})]),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.rating,expression:"form.rating"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"rating",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",hidden:"",selected:""}},[t._v("Rating")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Inauspicious")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Moderate")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Auspicious")])])]),t._v(" "),o("td",[t.editMode?o("span",{staticClass:"badge badge-warning p-2 cursor-pointer w-50 mb-1",on:{click:t.update}},[t._v("Update")]):o("span",{staticClass:"badge button-success p-2 cursor-pointer w-50 mb-1",on:{click:t.addComboOne}},[t._v("Add")]),t._v(" "),o("span",{staticClass:"badge badge-danger p-2 cursor-pointer w-50",on:{click:t.cancelTransaction}},[t._v("Cancel")])])])],2)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-dark"},[e("th",[this._v("Hour")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Rating")]),this._v(" "),e("th",[this._v("Action")])])}],!1,null,null,null);e.default=s.exports}}]);