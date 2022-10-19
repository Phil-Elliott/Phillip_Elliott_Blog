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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\"), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            setCategory(e.target.value);\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-filter-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories-select\"]),\n                            onChange: function(e) {\n                                return changeCategory(e);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"All\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this),\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category,\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 22\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-article-count\"]),\n                        children: display\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 112,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-container\"]),\n                children: [\n                    pageNumber > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronLeft, {}, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 131,\n                        columnNumber: 28\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine\"]),\n                        children: pageCount > 1 && Array.from(Array(pageCount).keys()).map(function(number) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-number\"]),\n                                onClick: function() {\n                                    return changePage(number + 1);\n                                },\n                                children: number + 1\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                lineNumber: 137,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, _this),\n                    pageNumber < pageCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {}, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 147,\n                        columnNumber: 36\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"NS3ddExkVK3LW2/fLxqIMML9nVg=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0E7b0JBRUx6QixVQUFVLEdBQUdGLFNBQVMsa0JBQUksOERBQUNaLDBEQUFjOzs7OzZCQUFHOzs7Ozs7cUJBQ3pDOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E5SUtHLGlCQUFpQjtBQUFqQkEsS0FBQUEsaUJBQWlCOztBQXVLdkIsK0RBQWVBLGlCQUFpQixFQUFDLENBRWpDOzs7OztBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzLmpzP2ZmN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFydGljbGVDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZS9Qb3B1bGFyL0FydGljbGUtQ29udGFpbmVyL0FydGljbGUtQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25MZWZ0LCBGYUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFydGljbGVzQ29udGFpbmVyID0gKHBvc3RzKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZFBvc3RzLCBzZXRGaWx0ZXJlZFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cy5sZW5ndGgpO1xuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEZpbmRzIGFsbCBvZiB0aGUgY2F0ZWdvcmllcyBvZiB0aGUgYXJ0aWNsZXNcbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5LnRpdGxlKSkge1xuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydHMgdGhlIGFydGljbGVzIGJ5IGNhdGVnb3J5XG4gIGxldCBzb3J0ZWRQb3N0cyA9IFtdO1xuICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlQb3N0cyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChwb3N0Q2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICBpZiAocG9zdENhdGVnb3J5LnRpdGxlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBjYXRlZ29yeSwgcG9zdHM6IGNhdGVnb3J5UG9zdHMgfSk7XG4gIH0pO1xuXG4gIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogXCJBbGxcIiwgcG9zdHM6IHBvc3RzLnBvc3RzIH0pO1xuXG4gIC8vIENoYW5nZXMgdGhlIHBvc3Qgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0XG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICB7XG4gICAgICBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhwb3N0cy5wb3N0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsdGVyZWRQb3N0cyA9IFtdO1xuICAgICAgICBzb3J0ZWRQb3N0cy5tYXAoKHNvcnRlZFBvc3QpID0+IHtcbiAgICAgICAgICBpZiAoc29ydGVkUG9zdC5jYXRlZ29yeSA9PT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUG9zdHMgPSBzb3J0ZWRQb3N0LnBvc3RzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMoZmlsdGVyZWRQb3N0cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIENvdW50IG9mIHRoZSBhcnRpY2xlcyBkaXNwbGF5ZWRcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ID4gMSA/IGAke2NvdW50fSBBcnRpY2xlc2AgOiBgJHtjb3VudH0gQXJ0aWNsZWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChmaWx0ZXJlZFBvc3RzLmxlbmd0aCk7XG4gICAgc2V0UGFnZUNvdW50KE1hdGguY2VpbChmaWx0ZXJlZFBvc3RzLmxlbmd0aCAvIDUpKTtcbiAgICBzZXRQYWdlTnVtYmVyKDEpO1xuICB9LCBbZmlsdGVyZWRQb3N0c10pO1xuXG4gIC8vIGdvZXMgdG8gdG9wIG9mIHBhZ2Ugd2hlbiBudW1iZXIgaW4gbnVtYmVybGluZSBpcyBjbGlja2VkXG4gIGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIENoYW5nZXMgdGhlIHBhZ2UgbnVtYmVyXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bWJlciAhPT0gcGFnZU51bWJlcikge1xuICAgICAgc2V0UGFnZU51bWJlcihudW1iZXIpO1xuICAgICAgZ29Ub1RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICA8TWV0YSB0aXRsZT1cIkFydGljbGVzXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlclwiXX0+QXJ0aWNsZXM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItY29udGFpbmVyLWNhdGVnb3JpZXNcIl19PlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzLXNlbGVjdFwiXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ2F0ZWdvcnkoZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L29wdGlvbj47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1hcnRpY2xlLWNvdW50XCJdfT57ZGlzcGxheX08L3A+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1vcHRpb25zXCJdfT48L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IHBhZ2VOdW1iZXIgKiA1ICYmIGluZGV4ID49IChwYWdlTnVtYmVyIC0gMSkgKiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QXJ0aWNsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Bvc3QubWFpbkltYWdlfVxuICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICBub0JvcmRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgYXV0aG9ySW1hZ2U9e3Bvc3QuYXV0aG9ySW1hZ2V9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cG9zdC5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIHtwYWdlTnVtYmVyID4gMSAmJiA8RmFDaGV2cm9uTGVmdCAvPn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZVwiXX0+XG4gICAgICAgICAge3BhZ2VDb3VudCA+IDEgJiZcbiAgICAgICAgICAgIEFycmF5LmZyb20oQXJyYXkocGFnZUNvdW50KS5rZXlzKCkpLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLW51bWJlclwiXX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UobnVtYmVyICsgMSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge251bWJlciArIDF9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3BhZ2VOdW1iZXIgPCBwYWdlQ291bnQgJiYgPEZhQ2hldnJvblJpZ2h0IC8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHsgXG4gICAgICBfaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIC8vIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHNsdWcsIFxuICAgICAgcHVibGlzaGVkQXQsXG4gICAgICAvLyBjYXRlZ29yaWVzXG4gICAgICBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgfVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0NvbnRhaW5lcjtcblxuLyogIFxuXG5cbiAgXG5cbiovXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpY2xlQ29udGFpbmVyIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiTWV0YSIsInN0eWxlcyIsIkFydGljbGVzQ29udGFpbmVyIiwicG9zdHMiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmlsdGVyZWRQb3N0cyIsInNldEZpbHRlcmVkUG9zdHMiLCJsZW5ndGgiLCJjb3VudCIsInNldENvdW50IiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJjYXRlZ29yaWVzIiwibWFwIiwicG9zdCIsImluY2x1ZGVzIiwidGl0bGUiLCJwdXNoIiwic29ydGVkUG9zdHMiLCJjYXRlZ29yeVBvc3RzIiwicG9zdENhdGVnb3J5IiwiY2hhbmdlQ2F0ZWdvcnkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzb3J0ZWRQb3N0IiwiZGlzcGxheSIsIk1hdGgiLCJjZWlsIiwiZ29Ub1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjaGFuZ2VQYWdlIiwibnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInAiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiYm9keSIsImltYWdlIiwibWFpbkltYWdlIiwic2x1ZyIsIm5vQm9yZGVyIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJhdXRob3JJbWFnZSIsInB1Ymxpc2hlZEF0IiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});