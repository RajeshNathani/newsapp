webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "F:\\web\\nextjs_\\components\\News.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var News = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(News, _Component);

  var _super = _createSuper(News);

  function News() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "render",
    value: function render() {
      var _this = this;

      var json = this.props.articles;
      var arr = [];
      Object.keys(json).forEach(function (key) {
        arr.push(json[key]);
      });
      var listItems = arr[2].map(function (link) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            "class": "btn btn-primary",
            "data-toggle": "collapse",
            href: "#collapseExample",
            role: "button",
            "aria-expanded": "false",
            "aria-controls": "collapseExample",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
              className: "list-group-item",
              children: link.title
            }, link.title, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 151
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            "class": "collapse",
            id: "collapseExample",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              "class": "card card-body",
              children: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 3
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, _this);
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          className: "list-group",
          children: listItems
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this);
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJqc29uIiwicHJvcHMiLCJhcnRpY2xlcyIsImFyciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHVzaCIsImxpc3RJdGVtcyIsIm1hcCIsImxpbmsiLCJ0aXRsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUE7O0FBQ0wsVUFBSUMsSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsUUFBdEI7QUFDQSxVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBQyxZQUFNLENBQUNDLElBQVAsQ0FBWUwsSUFBWixFQUFrQk0sT0FBbEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFjO0FBQ3RDSixXQUFHLENBQUNLLElBQUosQ0FBU1IsSUFBSSxDQUFDTyxHQUFELENBQWI7QUFDRCxPQUZEO0FBR0EsVUFBTUUsU0FBUyxHQUFHTixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9PLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsNEJBQzdCO0FBQUEsa0NBQ0E7QUFBRyxxQkFBTSxpQkFBVDtBQUEyQiwyQkFBWSxVQUF2QztBQUFrRCxnQkFBSSxFQUFDLGtCQUF2RDtBQUEwRSxnQkFBSSxFQUFDLFFBQS9FO0FBQXdGLDZCQUFjLE9BQXRHO0FBQThHLDZCQUFjLGlCQUE1SDtBQUFBLG1DQUE4STtBQUFxQix1QkFBUyxFQUFDLGlCQUEvQjtBQUFBLHdCQUFrREEsSUFBSSxDQUFDQztBQUF2RCxlQUFTRCxJQUFJLENBQUNDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBSyxxQkFBTSxVQUFYO0FBQXNCLGNBQUUsRUFBQyxpQkFBekI7QUFBQSxtQ0FDTjtBQUFLLHVCQUFNLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRDZCO0FBQUEsT0FBWCxDQUFsQjtBQVVBLDBCQUNJO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQSxvQkFDS0g7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBT0g7Ozs7RUF4QjZCSSwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NTI5MWRiMTE0NmY2MWYyNzNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLnByb3BzLmFydGljbGVzXHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGpzb24pLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICBhcnIucHVzaChqc29uW2tleV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtcyA9IGFyclsyXS5tYXAoKGxpbmspID0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBocmVmPVwiI2NvbGxhcHNlRXhhbXBsZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VFeGFtcGxlXCI+PGxpIGtleT17bGluay50aXRsZX0gY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPntsaW5rLnRpdGxlfTwvbGk+PC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwiY29sbGFwc2VFeGFtcGxlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICBBbmltIHBhcmlhdHVyIGNsaWNoZSByZXByZWhlbmRlcml0LCBlbmltIGVpdXNtb2QgaGlnaCBsaWZlIGFjY3VzYW11cyB0ZXJyeSByaWNoYXJkc29uIGFkIHNxdWlkLiBOaWhpbCBhbmltIGtlZmZpeWVoIGhlbHZldGljYSwgY3JhZnQgYmVlciBsYWJvcmUgd2VzIGFuZGVyc29uIGNyZWQgbmVzY2l1bnQgc2FwaWVudGUgZWEgcHJvaWRlbnQuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbGlzdC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtc31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9