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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Articles_Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Articles/Filter */ \"./components/Articles/Filter.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\"), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            setCategory(e.target.value);\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles_Filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                categories: categories,\n                changeCategory: changeCategory,\n                display: display\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, _this),\n            pageCount > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"articles-numberLine-container\"]),\n                children: [\n                    pageNumber > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronLeft, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"numberLine-arrow\"]),\n                        onClick: function() {\n                            return changePage(pageNumber - 1);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 124,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"articles-numberLine\"]),\n                        children: Array.from(Array(pageCount).keys()).map(function(number) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: number + 1 === pageNumber ? {\n                                    color: \"#d05a49\"\n                                } : {},\n                                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"articles-numberLine-number\"]),\n                                onClick: function() {\n                                    return changePage(pageNumber + 1);\n                                },\n                                children: number + 1\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                lineNumber: 133,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, _this),\n                    pageNumber < pageCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronRight, {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"numberLine-arrow\"]),\n                        onClick: function() {\n                            return changePage(pageNumber + 1);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"NS3ddExkVK3LW2/fLxqIMML9nVg=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S1gsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7O0FBeUt2QiwrREFBZUEsaUJBQWlCLEVBQUMsQ0FFakM7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanM/ZmY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXJcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXMvRmlsdGVyXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25MZWZ0LCBGYUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFydGljbGVzQ29udGFpbmVyID0gKHBvc3RzKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZFBvc3RzLCBzZXRGaWx0ZXJlZFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cy5sZW5ndGgpO1xuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEZpbmRzIGFsbCBvZiB0aGUgY2F0ZWdvcmllcyBvZiB0aGUgYXJ0aWNsZXNcbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5LnRpdGxlKSkge1xuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydHMgdGhlIGFydGljbGVzIGJ5IGNhdGVnb3J5XG4gIGxldCBzb3J0ZWRQb3N0cyA9IFtdO1xuICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlQb3N0cyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChwb3N0Q2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICBpZiAocG9zdENhdGVnb3J5LnRpdGxlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBjYXRlZ29yeSwgcG9zdHM6IGNhdGVnb3J5UG9zdHMgfSk7XG4gIH0pO1xuXG4gIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogXCJBbGxcIiwgcG9zdHM6IHBvc3RzLnBvc3RzIH0pO1xuXG4gIC8vIENoYW5nZXMgdGhlIHBvc3Qgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0XG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICB7XG4gICAgICBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhwb3N0cy5wb3N0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsdGVyZWRQb3N0cyA9IFtdO1xuICAgICAgICBzb3J0ZWRQb3N0cy5tYXAoKHNvcnRlZFBvc3QpID0+IHtcbiAgICAgICAgICBpZiAoc29ydGVkUG9zdC5jYXRlZ29yeSA9PT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUG9zdHMgPSBzb3J0ZWRQb3N0LnBvc3RzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMoZmlsdGVyZWRQb3N0cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIENvdW50IG9mIHRoZSBhcnRpY2xlcyBkaXNwbGF5ZWRcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ID4gMSA/IGAke2NvdW50fSBBcnRpY2xlc2AgOiBgJHtjb3VudH0gQXJ0aWNsZWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChmaWx0ZXJlZFBvc3RzLmxlbmd0aCk7XG4gICAgc2V0UGFnZUNvdW50KE1hdGguY2VpbChmaWx0ZXJlZFBvc3RzLmxlbmd0aCAvIDUpKTtcbiAgICBzZXRQYWdlTnVtYmVyKDEpO1xuICB9LCBbZmlsdGVyZWRQb3N0c10pO1xuXG4gIC8vIGdvZXMgdG8gdG9wIG9mIHBhZ2Ugd2hlbiBudW1iZXIgaW4gbnVtYmVybGluZSBpcyBjbGlja2VkXG4gIGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIENoYW5nZXMgdGhlIHBhZ2UgbnVtYmVyXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bWJlciAhPT0gcGFnZU51bWJlcikge1xuICAgICAgc2V0UGFnZU51bWJlcihudW1iZXIpO1xuICAgICAgZ29Ub1RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICA8TWV0YSB0aXRsZT1cIkFydGljbGVzXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlclwiXX0+QXJ0aWNsZXM8L2gxPlxuICAgICAgPEZpbHRlclxuICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICBjaGFuZ2VDYXRlZ29yeT17Y2hhbmdlQ2F0ZWdvcnl9XG4gICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJcIl19PlxuICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgcGFnZU51bWJlciAqIDUgJiYgaW5kZXggPj0gKHBhZ2VOdW1iZXIgLSAxKSAqIDUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxBcnRpY2xlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuYm9keX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5tYWluSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIG5vQm9yZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBhdXRob3JJbWFnZT17cG9zdC5hdXRob3JJbWFnZX1cbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17cG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwb3N0LmNhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAge3BhZ2VDb3VudCA+IDEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1jb250YWluZXJcIl19PlxuICAgICAgICAgIHtwYWdlTnVtYmVyID4gMSAmJiAoXG4gICAgICAgICAgICA8RmFDaGV2cm9uTGVmdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciAtIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmVcIl19PlxuICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkocGFnZUNvdW50KS5rZXlzKCkpLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e251bWJlciArIDEgPT09IHBhZ2VOdW1iZXIgPyB7IGNvbG9yOiBcIiNkMDVhNDlcIiB9IDoge319XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtbnVtYmVyXCJdfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyICsgMSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge251bWJlciArIDF9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtwYWdlTnVtYmVyIDwgcGFnZUNvdW50ICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciArIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHsgXG4gICAgICBfaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIC8vIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHNsdWcsIFxuICAgICAgcHVibGlzaGVkQXQsXG4gICAgICAvLyBjYXRlZ29yaWVzXG4gICAgICBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgfVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0NvbnRhaW5lcjtcblxuLyogIFxuXG5cbiAgXG5cbiovXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpY2xlQ29udGFpbmVyIiwiRmlsdGVyIiwiRmFDaGV2cm9uTGVmdCIsIkZhQ2hldnJvblJpZ2h0IiwiTWV0YSIsInN0eWxlcyIsIkFydGljbGVzQ29udGFpbmVyIiwicG9zdHMiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmlsdGVyZWRQb3N0cyIsInNldEZpbHRlcmVkUG9zdHMiLCJsZW5ndGgiLCJjb3VudCIsInNldENvdW50IiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJjYXRlZ29yaWVzIiwibWFwIiwicG9zdCIsImluY2x1ZGVzIiwidGl0bGUiLCJwdXNoIiwic29ydGVkUG9zdHMiLCJjYXRlZ29yeVBvc3RzIiwicG9zdENhdGVnb3J5IiwiY2hhbmdlQ2F0ZWdvcnkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzb3J0ZWRQb3N0IiwiZGlzcGxheSIsIk1hdGgiLCJjZWlsIiwiZ29Ub1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjaGFuZ2VQYWdlIiwibnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiYm9keSIsImltYWdlIiwibWFpbkltYWdlIiwic2x1ZyIsIm5vQm9yZGVyIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJhdXRob3JJbWFnZSIsInB1Ymxpc2hlZEF0Iiwib25DbGljayIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});