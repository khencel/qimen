(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/Formation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/Formation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    return {
      editMode: false,
      loading: true,
      hexagrams: {},
      doorFormation: {},
      palaces: {},
      selected_id: '',
      form: new Form({
        relationship: '',
        description: '',
        door_id: this.id,
        trigram_id: '',
        hexagram: ''
      })
    };
  },
  methods: {
    addDoorStem: function addDoorStem() {
      var _this = this;

      this.form.post('/api/door/formation/store?api_token=' + window.token).then(function (res) {
        _this.$notify({
          group: 'notification',
          type: 'success',
          title: 'Add ' + _this.attribute,
          text: _this.attribute + ' has been Added'
        });

        _this.form.reset();

        _this.show();
      })["catch"](function (erre) {
        _this.$notify({
          group: 'notification',
          type: 'error',
          title: 'Invalid Data',
          text: 'All fields are required'
        });
      });
    },
    showPalace: function showPalace() {
      var _this2 = this;

      axios.post('/api/door/palace/list?api_token=' + window.token, {
        door_id: this.id
      }).then(function (res) {
        _this2.palaces = res.data;
      });
    },
    showHexagram: function showHexagram() {
      var _this3 = this;

      axios.get('https://yijing.jennelcheng.com/api/hexagram/list?api_token=1TLxV5nRi60rNhwcaQR5Z4WvXIGNbgu5aSkphU4PvYIrKtg726JSdBu9rUrv').then(function (res) {
        _this3.hexagrams = res.data;
        _this3.loading = false;
      });
    },
    show: function show() {
      var _this4 = this;

      axios.get('/api/door/formation/list/' + this.id + '?api_token=' + window.token).then(function (res) {
        _this4.doorFormation = res.data;
      });
    },
    edit: function edit(id) {
      var _this5 = this;

      this.editModeFormation(id);
      axios.post('/api/door/formation/edit?api_token=' + window.token, {
        selected_id: id,
        id: this.id
      }).then(function (res) {
        _this5.palaces = res.data.trigram;
        _this5.form.relationship = res.data.formation.relationship;
        _this5.form.description = res.data.formation.description;
        _this5.form.trigram_id = res.data.formation.trigram.id;
        _this5.form.hexagram = res.data.formation.hexagram;
      });
    },
    update: function update() {
      var _this6 = this;

      this.form.put('/api/door/formation/update/' + this.selected_id + '?api_token=' + window.token).then(function (res) {
        _this6.$notify({
          group: 'notification',
          type: 'success',
          title: 'Update ' + _this6.attribute,
          text: _this6.attribute + ' has been Updated'
        });

        _this6.form.reset();

        _this6.show();

        _this6.showPalace();

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
          _this7.form.get('/api/door/formation/delete/' + id + '?api_token=' + window.token).then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

            _this7.show();
          });
        }
      });
    },
    cancelTransaction: function cancelTransaction() {
      this.form.reset();
      this.editMode = false;
    },
    editModeFormation: function editModeFormation(id) {
      this.editMode = true;
      this.selected_id = id;
      $("html, body").animate({
        scrollTop: $(document).height()
      }, "slow");
      $('#formation').focus();
    }
  },
  mounted: function mounted() {
    this.showPalace();
    this.showHexagram();
    this.show();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
            _vm._l(_vm.doorFormation, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.trigram.name) +
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
                _c("td", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.relationship) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("td", { staticStyle: { width: "35%" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.description) +
                      "\n                    "
                  )
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
                          value: _vm.form.trigram_id,
                          expression: "form.trigram_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "formation" },
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
                            "trigram_id",
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
                        [_vm._v("Select Palace")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.palaces, function(item, index) {
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
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.relationship,
                        expression: "form.relationship"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Relationship" },
                    domProps: { value: _vm.form.relationship },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "relationship", $event.target.value)
                      }
                    }
                  })
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
                  !_vm.editMode
                    ? _c(
                        "span",
                        {
                          staticClass:
                            "badge button-success p-2 cursor-pointer w-50 mb-1",
                          on: { click: _vm.addDoorStem }
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
      _c("th", [_vm._v("Palace")]),
      _vm._v(" "),
      _c("th", [_vm._v("Gua")]),
      _vm._v(" "),
      _c("th", [_vm._v("Relationship")]),
      _vm._v(" "),
      _c("th", [_vm._v("Description")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/door/Formation.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/door/Formation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formation.vue?vue&type=template&id=5a28c67b& */ "./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b&");
/* harmony import */ var _Formation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formation.vue?vue&type=script&lang=js& */ "./resources/js/components/door/Formation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Formation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/door/Formation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/door/Formation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/door/Formation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Formation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/Formation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Formation.vue?vue&type=template&id=5a28c67b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/Formation.vue?vue&type=template&id=5a28c67b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formation_vue_vue_type_template_id_5a28c67b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);