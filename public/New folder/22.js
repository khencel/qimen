(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{139:function(t,a,o){"use strict";o.r(a);var e={props:["palace","text","text2","structure","chart_numb","id","stem","type","day","jiabranch","jiaformation","stemday","jiachief","stemhour","img"],data:function(){return{jia:"",jiaday:"",door_red:[1,2,3,8],deitie_red:[1,2,3,4,5],star_aus:[1,2,3,7,9],stem_aus:[1,2,3,4,5],heaven_red:[],earth_red:[],palace_sw_nw_style:"",palace_e_w_style:"",outer_top_bottom:"",outer_left_right:"",earth_stem:{},star:{},deitie:{},heaven:{},door:{},number:"",stem_top:!1,stem_bottom:!1,other:!1,formations:{},top_bottom:[],left_right:[],center:"",stemcenter:"",trigramTop:"",trigramBottom:"",hexagramStyle:"",hexagram:"",topTrigram:"",bottomTrigram:"",constilationCont:""}},methods:{hexagram_style:function(){var t="position-absolute";"SE"==this.palace&&(this.hexagramStyle=t+" se-hex",this.constilationCont="yang"!=this.structure?t+" cons-se":t+" cons-se-yang"),"NE"==this.palace&&(this.hexagramStyle=t+" se-hex",this.constilationCont="yang"!=this.structure?t+" cons-ne":t+" cons-ne-yang"),"SW"==this.palace&&(this.hexagramStyle=t+" sw-hex",this.constilationCont="yang"!=this.structure?t+" cons-sw":t+" cons-sw-yang"),"NW"==this.palace&&(this.hexagramStyle=t+" sw-hex",this.constilationCont="yang"!=this.structure?t+" cons-nw":t+" cons-nw-yang"),"S"==this.palace&&(this.hexagramStyle=t+" s-hex",this.constilationCont="yang"!=this.structure?t+" cons-s":t+" cons-s-yang"),"N"==this.palace&&(this.hexagramStyle=t+" n-hex",this.constilationCont="yang"!=this.structure?t+" cons-n":t+" cons-n-yang"),"E"==this.palace&&(this.hexagramStyle=t+" se-hex",this.constilationCont="yang"!=this.structure?t+" cons-e":t+" cons-e-yang"),"W"==this.palace&&(this.hexagramStyle=t+" sw-hex",this.constilationCont="yang"!=this.structure?t+" cons-w":t+" cons-w-yang")},outerStyle:function(){"SE"==this.palace&&(this.outer_top_bottom="position-absolute w-100 se_outer",this.outer_left_right="position-absolute h-100 text-warning outer-left"),"NE"==this.palace&&(this.outer_top_bottom="position-absolute w-100 ne_outer",this.outer_left_right="position-absolute h-100 text-warning outer-left"),"SW"==this.palace&&(this.outer_top_bottom="position-absolute w-100 se_outer",this.outer_left_right="position-absolute h-100 text-warning outer-right"),"NW"==this.palace&&(this.outer_top_bottom="position-absolute w-100 ne_outer",this.outer_left_right="position-absolute h-100 text-warning outer-right"),"S"==this.palace&&(this.outer_top_bottom="position-absolute w-100 s_outer"),"N"==this.palace&&(this.outer_top_bottom="position-absolute w-100 n_outer"),"E"==this.palace&&(this.outer_left_right="position-absolute h-100 text-warning outer-left-e"),"W"==this.palace&&(this.outer_left_right="position-absolute h-100 text-warning outer-right-w")},loadPartChart:function(){var t=this;axios.get("/api/hour/part/"+this.id+"/"+this.structure+"/"+this.chart_numb+"/"+this.palace+"/?api_token="+window.token).then((function(a){t.earth_stem=a.data.chart.earth_stem,t.star=a.data.chart.star,t.deitie=a.data.chart.deitie,t.heaven=a.data.chart.heaven_stem,t.door=a.data.chart.door,t.number=a.data.chart.number_id,t.stem_top=a.data.chart.heaven,t.stem_bottom=a.data.chart.earth,t.other=a.data.chart.other,t.top_bottom=null!=a.data.chart.top_bottom?a.data.chart.top_bottom.split(" "):"",t.left_right=null!=a.data.chart.left_right?a.data.chart.left_right.split(" "):"",t.center=a.data.center.center.value,t.formations=a.data.formation,t.trigramTop=a.data.chart.star.code,t.trigramBottom=a.data.chart.door.code,t.trigramTopValidation(a.data.chart.star.code),t.trigramBottomValidation(a.data.chart.door.code),t.getHex(a.data.chart.star.code+a.data.chart.door.code)}))},trigramTopValidation:function(t){"011"==t&&(this.topTrigram="/img/7.png"),"010"==t&&(this.topTrigram="/img/1.png"),"111"==t&&(this.topTrigram="/img/6.png"),"100"==t&&(this.topTrigram="/img/8.png"),"001"==t&&(this.topTrigram="/img/3.png"),"000"==t&&(this.topTrigram="/img/2.png"),"110"==t&&(this.topTrigram="/img/4.png"),"101"==t&&(this.topTrigram="/img/9.png")},trigramBottomValidation:function(t){"011"==t&&(this.bottomTrigram="/img/7.png"),"010"==t&&(this.bottomTrigram="/img/1.png"),"111"==t&&(this.bottomTrigram="/img/6.png"),"100"==t&&(this.bottomTrigram="/img/8.png"),"001"==t&&(this.bottomTrigram="/img/3.png"),"000"==t&&(this.bottomTrigram="/img/2.png"),"110"==t&&(this.bottomTrigram="/img/4.png"),"101"==t&&(this.bottomTrigram="/img/9.png")},getHex:function(t){var a=this;axios.get(window.yijing+"api/getHexagram/"+t+"?api_token="+window.yijingToken).then((function(t){a.hexagram=t.data.name}))}},mounted:function(){this.hexagram_style(),this.loadPartChart(),this.outerStyle()}},i=(o(88),o(0)),s=Object(i.a)(e,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"text-dark position-relative"},[o("div",{class:t.constilationCont}),t._v(" "),o("div",{class:t.hexagramStyle,staticStyle:{width:"100px"}},[o("div",{staticClass:"text-center"},[o("img",{attrs:{src:t.topTrigram,width:"50",alt:""}})]),t._v(" "),o("div",{staticClass:"mt-1 text-center"},[o("img",{attrs:{src:t.bottomTrigram,width:"50",alt:""}})]),t._v(" "),o("div",{staticClass:"text-center"},[t._v("\n            "+t._s(t.hexagram)+"\n        ")])]),t._v(" "),o("div",{staticClass:"row m-0",staticStyle:{height:"70px"}},[o("div",{staticClass:"col-4 pt-2"},[o("p",{class:t.stem_aus.includes(t.heaven.id)?"auspicious":""},[o("img",{attrs:{src:null!=t.heaven.photo?"/img/"+t.heaven.photo:"",width:"30",height:"30",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v("\n                        "+t._s(t.heaven.value)+"\n                    ")])])]),t._v(" "),o("div",{staticClass:" position-absolute",staticStyle:{top:"0px",right:"-25%",width:"60%"}},[o("div",{staticClass:"w-100"},[t.heaven.value==t.stemhour||(t.stemhour==t.center?1==t.stem_top&&t.stemhour:t.stem_top==t.stemhour)?o("div",{staticClass:"position-relative text-center",staticStyle:{top:"0px","background-color":"brown",color:"white","font-size":"10px","border-radius":"25%"}},[o("strong",[t._v("Outcome")])]):t._e(),t._v(" "),t.heaven.value==t.stemday||t.stem_top==t.stemday?o("div",{staticClass:"position-relative text-center",staticStyle:{top:"0px","background-color":"skyblue",color:"white","font-size":"10px","border-radius":"25%"}},[o("strong",[t._v("Asker")])]):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.deitie.value==t.jiachief,expression:"deitie.value == jiachief"}],staticClass:"position-relative text-center",staticStyle:{top:"0px","background-color":"orange",color:"white","font-size":"10px","border-radius":"25%"}},[o("strong",[t._v("Jia")])])])])]),t._v(" "),o("div",{staticClass:"col-4 pt-2"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.stem_top,expression:"stem_top"}],staticClass:"position-absolute w-50 h-50 pt-2",staticStyle:{bottom:"-0.5px",left:"-25%"}},[o("p",[o("img",{attrs:{src:/img/+t.img,width:"20",height:"20",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",{staticStyle:{"font-size":"10px"}},[o("strong",[t._v("\n                            "+t._s(t.center)+"\n                        ")])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.other,expression:"other"}],staticClass:"position-absolute w-50 h-50 pt-2",staticStyle:{right:"-25%"}},[t._m(0)]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:"SE"==t.palace||"SW"==t.palace||"S"==t.palace,expression:"palace == 'SE' || palace == 'SW' || palace == 'S'"}],class:t.outer_top_bottom},[o("div",{staticClass:"row justify-content-center m-0 pl-2 pr-2"},t._l(t.top_bottom,(function(a,e){return o("div",{key:e,staticClass:"col-6 p-0"},[o("strong",[t._v(t._s(a))])])})),0)]),t._v(" "),o("p",{class:t.star_aus.includes(t.star.id)?"auspicious":""},[o("img",{attrs:{src:null!=t.star.photo?"/img/"+t.star.photo:"",width:"30",height:"30",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v(t._s(t.star.name))])])])]),t._v(" "),o("div",{staticClass:"col-4 pt-2"},[o("p",{class:t.deitie_red.includes(t.deitie.id)?"auspicious":""},[o("img",{attrs:{src:null!=t.deitie.photo?"/img/"+t.deitie.photo:"",width:"30",height:"30",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v(t._s(t.deitie.value))])])])])]),t._v(" "),o("div",{staticClass:"row m-0 position-relative justify-content-center",staticStyle:{height:"80px"}},[o("div",{class:t.outer_left_right},t._l(t.left_right,(function(a,e){return o("div",{key:e,class:1==Object.keys(t.left_right).length?"h-50 mt-3 pt-2":"h-50 pt-2"},[o("strong",[t._v(t._s(a))])])})),0),t._v(" "),t._l(t.formations,(function(a,e){return o("div",{key:e,staticClass:"col-4 text-center p-0 mt-2"},[o("p",{staticStyle:{"line-height":"15px","font-size":"12px"}},[t._v("\n                "+t._s(a.formation)+"\n            ")])])}))],2),t._v(" "),o("div",{staticClass:"row m-0",staticStyle:{height:"70px"}},[o("div",{staticClass:"col-4 pt-2"},[o("p",{class:t.stem_aus.includes(t.earth_stem.id)?"auspicious":""},[o("img",{attrs:{src:null!=t.earth_stem.photo?"/img/"+t.earth_stem.photo:"",width:"30",height:"30",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v("\n                        "+t._s(t.earth_stem.value)+"\n                    ")])])])]),t._v(" "),o("div",{staticClass:"col-4 pt-2"},[o("div",{directives:[{name:"show",rawName:"v-show",value:"NE"==t.palace||"NW"==t.palace||"N"==t.palace,expression:"palace == 'NE' || palace == 'NW' || palace == 'N'"}],class:t.outer_top_bottom},[o("div",{staticClass:"row justify-content-center m-0 pl-2 pr-2"},t._l(t.top_bottom,(function(a,e){return o("div",{key:e,staticClass:"col-6 p-0"},[o("strong",[t._v(t._s(a))])])})),0)]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.stem_bottom,expression:"stem_bottom"}],staticClass:"position-absolute w-50 h-50 pt-2",staticStyle:{top:"-25%",left:"-25%"}},[o("p",[o("img",{attrs:{src:/img/+t.img,width:"20",height:"20",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",{staticStyle:{"font-size":"10px"}},[o("strong",[t._v("\n                            "+t._s(t.center)+"\n                        ")])])])]),t._v(" "),o("p",{class:t.door_red.includes(t.door.id)?"auspicious":""},[o("img",{attrs:{src:null!=t.door.photo?"/img/"+t.door.photo:"",width:"30",height:"30",alt:""}}),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v(t._s(t.door.name))])])])]),t._v(" "),o("div",{staticClass:"col-4 pt-2"},[o("h2",[o("strong",[t._v("\n                    "+t._s(t.number)+"\n                ")])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"/img/bird.png",width:"20",height:"20",alt:""}}),this._v(" "),a("br"),this._v(" "),a("small",{staticStyle:{"font-size":"10px"}},[a("strong",[this._v("\n                            Qin\n                            "),a("br"),this._v("\n                            Bird\n                        ")])])])}],!1,null,"4104d2c6",null);a.default=s.exports},38:function(t,a,o){var e=o(89);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(3)(e,i);e.locals&&(t.exports=e.locals)},88:function(t,a,o){"use strict";o(38)},89:function(t,a,o){(t.exports=o(2)(!1)).push([t.i,".se-outer[data-v-4104d2c6]{top:-40px}.ne-outer[data-v-4104d2c6],.se-outer[data-v-4104d2c6]{left:-40px;width:60%}.ne-outer[data-v-4104d2c6]{bottom:-40px}.sw-outer[data-v-4104d2c6]{top:-40px}.nw-outer[data-v-4104d2c6],.sw-outer[data-v-4104d2c6]{right:-40px;text-align:right;width:60%}.nw-outer[data-v-4104d2c6]{bottom:-40px}.s-outer[data-v-4104d2c6]{top:-40px}.n-outer[data-v-4104d2c6],.s-outer[data-v-4104d2c6]{left:50%;width:60%;margin-left:-30%;text-align:center}.n-outer[data-v-4104d2c6]{bottom:-40px}.e-outer[data-v-4104d2c6]{left:-50px}.e-outer[data-v-4104d2c6],.w-outer[data-v-4104d2c6]{width:20%;height:60%;top:50%;margin-top:-20%}.w-outer[data-v-4104d2c6]{right:-40px}p[data-v-4104d2c6]{line-height:10px}.s_outer[data-v-4104d2c6],.se_outer[data-v-4104d2c6]{top:-35px;color:#ff0}.s_outer[data-v-4104d2c6]{left:-100%}.n_outer[data-v-4104d2c6]{left:-100%}.n_outer[data-v-4104d2c6],.ne_outer[data-v-4104d2c6]{bottom:-35px;color:#ff0}.outer-left[data-v-4104d2c6]{left:-17%}.outer-left-e[data-v-4104d2c6]{left:-17%;bottom:-100%}.outer-right[data-v-4104d2c6]{right:-17%}.outer-right-w[data-v-4104d2c6]{right:-17%;top:-110%}.auspicious[data-v-4104d2c6]{color:#62b853}.col-4[data-v-4104d2c6]{padding:0;text-align:center}.se-hex[data-v-4104d2c6]{top:40%;left:-80%}.s-hex[data-v-4104d2c6]{top:-71%}.n-hex[data-v-4104d2c6],.s-hex[data-v-4104d2c6]{left:50%;margin-left:-50px}.n-hex[data-v-4104d2c6]{bottom:-71%}.sw-hex[data-v-4104d2c6]{top:40%;right:-80%}.cons-se[data-v-4104d2c6]{width:77.3%;top:-22.5%;left:-100%;height:122%}.cons-s[data-v-4104d2c6],.cons-se[data-v-4104d2c6]{background-color:#f2ba49}.cons-s[data-v-4104d2c6]{width:500%;top:-86%;left:-200%;border-top:140px solid #ffff9f;border-left:158px solid transparent;border-right:158px solid transparent}.cons-sw[data-v-4104d2c6]{width:76%;top:-22.5%;right:-98.6%;height:122%;background-color:#f2ba49}.cons-e[data-v-4104d2c6]{width:77.3%;left:-100%}.cons-e[data-v-4104d2c6],.cons-w[data-v-4104d2c6]{top:0;height:99.3%;border:1px solid;background-color:#ffff9f}.cons-w[data-v-4104d2c6]{width:76%;right:-98.6%}.cons-ne[data-v-4104d2c6]{width:77.3%;bottom:-21%;left:-100%;height:122%}.cons-n[data-v-4104d2c6],.cons-ne[data-v-4104d2c6]{background-color:#f2ba49}.cons-n[data-v-4104d2c6]{width:500%;bottom:-84%;left:-200%;border-bottom:140px solid #ffff9f;border-left:158px solid transparent;border-right:158px solid transparent}.cons-nw[data-v-4104d2c6]{width:76%;bottom:-21%;right:-98.6%;height:122%;background-color:#f2ba49}.cons-se-yang[data-v-4104d2c6]{width:77.3%;top:-22.5%;left:-100%;height:122%;background-color:#3ec1d5}.cons-s-yang[data-v-4104d2c6]{width:500%;top:-86%;left:-200%;border-top:140px solid #d8f2f6;border-left:158px solid transparent;border-right:158px solid transparent;background-color:#3ec1d5}.cons-sw-yang[data-v-4104d2c6]{width:76%;top:-22.5%;right:-98.6%;height:122%;background-color:#3ec1d5}.cons-e-yang[data-v-4104d2c6]{width:77.3%;left:-100%}.cons-e-yang[data-v-4104d2c6],.cons-w-yang[data-v-4104d2c6]{top:0;height:99.3%;border:1px solid;background-color:#d8f2f6}.cons-w-yang[data-v-4104d2c6]{width:76%;right:-98.6%}.cons-ne-yang[data-v-4104d2c6]{width:77.3%;bottom:-21%;left:-100%;height:122%;background-color:#3ec1d5}.cons-n-yang[data-v-4104d2c6]{width:500%;bottom:-84%;left:-200%;border-bottom:140px solid #d8f2f6;border-left:158px solid transparent;border-right:158px solid transparent;background-color:#3ec1d5}.cons-nw-yang[data-v-4104d2c6]{width:76%;bottom:-21%;right:-98.6%;height:122%;background-color:#3ec1d5}",""])}}]);