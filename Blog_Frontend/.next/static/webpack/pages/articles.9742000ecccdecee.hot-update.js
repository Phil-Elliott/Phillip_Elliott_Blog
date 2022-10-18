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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../styles/Home/Popular/ArticleContainer.module.scss */ \"./styles/Home/Popular/ArticleContainer.module.scss\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ArticleContainer = function(param) {\n    var title = param.title, description = param.description, image = param.image, index = param.index, noBorder = param.noBorder, slug = param.slug, author = param.author, authorImage = param.authorImage;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/posts/[slug]\",\n        as: \"/posts/\".concat(slug.current),\n        className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: index % 2 !== 0 ? {\n                        order: \"1\"\n                    } : {\n                        order: \"0\"\n                    },\n                    className: noBorder && index === 0 ? \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-left\"]), \" \").concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"no-top-border\"])) : \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-left\"])),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_8__.PortableText, {\n                            value: description[0]\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-right\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, imageProps), {\n                        alt: \"Featured Image\",\n                        layout: \"fill\"\n                    }), void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticleContainer, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = ArticleContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleContainer);\nvar _c;\n$RefreshReg$(_c, \"ArticleContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUEwQjtBQUNHO0FBQ0U7QUFDd0I7QUFDRztBQUNWO0FBQ0c7QUFDaUM7QUFFcEYsSUFBTVEsZ0JBQWdCLEdBQUcsZ0JBU25CO1FBUkpDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsSUFBSSxTQUFKQSxJQUFJLEVBQ0pDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxXQUFXLFNBQVhBLFdBQVc7O0lBRVgsSUFBTUMsVUFBVSxHQUFHZCxxRUFBa0IsQ0FBQ0MsNkRBQVMsRUFBRSxFQUFFTyxLQUFLLENBQUM7SUFDekQscUJBQ0UsOERBQUNWLGtEQUFJO1FBQ0hpQixJQUFJLEVBQUMsZUFBZTtRQUNwQkMsRUFBRSxFQUFFLFNBQVEsQ0FBZSxPQUFiTCxJQUFJLENBQUNNLE9BQU8sQ0FBRTtRQUM1QkMsU0FBUyxFQUFFZCwrRkFBVztrQkFFdEIsNEVBQUNnQixLQUFHO1lBQUNGLFNBQVMsRUFBRWQsNEhBQXdDOzs4QkFDdEQsOERBQUNnQixLQUFHO29CQUNGQyxLQUFLLEVBQUVaLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHO3dCQUFFYSxLQUFLLEVBQUUsR0FBRztxQkFBRSxHQUFHO3dCQUFFQSxLQUFLLEVBQUUsR0FBRztxQkFBRTtvQkFDeERKLFNBQVMsRUFDUFIsUUFBUSxJQUFJRCxLQUFLLEtBQUssQ0FBQyxHQUNuQixFQUFDLENBQW1ETCxNQUF1QixDQUF4RUEsaUlBQTZDLEVBQUMsR0FBQyxDQUEwQixRQUF4QkEsMkdBQXVCLENBQUUsR0FDN0UsRUFBQyxDQUFnRCxPQUE5Q0EsaUlBQTZDLENBQUU7O3NDQUd4RCw4REFBQ21CLElBQUU7c0NBQUVqQixLQUFLOzs7OztpQ0FBTTtzQ0FDaEIsOERBQUNILDZEQUFZOzRCQUFDcUIsS0FBSyxFQUFFakIsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkM7OEJBQ04sOERBQUNhLEtBQUc7b0JBQUNGLFNBQVMsRUFBRWQsa0lBQThDOzhCQUM1RCw0RUFBQ0wsbURBQUssMktBQUtlLFVBQVU7d0JBQUVXLEdBQUcsRUFBQyxnQkFBZ0I7d0JBQUNDLE1BQU0sRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQ3hEOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0QsQ0FDUDtDQUNIO0dBbkNLckIsZ0JBQWdCOztRQVVETCxpRUFBa0I7OztBQVZqQ0ssS0FBQUEsZ0JBQWdCO0FBcUN0QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL1BvcHVsYXIvQXJ0aWNsZS1Db250YWluZXIvQXJ0aWNsZS1Db250YWluZXIuanM/ZTQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZU5leHRTYW5pdHlJbWFnZSB9IGZyb20gXCJuZXh0LXNhbml0eS1pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vLi4vLi4vc3R5bGVzL0hvbWUvUG9wdWxhci9BcnRpY2xlQ29udGFpbmVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEFydGljbGVDb250YWluZXIgPSAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGltYWdlLFxuICBpbmRleCxcbiAgbm9Cb3JkZXIsXG4gIHNsdWcsXG4gIGF1dGhvcixcbiAgYXV0aG9ySW1hZ2UsXG59KSA9PiB7XG4gIGNvbnN0IGltYWdlUHJvcHMgPSB1c2VOZXh0U2FuaXR5SW1hZ2UoZ2V0Q2xpZW50KCksIGltYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgaHJlZj1cIi9wb3N0cy9bc2x1Z11cIlxuICAgICAgYXM9e2AvcG9zdHMvJHtzbHVnLmN1cnJlbnR9YH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17aW5kZXggJSAyICE9PSAwID8geyBvcmRlcjogXCIxXCIgfSA6IHsgb3JkZXI6IFwiMFwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIG5vQm9yZGVyICYmIGluZGV4ID09PSAwXG4gICAgICAgICAgICAgID8gYCR7c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyLWxlZnRcIl19ICR7c3R5bGVzW1wibm8tdG9wLWJvcmRlclwiXX1gXG4gICAgICAgICAgICAgIDogYCR7c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyLWxlZnRcIl19YFxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtkZXNjcmlwdGlvblswXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZS1jb250YWluZXItcmlnaHRcIl19PlxuICAgICAgICAgIDxJbWFnZSB7Li4uaW1hZ2VQcm9wc30gYWx0PVwiRmVhdHVyZWQgSW1hZ2VcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkltYWdlIiwidXNlTmV4dFNhbml0eUltYWdlIiwiZ2V0Q2xpZW50IiwidXJsRm9yIiwiUG9ydGFibGVUZXh0Iiwic3R5bGVzIiwiQXJ0aWNsZUNvbnRhaW5lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImluZGV4Iiwibm9Cb3JkZXIiLCJzbHVnIiwiYXV0aG9yIiwiYXV0aG9ySW1hZ2UiLCJpbWFnZVByb3BzIiwiaHJlZiIsImFzIiwiY3VycmVudCIsImNsYXNzTmFtZSIsImxpbmsiLCJkaXYiLCJzdHlsZSIsIm9yZGVyIiwiaDEiLCJ2YWx1ZSIsImFsdCIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/Popular/Article-Container/Article-Container.js\n"));

/***/ })

});