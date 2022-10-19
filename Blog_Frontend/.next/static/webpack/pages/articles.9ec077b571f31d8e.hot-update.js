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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Articles */ \"./components/Articles/index.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref[0], setFilteredPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref1[0], setCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref2[0], setPageCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref3[0], setPageNumber = ref3[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.Filter, {\n                categories: categories,\n                changeCategory: changeCategory,\n                display: display\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.PageIndex, {\n                pageCount: pageCount,\n                pageNumber: pageNumber,\n                changePage: changePage\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"7A4wVbUu/GDhnEuQF0/847evUb4=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0Qjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBbkpLbEMsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7O0FBNEt2QiwrREFBZUEsaUJBQWlCLEVBQUMsQ0FFakM7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanM/ZmY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXJcIjtcbmltcG9ydCB7IEZpbHRlciwgUGFnZUluZGV4IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXNcIjtcbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBBcnRpY2xlc0NvbnRhaW5lciA9IChwb3N0cykgPT4ge1xuICBjb25zdCBbZmlsdGVyZWRQb3N0cywgc2V0RmlsdGVyZWRQb3N0c10gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cyk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUocG9zdHMucG9zdHMubGVuZ3RoKTtcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcblxuICAvLyBGaW5kcyBhbGwgb2YgdGhlIGNhdGVnb3JpZXMgb2YgdGhlIGFydGljbGVzXG4gIGxldCBjYXRlZ29yaWVzID0gW107XG4gIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgIGlmIChwb3N0LmNhdGVnb3JpZXMpIHtcbiAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeS50aXRsZSkpIHtcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNvcnRzIHRoZSBhcnRpY2xlcyBieSBjYXRlZ29yeVxuICBsZXQgc29ydGVkUG9zdHMgPSBbXTtcbiAgY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IGNhdGVnb3J5UG9zdHMgPSBbXTtcbiAgICBwb3N0cy5wb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIGlmIChwb3N0LmNhdGVnb3JpZXMpIHtcbiAgICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcCgocG9zdENhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgaWYgKHBvc3RDYXRlZ29yeS50aXRsZSA9PT0gY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMucHVzaChwb3N0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogY2F0ZWdvcnksIHBvc3RzOiBjYXRlZ29yeVBvc3RzIH0pO1xuICB9KTtcblxuICBzb3J0ZWRQb3N0cy5wdXNoKHsgY2F0ZWdvcnk6IFwiQWxsXCIsIHBvc3RzOiBwb3N0cy5wb3N0cyB9KTtcblxuICAvLyBDaGFuZ2VzIHRoZSBwb3N0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdFxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAge1xuICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkFsbFwiKSB7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMocG9zdHMucG9zdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkUG9zdHMgPSBbXTtcbiAgICAgICAgc29ydGVkUG9zdHMubWFwKChzb3J0ZWRQb3N0KSA9PiB7XG4gICAgICAgICAgaWYgKHNvcnRlZFBvc3QuY2F0ZWdvcnkgPT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFBvc3RzID0gc29ydGVkUG9zdC5wb3N0cztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRGaWx0ZXJlZFBvc3RzKGZpbHRlcmVkUG9zdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBDb3VudCBvZiB0aGUgYXJ0aWNsZXMgZGlzcGxheWVkXG4gIGNvbnN0IGRpc3BsYXkgPSBjb3VudCA+IDEgPyBgJHtjb3VudH0gQXJ0aWNsZXNgIDogYCR7Y291bnR9IEFydGljbGVgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q291bnQoZmlsdGVyZWRQb3N0cy5sZW5ndGgpO1xuICAgIHNldFBhZ2VDb3VudChNYXRoLmNlaWwoZmlsdGVyZWRQb3N0cy5sZW5ndGggLyA1KSk7XG4gICAgc2V0UGFnZU51bWJlcigxKTtcbiAgfSwgW2ZpbHRlcmVkUG9zdHNdKTtcblxuICAvLyBnb2VzIHRvIHRvcCBvZiBwYWdlIHdoZW4gbnVtYmVyIGluIG51bWJlcmxpbmUgaXMgY2xpY2tlZFxuICBjb25zdCBnb1RvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICAvLyBDaGFuZ2VzIHRoZSBwYWdlIG51bWJlclxuICBjb25zdCBjaGFuZ2VQYWdlID0gKG51bWJlcikgPT4ge1xuICAgIGlmIChudW1iZXIgIT09IHBhZ2VOdW1iZXIpIHtcbiAgICAgIHNldFBhZ2VOdW1iZXIobnVtYmVyKTtcbiAgICAgIGdvVG9Ub3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1jb250YWluZXJcIl19PlxuICAgICAgPE1ldGEgdGl0bGU9XCJBcnRpY2xlc1wiIC8+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIl19PkFydGljbGVzPC9oMT5cbiAgICAgIDxGaWx0ZXJcbiAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgY2hhbmdlQ2F0ZWdvcnk9e2NoYW5nZUNhdGVnb3J5fVxuICAgICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IHBhZ2VOdW1iZXIgKiA1ICYmIGluZGV4ID49IChwYWdlTnVtYmVyIC0gMSkgKiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QXJ0aWNsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Bvc3QubWFpbkltYWdlfVxuICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICBub0JvcmRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgYXV0aG9ySW1hZ2U9e3Bvc3QuYXV0aG9ySW1hZ2V9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cG9zdC5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB7cGFnZUNvdW50ID4gMSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAge3BhZ2VOdW1iZXIgPiAxICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25MZWZ0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyIC0gMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZVwiXX0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShwYWdlQ291bnQpLmtleXMoKSkubWFwKChudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17bnVtYmVyICsgMSA9PT0gcGFnZU51bWJlciA/IHsgY29sb3I6IFwiI2QwNWE0OVwiIH0gOiB7fX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1udW1iZXJcIl19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIgKyAxKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyICsgMX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3BhZ2VOdW1iZXIgPCBwYWdlQ291bnQgJiYgKFxuICAgICAgICAgICAgPEZhQ2hldnJvblJpZ2h0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyICsgMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG4gICAgICA8UGFnZUluZGV4XG4gICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxuICAgICAgICBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfVxuICAgICAgICBjaGFuZ2VQYWdlPXtjaGFuZ2VQYWdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiBdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykgeyBcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuICAgICAgXCJ1c2VybmFtZVwiOiBhdXRob3ItPnVzZXJuYW1lLFxuICAgICAgLy8gXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgICAgIGJvZHksXG4gICAgICBtYWluSW1hZ2UsIFxuICAgICAgc2x1ZywgXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIC8vIGNhdGVnb3JpZXNcbiAgICAgIGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICB9XG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzQ29udGFpbmVyO1xuXG4vKiAgXG5cblxuICBcblxuKi9cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFydGljbGVDb250YWluZXIiLCJGaWx0ZXIiLCJQYWdlSW5kZXgiLCJNZXRhIiwic3R5bGVzIiwiQXJ0aWNsZXNDb250YWluZXIiLCJwb3N0cyIsImZpbHRlcmVkUG9zdHMiLCJzZXRGaWx0ZXJlZFBvc3RzIiwibGVuZ3RoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2VDb3VudCIsInNldFBhZ2VDb3VudCIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwiY2F0ZWdvcmllcyIsIm1hcCIsInBvc3QiLCJjYXRlZ29yeSIsImluY2x1ZGVzIiwidGl0bGUiLCJwdXNoIiwic29ydGVkUG9zdHMiLCJjYXRlZ29yeVBvc3RzIiwicG9zdENhdGVnb3J5IiwiY2hhbmdlQ2F0ZWdvcnkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzb3J0ZWRQb3N0IiwiZGlzcGxheSIsIk1hdGgiLCJjZWlsIiwiZ29Ub1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjaGFuZ2VQYWdlIiwibnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwiYm9keSIsImltYWdlIiwibWFpbkltYWdlIiwic2x1ZyIsIm5vQm9yZGVyIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJhdXRob3JJbWFnZSIsInB1Ymxpc2hlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});