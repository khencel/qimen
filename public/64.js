(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      hours: ["11 am", "11 pm", "12:59 am", "12:59 pm", "1 am", "1 pm", "2:59 am", "2:59 pm", "3 am", "3 pm", "4:59 am", "4:59 pm", "5 am", "5 pm", "6:59 am", "6:59 pm", "7 am", "7 pm", "8:59 am", "8:59 pm", "9 am", "9 pm", "10:59 am", "10:59 pm"],
      englishes: {},
      comboOne: {},
      editMode: false,
      selected_id: '',
      form: new Form({
        start_hour: '',
        end_hour: "",
        english_id: '',
        star_id: this.id,
        description: '',
        rating: '',
        type: "one"
      })
    };
  },
  methods: {
    english: function english() {
      var _this = this;

      axios.post('/api/star/combo/english?api_token=' + window.token, {
        star_id: this.id
      }).then(function (res) {
        _this.englishes = res.data;
      });
    },
    addComboOne: function addComboOne() {
      var _this2 = this;

      this.form.post('/api/star/combo/store?api_token=' + window.token).then(function (res) {
        _this2.$notify({
          group: 'notification',
          type: 'success',
          title: 'Add ' + _this2.attribute,
          text: _this2.attribute + ' has been Added'
        });

        _this2.form.reset();

        _this2.show();
      })["catch"](function (erre) {
        _this2.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Data',
          text: 'All fields are required'
        });
      });
    },
    show: function show() {
      var _this3 = this;

      axios.get('/api/star/combo/show/' + this.form.type + '/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this3.comboOne = res.data;
      });
    },
    edit: function edit(id) {
      var _this4 = this;

      this.editModeFormation(id);
      axios.post('/api/star/combo/edit?api_token=' + window.token, {
        selected_id: id,
        id: this.id,
        type: this.form.type
      }).then(function (res) {
        _this4.selected_id = id;
        _this4.form.english_id = res.data.comboOne.english_id;
        _this4.form.start_hour = res.data.comboOne.start_hour;
        _this4.form.end_hour = res.data.comboOne.end_hour;
        _this4.form.description = res.data.comboOne.description;
        _this4.form.rating = res.data.comboOne.rating;
        _this4.englishes = res.data.english;
      });
    },
    update: function update() {
      var _this5 = this;

      this.form.put('/api/star/combo/update/' + this.selected_id + '?api_token=' + window.token).then(function (res) {
        _this5.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update ' + _this5.attribute,
          text: _this5.attribute + ' has been Updated'
        });

        _this5.form.reset();

        _this5.show();

        _this5.editMode = false;
      });
    },
    deleteItem: function deleteItem(id) {
      var _this6 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this6.form.get('/api/star/combo/delete/' + _this6.form.type + '/' + id + '?api_token=' + window.token).then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this6.show();
          });
        }
      });
    },
    editModeFormation: function editModeFormation(id) {
      this.editMode = true;
      $("html, body").animate({
        scrollTop: $(document).height()
      }, "slow");
      $('#combo').focus();
    },
    cancelTransaction: function cancelTransaction() {
      this.form.reset();
      this.editMode = false;
    }
  },
  mounted: function mounted() {
    this.english();
    this.show();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7& ***!
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
    [
      _c("notifications", {
        attrs: { group: "notification", position: "bottom right" }
      }),
      _vm._v(" "),
      _c("table", { staticClass: "table table-hover bg-white" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.comboOne, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticStyle: { width: "20%" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.english.name) +
                      "\n                        "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.start_hour) +
                      "-" +
                      _vm._s(item.end_hour) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "40%" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.description) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "15%" } }, [
                  _c("img", {
                    staticStyle: { width: "40px" },
                    attrs: {
                      src: "/img/rating/" + item.rating + ".png",
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "span",
                    {
                      staticClass: "badge badge-primary p-2 cursor-pointer",
                      staticStyle: { width: "25%" },
                      on: {
                        click: function($event) {
                          return _vm.edit(item.id)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "badge badge-danger p-2 cursor-pointer",
                      staticStyle: { width: "25%" },
                      on: {
                        click: function($event) {
                          return _vm.deleteItem(item.id)
                        }
                      }
                    },
                    [_vm._v("X")]
                  )
                ])
              ])
            }),
            _vm._v(" "),
            _c("tr", [
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.english_id,
                        expression: "form.english_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "combo" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "english_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", selected: "", hidden: "" } },
                      [_vm._v("Select English")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.englishes, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item.id } },
                        [_vm._v(_vm._s(item.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.start_hour,
                        expression: "form.start_hour"
                      }
                    ],
                    staticClass: "form-control mt-1",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "start_hour",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", hidden: "", selected: "" } },
                      [_vm._v("Start Hour")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.hours, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item } },
                        [_vm._v(_vm._s(item))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.end_hour,
                        expression: "form.end_hour"
                      }
                    ],
                    staticClass: "form-control mt-1",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "end_hour",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", hidden: "", selected: "" } },
                      [_vm._v("End Hour")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.hours, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item } },
                        [_vm._v(_vm._s(item))]
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.description,
                      expression: "form.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Description", cols: "30", rows: "10" },
                  domProps: { value: _vm.form.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.rating,
                        expression: "form.rating"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "rating",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      { attrs: { value: "", hidden: "", selected: "" } },
                      [_vm._v("Rating")]
                    ),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Inauspicious")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Moderate")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Auspicious")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                !_vm.editMode
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "badge button-success p-2 cursor-pointer w-50 mb-1",
                        on: { click: _vm.addComboOne }
                      },
                      [_vm._v("Add")]
                    )
                  : _c(
                      "span",
                      {
                        staticClass:
                          "badge badge-warning p-2 cursor-pointer w-50 mb-1",
                        on: { click: _vm.update }
                      },
                      [_vm._v("Update")]
                    ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "badge badge-danger p-2 cursor-pointer w-50",
                    on: { click: _vm.cancelTransaction }
                  },
                  [_vm._v("Cancel")]
                )
              ])
            ])
          ],
          2
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
    return _c("thead", { staticClass: "thead-dark" }, [
      _c("th", [_vm._v("Hour")]),
      _vm._v(" "),
      _c("th", [_vm._v("Description")]),
      _vm._v(" "),
      _c("th", [_vm._v("Rating")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/star/StarCombo1.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/star/StarCombo1.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarCombo1.vue?vue&type=template&id=579998d7& */ "./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7&");
/* harmony import */ var _StarCombo1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarCombo1.vue?vue&type=script&lang=js& */ "./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StarCombo1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/star/StarCombo1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StarCombo1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StarCombo1.vue?vue&type=template&id=579998d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo1.vue?vue&type=template&id=579998d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo1_vue_vue_type_template_id_579998d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);