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
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/MoneyLostForm */ "./src/forms/MoneyLostForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");


/* eslint-disable react/no-unescaped-entities */

/** @jsx jsx */









var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYTJCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IE1vbmV5TG9zdEZvcm0gfSBmcm9tICcuL2Zvcm1zL01vbmV5TG9zdEZvcm0nXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IHN1Ym1pdEFuZE5hdmlnYXRlID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KVxuICBuYXZpZ2F0ZSgnL3N1c3BlY3RpbmZvcXVlc3Rpb24nKVxufVxuXG5leHBvcnQgY29uc3QgTW9uZXlMb3N0UGFnZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXsxfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5UZWxsIHVzIGFib3V0IG1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIFdlIHByb2JhYmx5IHdvbid0IGJlIGFibGUgdG8gcmVjb3ZlciB0aGUgbW9uZXksIGJ1dCB1bmRlcnN0YW5kaW5nIHRoZVxuICAgICAgICBpbXBhY3Qgb2YgdGhlIHNjYW0gY2FuIGhlbHAgYnVpbGQgYSBjYXNlLlxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPE1vbmV5TG9zdEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEFuZE5hdmlnYXRlfSAvPlxuICA8L0xheW91dD5cbilcbiJdfQ== */"
};

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/suspectinfoquestion');
};

var MoneyLostPage = function MoneyLostPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 1
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us about money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "We probably won't be able to recover the money, but understanding the impact of the scam can help build a case."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_7__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_8__["MoneyLostForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.b0902e2f4a701c577d4e.hot-update.js.map