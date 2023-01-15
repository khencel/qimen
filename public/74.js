(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {}
    };
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get('/api/tong-shu/time-star/index').then(function (res) {
        _this.data = res.data;
        console.log(res.data);
      });
    },
    showTimeStar: function showTimeStar(id) {
      window.location = "/tong-shu/timestar/update?id=" + id;
    }
  },
  mounted: function mounted() {
    this.index();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.data, function(item, index) {
                  return _c(
                    "tr",
                    {
                      key: index,
                      on: {
                        click: function($event) {
                          return _vm.showTimeStar(item.id)
                        }
                      }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(item.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.value_1))])
                    ]
                  )
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Data")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/tongshu/TimeStar.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/tongshu/TimeStar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeStar.vue?vue&type=template&id=ed71efe6& */ "./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6&");
/* harmony import */ var _TimeStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeStar.vue?vue&type=script&lang=js& */ "./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TimeStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tongshu/TimeStar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TimeStar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tongshu/TimeStar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeStar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TimeStar.vue?vue&type=template&id=ed71efe6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tongshu/TimeStar.vue?vue&type=template&id=ed71efe6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeStar_vue_vue_type_template_id_ed71efe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);