exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/ScammerDetailsForm.js":
/*!********************************************!*\
  !*** ./src/p2/forms/ScammerDetailsForm.js ***!
  \********************************************/
/*! exports provided: ScammerDetailsFormWrapped, ScammerDetailsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScammerDetailsFormWrapped", function() { return ScammerDetailsFormWrapped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScammerDetailsForm", function() { return ScammerDetailsForm; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");



/** @jsx jsx */


















var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_9__["TextArea"]);

var _ref =  false ? undefined : {
  name: "9cl91z-ScammerDetailsFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTXdCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgyLCBIMyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Vub3JkZXJlZC1saXN0J1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtaXRlbSdcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtbWVyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gIH1cblxuICBjb25zdCBsb2NhbFN1Ym1pdCA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNjYW1tZXJEZXRhaWxzLFxuICAgICAgZmlsZXM6IGZpbGVzLm1hcChmID0+IGYubmFtZSksXG4gICAgICBmaWxlRGVzY3JpcHRpb25zLFxuICAgIH1cbiAgICBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbG9jYWxTdWJtaXQoY2xpZW50KX1cbiAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgaWRlbnRpZnlpbmcgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXQgeW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tOlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPFVsPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NlcywgcGhvbmUgbnVtYmVycywgb3Igd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5EZXRhaWxzIGFib3V0IHlvdXIgaW50ZXJhY3Rpb25zIG9yIHRyYW5zYWN0aW9uczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgZG8geW91IGtub3cgYWJvdXQgdGhlIHN1c3BlY3RlZCBzY2FtbWVyPzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IHNjYW1tZXJEZXRhaWxzLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgZmlsZXM8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXRldmVyIGRvY3VtZW50cyB5b3UgaGF2ZSB0aGF0IHNob3dzIHdoYXQgdGhlXG4gICAgICAgICAgICAgICAgICBzdXNwZWN0IGRpZDpcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+U2NyZWVuc2hvdHMgYW5kIHBob3RvczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udmVyc2F0aW9ucyBhbmQgbWVzc2FnZXM8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkJhbmsgc3RhdGVtZW50cyBhbmQgcmVjZWlwdHM8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgIDwvVWw+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDVdfVxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDVdfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjE1cHhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SDM+XG4gICAgICAgICAgICAgICAgICAgIHtpMThuLnBsdXJhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICBvbmU6ICcjIGZpbGUgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIG90aGVyOiAnIyBmaWxlcyBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9IMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8SDMgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19IGZvbnRTaXplPXtbMiwgbnVsbCwgNF19PlxuICAgICAgICAgICAgICAgICAgICAgIHtmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvSDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+RGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3M8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBmaWxlRGVzY3JpcHRpb25zW2luZGV4XSwgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWxlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5SZW1vdmUgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgY2xpZW50PXtjbGllbnR9IHsuLi5wcm9wc30gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "9cl91z-ScammerDetailsFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTndCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgyLCBIMyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Vub3JkZXJlZC1saXN0J1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtaXRlbSdcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtbWVyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gIH1cblxuICBjb25zdCBsb2NhbFN1Ym1pdCA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNjYW1tZXJEZXRhaWxzLFxuICAgICAgZmlsZXM6IGZpbGVzLm1hcChmID0+IGYubmFtZSksXG4gICAgICBmaWxlRGVzY3JpcHRpb25zLFxuICAgIH1cbiAgICBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbG9jYWxTdWJtaXQoY2xpZW50KX1cbiAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgaWRlbnRpZnlpbmcgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXQgeW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tOlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPFVsPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NlcywgcGhvbmUgbnVtYmVycywgb3Igd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5EZXRhaWxzIGFib3V0IHlvdXIgaW50ZXJhY3Rpb25zIG9yIHRyYW5zYWN0aW9uczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgZG8geW91IGtub3cgYWJvdXQgdGhlIHN1c3BlY3RlZCBzY2FtbWVyPzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IHNjYW1tZXJEZXRhaWxzLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgZmlsZXM8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXRldmVyIGRvY3VtZW50cyB5b3UgaGF2ZSB0aGF0IHNob3dzIHdoYXQgdGhlXG4gICAgICAgICAgICAgICAgICBzdXNwZWN0IGRpZDpcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+U2NyZWVuc2hvdHMgYW5kIHBob3RvczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udmVyc2F0aW9ucyBhbmQgbWVzc2FnZXM8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkJhbmsgc3RhdGVtZW50cyBhbmQgcmVjZWlwdHM8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgIDwvVWw+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDVdfVxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDVdfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjE1cHhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SDM+XG4gICAgICAgICAgICAgICAgICAgIHtpMThuLnBsdXJhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICBvbmU6ICcjIGZpbGUgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIG90aGVyOiAnIyBmaWxlcyBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9IMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8SDMgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19IGZvbnRTaXplPXtbMiwgbnVsbCwgNF19PlxuICAgICAgICAgICAgICAgICAgICAgIHtmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvSDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+RGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3M8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBmaWxlRGVzY3JpcHRpb25zW2luZGV4XSwgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWxlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5SZW1vdmUgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgY2xpZW50PXtjbGllbnR9IHsuLi5wcm9wc30gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var ScammerDetailsFormWrapped = function ScammerDetailsFormWrapped(props) {
  var client = props.client;
  var cached = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__["getScammerDetails"])(client);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.files.map(function (file) {
    return {
      name: file
    };
  })),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.fileDescriptions),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      fileDescriptions = _useState4[0],
      setFileDescriptions = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.scammerDetails),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      scammerDetails = _useState6[0],
      setScammerDetails = _useState6[1];

  var onChange = function onChange(e) {
    if (e.target.id === 'scammerDetails') {
      setScammerDetails(e.target.value);
    } else if (e.target.id.indexOf('file-description') > -1) {
      var index = Number(e.target.id.substring(17));
      var newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions));
      newFileDescriptions[index] = e.target.value;
      setFileDescriptions(newFileDescriptions);
    } else if (e.target.files && e.target.files[0]) {
      setFiles(files.concat(e.target.files[0]));
      setFileDescriptions(fileDescriptions.concat(''));
    }
  };

  var removeFile = function removeFile(index) {
    var newFiles = files.filter(function (_, fileIndex) {
      return index != fileIndex;
    });
    var newFileDescriptions = fileDescriptions.filter(function (_, fileIndex) {
      return index != fileIndex;
    });
    setFiles(newFiles);
    setFileDescriptions(newFileDescriptions);
  };

  var localSubmit = function localSubmit(client) {
    var data = {
      scammerDetails: scammerDetails,
      files: files.map(function (f) {
        return f.name;
      }),
      fileDescriptions: fileDescriptions
    };
    props.onSubmit(client, data);
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      onSubmit: function onSubmit() {
        return localSubmit(client);
      },
      render: function render(_ref3) {
        var handleSubmit = _ref3.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H2"], {
          fontSize: [4, null, 5],
          marginTop: "40px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Share identifying information"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Include what you know about where the scam came from:"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Who the scammer claimed to be"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Email addresses, phone numbers, or website links"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Details about your interactions or transactions"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "scammerDetails"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "What do you know about the suspected scammer?"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          input: {
            value: scammerDetails,
            onChange: onChange
          },
          name: "scammerDetails",
          id: "scammerDetails",
          component: TextAreaAdapter,
          height: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H2"], {
          fontSize: [4, null, 5],
          marginTop: "40px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Share files"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Include whatever documents you have that shows what the suspect did:"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Screenshots and photos"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Conversations and messages"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Bank statements and receipts"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          width: "300px",
          marginTop: [2, null, 5],
          marginBottom: [2, null, 5],
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUpload"], {
          onChange: onChange,
          paddingLeft: "15px",
          paddingRight: "15px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Add file"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["I18n"], null, function (_ref4) {
          var i18n = _ref4.i18n;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H3"], null, i18n._("{0, plural, one {# file attached} other {# files attached}}", {
            0: files.length
          }));
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], null, files.map(function (f, index) {
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            key: index
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H3"], {
            marginTop: [4, null, 5],
            fontSize: [2, null, 4]
          }, f.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
            htmlFor: "file-description-".concat(index)
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
            id: "Describe what this file shows"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            input: {
              value: fileDescriptions[index],
              onChange: onChange
            },
            name: "file-description-".concat(index),
            id: "file-description-".concat(index),
            component: TextAreaAdapter,
            height: "50px"
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            "float": "right",
            backgroundColor: "crimson",
            type: "button",
            onClick: function onClick() {
              return removeFile(index);
            }
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
            id: "Remove file"
          })));
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          width: "305px",
          marginTop: [1, null, 1],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Continue"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          width: "300px",
          marginTop: [1, null, 1],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_11__["Link"], {
          type: "button",
          color: "black",
          to: "/p2",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Cancel report"
        }))));
      }
    });
  });
};
ScammerDetailsFormWrapped.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};
var ScammerDetailsForm = function ScammerDetailsForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ScammerDetailsFormWrapped, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      client: client
    }, props));
  });
};

/***/ })

};
//# sourceMappingURL=main.70d6f00c0c3ec6c1a605.hot-update.js.map