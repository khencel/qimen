(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['chart'],
  data: function data() {
    return {
      deitie_red: [1, 2, 3, 4, 5],
      door_red: [1, 2, 3, 8],
      stem_red: [1, 2, 3, 4, 5],
      star_red: [1, 2, 3, 7, 9],
      date: new Date(),
      loading: false,
      se: {},
      center: {}
    };
  },
  mounted: function mounted() {
    this.getChart();
  },
  methods: {
    getChart: function getChart() {
      var _this = this;

      this.loading = true;
      axios.post('/api/get-home-chart', {
        month: this.date.getMonth() + 1,
        day: this.date.getDate(),
        year: this.date.getFullYear()
      }).then(function (response) {
        axios.get('/api/preview/' + response.data.day_chart_id + '/' + _this.chart.type + '/' + _this.chart.chart_type).then(function (response) {
          _this.loading = false;
          _this.se = response.data.se;
          _this.center = response.data.center.stem.value;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("pulse-loader", { attrs: { loading: _vm.loading } }),
      _vm._v(" "),
      _vm._l(_vm.se, function(se) {
        return _c("div", { key: se.id }, [
          _c("div", { staticClass: "row m-0 part-chart-t-b" }, [
            _c("div", { staticClass: "col-4 p-0 position-relative" }, [
              _c("div", [
                _c("img", {
                  staticClass: "icon-img",
                  attrs: { src: "/img/" + se.stem_top.photo, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.deitie_red.includes(se.stem_top.id)
                    ? "text-danger chart-text"
                    : "chart-text"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.stem_top.value) +
                      "\n                "
                  )
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
                      value: se.stem_1 == 1,
                      expression: "se.stem_1 == 1"
                    }
                  ],
                  staticClass: "position-absolute text-center center-part-cont"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-text",
                      staticStyle: { "line-height": "5px" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "img-center",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.center) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0 position-relative" }, [
              _c("div", [
                _c("img", {
                  staticClass: "icon-img",
                  attrs: { src: "/img/" + se.star.photo, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.door_red.includes(se.star.id)
                    ? "text-danger chart-text"
                    : "chart-text"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.star.chinese) +
                      "\n                    "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.star.name) +
                      "\n                "
                  )
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
                      value: se.bird_2 == 1,
                      expression: "se.bird_2 == 1"
                    }
                  ],
                  staticClass: "position-absolute text-center",
                  staticStyle: {
                    width: "30px",
                    "z-index": "1",
                    bottom: "0",
                    right: "0",
                    "margin-right": "-15px"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-text",
                      staticStyle: { "line-height": "5px" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "img-center",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      ),
                      _vm._v(
                        "\n                        Qin\n                        "
                      ),
                      _c("br"),
                      _c("br"),
                      _vm._v(
                        "\n                        Bird\n                    "
                      )
                    ]
                  )
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
                      value: se.stem_2 == 1,
                      expression: "se.stem_2 == 1"
                    }
                  ],
                  staticClass: "position-absolute text-center",
                  staticStyle: {
                    width: "30px",
                    "z-index": "1",
                    bottom: "0",
                    right: "0",
                    "margin-right": "-15px"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-text",
                      staticStyle: { "line-height": "5px" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "img-center",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.center) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0" }, [
              _c("div", [
                _c("img", {
                  staticClass: "icon-img",
                  attrs: { src: "/img/" + se.deitie.photo, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.deitie_red.includes(se.deitie.id)
                    ? "text-danger chart-text"
                    : "chart-text"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.deitie.chinese) +
                      "\n                    "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.deitie.value) +
                      "\n                "
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row text-center m-0 part-chart-middle" }, [
            _c("div", { staticClass: "col-4 p-0 " }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: se.position_1 != null,
                        expression: "se.position_1 != null"
                      }
                    ],
                    staticClass: "col-5 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_1 == null
                              ? ""
                              : se.position_1.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_1 == null
                              ? ""
                              : se.position_1.second_word
                          ) +
                          "\n                        "
                      )
                    ])
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
                        value: se.position_2 != null,
                        expression: "se.position_2 != null"
                      }
                    ],
                    staticClass: "col-5 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_2 == null
                              ? ""
                              : se.position_2.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_2 == null
                              ? ""
                              : se.position_2.second_word
                          ) +
                          "\n                        "
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: se.position_3 != null,
                        expression: "se.position_3 != null"
                      }
                    ],
                    staticClass: "col-4 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_3 == null
                              ? ""
                              : se.position_3.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_3 == null
                              ? ""
                              : se.position_3.second_word
                          ) +
                          "\n                        "
                      )
                    ])
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
                        value: se.position_4 != null,
                        expression: "se.position_4 != null"
                      }
                    ],
                    staticClass: "col-4 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_4 == null
                              ? ""
                              : se.position_4.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_4 == null
                              ? ""
                              : se.position_4.second_word
                          ) +
                          "\n                        "
                      )
                    ])
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
                        value: se.position_5 != null,
                        expression: "se.position_5 != null"
                      }
                    ],
                    staticClass: "col-4 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_5 == null
                              ? ""
                              : se.position_5.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_5 == null
                              ? ""
                              : se.position_5.second_word
                          ) +
                          "\n                        "
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0" }, [
              _c("div", { staticClass: "row justify-content-center" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: se.position_6 != null,
                        expression: "se.position_6 != null"
                      }
                    ],
                    staticClass: "col-5 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_6 == null
                              ? ""
                              : se.position_6.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_6 == null
                              ? ""
                              : se.position_6.second_word
                          ) +
                          "\n                        "
                      )
                    ])
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
                        value: se.position_7 != null,
                        expression: "se.position_7 != null"
                      }
                    ],
                    staticClass: "col-5 p-0"
                  },
                  [
                    _c("div", [
                      _c(
                        "svg",
                        {
                          staticClass: "icon-img",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart-text" }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_7 == null
                              ? ""
                              : se.position_7.first_word
                          ) +
                          "\n                            "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            se.position_7 == null
                              ? ""
                              : se.position_7.second_word
                          ) +
                          "\n                        "
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row m-0 part-chart-t-b" }, [
            _c("div", { staticClass: "col-4 p-0 position-relative" }, [
              _c("div", {}, [
                _c("img", {
                  staticClass: "icon-img",
                  attrs: { src: "/img/" + se.stem_bottom.photo, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.deitie_red.includes(se.stem_bottom.id)
                    ? "text-danger chart-text"
                    : "chart-text"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.stem_bottom.value) +
                      "\n                "
                  )
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
                      value: se.stem_3 == 1,
                      expression: "se.stem_3 == 1"
                    }
                  ],
                  staticClass:
                    "position-absolute text-center center-chart-bottom"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-text",
                      staticStyle: { "line-height": "5px" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "img-center",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.center) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0 position-relative" }, [
              _c("div", {}, [
                _c("img", {
                  staticClass: "icon-img",
                  attrs: { src: "/img/" + se.door.photo, alt: "" }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  class: _vm.door_red.includes(se.door.id)
                    ? "text-danger chart-text"
                    : "chart-text"
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.door.chinese) +
                      "\n                    "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                    " +
                      _vm._s(se.door.name) +
                      "\n                "
                  )
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
                      value: se.stem_4 == 1,
                      expression: "se.stem_4 == 1"
                    }
                  ],
                  staticClass: "position-absolute text-center",
                  staticStyle: {
                    height: "30px",
                    width: "30px",
                    "z-index": "1",
                    top: "0",
                    right: "0",
                    "margin-right": "-15px",
                    "margin-top": "-15px"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "chart-text",
                      staticStyle: { "line-height": "5px" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "img-center",
                          attrs: { viewBox: "0 0 24 24" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "currentColor",
                              d:
                                "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.center) +
                          "\n                    "
                      )
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 p-0 h1 font-weight-bold" }, [
              _vm._v(
                "\n                " + _vm._s(se.number) + "\n            "
              )
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/landing-page/PartsLandingPage.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/landing-page/PartsLandingPage.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartsLandingPage.vue?vue&type=template&id=4a70b875& */ "./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875&");
/* harmony import */ var _PartsLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartsLandingPage.vue?vue&type=script&lang=js& */ "./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PartsLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/landing-page/PartsLandingPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartsLandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartsLandingPage.vue?vue&type=template&id=4a70b875& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/landing-page/PartsLandingPage.vue?vue&type=template&id=4a70b875&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartsLandingPage_vue_vue_type_template_id_4a70b875___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);