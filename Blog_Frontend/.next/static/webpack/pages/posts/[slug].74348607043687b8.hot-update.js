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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.mainImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-container\"]),\n        children: [\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Meta, {\n                title: post.title\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 29,\n                columnNumber: 16\n            }, _this),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            color: \"rgba(26, 28, 26, 0.9)\"\n                        },\n                        children: [\n                            \"Phil Elliott |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                format: \"MM/DD/YYYY\",\n                                children: post.publishedAt\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, imageProps), {\n                            alt: \"Featured Image\",\n                            layout: \"fill\"\n                        }), void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n                            value: post.body,\n                            components: PostComponents\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUE2QztBQUVNO0FBQ1Q7QUFDWDtBQUN3QjtBQUNIO0FBQ2xCO0FBQ3NCO0FBRXhELElBQU1RLGNBQWMsR0FBRztJQUNyQkMsS0FBSyxFQUFFO1FBQ0xDLEtBQUssRUFBRSxnQkFBZTtnQkFBWkMsS0FBSyxTQUFMQSxLQUFLO1lBQ2IscUJBQ0UsOERBQUNDLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBRU4sa0ZBQW9CO2dCQUMvQk8sR0FBRyxFQUFFSCxLQUFLLENBQUNHLEdBQUcsSUFBSSxHQUFHO2dCQUNyQkMsR0FBRyxFQUFFYixtREFBTSxDQUFDUyxLQUFLLENBQUM7Ozs7O3FCQUNsQixDQUNGO1NBQ0g7S0FDRjtDQUNGO0FBRUQsSUFBTUssSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7SUFDbEIsSUFBTUMsVUFBVSxHQUFHZCxxRUFBa0IsQ0FBQ0MsNkRBQVMsRUFBRSxFQUFFWSxJQUFJLENBQUNFLFNBQVMsQ0FBQztJQUNsRSxxQkFDRSw4REFBQ0MsS0FBRztRQUFDUCxTQUFTLEVBQUVOLHlGQUEyQjs7WUFDeENVLElBQUksa0JBQUksOERBQUNqQixrREFBSTtnQkFBQ3FCLEtBQUssRUFBRUosSUFBSSxDQUFDSSxLQUFLOzs7OztxQkFBSTtZQUNuQ0osSUFBSSxrQkFDSCw4REFBQ0ssU0FBTzs7a0NBQ04sOERBQUNDLElBQUU7a0NBQUVOLElBQUksQ0FBQ0ksS0FBSzs7Ozs7NkJBQU07a0NBQ3JCLDhEQUFDRyxJQUFFO3dCQUFDQyxLQUFLLEVBQUU7NEJBQUVDLEtBQUssRUFBRSx1QkFBdUI7eUJBQUU7OzRCQUFFLGdCQUMvQjs0QkFBQyxHQUFHOzBDQUNsQiw4REFBQ3BCLHFEQUFNO2dDQUFDcUIsTUFBTSxFQUFDLFlBQVk7MENBQUVWLElBQUksQ0FBQ1csV0FBVzs7Ozs7cUNBQVU7Ozs7Ozs2QkFDcEQ7a0NBQ0wsOERBQUNSLEtBQUc7a0NBQ0YsNEVBQUNqQixtREFBSywwS0FBS2UsVUFBVTs0QkFBRUosR0FBRyxFQUFDLGdCQUFnQjs0QkFBQ2UsTUFBTSxFQUFDLE1BQU07Ozs7O2lDQUFHOzs7Ozs2QkFDeEQ7a0NBTU4sOERBQUNULEtBQUc7d0JBQUNQLFNBQVMsRUFBRU4sdUZBQXlCO2tDQUN2Qyw0RUFBQ04sOERBQVk7NEJBQUNVLEtBQUssRUFBRU0sSUFBSSxDQUFDYSxJQUFJOzRCQUFFQyxVQUFVLEVBQUV2QixjQUFjOzs7OztpQ0FBSTs7Ozs7NkJBQzFEOzs7Ozs7cUJBQ0U7Ozs7OzthQUVSLENBQ047Q0FDSDtHQTNCS1EsSUFBSTs7UUFDV1osaUVBQWtCOzs7QUFEakNZLEtBQUFBLElBQUk7O0FBNERWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlTmV4dFNhbml0eUltYWdlIH0gZnJvbSBcIm5leHQtc2FuaXR5LWltYWdlXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBQb3N0Q29tcG9uZW50cyA9IHtcbiAgdHlwZXM6IHtcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC1pbWFnZVwiXX1cbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIHBvc3QubWFpbkltYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250YWluZXJcIl19PlxuICAgICAge3Bvc3QgJiYgPE1ldGEgdGl0bGU9e3Bvc3QudGl0bGV9IC8+fVxuICAgICAge3Bvc3QgJiYgKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgyNiwgMjgsIDI2LCAwLjkpXCIgfX0+XG4gICAgICAgICAgICBQaGlsIEVsbGlvdHQgfHtcIiBcIn1cbiAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU0vREQvWVlZWVwiPntwb3N0LnB1Ymxpc2hlZEF0fTwvTW9tZW50PlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZSB7Li4uaW1hZ2VQcm9wc30gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWltZ1wiXX1cbiAgICAgICAgICAgIHNyYz17dXJsRm9yKHBvc3QubWFpbkltYWdlKX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGUtY29udGVudFwiXX0+XG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtwb3N0LmJvZHl9IGNvbXBvbmVudHM9e1Bvc3RDb21wb25lbnRzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSB7XG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5hdmF0YXIsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHB1Ymxpc2hlZEF0LCBcbiAgICAgIGNhdGVnb3JpZXNcbn1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zLCBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHF1ZXJ5LCB7IHNsdWc6IHBhcmFtcy5zbHVnIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJNZXRhIiwiUG9ydGFibGVUZXh0IiwidXJsRm9yIiwiSW1hZ2UiLCJ1c2VOZXh0U2FuaXR5SW1hZ2UiLCJnZXRDbGllbnQiLCJNb21lbnQiLCJzdHlsZXMiLCJQb3N0Q29tcG9uZW50cyIsInR5cGVzIiwiaW1hZ2UiLCJ2YWx1ZSIsImltZyIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsIlBvc3QiLCJwb3N0IiwiaW1hZ2VQcm9wcyIsIm1haW5JbWFnZSIsImRpdiIsInRpdGxlIiwiYXJ0aWNsZSIsImgxIiwiaDMiLCJzdHlsZSIsImNvbG9yIiwiZm9ybWF0IiwicHVibGlzaGVkQXQiLCJsYXlvdXQiLCJib2R5IiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});