(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{133:function(t,i,a){"use strict";a.r(i);var e={props:["palace","text","text2","structure","chart_numb","id","stem","type","day","jiabranch","jiaformation","center","image","chart"],data:function(){return{sixBatallions:["Wu","Zi","Xu","Shen","Chen","Yin"],dayBatallion:!1,disableDay:!1,jia:"",stemDay:"",stemHour:""}},methods:{dayGenerate:function(t){var i=this.get6BatallionDay(t);if(this.stemDay=i,i==this.center&&(this.stemDay=1),this.jia="Chief",this.stemHour=this.stem,"Jia"==this.stem){var a=this.get6BatallionDay(this.jiabranch);this.stemHour=a}this.stem==this.center&&(this.stemHour=1)},checkDayIfJia:function(){this.chart.split(",").includes("Jia")&&(this.disableDay=!0)},generateHourChart:function(t){if(this.stemDay=t,this.jia="Chief",t==this.center&&(this.stemDay=1),this.stemHour=this.stem,this.stem==this.center&&(this.stemHour=1),"Jia"==this.stem){var i=this.get6BatallionDay(this.jiabranch);this.stemHour=i}},get6BatallionDay:function(t){return"Wu"==t?"Xin":"Zi"==t?"Wu":"Xu"==t?"Ji":"Shen"==t?"Geng":"Chen"==t?"Ren":"Yin"==t?"Gui":void 0}},mounted:function(){this.checkDayIfJia(),this.checkHourIfJia()}},r=(a(83),a(0)),s=Object(r.a)(e,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row justify-content-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.disableDay,expression:"disableDay"}],staticClass:"col-md-2 p-2"},[a("div",[t._m(0),t._v(" "),t._l(t.sixBatallions,(function(i,e){return a("div",{key:e},[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.dayGenerate(i)}}},[t._v(t._s(i))])])}))],2)]),t._v(" "),a("div",{staticClass:"col-6 p-0 "},[a("div",{staticClass:"row p-2",staticStyle:{"margin-bottom":"20%"}},[t._m(1),t._v(" "),t._l(t.chart.split(","),(function(i,e){return a("div",{key:e,staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-success form-control",on:{click:function(a){return t.generateHourChart(i)}}},[t._v(t._s(i))])])}))],2),t._v(" "),a("div",{staticClass:"pt-5 position-relative ",style:"yang"==t.structure?"width: 100%;height:755px;background-color:darkcyan":"width: 100%;height:755px;background-color:maroon;margin-bottom:20%;"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("div",{staticStyle:{height:"660px",width:"87%","background-image":"url('/img/logo.png')","background-size":"90% 70%","background-repeat":"no-repeat","background-position":"center center",margin:"0px auto","background-color":"white"}},[a("div",{staticClass:" h-100",staticStyle:{"background-color":"rgb(255,255,255,0.8)"}},[a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-info":"col-4 p-0 border-top border-yin border-bottom border-right yin-box"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"SE",text:"Zun Wood",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-info":"col-4 p-0 border-top border-yin border-bottom border-right"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"S",text:"Li Fire",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-info":"col-4 p-0 border-top border-yin border-bottom"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"SW",text:"Earth Kun",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1)]),t._v(" "),a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 p-0 border-right border-info":"col-4 p-0 border-right border-yin yin-box"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"E",text:"Zhen",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1),t._v(" "),a("div",{staticClass:"col-4 p-0 position-relative border-right border-yin",staticStyle:{color:"black"}},[a("div",{staticClass:" pt-1 pl-3"},[a("img",{attrs:{src:"/img/"+t.image,width:"20",alt:""}}),t._v(" "),a("br"),t._v("\n                                    "+t._s(t.center)+"\n                                ")]),t._v(" "),a("div",{staticClass:" position-absolute pt-1 pl-3",staticStyle:{bottom:"7%"}},[a("img",{attrs:{src:"/img/"+t.image,width:"20",alt:""}}),t._v(" "),a("br"),t._v("\n                                    "+t._s(t.center)+"\n                                ")]),t._v(" "),a("div",{staticClass:"position-absolute",staticStyle:{bottom:"0","font-weight":"bold","font-size":"20px",right:"0"}},[t._v("\n                                    © Jennel Cheng\n                                ")])]),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-info":"col-4 p-0 border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"W",text:"Dui",text2:"Metal",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1)]),t._v(" "),a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-right border-info":"col-4 p-0 border-top border-right border-yin yin-box"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"NE",text:"Gen",text2:"Earth",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-right border-info":"col-4 p-0 border-top border-right border-yin yin-box"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"N",text:"Kan Water",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-info":"col-4 p-0 border-top border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"NW",text:"Metal Qian",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id,img:t.image}})],1)])])])])])])}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"w-100 text-center border-bottom"},[i("strong",[this._v("Day Batallions")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"w-100 text-center border-bottom"},[i("strong",[this._v("Day Option")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{top:"0","margin-top":"7px","margin-left":"7px"}},[i("img",{staticClass:"mb-2",attrs:{src:"/img/xun.png",width:"80",height:"35",alt:""}}),i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-12px"}},[this._v("4")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{left:"50%",top:"0","margin-left":"-25px","margin-top":"7px"}},[i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-12px"}},[this._v("9")]),i("img",{staticClass:"mb-2",attrs:{src:"/img/li.png",width:"60",height:"35",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{right:"0",top:"0","margin-top":"7px","margin-right":"7px"}},[i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-12px"}},[this._v("2")]),i("img",{staticClass:"mb-2",attrs:{src:"/img/kun.png",width:"80",height:"35",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{top:"50%","margin-top":"-25px"}},[i("span",{staticStyle:{color:"white","font-weight":"bold",position:"absolute",left:"3px"}},[this._v("3")]),i("img",{staticClass:"mb-2",attrs:{src:"/img/zhen.png",width:"50",height:"80",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{top:"50%","margin-top":"-25px",right:"0"}},[i("img",{staticClass:"mb-2",attrs:{src:"/img/dui.png",width:"50",height:"80",alt:""}}),i("span",{staticStyle:{color:"white","font-weight":"bold",position:"absolute",right:"3px"}},[this._v("7")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{bottom:"0","margin-bottom":"7px","margin-left":"7px"}},[i("img",{attrs:{src:"/img/gen.png",width:"80",height:"35",alt:""}}),i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-10px"}},[this._v("8")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{bottom:"0",right:"50%","margin-right":"-25px","margin-bottom":"7px"}},[i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-10px"}},[this._v("1")]),i("img",{attrs:{src:"/img/kan.png",width:"60",height:"35",alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"position-absolute",staticStyle:{bottom:"0",right:"0","margin-bottom":"7px","margin-right":"7px"}},[i("span",{staticStyle:{color:"white","font-weight":"bold",position:"relative",top:"-10px"}},[this._v("6")]),i("img",{attrs:{src:"/img/qian.png",width:"80",height:"35",alt:""}})])}],!1,null,"76a49a48",null);i.default=s.exports},36:function(t,i,a){var e=a(84);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(4)(e,r);e.locals&&(t.exports=e.locals)},83:function(t,i,a){"use strict";a(36)},84:function(t,i,a){(t.exports=a(3)(!1)).push([t.i,".border-yin[data-v-76a49a48]{border-color:maroon!important}.yin-box[data-v-76a49a48]{background-color:rgba(255,196,196,.5)}",""])}}]);