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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArticleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleLink */ \"./components/Article/PopularContainer/ArticleLink.js\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/Pages/Article/Popular.module.scss */ \"./styles/Pages/Article/Popular.module.scss\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PopularContainer = (param)=>{\n    let { posts , currentTitle  } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    useEffect(()=>{\n        const handleScroll = ()=>{\n            const container = containerRef.current;\n            const inner = innerRef.current;\n            if (container.scrollTop > 200) {\n                console.log(\"what\");\n            } else {\n                console.log(\"boo\");\n            }\n        };\n        const container = containerRef.current;\n        container.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            container.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    let recentPosts = currentTitle && posts.filter((post)=>post.title !== currentTitle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-articles-container\"]),\n            ref: containerRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Recent Posts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-articles\"]),\n                    ref: innerRef,\n                    children: recentPosts && recentPosts.map((post, index)=>{\n                        if (index < 5) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                post: post,\n                                index: index\n                            }, post._id, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                                lineNumber: 40,\n                                columnNumber: 24\n                            }, undefined);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PopularContainer, \"ME4MLit6gy/nCfQIV8UaHdQch9Q=\");\n_c = PopularContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularContainer); /*\n\n\n\n\n\n\n\n\n\n Add a line next to recent posts \n Maybe make a little smaller \n no border on bottom of last element\n\n\n\n Make it 6 long \n Make sure that the current element is not grabbed \n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"PopularContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGUvUG9wdWxhckNvbnRhaW5lci9Qb3B1bGFyQ29udGFpbmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0U7QUFDaUM7QUFFekUsTUFBTUksbUJBQW1CLFNBQTZCO1FBQTVCLEVBQUVDLE1BQUssRUFBRUMsYUFBWSxFQUFFOztJQUMvQyxNQUFNQyxlQUFlTiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU1PLFdBQVdQLDZDQUFNQSxDQUFDLElBQUk7SUFFNUJRLFVBQVUsSUFBTTtRQUNkLE1BQU1DLGVBQWUsSUFBTTtZQUN6QixNQUFNQyxZQUFZSixhQUFhSyxPQUFPO1lBQ3RDLE1BQU1DLFFBQVFMLFNBQVNJLE9BQU87WUFDOUIsSUFBSUQsVUFBVUcsU0FBUyxHQUFHLEtBQUs7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPO2dCQUNMRCxRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0g7UUFFQSxNQUFNTCxZQUFZSixhQUFhSyxPQUFPO1FBQ3RDRCxVQUFVTSxnQkFBZ0IsQ0FBQyxVQUFVUDtRQUVyQyxPQUFPLElBQU07WUFDWEMsVUFBVU8sbUJBQW1CLENBQUMsVUFBVVI7UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJUyxjQUNGYixnQkFBZ0JELE1BQU1lLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxLQUFLLEtBQUtoQjtJQUN4RCxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVdyQix1R0FBMkI7a0JBQ3pDLDRFQUFDb0I7WUFBSUMsV0FBV3JCLGdIQUFvQztZQUFFc0IsS0FBS2xCOzs4QkFDekQsOERBQUNnQjtvQkFBSUMsV0FBV3JCLHdGQUFZOzhCQUMxQiw0RUFBQ3VCO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFFTiw4REFBQ0g7b0JBQUlDLFdBQVdyQixzR0FBMEI7b0JBQUVzQixLQUFLakI7OEJBQzlDVyxlQUNDQSxZQUFZUSxHQUFHLENBQUMsQ0FBQ04sTUFBTU8sUUFBVTt3QkFDL0IsSUFBSUEsUUFBUSxHQUFHOzRCQUNiLHFCQUFPLDhEQUFDMUIsb0RBQVdBO2dDQUFnQm1CLE1BQU1BO2dDQUFNTyxPQUFPQTsrQkFBN0JQLEtBQUtRLEdBQUc7Ozs7O3dCQUNuQyxDQUFDO29CQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtaO0dBMUNNekI7S0FBQUE7QUE0Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyxDQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlL1BvcHVsYXJDb250YWluZXIvUG9wdWxhckNvbnRhaW5lci5qcz80NTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlTGluayBmcm9tIFwiLi9BcnRpY2xlTGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi8uLi9zdHlsZXMvUGFnZXMvQXJ0aWNsZS9Qb3B1bGFyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFBvcHVsYXJDb250YWluZXIgPSAoeyBwb3N0cywgY3VycmVudFRpdGxlIH0pID0+IHtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpbm5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgICAgY29uc3QgaW5uZXIgPSBpbm5lclJlZi5jdXJyZW50O1xuICAgICAgaWYgKGNvbnRhaW5lci5zY3JvbGxUb3AgPiAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aGF0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJib29cIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgbGV0IHJlY2VudFBvc3RzID1cbiAgICBjdXJyZW50VGl0bGUgJiYgcG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRpdGxlICE9PSBjdXJyZW50VGl0bGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3B1bGFyLWNvbnRhaW5lclwiXX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJcIl19IHJlZj17Y29udGFpbmVyUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPGgyPlJlY2VudCBQb3N0czwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9wdWxhci1hcnRpY2xlc1wiXX0gcmVmPXtpbm5lclJlZn0+XG4gICAgICAgICAge3JlY2VudFBvc3RzICYmXG4gICAgICAgICAgICByZWNlbnRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA8IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEFydGljbGVMaW5rIGtleT17cG9zdC5faWR9IHBvc3Q9e3Bvc3R9IGluZGV4PXtpbmRleH0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhckNvbnRhaW5lcjtcblxuLypcblxuXG5cblxuXG5cblxuXG5cbiBBZGQgYSBsaW5lIG5leHQgdG8gcmVjZW50IHBvc3RzIFxuIE1heWJlIG1ha2UgYSBsaXR0bGUgc21hbGxlciBcbiBubyBib3JkZXIgb24gYm90dG9tIG9mIGxhc3QgZWxlbWVudFxuXG5cblxuIE1ha2UgaXQgNiBsb25nIFxuIE1ha2Ugc3VyZSB0aGF0IHRoZSBjdXJyZW50IGVsZW1lbnQgaXMgbm90IGdyYWJiZWQgXG5cblxuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkFydGljbGVMaW5rIiwic3R5bGVzIiwiUG9wdWxhckNvbnRhaW5lciIsInBvc3RzIiwiY3VycmVudFRpdGxlIiwiY29udGFpbmVyUmVmIiwiaW5uZXJSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTY3JvbGwiLCJjb250YWluZXIiLCJjdXJyZW50IiwiaW5uZXIiLCJzY3JvbGxUb3AiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWNlbnRQb3N0cyIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsImgyIiwibWFwIiwiaW5kZXgiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Article/PopularContainer/PopularContainer.js\n"));

/***/ })

});