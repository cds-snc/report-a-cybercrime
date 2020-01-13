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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBBIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5leHBvcnQgY29uc3QgVGhhbmtZb3UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5UaGFuayB5b3UgZm9yIHJlcG9ydGluZzwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UCBmb250U2l6ZT17WzQsIG51bGwsIDVdfT5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgPHN0cm9uZz5Zb3UgYXJlIG5vdCBhbG9uZS48L3N0cm9uZz5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBUaGUgUkNNUCBoYXMgcmVjZWl2ZWQgeW91ciByZXBvcnQgYW5kIHdpbGwgYXNzZXNzIHRoZSBpbmZvcm1hdGlvbiwgY29tYmluZSBpdCB3aXRoIG90aGVyIHJlcG9ydHMsXG4gICAgICAgIGFuZCBkZWNpZGUgd2hldGhlciB0aGUgcmVwb3J0IGNhbiBiZWNvbWUgYSBwb2xpY2UgaW52ZXN0aWdhdGlvbi5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBJZiB5b3VyIHJlcG9ydCBiZWNvbWVzIGFuIGludmVzdGlnYXRpb24sIGEgbG9jYWwgcG9saWNlIG9mZmljZXIgbWF5IGJlXG4gICAgICAgIGluIHRvdWNoIHRvIGdldCBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19PlxuICAgICAgPFRyYW5zPllvdSBtYXkgYWxzbyB3YW50IHRvOjwvVHJhbnM+XG4gICAgPC9IMj5cbiAgICA8UD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlJlcG9ydCB0byB0aGUgc2VydmljZSBwcm92aWRlciB3aGVyZSB0aGUgc2NhbSB0b29rIHBsYWNlPC9saT5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxsaT5SZXBvcnQgdG8geW91ciBmaW5hbmNpYWwgaW5zdGl0dXRpb24gaWYgeW91IGxvc3QgbW9uZXk8L2xpPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIFJlcG9ydCB0byA8QSBocmVmPVwiaHR0cHM6Ly93d3cuY29uc3VtZXIuZXF1aWZheC5jYS9wZXJzb25hbC9cIj5FcXVpZmF4PC9BPiBhbmR7JyAnfVxuICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL3d3dy50cmFuc3VuaW9uLmNhL1wiPlRyYW5zVW5pb248L0E+IGlmIHlvdXIgaWRlbnRpdHlcbiAgICAgICAgICB3YXMgc3RvbGVuLlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L1A+XG4gIDwvQ2VudGVyQ29udGVudD5cbilcbiJdfQ== */"
});

var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "<0>You are not alone.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "The RCMP has received your report and will assess the information, combine it with other reports, and decide whether the report can become a police investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your report becomes an investigation, a local police officer may be in touch to get more information."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You may also want to:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to the service provider where the scam took place"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to your financial institution if you lost money"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.consumer.equifax.ca/personal/"
  }, "Equifax"), " and", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.transunion.ca/"
  }, "TransUnion"), " if your identity was stolen."))));
};

/***/ })

};
//# sourceMappingURL=main.c70117943c7d49cebf14.hot-update.js.map