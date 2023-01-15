(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_spinner_src_RingLoader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-spinner/src/RingLoader.vue */ "./node_modules/vue-spinner/src/RingLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    RingLoader: vue_spinner_src_RingLoader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      attributes: {},
      loading: true
    };
  },
  methods: {
    showAttributes: function showAttributes(id) {
      var _this = this;

      axios.get('/api/door/showAttribute/' + id + '?api_token=' + window.token).then(function (res) {
        _this.attributes = res.data;
        _this.loading = false;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-spinner .v-ring\n{\n}\n.v-spinner .v-ring1\n{\n}\n.v-spinner .v-ring2\n{\n\n    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n            animation: v-ringRightRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    perspective: 800px;  \n    position: absolute;          \n    top: 0;\n    left: 0;\n}\n.v-spinner .v-ring3\n{\n\n    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n            animation: v-ringLeftRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    perspective: 800px;            \n    position: absolute;\n    top: 0;\n    left: 0;\n}\n@-webkit-keyframes v-ringRightRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringRightRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n}\n}\n@-webkit-keyframes v-ringLeftRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n@keyframes v-ringLeftRotate\n{\n0%\n    {\n        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n}\n100%\n    {\n        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.preview-label[data-v-746a53fb]{\n    background-color: linen;\n    font-style: italic;\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  
  name: 'RingLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: { 
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '60px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    spinnerStyle () {
      return {
        height: this.size,
        width: this.size,
        border: parseFloat(this.size)/10 + 'px solid' + this.color,
        opacity: 0.4,
        borderRadius: this.radius
      }
    },
    spinnerBasicStyle () {
      return {
        height: this.size,
        width: this.size,
        position: 'relative'
      }
    }
  }

});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c& ***!
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "v-spinner"
    },
    [
      _c(
        "div",
        { staticClass: "v-ring v-ring1", style: _vm.spinnerBasicStyle },
        [
          _c("div", { staticClass: "v-ring v-ring2", style: _vm.spinnerStyle }),
          _c("div", { staticClass: "v-ring v-ring3", style: _vm.spinnerStyle })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true& ***!
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
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loading,
            expression: "loading"
          }
        ],
        staticClass: "w-100 text-center"
      },
      [_c("RingLoader", { attrs: { loading: _vm.loading } })],
      1
    ),
    _vm._v(" "),
    _c(
      "table",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.loading,
            expression: "!loading"
          }
        ],
        staticClass: "table table-hover"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Description")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.description, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Attribute")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.attribute, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Element")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.attributes.element) +
                  "\n               "
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [
              _vm._v("Earthly Branch")
            ]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.branch, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [
              _vm._v("Original Gua")
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                   " +
                  _vm._s(_vm.attributes.gua) +
                  "\n               "
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Direction")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                   " +
                  _vm._s(_vm.attributes.direction) +
                  "\n               "
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Luo Shu")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(
                "\n                   " +
                  _vm._s(_vm.attributes.shu) +
                  "\n               "
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Envoy")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.envoy, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Achievement")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.achievement, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Weather")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.weather, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Personality")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.personality, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Geography")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.geography, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("People")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.people, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Material")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.material, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Property")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.property, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Career")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.career, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Body Part")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.part, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Temperament")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.temperament, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Nourishment")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.nourishment, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Birth")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.birth, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Marriage")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.marriage, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Illness")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.illness, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { staticClass: "preview-label" }, [_vm._v("Litigation")]),
            _vm._v(" "),
            _c(
              "td",
              _vm._l(_vm.attributes.litigation, function(item) {
                return _c(
                  "span",
                  { key: item.id, staticClass: "badge badge-success p-1 mr-1" },
                  [
                    _vm._v(
                      "\n                       " +
                        _vm._s(item.value) +
                        "\n                   "
                    )
                  ]
                )
              }),
              0
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Attributes")]),
      _vm._v(" "),
      _c("th", [_vm._v("Description")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue":
/*!*****************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=template&id=df077b9c& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&");
/* harmony import */ var _RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-spinner/src/RingLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib??vue-loader-options!./RingLoader.vue?vue&type=template&id=df077b9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-spinner/src/RingLoader.vue?vue&type=template&id=df077b9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_RingLoader_vue_vue_type_template_id_df077b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/door/PreviewStem.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/door/PreviewStem.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true& */ "./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true&");
/* harmony import */ var _PreviewStem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewStem.vue?vue&type=script&lang=js& */ "./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& */ "./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreviewStem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "746a53fb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/door/PreviewStem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewStem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=style&index=0&id=746a53fb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_style_index_0_id_746a53fb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/door/PreviewStem.vue?vue&type=template&id=746a53fb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewStem_vue_vue_type_template_id_746a53fb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);