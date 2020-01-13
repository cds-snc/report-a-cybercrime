exports.id = "main";
exports.modules = {

/***/ "./src/components/warning-banner/index.js":
/*!************************************************!*\
  !*** ./src/components/warning-banner/index.js ***!
  \************************************************/
/*! exports provided: WarningBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningBanner", function() { return WarningBanner; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text */ "./src/components/text/index.js");


/** @jsx jsx **/




var bannerStyle =  false ? undefined : {
  name: "1uytqke-bannerStyle",
  styles: "display:flex;flex-direction:column;justify-content:center;label:bannerStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2FybmluZy1iYW5uZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2FybmluZy1iYW5uZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCdcblxuY29uc3QgYmFubmVyU3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgV2FybmluZ0Jhbm5lciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBiZyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiYmFja2dyb3VuZC1jb2xvclwiXG4gICAgICAgIGNzcz17YmFubmVyU3R5bGV9XG4gICAgICAgIGJnPXtiZ31cbiAgICAgICAgaGVpZ2h0PXtbNTAsIG51bGwsIDYwXX1cbiAgICAgID5cbiAgICAgICAgPFRleHQgcGFkZGluZ0xlZnQ9XCIxMHB4XCIgcGFkZGluZ1JpZ2h0PVwiMTBweFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgIFdhcm5pbmchIFRoaXMgaXMgYSBwcm90b3R5cGUuIEl0IHdvbid0IGFjdHVhbGx5IHN1Ym1pdCB5b3VyIHJlcG9ydFxuICAgICAgICAgICAgdG8gdGhlIFJDTVAuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuV2FybmluZ0Jhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGJnOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5XYXJuaW5nQmFubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmc6ICd5ZWxsb3cnLFxufVxuIl19 */"
};
var WarningBanner = function WarningBanner(props) {
  var bg = props.bg;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    "data-testid": "background-color",
    css: bannerStyle,
    bg: bg,
    height: [50, null, 60]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Warning! This is a prototype. It won't actually submit your report to the RCMP."
  }))));
};
WarningBanner.propTypes = {
  bg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
WarningBanner.defaultProps = {
  bg: 'yellow'
};

/***/ })

};
//# sourceMappingURL=main.1a3985244f78cf9962e4.hot-update.js.map