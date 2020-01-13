exports.id = "main";
exports.modules = {

/***/ "./src/p1/LandingPage.js":
/*!*******************************!*\
  !*** ./src/p1/LandingPage.js ***!
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
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
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
        contactInfo: JSON.stringify({})
      }
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>You will be asked to:</0>",
    components: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null)]
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], {
    fontSize: [8, null, 8]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Describe the scam"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us how much money was lost"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Add clues about the suspect"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Attach any supporting files"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_buttons_container__WEBPACK_IMPORTED_MODULE_7__["ButtonsContainer"], {
    buttonLink: true,
    cancel: false,
    landing: true,
    route: "/p1/scaminfo"
  }));
};

/***/ })

};
//# sourceMappingURL=main.86ef718f5b024c39d19d.hot-update.js.map