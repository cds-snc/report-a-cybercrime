exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/ImpactStatementInfoForm.js":
/*!*************************************************!*\
  !*** ./src/p2/forms/ImpactStatementInfoForm.js ***!
  \*************************************************/
/*! exports provided: ImpactStatementInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactStatementInfoForm", function() { return ImpactStatementInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/label */ "./src/components/label/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_10__["TextArea"]);
var howWereYouAffected = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Device or account hacked'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Information stolen'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Money lost'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Reputation damaged'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Safety threatened'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Wellbeing affected'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other impact')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "eemyvxu0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCcUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGFiZWwnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldEltcGFjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBob3dXZXJlWW91QWZmZWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdEZXZpY2Ugb3IgYWNjb3VudCBoYWNrZWQnKSxcbiAgaTE4bk1hcmsoJ0luZm9ybWF0aW9uIHN0b2xlbicpLFxuICBpMThuTWFyaygnTW9uZXkgbG9zdCcpLFxuICBpMThuTWFyaygnUmVwdXRhdGlvbiBkYW1hZ2VkJyksXG4gIGkxOG5NYXJrKCdTYWZldHkgdGhyZWF0ZW5lZCcpLFxuICBpMThuTWFyaygnV2VsbGJlaW5nIGFmZmVjdGVkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBpbXBhY3QnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY29uc3QgSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldEltcGFjdChjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImhvd1dlcmVZb3VBZmZlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldoYXQgd2FzIHRoZSBpbXBhY3Qgb2YgdGhlIHNjYW0/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaG93V2VyZVlvdUFmZmVjdGVkLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91QWZmZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VBZmZlY3RlZCAmJlxuICAgICAgICAgICAgdmFsdWVzLmhvd1dlcmVZb3VBZmZlY3RlZC5pbmRleE9mKCdPdGhlciBpbXBhY3QnKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfT5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm90aGVySW1wYWN0XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICBUZWxsIHVzIG1vcmUgYWJvdXQgd2hhdCB3YXMgYWZmZWN0ZWQsIGxvc3QsIG9yIGRhbWFnZWQuXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXIgYnV0dG9uTGluaz17ZmFsc2V9IGNhbmNlbD17dHJ1ZX0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkltcGFjdFN0YXRlbWVudEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGFiZWwnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldEltcGFjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBob3dXZXJlWW91QWZmZWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdEZXZpY2Ugb3IgYWNjb3VudCBoYWNrZWQnKSxcbiAgaTE4bk1hcmsoJ0luZm9ybWF0aW9uIHN0b2xlbicpLFxuICBpMThuTWFyaygnTW9uZXkgbG9zdCcpLFxuICBpMThuTWFyaygnUmVwdXRhdGlvbiBkYW1hZ2VkJyksXG4gIGkxOG5NYXJrKCdTYWZldHkgdGhyZWF0ZW5lZCcpLFxuICBpMThuTWFyaygnV2VsbGJlaW5nIGFmZmVjdGVkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBpbXBhY3QnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY29uc3QgSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldEltcGFjdChjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImhvd1dlcmVZb3VBZmZlY3RlZFwiPlxuICAgICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldoYXQgd2FzIHRoZSBpbXBhY3Qgb2YgdGhlIHNjYW0/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvUD5cbiAgICAgICAgICAgICAgPC9MYWJlbD5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaG93V2VyZVlvdUFmZmVjdGVkLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91QWZmZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VBZmZlY3RlZCAmJlxuICAgICAgICAgICAgdmFsdWVzLmhvd1dlcmVZb3VBZmZlY3RlZC5pbmRleE9mKCdPdGhlciBpbXBhY3QnKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfT5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm90aGVySW1wYWN0XCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICBUZWxsIHVzIG1vcmUgYWJvdXQgd2hhdCB3YXMgYWZmZWN0ZWQsIGxvc3QsIG9yIGRhbWFnZWQuXG4gICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXIgYnV0dG9uTGluaz17ZmFsc2V9IGNhbmNlbD17dHJ1ZX0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkltcGFjdFN0YXRlbWVudEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var validate = function validate() {
  return {};
};

var ImpactStatementInfoForm = function ImpactStatementInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getImpact"])(client),
      onSubmit: function onSubmit(data) {
        return props.onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit,
            values = _ref.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_label__WEBPACK_IMPORTED_MODULE_11__["Label"], {
          htmlFor: "howWereYouAffected"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_9__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>What was the impact of the scam?</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref2) {
          var i18n = _ref2.i18n;
          return howWereYouAffected.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "howWereYouAffected",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        }))), values.howWereYouAffected && values.howWereYouAffected.indexOf('Other impact') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          marginTop: [2, null, 3]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "otherImpact",
          id: "otherImpact",
          component: TextAreaAdapter,
          height: "50px"
        })) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_9__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Tell us more about what was affected, lost, or damaged.</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "damage",
          id: "damage",
          component: TextAreaAdapter,
          height: "75px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_8__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true
        }));
      }
    });
  });
};
ImpactStatementInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.3843de751fb85d5072da.hot-update.js.map