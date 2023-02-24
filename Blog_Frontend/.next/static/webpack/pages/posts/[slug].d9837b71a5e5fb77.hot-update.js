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

/***/ "./components/Article/Content.js":
/*!***************************************!*\
  !*** ./components/Article/Content.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComponents */ \"./components/Article/PostComponents.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../styles/Pages/Article/Content.module.scss */ \"./styles/Pages/Article/Content.module.scss\");\n/* harmony import */ var _styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Content = (param)=>{\n    let { post  } = param;\n    _s();\n    const imageProps = post && (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.mainImage);\n    const authorImageProps = post && (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), post.authorImage);\n    const description = post && post.body[0].children[0].text;\n    const newDate = moment__WEBPACK_IMPORTED_MODULE_7___default()(post.publishedAt).format(\"MM/DD/YYYY\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"article-container\"]),\n        children: [\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_6__.Meta, {\n                title: post.title,\n                description: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                lineNumber: 21,\n                columnNumber: 16\n            }, undefined),\n            post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"article-author-container\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"article-author-image-container\"]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    ...authorImageProps,\n                                    alt: \"Author Image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    color: \"rgba(26, 28, 26, 0.9)\"\n                                },\n                                children: [\n                                    \"Phil Elliott |\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"main-img\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            ...imageProps,\n                            alt: \"Main Article Image\",\n                            height: 0,\n                            width: 0,\n                            fill: true,\n                            sizes: \"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pages_Article_Content_module_scss__WEBPACK_IMPORTED_MODULE_8___default()[\"article-content\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_9__.PortableText, {\n                            value: post.body,\n                            components: _PostComponents__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\phill\\\\OneDrive\\\\Desktop\\\\Programming\\\\Portfolio-Projects\\\\Phillip_Elliott_Blog-main\\\\Blog_Frontend\\\\components\\\\Article\\\\Content.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Content, \"XW4ZIVTp5NdyiVJet+ejulXGA4c=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage,\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGUvQ29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ29CO0FBQ2Y7QUFDd0I7QUFDSDtBQUNQO0FBQ2pCO0FBQ3VCO0FBQ21CO0FBRS9ELE1BQU1TLFVBQVUsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDOUIsTUFBTUMsYUFBYUQsUUFBUVAscUVBQWtCQSxDQUFDQyw2REFBU0EsSUFBSU0sS0FBS0UsU0FBUztJQUN6RSxNQUFNQyxtQkFDSkgsUUFBUVAscUVBQWtCQSxDQUFDQyw2REFBU0EsSUFBSU0sS0FBS0ksV0FBVztJQUMxRCxNQUFNQyxjQUFjTCxRQUFRQSxLQUFLTSxJQUFJLENBQUMsRUFBRSxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxJQUFJO0lBRXpELE1BQU1DLFVBQVViLDZDQUFNQSxDQUFDSSxLQUFLVSxXQUFXLEVBQUVDLE1BQU0sQ0FBQztJQUVoRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV2YsdUdBQTJCOztZQUN4Q0Usc0JBQVEsOERBQUNMLGtEQUFJQTtnQkFBQ21CLE9BQU9kLEtBQUtjLEtBQUs7Z0JBQUVULGFBQWFBOzs7Ozs7WUFDOUNMLHNCQUNDLDhEQUFDZTs7a0NBQ0MsOERBQUNDO2tDQUFJaEIsS0FBS2MsS0FBSzs7Ozs7O2tDQUNmLDhEQUFDRjt3QkFBSUMsV0FBV2YsOEdBQWtDOzswQ0FDaEQsOERBQUNjO2dDQUFJQyxXQUFXZixvSEFBd0M7MENBQ3RELDRFQUFDTixtREFBS0E7b0NBQUUsR0FBR1csZ0JBQWdCO29DQUFFYyxLQUFJOzs7Ozs7Ozs7OzswQ0FFbkMsOERBQUNDO2dDQUFHQyxPQUFPO29DQUFFQyxPQUFPO2dDQUF3Qjs7b0NBQUc7b0NBQzlCOzs7Ozs7Ozs7Ozs7O2tDQUluQiw4REFBQ1I7d0JBQUlDLFdBQVdmLDhGQUFrQjtrQ0FDaEMsNEVBQUNOLG1EQUFLQTs0QkFDSCxHQUFHUyxVQUFVOzRCQUNkZ0IsS0FBSTs0QkFDSkksUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEMsSUFBSTs0QkFDSkMsT0FBTTs7Ozs7Ozs7Ozs7a0NBS1YsOERBQUNaO3dCQUFJQyxXQUFXZixxR0FBeUI7a0NBQ3ZDLDRFQUFDRCw2REFBWUE7NEJBQUM0QixPQUFPekIsS0FBS00sSUFBSTs0QkFBRW9CLFlBQVluQyx1REFBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRFLEVBQUU7R0ExQ1dROztRQUNnQk4saUVBQWtCQTtRQUVuQ0EsaUVBQWtCQTs7O0tBSGpCTTtBQTRDYiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGUvQ29udGVudC5qcz8wNjIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3N0Q29tcG9uZW50cyBmcm9tIFwiLi9Qb3N0Q29tcG9uZW50c1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VOZXh0U2FuaXR5SW1hZ2UgfSBmcm9tIFwibmV4dC1zYW5pdHktaW1hZ2VcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IHsgTWV0YSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01ldGFcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL1BhZ2VzL0FydGljbGUvQ29udGVudC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBpbWFnZVByb3BzID0gcG9zdCAmJiB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIHBvc3QubWFpbkltYWdlKTtcbiAgY29uc3QgYXV0aG9ySW1hZ2VQcm9wcyA9XG4gICAgcG9zdCAmJiB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIHBvc3QuYXV0aG9ySW1hZ2UpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHBvc3QgJiYgcG9zdC5ib2R5WzBdLmNoaWxkcmVuWzBdLnRleHQ7XG5cbiAgY29uc3QgbmV3RGF0ZSA9IG1vbWVudChwb3N0LnB1Ymxpc2hlZEF0KS5mb3JtYXQoXCJNTS9ERC9ZWVlZXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGUtY29udGFpbmVyXCJdfT5cbiAgICAgIHtwb3N0ICYmIDxNZXRhIHRpdGxlPXtwb3N0LnRpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+fVxuICAgICAge3Bvc3QgJiYgKFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJ0aWNsZS1hdXRob3ItY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWF1dGhvci1pbWFnZS1jb250YWluZXJcIl19PlxuICAgICAgICAgICAgICA8SW1hZ2Ugey4uLmF1dGhvckltYWdlUHJvcHN9IGFsdD1cIkF1dGhvciBJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDI2LCAyOCwgMjYsIDAuOSlcIiB9fT5cbiAgICAgICAgICAgICAgUGhpbCBFbGxpb3R0IHx7XCIgXCJ9XG4gICAgICAgICAgICAgIHsvKiA8TW9tZW50IGZvcm1hdD1cIk1NL0REL1lZWVlcIj57cG9zdC5wdWJsaXNoZWRBdH08L01vbWVudD4gKi99XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYWluLWltZ1wiXX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgey4uLmltYWdlUHJvcHN9XG4gICAgICAgICAgICAgIGFsdD1cIk1haW4gQXJ0aWNsZSBJbWFnZVwiXG4gICAgICAgICAgICAgIGhlaWdodD17MH1cbiAgICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgc2l6ZXM9XCIobWF4LXdpZHRoOiA3NjhweCkgMTAwdncsXG4gICAgICAgICAgICAgIChtYXgtd2lkdGg6IDEyMDBweCkgNTB2dyxcbiAgICAgICAgICAgICAgMzN2d1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRlbnRcIl19PlxuICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17cG9zdC5ib2R5fSBjb21wb25lbnRzPXtQb3N0Q29tcG9uZW50c30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0Q29tcG9uZW50cyIsIkltYWdlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiZ2V0Q2xpZW50IiwiTWV0YSIsIm1vbWVudCIsIlBvcnRhYmxlVGV4dCIsInN0eWxlcyIsIkNvbnRlbnQiLCJwb3N0IiwiaW1hZ2VQcm9wcyIsIm1haW5JbWFnZSIsImF1dGhvckltYWdlUHJvcHMiLCJhdXRob3JJbWFnZSIsImRlc2NyaXB0aW9uIiwiYm9keSIsImNoaWxkcmVuIiwidGV4dCIsIm5ld0RhdGUiLCJwdWJsaXNoZWRBdCIsImZvcm1hdCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiYXJ0aWNsZSIsImgxIiwiYWx0IiwiaDMiLCJzdHlsZSIsImNvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxsIiwic2l6ZXMiLCJ2YWx1ZSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Article/Content.js\n"));

/***/ })

});