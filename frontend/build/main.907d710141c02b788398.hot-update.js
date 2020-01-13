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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTHdCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QnXG5pbXBvcnQgeyBMaSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1pdGVtJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1tZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpZW50IH0gPSBwcm9wc1xuICBjb25zdCBjYWNoZWQgPSBnZXRTY2FtbWVyRGV0YWlscyhjbGllbnQpXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoY2FjaGVkLmZpbGVzLm1hcChmaWxlID0+ICh7IG5hbWU6IGZpbGUgfSkpKVxuICBjb25zdCBbZmlsZURlc2NyaXB0aW9ucywgc2V0RmlsZURlc2NyaXB0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBjYWNoZWQuZmlsZURlc2NyaXB0aW9ucyxcbiAgKVxuICBjb25zdCBbc2NhbW1lckRldGFpbHMsIHNldFNjYW1tZXJEZXRhaWxzXSA9IHVzZVN0YXRlKGNhY2hlZC5zY2FtbWVyRGV0YWlscylcblxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NjYW1tZXJEZXRhaWxzJykge1xuICAgICAgc2V0U2NhbW1lckRldGFpbHMoZS50YXJnZXQudmFsdWUpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZC5pbmRleE9mKCdmaWxlLWRlc2NyaXB0aW9uJykgPiAtMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaWQuc3Vic3RyaW5nKDE3KSlcbiAgICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxlRGVzY3JpcHRpb25zKSlcbiAgICAgIG5ld0ZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBzZXRGaWxlcyhmaWxlcy5jb25jYXQoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgICAgc2V0RmlsZURlc2NyaXB0aW9ucyhmaWxlRGVzY3JpcHRpb25zLmNvbmNhdCgnJykpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSBmaWxlcy5maWx0ZXIoKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4KVxuICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gZmlsZURlc2NyaXB0aW9ucy5maWx0ZXIoXG4gICAgICAoXywgZmlsZUluZGV4KSA9PiBpbmRleCAhPSBmaWxlSW5kZXgsXG4gICAgKVxuICAgIHNldEZpbGVzKG5ld0ZpbGVzKVxuICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsU3VibWl0ID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2NhbW1lckRldGFpbHMsXG4gICAgICBmaWxlczogZmlsZXMubWFwKGYgPT4gZi5uYW1lKSxcbiAgICAgIGZpbGVEZXNjcmlwdGlvbnMsXG4gICAgfVxuICAgIHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBsb2NhbFN1Ym1pdChjbGllbnQpfVxuICAgICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXQgeW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tOlxuICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8VWw+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBXaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZSBhbmQgd2hlcmUgdGhleSByZXF1ZXN0ZWQgbW9uZXlcbiAgICAgICAgICAgICAgICAgICAgYmUgc2VudFxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHVzZXJuYW1lcywgZW1haWwgYWRkcmVzc2VzLCBwaG9uZSBudW1iZXJzLCBvciB3ZWJzaXRlc1xuICAgICAgICAgICAgICAgICAgICB0aGV5IHVzZWRcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkFkZCBzdXNwZWN0IGNsdWVzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBpbnB1dD17eyB2YWx1ZTogc2NhbW1lckRldGFpbHMsIG9uQ2hhbmdlIH19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIEF0dGFjaCBkb2N1bWVudHMgc3VjaCBhcyBzY3JlZW5zaG90cywgcGhvdG9zLCBjb252ZXJzYXRpb25zLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXMsIGJhbmsgc3RhdGVtZW50cywgb3IgcmVjZWlwdHMuXG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMTVweFwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+QWRkIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvRmlsZVVwbG9hZD5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEgzPlxuICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgb25lOiAnIyBmaWxlIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvSDM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkRlc2NyaWJlIHdoYXQgdGhpcyBmaWxlIHNob3dzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17eyB2YWx1ZTogZmlsZURlc2NyaXB0aW9uc1tpbmRleF0sIG9uQ2hhbmdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiY3JpbXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5Db250aW51ZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPVwiL3AyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cblNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xpZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkIGNsaWVudD17Y2xpZW50fSB7Li4ucHJvcHN9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "9cl91z-ScammerDetailsFormWrapped",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTXdCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QnXG5pbXBvcnQgeyBMaSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1pdGVtJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1tZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpZW50IH0gPSBwcm9wc1xuICBjb25zdCBjYWNoZWQgPSBnZXRTY2FtbWVyRGV0YWlscyhjbGllbnQpXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoY2FjaGVkLmZpbGVzLm1hcChmaWxlID0+ICh7IG5hbWU6IGZpbGUgfSkpKVxuICBjb25zdCBbZmlsZURlc2NyaXB0aW9ucywgc2V0RmlsZURlc2NyaXB0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBjYWNoZWQuZmlsZURlc2NyaXB0aW9ucyxcbiAgKVxuICBjb25zdCBbc2NhbW1lckRldGFpbHMsIHNldFNjYW1tZXJEZXRhaWxzXSA9IHVzZVN0YXRlKGNhY2hlZC5zY2FtbWVyRGV0YWlscylcblxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NjYW1tZXJEZXRhaWxzJykge1xuICAgICAgc2V0U2NhbW1lckRldGFpbHMoZS50YXJnZXQudmFsdWUpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZC5pbmRleE9mKCdmaWxlLWRlc2NyaXB0aW9uJykgPiAtMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaWQuc3Vic3RyaW5nKDE3KSlcbiAgICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxlRGVzY3JpcHRpb25zKSlcbiAgICAgIG5ld0ZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBzZXRGaWxlcyhmaWxlcy5jb25jYXQoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgICAgc2V0RmlsZURlc2NyaXB0aW9ucyhmaWxlRGVzY3JpcHRpb25zLmNvbmNhdCgnJykpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSBmaWxlcy5maWx0ZXIoKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4KVxuICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gZmlsZURlc2NyaXB0aW9ucy5maWx0ZXIoXG4gICAgICAoXywgZmlsZUluZGV4KSA9PiBpbmRleCAhPSBmaWxlSW5kZXgsXG4gICAgKVxuICAgIHNldEZpbGVzKG5ld0ZpbGVzKVxuICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsU3VibWl0ID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2NhbW1lckRldGFpbHMsXG4gICAgICBmaWxlczogZmlsZXMubWFwKGYgPT4gZi5uYW1lKSxcbiAgICAgIGZpbGVEZXNjcmlwdGlvbnMsXG4gICAgfVxuICAgIHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBsb2NhbFN1Ym1pdChjbGllbnQpfVxuICAgICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICBJbmNsdWRlIHdoYXQgeW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tOlxuICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8VWw+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBXaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZSBhbmQgd2hlcmUgdGhleSByZXF1ZXN0ZWQgbW9uZXlcbiAgICAgICAgICAgICAgICAgICAgYmUgc2VudFxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgVGhlIHVzZXJuYW1lcywgZW1haWwgYWRkcmVzc2VzLCBwaG9uZSBudW1iZXJzLCBvciB3ZWJzaXRlc1xuICAgICAgICAgICAgICAgICAgICB0aGV5IHVzZWRcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT5cbiAgICAgICAgICAgICAgPC9VbD5cblxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkFkZCBzdXNwZWN0IGNsdWVzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBpbnB1dD17eyB2YWx1ZTogc2NhbW1lckRldGFpbHMsIG9uQ2hhbmdlIH19XG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIEF0dGFjaCBkb2N1bWVudHMgc3VjaCBhcyBzY3JlZW5zaG90cywgcGhvdG9zLCBjb252ZXJzYXRpb25zLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXMsIGJhbmsgc3RhdGVtZW50cywgb3IgcmVjZWlwdHMuXG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9QPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMTVweFwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+QWRkIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvRmlsZVVwbG9hZD5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEgzPlxuICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgb25lOiAnIyBmaWxlIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvSDM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkRlc2NyaWJlIHdoYXQgdGhpcyBmaWxlIHNob3dzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17eyB2YWx1ZTogZmlsZURlc2NyaXB0aW9uc1tpbmRleF0sIG9uQ2hhbmdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiY3JpbXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5Db250aW51ZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPVwiL3AyXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cblNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xpZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkIGNsaWVudD17Y2xpZW50fSB7Li4ucHJvcHN9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
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
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "<0>Include what you know about where the scam came from:</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Who the scammer claimed to be and where they requested money be sent"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "The usernames, email addresses, phone numbers, or websites they used"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "scammerDetails"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Add suspect clues"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          input: {
            value: scammerDetails,
            onChange: onChange
          },
          name: "scammerDetails",
          id: "scammerDetails",
          component: TextAreaAdapter,
          height: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Attach documents such as screenshots, photos, conversations, messages, bank statements, or receipts."
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
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
//# sourceMappingURL=main.907d710141c02b788398.hot-update.js.map