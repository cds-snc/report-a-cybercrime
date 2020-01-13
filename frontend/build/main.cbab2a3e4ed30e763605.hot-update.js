exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/TimeFrameInfoForm.js":
/*!*******************************************!*\
  !*** ./src/p2/forms/TimeFrameInfoForm.js ***!
  \*******************************************/
/*! exports provided: TimeFrameInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameInfoForm", function() { return TimeFrameInfoForm; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/date-picker */ "./src/components/date-picker/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");









/** @jsx jsx */













var DateSelectorAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_date_picker__WEBPACK_IMPORTED_MODULE_18__["DateSelector"]);

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "wch91r-TimeFrameInfoFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:TimeFrameInfoFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1RpbWVGcmFtZUluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHc0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvVGltZUZyYW1lSW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IEg0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuXG5pbXBvcnQgeyBEYXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRUaW1lRnJhbWUgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBEYXRlU2VsZWN0b3JBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihEYXRlU2VsZWN0b3IpXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmNsYXNzIFRpbWVGcmFtZUluZm9Gb3JtV3JhcHBlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGdldFRpbWVGcmFtZShwcm9wcy5jbGllbnQpXG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpXG4gICAgdGhpcy5lbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc3RhcnREYXRlID0gZGF0ZVxuICB9XG4gIGhhbmRsZUNoYW5nZURhdGUgPSBkYXRlID0+IHtcbiAgICB0aGlzLmVuZERhdGUgPSBkYXRlXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5zdGFydERhdGUgIT0gbnVsbCAmJiB0aGlzLnN0YXJ0RGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBkYXRhLnN0YXJ0RGF0ZSA9IHRoaXMuc3RhcnREYXRlLnRvSVNPU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5zdGFydERhdGUgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVuZERhdGUgIT0gbnVsbCAmJiB0aGlzLmVuZERhdGUubGVuZ3RoID4gMCkge1xuICAgICAgZGF0YS5lbmREYXRlID0gdGhpcy5lbmREYXRlLnRvSVNPU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5lbmREYXRlID0gJydcbiAgICB9XG5cbiAgICBvblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHRoaXMubG9jYWxPblN1Ym1pdCh0aGlzLnByb3BzLmNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuRGlkSXRTdGFydFwiPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXBwcm94aW1hdGUgc3RhcnQgZGF0ZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5EaWRJdFN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuRGlkSXRTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGF0ZVNlbGVjdG9yQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndoZW5XYXNMYXN0SW50ZXJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFwcHJveGltYXRlIGVuZCBkYXRlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldhc0xhc3RJbnRlcmFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwid2hlbldhc0xhc3RJbnRlcmFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGF0ZVNlbGVjdG9yQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURhdGV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDIvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5UaW1lRnJhbWVJbmZvRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBUaW1lRnJhbWVJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFRpbWVGcmFtZUluZm9Gb3JtV3JhcHBlZCBjbGllbnQ9e2NsaWVudH0gey4uLnByb3BzfSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "wch91r-TimeFrameInfoFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:TimeFrameInfoFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1RpbWVGcmFtZUluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIc0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvVGltZUZyYW1lSW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IEg0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuXG5pbXBvcnQgeyBEYXRlU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGUtcGlja2VyJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRUaW1lRnJhbWUgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBEYXRlU2VsZWN0b3JBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihEYXRlU2VsZWN0b3IpXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmNsYXNzIFRpbWVGcmFtZUluZm9Gb3JtV3JhcHBlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGdldFRpbWVGcmFtZShwcm9wcy5jbGllbnQpXG4gICAgdGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpXG4gICAgdGhpcy5lbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc3RhcnREYXRlID0gZGF0ZVxuICB9XG4gIGhhbmRsZUNoYW5nZURhdGUgPSBkYXRlID0+IHtcbiAgICB0aGlzLmVuZERhdGUgPSBkYXRlXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodGhpcy5zdGFydERhdGUgIT0gbnVsbCAmJiB0aGlzLnN0YXJ0RGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBkYXRhLnN0YXJ0RGF0ZSA9IHRoaXMuc3RhcnREYXRlLnRvSVNPU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5zdGFydERhdGUgPSAnJ1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVuZERhdGUgIT0gbnVsbCAmJiB0aGlzLmVuZERhdGUubGVuZ3RoID4gMCkge1xuICAgICAgZGF0YS5lbmREYXRlID0gdGhpcy5lbmREYXRlLnRvSVNPU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5lbmREYXRlID0gJydcbiAgICB9XG5cbiAgICBvblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHRoaXMubG9jYWxPblN1Ym1pdCh0aGlzLnByb3BzLmNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuRGlkSXRTdGFydFwiPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXBwcm94aW1hdGUgc3RhcnQgZGF0ZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5EaWRJdFN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuRGlkSXRTdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGF0ZVNlbGVjdG9yQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndoZW5XYXNMYXN0SW50ZXJhY3Rpb25cIj5cbiAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFwcHJveGltYXRlIGVuZCBkYXRlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldhc0xhc3RJbnRlcmFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwid2hlbldhc0xhc3RJbnRlcmFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17RGF0ZVNlbGVjdG9yQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtpMThuLl8oJ2VuJyl9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLmVuZERhdGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURhdGV9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDIvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5UaW1lRnJhbWVJbmZvRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBUaW1lRnJhbWVJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFRpbWVGcmFtZUluZm9Gb3JtV3JhcHBlZCBjbGllbnQ9e2NsaWVudH0gey4uLnByb3BzfSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
};

