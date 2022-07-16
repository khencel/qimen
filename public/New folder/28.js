(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_spinner_src_PulseLoader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-spinner/src/PulseLoader.vue */ "./node_modules/vue-spinner/src/PulseLoader.vue");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  components: {
    PulseLoader: vue_spinner_src_PulseLoader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      animals: {},
      year: '',
      loading: false,
      form: new Form({
        years: [],
        forecast: '',
        year_text: '',
        id: this.id
      })
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(window.besteverLive + '/api/animal/show/' + _this.id);

              case 2:
                res = _context.sent;
                _this.animals = res.data;
                _this.form.forecast = res.data.forecast_for_the_year;
                _this.form.year_text = res.data.text_for_the_year;
                res.data.year.forEach(function (element) {
                  _this.form.years.push(element.year);
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addYear: function addYear() {
      this.form.years.push(this.year);
      this.year = '';
    },
    deleteYear: function deleteYear(index) {
      this.form.years.splice(index, 1);
    },
    storeData: function storeData() {
      var _this2 = this;

      this.loading = true;
      this.form.post(window.besteverLive + '/api/animal/store').then(function (res) {
        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update Data',
          text: 'Data has been updated'
        });

        _this2.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.show();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    [
      _c("notifications", {
        attrs: { group: "notification", position: "bottom right" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.forecast,
                expression: "form.forecast"
              }
            ],
            staticClass: "form-control",
            attrs: { placeholder: "Text here...", cols: "30", rows: "10" },
            domProps: { value: _vm.form.forecast },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "forecast", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 border-left" },
          [
            _c("strong", [
              _c("label", { attrs: { for: "" } }, [
                _vm._v("Year of the " + _vm._s(_vm.animals.name))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.year,
                      expression: "year"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", placeholder: "Input year" },
                  domProps: { value: _vm.year },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.year = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success mt-2",
                    on: { click: _vm.addYear }
                  },
                  [_vm._v("Add")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.form.years, function(item, index) {
                    return _c("div", { key: index, staticClass: "col-md-4" }, [
                      _c(
                        "span",
                        { staticClass: "badge badge-primary p-2 mt-2 w-50" },
                        [_vm._v(_vm._s(item))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "badge badge-danger p-2 mt-2",
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              return _vm.deleteYear(index)
                            }
                          }
                        },
                        [_vm._v("X")]
                      )
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.year_text,
                      expression: "form.year_text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    placeholder: "Input text here...",
                    cols: "30",
                    rows: "10"
                  },
                  domProps: { value: _vm.form.year_text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "year_text", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            !_vm.loading
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-success w-25 mt-2 float-right",
                    on: { click: _vm.storeData }
                  },
                  [_vm._v("Save")]
                )
              : _c("PulseLoader", {
                  staticClass: "float-right mr-5 mt-3",
                  attrs: { loading: _vm.loading }
                })
          ],
          1
        )
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
    return _c("strong", [
      _c("label", { attrs: { for: "" } }, [
        _vm._v("Overall Forecast For The Year")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/best-ever/animal-sign/Show.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/best-ever/animal-sign/Show.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=3714ced1& */ "./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/best-ever/animal-sign/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=3714ced1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/animal-sign/Show.vue?vue&type=template&id=3714ced1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_3714ced1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);