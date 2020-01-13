exports.id = "main";
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/FileUpload.js":
/*!***************************!*\
  !*** ./src/FileUpload.js ***!
  \***************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");








/** @jsx jsx */







var FileUploadAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUpload"]);
var FileUploadPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileUploadPage, _Component);

  function FileUploadPage() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileUploadPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileUploadPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      file: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {
      _this.setState({
        file: e.target.files[0]
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "submit", function () {
      alert('not actually uploaded: ' + _this.state.file.name);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "validate", function () {});

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileUploadPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        margin: "20px",
        onSubmit: this.submit,
        validate: this.validate,
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_9__["Field"], {
            component: FileUploadAdapter,
            onChange: _this2.onChange,
            accept: ".jpg, .jpeg, .png"
          }, "Upload Image"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_10__["P"], {
            mt: 4
          }, _this2.state.file ? _this2.state.file.name : 'No files currently selected for upload'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            type: "submit"
          }, "Submit")));
        }
      });
    }
  }]);

  return FileUploadPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVzBCIiwiZmlsZSI6Ii9hcHAvc3JjL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBQaGFzZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9waGFzZS1iYW5uZXInXG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi9TdW1tYXJ5J1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBQYWdlMSB9IGZyb20gJy4vUGFnZTEnXG5pbXBvcnQgeyBQYWdlMiB9IGZyb20gJy4vUGFnZTInXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vRmlsZVVwbG9hZCdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcblxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxSb290PlxuICAgIDxQaGFzZUJhbm5lciBwaGFzZT17PFRyYW5zPkFMUEhBPC9UcmFucz59IHBoYXNlQ29sb3I9XCJwdXJwbGVcIj5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgVGhpcyBzaXRlIHdpbGwgYmUgY2hhbmdpbmcgYXMgd2UgdGVzdCBpZGVhcyBhbmQgbGVhcm4gZnJvbSBwZW9wbGUgbGlrZVxuICAgICAgICB5b3UuXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUGhhc2VCYW5uZXI+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICA8UGFnZTEgcGF0aD1cIi9cIiAvPlxuICAgICAgICA8UGFnZTIgcGF0aD1cIi9mbGFnXCIgLz5cbiAgICAgICAgPFN1bW1hcnkgcGF0aD1cIi9zdW1tYXJ5XCIgLz5cbiAgICAgICAgPEZpbGVVcGxvYWRQYWdlIHBhdGg9XCIvZmlsZXVwbG9hZGVyXCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Screen =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s01",
  label: "Screen"
})( false ? undefined : {
  name: "1xa1wmv",
  styles: "margin-top:30pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZTRCIiwiZmlsZSI6Ii9hcHAvc3JjL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBQaGFzZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9waGFzZS1iYW5uZXInXG5pbXBvcnQgeyBTdW1tYXJ5IH0gZnJvbSAnLi9TdW1tYXJ5J1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBQYWdlMSB9IGZyb20gJy4vUGFnZTEnXG5pbXBvcnQgeyBQYWdlMiB9IGZyb20gJy4vUGFnZTInXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vRmlsZVVwbG9hZCdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcblxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxSb290PlxuICAgIDxQaGFzZUJhbm5lciBwaGFzZT17PFRyYW5zPkFMUEhBPC9UcmFucz59IHBoYXNlQ29sb3I9XCJwdXJwbGVcIj5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgVGhpcyBzaXRlIHdpbGwgYmUgY2hhbmdpbmcgYXMgd2UgdGVzdCBpZGVhcyBhbmQgbGVhcm4gZnJvbSBwZW9wbGUgbGlrZVxuICAgICAgICB5b3UuXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUGhhc2VCYW5uZXI+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICA8UGFnZTEgcGF0aD1cIi9cIiAvPlxuICAgICAgICA8UGFnZTIgcGF0aD1cIi9mbGFnXCIgLz5cbiAgICAgICAgPFN1bW1hcnkgcGF0aD1cIi9zdW1tYXJ5XCIgLz5cbiAgICAgICAgPEZpbGVVcGxvYWRQYWdlIHBhdGg9XCIvZmlsZXVwbG9hZGVyXCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
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
    path: "/summary"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FileUpload__WEBPACK_IMPORTED_MODULE_9__["FileUploadPage"], {
    path: "/fileuploader"
  }))));
};

