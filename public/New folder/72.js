(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trigram_PreviewTrigram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trigram/PreviewTrigram */ "./resources/js/components/trigram/PreviewTrigram.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Preview: _trigram_PreviewTrigram__WEBPACK_IMPORTED_MODULE_0__["default"],
    PulseLoader: vue_spinner_src_PulseLoader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['id'],
  data: function data() {
    return {
      loading: false,
      form: new Form({
        attributes_name: "number",
        number: ""
      })
    };
  },
  methods: {
    storeNumber: function storeNumber() {
      var _this = this;

      this.loading = true;
      this.form.put('/api/trigram/store/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this.loading = false;

        _this.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update Number',
          text: 'Number has been updated'
        });

        _this.$refs.preview.showAttributes(_this.id);
      });
    },
    showNumber: function showNumber() {
      var _this2 = this;

      axios.get('/api/trigram/show/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this2.form.number = res.data.number;

        _this2.$refs.preview.showAttributes(_this2.id);
      });
    }
  },
  mounted: function mounted() {
    this.showNumber();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
                    value: _vm.form.number,
                    expression: "form.number"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "number" },
                domProps: { value: _vm.form.number },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "number", $event.target.value)
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
                  staticClass: "badge badge-success p-2 cursor-pointer",
                  domProps: { textContent: _vm._s("UPDATE") },
                  on: { click: _vm.storeNumber }
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

/***/ "./resources/js/components/trigram/NumberList.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/trigram/NumberList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberList.vue?vue&type=template&id=2a5710df& */ "./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df&");
/* harmony import */ var _NumberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NumberList.vue?vue&type=script&lang=js& */ "./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NumberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/trigram/NumberList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trigram/NumberList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NumberList.vue?vue&type=template&id=2a5710df& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trigram/NumberList.vue?vue&type=template&id=2a5710df&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NumberList_vue_vue_type_template_id_2a5710df___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);