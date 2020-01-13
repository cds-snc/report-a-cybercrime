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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");



/**@jsx jsx */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "eo0dg8t0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3QgYm90dG9tQmFyQ29udGFpbmVyID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMb3NlTW9uZXkgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5TcGVjaWZ5IG1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIERvIHlvdSBoYXZlIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NhbW1lciBvciB3aG8gbWlnaHQgYmVcbiAgICAgICAgcmVzcG9uc2libGU/XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyIGNzcz17Ym90dG9tQmFyQ29udGFpbmVyfT5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL21vbmV5bG9zdFwiPlxuICAgICAgICA8VHJhbnM+WWVzPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL3VwbG9hZGZpbGVzcXVlc3Rpb25cIj5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var bottomBarContainer =  false ? undefined : {
  name: "1sotudj-bottomBarContainer",
  styles: "display:flex;width:50%;flex-direction:row;justify-content:space-between;margin-bottom:20px;label:bottomBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjOEIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3QgYm90dG9tQmFyQ29udGFpbmVyID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBMb3NlTW9uZXkgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5TcGVjaWZ5IG1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIERvIHlvdSBoYXZlIGFueSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NhbW1lciBvciB3aG8gbWlnaHQgYmVcbiAgICAgICAgcmVzcG9uc2libGU/XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyIGNzcz17Ym90dG9tQmFyQ29udGFpbmVyfT5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL21vbmV5bG9zdFwiPlxuICAgICAgICA8VHJhbnM+WWVzPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL3VwbG9hZGZpbGVzcXVlc3Rpb25cIj5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
};
var LoseMoney = function LoseMoney() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(P, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Do you have any information about the scammer or who might be responsible?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    css: bottomBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/moneylost"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Yes"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/uploadfilesquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "No"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.47c5f6fbc17ee50d2d74.hot-update.js.map