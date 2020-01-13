exports.id = "main";
exports.modules = {

/***/ "./src/ThankYou.js":
/*!*************************!*\
  !*** ./src/ThankYou.js ***!
  \*************************/
/*! exports provided: ThankYou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return ThankYou; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");



/**@jsx jsx */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e4g4yyb0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBBIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5leHBvcnQgY29uc3QgVGhhbmtZb3UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5UaGFuayB5b3UgZm9yIHJlcG9ydGluZyE8L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFAgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIDxzdHJvbmc+VGhlIFJDTVAgaGFzIHJlY2VpdmVkIHlvdXIgcmVwb3J0Ljwvc3Ryb25nPlxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIEFuIGFuYWx5c3Qgd2lsbCBhc3Nlc3MgdGhlIGluZm9ybWF0aW9uLCBhbmFseXplIGl0IHdpdGggb3RoZXIgcmVwb3J0cywgYW5kIGRlY2lkZSB3aGV0aGVyIHRoZSByZXBvcnQgY2FuIGJlY29tZSBhIHBvbGljZSBpbnZlc3RpZ2F0aW9uLlxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIElmIHlvdXIgcmVwb3J0IGJlY29tZXMgYW4gaW52ZXN0aWdhdGlvbiwgYSBsb2NhbCBwb2xpY2Ugb2ZmaWNlciBtYXkgYmUgaW4gdG91Y2ggdG8gZ2V0IG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICA8VHJhbnM+WW91IG1heSBhbHNvIHdhbnQgdG86PC9UcmFucz5cbiAgICA8L0gyPlxuICA8UD5cbiAgPHVsPlJlcG9ydCB0byB0aGUgc2VydmljZSBwcm92aWRlciB3aGVyZSB0aGUgc2NhbSB0b29rIHBsYWNlPC91bD5cbiAgPHVsPlJlcG9ydCB0byB5b3VyIGZpbmFuY2lhbCBpbnN0aXR1dGlvbiwgaWYgeW91IGxvc3QgbW9uZXk8L3VsPlxuICA8dWw+UmVwb3J0IHRvIDxBIGhyZWY9XCJodHRwczovL3d3dy5jb25zdW1lci5lcXVpZmF4LmNhL3BlcnNvbmFsL1wiPkVxdWlmYXg8L0E+IGFuZCA8QSBocmVmPVwiaHR0cHM6Ly93d3cudHJhbnN1bmlvbi5jYS9cIj5UcmFuc1VuaW9uPC9BPiwgaWYgeW91ciBpZGVudGl0eSB3YXMgc3RvbGVuPC91bD5cbiAgPC9QPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Thank you for reporting!"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "<0>The RCMP has received your report.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "An analyst will assess the information, analyze it with other reports, and decide whether the report can become a police investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your report becomes an investigation, a local police officer may be in touch to get more information."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You may also want to:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, "Report to the service provider where the scam took place"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, "Report to your financial institution, if you lost money"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, "Report to ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.consumer.equifax.ca/personal/"
  }, "Equifax"), " and ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.transunion.ca/"
  }, "TransUnion"), ", if your identity was stolen")));
};

/***/ })

};
//# sourceMappingURL=main.e355981fcca8acc68f9d.hot-update.js.map