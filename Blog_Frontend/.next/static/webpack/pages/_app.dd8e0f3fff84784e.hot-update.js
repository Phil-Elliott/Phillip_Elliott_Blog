/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_SubscribeModal_SubscribeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubscribeModal/SubscribeModal */ \"./components/SubscribeModal/SubscribeModal.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [displayModal, setDisplayModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const changeModalDisplay = ()=>{\n        setDisplayModal(!displayModal);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeModal_SubscribeModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                changeModalDisplay: changeModalDisplay,\n                displayModal: displayModal\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                changeModalDisplay: changeModalDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"nii+Z+SSufn7KplZ59MggJswYaE=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0Y7QUFDK0I7QUFDeEM7QUFDRDtBQUVoQyxTQUFTSyxNQUFNLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBQ2IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUV0RCxNQUFNVSxxQkFBcUIsSUFBTTtRQUMvQkQsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNOLDBEQUFNQTs7MEJBQ0wsOERBQUNDLGlGQUFjQTtnQkFDYk8sb0JBQW9CQTtnQkFDcEJGLGNBQWNBOzs7Ozs7MEJBRWhCLDhEQUFDRjtnQkFBVyxHQUFHQyxTQUFTO2dCQUFFRyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7QUFHcEQ7R0FoQlNMO0tBQUFBO0FBa0JULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFN1YnNjcmliZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnNjcmliZU1vZGFsL1N1YnNjcmliZU1vZGFsXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2Rpc3BsYXlNb2RhbCwgc2V0RGlzcGxheU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbERpc3BsYXkgPSAoKSA9PiB7XG4gICAgc2V0RGlzcGxheU1vZGFsKCFkaXNwbGF5TW9kYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTdWJzY3JpYmVNb2RhbFxuICAgICAgICBjaGFuZ2VNb2RhbERpc3BsYXk9e2NoYW5nZU1vZGFsRGlzcGxheX1cbiAgICAgICAgZGlzcGxheU1vZGFsPXtkaXNwbGF5TW9kYWx9XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBjaGFuZ2VNb2RhbERpc3BsYXk9e2NoYW5nZU1vZGFsRGlzcGxheX0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJTdWJzY3JpYmVNb2RhbCIsIlNjcmlwdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGlzcGxheU1vZGFsIiwic2V0RGlzcGxheU1vZGFsIiwiY2hhbmdlTW9kYWxEaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ }),

/***/ "./node_modules/next/script.js":
/*!*************************************!*\
  !*** ./node_modules/next/script.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports =\n   false\n    ? 0\n    : __webpack_require__(/*! ./dist/client/script */ \"./node_modules/next/dist/client/script.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9zY3JpcHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxFQUFFLE1BQW1DO0FBQ3JDLE1BQU0sQ0FBbUM7QUFDekMsTUFBTSxtQkFBTyxDQUFDLHVFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9zY3JpcHQuanM/ZTRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9XG4gIHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSA9PT0gJ2VkZ2UnXG4gICAgPyByZXF1aXJlKCcuL2Rpc3QvZXNtL2NsaWVudC9zY3JpcHQnKVxuICAgIDogcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9zY3JpcHQnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/script.js\n"));

/***/ })

});