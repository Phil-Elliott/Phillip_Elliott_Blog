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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this);\n        },\n        code: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"code-image-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"code-image\"]),\n                    wrapLines: true,\n                    wrapLongLines: true,\n                    language: value.language,\n                    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_9__.atomOneDark,\n                    // showInlineLineNumbers={true}\n                    // showLineNumbers\n                    lineProps: {\n                        style: {\n                        }\n                    },\n                    // codeTagProps={{ style: { fontSize: \"inherit\" } }}\n                    // customStyle={{ fontSize: 18 }}\n                    lineNumberStyle: {\n                        padding: \"0 5px 0 0\",\n                        // fontSize: 14,\n                        borderRight: \"1.5px solid darkgray\",\n                        marginRight: \"10px\"\n                    },\n                    children: value.code\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    _s();\n    console.log(post);\n    var imageProps = post && (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.mainImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-container\"]),\n        children: [\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Meta, {\n                title: post.title\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 63,\n                columnNumber: 16\n            }, _this),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            color: \"rgba(26, 28, 26, 0.9)\"\n                        },\n                        children: [\n                            \"Phil Elliott |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                format: \"MM/DD/YYYY\",\n                                children: post.publishedAt\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"main-img\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, imageProps), {\n                            alt: \"Featured Image\",\n                            layout: \"fill\"\n                        }), void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_12__.PortableText, {\n                            value: post.body,\n                            components: PostComponents\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"zhJAGl9+PHspTMcyiaNQqXf+1OA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkttQixJQUFJOztRQUVtQnhCLGlFQUFrQjs7O0FBRnpDd0IsS0FBQUEsSUFBSTs7QUF5RFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xuaW1wb3J0IHsgdXNlTmV4dFNhbml0eUltYWdlIH0gZnJvbSBcIm5leHQtc2FuaXR5LWltYWdlXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgYXRvbU9uZURhcmsgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9obGpzXCI7XG5cbmNvbnN0IFBvc3RDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LWltYWdlXCJdfVxuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgICBjb2RlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29kZS1pbWFnZS1jb250YWluZXJcIl19PlxuICAgICAgICAgIDxTeW50YXhIaWdobGlnaHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb2RlLWltYWdlXCJdfVxuICAgICAgICAgICAgd3JhcExpbmVzPXt0cnVlfVxuICAgICAgICAgICAgd3JhcExvbmdMaW5lcz17dHJ1ZX1cbiAgICAgICAgICAgIGxhbmd1YWdlPXt2YWx1ZS5sYW5ndWFnZX1cbiAgICAgICAgICAgIHN0eWxlPXthdG9tT25lRGFya31cbiAgICAgICAgICAgIC8vIHNob3dJbmxpbmVMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAgICAgICAgIC8vIHNob3dMaW5lTnVtYmVyc1xuICAgICAgICAgICAgbGluZVByb3BzPXt7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLy8gd29yZEJyZWFrOiBcImJyZWFrLWFsbFwiLFxuICAgICAgICAgICAgICAgIC8vIHdoaXRlU3BhY2U6IFwicHJlLXdyYXBcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvLyBjb2RlVGFnUHJvcHM9e3sgc3R5bGU6IHsgZm9udFNpemU6IFwiaW5oZXJpdFwiIH0gfX1cbiAgICAgICAgICAgIC8vIGN1c3RvbVN0eWxlPXt7IGZvbnRTaXplOiAxOCB9fVxuICAgICAgICAgICAgbGluZU51bWJlclN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA1cHggMCAwXCIsXG4gICAgICAgICAgICAgIC8vIGZvbnRTaXplOiAxNCxcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMS41cHggc29saWQgZGFya2dyYXlcIixcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWUuY29kZX1cbiAgICAgICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc29sZS5sb2cocG9zdCk7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSBwb3N0ICYmIHVzZU5leHRTYW5pdHlJbWFnZShnZXRDbGllbnQoKSwgcG9zdC5tYWluSW1hZ2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICB7cG9zdCAmJiA8TWV0YSB0aXRsZT17cG9zdC50aXRsZX0gLz59XG4gICAgICB7cG9zdCAmJiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDI2LCAyOCwgMjYsIDAuOSlcIiB9fT5cbiAgICAgICAgICAgIFBoaWwgRWxsaW90dCB8e1wiIFwifVxuICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTS9ERC9ZWVlZXCI+e3Bvc3QucHVibGlzaGVkQXR9PC9Nb21lbnQ+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1pbWdcIl19PlxuICAgICAgICAgICAgPEltYWdlIHsuLi5pbWFnZVByb3BzfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRlbnRcIl19PlxuICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17cG9zdC5ib2R5fSBjb21wb25lbnRzPXtQb3N0Q29tcG9uZW50c30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuICAgICAgdGl0bGUsXG4gICAgICAvLyBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICAvLyBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+YXZhdGFyLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHB1Ymxpc2hlZEF0LCBcbiAgICAgIGNhdGVnb3JpZXNcbn1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zLCBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHF1ZXJ5LCB7IHNsdWc6IHBhcmFtcy5zbHVnIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJNZXRhIiwiUG9ydGFibGVUZXh0IiwidXJsRm9yIiwiSW1hZ2UiLCJTeW50YXhIaWdobGlnaHRlciIsInVzZU5leHRTYW5pdHlJbWFnZSIsImdldENsaWVudCIsIk1vbWVudCIsInN0eWxlcyIsImF0b21PbmVEYXJrIiwiUG9zdENvbXBvbmVudHMiLCJ0eXBlcyIsImltYWdlIiwidmFsdWUiLCJpbWciLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJjb2RlIiwiZGl2Iiwid3JhcExpbmVzIiwid3JhcExvbmdMaW5lcyIsImxhbmd1YWdlIiwic3R5bGUiLCJsaW5lUHJvcHMiLCJsaW5lTnVtYmVyU3R5bGUiLCJwYWRkaW5nIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW5SaWdodCIsIlBvc3QiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImltYWdlUHJvcHMiLCJtYWluSW1hZ2UiLCJ0aXRsZSIsImFydGljbGUiLCJoMSIsImgzIiwiY29sb3IiLCJmb3JtYXQiLCJwdWJsaXNoZWRBdCIsImxheW91dCIsImJvZHkiLCJjb21wb25lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});