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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/radio-button */ "./src/components/radio-button/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");


/** @jsx jsx */














var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"]);
var RadioButtonAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__["finalFormAdapter"])(_components_radio_button__WEBPACK_IMPORTED_MODULE_8__["RadioButton"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_14__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_9__["TextArea"]);
var methodsOfPayment = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Cash'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Credit card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('E-transfer'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Gift card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other method')];
var currencies = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Canadian dollar'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('U.S. dollar'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Euros'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other currency')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1224l6n0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NxQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IG1ldGhvZHNPZlBheW1lbnQgPSBbXG4gIGkxOG5NYXJrKCdDYXNoJyksXG4gIGkxOG5NYXJrKCdDcmVkaXQgY2FyZCcpLFxuICBpMThuTWFyaygnRS10cmFuc2ZlcicpLFxuICBpMThuTWFyaygnR2lmdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBtZXRob2QnKSxcbl1cblxuY29uc3QgY3VycmVuY2llcyA9IFtcbiAgaTE4bk1hcmsoJ0NhbmFkaWFuIGRvbGxhcicpLFxuICBpMThuTWFyaygnVS5TLiBkb2xsYXInKSxcbiAgaTE4bk1hcmsoJ0V1cm9zJyksXG4gIGkxOG5NYXJrKCdPdGhlciBjdXJyZW5jeScpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IE1vbmV5TG9zdEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RBbW91bnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BbW91bnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0Q3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5DdXJyZW5jeTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdEN1cnJlbmN5ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdEN1cnJlbmN5LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyQ3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXI8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE90aGVyQ3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgbWV0aG9kIG9mIHBheW1lbnQgd2FzIHVzZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbWV0aG9kc09mUGF5bWVudC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQuaW5kZXhPZignT3RoZXIgbWV0aG9kJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIG1ldGhvZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTW9uZXlMb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1c0xa61-MoneyLostForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUtzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IG1ldGhvZHNPZlBheW1lbnQgPSBbXG4gIGkxOG5NYXJrKCdDYXNoJyksXG4gIGkxOG5NYXJrKCdDcmVkaXQgY2FyZCcpLFxuICBpMThuTWFyaygnRS10cmFuc2ZlcicpLFxuICBpMThuTWFyaygnR2lmdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBtZXRob2QnKSxcbl1cblxuY29uc3QgY3VycmVuY2llcyA9IFtcbiAgaTE4bk1hcmsoJ0NhbmFkaWFuIGRvbGxhcicpLFxuICBpMThuTWFyaygnVS5TLiBkb2xsYXInKSxcbiAgaTE4bk1hcmsoJ0V1cm9zJyksXG4gIGkxOG5NYXJrKCdPdGhlciBjdXJyZW5jeScpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IE1vbmV5TG9zdEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RBbW91bnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BbW91bnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0Q3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5DdXJyZW5jeTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdEN1cnJlbmN5ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdEN1cnJlbmN5LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyQ3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXI8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE90aGVyQ3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgbWV0aG9kIG9mIHBheW1lbnQgd2FzIHVzZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbWV0aG9kc09mUGF5bWVudC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQuaW5kZXhPZignT3RoZXIgbWV0aG9kJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIG1ldGhvZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTW9uZXlMb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "1c0xa61-MoneyLostForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IG1ldGhvZHNPZlBheW1lbnQgPSBbXG4gIGkxOG5NYXJrKCdDYXNoJyksXG4gIGkxOG5NYXJrKCdDcmVkaXQgY2FyZCcpLFxuICBpMThuTWFyaygnRS10cmFuc2ZlcicpLFxuICBpMThuTWFyaygnR2lmdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBtZXRob2QnKSxcbl1cblxuY29uc3QgY3VycmVuY2llcyA9IFtcbiAgaTE4bk1hcmsoJ0NhbmFkaWFuIGRvbGxhcicpLFxuICBpMThuTWFyaygnVS5TLiBkb2xsYXInKSxcbiAgaTE4bk1hcmsoJ0V1cm9zJyksXG4gIGkxOG5NYXJrKCdPdGhlciBjdXJyZW5jeScpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IE1vbmV5TG9zdEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RBbW91bnRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BbW91bnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0Q3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5DdXJyZW5jeTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICBjdXJyZW5jaWVzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdEN1cnJlbmN5ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdEN1cnJlbmN5LmluZGV4T2YoJ290aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyQ3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXI8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE90aGVyQ3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgbWV0aG9kIG9mIHBheW1lbnQgd2FzIHVzZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbWV0aG9kc09mUGF5bWVudC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb3N0TWV0aG9kc09mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQuaW5kZXhPZignT3RoZXIgbWV0aG9kJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIG1ldGhvZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTW9uZXlMb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var MoneyLostForm = function MoneyLostForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_13__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit,
            values = _ref4.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostAmount"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Amount"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostAmount",
          id: "lostAmount",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostCurrency"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Currency"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return currencies.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "lostCurrency",
              id: "lostCurrency",
              component: RadioButtonAdapter,
              type: "radio",
              value: key,
              label: i18n._(key)
            }));
          });
        }), values.lostCurrency && values.lostCurrency.indexOf('other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostOtherCurrency"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostOtherCurrency",
          id: "lostOtherCurrency",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostMethodsOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "What method of payment was used?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref6) {
          var i18n = _ref6.i18n;
          return methodsOfPayment.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "lostMethodsOfPayment",
              id: "lostMethodsOfPayment",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        })), values.lostMethodsOfPayment && values.lostMethodsOfPayment.indexOf('Other method') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostOtherMethodOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other method"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostOtherMethodOfPayment",
          id: "lostOtherMethodOfPayment",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Continue"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          type: "button",
          color: "black",
          to: "/",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel report"
        }))));
      }
    });
  });
};
MoneyLostForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.f2f481e39ee365effd6c.hot-update.js.map