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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Articles */ \"./components/Articles/index.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categories = ref[0], setCategories = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var getCategories = function() {\n        var categories = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(category) {\n                    if (!categories.includes(category.title)) {\n                        categories.push(category.title);\n                    }\n                });\n            }\n        });\n        return categories;\n    };\n    setCategories(getCategories());\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.Filter, {\n                categories: categories,\n                changeCategory: changeCategory,\n                display: display\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.PageIndex, {\n                pageCount: pageCount,\n                pageNumber: pageNumber,\n                changePage: changePage\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"bUNCCBuvnmww+j2+pInc3QOu40Y=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDb0MsV0FBVzs0QkFDN0JqRCxVQUFVLEVBQUVhLElBQUksQ0FBQ2IsVUFBVTsyQkFWdEJ1QyxLQUFLOzs7O2lDQVdWLENBQ0Y7cUJBQ0g7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0U7MEJBaUNOLDhEQUFDNUMsMkRBQVM7Z0JBQ1JZLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJFLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJ5QixVQUFVLEVBQUVBLFVBQVU7Ozs7O3FCQUN0Qjs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBekpLcEMsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7O0FBa0x2QiwrREFBZUEsaUJBQWlCLEVBQUMsQ0FFakM7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanM/ZmY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXJcIjtcbmltcG9ydCB7IEZpbHRlciwgUGFnZUluZGV4IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXNcIjtcbmltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBBcnRpY2xlc0NvbnRhaW5lciA9IChwb3N0cykgPT4ge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFBvc3RzLCBzZXRGaWx0ZXJlZFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cy5sZW5ndGgpO1xuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEZpbmRzIGFsbCBvZiB0aGUgY2F0ZWdvcmllcyBvZiB0aGUgYXJ0aWNsZXNcbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeS50aXRsZSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfTtcblxuICBzZXRDYXRlZ29yaWVzKGdldENhdGVnb3JpZXMoKSk7XG5cbiAgLy8gU29ydHMgdGhlIGFydGljbGVzIGJ5IGNhdGVnb3J5XG4gIGxldCBzb3J0ZWRQb3N0cyA9IFtdO1xuICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlQb3N0cyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChwb3N0Q2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICBpZiAocG9zdENhdGVnb3J5LnRpdGxlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBjYXRlZ29yeSwgcG9zdHM6IGNhdGVnb3J5UG9zdHMgfSk7XG4gIH0pO1xuXG4gIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogXCJBbGxcIiwgcG9zdHM6IHBvc3RzLnBvc3RzIH0pO1xuXG4gIC8vIENoYW5nZXMgdGhlIHBvc3Qgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0XG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICB7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhwb3N0cy5wb3N0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsdGVyZWRQb3N0cyA9IFtdO1xuICAgICAgICBzb3J0ZWRQb3N0cy5tYXAoKHNvcnRlZFBvc3QpID0+IHtcbiAgICAgICAgICBpZiAoc29ydGVkUG9zdC5jYXRlZ29yeSA9PT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUG9zdHMgPSBzb3J0ZWRQb3N0LnBvc3RzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMoZmlsdGVyZWRQb3N0cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIENvdW50IG9mIHRoZSBhcnRpY2xlcyBkaXNwbGF5ZWRcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ID4gMSA/IGAke2NvdW50fSBBcnRpY2xlc2AgOiBgJHtjb3VudH0gQXJ0aWNsZWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChmaWx0ZXJlZFBvc3RzLmxlbmd0aCk7XG4gICAgc2V0UGFnZUNvdW50KE1hdGguY2VpbChmaWx0ZXJlZFBvc3RzLmxlbmd0aCAvIDUpKTtcbiAgICBzZXRQYWdlTnVtYmVyKDEpO1xuICB9LCBbZmlsdGVyZWRQb3N0c10pO1xuXG4gIC8vIGdvZXMgdG8gdG9wIG9mIHBhZ2Ugd2hlbiBudW1iZXIgaW4gbnVtYmVybGluZSBpcyBjbGlja2VkXG4gIGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIENoYW5nZXMgdGhlIHBhZ2UgbnVtYmVyXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bWJlciAhPT0gcGFnZU51bWJlcikge1xuICAgICAgc2V0UGFnZU51bWJlcihudW1iZXIpO1xuICAgICAgZ29Ub1RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICA8TWV0YSB0aXRsZT1cIkFydGljbGVzXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlclwiXX0+QXJ0aWNsZXM8L2gxPlxuICAgICAgPEZpbHRlclxuICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICBjaGFuZ2VDYXRlZ29yeT17Y2hhbmdlQ2F0ZWdvcnl9XG4gICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJcIl19PlxuICAgICAgICB7ZmlsdGVyZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4IDwgcGFnZU51bWJlciAqIDUgJiYgaW5kZXggPj0gKHBhZ2VOdW1iZXIgLSAxKSAqIDUpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxBcnRpY2xlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuYm9keX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cG9zdC5tYWluSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5zbHVnfVxuICAgICAgICAgICAgICAgIG5vQm9yZGVyPXt0cnVlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBhdXRob3JJbWFnZT17cG9zdC5hdXRob3JJbWFnZX1cbiAgICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17cG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtwb3N0LmNhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIHtwYWdlQ291bnQgPiAxICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICB7cGFnZU51bWJlciA+IDEgJiYgKFxuICAgICAgICAgICAgPEZhQ2hldnJvbkxlZnRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJudW1iZXJMaW5lLWFycm93XCJdfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIgLSAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lXCJdfT5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KHBhZ2VDb3VudCkua2V5cygpKS5tYXAoKG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtudW1iZXIgKyAxID09PSBwYWdlTnVtYmVyID8geyBjb2xvcjogXCIjZDA1YTQ5XCIgfSA6IHt9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLW51bWJlclwiXX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciArIDEpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtudW1iZXIgKyAxfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cGFnZU51bWJlciA8IHBhZ2VDb3VudCAmJiAoXG4gICAgICAgICAgICA8RmFDaGV2cm9uUmlnaHRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJudW1iZXJMaW5lLWFycm93XCJdfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIgKyAxKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfSAqL31cbiAgICAgIDxQYWdlSW5kZXhcbiAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9XG4gICAgICAgIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9XG4gICAgICAgIGNoYW5nZVBhZ2U9e2NoYW5nZVBhZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRDbGllbnQocHJldmlldykuZmV0Y2goZ3JvcWBcbiAgICAqW190eXBlID09IFwicG9zdFwiIF0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKSB7IFxuICAgICAgX2lkLFxuICAgICAgdGl0bGUsXG4gICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICAvLyBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfVxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICAgICAgYm9keSxcbiAgICAgIG1haW5JbWFnZSwgXG4gICAgICBzbHVnLCBcbiAgICAgIHB1Ymxpc2hlZEF0LFxuICAgICAgLy8gY2F0ZWdvcmllc1xuICAgICAgY2F0ZWdvcmllc1tdLT57aWQsIHRpdGxlfVxuICAgIH1cbiAgICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNDb250YWluZXI7XG5cbi8qICBcblxuXG4gIFxuXG4qL1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aWNsZUNvbnRhaW5lciIsIkZpbHRlciIsIlBhZ2VJbmRleCIsIk1ldGEiLCJzdHlsZXMiLCJBcnRpY2xlc0NvbnRhaW5lciIsInBvc3RzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJmaWx0ZXJlZFBvc3RzIiwic2V0RmlsdGVyZWRQb3N0cyIsImxlbmd0aCIsImNvdW50Iiwic2V0Q291bnQiLCJwYWdlQ291bnQiLCJzZXRQYWdlQ291bnQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsImdldENhdGVnb3JpZXMiLCJtYXAiLCJwb3N0IiwiY2F0ZWdvcnkiLCJpbmNsdWRlcyIsInRpdGxlIiwicHVzaCIsInNvcnRlZFBvc3RzIiwiY2F0ZWdvcnlQb3N0cyIsInBvc3RDYXRlZ29yeSIsImNoYW5nZUNhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwic29ydGVkUG9zdCIsImRpc3BsYXkiLCJNYXRoIiwiY2VpbCIsImdvVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2hhbmdlUGFnZSIsIm51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJpbWFnZSIsIm1haW5JbWFnZSIsInNsdWciLCJub0JvcmRlciIsImF1dGhvciIsInVzZXJuYW1lIiwiYXV0aG9ySW1hZ2UiLCJwdWJsaXNoZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});