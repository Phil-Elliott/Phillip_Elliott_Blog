"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/Article/PopularContainer/PopularContainer.js":
/*!*****************************************************************!*\
  !*** ./components/Article/PopularContainer/PopularContainer.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArticleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleLink */ \"./components/Article/PopularContainer/ArticleLink.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../styles/Pages/Article/Popular.module.scss */ \"./styles/Pages/Article/Popular.module.scss\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar PopularContainer = function(param) {\n    var posts = param.posts, currentTitle = param.currentTitle;\n    var recentPosts = posts.filter(function(post) {\n        return post.title !== currentTitle;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"popular-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"popular-articles-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Recent Posts\"\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"H\"\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"popular-articles\"]),\n                    children: recentPosts.map(function(post, index) {\n                        if (index < 5) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                post: post,\n                                index: index\n                            }, post._id, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n                                lineNumber: 21,\n                                columnNumber: 22\n                            }, _this);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Article/PopularContainer/PopularContainer.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = PopularContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularContainer); /*\n Add a line next to recent posts \n Maybe make a little smaller \n no border on bottom of last element\n\n\n\n Make it 6 long \n Make sure that the current element is not grabbed \n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"PopularContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGUvUG9wdWxhckNvbnRhaW5lci9Qb3B1bGFyQ29udGFpbmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2M7QUFDWDtBQUNFO0FBQ3dCO0FBQ0E7QUFDa0I7QUFFekUsSUFBTU8sZ0JBQWdCLEdBQUcsZ0JBQTZCO1FBQTFCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsWUFBWSxTQUFaQSxZQUFZO0lBQzdDLElBQUlDLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUMsU0FBQ0MsSUFBSTtlQUFLQSxJQUFJLENBQUNDLEtBQUssS0FBS0osWUFBWTtLQUFBLENBQUM7SUFDckUscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCx1R0FBMkI7a0JBQ3pDLDRFQUFDUSxLQUFHO1lBQUNDLFNBQVMsRUFBRVQsZ0hBQW9DOzs4QkFDbEQsOERBQUNRLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVQsd0ZBQVk7O3NDQUMxQiw4REFBQ1UsSUFBRTtzQ0FBQyxjQUFZOzs7OztpQ0FBSztzQ0FDckIsOERBQUNDLE1BQUk7c0NBQUMsR0FBQzs7Ozs7aUNBQU87Ozs7Ozt5QkFDVjs4QkFDTiw4REFBQ0gsS0FBRztvQkFBQ0MsU0FBUyxFQUFFVCxzR0FBMEI7OEJBQ3ZDSSxXQUFXLENBQUNRLEdBQUcsQ0FBQyxTQUFDTixJQUFJLEVBQUVPLEtBQUssRUFBSzt3QkFDaEMsSUFBSUEsS0FBSyxHQUFHLENBQUMsRUFBRTs0QkFDYixxQkFBTyw4REFBQ2xCLG9EQUFXO2dDQUFnQlcsSUFBSSxFQUFFQSxJQUFJO2dDQUFFTyxLQUFLLEVBQUVBLEtBQUs7K0JBQWxDUCxJQUFJLENBQUNRLEdBQUc7Ozs7cUNBQThCLENBQUM7eUJBQ2pFO3FCQUNGLENBQUM7Ozs7O3lCQUNFOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBbkJLYixLQUFBQSxnQkFBZ0I7QUFxQnRCLCtEQUFlQSxnQkFBZ0IsRUFBQyxDQUVoQzs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGUvUG9wdWxhckNvbnRhaW5lci9Qb3B1bGFyQ29udGFpbmVyLmpzPzQ1M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFydGljbGVMaW5rIGZyb20gXCIuL0FydGljbGVMaW5rXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gXCJuZXh0LXNhbml0eS1pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uLy4uL3N0eWxlcy9QYWdlcy9BcnRpY2xlL1BvcHVsYXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9wdWxhckNvbnRhaW5lciA9ICh7IHBvc3RzLCBjdXJyZW50VGl0bGUgfSkgPT4ge1xuICBsZXQgcmVjZW50UG9zdHMgPSBwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QudGl0bGUgIT09IGN1cnJlbnRUaXRsZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcHVsYXItY29udGFpbmVyXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3B1bGFyLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxoMj5SZWNlbnQgUG9zdHM8L2gyPlxuICAgICAgICAgIDxzcGFuPkg8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9wdWxhci1hcnRpY2xlc1wiXX0+XG4gICAgICAgICAge3JlY2VudFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxBcnRpY2xlTGluayBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fSBpbmRleD17aW5kZXh9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhckNvbnRhaW5lcjtcblxuLypcbiBBZGQgYSBsaW5lIG5leHQgdG8gcmVjZW50IHBvc3RzIFxuIE1heWJlIG1ha2UgYSBsaXR0bGUgc21hbGxlciBcbiBubyBib3JkZXIgb24gYm90dG9tIG9mIGxhc3QgZWxlbWVudFxuXG5cblxuIE1ha2UgaXQgNiBsb25nIFxuIE1ha2Ugc3VyZSB0aGF0IHRoZSBjdXJyZW50IGVsZW1lbnQgaXMgbm90IGdyYWJiZWQgXG5cblxuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydGljbGVMaW5rIiwiTGluayIsIkltYWdlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiZ2V0Q2xpZW50Iiwic3R5bGVzIiwiUG9wdWxhckNvbnRhaW5lciIsInBvc3RzIiwiY3VycmVudFRpdGxlIiwicmVjZW50UG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJtYXAiLCJpbmRleCIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Article/PopularContainer/PopularContainer.js\n"));

/***/ })

});