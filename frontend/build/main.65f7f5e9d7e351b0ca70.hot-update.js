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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2THdCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgyLCBIMyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Vub3JkZXJlZC1saXN0J1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtaXRlbSdcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtbWVyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gIH1cblxuICBjb25zdCBsb2NhbFN1Ym1pdCA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNjYW1tZXJEZXRhaWxzLFxuICAgICAgZmlsZXM6IGZpbGVzLm1hcChmID0+IGYubmFtZSksXG4gICAgICBmaWxlRGVzY3JpcHRpb25zLFxuICAgIH1cbiAgICBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbG9jYWxTdWJtaXQoY2xpZW50KX1cbiAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBTaGFyZSBkZXRhaWxzIHRoYXQgY291bGQgaWRlbnRpZnkgdGhlIHNjYW1tZXJcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+VGhpbmsgYWJvdXQgaW5jbHVkaW5nIHRoaW5ncyBzdWNoIGFzOjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPFVsPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lcywgZW1haWwgYWRkcmVzc2VzLCBwaG9uZSBudW1iZXJzLCBvciB3ZWJzaXRlIGxpbmtzXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBEZXRhaWxzIGFib3V0IGludGVyYWN0aW9ucyBvciB0cmFuc2FjdGlvbnMgaW52b2x2aW5nIHRoZSBzY2FtbWVyXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgIDwvVWw+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzY2FtbWVyRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5BYm91dCB0aGUgc2NhbW1lcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IHNjYW1tZXJEZXRhaWxzLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgZmlsZXMgdG8gc2hvdyB3aGF0IHRoZSBzY2FtbWVyIGRpZDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucz5UaGluayBhYm91dCBpbmNsdWRpbmcgdGhpbmdzIHN1Y2ggYXM6PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8VWw+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBTY3JlZW5zaG90cywgY29udmVyc2F0aW9ucywgYmFuayBzdGF0ZW1lbnRzLCBhbmQgcmVjZWlwdHNcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxIMz5cbiAgICAgICAgICAgICAgICAgICAge2kxOG4ucGx1cmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgb3RoZXI6ICcjIGZpbGVzIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSTE4bj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxIMyBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0gZm9udFNpemU9e1syLCBudWxsLCA0XX0+XG4gICAgICAgICAgICAgICAgICAgICAge2YubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9IMz5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMlwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgKVxufVxuXG5TY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsaWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgY29uc3QgU2NhbW1lckRldGFpbHNGb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiA8U2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZCBjbGllbnQ9e2NsaWVudH0gey4uLnByb3BzfSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "9cl91z-ScammerDetailsFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTXdCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgyLCBIMyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Vub3JkZXJlZC1saXN0J1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtaXRlbSdcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtbWVyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gIH1cblxuICBjb25zdCBsb2NhbFN1Ym1pdCA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNjYW1tZXJEZXRhaWxzLFxuICAgICAgZmlsZXM6IGZpbGVzLm1hcChmID0+IGYubmFtZSksXG4gICAgICBmaWxlRGVzY3JpcHRpb25zLFxuICAgIH1cbiAgICBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gbG9jYWxTdWJtaXQoY2xpZW50KX1cbiAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICBTaGFyZSBkZXRhaWxzIHRoYXQgY291bGQgaWRlbnRpZnkgdGhlIHNjYW1tZXJcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+VGhpbmsgYWJvdXQgaW5jbHVkaW5nIHRoaW5ncyBzdWNoIGFzOjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPFVsPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lcywgZW1haWwgYWRkcmVzc2VzLCBwaG9uZSBudW1iZXJzLCBvciB3ZWJzaXRlIGxpbmtzXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBEZXRhaWxzIGFib3V0IGludGVyYWN0aW9ucyBvciB0cmFuc2FjdGlvbnMgaW52b2x2aW5nIHRoZSBzY2FtbWVyXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgIDwvVWw+XG5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzY2FtbWVyRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5BYm91dCB0aGUgc2NhbW1lcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IHNjYW1tZXJEZXRhaWxzLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbNCwgbnVsbCwgNV19IG1hcmdpblRvcD1cIjQwcHhcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+U2hhcmUgZmlsZXMgdG8gc2hvdyB3aGF0IHRoZSBzY2FtbWVyIGRpZDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucz5UaGluayBhYm91dCBpbmNsdWRpbmcgdGhpbmdzIHN1Y2ggYXM6PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8VWw+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBTY3JlZW5zaG90cywgY29udmVyc2F0aW9ucywgYmFuayBzdGF0ZW1lbnRzLCBhbmQgcmVjZWlwdHNcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxIMz5cbiAgICAgICAgICAgICAgICAgICAge2kxOG4ucGx1cmFsKHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgb3RoZXI6ICcjIGZpbGVzIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L0gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSTE4bj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxIMyBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0gZm9udFNpemU9e1syLCBudWxsLCA0XX0+XG4gICAgICAgICAgICAgICAgICAgICAge2YubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9IMz5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMlwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgKVxufVxuXG5TY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsaWVudDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgY29uc3QgU2NhbW1lckRldGFpbHNGb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiA8U2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZCBjbGllbnQ9e2NsaWVudH0gey4uLnByb3BzfSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
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
          id: "Share details that could identify the scammer"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Think about including things such as:"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Who the scammer claimed to be"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Usernames, email addresses, phone numbers, or website links"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Details about interactions or transactions involving the scammer"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "scammerDetails"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "About the scammer"
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
          id: "Share files to show what the scammer did"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Think about including things such as:"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Screenshots, conversations, bank statements, and receipts"
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
          id: "Attach file"
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
//# sourceMappingURL=main.65f7f5e9d7e351b0ca70.hot-update.js.map