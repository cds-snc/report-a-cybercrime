exports.id = "main";
exports.modules = {

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  margin-left: -8px;\n  position: absolute;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  box-sizing: content-box;\n  position: absolute;\n  border: 8px solid transparent;\n  height: 0;\n  width: 1px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  content: \"\";\n  z-index: -1;\n  border-width: 8px;\n  left: -8px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle {\n  top: 0;\n  margin-top: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  border-top: none;\n  border-bottom-color: #f0f0f0;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] .react-datepicker__triangle::before {\n  top: -1px;\n  border-bottom-color: #aeaeae;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  bottom: 0;\n  margin-bottom: -8px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  border-bottom: none;\n  border-top-color: #fff;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n.react-datepicker__month-read-view--down-arrow::before,\n.react-datepicker__month-year-read-view--down-arrow::before {\n  bottom: -1px;\n  border-top-color: #aeaeae;\n}\n\n.react-datepicker-wrapper {\n  display: inline-block;\n}\n\n.react-datepicker {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n  background-color: #fff;\n  color: #000;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  display: inline-block;\n  position: relative;\n}\n\n.react-datepicker--time-only .react-datepicker__triangle {\n  left: 35px;\n}\n\n.react-datepicker--time-only .react-datepicker__time-container {\n  border-left: 0;\n}\n\n.react-datepicker--time-only .react-datepicker__time {\n  border-radius: 0.3rem;\n}\n\n.react-datepicker--time-only .react-datepicker__time-box {\n  border-radius: 0.3rem;\n}\n\n.react-datepicker__triangle {\n  position: absolute;\n  left: 50px;\n}\n\n.react-datepicker-popper {\n  z-index: 1;\n}\n\n.react-datepicker-popper[data-placement^=\"bottom\"] {\n  margin-top: 10px;\n}\n\n.react-datepicker-popper[data-placement^=\"top\"] {\n  margin-bottom: 10px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] {\n  margin-left: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"right\"] .react-datepicker__triangle {\n  left: auto;\n  right: 42px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] {\n  margin-right: 8px;\n}\n\n.react-datepicker-popper[data-placement^=\"left\"] .react-datepicker__triangle {\n  left: 42px;\n  right: auto;\n}\n\n.react-datepicker__header {\n  text-align: center;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #aeaeae;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n  padding-top: 8px;\n  position: relative;\n}\n\n.react-datepicker__header--time {\n  padding-bottom: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.react-datepicker__year-dropdown-container--select,\n.react-datepicker__month-dropdown-container--select,\n.react-datepicker__month-year-dropdown-container--select,\n.react-datepicker__year-dropdown-container--scroll,\n.react-datepicker__month-dropdown-container--scroll,\n.react-datepicker__month-year-dropdown-container--scroll {\n  display: inline-block;\n  margin: 0 2px;\n}\n\n.react-datepicker__current-month,\n.react-datepicker-time__header,\n.react-datepicker-year-header {\n  margin-top: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 0.944rem;\n}\n\n.react-datepicker-time__header {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation {\n  background: none;\n  line-height: 1.7rem;\n  text-align: center;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  padding: 0;\n  border: 0.45rem solid transparent;\n  z-index: 1;\n  height: 10px;\n  width: 10px;\n  text-indent: -999em;\n  overflow: hidden;\n}\n\n.react-datepicker__navigation--previous {\n  left: 10px;\n  border-right-color: #ccc;\n}\n\n.react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--next {\n  right: 10px;\n  border-left-color: #ccc;\n}\n\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n  right: 80px;\n}\n\n.react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__navigation--years {\n  position: relative;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__navigation--years-previous {\n  top: 4px;\n  border-top-color: #ccc;\n}\n\n.react-datepicker__navigation--years-previous:hover {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__navigation--years-upcoming {\n  top: -4px;\n  border-bottom-color: #ccc;\n}\n\n.react-datepicker__navigation--years-upcoming:hover {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__month-container {\n  float: left;\n}\n\n.react-datepicker__month {\n  margin: 0.4rem;\n  text-align: center;\n}\n\n.react-datepicker__month .react-datepicker__month-text {\n  display: inline-block;\n  width: 4rem;\n  margin: 2px;\n}\n\n.react-datepicker__input-time-container {\n  clear: both;\n  width: 100%;\n  float: left;\n  margin: 5px 0 10px 15px;\n  text-align: left;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__caption {\n  display: inline-block;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container {\n  display: inline-block;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n  width: 85px;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-inner-spin-button,\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=\"time\"] {\n  -moz-appearance: textfield;\n}\n\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n.react-datepicker__time-container {\n  float: right;\n  border-left: 1px solid #aeaeae;\n  width: 70px;\n}\n\n.react-datepicker__time-container--with-today-button {\n  display: inline;\n  border: 1px solid #aeaeae;\n  border-radius: 0.3rem;\n  position: absolute;\n  right: -72px;\n  top: 0;\n}\n\n.react-datepicker__time-container .react-datepicker__time {\n  position: relative;\n  background: white;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n  width: 70px;\n  overflow-x: hidden;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n  list-style: none;\n  margin: 0;\n  height: calc(195px + (1.7rem / 2));\n  overflow-y: scroll;\n  padding-right: 0px;\n  padding-left: 0px;\n  width: 100%;\n  box-sizing: content-box;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n  height: 30px;\n  padding: 5px 10px;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n  cursor: pointer;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n  background-color: #216ba5;\n  color: white;\n  font-weight: bold;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n  background-color: #216ba5;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n  color: #ccc;\n}\n\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__week-number {\n  color: #ccc;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\n  cursor: pointer;\n}\n\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day-names,\n.react-datepicker__week {\n  white-space: nowrap;\n}\n\n.react-datepicker__day-name,\n.react-datepicker__day,\n.react-datepicker__time-name {\n  color: #000;\n  display: inline-block;\n  width: 1.7rem;\n  line-height: 1.7rem;\n  text-align: center;\n  margin: 0.166rem;\n}\n\n.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n\n.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__month--disabled {\n  color: #ccc;\n  pointer-events: none;\n}\n\n.react-datepicker__month--disabled:hover {\n  cursor: default;\n  background-color: transparent;\n}\n\n.react-datepicker__day,\n.react-datepicker__month-text {\n  cursor: pointer;\n}\n\n.react-datepicker__day:hover,\n.react-datepicker__month-text:hover {\n  border-radius: 0.3rem;\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__day--today,\n.react-datepicker__month-text--today {\n  font-weight: bold;\n}\n\n.react-datepicker__day--highlighted,\n.react-datepicker__month-text--highlighted {\n  border-radius: 0.3rem;\n  background-color: #3dcc4a;\n  color: #fff;\n}\n\n.react-datepicker__day--highlighted:hover,\n.react-datepicker__month-text--highlighted:hover {\n  background-color: #32be3f;\n}\n\n.react-datepicker__day--highlighted-custom-1,\n.react-datepicker__month-text--highlighted-custom-1 {\n  color: magenta;\n}\n\n.react-datepicker__day--highlighted-custom-2,\n.react-datepicker__month-text--highlighted-custom-2 {\n  color: green;\n}\n\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,\n.react-datepicker__month-text--selected,\n.react-datepicker__month-text--in-selecting-range,\n.react-datepicker__month-text--in-range {\n  border-radius: 0.3rem;\n  background-color: #216ba5;\n  color: #fff;\n}\n\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,\n.react-datepicker__month-text--selected:hover,\n.react-datepicker__month-text--in-selecting-range:hover,\n.react-datepicker__month-text--in-range:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--keyboard-selected,\n.react-datepicker__month-text--keyboard-selected {\n  border-radius: 0.3rem;\n  background-color: #2a87d0;\n  color: #fff;\n}\n\n.react-datepicker__day--keyboard-selected:hover,\n.react-datepicker__month-text--keyboard-selected:hover {\n  background-color: #1d5d90;\n}\n\n.react-datepicker__day--in-selecting-range ,\n.react-datepicker__month-text--in-selecting-range {\n  background-color: rgba(33, 107, 165, 0.5);\n}\n\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range , .react-datepicker__month--selecting-range\n.react-datepicker__month-text--in-range {\n  background-color: #f0f0f0;\n  color: #000;\n}\n\n.react-datepicker__day--disabled,\n.react-datepicker__month-text--disabled {\n  cursor: default;\n  color: #ccc;\n}\n\n.react-datepicker__day--disabled:hover,\n.react-datepicker__month-text--disabled:hover {\n  background-color: transparent;\n}\n\n.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover {\n  background-color: #216ba5;\n}\n\n.react-datepicker__month-text:hover {\n  background-color: #f0f0f0;\n}\n\n.react-datepicker__input-container {\n  position: relative;\n  display: inline-block;\n}\n\n.react-datepicker__year-read-view,\n.react-datepicker__month-read-view,\n.react-datepicker__month-year-read-view {\n  border: 1px solid transparent;\n  border-radius: 0.3rem;\n}\n\n.react-datepicker__year-read-view:hover,\n.react-datepicker__month-read-view:hover,\n.react-datepicker__month-year-read-view:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-read-view--down-arrow,\n.react-datepicker__month-read-view--down-arrow,\n.react-datepicker__month-year-read-view--down-arrow {\n  border-top-color: #ccc;\n  float: right;\n  margin-left: 20px;\n  top: 8px;\n  position: relative;\n  border-width: 0.45rem;\n}\n\n.react-datepicker__year-dropdown,\n.react-datepicker__month-dropdown,\n.react-datepicker__month-year-dropdown {\n  background-color: #f0f0f0;\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 30px;\n  z-index: 1;\n  text-align: center;\n  border-radius: 0.3rem;\n  border: 1px solid #aeaeae;\n}\n\n.react-datepicker__year-dropdown:hover,\n.react-datepicker__month-dropdown:hover,\n.react-datepicker__month-year-dropdown:hover {\n  cursor: pointer;\n}\n\n.react-datepicker__year-dropdown--scrollable,\n.react-datepicker__month-dropdown--scrollable,\n.react-datepicker__month-year-dropdown--scrollable {\n  height: 150px;\n  overflow-y: scroll;\n}\n\n.react-datepicker__year-option,\n.react-datepicker__month-option,\n.react-datepicker__month-year-option {\n  line-height: 20px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.react-datepicker__year-option:first-of-type,\n.react-datepicker__month-option:first-of-type,\n.react-datepicker__month-year-option:first-of-type {\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:last-of-type,\n.react-datepicker__month-option:last-of-type,\n.react-datepicker__month-year-option:last-of-type {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-bottom-left-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.react-datepicker__year-option:hover,\n.react-datepicker__month-option:hover,\n.react-datepicker__month-year-option:hover {\n  background-color: #ccc;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n  border-bottom-color: #b3b3b3;\n}\n\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n  border-top-color: #b3b3b3;\n}\n\n.react-datepicker__year-option--selected,\n.react-datepicker__month-option--selected,\n.react-datepicker__month-year-option--selected {\n  position: absolute;\n  left: 15px;\n}\n\n.react-datepicker__close-icon {\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  outline: 0;\n  padding: 0;\n  vertical-align: middle;\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  top: 25%;\n  right: 7px;\n}\n\n.react-datepicker__close-icon::after {\n  background-color: #216ba5;\n  border-radius: 50%;\n  bottom: 0;\n  box-sizing: border-box;\n  color: #fff;\n  content: \"\\D7\";\n  cursor: pointer;\n  font-size: 12px;\n  height: 16px;\n  width: 16px;\n  line-height: 1;\n  margin: -8px auto 0;\n  padding: 2px;\n  position: absolute;\n  right: 0px;\n  text-align: center;\n}\n\n.react-datepicker__today-button {\n  background: #f0f0f0;\n  border-top: 1px solid #aeaeae;\n  cursor: pointer;\n  text-align: center;\n  font-weight: bold;\n  padding: 5px 0;\n  clear: left;\n}\n\n.react-datepicker__portal {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  left: 0;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  z-index: 2147483647;\n}\n\n.react-datepicker__portal .react-datepicker__day-name,\n.react-datepicker__portal .react-datepicker__day,\n.react-datepicker__portal .react-datepicker__time-name {\n  width: 3rem;\n  line-height: 3rem;\n}\n\n@media (max-width: 400px), (max-height: 550px) {\n  .react-datepicker__portal .react-datepicker__day-name,\n  .react-datepicker__portal .react-datepicker__day,\n  .react-datepicker__portal .react-datepicker__time-name {\n    width: 2rem;\n    line-height: 2rem;\n  }\n}\n\n.react-datepicker__portal .react-datepicker__current-month,\n.react-datepicker__portal .react-datepicker-time__header {\n  font-size: 1.44rem;\n}\n\n.react-datepicker__portal .react-datepicker__navigation {\n  border: 0.81rem solid transparent;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous {\n  border-right-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n  border-right-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n  border-right-color: #e6e6e6;\n  cursor: default;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next {\n  border-left-color: #ccc;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next:hover {\n  border-left-color: #b3b3b3;\n}\n\n.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n  border-left-color: #e6e6e6;\n  cursor: default;\n}\n", ""]);

