"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/index */ \"./components/Home/index.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Home_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/Home/Home.module.scss */ \"./styles/Home/Home.module.scss\");\n/* harmony import */ var _styles_Home_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar Home = function(param) {\n    var posts = param.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"home-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_2__.Meta, {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_index__WEBPACK_IMPORTED_MODULE_1__.Featured, {\n                post: posts[0]\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_index__WEBPACK_IMPORTED_MODULE_1__.Latest, {\n                posts: posts\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_index__WEBPACK_IMPORTED_MODULE_1__.Popular, {\n                posts: posts\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); /*\n2) Have modal come down from top \n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXFFO0FBQzNCO0FBR2E7QUFFdkQsSUFBTUssSUFBSSxHQUFHLGdCQUFlO1FBQVpDLEtBQUssU0FBTEEsS0FBSztJQUNuQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLHdGQUF3Qjs7MEJBQ3RDLDhEQUFDRCxrREFBSTtnQkFBQ00sS0FBSyxFQUFDLE1BQU07Ozs7O3FCQUFHOzBCQUNyQiw4REFBQ1QsNERBQVE7Z0JBQUNVLElBQUksRUFBRUosS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7cUJBQUk7MEJBQzVCLDhEQUFDSiwwREFBTTtnQkFBQ0ksS0FBSyxFQUFFQSxLQUFLOzs7OztxQkFBSTswQkFDeEIsOERBQUNMLDJEQUFPO2dCQUFDSyxLQUFLLEVBQUVBLEtBQUs7Ozs7O3FCQUFJOzs7Ozs7YUFDckIsQ0FDTjtDQUNIO0FBVEtELEtBQUFBLElBQUk7O0FBaUNWLCtEQUFlQSxJQUFJLEVBQUMsQ0FFcEI7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZlYXR1cmVkLCBQb3B1bGFyLCBMYXRlc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL2luZGV4XCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvSG9tZS9Ib21lLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEhvbWUgPSAoeyBwb3N0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtY29udGFpbmVyXCJdfT5cbiAgICAgIDxNZXRhIHRpdGxlPVwiSG9tZVwiIC8+XG4gICAgICA8RmVhdHVyZWQgcG9zdD17cG9zdHNbMF19IC8+XG4gICAgICA8TGF0ZXN0IHBvc3RzPXtwb3N0c30gLz5cbiAgICAgIDxQb3B1bGFyIHBvc3RzPXtwb3N0c30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiBdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykge1xuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG4gICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfVxuICAgICBcbiAgICAgIGJvZHksXG4gICAgICBtYWluSW1hZ2UsIFxuICAgICAgc2x1ZywgXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIGNhdGVnb3JpZXNcbiAgICB9XG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8qXG4yKSBIYXZlIG1vZGFsIGNvbWUgZG93biBmcm9tIHRvcCBcblxuXG4qL1xuIl0sIm5hbWVzIjpbIkZlYXR1cmVkIiwiUG9wdWxhciIsIkxhdGVzdCIsIk1ldGEiLCJzdHlsZXMiLCJIb21lIiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});