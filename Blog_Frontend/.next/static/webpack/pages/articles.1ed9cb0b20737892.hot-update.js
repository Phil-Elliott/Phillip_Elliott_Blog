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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Articles */ \"./components/Articles/index.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref[0], setFilteredPosts = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref1[0], setCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref2[0], setPageCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref3[0], setPageNumber = ref3[1];\n    // Finds all of the categories of the articles\n    var getCategories = function() {\n        var _$categories = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(category) {\n                    if (!_$categories.includes(category.title)) {\n                        _$categories.push(category.title);\n                    }\n                });\n            }\n        });\n    };\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_4__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.Filter, {\n                categories: categories,\n                changeCategory: changeCategory,\n                display: display\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.PageIndex, {\n                pageCount: pageCount,\n                pageNumber: pageNumber,\n                changePage: changePage\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"7A4wVbUu/GDhnEuQF0/847evUb4=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  \n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO2dCQUN0QjBCLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUJBQ3RCOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0FySktuQyxpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjs7QUE4S3ZCLCtEQUFlQSxpQkFBaUIsRUFBQyxDQUVqQzs7Ozs7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qcz9mZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRmlsdGVyLCBQYWdlSW5kZXggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlc1wiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFydGljbGVzQ29udGFpbmVyID0gKHBvc3RzKSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJlZFBvc3RzLCBzZXRGaWx0ZXJlZFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cy5sZW5ndGgpO1xuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEZpbmRzIGFsbCBvZiB0aGUgY2F0ZWdvcmllcyBvZiB0aGUgYXJ0aWNsZXNcbiAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeS50aXRsZSkpIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBTb3J0cyB0aGUgYXJ0aWNsZXMgYnkgY2F0ZWdvcnlcbiAgbGV0IHNvcnRlZFBvc3RzID0gW107XG4gIGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBjYXRlZ29yeVBvc3RzID0gW107XG4gICAgcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICBpZiAocG9zdC5jYXRlZ29yaWVzKSB7XG4gICAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoKHBvc3RDYXRlZ29yeSkgPT4ge1xuICAgICAgICAgIGlmIChwb3N0Q2F0ZWdvcnkudGl0bGUgPT09IGNhdGVnb3J5KSB7XG4gICAgICAgICAgICBjYXRlZ29yeVBvc3RzLnB1c2gocG9zdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzb3J0ZWRQb3N0cy5wdXNoKHsgY2F0ZWdvcnk6IGNhdGVnb3J5LCBwb3N0czogY2F0ZWdvcnlQb3N0cyB9KTtcbiAgfSk7XG5cbiAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBcIkFsbFwiLCBwb3N0czogcG9zdHMucG9zdHMgfSk7XG5cbiAgLy8gQ2hhbmdlcyB0aGUgcG9zdCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RcbiAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgIHtcbiAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJBbGxcIikge1xuICAgICAgICBzZXRGaWx0ZXJlZFBvc3RzKHBvc3RzLnBvc3RzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFBvc3RzID0gW107XG4gICAgICAgIHNvcnRlZFBvc3RzLm1hcCgoc29ydGVkUG9zdCkgPT4ge1xuICAgICAgICAgIGlmIChzb3J0ZWRQb3N0LmNhdGVnb3J5ID09PSBlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRQb3N0cyA9IHNvcnRlZFBvc3QucG9zdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhmaWx0ZXJlZFBvc3RzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQ291bnQgb2YgdGhlIGFydGljbGVzIGRpc3BsYXllZFxuICBjb25zdCBkaXNwbGF5ID0gY291bnQgPiAxID8gYCR7Y291bnR9IEFydGljbGVzYCA6IGAke2NvdW50fSBBcnRpY2xlYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvdW50KGZpbHRlcmVkUG9zdHMubGVuZ3RoKTtcbiAgICBzZXRQYWdlQ291bnQoTWF0aC5jZWlsKGZpbHRlcmVkUG9zdHMubGVuZ3RoIC8gNSkpO1xuICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gIH0sIFtmaWx0ZXJlZFBvc3RzXSk7XG5cbiAgLy8gZ29lcyB0byB0b3Agb2YgcGFnZSB3aGVuIG51bWJlciBpbiBudW1iZXJsaW5lIGlzIGNsaWNrZWRcbiAgY29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlcyB0aGUgcGFnZSBudW1iZXJcbiAgY29uc3QgY2hhbmdlUGFnZSA9IChudW1iZXIpID0+IHtcbiAgICBpZiAobnVtYmVyICE9PSBwYWdlTnVtYmVyKSB7XG4gICAgICBzZXRQYWdlTnVtYmVyKG51bWJlcik7XG4gICAgICBnb1RvVG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgIDxNZXRhIHRpdGxlPVwiQXJ0aWNsZXNcIiAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1jb250YWluZXItaGVhZGVyXCJdfT5BcnRpY2xlczwvaDE+XG4gICAgICA8RmlsdGVyXG4gICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgIGNoYW5nZUNhdGVnb3J5PXtjaGFuZ2VDYXRlZ29yeX1cbiAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIHtmaWx0ZXJlZFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaW5kZXggPCBwYWdlTnVtYmVyICogNSAmJiBpbmRleCA+PSAocGFnZU51bWJlciAtIDEpICogNSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEFydGljbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5ib2R5fVxuICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0Lm1haW5JbWFnZX1cbiAgICAgICAgICAgICAgICBzbHVnPXtwb3N0LnNsdWd9XG4gICAgICAgICAgICAgICAgbm9Cb3JkZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgYXV0aG9yPXtwb3N0LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGF1dGhvckltYWdlPXtwb3N0LmF1dGhvckltYWdlfVxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXtwb3N0LnB1Ymxpc2hlZEF0fVxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e3Bvc3QuY2F0ZWdvcmllc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyoge3BhZ2VDb3VudCA+IDEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1jb250YWluZXJcIl19PlxuICAgICAgICAgIHtwYWdlTnVtYmVyID4gMSAmJiAoXG4gICAgICAgICAgICA8RmFDaGV2cm9uTGVmdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciAtIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmVcIl19PlxuICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkocGFnZUNvdW50KS5rZXlzKCkpLm1hcCgobnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e251bWJlciArIDEgPT09IHBhZ2VOdW1iZXIgPyB7IGNvbG9yOiBcIiNkMDVhNDlcIiB9IDoge319XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtbnVtYmVyXCJdfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyICsgMSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge251bWJlciArIDF9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtwYWdlTnVtYmVyIDwgcGFnZUNvdW50ICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25SaWdodFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm51bWJlckxpbmUtYXJyb3dcIl19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2UocGFnZU51bWJlciArIDEpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgICAgPFBhZ2VJbmRleFxuICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH1cbiAgICAgICAgcGFnZU51bWJlcj17cGFnZU51bWJlcn1cbiAgICAgICAgY2hhbmdlUGFnZT17Y2hhbmdlUGFnZX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHsgXG4gICAgICBfaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIC8vIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHNsdWcsIFxuICAgICAgcHVibGlzaGVkQXQsXG4gICAgICAvLyBjYXRlZ29yaWVzXG4gICAgICBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgfVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0NvbnRhaW5lcjtcblxuLyogIFxuXG5cbiAgXG5cbiovXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpY2xlQ29udGFpbmVyIiwiRmlsdGVyIiwiUGFnZUluZGV4IiwiTWV0YSIsInN0eWxlcyIsIkFydGljbGVzQ29udGFpbmVyIiwicG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwic2V0RmlsdGVyZWRQb3N0cyIsImxlbmd0aCIsImNvdW50Iiwic2V0Q291bnQiLCJwYWdlQ291bnQiLCJzZXRQYWdlQ291bnQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwibWFwIiwicG9zdCIsImNhdGVnb3J5IiwiaW5jbHVkZXMiLCJ0aXRsZSIsInB1c2giLCJzb3J0ZWRQb3N0cyIsImNhdGVnb3J5UG9zdHMiLCJwb3N0Q2F0ZWdvcnkiLCJjaGFuZ2VDYXRlZ29yeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNvcnRlZFBvc3QiLCJkaXNwbGF5IiwiTWF0aCIsImNlaWwiLCJnb1RvVG9wIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImNoYW5nZVBhZ2UiLCJudW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJib2R5IiwiaW1hZ2UiLCJtYWluSW1hZ2UiLCJzbHVnIiwibm9Cb3JkZXIiLCJhdXRob3IiLCJ1c2VybmFtZSIsImF1dGhvckltYWdlIiwicHVibGlzaGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});