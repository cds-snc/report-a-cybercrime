exports.id = "main";
exports.modules = {

/***/ "./src/p2/NextSteps.js":
/*!*****************************!*\
  !*** ./src/p2/NextSteps.js ***!
  \*****************************/
/*! exports provided: NextSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextSteps", function() { return NextSteps; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);


/** @jsx jsx */











var NextSteps = function NextSteps() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
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
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>We've sent you an email with a summary of your report.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["InfoCard"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>What happens next</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ""
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals. We won't follow up with everyone who submits a report."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>Where you can get help</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>Talk to someone and get support</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm"
    })]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>Find tips to protect yourself in the future</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm"
    })]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>Follow what scams are trending</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "http://www.antifraudcentre.ca/index-eng.htm"
    })]
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>You have other reporting options</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report directly to the place where the scam happened."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report to your financial institution, if you lost money."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "https://www.consumer.equifax.ca/personal/"
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "https://www.transunion.ca/"
    })]
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_8__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_10__["ButtonsContainer"], {
    buttonLink: true,
    cancel: false,
    route: "/p2/timeframe"
  }));
};

/***/ })

};
//# sourceMappingURL=main.5b7fdac6273fd9eb154d.hot-update.js.map