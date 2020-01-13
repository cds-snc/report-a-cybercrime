exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/ConfirmationForm.js":
/*!******************************************!*\
  !*** ./src/p2/forms/ConfirmationForm.js ***!
  \******************************************/
/*! exports provided: ConfirmationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationForm", function() { return ConfirmationForm; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");



/** @jsx jsx */













var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_8__["TextArea"]);

var _ref =  false ? undefined : {
  name: "p2ujui-ConfirmationForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ConfirmationForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0NvbmZpcm1hdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Y4QiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9Db25maXJtYXRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBIMiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQge1xuICBnZXRUZWxsVXNNb3JlLFxuICBTVUJNSVRfUDJfUkVQT1JUX01VVEFUSU9OLFxufSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3RlbGxVc01vcmUsIHNldFRlbGxVc01vcmVdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSwgY2xpZW50KSA9PiB7XG4gICAgc2V0VGVsbFVzTW9yZShlLnRhcmdldC52YWx1ZSlcbiAgICBjbGllbnQud3JpdGVEYXRhKHtcbiAgICAgIGRhdGE6IHsgdGVsbFVzTW9yZTogSlNPTi5zdHJpbmdpZnkoeyB0ZWxsVXNNb3JlOiBlLnRhcmdldC52YWx1ZSB9KSB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIMiBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgIDxUcmFucz5UZWxsIHVzIG1vcmU8L1RyYW5zPlxuICAgICAgPC9IMj5cbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXtTVUJNSVRfUDJfUkVQT1JUX01VVEFUSU9OfT5cbiAgICAgICAgICAgIHtzdWJtaXRSZXBvcnRQMiA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0VGVsbFVzTW9yZShjbGllbnQpfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIHN1Ym1pdFJlcG9ydFAyKX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxsVXNNb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMl19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBtb3JlIGRldGFpbCB5b3UgZ2l2ZSwgdGhlIG1vcmUgbGlrZWx5IGl0IHdpbGwgYmUgaW52ZXN0aWdhdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SXMgdGhlcmUgaW5mb3JtYXRpb24geW914oCZZCBsaWtlIHRvIGFkZCB0aGF0IGRpZG7igJl0IGZpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbnl3aGVyZSBlbHNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVsbFVzTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVsbFVzTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0VGVsbFVzTW9yZShjbGllbnQpLnRlbGxVc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKGUsIGNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGxVc01vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWxsVXNNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5TdWJtaXQgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvcDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L011dGF0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbkNvbmZpcm1hdGlvbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "p2ujui-ConfirmationForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ConfirmationForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0NvbmZpcm1hdGlvbkZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEY4QiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9Db25maXJtYXRpb25Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBIMiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQge1xuICBnZXRUZWxsVXNNb3JlLFxuICBTVUJNSVRfUDJfUkVQT1JUX01VVEFUSU9OLFxufSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybSA9IHByb3BzID0+IHtcbiAgY29uc3QgW3RlbGxVc01vcmUsIHNldFRlbGxVc01vcmVdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSwgY2xpZW50KSA9PiB7XG4gICAgc2V0VGVsbFVzTW9yZShlLnRhcmdldC52YWx1ZSlcbiAgICBjbGllbnQud3JpdGVEYXRhKHtcbiAgICAgIGRhdGE6IHsgdGVsbFVzTW9yZTogSlNPTi5zdHJpbmdpZnkoeyB0ZWxsVXNNb3JlOiBlLnRhcmdldC52YWx1ZSB9KSB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIMiBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgIDxUcmFucz5UZWxsIHVzIG1vcmU8L1RyYW5zPlxuICAgICAgPC9IMj5cbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXtTVUJNSVRfUDJfUkVQT1JUX01VVEFUSU9OfT5cbiAgICAgICAgICAgIHtzdWJtaXRSZXBvcnRQMiA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0VGVsbFVzTW9yZShjbGllbnQpfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIHN1Ym1pdFJlcG9ydFAyKX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWxsVXNNb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMl19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBtb3JlIGRldGFpbCB5b3UgZ2l2ZSwgdGhlIG1vcmUgbGlrZWx5IGl0IHdpbGwgYmUgaW52ZXN0aWdhdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SXMgdGhlcmUgaW5mb3JtYXRpb24geW914oCZZCBsaWtlIHRvIGFkZCB0aGF0IGRpZG7igJl0IGZpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbnl3aGVyZSBlbHNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGVsbFVzTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVsbFVzTW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0VGVsbFVzTW9yZShjbGllbnQpLnRlbGxVc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKGUsIGNsaWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRlbGxVc01vcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWxsVXNNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5TdWJtaXQgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvcDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L011dGF0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbkNvbmZpcm1hdGlvbkZvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ConfirmationForm = function ConfirmationForm(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      tellUsMore = _useState2[0],
      setTellUsMore = _useState2[1];

  var _onChange = function onChange(e, client) {
    setTellUsMore(e.target.value);
    client.writeData({
      data: {
        tellUsMore: JSON.stringify({
          tellUsMore: e.target.value
        })
      }
    });
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_12__["H2"], {
    marginTop: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Tell us more"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__["SUBMIT_P2_REPORT_MUTATION"]
    }, function (submitReportP2) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__["getTellUsMore"])(client),
        onSubmit: function onSubmit() {
          return props.onSubmit(client, submitReportP2);
        },
        render: function render(_ref3) {
          var handleSubmit = _ref3.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
            htmlFor: "tellUsMore"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
            marginTop: [1, null, 2],
            marginBottom: [1, null, 2]
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(P, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
            id: "The more detail you give, the more likely it will be investigated."
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(P, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
            id: "Is there information you\u2019d like to add that didn\u2019t fit anywhere else?"
          })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_6__["Field"], {
            input: {
              value: tellUsMore ? tellUsMore : Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__["getTellUsMore"])(client).tellUsMore,
              onChange: function onChange(e) {
                return _onChange(e, client);
              }
            },
            name: "tellUsMore",
            id: "tellUsMore",
            component: TextAreaAdapter,
            height: "200px"
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
            width: "305px",
            marginTop: [1, null, 1],
            css: _ref
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            type: "submit"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
            id: "Submit Report"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
            width: "300px",
            marginTop: [1, null, 1],
            css: _ref2
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_10__["Link"], {
            type: "button",
            color: "black",
            to: "/p2",
            textAlign: "center"
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
            id: "Cancel report"
          }))));
        }
      });
    });
  }));
};
ConfirmationForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.fdcb2eb3cdeb540cf424.hot-update.js.map