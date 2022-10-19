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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Popular/Article-Container/Article-Container */ \"./components/Home/Popular/Article-Container/Article-Container.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/Articles.module.scss */ \"./styles/Articles.module.scss\");\n/* harmony import */ var _styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ArticlesContainer = function(posts) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\"), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts), filteredPosts = ref1[0], setFilteredPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.posts.length), count = ref2[0], setCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageCount = ref3[0], setPageCount = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), pageNumber = ref4[0], setPageNumber = ref4[1];\n    // Finds all of the categories of the articles\n    var categories = [];\n    posts.posts.map(function(post) {\n        if (post.categories) {\n            post.categories.map(function(category) {\n                if (!categories.includes(category.title)) {\n                    categories.push(category.title);\n                }\n            });\n        }\n    });\n    // Sorts the articles by category\n    var sortedPosts = [];\n    categories.map(function(category) {\n        var categoryPosts = [];\n        posts.posts.map(function(post) {\n            if (post.categories) {\n                post.categories.map(function(postCategory) {\n                    if (postCategory.title === category) {\n                        categoryPosts.push(post);\n                    }\n                });\n            }\n        });\n        sortedPosts.push({\n            category: category,\n            posts: categoryPosts\n        });\n    });\n    sortedPosts.push({\n        category: \"All\",\n        posts: posts.posts\n    });\n    // Changes the post when an option is select\n    var changeCategory = function(e) {\n        {\n            setCategory(e.target.value);\n            if (e.target.value === \"All\") {\n                setFilteredPosts(posts.posts);\n            } else {\n                var filteredPosts = [];\n                sortedPosts.map(function(sortedPost) {\n                    if (sortedPost.category === e.target.value) {\n                        filteredPosts = sortedPost.posts;\n                    }\n                });\n                setFilteredPosts(filteredPosts);\n            }\n        }\n    };\n    // Count of the articles displayed\n    var display = count > 1 ? \"\".concat(count, \" Articles\") : \"\".concat(count, \" Article\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setCount(filteredPosts.length);\n        setPageCount(Math.ceil(filteredPosts.length / 5));\n        setPageNumber(1);\n    }, [\n        filteredPosts\n    ]);\n    // goes to top of page when number in numberline is clicked\n    var goToTop = function() {\n        window.scrollTo({\n            top: 0,\n            behavior: \"smooth\"\n        });\n    };\n    var changePage = function(e) {\n        setPageNumber(e.target.value);\n        goToTop();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_3__.Meta, {\n                title: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-container-header\"]),\n                children: \"Articles\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-articles-filter-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-categories-select\"]),\n                            onChange: function(e) {\n                                return changeCategory(e);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"All\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this),\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: category,\n                                        children: category\n                                    }, void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 22\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"filter-container-article-count\"]),\n                        children: display\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"home-popular-articles-container\"]),\n                children: filteredPosts.map(function(post, index) {\n                    if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Popular_Article_Container_Article_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index,\n                            title: post.title,\n                            description: post.body,\n                            image: post.mainImage,\n                            slug: post.slug,\n                            noBorder: true,\n                            author: post.username,\n                            authorImage: post.authorImage,\n                            publishedAt: post.publishedAt,\n                            categories: post.categories\n                        }, index, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 108,\n                            columnNumber: 15\n                        }, _this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine\"]),\n                    children: Array.from(Array(pageCount).keys()).map(function(number) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Articles_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"articles-numberLine-number\"]),\n                            onClick: function() {\n                                setPageNumber(number + 1);\n                            },\n                            children: number + 1\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                            lineNumber: 130,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/articles.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticlesContainer, \"NS3ddExkVK3LW2/fLxqIMML9nVg=\");\n_c = ArticlesContainer;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesContainer); /*  \n\n\n  numberline\n  \n  show 5 articles at a time\n  back button on left if selection is great than 1 \n  need 5 number selections\n  forward button if there are more articles to show \\\n\n  could divide number of articles by 5 to get the page counts \n  then use a for loop to create the number selections\n\n  if the number of articles is less than 5 then dont show the numberline\n\n  \n\n\n 1) categories\n 2) article count\n 3) filter options\n\n\nneed to get the categories from the posts and then display them in the select box\n  map through and make an array of all of the categories and no duplicates\n\n\n\nfilter articles based off of selection\nput a conditional in the map \n\ncan add an onchange to the select box and then set the state of the category to the value of the select box\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"ArticlesContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ2tEO0FBQ3BEO0FBR1k7QUFFdEQsSUFBTUssaUJBQWlCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUNuQyxJQUFnQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q00sUUFBUSxHQUFpQk4sR0FBZSxHQUFoQyxFQUFFTyxXQUFXLEdBQUlQLEdBQWUsR0FBbkI7SUFDNUIsSUFBMENBLElBQXFCLEdBQXJCQSwrQ0FBUSxDQUFDSyxLQUFLLENBQUNBLEtBQUssQ0FBQyxFQUF4REcsYUFBYSxHQUFzQlIsSUFBcUIsR0FBM0MsRUFBRVMsZ0JBQWdCLEdBQUlULElBQXFCLEdBQXpCO0lBQ3RDLElBQTBCQSxJQUE0QixHQUE1QkEsK0NBQVEsQ0FBQ0ssS0FBSyxDQUFDQSxLQUFLLENBQUNLLE1BQU0sQ0FBQyxFQUEvQ0MsS0FBSyxHQUFjWCxJQUE0QixHQUExQyxFQUFFWSxRQUFRLEdBQUlaLElBQTRCLEdBQWhDO0lBQ3RCLElBQWtDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXRDYSxTQUFTLEdBQWtCYixJQUFXLEdBQTdCLEVBQUVjLFlBQVksR0FBSWQsSUFBVyxHQUFmO0lBQzlCLElBQW9DQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDZSxVQUFVLEdBQW1CZixJQUFXLEdBQTlCLEVBQUVnQixhQUFhLEdBQUloQixJQUFXLEdBQWY7SUFFaEMsOENBQThDO0lBQzlDLElBQUlpQixVQUFVLEdBQUcsRUFBRTtJQUNuQlosS0FBSyxDQUFDQSxLQUFLLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7UUFDeEIsSUFBSUEsSUFBSSxDQUFDRixVQUFVLEVBQUU7WUFDbkJFLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxHQUFHLENBQUMsU0FBQ1osUUFBUSxFQUFLO2dCQUNoQyxJQUFJLENBQUNXLFVBQVUsQ0FBQ0csUUFBUSxDQUFDZCxRQUFRLENBQUNlLEtBQUssQ0FBQyxFQUFFO29CQUN4Q0osVUFBVSxDQUFDSyxJQUFJLENBQUNoQixRQUFRLENBQUNlLEtBQUssQ0FBQyxDQUFDO2lCQUNqQzthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsaUNBQWlDO0lBQ2pDLElBQUlFLFdBQVcsR0FBRyxFQUFFO0lBQ3BCTixVQUFVLENBQUNDLEdBQUcsQ0FBQyxTQUFDWixRQUFRLEVBQUs7UUFDM0IsSUFBSWtCLGFBQWEsR0FBRyxFQUFFO1FBQ3RCbkIsS0FBSyxDQUFDQSxLQUFLLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7WUFDeEIsSUFBSUEsSUFBSSxDQUFDRixVQUFVLEVBQUU7Z0JBQ25CRSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNPLFlBQVksRUFBSztvQkFDcEMsSUFBSUEsWUFBWSxDQUFDSixLQUFLLEtBQUtmLFFBQVEsRUFBRTt3QkFDbkNrQixhQUFhLENBQUNGLElBQUksQ0FBQ0gsSUFBSSxDQUFDLENBQUM7cUJBQzFCO2lCQUNGLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQyxDQUFDO1FBQ0hJLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDO1lBQUVoQixRQUFRLEVBQUVBLFFBQVE7WUFBRUQsS0FBSyxFQUFFbUIsYUFBYTtTQUFFLENBQUMsQ0FBQztLQUNoRSxDQUFDLENBQUM7SUFFSEQsV0FBVyxDQUFDRCxJQUFJLENBQUM7UUFBRWhCLFFBQVEsRUFBRSxLQUFLO1FBQUVELEtBQUssRUFBRUEsS0FBSyxDQUFDQSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBRTFELDRDQUE0QztJQUM1QyxJQUFNcUIsY0FBYyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUM1QjtZQUNFcEIsV0FBVyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUlGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUM1QnBCLGdCQUFnQixDQUFDSixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO2FBQy9CLE1BQU07Z0JBQ0wsSUFBSUcsYUFBYSxHQUFHLEVBQUU7Z0JBQ3RCZSxXQUFXLENBQUNMLEdBQUcsQ0FBQyxTQUFDWSxVQUFVLEVBQUs7b0JBQzlCLElBQUlBLFVBQVUsQ0FBQ3hCLFFBQVEsS0FBS3FCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEVBQUU7d0JBQzFDckIsYUFBYSxHQUFHc0IsVUFBVSxDQUFDekIsS0FBSyxDQUFDO3FCQUNsQztpQkFDRixDQUFDLENBQUM7Z0JBQ0hJLGdCQUFnQixDQUFDRCxhQUFhLENBQUMsQ0FBQzthQUNqQztTQUNGO0tBQ0Y7SUFFRCxrQ0FBa0M7SUFDbEMsSUFBTXVCLE9BQU8sR0FBR3BCLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFRLE1BQVMsQ0FBZkEsS0FBSyxFQUFDLFdBQVMsQ0FBQyxHQUFHLEVBQUMsQ0FBUSxNQUFRLENBQWRBLEtBQUssRUFBQyxVQUFRLENBQUM7SUFFcEVaLGdEQUFTLENBQUMsV0FBTTtRQUNkYSxRQUFRLENBQUNKLGFBQWEsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7UUFDL0JJLFlBQVksQ0FBQ2tCLElBQUksQ0FBQ0MsSUFBSSxDQUFDekIsYUFBYSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRE0sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCLEVBQUU7UUFBQ1IsYUFBYTtLQUFDLENBQUMsQ0FBQztJQUVwQiwyREFBMkQ7SUFDM0QsSUFBTTBCLE9BQU8sR0FBRyxXQUFNO1FBQ3BCQyxNQUFNLENBQUNDLFFBQVEsQ0FBQztZQUNkQyxHQUFHLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7S0FDSjtJQUVELElBQU1DLFVBQVUsR0FBRyxTQUFDWixDQUFDLEVBQUs7UUFDeEJYLGFBQWEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO1FBQzlCSyxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQscUJBQ0UsOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFFdEMsZ0dBQWlDOzswQkFDL0MsOERBQUNELGtEQUFJO2dCQUFDbUIsS0FBSyxFQUFDLFVBQVU7Ozs7O3FCQUFHOzBCQUN6Qiw4REFBQ3FCLElBQUU7Z0JBQUNELFNBQVMsRUFBRXRDLHVHQUF3QzswQkFBRSxVQUFROzs7OztxQkFBSzswQkFDdEUsOERBQUNxQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUV0Qyx1R0FBd0M7O2tDQUN0RCw4REFBQ3FDLEtBQUc7d0JBQUNDLFNBQVMsRUFBRXRDLG9HQUFxQztrQ0FDbkQsNEVBQUN3QyxRQUFNOzRCQUNMRixTQUFTLEVBQUV0QywyR0FBNEM7NEJBQ3ZEeUMsUUFBUSxFQUFFLFNBQUNqQixDQUFDO3VDQUFLRCxjQUFjLENBQUNDLENBQUMsQ0FBQzs2QkFBQTs7OENBRWxDLDhEQUFDa0IsUUFBTTtvQ0FBQ2hCLEtBQUssRUFBQyxLQUFLOzhDQUFDLEtBQUc7Ozs7O3lDQUFTO2dDQUMvQlosVUFBVSxDQUFDQyxHQUFHLENBQUMsU0FBQ1osUUFBUSxFQUFLO29DQUM1QixxQkFBTyw4REFBQ3VDLFFBQU07d0NBQUNoQixLQUFLLEVBQUV2QixRQUFRO2tEQUFHQSxRQUFROzs7Ozs2Q0FBVSxDQUFDO2lDQUNyRCxDQUFDOzs7Ozs7aUNBQ0s7Ozs7OzZCQUNMO2tDQUNOLDhEQUFDd0MsR0FBQzt3QkFBQ0wsU0FBUyxFQUFFdEMsdUdBQXdDO2tDQUFHNEIsT0FBTzs7Ozs7NkJBQUs7Ozs7OztxQkFFakU7MEJBQ04sOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXRDLHdHQUF5QzswQkFDdERLLGFBQWEsQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRTRCLEtBQUssRUFBSztvQkFDbEMsSUFBSUEsS0FBSyxHQUFHaEMsVUFBVSxHQUFHLENBQUMsSUFBSWdDLEtBQUssSUFBSSxDQUFDaEMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDM0QscUJBQ0UsOERBQUNkLG9HQUFnQjs0QkFFZjhDLEtBQUssRUFBRUEsS0FBSzs0QkFDWjFCLEtBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUFLOzRCQUNqQjJCLFdBQVcsRUFBRTdCLElBQUksQ0FBQzhCLElBQUk7NEJBQ3RCQyxLQUFLLEVBQUUvQixJQUFJLENBQUNnQyxTQUFTOzRCQUNyQkMsSUFBSSxFQUFFakMsSUFBSSxDQUFDaUMsSUFBSTs0QkFDZkMsUUFBUSxFQUFFLElBQUk7NEJBQ2RDLE1BQU0sRUFBRW5DLElBQUksQ0FBQ29DLFFBQVE7NEJBQ3JCQyxXQUFXLEVBQUVyQyxJQUFJLENBQUNxQyxXQUFXOzRCQUM3QkMsV0FBVyxFQUFFdEMsSUFBSSxDQUFDc0MsV0FBVzs0QkFDN0J4QyxVQUFVLEVBQUVFLElBQUksQ0FBQ0YsVUFBVTsyQkFWdEI4QixLQUFLOzs7O2lDQVdWLENBQ0Y7cUJBQ0g7aUJBQ0YsQ0FBQzs7Ozs7cUJBQ0U7MEJBRU4sOERBQUNQLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXRDLHNHQUF1QzswQkFDckQsNEVBQUNxQyxLQUFHO29CQUFDQyxTQUFTLEVBQUV0Qyw0RkFBNkI7OEJBQzFDdUQsS0FBSyxDQUFDQyxJQUFJLENBQUNELEtBQUssQ0FBQzdDLFNBQVMsQ0FBQyxDQUFDK0MsSUFBSSxFQUFFLENBQUMsQ0FBQzFDLEdBQUcsQ0FBQyxTQUFDMkMsTUFBTSxFQUFLO3dCQUNuRCxxQkFDRSw4REFBQ3JCLEtBQUc7NEJBQ0ZDLFNBQVMsRUFBRXRDLG1HQUFvQzs0QkFDL0MyRCxPQUFPLEVBQUUsV0FBTTtnQ0FDYjlDLGFBQWEsQ0FBQzZDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDM0I7c0NBRUFBLE1BQU0sR0FBRyxDQUFDOzs7OztpQ0FDUCxDQUNOO3FCQUNILENBQUM7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBeElLekQsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUI7O0FBaUt2QiwrREFBZUEsaUJBQWlCLEVBQUMsQ0FFakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qcz9mZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lclwiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFydGljbGVzQ29udGFpbmVyID0gKHBvc3RzKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IFtmaWx0ZXJlZFBvc3RzLCBzZXRGaWx0ZXJlZFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLnBvc3RzKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5wb3N0cy5sZW5ndGgpO1xuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEZpbmRzIGFsbCBvZiB0aGUgY2F0ZWdvcmllcyBvZiB0aGUgYXJ0aWNsZXNcbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgcG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5LnRpdGxlKSkge1xuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gU29ydHMgdGhlIGFydGljbGVzIGJ5IGNhdGVnb3J5XG4gIGxldCBzb3J0ZWRQb3N0cyA9IFtdO1xuICBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgY2F0ZWdvcnlQb3N0cyA9IFtdO1xuICAgIHBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QuY2F0ZWdvcmllcykge1xuICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKChwb3N0Q2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICBpZiAocG9zdENhdGVnb3J5LnRpdGxlID09PSBjYXRlZ29yeSkge1xuICAgICAgICAgICAgY2F0ZWdvcnlQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc29ydGVkUG9zdHMucHVzaCh7IGNhdGVnb3J5OiBjYXRlZ29yeSwgcG9zdHM6IGNhdGVnb3J5UG9zdHMgfSk7XG4gIH0pO1xuXG4gIHNvcnRlZFBvc3RzLnB1c2goeyBjYXRlZ29yeTogXCJBbGxcIiwgcG9zdHM6IHBvc3RzLnBvc3RzIH0pO1xuXG4gIC8vIENoYW5nZXMgdGhlIHBvc3Qgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0XG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICB7XG4gICAgICBzZXRDYXRlZ29yeShlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgc2V0RmlsdGVyZWRQb3N0cyhwb3N0cy5wb3N0cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZmlsdGVyZWRQb3N0cyA9IFtdO1xuICAgICAgICBzb3J0ZWRQb3N0cy5tYXAoKHNvcnRlZFBvc3QpID0+IHtcbiAgICAgICAgICBpZiAoc29ydGVkUG9zdC5jYXRlZ29yeSA9PT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUG9zdHMgPSBzb3J0ZWRQb3N0LnBvc3RzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNldEZpbHRlcmVkUG9zdHMoZmlsdGVyZWRQb3N0cyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIENvdW50IG9mIHRoZSBhcnRpY2xlcyBkaXNwbGF5ZWRcbiAgY29uc3QgZGlzcGxheSA9IGNvdW50ID4gMSA/IGAke2NvdW50fSBBcnRpY2xlc2AgOiBgJHtjb3VudH0gQXJ0aWNsZWA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb3VudChmaWx0ZXJlZFBvc3RzLmxlbmd0aCk7XG4gICAgc2V0UGFnZUNvdW50KE1hdGguY2VpbChmaWx0ZXJlZFBvc3RzLmxlbmd0aCAvIDUpKTtcbiAgICBzZXRQYWdlTnVtYmVyKDEpO1xuICB9LCBbZmlsdGVyZWRQb3N0c10pO1xuXG4gIC8vIGdvZXMgdG8gdG9wIG9mIHBhZ2Ugd2hlbiBudW1iZXIgaW4gbnVtYmVybGluZSBpcyBjbGlja2VkXG4gIGNvbnN0IGdvVG9Ub3AgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAoZSkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIGdvVG9Ub3AoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWFydGljbGVzLWNvbnRhaW5lclwiXX0+XG4gICAgICA8TWV0YSB0aXRsZT1cIkFydGljbGVzXCIgLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlclwiXX0+QXJ0aWNsZXM8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmaWx0ZXItY29udGFpbmVyLWNhdGVnb3JpZXNcIl19PlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzLXNlbGVjdFwiXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlQ2F0ZWdvcnkoZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L29wdGlvbj47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1hcnRpY2xlLWNvdW50XCJdfT57ZGlzcGxheX08L3A+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZmlsdGVyLWNvbnRhaW5lci1vcHRpb25zXCJdfT48L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZXMtY29udGFpbmVyXCJdfT5cbiAgICAgICAge2ZpbHRlcmVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA8IHBhZ2VOdW1iZXIgKiA1ICYmIGluZGV4ID49IChwYWdlTnVtYmVyIC0gMSkgKiA1KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8QXJ0aWNsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmJvZHl9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3Bvc3QubWFpbkltYWdlfVxuICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgICBub0JvcmRlcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgYXV0aG9ySW1hZ2U9e3Bvc3QuYXV0aG9ySW1hZ2V9XG4gICAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3Bvc3QucHVibGlzaGVkQXR9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17cG9zdC5jYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlcy1udW1iZXJMaW5lXCJdfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShwYWdlQ291bnQpLmtleXMoKSkubWFwKChudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGVzLW51bWJlckxpbmUtbnVtYmVyXCJdfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2VOdW1iZXIobnVtYmVyICsgMSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtudW1iZXIgKyAxfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChncm9xYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpIHsgXG4gICAgICBfaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIC8vIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHNsdWcsIFxuICAgICAgcHVibGlzaGVkQXQsXG4gICAgICAvLyBjYXRlZ29yaWVzXG4gICAgICBjYXRlZ29yaWVzW10tPntpZCwgdGl0bGV9XG4gICAgfVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0NvbnRhaW5lcjtcblxuLyogIFxuXG5cbiAgbnVtYmVybGluZVxuICBcbiAgc2hvdyA1IGFydGljbGVzIGF0IGEgdGltZVxuICBiYWNrIGJ1dHRvbiBvbiBsZWZ0IGlmIHNlbGVjdGlvbiBpcyBncmVhdCB0aGFuIDEgXG4gIG5lZWQgNSBudW1iZXIgc2VsZWN0aW9uc1xuICBmb3J3YXJkIGJ1dHRvbiBpZiB0aGVyZSBhcmUgbW9yZSBhcnRpY2xlcyB0byBzaG93IFxcXG5cbiAgY291bGQgZGl2aWRlIG51bWJlciBvZiBhcnRpY2xlcyBieSA1IHRvIGdldCB0aGUgcGFnZSBjb3VudHMgXG4gIHRoZW4gdXNlIGEgZm9yIGxvb3AgdG8gY3JlYXRlIHRoZSBudW1iZXIgc2VsZWN0aW9uc1xuXG4gIGlmIHRoZSBudW1iZXIgb2YgYXJ0aWNsZXMgaXMgbGVzcyB0aGFuIDUgdGhlbiBkb250IHNob3cgdGhlIG51bWJlcmxpbmVcblxuICBcblxuXG4gMSkgY2F0ZWdvcmllc1xuIDIpIGFydGljbGUgY291bnRcbiAzKSBmaWx0ZXIgb3B0aW9uc1xuXG5cbm5lZWQgdG8gZ2V0IHRoZSBjYXRlZ29yaWVzIGZyb20gdGhlIHBvc3RzIGFuZCB0aGVuIGRpc3BsYXkgdGhlbSBpbiB0aGUgc2VsZWN0IGJveFxuICBtYXAgdGhyb3VnaCBhbmQgbWFrZSBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIGNhdGVnb3JpZXMgYW5kIG5vIGR1cGxpY2F0ZXNcblxuXG5cbmZpbHRlciBhcnRpY2xlcyBiYXNlZCBvZmYgb2Ygc2VsZWN0aW9uXG5wdXQgYSBjb25kaXRpb25hbCBpbiB0aGUgbWFwIFxuXG5jYW4gYWRkIGFuIG9uY2hhbmdlIHRvIHRoZSBzZWxlY3QgYm94IGFuZCB0aGVuIHNldCB0aGUgc3RhdGUgb2YgdGhlIGNhdGVnb3J5IHRvIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0IGJveFxuXG4qL1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXJ0aWNsZUNvbnRhaW5lciIsIk1ldGEiLCJzdHlsZXMiLCJBcnRpY2xlc0NvbnRhaW5lciIsInBvc3RzIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImZpbHRlcmVkUG9zdHMiLCJzZXRGaWx0ZXJlZFBvc3RzIiwibGVuZ3RoIiwiY291bnQiLCJzZXRDb3VudCIsInBhZ2VDb3VudCIsInNldFBhZ2VDb3VudCIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwiY2F0ZWdvcmllcyIsIm1hcCIsInBvc3QiLCJpbmNsdWRlcyIsInRpdGxlIiwicHVzaCIsInNvcnRlZFBvc3RzIiwiY2F0ZWdvcnlQb3N0cyIsInBvc3RDYXRlZ29yeSIsImNoYW5nZUNhdGVnb3J5IiwiZSIsInRhcmdldCIsInZhbHVlIiwic29ydGVkUG9zdCIsImRpc3BsYXkiLCJNYXRoIiwiY2VpbCIsImdvVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY2hhbmdlUGFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJwIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsImJvZHkiLCJpbWFnZSIsIm1haW5JbWFnZSIsInNsdWciLCJub0JvcmRlciIsImF1dGhvciIsInVzZXJuYW1lIiwiYXV0aG9ySW1hZ2UiLCJwdWJsaXNoZWRBdCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJudW1iZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles.js\n"));

/***/ })

});