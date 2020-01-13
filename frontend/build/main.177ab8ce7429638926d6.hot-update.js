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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIsIEgzIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgQSB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuZXhwb3J0IGNvbnN0IFRoYW5rWW91ID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8SDEgZm9udFNpemU9e1s1LCBudWxsLCA2XX0+XG4gICAgICA8VHJhbnM+VGhhbmsgeW91IGZvciByZXBvcnRpbmc8L1RyYW5zPlxuICAgIDwvSDE+XG5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5Zb3VyIHJlcG9ydCBoYXMgYmVlbiBzdWJtaXR0ZWQ8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8SDI+XG4gICAgICA8VHJhbnM+V2hhdCBoYXBwZW5zIG5leHQ/PC9UcmFucz5cbiAgICA8L0gyPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBJZiB5b3VyIGNvbXBsYWludCBiZWNvbWVzIGFuIGludmVzdGlnYXRpb24sIGFuIG9mZmljZXIgd2lsbCBiZSBpbiB0b3VjaFxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPEgzPlxuICAgICAgPFRyYW5zPkhlbHBmdWwgTGlua3M8L1RyYW5zPlxuICAgIDwvSDM+XG4gICAgPFAgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIDxzdHJvbmc+UkNNUCBoYXMgcmVjZWl2ZWQgeW91ciByZXBvcnQuPC9zdHJvbmc+XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgQW4gYW5hbHlzdCB3aWxsIGFzc2VzcyB0aGUgaW5mb3JtYXRpb24sIGNvbWJpbmUgaXQgd2l0aCBvdGhlciByZXBvcnRzLFxuICAgICAgICBhbmQgZGVjaWRlIHdoZXRoZXIgdGhlIHJlcG9ydCBjYW4gYmVjb21lIGEgcG9saWNlIGludmVzdGlnYXRpb24uXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgeW91ciByZXBvcnQgYmVjb21lcyBhbiBpbnZlc3RpZ2F0aW9uLCBhIGxvY2FsIHBvbGljZSBvZmZpY2VyIG1heSBiZVxuICAgICAgICBpbiB0b3VjaCB0byBnZXQgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxIMiBmb250U2l6ZT17WzQsIG51bGwsIDVdfT5cbiAgICAgIDxUcmFucz5Zb3UgbWF5IGFsc28gd2FudCB0bzo8L1RyYW5zPlxuICAgIDwvSDI+XG4gICAgPFA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5SZXBvcnQgdG8gdGhlIHNlcnZpY2UgcHJvdmlkZXIgd2hlcmUgdGhlIHNjYW0gdG9vayBwbGFjZS48L2xpPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxpPlJlcG9ydCB0byB5b3VyIGZpbmFuY2lhbCBpbnN0aXR1dGlvbiBpZiB5b3UgbG9zdCBtb25leS48L2xpPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIFJlcG9ydCB0b3snICd9XG4gICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vd3d3LmNvbnN1bWVyLmVxdWlmYXguY2EvcGVyc29uYWwvXCI+RXF1aWZheDwvQT4gYW5keycgJ31cbiAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly93d3cudHJhbnN1bmlvbi5jYS9cIj5UcmFuc1VuaW9uPC9BPiBpZiB5b3VyIGlkZW50aXR5XG4gICAgICAgICAgd2FzIHN0b2xlbi5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9QPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Your report has been submitted"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "What happens next?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your complaint becomes an investigation, an officer will be in touch"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H3"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Helpful Links"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "<0>RCMP has received your report.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "An analyst will assess the information, combine it with other reports, and decide whether the report can become a police investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your report becomes an investigation, a local police officer may be in touch to get more information."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You may also want to:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to the service provider where the scam took place."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to your financial institution if you lost money."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.consumer.equifax.ca/personal/"
  }, "Equifax"), " and", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.transunion.ca/"
  }, "TransUnion"), " if your identity was stolen."))));
};

/***/ })

};
//# sourceMappingURL=main.177ab8ce7429638926d6.hot-update.js.map