(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{130:function(t,s,e){"use strict";e.r(s);var i={props:["type"],data:function(){return{users:{}}},mounted:function(){this.index()},methods:{index:function(){"qimen"==this.type&&this.userList(),"forecast"==this.type&&this.forecastingUser()},userList:function(){var t=this;axios.get("/api/user").then((function(s){t.users=s.data}))},forecastingUser:function(){var t=this;axios.get(window.forecast+"/api/user/index?api_token="+window.forecastToken).then((function(s){t.users=s.data.data}))},changeStatus:function(t){var s=this;"forecast"==this.type&&axios.get(window.forecast+"/api/user/update?id="+t+"&api_token="+window.forecastToken).then((function(t){s.index(),s.$notify({group:"notification",type:200==t.data.code?"success":error,title:"Update Status",text:t.data.message})}))}}},a=e(0),n=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("notifications",{attrs:{group:"notification",position:"bottom right"}}),t._v(" "),e("div",{staticClass:"card"},[e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.users,(function(s,i){return e("tr",{directives:[{name:"show",rawName:"v-show",value:"api"!=s.first_name,expression:"user.first_name  != 'api'"}],key:i},[e("td",{staticClass:"text-capitalize"},[t._v(t._s(s.first_name))]),t._v(" "),e("td",{staticClass:"text-capitalize"},[t._v(t._s(s.last_name))]),t._v(" "),e("td",[t._v(t._s(s.email))]),t._v(" "),e("td",[e("span",{class:null==s.is_subscribed?"badge badge-primary p-1":"badge badge-danger p-1",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.changeStatus(s.id)}}},[t._v("\n                           "+t._s(null==s.is_subscribed?"Subscribe Now":"Unsubscribe")+"\n                       ")])])])})),0)])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("th",[this._v("First Name")]),this._v(" "),s("th",[this._v("Last Name")]),this._v(" "),s("th",[this._v("Email")]),this._v(" "),s("th",[this._v("Action")])])}],!1,null,null,null);s.default=n.exports}}]);