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

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\"), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            setCategory(e.target.value);\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number1) {\n        if (number1 !== pageNumber) {\n            setPageNumber(number1);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-filter-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories-select\"]),\n                            onChange: function(e) {\n                                return changeCategory(e);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"All\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this),\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category,\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 22\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-article-count\"]),\n                        children: display\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 112,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            pageCount > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-container\"]),\n                children: [\n                    pageNumber > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronLeft, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"numberLine-arrow\"])\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine\"]),\n                        children: Array.from(Array(pageCount).keys()).map(function(number1) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: number1 + 1 === pageNumber ? {\n                                    color: \"#d05a49\"\n                                } : {},\n                                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-number\"]),\n                                onClick: function() {\n                                    return changePage(number1 + 1);\n                                },\n                                children: number1 + 1\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                lineNumber: 139,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, _this),\n                    pageNumber < pageCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"numberLine-arrow\"]),\n                        onClick: function() {\n                            return changePage(number + 1);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 151,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"NS3ddExkVK3LW2/fLxqIMML9nVg=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLEVBQUV2QyxtR0FBb0M7Z0NBQy9DNkQsT0FBTyxFQUFFOzJDQUFNekIsVUFBVSxDQUFDQyxPQUFNLEdBQUcsQ0FBQyxDQUFDO2lDQUFBOzBDQUVwQ0EsT0FBTSxHQUFHLENBQUM7Ozs7O3FDQUNQLENBQ047eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0U7b0JBRUx6QixVQUFVLEdBQUdGLFNBQVMsa0JBQ3JCLDhEQUFDWiwwREFBYzt3QkFDYnlDLFNBQVMsRUFBRXZDLHlGQUEwQjt3QkFDckM2RCxPQUFPLEVBQUU7bUNBQU16QixVQUFVLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUM7eUJBQUE7Ozs7OzZCQUNyQzs7Ozs7O3FCQUVBOzs7Ozs7YUFFSixDQUNOO0NBQ0g7R0F2SktwQyxpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjs7QUFnTHZCLCtEQUFlQSxpQkFBaUIsRUFBQyxDQUVqQzs7Ozs7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qcz9mZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRmFDaGV2cm9uTGVmdCwgRmFDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBBcnRpY2xlc0NvbnRhaW5lciA9IChwb3N0cykgPT4ge1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCBbZmlsdGVyZWRQb3N0cywgc2V0RmlsdGVyZWRQb3N0c10gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cyk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUocG9zdHMucG9zdHMubGVuZ3RoKTtcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcblxuICAvLyBGaW5kcyBhbGwgb2YgdGhlIGNhdGVnb3JpZXMgb2YgdGhlIGFydGljbGVzXG4gIGxldCBjYXRlZ29yaWVzID0gW107XG4gIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgIGlmIChwb3N0LmNhdGVnb3JpZXMpIHtcbiAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeS50aXRsZSkpIHtcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRzIHRoZSBhcnRpY2xlcyBieSBjYXRlZ29yeVxuICBsZXQgc29ydGVkUG9zdHMgPSBbXTtcbiAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5UG9zdHMgPSBbXTtcbiAgICBwb3N0cy5wb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIGlmIChwb3N0LmNhdGVnb3JpZXMpIHtcbiAgICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcCgocG9zdENhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc3RDYXRlZ29yeS50aXRsZSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMucHVzaChwb3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogY2F0ZWdvcnksIHBvc3RzOiBjYXRlZ29yeVBvc3RzIH0pO1xuICB9KTtcblxuICBzb3J0ZWRQb3N0cy5wdXNoKHsgY2F0ZWdvcnk6IFwiQWxsXCIsIHBvc3RzOiBwb3N0cy5wb3N0cyB9KTtcblxuICAvLyBDaGFuZ2VzIHRoZSBwb3N0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdFxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAge1xuICAgICAgc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbFwiKSB7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMocG9zdHMucG9zdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkUG9zdHMgPSBbXTtcbiAgICAgICAgc29ydGVkUG9zdHMubWFwKChzb3J0ZWRQb3N0KSA9PiB7XG4gICAgICAgICAgaWYgKHNvcnRlZFBvc3QuY2F0ZWdvcnkgPT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFBvc3RzID0gc29ydGVkUG9zdC5wb3N0cztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRGaWx0ZXJlZFBvc3RzKGZpbHRlcmVkUG9zdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBDb3VudCBvZiB0aGUgYXJ0aWNsZXMgZGlzcGxheWVkXG4gIGNvbnN0IGRpc3BsYXkgPSBjb3VudCA+IDEgPyBgJHtjb3VudH0gQXJ0aWNsZXNgIDogYCR7Y291bnR9IEFydGljbGVgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q291bnQoZmlsdGVyZWRQb3N0cy5sZW5ndGgpO1xuICAgIHNldFBhZ2VDb3VudChNYXRoLmNlaWwoZmlsdGVyZWRQb3N0cy5sZW5ndGggLyA1KSk7XG4gICAgc2V0UGFnZU51bWJlcigxKTtcbiAgfSwgW2ZpbHRlcmVkUG9zdHNdKTtcblxuICAvLyBnb2VzIHRvIHRvcCBvZiBwYWdlIHdoZW4gbnVtYmVyIGluIG51bWJlcmxpbmUgaXMgY2xpY2tlZFxuICBjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDaGFuZ2VzIHRoZSBwYWdlIG51bWJlclxuICBjb25zdCBjaGFuZ2VQYWdlID0gKG51bWJlcikgPT4ge1xuICAgIGlmIChudW1iZXIgIT09IHBhZ2VOdW1iZXIpIHtcbiAgICAgIHNldFBhZ2VOdW1iZXIobnVtYmVyKTtcbiAgICAgIGdvVG9Ub3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1jb250YWluZXJcIl19PlxuICAgICAgPE1ldGEgdGl0bGU9XCJBcnRpY2xlc1wiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIl19PkFydGljbGVzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWZpbHRlci1jb250YWluZXJcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzXCJdfT5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1jb250YWluZXItY2F0ZWdvcmllcy1zZWxlY3RcIl19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUNhdGVnb3J5KGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9vcHRpb24+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1jb250YWluZXItYXJ0aWNsZS1jb3VudFwiXX0+e2Rpc3BsYXl9PC9wPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1jb250YWluZXItb3B0aW9uc1wiXX0+PC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIHtmaWx0ZXJlZFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPCBwYWdlTnVtYmVyICogNSAmJiBpbmRleCA+PSAocGFnZU51bWJlciAtIDEpICogNSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEFydGljbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5ib2R5fVxuICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0Lm1haW5JbWFnZX1cbiAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgbm9Cb3JkZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGF1dGhvckltYWdlPXtwb3N0LmF1dGhvckltYWdlfVxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwb3N0LnB1Ymxpc2hlZEF0fVxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e3Bvc3QuY2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7cGFnZUNvdW50ID4gMSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAge3BhZ2VOdW1iZXIgPiAxICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25MZWZ0IGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX0gLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmVcIl19PlxuICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkocGFnZUNvdW50KS5rZXlzKCkpLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e251bWJlciArIDEgPT09IHBhZ2VOdW1iZXIgPyB7IGNvbG9yOiBcIiNkMDVhNDlcIiB9IDoge319XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtbnVtYmVyXCJdfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShudW1iZXIgKyAxKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyICsgMX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3BhZ2VOdW1iZXIgPCBwYWdlQ291bnQgJiYgKFxuICAgICAgICAgICAgPEZhQ2hldnJvblJpZ2h0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShudW1iZXIgKyAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRDbGllbnQocHJldmlldykuZmV0Y2goZ3JvcWBcbiAgICAqW190eXBlID09IFwicG9zdFwiIF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKSB7IFxuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG4gICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICAvLyBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfVxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICAgICAgYm9keSxcbiAgICAgIG1haW5JbWFnZSwgXG4gICAgICBzbHVnLCBcbiAgICAgIHB1Ymxpc2hlZEF0LFxuICAgICAgLy8gY2F0ZWdvcmllc1xuICAgICAgY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfVxuICAgIH1cbiAgICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNDb250YWluZXI7XG5cbi8qICBcblxuXG4gIFxuXG4qL1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aWNsZUNvbnRhaW5lciIsIkZhQ2hldnJvbkxlZnQiLCJGYUNoZXZyb25SaWdodCIsIk1ldGEiLCJzdHlsZXMiLCJBcnRpY2xlc0NvbnRhaW5lciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImZpbHRlcmVkUG9zdHMiLCJzZXRGaWx0ZXJlZFBvc3RzIiwibGVuZ3RoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2VDb3VudCIsInNldFBhZ2VDb3VudCIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwiY2F0ZWdvcmllcyIsIm1hcCIsInBvc3QiLCJpbmNsdWRlcyIsInRpdGxlIiwicHVzaCIsInNvcnRlZFBvc3RzIiwiY2F0ZWdvcnlQb3N0cyIsInBvc3RDYXRlZ29yeSIsImNoYW5nZUNhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwic29ydGVkUG9zdCIsImRpc3BsYXkiLCJNYXRoIiwiY2VpbCIsImdvVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2hhbmdlUGFnZSIsIm51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJwIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJpbWFnZSIsIm1haW5JbWFnZSIsInNsdWciLCJub0JvcmRlciIsImF1dGhvciIsInVzZXJuYW1lIiwiYXV0aG9ySW1hZ2UiLCJwdWJsaXNoZWRBdCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJzdHlsZSIsImNvbG9yIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});