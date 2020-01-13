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
    }))), scamDetails ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
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
    }))), lostAmount ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd2RnQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICBTVUJNSVRfUkVQT1JUX01VVEFUSU9OLFxuICBnZXRTY2FtSW5mbyxcbiAgZ2V0TG9zdE1vbmV5LFxuICBnZXRTdXNwZWN0SW5mbyxcbiAgZ2V0RmlsZXMsXG4gIGdldENvbnRhY3RJbmZvLFxufSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGdldFNjYW1JbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJNZXRob2RPZkNvbnRhY3QpIHtcbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gIH1cbiAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWRcbiAgICA/IGhvd1dlcmVZb3VDb250YWN0ZWQuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICA6ICcnXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA0XX0gbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19PlxuICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ8L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbSBldmVudCcpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL3NjYW1pbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIFxuICAgICAgICAgIDwvSDI+XG4gICAgICAgICAge3NjYW1EZXRhaWxzID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkRlc2NyaXB0aW9uPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzY2FtRGV0YWlsc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHt3aGVuV2VyZVlvdUNvbnRhY3RlZCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5EYXRlIDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7d2hlbldlcmVZb3VDb250YWN0ZWR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2hvd1dlcmVZb3VDb250YWN0ZWQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGFjdGVkIGJ5PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtob3dXZXJlWW91Q29udGFjdGVkLm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IGxvc3RNb25leVN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGxvc3RBbW91bnQsXG4gICAgbG9zdEN1cnJlbmN5LFxuICAgIGxvc3RPdGhlckN1cnJlbmN5LFxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50LFxuICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgfSA9IGdldExvc3RNb25leShjbGllbnQpXG5cbiAgaWYgKGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCkge1xuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnQuY29uY2F0KGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudClcbiAgfVxuICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IG1vbmV5IGxvc3QnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9tb25leWxvc3RcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0gyPlxuICAgICAgICAgIHtsb3N0QW1vdW50ID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFtb3VudDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7bG9zdEFtb3VudH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7bG9zdEN1cnJlbmN5IHx8IGxvc3RPdGhlckN1cnJlbmN5ID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkN1cnJlbmN5PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtsb3N0T3RoZXJDdXJyZW5jeSA/IGxvc3RPdGhlckN1cnJlbmN5IDogaTE4bi5fKGxvc3RDdXJyZW5jeSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2xvc3RNZXRob2RzT2ZQYXltZW50ID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBheW1lbnQgbWV0aG9kPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtsb3N0TWV0aG9kc09mUGF5bWVudC5tYXAoaSA9PiBpMThuLl8oaSkpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvSTE4bj5cbiAgKVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGdldFN1c3BlY3RJbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuY29uY2F0KG90aGVyU3VzcGVjdExhbmd1YWdlKVxuICB9XG4gIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5maWx0ZXIocyA9PiBzICE9PSAnT3RoZXIgbGFuZ3VhZ2UnKVxuXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5BYm91dCB0aGUgc3VzcGVjdDwvVHJhbnM+eycgJ31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2kxOG4uXygnRWRpdCBzY2FtbWVyIGRldGFpbHMnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9zdXNwZWN0aW5mb1wiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAge3N1c3BlY3ROYW1lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5hbWU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3ROYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge3N1c3BlY3RFbWFpbCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0RW1haWx9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7c3VzcGVjdFBob25lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdFBob25lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge3N1c3BlY3RXZWJzaXRlID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldlYnNpdGU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RXZWJzaXRlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge3N1c3BlY3RBZGRyZXNzID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICA8VHJhbnM+TWFpbGluZyBhZGRyZXNzPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0QWRkcmVzc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7c3VzcGVjdElQID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RJUH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7c3VzcGVjdExhbmd1YWdlID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkxhbmd1YWdlIG9mIGNvcnJlc3BvbmRlbmNlPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0TGFuZ3VhZ2UubWFwKGkgPT4gaTE4bi5fKGkpKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0kxOG4+XG4gIClcbn1cblxuY29uc3QgZmlsZVVwbG9hZFN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzKGNsaWVudClcbiAgY29uc3QgZmlsZUxpc3QgPSBmaWxlcy5qb2luKCcsICcpXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEgyXG4gICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgID5cbiAgICAgICAgPFRyYW5zPkZpbGVzIGF0dGFjaGVkPC9UcmFucz57JyAnfVxuICAgICAgICA8STE4bj5cbiAgICAgICAgICB7KHsgaTE4biB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2kxOG4uXygnRWRpdCBmaWxlcyBhdHRhY2hlZCcpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgIHRvPVwiL3AxL3VwbG9hZGZpbGVzXCJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9JMThuPlxuICAgICAgPC9IMj5cbiAgICAgIHtmaWxlcy5sZW5ndGggPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICA8VHJhbnM+RmlsZSBuYW1lPC9UcmFucz46eycgJ31cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICB7ZmlsZUxpc3R9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbmNvbnN0IGNvbnRhY3RJbmZvU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgdXNlcklzVGhlVmljdGltLFxuICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gIH0gPSBnZXRDb250YWN0SW5mbyhjbGllbnQpXG5cbiAgcmV0dXJuIChcbiAgICA8STE4bj5cbiAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxIMlxuICAgICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkNvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgY29udGFjdCBpbmZvJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgdG89XCIvcDEvY29udGFjdGluZm9cIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgPC9IMj5cblxuICAgICAgICAgIHtjb250YWN0SW5mb05hbWUgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7Y29udGFjdEluZm9OYW1lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge2NvbnRhY3RJbmZvRW1haWwgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWw8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvRW1haWx9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2NvbnRhY3RJbmZvUGhvbmUgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb1Bob25lfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHt1c2VySXNUaGVWaWN0aW0gPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RGlkIHRoZSBzY2FtIGhhcHBlbmVkIHRvIHlvdTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7aTE4bi5fKHVzZXJJc1RoZVZpY3RpbSl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvSTE4bj5cbiAgKVxufVxuXG5jb25zdCByYW5kTGV0dGVyID0gKCkgPT4ge1xuICBjb25zdCBsZXR0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jy5zcGxpdCgnJylcbiAgcmV0dXJuIGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGgpXVxufVxuY29uc3QgcmFuZERpZ2l0ID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cbmNvbnN0IHJhbmRvbWl6ZVN0cmluZyA9IHMgPT5cbiAgc1xuICAgID8gc1xuICAgICAgICAucmVwbGFjZSgvW2Etel0vZywgKCkgPT4gcmFuZExldHRlcigpKVxuICAgICAgICAucmVwbGFjZSgvW0EtWl0vZywgKCkgPT4gcmFuZExldHRlcigpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIC5yZXBsYWNlKC9bMC05XS9nLCAoKSA9PiByYW5kRGlnaXQoKSlcbiAgICA6IHNcblxuY29uc3Qgc3VibWl0ID0gKGNsaWVudCwgc3VibWl0UmVwb3J0KSA9PiB7XG4gIGxldCBzY2FtSW5mbyA9IGdldFNjYW1JbmZvKGNsaWVudClcbiAgbGV0IGxvc3RNb25leSA9IGdldExvc3RNb25leShjbGllbnQpXG4gIGxldCBzdXNwZWN0SW5mbyA9IGdldFN1c3BlY3RJbmZvKGNsaWVudClcbiAgbGV0IGZpbGVzID0gZ2V0RmlsZXMoY2xpZW50KVxuICBsZXQgY29udGFjdEluZm8gPSBnZXRDb250YWN0SW5mbyhjbGllbnQpXG5cbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBzdXNwZWN0SW5mb1xuICBzdXNwZWN0TmFtZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0TmFtZSlcbiAgc3VzcGVjdEFkZHJlc3MgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdEFkZHJlc3MpXG4gIHN1c3BlY3RQaG9uZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0UGhvbmUpXG4gIHN1c3BlY3RFbWFpbCA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0RW1haWwpXG4gIHN1c3BlY3RXZWJzaXRlID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RXZWJzaXRlKVxuICBzdXNwZWN0SVAgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdElQKVxuXG4gIGxldCB7XG4gICAgdXNlcklzVGhlVmljdGltLFxuICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gIH0gPSBjb250YWN0SW5mb1xuICBjb250YWN0SW5mb05hbWUgPSByYW5kb21pemVTdHJpbmcoY29udGFjdEluZm9OYW1lKVxuICBjb250YWN0SW5mb0VtYWlsID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvRW1haWwpXG4gIGNvbnRhY3RJbmZvUGhvbmUgPSByYW5kb21pemVTdHJpbmcoY29udGFjdEluZm9QaG9uZSlcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHNvdXJjZTogJ3AxJyxcbiAgICBzY2FtSW5mbyxcbiAgICBsb3N0TW9uZXksXG4gICAgc3VzcGVjdEluZm86IHtcbiAgICAgIHN1c3BlY3ROYW1lLFxuICAgICAgc3VzcGVjdEFkZHJlc3MsXG4gICAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICAgIHN1c3BlY3RQaG9uZSxcbiAgICAgIHN1c3BlY3RFbWFpbCxcbiAgICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgICAgc3VzcGVjdElQLFxuICAgIH0sXG4gICAgZmlsZXMsXG4gICAgY29udGFjdEluZm86IHtcbiAgICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICAgIGNvbnRhY3RJbmZvRW1haWwsXG4gICAgICBjb250YWN0SW5mb1Bob25lLFxuICAgIH0sXG4gIH1cbiAgc3VibWl0UmVwb3J0KHsgdmFyaWFibGVzOiBkYXRhIH0pXG4gIG5hdmlnYXRlKCd0aGFua3lvdScpXG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8QmFja0J1dHRvbiByb3V0ZT1cIi9wMS9jb250YWN0aW5mb3F1ZXN0aW9uXCI+XG4gICAgICAgIDxUcmFucz5jb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgIDwvQmFja0J1dHRvbj5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs2fSB0b3RhbFN0ZXBzPXs2fSAvPlxuICAgICAgPEgxPlxuICAgICAgICA8VHJhbnM+Q29uZmlybSByZXBvcnQgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgPC9IMT5cbiAgICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IHtcbiAgICAgICAgICBjbGllbnQud3JpdGVEYXRhKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZG9uZUZvcm1zOiB0cnVlIH0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtsb3N0TW9uZXlTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtzdXNwZWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cblxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXtTVUJNSVRfUkVQT1JUX01VVEFUSU9OfT5cbiAgICAgICAgICAgICAge3N1Ym1pdFJlcG9ydCA9PiAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdChjbGllbnQsIHN1Ym1pdFJlcG9ydCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5TdWJtaXQgcmVwb3J0ICZuYnNwOyDina88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L011dGF0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIlxuICAgICAgICAgIG10PVwiMS45cmVtXCJcbiAgICAgICAgICBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */"
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
//# sourceMappingURL=main.1b22c1f729d1d6fd9532.hot-update.js.map