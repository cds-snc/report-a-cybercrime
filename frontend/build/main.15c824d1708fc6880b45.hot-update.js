exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/TimeFrameInfoForm.js":
/*!*******************************************!*\
  !*** ./src/p2/forms/TimeFrameInfoForm.js ***!
  \*******************************************/
/*! exports provided: TimeFrameInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameInfoForm", function() { return TimeFrameInfoForm; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");









/** @jsx jsx */












var DateSelectorAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__["finalFormAdapter"])(_components_date_picker__WEBPACK_IMPORTED_MODULE_17__["DateSelector"]);

var validate = function validate() {
  return {};
};

var TimeFrameInfoFormWrapped =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeFrameInfoFormWrapped, _Component);

  function TimeFrameInfoFormWrapped(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TimeFrameInfoFormWrapped);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeFrameInfoFormWrapped).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChange", function (date) {
      _this.startDate = date;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChangeDate", function (date) {
      _this.endDate = date;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit;

      if (_this.startDate != null && _this.startDate.length > 0) {
        data.startDate = _this.startDate.toISOString();
      } else {
        data.startDate = '';
      }

      if (_this.endDate != null && _this.endDate.length > 0) {
        data.endDate = _this.endDate.toISOString();
      } else {
        data.endDate = '';
      }

      onSubmit(client, data);
    });

    var _getTimeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__["getTimeFrame"])(props.client),
        startDate = _getTimeFrame.startDate,
        endDate = _getTimeFrame.endDate;

    _this.startDate = new Date(startDate);
    _this.endDate = new Date(endDate);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TimeFrameInfoFormWrapped, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        onSubmit: function onSubmit(data) {
          return _this2.localOnSubmit(_this2.props.client, data);
        },
        validate: validate,
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
            htmlFor: "whenDidItStart"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], {
            marginTop: [5, null, 6]
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "<0>Approximate start</0>",
            components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_15__["Text"], {
            fontSize: (1, null, 2)
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "MM/DD/YYYY"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref2) {
            var i18n = _ref2.i18n;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "whenDidItStart",
              id: "whenDidItStart",
              component: DateSelectorAdapter,
              locale: i18n._('en'),
              selected: _this2.startDate,
              onChange: _this2.handleChange,
              height: "25px",
              width: "300px"
            });
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
            htmlFor: "whenWasLastInteraction"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_15__["Text"], {
            marginTop: [5, null, 6]
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "<0>Approximate end</0>",
            components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_15__["Text"], {
            fontSize: (1, null, 2)
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "MM/DD/YYYY"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref3) {
            var i18n = _ref3.i18n;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "whenWasLastInteraction",
              id: "whenWasLastInteraction",
              component: DateSelectorAdapter,
              locale: i18n._('en'),
              selected: _this2.endDate,
              onChange: _this2.handleChangeDate,
              height: "25px",
              width: "300px"
            });
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_16__["ButtonsContainer"], {
            cancel: true,
            buttonLink: false,
            nextPage: "What happened"
          }));
        }
      });
    }
  }]);

  return TimeFrameInfoFormWrapped;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

TimeFrameInfoFormWrapped.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
var TimeFrameInfoForm = function TimeFrameInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(TimeFrameInfoFormWrapped, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      client: client
    }, props));
  });
};

/***/ })

};
//# sourceMappingURL=main.15c824d1708fc6880b45.hot-update.js.map