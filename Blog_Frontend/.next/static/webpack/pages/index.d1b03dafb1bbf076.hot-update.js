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

/***/ "./components/Home/Latest/Slider-Article/Slider-Article.js":
/*!*****************************************************************!*\
  !*** ./components/Home/Latest/Slider-Article/Slider-Article.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../styles/Pages/Home/Latest/SliderArticle.module.scss */ \"./styles/Pages/Home/Latest/SliderArticle.module.scss\");\n/* harmony import */ var _styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar SliderArticle = function(param) {\n    var title = param.title, image = param.image, slug = param.slug, description = param.description;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), image);\n    // const shortTitle = title.length > 25 ? title.slice(0, 25) + \"...\" : title;\n    var newDescription = description[0].children[0].text;\n    var shortDescription = newDescription.length > 190 ? newDescription.slice(0, 190) + \"...\" : newDescription;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/posts/[slug]\",\n        as: \"/posts/\".concat(slug.current),\n        className: (_styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-latest-article\"]),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-latest-article-image\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, imageProps), {\n                        alt: \"fun image for article\",\n                        layout: \"fill\"\n                    }), void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Pages_Home_Latest_SliderArticle_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"image-content-container\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                title: title,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Latest/Slider-Article/Slider-Article.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(SliderArticle, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = SliderArticle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderArticle); /*\n  Important \n    - Put in Alt for each image and pass through\n\n\n*/ \nvar _c;\n$RefreshReg$(_c, \"SliderArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvTGF0ZXN0L1NsaWRlci1BcnRpY2xlL1NsaWRlci1BcnRpY2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEI7QUFDRztBQUNFO0FBQ3dCO0FBQ0c7QUFDVjtBQUNzQztBQUV0RixJQUFNTyxhQUFhLEdBQUcsZ0JBQXlDO1FBQXRDQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxXQUFXLFNBQVhBLFdBQVc7O0lBQ3RELElBQU1DLFVBQVUsR0FBR1QscUVBQWtCLENBQUNDLDZEQUFTLEVBQUUsRUFBRUssS0FBSyxDQUFDO0lBQ3pELDZFQUE2RTtJQUM3RSxJQUFNSSxjQUFjLEdBQUdGLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJO0lBQ3RELElBQU1DLGdCQUFnQixHQUNwQkgsY0FBYyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxHQUN2QkosY0FBYyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FDcENMLGNBQWM7SUFFcEIscUJBQ0UsOERBQUNaLGtEQUFJO1FBQ0hrQixJQUFJLEVBQUMsZUFBZTtRQUNwQkMsRUFBRSxFQUFFLFNBQVEsQ0FBZSxPQUFiVixJQUFJLENBQUNXLE9BQU8sQ0FBRTtRQUM1QkMsU0FBUyxFQUFFaEIsaUdBQVc7a0JBRXRCLDRFQUFDa0IsS0FBRztZQUFDRixTQUFTLEVBQUVoQixtSEFBNkI7c0JBQzNDLDRFQUFDa0IsS0FBRztnQkFBQ0YsU0FBUyxFQUFFaEIseUhBQW1DOztrQ0FDakQsOERBQUNKLG1EQUFLLDBLQUFLVSxVQUFVO3dCQUFFYSxHQUFHLEVBQUMsdUJBQXVCO3dCQUFDQyxNQUFNLEVBQUMsTUFBTTs7Ozs7NkJBQUc7a0NBQ25FLDhEQUFDRixLQUFHO3dCQUFDRixTQUFTLEVBQUVoQix1SEFBaUM7OzBDQUMvQyw4REFBQ3FCLElBQUU7Z0NBQUNuQixLQUFLLEVBQUVBLEtBQUs7MENBQUdBLEtBQUs7Ozs7O3FDQUFNOzBDQUM5Qiw4REFBQ29CLEdBQUM7MENBQUVqQixXQUFXOzs7OztxQ0FBSzs7Ozs7OzZCQUNoQjs7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRCxDQUNQO0NBQ0g7R0ExQktKLGFBQWE7O1FBQ0VKLGlFQUFrQjs7O0FBRGpDSSxLQUFBQSxhQUFhO0FBNEJuQiwrREFBZUEsYUFBYSxFQUFDLENBRTdCOzs7OztBQUtBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9MYXRlc3QvU2xpZGVyLUFydGljbGUvU2xpZGVyLUFydGljbGUuanM/NGIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gXCJuZXh0LXNhbml0eS1pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMvUGFnZXMvSG9tZS9MYXRlc3QvU2xpZGVyQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBTbGlkZXJBcnRpY2xlID0gKHsgdGl0bGUsIGltYWdlLCBzbHVnLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIGltYWdlKTtcbiAgLy8gY29uc3Qgc2hvcnRUaXRsZSA9IHRpdGxlLmxlbmd0aCA+IDI1ID8gdGl0bGUuc2xpY2UoMCwgMjUpICsgXCIuLi5cIiA6IHRpdGxlO1xuICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uWzBdLmNoaWxkcmVuWzBdLnRleHQ7XG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPVxuICAgIG5ld0Rlc2NyaXB0aW9uLmxlbmd0aCA+IDE5MFxuICAgICAgPyBuZXdEZXNjcmlwdGlvbi5zbGljZSgwLCAxOTApICsgXCIuLi5cIlxuICAgICAgOiBuZXdEZXNjcmlwdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiXG4gICAgICBhcz17YC9wb3N0cy8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaG9tZS1sYXRlc3QtYXJ0aWNsZVwiXX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLWxhdGVzdC1hcnRpY2xlLWltYWdlXCJdfT5cbiAgICAgICAgICA8SW1hZ2Ugey4uLmltYWdlUHJvcHN9IGFsdD1cImZ1biBpbWFnZSBmb3IgYXJ0aWNsZVwiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbWFnZS1jb250ZW50LWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICA8aDIgdGl0bGU9e3RpdGxlfT57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyQXJ0aWNsZTtcblxuLypcbiAgSW1wb3J0YW50IFxuICAgIC0gUHV0IGluIEFsdCBmb3IgZWFjaCBpbWFnZSBhbmQgcGFzcyB0aHJvdWdoXG5cblxuKi9cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJJbWFnZSIsInVzZU5leHRTYW5pdHlJbWFnZSIsImdldENsaWVudCIsInVybEZvciIsInN0eWxlcyIsIlNsaWRlckFydGljbGUiLCJ0aXRsZSIsImltYWdlIiwic2x1ZyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VQcm9wcyIsIm5ld0Rlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJ0ZXh0Iiwic2hvcnREZXNjcmlwdGlvbiIsImxlbmd0aCIsInNsaWNlIiwiaHJlZiIsImFzIiwiY3VycmVudCIsImNsYXNzTmFtZSIsImxpbmsiLCJkaXYiLCJhbHQiLCJsYXlvdXQiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Latest/Slider-Article/Slider-Article.js\n"));

/***/ })

});