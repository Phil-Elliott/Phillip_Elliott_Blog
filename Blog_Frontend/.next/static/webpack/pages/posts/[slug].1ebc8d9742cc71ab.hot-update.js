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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[post - image],\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_1__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post1 = param.post;\n    var title = post1.title, body = post1.body, mainImage = post1.mainImage, publishedAt = post1.publishedAt;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"article-container\"]),\n        children: post1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Last Updated: \",\n                        publishedAt\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_1__.urlFor)(mainImage),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_2___default()[\"article-content\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                        value: body,\n                        components: PostComponents\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNtRDtBQUNUO0FBRWM7QUFFeEQsSUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLGdCQUFlO2dCQUFaQyxLQUFLLFNBQUxBLEtBQUs7WUFDYixxQkFDRSw4REFBQ0MsS0FBRztnQkFDRkMsU0FBUyxFQUFFTixvRUFBTSxDQUFDTyxJQUFJLEdBQUdKLEtBQUssQ0FBQztnQkFDL0JLLEdBQUcsRUFBRUosS0FBSyxDQUFDSSxHQUFHLElBQUksR0FBRztnQkFDckJDLEdBQUcsRUFBRVYsbURBQU0sQ0FBQ0ssS0FBSyxDQUFDOzs7OztxQkFDbEIsQ0FDRjtTQUNIO0tBQ0Y7Q0FDRjtBQUVELElBQU1NLElBQUksR0FBRyxnQkFBYztRQUFYSCxLQUFJLFNBQUpBLElBQUk7SUFDbEIsSUFBUUksS0FBSyxHQUFtQ0osS0FBSSxDQUE1Q0ksS0FBSyxFQUFFQyxJQUFJLEdBQTZCTCxLQUFJLENBQXJDSyxJQUFJLEVBQUVDLFNBQVMsR0FBa0JOLEtBQUksQ0FBL0JNLFNBQVMsRUFBRUMsV0FBVyxHQUFLUCxLQUFJLENBQXBCTyxXQUFXO0lBRTNDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNULFNBQVMsRUFBRU4seUZBQTJCO2tCQUN4Q08sS0FBSSxrQkFDSCw4REFBQ1MsU0FBTzs7OEJBQ04sOERBQUNDLElBQUU7OEJBQUVOLEtBQUs7Ozs7O3lCQUFNOzhCQUNoQiw4REFBQ08sR0FBQzs7d0JBQUMsZ0JBQWM7d0JBQUNKLFdBQVc7Ozs7Ozt5QkFBSzs4QkFDbEMsOERBQUNULEtBQUc7b0JBQUNJLEdBQUcsRUFBRVYsbURBQU0sQ0FBQ2MsU0FBUyxDQUFDO29CQUFFTCxHQUFHLEVBQUMsRUFBRTs7Ozs7eUJBQUc7OEJBQ3RDLDhEQUFDTyxLQUFHO29CQUFDVCxTQUFTLEVBQUVOLHVGQUF5Qjs4QkFDdkMsNEVBQUNGLDZEQUFZO3dCQUFDTSxLQUFLLEVBQUVRLElBQUk7d0JBQUVPLFVBQVUsRUFBRWxCLGNBQWM7Ozs7OzZCQUFJOzs7Ozt5QkFDckQ7Ozs7OztpQkFDRTs7Ozs7YUFFUixDQUNOO0NBQ0g7QUFqQktTLEtBQUFBLElBQUk7O0FBa0RWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uL3N0eWxlcy9BcnRpY2xlLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFBvc3RDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbcG9zdCAtIGltYWdlXX1cbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGJvZHksIG1haW5JbWFnZSwgcHVibGlzaGVkQXQgfSA9IHBvc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250YWluZXJcIl19PlxuICAgICAge3Bvc3QgJiYgKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+TGFzdCBVcGRhdGVkOiB7cHVibGlzaGVkQXR9PC9wPlxuICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IobWFpbkltYWdlKX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250ZW50XCJdfT5cbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e1Bvc3RDb21wb25lbnRzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSB7XG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5hdmF0YXIsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHB1Ymxpc2hlZEF0LCBcbiAgICAgIGNhdGVnb3JpZXNcbn1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zLCBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHF1ZXJ5LCB7IHNsdWc6IHBhcmFtcy5zbHVnIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJQb3J0YWJsZVRleHQiLCJ1cmxGb3IiLCJzdHlsZXMiLCJQb3N0Q29tcG9uZW50cyIsInR5cGVzIiwiaW1hZ2UiLCJ2YWx1ZSIsImltZyIsImNsYXNzTmFtZSIsInBvc3QiLCJhbHQiLCJzcmMiLCJQb3N0IiwidGl0bGUiLCJib2R5IiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJkaXYiLCJhcnRpY2xlIiwiaDEiLCJwIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});