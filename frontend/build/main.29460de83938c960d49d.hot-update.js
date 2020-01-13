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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xhbmRpbmdQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9MYW5kaW5nUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmV4cG9ydCBjb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlJlcG9ydCBhIHNjYW08L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIFRlbGwgdGhlIFJDTVAncyBOYXRpb25hbCBDeWJlcmNyaW1lIENvb3JkaW5hdGlvbiBVbml0IChOQzMpIGFib3V0IGFcbiAgICAgICAgc2NhbS5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBOQzMgd2lsbCBhbmFseXplIHlvdXIgcmVwb3J0IGFuZCB3b3JrIHdpdGggcG9saWNlIGFjcm9zcyBDYW5hZGEgdG8gc3RvcFxuICAgICAgICB0aGlzIGZyb20gaGFwcGVuaW5nIGFnYWluLlxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19PlxuICAgICAgPFRyYW5zPllvdSB3aWxsIGJlIGFza2VkIHRvOjwvVHJhbnM+XG4gICAgPC9IMj5cbiAgICA8UD5cbiAgICAgIDx1bCBmb250U2l6ZT17WzgsIG51bGwsIDhdfT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxUcmFucz5EZXNjcmliZSB3aGF0IGhhcHBlbmVkPC9UcmFucz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxUcmFucz5TcGVjaWZ5IHdoZXRoZXIgbW9uZXkgd2FzIGxvc3Q8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPkFkZCBzY2FtbWVyIGRldGFpbHM8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPkF0dGFjaCBzdXBwb3J0aW5nIGZpbGVzPC9UcmFucz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgPEJ1dHRvbkxpbmsgY29sb3I9XCJibGFja1wiIG1iPXtbMywgbnVsbCwgNV19IHRvPVwic2NhbWluZm9cIj5cbiAgICAgICAgPFRyYW5zPlJlcG9ydCBub3c8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvUD5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
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
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H2"], {
    fontSize: [4, null, 5]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You will be asked to:"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    fontSize: [8, null, 8]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Describe what happened"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify whether money was lost"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Add scammer details"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Attach supporting files"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: "scaminfo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Report now"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.29460de83938c960d49d.hot-update.js.map