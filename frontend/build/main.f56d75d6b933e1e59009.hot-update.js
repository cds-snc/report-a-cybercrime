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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAgIG90aGVyTWV0aG9kT2ZDb250YWN0XG4gICAgICAgIHdoZW5XZXJlWW91Q29udGFjdGVkXG4gICAgICAgIHNjYW1EZXRhaWxzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIChob3dXZXJlWW91Q29udGFjdGVkICYmIGhvd1dlcmVZb3VDb250YWN0ZWQubGVuZ3RoKSB8fFxuICAgIHdoZW5XZXJlWW91Q29udGFjdGVkIHx8XG4gICAgc2NhbURldGFpbHNcbiAgKSB7XG4gICAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gICAgfVxuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICA8VHJhbnM+U2NhbSBldmVudDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Db250YWN0ZWQgYnk6IHtob3dXZXJlWW91Q29udGFjdGVkfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkV2ZW50IE9jY3VyZWQgb246IHt3aGVuV2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EZXRhaWxzOiB7c2NhbURldGFpbHN9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBsb3N0TW9uZXlTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBsb3N0QW1vdW50LFxuICAgIGxvc3RDdXJyZW5jeSxcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCxcbiAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgbG9zdEFtb3VudFxuICAgICAgICBsb3N0Q3VycmVuY3lcbiAgICAgICAgbG9zdE1ldGhvZHNPZlBheW1lbnRcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIGxvc3RBbW91bnQgfHxcbiAgICBsb3N0Q3VycmVuY3kgfHxcbiAgICAobG9zdE1ldGhvZHNPZlBheW1lbnQgJiYgbG9zdE1ldGhvZHNPZlBheW1lbnQubGVuZ3RoKVxuICApIHtcbiAgICBpZiAobG9zdE90aGVyTWV0aG9kT2ZQYXltZW50KSB7XG4gICAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmNvbmNhdChcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50LFxuICAgICAgKVxuICAgIH1cbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50XG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkFtb3VudDoge2xvc3RBbW91bnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k6IHtsb3N0Q3VycmVuY3l9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TWV0aG9kOiB7bG9zdE1ldGhvZHNPZlBheW1lbnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBzdXNwZWN0TmFtZVxuICAgICAgICBzdXNwZWN0QWRkcmVzc1xuICAgICAgICBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgc3VzcGVjdFBob25lXG4gICAgICAgIHN1c3BlY3RFbWFpbFxuICAgICAgICBzdXNwZWN0V2Vic2l0ZVxuICAgICAgICBzdXNwZWN0SVBcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgc3VzcGVjdE5hbWUgfHxcbiAgICBzdXNwZWN0QWRkcmVzcyB8fFxuICAgIChzdXNwZWN0TGFuZ3VhZ2UgJiYgc3VzcGVjdExhbmd1YWdlLmxlbmd0aCkgfHxcbiAgICBzdXNwZWN0UGhvbmUgfHxcbiAgICBzdXNwZWN0RW1haWwgfHxcbiAgICBzdXNwZWN0V2Vic2l0ZSB8fFxuICAgIHN1c3BlY3RJUFxuICApIHtcbiAgICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gICAgfVxuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKS5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5TdXNwZWN0IEluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtzdXNwZWN0TmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5BZGRyZXNzOiB7c3VzcGVjdEFkZHJlc3N9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2U6IHtzdXNwZWN0TGFuZ3VhZ2V9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyOiB7c3VzcGVjdFBob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M6IHtzdXNwZWN0RW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+V2Vic2l0ZToge3N1c3BlY3RXZWJzaXRlfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M6IHtzdXNwZWN0SVB9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IHsgZmlsZXMgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBmaWxlc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPkV2aWRlbmNlPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkZpbGVzOiB7ZmlsZUxpc3R9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIHVzZXJJc1RoZVZpY3RpbVxuICAgICAgICBjb250YWN0SW5mb05hbWVcbiAgICAgICAgY29udGFjdEluZm9FbWFpbFxuICAgICAgICBjb250YWN0SW5mb1Bob25lXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHVzZXJJc1RoZVZpY3RpbSB8fFxuICAgIGNvbnRhY3RJbmZvTmFtZSB8fFxuICAgIGNvbnRhY3RJbmZvRW1haWwgfHxcbiAgICBjb250YWN0SW5mb1Bob25lXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+SWYgdGhlIHBvbGljZSBoYXZlIGFueSBxdWVzdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+WW91IGFyZSB0aGUgdmljdGltOiB7dXNlcklzVGhlVmljdGltfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtjb250YWN0SW5mb05hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWw6IHtjb250YWN0SW5mb0VtYWlsfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBob25lOiB7Y29udGFjdEluZm9QaG9uZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+V291bGQgeW91IGxpa2UgdG8gc3VibWl0IHRoaXMgcmVwb3J0PzwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDVweFwiXG4gICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvdGhhbmt5b3UnKX0+XG4gICAgICAgIDxUcmFucz5TdWJtaXQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

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
      id: "Scam event"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Contacted by: {howWereYouContacted}",
      values: {
        howWereYouContacted: howWereYouContacted
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Event Occured on: {whenWereYouContacted}",
      values: {
        whenWereYouContacted: whenWereYouContacted
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Details: {scamDetails}",
      values: {
        scamDetails: scamDetails
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
      id: "Method: {lostMethodsOfPayment}",
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
      return s !== 'other';
    }).join(', ');
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Suspect Information"
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Name: {suspectName}",
      values: {
        suspectName: suspectName
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Address: {suspectAddress}",
      values: {
        suspectAddress: suspectAddress
      }
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
      id: "Language: {suspectLanguage}",
      values: {
        suspectLanguage: suspectLanguage
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
      id: "IP address: {suspectIP}",
      values: {
        suspectIP: suspectIP
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVNjIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAgIG90aGVyTWV0aG9kT2ZDb250YWN0XG4gICAgICAgIHdoZW5XZXJlWW91Q29udGFjdGVkXG4gICAgICAgIHNjYW1EZXRhaWxzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIChob3dXZXJlWW91Q29udGFjdGVkICYmIGhvd1dlcmVZb3VDb250YWN0ZWQubGVuZ3RoKSB8fFxuICAgIHdoZW5XZXJlWW91Q29udGFjdGVkIHx8XG4gICAgc2NhbURldGFpbHNcbiAgKSB7XG4gICAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gICAgfVxuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICA8VHJhbnM+U2NhbSBldmVudDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Db250YWN0ZWQgYnk6IHtob3dXZXJlWW91Q29udGFjdGVkfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkV2ZW50IE9jY3VyZWQgb246IHt3aGVuV2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EZXRhaWxzOiB7c2NhbURldGFpbHN9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBsb3N0TW9uZXlTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBsb3N0QW1vdW50LFxuICAgIGxvc3RDdXJyZW5jeSxcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCxcbiAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgbG9zdEFtb3VudFxuICAgICAgICBsb3N0Q3VycmVuY3lcbiAgICAgICAgbG9zdE1ldGhvZHNPZlBheW1lbnRcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIGxvc3RBbW91bnQgfHxcbiAgICBsb3N0Q3VycmVuY3kgfHxcbiAgICAobG9zdE1ldGhvZHNPZlBheW1lbnQgJiYgbG9zdE1ldGhvZHNPZlBheW1lbnQubGVuZ3RoKVxuICApIHtcbiAgICBpZiAobG9zdE90aGVyTWV0aG9kT2ZQYXltZW50KSB7XG4gICAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmNvbmNhdChcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50LFxuICAgICAgKVxuICAgIH1cbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50XG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkFtb3VudDoge2xvc3RBbW91bnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k6IHtsb3N0Q3VycmVuY3l9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TWV0aG9kOiB7bG9zdE1ldGhvZHNPZlBheW1lbnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBzdXNwZWN0TmFtZVxuICAgICAgICBzdXNwZWN0QWRkcmVzc1xuICAgICAgICBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgc3VzcGVjdFBob25lXG4gICAgICAgIHN1c3BlY3RFbWFpbFxuICAgICAgICBzdXNwZWN0V2Vic2l0ZVxuICAgICAgICBzdXNwZWN0SVBcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgc3VzcGVjdE5hbWUgfHxcbiAgICBzdXNwZWN0QWRkcmVzcyB8fFxuICAgIChzdXNwZWN0TGFuZ3VhZ2UgJiYgc3VzcGVjdExhbmd1YWdlLmxlbmd0aCkgfHxcbiAgICBzdXNwZWN0UGhvbmUgfHxcbiAgICBzdXNwZWN0RW1haWwgfHxcbiAgICBzdXNwZWN0V2Vic2l0ZSB8fFxuICAgIHN1c3BlY3RJUFxuICApIHtcbiAgICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gICAgfVxuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKS5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5TdXNwZWN0IEluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtzdXNwZWN0TmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5BZGRyZXNzOiB7c3VzcGVjdEFkZHJlc3N9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2U6IHtzdXNwZWN0TGFuZ3VhZ2V9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyOiB7c3VzcGVjdFBob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M6IHtzdXNwZWN0RW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+V2Vic2l0ZToge3N1c3BlY3RXZWJzaXRlfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M6IHtzdXNwZWN0SVB9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IHsgZmlsZXMgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBmaWxlc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPkV2aWRlbmNlPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkZpbGVzOiB7ZmlsZUxpc3R9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIHVzZXJJc1RoZVZpY3RpbVxuICAgICAgICBjb250YWN0SW5mb05hbWVcbiAgICAgICAgY29udGFjdEluZm9FbWFpbFxuICAgICAgICBjb250YWN0SW5mb1Bob25lXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHVzZXJJc1RoZVZpY3RpbSB8fFxuICAgIGNvbnRhY3RJbmZvTmFtZSB8fFxuICAgIGNvbnRhY3RJbmZvRW1haWwgfHxcbiAgICBjb250YWN0SW5mb1Bob25lXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+SWYgdGhlIHBvbGljZSBoYXZlIGFueSBxdWVzdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+WW91IGFyZSB0aGUgdmljdGltOiB7dXNlcklzVGhlVmljdGltfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtjb250YWN0SW5mb05hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWw6IHtjb250YWN0SW5mb0VtYWlsfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBob25lOiB7Y29udGFjdEluZm9QaG9uZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+V291bGQgeW91IGxpa2UgdG8gc3VibWl0IHRoaXMgcmVwb3J0PzwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDVweFwiXG4gICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvdGhhbmt5b3UnKX0+XG4gICAgICAgIDxUcmFucz5TdWJtaXQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "lod0fm-ConfirmationPage",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ConfirmationPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcVRjIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0NvbmZpcm1hdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAgIG90aGVyTWV0aG9kT2ZDb250YWN0XG4gICAgICAgIHdoZW5XZXJlWW91Q29udGFjdGVkXG4gICAgICAgIHNjYW1EZXRhaWxzXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIChob3dXZXJlWW91Q29udGFjdGVkICYmIGhvd1dlcmVZb3VDb250YWN0ZWQubGVuZ3RoKSB8fFxuICAgIHdoZW5XZXJlWW91Q29udGFjdGVkIHx8XG4gICAgc2NhbURldGFpbHNcbiAgKSB7XG4gICAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gICAgfVxuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICA8VHJhbnM+U2NhbSBldmVudDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5Db250YWN0ZWQgYnk6IHtob3dXZXJlWW91Q29udGFjdGVkfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkV2ZW50IE9jY3VyZWQgb246IHt3aGVuV2VyZVlvdUNvbnRhY3RlZH08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5EZXRhaWxzOiB7c2NhbURldGFpbHN9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBsb3N0TW9uZXlTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBsb3N0QW1vdW50LFxuICAgIGxvc3RDdXJyZW5jeSxcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCxcbiAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gIH0gPSBjbGllbnQucmVhZFF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgcmVhZENhY2hlIHtcbiAgICAgICAgbG9zdEFtb3VudFxuICAgICAgICBsb3N0Q3VycmVuY3lcbiAgICAgICAgbG9zdE1ldGhvZHNPZlBheW1lbnRcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIGxvc3RBbW91bnQgfHxcbiAgICBsb3N0Q3VycmVuY3kgfHxcbiAgICAobG9zdE1ldGhvZHNPZlBheW1lbnQgJiYgbG9zdE1ldGhvZHNPZlBheW1lbnQubGVuZ3RoKVxuICApIHtcbiAgICBpZiAobG9zdE90aGVyTWV0aG9kT2ZQYXltZW50KSB7XG4gICAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmNvbmNhdChcbiAgICAgICAgbG9zdE90aGVyTWV0aG9kT2ZQYXltZW50LFxuICAgICAgKVxuICAgIH1cbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50XG4gICAgICAuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICAgIC5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkFtb3VudDoge2xvc3RBbW91bnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k6IHtsb3N0Q3VycmVuY3l9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TWV0aG9kOiB7bG9zdE1ldGhvZHNPZlBheW1lbnR9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBzdXNwZWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHN1c3BlY3ROYW1lLFxuICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgIHN1c3BlY3RMYW5ndWFnZSxcbiAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICBzdXNwZWN0UGhvbmUsXG4gICAgc3VzcGVjdEVtYWlsLFxuICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgIHN1c3BlY3RJUCxcbiAgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBzdXNwZWN0TmFtZVxuICAgICAgICBzdXNwZWN0QWRkcmVzc1xuICAgICAgICBzdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2VcbiAgICAgICAgc3VzcGVjdFBob25lXG4gICAgICAgIHN1c3BlY3RFbWFpbFxuICAgICAgICBzdXNwZWN0V2Vic2l0ZVxuICAgICAgICBzdXNwZWN0SVBcbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICBpZiAoXG4gICAgc3VzcGVjdE5hbWUgfHxcbiAgICBzdXNwZWN0QWRkcmVzcyB8fFxuICAgIChzdXNwZWN0TGFuZ3VhZ2UgJiYgc3VzcGVjdExhbmd1YWdlLmxlbmd0aCkgfHxcbiAgICBzdXNwZWN0UGhvbmUgfHxcbiAgICBzdXNwZWN0RW1haWwgfHxcbiAgICBzdXNwZWN0V2Vic2l0ZSB8fFxuICAgIHN1c3BlY3RJUFxuICApIHtcbiAgICBpZiAob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpIHtcbiAgICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gICAgfVxuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKS5qb2luKCcsICcpXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEgyXG4gICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUcmFucz5TdXNwZWN0IEluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtzdXNwZWN0TmFtZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIDxUcmFucz5BZGRyZXNzOiB7c3VzcGVjdEFkZHJlc3N9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2U6IHtzdXNwZWN0TGFuZ3VhZ2V9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyOiB7c3VzcGVjdFBob25lfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M6IHtzdXNwZWN0RW1haWx9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+V2Vic2l0ZToge3N1c3BlY3RXZWJzaXRlfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPklQIGFkZHJlc3M6IHtzdXNwZWN0SVB9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IHsgZmlsZXMgfSA9IGNsaWVudC5yZWFkUXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSByZWFkQ2FjaGUge1xuICAgICAgICBmaWxlc1xuICAgICAgfVxuICAgIGAsXG4gIH0pXG4gIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SDJcbiAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICA+XG4gICAgICAgICAgPFRyYW5zPkV2aWRlbmNlPC9UcmFucz5cbiAgICAgICAgPC9IMj5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPkZpbGVzOiB7ZmlsZUxpc3R9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY2xpZW50LnJlYWRRdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IHJlYWRDYWNoZSB7XG4gICAgICAgIHVzZXJJc1RoZVZpY3RpbVxuICAgICAgICBjb250YWN0SW5mb05hbWVcbiAgICAgICAgY29udGFjdEluZm9FbWFpbFxuICAgICAgICBjb250YWN0SW5mb1Bob25lXG4gICAgICB9XG4gICAgYCxcbiAgfSlcbiAgaWYgKFxuICAgIHVzZXJJc1RoZVZpY3RpbSB8fFxuICAgIGNvbnRhY3RJbmZvTmFtZSB8fFxuICAgIGNvbnRhY3RJbmZvRW1haWwgfHxcbiAgICBjb250YWN0SW5mb1Bob25lXG4gICkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIMlxuICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgID5cbiAgICAgICAgICA8VHJhbnM+SWYgdGhlIHBvbGljZSBoYXZlIGFueSBxdWVzdGlvbnM8L1RyYW5zPlxuICAgICAgICA8L0gyPlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+WW91IGFyZSB0aGUgdmljdGltOiB7dXNlcklzVGhlVmljdGltfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPk5hbWU6IHtjb250YWN0SW5mb05hbWV9PC9UcmFucz5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8VHJhbnM+RW1haWw6IHtjb250YWN0SW5mb0VtYWlsfTwvVHJhbnM+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPFRyYW5zPlBob25lOiB7Y29udGFjdEluZm9QaG9uZX08L1RyYW5zPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8SDE+XG4gICAgICA8VHJhbnM+V291bGQgeW91IGxpa2UgdG8gc3VibWl0IHRoaXMgcmVwb3J0PzwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICB7c3VzcGVjdEluZm9TdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCIzMDVweFwiXG4gICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBgfVxuICAgID5cbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvdGhhbmt5b3UnKX0+XG4gICAgICAgIDxUcmFucz5TdWJtaXQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Db250YWluZXI+XG5cbiAgICA8Q29udGFpbmVyXG4gICAgICBtYXhXaWR0aD1cIjMwMHB4XCJcbiAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGB9XG4gICAgPlxuICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_8__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "Would you like to submit this report?"
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
    id: "Submit"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxWidth: "300px",
    marginTop: [2, null, 3],
    css: _ref2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_12__["ButtonLink"], {
    type: "button",
    color: "black"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "Cancel Report"
  }))));
};

