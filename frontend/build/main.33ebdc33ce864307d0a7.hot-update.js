exports.id = "main";
exports.modules = {

/***/ "./src/SuspectInfoPage.js":
/*!********************************!*\
  !*** ./src/SuspectInfoPage.js ***!
  \********************************/
/*! exports provided: SuspectInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectInfoPage", function() { return SuspectInfoPage; });
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
/* harmony import */ var _forms_SuspectInfoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/SuspectInfoForm */ "./src/forms/SuspectInfoForm.js");



/** @jsx jsx */







var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "eikcrpf0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1N1c3BlY3RJbmZvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvU3VzcGVjdEluZm9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN1c3BlY3RJbmZvRm9ybSB9IGZyb20gJy4vZm9ybXMvU3VzcGVjdEluZm9Gb3JtJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuXG5jb25zdCBzdWJtaXRBbmROYXZpZ2F0ZSA9IChjbGllbnQsIGRhdGEpID0+IHtcbiAgY2xpZW50LndyaXRlRGF0YSh7IGRhdGEgfSlcbiAgbmF2aWdhdGUoJy9tb25leWxvc3RxdWVzdGlvbicpXG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb1BhZ2UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5BZGQgc2NhbW1lciBkZXRhaWxzPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPjxUcmFucz5BbnkgY2x1ZXMgYWJvdXQgd2hvIG1pZ2h0IGJlIHJlc3BvbnNpYmxlIGNhbiBoZWxwIHBvbGljZSBpZGVudGlmeSBzdXNwZWN0cy48L1RyYW5zPjwvUD5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8U3VzcGVjdEluZm9Gb3JtIG9uU3VibWl0PXtzdWJtaXRBbmROYXZpZ2F0ZX0gLz5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])('/moneylostquestion');
};

var SuspectInfoPage = function SuspectInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Add scammer details"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Any clues about who might be responsible can help police identify suspects."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_forms_SuspectInfoForm__WEBPACK_IMPORTED_MODULE_7__["SuspectInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.33ebdc33ce864307d0a7.hot-update.js.map