/***/ }),

/***/ "./src/components/button-link/index.js":
/*!*********************************************!*\
  !*** ./src/components/button-link/index.js ***!
  \*********************************************/
/*! exports provided: ButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return ButtonLink; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");







var BaseButtonLink =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__["cleanProps"])(prop);
  },
  target: "e1hrp17d0",
  label: "BaseButtonLink"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";background:none;border:none;color:white;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";text-decoration:underline;&:hover{cursor:pointer;}&:focus{outline:3px solid ", function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.focusColor;
}, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUUiLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9idXR0b24tbGluay9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxpbmVIZWlnaHQsIHNwYWNlLCBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuY29uc3QgQmFzZUJ1dHRvbkxpbmsgPSBzdHlsZWQoJ2J1dHRvbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5mb2N1c0NvbG9yfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uTGluayA9IHByb3BzID0+IChcbiAgPEJhc2VCdXR0b25MaW5rXG4gICAgZm9udFNpemU9e1sxLCBudWxsLCAyXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMSwgbnVsbCwgMl19XG4gICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuIl19 */"));

var ButtonLink = function ButtonLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BaseButtonLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [1, null, 2],
    fontWeight: "normal",
    lineHeight: [1, null, 2],
    color: "white"
  }, props));
};
ButtonLink.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var BaseButton =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_4__["cleanProps"])(prop);
  },
  target: "ei70dpk0",
  label: "BaseButton"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;border:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1xuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIGNvbG9yU3R5bGUsXG4gIGNvbG9yLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEJhc2VCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtjb2xvclN0eWxlfTtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gcHJvcHMgPT4gKFxuICA8QmFzZUJ1dHRvblxuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIGNvbG9ycz1cImJ1dHRvblwiXG4gICAgbXQ9e1syLCBudWxsLCAzXX1cbiAgICBweT17MX1cbiAgICBweD17WzIsIG51bGwsIDNdfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbilcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuIl19 */"));

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BaseButton, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    fontWeight: "normal",
    lineHeight: [2, null, 3],
    colors: "button",
    mt: [2, null, 3],
    py: 1,
    px: [2, null, 3]
  }, props));
};
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

/***/ }),

/***/ "./src/components/container/index.js":
/*!*******************************************!*\
  !*** ./src/components/container/index.js ***!
  \*******************************************/
/*! exports provided: Container, Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");






var Container =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__["cleanProps"])(prop);
  },
  target: "ern13v50",
  label: "Container"
})(styled_system__WEBPACK_IMPORTED_MODULE_4__["alignItems"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifyContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flex"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexWrap"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexBasis"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexDirection"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["width"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["height"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifySelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignSelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borders"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borderColor"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["textAlign"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["position"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["top"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["bottom"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["left"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["right"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["zIndex"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDRSIsImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBhbGlnbkNvbnRlbnQsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4V3JhcCxcbiAgZmxleEJhc2lzLFxuICBmbGV4RGlyZWN0aW9uLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjb2xvcixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZsZXgsXG4gIGp1c3RpZnlTZWxmLFxuICBkaXNwbGF5LFxuICBhbGlnblNlbGYsXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ24sXG4gIHBvc2l0aW9uLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHpJbmRleCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHthbGlnbkl0ZW1zfVxuICAke2FsaWduQ29udGVudH1cbiAgJHtqdXN0aWZ5Q29udGVudH1cbiAgJHtmbGV4fVxuICAke2ZsZXhXcmFwfVxuICAke2ZsZXhCYXNpc31cbiAgJHtmbGV4RGlyZWN0aW9ufVxuICAke3dpZHRofVxuICAke2hlaWdodH1cbiAgJHtjb2xvcn1cbiAgJHtkaXNwbGF5fVxuICAke3NwYWNlfVxuICAke2p1c3RpZnlTZWxmfVxuICAke2FsaWduU2VsZn1cbiAgJHtib3JkZXJzfVxuICAke2JvcmRlckNvbG9yfVxuICAke3RleHRBbGlnbn1cbiAgJHtwb3NpdGlvbn1cbiAgJHt0b3B9XG4gICR7Ym90dG9tfVxuICAke2xlZnR9XG4gICR7cmlnaHR9XG4gICR7ekluZGV4fVxuYFxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBwcm9wcyA9PiAoXG4gIDxtYWluXG4gICAgY3NzPXtjc3NgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBtPVwiYXV0b1wiIHdpZHRoPXtbOSAvIDEwLCBudWxsLCA0IC8gNV19IHsuLi5wcm9wc30+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gIDwvbWFpbj5cbilcblxuQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuIl19 */");

