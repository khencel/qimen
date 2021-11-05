(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{141:function(t,e,o){"use strict";o.r(e);var i=o(4),a=o.n(i),n={props:["id"],data:function(){return{doors:{},hexagrams:{},loading:!0,comboTwo:{},editMode:!1,selected_id:"",form:new Form({door_id:"",hexagram:"",star_id:this.id,description:"",rating:"",type:"two"})}},methods:{door:function(){var t=this;axios.post("/api/star/combo/door?api_token="+window.token,{star_id:this.id}).then((function(e){t.doors=e.data}))},showHexagram:function(){var t=this;axios.get("https://yijing.jennelcheng.com/api/hexagram/list?api_token=1TLxV5nRi60rNhwcaQR5Z4WvXIGNbgu5aSkphU4PvYIrKtg726JSdBu9rUrv").then((function(e){t.hexagrams=e.data,t.loading=!1}))},addComboTwo:function(){var t=this;this.form.post("/api/star/combo/store?api_token="+window.token).then((function(e){t.$notify({group:"notification",type:"success",title:"Add "+t.attribute,text:t.attribute+" has been Added"}),t.form.reset(),t.show()})).catch((function(e){t.$notify({group:"notification",type:"error",title:"Invalid Data",text:"All fields are required"})}))},show:function(){var t=this;axios.get("/api/star/combo/show/"+this.form.type+"/"+this.id+"?api_token="+window.token).then((function(e){t.comboTwo=e.data}))},edit:function(t){var e=this;this.editModeFormation(t),axios.post("/api/star/combo/edit?api_token="+window.token,{selected_id:t,id:this.id,type:this.form.type}).then((function(o){e.selected_id=t,e.form.door_id=o.data.comboTwo.door_id,e.form.hexagram=o.data.comboTwo.hexagram,e.form.description=o.data.comboTwo.description,e.form.rating=o.data.comboTwo.rating,e.doors=o.data.door}))},update:function(){var t=this;this.form.put("/api/star/combo/update/"+this.selected_id+"?api_token="+window.token).then((function(e){t.$notify({group:"notification",type:"success",title:"Update "+t.attribute,text:t.attribute+" has been Updated"}),t.form.reset(),t.show(),t.editMode=!1}))},deleteItem:function(t){var e=this;a.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.isConfirmed&&e.form.get("/api/star/combo/delete/"+e.form.type+"/"+t+"?api_token="+window.token).then((function(t){a.a.fire("Deleted!","Your file has been deleted.","success"),e.show()}))}))},editModeFormation:function(t){this.editMode=!0,$("html, body").animate({scrollTop:$(document).height()},"slow"),$("#combo").focus()},cancelTransaction:function(){this.form.reset(),this.editMode=!1}},mounted:function(){this.door(),this.showHexagram(),this.show()}},r=o(0),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),o("table",{staticClass:"table table-hover bg-white"},[t._m(0),t._v(" "),o("tbody",[t._l(t.comboTwo,(function(e,i){return o("tr",{key:i},[o("td",{staticStyle:{width:"10%"}},[t._v("\n                        "+t._s(e.door.name)+"\n                    ")]),t._v(" "),o("td",[t._v("\n                        "+t._s(e.hexagram)+"\n                    ")]),t._v(" "),o("td",{staticStyle:{width:"40%"}},[t._v("\n                        "+t._s(e.description)+"\n                    ")]),t._v(" "),o("td",{staticStyle:{width:"15%"}},[o("img",{staticStyle:{width:"40px"},attrs:{src:"/img/rating/"+e.rating+".png",alt:""}})]),t._v(" "),o("td",[o("span",{staticClass:"badge badge-primary p-2 cursor-pointer",staticStyle:{width:"25%"},on:{click:function(o){return t.edit(e.id)}}},[t._v("Edit")]),t._v(" "),o("span",{staticClass:"badge badge-danger p-2 cursor-pointer",staticStyle:{width:"25%"},on:{click:function(o){return t.deleteItem(e.id)}}},[t._v("X")])])])})),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[o("td",[o("pulse-loader",{attrs:{loading:t.loading}})],1)]),t._v(" "),o("tr",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.door_id,expression:"form.door_id"}],staticClass:"form-control",attrs:{id:"combo"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"door_id",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:"",hidden:""}},[t._v("Select Door")]),t._v(" "),t._l(t.doors,(function(e,i){return o("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.hexagram,expression:"form.hexagram"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"hexagram",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",selected:"",hidden:""}},[t._v("Select Gua")]),t._v(" "),t._l(t.hexagrams,(function(e,i){return o("option",{key:i,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),o("td",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control",attrs:{placeholder:"Description",cols:"30",rows:"10"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})]),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.rating,expression:"form.rating"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"rating",e.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"",hidden:"",selected:""}},[t._v("Rating")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("Inauspicious")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("Moderate")]),t._v(" "),o("option",{attrs:{value:"3"}},[t._v("Auspicious")])])]),t._v(" "),o("td",[t.editMode?o("span",{staticClass:"badge badge-warning p-2 cursor-pointer w-50 mb-1",on:{click:t.update}},[t._v("Update")]):o("span",{staticClass:"badge button-success p-2 cursor-pointer w-50 mb-1",on:{click:t.addComboTwo}},[t._v("Add")]),t._v(" "),o("span",{staticClass:"badge badge-danger p-2 cursor-pointer w-50",on:{click:t.cancelTransaction}},[t._v("Cancel")])])])],2)])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",{staticClass:"thead-dark"},[o("th",[t._v("Door")]),t._v(" "),o("th",[t._v("Gua")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Rating")]),t._v(" "),o("th",[t._v("Action")])])}],!1,null,null,null);e.default=s.exports}}]);