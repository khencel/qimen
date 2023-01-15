(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifications: {},
      num_of_new_notif: ''
    };
  },
  methods: {
    index: function index() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return axios.get(window.besteverLive + '/api/contact/index?page=' + page);

              case 3:
                res = _context.sent;
                _this.notifications = res.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showNewNotif: function showNewNotif() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(window.besteverLive + '/api/contact/notif');

              case 2:
                res = _context2.sent;
                _this2.num_of_new_notif = res.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    this.index();
    this.showNewNotif();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "w-100 mt-1" },
      [
        _c("pagination", {
          attrs: {
            limit: 3,
            align: "right",
            size: "small",
            data: _vm.notifications
          },
          on: { "pagination-change-page": _vm.index }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover" }, [
      _c("thead", [
        _c("th", [
          _vm._v("Name "),
          _vm.num_of_new_notif != 0
            ? _c("span", { staticClass: "badge badge-primary p-2" }, [
                _vm._v(_vm._s(_vm.num_of_new_notif))
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Contact No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ]),
      _vm._v(" "),
      _c(
        "tbody",
        [
          Object.keys(_vm.notifications.data).length == 0
            ? _c("tr", [
                _c("td", { attrs: { colspan: "5" } }, [_vm._v("No Message...")])
              ])
            : _vm._l(_vm.notifications.data, function(item, index) {
                return _c(
                  "tr",
                  {
                    key: index,
                    class: item.status == 0 ? "font-weight-bold" : ""
                  },
                  [
                    _c("td", { staticClass: "text-capitalize" }, [
                      _vm._v(_vm._s(item.name))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.email))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(item.mobile != null ? item.mobile : "none"))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.country))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: {
                            href:
                              "/best-year/notification/show?id=" +
                              item.id +
                              "&name=" +
                              item.name
                          }
                        },
                        [_vm._v("View")]
                      )
                    ])
                  ]
                )
              })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/best-ever/notification/Index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/best-ever/notification/Index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=f8725dfe& */ "./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/best-ever/notification/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/notification/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=f8725dfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/best-ever/notification/Index.vue?vue&type=template&id=f8725dfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_f8725dfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);