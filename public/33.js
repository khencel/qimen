(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1:function(t,e,r){t.exports=r(59)},158:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}var s={data:function(){return{codes:{},is_active:"",form:new Form({currentDate:(new Date).getFullYear()+"-"+(new Date).getMonth()+"1-"+(new Date).getDate(),time:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),exp_date:""})}},methods:{index:function(){var t=this;return i(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(window.besteverLive+"/api/generate-code/index");case 2:r=e.sent,t.codes=r.data;case 4:case"end":return e.stop()}}),e)})))()},checkIfActive:function(){var t=this;return i(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(window.besteverLive+"/api/code/checkIfActive");case 2:r=e.sent,t.is_active=r.data;case 4:case"end":return e.stop()}}),e)})))()},createCode:function(){1==this.is_active&&$("#modalCode").modal("show")},storeCode:function(){var t=this;this.form.post(window.besteverLive+"/api/generate-code/store").then((function(e){"Invalid Expiration Date"==e.data?alert(e.data):(t.index(),$("#modalCode").modal("hide"),t.$notify({group:"notification",type:"success",title:"Create Data",text:"Data has been Created"}))}))}},mounted:function(){this.index(),this.checkIfActive()}},c=r(0),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),r("div",{staticClass:"w-100 mt-2"},[r("button",{staticClass:"btn btn-success float-right mb-2",attrs:{disabled:1!=t.is_active},on:{click:t.createCode}},[t._v("Generate Code")])]),t._v(" "),r("div",[r("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),r("tbody",t._l(t.codes,(function(e,n){return r("tr",{key:n},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[t._v(t._s(e.code))]),t._v(" "),r("td",[t._v(t._s(e.numb_of_users))]),t._v(" "),r("td",[t._v("\n                        "+t._s(t._f("moment")(e.exp_date,"dddd, MMMM Do YYYY"))+"\n                    ")]),t._v(" "),r("td",[0==e.status?r("span",{staticClass:"badge badge-danger p-2"},[t._v("Expired")]):t._e(),t._v(" "),1==e.status?r("span",{staticClass:"badge badge-success p-2"},[t._v("Active")]):t._e()])])})),0)])]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"modalCode",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10"},[t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.exp_date,expression:"form.exp_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.exp_date},on:{input:function(e){e.target.composing||t.$set(t.form,"exp_date",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.storeCode}},[t._v("Generate")])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("#")]),t._v(" "),r("th",[t._v("Code")]),t._v(" "),r("th",[t._v("No. of Users")]),t._v(" "),r("th",[t._v("Expiration Date")]),t._v(" "),r("th",[t._v("Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Generate Code")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Expiration Date")])])}],!1,null,null,null);e.default=u.exports},59:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=w(i,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function d(){}function h(){}function f(){}var v={};v[o]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(C([])));m&&m!==e&&r.call(m,o)&&(v=m);var y=f.prototype=d.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var c=u(t[o],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=y.constructor=f,f.constructor=h,h.displayName=s(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),s(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);