/***/ }),

/***/ "./src/FileUploadPage.js":
/*!*******************************!*\
  !*** ./src/FileUploadPage.js ***!
  \*******************************/
/*! exports provided: FileUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadPage", function() { return FileUploadPage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");









/** @jsx jsx */













var _ref =  false ? undefined : {
  name: "729p16-FileUploadPage",
  styles: "display:flex;flex-direction:row;justify-content:center;label:FileUploadPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW10sXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZSgnL2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19IG1hcmdpbkJvdHRvbT1cIjcwcHhcIj5cbiAgICAgICAgICA8VHJhbnM+VXBsb2FkIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgU3VwcG9ydGluZyBmaWxlcyBjb3VsZCBpbmNsdWRlIGNvcGllcyBvZiBlbWFpbHMsIHRleHQgbWVzc2FnZXMsIGFuZFxuICAgICAgICAgICAgcmVjZWlwdHMuIEFueSBkb2N1bWVudGF0aW9uIGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlIGZvciBwb2xpY2UuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0gbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgIHtmaWxlcy5sZW5ndGh9IDxUcmFucz5maWxlcyBhdHRhY2hlZDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0PntmLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzcsIG51bGwsIDhdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRBbmROYXZpZ2F0ZShjbGllbnQpfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "1kypw5d-FileUploadPage",
  styles: "display:flex;flex-direction:row;justify-content:space-between;label:FileUploadPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Gc0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW10sXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZSgnL2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19IG1hcmdpbkJvdHRvbT1cIjcwcHhcIj5cbiAgICAgICAgICA8VHJhbnM+VXBsb2FkIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgU3VwcG9ydGluZyBmaWxlcyBjb3VsZCBpbmNsdWRlIGNvcGllcyBvZiBlbWFpbHMsIHRleHQgbWVzc2FnZXMsIGFuZFxuICAgICAgICAgICAgcmVjZWlwdHMuIEFueSBkb2N1bWVudGF0aW9uIGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlIGZvciBwb2xpY2UuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0gbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgIHtmaWxlcy5sZW5ndGh9IDxUcmFucz5maWxlcyBhdHRhY2hlZDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0PntmLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzcsIG51bGwsIDhdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRBbmROYXZpZ2F0ZShjbGllbnQpfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */"
};

