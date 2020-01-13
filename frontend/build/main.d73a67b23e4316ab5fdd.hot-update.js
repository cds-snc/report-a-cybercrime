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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCcUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xhYmVsJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRJbXBhY3QgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgaG93V2VyZVlvdUFmZmVjdGVkID0gW1xuICBpMThuTWFyaygnRGV2aWNlIG9yIGFjY291bnQgaGFja2VkJyksXG4gIGkxOG5NYXJrKCdJbmZvcm1hdGlvbiBzdG9sZW4nKSxcbiAgaTE4bk1hcmsoJ01vbmV5IGxvc3QnKSxcbiAgaTE4bk1hcmsoJ1JlcHV0YXRpb24gZGFtYWdlZCcpLFxuICBpMThuTWFyaygnU2FmZXR5IHRocmVhdGVuZWQnKSxcbiAgaTE4bk1hcmsoJ1dlbGxiZWluZyBhZmZlY3RlZCcpLFxuICBpMThuTWFyaygnT3RoZXIgaW1wYWN0JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNvbnN0IEltcGFjdFN0YXRlbWVudEluZm9Gb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRJbXBhY3QoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJob3dXZXJlWW91QWZmZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGhvd1dlcmVZb3VBZmZlY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUFmZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQuaW5kZXhPZignT3RoZXIgaW1wYWN0JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJJbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IHdoYXQgd2FzIGxvc3Qgb3IgYWZmZWN0ZWQuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17KDEsIG51bGwsIDIpfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiBhbW91bnQgb2YgbW9uZXkgaW52b2x2ZWQsIHR5cGUgb2YgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBzdG9sZW5cbiAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xhYmVsJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRJbXBhY3QgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgaG93V2VyZVlvdUFmZmVjdGVkID0gW1xuICBpMThuTWFyaygnRGV2aWNlIG9yIGFjY291bnQgaGFja2VkJyksXG4gIGkxOG5NYXJrKCdJbmZvcm1hdGlvbiBzdG9sZW4nKSxcbiAgaTE4bk1hcmsoJ01vbmV5IGxvc3QnKSxcbiAgaTE4bk1hcmsoJ1JlcHV0YXRpb24gZGFtYWdlZCcpLFxuICBpMThuTWFyaygnU2FmZXR5IHRocmVhdGVuZWQnKSxcbiAgaTE4bk1hcmsoJ1dlbGxiZWluZyBhZmZlY3RlZCcpLFxuICBpMThuTWFyaygnT3RoZXIgaW1wYWN0JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNvbnN0IEltcGFjdFN0YXRlbWVudEluZm9Gb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRJbXBhY3QoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJob3dXZXJlWW91QWZmZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGhvd1dlcmVZb3VBZmZlY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUFmZmVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91QWZmZWN0ZWQuaW5kZXhPZignT3RoZXIgaW1wYWN0JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX0+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJJbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlckltcGFjdFwiXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IHdoYXQgd2FzIGxvc3Qgb3IgYWZmZWN0ZWQuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17KDEsIG51bGwsIDIpfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiBhbW91bnQgb2YgbW9uZXkgaW52b2x2ZWQsIHR5cGUgb2YgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBzdG9sZW5cbiAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
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
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          fontSize: (1, null, 2)
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "For example: amount of money involved, type of information stolen"
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

/***/ }),

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
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/upload.svg */ "./src/images/upload.svg");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_upload_svg__WEBPACK_IMPORTED_MODULE_20__);



/** @jsx jsx */



















var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_10__["TextArea"]);

