exports.id = "main";
exports.modules = {

/***/ "./src/p1/FileUploadPage.js":
/*!**********************************!*\
  !*** ./src/p1/FileUploadPage.js ***!
  \**********************************/
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
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/upload.svg */ "./src/images/upload.svg");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_upload_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");








/**@jsx jsx */




















var _ref =  false ? undefined : {
  name: "17tuhvv-FileUploadInternal",
  styles: "display:flex;justify-content:center;img{width:1rem;margin-right:0.6rem;}label:FileUploadInternal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgZ2V0RG9uZUZvcm1zLCBnZXRGaWxlcyB9IGZyb20gJy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgdXBsb2FkIGZyb20gJy4uL2ltYWdlcy91cGxvYWQuc3ZnJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY2xhc3MgRmlsZVVwbG9hZEludGVybmFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZXM6IGdldEZpbGVzKHByb3BzLmNsaWVudCkubWFwKG5hbWUgPT4gKHsgbmFtZSB9KSksXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZShnZXREb25lRm9ybXMoY2xpZW50KSA/ICdjb25maXJtYXRpb24nIDogJ2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEJhY2tCdXR0b24gcm91dGU9XCIvcDEvdXBsb2FkZmlsZXNxdWVzdGlvblwiPlxuICAgICAgICAgIDxUcmFucz5wcmV2aW91cyBwYWdlPC9UcmFucz5cbiAgICAgICAgPC9CYWNrQnV0dG9uPlxuICAgICAgICA8U3RlcHMgYWN0aXZlU3RlcD17NH0gdG90YWxTdGVwcz17Nn0gLz5cbiAgICAgICAgPEgxPlxuICAgICAgICAgIDxUcmFucz5BdHRhY2ggc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICAgIDwvSDE+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgIEluY2x1ZGUgYW55IG1lc3NhZ2VzLCBjb252ZXJzYXRpb25zLCByZWNlaXB0cywgb3Igb3RoZXIgZXZpZGVuY2VcbiAgICAgICAgICAgIHRoYXQgc2hvd3Mgd2hhdCBoYXBwZW5lZC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz5QbGVhc2UgYXR0YWNoIG9uZSBmaWxlIGF0IGEgdGltZS48L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17WydhdXRvJywgJzEwMCUnLCAnYXV0byddfVxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMS41cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b209XCIwLjZyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ1RvcD1cIjAuNnJlbVwiXG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJ1cGxvYWQgaWNvblwiIHNyYz17dXBsb2FkfSAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxUcmFucz5BdHRhY2ggZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPiA8L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxJMThuPlxuICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgIDxIMiBmb250U2l6ZT17WzMsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAge2kxOG4ucGx1cmFsKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgb3RoZXI6ICcjIGZpbGVzIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSTE4bj5cblxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luTGVmdD1cIjNyZW1cIj57Zi5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0QW5kTmF2aWdhdGUoY2xpZW50KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0IHN0ZXA6IENvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG10PVwiMS45cmVtXCIgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3AxL1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbkZpbGVVcGxvYWRJbnRlcm5hbC5wcm9wVHlwZXMgPSB7XG4gIGNsaWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgY29uc3QgRmlsZVVwbG9hZFBhZ2UgPSAoKSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxGaWxlVXBsb2FkSW50ZXJuYWwgY2xpZW50PXtjbGllbnR9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "oujgny-FileUploadInternal",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:FileUploadInternal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Kd0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgZ2V0RG9uZUZvcm1zLCBnZXRGaWxlcyB9IGZyb20gJy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgdXBsb2FkIGZyb20gJy4uL2ltYWdlcy91cGxvYWQuc3ZnJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY2xhc3MgRmlsZVVwbG9hZEludGVybmFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZXM6IGdldEZpbGVzKHByb3BzLmNsaWVudCkubWFwKG5hbWUgPT4gKHsgbmFtZSB9KSksXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IHRoaXMuc3RhdGUuZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSB9KVxuICB9XG5cbiAgcmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICBsZXQgbmV3RmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzXG4gICAgbmV3RmlsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogbmV3RmlsZXMgfSlcbiAgfVxuXG4gIHN1Ym1pdEFuZE5hdmlnYXRlID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKVxuICAgIGNvbnN0IGRhdGEgPSB7IGZpbGVzIH1cbiAgICBjbGllbnQud3JpdGVEYXRhKHsgZGF0YSB9KSAvLyBUT0RPOiBhY3R1YWxseSB1cGxvYWQgZmlsZXNcbiAgICBuYXZpZ2F0ZShnZXREb25lRm9ybXMoY2xpZW50KSA/ICdjb25maXJtYXRpb24nIDogJ2NvbnRhY3RpbmZvcXVlc3Rpb24nKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgICAgICAgPEJhY2tCdXR0b24gcm91dGU9XCIvcDEvdXBsb2FkZmlsZXNxdWVzdGlvblwiPlxuICAgICAgICAgIDxUcmFucz5wcmV2aW91cyBwYWdlPC9UcmFucz5cbiAgICAgICAgPC9CYWNrQnV0dG9uPlxuICAgICAgICA8U3RlcHMgYWN0aXZlU3RlcD17NH0gdG90YWxTdGVwcz17Nn0gLz5cbiAgICAgICAgPEgxPlxuICAgICAgICAgIDxUcmFucz5BdHRhY2ggc3VwcG9ydGluZyBmaWxlczwvVHJhbnM+XG4gICAgICAgIDwvSDE+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgIEluY2x1ZGUgYW55IG1lc3NhZ2VzLCBjb252ZXJzYXRpb25zLCByZWNlaXB0cywgb3Igb3RoZXIgZXZpZGVuY2VcbiAgICAgICAgICAgIHRoYXQgc2hvd3Mgd2hhdCBoYXBwZW5lZC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz5QbGVhc2UgYXR0YWNoIG9uZSBmaWxlIGF0IGEgdGltZS48L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17WydhdXRvJywgJzEwMCUnLCAnYXV0byddfVxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PVwiMS41cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b209XCIwLjZyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ1RvcD1cIjAuNnJlbVwiXG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJ1cGxvYWQgaWNvblwiIHNyYz17dXBsb2FkfSAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxUcmFucz5BdHRhY2ggZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPiA8L1RyYW5zPlxuICAgICAgICA8L1A+XG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxJMThuPlxuICAgICAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgICAgIDxIMiBmb250U2l6ZT17WzMsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAge2kxOG4ucGx1cmFsKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmlsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgb3RoZXI6ICcjIGZpbGVzIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L0gyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSTE4bj5cblxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luTGVmdD1cIjNyZW1cIj57Zi5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0QW5kTmF2aWdhdGUoY2xpZW50KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0IHN0ZXA6IENvbnRhY3QgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG10PVwiMS45cmVtXCIgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL3AxL1wiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbkZpbGVVcGxvYWRJbnRlcm5hbC5wcm9wVHlwZXMgPSB7XG4gIGNsaWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgY29uc3QgRmlsZVVwbG9hZFBhZ2UgPSAoKSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxGaWxlVXBsb2FkSW50ZXJuYWwgY2xpZW50PXtjbGllbnR9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
};

