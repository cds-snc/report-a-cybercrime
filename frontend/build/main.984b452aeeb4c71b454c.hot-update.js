exports.id = "main";
exports.modules = {

/***/ "./src/ScamInfoPage.js":
/*!*****************************!*\
  !*** ./src/ScamInfoPage.js ***!
  \*****************************/
/*! exports provided: ScamInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoPage", function() { return ScamInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/ScamInfoForm */ "./src/forms/ScamInfoForm.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");


/** @jsx jsx */









var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1NjYW1JbmZvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZMkIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvU2NhbUluZm9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFNjYW1JbmZvRm9ybSB9IGZyb20gJy4vZm9ybXMvU2NhbUluZm9Gb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IHN1Ym1pdEFuZE5hdmlnYXRlID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KVxuICBuYXZpZ2F0ZSgnL21vbmV5bG9zdHF1ZXN0aW9uJylcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1JbmZvUGFnZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXswfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5EZXNjcmliZSB0aGUgc2NhbTwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIFByb3ZpZGUgYXMgbWFueSBkZXRhaWxzIGFzIHBvc3NpYmxlIHNvIHlvdXIgcmVwb3J0IGNhbiBiZSBsaW5rZWQgdG8gc2ltaWxhciByZXBvcnRzLiBNb3JlIGRldGFpbHMgd2lsbCBoZWxwIGJ1aWxkIGEgc3Ryb25nZXIgY2FzZSBmb3IgaW52ZXN0aWdhdGluZyBpdC5cbiAgICA8L1A+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPFNjYW1JbmZvRm9ybSBvblN1Ym1pdD17c3VibWl0QW5kTmF2aWdhdGV9IC8+XG4gIDwvTGF5b3V0PlxuKVxuIl19 */"
};

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/moneylostquestion');
};

var ScamInfoPage = function ScamInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_8__["Steps"], {
    activeStep: 0
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Describe the scam"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, "Provide as many details as possible so your report can be linked to similar reports. More details will help build a stronger case for investigating it."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__["ScamInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.984b452aeeb4c71b454c.hot-update.js.map