exports.id = "main";
exports.modules = {

/***/ "./src/p2/ConfirmationPage.js":
/*!************************************!*\
  !*** ./src/p2/ConfirmationPage.js ***!
  \************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _ConfirmationSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConfirmationSummary */ "./src/p2/ConfirmationSummary.js");
/* harmony import */ var _forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/ConfirmationForm */ "./src/p2/forms/ConfirmationForm.js");


/** @jsx jsx */












var submit = function submit(client, submitReportP2) {
  var data = {
    source: 'p2',
    timeFrame: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getTimeFrame"])(client),
    whatHappened: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getWhatHappened"])(client),
    impact: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getImpact"])(client),
    scammerDetails: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getScammerDetails"])(client),
    contactInfo: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getP2ContactInfo"])(client),
    tellUsMore: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getTellUsMore"])(client)
  };
  submitReportP2({
    variables: data
  }); // currently fails, need new mutation

  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('nextsteps');
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    marginBottom: "20px"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_6__["Steps"], {
    activeStep: 5,
    steps: [{}, {}, {}, {}, {}, {}]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Review your report"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ConfirmationSummary__WEBPACK_IMPORTED_MODULE_10__["ConfirmationSummary"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_11__["ConfirmationForm"], {
    onSubmit: submit
  }));
};

/***/ })

};
//# sourceMappingURL=main.8a4705e55664d680d2ab.hot-update.js.map