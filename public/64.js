(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/Profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/Profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-country-region-select */ "./node_modules/vue-country-region-select/dist/vueCountryRegionSelect.umd.min.js");
/* harmony import */ var vue_country_region_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_country_region_select__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    Vue.use(vue_country_region_select__WEBPACK_IMPORTED_MODULE_1___default.a);
    return {
      details: {},
      errors: {},
      form: new Form({
        first_name: '',
        last_name: '',
        birth_date: '',
        birth_time: '',
        country: '',
        email: ''
      })
    };
  },
  mounted: function mounted() {
    this.loadDetails();
  },
  methods: {
    loadDetails: function loadDetails() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/profile?api_token=' + window.token).then(function (response) {
                  _this.details = response.data;

                  _this.form.fill(response.data);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    btnUpdate: function btnUpdate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.form.put('/api/profile/1?api_token=' + window.token).then(function (response) {
                  _this2.$notify({
                    group: 'notification',
                    type: 'success',
                    title: 'Update Profile',
                    text: 'Chart has been updated'
                  });
                })["catch"](function (error) {
                  _this2.errors = error.response.data.errors;
                });

                ;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {},
    [
      _c("notifications", {
        attrs: { group: "notification", position: "bottom right" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-7 border p-3 bg-white" }, [
          _c("h3", [_vm._v("Profile")]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-10" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", [
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "80px" }
                        },
                        [_vm._v("First Name:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.first_name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "80px" }
                        },
                        [_vm._v("Last Name:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.last_name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "80px" }
                        },
                        [_vm._v("Email:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.email))])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", [
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "100px" }
                        },
                        [_vm._v("Date of Birth:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.birth_date))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "100px" }
                        },
                        [_vm._v("Time of Birth:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.birth_time))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "font-weight-bold",
                          staticStyle: { width: "100px" }
                        },
                        [_vm._v("Country:")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-blue" }, [
                        _c("span", [_vm._v(_vm._s(_vm.form.country))])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-5  p-3 border bg-white" }, [
          _c("h3", [_vm._v("Edit Profile")]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-4" }, [
            _c("div", { staticClass: "col-md-10" }, [
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("First Name:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.first_name,
                      expression: "form.first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter First Name" },
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
                      domProps: {
                        textContent: _vm._s(_vm.errors.first_name[0])
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Last Name:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.last_name,
                      expression: "form.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Enter Last Name" },
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Date of Birth:")]),
                _vm._v(" "),
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
                      domProps: {
                        textContent: _vm._s(_vm.errors.birth_date[0])
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Date of Birth:")]),
                _vm._v(" "),
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
                      domProps: {
                        textContent: _vm._s(_vm.errors.birth_time[0])
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Country:")]),
                  _vm._v(" "),
                  _c("country-select", {
                    staticClass: "form-control",
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
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2 text-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "buttonSuccess",
                    on: { click: _vm.btnUpdate }
                  },
                  [_vm._v("Update")]
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 text-center" }, [
      _c("div", { staticClass: "image" }, [
        _c("img", {
          staticClass: "img-circle elevation-2",
          attrs: { src: "/img/user.png", width: "100px;", alt: "User Image" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/setting/Profile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/setting/Profile.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=60ea2762& */ "./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/setting/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/setting/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/setting/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/setting/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=60ea2762& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/Profile.vue?vue&type=template&id=60ea2762&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_60ea2762___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);