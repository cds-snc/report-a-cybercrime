exports.id = "main";
exports.modules = {

/***/ "./src/p2/ConfirmationSummary.js":
/*!***************************************!*\
  !*** ./src/p2/ConfirmationSummary.js ***!
  \***************************************/
/*! exports provided: ConfirmationSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSummary", function() { return ConfirmationSummary; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */










var SectionHeader = function SectionHeader(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [3, null, 4],
    marginTop: [2, null, 3],
    marginBottom: [1, null, 1]
  }, props));
};

var EditButton = function EditButton(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_8__["Link"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "button",
    color: "black",
    textAlign: "center"
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Edit"
  }));
};

var timeFrameSummary = function timeFrameSummary(client) {
  var _getTimeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getTimeFrame"])(client),
      startDate = _getTimeFrame.startDate,
      endDate = _getTimeFrame.endDate;

  startDate = startDate.slice(0, 10);
  endDate = endDate.slice(0, 10);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Timeframe"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref) {
    var i18n = _ref.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit timeframe'),
      to: "/p2/timeframe"
    });
  })), startDate ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "{startDate} to {endDate}",
    values: {
      startDate: startDate,
      endDate: endDate
    }
  })) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "If you can, give us an idea of when the scam took place so that police are able to investigate."
  })));
};

var whatHappenedSummary = function whatHappenedSummary(client) {
  var _getWhatHappened = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getWhatHappened"])(client),
      whatHappened = _getWhatHappened.whatHappened;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Scam"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit what happened'),
      to: "/p2/whathappened"
    });
  })), whatHappened ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, whatHappened) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Tell us what happened so we can stop it from happening in the future."
  })));
};

var scammerSummary = function scammerSummary(client) {
  var _getScammerDetails = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getScammerDetails"])(client),
      scammerDetails = _getScammerDetails.scammerDetails,
      files = _getScammerDetails.files,
      fileDescriptions = _getScammerDetails.fileDescriptions;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Scammer"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit scammer information'),
      to: "/p2/scammerdetails"
    });
  })), scammerDetails !== '' || files.length > 0 || fileDescriptions.length > 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, scammerDetails), files ? files.map(function (file, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      key: index
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["StyledSpan"], {
      fontSize: [2, null, 3],
      fontWeight: "bold"
    }, file, ":"), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["StyledSpan"], {
      fontSize: [2, null, 3]
    }, fileDescriptions[index]));
  }) : null) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "If you can, share any details you know so that police can try to identify suspects."
  })));
};

var impactSummary = function impactSummary(client) {
  var _getImpact = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getImpact"])(client),
      howWereYouAffected = _getImpact.howWereYouAffected,
      otherImpact = _getImpact.otherImpact,
      damage = _getImpact.damage;

  if (howWereYouAffected.indexOf('Other impact') > -1) {
    howWereYouAffected = howWereYouAffected.filter(function (impact) {
      return impact != 'Other impact';
    });
    howWereYouAffected.push(otherImpact);
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Impact"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit impact'),
      to: "/p2/impact"
    });
  })), howWereYouAffected.length > 0 || damage != '' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, howWereYouAffected.join(', ')), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, damage)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "If you can, tell us how the scam impacted you so that we can better support other people who are affected."
  })));
};

var contactSummary = function contactSummary(client) {
  var _getP2ContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getP2ContactInfo"])(client),
      fullName = _getP2ContactInfo.fullName,
      email = _getP2ContactInfo.email,
      phone = _getP2ContactInfo.phone,
      postalCode = _getP2ContactInfo.postalCode;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Contact"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref5) {
    var i18n = _ref5.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit contact information'),
      to: "/p2/contactinfo"
    });
  })), (fullName + email + phone + postalCode).length > 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, fullName), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, email), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, phone), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, postalCode)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Please provide your contact details. This gives us a way to reach you."
  })));
};

var ConfirmationSummary = function ConfirmationSummary() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    client.writeData({
      data: {
        doneForms: true
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, timeFrameSummary(client), whatHappenedSummary(client), scammerSummary(client), impactSummary(client), contactSummary(client));
  });
};

/***/ })

};
//# sourceMappingURL=main.85ab6968bf68cf9e29ba.hot-update.js.map