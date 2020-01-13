exports.id = "main";
exports.modules = {

/***/ "./src/ConfirmationPage.js":
/*!*********************************!*\
  !*** ./src/ConfirmationPage.js ***!
  \*********************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");



function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        userIsTheVictim\n        contactInfoName\n        contactInfoEmail\n        contactInfoPhone\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        files\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        suspectName\n        suspectAddress\n        suspectLanguage\n        otherSuspectLanguage\n        suspectPhone\n        suspectEmail\n        suspectWebsite\n        suspectIP\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        lostAmount\n        lostCurrency\n        lostMethodsOfPayment\n        lostOtherMethodOfPayment\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        howWereYouContacted\n        otherMethodOfContact\n        whenWereYouContacted\n        scamDetails\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/** @jsx jsx */













var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('div', {
  target: "e3gy4t90",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwcGVyJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IHNjYW1FdmVudFN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQsXG4gICAgb3RoZXJNZXRob2RPZkNvbnRhY3QsXG4gICAgd2hlbldlcmVZb3VDb250YWN0ZWQsXG4gICAgc2NhbURldGFpbHMsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgaG93V2VyZVlvdUNvbnRhY3RlZFxuICAgICAgICBvdGhlck1ldGhvZE9mQ29udGFjdFxuICAgICAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZFxuICAgICAgICBzY2FtRGV0YWlsc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChcbiAgICAoaG93V2VyZVlvdUNvbnRhY3RlZCAmJiBob3dXZXJlWW91Q29udGFjdGVkLmxlbmd0aCkgfHxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCB8fFxuICAgIHNjYW1EZXRhaWxzXG4gICkge1xuICAgIGlmIChvdGhlck1ldGhvZE9mQ29udGFjdCkge1xuICAgICAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWQuY29uY2F0KG90aGVyTWV0aG9kT2ZDb250YWN0KVxuICAgIH1cbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZFxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMiBmb250U2l6ZT17WzMsIG51bGwsIDRdfSBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX0+XG4gICAgICAgICAgPFRyYW5zPlNjYW08L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RGVzY3JpcHRpb246IHtzY2FtRGV0YWlsc308L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EYXRlOiB7d2hlbldlcmVZb3VDb250YWN0ZWR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+Q29udGFjdDoge2hvd1dlcmVZb3VDb250YWN0ZWR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PiAgXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGxvc3RNb25leVN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGxvc3RBbW91bnQsXG4gICAgbG9zdEN1cnJlbmN5LFxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50LFxuICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBsb3N0QW1vdW50XG4gICAgICAgIGxvc3RDdXJyZW5jeVxuICAgICAgICBsb3N0TWV0aG9kc09mUGF5bWVudFxuICAgICAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgbG9zdEFtb3VudCB8fFxuICAgIGxvc3RDdXJyZW5jeSB8fFxuICAgIChsb3N0TWV0aG9kc09mUGF5bWVudCAmJiBsb3N0TWV0aG9kc09mUGF5bWVudC5sZW5ndGgpXG4gICkge1xuICAgIGlmIChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpIHtcbiAgICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnQuY29uY2F0KFxuICAgICAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gICAgICApXG4gICAgfVxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnRcbiAgICAgIC5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKVxuICAgICAgLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPk1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+QW1vdW50OiB7bG9zdEFtb3VudH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5DdXJyZW5jeToge2xvc3RDdXJyZW5jeX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5QYXltZW50IG1ldGhvZDoge2xvc3RNZXRob2RzT2ZQYXltZW50fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuY29uc3Qgc3VzcGVjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgc3VzcGVjdE5hbWVcbiAgICAgICAgc3VzcGVjdEFkZHJlc3NcbiAgICAgICAgc3VzcGVjdExhbmd1YWdlXG4gICAgICAgIG90aGVyU3VzcGVjdExhbmd1YWdlXG4gICAgICAgIHN1c3BlY3RQaG9uZVxuICAgICAgICBzdXNwZWN0RW1haWxcbiAgICAgICAgc3VzcGVjdFdlYnNpdGVcbiAgICAgICAgc3VzcGVjdElQXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHN1c3BlY3ROYW1lIHx8XG4gICAgc3VzcGVjdEFkZHJlc3MgfHxcbiAgICAoc3VzcGVjdExhbmd1YWdlICYmIHN1c3BlY3RMYW5ndWFnZS5sZW5ndGgpIHx8XG4gICAgc3VzcGVjdFBob25lIHx8XG4gICAgc3VzcGVjdEVtYWlsIHx8XG4gICAgc3VzcGVjdFdlYnNpdGUgfHxcbiAgICBzdXNwZWN0SVBcbiAgKSB7XG4gICAgaWYgKG90aGVyU3VzcGVjdExhbmd1YWdlKSB7XG4gICAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuY29uY2F0KG90aGVyU3VzcGVjdExhbmd1YWdlKVxuICAgIH1cbiAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgIC5maWx0ZXIocyA9PiBzICE9PSAnT3RoZXIgbGFuZ3VhZ2UnKVxuICAgICAgLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPlNjYW1tZXIgZGV0YWlsczwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5OYW1lOiB7c3VzcGVjdE5hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyOiB7c3VzcGVjdFBob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M6IHtzdXNwZWN0RW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+V2Vic2l0ZToge3N1c3BlY3RXZWJzaXRlfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk1haWxpbmcgYWRkcmVzczoge3N1c3BlY3RBZGRyZXNzfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M6IHtzdXNwZWN0SVB9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2Ugb2YgY29ycmVzcG9uZGVuY2U6IHtzdXNwZWN0TGFuZ3VhZ2V9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IHsgZmlsZXMgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBmaWxlc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPkV2aWRlbmNlPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkZpbGVzOiB7ZmlsZUxpc3R9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIHVzZXJJc1RoZVZpY3RpbVxuICAgICAgICBjb250YWN0SW5mb05hbWVcbiAgICAgICAgY29udGFjdEluZm9FbWFpbFxuICAgICAgICBjb250YWN0SW5mb1Bob25lXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHVzZXJJc1RoZVZpY3RpbSB8fFxuICAgIGNvbnRhY3RJbmZvTmFtZSB8fFxuICAgIGNvbnRhY3RJbmZvRW1haWwgfHxcbiAgICBjb250YWN0SW5mb1Bob25lXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+SWYgdGhlIHBvbGljZSBoYXZlIGFueSBxdWVzdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+WW91IGFyZSB0aGUgdmljdGltOiB7dXNlcklzVGhlVmljdGltfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtjb250YWN0SW5mb05hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWw6IHtjb250YWN0SW5mb0VtYWlsfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBob25lOiB7Y29udGFjdEluZm9QaG9uZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs0fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5Db25maXJtIHJlcG9ydCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDVweFwiXG4gICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvdGhhbmt5b3UnKX0+XG4gICAgICAgIDxUcmFucz5TdWJtaXQgcmVwb3J0PC9UcmFucz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDBweFwiXG4gICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUIyQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwcGVyJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuXG5jb25zdCB0b3BCYXJDb250YWluZXIgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmNvbnN0IHNjYW1FdmVudFN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQsXG4gICAgb3RoZXJNZXRob2RPZkNvbnRhY3QsXG4gICAgd2hlbldlcmVZb3VDb250YWN0ZWQsXG4gICAgc2NhbURldGFpbHMsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgaG93V2VyZVlvdUNvbnRhY3RlZFxuICAgICAgICBvdGhlck1ldGhvZE9mQ29udGFjdFxuICAgICAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZFxuICAgICAgICBzY2FtRGV0YWlsc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChcbiAgICAoaG93V2VyZVlvdUNvbnRhY3RlZCAmJiBob3dXZXJlWW91Q29udGFjdGVkLmxlbmd0aCkgfHxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCB8fFxuICAgIHNjYW1EZXRhaWxzXG4gICkge1xuICAgIGlmIChvdGhlck1ldGhvZE9mQ29udGFjdCkge1xuICAgICAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWQuY29uY2F0KG90aGVyTWV0aG9kT2ZDb250YWN0KVxuICAgIH1cbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZFxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMiBmb250U2l6ZT17WzMsIG51bGwsIDRdfSBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX0+XG4gICAgICAgICAgPFRyYW5zPlNjYW08L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RGVzY3JpcHRpb246IHtzY2FtRGV0YWlsc308L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EYXRlOiB7d2hlbldlcmVZb3VDb250YWN0ZWR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+Q29udGFjdDoge2hvd1dlcmVZb3VDb250YWN0ZWR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PiAgXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGxvc3RNb25leVN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGxvc3RBbW91bnQsXG4gICAgbG9zdEN1cnJlbmN5LFxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50LFxuICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBsb3N0QW1vdW50XG4gICAgICAgIGxvc3RDdXJyZW5jeVxuICAgICAgICBsb3N0TWV0aG9kc09mUGF5bWVudFxuICAgICAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgbG9zdEFtb3VudCB8fFxuICAgIGxvc3RDdXJyZW5jeSB8fFxuICAgIChsb3N0TWV0aG9kc09mUGF5bWVudCAmJiBsb3N0TWV0aG9kc09mUGF5bWVudC5sZW5ndGgpXG4gICkge1xuICAgIGlmIChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpIHtcbiAgICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnQuY29uY2F0KFxuICAgICAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gICAgICApXG4gICAgfVxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnRcbiAgICAgIC5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKVxuICAgICAgLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPk1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+QW1vdW50OiB7bG9zdEFtb3VudH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5DdXJyZW5jeToge2xvc3RDdXJyZW5jeX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5QYXltZW50IG1ldGhvZDoge2xvc3RNZXRob2RzT2ZQYXltZW50fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuY29uc3Qgc3VzcGVjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgc3VzcGVjdE5hbWVcbiAgICAgICAgc3VzcGVjdEFkZHJlc3NcbiAgICAgICAgc3VzcGVjdExhbmd1YWdlXG4gICAgICAgIG90aGVyU3VzcGVjdExhbmd1YWdlXG4gICAgICAgIHN1c3BlY3RQaG9uZVxuICAgICAgICBzdXNwZWN0RW1haWxcbiAgICAgICAgc3VzcGVjdFdlYnNpdGVcbiAgICAgICAgc3VzcGVjdElQXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHN1c3BlY3ROYW1lIHx8XG4gICAgc3VzcGVjdEFkZHJlc3MgfHxcbiAgICAoc3VzcGVjdExhbmd1YWdlICYmIHN1c3BlY3RMYW5ndWFnZS5sZW5ndGgpIHx8XG4gICAgc3VzcGVjdFBob25lIHx8XG4gICAgc3VzcGVjdEVtYWlsIHx8XG4gICAgc3VzcGVjdFdlYnNpdGUgfHxcbiAgICBzdXNwZWN0SVBcbiAgKSB7XG4gICAgaWYgKG90aGVyU3VzcGVjdExhbmd1YWdlKSB7XG4gICAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuY29uY2F0KG90aGVyU3VzcGVjdExhbmd1YWdlKVxuICAgIH1cbiAgICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgIC5maWx0ZXIocyA9PiBzICE9PSAnT3RoZXIgbGFuZ3VhZ2UnKVxuICAgICAgLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPlNjYW1tZXIgZGV0YWlsczwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5OYW1lOiB7c3VzcGVjdE5hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyOiB7c3VzcGVjdFBob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M6IHtzdXNwZWN0RW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+V2Vic2l0ZToge3N1c3BlY3RXZWJzaXRlfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk1haWxpbmcgYWRkcmVzczoge3N1c3BlY3RBZGRyZXNzfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M6IHtzdXNwZWN0SVB9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2Ugb2YgY29ycmVzcG9uZGVuY2U6IHtzdXNwZWN0TGFuZ3VhZ2V9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IHsgZmlsZXMgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBmaWxlc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPkV2aWRlbmNlPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkZpbGVzOiB7ZmlsZUxpc3R9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIHVzZXJJc1RoZVZpY3RpbVxuICAgICAgICBjb250YWN0SW5mb05hbWVcbiAgICAgICAgY29udGFjdEluZm9FbWFpbFxuICAgICAgICBjb250YWN0SW5mb1Bob25lXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHVzZXJJc1RoZVZpY3RpbSB8fFxuICAgIGNvbnRhY3RJbmZvTmFtZSB8fFxuICAgIGNvbnRhY3RJbmZvRW1haWwgfHxcbiAgICBjb250YWN0SW5mb1Bob25lXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+SWYgdGhlIHBvbGljZSBoYXZlIGFueSBxdWVzdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+WW91IGFyZSB0aGUgdmljdGltOiB7dXNlcklzVGhlVmljdGltfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtjb250YWN0SW5mb05hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWw6IHtjb250YWN0SW5mb0VtYWlsfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBob25lOiB7Y29udGFjdEluZm9QaG9uZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs0fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5Db25maXJtIHJlcG9ydCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDVweFwiXG4gICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvdGhhbmt5b3UnKX0+XG4gICAgICAgIDxUcmFucz5TdWJtaXQgcmVwb3J0PC9UcmFucz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDBweFwiXG4gICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
};

var scamEventSummary = function scamEventSummary(client) {
  var _client$readQuery = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject())
  }),
      howWereYouContacted = _client$readQuery.howWereYouContacted,
      otherMethodOfContact = _client$readQuery.otherMethodOfContact,
      whenWereYouContacted = _client$readQuery.whenWereYouContacted,
      scamDetails = _client$readQuery.scamDetails;

  if (howWereYouContacted && howWereYouContacted.length || whenWereYouContacted || scamDetails) {
    if (otherMethodOfContact) {
      howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact);
    }

    howWereYouContacted = howWereYouContacted.filter(function (s) {
      return s !== 'other';
    }).join(', ');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Scam"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Description: {scamDetails}",
      values: {
        scamDetails: scamDetails
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Date: {whenWereYouContacted}",
      values: {
        whenWereYouContacted: whenWereYouContacted
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Contact: {howWereYouContacted}",
      values: {
        howWereYouContacted: howWereYouContacted
      }
    })));
  } else {
    return null;
  }
};