var _ref3 =  false ? undefined : {
  name: "1lfaemg-FileUploadPage",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:FileUploadPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHd0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW10sXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZSgnL2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19IG1hcmdpbkJvdHRvbT1cIjcwcHhcIj5cbiAgICAgICAgICA8VHJhbnM+VXBsb2FkIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgU3VwcG9ydGluZyBmaWxlcyBjb3VsZCBpbmNsdWRlIGNvcGllcyBvZiBlbWFpbHMsIHRleHQgbWVzc2FnZXMsIGFuZFxuICAgICAgICAgICAgcmVjZWlwdHMuIEFueSBkb2N1bWVudGF0aW9uIGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlIGZvciBwb2xpY2UuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0gbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgIHtmaWxlcy5sZW5ndGh9IDxUcmFucz5maWxlcyBhdHRhY2hlZDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0PntmLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzcsIG51bGwsIDhdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRBbmROYXZpZ2F0ZShjbGllbnQpfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */"
};

var _ref4 =  false ? undefined : {
  name: "1lfaemg-FileUploadPage",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:FileUploadPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJId0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5leHBvcnQgY2xhc3MgRmlsZVVwbG9hZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogW10sXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZSgnL2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19IG1hcmdpbkJvdHRvbT1cIjcwcHhcIj5cbiAgICAgICAgICA8VHJhbnM+VXBsb2FkIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjE1cHhcIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMTVweFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkF0dGFjaCBmaWxlPC9UcmFucz5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgU3VwcG9ydGluZyBmaWxlcyBjb3VsZCBpbmNsdWRlIGNvcGllcyBvZiBlbWFpbHMsIHRleHQgbWVzc2FnZXMsIGFuZFxuICAgICAgICAgICAgcmVjZWlwdHMuIEFueSBkb2N1bWVudGF0aW9uIGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlIGZvciBwb2xpY2UuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0gbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgIHtmaWxlcy5sZW5ndGh9IDxUcmFucz5maWxlcyBhdHRhY2hlZDwvVHJhbnM+XG4gICAgICAgIDwvSDI+XG5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7ZmlsZXMubWFwKChmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0PntmLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzcsIG51bGwsIDhdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRBbmROYXZpZ2F0ZShjbGllbnQpfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */"
};

var FileUploadPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileUploadPage, _Component);

  function FileUploadPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileUploadPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileUploadPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {
      _this.setState({
        files: _this.state.files.concat(e.target.files[0])
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "removeFile", function (index) {
      var newFiles = _this.state.files;
      newFiles.splice(index, 1);

      _this.setState({
        files: newFiles
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "submitAndNavigate", function (client) {
      var files = _this.state.files.map(function (file) {
        return file.name;
      });

      var data = {
        files: files
      };
      client.writeData({
        data: data
      }); // TODO: actually upload files

      Object(_reach_router__WEBPACK_IMPORTED_MODULE_9__["navigate"])('/contactinfoquestion');
    });

    _this.state = {
      files: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileUploadPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var files = this.state.files;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_18__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_14__["H1"], {
        fontSize: [5, null, 6],
        marginBottom: "70px"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
        id: "Upload supporting files"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        width: "300px",
        marginBottom: [2, null, 3],
        css: _ref
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUpload"], {
        onChange: this.onChange,
        paddingLeft: "15px",
        paddingRight: "15px"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
        id: "Attach file"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_19__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
        id: "Supporting files could include copies of emails, text messages, and receipts. Any documentation could serve as evidence for police."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_14__["H2"], {
        fontSize: [3, null, 5],
        marginTop: [5, null, 6]
      }, files.length, " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
        id: "files attached"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], null, files.map(function (f, index) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], {
          width: "300px",
          marginBottom: [2, null, 3],
          key: index,
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_13__["Text"], null, f.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          "float": "right",
          marginTop: 0,
          backgroundColor: "crimson",
          type: "button",
          onClick: function onClick() {
            return _this2.removeFile(index);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
          id: "Remove"
        })));
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], {
          width: "300px",
          marginTop: [7, null, 8],
          css: _ref3
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          onClick: function onClick() {
            return _this2.submitAndNavigate(client);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_12__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref4
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_16__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_7__["Trans"], {
          id: "Cancel Report"
        }))));
      }));
    }
  }]);

  return FileUploadPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/***/ }),

/***/ "./src/FilesToUpload.js":
/*!******************************!*\
  !*** ./src/FilesToUpload.js ***!
  \******************************/
/*! exports provided: FilesToUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesToUpload", function() { return FilesToUpload; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");



/**@jsx jsx */







var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1c5w2ra0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVzVG9VcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVzVG9VcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmNvbnN0IGJvdHRvbUJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRmlsZXNUb1VwbG9hZCA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlVwbG9hZCBzdXBwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgRG8geW91IGhhdmUgYW55IGRvY3VtZW50cywgaW1hZ2VzLCBzY3JlZW5zaG90cywgb3IgcmVjZWlwdHM/XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyIGNzcz17Ym90dG9tQmFyQ29udGFpbmVyfT5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL3VwbG9hZGZpbGVzXCI+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvY29udGFjdGluZm9xdWVzdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var bottomBarContainer =  false ? undefined : {
  name: "1sotudj-bottomBarContainer",
  styles: "display:flex;width:50%;flex-direction:row;justify-content:space-between;margin-bottom:20px;label:bottomBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVzVG9VcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZThCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0ZpbGVzVG9VcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmNvbnN0IGJvdHRvbUJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRmlsZXNUb1VwbG9hZCA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlVwbG9hZCBzdXBwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgRG8geW91IGhhdmUgYW55IGRvY3VtZW50cywgaW1hZ2VzLCBzY3JlZW5zaG90cywgb3IgcmVjZWlwdHM/XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8Q29udGFpbmVyIGNzcz17Ym90dG9tQmFyQ29udGFpbmVyfT5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL3VwbG9hZGZpbGVzXCI+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgPEJ1dHRvbkxpbmsgbWI9e1szLCBudWxsLCA1XX0gdG89XCIvY29udGFjdGluZm9xdWVzdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};
var FilesToUpload = function FilesToUpload() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Upload suppporting files"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Do you have any documents, images, screenshots, or receipts?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    css: bottomBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/uploadfiles"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Yes"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/contactinfoquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "No"
  }))));
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_phase_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/phase-banner */ "./src/components/phase-banner/index.js");
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageNotFound */ "./src/PageNotFound.js");
/* harmony import */ var _Urgency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Urgency */ "./src/Urgency.js");
/* harmony import */ var _FileUploadPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FileUploadPage */ "./src/FileUploadPage.js");
/* harmony import */ var _amountOfInfoPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./amountOfInfoPage */ "./src/amountOfInfoPage.js");
/* harmony import */ var _HowToTellPolice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HowToTellPolice */ "./src/HowToTellPolice.js");
/* harmony import */ var _identityPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./identityPage */ "./src/identityPage.js");
/* harmony import */ var _Option1Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Option1Page */ "./src/Option1Page.js");
/* harmony import */ var _Option2Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Option2Page */ "./src/Option2Page.js");
/* harmony import */ var _Option3Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Option3Page */ "./src/Option3Page.js");
/* harmony import */ var _Suspectinfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Suspectinfo */ "./src/Suspectinfo.js");
/* harmony import */ var _DemoPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DemoPage */ "./src/DemoPage.js");
/* harmony import */ var _ScamInfoPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ScamInfoPage */ "./src/ScamInfoPage.js");
/* harmony import */ var _MoneyLostPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MoneyLostPage */ "./src/MoneyLostPage.js");
/* harmony import */ var _ConfirmationPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ConfirmationPage */ "./src/ConfirmationPage.js");
/* harmony import */ var _SuspectInfoPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SuspectInfoPage */ "./src/SuspectInfoPage.js");
/* harmony import */ var _ContactInfoPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ContactInfoPage */ "./src/ContactInfoPage.js");
/* harmony import */ var _LoseMoney__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./LoseMoney */ "./src/LoseMoney.js");
/* harmony import */ var _ThankYou__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ThankYou */ "./src/ThankYou.js");
/* harmony import */ var _Willbecontacted__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Willbecontacted */ "./src/Willbecontacted.js");
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LandingPage */ "./src/LandingPage.js");
/* harmony import */ var _FilesToUpload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./FilesToUpload */ "./src/FilesToUpload.js");



























