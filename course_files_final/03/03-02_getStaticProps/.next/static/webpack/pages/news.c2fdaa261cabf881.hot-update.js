"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ News; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n\n\nvar __N_SSG = true;\nfunction News(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Top Stories\"\n            }, void 0, false, {\n                fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-02_getStaticProps/pages/news/index.js\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: results.map(function(result) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: result.url,\n                            target: \"_blank\",\n                            rel: \"noopener norefferer\",\n                            children: result.title\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-02_getStaticProps/pages/news/index.js\",\n                            lineNumber: 9,\n                            columnNumber: 41\n                        }, _this)\n                    }, result.uri, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-02_getStaticProps/pages/news/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 20\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-02_getStaticProps/pages/news/index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/learning-nextjs-2491193/course_files/03/03-02_getStaticProps/pages/news/index.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n};\n_c = News;\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEM7O0FBRTdCLFNBQVNDLElBQUksQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPOztJQUNsQyxxQkFDRSw4REFBQ0YsMERBQU07OzBCQUNMLDhEQUFDRyxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsSUFBRTswQkFDQUYsT0FBTyxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLE1BQU0sRUFBSTtvQkFDckIscUJBQU8sOERBQUNDLElBQUU7a0NBQWtCLDRFQUFDQyxHQUFDOzRCQUFDQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0ksR0FBRzs0QkFBRUMsTUFBTSxFQUFDLFFBQVE7NEJBQUNDLEdBQUcsRUFBQyxxQkFBcUI7c0NBQUVOLE1BQU0sQ0FBQ08sS0FBSzs7Ozs7aUNBQUs7dUJBQTdGUCxNQUFNLENBQUNRLEdBQUc7Ozs7NkJBQXdGLENBQUM7aUJBQ3BILENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDRSxDQUNWO0NBQ0o7QUFYdUJiLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9pbmRleC5qcz83YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IHJlc3VsdHMgfSkge1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5Ub3AgU3RvcmllczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJldHVybig8bGkga2V5PXtyZXN1bHQudXJpfT48YSBocmVmPXtyZXN1bHQudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmZlcmVyXCI+e3Jlc3VsdC50aXRsZX08L2E+PC9saT4pXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmNvbnN0IEFQSV9LRVkgPSBcIjloVXZPcUdHZG5DQnZHS2c0RUIzTDdtR2RCQzhoS0tKXCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgVVJMID0gYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy90b3BzdG9yaWVzL3YyL2hvbWUuanNvbj9hcGkta2V5PSR7QVBJX0tFWX1gXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cylcbiAgLy8gVGhlIHZhbHVlIG9mIHRoZSBgcHJvcHNgIGtleSB3aWxsIGJlXG4gIC8vICBwYXNzZWQgdG8gdGhlIGBIb21lYCBjb21wb25lbnRcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVzdWx0cyA6IGRhdGEucmVzdWx0c1xuICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJOZXdzIiwicmVzdWx0cyIsImgxIiwidWwiLCJtYXAiLCJyZXN1bHQiLCJsaSIsImEiLCJocmVmIiwidXJsIiwidGFyZ2V0IiwicmVsIiwidGl0bGUiLCJ1cmkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/index.js\n");

/***/ })

});