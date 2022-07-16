(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalShow: false,
      price: null,
      terms: ''
    };
  },
  mounted: function mounted() {
    this.paypal();
  },
  methods: {
    payment: function payment(price, term) {
      $('#paymentModal').modal('show');
      this.price = price;
      this.terms = term;
    },
    paypal: function (_paypal) {
      function paypal(_x) {
        return _paypal.apply(this, arguments);
      }

      paypal.toString = function () {
        return _paypal.toString();
      };

      return paypal;
    }(function (price) {
      paypal.Buttons({
        createOrder: function createOrder(data, actions) {
          var payableAmount = $('#finalAmount').attr('amountData'); // This function sets up the details of the transaction, including the amount and line item details.

          return actions.order.create({
            purchase_units: [{
              amount: {
                value: payableAmount
              }
            }]
          });
        },
        onApprove: function onApprove(data, actions) {
          var payableAmount = $('#finalAmount').attr('amountData'); // This function captures the funds from the transaction.

          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            // alert('Transaction completed by ' + details.payer.name.given_name);
            axios.post('/api/subscription?api_token=' + window.token, {
              price: payableAmount
            }).then(function (response) {
              $('#paymentModal').modal('hide');
              window.location = "/home";
            });
          });
        }
      }).render('#paypal-button-container'); //This function displays Smart Payment Buttons on your web page.
    })
  }
});
Holder.addTheme('thumb', {
  bg: '#55595c',
  fg: '#eceeef',
  text: 'Thumbnail'
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap);", ""]);

// module
exports.push([module.i, "\n.subcription-font[data-v-64c8f968]{\n    font-family: 'Vampiro One', cursive;\n    font-size: clamp(0.5rem, 10vw, 1rem);\n}\nhtml[data-v-64c8f968] {\nfont-size: 14px;\n}\n@media (min-width: 768px) {\nhtml[data-v-64c8f968] {\n    font-size: 16px;\n}\n}\n.container[data-v-64c8f968] {\nmax-width: 960px;\n}\n.pricing-header[data-v-64c8f968] {\nmax-width: 700px;\n}\n.card-deck .card[data-v-64c8f968] {\nmin-width: 220px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "card-deck mb-3 text-center" }, [
        _c("div", { staticClass: "card mb-4 shadow-sm" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body text-center" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                1 year coverage Victory Day\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "buttonSuccess w-100",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.payment(3, 1)
                  }
                }
              },
              [_vm._v("Subscribe Now")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-4 shadow-sm" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "card-body text-center" }, [
            _vm._m(4),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                2 year coverage Victory Day\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "buttonSuccess w-100",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.payment(6, 2)
                  }
                }
              },
              [_vm._v("Subscribe Now")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card mb-4 shadow-sm" }, [
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "card-body text-center" }, [
            _vm._m(6),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                5 year coverage Victory Day\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "buttonSuccess w-100",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.payment(10, 5)
                  }
                }
              },
              [_vm._v("Subscribe Now")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "paymentModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: " p-2" }, [
                  _c("h3", [_vm._v(_vm._s(_vm.terms) + " Years")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "p-2" }, [
                  _c("ul", [
                    _c("li", [
                      _vm._v("Victory day(" + _vm._s(_vm.terms) + " year/s)")
                    ]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Sample included")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Sample included")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Sample included")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Sample included")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pl-2" }, [
                  _vm._m(8),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("$")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "font-weight-bold",
                      staticStyle: { "font-size": "25px" },
                      attrs: { id: "finalAmount", amountData: _vm.price }
                    },
                    [_vm._v(_vm._s(_vm.price) + ".00")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { attrs: { id: "paypal-button-container" } })
              ]),
              _vm._v(" "),
              _vm._m(9)
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
      },
      [
        _c("h1", { staticClass: "display-4" }, [_vm._v("Pricing")]),
        _vm._v(" "),
        _c("p", { staticClass: "lead" }, [
          _vm._v(
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quasi asperiores! Ullam, optio consequuntur. Est praesentium, incidunt, voluptatem quod, hic accusantium sint cumque laboriosam unde debitis ducimus fugit a quaerat."
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("1 Year")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _vm._v("$3 "),
      _c("small", { staticClass: "text-muted" }, [_vm._v("/ year")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("2 Years")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _vm._v("$6 "),
      _c("small", { staticClass: "text-muted" }, [_vm._v("/ 2 year")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "my-0 font-weight-normal" }, [_vm._v("5 Years")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [
      _vm._v("$10 "),
      _c("small", { staticClass: "text-muted" }, [_vm._v("/ 5 year")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Payment")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("Total:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/landing-page/Subscription.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/landing-page/Subscription.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription.vue?vue&type=template&id=64c8f968&scoped=true& */ "./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true&");
/* harmony import */ var _Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription.vue?vue&type=script&lang=js& */ "./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& */ "./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64c8f968",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/landing-page/Subscription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=style&index=0&id=64c8f968&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_style_index_0_id_64c8f968_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Subscription.vue?vue&type=template&id=64c8f968&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/Subscription.vue?vue&type=template&id=64c8f968&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscription_vue_vue_type_template_id_64c8f968_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);