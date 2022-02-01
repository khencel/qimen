(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      readonly: true,
      errors: {},
      form: new Form({
        current_password: '',
        password: ''
      })
    };
  },
  mounted: function mounted() {
    console.log('change password');
  },
  methods: {
    btnSubmit: function btnSubmit() {
      var _this = this;

      this.form.post('/api/change-password?api_token=' + window.token).then(function (response) {
        _this.errors = [];
        _this.readonly = false;
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    btnChangePassword: function btnChangePassword() {
      var _this2 = this;

      this.form.post('/api/password-change?api_token=' + window.token).then(function (response) {
        _this2.errors = [];

        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update Password',
          text: 'Password has been changed'
        });
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-5" },
    [
      _c("notifications", {
        attrs: { group: "notification", position: "bottom right" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row m-0" }, [
        _c("div", { staticClass: "col-md-6 border p-3 bg-white" }, [
          _c("p", { staticClass: "font-weight-bold" }, [
            _vm._v("Current Password")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.current_password,
                expression: "form.current_password"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "password",
              autofocus: "",
              placeholder: "Enter your current password"
            },
            domProps: { value: _vm.form.current_password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "current_password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.errors.current_password
            ? _c("span", {
                staticClass: "text-danger font-italic",
                domProps: {
                  textContent: _vm._s(_vm.errors.current_password[0])
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "mt-2 float-right buttonSuccess",
              on: { click: _vm.btnSubmit }
            },
            [_vm._v("Submit")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 border p-3 bg-white" }, [
          _c("p", { staticClass: "font-weight-bold" }, [
            _vm._v("Change your password")
          ]),
          _vm._v(" "),
          _c("div", [
            _c("label", { attrs: { for: "" } }, [_vm._v("New Password")]),
            _vm._v(" "),
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
              attrs: {
                type: "password",
                readonly: _vm.readonly,
                autofocus: "",
                placeholder: "Enter your new password"
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2" }, [
            _c("label", { attrs: { for: "" } }, [
              _vm._v("Confirm New Password")
            ]),
            _vm._v(" "),
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
                type: "password",
                readonly: _vm.readonly,
                autofocus: "",
                placeholder: "Enter your new password"
              },
              domProps: { value: _vm.form.password_confirmation },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.form,
                    "password_confirmation",
                    $event.target.value
                  )
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2 text-right" }, [
            _c(
              "button",
              {
                staticClass: "buttonSuccess",
                on: { click: _vm.btnChangePassword }
              },
              [_vm._v("Change Password")]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/setting/ChangePassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/setting/ChangePassword.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=3af6bf35& */ "./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/setting/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=3af6bf35& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/ChangePassword.vue?vue&type=template&id=3af6bf35&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_3af6bf35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);