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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PostComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_2__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this);\n        },\n        code: function(param) {\n            var value = param.value;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"code-image-container\"]),\n                children: value.code\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.mainImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-container\"]),\n        children: [\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.Meta, {\n                title: post.title\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 53,\n                columnNumber: 16\n            }, _this),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            color: \"rgba(26, 28, 26, 0.9)\"\n                        },\n                        children: [\n                            \"Phil Elliott |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                format: \"MM/DD/YYYY\",\n                                children: post.publishedAt\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"main-img\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, imageProps), {\n                            alt: \"Featured Image\",\n                            layout: \"fill\"\n                        }), void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__.PortableText, {\n                            value: post.body,\n                            components: PostComponents\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); // code: (props) => (\n //   <SyntaxHighlighter\n //     language={props.node.language}\n //     style={coldarkDark}\n //     showLineNumbers\n //     lineNumberStyle={{\n //       padding: \"0 5px 0 0\",\n //       fontSize: 14,\n //       borderRight: \"1.5px solid darkgray\",\n //       marginRight: \"10px\",\n //     }}\n //   >\n //     {props.node.code}\n //   </SyntaxHighlighter>\n // ),\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUE2QztBQUVNO0FBQ1Q7QUFDWDtBQUMwQjtBQUNGO0FBQ0g7QUFDbEI7QUFDc0I7QUFDaUI7QUFFekUsSUFBTVUsY0FBYyxHQUFHO0lBQ3JCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLGdCQUFlO2dCQUFaQyxLQUFLLFNBQUxBLEtBQUs7WUFDYixxQkFDRSw4REFBQ0MsS0FBRztnQkFDRkMsU0FBUyxFQUFFUCxrRkFBb0I7Z0JBQy9CUSxHQUFHLEVBQUVILEtBQUssQ0FBQ0csR0FBRyxJQUFJLEdBQUc7Z0JBQ3JCQyxHQUFHLEVBQUVmLG1EQUFNLENBQUNXLEtBQUssQ0FBQzs7Ozs7cUJBQ2xCLENBQ0Y7U0FDSDtRQUNESyxJQUFJLEVBQUUsZ0JBQWU7Z0JBQVpMLEtBQUssU0FBTEEsS0FBSztZQUNaLHFCQUNFLDhEQUFDTSxLQUFHO2dCQUFDSixTQUFTLEVBQUVQLDRGQUE4QjswQkFlM0NLLEtBQUssQ0FBQ0ssSUFBSTs7Ozs7cUJBRVAsQ0FDTjtTQUNIO0tBQ0Y7Q0FDRjtBQUVELElBQU1FLElBQUksR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7O0lBQ2xCLElBQU1DLFVBQVUsR0FBR2pCLHFFQUFrQixDQUFDQyw2REFBUyxFQUFFLEVBQUVlLElBQUksQ0FBQ0UsU0FBUyxDQUFDO0lBQ2xFLHFCQUNFLDhEQUFDSixLQUFHO1FBQUNKLFNBQVMsRUFBRVAseUZBQTJCOztZQUN4Q2EsSUFBSSxrQkFBSSw4REFBQ3JCLGtEQUFJO2dCQUFDd0IsS0FBSyxFQUFFSCxJQUFJLENBQUNHLEtBQUs7Ozs7O3FCQUFJO1lBQ25DSCxJQUFJLGtCQUNILDhEQUFDSSxTQUFPOztrQ0FDTiw4REFBQ0MsSUFBRTtrQ0FBRUwsSUFBSSxDQUFDRyxLQUFLOzs7Ozs2QkFBTTtrQ0FDckIsOERBQUNHLElBQUU7d0JBQUNDLEtBQUssRUFBRTs0QkFBRUMsS0FBSyxFQUFFLHVCQUF1Qjt5QkFBRTs7NEJBQUUsZ0JBQy9COzRCQUFDLEdBQUc7MENBQ2xCLDhEQUFDdEIscURBQU07Z0NBQUN1QixNQUFNLEVBQUMsWUFBWTswQ0FBRVQsSUFBSSxDQUFDVSxXQUFXOzs7OztxQ0FBVTs7Ozs7OzZCQUNwRDtrQ0FDTCw4REFBQ1osS0FBRzt3QkFBQ0osU0FBUyxFQUFFUCxnRkFBa0I7a0NBQ2hDLDRFQUFDTCxtREFBSywwS0FBS21CLFVBQVU7NEJBQUVOLEdBQUcsRUFBQyxnQkFBZ0I7NEJBQUNnQixNQUFNLEVBQUMsTUFBTTs7Ozs7aUNBQUc7Ozs7OzZCQUN4RDtrQ0FDTiw4REFBQ2IsS0FBRzt3QkFBQ0osU0FBUyxFQUFFUCx1RkFBeUI7a0NBQ3ZDLDRFQUFDUCw4REFBWTs0QkFBQ1ksS0FBSyxFQUFFUSxJQUFJLENBQUNZLElBQUk7NEJBQUVDLFVBQVUsRUFBRXhCLGNBQWM7Ozs7O2lDQUFJOzs7Ozs2QkFDMUQ7Ozs7OztxQkFDRTs7Ozs7O2FBRVIsQ0FDTjtDQUNIO0dBdEJLVSxJQUFJOztRQUNXZixpRUFBa0I7OztBQURqQ2UsS0FBQUEsSUFBSTs7QUF1RFYsK0RBQWVBLElBQUksRUFBQyxDQUVwQixxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLHFDQUFxQztDQUNyQywwQkFBMEI7Q0FDMUIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6Qiw4QkFBOEI7Q0FDOUIsc0JBQXNCO0NBQ3RCLDZDQUE2QztDQUM3Qyw2QkFBNkI7Q0FDN0IsU0FBUztDQUNULE1BQU07Q0FDTix3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFN5bnRheEhpZ2hsaWdodGVyIGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gXCJuZXh0LXNhbml0eS1pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IG5pZ2h0T3dsIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvaGxqc1wiO1xuXG5jb25zdCBQb3N0Q29tcG9uZW50cyA9IHtcbiAgdHlwZXM6IHtcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC1pbWFnZVwiXX1cbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gICAgY29kZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvZGUtaW1hZ2UtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICB7LyogPFN5bnRheEhpZ2hsaWdodGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImNvZGUtaW1hZ2VcIl19XG4gICAgICAgICAgICBsYW5ndWFnZT17dmFsdWUubGFuZ3VhZ2V9XG4gICAgICAgICAgICBzdHlsZT17bmlnaHRPd2x9XG4gICAgICAgICAgICBzaG93TGluZU51bWJlcnNcbiAgICAgICAgICAgIGNvZGVUYWdQcm9wcz17eyBzdHlsZTogeyBmb250U2l6ZTogXCJpbmhlcml0XCIgfSB9fVxuICAgICAgICAgICAgLy8gY3VzdG9tU3R5bGU9e3sgZm9udFNpemU6IDE4IH19XG4gICAgICAgICAgICBsaW5lTnVtYmVyU3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDVweCAwIDBcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICBib3JkZXJSaWdodDogXCIxLjVweCBzb2xpZCBkYXJrZ3JheVwiLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID4gKi99XG4gICAgICAgICAge3ZhbHVlLmNvZGV9XG4gICAgICAgICAgey8qIDwvU3ludGF4SGlnaGxpZ2h0ZXI+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgaW1hZ2VQcm9wcyA9IHVzZU5leHRTYW5pdHlJbWFnZShnZXRDbGllbnQoKSwgcG9zdC5tYWluSW1hZ2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICB7cG9zdCAmJiA8TWV0YSB0aXRsZT17cG9zdC50aXRsZX0gLz59XG4gICAgICB7cG9zdCAmJiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDI2LCAyOCwgMjYsIDAuOSlcIiB9fT5cbiAgICAgICAgICAgIFBoaWwgRWxsaW90dCB8e1wiIFwifVxuICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTS9ERC9ZWVlZXCI+e3Bvc3QucHVibGlzaGVkQXR9PC9Nb21lbnQ+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWFpbi1pbWdcIl19PlxuICAgICAgICAgICAgPEltYWdlIHsuLi5pbWFnZVByb3BzfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRlbnRcIl19PlxuICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17cG9zdC5ib2R5fSBjb21wb25lbnRzPXtQb3N0Q29tcG9uZW50c30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuICAgICAgdGl0bGUsXG4gICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+YXZhdGFyLFxuICAgICAgYm9keSxcbiAgICAgIG1haW5JbWFnZSwgXG4gICAgICBwdWJsaXNoZWRBdCwgXG4gICAgICBjYXRlZ29yaWVzXG59YDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChxdWVyeSwgeyBzbHVnOiBwYXJhbXMuc2x1ZyB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8vIGNvZGU6IChwcm9wcykgPT4gKFxuLy8gICA8U3ludGF4SGlnaGxpZ2h0ZXJcbi8vICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cbi8vICAgICBzdHlsZT17Y29sZGFya0Rhcmt9XG4vLyAgICAgc2hvd0xpbmVOdW1iZXJzXG4vLyAgICAgbGluZU51bWJlclN0eWxlPXt7XG4vLyAgICAgICBwYWRkaW5nOiBcIjAgNXB4IDAgMFwiLFxuLy8gICAgICAgZm9udFNpemU6IDE0LFxuLy8gICAgICAgYm9yZGVyUmlnaHQ6IFwiMS41cHggc29saWQgZGFya2dyYXlcIixcbi8vICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwcHhcIixcbi8vICAgICB9fVxuLy8gICA+XG4vLyAgICAge3Byb3BzLm5vZGUuY29kZX1cbi8vICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbi8vICksXG4iXSwibmFtZXMiOlsiTWV0YSIsIlBvcnRhYmxlVGV4dCIsInVybEZvciIsIkltYWdlIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJ1c2VOZXh0U2FuaXR5SW1hZ2UiLCJnZXRDbGllbnQiLCJNb21lbnQiLCJzdHlsZXMiLCJuaWdodE93bCIsIlBvc3RDb21wb25lbnRzIiwidHlwZXMiLCJpbWFnZSIsInZhbHVlIiwiaW1nIiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiY29kZSIsImRpdiIsIlBvc3QiLCJwb3N0IiwiaW1hZ2VQcm9wcyIsIm1haW5JbWFnZSIsInRpdGxlIiwiYXJ0aWNsZSIsImgxIiwiaDMiLCJzdHlsZSIsImNvbG9yIiwiZm9ybWF0IiwicHVibGlzaGVkQXQiLCJsYXlvdXQiLCJib2R5IiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});