// exports


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

/***/ "./src/ScamInfoPage.js":
/*!*****************************!*\
  !*** ./src/ScamInfoPage.js ***!
  \*****************************/
/*! exports provided: ScamInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoPage", function() { return ScamInfoPage; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/ScamInfoForm */ "./src/forms/ScamInfoForm.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stepper */ "./src/components/stepper/index.js");



/** @jsx jsx */









var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "eo59bz50",
  label: "CenterContent"
})( false ? undefined : {
  name: "9u32ac",
  styles: "max-width:750px;margin:auto;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1NjYW1JbmZvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvU2NhbUluZm9QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEgxIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgU2NhbUluZm9Gb3JtIH0gZnJvbSAnLi9mb3Jtcy9TY2FtSW5mb0Zvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgU3RlcHMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RlcHBlcidcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogYXV0bztcbmBcblxuY29uc3QgdG9wQmFyQ29udGFpbmVyID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYFxuXG5jb25zdCBzdWJtaXRBbmROYXZpZ2F0ZSA9IChjbGllbnQsIGRhdGEpID0+IHtcbiAgY2xpZW50LndyaXRlRGF0YSh7IGRhdGEgfSlcbiAgbmF2aWdhdGUoJy9tb25leWxvc3RxdWVzdGlvbicpXG59XG5cbmV4cG9ydCBjb25zdCBTY2FtSW5mb1BhZ2UgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxDb250YWluZXIgY3NzPXt0b3BCYXJDb250YWluZXJ9PlxuICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezB9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPkRlc2NyaWJlIHRoZSBzY2FtPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPkdldHRpbmcgYW4gdW5kZXJzdGFuZGluZyBvZiBob3cgdGhlIHNjYW0gdG9vayBwbGFjZSBjYW4gaGVscCBsaW5rIHlvdXJcbiAgICAgIHJlcG9ydCB0byBvdGhlciBzaW1pbGFyIHJlcG9ydHMgYW5kIGJ1aWxkIGEgc3Ryb25nZXIgY2FzZSBmb3IgYW5cbiAgICAgIGludmVzdGlnYXRpb24uPC9UcmFucz5cbiAgICA8L1A+XG4gICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgPFNjYW1JbmZvRm9ybSBvblN1Ym1pdD17c3VibWl0QW5kTmF2aWdhdGV9IC8+XG4gIDwvQ2VudGVyQ29udGVudD5cbilcbiJdfQ== */"
});

