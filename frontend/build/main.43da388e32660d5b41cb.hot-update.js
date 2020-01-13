exports.id = "main";
exports.modules = {

/***/ "./src/LoseMoney.js":
/*!**************************!*\
  !*** ./src/LoseMoney.js ***!
  \**************************/
/*! exports provided: LoseMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoseMoney", function() { return LoseMoney; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");


/**@jsx jsx */








var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXMkIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMb3NlTW9uZXkgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPENvbnRhaW5lciBjc3M9e3RvcEJhckNvbnRhaW5lcn0+XG4gICAgICA8U3RlcHMgYWN0aXZlU3RlcD17MX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+VGVsbCB1cyBhYm91dCBtb25leSBsb3N0PC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPkRpZCB5b3UgbG9zZSBtb25leSBhcyBhIHJlc3VsdCBvZiB0aGUgc2NhbT88L1RyYW5zPlxuICAgIDwvUD5cblxuICAgIDxDb250YWluZXJcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIG1heFdpZHRoPXtbJzIwMHB4JywgbnVsbCwgJzMwMHB4J119XG4gICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBtYXJnaW5Cb3R0b209XCJcIlxuICAgID5cbiAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgIHdpZHRoPXtbJzQwcHgnLCBudWxsLCAnNTBweCddfVxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICB0bz1cIi9tb25leWxvc3RcIlxuICAgICAgPlxuICAgICAgICA8VHJhbnM+WWVzPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgIDxCdXR0b25MaW5rXG4gICAgICAgIHdpZHRoPXtbJzQwcHgnLCBudWxsLCAnNTBweCddfVxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICB0bz1cIi9zdXNwZWN0aW5mb3F1ZXN0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9MYXlvdXQ+XG4pXG4iXX0= */"
};
var LoseMoney = function LoseMoney() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 1
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us about money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Did you lose money as a result of the scam?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    display: "flex",
    maxWidth: ['200px', null, '300px'],
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: ""
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    width: ['40px', null, '50px'],
    textAlign: "center",
    to: "/moneylost"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Yes"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    width: ['40px', null, '50px'],
    textAlign: "center",
    to: "/suspectinfoquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "No"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.43da388e32660d5b41cb.hot-update.js.map