exports.id = "main";
exports.modules = {

/***/ "./src/p1/ScamInfoPage.js":
/*!********************************!*\
  !*** ./src/p1/ScamInfoPage.js ***!
  \********************************/
/*! exports provided: ScamInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoPage", function() { return ScamInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/ScamInfoForm */ "./src/p1/forms/ScamInfoForm.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      scamInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'moneylostquestion');
};

var ScamInfoPage = function ScamInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p1"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "start page"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 1,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Describe what happened"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Any information about where, when, and how the scam took place is helpful for police."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__["ScamInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.adc1a33b6455dccf07ca.hot-update.js.map