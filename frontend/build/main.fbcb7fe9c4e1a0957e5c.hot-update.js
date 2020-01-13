exports.id = "main";
exports.modules = {

/***/ "./src/p1/ConfirmationPage.js":
/*!************************************!*\
  !*** ./src/p1/ConfirmationPage.js ***!
  \************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");
/** @jsx jsx */
















var scamEventSummary = function scamEventSummary(client) {
  var _getScamInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getScamInfo"])(client),
      howWereYouContacted = _getScamInfo.howWereYouContacted,
      otherMethodOfContact = _getScamInfo.otherMethodOfContact,
      whenWereYouContacted = _getScamInfo.whenWereYouContacted,
      scamDetails = _getScamInfo.scamDetails;

  if (otherMethodOfContact) {
    howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact);
  }

  howWereYouContacted = howWereYouContacted ? howWereYouContacted.filter(function (s) {
    return s !== 'other';
  }).join(', ') : '';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "What happened"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scam event'),
      type: "button",
      color: "black",
      to: "/p1/scaminfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), scamDetails ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Description"
  }), ":", ' '), scamDetails) : null, whenWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Date"
  }), ":", ' '), whenWereYouContacted) : null, howWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Contacted by"
  }), ":", ' '), howWereYouContacted) : null);
};

var lostMoneySummary = function lostMoneySummary(client) {
  var _getLostMoney = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getLostMoney"])(client),
      lostAmount = _getLostMoney.lostAmount,
      lostCurrency = _getLostMoney.lostCurrency,
      lostOtherCurrency = _getLostMoney.lostOtherCurrency,
      lostMethodsOfPayment = _getLostMoney.lostMethodsOfPayment,
      lostOtherMethodOfPayment = _getLostMoney.lostOtherMethodOfPayment;

  if (lostOtherMethodOfPayment) {
    lostMethodsOfPayment = lostMethodsOfPayment.concat(lostOtherMethodOfPayment);
  }

  lostMethodsOfPayment = lostMethodsOfPayment.filter(function (s) {
    return s !== 'other';
  }).join(', ');
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginTop: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Money lost"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit money lost'),
      type: "button",
      color: "black",
      to: "/p1/moneylost",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), lostAmount ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Amount"
  }), ":", ' '), lostAmount) : null, lostCurrency || lostOtherCurrency ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Currency"
  }), ":", ' '), lostOtherCurrency ? lostOtherCurrency : lostCurrency) : null, lostMethodsOfPayment ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Payment method"
  }), ":", ' '), lostMethodsOfPayment) : null);
};

var suspectInfoSummary = function suspectInfoSummary(client) {
  var _getSuspectInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getSuspectInfo"])(client),
      suspectName = _getSuspectInfo.suspectName,
      suspectAddress = _getSuspectInfo.suspectAddress,
      suspectLanguage = _getSuspectInfo.suspectLanguage,
      otherSuspectLanguage = _getSuspectInfo.otherSuspectLanguage,
      suspectPhone = _getSuspectInfo.suspectPhone,
      suspectEmail = _getSuspectInfo.suspectEmail,
      suspectWebsite = _getSuspectInfo.suspectWebsite,
      suspectIP = _getSuspectInfo.suspectIP;

  if (otherSuspectLanguage) {
    suspectLanguage = suspectLanguage.concat(otherSuspectLanguage);
  }

  suspectLanguage = suspectLanguage.filter(function (s) {
    return s !== 'Other language';
  }).join(', ');
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginTop: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Suspect clues"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scammer details'),
      type: "button",
      color: "black",
      to: "/p1/suspectinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), suspectName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Name"
  }), ":", ' '), suspectName) : null, suspectEmail ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Email address"
  }), ":", ' '), suspectEmail) : null, suspectPhone ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Phone number"
  }), ":", ' '), suspectPhone) : null, suspectWebsite ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Website"
  }), ":", ' '), suspectWebsite) : null, suspectAddress ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Mailing address"
  }), ":", ' '), suspectAddress) : null, suspectIP ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "IP address"
  }), ":", ' '), suspectIP) : null, suspectLanguage ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Language of correspondence"
  }), ":", ' '), suspectLanguage) : null);
};

