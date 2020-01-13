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
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/MoneyLostForm */ "./src/forms/MoneyLostForm.js");



/* eslint-disable react/no-unescaped-entities */

/** @jsx jsx */









var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e14x8gc50",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgU3RlcHMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RlcHBlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgTW9uZXlMb3N0Rm9ybSB9IGZyb20gJy4vZm9ybXMvTW9uZXlMb3N0Rm9ybSdcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuY29uc3Qgc3VibWl0QW5kTmF2aWdhdGUgPSAoY2xpZW50LCBkYXRhKSA9PiB7XG4gIGNsaWVudC53cml0ZURhdGEoeyBkYXRhIH0pXG4gIG5hdmlnYXRlKCcvc3VzcGVjdGluZm9xdWVzdGlvbicpXG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RQYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXsxfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5TcGVjaWZ5IG1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+PFRyYW5zPldlIHByb2JhYmx5IHdvbid0IGJlIGFibGUgdG8gcmVjb3ZlciB0aGUgbW9uZXksIGJ1dCB1bmRlcnN0YW5kaW5nIHRoZVxuICAgICAgICBpbXBhY3Qgb2YgdGhlIHNjYW0gY2FuIGhlbHAgYnVpbGQgYSBjYXNlLjwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxNb25leUxvc3RGb3JtIG9uU3VibWl0PXtzdWJtaXRBbmROYXZpZ2F0ZX0gLz5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL01vbmV5TG9zdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIyQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Nb25leUxvc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IE1vbmV5TG9zdEZvcm0gfSBmcm9tICcuL2Zvcm1zL01vbmV5TG9zdEZvcm0nXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IHN1Ym1pdEFuZE5hdmlnYXRlID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KVxuICBuYXZpZ2F0ZSgnL3N1c3BlY3RpbmZvcXVlc3Rpb24nKVxufVxuXG5leHBvcnQgY29uc3QgTW9uZXlMb3N0UGFnZSA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPENvbnRhaW5lciBjc3M9e3RvcEJhckNvbnRhaW5lcn0+XG4gICAgICA8U3RlcHMgYWN0aXZlU3RlcD17MX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+U3BlY2lmeSBtb25leSBsb3N0PC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPjxUcmFucz5XZSBwcm9iYWJseSB3b24ndCBiZSBhYmxlIHRvIHJlY292ZXIgdGhlIG1vbmV5LCBidXQgdW5kZXJzdGFuZGluZyB0aGVcbiAgICAgICAgaW1wYWN0IG9mIHRoZSBzY2FtIGNhbiBoZWxwIGJ1aWxkIGEgY2FzZS48L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8TW9uZXlMb3N0Rm9ybSBvblN1Ym1pdD17c3VibWl0QW5kTmF2aWdhdGV9IC8+XG4gIDwvQ2VudGVyQ29udGVudD5cbilcbiJdfQ== */"
};

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])('/suspectinfoquestion');
};

var MoneyLostPage = function MoneyLostPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_6__["Steps"], {
    activeStep: 1
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "We probably won't be able to recover the money, but understanding the impact of the scam can help build a case."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_8__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_9__["MoneyLostForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.b650b88fd229d011ca1d.hot-update.js.map