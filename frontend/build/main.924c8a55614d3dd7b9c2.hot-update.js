exports.id = "main";
exports.modules = {

/***/ "./src/p2/TimeFramePage.js":
/*!*********************************!*\
  !*** ./src/p2/TimeFramePage.js ***!
  \*********************************/
/*! exports provided: TimeFramePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFramePage", function() { return TimeFramePage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _forms_TimeFrameInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/TimeFrameInfoForm */ "./src/p2/forms/TimeFrameInfoForm.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");













var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      scamInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__["getDoneForms"])(client) ? 'confirmation' : 'whathappened');
};

var TimeFramePage = function TimeFramePage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    marginBottom: "20px"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_stepper__WEBPACK_IMPORTED_MODULE_11__["Steps"], {
    activeStep: 0,
    steps: [{}, {}, {}, {}, {}, {}]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p2"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "When did the scam happen?"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_7__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_forms_TimeFrameInfoForm__WEBPACK_IMPORTED_MODULE_6__["TimeFrameInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ })

};
//# sourceMappingURL=main.924c8a55614d3dd7b9c2.hot-update.js.map