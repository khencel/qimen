(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{168:function(t,n,e){"use strict";e.r(n);var i=e(1),s=e.n(i),a=e(5),r=e.n(a);function o(t,n,e,i,s,a,r){try{var o=t[a](r),u=o.value}catch(t){return void e(t)}o.done?n(u):Promise.resolve(u).then(i,s)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(i,s){var a=t.apply(n,e);function r(t){o(a,i,s,r,u,"next",t)}function u(t){o(a,i,s,r,u,"throw",t)}r(void 0)}))}}Vue.component("pagination",e(8));var c={data:function(){return{users:{}}},methods:{index:function(){var t=arguments,n=this;return u(s.a.mark((function e(){var i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,axios.get(window.besteverLive+"/api/user/index?page="+i);case 3:a=e.sent,n.users=a.data;case 5:case"end":return e.stop()}}),e)})))()},changeStatus:function(t,n){var e=this,i="";i=1==t?"Are you sure? You want to DEACTIVATE this user":"Are you sure? You want to ACTIVATE this user",r.a.fire({icon:"question",title:"Oops...",text:i,showCancelButton:!0}).then((function(i){i.isConfirmed&&(t=1==t?0:1,axios.post(window.besteverLive+"/api/user/changeStatus",{status:t,user_id:n}).then((function(t){e.index()})))}))}},mounted:function(){this.index()}},v=e(0),h=Object(v.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-100 mt-1"},[e("pagination",{attrs:{limit:3,align:"right",size:"small",data:t.users},on:{"pagination-change-page":t.index}})],1),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.users.data,(function(n,i){return e("tr",{key:i},[e("td",[t._v(t._s(n.first_name)+" "+t._s(n.last_name))]),t._v(" "),e("td",[t._v(t._s(n.email))]),t._v(" "),e("td",[t._v(t._s(n.country))]),t._v(" "),e("td",[e("button",{class:1==n.is_active?"btn btn-primary":"btn btn-danger",on:{click:function(e){return t.changeStatus(n.is_active,n.id)}}},[t._v(t._s(1==n.is_active?"Active":"Deactivate"))])])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("th",[this._v("Name")]),this._v(" "),n("th",[this._v("Email")]),this._v(" "),n("th",[this._v("Country")]),this._v(" "),n("th",[this._v("Action")])])}],!1,null,null,null);n.default=h.exports}}]);