exports.id = "main";
exports.modules = {

/***/ "./src/p2/forms/WhatHappenedForm.js":
/*!******************************************!*\
  !*** ./src/p2/forms/WhatHappenedForm.js ***!
  \******************************************/
/*! exports provided: WhatHappenedForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatHappenedForm", function() { return WhatHappenedForm; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */











var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_10__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_6__["TextArea"]);

var _ref =  false ? undefined : {
  name: "1g6lzdw-WhatHappenedForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:WhatHappenedForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1doYXRIYXBwZW5lZEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9XaGF0SGFwcGVuZWRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFdoYXRIYXBwZW5lZCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBXaGF0SGFwcGVuZWRGb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRXaGF0SGFwcGVuZWQoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGF0SGFwcGVuZWRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5UZWxsIHVzIHdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ3aGF0SGFwcGVuZWRcIlxuICAgICAgICAgICAgICAgIGlkPVwid2hhdEhhcHBlbmVkXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuV2hhdEhhcHBlbmVkRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "1g6lzdw-WhatHappenedForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:WhatHappenedForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1doYXRIYXBwZW5lZEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURzQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9XaGF0SGFwcGVuZWRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFdoYXRIYXBwZW5lZCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBXaGF0SGFwcGVuZWRGb3JtID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRXaGF0SGFwcGVuZWQoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGF0SGFwcGVuZWRcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5UZWxsIHVzIHdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJ3aGF0SGFwcGVuZWRcIlxuICAgICAgICAgICAgICAgIGlkPVwid2hhdEhhcHBlbmVkXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMzA1cHhcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRpbnVlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDJcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuV2hhdEhhcHBlbmVkRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
};

var WhatHappenedForm = function WhatHappenedForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__["getWhatHappened"])(client),
      onSubmit: function onSubmit(data) {
        return props.onSubmit(client, data);
      },
      render: function render(_ref3) {
        var handleSubmit = _ref3.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "whatHappened"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "Tell us what happened"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "whatHappened",
          id: "whatHappened",
          component: TextAreaAdapter,
          height: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          width: "305px",
          marginTop: [1, null, 1],
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "Continue"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          width: "300px",
          marginTop: [1, null, 1],
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          type: "button",
          color: "black",
          to: "/p2",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "Cancel report"
        }))));
      }
    });
  });
};
WhatHappenedForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ })

};
//# sourceMappingURL=main.54fd8166c0f31bf13f35.hot-update.js.map