var fileUploadSummary = function fileUploadSummary(client) {
  var files = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getFiles"])(client);
  var fileList = files.join(', ');
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginTop: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Files attached"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref5) {
    var i18n = _ref5.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit files attached'),
      type: "button",
      color: "black",
      to: "/p1/uploadfiles",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), files.length ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "File name"
  }), ":", ' '), fileList) : null);
};

var contactInfoSummary = function contactInfoSummary(client) {
  var _getContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getContactInfo"])(client),
      userIsTheVictim = _getContactInfo.userIsTheVictim,
      contactInfoName = _getContactInfo.contactInfoName,
      contactInfoEmail = _getContactInfo.contactInfoEmail,
      contactInfoPhone = _getContactInfo.contactInfoPhone;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginTop: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Contact information"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref6) {
    var i18n = _ref6.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit contact info'),
      type: "button",
      color: "black",
      to: "/p1/contactinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), contactInfoName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Name"
  }), ":", ' '), contactInfoName) : null, contactInfoEmail ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Email"
  }), ":", ' '), contactInfoEmail) : null, contactInfoPhone ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Phone number"
  }), ":", ' '), contactInfoPhone) : null, userIsTheVictim ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Victim"
  }), ":", ' '), userIsTheVictim) : null);
};

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

