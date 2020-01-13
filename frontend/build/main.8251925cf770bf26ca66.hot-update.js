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
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");



/**@jsx jsx */







var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "eo0dg8t0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuXG5jb25zdCBib3R0b21CYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IExvc2VNb25leSA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlNwZWNpZnkgbW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgIERpZCB5b3UgbG9zZSBtb25leSBhcyBhIHJlc3VsdCBvZiB0aGUgc2NhbT9cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxDb250YWluZXIgY3NzPXtib3R0b21CYXJDb250YWluZXJ9PlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvbW9uZXlsb3N0XCI+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvdXBsb2FkZmlsZXNxdWVzdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var bottomBarContainer =  false ? undefined : {
  name: "1sotudj-bottomBarContainer",
  styles: "display:flex;width:50%;flex-direction:row;justify-content:space-between;margin-bottom:20px;label:bottomBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xvc2VNb25leS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlOEIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTG9zZU1vbmV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuXG5jb25zdCBib3R0b21CYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IExvc2VNb25leSA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlNwZWNpZnkgbW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgIERpZCB5b3UgbG9zZSBtb25leSBhcyBhIHJlc3VsdCBvZiB0aGUgc2NhbT9cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxDb250YWluZXIgY3NzPXtib3R0b21CYXJDb250YWluZXJ9PlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvbW9uZXlsb3N0XCI+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvdXBsb2FkZmlsZXNxdWVzdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};
var LoseMoney = function LoseMoney() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Did you lose money as a result of the scam?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    css: bottomBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/moneylost"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Yes"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/uploadfilesquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "No"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.8251925cf770bf26ca66.hot-update.js.map