var FileUploadInternal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileUploadInternal, _Component);

  function FileUploadInternal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileUploadInternal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileUploadInternal).call(this, props));

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

      Object(_reach_router__WEBPACK_IMPORTED_MODULE_10__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getDoneForms"])(client) ? 'confirmation' : 'contactinfoquestion');
    });

    _this.state = {
      files: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getFiles"])(props.client).map(function (name) {
        return {
          name: name
        };
      })
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileUploadInternal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var files = this.state.files;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_20__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_19__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_25__["BackButton"], {
        route: "/p1/uploadfilesquestion"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "previous page"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_21__["Steps"], {
        activeStep: 4,
        totalSteps: 6
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Attach supporting files"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Include any messages, conversations, receipts, or other evidence that shows what happened."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Please attach one file at a time."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        marginTop: [2, null, 5],
        marginBottom: [2, 5, 5],
        display: "flex",
        flexDirection: "row",
        justifyContent: ['flex-start', 'center', 'flex-start'],
        textAlign: "center"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_18__["FileUpload"], {
        onChange: this.onChange,
        width: ['auto', '100%', 'auto'],
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingBottom: "0.6rem",
        paddingTop: "0.6rem",
        css: _ref
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
        alt: "upload icon",
        src: _images_upload_svg__WEBPACK_IMPORTED_MODULE_24___default.a
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Attach file"
      })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: ""
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("hr", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["I18n"], null, function (_ref3) {
        var i18n = _ref3.i18n;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H2"], {
          fontSize: [3, null, 5]
        }, i18n._("{0, plural, one {# file attached} other {# files attached}}", {
          0: files.length
        }));
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, files.map(function (f, index) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          marginBottom: [2, null, 3],
          key: index,
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          "float": "right",
          marginTop: 0,
          backgroundColor: "crimson",
          type: "button",
          onClick: function onClick() {
            return _this2.removeFile(index);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Remove file"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
          marginLeft: "3rem"
        }, f.name));
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1rem",
          mb: "4rem",
          display: ['flex', 'block', 'flex'],
          alignItems: "center",
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1rem"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          onClick: function onClick() {
            return _this2.submitAndNavigate(client);
          },
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Next step: Contact information"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1.9rem",
          ml: ['3rem', '0', '3rem']
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_17__["Link"], {
          type: "button",
          color: "black",
          to: "/p1/",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Cancel report"
        })))));
      }));
    }
  }]);

  return FileUploadInternal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

FileUploadInternal.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var FileUploadPage = function FileUploadPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(FileUploadInternal, {
      client: client
    });
  });
};

/***/ })

};
//# sourceMappingURL=main.9b808df68c3f772c3e9c.hot-update.js.map