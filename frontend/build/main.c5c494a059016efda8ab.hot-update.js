exports.id = "main";
exports.modules = {

/***/ "./src/Chart.js":
/*!**********************!*\
  !*** ./src/Chart.js ***!
  \**********************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme */ "./src/theme/index.js");











var Chart =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Chart, _PureComponent);

  function Chart() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Chart);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Chart).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Chart, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["I18n"], null, function (_ref) {
        var i18n = _ref.i18n;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_8__["H3"], {
          mt: 6,
          textAlign: "center"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
          id: "Reports similar to yours"
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            width: '100%',
            height: 300
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["ResponsiveContainer"], {
          width: _this.props.width,
          height: _this.props.height
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["AreaChart"], {
          data: _this.props.data,
          margin: {
            top: 0,
            right: 0,
            left: -20,
            bottom: 0
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["CartesianGrid"], {
          strokeDasharray: "2 2"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["XAxis"], {
          fontFamily: _theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSans,
          dataKey: "date"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["YAxis"], {
          dataKey: "total",
          fontFamily: _theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSans,
          label: {
            value: i18n._(
            /*i18n*/
            {
              id: "Reports per day"
            }),
            fontSize: '17px',
            angle: -90,
            fontFamily: _theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSans
          }
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_9__["Area"], {
          type: "monotone",
          dataKey: "total",
          stroke: "#000",
          fill: "#999"
        })))));
      });
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);
Chart.propTypes = {
  height: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_phase_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/phase-banner */ "./src/components/phase-banner/index.js");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Summary */ "./src/Summary.js");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageNotFound */ "./src/PageNotFound.js");
/* harmony import */ var _Page1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page1 */ "./src/Page1.js");
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page2 */ "./src/Page2.js");
/* harmony import */ var _FileUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FileUpload */ "./src/FileUpload.js");











var Root =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s00",
  label: "Root"
})( false ? undefined : {
  name: "b35c62",
  styles: "margin:20pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzBCIiwiZmlsZSI6Ii9hcHAvc3JjL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBQaGFzZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9waGFzZS1iYW5uZXInXG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi9TdW1tYXJ5J1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBQYWdlMSB9IGZyb20gJy4vUGFnZTEnXG5pbXBvcnQgeyBQYWdlMiB9IGZyb20gJy4vUGFnZTInXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vRmlsZVVwbG9hZCdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcblxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxSb290PlxuICAgIDxQaGFzZUJhbm5lciBwaGFzZT17PFRyYW5zPkFMUEhBPC9UcmFucz59IHBoYXNlQ29sb3I9XCJwdXJwbGVcIj5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgVGhpcyBzaXRlIHdpbGwgYmUgY2hhbmdpbmcgYXMgd2UgdGVzdCBpZGVhcyBhbmQgbGVhcm4gZnJvbSBwZW9wbGUgbGlrZVxuICAgICAgICB5b3UuXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUGhhc2VCYW5uZXI+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICA8UGFnZTEgcGF0aD1cIi9cIiAvPlxuICAgICAgICA8UGFnZTIgcGF0aD1cIi9mbGFnXCIgLz5cbiAgICAgICAgPFN1bW1hcnkgcGF0aD1cIi9zdW1tYXJ5LzppZGVudGlmaWVyXCIgLz5cbiAgICAgICAgPEZpbGVVcGxvYWRQYWdlIHBhdGg9XCIvZmlsZXVwbG9hZGVyXCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Screen =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s01",
  label: "Screen"
})( false ? undefined : {
  name: "1xa1wmv",
  styles: "margin-top:30pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTRCIiwiZmlsZSI6Ii9hcHAvc3JjL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBQaGFzZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9waGFzZS1iYW5uZXInXG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi9TdW1tYXJ5J1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBQYWdlMSB9IGZyb20gJy4vUGFnZTEnXG5pbXBvcnQgeyBQYWdlMiB9IGZyb20gJy4vUGFnZTInXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vRmlsZVVwbG9hZCdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcblxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxSb290PlxuICAgIDxQaGFzZUJhbm5lciBwaGFzZT17PFRyYW5zPkFMUEhBPC9UcmFucz59IHBoYXNlQ29sb3I9XCJwdXJwbGVcIj5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgVGhpcyBzaXRlIHdpbGwgYmUgY2hhbmdpbmcgYXMgd2UgdGVzdCBpZGVhcyBhbmQgbGVhcm4gZnJvbSBwZW9wbGUgbGlrZVxuICAgICAgICB5b3UuXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUGhhc2VCYW5uZXI+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICA8UGFnZTEgcGF0aD1cIi9cIiAvPlxuICAgICAgICA8UGFnZTIgcGF0aD1cIi9mbGFnXCIgLz5cbiAgICAgICAgPFN1bW1hcnkgcGF0aD1cIi9zdW1tYXJ5LzppZGVudGlmaWVyXCIgLz5cbiAgICAgICAgPEZpbGVVcGxvYWRQYWdlIHBhdGg9XCIvZmlsZXVwbG9hZGVyXCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Root, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_phase_banner__WEBPACK_IMPORTED_MODULE_4__["PhaseBanner"], {
    phase: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
      id: "ALPHA"
    }),
    phaseColor: "purple"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "This site will be changing as we test ideas and learn from people like you."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Screen, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PageNotFound__WEBPACK_IMPORTED_MODULE_6__["PageNotFound"], {
    "default": true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Page1__WEBPACK_IMPORTED_MODULE_7__["Page1"], {
    path: "/"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Page2__WEBPACK_IMPORTED_MODULE_8__["Page2"], {
    path: "/flag"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_5__["Summary"], {
    path: "/summary/:identifier"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FileUpload__WEBPACK_IMPORTED_MODULE_9__["FileUploadPage"], {
    path: "/fileuploader"
  }))));
};