var lostMoneySummary = function lostMoneySummary(client) {
  var _client$readQuery2 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject2())
  }),
      lostAmount = _client$readQuery2.lostAmount,
      lostCurrency = _client$readQuery2.lostCurrency,
      lostMethodsOfPayment = _client$readQuery2.lostMethodsOfPayment,
      lostOtherMethodOfPayment = _client$readQuery2.lostOtherMethodOfPayment;

  if (lostAmount || lostCurrency || lostMethodsOfPayment && lostMethodsOfPayment.length) {
    if (lostOtherMethodOfPayment) {
      lostMethodsOfPayment = lostMethodsOfPayment.concat(lostOtherMethodOfPayment);
    }

    lostMethodsOfPayment = lostMethodsOfPayment.filter(function (s) {
      return s !== 'other';
    }).join(', ');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Money lost"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Amount: {lostAmount}",
      values: {
        lostAmount: lostAmount
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Currency: {lostCurrency}",
      values: {
        lostCurrency: lostCurrency
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Payment method: {lostMethodsOfPayment}",
      values: {
        lostMethodsOfPayment: lostMethodsOfPayment
      }
    })));
  } else {
    return null;
  }
};

var suspectInfoSummary = function suspectInfoSummary(client) {
  var _client$readQuery3 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject3())
  }),
      suspectName = _client$readQuery3.suspectName,
      suspectAddress = _client$readQuery3.suspectAddress,
      suspectLanguage = _client$readQuery3.suspectLanguage,
      otherSuspectLanguage = _client$readQuery3.otherSuspectLanguage,
      suspectPhone = _client$readQuery3.suspectPhone,
      suspectEmail = _client$readQuery3.suspectEmail,
      suspectWebsite = _client$readQuery3.suspectWebsite,
      suspectIP = _client$readQuery3.suspectIP;

  if (suspectName || suspectAddress || suspectLanguage && suspectLanguage.length || suspectPhone || suspectEmail || suspectWebsite || suspectIP) {
    if (otherSuspectLanguage) {
      suspectLanguage = suspectLanguage.concat(otherSuspectLanguage);
    }

    suspectLanguage = suspectLanguage.filter(function (s) {
      return s !== 'Other language';
    }).join(', ');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Scammer details"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Name: {suspectName}",
      values: {
        suspectName: suspectName
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Phone number: {suspectPhone}",
      values: {
        suspectPhone: suspectPhone
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Email address: {suspectEmail}",
      values: {
        suspectEmail: suspectEmail
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Website: {suspectWebsite}",
      values: {
        suspectWebsite: suspectWebsite
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Mailing address: {suspectAddress}",
      values: {
        suspectAddress: suspectAddress
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "IP address: {suspectIP}",
      values: {
        suspectIP: suspectIP
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Language of correspondence: {suspectLanguage}",
      values: {
        suspectLanguage: suspectLanguage
      }
    })));
  } else {
    return null;
  }
};

var fileUploadSummary = function fileUploadSummary(client) {
  var _client$readQuery4 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject4())
  }),
      files = _client$readQuery4.files;

  if (files && files.length) {
    var fileList = files.join(', ');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Evidence"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Files: {fileList}",
      values: {
        fileList: fileList
      }
    })));
  } else {
    return null;
  }
};

