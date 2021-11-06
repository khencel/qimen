(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _star_Preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../star/Preview */ "./resources/js/components/star/Preview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Preview: _star_Preview__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['id', 'attribute'],
  data: function data() {
    return {
      form: new Form({
        attribute_name: this.attribute,
        attribute: ''
      })
    };
  },
  methods: {
    addAttribute: function addAttribute() {
      var _this = this;

      this.form.put('/api/star/store/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update' + _this.attribute,
          text: _this.attribute + ' has been updated'
        });

        _this.showAttribute();
      })["catch"](function (error) {
        _this.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Input',
          text: _this.attribute + ' field is required'
        });
      });
    },
    showAttribute: function showAttribute() {
      var _this2 = this;

      this.form.put('/api/star/show/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this2.form.attribute = res.data;

        _this2.$refs.preview.showAttributes(_this2.id);
      });
    }
  },
  mounted: function mounted() {
    this.showAttribute();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row bg-white" }, [
        _c("div", { staticClass: "col-md-4 border p-2" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.attribute,
                    expression: "form.attribute"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.form.attribute },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "attribute", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 pt-1" }, [
              _c("span", {
                staticClass: "badge badge-success p-2 cursor-pointer",
                domProps: { textContent: _vm._s("UPDATE") },
                on: { click: _vm.addAttribute }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-8 border p-2" },
          [_c("Preview", { ref: "preview" })],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/star/SingleAttributes.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/star/SingleAttributes.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleAttributes.vue?vue&type=template&id=586f7ec1& */ "./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1&");
/* harmony import */ var _SingleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleAttributes.vue?vue&type=script&lang=js& */ "./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SingleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/star/SingleAttributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAttributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/SingleAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SingleAttributes.vue?vue&type=template&id=586f7ec1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/SingleAttributes.vue?vue&type=template&id=586f7ec1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleAttributes_vue_vue_type_template_id_586f7ec1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);