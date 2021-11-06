(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Registration.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-country-region-select */ "./node_modules/vue-country-region-select/dist/vueCountryRegionSelect.umd.min.js");
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_country_region_select__WEBPACK_IMPORTED_MODULE_0__);
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
    Vue.use(vue_country_region_select__WEBPACK_IMPORTED_MODULE_0___default.a);
    return {
      errors: {},
      loading: false,
      size: '22px',
      form: new Form({
        first_name: '',
        last_name: '',
        birth_date: '',
        birth_time: '',
        email: '',
        country: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  mounted: function mounted() {},
  methods: {
    btnRegister: function btnRegister() {
      var _this = this;

      this.loading = true;
      this.form.post('/api/register').then(function (response) {
        window.location = "/login";
      })["catch"](function (error) {
        _this.loading = false;
        _this.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-pulse1{\n    background-color: #B4E253 !important;\n}\n.v-pulse1{\n    background-color: #459623 !important;\n}\n.v-pulse1{\n    background-color: #F76E1E !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "name" }
        },
        [_vm._v("First Name")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.first_name,
              expression: "form.first_name"
            }
          ],
          staticClass: "form-control text-capitalize",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: {
            type: "text",
            required: "",
            autocomplete: "first_name",
            autofocus: "",
            placeholder: "Enter First Name"
          },
          domProps: { value: _vm.form.first_name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "first_name", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.first_name
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.first_name[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "name" }
        },
        [_vm._v("Last Name")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.last_name,
              expression: "form.last_name"
            }
          ],
          staticClass: "form-control text-capitalize",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: {
            type: "text",
            required: "",
            autocomplete: "last_name",
            autofocus: "",
            placeholder: "Enter Last Name"
          },
          domProps: { value: _vm.form.last_name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "last_name", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.last_name
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.last_name[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "name" }
        },
        [_vm._v("Date of Birth")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.birth_date,
              expression: "form.birth_date"
            }
          ],
          staticClass: "form-control",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: { type: "date" },
          domProps: { value: _vm.form.birth_date },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "birth_date", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.birth_date
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.birth_date[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "name" }
        },
        [_vm._v("Time of Birth")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.birth_time,
              expression: "form.birth_time"
            }
          ],
          staticClass: "form-control",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: { type: "time" },
          domProps: { value: _vm.form.birth_time },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "birth_time", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.birth_time
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.birth_time[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "email" }
        },
        [_vm._v("E-Mail Address")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.email,
              expression: "form.email"
            }
          ],
          staticClass: "form-control",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: {
            id: "email",
            type: "email",
            required: "",
            autocomplete: "email",
            placeholder: "Enter Email Address"
          },
          domProps: { value: _vm.form.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "email", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.email
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.email[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "email" }
        },
        [_vm._v("Country")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("country-select", {
            staticClass: "form-control",
            staticStyle: { "background-color": "#F3F3F3" },
            attrs: {
              countryName: true,
              country: _vm.form.country,
              topCountry: "US"
            },
            model: {
              value: _vm.form.country,
              callback: function($$v) {
                _vm.$set(_vm.form, "country", $$v)
              },
              expression: "form.country"
            }
          }),
          _vm._v(" "),
          _vm.errors.country
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: { textContent: _vm._s(_vm.errors.country[0]) }
              })
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "password" }
        },
        [_vm._v("Password")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.password,
              expression: "form.password"
            }
          ],
          staticClass: "form-control",
          staticStyle: { "background-color": "#F3F3F3" },
          attrs: {
            id: "password",
            placeholder: "Password",
            type: "password",
            required: "",
            autocomplete: "new-password"
          },
          domProps: { value: _vm.form.password },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "password", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _vm.errors.password
          ? _c("span", {
              staticClass: "text-danger font-italic",
              domProps: { textContent: _vm._s(_vm.errors.password[0]) }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        {
          staticClass: "col-md-4 col-form-label text-md-right",
          attrs: { for: "password-confirm" }
        },
        [_vm._v("Confirm Password")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.form.password_confirmation,
              expression: "form.password_confirmation"
            }
          ],
          staticClass: "form-control",
          attrs: {
            id: "password-confirm",
            type: "password",
            required: "",
            autocomplete: "new-password"
          },
          domProps: { value: _vm.form.password_confirmation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.form, "password_confirmation", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("small", [
          _vm._v(
            "Password must be at least 8 characters long, contain a number and an uppercase letter"
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-group row mb-0" }, [
      _c(
        "div",
        { staticClass: "col-md-6 offset-md-4" },
        [
          _c("pulse-loader", {
            staticClass: "float-right",
            attrs: { loading: _vm.loading, size: _vm.size }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading == false,
            expression: "loading == false"
          }
        ],
        staticClass: "form-group row mb-0"
      },
      [
        _c("div", { staticClass: "col-md-6 offset-md-4" }, [
          _c(
            "button",
            {
              staticClass: "buttonSuccess btn-block text-white",
              on: { click: _vm.btnRegister }
            },
            [_vm._v("\n                Register\n            ")]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/Registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/user/Registration.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=d3eda93c& */ "./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/user/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/Registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/Registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=d3eda93c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/Registration.vue?vue&type=template&id=d3eda93c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_d3eda93c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);