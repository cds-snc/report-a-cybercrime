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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXMkIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0J1xuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMb3NlTW9uZXkgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPENvbnRhaW5lciBjc3M9e3RvcEJhckNvbnRhaW5lcn0+XG4gICAgICA8U3RlcHMgYWN0aXZlU3RlcD17MX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+VGVsbCB1cyBpZiBtb25leSB3YXMgbG9zdDwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5EaWQgeW91IGxvc2UgbW9uZXkgYXMgYSByZXN1bHQgb2YgdGhlIHNjYW0/PC9UcmFucz5cbiAgICA8L1A+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBtYXhXaWR0aD17WycyMDBweCcsIG51bGwsICczMDBweCddfVxuICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgbWFyZ2luQm90dG9tPVwiXCJcbiAgICA+XG4gICAgICA8QnV0dG9uTGlua1xuICAgICAgICB3aWR0aD17Wyc0MHB4JywgbnVsbCwgJzUwcHgnXX1cbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgdG89XCIvbW9uZXlsb3N0XCJcbiAgICAgID5cbiAgICAgICAgPFRyYW5zPlllczwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgICA8QnV0dG9uTGlua1xuICAgICAgICB3aWR0aD17Wyc0MHB4JywgbnVsbCwgJzUwcHgnXX1cbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgdG89XCIvc3VzcGVjdGluZm9xdWVzdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvTGF5b3V0PlxuKVxuIl19 */"
};
var LoseMoney = function LoseMoney() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 1
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us if money was lost"
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
//# sourceMappingURL=main.32bb05280e259a1be899.hot-update.js.map