var _ref =  false ? undefined : {
  name: "l044st-Content",
  styles: "flex:1 0 auto;label:Content;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEWSIsImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBhbGlnbkNvbnRlbnQsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4V3JhcCxcbiAgZmxleEJhc2lzLFxuICBmbGV4RGlyZWN0aW9uLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjb2xvcixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZsZXgsXG4gIGp1c3RpZnlTZWxmLFxuICBkaXNwbGF5LFxuICBhbGlnblNlbGYsXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ24sXG4gIHBvc2l0aW9uLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHpJbmRleCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHthbGlnbkl0ZW1zfVxuICAke2FsaWduQ29udGVudH1cbiAgJHtqdXN0aWZ5Q29udGVudH1cbiAgJHtmbGV4fVxuICAke2ZsZXhXcmFwfVxuICAke2ZsZXhCYXNpc31cbiAgJHtmbGV4RGlyZWN0aW9ufVxuICAke3dpZHRofVxuICAke2hlaWdodH1cbiAgJHtjb2xvcn1cbiAgJHtkaXNwbGF5fVxuICAke3NwYWNlfVxuICAke2p1c3RpZnlTZWxmfVxuICAke2FsaWduU2VsZn1cbiAgJHtib3JkZXJzfVxuICAke2JvcmRlckNvbG9yfVxuICAke3RleHRBbGlnbn1cbiAgJHtwb3NpdGlvbn1cbiAgJHt0b3B9XG4gICR7Ym90dG9tfVxuICAke2xlZnR9XG4gICR7cmlnaHR9XG4gICR7ekluZGV4fVxuYFxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBwcm9wcyA9PiAoXG4gIDxtYWluXG4gICAgY3NzPXtjc3NgXG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBtPVwiYXV0b1wiIHdpZHRoPXtbOSAvIDEwLCBudWxsLCA0IC8gNV19IHsuLi5wcm9wc30+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gIDwvbWFpbj5cbilcblxuQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuIl19 */"
};

var Content = function Content(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("main", {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Container, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    m: "auto",
    width: [9 / 10, null, 4 / 5]
  }, props), props.children));
};
Content.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/file-upload/index.css":
/*!**********************************************!*\
  !*** ./src/components/file-upload/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#uploader:focus + label {\n  outline: 3px solid #ffbf47;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/components/file-upload/index.js":
/*!*********************************************!*\
  !*** ./src/components/file-upload/index.js ***!
  \*********************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input */ "./src/components/input/index.js");




/** @jsx jsx */







__webpack_require__(/*! ./index.css */ "./src/components/file-upload/index.css");

var FileUpload = function FileUpload(_ref) {
  var onChange = _ref.onChange,
      accept = _ref.accept,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["onChange", "accept"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    type: "file",
    id: "uploader",
    name: "uploader",
    accept: accept,
    onChange: onChange,
    width: "0"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_label__WEBPACK_IMPORTED_MODULE_7__["Label"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    colors: "button",
    padding: 1,
    htmlFor: "uploader"
  }, props), props.children));
};
FileUpload.defaultProps = {
  accept: undefined,
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3]
};
FileUpload.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["color"].propTypes);

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: Header, H1, H2, H3, H4, H5, H6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presets */ "./src/components/header/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H6"]; });






var Header =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "eoh9q0q0",
  label: "Header"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNFIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnc3BhbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHt0ZXh0QWxpZ259O1xuYFxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IEgxLCBIMiwgSDMsIEg0LCBINSwgSDYgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
Header.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"].propTypes);