var _ref =  false ? undefined : {
  name: "2p9dvp-ScammerDetailsFormWrapped",
  styles: "display:flex;justify-content:center;img{width:1rem;margin-right:0.6rem;}label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSTBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4gfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBIMyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Vub3JkZXJlZC1saXN0J1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QtaXRlbSdcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtbWVyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgdXBsb2FkIGZyb20gJy4uLy4uL2ltYWdlcy91cGxvYWQuc3ZnJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5leHBvcnQgY29uc3QgU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBjbGllbnQgfSA9IHByb3BzXG4gIGNvbnN0IGNhY2hlZCA9IGdldFNjYW1tZXJEZXRhaWxzKGNsaWVudClcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShjYWNoZWQuZmlsZXMubWFwKGZpbGUgPT4gKHsgbmFtZTogZmlsZSB9KSkpXG4gIGNvbnN0IFtmaWxlRGVzY3JpcHRpb25zLCBzZXRGaWxlRGVzY3JpcHRpb25zXSA9IHVzZVN0YXRlKFxuICAgIGNhY2hlZC5maWxlRGVzY3JpcHRpb25zLFxuICApXG4gIGNvbnN0IFtzY2FtbWVyRGV0YWlscywgc2V0U2NhbW1lckRldGFpbHNdID0gdXNlU3RhdGUoY2FjaGVkLnNjYW1tZXJEZXRhaWxzKVxuXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnc2NhbW1lckRldGFpbHMnKSB7XG4gICAgICBzZXRTY2FtbWVyRGV0YWlscyhlLnRhcmdldC52YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkLmluZGV4T2YoJ2ZpbGUtZGVzY3JpcHRpb24nKSA+IC0xKSB7XG4gICAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5pZC5zdWJzdHJpbmcoMTcpKVxuICAgICAgbGV0IG5ld0ZpbGVEZXNjcmlwdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpbGVEZXNjcmlwdGlvbnMpKVxuICAgICAgbmV3RmlsZURlc2NyaXB0aW9uc1tpbmRleF0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgc2V0RmlsZURlc2NyaXB0aW9ucyhuZXdGaWxlRGVzY3JpcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuZmlsZXMgJiYgZS50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIHNldEZpbGVzKGZpbGVzLmNvbmNhdChlLnRhcmdldC5maWxlc1swXSkpXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKGZpbGVEZXNjcmlwdGlvbnMuY29uY2F0KCcnKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIGxldCBuZXdGaWxlcyA9IGZpbGVzLmZpbHRlcigoXywgZmlsZUluZGV4KSA9PiBpbmRleCAhPSBmaWxlSW5kZXgpXG4gICAgbGV0IG5ld0ZpbGVEZXNjcmlwdGlvbnMgPSBmaWxlRGVzY3JpcHRpb25zLmZpbHRlcihcbiAgICAgIChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleCxcbiAgICApXG4gICAgc2V0RmlsZXMobmV3RmlsZXMpXG4gICAgc2V0RmlsZURlc2NyaXB0aW9ucyhuZXdGaWxlRGVzY3JpcHRpb25zKVxuICB9XG5cbiAgY29uc3QgbG9jYWxTdWJtaXQgPSBjbGllbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzY2FtbWVyRGV0YWlscyxcbiAgICAgIGZpbGVzOiBmaWxlcy5tYXAoZiA9PiBmLm5hbWUpLFxuICAgICAgZmlsZURlc2NyaXB0aW9ucyxcbiAgICB9XG4gICAgcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKVxuICB9XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgb25TdWJtaXQ9eygpID0+IGxvY2FsU3VibWl0KGNsaWVudCl9XG4gICAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgd2hhdCB5b3Uga25vdyBhYm91dCB3aGVyZSB0aGUgc2NhbSBjYW1lIGZyb206XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+V2hvIHRoZSBzY2FtbWVyIGNsYWltZWQgdG8gYmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+eycgJ31cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+V2hlcmUgdGhleSByZXF1ZXN0ZWQgdGhpbmdzIGJlIHNlbnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBXaGljaCBlbWFpbCBhZGRyZXNzLCBwaG9uZSBudW1iZXIsIG9yIHdlYnNpdGUgdGhleSB1c2VkXG4gICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvTGk+XG4gICAgICAgICAgICAgICAgPExpPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICBBbnkgc2NyZWVuc2hvdHMsIG1lc3NhZ2VzLCBiYW5rIHN0YXRlbWVudHMsIGFuZCByZWNlaXB0c1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRlbGwgdXMgd2hhdCB5b3Uga25vdyBhYm91dCB0aGUgc3VzcGVjdDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsoMSwgbnVsbCwgMil9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGU6IHN1c3BlY3RAZW1haWwuY29tLCBAdXNlcm5hbWUsIDEtODg4LTExMS0xMTExXG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IHNjYW1tZXJEZXRhaWxzLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2NhbW1lckRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgNSwgNV19XG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtbJ2F1dG8nLCAnMTAwJScsICdhdXRvJ119XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbT1cIjAuNnJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInVwbG9hZCBpY29uXCIgc3JjPXt1cGxvYWR9IC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SDM+XG4gICAgICAgICAgICAgICAgICAgIHtpMThuLnBsdXJhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICBvbmU6ICcjIGZpbGUgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIG90aGVyOiAnIyBmaWxlcyBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9IMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8SDMgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19IGZvbnRTaXplPXtbMiwgbnVsbCwgNF19PlxuICAgICAgICAgICAgICAgICAgICAgIHtmLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvSDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+RGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3M8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBmaWxlRGVzY3JpcHRpb25zW2luZGV4XSwgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGaWxlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5SZW1vdmUgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5leHRQYWdlPVwiSW1wYWN0IG9mIHNjYW1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgY2xpZW50PXtjbGllbnR9IHsuLi5wcm9wc30gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
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
      render: function render(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "<0>Include what you know about where the scam came from:</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Who the scammer claimed to be"
        })), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Where they requested things be sent"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Which email address, phone number, or website they used"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Any screenshots, messages, bank statements, and receipts"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "scammerDetails"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "<0>Tell us what you know about the suspect</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("strong", null)]
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          fontSize: (1, null, 2)
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "For example: suspect@email.com, @username, 1-888-111-1111"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          input: {
            value: scammerDetails,
            onChange: onChange
          },
          name: "scammerDetails",
          id: "scammerDetails",
          component: TextAreaAdapter,
          height: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          marginTop: [2, null, 5],
          marginBottom: [2, 5, 5],
          display: "flex",
          flexDirection: "row",
          justifyContent: ['flex-start', 'center', 'flex-start'],
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUpload"], {
          onChange: onChange,
          width: ['auto', '100%', 'auto'],
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "0.6rem",
          paddingTop: "0.6rem",
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("img", {
          alt: "upload icon",
          src: _images_upload_svg__WEBPACK_IMPORTED_MODULE_20___default.a
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "Attach file"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["I18n"], null, function (_ref3) {
          var i18n = _ref3.i18n;
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
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            "float": "right",
            backgroundColor: "crimson",
            type: "button",
            onClick: function onClick() {
              return removeFile(index);
            }
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
            id: "Remove file"
          })));
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_9__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Impact of scam"
        }));
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
//# sourceMappingURL=main.d73a67b23e4316ab5fdd.hot-update.js.map