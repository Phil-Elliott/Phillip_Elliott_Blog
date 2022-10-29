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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Articles */ \"./components/Articles/index.js\");\n/* harmony import */ var _components_Articles_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Articles/functions */ \"./components/Articles/functions.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/Pages/Articles/Articles.module.scss */ \"./styles/Pages/Articles/Articles.module.scss\");\n/* harmony import */ var _styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categories = ref[0], setCategories = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sortedPosts = ref1[0], setSortedPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref2[0], setFilteredPosts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref3[0], setCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref4[0], setPageCount = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref5[0], setPageNumber = ref5[1];\n    // const [search, setSearch] = useState(\"\");\n    // const [searchedPosts, setSearchedPosts] = useState([]);\n    // stores the search input\n    // const searchPosts = (search) => {\n    //   setSearch(search.target.value);\n    // };\n    // search through filtered posts\n    // useEffect(() => {\n    //   const filtered = filteredPosts.filter((post) => {\n    //     return post.title.toLowerCase().includes(search.toLowerCase());\n    //   });\n    //   setSearchedPosts(filtered);\n    //   setPageNumber(1);\n    // }, [search]);\n    // stores the posts to be displayed\n    // const displayPosts = search.length ? searchedPosts : filteredPosts;\n    // get all categories\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCategories((0,_components_Articles_functions__WEBPACK_IMPORTED_MODULE_4__.getCategories)(posts.posts));\n    }, []);\n    // sort posts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSortedPosts((0,_components_Articles_functions__WEBPACK_IMPORTED_MODULE_4__.sortPosts)(categories, posts));\n    }, [\n        categories\n    ]);\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            if (e === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    // Changes the page number\n    var changePage = function(number) {\n        if (number !== pageNumber) {\n            setPageNumber(number);\n            goToTop();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_5__.Meta, {\n                title: \"Articles\",\n                description: \"I have many articles on a variety of topics. See if there are any that you are interested in learning about.\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.Filter, {\n                categories: categories,\n                changeCategory: changeCategory,\n                display: display\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Pages_Articles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Articles__WEBPACK_IMPORTED_MODULE_3__.PageIndex, {\n                pageCount: pageCount,\n                pageNumber: pageNumber,\n                changePage: changePage\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"Hnk1pOIntP1a/dzjaRsG9wJDvhs=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\ncould put a search bar in here for now \n- will have to search through the current filtered posts \n- will have to make a new function to search through the posts\n\n  might need to use other selector on mobile\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlBLEtBQUssR0FBR3ZCLFVBQVUsR0FBRyxDQUFDLElBQUl1QixLQUFLLElBQUksQ0FBQ3ZCLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzNELHFCQUNFLDhEQUFDcEIsb0dBQWdCOzRCQUVmMkMsS0FBSyxFQUFFQSxLQUFLOzRCQUNaSixLQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FBSzs0QkFDakJDLFdBQVcsRUFBRUUsSUFBSSxDQUFDRSxJQUFJOzRCQUN0QkMsS0FBSyxFQUFFSCxJQUFJLENBQUNJLFNBQVM7NEJBQ3JCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTs0QkFDZkMsUUFBUSxFQUFFLElBQUk7NEJBQ2RDLE1BQU0sRUFBRVAsSUFBSSxDQUFDUSxRQUFROzRCQUNyQkMsV0FBVyxFQUFFVCxJQUFJLENBQUNTLFdBQVc7NEJBQzdCQyxXQUFXLEVBQUVWLElBQUksQ0FBQ1UsV0FBVzs0QkFDN0IzQyxVQUFVLEVBQUVpQyxJQUFJLENBQUNqQyxVQUFVOzJCQVZ0QmtDLEtBQUs7Ozs7aUNBV1YsQ0FDRjtxQkFDSDtpQkFDRixDQUFDOzs7OztxQkFDRTswQkFpQ04sOERBQUN6QywyREFBUztnQkFDUmdCLFNBQVMsRUFBRUEsU0FBUztnQkFDcEJFLFVBQVUsRUFBRUEsVUFBVTtnQkFDdEJlLFVBQVUsRUFBRUEsVUFBVTs7Ozs7cUJBQ3RCOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0F6Sks1QixpQkFBaUI7QUFBakJBLEtBQUFBLGlCQUFpQjs7QUFrTHZCLCtEQUFlQSxpQkFBaUIsRUFBQyxDQUVqQzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qcz9mZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRmlsdGVyLCBQYWdlSW5kZXggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcnRpY2xlc1wiO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcywgc29ydFBvc3RzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZXMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9zdHlsZXMvUGFnZXMvQXJ0aWNsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQXJ0aWNsZXNDb250YWluZXIgPSAocG9zdHMpID0+IHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc29ydGVkUG9zdHMsIHNldFNvcnRlZFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbHRlcmVkUG9zdHMsIHNldEZpbHRlcmVkUG9zdHNdID0gdXNlU3RhdGUocG9zdHMucG9zdHMpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzLmxlbmd0aCk7XG4gIGNvbnN0IFtwYWdlQ291bnQsIHNldFBhZ2VDb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMSk7XG4gIC8vIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW3NlYXJjaGVkUG9zdHMsIHNldFNlYXJjaGVkUG9zdHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIHN0b3JlcyB0aGUgc2VhcmNoIGlucHV0XG4gIC8vIGNvbnN0IHNlYXJjaFBvc3RzID0gKHNlYXJjaCkgPT4ge1xuICAvLyAgIHNldFNlYXJjaChzZWFyY2gudGFyZ2V0LnZhbHVlKTtcbiAgLy8gfTtcblxuICAvLyBzZWFyY2ggdGhyb3VnaCBmaWx0ZXJlZCBwb3N0c1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyZWRQb3N0cy5maWx0ZXIoKHBvc3QpID0+IHtcbiAgLy8gICAgIHJldHVybiBwb3N0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICAvLyAgIH0pO1xuXG4gIC8vICAgc2V0U2VhcmNoZWRQb3N0cyhmaWx0ZXJlZCk7XG4gIC8vICAgc2V0UGFnZU51bWJlcigxKTtcbiAgLy8gfSwgW3NlYXJjaF0pO1xuXG4gIC8vIHN0b3JlcyB0aGUgcG9zdHMgdG8gYmUgZGlzcGxheWVkXG4gIC8vIGNvbnN0IGRpc3BsYXlQb3N0cyA9IHNlYXJjaC5sZW5ndGggPyBzZWFyY2hlZFBvc3RzIDogZmlsdGVyZWRQb3N0cztcblxuICAvLyBnZXQgYWxsIGNhdGVnb3JpZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYXRlZ29yaWVzKGdldENhdGVnb3JpZXMocG9zdHMucG9zdHMpKTtcbiAgfSwgW10pO1xuXG4gIC8vIHNvcnQgcG9zdHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTb3J0ZWRQb3N0cyhzb3J0UG9zdHMoY2F0ZWdvcmllcywgcG9zdHMpKTtcbiAgfSwgW2NhdGVnb3JpZXNdKTtcblxuICAvLyBDaGFuZ2VzIHRoZSBwb3N0IHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdFxuICBjb25zdCBjaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAge1xuICAgICAgaWYgKGUgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhwb3N0cy5wb3N0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsdGVyZWRQb3N0cyA9IFtdO1xuICAgICAgICBzb3J0ZWRQb3N0cy5tYXAoKHNvcnRlZFBvc3QpID0+IHtcbiAgICAgICAgICBpZiAoc29ydGVkUG9zdC5jYXRlZ29yeSA9PT0gZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRQb3N0cyA9IHNvcnRlZFBvc3QucG9zdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhmaWx0ZXJlZFBvc3RzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQ291bnQgb2YgdGhlIGFydGljbGVzIGRpc3BsYXllZFxuICBjb25zdCBkaXNwbGF5ID0gY291bnQgPiAxID8gYCR7Y291bnR9IEFydGljbGVzYCA6IGAke2NvdW50fSBBcnRpY2xlYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldENvdW50KGZpbHRlcmVkUG9zdHMubGVuZ3RoKTtcbiAgICBzZXRQYWdlQ291bnQoTWF0aC5jZWlsKGZpbHRlcmVkUG9zdHMubGVuZ3RoIC8gNSkpO1xuICAgIHNldFBhZ2VOdW1iZXIoMSk7XG4gIH0sIFtmaWx0ZXJlZFBvc3RzXSk7XG5cbiAgLy8gZ29lcyB0byB0b3Agb2YgcGFnZSB3aGVuIG51bWJlciBpbiBudW1iZXJsaW5lIGlzIGNsaWNrZWRcbiAgY29uc3QgZ29Ub1RvcCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQ2hhbmdlcyB0aGUgcGFnZSBudW1iZXJcbiAgY29uc3QgY2hhbmdlUGFnZSA9IChudW1iZXIpID0+IHtcbiAgICBpZiAobnVtYmVyICE9PSBwYWdlTnVtYmVyKSB7XG4gICAgICBzZXRQYWdlTnVtYmVyKG51bWJlcik7XG4gICAgICBnb1RvVG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPVwiQXJ0aWNsZXNcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIkkgaGF2ZSBtYW55IGFydGljbGVzIG9uIGEgdmFyaWV0eSBvZiB0b3BpY3MuIFNlZSBpZiB0aGVyZSBhcmUgYW55IHRoYXQgeW91IGFyZSBpbnRlcmVzdGVkIGluIGxlYXJuaW5nIGFib3V0LlwiXG4gICAgICAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1hcnRpY2xlcy1jb250YWluZXItaGVhZGVyXCJdfT5BcnRpY2xlczwvaDE+XG4gICAgICA8RmlsdGVyXG4gICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgIGNoYW5nZUNhdGVnb3J5PXtjaGFuZ2VDYXRlZ29yeX1cbiAgICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICAgICAgLy8gc2VhcmNoUG9zdHM9e3NlYXJjaFBvc3RzfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IHBhZ2VOdW1iZXIgKiA1ICYmIGluZGV4ID49IChwYWdlTnVtYmVyIC0gMSkgKiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QXJ0aWNsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Bvc3QubWFpbkltYWdlfVxuICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICBub0JvcmRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgYXV0aG9ySW1hZ2U9e3Bvc3QuYXV0aG9ySW1hZ2V9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cG9zdC5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB7cGFnZUNvdW50ID4gMSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAge3BhZ2VOdW1iZXIgPiAxICYmIChcbiAgICAgICAgICAgIDxGYUNoZXZyb25MZWZ0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyIC0gMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZVwiXX0+XG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShwYWdlQ291bnQpLmtleXMoKSkubWFwKChudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17bnVtYmVyICsgMSA9PT0gcGFnZU51bWJlciA/IHsgY29sb3I6IFwiI2QwNWE0OVwiIH0gOiB7fX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZXMtbnVtYmVyTGluZS1udW1iZXJcIl19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlKHBhZ2VOdW1iZXIgKyAxKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bnVtYmVyICsgMX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3BhZ2VOdW1iZXIgPCBwYWdlQ291bnQgJiYgKFxuICAgICAgICAgICAgPEZhQ2hldnJvblJpZ2h0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibnVtYmVyTGluZS1hcnJvd1wiXX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShwYWdlTnVtYmVyICsgMSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG4gICAgICA8UGFnZUluZGV4XG4gICAgICAgIHBhZ2VDb3VudD17cGFnZUNvdW50fVxuICAgICAgICBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfVxuICAgICAgICBjaGFuZ2VQYWdlPXtjaGFuZ2VQYWdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKGdyb3FgXG4gICAgKltfdHlwZSA9PSBcInBvc3RcIiBdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYykgeyBcbiAgICAgIF9pZCxcbiAgICAgIHRpdGxlLFxuICAgICAgXCJ1c2VybmFtZVwiOiBhdXRob3ItPnVzZXJuYW1lLFxuICAgICAgLy8gXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgICAgIGJvZHksXG4gICAgICBtYWluSW1hZ2UsIFxuICAgICAgc2x1ZywgXG4gICAgICBwdWJsaXNoZWRBdCxcbiAgICAgIC8vIGNhdGVnb3JpZXNcbiAgICAgIGNhdGVnb3JpZXNbXS0+e2lkLCB0aXRsZX1cbiAgICB9XG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzQ29udGFpbmVyO1xuXG4vKiAgXG5cbmNvdWxkIHB1dCBhIHNlYXJjaCBiYXIgaW4gaGVyZSBmb3Igbm93IFxuLSB3aWxsIGhhdmUgdG8gc2VhcmNoIHRocm91Z2ggdGhlIGN1cnJlbnQgZmlsdGVyZWQgcG9zdHMgXG4tIHdpbGwgaGF2ZSB0byBtYWtlIGEgbmV3IGZ1bmN0aW9uIHRvIHNlYXJjaCB0aHJvdWdoIHRoZSBwb3N0c1xuXG4gIG1pZ2h0IG5lZWQgdG8gdXNlIG90aGVyIHNlbGVjdG9yIG9uIG1vYmlsZVxuXG4qL1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aWNsZUNvbnRhaW5lciIsIkZpbHRlciIsIlBhZ2VJbmRleCIsImdldENhdGVnb3JpZXMiLCJzb3J0UG9zdHMiLCJNZXRhIiwic3R5bGVzIiwiQXJ0aWNsZXNDb250YWluZXIiLCJwb3N0cyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwic29ydGVkUG9zdHMiLCJzZXRTb3J0ZWRQb3N0cyIsImZpbHRlcmVkUG9zdHMiLCJzZXRGaWx0ZXJlZFBvc3RzIiwibGVuZ3RoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2VDb3VudCIsInNldFBhZ2VDb3VudCIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwiY2hhbmdlQ2F0ZWdvcnkiLCJlIiwibWFwIiwic29ydGVkUG9zdCIsImNhdGVnb3J5IiwiZGlzcGxheSIsIk1hdGgiLCJjZWlsIiwiZ29Ub1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjaGFuZ2VQYWdlIiwibnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImgxIiwicG9zdCIsImluZGV4IiwiYm9keSIsImltYWdlIiwibWFpbkltYWdlIiwic2x1ZyIsIm5vQm9yZGVyIiwiYXV0aG9yIiwidXNlcm5hbWUiLCJhdXRob3JJbWFnZSIsInB1Ymxpc2hlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});