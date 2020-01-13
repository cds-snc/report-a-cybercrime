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
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _ConfirmationSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmationSummary */ "./src/p2/ConfirmationSummary.js");
/* harmony import */ var _forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/ConfirmationForm */ "./src/p2/forms/ConfirmationForm.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */











var randLetter = function randLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return letters[Math.floor(Math.random() * letters.length)];
};

var randDigit = function randDigit() {
  return Math.floor(Math.random() * 10);
};

var randomizeString = function randomizeString(s) {
  return s ? s.replace(/[a-z]/g, function () {
    return randLetter();
  }).replace(/[A-Z]/g, function () {
    return randLetter().toUpperCase();
  }).replace(/[0-9]/g, function () {
    return randDigit();
  }) : s;
};

var submit = function submit(client, submitReportP2) {
  var timeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getTimeFrame"])(client);
  var whatHappened = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getWhatHappened"])(client);
  var scammerDetails = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getScammerDetails"])(client);
  var impact = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getImpact"])(client);
  var p2ContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getP2ContactInfo"])(client);
  var tellUsMore = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getTellUsMore"])(client);
  var fullName = p2ContactInfo.fullName,
      email = p2ContactInfo.email,
      phone = p2ContactInfo.phone,
      postalCode = p2ContactInfo.postalCode;
  fullName = randomizeString(fullName);
  email = randomizeString(email);
  phone = randomizeString(phone);
  postalCode = randomizeString(postalCode);
  var data = {
    source: 'p2',
    timeFrame: timeFrame,
    whatHappened: whatHappened,
    impact: impact,
    scammerDetails: scammerDetails,
    contactInfo: {
      fullName: fullName,
      email: email,
      phone: phone,
      postalCode: postalCode
    },
    tellUsMore: tellUsMore
  };
  submitReportP2({
    variables: data
  }); // currently fails, need new mutation

  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('nextsteps');
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_4__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p2/contactinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 6,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Review your report"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ConfirmationSummary__WEBPACK_IMPORTED_MODULE_8__["ConfirmationSummary"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_9__["ConfirmationForm"], {
    onSubmit: submit
  }));
};

/***/ })

};
//# sourceMappingURL=main.ef9bd25d31bab1dd19c2.hot-update.js.map