var submit = function submit(client, submitReport) {
  var scamInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getScamInfo"])(client);
  var lostMoney = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getLostMoney"])(client);
  var suspectInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getSuspectInfo"])(client);
  var files = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getFiles"])(client);
  var contactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getContactInfo"])(client);
  var suspectName = suspectInfo.suspectName,
      suspectAddress = suspectInfo.suspectAddress,
      suspectLanguage = suspectInfo.suspectLanguage,
      otherSuspectLanguage = suspectInfo.otherSuspectLanguage,
      suspectPhone = suspectInfo.suspectPhone,
      suspectEmail = suspectInfo.suspectEmail,
      suspectWebsite = suspectInfo.suspectWebsite,
      suspectIP = suspectInfo.suspectIP;
  suspectName = randomizeString(suspectName);
  suspectAddress = randomizeString(suspectAddress);
  suspectPhone = randomizeString(suspectPhone);
  suspectEmail = randomizeString(suspectEmail);
  suspectWebsite = randomizeString(suspectWebsite);
  suspectIP = randomizeString(suspectIP);
  var userIsTheVictim = contactInfo.userIsTheVictim,
      contactInfoName = contactInfo.contactInfoName,
      contactInfoEmail = contactInfo.contactInfoEmail,
      contactInfoPhone = contactInfo.contactInfoPhone;
  contactInfoName = randomizeString(contactInfoName);
  contactInfoEmail = randomizeString(contactInfoEmail);
  contactInfoPhone = randomizeString(contactInfoPhone);
  var data = {
    source: 'p1',
    scamInfo: scamInfo,
    lostMoney: lostMoney,
    suspectInfo: {
      suspectName: suspectName,
      suspectAddress: suspectAddress,
      suspectLanguage: suspectLanguage,
      otherSuspectLanguage: otherSuspectLanguage,
      suspectPhone: suspectPhone,
      suspectEmail: suspectEmail,
      suspectWebsite: suspectWebsite,
      suspectIP: suspectIP
    },
    files: files,
    contactInfo: {
      userIsTheVictim: userIsTheVictim,
      contactInfoName: contactInfoName,
      contactInfoEmail: contactInfoEmail,
      contactInfoPhone: contactInfoPhone
    }
  };
  submitReport({
    variables: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('thankyou');
};

var _ref =  false ? undefined : {
  name: "1qfzjid-ConfirmationPage",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ConfirmationPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ2VnQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICBTVUJNSVRfUkVQT1JUX01VVEFUSU9OLFxuICBnZXRTY2FtSW5mbyxcbiAgZ2V0TG9zdE1vbmV5LFxuICBnZXRTdXNwZWN0SW5mbyxcbiAgZ2V0RmlsZXMsXG4gIGdldENvbnRhY3RJbmZvLFxufSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGdldFNjYW1JbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJNZXRob2RPZkNvbnRhY3QpIHtcbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gIH1cbiAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWRcbiAgICA/IGhvd1dlcmVZb3VDb250YWN0ZWQuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJykuam9pbignLCAnKVxuICAgIDogJydcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA0XX0gbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19PlxuICAgICAgICA8VHJhbnM+V2hhdCBoYXBwZW5lZDwvVHJhbnM+eycgJ31cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbSBldmVudCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIHRvPVwiL3AxL3NjYW1pbmZvXCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9JMThuPlxuICAgICAgPC9IMj5cbiAgICAgIHtzY2FtRGV0YWlscyA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5EZXNjcmlwdGlvbjwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge3NjYW1EZXRhaWxzfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge3doZW5XZXJlWW91Q29udGFjdGVkID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPkRhdGUgPC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7d2hlbldlcmVZb3VDb250YWN0ZWR9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2hvd1dlcmVZb3VDb250YWN0ZWQgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+Q29udGFjdGVkIGJ5PC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7aG93V2VyZVlvdUNvbnRhY3RlZH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBsb3N0TW9uZXlTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBsb3N0QW1vdW50LFxuICAgIGxvc3RDdXJyZW5jeSxcbiAgICBsb3N0T3RoZXJDdXJyZW5jeSxcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCxcbiAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gIH0gPSBnZXRMb3N0TW9uZXkoY2xpZW50KVxuXG4gIGlmIChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpIHtcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmNvbmNhdChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpXG4gIH1cbiAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudFxuICAgIC5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKVxuICAgIC5qb2luKCcsICcpXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEgyXG4gICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgID5cbiAgICAgICAgPFRyYW5zPk1vbmV5IGxvc3Q8L1RyYW5zPnsnICd9XG4gICAgICAgIDxJMThuPlxuICAgICAgICAgIHsoeyBpMThuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IG1vbmV5IGxvc3QnKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICB0bz1cIi9wMS9tb25leWxvc3RcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA8L0kxOG4+XG4gICAgICA8L0gyPlxuICAgICAge2xvc3RBbW91bnQgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+QW1vdW50PC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7bG9zdEFtb3VudH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7bG9zdEN1cnJlbmN5IHx8IGxvc3RPdGhlckN1cnJlbmN5ID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPkN1cnJlbmN5PC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7bG9zdE90aGVyQ3VycmVuY3kgPyBsb3N0T3RoZXJDdXJyZW5jeSA6IGxvc3RDdXJyZW5jeX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7bG9zdE1ldGhvZHNPZlBheW1lbnQgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+UGF5bWVudCBtZXRob2Q8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtsb3N0TWV0aG9kc09mUGF5bWVudH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGdldFN1c3BlY3RJbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuY29uY2F0KG90aGVyU3VzcGVjdExhbmd1YWdlKVxuICB9XG4gIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZVxuICAgIC5maWx0ZXIocyA9PiBzICE9PSAnT3RoZXIgbGFuZ3VhZ2UnKVxuICAgIC5qb2luKCcsICcpXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SDJcbiAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgPlxuICAgICAgICA8VHJhbnM+U3VzcGVjdCBjbHVlczwvVHJhbnM+eycgJ31cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbW1lciBkZXRhaWxzJyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgdG89XCIvcDEvc3VzcGVjdGluZm9cIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA8L0kxOG4+XG4gICAgICA8L0gyPlxuXG4gICAgICB7c3VzcGVjdE5hbWUgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge3N1c3BlY3ROYW1lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge3N1c3BlY3RFbWFpbCA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7c3VzcGVjdEVtYWlsfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge3N1c3BlY3RQaG9uZSA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtzdXNwZWN0UGhvbmV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICB7c3VzcGVjdFdlYnNpdGUgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+V2Vic2l0ZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge3N1c3BlY3RXZWJzaXRlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge3N1c3BlY3RBZGRyZXNzID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIDxUcmFucz5NYWlsaW5nIGFkZHJlc3M8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtzdXNwZWN0QWRkcmVzc31cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7c3VzcGVjdElQID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtzdXNwZWN0SVB9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgICAge3N1c3BlY3RMYW5ndWFnZSA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZSBvZiBjb3JyZXNwb25kZW5jZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge3N1c3BlY3RMYW5ndWFnZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXMoY2xpZW50KVxuICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SDJcbiAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgPlxuICAgICAgICA8VHJhbnM+RmlsZXMgYXR0YWNoZWQ8L1RyYW5zPnsnICd9XG4gICAgICAgIDxJMThuPlxuICAgICAgICAgIHsoeyBpMThuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IGZpbGVzIGF0dGFjaGVkJyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgdG89XCIvcDEvdXBsb2FkZmlsZXNcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA8L0kxOG4+XG4gICAgICA8L0gyPlxuICAgICAge2ZpbGVzLmxlbmd0aCA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5GaWxlIG5hbWU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtmaWxlTGlzdH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICB1c2VySXNUaGVWaWN0aW0sXG4gICAgY29udGFjdEluZm9OYW1lLFxuICAgIGNvbnRhY3RJbmZvRW1haWwsXG4gICAgY29udGFjdEluZm9QaG9uZSxcbiAgfSA9IGdldENvbnRhY3RJbmZvKGNsaWVudClcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIMlxuICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICA+XG4gICAgICAgIDxUcmFucz5Db250YWN0IGluZm9ybWF0aW9uPC9UcmFucz57JyAnfVxuICAgICAgICA8STE4bj5cbiAgICAgICAgICB7KHsgaTE4biB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2kxOG4uXygnRWRpdCBjb250YWN0IGluZm8nKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICB0bz1cIi9wMS9jb250YWN0aW5mb1wiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgIDwvSTE4bj5cbiAgICAgIDwvSDI+XG5cbiAgICAgIHtjb250YWN0SW5mb05hbWUgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge2NvbnRhY3RJbmZvTmFtZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIHtjb250YWN0SW5mb0VtYWlsID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPkVtYWlsPC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7Y29udGFjdEluZm9FbWFpbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7Y29udGFjdEluZm9QaG9uZSA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtjb250YWN0SW5mb1Bob25lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHt1c2VySXNUaGVWaWN0aW0gPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+VmljdGltPC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7dXNlcklzVGhlVmljdGltfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IHJhbmRMZXR0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxldHRlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKVxuICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXR0ZXJzLmxlbmd0aCldXG59XG5jb25zdCByYW5kRGlnaXQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuY29uc3QgcmFuZG9taXplU3RyaW5nID0gcyA9PlxuICBzXG4gICAgPyBzXG4gICAgICAgIC5yZXBsYWNlKC9bYS16XS9nLCAoKSA9PiByYW5kTGV0dGVyKCkpXG4gICAgICAgIC5yZXBsYWNlKC9bQS1aXS9nLCAoKSA9PiByYW5kTGV0dGVyKCkudG9VcHBlckNhc2UoKSlcbiAgICAgICAgLnJlcGxhY2UoL1swLTldL2csICgpID0+IHJhbmREaWdpdCgpKVxuICAgIDogc1xuXG5jb25zdCBzdWJtaXQgPSAoY2xpZW50LCBzdWJtaXRSZXBvcnQpID0+IHtcbiAgbGV0IHNjYW1JbmZvID0gZ2V0U2NhbUluZm8oY2xpZW50KVxuICBsZXQgbG9zdE1vbmV5ID0gZ2V0TG9zdE1vbmV5KGNsaWVudClcbiAgbGV0IHN1c3BlY3RJbmZvID0gZ2V0U3VzcGVjdEluZm8oY2xpZW50KVxuICBsZXQgZmlsZXMgPSBnZXRGaWxlcyhjbGllbnQpXG4gIGxldCBjb250YWN0SW5mbyA9IGdldENvbnRhY3RJbmZvKGNsaWVudClcblxuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IHN1c3BlY3RJbmZvXG4gIHN1c3BlY3ROYW1lID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3ROYW1lKVxuICBzdXNwZWN0QWRkcmVzcyA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0QWRkcmVzcylcbiAgc3VzcGVjdFBob25lID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RQaG9uZSlcbiAgc3VzcGVjdEVtYWlsID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RFbWFpbClcbiAgc3VzcGVjdFdlYnNpdGUgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdFdlYnNpdGUpXG4gIHN1c3BlY3RJUCA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0SVApXG5cbiAgbGV0IHtcbiAgICB1c2VySXNUaGVWaWN0aW0sXG4gICAgY29udGFjdEluZm9OYW1lLFxuICAgIGNvbnRhY3RJbmZvRW1haWwsXG4gICAgY29udGFjdEluZm9QaG9uZSxcbiAgfSA9IGNvbnRhY3RJbmZvXG4gIGNvbnRhY3RJbmZvTmFtZSA9IHJhbmRvbWl6ZVN0cmluZyhjb250YWN0SW5mb05hbWUpXG4gIGNvbnRhY3RJbmZvRW1haWwgPSByYW5kb21pemVTdHJpbmcoY29udGFjdEluZm9FbWFpbClcbiAgY29udGFjdEluZm9QaG9uZSA9IHJhbmRvbWl6ZVN0cmluZyhjb250YWN0SW5mb1Bob25lKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgc291cmNlOiAncDEnLFxuICAgIHNjYW1JbmZvLFxuICAgIGxvc3RNb25leSxcbiAgICBzdXNwZWN0SW5mbzoge1xuICAgICAgc3VzcGVjdE5hbWUsXG4gICAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICAgIG90aGVyU3VzcGVjdExhbmd1YWdlLFxuICAgICAgc3VzcGVjdFBob25lLFxuICAgICAgc3VzcGVjdEVtYWlsLFxuICAgICAgc3VzcGVjdFdlYnNpdGUsXG4gICAgICBzdXNwZWN0SVAsXG4gICAgfSxcbiAgICBmaWxlcyxcbiAgICBjb250YWN0SW5mbzoge1xuICAgICAgdXNlcklzVGhlVmljdGltLFxuICAgICAgY29udGFjdEluZm9OYW1lLFxuICAgICAgY29udGFjdEluZm9FbWFpbCxcbiAgICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gICAgfSxcbiAgfVxuICBzdWJtaXRSZXBvcnQoeyB2YXJpYWJsZXM6IGRhdGEgfSlcbiAgbmF2aWdhdGUoJ3RoYW5reW91Jylcbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxCYWNrQnV0dG9uIHJvdXRlPVwiL3AxL2NvbnRhY3RpbmZvcXVlc3Rpb25cIj5cbiAgICAgICAgPFRyYW5zPmNvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgPC9CYWNrQnV0dG9uPlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezZ9IHRvdGFsU3RlcHM9ezZ9IC8+XG4gICAgICA8SDE+XG4gICAgICAgIDxUcmFucz5Db25maXJtIHJlcG9ydCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICA8L0gxPlxuICAgICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHtjbGllbnQgPT4ge1xuICAgICAgICAgIGNsaWVudC53cml0ZURhdGEoe1xuICAgICAgICAgICAgZGF0YTogeyBkb25lRm9ybXM6IHRydWUgfSxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3NjYW1FdmVudFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge3N1c3BlY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgICB7ZmlsZVVwbG9hZFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgIG1iPVwiNHJlbVwiXG4gICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e1NVQk1JVF9SRVBPUlRfTVVUQVRJT059PlxuICAgICAgICAgICAgICB7c3VibWl0UmVwb3J0ID0+IChcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0KGNsaWVudCwgc3VibWl0UmVwb3J0KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTXV0YXRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiXG4gICAgICAgICAgbXQ9XCIxLjlyZW1cIlxuICAgICAgICAgIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPVwiL3AxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXX0= */"
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_12__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_14__["BackButton"], {
    route: "/p1/contactinfoquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_11__["Steps"], {
    activeStep: 6,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Confirm report information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_10__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    client.writeData({
      data: {
        doneForms: true
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, scamEventSummary(client), lostMoneySummary(client), suspectInfoSummary(client), fileUploadSummary(client), contactInfoSummary(client));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["SUBMIT_REPORT_MUTATION"]
    }, function (submitReport) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        name: "buttonlink-container",
        mt: "1rem"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        onClick: function onClick() {
          return submit(client, submitReport);
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
        id: "Submit report \xA0 \u276F"
      })));
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    name: "buttonlink-container",
    mt: "1.9rem",
    ml: ['3rem', '0', '3rem']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    type: "button",
    color: "black",
    to: "/p1",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Cancel report"
  })))));
};

/***/ })

};
//# sourceMappingURL=main.fbcb7fe9c4e1a0957e5c.hot-update.js.map