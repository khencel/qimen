(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{127:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{modalShow:!1,price:null,terms:""}},mounted:function(){this.paypal()},methods:{payment:function(t,a){$("#paymentModal").modal("show"),this.price=t,this.terms=a},paypal:function(t){function a(a){return t.apply(this,arguments)}return a.toString=function(){return t.toString()},a}((function(t){paypal.Buttons({createOrder:function(t,a){var s=$("#finalAmount").attr("amountData");return a.order.create({purchase_units:[{amount:{value:s}}]})},onApprove:function(t,a){var s=$("#finalAmount").attr("amountData");return a.order.capture().then((function(t){axios.post("/api/subscription?api_token="+window.token,{price:s}).then((function(t){$("#paymentModal").modal("hide"),window.location="/home"}))}))}}).render("#paypal-button-container")}))}};Holder.addTheme("thumb",{bg:"#55595c",fg:"#eceeef",text:"Thumbnail"});var i=e,n=(s(86),s(0)),r=Object(n.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"card-deck mb-3 text-center"},[s("div",{staticClass:"card mb-4 shadow-sm"},[t._m(1),t._v(" "),s("div",{staticClass:"card-body text-center"},[t._m(2),t._v(" "),s("p",[t._v("\n                1 year coverage Victory Day\n            ")]),t._v(" "),s("button",{staticClass:"buttonSuccess w-100",attrs:{type:"button"},on:{click:function(a){return t.payment(3,1)}}},[t._v("Subscribe Now")])])]),t._v(" "),s("div",{staticClass:"card mb-4 shadow-sm"},[t._m(3),t._v(" "),s("div",{staticClass:"card-body text-center"},[t._m(4),t._v(" "),s("p",[t._v("\n                2 year coverage Victory Day\n            ")]),t._v(" "),s("button",{staticClass:"buttonSuccess w-100",attrs:{type:"button"},on:{click:function(a){return t.payment(6,2)}}},[t._v("Subscribe Now")])])]),t._v(" "),s("div",{staticClass:"card mb-4 shadow-sm"},[t._m(5),t._v(" "),s("div",{staticClass:"card-body text-center"},[t._m(6),t._v(" "),s("p",[t._v("\n                5 year coverage Victory Day\n            ")]),t._v(" "),s("button",{staticClass:"buttonSuccess w-100",attrs:{type:"button"},on:{click:function(a){return t.payment(10,5)}}},[t._v("Subscribe Now")])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"paymentModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(7),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:" p-2"},[s("h3",[t._v(t._s(t.terms)+" Years")])]),t._v(" "),s("div",{staticClass:"p-2"},[s("ul",[s("li",[t._v("Victory day("+t._s(t.terms)+" year/s)")]),t._v(" "),s("li",[t._v("Sample included")]),t._v(" "),s("li",[t._v("Sample included")]),t._v(" "),s("li",[t._v("Sample included")]),t._v(" "),s("li",[t._v("Sample included")])])]),t._v(" "),s("div",{staticClass:"pl-2"},[t._m(8),t._v(" "),s("span",{staticClass:"font-weight-bold"},[t._v("$")]),t._v(" "),s("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"25px"},attrs:{id:"finalAmount",amountData:t.price}},[t._v(t._s(t.price)+".00")])]),t._v(" "),s("div",{attrs:{id:"paypal-button-container"}})]),t._v(" "),t._m(9)])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[a("h1",{staticClass:"display-4"},[this._v("Pricing")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quasi asperiores! Ullam, optio consequuntur. Est praesentium, incidunt, voluptatem quod, hic accusantium sint cumque laboriosam unde debitis ducimus fugit a quaerat.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h4",{staticClass:"my-0 font-weight-normal"},[this._v("1 Year")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",[this._v("$3 "),a("small",{staticClass:"text-muted"},[this._v("/ year")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h4",{staticClass:"my-0 font-weight-normal"},[this._v("2 Years")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",[this._v("$6 "),a("small",{staticClass:"text-muted"},[this._v("/ 2 year")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h4",{staticClass:"my-0 font-weight-normal"},[this._v("5 Years")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",[this._v("$10 "),a("small",{staticClass:"text-muted"},[this._v("/ 5 year")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[this._v("Payment")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[a("strong",[this._v("Total:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,"78968303",null);a.default=r.exports},36:function(t,a,s){var e=s(87);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(5)(e,i);e.locals&&(t.exports=e.locals)},86:function(t,a,s){"use strict";s(36)},87:function(t,a,s){(a=t.exports=s(4)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap);",""]),a.push([t.i,".subcription-font[data-v-78968303]{font-family:Vampiro One,cursive;font-size:clamp(.5rem,10vw,1rem)}html[data-v-78968303]{font-size:14px}@media (min-width:768px){html[data-v-78968303]{font-size:16px}}.container[data-v-78968303]{max-width:960px}.pricing-header[data-v-78968303]{max-width:700px}.card-deck .card[data-v-78968303]{min-width:220px}",""])}}]);