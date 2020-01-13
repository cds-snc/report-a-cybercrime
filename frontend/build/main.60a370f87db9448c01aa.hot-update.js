exports.id = "main";
exports.modules = {

/***/ "./src/forms/MoneyLostForm.js":
/*!************************************!*\
  !*** ./src/forms/MoneyLostForm.js ***!
  \************************************/
/*! exports provided: MoneyLostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyLostForm", function() { return MoneyLostForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './components/header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/** @jsx jsx */















var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_9__["TextArea"]);
var methodsOfPayment = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["i18nMark"])('credit card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["i18nMark"])('cash'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["i18nMark"])('gift card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["i18nMark"])('other')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1224l6n0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJxQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBtZXRob2RzT2ZQYXltZW50ID0gW1xuICBpMThuTWFyaygnY3JlZGl0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ2Nhc2gnKSxcbiAgaTE4bk1hcmsoJ2dpZnQgY2FyZCcpLFxuICBpMThuTWFyaygnb3RoZXInKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0QW1vdW50XCI+XG4gICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QW1vdW50PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBpZD1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEN1cnJlbmN5XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5XaGF0IG1ldGhvZCBvZiBwYXltZW50IHdhcyB1c2VkPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIG1ldGhvZHNPZlBheW1lbnQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudCAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvc2NhbWluZm8nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkJhY2s8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1pf1vyy-MoneyLostForm",
  styles: "display:flex;flex-direction:row;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBtZXRob2RzT2ZQYXltZW50ID0gW1xuICBpMThuTWFyaygnY3JlZGl0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ2Nhc2gnKSxcbiAgaTE4bk1hcmsoJ2dpZnQgY2FyZCcpLFxuICBpMThuTWFyaygnb3RoZXInKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0QW1vdW50XCI+XG4gICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QW1vdW50PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBpZD1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEN1cnJlbmN5XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5XaGF0IG1ldGhvZCBvZiBwYXltZW50IHdhcyB1c2VkPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIG1ldGhvZHNPZlBheW1lbnQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudCAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvc2NhbWluZm8nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkJhY2s8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "1c0xa61-MoneyLostForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUpzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBtZXRob2RzT2ZQYXltZW50ID0gW1xuICBpMThuTWFyaygnY3JlZGl0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ2Nhc2gnKSxcbiAgaTE4bk1hcmsoJ2dpZnQgY2FyZCcpLFxuICBpMThuTWFyaygnb3RoZXInKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0QW1vdW50XCI+XG4gICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QW1vdW50PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBpZD1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEN1cnJlbmN5XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5XaGF0IG1ldGhvZCBvZiBwYXltZW50IHdhcyB1c2VkPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIG1ldGhvZHNPZlBheW1lbnQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudCAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvc2NhbWluZm8nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkJhY2s8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var MoneyLostForm = function MoneyLostForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_13__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit,
            values = _ref4.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "lostAmount"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(!(function webpackMissingModule() { var e = new Error("Cannot find module './components/header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          fontSize: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "How much money was lost?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Amount"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
          name: "lostAmount",
          id: "lostAmount",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "lostCurrency"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Currency"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
          name: "lostCurrency",
          id: "lostCurrency",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "lostMethodsOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "What method of payment was used?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("br", null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return methodsOfPayment.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
              name: "lostMethodsOfPayment",
              id: "lostMethodsOfPayment",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        })), values.lostMethodsOfPayment && values.lostMethodsOfPayment.indexOf('other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "lostOtherMethodOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Other"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
          name: "lostOtherMethodOfPayment",
          id: "lostOtherMethodOfPayment",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "button",
          onClick: function onClick() {
            return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/scaminfo');
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Back"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_11__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_5__["Trans"], {
          id: "Cancel Report"
        }))));
      }
    });
  });
};
MoneyLostForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.60a370f87db9448c01aa.hot-update.js.map