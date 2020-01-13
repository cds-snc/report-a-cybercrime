exports.id = "main";
exports.modules = {

/***/ "./src/p1/forms/ScamInfoForm.js":
/*!**************************************!*\
  !*** ./src/p1/forms/ScamInfoForm.js ***!
  \**************************************/
/*! exports provided: ScamInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoForm", function() { return ScamInfoForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");









/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_14__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_16__["TextArea"]);
var DateSelectorAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_date_picker__WEBPACK_IMPORTED_MODULE_18__["DateSelector"]);
var howContacted = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Telephone'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Email'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Website'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Other')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('label', {
  target: "e5ctwc80",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U2NhbUluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygnVGVsZXBob25lJyksXG4gIGkxOG5NYXJrKCdFbWFpbCcpLFxuICBpMThuTWFyaygnV2Vic2l0ZScpLFxuICBpMThuTWFyaygnT3RoZXInKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjbGFzcyBTY2FtSW5mb0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZGF0ZSA9PiB7XG4gICAgdGhpcy5zdGFydERhdGUgPSBkYXRlXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICBpZiAodGhpcy5zdGFydERhdGUgIT0gbnVsbCkge1xuICAgICAgZGF0YS53aGVuV2VyZVlvdUNvbnRhY3RlZCA9IHRoaXMuc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEud2hlbldlcmVZb3VDb250YWN0ZWQgPSAnJ1xuICAgIH1cbiAgICBvblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldFNjYW1JbmZvKGNsaWVudCl9XG4gICAgICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiB0aGlzLmxvY2FsT25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgICAgIHJlbmRlcj17KHtcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICAvLyByZXNldCxcbiAgICAgICAgICAgICAgLy8gc3VibWl0dGluZyxcbiAgICAgICAgICAgICAgLy8gcHJpc3RpbmUsXG4gICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgLy8gaW52YWxpZCxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzY2FtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IGhhcHBlbmVkPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NhbURldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGVuIGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtEYXRlU2VsZWN0b3JBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ib3cgZGlkIGl0IHN0YXJ0Pzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91Q29udGFjdGVkICYmXG4gICAgICAgICAgICAgICAgdmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQuaW5kZXhPZignT3RoZXInKSA+IC0xID8gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXI8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHZhbGlkYXRlKHZhbHVlcykpID09PSBKU09OLnN0cmluZ2lmeSh7fSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+UGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHM8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJNb25leSBsb3N0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('fieldset', {
  target: "e5ctwc81",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ21DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U2NhbUluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygnVGVsZXBob25lJyksXG4gIGkxOG5NYXJrKCdFbWFpbCcpLFxuICBpMThuTWFyaygnV2Vic2l0ZScpLFxuICBpMThuTWFyaygnT3RoZXInKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjbGFzcyBTY2FtSW5mb0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhcnREYXRlID0gbmV3IERhdGUoKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZGF0ZSA9PiB7XG4gICAgdGhpcy5zdGFydERhdGUgPSBkYXRlXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcbiAgICBpZiAodGhpcy5zdGFydERhdGUgIT0gbnVsbCkge1xuICAgICAgZGF0YS53aGVuV2VyZVlvdUNvbnRhY3RlZCA9IHRoaXMuc3RhcnREYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEud2hlbldlcmVZb3VDb250YWN0ZWQgPSAnJ1xuICAgIH1cbiAgICBvblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldFNjYW1JbmZvKGNsaWVudCl9XG4gICAgICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiB0aGlzLmxvY2FsT25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgICAgIHJlbmRlcj17KHtcbiAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgICAvLyByZXNldCxcbiAgICAgICAgICAgICAgLy8gc3VibWl0dGluZyxcbiAgICAgICAgICAgICAgLy8gcHJpc3RpbmUsXG4gICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgLy8gaW52YWxpZCxcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzY2FtRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IGhhcHBlbmVkPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2NhbURldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGVuIGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtEYXRlU2VsZWN0b3JBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGFydERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ib3cgZGlkIGl0IHN0YXJ0Pzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91Q29udGFjdGVkICYmXG4gICAgICAgICAgICAgICAgdmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQuaW5kZXhPZignT3RoZXInKSA+IC0xID8gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXI8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHZhbGlkYXRlKHZhbHVlcykpID09PSBKU09OLnN0cmluZ2lmeSh7fSkgPyAoXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+UGxlYXNlIGZpbGwgb3V0IGFsbCBmaWVsZHM8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJNb25leSBsb3N0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var validate = function validate() {
  return {};
};

var ScamInfoForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ScamInfoForm, _Component);

  function ScamInfoForm(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScamInfoForm);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ScamInfoForm).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (date) {
      _this.startDate = date;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit; // data.whenWereYouContacted = this.startDate.toISOString().slice(0, 10)

      if (_this.startDate != null) {
        data.whenWereYouContacted = _this.startDate.toISOString().slice(0, 10);
      } else {
        data.whenWereYouContacted = '';
      }

      onSubmit(client, data);
    });

    _this.startDate = new Date();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScamInfoForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__["getScamInfo"])(client),
          onSubmit: function onSubmit(data) {
            return _this2.localOnSubmit(client, data);
          },
          validate: validate,
          render: function render(_ref) {
            var handleSubmit = _ref.handleSubmit,
                values = _ref.values;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("form", {
              onSubmit: handleSubmit
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "scamDetails"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>What happened?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "scamDetails",
              id: "scamDetails",
              component: TextAreaAdapter,
              height: "200px",
              width: "300px"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "whenWereYouContacted"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>When did it start?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref2) {
              var i18n = _ref2.i18n;
              return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                name: "whenWereYouContacted",
                id: "whenWereYouContacted",
                component: DateSelectorAdapter,
                locale: i18n._('en'),
                selected: _this2.startDate,
                onChange: _this2.handleChange,
                height: "25px",
                width: "300px"
              });
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>How did it start?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref3) {
              var i18n = _ref3.i18n;
              return howContacted.map(function (key) {
                return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(CheckboxStyle, {
                  key: key
                }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                  name: "howWereYouContacted",
                  component: CheckboxAdapter,
                  type: "checkbox",
                  value: key,
                  label: i18n._(key)
                }));
              });
            }))), values.howWereYouContacted && values.howWereYouContacted.indexOf('Other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "otherMethodOfContact"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Other"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "otherMethodOfContact",
              id: "otherMethodOfContact",
              component: TextAreaAdapter,
              height: "50px",
              width: "300px"
            }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], null, JSON.stringify(validate(values)) === JSON.stringify({}) ? '' : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_17__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Please fill out all fields"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_15__["ButtonsContainer"], {
              buttonLink: false,
              cancel: true,
              cancelRoute: "/p1/",
              nextPage: "Money lost"
            }));
          }
        });
      });
    }
  }]);

  return ScamInfoForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
ScamInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.e9c909a0eb1d8353bb72.hot-update.js.map