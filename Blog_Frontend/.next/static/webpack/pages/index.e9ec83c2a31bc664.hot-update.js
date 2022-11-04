"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Featured/Featured.js":
/*!**********************************************!*\
  !*** ./components/Home/Featured/Featured.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../styles/Pages/Home/Featured/Featured.module.scss */ \"./styles/Pages/Home/Featured/Featured.module.scss\");\n/* harmony import */ var _styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Featured = (post)=>{\n    _s();\n    const imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_3__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__.getClient)(), post.post.mainImage);\n    const description = post.post.body[0].children[0].text;\n    const shortDescription = description.length > 205 ? description.slice(0, 205) + \"...\" : description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-featured-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"\".concat((_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-section-header\"]), \" \").concat((_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"featured-header\"])),\n                children: \"Featured\"\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/posts/[slug]\",\n                as: \"/posts/\".concat(post.post.slug.current),\n                className: (_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-featured-article-container\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-featured-left-container\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: post.post.title\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: shortDescription\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        name: \"Read Article Button\",\n                                        children: \"Read Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Pages_Home_Featured_Featured_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"home-featured-right-container\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                ...imageProps,\n                                alt: \"Featured Image\",\n                                height: 100\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, post.post.id, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Featured/Featured.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Featured, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_3__.useNextSanityImage\n    ];\n});\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWQvRmVhdHVyZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDdEI7QUFDRTtBQUN3QjtBQUNBO0FBQ3lCO0FBRWhGLE1BQU1NLFdBQVcsQ0FBQ0MsT0FBUzs7SUFDekIsTUFBTUMsYUFBYUwscUVBQWtCQSxDQUFDQyw2REFBU0EsSUFBSUcsS0FBS0EsSUFBSSxDQUFDRSxTQUFTO0lBQ3RFLE1BQU1DLGNBQWNILEtBQUtBLElBQUksQ0FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtJQUN0RCxNQUFNQyxtQkFDSkosWUFBWUssTUFBTSxHQUFHLE1BQU1MLFlBQVlNLEtBQUssQ0FBQyxHQUFHLE9BQU8sUUFBUU4sV0FBVztJQUU1RSxxQkFDRSw4REFBQ087UUFBUUMsV0FBV2Isb0hBQWlDOzswQkFDbkQsOERBQUNjO2dCQUNDRCxXQUFXLEdBQW9DYixPQUFqQ0EsZ0hBQTZCLEVBQUMsS0FBNkIsT0FBMUJBLDRHQUF5QjswQkFDekU7Ozs7OzswQkFHRCw4REFBQ0osa0RBQUlBO2dCQUVIbUIsTUFBSztnQkFDTEMsSUFBSSxVQUFpQyxPQUF2QmQsS0FBS0EsSUFBSSxDQUFDZSxJQUFJLENBQUNDLE9BQU87Z0JBQ3BDTCxXQUFXYiw4RkFBYzswQkFFekIsNEVBQUNtQjtvQkFBSU4sV0FBV2IsNEhBQXlDOztzQ0FDdkQsOERBQUNtQjs0QkFBSU4sV0FBV2IseUhBQXNDOzs4Q0FDcEQsOERBQUNvQjs4Q0FBSWxCLEtBQUtBLElBQUksQ0FBQ21CLEtBQUs7Ozs7Ozs4Q0FFcEIsOERBQUNDOzhDQUFHYjs7Ozs7OzhDQUNKLDhEQUFDVTs4Q0FDQyw0RUFBQ0k7d0NBQU9DLE1BQUs7d0NBQVNDLE1BQUs7a0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLckQsOERBQUNOOzRCQUFJTixXQUFXYiwwSEFBdUM7c0NBQ3JELDRFQUFDSCxtREFBS0E7Z0NBQUUsR0FBR00sVUFBVTtnQ0FBRXVCLEtBQUk7Z0NBQWlCQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztlQWpCbkR6QixLQUFLQSxJQUFJLENBQUMwQixFQUFFOzs7Ozs7Ozs7OztBQXVCekI7R0FyQ00zQjs7UUFDZUgsaUVBQWtCQTs7O0tBRGpDRztBQXVDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvRmVhdHVyZWQvRmVhdHVyZWQuanM/YjE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VOZXh0U2FuaXR5SW1hZ2UgfSBmcm9tIFwibmV4dC1zYW5pdHktaW1hZ2VcIjtcbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc2FuaXR5LnNlcnZlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi8uLi9zdHlsZXMvUGFnZXMvSG9tZS9GZWF0dXJlZC9GZWF0dXJlZC5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBGZWF0dXJlZCA9IChwb3N0KSA9PiB7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIHBvc3QucG9zdC5tYWluSW1hZ2UpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHBvc3QucG9zdC5ib2R5WzBdLmNoaWxkcmVuWzBdLnRleHQ7XG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPVxuICAgIGRlc2NyaXB0aW9uLmxlbmd0aCA+IDIwNSA/IGRlc2NyaXB0aW9uLnNsaWNlKDAsIDIwNSkgKyBcIi4uLlwiIDogZGVzY3JpcHRpb247XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtZmVhdHVyZWQtY29udGFpbmVyXCJdfT5cbiAgICAgIDxoMVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1tcImhvbWUtc2VjdGlvbi1oZWFkZXJcIl19ICR7c3R5bGVzW1wiZmVhdHVyZWQtaGVhZGVyXCJdfWB9XG4gICAgICA+XG4gICAgICAgIEZlYXR1cmVkXG4gICAgICA8L2gxPlxuICAgICAgPExpbmtcbiAgICAgICAga2V5PXtwb3N0LnBvc3QuaWR9XG4gICAgICAgIGhyZWY9XCIvcG9zdHMvW3NsdWddXCJcbiAgICAgICAgYXM9e2AvcG9zdHMvJHtwb3N0LnBvc3Quc2x1Zy5jdXJyZW50fWB9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wibGlua1wiXX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtZmVhdHVyZWQtYXJ0aWNsZS1jb250YWluZXJcIl19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLWZlYXR1cmVkLWxlZnQtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxoMj57cG9zdC5wb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICB7LyogPFBvcnRhYmxlVGV4dCB2YWx1ZT17c2hvcnREZXNjcmlwdGlvbn0gLz4gKi99XG4gICAgICAgICAgICA8cD57c2hvcnREZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiUmVhZCBBcnRpY2xlIEJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIFJlYWQgTm93XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtZmVhdHVyZWQtcmlnaHQtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICAgIDxJbWFnZSB7Li4uaW1hZ2VQcm9wc30gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbiJdLCJuYW1lcyI6WyJQb3J0YWJsZVRleHQiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VOZXh0U2FuaXR5SW1hZ2UiLCJnZXRDbGllbnQiLCJzdHlsZXMiLCJGZWF0dXJlZCIsInBvc3QiLCJpbWFnZVByb3BzIiwibWFpbkltYWdlIiwiZGVzY3JpcHRpb24iLCJib2R5IiwiY2hpbGRyZW4iLCJ0ZXh0Iiwic2hvcnREZXNjcmlwdGlvbiIsImxlbmd0aCIsInNsaWNlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsImFzIiwic2x1ZyIsImN1cnJlbnQiLCJkaXYiLCJoMiIsInRpdGxlIiwicCIsImJ1dHRvbiIsInR5cGUiLCJuYW1lIiwiYWx0IiwiaGVpZ2h0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Featured/Featured.js\n"));

/***/ })

});