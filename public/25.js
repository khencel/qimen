(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{109:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),i=r(18),a=r.n(i);function s(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}var l={data:function(){return Vue.use(a.a),{details:{},errors:{},form:new Form({first_name:"",last_name:"",birth_date:"",birth_time:"",country:"",email:""})}},mounted:function(){this.loadDetails()},methods:{loadDetails:function(){var t=this;return c(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:axios.get("/api/profile?api_token="+window.token).then((function(e){t.details=e.data,t.form.fill(e.data)}));case 1:case"end":return e.stop()}}),e)})))()},btnUpdate:function(){var t=this;return c(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.put("/api/profile/1?api_token="+window.token).then((function(e){t.$notify({group:"notification",type:"success",title:"Update Profile",text:"Chart has been updated"})})).catch((function(e){t.errors=e.response.data.errors}));case 2:case"end":return e.stop()}}),e)})))()}}},u=r(0),f=Object(u.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-7 border p-3 bg-white"},[r("h3",[t._v("Profile")]),t._v(" "),r("div",{staticClass:"row mt-4"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-10"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("table",[r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"80px"}},[t._v("First Name:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.first_name))])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"80px"}},[t._v("Last Name:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.last_name))])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"80px"}},[t._v("Email:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.email))])])])])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("table",[r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"100px"}},[t._v("Date of Birth:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.birth_date))])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"100px"}},[t._v("Time of Birth:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.birth_time))])])]),t._v(" "),r("tr",[r("td",{staticClass:"font-weight-bold",staticStyle:{width:"100px"}},[t._v("Country:")]),t._v(" "),r("td",{staticClass:"text-blue"},[r("span",[t._v(t._s(t.form.country))])])])])])])])])]),t._v(" "),r("div",{staticClass:"col-md-5  p-3 border bg-white"},[r("h3",[t._v("Edit Profile")]),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-md-10"},[r("div",{staticClass:"mt-2"},[r("label",{attrs:{for:""}},[t._v("First Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter First Name"},domProps:{value:t.form.first_name},on:{input:function(e){e.target.composing||t.$set(t.form,"first_name",e.target.value)}}}),t._v(" "),t.errors.first_name?r("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.first_name[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"mt-2"},[r("label",{attrs:{for:""}},[t._v("Last Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Last Name"},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}}),t._v(" "),t.errors.last_name?r("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.last_name[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"mt-2"},[r("label",{attrs:{for:""}},[t._v("Date of Birth:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.birth_date,expression:"form.birth_date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.form.birth_date},on:{input:function(e){e.target.composing||t.$set(t.form,"birth_date",e.target.value)}}}),t._v(" "),t.errors.birth_date?r("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.birth_date[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"mt-2"},[r("label",{attrs:{for:""}},[t._v("Date of Birth:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.birth_time,expression:"form.birth_time"}],staticClass:"form-control",attrs:{type:"time"},domProps:{value:t.form.birth_time},on:{input:function(e){e.target.composing||t.$set(t.form,"birth_time",e.target.value)}}}),t._v(" "),t.errors.birth_time?r("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.birth_time[0])}}):t._e()]),t._v(" "),r("div",{staticClass:"mt-2"},[r("label",{attrs:{for:""}},[t._v("Country:")]),t._v(" "),r("country-select",{staticClass:"form-control",attrs:{countryName:!0,country:t.form.country,topCountry:"US"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}}),t._v(" "),t.errors.country?r("span",{staticClass:"text-danger font-italic",domProps:{textContent:t._s(t.errors.country[0])}}):t._e()],1),t._v(" "),r("div",{staticClass:"mt-2 text-right"},[r("button",{staticClass:"buttonSuccess",on:{click:t.btnUpdate}},[t._v("Update")])])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-2 text-center"},[e("div",{staticClass:"image"},[e("img",{staticClass:"img-circle elevation-2",attrs:{src:"/img/user.png",width:"100px;",alt:"User Image"}})])])}],!1,null,null,null);e.default=f.exports},58:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u={};function f(){}function h(){}function d(){}var v={};v[o]=function(){return this};var m=Object.getPrototypeOf,p=m&&m(m(L([])));p&&p!==e&&r.call(p,o)&&(v=p);var _=d.prototype=f.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=_.constructor=d,d.constructor=h,h.displayName=s(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(_),s(_,a,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},7:function(t,e,r){t.exports=r(58)}}]);