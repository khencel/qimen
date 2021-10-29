(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['chart_id', 'type'],
  data: function data() {
    return {
      chart_type: this.type,
      center_img: '',
      center: '',
      seTop: {},
      seLeft: {},
      sTop: {},
      swTop: {},
      swRight: {},
      e: {},
      w: {},
      neLeft: {},
      neBottom: {},
      nwRight: {},
      nwBottom: {},
      nBottom: {},
      structure: ''
    };
  },
  mounted: function mounted() {
    this.loadCenter();
    this.loadOutside();
  },
  methods: {
    loadCenter: function loadCenter() {
      var _this = this;

      axios.get('/api/previewChart/' + this.chart_id + '/' + this.type).then(function (response) {
        _this.structure = response.data.day_chart.structure_type;
        _this.center = response.data.stem_id != null ? response.data.stem.value : '';
        _this.center_img = response.data.stem_id != null ? response.data.stem.photo : '';
      });
    },
    loadOutside: function loadOutside() {
      var _this2 = this;

      axios.get('/api/preview/' + this.chart_id + '/' + this.type).then(function (response) {
        _this2.seTop = response.data.se != null ? response.data.se.seTop.split(',') : '';
        _this2.seLeft = response.data.se != null ? response.data.se.seLeft.split(',') : '';
        _this2.sTop = response.data.s != null ? response.data.s.sTop.split(',') : '';
        _this2.swTop = response.data.sw != null ? response.data.sw.swTop.split(',') : '';
        _this2.swRight = response.data.sw != null ? response.data.sw.swRight.split(',') : '';
        _this2.e = response.data.e != null ? response.data.e.eLeft.split(',') : '';
        _this2.w = response.data.w != null ? response.data.w.wRight.split(',') : '';
        _this2.neLeft = response.data.ne != null ? response.data.ne.neLeft.split(',') : '';
        _this2.neBottom = response.data.ne != null ? response.data.ne.neBottom.split(',') : '';
        _this2.nwRight = response.data.nw != null ? response.data.nw.nwRight.split(',') : '';
        _this2.nwBottom = response.data.nw != null ? response.data.nw.nwBottom.split(',') : '';
        _this2.nBottom = response.data.nw != null ? response.data.n.nBottom.split(',') : '';
      });
    },
    downloadChart: function downloadChart() {
      html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelector("#captureWithCons")).then(function (canvas) {
        var id = "test";
        simulateDownloadImageClick(canvas.toDataURL(), id + '.PNG');
      });

      function simulateDownloadImageClick(uri, filename) {
        var link = document.createElement('a');

        if (typeof link.download !== 'string') {
          window.open(uri);
        } else {
          link.href = uri;
          link.download = filename;
          accountForFirefox(clickLink, link);
        }
      }

      function clickLink(link) {
        link.click();
      }

      function accountForFirefox(click) {
        // wrapper function
        var link = arguments[1];
        document.body.appendChild(link);
        click(link);
        document.body.removeChild(link);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#capture[data-v-d16fcc9c]{\n    width: 100% !important;\n    padding-left: 4%;\n    padding-right: 4%;\n    padding-bottom: 6%;\n    padding-top: 6%;\n}\n.chart-const-cont[data-v-d16fcc9c]{\n    width:74% !important;\n    margin:auto;\n    padding: 10%;\n    position: relative;\n    border-width:5px;  \n    border-style:groove;\n    /* background-image: url('/img/maroon.jpg'); */\n}\n.se[data-v-d16fcc9c]{\n    border: 5px solid #AE2526;\n    top: 0;\n    left: 0;\n    width: 30%;\n    height: 30%;\n    border-width:5px;  \n    border-style:double;\n    background-color: linen;\n}\n.sw[data-v-d16fcc9c]{\n    border: 5px solid #AE2526;\n    top: 0;\n    right: 0;\n    width: 30%;\n    height: 30%;\n    border-width:5px;  \n    border-style:double;\n    background-color: linen;\n}\n.ne[data-v-d16fcc9c]{\n    border: 5px solid #AE2526;\n    bottom: 0;\n    left: 0;\n    width: 30%;\n    height: 30%;\n    border-width:5px;  \n    border-style:double;\n    background-color: linen;\n}\n.nw[data-v-d16fcc9c]{\n    border: 5px solid #AE2526;\n    bottom: 0;\n    right: 0;\n    width: 30%;\n    height: 30%;\n    border-width:5px;  \n    border-style:double;\n    background-color: linen;\n}\n.s[data-v-d16fcc9c]{\n    top: 0;\n    left: 50%;\n    margin-left: -15%;\n    width: 30%;\n    height: 30%;\n    background-color: linen;\n}\n.n[data-v-d16fcc9c]{\n    bottom: 0;\n    left: 50%;\n    margin-left: -15%;\n    width: 30%;\n    height: 30%;\n    background-color: linen;\n}\n.e[data-v-d16fcc9c]{\n    top: 50%;\n    left: 0;\n    margin-top:-15%;\n    width: 30%;\n    height: 30%;\n    background-color: linen;\n}\n.w[data-v-d16fcc9c]{\n    top: 50%;\n    right: 0;\n    margin-top:-15%;\n    width: 30%;\n    height: 30%;\n    background-color: linen;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-7" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success w-25",
            on: { click: _vm.downloadChart }
          },
          [_vm._v("Download Chart")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "chart-const-cont", attrs: { id: "captureWithCons" } },
      [
        _c("div", { staticClass: "se position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "sw position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "ne position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "nw position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "n position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "s position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "e position-absolute" }),
        _vm._v(" "),
        _c("div", { staticClass: "w position-absolute" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: " border position-relative chart-container",
            style:
              _vm.structure == "Yin Structure"
                ? "background-color:#CD8D8D;"
                : "background-color:#AE2526;",
            attrs: { id: "capture" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _c("div", { staticClass: "bg-white" }, [
              _c(
                "div",
                {
                  staticClass: "bg-logo",
                  staticStyle: {
                    "background-image": "url('/img/logo.png')",
                    "background-size": "90% 70%",
                    "background-repeat": "no-repeat",
                    "background-position": "center center"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        "background-color": "rgb(255,255,255,0.8)"
                      }
                    },
                    [
                      _c("div", { staticClass: "row m-0 p-0 chart-content" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-4 chart-border p-0 text-center position-relative",
                            staticStyle: {
                              "background-color": "rgba(174,37,38,0.2)"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-25px",
                                  top: "-30px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.seTop, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "50%",
                                  "margin-top": "-25px",
                                  left: "-27px"
                                }
                              },
                              _vm._l(_vm.seLeft, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "se",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 chart-border p-0 text-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-80px",
                                  top: "-30px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.sTop, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "s",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 chart-border p-0 text-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-25px",
                                  top: "-30px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.swTop, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "50%",
                                  "margin-top": "-25px",
                                  right: "-27px"
                                }
                              },
                              _vm._l(_vm.swRight, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "sw",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-0 chart-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-4 chart-border p-0 text-center",
                            staticStyle: {
                              "background-color": "rgba(174,37,38,0.2)"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "75%",
                                  "margin-top": "10px",
                                  left: "-27px"
                                }
                              },
                              _vm._l(_vm.e, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "e",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 chart-border p-0 text-center" },
                          [
                            _c(
                              "div",
                              { staticClass: "row m-0 part-chart-t-b" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-4 p-0 position-relative"
                                  },
                                  [
                                    _c("div", [
                                      _c("img", {
                                        staticClass: "icon-img",
                                        attrs: {
                                          src: "/img/" + _vm.center_img,
                                          alt: ""
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "chart-text" }, [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.center) +
                                          "\n                                            "
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "col-4 p-0 position-relative"
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-4 p-0" })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass:
                                "row text-center m-0 part-chart-middle"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row m-0 part-chart-t-b" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "col-4 p-0 position-relative"
                                  },
                                  [
                                    _c("div", {}, [
                                      _c("img", {
                                        staticClass: "icon-img",
                                        attrs: {
                                          src: "/img/" + _vm.center_img,
                                          alt: ""
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "chart-text" }, [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.center) +
                                          "\n                                            "
                                      )
                                    ])
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 chart-border p-0 text-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "50%",
                                  "margin-top": "-60px",
                                  right: "-27px"
                                }
                              },
                              _vm._l(_vm.w, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "w",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-0 chart-content" }, [
                        _c(
                          "div",
                          {
                            staticClass: "col-4 chart-border p-0 text-center",
                            staticStyle: {
                              "background-color": "rgba(174,37,38,0.2)"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-25px",
                                  bottom: "-27px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.neBottom, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "50%",
                                  "margin-top": "-25px",
                                  left: "-27px"
                                }
                              },
                              _vm._l(_vm.neLeft, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "ne",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-4 chart-border p-0 text-center",
                            staticStyle: {
                              "background-color": "rgba(174,37,38,0.2)"
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-100px",
                                  bottom: "-27px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.nBottom, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "n",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 chart-border p-0 text-center" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  width: "50px",
                                  "z-index": "1",
                                  left: "50%",
                                  "margin-left": "-25px",
                                  bottom: "-20px"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "row justify-content-center" },
                                  _vm._l(_vm.nwBottom, function(item, index) {
                                    return _c(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: item != "",
                                            expression: "item != ''"
                                          }
                                        ],
                                        key: index,
                                        staticClass: "col-6 p-0 text-center"
                                      },
                                      [
                                        _c(
                                          "small",
                                          [
                                            _c("b-badge", {
                                              staticClass: "p-1",
                                              attrs: { variant: "success" },
                                              domProps: {
                                                textContent: _vm._s(item)
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "position-absolute",
                                staticStyle: {
                                  "z-index": "1",
                                  height: "50px",
                                  top: "50%",
                                  "margin-top": "-25px",
                                  right: "-27px"
                                }
                              },
                              _vm._l(_vm.nwRight, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: item != "",
                                        expression: "item != ''"
                                      }
                                    ],
                                    key: index
                                  },
                                  [
                                    _c(
                                      "small",
                                      [
                                        _c("b-badge", {
                                          staticClass: "p-1",
                                          attrs: { variant: "success" },
                                          domProps: {
                                            textContent: _vm._s(item)
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c("chart-parts", {
                              attrs: {
                                center: _vm.center,
                                chart: {
                                  chart_id: _vm.chart_id,
                                  type: "nw",
                                  chart_type: _vm.chart_type
                                }
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute m-1",
        staticStyle: { "z-index": "1", top: "0", left: "0" }
      },
      [
        _c("img", {
          staticClass: "mb-2",
          attrs: { src: "/img/xun.png", width: "80", height: "35", alt: "" }
        }),
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-12px"
            }
          },
          [_vm._v("4")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute text-center mt-1",
        staticStyle: {
          "z-index": "1",
          top: "0",
          width: "100px",
          right: "50%",
          "margin-right": "-50px"
        }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-12px"
            }
          },
          [_vm._v("9")]
        ),
        _c("img", {
          staticClass: "mb-2",
          attrs: { src: "/img/li.png", width: "60", height: "35", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute m-1",
        staticStyle: { "z-index": "1", top: "0", right: "0" }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-12px"
            }
          },
          [_vm._v("2")]
        ),
        _c("img", {
          staticClass: "mb-2",
          attrs: { src: "/img/kun.png", width: "80", height: "35", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-center text-white position-absolute ml-1",
        staticStyle: {
          height: "20px",
          "z-index": "1",
          left: "0",
          bottom: "50%",
          "margin-bottom": "-2px"
        }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "absolute",
              left: "3px"
            }
          },
          [_vm._v("3")]
        ),
        _c("img", {
          staticClass: "mb-2",
          attrs: { src: "/img/zhen.png", width: "45", height: "80", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-center text-white position-absolute mr-1",
        staticStyle: {
          height: "20px",
          "z-index": "1",
          right: "0",
          bottom: "50%",
          "margin-bottom": "2px"
        }
      },
      [
        _c("img", {
          staticClass: "mb-2",
          attrs: { src: "/img/dui.png", width: "45", height: "80", alt: "" }
        }),
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "absolute",
              right: "3px"
            }
          },
          [_vm._v("7")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute m-1",
        staticStyle: { "z-index": "1", bottom: "0", left: "0" }
      },
      [
        _c("img", {
          attrs: { src: "/img/gen.png", width: "80", height: "35", alt: "" }
        }),
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-10px"
            }
          },
          [_vm._v("8")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute text-center mb-1",
        staticStyle: {
          "z-index": "1",
          bottom: "0",
          width: "120px",
          right: "50%",
          "margin-right": "-60px"
        }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-10px"
            }
          },
          [_vm._v("1")]
        ),
        _c("img", {
          attrs: { src: "/img/kan.png", width: "60", height: "35", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-white position-absolute m-1",
        staticStyle: { "z-index": "1", bottom: "0", right: "0" }
      },
      [
        _c(
          "span",
          {
            staticStyle: {
              color: "white",
              "font-weight": "bold",
              position: "relative",
              top: "-10px"
            }
          },
          [_vm._v("6")]
        ),
        _c("img", {
          attrs: { src: "/img/qian.png", width: "80", height: "35", alt: "" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chart/PreviewChart.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/chart/PreviewChart.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true& */ "./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true&");
/* harmony import */ var _PreviewChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreviewChart.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& */ "./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PreviewChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d16fcc9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/PreviewChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=style&index=0&id=d16fcc9c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_style_index_0_id_d16fcc9c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/PreviewChart.vue?vue&type=template&id=d16fcc9c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewChart_vue_vue_type_template_id_d16fcc9c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);