var contactInfoSummary = function contactInfoSummary(client) {
  var _client$readQuery5 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject5())
  }),
      userIsTheVictim = _client$readQuery5.userIsTheVictim,
      contactInfoName = _client$readQuery5.contactInfoName,
      contactInfoEmail = _client$readQuery5.contactInfoEmail,
      contactInfoPhone = _client$readQuery5.contactInfoPhone;

  if (userIsTheVictim || contactInfoName || contactInfoEmail || contactInfoPhone) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "If the police have any questions"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "You are the victim: {userIsTheVictim}",
      values: {
        userIsTheVictim: userIsTheVictim
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Name: {contactInfoName}",
      values: {
        contactInfoName: contactInfoName
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Email: {contactInfoEmail}",
      values: {
        contactInfoEmail: contactInfoEmail
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Phone: {contactInfoPhone}",
      values: {
        contactInfoPhone: contactInfoPhone
      }
    })));
  } else {
    return null;
  }
};

var _ref =  false ? undefined : {
  name: "lod0fm-ConfirmationPage",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ConfirmationPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1RjIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAgIG90aGVyTWV0aG9kT2ZDb250YWN0XG4gICAgICAgIHdoZW5XZXJlWW91Q29udGFjdGVkXG4gICAgICAgIHNjYW1EZXRhaWxzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIChob3dXZXJlWW91Q29udGFjdGVkICYmIGhvd1dlcmVZb3VDb250YWN0ZWQubGVuZ3RoKSB8fFxuICAgIHdoZW5XZXJlWW91Q29udGFjdGVkIHx8XG4gICAgc2NhbURldGFpbHNcbiAgKSB7XG4gICAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gICAgfVxuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICA8VHJhbnM+U2NhbTwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EZXNjcmlwdGlvbjoge3NjYW1EZXRhaWxzfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkRhdGU6IHt3aGVuV2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Db250YWN0OiB7aG93V2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+ICBcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuY29uc3QgbG9zdE1vbmV5U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgbG9zdEFtb3VudCxcbiAgICBsb3N0Q3VycmVuY3ksXG4gICAgbG9zdE1ldGhvZHNPZlBheW1lbnQsXG4gICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50LFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIGxvc3RBbW91bnRcbiAgICAgICAgbG9zdEN1cnJlbmN5XG4gICAgICAgIGxvc3RNZXRob2RzT2ZQYXltZW50XG4gICAgICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFxuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChcbiAgICBsb3N0QW1vdW50IHx8XG4gICAgbG9zdEN1cnJlbmN5IHx8XG4gICAgKGxvc3RNZXRob2RzT2ZQYXltZW50ICYmIGxvc3RNZXRob2RzT2ZQYXltZW50Lmxlbmd0aClcbiAgKSB7XG4gICAgaWYgKGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCkge1xuICAgICAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudC5jb25jYXQoXG4gICAgICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgICAgIClcbiAgICB9XG4gICAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudFxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+TW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5BbW91bnQ6IHtsb3N0QW1vdW50fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkN1cnJlbmN5OiB7bG9zdEN1cnJlbmN5fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBheW1lbnQgbWV0aG9kOiB7bG9zdE1ldGhvZHNPZlBheW1lbnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBzdXNwZWN0TmFtZVxuICAgICAgICBzdXNwZWN0QWRkcmVzc1xuICAgICAgICBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgc3VzcGVjdFBob25lXG4gICAgICAgIHN1c3BlY3RFbWFpbFxuICAgICAgICBzdXNwZWN0V2Vic2l0ZVxuICAgICAgICBzdXNwZWN0SVBcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgc3VzcGVjdE5hbWUgfHxcbiAgICBzdXNwZWN0QWRkcmVzcyB8fFxuICAgIChzdXNwZWN0TGFuZ3VhZ2UgJiYgc3VzcGVjdExhbmd1YWdlLmxlbmd0aCkgfHxcbiAgICBzdXNwZWN0UGhvbmUgfHxcbiAgICBzdXNwZWN0RW1haWwgfHxcbiAgICBzdXNwZWN0V2Vic2l0ZSB8fFxuICAgIHN1c3BlY3RJUFxuICApIHtcbiAgICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gICAgfVxuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZVxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdPdGhlciBsYW5ndWFnZScpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+U2NhbW1lciBkZXRhaWxzPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtzdXNwZWN0TmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI6IHtzdXNwZWN0UGhvbmV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczoge3N1c3BlY3RFbWFpbH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5XZWJzaXRlOiB7c3VzcGVjdFdlYnNpdGV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TWFpbGluZyBhZGRyZXNzOiB7c3VzcGVjdEFkZHJlc3N9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczoge3N1c3BlY3RJUH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5MYW5ndWFnZSBvZiBjb3JyZXNwb25kZW5jZToge3N1c3BlY3RMYW5ndWFnZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGZpbGVVcGxvYWRTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3QgeyBmaWxlcyB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIGZpbGVzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gZmlsZXMuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+RXZpZGVuY2U8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RmlsZXM6IHtmaWxlTGlzdH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5jb25zdCBjb250YWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcklzVGhlVmljdGltLFxuICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgdXNlcklzVGhlVmljdGltXG4gICAgICAgIGNvbnRhY3RJbmZvTmFtZVxuICAgICAgICBjb250YWN0SW5mb0VtYWlsXG4gICAgICAgIGNvbnRhY3RJbmZvUGhvbmVcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgdXNlcklzVGhlVmljdGltIHx8XG4gICAgY29udGFjdEluZm9OYW1lIHx8XG4gICAgY29udGFjdEluZm9FbWFpbCB8fFxuICAgIGNvbnRhY3RJbmZvUGhvbmVcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5JZiB0aGUgcG9saWNlIGhhdmUgYW55IHF1ZXN0aW9uczwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Zb3UgYXJlIHRoZSB2aWN0aW06IHt1c2VySXNUaGVWaWN0aW19PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TmFtZToge2NvbnRhY3RJbmZvTmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5FbWFpbDoge2NvbnRhY3RJbmZvRW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmU6IHtjb250YWN0SW5mb1Bob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblBhZ2UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxDb250YWluZXIgY3NzPXt0b3BCYXJDb250YWluZXJ9PlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPkNvbmZpcm0gcmVwb3J0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge3NjYW1FdmVudFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7bG9zdE1vbmV5U3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgIHtzdXNwZWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7ZmlsZVVwbG9hZFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7Y29udGFjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwNXB4XCJcbiAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy90aGFua3lvdScpfT5cbiAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "lod0fm-ConfirmationPage",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ConfirmationPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1VjIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAgIG90aGVyTWV0aG9kT2ZDb250YWN0XG4gICAgICAgIHdoZW5XZXJlWW91Q29udGFjdGVkXG4gICAgICAgIHNjYW1EZXRhaWxzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIChob3dXZXJlWW91Q29udGFjdGVkICYmIGhvd1dlcmVZb3VDb250YWN0ZWQubGVuZ3RoKSB8fFxuICAgIHdoZW5XZXJlWW91Q29udGFjdGVkIHx8XG4gICAgc2NhbURldGFpbHNcbiAgKSB7XG4gICAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gICAgfVxuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICA8VHJhbnM+U2NhbTwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EZXNjcmlwdGlvbjoge3NjYW1EZXRhaWxzfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkRhdGU6IHt3aGVuV2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Db250YWN0OiB7aG93V2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+ICBcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuY29uc3QgbG9zdE1vbmV5U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgbG9zdEFtb3VudCxcbiAgICBsb3N0Q3VycmVuY3ksXG4gICAgbG9zdE1ldGhvZHNPZlBheW1lbnQsXG4gICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50LFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIGxvc3RBbW91bnRcbiAgICAgICAgbG9zdEN1cnJlbmN5XG4gICAgICAgIGxvc3RNZXRob2RzT2ZQYXltZW50XG4gICAgICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFxuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChcbiAgICBsb3N0QW1vdW50IHx8XG4gICAgbG9zdEN1cnJlbmN5IHx8XG4gICAgKGxvc3RNZXRob2RzT2ZQYXltZW50ICYmIGxvc3RNZXRob2RzT2ZQYXltZW50Lmxlbmd0aClcbiAgKSB7XG4gICAgaWYgKGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCkge1xuICAgICAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudC5jb25jYXQoXG4gICAgICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgICAgIClcbiAgICB9XG4gICAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudFxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+TW9uZXkgbG9zdDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5BbW91bnQ6IHtsb3N0QW1vdW50fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkN1cnJlbmN5OiB7bG9zdEN1cnJlbmN5fTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBheW1lbnQgbWV0aG9kOiB7bG9zdE1ldGhvZHNPZlBheW1lbnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBzdXNwZWN0TmFtZVxuICAgICAgICBzdXNwZWN0QWRkcmVzc1xuICAgICAgICBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgc3VzcGVjdFBob25lXG4gICAgICAgIHN1c3BlY3RFbWFpbFxuICAgICAgICBzdXNwZWN0V2Vic2l0ZVxuICAgICAgICBzdXNwZWN0SVBcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgc3VzcGVjdE5hbWUgfHxcbiAgICBzdXNwZWN0QWRkcmVzcyB8fFxuICAgIChzdXNwZWN0TGFuZ3VhZ2UgJiYgc3VzcGVjdExhbmd1YWdlLmxlbmd0aCkgfHxcbiAgICBzdXNwZWN0UGhvbmUgfHxcbiAgICBzdXNwZWN0RW1haWwgfHxcbiAgICBzdXNwZWN0V2Vic2l0ZSB8fFxuICAgIHN1c3BlY3RJUFxuICApIHtcbiAgICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gICAgfVxuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZVxuICAgICAgLmZpbHRlcihzID0+IHMgIT09ICdPdGhlciBsYW5ndWFnZScpXG4gICAgICAuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+U2NhbW1lciBkZXRhaWxzPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtzdXNwZWN0TmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI6IHtzdXNwZWN0UGhvbmV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczoge3N1c3BlY3RFbWFpbH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5XZWJzaXRlOiB7c3VzcGVjdFdlYnNpdGV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TWFpbGluZyBhZGRyZXNzOiB7c3VzcGVjdEFkZHJlc3N9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczoge3N1c3BlY3RJUH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5MYW5ndWFnZSBvZiBjb3JyZXNwb25kZW5jZToge3N1c3BlY3RMYW5ndWFnZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmNvbnN0IGZpbGVVcGxvYWRTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3QgeyBmaWxlcyB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIGZpbGVzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gZmlsZXMuam9pbignLCAnKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+RXZpZGVuY2U8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RmlsZXM6IHtmaWxlTGlzdH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5jb25zdCBjb250YWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcklzVGhlVmljdGltLFxuICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgdXNlcklzVGhlVmljdGltXG4gICAgICAgIGNvbnRhY3RJbmZvTmFtZVxuICAgICAgICBjb250YWN0SW5mb0VtYWlsXG4gICAgICAgIGNvbnRhY3RJbmZvUGhvbmVcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgdXNlcklzVGhlVmljdGltIHx8XG4gICAgY29udGFjdEluZm9OYW1lIHx8XG4gICAgY29udGFjdEluZm9FbWFpbCB8fFxuICAgIGNvbnRhY3RJbmZvUGhvbmVcbiAgKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5JZiB0aGUgcG9saWNlIGhhdmUgYW55IHF1ZXN0aW9uczwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Zb3UgYXJlIHRoZSB2aWN0aW06IHt1c2VySXNUaGVWaWN0aW19PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TmFtZToge2NvbnRhY3RJbmZvTmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5FbWFpbDoge2NvbnRhY3RJbmZvRW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmU6IHtjb250YWN0SW5mb1Bob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblBhZ2UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxDb250YWluZXIgY3NzPXt0b3BCYXJDb250YWluZXJ9PlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPkNvbmZpcm0gcmVwb3J0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge3NjYW1FdmVudFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7bG9zdE1vbmV5U3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgIHtzdXNwZWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7ZmlsZVVwbG9hZFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7Y29udGFjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwNXB4XCJcbiAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy90aGFua3lvdScpfT5cbiAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_14__["Steps"], {
    activeStep: 4
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "Confirm report information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_13__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, scamEventSummary(client), lostMoneySummary(client), suspectInfoSummary(client), fileUploadSummary(client), contactInfoSummary(client));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxWidth: "305px",
    marginTop: [3, null, 4],
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    type: "submit",
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_5__["navigate"])('/thankyou');
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "Submit report"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxWidth: "300px",
    marginTop: [2, null, 3],
    css: _ref2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_12__["ButtonLink"], {
    type: "button",
    color: "black"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "Cancel report"
  }))));
};

/***/ })

};
//# sourceMappingURL=main.defb9e81dcd42bca77d6.hot-update.js.map