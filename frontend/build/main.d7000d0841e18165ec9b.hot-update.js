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
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");


/**@jsx jsx */








var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcyQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBBIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRoYW5rWW91ID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxDb250YWluZXIgY3NzPXt0b3BCYXJDb250YWluZXJ9PlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPlRoYW5rIHlvdSBmb3IgcmVwb3J0aW5nPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19PlxuICAgICAgPFRyYW5zPlxuICAgICAgICA8c3Ryb25nPk5DMyBoYXMgcmVjZWl2ZWQgeW91ciByZXBvcnQuPC9zdHJvbmc+XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgQW4gYW5hbHlzdCB3aWxsIGFzc2VzcyB0aGUgaW5mb3JtYXRpb24sIGNvbWJpbmUgaXQgd2l0aCBvdGhlciByZXBvcnRzLFxuICAgICAgICBhbmQgZGVjaWRlIHdoZXRoZXIgdGhlIHJlcG9ydCBjYW4gYmVjb21lIGEgcG9saWNlIGludmVzdGlnYXRpb24uXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgeW91ciByZXBvcnQgYmVjb21lcyBhbiBpbnZlc3RpZ2F0aW9uLCBhIGxvY2FsIHBvbGljZSBvZmZpY2VyIG1heSBiZVxuICAgICAgICBpbiB0b3VjaCB0byBnZXQgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxIMiBmb250U2l6ZT17WzQsIG51bGwsIDVdfT5cbiAgICAgIDxUcmFucz5Zb3UgbWF5IGFsc28gd2FudCB0bzo8L1RyYW5zPlxuICAgIDwvSDI+XG4gICAgPFA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICBSZXBvcnQgZGlyZWN0bHkgdG8gdGhlIHdlYnNpdGUgd2hlcmUgdGhlIHNjYW0gdG9vayBwbGFjZS5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgIFJlcG9ydCB0byB0aGUgZmluYW5jaWFsIGluc3RpdHV0aW9uIHdoZXJlIHlvdSBzZW50IG1vbmV5LlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgUmVwb3J0IHRvIHRoZSBjcmVkaXQgYnVyZWF1cyx7JyAnfVxuICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vd3d3LmNvbnN1bWVyLmVxdWlmYXguY2EvcGVyc29uYWwvXCI+RXF1aWZheDwvQT4gYW5keycgJ31cbiAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL3d3dy50cmFuc3VuaW9uLmNhL1wiPlRyYW5zVW5pb248L0E+LCBpZiB5b3VyXG4gICAgICAgICAgICBpZGVudGl0eSB3YXMgc3RvbGVuLlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRyYW5zPlJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgPC9BPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0xheW91dD5cbilcbiJdfQ== */"
};

var _ref =  false ? undefined : {
  name: "11qhpin-ThankYou",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ThankYou;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFYyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBBIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRoYW5rWW91ID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxDb250YWluZXIgY3NzPXt0b3BCYXJDb250YWluZXJ9PlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPlRoYW5rIHlvdSBmb3IgcmVwb3J0aW5nPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19PlxuICAgICAgPFRyYW5zPlxuICAgICAgICA8c3Ryb25nPk5DMyBoYXMgcmVjZWl2ZWQgeW91ciByZXBvcnQuPC9zdHJvbmc+XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgQW4gYW5hbHlzdCB3aWxsIGFzc2VzcyB0aGUgaW5mb3JtYXRpb24sIGNvbWJpbmUgaXQgd2l0aCBvdGhlciByZXBvcnRzLFxuICAgICAgICBhbmQgZGVjaWRlIHdoZXRoZXIgdGhlIHJlcG9ydCBjYW4gYmVjb21lIGEgcG9saWNlIGludmVzdGlnYXRpb24uXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgeW91ciByZXBvcnQgYmVjb21lcyBhbiBpbnZlc3RpZ2F0aW9uLCBhIGxvY2FsIHBvbGljZSBvZmZpY2VyIG1heSBiZVxuICAgICAgICBpbiB0b3VjaCB0byBnZXQgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxIMiBmb250U2l6ZT17WzQsIG51bGwsIDVdfT5cbiAgICAgIDxUcmFucz5Zb3UgbWF5IGFsc28gd2FudCB0bzo8L1RyYW5zPlxuICAgIDwvSDI+XG4gICAgPFA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICBSZXBvcnQgZGlyZWN0bHkgdG8gdGhlIHdlYnNpdGUgd2hlcmUgdGhlIHNjYW0gdG9vayBwbGFjZS5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgIFJlcG9ydCB0byB0aGUgZmluYW5jaWFsIGluc3RpdHV0aW9uIHdoZXJlIHlvdSBzZW50IG1vbmV5LlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgUmVwb3J0IHRvIHRoZSBjcmVkaXQgYnVyZWF1cyx7JyAnfVxuICAgICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vd3d3LmNvbnN1bWVyLmVxdWlmYXguY2EvcGVyc29uYWwvXCI+RXF1aWZheDwvQT4gYW5keycgJ31cbiAgICAgICAgICAgIDxBIGhyZWY9XCJodHRwczovL3d3dy50cmFuc3VuaW9uLmNhL1wiPlRyYW5zVW5pb248L0E+LCBpZiB5b3VyXG4gICAgICAgICAgICBpZGVudGl0eSB3YXMgc3RvbGVuLlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRyYW5zPlJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgPC9BPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0xheW91dD5cbilcbiJdfQ== */"
};

var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_6__["Steps"], {
    activeStep: 4
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>NC3 has received your report.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "An analyst will assess the information, combine it with other reports, and decide whether the report can become a police investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "If your report becomes an investigation, a local police officer may be in touch to get more information."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "You may also want to:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report directly to the website where the scam took place."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report to the financial institution where you sent money."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "https://www.consumer.equifax.ca/personal/"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "https://www.transunion.ca/"
    })]
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    maxWidth: "300px",
    marginTop: [2, null, 3],
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
    href: "http://localhost:3000/",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report another scam"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.d7000d0841e18165ec9b.hot-update.js.map