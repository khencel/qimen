(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1:function(t,e,r){t.exports=r(61)},159:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n);function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var a={props:["id"],components:{PulseLoader:r(2).a},data:function(){return{loading:!1,form:new Form({wealth:"",career:"",relationship:"",health:"",animal_id:this.id})}},methods:{show:function(){var t,e=this;return(t=o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(window.besteverLive+"/api/aspect/show/"+e.id);case 2:r=t.sent,e.form.wealth=r.data.wealth,e.form.career=r.data.career,e.form.relationship=r.data.relationships,e.form.health=r.data.health;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))})()},storeAspect:function(){var t=this;this.loading=!0,this.form.post(window.besteverLive+"/api/aspect/store").then((function(e){t.$notify({group:"notification",type:"success",title:"Update Data",text:"Data has been updated"}),t.loading=!1}))}},mounted:function(){this.show()}},s=r(0),c=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[t._m(0),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.wealth,expression:"form.wealth"}],staticClass:"form-control",attrs:{placeholder:"Input wealth here...",id:"",cols:"30",rows:"10"},domProps:{value:t.form.wealth},on:{input:function(e){e.target.composing||t.$set(t.form,"wealth",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.career,expression:"form.career"}],staticClass:"form-control",attrs:{placeholder:"Input career here...",id:"",cols:"30",rows:"10"},domProps:{value:t.form.career},on:{input:function(e){e.target.composing||t.$set(t.form,"career",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[t._m(2),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.relationship,expression:"form.relationship"}],staticClass:"form-control",attrs:{placeholder:"Input relationships here...",id:"",cols:"30",rows:"10"},domProps:{value:t.form.relationship},on:{input:function(e){e.target.composing||t.$set(t.form,"relationship",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(3),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.health,expression:"form.health"}],staticClass:"form-control",attrs:{placeholder:"Input health here...",id:"",cols:"30",rows:"10"},domProps:{value:t.form.health},on:{input:function(e){e.target.composing||t.$set(t.form,"health",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"row justify-content-end mt-2 mb-2"},[r("div",{staticClass:"col-md-6"},[t.loading?r("PulseLoader",{staticClass:"float-right mr-5 mt-3",attrs:{loading:t.loading}}):r("button",{staticClass:"btn btn-success w-25 float-right",on:{click:t.storeAspect}},[t._v("Save")])],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Wealth")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Career")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Relationships")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("label",{attrs:{for:""}},[this._v("Health")])])}],!1,null,null,null);e.default=c.exports},61:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function h(){}function f(){}function p(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==e&&r.call(m,o)&&(v=m);var g=p.prototype=h.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=g.constructor=p,p.constructor=f,f.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),s(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}}]);