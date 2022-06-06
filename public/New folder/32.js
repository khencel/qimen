(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1:function(t,e,r){t.exports=r(59)},151:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var i={props:["id"],components:{PulseLoader:r(2).a},data:function(){return{animals:{},year:"",loading:!1,form:new Form({years:[],forecast:"",year_text:"",id:this.id})}},methods:{show:function(){var t,e=this;return(t=o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(window.besteverLive+"/api/animal/show/"+e.id);case 2:r=t.sent,e.animals=r.data,e.form.forecast=r.data.forecast_for_the_year,e.form.year_text=r.data.text_for_the_year,r.data.year.forEach((function(t){e.form.years.push(t.year)}));case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()},addYear:function(){this.form.years.push(this.year),this.year=""},deleteYear:function(t){this.form.years.splice(t,1)},storeData:function(){var t=this;this.loading=!0,this.form.post(window.besteverLive+"/api/animal/store").then((function(e){t.$notify({group:"notification",type:"success",title:"Update Data",text:"Data has been updated"}),t.loading=!1}))}},mounted:function(){this.show()}},s=r(0),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.forecast,expression:"form.forecast"}],staticClass:"form-control",attrs:{placeholder:"Text here...",cols:"30",rows:"10"},domProps:{value:t.form.forecast},on:{input:function(e){e.target.composing||t.$set(t.form,"forecast",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6 border-left"},[r("strong",[r("label",{attrs:{for:""}},[t._v("Year of the "+t._s(t.animals.name))])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Input year"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-success mt-2",on:{click:t.addYear}},[t._v("Add")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.form.years,(function(e,n){return r("div",{key:n,staticClass:"col-md-4"},[r("span",{staticClass:"badge badge-primary p-2 mt-2 w-50"},[t._v(t._s(e))]),t._v(" "),r("span",{staticClass:"badge badge-danger p-2 mt-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.deleteYear(n)}}},[t._v("X")])])})),0)]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.year_text,expression:"form.year_text"}],staticClass:"form-control",attrs:{placeholder:"Input text here...",cols:"30",rows:"10"},domProps:{value:t.form.year_text},on:{input:function(e){e.target.composing||t.$set(t.form,"year_text",e.target.value)}}})])]),t._v(" "),t.loading?r("PulseLoader",{staticClass:"float-right mr-5 mt-3",attrs:{loading:t.loading}}):r("button",{staticClass:"btn btn-success w-25 mt-2 float-right",on:{click:t.storeData}},[t._v("Save")])],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Overall Forecast For The Year")])])}],!1,null,null,null);e.default=c.exports},59:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function h(){}function d(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==e&&r.call(m,o)&&(p=m);var y=d.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=y.constructor=d,d.constructor=h,h.displayName=s(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[a]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),s(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);