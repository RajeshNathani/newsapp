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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "list-group-item",
            children: [link.title, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              "class": "btn btn-primary",
              "data-toggle": "collapse",
              href: "#collapseExample",
              role: "button",
              "aria-expanded": "false",
              "aria-controls": "collapseExample",
              children: "Link with href"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 71
            }, _this)]
          }, link.title, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzLmpzIl0sIm5hbWVzIjpbIk5ld3MiLCJqc29uIiwicHJvcHMiLCJhcnRpY2xlcyIsImFyciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHVzaCIsImxpc3RJdGVtcyIsIm1hcCIsImxpbmsiLCJ0aXRsZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUE7O0FBQ0wsVUFBSUMsSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsUUFBdEI7QUFDQSxVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBQyxZQUFNLENBQUNDLElBQVAsQ0FBWUwsSUFBWixFQUFrQk0sT0FBbEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFjO0FBQ3RDSixXQUFHLENBQUNLLElBQUosQ0FBU1IsSUFBSSxDQUFDTyxHQUFELENBQWI7QUFDRCxPQUZEO0FBR0EsVUFBTUUsU0FBUyxHQUFHTixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9PLEdBQVAsQ0FBVyxVQUFDQyxJQUFEO0FBQUEsNEJBQzdCO0FBQUEsa0NBQ0E7QUFBcUIscUJBQVMsRUFBQyxpQkFBL0I7QUFBQSx1QkFBa0RBLElBQUksQ0FBQ0MsS0FBdkQsb0JBQThEO0FBQUcsdUJBQU0saUJBQVQ7QUFBMkIsNkJBQVksVUFBdkM7QUFBa0Qsa0JBQUksRUFBQyxrQkFBdkQ7QUFBMEUsa0JBQUksRUFBQyxRQUEvRTtBQUF3RiwrQkFBYyxPQUF0RztBQUE4RywrQkFBYyxpQkFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlEO0FBQUEsYUFBU0QsSUFBSSxDQUFDQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFLLHFCQUFNLFVBQVg7QUFBc0IsY0FBRSxFQUFDLGlCQUF6QjtBQUFBLG1DQUNOO0FBQUssdUJBQU0sZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFENkI7QUFBQSxPQUFYLENBQWxCO0FBVUEsMEJBQ0k7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBLG9CQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFPSDs7OztFQXhCNkJJLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE2ZjY5MTI0NjRmZjkzMWRlODc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIganNvbiA9IHRoaXMucHJvcHMuYXJ0aWNsZXNcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXMoanNvbikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgIGFyci5wdXNoKGpzb25ba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1zID0gYXJyWzJdLm1hcCgobGluaykgPT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxsaSBrZXk9e2xpbmsudGl0bGV9IGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz57bGluay50aXRsZX0gPGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgaHJlZj1cIiNjb2xsYXBzZUV4YW1wbGVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cImNvbGxhcHNlRXhhbXBsZVwiPkxpbmsgd2l0aCBocmVmPC9hPjwvbGk+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzZUV4YW1wbGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHlcIj5cclxuICAgIEFuaW0gcGFyaWF0dXIgY2xpY2hlIHJlcHJlaGVuZGVyaXQsIGVuaW0gZWl1c21vZCBoaWdoIGxpZmUgYWNjdXNhbXVzIHRlcnJ5IHJpY2hhcmRzb24gYWQgc3F1aWQuIE5paGlsIGFuaW0ga2VmZml5ZWggaGVsdmV0aWNhLCBjcmFmdCBiZWVyIGxhYm9yZSB3ZXMgYW5kZXJzb24gY3JlZCBuZXNjaXVudCBzYXBpZW50ZSBlYSBwcm9pZGVudC5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=