/***/ }),

/***/ "./src/Page2.js":
/*!**********************!*\
  !*** ./src/Page2.js ***!
  \**********************/
/*! exports provided: Page2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2", function() { return Page2; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/label */ "./src/components/label/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");


/** @jsx jsx */















var submitAndNavigate = function submitAndNavigate(flagIdentifier, data) {
  flagIdentifier({
    variables: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])("/summary/".concat(encodeURIComponent(data.identifier)));
};

var validate = function validate(values) {
  var errors = {};

  if (!values.identifier) {
    errors.identifier = Object(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["i18nMark"])('Please enter information about the scam in the box.');
  }

  return errors;
};

var _ref =  false ? undefined : {
  name: "dhzcwz-MyForm",
  styles: "float:right;label:MyForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL1BhZ2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGOEIiLCJmaWxlIjoiL2FwcC9zcmMvUGFnZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEZMQUdfSURFTlRJRklFUl9NVVRBVElPTiB9IGZyb20gJy4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwnXG5pbXBvcnQgeyBQLCBMZWFkIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcblxuY29uc3Qgc3VibWl0QW5kTmF2aWdhdGUgPSAoZmxhZ0lkZW50aWZpZXIsIGRhdGEpID0+IHtcbiAgZmxhZ0lkZW50aWZpZXIoeyB2YXJpYWJsZXM6IGRhdGEgfSlcbiAgbmF2aWdhdGUoYC9zdW1tYXJ5LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEuaWRlbnRpZmllcil9YClcbn1cblxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuICBsZXQgZXJyb3JzID0ge31cbiAgaWYgKCF2YWx1ZXMuaWRlbnRpZmllcikge1xuICAgIGVycm9ycy5pZGVudGlmaWVyID0gaTE4bk1hcmsoXG4gICAgICAnUGxlYXNlIGVudGVyIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzY2FtIGluIHRoZSBib3guJyxcbiAgICApXG4gIH1cbiAgcmV0dXJuIGVycm9yc1xufVxuY29uc3QgTXlGb3JtID0gKCkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgeygpID0+IChcbiAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17RkxBR19JREVOVElGSUVSX01VVEFUSU9OfT5cbiAgICAgICAge2ZsYWdJZGVudGlmaWVyID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gc3VibWl0QW5kTmF2aWdhdGUoZmxhZ0lkZW50aWZpZXIsIGRhdGEpfVxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImlkZW50aWZpZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8TGVhZCBtdD17NX0gLz5cbiAgICAgICAgICAgICAgICAgIDxQIGZvbnRTaXplPXtbMiwgbnVsbCwgM119IGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX0gbWI9ezJ9PlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICAgICAgPFAgZm9udFNpemU9e1syLCBudWxsLCAzXX0gbGluZUhlaWdodD17WzIsIG51bGwsIDNdfSBtYj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyIHRoZSBlbWFpbCBhZGRyZXNzLCBwaG9uZSBudW1iZXIsIG9yIHdlYnNpdGUgb2YgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FtOlxuICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgaWQ9XCJpZGVudGlmaWVyXCIgbmFtZT1cImlkZW50aWZpZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgeyh7IGlucHV0LCBtZXRhIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHdpZHRoPXtbJzEwMCUnLCBudWxsLCAnNjAwcHgnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZCBibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17WyczNXB4JywgbnVsbCwgJzQ1cHgnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBtdD17M30gZGlzcGxheT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UCBmb250U2l6ZT17WzIsIG51bGwsIDNdfSBjb2xvcj1cInJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLmVycm9yICYmIG1ldGEudG91Y2hlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9e21ldGEuZXJyb3J9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1snMTAwJScsIG51bGwsICc2MDBweCddfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDb250YWluZXIgd2lkdGg9ezEgLyAyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgJmx0OyA8VHJhbnM+QmFjazwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciB3aWR0aD17MSAvIDJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5TdWJtaXQgc2NhbTwvVHJhbnM+ICZndDtcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9NdXRhdGlvbj5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5leHBvcnQgY29uc3QgUGFnZTIgPSAoKSA9PiAoXG4gIDxDb250YWluZXIgd2lkdGg9e1snMTAwJScsIG51bGwsICc2MDBweCddfSBtPVwiYXV0b1wiPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5SZXBvcnQgYSBzY2FtPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxNeUZvcm0gLz5cbiAgPC9Db250YWluZXI+XG4pXG4iXX0= */"
};

