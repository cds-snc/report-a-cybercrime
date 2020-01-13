exports.id = "main";
exports.modules = {

/***/ "./src/MoneyLostPage.js":
/*!******************************!*\
  !*** ./src/MoneyLostPage.js ***!
  \******************************/
/*! exports provided: MoneyLostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyLostPage", function() { return MoneyLostPage; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/MoneyLostForm */ "./src/forms/MoneyLostForm.js");



/** @jsx jsx */







var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e14x8gc50",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgTW9uZXlMb3N0Rm9ybSB9IGZyb20gJy4vZm9ybXMvTW9uZXlMb3N0Rm9ybSdcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3Qgc3VibWl0QW5kTmF2aWdhdGUgPSAoY2xpZW50LCBkYXRhKSA9PiB7XG4gIGNsaWVudC53cml0ZURhdGEoeyBkYXRhIH0pXG4gIG5hdmlnYXRlKCcvdXBsb2FkZmlsZXNxdWVzdGlvbicpXG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RQYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+U3BlY2lmeSBtb25leSBsb3N0PC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBEbyB5b3UgaGF2ZSBhbnkgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNjYW1tZXIgb3Igd2hvIG1pZ2h0IGJlXG4gICAgICAgIHJlc3BvbnNpYmxlP1xuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPE1vbmV5TG9zdEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEFuZE5hdmlnYXRlfSAvPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])('/uploadfilesquestion');
};

var MoneyLostPage = function MoneyLostPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Do you have any information about the scammer or who might be responsible?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_7__["MoneyLostForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.5e25fcd35f005264f073.hot-update.js.map