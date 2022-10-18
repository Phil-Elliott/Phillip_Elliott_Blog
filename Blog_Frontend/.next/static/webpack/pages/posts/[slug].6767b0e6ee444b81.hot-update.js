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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this);\n        },\n        code: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"code-image-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"code-image\"]),\n                    wrapLines: true,\n                    wrapLongLines: true,\n                    language: value.language,\n                    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_9__.atomOneDark,\n                    // showInlineLineNumbers={true}\n                    // showLineNumbers\n                    lineProps: {\n                        style: {\n                        }\n                    },\n                    // codeTagProps={{ style: { fontSize: \"inherit\" } }}\n                    // customStyle={{ fontSize: 18 }}\n                    lineNumberStyle: {\n                        padding: \"0 5px 0 0\",\n                        // fontSize: 14,\n                        borderRight: \"1.5px solid darkgray\",\n                        marginRight: \"10px\"\n                    },\n                    children: value.code\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    _s();\n    var imageProps = post && (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.mainImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-container\"]),\n        children: [\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Meta, {\n                title: post.title\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 62,\n                columnNumber: 16\n            }, _this),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            color: \"rgba(26, 28, 26, 0.9)\"\n                        },\n                        children: [\n                            \"Phil Elliott |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                format: \"MM/DD/YYYY\",\n                                children: post.publishedAt\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"main-img\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, imageProps), {\n                            alt: \"Featured Image\",\n                            layout: \"fill\"\n                        }), void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_12__.PortableText, {\n                            value: post.body,\n                            components: PostComponents\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"zhJAGl9+PHspTMcyiaNQqXf+1OA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQXdEViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGEgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZXRhXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyB1c2VOZXh0U2FuaXR5SW1hZ2UgfSBmcm9tIFwibmV4dC1zYW5pdHktaW1hZ2VcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uL3N0eWxlcy9BcnRpY2xlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBhdG9tT25lRGFyayB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanNcIjtcblxuY29uc3QgUG9zdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtaW1hZ2VcIl19XG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICAgIGNvZGU6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb2RlLWltYWdlLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImNvZGUtaW1hZ2VcIl19XG4gICAgICAgICAgICB3cmFwTGluZXM9e3RydWV9XG4gICAgICAgICAgICB3cmFwTG9uZ0xpbmVzPXt0cnVlfVxuICAgICAgICAgICAgbGFuZ3VhZ2U9e3ZhbHVlLmxhbmd1YWdlfVxuICAgICAgICAgICAgc3R5bGU9e2F0b21PbmVEYXJrfVxuICAgICAgICAgICAgLy8gc2hvd0lubGluZUxpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgICAgICAgLy8gc2hvd0xpbmVOdW1iZXJzXG4gICAgICAgICAgICBsaW5lUHJvcHM9e3tcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAvLyB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIsXG4gICAgICAgICAgICAgICAgLy8gd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8vIGNvZGVUYWdQcm9wcz17eyBzdHlsZTogeyBmb250U2l6ZTogXCJpbmhlcml0XCIgfSB9fVxuICAgICAgICAgICAgLy8gY3VzdG9tU3R5bGU9e3sgZm9udFNpemU6IDE4IH19XG4gICAgICAgICAgICBsaW5lTnVtYmVyU3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDVweCAwIDBcIixcbiAgICAgICAgICAgICAgLy8gZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxLjVweCBzb2xpZCBkYXJrZ3JheVwiLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZS5jb2RlfVxuICAgICAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBpbWFnZVByb3BzID0gcG9zdCAmJiB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIHBvc3QubWFpbkltYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250YWluZXJcIl19PlxuICAgICAge3Bvc3QgJiYgPE1ldGEgdGl0bGU9e3Bvc3QudGl0bGV9IC8+fVxuICAgICAge3Bvc3QgJiYgKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgyNiwgMjgsIDI2LCAwLjkpXCIgfX0+XG4gICAgICAgICAgICBQaGlsIEVsbGlvdHQgfHtcIiBcIn1cbiAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU0vREQvWVlZWVwiPntwb3N0LnB1Ymxpc2hlZEF0fTwvTW9tZW50PlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4taW1nXCJdfT5cbiAgICAgICAgICAgIDxJbWFnZSB7Li4uaW1hZ2VQcm9wc30gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1jb250ZW50XCJdfT5cbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e3Bvc3QuYm9keX0gY29tcG9uZW50cz17UG9zdENvbXBvbmVudHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBdIHtcbiAgICAgIHRpdGxlLFxuICAgICAgLy8gXCJ1c2VybmFtZVwiOiBhdXRob3ItPnVzZXJuYW1lLFxuICAgICAgLy8gXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmF2YXRhcixcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgYm9keSxcbiAgICAgIG1haW5JbWFnZSwgXG4gICAgICBwdWJsaXNoZWRBdCwgXG4gICAgICBjYXRlZ29yaWVzXG59YDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChxdWVyeSwgeyBzbHVnOiBwYXJhbXMuc2x1ZyB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiTWV0YSIsIlBvcnRhYmxlVGV4dCIsInVybEZvciIsIkltYWdlIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJ1c2VOZXh0U2FuaXR5SW1hZ2UiLCJnZXRDbGllbnQiLCJNb21lbnQiLCJzdHlsZXMiLCJhdG9tT25lRGFyayIsIlBvc3RDb21wb25lbnRzIiwidHlwZXMiLCJpbWFnZSIsInZhbHVlIiwiaW1nIiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiY29kZSIsImRpdiIsIndyYXBMaW5lcyIsIndyYXBMb25nTGluZXMiLCJsYW5ndWFnZSIsInN0eWxlIiwibGluZVByb3BzIiwibGluZU51bWJlclN0eWxlIiwicGFkZGluZyIsImJvcmRlclJpZ2h0IiwibWFyZ2luUmlnaHQiLCJQb3N0IiwicG9zdCIsImltYWdlUHJvcHMiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsImFydGljbGUiLCJoMSIsImgzIiwiY29sb3IiLCJmb3JtYXQiLCJwdWJsaXNoZWRBdCIsImxheW91dCIsImJvZHkiLCJjb21wb25lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});