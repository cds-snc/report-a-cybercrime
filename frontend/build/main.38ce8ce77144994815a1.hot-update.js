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
    id: "Scam event"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref) {
    var i18n = _ref.i18n;
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
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
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
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
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
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
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
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref5) {
    var i18n = _ref5.i18n;
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

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_12__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    marginBottom: "20px"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_11__["Steps"], {
    activeStep: 4,
    steps: [{}, {}, {}, {}, {}]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Confirm report information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_10__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    client.writeData({
      data: {
        doneForms: true
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, scamEventSummary(client), lostMoneySummary(client), suspectInfoSummary(client), fileUploadSummary(client), contactInfoSummary(client));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    maxWidth: "305px",
    marginTop: [3, null, 4],
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["SUBMIT_REPORT_MUTATION"]
    }, function (submitReport) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        onClick: function onClick() {
          return submit(client, submitReport);
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
        id: "Submit report"
      }));
    });
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    maxWidth: "300px",
    marginTop: [2, null, 3],
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    type: "button",
    color: "black",
    to: "/p1",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Cancel report"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.38ce8ce77144994815a1.hot-update.js.map