/***/ }),

/***/ "./src/components/header/presets.js":
/*!******************************************!*\
  !*** ./src/components/header/presets.js ***!
  \******************************************/
/*! exports provided: H1, H2, H3, H4, H5, H6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return H6; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/header/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var H1 = function H1(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h1",
    fontSize: [5, null, 7],
    lineHeight: [5, null, 7],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H1.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H2 = function H2(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h2",
    fontSize: [5, null, 6],
    lineHeight: [5, null, 6],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H2.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H3 = function H3(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h3",
    fontSize: [4, null, 5],
    lineHeight: [4, null, 5],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H3.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H4 = function H4(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h4",
    fontSize: [3, null, 4],
    lineHeight: [3, null, 4],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H4.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H5 = function H5(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h5",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H5.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H6 = function H6(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h6",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H6.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Input =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('input', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__["cleanProps"])(prop);
  },
  target: "e8tni2c0",
  label: "Input"
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHtcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgc3BhY2UsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBkaXNwbGF5LFxuICBwb3NpdGlvbixcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICB6SW5kZXgsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHtoZWlnaHR9O1xuICAke3dpZHRofTtcbiAgJHtzcGFjZX07XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuICAke2Rpc3BsYXl9O1xuICAke3Bvc2l0aW9ufTtcbiAgJHt0b3B9O1xuICAke3JpZ2h0fTtcbiAgJHtib3R0b219O1xuICAke2xlZnR9O1xuICAke3pJbmRleH07XG5gXG4iXX0= */"));

/***/ }),

/***/ "./src/components/label/index.js":
/*!***************************************!*\
  !*** ./src/components/label/index.js ***!
  \***************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Label =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__["cleanProps"])(prop);
  },
  target: "edxrpbg0",
  label: "Label"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvbGFiZWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JFIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGFiZWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgY29sb3JTdHlsZSxcbiAgZGlzcGxheSxcbiAgYm9yZGVyLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgcG9zaXRpb24sXG4gIHpJbmRleCxcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtjb2xvclN0eWxlfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtib3JkZXJ9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7ekluZGV4fTtcbiAgJHt0b3B9O1xuICAke3JpZ2h0fTtcbiAgJHtib3R0b219O1xuICAke2xlZnR9O1xuYFxuIl19 */"));

/***/ }),

/***/ "./src/components/list-item/index.js":
/*!*******************************************!*\
  !*** ./src/components/list-item/index.js ***!
  \*******************************************/
/*! exports provided: ListItem, Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/list-item/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Li"]; });





var ListItem =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('li', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "e58ogiq0",
  label: "ListItem"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFFIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZm9udFdlaWdodCxcbiAgZGlzcGxheSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZCgnbGknLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBtYXJnaW46IDA7XG4gICR7Zm9udFNpemV9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7Zm9udFdlaWdodH07XG4gICR7ZGlzcGxheX07XG5gXG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbn1cblxuZXhwb3J0IHsgTGkgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
ListItem.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["display"].propTypes);


/***/ }),

/***/ "./src/components/paragraph/index.js":
/*!*******************************************!*\
  !*** ./src/components/paragraph/index.js ***!
  \*******************************************/
/*! exports provided: Paragraph, P, Lead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/paragraph/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lead", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Lead"]; });





var Paragraph =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('p', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "e14egob10",
  label: "Paragraph"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvcGFyYWdyYXBoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FIiwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvcGFyYWdyYXBoL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBmb250U2l6ZSwgbGluZUhlaWdodCwgc3BhY2UsIGNvbG9yLCBmb250V2VpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKCdwJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Y29sb3J9O1xuICAke2ZvbnRXZWlnaHR9O1xuYFxuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IFAsIExlYWQgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
Paragraph.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes);


/***/ }),

/***/ "./src/components/text-area/index.js":
/*!*******************************************!*\
  !*** ./src/components/text-area/index.js ***!
  \*******************************************/