var topBarContainer =  false ? undefined : {
  name: "y0ci5a-topBarContainer",
  styles: "display:flex;width:90%;flex-direction:row;margin-bottom:20px;label:topBarContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1NjYW1JbmZvUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQjJCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1NjYW1JbmZvUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFNjYW1JbmZvRm9ybSB9IGZyb20gJy4vZm9ybXMvU2NhbUluZm9Gb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0ZXBwZXInXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW46IGF1dG87XG5gXG5cbmNvbnN0IHRvcEJhckNvbnRhaW5lciA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuY29uc3Qgc3VibWl0QW5kTmF2aWdhdGUgPSAoY2xpZW50LCBkYXRhKSA9PiB7XG4gIGNsaWVudC53cml0ZURhdGEoeyBkYXRhIH0pXG4gIG5hdmlnYXRlKCcvbW9uZXlsb3N0cXVlc3Rpb24nKVxufVxuXG5leHBvcnQgY29uc3QgU2NhbUluZm9QYWdlID0gKCkgPT4gKFxuICA8Q2VudGVyQ29udGVudD5cbiAgICA8Q29udGFpbmVyIGNzcz17dG9wQmFyQ29udGFpbmVyfT5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXswfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5EZXNjcmliZSB0aGUgc2NhbTwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5HZXR0aW5nIGFuIHVuZGVyc3RhbmRpbmcgb2YgaG93IHRoZSBzY2FtIHRvb2sgcGxhY2UgY2FuIGhlbHAgbGluayB5b3VyXG4gICAgICByZXBvcnQgdG8gb3RoZXIgc2ltaWxhciByZXBvcnRzIGFuZCBidWlsZCBhIHN0cm9uZ2VyIGNhc2UgZm9yIGFuXG4gICAgICBpbnZlc3RpZ2F0aW9uLjwvVHJhbnM+XG4gICAgPC9QPlxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgIDxTY2FtSW5mb0Zvcm0gb25TdWJtaXQ9e3N1Ym1pdEFuZE5hdmlnYXRlfSAvPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
};