var Root =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s00",
  label: "Root"
})( false ? undefined : {
  name: "b35c62",
  styles: "margin:20pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkIwQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgUGhhc2VCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcGhhc2UtYmFubmVyJ1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBVcmdlbmN5IH0gZnJvbSAnLi9VcmdlbmN5J1xuaW1wb3J0IHsgRmlsZVVwbG9hZFBhZ2UgfSBmcm9tICcuL0ZpbGVVcGxvYWRQYWdlJ1xuaW1wb3J0IHsgQW1vdW50T2ZJbmZvUGFnZSB9IGZyb20gJy4vYW1vdW50T2ZJbmZvUGFnZSdcbmltcG9ydCB7IEhvd1RvVGVsbFBvbGljZSB9IGZyb20gJy4vSG93VG9UZWxsUG9saWNlJ1xuaW1wb3J0IHsgSWRlbnRpdHlQYWdlIH0gZnJvbSAnLi9pZGVudGl0eVBhZ2UnXG5pbXBvcnQgeyBPcHRpb24xUGFnZSB9IGZyb20gJy4vT3B0aW9uMVBhZ2UnXG5pbXBvcnQgeyBPcHRpb24yUGFnZSB9IGZyb20gJy4vT3B0aW9uMlBhZ2UnXG5pbXBvcnQgeyBPcHRpb24zUGFnZSB9IGZyb20gJy4vT3B0aW9uM1BhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0aW5mbyB9IGZyb20gJy4vU3VzcGVjdGluZm8nXG5pbXBvcnQgeyBEZW1vUGFnZSB9IGZyb20gJy4vRGVtb1BhZ2UnXG5pbXBvcnQgeyBTY2FtSW5mb1BhZ2UgfSBmcm9tICcuL1NjYW1JbmZvUGFnZSdcbmltcG9ydCB7IE1vbmV5TG9zdFBhZ2UgfSBmcm9tICcuL01vbmV5TG9zdFBhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgU3VzcGVjdEluZm9QYWdlIH0gZnJvbSAnLi9TdXNwZWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBDb250YWN0SW5mb1BhZ2UgfSBmcm9tICcuL0NvbnRhY3RJbmZvUGFnZSdcbmltcG9ydCB7IExvc2VNb25leSB9IGZyb20gJy4vTG9zZU1vbmV5J1xuaW1wb3J0IHsgVGhhbmtZb3UgfSBmcm9tICcuL1RoYW5rWW91J1xuaW1wb3J0IHsgV2lsbGJlY29udGFjdGVkIH0gZnJvbSAnLi9XaWxsYmVjb250YWN0ZWQnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSB9IGZyb20gJy4vTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlc1RvVXBsb2FkIH0gZnJvbSAnLi9GaWxlc1RvVXBsb2FkJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luOiAyMHB0O1xuYFxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4gKFxuICA8Um9vdD5cbiAgICA8UGhhc2VCYW5uZXIgcGhhc2U9ezxUcmFucz5BTFBIQTwvVHJhbnM+fSBwaGFzZUNvbG9yPVwicHVycGxlXCI+XG4gICAgICA8VHJhbnM+VGhpcyBzaXRlIHdpbGwgY2hhbmdlIGFzIHdlIHRlc3QgaWRlYXMuPC9UcmFucz5cbiAgICA8L1BoYXNlQmFubmVyPlxuICAgIDxTY3JlZW4+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8UGFnZU5vdEZvdW5kIGRlZmF1bHQgLz5cbiAgICAgICAgPERlbW9QYWdlIHBhdGg9XCIvZGVtb1wiIC8+XG4gICAgICAgIDxPcHRpb24xUGFnZSBwYXRoPVwiL29wdGlvbjFcIiAvPlxuICAgICAgICA8T3B0aW9uMlBhZ2UgcGF0aD1cIi9vcHRpb24yXCIgLz5cbiAgICAgICAgPE9wdGlvbjNQYWdlIHBhdGg9XCIvb3B0aW9uM1wiIC8+XG4gICAgICAgIDxIb3dUb1RlbGxQb2xpY2UgcGF0aD1cIi9ob3d0b3RlbGxcIiAvPlxuICAgICAgICA8VXJnZW5jeSBwYXRoPVwiL3VyZ2VuY3lcIiAvPlxuICAgICAgICA8QW1vdW50T2ZJbmZvUGFnZSBwYXRoPVwiL2Ftb3VudG9maW5mb1wiIC8+XG4gICAgICAgIDxJZGVudGl0eVBhZ2UgcGF0aD1cIi9pZGVudGl0eVwiIC8+XG4gICAgICAgIDxMYW5kaW5nUGFnZSBwYXRoPVwiL1wiIC8+XG4gICAgICAgIDxTY2FtSW5mb1BhZ2UgcGF0aD1cIi9zY2FtaW5mb1wiIC8+XG4gICAgICAgIDxTdXNwZWN0aW5mbyBwYXRoPVwiL3N1c3BlY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICA8U3VzcGVjdEluZm9QYWdlIHBhdGg9XCIvc3VzcGVjdGluZm9cIiAvPlxuICAgICAgICA8TG9zZU1vbmV5IHBhdGg9XCIvbW9uZXlsb3N0cXVlc3Rpb25cIiAvPlxuICAgICAgICA8TW9uZXlMb3N0UGFnZSBwYXRoPVwiL21vbmV5bG9zdFwiIC8+XG4gICAgICAgIDxGaWxlc1RvVXBsb2FkIHBhdGg9XCIvdXBsb2FkZmlsZXNxdWVzdGlvblwiIC8+XG4gICAgICAgIDxGaWxlVXBsb2FkUGFnZSBwYXRoPVwiL3VwbG9hZGZpbGVzXCIgLz5cbiAgICAgICAgPFdpbGxiZWNvbnRhY3RlZCBwYXRoPVwiL2NvbnRhY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICA8Q29udGFjdEluZm9QYWdlIHBhdGg9XCIvY29udGFjdGluZm9cIiAvPlxuICAgICAgICA8Q29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgIDxUaGFua1lvdSBwYXRoPVwiL3RoYW5reW91XCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Screen =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s01",
  label: "Screen"
})( false ? undefined : {
  name: "1xa1wmv",
  styles: "margin-top:30pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEI0QiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgUGhhc2VCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcGhhc2UtYmFubmVyJ1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBVcmdlbmN5IH0gZnJvbSAnLi9VcmdlbmN5J1xuaW1wb3J0IHsgRmlsZVVwbG9hZFBhZ2UgfSBmcm9tICcuL0ZpbGVVcGxvYWRQYWdlJ1xuaW1wb3J0IHsgQW1vdW50T2ZJbmZvUGFnZSB9IGZyb20gJy4vYW1vdW50T2ZJbmZvUGFnZSdcbmltcG9ydCB7IEhvd1RvVGVsbFBvbGljZSB9IGZyb20gJy4vSG93VG9UZWxsUG9saWNlJ1xuaW1wb3J0IHsgSWRlbnRpdHlQYWdlIH0gZnJvbSAnLi9pZGVudGl0eVBhZ2UnXG5pbXBvcnQgeyBPcHRpb24xUGFnZSB9IGZyb20gJy4vT3B0aW9uMVBhZ2UnXG5pbXBvcnQgeyBPcHRpb24yUGFnZSB9IGZyb20gJy4vT3B0aW9uMlBhZ2UnXG5pbXBvcnQgeyBPcHRpb24zUGFnZSB9IGZyb20gJy4vT3B0aW9uM1BhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0aW5mbyB9IGZyb20gJy4vU3VzcGVjdGluZm8nXG5pbXBvcnQgeyBEZW1vUGFnZSB9IGZyb20gJy4vRGVtb1BhZ2UnXG5pbXBvcnQgeyBTY2FtSW5mb1BhZ2UgfSBmcm9tICcuL1NjYW1JbmZvUGFnZSdcbmltcG9ydCB7IE1vbmV5TG9zdFBhZ2UgfSBmcm9tICcuL01vbmV5TG9zdFBhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgU3VzcGVjdEluZm9QYWdlIH0gZnJvbSAnLi9TdXNwZWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBDb250YWN0SW5mb1BhZ2UgfSBmcm9tICcuL0NvbnRhY3RJbmZvUGFnZSdcbmltcG9ydCB7IExvc2VNb25leSB9IGZyb20gJy4vTG9zZU1vbmV5J1xuaW1wb3J0IHsgVGhhbmtZb3UgfSBmcm9tICcuL1RoYW5rWW91J1xuaW1wb3J0IHsgV2lsbGJlY29udGFjdGVkIH0gZnJvbSAnLi9XaWxsYmVjb250YWN0ZWQnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSB9IGZyb20gJy4vTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlc1RvVXBsb2FkIH0gZnJvbSAnLi9GaWxlc1RvVXBsb2FkJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luOiAyMHB0O1xuYFxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMzBwdDtcbmBcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4gKFxuICA8Um9vdD5cbiAgICA8UGhhc2VCYW5uZXIgcGhhc2U9ezxUcmFucz5BTFBIQTwvVHJhbnM+fSBwaGFzZUNvbG9yPVwicHVycGxlXCI+XG4gICAgICA8VHJhbnM+VGhpcyBzaXRlIHdpbGwgY2hhbmdlIGFzIHdlIHRlc3QgaWRlYXMuPC9UcmFucz5cbiAgICA8L1BoYXNlQmFubmVyPlxuICAgIDxTY3JlZW4+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8UGFnZU5vdEZvdW5kIGRlZmF1bHQgLz5cbiAgICAgICAgPERlbW9QYWdlIHBhdGg9XCIvZGVtb1wiIC8+XG4gICAgICAgIDxPcHRpb24xUGFnZSBwYXRoPVwiL29wdGlvbjFcIiAvPlxuICAgICAgICA8T3B0aW9uMlBhZ2UgcGF0aD1cIi9vcHRpb24yXCIgLz5cbiAgICAgICAgPE9wdGlvbjNQYWdlIHBhdGg9XCIvb3B0aW9uM1wiIC8+XG4gICAgICAgIDxIb3dUb1RlbGxQb2xpY2UgcGF0aD1cIi9ob3d0b3RlbGxcIiAvPlxuICAgICAgICA8VXJnZW5jeSBwYXRoPVwiL3VyZ2VuY3lcIiAvPlxuICAgICAgICA8QW1vdW50T2ZJbmZvUGFnZSBwYXRoPVwiL2Ftb3VudG9maW5mb1wiIC8+XG4gICAgICAgIDxJZGVudGl0eVBhZ2UgcGF0aD1cIi9pZGVudGl0eVwiIC8+XG4gICAgICAgIDxMYW5kaW5nUGFnZSBwYXRoPVwiL1wiIC8+XG4gICAgICAgIDxTY2FtSW5mb1BhZ2UgcGF0aD1cIi9zY2FtaW5mb1wiIC8+XG4gICAgICAgIDxTdXNwZWN0aW5mbyBwYXRoPVwiL3N1c3BlY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICA8U3VzcGVjdEluZm9QYWdlIHBhdGg9XCIvc3VzcGVjdGluZm9cIiAvPlxuICAgICAgICA8TG9zZU1vbmV5IHBhdGg9XCIvbW9uZXlsb3N0cXVlc3Rpb25cIiAvPlxuICAgICAgICA8TW9uZXlMb3N0UGFnZSBwYXRoPVwiL21vbmV5bG9zdFwiIC8+XG4gICAgICAgIDxGaWxlc1RvVXBsb2FkIHBhdGg9XCIvdXBsb2FkZmlsZXNxdWVzdGlvblwiIC8+XG4gICAgICAgIDxGaWxlVXBsb2FkUGFnZSBwYXRoPVwiL3VwbG9hZGZpbGVzXCIgLz5cbiAgICAgICAgPFdpbGxiZWNvbnRhY3RlZCBwYXRoPVwiL2NvbnRhY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICA8Q29udGFjdEluZm9QYWdlIHBhdGg9XCIvY29udGFjdGluZm9cIiAvPlxuICAgICAgICA8Q29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgIDxUaGFua1lvdSBwYXRoPVwiL3RoYW5reW91XCIgLz5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Root, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_phase_banner__WEBPACK_IMPORTED_MODULE_4__["PhaseBanner"], {
    phase: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
      id: "ALPHA"
    }),
    phaseColor: "purple"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "This site will change as we test ideas."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Screen, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PageNotFound__WEBPACK_IMPORTED_MODULE_5__["PageNotFound"], {
    "default": true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DemoPage__WEBPACK_IMPORTED_MODULE_15__["DemoPage"], {
    path: "/demo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Option1Page__WEBPACK_IMPORTED_MODULE_11__["Option1Page"], {
    path: "/option1"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Option2Page__WEBPACK_IMPORTED_MODULE_12__["Option2Page"], {
    path: "/option2"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Option3Page__WEBPACK_IMPORTED_MODULE_13__["Option3Page"], {
    path: "/option3"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HowToTellPolice__WEBPACK_IMPORTED_MODULE_9__["HowToTellPolice"], {
    path: "/howtotell"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Urgency__WEBPACK_IMPORTED_MODULE_6__["Urgency"], {
    path: "/urgency"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_amountOfInfoPage__WEBPACK_IMPORTED_MODULE_8__["AmountOfInfoPage"], {
    path: "/amountofinfo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_identityPage__WEBPACK_IMPORTED_MODULE_10__["IdentityPage"], {
    path: "/identity"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LandingPage__WEBPACK_IMPORTED_MODULE_24__["LandingPage"], {
    path: "/"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ScamInfoPage__WEBPACK_IMPORTED_MODULE_16__["ScamInfoPage"], {
    path: "/scaminfo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Suspectinfo__WEBPACK_IMPORTED_MODULE_14__["Suspectinfo"], {
    path: "/suspectinfoquestion"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SuspectInfoPage__WEBPACK_IMPORTED_MODULE_19__["SuspectInfoPage"], {
    path: "/suspectinfo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LoseMoney__WEBPACK_IMPORTED_MODULE_21__["LoseMoney"], {
    path: "/moneylostquestion"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MoneyLostPage__WEBPACK_IMPORTED_MODULE_17__["MoneyLostPage"], {
    path: "/moneylost"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FilesToUpload__WEBPACK_IMPORTED_MODULE_25__["FilesToUpload"], {
    path: "/uploadfilesquestion"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FileUploadPage__WEBPACK_IMPORTED_MODULE_7__["FileUploadPage"], {
    path: "/uploadfiles"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Willbecontacted__WEBPACK_IMPORTED_MODULE_23__["Willbecontacted"], {
    path: "/contactinfoquestion"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ContactInfoPage__WEBPACK_IMPORTED_MODULE_20__["ContactInfoPage"], {
    path: "/contactinfo"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ConfirmationPage__WEBPACK_IMPORTED_MODULE_18__["ConfirmationPage"], {
    path: "/confirmation"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ThankYou__WEBPACK_IMPORTED_MODULE_22__["ThankYou"], {
    path: "/thankyou"
  }))));
};

/***/ }),

/***/ "./src/Ifvictim.js":
false,

/***/ "./src/LandingPage.js":
/*!****************************!*\
  !*** ./src/LandingPage.js ***!
  \****************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");



/* eslint-disable react/no-unescaped-entities */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1j4lex70",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xhbmRpbmdQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9MYW5kaW5nUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmV4cG9ydCBjb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPEgxIGZvbnRTaXplPXtbNSwgbnVsbCwgNl19PlxuICAgICAgPFRyYW5zPlJlcG9ydCBhIHNjYW08L1RyYW5zPlxuICAgIDwvSDE+XG4gICAgPFA+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIFRlbGwgdGhlIFJDTVAncyBOYXRpb25hbCBDeWJlcmNyaW1lIENvb3JkaW5hdGlvbiBVbml0IChOQzMpIGFib3V0IGFcbiAgICAgICAgc2NhbS5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBOQzMgd2lsbCBhbmFseXplIHlvdXIgcmVwb3J0IGFuZCB3b3JrIHdpdGggcG9saWNlIGFjcm9zcyBDYW5hZGEgdG8gc3RvcFxuICAgICAgICB0aGlzIGZyb20gaGFwcGVuaW5nIGFnYWluLlxuICAgICAgPC9UcmFucz5cblxuICAgIDwvUD5cbiAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICA8VHJhbnM+WW91IHdpbGwgYmUgYXNrZWQgdG86PC9UcmFucz5cbiAgICA8L0gyPlxuICAgIDxQPlxuICAgICAgPHVsIGZvbnRTaXplPXtbOCwgbnVsbCwgOF19PlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPkRlc2NyaWJlIHdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPFRyYW5zPlNwZWNpZnkgd2hldGhlciBtb25leSB3YXMgbG9zdDwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8VHJhbnM+QWRkIHNjYW1tZXIgZGV0YWlsczwvVHJhbnM+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8VHJhbnM+QXR0YWNoIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L1A+XG4gICAgPFA+XG4gICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89XCJzY2FtaW5mb1wiPlxuICAgICAgICA8VHJhbnM+UmVwb3J0IG5vdzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9QPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var LandingPage = function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CenterContent, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], {
    fontSize: [5, null, 6]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Report a scam"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Tell the RCMP's National Cybercrime Coordination Unit (NC3) about a scam."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "NC3 will analyze your report and work with police across Canada to stop this from happening again."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["H2"], {
    fontSize: [4, null, 5]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You will be asked to:"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    fontSize: [8, null, 8]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Describe what happened"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Specify whether money was lost"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Add scammer details"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Attach supporting files"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_link__WEBPACK_IMPORTED_MODULE_5__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: "scaminfo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Report now"
  }))));
};

/***/ }),

/***/ "./src/Suspectinfo.js":
/*!****************************!*\
  !*** ./src/Suspectinfo.js ***!
  \****************************/
/*! exports provided: Suspectinfo */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anik/report-a-cybercrime/frontend/src/Suspectinfo.js: Unterminated JSX contents (45:18)\n\n\u001b[0m \u001b[90m 43 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mButtonLink\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mContainer\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mCenterContent\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 | \u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 47 | \u001b[39m\u001b[0m\n    at Object.raise (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:6344:17)\n    at Object.jsxReadToken (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3230:14)\n    at Object.getTokenFromCode (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3608:19)\n    at Object.nextToken (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:6542:12)\n    at Object.next (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:6482:10)\n    at Object.eat (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:6487:12)\n    at Object.expect (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:7645:10)\n    at Object.jsxParseClosingElementAt (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3506:10)\n    at Object.jsxParseElementAt (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3525:37)\n    at Object.jsxParseElementAt (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3529:32)\n    at Object.jsxParseElement (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3587:17)\n    at Object.parseExprAtom (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:3594:19)\n    at Object.parseExprSubscripts (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8413:23)\n    at Object.parseMaybeUnary (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8393:21)\n    at Object.parseExprOps (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8280:23)\n    at Object.parseMaybeConditional (/Users/anik/report-a-cybercrime/frontend/node_modules/@babel/core/node_modules/@babel/parser/lib/index.js:8253:23)");

/***/ }),

/***/ "./src/ThankYou.js":
/*!*************************!*\
  !*** ./src/ThankYou.js ***!
  \*************************/
/*! exports provided: ThankYou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return ThankYou; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");



/**@jsx jsx */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e4g4yyb0",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1RoYW5rWW91LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9UaGFua1lvdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSwgSDIsIEgzIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgQSB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuXG5jb25zdCBDZW50ZXJDb250ZW50ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuYFxuZXhwb3J0IGNvbnN0IFRoYW5rWW91ID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICA8SDEgZm9udFNpemU9e1s1LCBudWxsLCA2XX0+XG4gICAgICA8VHJhbnM+VGhhbmsgeW91IGZvciByZXBvcnRpbmc8L1RyYW5zPlxuICAgIDwvSDE+XG5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5Zb3VyIHJlcG9ydCBoYXMgYmVlbiBzdWJtaXR0ZWQ8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8SDI+XG4gICAgICA8VHJhbnM+V2hhdCBoYXBwZW5zIG5leHQ/PC9UcmFucz5cbiAgICA8L0gyPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlxuICAgICAgICBJZiB5b3VyIGNvbXBsYWludCBiZWNvbWVzIGFuIGludmVzdGlnYXRpb24sIGFuIG9mZmljZXIgd2lsbCBiZSBpbiB0b3VjaFxuICAgICAgPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPEgzPlxuICAgICAgPFRyYW5zPkhlbHBmdWwgTGlua3M8L1RyYW5zPlxuICAgIDwvSDM+XG4gICAgPFAgZm9udFNpemU9e1s0LCBudWxsLCA1XX0+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIDxzdHJvbmc+UkNNUCBoYXMgcmVjZWl2ZWQgeW91ciByZXBvcnQuPC9zdHJvbmc+XG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgQW4gYW5hbHlzdCB3aWxsIGFzc2VzcyB0aGUgaW5mb3JtYXRpb24sIGNvbWJpbmUgaXQgd2l0aCBvdGhlciByZXBvcnRzLFxuICAgICAgICBhbmQgZGVjaWRlIHdoZXRoZXIgdGhlIHJlcG9ydCBjYW4gYmVjb21lIGEgcG9saWNlIGludmVzdGlnYXRpb24uXG4gICAgICA8L1RyYW5zPlxuICAgIDwvUD5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgeW91ciByZXBvcnQgYmVjb21lcyBhbiBpbnZlc3RpZ2F0aW9uLCBhIGxvY2FsIHBvbGljZSBvZmZpY2VyIG1heSBiZVxuICAgICAgICBpbiB0b3VjaCB0byBnZXQgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxIMiBmb250U2l6ZT17WzQsIG51bGwsIDVdfT5cbiAgICAgIDxUcmFucz5Zb3UgbWF5IGFsc28gd2FudCB0bzo8L1RyYW5zPlxuICAgIDwvSDI+XG4gICAgPFA+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5SZXBvcnQgdG8gdGhlIHNlcnZpY2UgcHJvdmlkZXIgd2hlcmUgdGhlIHNjYW0gdG9vayBwbGFjZS48L2xpPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxpPlJlcG9ydCB0byB5b3VyIGZpbmFuY2lhbCBpbnN0aXR1dGlvbiBpZiB5b3UgbG9zdCBtb25leS48L2xpPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIFJlcG9ydCB0b3snICd9XG4gICAgICAgICAgPEEgaHJlZj1cImh0dHBzOi8vd3d3LmNvbnN1bWVyLmVxdWlmYXguY2EvcGVyc29uYWwvXCI+RXF1aWZheDwvQT4gYW5keycgJ31cbiAgICAgICAgICA8QSBocmVmPVwiaHR0cHM6Ly93d3cudHJhbnN1bmlvbi5jYS9cIj5UcmFuc1VuaW9uPC9BPiBpZiB5b3VyIGlkZW50aXR5XG4gICAgICAgICAgd2FzIHN0b2xlbi5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9QPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Thank you for reporting"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Your report has been submitted"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "What happens next?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your complaint becomes an investigation, an officer will be in touch"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H3"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Helpful Links"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "<0>RCMP has received your report.</0>",
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "An analyst will assess the information, combine it with other reports, and decide whether the report can become a police investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If your report becomes an investigation, a local police officer may be in touch to get more information."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H2"], {
    fontSize: [4, null, 5]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "You may also want to:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to the service provider where the scam took place."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to your financial institution if you lost money."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", null, "Report to", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.consumer.equifax.ca/personal/"
  }, "Equifax"), " and", ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_5__["A"], {
    href: "https://www.transunion.ca/"
  }, "TransUnion"), " if your identity was stolen."))));
};

