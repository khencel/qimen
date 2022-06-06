(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js& ***!
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    return {
      doors: {},
      hexagrams: {},
      loading: true,
      comboTwo: {},
      editMode: false,
      selected_id: '',
      form: new Form({
        door_id: '',
        hexagram: '',
        star_id: this.id,
        description: '',
        rating: '',
        type: "two"
      })
    };
  },
  methods: {
    door: function door() {
      var _this = this;

      axios.post('/api/star/combo/door?api_token=' + window.token, {
        star_id: this.id
      }).then(function (res) {
        _this.doors = res.data;
      });
    },
    showHexagram: function showHexagram() {
      var _this2 = this;

      axios.get('https://yijing.jennelcheng.com/api/hexagram/list?api_token=1TLxV5nRi60rNhwcaQR5Z4WvXIGNbgu5aSkphU4PvYIrKtg726JSdBu9rUrv').then(function (res) {
        _this2.hexagrams = res.data;
        _this2.loading = false;
      });
    },
    addComboTwo: function addComboTwo() {
      var _this3 = this;

      this.form.post('/api/star/combo/store?api_token=' + window.token).then(function (res) {
        _this3.$notify({
          group: 'notification',
          type: 'success',
          title: 'Add ' + _this3.attribute,
          text: _this3.attribute + ' has been Added'
        });

        _this3.form.reset();

        _this3.show();
      })["catch"](function (erre) {
        _this3.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Data',
          text: 'All fields are required'
        });
      });
    },
    show: function show() {
      var _this4 = this;

      axios.get('/api/star/combo/show/' + this.form.type + '/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this4.comboTwo = res.data;
      });
    },
    edit: function edit(id) {
      var _this5 = this;

      this.editModeFormation(id);
      axios.post('/api/star/combo/edit?api_token=' + window.token, {
        selected_id: id,
        id: this.id,
        type: this.form.type
      }).then(function (res) {
        _this5.selected_id = id;
        _this5.form.door_id = res.data.comboTwo.door_id;
        _this5.form.hexagram = res.data.comboTwo.hexagram;
        _this5.form.description = res.data.comboTwo.description;
        _this5.form.rating = res.data.comboTwo.rating;
        _this5.doors = res.data.door;
      });
    },
    update: function update() {
      var _this6 = this;

      this.form.put('/api/star/combo/update/' + this.selected_id + '?api_token=' + window.token).then(function (res) {
        _this6.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update ' + _this6.attribute,
          text: _this6.attribute + ' has been Updated'
        });

        _this6.form.reset();

        _this6.show();

        _this6.editMode = false;
      });
    },
    deleteItem: function deleteItem(id) {
      var _this7 = this;

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
          _this7.form.get('/api/star/combo/delete/' + _this7.form.type + '/' + id + '?api_token=' + window.token).then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this7.show();
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
    this.door();
    this.showHexagram();
    this.show();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058& ***!
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
            _vm._l(_vm.comboTwo, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", { staticStyle: { width: "10%" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.door.name) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.hexagram) +
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
            _c(
              "tr",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ]
              },
              [
                _c(
                  "td",
                  [_c("pulse-loader", { attrs: { loading: _vm.loading } })],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "tr",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ]
              },
              [
                _c("td", [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.door_id,
                          expression: "form.door_id"
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
                            "door_id",
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
                        [_vm._v("Select Door")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.doors, function(item, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: item.id } },
                          [_vm._v(_vm._s(item.name))]
                        )
                      })
                    ],
                    2
                  )
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
                          value: _vm.form.hexagram,
                          expression: "form.hexagram"
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
                            "hexagram",
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
                        [_vm._v("Select Gua")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.hexagrams, function(item, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: item.name } },
                          [_vm._v(_vm._s(item.name))]
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
                    attrs: {
                      placeholder: "Description",
                      cols: "30",
                      rows: "10"
                    },
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
                          on: { click: _vm.addComboTwo }
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
              ]
            )
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
      _c("th", [_vm._v("Door")]),
      _vm._v(" "),
      _c("th", [_vm._v("Gua")]),
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

/***/ "./resources/js/components/star/StarCombo2.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/star/StarCombo2.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StarCombo2.vue?vue&type=template&id=57a7b058& */ "./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058&");
/* harmony import */ var _StarCombo2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarCombo2.vue?vue&type=script&lang=js& */ "./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StarCombo2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/star/StarCombo2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StarCombo2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StarCombo2.vue?vue&type=template&id=57a7b058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/star/StarCombo2.vue?vue&type=template&id=57a7b058&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StarCombo2_vue_vue_type_template_id_57a7b058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);