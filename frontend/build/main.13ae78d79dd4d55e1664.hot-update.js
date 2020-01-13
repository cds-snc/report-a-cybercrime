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
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCcUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYWJlbCdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0SW1wYWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGhvd1dlcmVZb3VBZmZlY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ0RldmljZSBvciBhY2NvdW50IGhhY2tlZCcpLFxuICBpMThuTWFyaygnSW5mb3JtYXRpb24gc3RvbGVuJyksXG4gIGkxOG5NYXJrKCdNb25leSBsb3N0JyksXG4gIGkxOG5NYXJrKCdSZXB1dGF0aW9uIGRhbWFnZWQnKSxcbiAgaTE4bk1hcmsoJ1NhZmV0eSB0aHJlYXRlbmVkJyksXG4gIGkxOG5NYXJrKCdXZWxsYmVpbmcgYWZmZWN0ZWQnKSxcbiAgaTE4bk1hcmsoJ090aGVyIGltcGFjdCcpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjb25zdCBJbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0SW1wYWN0KGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUFmZmVjdGVkXCI+XG4gICAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hhdCB3YXMgdGhlIGltcGFjdCBvZiB0aGUgc2NhbT88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IGhvdyBpdCBpbXBhY3RlZCB5b3UuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17KDEsIG51bGwsIDIpfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiB0aGUgYW1vdW50IG9mIG1vbmV5LCB3aGF0IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgd2FzIHRha2VuLCBvdGhlciBpbXBhY3RcbiAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYWJlbCdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0SW1wYWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGhvd1dlcmVZb3VBZmZlY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ0RldmljZSBvciBhY2NvdW50IGhhY2tlZCcpLFxuICBpMThuTWFyaygnSW5mb3JtYXRpb24gc3RvbGVuJyksXG4gIGkxOG5NYXJrKCdNb25leSBsb3N0JyksXG4gIGkxOG5NYXJrKCdSZXB1dGF0aW9uIGRhbWFnZWQnKSxcbiAgaTE4bk1hcmsoJ1NhZmV0eSB0aHJlYXRlbmVkJyksXG4gIGkxOG5NYXJrKCdXZWxsYmVpbmcgYWZmZWN0ZWQnKSxcbiAgaTE4bk1hcmsoJ090aGVyIGltcGFjdCcpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjb25zdCBJbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0SW1wYWN0KGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUFmZmVjdGVkXCI+XG4gICAgICAgICAgICAgICAgPFA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hhdCB3YXMgdGhlIGltcGFjdCBvZiB0aGUgc2NhbT88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9QPlxuICAgICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGVsbCB1cyBtb3JlIGFib3V0IGhvdyBpdCBpbXBhY3RlZCB5b3UuPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17KDEsIG51bGwsIDIpfT5cbiAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiB0aGUgYW1vdW50IG9mIG1vbmV5LCB3aGF0IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgd2FzIHRha2VuLCBvdGhlciBpbXBhY3RcbiAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3NXB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
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
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_8__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
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
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Tell us more about how it impacted you.</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          fontSize: (1, null, 2)
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "For example: the amount of money, what information was taken, other impact"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "damage",
          id: "damage",
          component: TextAreaAdapter,
          height: "75px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_7__["ButtonsContainer"], {
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
//# sourceMappingURL=main.13ae78d79dd4d55e1664.hot-update.js.map