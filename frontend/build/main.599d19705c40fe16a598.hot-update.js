exports.id = "main";
exports.modules = {

/***/ "./src/p2/LandingPage.js":
/*!*******************************!*\
  !*** ./src/p2/LandingPage.js ***!
  \*******************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");


/* eslint-disable react/no-unescaped-entities */










var LandingPage = function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_10__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report a scam"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
    return client.writeData({
      data: {
        doneForms: false,
        scamInfo: JSON.stringify({}),
        lostMoney: JSON.stringify({}),
        suspectInfo: JSON.stringify({}),
        files: [],
        contactInfo: JSON.stringify({}),
        timeFrame: JSON.stringify({}),
        whatHappened: JSON.stringify({}),
        scammerDetails: JSON.stringify({}),
        impact: JSON.stringify({}),
        tellUsMore: JSON.stringify({})
      }
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Scams can happen to anyone. They\u2019re not always easy to recognize, and new ones are invented every day."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "You are not alone.\xA0<0>Talk to someone and get support.</0>",
    components: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
      href: "http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm"
    })]
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_8__["InfoCard"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H2"], {
    fontSize: [4, null, 5]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Help stop these crimes by reporting to police"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "The RCMP's new National Cybercrime Coordination Unit helps police across Canada catch cybercriminals, by gathering intelligence and coordinating investigations."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Police are rarely able to recover money you've lost. To solve the issue, you should also report to the website where the scam took place, to the financial institution where you lost money, and to the credit agencies, <0>Equifax</0> and <1>TransUnion</1>, if you lost personal information.",
    components: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
      href: "https://www.consumer.equifax.ca/personal/"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
      href: "https://www.transunion.ca/"
    })]
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H2"], {
    fontSize: [4, null, 5],
    marginTop: [4, null, 5]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Gather all you can about the scam."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Before you start, have this information ready:"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_unordered_list__WEBPACK_IMPORTED_MODULE_6__["Ul"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_7__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Details on when the scam took place"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_7__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Descriptions of what happened and what you know about the scammer"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_7__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Documents, screenshots, receipts and/or conversations"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_7__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Information on how the scam impacted you"
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: "/p2/timeframe"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report now"
  })));
};

/***/ })

};
//# sourceMappingURL=main.599d19705c40fe16a598.hot-update.js.map