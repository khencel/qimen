(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{107:function(t,e,s){"use strict";s.r(e);var n={data:function(){return{users:{}}},mounted:function(){this.userList()},methods:{userList:function(){var t=this;axios.get("/api/user").then((function(e){t.users=e.data}))}}},a=s(0),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.users,(function(e,n){return s("tr",{key:n},[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Email")])])}],!1,null,null,null);e.default=i.exports}}]);