var MyForm = function MyForm() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function () {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_5__["FLAG_IDENTIFIER_MUTATION"]
    }, function (flagIdentifier) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: function onSubmit(data) {
          return submitAndNavigate(flagIdentifier, data);
        },
        validate: validate,
        render: function render(_ref2) {
          var handleSubmit = _ref2.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_label__WEBPACK_IMPORTED_MODULE_13__["Label"], {
            htmlFor: "identifier"
          }, ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["Lead"], {
            mt: 5
          }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], {
            fontSize: [2, null, 3],
            lineHeight: [2, null, 3],
            mb: 2
          }, ' '), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], {
            fontSize: [2, null, 3],
            lineHeight: [2, null, 3],
            mb: 2
          }, ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
            id: "<0>Enter the email address, phone number, or website of the scam:</0>",
            components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("b", null)]
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            id: "identifier",
            name: "identifier"
          }, function (_ref3) {
            var input = _ref3.input,
                meta = _ref3.meta;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
              width: ['100%', null, '600px']
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_text_area__WEBPACK_IMPORTED_MODULE_10__["TextArea"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              width: 1,
              border: "1px solid black",
              height: ['35px', null, '45px']
            }, input, {
              placeholder: ""
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
              mt: 3,
              display: "inline-block"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], {
              fontSize: [2, null, 3],
              color: "red"
            }, meta.error && meta.touched && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
              id: meta.error
            }))));
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
            display: "flex",
            flexDirection: "row",
            width: ['100%', null, '600px']
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
            width: 1 / 2
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_12__["ButtonLink"], {
            to: "/"
          }, "< ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
            id: "Back"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
            width: 1 / 2
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            type: "Submit",
            css: _ref
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
            id: "Submit scam"
          }), " >"))));
        }
      });
    });
  });
};

var Page2 = function Page2() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    width: ['100%', null, '600px'],
    m: "auto"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
    id: "Report a scam"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MyForm, null));
};

/***/ }),

/***/ "./src/Stats.js":
/*!**********************!*\
  !*** ./src/Stats.js ***!
  \**********************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");





var Stats = function Stats(_ref) {
  var _ref$identifier = _ref.identifier,
      identifier = _ref$identifier === void 0 ? '555-555-5555' : _ref$identifier,
      _ref$startDate = _ref.startDate,
      startDate = _ref$startDate === void 0 ? '2019-04-01' : _ref$startDate,
      _ref$endDate = _ref.endDate,
      endDate = _ref$endDate === void 0 ? '2019-04-20' : _ref$endDate,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_4__["FLAGGINGS_WITHIN"],
    variables: {
      identifier: identifier,
      startDate: startDate,
      endDate: endDate
    },
    errorPolicy: "all"
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return '';
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], {
      color: "crimson",
      fontWeight: "bolder"
    }, "Error connecting to database:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), error.message);
    var stats = data.stats;
    {
      return children(stats.flaggingsWithin);
    }
  });
};
Stats.propTypes = {
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/Summary.js":
/*!************************!*\
  !*** ./src/Summary.js ***!
  \************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/Stats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart */ "./src/Chart.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");


/** @jsx jsx */
// eslint-disable-next-line no-unused-vars










var Summary = function Summary(_ref) {
  var identifier = _ref.identifier;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    mx: 'auto',
    width: [1, 1, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Thank you for reporting."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Stats__WEBPACK_IMPORTED_MODULE_2__["Stats"], {
    identifier: identifier,
    startDate: "2019-04-01",
    endDate: new Date().toISOString().split('T')[0]
  }, function (_ref2) {
    var summary = _ref2.summary;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
      id: "You\u2019re the 12th person to help us with this scam."
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Chart__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
      data: summary
    }));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_9__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Everything we learn from people like you can help stop scams like this from happening."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_4__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_10__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report another scam"
  })));
};
Summary.propTypes = {
  identifier: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LanguageSwitching */ "./src/LanguageSwitching.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express-request-language */ "express-request-language");
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_request_language__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App */ "./src/App.js");