/*! exports provided: StyledTextArea, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTextArea", function() { return StyledTextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");







var StyledTextArea =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()('textarea', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_6__["cleanProps"])(prop);
  },
  target: "e1vd0c6m0",
  label: "StyledTextArea"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["borders"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvdGV4dC1hcmVhL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRSIsImZpbGUiOiIvYXBwL3NyYy9jb21wb25lbnRzL3RleHQtYXJlYS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgY29sb3JTdHlsZSxcbiAgZm9udFdlaWdodCxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgYm9yZGVycyxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGV4dEFyZWEgPSBzdHlsZWQoJ3RleHRhcmVhJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICAke2Rpc3BsYXl9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Y29sb3JTdHlsZX07XG4gICR7Y29sb3J9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke3dpZHRofTtcbiAgJHtoZWlnaHR9O1xuICAke2JvcmRlcnN9XG5gXG5TdHlsZWRUZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yU3R5bGUucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IHByb3BzID0+IChcbiAgPFN0eWxlZFRleHRBcmVhXG4gICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBjb2xvcnM9XCJ0ZXh0QXJlYVwiXG4gICAgd2lkdGg9e1snMzAwcHgnLCBudWxsLCAnNjAwcHgnXX1cbiAgICBoZWlnaHQ9e1snMjAwcHgnLCBudWxsLCAnMzAwcHgnXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvU3R5bGVkVGV4dEFyZWE+XG4pXG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG4iXX0= */");
StyledTextArea.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["colorStyle"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["height"].propTypes);
var TextArea = function TextArea(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTextArea, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    display: "block",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    colors: "textArea",
    width: ['300px', null, '600px'],
    height: ['200px', null, '300px']
  }, props), props.children);
};
TextArea.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

/***/ }),

/***/ "./src/components/text/index.js":
/*!**************************************!*\
  !*** ./src/components/text/index.js ***!
  \**************************************/
/*! exports provided: StyledSpan, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSpan", function() { return StyledSpan; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presets */ "./src/components/text/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _presets__WEBPACK_IMPORTED_MODULE_3__["Text"]; });




var StyledSpan =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_2__["cleanProps"])(prop);
  },
  target: "e1fxharu0",
  label: "StyledSpan"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvdGV4dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkUiLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy90ZXh0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1xuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBib3JkZXIsXG4gIGJvcmRlckNvbG9yLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBwb3NpdGlvbixcbiAgekluZGV4LFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHRleHRBbGlnbixcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZCgnc3BhbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtib3JkZXJ9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7ekluZGV4fTtcbiAgJHt0b3B9O1xuICAke3JpZ2h0fTtcbiAgJHtib3R0b219O1xuICAke2xlZnR9O1xuICAke3RleHRBbGlnbn1cbmBcbmV4cG9ydCB7IFRleHQgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */");


/***/ }),

/***/ "./src/components/unordered-list/index.js":
/*!************************************************!*\
  !*** ./src/components/unordered-list/index.js ***!
  \************************************************/
/*! exports provided: UnorderedList, Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return UnorderedList; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/unordered-list/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Ul"]; });





var UnorderedList =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('ul', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "ecicgo50",
  label: "UnorderedList"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;padding:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUUiLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvbnRTaXplLCBsaW5lSGVpZ2h0LCBzcGFjZSwgY29sb3IsIGZvbnRXZWlnaHQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IFVub3JkZXJlZExpc3QgPSBzdHlsZWQoJ3VsJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7Y29sb3J9O1xuYFxuVW5vcmRlcmVkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbn1cblxuZXhwb3J0IHsgVWwgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
UnorderedList.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes);


/***/ }),

/***/ "./src/utils/asAnchor.js":
/*!*******************************!*\
  !*** ./src/utils/asAnchor.js ***!
  \*******************************/
