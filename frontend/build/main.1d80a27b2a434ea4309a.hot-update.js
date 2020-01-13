exports.id = "main";
exports.modules = {

/***/ "./src/components/buttons-container/index.js":
/*!***************************************************!*\
  !*** ./src/components/buttons-container/index.js ***!
  \***************************************************/
/*! exports provided: ButtonsContainer, ButtonsContainerLanding, ButtonsContainerYesNo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainer", function() { return ButtonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainerLanding", function() { return ButtonsContainerLanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainerYesNo", function() { return ButtonsContainerYesNo; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


/** @jsx jsx */






var _ref =  false ? undefined : {
  name: "m8mp1z-ButtonsContainer",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ButtonsContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IEFkZCBzdXNwZWN0IGNsdWVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFRlbGwgdXMgYWJvdXQgbW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBdHRhY2ggc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29udGFjdCBpbmZvJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IExlYXZlIGNvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbmZpcm0gaW5mb3JtYXRpb24nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29uZmlybSByZXBvcnQgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHsgeWVzUm91dGUgPSAnJywgbm9Sb3V0ZSA9ICcnIH0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ButtonsContainer = function ButtonsContainer(_ref4) {
  var _ref4$submit = _ref4.submit,
      submit = _ref4$submit === void 0 ? false : _ref4$submit,
      _ref4$landing = _ref4.landing,
      landing = _ref4$landing === void 0 ? false : _ref4$landing,
      _ref4$cancel = _ref4.cancel,
      cancel = _ref4$cancel === void 0 ? true : _ref4$cancel,
      _ref4$buttonLink = _ref4.buttonLink,
      buttonLink = _ref4$buttonLink === void 0 ? true : _ref4$buttonLink,
      _ref4$route = _ref4.route,
      route = _ref4$route === void 0 ? '' : _ref4$route,
      _ref4$cancelRoute = _ref4.cancelRoute,
      cancelRoute = _ref4$cancelRoute === void 0 ? '/p2/' : _ref4$cancelRoute,
      _ref4$nextPage = _ref4.nextPage,
      nextPage = _ref4$nextPage === void 0 ? '' : _ref4$nextPage;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css: _ref
  }, buttonLink === false ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit"
  }, submit === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Submit report \xA0 \u276F"
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Next"
  }), nextPage === 'Scammer details' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Add suspect clues"
  }) : nextPage === 'Money lost' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Tell us about money lost"
  }) : nextPage === 'Impact of scam' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Impact of scam"
  }) : nextPage === 'What happened' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": What happened"
  }) : nextPage === 'Supporting files' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Attach supporting files"
  }) : nextPage === 'Contact info' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Leave contact information"
  }) : nextPage === 'Confirm information' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Confirm report information"
  }) : null)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, landing === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: route
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report now \u276F"
  })) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: route
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "\u276E \xA0 Report another scam"
  }))), cancel === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1.9rem",
    ml: ['3rem', '0', '3rem']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    type: "button",
    color: "black",
    to: cancelRoute,
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Cancel report"
  }))) : null);
};

var _ref2 =  false ? undefined : {
  name: "ew7vhc-ButtonsContainerLanding",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;width:100%;}}label:ButtonsContainerLanding;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IEFkZCBzdXNwZWN0IGNsdWVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFRlbGwgdXMgYWJvdXQgbW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBdHRhY2ggc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29udGFjdCBpbmZvJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IExlYXZlIGNvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbmZpcm0gaW5mb3JtYXRpb24nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29uZmlybSByZXBvcnQgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHsgeWVzUm91dGUgPSAnJywgbm9Sb3V0ZSA9ICcnIH0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ButtonsContainerLanding = function ButtonsContainerLanding() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    justifyContent: "space-between",
    alignItems: "center",
    css: _ref2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: "/p1"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Prototype 1"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: "/p2"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Prototype 2"
  }))));
};

var _ref3 =  false ? undefined : {
  name: "1go8cx6-ButtonsContainerYesNo",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 2.5rem;text-align:center;}div[name='buttonlink-container'] a:first-of-type{margin-right:1rem;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;width:100%;}}label:ButtonsContainerYesNo;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0lZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IEFkZCBzdXNwZWN0IGNsdWVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFRlbGwgdXMgYWJvdXQgbW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBdHRhY2ggc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29udGFjdCBpbmZvJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IExlYXZlIGNvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbmZpcm0gaW5mb3JtYXRpb24nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29uZmlybSByZXBvcnQgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHsgeWVzUm91dGUgPSAnJywgbm9Sb3V0ZSA9ICcnIH0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ButtonsContainerYesNo = function ButtonsContainerYesNo(_ref5) {
  var _ref5$yesRoute = _ref5.yesRoute,
      yesRoute = _ref5$yesRoute === void 0 ? '' : _ref5$yesRoute,
      _ref5$noRoute = _ref5.noRoute,
      noRoute = _ref5$noRoute === void 0 ? '' : _ref5$noRoute;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css: _ref3
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: yesRoute
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Yes"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: noRoute
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "No"
  }))));
};
ButtonsContainer.propTypes = {
  buttonLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  cancelRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  buttonTitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  route: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  landing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  nextPage: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
ButtonsContainerYesNo.propTypes = {
  yesRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  noRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
};

/***/ })

};
//# sourceMappingURL=main.1d80a27b2a434ea4309a.hot-update.js.map