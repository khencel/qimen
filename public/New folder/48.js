(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{159:function(t,n,e){"use strict";e.r(n);var a=e(1),i=e.n(a);function o(t,n,e,a,i,o,s){try{var r=t[o](s),c=r.value}catch(t){return void e(t)}r.done?n(c):Promise.resolve(c).then(a,i)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(a,i){var s=t.apply(n,e);function r(t){o(s,a,i,r,c,"next",t)}function c(t){o(s,a,i,r,c,"throw",t)}r(void 0)}))}}Vue.component("pagination",e(9));var r={data:function(){return{notifications:{},num_of_new_notif:""}},methods:{index:function(){var t=arguments,n=this;return s(i.a.mark((function e(){var a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,e.next=3,axios.get(window.besteverLive+"/api/contact/index?page="+a);case 3:o=e.sent,n.notifications=o.data;case 5:case"end":return e.stop()}}),e)})))()},showNewNotif:function(){var t=this;return s(i.a.mark((function n(){var e;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,axios.get(window.besteverLive+"/api/contact/notif");case 2:e=n.sent,t.num_of_new_notif=e.data;case 4:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.index(),this.showNewNotif()}},c=e(0),u=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"w-100 mt-1"},[e("pagination",{attrs:{limit:3,align:"right",size:"small",data:t.notifications},on:{"pagination-change-page":t.index}})],1),t._v(" "),e("table",{staticClass:"table table-hover"},[e("thead",[e("th",[t._v("Name "),0!=t.num_of_new_notif?e("span",{staticClass:"badge badge-primary p-2"},[t._v(t._s(t.num_of_new_notif))]):t._e()]),t._v(" "),e("th",[t._v("Email")]),t._v(" "),e("th",[t._v("Contact No.")]),t._v(" "),e("th",[t._v("Country")]),t._v(" "),e("th",[t._v("Action")])]),t._v(" "),e("tbody",[0==Object.keys(t.notifications.data).length?e("tr",[e("td",{attrs:{colspan:"5"}},[t._v("No Message...")])]):t._l(t.notifications.data,(function(n,a){return e("tr",{key:a,class:0==n.status?"font-weight-bold":""},[e("td",{staticClass:"text-capitalize"},[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.email))]),t._v(" "),e("td",[t._v(t._s(null!=n.mobile?n.mobile:"none"))]),t._v(" "),e("td",[t._v(t._s(n.country))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-primary",attrs:{href:"/best-year/notification/show?id="+n.id+"&name="+n.name}},[t._v("View")])])])}))],2)])])}),[],!1,null,null,null);n.default=u.exports}}]);