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
  }) : '';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "What happened"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scam event'),
      type: "button",
      color: "black",
      to: "/p1/scaminfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    })), ")"), scamDetails ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Description"
    }), ":", ' '), scamDetails) : null, whenWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Date"
    }), ":", ' '), whenWereYouContacted) : null, howWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Contacted by"
    }), ":", ' '), howWereYouContacted.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
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
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Money lost"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit money lost'),
      type: "button",
      color: "black",
      to: "/p1/moneylost",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    })), ")"), lostAmount ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Amount"
    }), ":", ' '), lostAmount) : null, lostCurrency || lostOtherCurrency ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Currency"
    }), ":", ' '), lostOtherCurrency ? lostOtherCurrency : i18n._(lostCurrency)) : null, lostMethodsOfPayment ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Payment method"
    }), ":", ' '), lostMethodsOfPayment.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
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
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "About the suspect"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scammer details'),
      type: "button",
      color: "black",
      to: "/p1/suspectinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    })), ")"), suspectName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
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
    }), ":", ' '), suspectLanguage.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref6) {
    var i18n = _ref6.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Contact information"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit contact info'),
      type: "button",
      color: "black",
      to: "/p1/contactinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    })), ")"), contactInfoName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Name"
    }), ":", ' '), contactInfoName) : null, contactInfoEmail ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Email"
    }), ":", ' '), contactInfoEmail) : null, contactInfoPhone ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Phone number"
    }), ":", ' '), contactInfoPhone) : null, userIsTheVictim ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Did the scam happened to you"
    }), ":", ' '), i18n._(userIsTheVictim)) : null);
  });
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2RnQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICBTVUJNSVRfUkVQT1JUX01VVEFUSU9OLFxuICBnZXRTY2FtSW5mbyxcbiAgZ2V0TG9zdE1vbmV5LFxuICBnZXRTdXNwZWN0SW5mbyxcbiAgZ2V0RmlsZXMsXG4gIGdldENvbnRhY3RJbmZvLFxufSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGdldFNjYW1JbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJNZXRob2RPZkNvbnRhY3QpIHtcbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gIH1cbiAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWRcbiAgICA/IGhvd1dlcmVZb3VDb250YWN0ZWQuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICA6ICcnXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA0XX0gbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19PlxuICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ8L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbSBldmVudCcpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL3NjYW1pbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDwvSDI+XG4gICAgICAgICAge3NjYW1EZXRhaWxzID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkRlc2NyaXB0aW9uPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzY2FtRGV0YWlsc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHt3aGVuV2VyZVlvdUNvbnRhY3RlZCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5EYXRlIDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7d2hlbldlcmVZb3VDb250YWN0ZWR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2hvd1dlcmVZb3VDb250YWN0ZWQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGFjdGVkIGJ5PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtob3dXZXJlWW91Q29udGFjdGVkLm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IGxvc3RNb25leVN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGxvc3RBbW91bnQsXG4gICAgbG9zdEN1cnJlbmN5LFxuICAgIGxvc3RPdGhlckN1cnJlbmN5LFxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50LFxuICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgfSA9IGdldExvc3RNb25leShjbGllbnQpXG5cbiAgaWYgKGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCkge1xuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnQuY29uY2F0KGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudClcbiAgfVxuICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IG1vbmV5IGxvc3QnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9tb25leWxvc3RcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgPC9IMj5cbiAgICAgICAgICB7bG9zdEFtb3VudCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5BbW91bnQ8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2xvc3RBbW91bnR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2xvc3RDdXJyZW5jeSB8fCBsb3N0T3RoZXJDdXJyZW5jeSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DdXJyZW5jeTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7bG9zdE90aGVyQ3VycmVuY3kgPyBsb3N0T3RoZXJDdXJyZW5jeSA6IGkxOG4uXyhsb3N0Q3VycmVuY3kpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtsb3N0TWV0aG9kc09mUGF5bWVudCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5QYXltZW50IG1ldGhvZDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7bG9zdE1ldGhvZHNPZlBheW1lbnQubWFwKGkgPT4gaTE4bi5fKGkpKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0kxOG4+XG4gIClcbn1cblxuY29uc3Qgc3VzcGVjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBnZXRTdXNwZWN0SW5mbyhjbGllbnQpXG5cbiAgaWYgKG90aGVyU3VzcGVjdExhbmd1YWdlKSB7XG4gICAgc3VzcGVjdExhbmd1YWdlID0gc3VzcGVjdExhbmd1YWdlLmNvbmNhdChvdGhlclN1c3BlY3RMYW5ndWFnZSlcbiAgfVxuICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuZmlsdGVyKHMgPT4gcyAhPT0gJ090aGVyIGxhbmd1YWdlJylcblxuICByZXR1cm4gKFxuICAgIDxJMThuPlxuICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEgyXG4gICAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHJhbnM+QWJvdXQgdGhlIHN1c3BlY3Q8L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbW1lciBkZXRhaWxzJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgdG89XCIvcDEvc3VzcGVjdGluZm9cIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgPC9IMj5cblxuICAgICAgICAgIHtzdXNwZWN0TmFtZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0TmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0RW1haWwgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdEVtYWlsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge3N1c3BlY3RQaG9uZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RQaG9uZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0V2Vic2l0ZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5XZWJzaXRlPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0V2Vic2l0ZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0QWRkcmVzcyA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPFRyYW5zPk1haWxpbmcgYWRkcmVzczwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdEFkZHJlc3N9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3N1c3BlY3RJUCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5JUCBhZGRyZXNzPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0SVB9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3N1c3BlY3RMYW5ndWFnZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZSBvZiBjb3JyZXNwb25kZW5jZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdExhbmd1YWdlLm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IGZpbGVVcGxvYWRTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlcyhjbGllbnQpXG4gIGNvbnN0IGZpbGVMaXN0ID0gZmlsZXMuam9pbignLCAnKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIMlxuICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICA+XG4gICAgICAgIDxUcmFucz5GaWxlcyBhdHRhY2hlZDwvVHJhbnM+eycgJ31cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgZmlsZXMgYXR0YWNoZWQnKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICB0bz1cIi9wMS91cGxvYWRmaWxlc1wiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgIDwvSTE4bj5cbiAgICAgIDwvSDI+XG4gICAgICB7ZmlsZXMubGVuZ3RoID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPkZpbGUgbmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge2ZpbGVMaXN0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5jb25zdCBjb250YWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gZ2V0Q29udGFjdEluZm8oY2xpZW50KVxuXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5Db250YWN0IGluZm9ybWF0aW9uPC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IGNvbnRhY3QgaW5mbycpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL2NvbnRhY3RpbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDwvSDI+XG5cbiAgICAgICAgICB7Y29udGFjdEluZm9OYW1lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5hbWU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvTmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtjb250YWN0SW5mb0VtYWlsID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkVtYWlsPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb0VtYWlsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtjb250YWN0SW5mb1Bob25lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7Y29udGFjdEluZm9QaG9uZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7dXNlcklzVGhlVmljdGltID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkRpZCB0aGUgc2NhbSBoYXBwZW5lZCB0byB5b3U8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2kxOG4uXyh1c2VySXNUaGVWaWN0aW0pfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0kxOG4+XG4gIClcbn1cblxuY29uc3QgcmFuZExldHRlciA9ICgpID0+IHtcbiAgY29uc3QgbGV0dGVycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicuc3BsaXQoJycpXG4gIHJldHVybiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV1cbn1cbmNvbnN0IHJhbmREaWdpdCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG5jb25zdCByYW5kb21pemVTdHJpbmcgPSBzID0+XG4gIHNcbiAgICA/IHNcbiAgICAgICAgLnJlcGxhY2UoL1thLXpdL2csICgpID0+IHJhbmRMZXR0ZXIoKSlcbiAgICAgICAgLnJlcGxhY2UoL1tBLVpdL2csICgpID0+IHJhbmRMZXR0ZXIoKS50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAucmVwbGFjZSgvWzAtOV0vZywgKCkgPT4gcmFuZERpZ2l0KCkpXG4gICAgOiBzXG5cbmNvbnN0IHN1Ym1pdCA9IChjbGllbnQsIHN1Ym1pdFJlcG9ydCkgPT4ge1xuICBsZXQgc2NhbUluZm8gPSBnZXRTY2FtSW5mbyhjbGllbnQpXG4gIGxldCBsb3N0TW9uZXkgPSBnZXRMb3N0TW9uZXkoY2xpZW50KVxuICBsZXQgc3VzcGVjdEluZm8gPSBnZXRTdXNwZWN0SW5mbyhjbGllbnQpXG4gIGxldCBmaWxlcyA9IGdldEZpbGVzKGNsaWVudClcbiAgbGV0IGNvbnRhY3RJbmZvID0gZ2V0Q29udGFjdEluZm8oY2xpZW50KVxuXG4gIGxldCB7XG4gICAgc3VzcGVjdE5hbWUsXG4gICAgc3VzcGVjdEFkZHJlc3MsXG4gICAgc3VzcGVjdExhbmd1YWdlLFxuICAgIG90aGVyU3VzcGVjdExhbmd1YWdlLFxuICAgIHN1c3BlY3RQaG9uZSxcbiAgICBzdXNwZWN0RW1haWwsXG4gICAgc3VzcGVjdFdlYnNpdGUsXG4gICAgc3VzcGVjdElQLFxuICB9ID0gc3VzcGVjdEluZm9cbiAgc3VzcGVjdE5hbWUgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdE5hbWUpXG4gIHN1c3BlY3RBZGRyZXNzID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RBZGRyZXNzKVxuICBzdXNwZWN0UGhvbmUgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdFBob25lKVxuICBzdXNwZWN0RW1haWwgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdEVtYWlsKVxuICBzdXNwZWN0V2Vic2l0ZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0V2Vic2l0ZSlcbiAgc3VzcGVjdElQID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RJUClcblxuICBsZXQge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY29udGFjdEluZm9cbiAgY29udGFjdEluZm9OYW1lID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvTmFtZSlcbiAgY29udGFjdEluZm9FbWFpbCA9IHJhbmRvbWl6ZVN0cmluZyhjb250YWN0SW5mb0VtYWlsKVxuICBjb250YWN0SW5mb1Bob25lID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvUGhvbmUpXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBzb3VyY2U6ICdwMScsXG4gICAgc2NhbUluZm8sXG4gICAgbG9zdE1vbmV5LFxuICAgIHN1c3BlY3RJbmZvOiB7XG4gICAgICBzdXNwZWN0TmFtZSxcbiAgICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgICAgc3VzcGVjdExhbmd1YWdlLFxuICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgICBzdXNwZWN0UGhvbmUsXG4gICAgICBzdXNwZWN0RW1haWwsXG4gICAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICAgIHN1c3BlY3RJUCxcbiAgICB9LFxuICAgIGZpbGVzLFxuICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICB1c2VySXNUaGVWaWN0aW0sXG4gICAgICBjb250YWN0SW5mb05hbWUsXG4gICAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgICAgY29udGFjdEluZm9QaG9uZSxcbiAgICB9LFxuICB9XG4gIHN1Ym1pdFJlcG9ydCh7IHZhcmlhYmxlczogZGF0YSB9KVxuICBuYXZpZ2F0ZSgndGhhbmt5b3UnKVxufVxuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEJhY2tCdXR0b24gcm91dGU9XCIvcDEvY29udGFjdGluZm9xdWVzdGlvblwiPlxuICAgICAgICA8VHJhbnM+Y29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICA8L0JhY2tCdXR0b24+XG4gICAgICA8U3RlcHMgYWN0aXZlU3RlcD17Nn0gdG90YWxTdGVwcz17Nn0gLz5cbiAgICAgIDxIMT5cbiAgICAgICAgPFRyYW5zPkNvbmZpcm0gcmVwb3J0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgIDwvSDE+XG4gICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAge2NsaWVudCA9PiB7XG4gICAgICAgICAgY2xpZW50LndyaXRlRGF0YSh7XG4gICAgICAgICAgICBkYXRhOiB7IGRvbmVGb3JtczogdHJ1ZSB9LFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7c2NhbUV2ZW50U3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgICB7bG9zdE1vbmV5U3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtmaWxlVXBsb2FkU3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgICB7Y29udGFjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgbWI9XCI0cmVtXCJcbiAgICAgICAgZGlzcGxheT17WydmbGV4JywgJ2Jsb2NrJywgJ2ZsZXgnXX1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17U1VCTUlUX1JFUE9SVF9NVVRBVElPTn0+XG4gICAgICAgICAgICAgIHtzdWJtaXRSZXBvcnQgPT4gKFxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXQoY2xpZW50LCBzdWJtaXRSZXBvcnQpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+U3VibWl0IHJlcG9ydCAmbmJzcDsg4p2vPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9NdXRhdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCJcbiAgICAgICAgICBtdD1cIjEuOXJlbVwiXG4gICAgICAgICAgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDFcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdfQ== */"
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
//# sourceMappingURL=main.8551d1e3e17358c9fbdc.hot-update.js.map