/***/ }),

/***/ "./src/Willbecontacted.js":
/*!********************************!*\
  !*** ./src/Willbecontacted.js ***!
  \********************************/
/*! exports provided: Willbecontacted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Willbecontacted", function() { return Willbecontacted; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");



/**@jsx jsx */






var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e5jvjna0",
  label: "CenterContent"
})( false ? undefined : {
  name: "117a9oo",
  styles: "max-width:750px;margin:AudioTrack;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1dpbGxiZWNvbnRhY3RlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvV2lsbGJlY29udGFjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogQXVkaW9UcmFjaztcbmBcblxuY29uc3QgYm90dG9tQmFyQ29udGFpbmVyID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBXaWxsYmVjb250YWN0ZWQgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgdGhlIHBvbGljZSBuZWVkIG1vcmUgaW5mb3JtYXRpb24sIHdvdWxkIHlvdSBsaWtlIHRvIGJlIGNvbnRhY3RlZFxuICAgICAgPC9UcmFucz5cbiAgICA8L0gxPlxuXG4gICAgPENvbnRhaW5lciBjc3M9e2JvdHRvbUJhckNvbnRhaW5lcn0+XG4gICAgICA8QnV0dG9uTGluayBtYj17WzMsIG51bGwsIDVdfSB0bz1cIi9jb250YWN0aW5mb1wiPlxuICAgICAgICA8VHJhbnM+WWVzPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL2NvbmZpcm1hdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
});

