"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Search_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Search/Input */ \"./components/Search/Input.js\");\n/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Articles */ \"./components/Articles/index.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/Pages/Search/search.module.scss */ \"./styles/Pages/Search/search.module.scss\");\n/* harmony import */ var _styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst search = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchedPosts, setSearchedPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchedPosts.length);\n    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [pageNumber, setPageNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    // stores the search input\n    const changeSearch = (search)=>{\n        setSearch(search.target.value);\n    };\n    const searchAllPosts = ()=>{\n        const filtered = posts.filter((post)=>{\n            return post.title.toLowerCase().includes(search.toLowerCase());\n        });\n        setSearchedPosts(filtered);\n    };\n    // Count of the articles displayed\n    const display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCount(searchedPosts.length);\n        setPageCount(Math.ceil(searchedPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        searchedPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    const goToTop = ()=>{\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    const changePage = (number)=>{\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_5__.Meta, {\n                title: \"Search | PEB\",\n                description: \"Find the content that you are looking for. Search through all of the articles on the site.\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"main-articles-container-header\"]),\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"search-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeSearch: changeSearch,\n                        searchAllPosts: searchAllPosts,\n                        search: search\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"filter-container-article-count\"]),\n                        children: display\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Pages_Search_search_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"search-results\"]),\n                children: searchedPosts.map((post, index)=>{\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_4__.PageIndex, {\n                pageCount: pageCount,\n                pageNumber: pageNumber,\n                changePage: changePage\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/search.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(search, \"uJKgwaBZuyuKU7YqnU3JUil04o4=\");\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUMsMkRBQVNBO2dCQUNSVyxXQUFXQTtnQkFDWEUsWUFBWUE7Z0JBQ1pvQixZQUFZQTs7Ozs7Ozs7Ozs7O0FBSXBCO0dBekZNOUI7O0FBa0hOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC5qcz85MjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvSW5wdXRcIjtcbmltcG9ydCB7IFBhZ2VJbmRleCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVzXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvUGFnZXMvU2VhcmNoL3NlYXJjaC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBzZWFyY2ggPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlYXJjaGVkUG9zdHMsIHNldFNlYXJjaGVkUG9zdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHNlYXJjaGVkUG9zdHMubGVuZ3RoKTtcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcblxuICAvLyBzdG9yZXMgdGhlIHNlYXJjaCBpbnB1dFxuICBjb25zdCBjaGFuZ2VTZWFyY2ggPSAoc2VhcmNoKSA9PiB7XG4gICAgc2V0U2VhcmNoKHNlYXJjaC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaEFsbFBvc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gcG9zdHMuZmlsdGVyKChwb3N0KSA9PiB7XG4gICAgICByZXR1cm4gcG9zdC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIHNldFNlYXJjaGVkUG9zdHMoZmlsdGVyZWQpO1xuICB9O1xuXG4gIC8vIENvdW50IG9mIHRoZSBhcnRpY2xlcyBkaXNwbGF5ZWRcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ID4gMSA/IGAke2NvdW50fSBBcnRpY2xlc2AgOiBgJHtjb3VudH0gQXJ0aWNsZWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChzZWFyY2hlZFBvc3RzLmxlbmd0aCk7XG4gICAgc2V0UGFnZUNvdW50KE1hdGguY2VpbChzZWFyY2hlZFBvc3RzLmxlbmd0aCAvIDUpKTtcbiAgICBzZXRQYWdlTnVtYmVyKDEpO1xuICB9LCBbc2VhcmNoZWRQb3N0c10pO1xuXG4gIC8vIGdvZXMgdG8gdG9wIG9mIHBhZ2Ugd2hlbiBudW1iZXIgaW4gbnVtYmVybGluZSBpcyBjbGlja2VkXG4gIGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIENoYW5nZXMgdGhlIHBhZ2UgbnVtYmVyXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bWJlciAhPT0gcGFnZU51bWJlcikge1xuICAgICAgc2V0UGFnZU51bWJlcihudW1iZXIpO1xuICAgICAgZ29Ub1RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8TWV0YVxuICAgICAgICB0aXRsZT1cIlNlYXJjaCB8IFBFQlwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRmluZCB0aGUgY29udGVudCB0aGF0IHlvdSBhcmUgbG9va2luZyBmb3IuIFNlYXJjaCB0aHJvdWdoIGFsbCBvZiB0aGUgYXJ0aWNsZXMgb24gdGhlIHNpdGUuXCJcbiAgICAgIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIl19PlNlYXJjaDwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2hhbmdlU2VhcmNoPXtjaGFuZ2VTZWFyY2h9XG4gICAgICAgICAgc2VhcmNoQWxsUG9zdHM9e3NlYXJjaEFsbFBvc3RzfVxuICAgICAgICAgIHNlYXJjaD17c2VhcmNofVxuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1jb250YWluZXItYXJ0aWNsZS1jb3VudFwiXX0+e2Rpc3BsYXl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLXJlc3VsdHNcIl19PlxuICAgICAgICB7c2VhcmNoZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgcGFnZU51bWJlciAqIDUgJiYgaW5kZXggPj0gKHBhZ2VOdW1iZXIgLSAxKSAqIDUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxBcnRpY2xlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuYm9keX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5tYWluSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIG5vQm9yZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBhdXRob3JJbWFnZT17cG9zdC5hdXRob3JJbWFnZX1cbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17cG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwb3N0LmNhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYWdlSW5kZXhcbiAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9XG4gICAgICAgIGNoYW5nZVBhZ2U9e2NoYW5nZVBhZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRDbGllbnQocHJldmlldykuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykge1xuICAgICAgICBfaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICAgIC8vIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgICAgICAgYm9keSxcbiAgICAgICAgbWFpbkltYWdlLFxuICAgICAgICBzbHVnLFxuICAgICAgICBwdWJsaXNoZWRBdCxcbiAgICAgICAgLy8gY2F0ZWdvcmllc1xuICAgICAgICBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICB9XG4gICAgICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBcnRpY2xlQ29udGFpbmVyIiwiSW5wdXQiLCJQYWdlSW5kZXgiLCJNZXRhIiwic3R5bGVzIiwic2VhcmNoIiwicG9zdHMiLCJzZXRTZWFyY2giLCJzZWFyY2hlZFBvc3RzIiwic2V0U2VhcmNoZWRQb3N0cyIsImNvdW50Iiwic2V0Q291bnQiLCJsZW5ndGgiLCJwYWdlQ291bnQiLCJzZXRQYWdlQ291bnQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsImNoYW5nZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoQWxsUG9zdHMiLCJmaWx0ZXJlZCIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXNwbGF5IiwiTWF0aCIsImNlaWwiLCJnb1RvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNoYW5nZVBhZ2UiLCJudW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJoMSIsInAiLCJtYXAiLCJpbmRleCIsImJvZHkiLCJpbWFnZSIsIm1haW5JbWFnZSIsInNsdWciLCJub0JvcmRlciIsImF1dGhvciIsInVzZXJuYW1lIiwiYXV0aG9ySW1hZ2UiLCJwdWJsaXNoZWRBdCIsImNhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n"));

/***/ })

});