"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"article-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Meta, {\n                title: post.title\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Phil Elliott |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                format: \"MM/DD/YYYY\",\n                                style: {\n                                    color: \"rgba(26, 28, 26, 0.9)\"\n                                },\n                                children: post.publishedAt\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"main-img\"]),\n                        src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(post.mainImage),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_4___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_5__.PortableText, {\n                            value: post.body,\n                            components: PostComponents\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUVNO0FBQ1Q7QUFFUjtBQUNzQjtBQUV4RCxJQUFNSyxjQUFjLEdBQUc7SUFDckJDLEtBQUssRUFBRTtRQUNMQyxLQUFLLEVBQUUsZ0JBQWU7Z0JBQVpDLEtBQUssU0FBTEEsS0FBSztZQUNiLHFCQUNFLDhEQUFDQyxLQUFHO2dCQUNGQyxTQUFTLEVBQUVOLGtGQUFvQjtnQkFDL0JPLEdBQUcsRUFBRUgsS0FBSyxDQUFDRyxHQUFHLElBQUksR0FBRztnQkFDckJDLEdBQUcsRUFBRVYsbURBQU0sQ0FBQ00sS0FBSyxDQUFDOzs7OztxQkFDbEIsQ0FDRjtTQUNIO0tBQ0Y7Q0FDRjtBQUVELElBQU1LLElBQUksR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDbEIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0wsU0FBUyxFQUFFTix5RkFBMkI7OzBCQUN6Qyw4REFBQ0osa0RBQUk7Z0JBQUNnQixLQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FBSzs7Ozs7cUJBQUk7WUFDMUJGLElBQUksa0JBQ0gsOERBQUNHLFNBQU87O2tDQUNOLDhEQUFDQyxJQUFFO2tDQUFFSixJQUFJLENBQUNFLEtBQUs7Ozs7OzZCQUFNO2tDQUNyQiw4REFBQ0csSUFBRTs7NEJBQUMsZ0JBQ1k7NEJBQUMsR0FBRzswQ0FDbEIsOERBQUNoQixxREFBTTtnQ0FDTGlCLE1BQU0sRUFBQyxZQUFZO2dDQUNuQkMsS0FBSyxFQUFFO29DQUFFQyxLQUFLLEVBQUUsdUJBQXVCO2lDQUFFOzBDQUV4Q1IsSUFBSSxDQUFDUyxXQUFXOzs7OztxQ0FDVjs7Ozs7OzZCQUNOO2tDQUNMLDhEQUFDZCxLQUFHO3dCQUNGQyxTQUFTLEVBQUVOLGdGQUFrQjt3QkFDN0JRLEdBQUcsRUFBRVYsbURBQU0sQ0FBQ1ksSUFBSSxDQUFDVSxTQUFTLENBQUM7d0JBQzNCYixHQUFHLEVBQUMsRUFBRTs7Ozs7NkJBQ047a0NBQ0YsOERBQUNJLEtBQUc7d0JBQUNMLFNBQVMsRUFBRU4sdUZBQXlCO2tDQUN2Qyw0RUFBQ0gsNkRBQVk7NEJBQUNPLEtBQUssRUFBRU0sSUFBSSxDQUFDVyxJQUFJOzRCQUFFQyxVQUFVLEVBQUVyQixjQUFjOzs7OztpQ0FBSTs7Ozs7NkJBQzFEOzs7Ozs7cUJBQ0U7Ozs7OzthQUVSLENBQ047Q0FDSDtBQTVCS1EsS0FBQUEsSUFBSTs7QUE2RFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9zdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtaW1hZ2VcIl19XG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICA8TWV0YSB0aXRsZT17cG9zdC50aXRsZX0gLz5cbiAgICAgIHtwb3N0ICYmIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgUGhpbCBFbGxpb3R0IHx7XCIgXCJ9XG4gICAgICAgICAgICA8TW9tZW50XG4gICAgICAgICAgICAgIGZvcm1hdD1cIk1NL0REL1lZWVlcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDI2LCAyOCwgMjYsIDAuOSlcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cG9zdC5wdWJsaXNoZWRBdH1cbiAgICAgICAgICAgIDwvTW9tZW50PlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWltZ1wiXX1cbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250ZW50XCJdfT5cbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e3Bvc3QuYm9keX0gY29tcG9uZW50cz17UG9zdENvbXBvbmVudHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdIHtcbiAgICAgIHRpdGxlLFxuICAgICAgXCJ1c2VybmFtZVwiOiBhdXRob3ItPnVzZXJuYW1lLFxuICAgICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmF2YXRhcixcbiAgICAgIGJvZHksXG4gICAgICBtYWluSW1hZ2UsIFxuICAgICAgcHVibGlzaGVkQXQsIFxuICAgICAgY2F0ZWdvcmllc1xufWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMsIHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRDbGllbnQocHJldmlldykuZmV0Y2gocXVlcnksIHsgc2x1ZzogcGFyYW1zLnNsdWcgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbIk1ldGEiLCJQb3J0YWJsZVRleHQiLCJ1cmxGb3IiLCJNb21lbnQiLCJzdHlsZXMiLCJQb3N0Q29tcG9uZW50cyIsInR5cGVzIiwiaW1hZ2UiLCJ2YWx1ZSIsImltZyIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIlBvc3QiLCJwb3N0IiwiZGl2IiwidGl0bGUiLCJhcnRpY2xlIiwiaDEiLCJoMyIsImZvcm1hdCIsInN0eWxlIiwiY29sb3IiLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsImJvZHkiLCJjb21wb25lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});