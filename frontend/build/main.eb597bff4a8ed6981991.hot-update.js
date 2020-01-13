exports.id = "main";
exports.modules = {

/***/ "./src/forms/ContactInfoForm.js":
/*!**************************************!*\
  !*** ./src/forms/ContactInfoForm.js ***!
  \**************************************/
/*! exports provided: ContactInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoForm", function() { return ContactInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/radio-button */ "./src/components/radio-button/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");


/** @jsx jsx */













var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_7__["TextArea"]);
var RadioButtonAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_radio_button__WEBPACK_IMPORTED_MODULE_10__["RadioButton"]);

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e16pgiyd0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "1iud02x",
  styles: "margin-bottom:8pt;font-size:1.25rem;display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgcGVyc29uIHdobyB3YXMgYWZmZWN0ZWQgYnkgdGhlIHNjYW0/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b25BZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvSTE4bj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvRW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9jb25maXJtYXRpb24nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cblxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2F2ZSBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkNvbnRhY3RJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var victimOptions = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('yes'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('no')];

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1forroa-ContactInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSHNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgcGVyc29uIHdobyB3YXMgYWZmZWN0ZWQgYnkgdGhlIHNjYW0/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b25BZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvSTE4bj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvRW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9jb25maXJtYXRpb24nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cblxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2F2ZSBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkNvbnRhY3RJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "1forroa-ContactInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SHNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgcGVyc29uIHdobyB3YXMgYWZmZWN0ZWQgYnkgdGhlIHNjYW0/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b25BZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvSTE4bj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvRW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9jb25maXJtYXRpb24nKX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cblxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2F2ZSBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkNvbnRhY3RJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var ContactInfoForm = function ContactInfoForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "userIsTheVictim"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Are you the person who was affected by the scam?"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return victimOptions.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "userIsTheVictim",
              id: "userIsTheVictim",
              component: RadioButtonAdapter,
              type: "radio",
              value: key,
              label: i18n._(key)
            }));
          });
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Name"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoName",
          id: "contactInfoName",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoEmail"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Email address"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoEmail",
          id: "contactInfoEmail",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoPhone"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Phone number"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoPhone",
          id: "contactInfoPhone",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          onClick: function onClick() {
            return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/confirmation');
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel Report"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"], {
          type: "button",
          color: "black",
          marginTop: [1, null, 1]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Save Report"
        }))));
      }
    });
  });
};
ContactInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.eb597bff4a8ed6981991.hot-update.js.map