/*! exports provided: asAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAnchor", function() { return asAnchor; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cleanProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);






var asAnchor = function asAnchor(AnchorType) {
  var Anchor = function Anchor(props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorType, props, props.children);
  };

  Anchor.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
  };

  var StyledAnchor =
  /*#__PURE__*/
  _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(Anchor, {
    shouldForwardProp: function shouldForwardProp(prop) {
      return Object(_cleanProps__WEBPACK_IMPORTED_MODULE_4__["cleanProps"])(prop);
    },
    target: "exrd7iu0",
    label: "StyledAnchor"
  })("font-family:", function (_ref) {
    var theme = _ref.theme;
    return theme.fontSans;
  }, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvc3JjL3V0aWxzL2FzQW5jaG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCSSIsImZpbGUiOiIvYXBwL3NyYy91dGlscy9hc0FuY2hvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBmb250V2VpZ2h0LFxuICBjb2xvclN0eWxlLFxuICBkaXNwbGF5LFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4vY2xlYW5Qcm9wcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IGFzQW5jaG9yID0gQW5jaG9yVHlwZSA9PiB7XG4gIGNvbnN0IEFuY2hvciA9IHByb3BzID0+IDxBbmNob3JUeXBlIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvQW5jaG9yVHlwZT5cblxuICBBbmNob3IucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgY29uc3QgU3R5bGVkQW5jaG9yID0gc3R5bGVkKEFuY2hvciwge1xuICAgIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG4gIH0pYFxuICAgIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgICBtYXJnaW46IDA7XG4gICAgJHtmb250U2l6ZX07XG4gICAgJHtsaW5lSGVpZ2h0fTtcbiAgICAke3NwYWNlfTtcbiAgICAke2NvbG9yU3R5bGV9O1xuICAgICR7Zm9udFdlaWdodH07XG4gICAgJHtkaXNwbGF5fTtcbiAgYFxuXG4gIFN0eWxlZEFuY2hvci5wcm9wVHlwZXMgPSB7XG4gICAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAgIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAgIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgICAuLi5jb2xvclN0eWxlLnByb3BUeXBlcyxcbiAgICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgfVxuXG4gIHJldHVybiBTdHlsZWRBbmNob3Jcbn1cbiJdfQ== */"));

  StyledAnchor.propTypes = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["display"].propTypes);
  return StyledAnchor;
};

/***/ }),

/***/ "./src/utils/cleanProps.js":
/*!*********************************!*\
  !*** ./src/utils/cleanProps.js ***!
  \*********************************/
/*! exports provided: cleanProps, styledSystemProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanProps", function() { return cleanProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledSystemProps", function() { return styledSystemProps; });
var cleanProps = function cleanProps(prop) {
  if (!styledSystemProps.includes(prop) && prop !== 'as') return true;
  return false;
};
var styledSystemProps = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'color', 'bg', 'backgroundColor', 'width', 'fontSize', 'fontWeight', 'lineHeight', 'textAlign', 'fontStyle', 'letterSpacing', 'display', 'maxWidth', 'minWidth', 'height', 'minHeight', 'maxHeight', 'size', 'verticalAlign', 'alignItems', 'alignContent', 'justifyItems', 'justifyContent', 'flexWrap', 'flexBasis', 'flexDirection', 'flex', 'justifySelf', 'alignSelf', 'order', 'gridGap', 'gridColumnGap', 'gridRowGap', 'gridColumn', 'gridRow', 'gridAutoFlow', 'gridAutoColumns', 'gridAutoRows', 'gridTemplateColumns', 'gridTemplateRows', 'gridTemplateAreas', 'gridArea', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderRadius', 'borders', 'boxShadow', 'opacity', 'overflow', 'background', 'backgroundImage', 'backgroundSize', 'backgroundPosition', 'backgroundRepeat', 'position', 'zIndex', 'top', 'right', 'bottom', 'left', 'buttons', 'textStyles', 'colorStyles', 'colors'];

/***/ }),

/***/ "./src/utils/finalFormAdapter.js":
/*!***************************************!*\
  !*** ./src/utils/finalFormAdapter.js ***!
  \***************************************/
/*! exports provided: finalFormAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalFormAdapter", function() { return finalFormAdapter; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);






var finalFormAdapter = function finalFormAdapter(Input) {
  var FinalFormInput = function FinalFormInput(_ref) {
    var input = _ref.input,
        rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["input"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, input, rest));
  };

  FinalFormInput.propTypes = {
    input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
      onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
      onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
    }, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"].propTypes))
  };
  return FinalFormInput;
};

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "clean-element":
false,

/***/ "clean-tag":
false

};
//# sourceMappingURL=main.408a89896e0d7e868e35.hot-update.js.map