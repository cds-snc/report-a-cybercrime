exports.id = "main";
exports.modules = {

/***/ "./src/p1/FileUploadPage.js":
/*!**********************************!*\
  !*** ./src/p1/FileUploadPage.js ***!
  \**********************************/
/*! exports provided: FileUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadPage", function() { return FileUploadPage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");








/**@jsx jsx */


















var FileUploadInternal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileUploadInternal, _Component);

  function FileUploadInternal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileUploadInternal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileUploadInternal).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {
      _this.setState({
        files: _this.state.files.concat(e.target.files[0])
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "removeFile", function (index) {
      var newFiles = _this.state.files;
      newFiles.splice(index, 1);

      _this.setState({
        files: newFiles
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "submitAndNavigate", function (client) {
      var files = _this.state.files.map(function (file) {
        return file.name;
      });

      var data = {
        files: files
      };
      client.writeData({
        data: data
      }); // TODO: actually upload files

      Object(_reach_router__WEBPACK_IMPORTED_MODULE_10__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getDoneForms"])(client) ? 'confirmation' : 'contactinfoquestion');
    });

    _this.state = {
      files: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getFiles"])(props.client).map(function (name) {
        return {
          name: name
        };
      })
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileUploadInternal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var files = this.state.files;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_20__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_19__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        display: "flex",
        width: "90%",
        flexDirection: "row",
        marginBottom: "20px"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_21__["Steps"], {
        activeStep: 3,
        steps: [{}, {}, {}, {}, {}]
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Attach supporting files"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Supporting files could include copies of emails, conversations, and receipts. Any documentation could serve as evidence for police. Attach one file at a time."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        width: "300px",
        marginTop: [2, null, 5],
        marginBottom: [2, null, 5],
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_18__["FileUpload"], {
        onChange: this.onChange,
        paddingLeft: "15px",
        paddingRight: "15px"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Add file"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: ""
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("hr", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["I18n"], null, function (_ref) {
        var i18n = _ref.i18n;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H2"], {
          fontSize: [3, null, 5]
        }, i18n._("{0, plural, one {# file attached} other {# files attached}}", {
          0: files.length
        }));
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, files.map(function (f, index) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: "300px",
          marginBottom: [2, null, 3],
          key: index,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], null, f.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          "float": "right",
          marginTop: 0,
          backgroundColor: "crimson",
          type: "button",
          onClick: function onClick() {
            return _this2.removeFile(index);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Remove"
        })));
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: "300px",
          marginTop: [7, null, 8],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          onClick: function onClick() {
            return _this2.submitAndNavigate(client);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Continue"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_17__["Link"], {
          type: "button",
          color: "black",
          to: "/p1",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Cancel report"
        }))));
      }));
    }
  }]);

  return FileUploadInternal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

FileUploadInternal.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var FileUploadPage = function FileUploadPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(FileUploadInternal, {
      client: client
    });
  });
};

/***/ })

};
//# sourceMappingURL=main.671dd5fce4c05bc83f68.hot-update.js.map