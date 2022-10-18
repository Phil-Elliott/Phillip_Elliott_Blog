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

/***/ "./components/Home/Popular/Article-Container/Article-Container.js":
/*!************************************************************************!*\
  !*** ./components/Home/Popular/Article-Container/Article-Container.js ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../styles/Home/Popular/ArticleContainer.module.scss */ \"./styles/Home/Popular/ArticleContainer.module.scss\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ArticleContainer = function(param) {\n    var title = param.title, description = param.description, image = param.image, index = param.index, noBorder = param.noBorder, slug = param.slug, author = param.author, authorImage = param.authorImage, publishedAt = param.publishedAt;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), image);\n    var authorImageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), authorImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/posts/[slug]\",\n        as: \"/posts/\".concat(slug.current),\n        className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().link),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"home-popular-article-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: index % 2 !== 0 ? {\n                        order: \"1\"\n                    } : {\n                        order: \"0\"\n                    },\n                    className: noBorder && index === 0 ? \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"home-popular-article-container-left\"]), \" \").concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"no-top-border\"])) : \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"home-popular-article-container-left\"])),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_9__.PortableText, {\n                            value: description[0]\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"author-container\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"author-image-container\"]),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, authorImageProps), {\n                                        alt: author,\n                                        className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"author-image\"])\n                                    }), void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    style: {\n                                        color: \"rgba(26, 28, 26, 0.9)\"\n                                    },\n                                    children: [\n                                        \"Phil Elliott | \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            format: \"MM/DD/YYYY\",\n                                            children: publishedAt\n                                        }, void 0, false, {\n                                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 30\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"home-popular-article-container-right\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, imageProps), {\n                        alt: \"Featured Image\",\n                        layout: \"fill\"\n                    }), void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticleContainer, \"wztXRoFBL70GbzRRBc9Ed9yk74A=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage,\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = ArticleContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleContainer);\nvar _c;\n$RefreshReg$(_c, \"ArticleContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTBCO0FBQ0c7QUFDRTtBQUN3QjtBQUNHO0FBQ1Y7QUFDRztBQUNpQztBQUNsRDtBQUVsQyxJQUFNUyxnQkFBZ0IsR0FBRyxnQkFVbkI7UUFUSkMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsTUFBTSxTQUFOQSxNQUFNLEVBQ05DLFdBQVcsU0FBWEEsV0FBVyxFQUNYQyxXQUFXLFNBQVhBLFdBQVc7O0lBRVgsSUFBTUMsVUFBVSxHQUFHaEIscUVBQWtCLENBQUNDLDZEQUFTLEVBQUUsRUFBRVEsS0FBSyxDQUFDO0lBQ3pELElBQU1RLGdCQUFnQixHQUFHakIscUVBQWtCLENBQUNDLDZEQUFTLEVBQUUsRUFBRWEsV0FBVyxDQUFDO0lBQ3JFLHFCQUNFLDhEQUFDaEIsa0RBQUk7UUFDSG9CLElBQUksRUFBQyxlQUFlO1FBQ3BCQyxFQUFFLEVBQUUsU0FBUSxDQUFlLE9BQWJQLElBQUksQ0FBQ1EsT0FBTyxDQUFFO1FBQzVCQyxTQUFTLEVBQUVqQiwrRkFBVztrQkFFdEIsNEVBQUNtQixLQUFHO1lBQUNGLFNBQVMsRUFBRWpCLDRIQUF3Qzs7OEJBQ3RELDhEQUFDbUIsS0FBRztvQkFDRkMsS0FBSyxFQUFFZCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRzt3QkFBRWUsS0FBSyxFQUFFLEdBQUc7cUJBQUUsR0FBRzt3QkFBRUEsS0FBSyxFQUFFLEdBQUc7cUJBQUU7b0JBQ3hESixTQUFTLEVBQ1BWLFFBQVEsSUFBSUQsS0FBSyxLQUFLLENBQUMsR0FDbkIsRUFBQyxDQUFtRE4sTUFBdUIsQ0FBeEVBLGlJQUE2QyxFQUFDLEdBQUMsQ0FBMEIsUUFBeEJBLDJHQUF1QixDQUFFLEdBQzdFLEVBQUMsQ0FBZ0QsT0FBOUNBLGlJQUE2QyxDQUFFOztzQ0FHeEQsOERBQUNzQixJQUFFO3NDQUFFbkIsS0FBSzs7Ozs7aUNBQU07c0NBQ2hCLDhEQUFDSiw2REFBWTs0QkFBQ3dCLEtBQUssRUFBRW5CLFdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7O2lDQUFJO3NDQUN2Qyw4REFBQ2UsS0FBRzs0QkFBQ0YsU0FBUyxFQUFFakIsOEdBQTBCOzs4Q0FDeEMsOERBQUNtQixLQUFHO29DQUFDRixTQUFTLEVBQUVqQixvSEFBZ0M7OENBQzlDLDRFQUFDTCxtREFBSyw0S0FDQWtCLGdCQUFnQjt3Q0FDcEJXLEdBQUcsRUFBRWYsTUFBTTt3Q0FDWFEsU0FBUyxFQUFFakIsMEdBQXNCOzs7Ozs2Q0FDakM7Ozs7O3lDQUNFOzhDQUNOLDhEQUFDeUIsSUFBRTtvQ0FBQ0wsS0FBSyxFQUFFO3dDQUFFTSxLQUFLLEVBQUUsdUJBQXVCO3FDQUFFOzt3Q0FBRSxpQkFDOUI7c0RBQUEsOERBQUN6QixxREFBTTs0Q0FBQzBCLE1BQU0sRUFBQyxZQUFZO3NEQUFFaEIsV0FBVzs7Ozs7aURBQVU7Ozs7Ozt5Q0FDOUQ7Ozs7OztpQ0FDRDs7Ozs7O3lCQUNGOzhCQUNOLDhEQUFDUSxLQUFHO29CQUFDRixTQUFTLEVBQUVqQixrSUFBOEM7OEJBQzVELDRFQUFDTCxtREFBSyw0S0FBS2lCLFVBQVU7d0JBQUVZLEdBQUcsRUFBQyxnQkFBZ0I7d0JBQUNJLE1BQU0sRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQ3hEOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0QsQ0FDUDtDQUNIO0dBakRLMUIsZ0JBQWdCOztRQVdETixpRUFBa0I7UUFDWkEsaUVBQWtCOzs7QUFadkNNLEtBQUFBLGdCQUFnQjtBQW1EdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9Qb3B1bGFyL0FydGljbGUtQ29udGFpbmVyL0FydGljbGUtQ29udGFpbmVyLmpzP2U0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VOZXh0U2FuaXR5SW1hZ2UgfSBmcm9tIFwibmV4dC1zYW5pdHktaW1hZ2VcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLy4uLy4uLy4uLy4uL3N0eWxlcy9Ib21lL1BvcHVsYXIvQXJ0aWNsZUNvbnRhaW5lci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XG5cbmNvbnN0IEFydGljbGVDb250YWluZXIgPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGltYWdlLFxuICBpbmRleCxcbiAgbm9Cb3JkZXIsXG4gIHNsdWcsXG4gIGF1dGhvcixcbiAgYXV0aG9ySW1hZ2UsXG4gIHB1Ymxpc2hlZEF0LFxufSkgPT4ge1xuICBjb25zdCBpbWFnZVByb3BzID0gdXNlTmV4dFNhbml0eUltYWdlKGdldENsaWVudCgpLCBpbWFnZSk7XG4gIGNvbnN0IGF1dGhvckltYWdlUHJvcHMgPSB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIGF1dGhvckltYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj1cIi9wb3N0cy9bc2x1Z11cIlxuICAgICAgYXM9e2AvcG9zdHMvJHtzbHVnLmN1cnJlbnR9YH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17aW5kZXggJSAyICE9PSAwID8geyBvcmRlcjogXCIxXCIgfSA6IHsgb3JkZXI6IFwiMFwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIG5vQm9yZGVyICYmIGluZGV4ID09PSAwXG4gICAgICAgICAgICAgID8gYCR7c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyLWxlZnRcIl19ICR7c3R5bGVzW1wibm8tdG9wLWJvcmRlclwiXX1gXG4gICAgICAgICAgICAgIDogYCR7c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyLWxlZnRcIl19YFxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtkZXNjcmlwdGlvblswXX0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aG9yLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aG9yLWltYWdlLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHsuLi5hdXRob3JJbWFnZVByb3BzfVxuICAgICAgICAgICAgICAgIGFsdD17YXV0aG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYXV0aG9yLWltYWdlXCJdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgyNiwgMjgsIDI2LCAwLjkpXCIgfX0+XG4gICAgICAgICAgICAgIFBoaWwgRWxsaW90dCB8IDxNb21lbnQgZm9ybWF0PVwiTU0vREQvWVlZWVwiPntwdWJsaXNoZWRBdH08L01vbWVudD5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyLXJpZ2h0XCJdfT5cbiAgICAgICAgICA8SW1hZ2Ugey4uLmltYWdlUHJvcHN9IGFsdD1cIkZlYXR1cmVkIEltYWdlXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNvbnRhaW5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsInVzZU5leHRTYW5pdHlJbWFnZSIsImdldENsaWVudCIsInVybEZvciIsIlBvcnRhYmxlVGV4dCIsInN0eWxlcyIsIk1vbWVudCIsIkFydGljbGVDb250YWluZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJpbmRleCIsIm5vQm9yZGVyIiwic2x1ZyIsImF1dGhvciIsImF1dGhvckltYWdlIiwicHVibGlzaGVkQXQiLCJpbWFnZVByb3BzIiwiYXV0aG9ySW1hZ2VQcm9wcyIsImhyZWYiLCJhcyIsImN1cnJlbnQiLCJjbGFzc05hbWUiLCJsaW5rIiwiZGl2Iiwic3R5bGUiLCJvcmRlciIsImgxIiwidmFsdWUiLCJhbHQiLCJoMyIsImNvbG9yIiwiZm9ybWF0IiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home/Popular/Article-Container/Article-Container.js\n"));

/***/ })

});