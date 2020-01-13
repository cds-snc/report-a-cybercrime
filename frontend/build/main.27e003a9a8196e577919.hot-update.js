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
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/label */ "./src/components/label/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */














var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_11__["TextArea"]);
var howWereYouAffected = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Device or account hacked'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Information stolen'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Money lost'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Reputation damaged'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Safety threatened'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Wellbeing affected'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other impact')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "eemyvxu0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCcUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xhYmVsJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRJbXBhY3QgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgaG93V2VyZVlvdUFmZmVjdGVkID0gW1xuICBpMThuTWFyaygnRGV2aWNlIG9yIGFjY291bnQgaGFja2VkJyksXG4gIGkxOG5NYXJrKCdJbmZvcm1hdGlvbiBzdG9sZW4nKSxcbiAgaTE4bk1hcmsoJ01vbmV5IGxvc3QnKSxcbiAgaTE4bk1hcmsoJ1JlcHV0YXRpb24gZGFtYWdlZCcpLFxuICBpMThuTWFyaygnU2FmZXR5IHRocmVhdGVuZWQnKSxcbiAgaTE4bk1hcmsoJ1dlbGxiZWluZyBhZmZlY3RlZCcpLFxuICBpMThuTWFyaygnT3RoZXIgaW1wYWN0JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNvbnN0IEltcGFjdFN0YXRlbWVudEluZm9Gb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRJbXBhY3QoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJob3dXZXJlWW91QWZmZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGhvd1dlcmVZb3VBZmZlY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUFmZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQuaW5kZXhPZignT3RoZXIgaW1wYWN0JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJJbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IHdoYXQgd2FzIGxvc3Qgb3IgYWZmZWN0ZWQuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJDb250YWN0IGluZm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkltcGFjdFN0YXRlbWVudEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xhYmVsJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRJbXBhY3QgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgaG93V2VyZVlvdUFmZmVjdGVkID0gW1xuICBpMThuTWFyaygnRGV2aWNlIG9yIGFjY291bnQgaGFja2VkJyksXG4gIGkxOG5NYXJrKCdJbmZvcm1hdGlvbiBzdG9sZW4nKSxcbiAgaTE4bk1hcmsoJ01vbmV5IGxvc3QnKSxcbiAgaTE4bk1hcmsoJ1JlcHV0YXRpb24gZGFtYWdlZCcpLFxuICBpMThuTWFyaygnU2FmZXR5IHRocmVhdGVuZWQnKSxcbiAgaTE4bk1hcmsoJ1dlbGxiZWluZyBhZmZlY3RlZCcpLFxuICBpMThuTWFyaygnT3RoZXIgaW1wYWN0JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNvbnN0IEltcGFjdFN0YXRlbWVudEluZm9Gb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRJbXBhY3QoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJob3dXZXJlWW91QWZmZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGhvd1dlcmVZb3VBZmZlY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUFmZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQuaW5kZXhPZignT3RoZXIgaW1wYWN0JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJJbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IHdoYXQgd2FzIGxvc3Qgb3IgYWZmZWN0ZWQuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJDb250YWN0IGluZm9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cbkltcGFjdFN0YXRlbWVudEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var validate = function validate() {
  return {};
};

var ImpactStatementInfoForm = function ImpactStatementInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__["getImpact"])(client),
      onSubmit: function onSubmit(data) {
        return props.onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit,
            values = _ref.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_label__WEBPACK_IMPORTED_MODULE_12__["Label"], {
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
        })) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Tell us more about what was lost or affected.</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "damage",
          id: "damage",
          component: TextAreaAdapter,
          height: "75px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_8__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Contact info"
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
//# sourceMappingURL=main.27e003a9a8196e577919.hot-update.js.map