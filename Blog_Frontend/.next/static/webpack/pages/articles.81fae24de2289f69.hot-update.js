"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./components/Articles/PageIndex.js":
/*!******************************************!*\
  !*** ./components/Articles/PageIndex.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar PageIndex = function(param) {\n    var changePage = param.changePage, pageCount = param.pageCount, pageNumber = param.pageNumber;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: pageCount > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"articles-numberLine-container\"]),\n            children: [\n                pageNumber > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronLeft, {\n                    className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"numberLine-arrow\"]),\n                    onClick: function() {\n                        return changePage(pageNumber - 1);\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Articles/PageIndex.js\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"articles-numberLine\"]),\n                    children: Array.from(Array(pageCount).keys()).map(function(number) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: number + 1 === pageNumber ? {\n                                color: \"#d05a49\"\n                            } : {},\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"articles-numberLine-number\"]),\n                            onClick: function() {\n                                return changePage(pageNumber + 1);\n                            },\n                            children: number + 1\n                        }, number, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Articles/PageIndex.js\",\n                            lineNumber: 20,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Articles/PageIndex.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this),\n                pageNumber < pageCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {\n                    className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"numberLine-arrow\"]),\n                    onClick: function() {\n                        return changePage(pageNumber + 1);\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Articles/PageIndex.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Articles/PageIndex.js\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_c = PageIndex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageIndex);\nvar _c;\n$RefreshReg$(_c, \"PageIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVzL1BhZ2VJbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUMrQjtBQUNNO0FBRS9ELElBQU1JLFNBQVMsR0FBRyxnQkFBMkM7UUFBeENDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsVUFBVSxTQUFWQSxVQUFVO0lBQ3BELHFCQUNFO2tCQUNHRCxTQUFTLEdBQUcsQ0FBQyxrQkFDWiw4REFBQ0UsS0FBRztZQUFDQyxTQUFTLEVBQUVSLHNHQUF1Qzs7Z0JBQ3BETSxVQUFVLEdBQUcsQ0FBQyxrQkFDYiw4REFBQ0wseURBQWE7b0JBQ1pPLFNBQVMsRUFBRVIseUZBQTBCO29CQUNyQ1MsT0FBTyxFQUFFOytCQUFNTCxVQUFVLENBQUNFLFVBQVUsR0FBRyxDQUFDLENBQUM7cUJBQUE7Ozs7O3lCQUN6Qzs4QkFHSiw4REFBQ0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFFUiw0RkFBNkI7OEJBQzFDVSxLQUFLLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDTCxTQUFTLENBQUMsQ0FBQ08sSUFBSSxFQUFFLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLE1BQU0sRUFBSzt3QkFDbkQscUJBQ0UsOERBQUNQLEtBQUc7NEJBQ0ZRLEtBQUssRUFBRUQsTUFBTSxHQUFHLENBQUMsS0FBS1IsVUFBVSxHQUFHO2dDQUFFVSxLQUFLLEVBQUUsU0FBUzs2QkFBRSxHQUFHLEVBQUU7NEJBQzVEUixTQUFTLEVBQUVSLG1HQUFvQzs0QkFDL0NTLE9BQU8sRUFBRTt1Q0FBTUwsVUFBVSxDQUFDRSxVQUFVLEdBQUcsQ0FBQyxDQUFDOzZCQUFBO3NDQUd4Q1EsTUFBTSxHQUFHLENBQUM7MkJBRk5BLE1BQU07Ozs7aUNBR1AsQ0FDTjtxQkFDSCxDQUFDOzs7Ozt5QkFDRTtnQkFFTFIsVUFBVSxHQUFHRCxTQUFTLGtCQUNyQiw4REFBQ0gsMERBQWM7b0JBQ2JNLFNBQVMsRUFBRVIseUZBQTBCO29CQUNyQ1MsT0FBTyxFQUFFOytCQUFNTCxVQUFVLENBQUNFLFVBQVUsR0FBRyxDQUFDLENBQUM7cUJBQUE7Ozs7O3lCQUN6Qzs7Ozs7O2lCQUVBO3FCQUVQLENBQ0g7Q0FDSDtBQXJDS0gsS0FBQUEsU0FBUztBQXVDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0aWNsZXMvUGFnZUluZGV4LmpzP2JlNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IFBhZ2VJbmRleCA9ICh7IGNoYW5nZVBhZ2UsIHBhZ2VDb3VudCwgcGFnZU51bWJlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwYWdlQ291bnQgPiAxICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICB7cGFnZU51bWJlciA+IDEgJiYgKFxuICAgICAgICAgICAgPEZhQ2hldnJvbkxlZnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJudW1iZXJMaW5lLWFycm93XCJdfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIgLSAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lXCJdfT5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KHBhZ2VDb3VudCkua2V5cygpKS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtudW1iZXIgKyAxID09PSBwYWdlTnVtYmVyID8geyBjb2xvcjogXCIjZDA1YTQ5XCIgfSA6IHt9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLW51bWJlclwiXX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciArIDEpfVxuICAgICAgICAgICAgICAgICAga2V5PXtudW1iZXJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge251bWJlciArIDF9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtwYWdlTnVtYmVyIDwgcGFnZUNvdW50ICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciArIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJQYWdlSW5kZXgiLCJjaGFuZ2VQYWdlIiwicGFnZUNvdW50IiwicGFnZU51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJBcnJheSIsImZyb20iLCJrZXlzIiwibWFwIiwibnVtYmVyIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Articles/PageIndex.js\n"));

/***/ })

});