var assets, publicDir;
var RAZZLE_SERVER_SIDE_API_URI = "http://api:3002/graphql";

if (false) {} else {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
  publicDir = "/app/public";
}

var server = express__WEBPACK_IMPORTED_MODULE_10___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](publicDir)).use(express_request_language__WEBPACK_IMPORTED_MODULE_11___default()({
  languages: ['en', 'fr']
})).get('/assets', function (req, res) {
  res.status(200).send(JSON.stringify(assets));
}).get('/monitoring/alive', function (req, res) {
  res.status(200).send('yes');
}).get('/monitoring/ready', function (req, res) {
  res.status(200).send('yes');
}).get('/*',
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var cache, client, helmetContext, markup, helmet;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"](); // Add defaults for form fields

            cache.writeData({
              data: {
                language: req.language
              }
            });
            client = new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
              ssrMode: true,
              link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
                uri: RAZZLE_SERVER_SIDE_API_URI,
                fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default.a
              }),
              cache: cache
            });
            helmetContext = {};
            _context.prev = 4;
            _context.next = 7;
            return Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["renderToStringWithData"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__["HelmetProvider"], {
              context: helmetContext
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
              client: client
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_12__["ServerLocation"], {
              url: req.url
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitching"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_13__["default"], null))))));

          case 7:
            markup = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            // eslint-disable-next-line no-console
            console.error('Data fetching during SSR Failed:', _context.t0);

          case 13:
            helmet = helmetContext.helmet;
            res.set({
              'Content-Language': req.language
            }).status(200).send("<!DOCTYPE html>\n      <html ".concat(helmet.htmlAttributes.toString(), ">\n        <head>\n          ").concat(helmet.title.toString(), " ").concat(helmet.meta.toString(), "\n          ").concat(helmet.link.toString(), "\n          ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n          ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n        </head>\n        <body ").concat(helmet.bodyAttributes.toString(), ">\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>"));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/utils/queriesAndMutations.js":
/*!******************************************!*\
  !*** ./src/utils/queriesAndMutations.js ***!
  \******************************************/
/*! exports provided: GET_LANGUAGE_QUERY, FLAGGINGS_WITHIN, IDENTIFIER_FLAGGINGS_WITHIN, GET_STATS_QUERY, FLAG_IDENTIFIER_MUTATION, SAVE_REPORT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LANGUAGE_QUERY", function() { return GET_LANGUAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAGGINGS_WITHIN", function() { return FLAGGINGS_WITHIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFIER_FLAGGINGS_WITHIN", function() { return IDENTIFIER_FLAGGINGS_WITHIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATS_QUERY", function() { return GET_STATS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_IDENTIFIER_MUTATION", function() { return FLAG_IDENTIFIER_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_REPORT_MUTATION", function() { return SAVE_REPORT_MUTATION; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation saveReport(\n    $whatHappened: String\n    $whatWasInvolved: String\n    $whatWasInvolvedOther: String\n    $howWereYouAffected: String\n  ) {\n    saveReport(\n      whatHappened: $whatHappened\n      whatWasInvolved: $whatWasInvolved\n      whatWasInvolvedOther: $whatWasInvolvedOther\n      howWereYouAffected: $howWereYouAffected\n    ) {\n      whatHappened\n      whatWasInvolved\n      whatWasInvolvedOther\n      howWereYouAffected\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation flagIdentifier($identifier: String) {\n    flagIdentifier(identifier: $identifier) {\n      identifier\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query GetStats {\n    stats {\n      reportCount\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query($identifier: String!) {\n    stats {\n      identifierFlaggingsWithin(identifier: $identifier) {\n        identifier\n        summary {\n          date\n          total\n        }\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query($identifier: String!, $startDate: DateTime!, $endDate: DateTime!) {\n    stats {\n      flaggingsWithin(\n        identifier: $identifier\n        startDate: $startDate\n        endDate: $endDate\n      ) {\n        identifier\n        summary {\n          date\n          total\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query GetLanguage {\n    language @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_LANGUAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var FLAGGINGS_WITHIN = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var IDENTIFIER_FLAGGINGS_WITHIN = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var GET_STATS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var FLAG_IDENTIFIER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var SAVE_REPORT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());

/***/ })

};
//# sourceMappingURL=main.c5c494a059016efda8ab.hot-update.js.map