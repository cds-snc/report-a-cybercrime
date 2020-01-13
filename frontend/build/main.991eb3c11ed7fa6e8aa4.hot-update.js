exports.id = "main";
exports.modules = {

/***/ "./src/LandingPage.js":
/*!****************************!*\
  !*** ./src/LandingPage.js ***!
  \****************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");



/* eslint-disable react/no-unescaped-entities */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1j4lex70",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xhbmRpbmdQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9MYW5kaW5nUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuZXhwb3J0IGNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8SDEgZm9udFNpemU9e1s1LCBudWxsLCA2XX0+XG4gICAgICA8VHJhbnM+UmVwb3J0IGEgc2NhbTwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgVGVsbCB0aGUgUkNNUCdzIE5hdGlvbmFsIEN5YmVyY3JpbWUgQ29vcmRpbmF0aW9uIFVuaXQgKE5DMykgYWJvdXQgYVxuICAgICAgICBzY2FtLiBcbiAgICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+TkMzIHdpbGwgYW5hbHl6ZSB5b3VyIHJlcG9ydCBhbmQgd29yayB3aXRoIHBvbGljZSBhY3Jvc3MgQ2FuYWRhIHRvXG4gICAgICAgIHN0b3AgdGhpcyBmcm9tIGhhcHBlbmluZyBhZ2Fpbi4gXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgWW91IHdpbGwgYmUgYXNrZWQgdG86XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8b2wgZm9udFNpemU9e1s4LCBudWxsLCA4XX0+XG4gICAgICA8bGk+XG4gICAgICAgIDxUcmFucz5EZXNjcmliZSB3aGF0IGhhcHBlbmVkPC9UcmFucz5cbiAgICAgIDwvbGk+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsaT5cbiAgICAgICAgPFRyYW5zPlNwZWNpZnkgaWYgbW9uZXkgd2FzIGxvc3Q8L1RyYW5zPlxuICAgICAgPC9saT5cbiAgICAgIDxiciAvPlxuICAgICAgPGxpPlxuICAgICAgICA8VHJhbnM+QWRkIHNjYW1tZXIgZGV0YWlsczwvVHJhbnM+XG4gICAgICA8L2xpPlxuICAgICAgPGJyIC8+XG4gICAgICA8bGk+XG4gICAgICAgIDxUcmFucz5VcGxvYWQgc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICA8L2xpPlxuICAgICAgPGJyIC8+XG4gICAgPC9vbD5cbiAgICA8UD5cbiAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz1cImlmdmljdGltcXVlc3Rpb25cIj5cbiAgICAgICAgPFRyYW5zPlJlcG9ydCBub3c8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvUD5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var LandingPage = function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CenterContent, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], {
    fontSize: [5, null, 6]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Report a scam"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Tell the RCMP's National Cybercrime Coordination Unit (NC3) about a scam."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "NC3 will analyze your report and work with police across Canada to stop this from happening again."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You will be asked to:"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ol", {
    fontSize: [8, null, 8]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Describe what happened"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify if money was lost"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Add scammer details"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Upload supporting files"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: "ifvictimquestion"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Report now"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.991eb3c11ed7fa6e8aa4.hot-update.js.map