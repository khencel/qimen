(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['palace', 'text', 'text2', 'structure', 'chart_numb', 'id', 'stem', 'type', 'day', 'jiabranch', 'jiaformation', 'stemday', 'jiachief', 'stemhour', 'img'],
  data: function data() {
    return {
      jia: '',
      jiaday: '',
      door_red: [1, 2, 3, 8],
      deitie_red: [1, 2, 3, 4, 5],
      star_aus: [1, 2, 3, 7, 9],
      stem_aus: [1, 2, 3, 4, 5],
      heaven_red: [],
      earth_red: [],
      palace_sw_nw_style: '',
      palace_e_w_style: '',
      outer_top_bottom: '',
      outer_left_right: '',
      earth_stem: {},
      star: {},
      deitie: {},
      heaven: {},
      door: {},
      number: "",
      stem_top: false,
      stem_bottom: false,
      other: false,
      formations: {},
      top_bottom: [],
      left_right: [],
      center: "",
      stemcenter: '',
      trigramTop: '',
      trigramBottom: '',
      hexagramStyle: '',
      hexagram: '',
      topTrigram: '',
      bottomTrigram: '',
      constilationCont: ''
    };
  },
  methods: {
    hexagram_style: function hexagram_style() {
      var defaultStyle = "position-absolute";

      if (this.palace == "SE") {
        this.hexagramStyle = defaultStyle + ' se-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-se" : defaultStyle + " cons-se-yang";
      }

      if (this.palace == "NE") {
        this.hexagramStyle = defaultStyle + ' se-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-ne" : defaultStyle + " cons-ne-yang";
      }

      if (this.palace == "SW") {
        this.hexagramStyle = defaultStyle + ' sw-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-sw" : defaultStyle + " cons-sw-yang";
      }

      if (this.palace == "NW") {
        this.hexagramStyle = defaultStyle + ' sw-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-nw" : defaultStyle + " cons-nw-yang";
      }

      if (this.palace == "S") {
        this.hexagramStyle = defaultStyle + ' s-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-s" : defaultStyle + " cons-s-yang";
      }

      if (this.palace == "N") {
        this.hexagramStyle = defaultStyle + ' n-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-n" : defaultStyle + " cons-n-yang";
      }

      if (this.palace == "E") {
        this.hexagramStyle = defaultStyle + ' se-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-e" : defaultStyle + " cons-e-yang";
      }

      if (this.palace == "W") {
        this.hexagramStyle = defaultStyle + ' sw-hex';
        this.constilationCont = this.structure != "yang" ? defaultStyle + " cons-w" : defaultStyle + " cons-w-yang";
      }
    },
    outerStyle: function outerStyle() {
      if (this.palace == "SE") {
        this.outer_top_bottom = "position-absolute w-100 se_outer";
        this.outer_left_right = "position-absolute h-100 text-warning outer-left";
      }

      if (this.palace == "NE") {
        this.outer_top_bottom = "position-absolute w-100 ne_outer";
        this.outer_left_right = "position-absolute h-100 text-warning outer-left";
      }

      if (this.palace == "SW") {
        this.outer_top_bottom = "position-absolute w-100 se_outer";
        this.outer_left_right = "position-absolute h-100 text-warning outer-right";
      }

      if (this.palace == "NW") {
        this.outer_top_bottom = "position-absolute w-100 ne_outer";
        this.outer_left_right = "position-absolute h-100 text-warning outer-right";
      }

      if (this.palace == "S") {
        this.outer_top_bottom = "position-absolute w-100 s_outer";
      }

      if (this.palace == "N") {
        this.outer_top_bottom = "position-absolute w-100 n_outer";
      }

      if (this.palace == "E") {
        this.outer_left_right = "position-absolute h-100 text-warning outer-left-e";
      }

      if (this.palace == "W") {
        this.outer_left_right = "position-absolute h-100 text-warning outer-right-w";
      }
    },
    loadPartChart: function loadPartChart() {
      var _this = this;

      axios.get('/api/hour/part/' + this.id + '/' + this.structure + '/' + this.chart_numb + '/' + this.palace + '/?api_token=' + window.token).then(function (res) {
        _this.earth_stem = res.data.chart.earth_stem;
        _this.star = res.data.chart.star;
        _this.deitie = res.data.chart.deitie;
        _this.heaven = res.data.chart.heaven_stem;
        _this.door = res.data.chart.door;
        _this.number = res.data.chart.number_id;
        _this.stem_top = res.data.chart.heaven;
        _this.stem_bottom = res.data.chart.earth;
        _this.other = res.data.chart.other;
        _this.top_bottom = res.data.chart.top_bottom != null ? res.data.chart.top_bottom.split(" ") : '';
        _this.left_right = res.data.chart.left_right != null ? res.data.chart.left_right.split(" ") : '';
        _this.center = res.data.center.center.value;
        _this.formations = res.data.formation;
        _this.trigramTop = res.data.chart.star.code;
        _this.trigramBottom = res.data.chart.door.code;

        _this.trigramTopValidation(res.data.chart.star.code);

        _this.trigramBottomValidation(res.data.chart.door.code);

        _this.getHex(res.data.chart.star.code + res.data.chart.door.code);
      });
    },
    trigramTopValidation: function trigramTopValidation(top) {
      if (top == "011") {
        this.topTrigram = "/img/7.png";
      }

      if (top == "010") {
        this.topTrigram = "/img/1.png";
      }

      if (top == "111") {
        this.topTrigram = "/img/6.png";
      }

      if (top == "100") {
        this.topTrigram = "/img/8.png";
      }

      if (top == "001") {
        this.topTrigram = "/img/3.png";
      }

      if (top == "000") {
        this.topTrigram = "/img/2.png";
      }

      if (top == "110") {
        this.topTrigram = "/img/4.png";
      }

      if (top == "101") {
        this.topTrigram = "/img/9.png";
      }
    },
    trigramBottomValidation: function trigramBottomValidation(bottom) {
      if (bottom == "011") {
        this.bottomTrigram = "/img/7.png";
      }

      if (bottom == "010") {
        this.bottomTrigram = "/img/1.png";
      }

      if (bottom == "111") {
        this.bottomTrigram = "/img/6.png";
      }

      if (bottom == "100") {
        this.bottomTrigram = "/img/8.png";
      }

      if (bottom == "001") {
        this.bottomTrigram = "/img/3.png";
      }

      if (bottom == "000") {
        this.bottomTrigram = "/img/2.png";
      }

      if (bottom == "110") {
        this.bottomTrigram = "/img/4.png";
      }

      if (bottom == "101") {
        this.bottomTrigram = "/img/9.png";
      }
    },
    getHex: function getHex(hexCode) {
      var _this2 = this;

      axios.get(window.yijing + 'api/getHexagram/' + hexCode + '?api_token=' + window.yijingToken).then(function (res) {
        _this2.hexagram = res.data.name;
      });
    }
  },
  mounted: function mounted() {
    this.hexagram_style();
    this.loadPartChart();
    this.outerStyle(); // console.log(this.stemhour);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.se-outer[data-v-ca33e7b0]{\n    left:-40px;\n    top:-40px;\n    width: 60%;\n}\n.ne-outer[data-v-ca33e7b0]{\n    left:-40px;\n    bottom:-40px;\n    width: 60%;\n}\n.sw-outer[data-v-ca33e7b0]{\n    right:-40px;\n    top:-40px;\n    text-align: right;\n    width: 60%;\n}\n.nw-outer[data-v-ca33e7b0]{\n    right:-40px;\n    bottom:-40px;\n    width: 60%;\n    text-align: right;\n}\n.s-outer[data-v-ca33e7b0]{\n    left:50%;\n    top:-40px;\n    width: 60%;\n    margin-left: -30%;\n    text-align: center;\n}\n.n-outer[data-v-ca33e7b0]{\n    left:50%;\n    bottom:-40px;\n    width: 60%;\n    margin-left: -30%;\n    text-align: center;\n}\n.e-outer[data-v-ca33e7b0]{\n    left:-50px;\n    width: 20%;\n    height: 60%;\n    top: 50%;\n    margin-top:-20%;\n}\n.w-outer[data-v-ca33e7b0]{\n    right:-40px;\n    width: 20%;\n    height: 60%;\n    top: 50%;\n    margin-top:-20%;\n}\np[data-v-ca33e7b0]{\n    line-height: 10px;\n}\n.se_outer[data-v-ca33e7b0]{\n    top:-35px;\n    color:yellow\n}\n.s_outer[data-v-ca33e7b0]{\n    top:-35px;\n    left:-100%;\n    color:yellow\n}\n.n_outer[data-v-ca33e7b0]{\n    bottom:-35px;\n    left:-100%;\n    color:yellow\n}\n.ne_outer[data-v-ca33e7b0]{\n    bottom:-35px;\n    color:yellow\n}\n.outer-left[data-v-ca33e7b0]{\n    left:-17%;\n}\n.outer-left-e[data-v-ca33e7b0]{\n    left:-17%;\n    bottom:-100%;\n}\n.outer-right[data-v-ca33e7b0]{\n    right:-17%;\n}\n.outer-right-w[data-v-ca33e7b0]{\n    right:-17%;\n    top:-110%;\n}\n.auspicious[data-v-ca33e7b0]{\n    color: #62b853;\n}\n.col-4[data-v-ca33e7b0]{\n    padding: 0px;\n    text-align: center;\n}\n.se-hex[data-v-ca33e7b0]{\n    top:40%;\n    left: -80%;\n}\n.s-hex[data-v-ca33e7b0]{\n    top:-71%;\n    left: 50%;\n    margin-left: -50px;\n}\n.n-hex[data-v-ca33e7b0]{\n    bottom:-71%;\n    left: 50%;\n    margin-left: -50px;\n}\n.sw-hex[data-v-ca33e7b0]{\n    top:40%;\n    right: -80%;\n}\n.cons-se[data-v-ca33e7b0]{\n    width: 77.3%; \n    top: -22.5%;\n    left:-100%;\n    height: 122%;\n    background-color: #F2BA49;\n}\n.cons-s[data-v-ca33e7b0]{\n    width: 500%; \n    top: -86%;\n    left:-200%;\n    border-top: 140px solid #FFFF9F;\n    border-left: 158px solid transparent;\n    border-right: 158px solid transparent;\n    background-color: #F2BA49;\n}\n.cons-sw[data-v-ca33e7b0]{\n    width: 76%; \n    top: -22.5%;\n    right:-98.6%;\n    height: 122%;\n    background-color: #F2BA49;\n}\n.cons-e[data-v-ca33e7b0]{\n    width: 77.3%; \n    top: 0;\n    left:-100%;\n    height: 99.3%;\n    border: 1px solid;\n    background-color: #FFFF9F;\n}\n.cons-w[data-v-ca33e7b0]{\n    width: 76%;  \n    top: 0;\n    right:-98.6%;\n    height: 99.3%;\n    border: 1px solid;\n    background-color: #FFFF9F;\n}\n.cons-ne[data-v-ca33e7b0]{\n    width: 77.3%; \n    bottom: -21%;\n    left:-100%;\n    height: 122%;\n    background-color: #F2BA49;\n}\n.cons-n[data-v-ca33e7b0]{\n    width: 500%; \n    bottom: -84%;\n    left:-200%;\n    border-bottom: 140px solid #FFFF9F;\n    border-left: 158px solid transparent;\n    border-right: 158px solid transparent;\n    background-color: #F2BA49;\n}\n.cons-nw[data-v-ca33e7b0]{\n    width: 76%; \n    bottom: -21%;\n    right:-98.6%;\n    height: 122%;\n    background-color: #F2BA49;\n}\n.cons-se-yang[data-v-ca33e7b0]{\n    width: 77.3%; \n    top: -22.5%;\n    left:-100%;\n    height: 122%;\n    background-color: #3EC1D5;\n}\n.cons-s-yang[data-v-ca33e7b0]{\n    width: 500%; \n    top: -86%;\n    left:-200%;\n    border-top: 140px solid #D8F2F6;\n    border-left: 158px solid transparent;\n    border-right: 158px solid transparent;\n    background-color: #3EC1D5;\n    /* 3EC1D5 */\n}\n.cons-sw-yang[data-v-ca33e7b0]{\n    width: 76%; \n    top: -22.5%;\n    right:-98.6%;\n    height: 122%;\n    background-color: #3EC1D5;\n}\n.cons-e-yang[data-v-ca33e7b0]{\n    width: 77.3%; \n    top: 0;\n    left:-100%;\n    height: 99.3%;\n    border: 1px solid;\n    background-color: #D8F2F6;\n}\n.cons-w-yang[data-v-ca33e7b0]{\n    width: 76%;  \n    top: 0;\n    right:-98.6%;\n    height: 99.3%;\n    border: 1px solid;\n    background-color: #D8F2F6;\n}\n.cons-ne-yang[data-v-ca33e7b0]{\n    width: 77.3%; \n    bottom: -21%;\n    left:-100%;\n    height: 122%;\n    background-color: #3EC1D5;\n}\n.cons-n-yang[data-v-ca33e7b0]{\n    width: 500%; \n    bottom: -84%;\n    left:-200%;\n    border-bottom: 140px solid #D8F2F6;\n    border-left: 158px solid transparent;\n    border-right: 158px solid transparent;\n    background-color: #3EC1D5;\n}\n.cons-nw-yang[data-v-ca33e7b0]{\n    width: 76%; \n    bottom: -21%;\n    right:-98.6%;\n    height: 122%;\n    background-color: #3EC1D5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "text-dark position-relative" }, [
    _c("div", { class: _vm.constilationCont }),
    _vm._v(" "),
    _c("div", { class: _vm.hexagramStyle, staticStyle: { width: "100px" } }, [
      _c("div", { staticClass: "text-center" }, [
        _c("img", { attrs: { src: _vm.topTrigram, width: "50", alt: "" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-1 text-center" }, [
        _c("img", { attrs: { src: _vm.bottomTrigram, width: "50", alt: "" } })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _vm._v("\n            " + _vm._s(_vm.hexagram) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-0", staticStyle: { height: "70px" } }, [
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c(
          "p",
          { class: _vm.stem_aus.includes(_vm.heaven.id) ? "auspicious" : "" },
          [
            _c("img", {
              attrs: {
                src: _vm.heaven.photo != null ? "/img/" + _vm.heaven.photo : "",
                width: "30",
                height: "30",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("small", [
              _c("strong", [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.heaven.value) +
                    "\n                    "
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: " position-absolute",
            staticStyle: { top: "0px", right: "-25%", width: "60%" }
          },
          [
            _c("div", { staticClass: "w-100" }, [
              _vm.heaven.value == _vm.stemhour ||
              (_vm.stemhour == _vm.center
                ? _vm.stem_top == true && _vm.stemhour
                : _vm.stem_top == _vm.stemhour)
                ? _c(
                    "div",
                    {
                      staticClass: "position-relative text-center",
                      staticStyle: {
                        top: "0px",
                        "background-color": "brown",
                        color: "white",
                        "font-size": "10px",
                        "border-radius": "25%"
                      }
                    },
                    [_c("strong", [_vm._v("Outcome")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.heaven.value == _vm.stemday || _vm.stem_top == _vm.stemday
                ? _c(
                    "div",
                    {
                      staticClass: "position-relative text-center",
                      staticStyle: {
                        top: "0px",
                        "background-color": "skyblue",
                        color: "white",
                        "font-size": "10px",
                        "border-radius": "25%"
                      }
                    },
                    [_c("strong", [_vm._v("Asker")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.deitie.value == _vm.jiachief,
                      expression: "deitie.value == jiachief"
                    }
                  ],
                  staticClass: "position-relative text-center",
                  staticStyle: {
                    top: "0px",
                    "background-color": "orange",
                    color: "white",
                    "font-size": "10px",
                    "border-radius": "25%"
                  }
                },
                [_c("strong", [_vm._v("Jia")])]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.stem_top,
                expression: "stem_top"
              }
            ],
            staticClass: "position-absolute w-50 h-50 pt-2",
            staticStyle: { bottom: "-0.5px", left: "-25%" }
          },
          [
            _c("p", [
              _c("img", {
                attrs: {
                  src: /img/ + _vm.img,
                  width: "20",
                  height: "20",
                  alt: ""
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticStyle: { "font-size": "10px" } }, [
                _c("strong", [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.center) +
                      "\n                        "
                  )
                ])
              ])
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
                value: _vm.other,
                expression: "other"
              }
            ],
            staticClass: "position-absolute w-50 h-50 pt-2",
            staticStyle: { right: "-25%" }
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.palace == "SE" || _vm.palace == "SW" || _vm.palace == "S",
                expression: "palace == 'SE' || palace == 'SW' || palace == 'S'"
              }
            ],
            class: _vm.outer_top_bottom
          },
          [
            _c(
              "div",
              { staticClass: "row justify-content-center m-0 pl-2 pr-2" },
              _vm._l(_vm.top_bottom, function(item, index) {
                return _c("div", { key: index, staticClass: "col-6 p-0" }, [
                  _c("strong", [_vm._v(_vm._s(item))])
                ])
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "p",
          { class: _vm.star_aus.includes(_vm.star.id) ? "auspicious" : "" },
          [
            _c("img", {
              attrs: {
                src: _vm.star.photo != null ? "/img/" + _vm.star.photo : "",
                width: "30",
                height: "30",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("small", [_c("strong", [_vm._v(_vm._s(_vm.star.name))])])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c(
          "p",
          { class: _vm.deitie_red.includes(_vm.deitie.id) ? "auspicious" : "" },
          [
            _c("img", {
              attrs: {
                src: _vm.deitie.photo != null ? "/img/" + _vm.deitie.photo : "",
                width: "30",
                height: "30",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("small", [_c("strong", [_vm._v(_vm._s(_vm.deitie.value))])])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row m-0 position-relative justify-content-center",
        staticStyle: { height: "80px" }
      },
      [
        _c(
          "div",
          { class: _vm.outer_left_right },
          _vm._l(_vm.left_right, function(item, index) {
            return _c(
              "div",
              {
                key: index,
                class:
                  Object.keys(_vm.left_right).length == 1
                    ? "h-50 mt-3 pt-2"
                    : "h-50 pt-2"
              },
              [_c("strong", [_vm._v(_vm._s(item))])]
            )
          }),
          0
        ),
        _vm._v(" "),
        _vm._l(_vm.formations, function(item, index) {
          return _c(
            "div",
            { key: index, staticClass: "col-4 text-center p-0 mt-2" },
            [
              _c(
                "p",
                { staticStyle: { "line-height": "15px", "font-size": "12px" } },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(item.formation) +
                      "\n            "
                  )
                ]
              )
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row m-0", staticStyle: { height: "70px" } }, [
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c(
          "p",
          {
            class: _vm.stem_aus.includes(_vm.earth_stem.id) ? "auspicious" : ""
          },
          [
            _c("img", {
              attrs: {
                src:
                  _vm.earth_stem.photo != null
                    ? "/img/" + _vm.earth_stem.photo
                    : "",
                width: "30",
                height: "30",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("small", [
              _c("strong", [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.earth_stem.value) +
                    "\n                    "
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.palace == "NE" || _vm.palace == "NW" || _vm.palace == "N",
                expression: "palace == 'NE' || palace == 'NW' || palace == 'N'"
              }
            ],
            class: _vm.outer_top_bottom
          },
          [
            _c(
              "div",
              { staticClass: "row justify-content-center m-0 pl-2 pr-2" },
              _vm._l(_vm.top_bottom, function(item, index) {
                return _c("div", { key: index, staticClass: "col-6 p-0" }, [
                  _c("strong", [_vm._v(_vm._s(item))])
                ])
              }),
              0
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
                value: _vm.stem_bottom,
                expression: "stem_bottom"
              }
            ],
            staticClass: "position-absolute w-50 h-50 pt-2",
            staticStyle: { top: "-25%", left: "-25%" }
          },
          [
            _c("p", [
              _c("img", {
                attrs: {
                  src: /img/ + _vm.img,
                  width: "20",
                  height: "20",
                  alt: ""
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("small", { staticStyle: { "font-size": "10px" } }, [
                _c("strong", [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.center) +
                      "\n                        "
                  )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "p",
          { class: _vm.door_red.includes(_vm.door.id) ? "auspicious" : "" },
          [
            _c("img", {
              attrs: {
                src: _vm.door.photo != null ? "/img/" + _vm.door.photo : "",
                width: "30",
                height: "30",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("small", [_c("strong", [_vm._v(_vm._s(_vm.door.name))])])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 pt-2" }, [
        _c("h2", [
          _c("strong", [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.number) +
                "\n                "
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("img", {
        attrs: { src: "/img/bird.png", width: "20", height: "20", alt: "" }
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("small", { staticStyle: { "font-size": "10px" } }, [
        _c("strong", [
          _vm._v(
            "\n                            Qin\n                            "
          ),
          _c("br"),
          _vm._v("\n                            Bird\n                        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chart/hour-chart/preview/Part.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/chart/hour-chart/preview/Part.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Part.vue?vue&type=template&id=ca33e7b0&scoped=true& */ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true&");
/* harmony import */ var _Part_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Part.vue?vue&type=script&lang=js& */ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& */ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Part_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ca33e7b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chart/hour-chart/preview/Part.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Part.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=style&index=0&id=ca33e7b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_style_index_0_id_ca33e7b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Part.vue?vue&type=template&id=ca33e7b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chart/hour-chart/preview/Part.vue?vue&type=template&id=ca33e7b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Part_vue_vue_type_template_id_ca33e7b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);