var TimeFrameInfoFormWrapped =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeFrameInfoFormWrapped, _Component);

  function TimeFrameInfoFormWrapped(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TimeFrameInfoFormWrapped);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeFrameInfoFormWrapped).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChange", function (date) {
      _this.startDate = date;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleChangeDate", function (date) {
      _this.endDate = date;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit;

      if (_this.startDate != null && _this.startDate.length > 0) {
        data.startDate = _this.startDate.toISOString();
      } else {
        data.startDate = '';
      }

      if (_this.endDate != null && _this.endDate.length > 0) {
        data.endDate = _this.endDate.toISOString();
      } else {
        data.endDate = '';
      }

      onSubmit(client, data);
    });

    var _getTimeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__["getTimeFrame"])(props.client),
        startDate = _getTimeFrame.startDate,
        endDate = _getTimeFrame.endDate;

    _this.startDate = new Date(startDate);
    _this.endDate = new Date(endDate);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TimeFrameInfoFormWrapped, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        onSubmit: function onSubmit(data) {
          return _this2.localOnSubmit(_this2.props.client, data);
        },
        validate: validate,
        render: function render(_ref3) {
          var handleSubmit = _ref3.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
            htmlFor: "whenDidItStart"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(P, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "Approximate start date"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref4) {
            var i18n = _ref4.i18n;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "whenDidItStart",
              id: "whenDidItStart",
              component: DateSelectorAdapter,
              locale: i18n._('en'),
              selected: _this2.startDate,
              onChange: _this2.handleChange,
              height: "25px",
              width: "300px"
            });
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
            htmlFor: "whenWasLastInteraction"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(P, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "Approximate end date"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref5) {
            var i18n = _ref5.i18n;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "whenWasLastInteraction",
              id: "whenWasLastInteraction",
              component: DateSelectorAdapter,
              locale: i18n._('en'),
              selected: _this2.endDate,
              onChange: _this2.handleChangeDate,
              height: "25px",
              width: "300px"
            });
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_15__["Container"], {
            width: "305px",
            marginTop: [1, null, 1],
            css: _ref
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
            type: "submit"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "Continue"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_15__["Container"], {
            width: "300px",
            marginTop: [1, null, 1],
            css: _ref2
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_17__["Link"], {
            type: "button",
            color: "black",
            to: "/p2/",
            textAlign: "center"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
            id: "Cancel report"
          }))));
        }
      });
    }
  }]);

  return TimeFrameInfoFormWrapped;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

TimeFrameInfoFormWrapped.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.any.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};
var TimeFrameInfoForm = function TimeFrameInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(TimeFrameInfoFormWrapped, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      client: client
    }, props));
  });
};

/***/ })

};
//# sourceMappingURL=main.cbab2a3e4ed30e763605.hot-update.js.map