(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{133:function(t,r,a){"use strict";a.r(r);var e={props:["palace","text","text2","structure","chart_numb","id","stem","type","day","jiabranch","jiaformation","center","image","chart"],data:function(){return{sixBatallions:["Wu","Zi","Xu","Shen","Chen","Yin"],dayBatallion:!1,disableDay:!1,jia:"",stemDay:"",stemHour:""}},methods:{dayGenerate:function(t){var r=this.get6BatallionDay(t);if(this.stemDay=r,r==this.center&&(this.stemDay=1),this.jia="Chief",this.stemHour=this.stem,"Jia"==this.stem){var a=this.get6BatallionDay(this.jiabranch);this.stemHour=a}this.stem==this.center&&(this.stemHour=1)},checkDayIfJia:function(){this.chart.split(",").includes("Jia")&&(this.disableDay=!0)},generateHourChart:function(t){if(this.stemDay=t,this.jia="Chief",t==this.center&&(this.stemDay=1),this.stemHour=this.stem,this.stem==this.center&&(this.stemHour=1),"Jia"==this.stem){var r=this.get6BatallionDay(this.jiabranch);this.stemHour=r}},get6BatallionDay:function(t){return"Wu"==t?"Xin":"Zi"==t?"Wu":"Xu"==t?"Ji":"Shen"==t?"Geng":"Chen"==t?"Ren":"Yin"==t?"Gui":void 0}},mounted:function(){this.checkDayIfJia(),this.checkHourIfJia()}},i=(a(83),a(0)),s=Object(i.a)(e,(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"row justify-content-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.disableDay,expression:"disableDay"}],staticClass:"col-md-2 p-2"},[a("div",[t._m(0),t._v(" "),t._l(t.sixBatallions,(function(r,e){return a("div",{key:e},[a("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.dayGenerate(r)}}},[t._v(t._s(r))])])}))],2)]),t._v(" "),a("div",{staticClass:"col-6 p-0"},[a("div",{staticClass:"row p-2"},[t._m(1),t._v(" "),t._l(t.chart.split(","),(function(r,e){return a("div",{key:e,staticClass:"col-md-6 text-center"},[a("button",{staticClass:"btn btn-success form-control",on:{click:function(a){return t.generateHourChart(r)}}},[t._v(t._s(r))])])}))],2),t._v(" "),a("div",{staticClass:"pt-5",style:"yang"==t.structure?"width: 100%;height:755px;background-color:darkcyan":"width: 100%;height:755px;background-color:maroon"},[a("div",{staticStyle:{height:"660px",width:"87%","background-image":"url('/img/logo.png')","background-size":"90% 70%","background-repeat":"no-repeat","background-position":"center center",margin:"0px auto","background-color":"white"}},[a("div",{staticClass:" h-100",staticStyle:{"background-color":"rgb(255,255,255,0.8)"}},[a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 border-right border-bottom p-0 border-info":"col-4 border-right border-bottom p-0 border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"SE",text:"Zun Wood",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 border-right border-bottom p-0 border-info":"col-4 border-right border-bottom p-0 border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"S",text:"Li Fire",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 border-right border-bottom p-0 border-info":"col-4 border-right border-bottom p-0 border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"SW",text:"Earth Kun",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1)]),t._v(" "),a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 p-0 border-right border-info":"col-4 p-0 border-right border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"E",text:"Zhen",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1),t._v(" "),a("div",{staticClass:"col-4 p-0 position-relative",staticStyle:{color:"black"}},[a("div",{staticClass:" pt-1 pl-3"},[a("img",{attrs:{src:"/img/"+t.image,width:"20",alt:""}}),t._v(" "),a("br"),t._v("\n                                    "+t._s(t.center)+"\n                                ")]),t._v(" "),a("div",{staticClass:" position-absolute pt-1 pl-3",staticStyle:{bottom:"7%"}},[a("img",{attrs:{src:"/img/"+t.image,width:"20",alt:""}}),t._v(" "),a("br"),t._v("\n                                    "+t._s(t.center)+"\n                                ")])]),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-left border-info":"col-4 p-0 border-left border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"W",text:"Dui",text2:"Metal",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1)]),t._v(" "),a("div",{staticClass:"row m-0",staticStyle:{height:"220px"}},[a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-right border-info":"col-4 p-0 border-top border-right border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"NE",text:"Gen",text2:"Earth",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-right border-info":"col-4 p-0 border-top border-right border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"N",text:"Kan Water",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1),t._v(" "),a("div",{class:"yang"==t.structure?"col-4 p-0 border-top border-info":"col-4 p-0 border-top border-yin"},[a("chart-review-parts",{attrs:{stemday:t.stemDay,jiachief:t.jia,stemhour:t.stemHour,jiabranch:t.jiabranch,jiaformation:t.jiaformation,palace:"NW",text:"Metal Qian",day:t.day,type:t.type,stem:t.stem,structure:t.structure,chart_numb:t.chart_numb,id:t.id}})],1)])])])])])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"w-100 text-center border-bottom"},[r("strong",[this._v("Day Batallions")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"w-100 text-center border-bottom"},[r("strong",[this._v("Day Option")])])}],!1,null,"028d74ac",null);r.default=s.exports},36:function(t,r,a){var e=a(84);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(4)(e,i);e.locals&&(t.exports=e.locals)},83:function(t,r,a){"use strict";a(36)},84:function(t,r,a){(t.exports=a(3)(!1)).push([t.i,".border-yin[data-v-028d74ac]{border-color:maroon!important}",""])}}]);