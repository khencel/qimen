(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _door_PreviewStem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../door/PreviewStem */ "./resources/js/components/door/PreviewStem.vue");
/* harmony import */ var vue_spinner_src_PulseLoader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-spinner/src/PulseLoader.vue */ "./node_modules/vue-spinner/src/PulseLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Preview: _door_PreviewStem__WEBPACK_IMPORTED_MODULE_0__["default"],
    PulseLoader: vue_spinner_src_PulseLoader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['id', 'attribute'],
  data: function data() {
    return {
      loading: false,
      attributes: {},
      form: new Form({
        attribute_name: this.attribute,
        addAttribute: ""
      })
    };
  },
  methods: {
    addAttributes: function addAttributes() {
      var _this = this;

      this.loading = true;
      this.form.put('/api/door/store/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this.loading = false;

        _this.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update ' + _this.attribute,
          text: _this.attribute + ' has been updated'
        });

        _this.showAttributes();

        _this.form.attribute = "";
      })["catch"](function (error) {
        _this.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Input',
          text: _this.attribute + ' field is required'
        });
      });
    },
    deleteAttributes: function deleteAttributes(id) {
      var _this2 = this;

      axios.post('/api/door/delete/attributes?api_token=' + window.token, {
        attribute_name: this.form.attribute_name,
        id: id
      }).then(function (res) {
        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update ' + _this2.attribute,
          text: _this2.attribute + ' has been deleted'
        });

        _this2.showAttributes();
      });
    },
    showAttributes: function showAttributes() {
      var _this3 = this;

      this.form.put('/api/door/show/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this3.attributes = res.data;

        _this3.$refs.preview.showAttributes(_this3.id);
      });
    }
  },
  mounted: function mounted() {
    this.showAttributes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "col-md-4 border p-2" },
          [
            _vm._l(_vm.attributes, function(attribute) {
              return _c("div", { key: attribute.id, staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(attribute.value) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4 pt-1" }, [
                  _c("span", {
                    staticClass:
                      "badge badge-danger p-2 cursor-pointer form-control",
                    domProps: { textContent: _vm._s("-") },
                    on: {
                      click: function($event) {
                        return _vm.deleteAttributes(attribute.id)
                      }
                    }
                  })
                ])
              ])
            }),
            _vm._v(" "),
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
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "!loading"
                    }
                  ],
                  staticClass: "col-4 pt-1"
                },
                [
                  _c("span", {
                    staticClass:
                      "badge badge-success p-2 cursor-pointer form-control",
                    domProps: { textContent: _vm._s("+") },
                    on: { click: _vm.addAttributes }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ],
                  staticClass: "col-4 pt-1"
                },
                [_c("PulseLoader", { attrs: { loading: _vm.loading } })],
                1
              )
            ])
          ],
          2
        ),
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

/***/ "./resources/js/components/door/MultipleAttributes.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/door/MultipleAttributes.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultipleAttributes.vue?vue&type=template&id=5ce52b2d& */ "./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d&");
/* harmony import */ var _MultipleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultipleAttributes.vue?vue&type=script&lang=js& */ "./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MultipleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/door/MultipleAttributes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleAttributes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/MultipleAttributes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAttributes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MultipleAttributes.vue?vue&type=template&id=5ce52b2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/MultipleAttributes.vue?vue&type=template&id=5ce52b2d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultipleAttributes_vue_vue_type_template_id_5ce52b2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);