var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])('/moneylostquestion');
};

var ScamInfoPage = function ScamInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CenterContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    css: topBarContainer
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_9__["Steps"], {
    activeStep: 0
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Describe the scam"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Getting an understanding of how the scam took place can help link your report to other similar reports and build a stronger case for an investigation."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_7__["ScamInfoForm"], {
    onSubmit: submitAndNavigate
  }));
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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locale_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale/fr */ "./src/components/date-picker/locale/fr/index.js");
/* harmony import */ var _locale_en_CA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale/en-CA */ "./src/components/date-picker/locale/en-CA/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);



/** @jsx jsx */






Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])('fr', _locale_fr__WEBPACK_IMPORTED_MODULE_5__["default"]);
Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])('en', _locale_en_CA__WEBPACK_IMPORTED_MODULE_6__["default"]);

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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "1rs3emy-ScamInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScamInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SzBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "1rs3emy-ScamInfoForm",
  styles: "display:flex;flex-direction:column;justify-content:space-between;label:ScamInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TDBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgRGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlLXBpY2tlcidcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcbmNvbnN0IERhdGVTZWxlY3RvckFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKERhdGVTZWxlY3RvcilcblxuY29uc3QgaG93Q29udGFjdGVkID0gW1xuICBpMThuTWFyaygncGhvbmUnKSxcbiAgaTE4bk1hcmsoJ2VtYWlsJyksXG4gIGkxOG5NYXJrKCd3ZWJzaXRlIGxpbmsnKSxcbiAgaTE4bk1hcmsoJ290aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGRhdGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RhcnREYXRlOiBkYXRlLFxuICAgIH0pXG4gIH1cblxuICBsb2NhbE9uU3VibWl0ID0gKGNsaWVudCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgb25TdWJtaXQgfSA9IHRoaXMucHJvcHNcbiAgICAvLyBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gYCR7dGhpcy5zdGF0ZS5zdGFydERhdGV9YC5zdWJzdHIoMCwgMTUpXG5cbiAgICBkYXRhLndoZW5XZXJlWW91Q29udGFjdGVkID0gdGhpcy5zdGF0ZS5zdGFydERhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcblxuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ/PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPldoZW4gZGlkIGl0IGhhcHBlbj88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVTZWxlY3RvckFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2kxOG4uXygnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+SG93IGRpZCBpdCBzdGFydD88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGhvd0NvbnRhY3RlZC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdvdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBjaGFubmVsPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDVweFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGludWU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17WzEsIG51bGwsIDFdfVxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkxpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuXG5TY2FtSW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
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
              id: "Cancel report"
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

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ })

};
//# sourceMappingURL=main.7d6c1428f160e2d2770a.hot-update.js.map