var bottomBarContainer =  false ? undefined : {
  name: "1sotudj-bottomBarContainer",
  styles: "display:flex;width:50%;flex-direction:row;justify-content:space-between;margin-bottom:20px;label:bottomBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1dpbGxiZWNvbnRhY3RlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjOEIiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvV2lsbGJlY29udGFjdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogQXVkaW9UcmFjaztcbmBcblxuY29uc3QgYm90dG9tQmFyQ29udGFpbmVyID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBXaWxsYmVjb250YWN0ZWQgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxIMSBmb250U2l6ZT17WzUsIG51bGwsIDZdfT5cbiAgICAgIDxUcmFucz5cbiAgICAgICAgSWYgdGhlIHBvbGljZSBuZWVkIG1vcmUgaW5mb3JtYXRpb24sIHdvdWxkIHlvdSBsaWtlIHRvIGJlIGNvbnRhY3RlZFxuICAgICAgPC9UcmFucz5cbiAgICA8L0gxPlxuXG4gICAgPENvbnRhaW5lciBjc3M9e2JvdHRvbUJhckNvbnRhaW5lcn0+XG4gICAgICA8QnV0dG9uTGluayBtYj17WzMsIG51bGwsIDVdfSB0bz1cIi9jb250YWN0aW5mb1wiPlxuICAgICAgICA8VHJhbnM+WWVzPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgIDxCdXR0b25MaW5rIG1iPXtbMywgbnVsbCwgNV19IHRvPVwiL2NvbmZpcm1hdGlvblwiPlxuICAgICAgICA8VHJhbnM+Tm88L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};
var Willbecontacted = function Willbecontacted() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    fontSize: [5, null, 6]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "If the police need more information, would you like to be contacted"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    css: bottomBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/contactinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Yes"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    mb: [3, null, 5],
    to: "/confirmation"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "No"
  }))));
};

/***/ }),

/***/ "./src/components/date-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/date-picker/index.js ***!
  \*********************************************/
/*! exports provided: DateSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSelector", function() { return DateSelector; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale/fr */ "./src/components/date-picker/locale/fr/index.js");
/* harmony import */ var _locale_en_CA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale/en-CA */ "./src/components/date-picker/locale/en-CA/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-datepicker/dist/react-datepicker.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/** @jsx jsx */






!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('fr', _locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('en', _locale_en_CA__WEBPACK_IMPORTED_MODULE_6__["default"]);

var _ref =  false ? undefined : {
  name: "1joobx7-DateSelector",
  styles: "font-size:18px;label:DateSelector;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2MiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9kYXRlLXBpY2tlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IERhdGVQaWNrZXIsIHsgcmVnaXN0ZXJMb2NhbGUgfSBmcm9tICdyZWFjdC1kYXRlcGlja2VyJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGZyIGZyb20gJy4vbG9jYWxlL2ZyJ1xuaW1wb3J0IGVuIGZyb20gJy4vbG9jYWxlL2VuLUNBJ1xuaW1wb3J0ICdyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3MnXG5cbnJlZ2lzdGVyTG9jYWxlKCdmcicsIGZyKVxucmVnaXN0ZXJMb2NhbGUoJ2VuJywgZW4pXG5cbmV4cG9ydCBjb25zdCBEYXRlU2VsZWN0b3IgPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGxvY2FsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEYXRlUGlja2VyXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgYH1cbiAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgc2VsZWN0ZWQ9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cblxuRGF0ZVNlbGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG4iXX0= */"
};

var DateSelector = function DateSelector(_ref2) {
  var value = _ref2.value,
      onChange = _ref2.onChange,
      locale = _ref2.locale,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["value", "onChange", "locale"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-datepicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    css: _ref,
    locale: locale,
    selected: value,
    onChange: onChange
  }, props));
};
DateSelector.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/components/date-picker/locale/_lib/buildFormatLongFn/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/date-picker/locale/_lib/buildFormatLongFn/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildFormatLongFn; });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./src/components/date-picker/locale/_lib/buildLocalizeFn/index.js":
/*!*************************************************************************!*\
  !*** ./src/components/date-picker/locale/_lib/buildLocalizeFn/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildLocalizeFn; });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./src/components/date-picker/locale/_lib/buildMatchFn/index.js":
/*!**********************************************************************!*\
  !*** ./src/components/date-picker/locale/_lib/buildMatchFn/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchFn; });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./src/components/date-picker/locale/_lib/buildMatchPatternFn/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/date-picker/locale/_lib/buildMatchPatternFn/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return buildMatchPatternFn; });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./src/components/date-picker/locale/en-CA/_lib/formatDistance/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/date-picker/locale/en-CA/_lib/formatDistance/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistance; });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: 'a second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: 'a minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about an hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: 'an hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: 'a day',
    other: '{{count}} days'
  },
  aboutXMonths: {
    one: 'about a month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: 'a month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about a year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: 'a year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over a year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost a year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./src/components/date-picker/locale/en-CA/_lib/formatLong/index.js":
/*!**************************************************************************!*\
  !*** ./src/components/date-picker/locale/en-CA/_lib/formatLong/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./src/components/date-picker/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, yyyy',
  "long": 'MMMM do, yyyy',
  medium: 'MMM d, yyyy',
  "short": 'yyyy-MM-dd'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  "long": 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  "short": 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  "long": "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ "./src/components/date-picker/locale/en-CA/index.js":
/*!**********************************************************!*\
  !*** ./src/components/date-picker/locale/en-CA/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./src/components/date-picker/locale/en-CA/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./src/components/date-picker/locale/en-CA/_lib/formatLong/index.js");
/* harmony import */ var _en_US_lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../en-US/_lib/formatRelative/index.js */ "./src/components/date-picker/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _en_US_lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../en-US/_lib/localize/index.js */ "./src/components/date-picker/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _en_US_lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../en-US/_lib/match/index.js */ "./src/components/date-picker/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (Canada).
 * @language English
 * @iso-639-2 eng
 * @author Mark Owsiak [@markowsiak]{@link https://github.com/markowsiak}
 * @author Marco Imperatore [@mimperatore]{@link https://github.com/mimperatore}
 */

var locale = {
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _en_US_lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _en_US_lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _en_US_lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/components/date-picker/locale/en-US/_lib/formatRelative/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/date-picker/locale/en-US/_lib/formatRelative/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRelative; });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./src/components/date-picker/locale/en-US/_lib/localize/index.js":
/*!************************************************************************!*\
  !*** ./src/components/date-picker/locale/en-US/_lib/localize/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./src/components/date-picker/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  "short": ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ "./src/components/date-picker/locale/en-US/_lib/match/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/date-picker/locale/en-US/_lib/match/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./src/components/date-picker/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./src/components/date-picker/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  "short": /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ "./src/components/date-picker/locale/fr/_lib/formatDistance/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/date-picker/locale/fr/_lib/formatDistance/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDistance; });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'moins d’une seconde',
    other: 'moins de {{count}} secondes'
  },
  xSeconds: {
    one: '1 seconde',
    other: '{{count}} secondes'
  },
  halfAMinute: '30 secondes',
  lessThanXMinutes: {
    one: 'moins d’une minute',
    other: 'moins de {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'environ 1 heure',
    other: 'environ {{count}} heures'
  },
  xHours: {
    one: '1 heure',
    other: '{{count}} heures'
  },
  xDays: {
    one: '1 jour',
    other: '{{count}} jours'
  },
  aboutXMonths: {
    one: 'environ 1 mois',
    other: 'environ {{count}} mois'
  },
  xMonths: {
    one: '1 mois',
    other: '{{count}} mois'
  },
  aboutXYears: {
    one: 'environ 1 an',
    other: 'environ {{count}} ans'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ans'
  },
  overXYears: {
    one: 'plus d’un an',
    other: 'plus de {{count}} ans'
  },
  almostXYears: {
    one: 'presqu’un an',
    other: 'presque {{count}} ans'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'dans ' + result;
    } else {
      return 'il y a ' + result;
    }
  }

  return result;
}

/***/ }),

