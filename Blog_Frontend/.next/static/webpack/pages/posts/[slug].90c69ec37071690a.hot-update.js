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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArticleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleLink */ \"./components/Article/PopularContainer/ArticleLink.js\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../styles/Pages/Article/Popular.module.scss */ \"./styles/Pages/Article/Popular.module.scss\");\n/* harmony import */ var _styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PopularContainer = (param)=>{\n    let { posts , currentTitle  } = param;\n    _s();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    useEffect(()=>{\n        const handleScroll = ()=>{\n            const container = containerRef.current;\n            const inner = innerRef.current;\n            if (container.scrollTop > 200) {\n                console.log(\"what\");\n            } else {\n                console.log(\"boo\");\n            }\n        };\n        const container = containerRef.current;\n        container.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            container.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    let recentPosts = currentTitle && posts.filter((post)=>post.title !== currentTitle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-articles-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Recent Posts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Article_Popular_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"popular-articles\"]),\n                    children: recentPosts && recentPosts.map((post, index)=>{\n                        if (index < 5) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticleLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                post: post,\n                                index: index\n                            }, post._id, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                                lineNumber: 40,\n                                columnNumber: 24\n                            }, undefined);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\PopularContainer\\\\PopularContainer.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PopularContainer, \"ME4MLit6gy/nCfQIV8UaHdQch9Q=\");\n_c = PopularContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopularContainer); /*\n\n\n\n\n\n\n\n\n\n Add a line next to recent posts \n Maybe make a little smaller \n no border on bottom of last element\n\n\n\n Make it 6 long \n Make sure that the current element is not grabbed \n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"PopularContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGUvUG9wdWxhckNvbnRhaW5lci9Qb3B1bGFyQ29udGFpbmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ0U7QUFDaUM7QUFFekUsTUFBTUksbUJBQW1CLFNBQTZCO1FBQTVCLEVBQUVDLE1BQUssRUFBRUMsYUFBWSxFQUFFOztJQUMvQyxNQUFNQyxlQUFlTiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU1PLFdBQVdQLDZDQUFNQSxDQUFDLElBQUk7SUFFNUJRLFVBQVUsSUFBTTtRQUNkLE1BQU1DLGVBQWUsSUFBTTtZQUN6QixNQUFNQyxZQUFZSixhQUFhSyxPQUFPO1lBQ3RDLE1BQU1DLFFBQVFMLFNBQVNJLE9BQU87WUFDOUIsSUFBSUQsVUFBVUcsU0FBUyxHQUFHLEtBQUs7Z0JBQzdCQyxRQUFRQyxHQUFHLENBQUM7WUFDZCxPQUFPO2dCQUNMRCxRQUFRQyxHQUFHLENBQUM7WUFDZCxDQUFDO1FBQ0g7UUFFQSxNQUFNTCxZQUFZSixhQUFhSyxPQUFPO1FBQ3RDRCxVQUFVTSxnQkFBZ0IsQ0FBQyxVQUFVUDtRQUVyQyxPQUFPLElBQU07WUFDWEMsVUFBVU8sbUJBQW1CLENBQUMsVUFBVVI7UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJUyxjQUNGYixnQkFBZ0JELE1BQU1lLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxLQUFLLEtBQUtoQjtJQUN4RCxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVdyQix1R0FBMkI7a0JBQ3pDLDRFQUFDb0I7WUFBSUMsV0FBV3JCLGdIQUFvQzs7OEJBQ2xELDhEQUFDb0I7b0JBQUlDLFdBQVdyQix3RkFBWTs4QkFDMUIsNEVBQUNzQjtrQ0FBRzs7Ozs7Ozs7Ozs7OEJBRU4sOERBQUNGO29CQUFJQyxXQUFXckIsc0dBQTBCOzhCQUN2Q2dCLGVBQ0NBLFlBQVlPLEdBQUcsQ0FBQyxDQUFDTCxNQUFNTSxRQUFVO3dCQUMvQixJQUFJQSxRQUFRLEdBQUc7NEJBQ2IscUJBQU8sOERBQUN6QixvREFBV0E7Z0NBQWdCbUIsTUFBTUE7Z0NBQU1NLE9BQU9BOytCQUE3Qk4sS0FBS08sR0FBRzs7Ozs7d0JBQ25DLENBQUM7b0JBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7R0ExQ014QjtLQUFBQTtBQTRDTiwrREFBZUEsZ0JBQWdCQSxFQUFDLENBRWhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGUvUG9wdWxhckNvbnRhaW5lci9Qb3B1bGFyQ29udGFpbmVyLmpzPzQ1M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFydGljbGVMaW5rIGZyb20gXCIuL0FydGljbGVMaW5rXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uLy4uL3N0eWxlcy9QYWdlcy9BcnRpY2xlL1BvcHVsYXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9wdWxhckNvbnRhaW5lciA9ICh7IHBvc3RzLCBjdXJyZW50VGl0bGUgfSkgPT4ge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlubmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgICBjb25zdCBpbm5lciA9IGlubmVyUmVmLmN1cnJlbnQ7XG4gICAgICBpZiAoY29udGFpbmVyLnNjcm9sbFRvcCA+IDIwMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvb1wiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBsZXQgcmVjZW50UG9zdHMgPVxuICAgIGN1cnJlbnRUaXRsZSAmJiBwb3N0cy5maWx0ZXIoKHBvc3QpID0+IHBvc3QudGl0bGUgIT09IGN1cnJlbnRUaXRsZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcHVsYXItY29udGFpbmVyXCJdfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3B1bGFyLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIDxoMj5SZWNlbnQgUG9zdHM8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvcHVsYXItYXJ0aWNsZXNcIl19PlxuICAgICAgICAgIHtyZWNlbnRQb3N0cyAmJlxuICAgICAgICAgICAgcmVjZW50UG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPCA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBcnRpY2xlTGluayBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fSBpbmRleD17aW5kZXh9IC8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJDb250YWluZXI7XG5cbi8qXG5cblxuXG5cblxuXG5cblxuXG4gQWRkIGEgbGluZSBuZXh0IHRvIHJlY2VudCBwb3N0cyBcbiBNYXliZSBtYWtlIGEgbGl0dGxlIHNtYWxsZXIgXG4gbm8gYm9yZGVyIG9uIGJvdHRvbSBvZiBsYXN0IGVsZW1lbnRcblxuXG5cbiBNYWtlIGl0IDYgbG9uZyBcbiBNYWtlIHN1cmUgdGhhdCB0aGUgY3VycmVudCBlbGVtZW50IGlzIG5vdCBncmFiYmVkIFxuXG5cbiovXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJBcnRpY2xlTGluayIsInN0eWxlcyIsIlBvcHVsYXJDb250YWluZXIiLCJwb3N0cyIsImN1cnJlbnRUaXRsZSIsImNvbnRhaW5lclJlZiIsImlubmVyUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiY29udGFpbmVyIiwiY3VycmVudCIsImlubmVyIiwic2Nyb2xsVG9wIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVjZW50UG9zdHMiLCJmaWx0ZXIiLCJwb3N0IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImluZGV4IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Article/PopularContainer/PopularContainer.js\n"));

/***/ })

});