exports.id = "main";
exports.modules = {

/***/ "./src/p1/ThankYou.js":
/*!****************************!*\
  !*** ./src/p1/ThankYou.js ***!
  \****************************/
/*! exports provided: ThankYou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return ThankYou; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/**@jsx jsx */









var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return client.writeData({
      data: {
        doneForms: false,
        scamInfo: JSON.stringify({}),
        lostMoney: JSON.stringify({}),
        suspectInfo: JSON.stringify({}),
        files: [],
        contactInfo: JSON.stringify({})
      }
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_9__["BackButton"], {
    route: "/p1/confirmation"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "confirmation"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      href: "http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3"
    })]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_7__["ButtonsContainer"], {
    buttonLink: true,
    cancel: false,
    route: "/p1/scaminfo"
  }));
};

/***/ })

};
//# sourceMappingURL=main.cd56ddd6f0bf41947d91.hot-update.js.map