/***/ "./src/components/date-picker/locale/fr/_lib/formatLong/index.js":
/*!***********************************************************************!*\
  !*** ./src/components/date-picker/locale/fr/_lib/formatLong/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./src/components/date-picker/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE d MMMM y',
  "long": 'd MMMM y',
  medium: 'd MMM y',
  "short": 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  "long": 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  "short": 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'à' {{time}}",
  "long": "{{date}} 'à' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (formatLong);

/***/ }),

/***/ "./src/components/date-picker/locale/fr/_lib/formatRelative/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/date-picker/locale/fr/_lib/formatRelative/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatRelative; });
var formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./src/components/date-picker/locale/fr/_lib/localize/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/date-picker/locale/fr/_lib/localize/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./src/components/date-picker/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['av. J.-C', 'ap. J.-C'],
  abbreviated: ['av. J.-C', 'ap. J.-C'],
  wide: ['avant Jésus-Christ', 'après Jésus-Christ']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
  wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  "short": ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'mat.',
    afternoon: 'ap.m.',
    evening: 'soir',
    night: 'mat.'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'matin',
    afternoon: 'après-midi',
    evening: 'soir',
    night: 'matin'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'du matin',
    afternoon: 'de l’après-midi',
    evening: 'du soir',
    night: 'du matin'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);
  var options = dirtyOptions || {};
  var unit = String(options.unit);
  var suffix;

  if (number === 0) {
    return number;
  }

  if (unit === 'year' || unit === 'hour' || unit === 'week') {
    if (number === 1) {
      suffix = 'ère';
    } else {
      suffix = 'ème';
    }
  } else {
    if (number === 1) {
      suffix = 'er';
    } else {
      suffix = 'ème';
    }
  }

  return number + suffix;
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (localize);

/***/ }),

/***/ "./src/components/date-picker/locale/fr/_lib/match/index.js":
/*!******************************************************************!*\
  !*** ./src/components/date-picker/locale/fr/_lib/match/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./src/components/date-picker/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./src/components/date-picker/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(ième|ère|ème|er|e)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
};
var parseEraPatterns = {
  any: [/^av/i, /^ap/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](er|ème|e)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^jui/i, /^juil/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[lmjvsd]/i,
  "short": /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
};
var match = {
  ordinalNumber: Object(_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (match);

/***/ }),

/***/ "./src/components/date-picker/locale/fr/index.js":
/*!*******************************************************!*\
  !*** ./src/components/date-picker/locale/fr/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./src/components/date-picker/locale/fr/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./src/components/date-picker/locale/fr/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./src/components/date-picker/locale/fr/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./src/components/date-picker/locale/fr/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./src/components/date-picker/locale/fr/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary French locale.
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */

var locale = {
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/forms/ContactInfoForm.js":
/*!**************************************!*\
  !*** ./src/forms/ContactInfoForm.js ***!
  \**************************************/
/*! exports provided: ContactInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoForm", function() { return ContactInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/radio-button */ "./src/components/radio-button/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");


/** @jsx jsx */













var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_7__["TextArea"]);
var RadioButtonAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_radio_button__WEBPACK_IMPORTED_MODULE_10__["RadioButton"]);

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e16pgiyd0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "1iud02x",
  styles: "margin-bottom:8pt;font-size:1.25rem;display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgdmljdGltPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvY29uZmlybWF0aW9uJyl9PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlNhdmUgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var victimOptions = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('yes'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('no')];

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1forroa-ContactInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSHNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgdmljdGltPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvY29uZmlybWF0aW9uJyl9PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlNhdmUgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "1forroa-ContactInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SHNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgUmFkaW9CdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCB2aWN0aW1PcHRpb25zID0gW2kxOG5NYXJrKCd5ZXMnKSwgaTE4bk1hcmsoJ25vJyldXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRhY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJJc1RoZVZpY3RpbVwiPlxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSB0aGUgdmljdGltPzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJJc1RoZVZpY3RpbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0kxOG4+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwNXB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvY29uZmlybWF0aW9uJyl9PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCdXR0b25MaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbkxpbms+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlNhdmUgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ContactInfoForm = function ContactInfoForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "userIsTheVictim"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Are you the victim?"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return victimOptions.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "userIsTheVictim",
              id: "userIsTheVictim",
              component: RadioButtonAdapter,
              type: "radio",
              value: key,
              label: i18n._(key)
            }));
          });
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Name"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoName",
          id: "contactInfoName",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoEmail"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Email address"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoEmail",
          id: "contactInfoEmail",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoPhone"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Phone number"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoPhone",
          id: "contactInfoPhone",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          onClick: function onClick() {
            return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/confirmation');
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel Report"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"], {
          type: "button",
          color: "black",
          marginTop: [1, null, 1]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Save Report"
        }))));
      }
    });
  });
};
ContactInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/forms/MoneyLostForm.js":
/*!************************************!*\
  !*** ./src/forms/MoneyLostForm.js ***!
  \************************************/
/*! exports provided: MoneyLostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyLostForm", function() { return MoneyLostForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");


/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_7__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_8__["TextArea"]);
var methodsOfPayment = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('credit card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('cash'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('gift card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('other')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1224l6n0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJxQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgbWV0aG9kc09mUGF5bWVudCA9IFtcbiAgaTE4bk1hcmsoJ2NyZWRpdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdjYXNoJyksXG4gIGkxOG5NYXJrKCdnaWZ0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgTW9uZXlMb3N0Rm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEFtb3VudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFtb3VudDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RDdXJyZW5jeVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkN1cnJlbmN5PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RNZXRob2RzT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+V2hhdCBtZXRob2Qgb2YgcGF5bWVudCB3YXMgdXNlZD88L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICBtZXRob2RzT2ZQYXltZW50Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1c0xa61-MoneyLostForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0lzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgbWV0aG9kc09mUGF5bWVudCA9IFtcbiAgaTE4bk1hcmsoJ2NyZWRpdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdjYXNoJyksXG4gIGkxOG5NYXJrKCdnaWZ0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgTW9uZXlMb3N0Rm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEFtb3VudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFtb3VudDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RDdXJyZW5jeVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkN1cnJlbmN5PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RNZXRob2RzT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+V2hhdCBtZXRob2Qgb2YgcGF5bWVudCB3YXMgdXNlZD88L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICBtZXRob2RzT2ZQYXltZW50Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "1c0xa61-MoneyLostForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:MoneyLostForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBCdXR0b25MaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24tbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuY29uc3QgbWV0aG9kc09mUGF5bWVudCA9IFtcbiAgaTE4bk1hcmsoJ2NyZWRpdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdjYXNoJyksXG4gIGkxOG5NYXJrKCdnaWZ0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgTW9uZXlMb3N0Rm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEFtb3VudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkhvdyBtdWNoIG1vbmV5IHdhcyBsb3N0PzwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkFtb3VudDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RDdXJyZW5jeVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkN1cnJlbmN5PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RNZXRob2RzT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+V2hhdCBtZXRob2Qgb2YgcGF5bWVudCB3YXMgdXNlZD88L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICBtZXRob2RzT2ZQYXltZW50Lm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQgJiZcbiAgICAgICAgICAgIHZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uTGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgUmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var MoneyLostForm = function MoneyLostForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit,
            values = _ref4.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostAmount"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "How much money was lost?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Amount"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostAmount",
          id: "lostAmount",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostCurrency"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Currency"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostCurrency",
          id: "lostCurrency",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostMethodsOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "What method of payment was used?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("br", null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return methodsOfPayment.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "lostMethodsOfPayment",
              id: "lostMethodsOfPayment",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        })), values.lostMethodsOfPayment && values.lostMethodsOfPayment.indexOf('other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostOtherMethodOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_11__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostOtherMethodOfPayment",
          id: "lostOtherMethodOfPayment",
          component: TextAreaAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_10__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel Report"
        }))));
      }
    });
  });
};
MoneyLostForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/forms/ScamInfoForm.js":
/*!***********************************!*\
  !*** ./src/forms/ScamInfoForm.js ***!
  \***********************************/
