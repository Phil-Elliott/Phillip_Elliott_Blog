"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Subscribe_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Subscribe-Modal */ \"./components/Subscribe-Modal.js\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), displayModal = ref[0], setDisplayModal = ref[1];\n    // useEffect(() => {\n    //   setDisplayModal(JSON.parse(localStorage.getItem(\"subscribed\")));\n    // }, [localStorage.getItem(\"subscribed\")]);\n    // let local = localStorage.getItem(\"subscribed\");\n    // useEffect(() => {\n    //   if (localStorage.getItem(\"subscribed\") === \"false\") {\n    //     setDisplayModal(true);\n    //   } else {\n    //     setDisplayModal(false);\n    //   }\n    //   console.log(displayModal);\n    // }, [local]);\n    // useEffect(() => {\n    //   console.log(displayModal);\n    //   function checkUserData() {\n    //     const item = localStorage.getItem(\"subscribed\");\n    //     console.log(item);\n    //     if (item) {\n    //       setDisplayModal(item);\n    //     }\n    //   }\n    //   window.addEventListener(\"storage\", checkUserData);\n    //   return () => {\n    //     window.removeEventListener(\"storage\", checkUserData);\n    //   };\n    // }, []);\n    var changeModalDisplay = function() {\n        console.log(\"baby\");\n        setDisplayModal(!displayModal);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Subscribe_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                changeModalDisplay: changeModalDisplay\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ0Y7QUFDaUI7QUFDM0I7QUFFaEMsU0FBU0ksS0FBSyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7O0lBQ25DLElBQXdDTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWhETyxZQUFZLEdBQXFCUCxHQUFlLEdBQXBDLEVBQUVRLGVBQWUsR0FBSVIsR0FBZSxHQUFuQjtJQUVwQyxvQkFBb0I7SUFDcEIscUVBQXFFO0lBQ3JFLDRDQUE0QztJQUU1QyxrREFBa0Q7SUFFbEQsb0JBQW9CO0lBQ3BCLDBEQUEwRDtJQUMxRCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sK0JBQStCO0lBQy9CLGVBQWU7SUFFZixvQkFBb0I7SUFDcEIsK0JBQStCO0lBRS9CLCtCQUErQjtJQUMvQix1REFBdUQ7SUFDdkQseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLE1BQU07SUFFTix1REFBdUQ7SUFFdkQsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCxPQUFPO0lBQ1AsVUFBVTtJQUVWLElBQU1TLGtCQUFrQixHQUFHLFdBQU07UUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCSCxlQUFlLENBQUMsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7S0FDaEM7SUFFRCxxQkFDRSw4REFBQ0wsMERBQU07OzBCQUNMLDhEQUFDQyxtRUFBYztnQkFBQ00sa0JBQWtCLEVBQUVBLGtCQUFrQjs7Ozs7b0JBQUk7MEJBQzFELDhEQUFDSixTQUFTLHFGQUFLQyxTQUFTOzs7O29CQUFJOzs7Ozs7WUFDckIsQ0FDVDtDQUNIO0dBL0NRRixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUFpRGQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBTdWJzY3JpYmVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJzY3JpYmUtTW9kYWxcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtkaXNwbGF5TW9kYWwsIHNldERpc3BsYXlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXREaXNwbGF5TW9kYWwoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1YnNjcmliZWRcIikpKTtcbiAgLy8gfSwgW2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3Vic2NyaWJlZFwiKV0pO1xuXG4gIC8vIGxldCBsb2NhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3Vic2NyaWJlZFwiKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1YnNjcmliZWRcIikgPT09IFwiZmFsc2VcIikge1xuICAvLyAgICAgc2V0RGlzcGxheU1vZGFsKHRydWUpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBzZXREaXNwbGF5TW9kYWwoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyhkaXNwbGF5TW9kYWwpO1xuICAvLyB9LCBbbG9jYWxdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGRpc3BsYXlNb2RhbCk7XG5cbiAgLy8gICBmdW5jdGlvbiBjaGVja1VzZXJEYXRhKCkge1xuICAvLyAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3Vic2NyaWJlZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAvLyAgICAgaWYgKGl0ZW0pIHtcbiAgLy8gICAgICAgc2V0RGlzcGxheU1vZGFsKGl0ZW0pO1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBjaGVja1VzZXJEYXRhKTtcblxuICAvLyAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgY2hlY2tVc2VyRGF0YSk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIGNvbnN0IGNoYW5nZU1vZGFsRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImJhYnlcIik7XG4gICAgc2V0RGlzcGxheU1vZGFsKCFkaXNwbGF5TW9kYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTdWJzY3JpYmVNb2RhbCBjaGFuZ2VNb2RhbERpc3BsYXk9e2NoYW5nZU1vZGFsRGlzcGxheX0gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJTdWJzY3JpYmVNb2RhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGlzcGxheU1vZGFsIiwic2V0RGlzcGxheU1vZGFsIiwiY2hhbmdlTW9kYWxEaXNwbGF5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});