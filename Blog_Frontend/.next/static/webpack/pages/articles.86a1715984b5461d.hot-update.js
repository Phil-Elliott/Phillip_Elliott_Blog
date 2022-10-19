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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\"), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            setCategory(e.target.value);\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-filter-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories-select\"]),\n                            onChange: function(e) {\n                                return changeCategory(e);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"All\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, _this),\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category,\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 22\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-article-count\"]),\n                        children: display\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 112,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, _this),\n            pageCount > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-container\"]),\n                children: [\n                    pageNumber > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronLeft, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"numberLine-arrow\"])\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 133,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine\"]),\n                        children: Array.from(Array(pageCount).keys()).map(function(number) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-number\"]),\n                                onClick: function() {\n                                    return changePage(number + 1);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: number + 1 === pageNumber && {\n                                        color: \"red\"\n                                    },\n                                    children: number + 1\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                lineNumber: 139,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, _this),\n                    pageNumber < pageCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaChevronRight, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"numberLine-arrow\"])\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 152,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 131,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"NS3ddExkVK3LW2/fLxqIMML9nVg=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQ08sR0FBQztvQ0FBQ2dCLEtBQUssRUFBRXZCLE1BQU0sR0FBRyxDQUFDLEtBQUt6QixVQUFVLElBQUk7d0NBQUVpRCxLQUFLLEVBQUUsS0FBSztxQ0FBRTs4Q0FDcER4QixNQUFNLEdBQUcsQ0FBQzs7Ozs7eUNBQ1Q7Ozs7O3FDQUNBLENBQ047eUJBQ0gsQ0FBQzs7Ozs7NkJBQ0U7b0JBRUx6QixVQUFVLEdBQUdGLFNBQVMsa0JBQ3JCLDhEQUFDWiwwREFBYzt3QkFBQ3lDLFNBQVMsRUFBRXZDLHlGQUEwQjs7Ozs7NkJBQUk7Ozs7OztxQkFFdkQ7Ozs7OzthQUVKLENBQ047Q0FDSDtHQXJKS0MsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7O0FBOEt2QiwrREFBZUEsaUJBQWlCLEVBQUMsQ0FFakM7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanM/ZmY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXJcIjtcbmltcG9ydCB7IEZhQ2hldnJvbkxlZnQsIEZhQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQXJ0aWNsZXNDb250YWluZXIgPSAocG9zdHMpID0+IHtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgW2ZpbHRlcmVkUG9zdHMsIHNldEZpbHRlcmVkUG9zdHNdID0gdXNlU3RhdGUocG9zdHMucG9zdHMpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzLmxlbmd0aCk7XG4gIGNvbnN0IFtwYWdlQ291bnQsIHNldFBhZ2VDb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMSk7XG5cbiAgLy8gRmluZHMgYWxsIG9mIHRoZSBjYXRlZ29yaWVzIG9mIHRoZSBhcnRpY2xlc1xuICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICBwb3N0cy5wb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICBpZiAocG9zdC5jYXRlZ29yaWVzKSB7XG4gICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAoIWNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkudGl0bGUpKSB7XG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5LnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBTb3J0cyB0aGUgYXJ0aWNsZXMgYnkgY2F0ZWdvcnlcbiAgbGV0IHNvcnRlZFBvc3RzID0gW107XG4gIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBjYXRlZ29yeVBvc3RzID0gW107XG4gICAgcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICBpZiAocG9zdC5jYXRlZ29yaWVzKSB7XG4gICAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoKHBvc3RDYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIGlmIChwb3N0Q2F0ZWdvcnkudGl0bGUgPT09IGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBjYXRlZ29yeVBvc3RzLnB1c2gocG9zdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzb3J0ZWRQb3N0cy5wdXNoKHsgY2F0ZWdvcnk6IGNhdGVnb3J5LCBwb3N0czogY2F0ZWdvcnlQb3N0cyB9KTtcbiAgfSk7XG5cbiAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBcIkFsbFwiLCBwb3N0czogcG9zdHMucG9zdHMgfSk7XG5cbiAgLy8gQ2hhbmdlcyB0aGUgcG9zdCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RcbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgIHtcbiAgICAgIHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGxcIikge1xuICAgICAgICBzZXRGaWx0ZXJlZFBvc3RzKHBvc3RzLnBvc3RzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFBvc3RzID0gW107XG4gICAgICAgIHNvcnRlZFBvc3RzLm1hcCgoc29ydGVkUG9zdCkgPT4ge1xuICAgICAgICAgIGlmIChzb3J0ZWRQb3N0LmNhdGVnb3J5ID09PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRQb3N0cyA9IHNvcnRlZFBvc3QucG9zdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhmaWx0ZXJlZFBvc3RzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQ291bnQgb2YgdGhlIGFydGljbGVzIGRpc3BsYXllZFxuICBjb25zdCBkaXNwbGF5ID0gY291bnQgPiAxID8gYCR7Y291bnR9IEFydGljbGVzYCA6IGAke2NvdW50fSBBcnRpY2xlYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvdW50KGZpbHRlcmVkUG9zdHMubGVuZ3RoKTtcbiAgICBzZXRQYWdlQ291bnQoTWF0aC5jZWlsKGZpbHRlcmVkUG9zdHMubGVuZ3RoIC8gNSkpO1xuICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gIH0sIFtmaWx0ZXJlZFBvc3RzXSk7XG5cbiAgLy8gZ29lcyB0byB0b3Agb2YgcGFnZSB3aGVuIG51bWJlciBpbiBudW1iZXJsaW5lIGlzIGNsaWNrZWRcbiAgY29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlcyB0aGUgcGFnZSBudW1iZXJcbiAgY29uc3QgY2hhbmdlUGFnZSA9IChudW1iZXIpID0+IHtcbiAgICBpZiAobnVtYmVyICE9PSBwYWdlTnVtYmVyKSB7XG4gICAgICBzZXRQYWdlTnVtYmVyKG51bWJlcik7XG4gICAgICBnb1RvVG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgIDxNZXRhIHRpdGxlPVwiQXJ0aWNsZXNcIiAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1jb250YWluZXItaGVhZGVyXCJdfT5BcnRpY2xlczwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyXCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZpbHRlci1jb250YWluZXItY2F0ZWdvcmllc1wiXX0+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItY29udGFpbmVyLWNhdGVnb3JpZXMtc2VsZWN0XCJdfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VDYXRlZ29yeShlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvb3B0aW9uPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItY29udGFpbmVyLWFydGljbGUtY291bnRcIl19PntkaXNwbGF5fTwvcD5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItY29udGFpbmVyLW9wdGlvbnNcIl19PjwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJcIl19PlxuICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgcGFnZU51bWJlciAqIDUgJiYgaW5kZXggPj0gKHBhZ2VOdW1iZXIgLSAxKSAqIDUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxBcnRpY2xlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuYm9keX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5tYWluSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIG5vQm9yZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBhdXRob3JJbWFnZT17cG9zdC5hdXRob3JJbWFnZX1cbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17cG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwb3N0LmNhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge3BhZ2VDb3VudCA+IDEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1jb250YWluZXJcIl19PlxuICAgICAgICAgIHtwYWdlTnVtYmVyID4gMSAmJiAoXG4gICAgICAgICAgICA8RmFDaGV2cm9uTGVmdCBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19IC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lXCJdfT5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KHBhZ2VDb3VudCkua2V5cygpKS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1udW1iZXJcIl19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKG51bWJlciArIDEpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtudW1iZXIgKyAxID09PSBwYWdlTnVtYmVyICYmIHsgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtudW1iZXIgKyAxfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cGFnZU51bWJlciA8IHBhZ2VDb3VudCAmJiAoXG4gICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPXtzdHlsZXNbXCJudW1iZXJMaW5lLWFycm93XCJdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiBdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykgeyBcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuICAgICAgXCJ1c2VybmFtZVwiOiBhdXRob3ItPnVzZXJuYW1lLFxuICAgICAgLy8gXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgICAgIGJvZHksXG4gICAgICBtYWluSW1hZ2UsIFxuICAgICAgc2x1ZywgXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIC8vIGNhdGVnb3JpZXNcbiAgICAgIGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICB9XG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzQ29udGFpbmVyO1xuXG4vKiAgXG5cblxuICBcblxuKi9cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGljbGVDb250YWluZXIiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJNZXRhIiwic3R5bGVzIiwiQXJ0aWNsZXNDb250YWluZXIiLCJwb3N0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJmaWx0ZXJlZFBvc3RzIiwic2V0RmlsdGVyZWRQb3N0cyIsImxlbmd0aCIsImNvdW50Iiwic2V0Q291bnQiLCJwYWdlQ291bnQiLCJzZXRQYWdlQ291bnQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsImNhdGVnb3JpZXMiLCJtYXAiLCJwb3N0IiwiaW5jbHVkZXMiLCJ0aXRsZSIsInB1c2giLCJzb3J0ZWRQb3N0cyIsImNhdGVnb3J5UG9zdHMiLCJwb3N0Q2F0ZWdvcnkiLCJjaGFuZ2VDYXRlZ29yeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNvcnRlZFBvc3QiLCJkaXNwbGF5IiwiTWF0aCIsImNlaWwiLCJnb1RvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNoYW5nZVBhZ2UiLCJudW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwicCIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJib2R5IiwiaW1hZ2UiLCJtYWluSW1hZ2UiLCJzbHVnIiwibm9Cb3JkZXIiLCJhdXRob3IiLCJ1c2VybmFtZSIsImF1dGhvckltYWdlIiwicHVibGlzaGVkQXQiLCJBcnJheSIsImZyb20iLCJrZXlzIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});