/*! exports provided: ScamInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoForm", function() { return ScamInfoForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/date-picker */ "./src/components/date-picker/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");









/** @jsx jsx */














var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_21__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_14__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_21__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_16__["TextArea"]);
var DateSelectorAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_21__["finalFormAdapter"])(_components_date_picker__WEBPACK_IMPORTED_MODULE_20__["DateSelector"]);
var howContacted = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('phone'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('email'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('website link'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('other')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('label', {
  target: "e1gw4t0m0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1rs3emy-ScamInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScamInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SzBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "1rs3emy-ScamInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScamInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TDBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCBSZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var ScamInfoForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ScamInfoForm, _Component);

  function ScamInfoForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScamInfoForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ScamInfoForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      startDate: new Date()
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleChange", function (date) {
      _this.setState({
        startDate: date
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit; // data.whenWereYouContacted = `${this.state.startDate}`.substr(0, 15)

      data.whenWereYouContacted = _this.state.startDate.toISOString().slice(0, 10);
      onSubmit(client, data);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScamInfoForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          onSubmit: function onSubmit(data) {
            return _this2.localOnSubmit(client, data);
          },
          validate: validate,
          render: function render(_ref3) {
            var handleSubmit = _ref3.handleSubmit,
                values = _ref3.values;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("form", {
              onSubmit: handleSubmit
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "scamDetails"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "What happened?"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "scamDetails",
              id: "scamDetails",
              component: TextAreaAdapter,
              height: "100px",
              width: "300px"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "whenWereYouContacted"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "When did it happen?"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref4) {
              var i18n = _ref4.i18n;
              return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                name: "whenWereYouContacted",
                id: "whenWereYouContacted",
                component: DateSelectorAdapter,
                locale: i18n._('en'),
                selected: _this2.state.startDate,
                onChange: _this2.handleChange,
                height: "25px",
                width: "300px"
              });
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "howWereYouContacted"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "How did it start?"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref5) {
              var i18n = _ref5.i18n;
              return howContacted.map(function (key) {
                return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(CheckboxStyle, {
                  key: key
                }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                  name: "howWereYouContacted",
                  id: "howWereYouContacted",
                  component: CheckboxAdapter,
                  type: "checkbox",
                  value: key,
                  label: i18n._(key)
                }));
              });
            })), values.howWereYouContacted && values.howWereYouContacted.indexOf('other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "otherMethodOfContact"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Other channel"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "otherMethodOfContact",
              id: "otherMethodOfContact",
              component: TextAreaAdapter,
              height: "50px",
              width: "300px"
            }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], null, JSON.stringify(validate(values)) === JSON.stringify({}) ? '' : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_19__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Please fill out all fields"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_15__["Container"], {
              width: "305px",
              marginTop: [1, null, 1],
              css: _ref
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_17__["Button"], {
              type: "submit"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Continue"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_15__["Container"], {
              width: "300px",
              marginTop: [1, null, 1],
              css: _ref2
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_18__["ButtonLink"], {
              type: "button",
              color: "black"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Cancel Report"
            }))));
          }
        });
      });
    }
  }]);

  return ScamInfoForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
ScamInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};

/***/ }),

/***/ "./src/forms/SuspectInfoForm.js":
/*!**************************************!*\
  !*** ./src/forms/SuspectInfoForm.js ***!
  \**************************************/
/*! exports provided: SuspectInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectInfoForm", function() { return SuspectInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button-link */ "./src/components/button-link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");


/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_12__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_7__["TextArea"]);
var languages = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('English'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('French'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other language')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1hb93i0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgaTE4bk1hcmsoJ0VuZ2xpc2gnKSxcbiAgaTE4bk1hcmsoJ0ZyZW5jaCcpLFxuICBpMThuTWFyaygnT3RoZXIgbGFuZ3VhZ2UnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3ROYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0RW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEVtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RQaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFBob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RQaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0V2Vic2l0ZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldlYnNpdGUgbGluazwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdElQXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RJUFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0TGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIHZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UuaW5kZXhPZignb3RoZXInKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBsYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJTdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuU3VzcGVjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1h0rsya-SuspectInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:SuspectInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3THNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgaTE4bk1hcmsoJ0VuZ2xpc2gnKSxcbiAgaTE4bk1hcmsoJ0ZyZW5jaCcpLFxuICBpMThuTWFyaygnT3RoZXIgbGFuZ3VhZ2UnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3ROYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0RW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEVtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RQaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFBob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RQaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0V2Vic2l0ZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldlYnNpdGUgbGluazwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdElQXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RJUFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0TGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIHZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UuaW5kZXhPZignb3RoZXInKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBsYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJTdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuU3VzcGVjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "1h0rsya-SuspectInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:SuspectInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTXNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi1saW5rJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgaTE4bk1hcmsoJ0VuZ2xpc2gnKSxcbiAgaTE4bk1hcmsoJ0ZyZW5jaCcpLFxuICBpMThuTWFyaygnT3RoZXIgbGFuZ3VhZ2UnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3ROYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0RW1haWxcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbCBhZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEVtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RQaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFBob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RQaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0V2Vic2l0ZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPldlYnNpdGUgbGluazwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdEFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5BZGRyZXNzPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0QWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdElQXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RJUFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0TGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3ZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIHZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UuaW5kZXhPZignb3RoZXInKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBsYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJTdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIFJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuU3VzcGVjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var SuspectInfoForm = function SuspectInfoForm(_ref3) {
  var _onSubmit = _ref3.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref4) {
        var handleSubmit = _ref4.handleSubmit,
            values = _ref4.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Name"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectName",
          id: "suspectName",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectEmail"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Email address"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectEmail",
          id: "suspectEmail",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectPhone"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Phone number"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectPhone",
          id: "suspectPhone",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectWebsite"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Website link"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectWebsite",
          id: "suspectWebsite",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectAddress"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Address"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectAddress",
          id: "suspectAddress",
          component: TextAreaAdapter,
          height: "100px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectIP"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "IP address"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectIP",
          id: "suspectIP",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectLanguage"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Language"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref5) {
          var i18n = _ref5.i18n;
          return languages.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "suspectLanguage",
              id: "suspectLanguage",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        })), values.suspectLanguage && values.suspectLanguage.indexOf('other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "otherSuspectLanguage"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other language"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "otherSuspectLanguage",
          id: "otherSuspectLanguage",
          component: TextAreaAdapter,
          height: "25px",
          width: "300px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: "305px",
          marginTop: [3, null, 4],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Next"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: "300px",
          marginTop: [2, null, 3],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button_link__WEBPACK_IMPORTED_MODULE_9__["ButtonLink"], {
          type: "button",
          color: "black"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel Report"
        }))));
      }
    });
  });
};
SuspectInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LanguageSwitching */ "./src/LanguageSwitching.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express-request-language */ "express-request-language");
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_request_language__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App */ "./src/App.js");














var assets, publicDir;
var RAZZLE_SERVER_SIDE_API_URI = process.env.RAZZLE_SERVER_SIDE_API_URI;

if (false) {} else {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
  publicDir = "/Users/anik/report-a-cybercrime/frontend/public";
}

var server = express__WEBPACK_IMPORTED_MODULE_10___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](publicDir)).use(express_request_language__WEBPACK_IMPORTED_MODULE_11___default()({
  languages: ['en', 'fr']
})).get('/assets', function (req, res) {
  res.status(200).send(JSON.stringify(assets));
}).get('/monitoring/alive', function (req, res) {
  res.status(200).send('yes');
}).use('/public', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](__dirname + '/public')).use('/static', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"]('static')).get('/monitoring/ready', function (req, res) {
  res.status(200).send('yes');
}).get('/*',
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var cache, client, helmetContext, markup, helmet;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"](); // Add defaults for form fields

            cache.writeData({
              data: {
                language: req.language,
                howWereYouContacted: [],
                otherMethodOfContact: '',
                whenWereYouContacted: '',
                scamDetails: '',
                lostAmount: '',
                lostCurrency: '',
                lostMethodsOfPayment: [],
                lostOtherMethodOfPayment: '',
                suspectName: '',
                suspectAddress: '',
                suspectLanguage: [],
                otherSuspectLanguage: '',
                suspectPhone: '',
                suspectEmail: '',
                suspectWebsite: '',
                suspectIP: '',
                files: [],
                userIsTheVictim: '',
                contactInfoName: '',
                contactInfoEmail: '',
                contactInfoPhone: ''
              }
            });
            client = new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
              ssrMode: true,
              link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
                uri: RAZZLE_SERVER_SIDE_API_URI,
                fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default.a
              }),
              cache: cache,
              resolvers: {}
            });
            helmetContext = {};
            _context.prev = 4;
            _context.next = 7;
            return Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["renderToStringWithData"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__["HelmetProvider"], {
              context: helmetContext
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
              client: client
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_12__["ServerLocation"], {
              url: req.url
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitching"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_13__["default"], null))))));

          case 7:
            markup = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            // eslint-disable-next-line no-console
            console.error('Data fetching during SSR Failed:', _context.t0);

          case 13:
            helmet = helmetContext.helmet;
            res.set({
              'Content-Language': req.language
            }).status(200).send("<!DOCTYPE html>\n      <html ".concat(helmet.htmlAttributes.toString(), ">\n        <head>\n          ").concat(helmet.title.toString(), " ").concat(helmet.meta.toString(), "\n          ").concat(helmet.link.toString(), "\n          ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n          ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n        </head>\n        <body ").concat(helmet.bodyAttributes.toString(), ">\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>"));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.f56d75d6b933e1e59009.hot-update.js.map