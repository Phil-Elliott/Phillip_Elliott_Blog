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

/***/ "./components/Home/Popular/Article-Container/Article-Container.js":
/*!************************************************************************!*\
  !*** ./components/Home/Popular/Article-Container/Article-Container.js ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_sanity_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-sanity-image */ \"./node_modules/next-sanity-image/dist/index.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../styles/Home/Popular/ArticleContainer.module.scss */ \"./styles/Home/Popular/ArticleContainer.module.scss\");\n/* harmony import */ var _styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar ArticleContainer = function(param) {\n    var title = param.title, description = param.description, image = param.image, index = param.index, noBorder = param.noBorder, slug = param.slug;\n    _s();\n    var imageProps = (0,next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage)((0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_5__.getClient)(), image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/posts/[slug]\",\n        as: \"/posts/\".concat(slug.current),\n        className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default().link),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: index % 2 !== 0 ? {\n                        order: \"1\"\n                    } : {\n                        order: \"0\"\n                    },\n                    className: noBorder && index === 0 ? \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-left\"]), \" \").concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"no-top-border\"])) : \"\".concat((_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-left\"])),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_8__.PortableText, {\n                            value: description[0]\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_Popular_ArticleContainer_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"home-popular-article-container-right\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, imageProps), {\n                        alt: \"Featured Image\",\n                        height: 500\n                    }), void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/components/Home/Popular/Article-Container/Article-Container.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticleContainer, \"1qaBfRVMGkcIVZDnffbbwXWglCA=\", false, function() {\n    return [\n        next_sanity_image__WEBPACK_IMPORTED_MODULE_4__.useNextSanityImage\n    ];\n});\n_c = ArticleContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleContainer);\nvar _c;\n$RefreshReg$(_c, \"ArticleContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUEwQjtBQUNHO0FBQ0U7QUFDd0I7QUFDRztBQUNWO0FBQ0c7QUFDaUM7QUFFcEYsSUFBTVEsZ0JBQWdCLEdBQUcsZ0JBT25CO1FBTkpDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsSUFBSSxTQUFKQSxJQUFJOztJQUVKLElBQU1DLFVBQVUsR0FBR1oscUVBQWtCLENBQUNDLDZEQUFTLEVBQUUsRUFBRU8sS0FBSyxDQUFDO0lBQ3pELHFCQUNFLDhEQUFDVixrREFBSTtRQUNIZSxJQUFJLEVBQUMsZUFBZTtRQUNwQkMsRUFBRSxFQUFFLFNBQVEsQ0FBZSxPQUFiSCxJQUFJLENBQUNJLE9BQU8sQ0FBRTtRQUM1QkMsU0FBUyxFQUFFWiwrRkFBVztrQkFFdEIsNEVBQUNjLEtBQUc7WUFBQ0YsU0FBUyxFQUFFWiw0SEFBd0M7OzhCQUN0RCw4REFBQ2MsS0FBRztvQkFDRkMsS0FBSyxFQUFFVixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRzt3QkFBRVcsS0FBSyxFQUFFLEdBQUc7cUJBQUUsR0FBRzt3QkFBRUEsS0FBSyxFQUFFLEdBQUc7cUJBQUU7b0JBQ3hESixTQUFTLEVBQ1BOLFFBQVEsSUFBSUQsS0FBSyxLQUFLLENBQUMsR0FDbkIsRUFBQyxDQUFtREwsTUFBdUIsQ0FBeEVBLGlJQUE2QyxFQUFDLEdBQUMsQ0FBMEIsUUFBeEJBLDJHQUF1QixDQUFFLEdBQzdFLEVBQUMsQ0FBZ0QsT0FBOUNBLGlJQUE2QyxDQUFFOztzQ0FHeEQsOERBQUNpQixJQUFFO3NDQUFFZixLQUFLOzs7OztpQ0FBTTtzQ0FDaEIsOERBQUNILDZEQUFZOzRCQUFDbUIsS0FBSyxFQUFFZixXQUFXLENBQUMsQ0FBQyxDQUFDOzs7OztpQ0FBSTs7Ozs7O3lCQUNuQzs4QkFDTiw4REFBQ1csS0FBRztvQkFBQ0YsU0FBUyxFQUFFWixrSUFBOEM7OEJBQzVELDRFQUFDTCxtREFBSywyS0FBS2EsVUFBVTt3QkFBRVcsR0FBRyxFQUFDLGdCQUFnQjt3QkFBQ0MsTUFBTSxFQUFFLEdBQUc7Ozs7OzZCQUFJOzs7Ozt5QkFNdkQ7Ozs7OztpQkFDRjs7Ozs7YUFDRCxDQUNQO0NBQ0g7R0F0Q0tuQixnQkFBZ0I7O1FBUURMLGlFQUFrQjs7O0FBUmpDSyxLQUFBQSxnQkFBZ0I7QUF3Q3RCLCtEQUFlQSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvUG9wdWxhci9BcnRpY2xlLUNvbnRhaW5lci9BcnRpY2xlLUNvbnRhaW5lci5qcz9lNDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlTmV4dFNhbml0eUltYWdlIH0gZnJvbSBcIm5leHQtc2FuaXR5LWltYWdlXCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi8uLi8uLi8uLi9zdHlsZXMvSG9tZS9Qb3B1bGFyL0FydGljbGVDb250YWluZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgQXJ0aWNsZUNvbnRhaW5lciA9ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIGluZGV4LFxuICBub0JvcmRlcixcbiAgc2x1Zyxcbn0pID0+IHtcbiAgY29uc3QgaW1hZ2VQcm9wcyA9IHVzZU5leHRTYW5pdHlJbWFnZShnZXRDbGllbnQoKSwgaW1hZ2UpO1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICBocmVmPVwiL3Bvc3RzL1tzbHVnXVwiXG4gICAgICBhcz17YC9wb3N0cy8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaG9tZS1wb3B1bGFyLWFydGljbGUtY29udGFpbmVyXCJdfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXtpbmRleCAlIDIgIT09IDAgPyB7IG9yZGVyOiBcIjFcIiB9IDogeyBvcmRlcjogXCIwXCIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgbm9Cb3JkZXIgJiYgaW5kZXggPT09IDBcbiAgICAgICAgICAgICAgPyBgJHtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZS1jb250YWluZXItbGVmdFwiXX0gJHtzdHlsZXNbXCJuby10b3AtYm9yZGVyXCJdfWBcbiAgICAgICAgICAgICAgOiBgJHtzdHlsZXNbXCJob21lLXBvcHVsYXItYXJ0aWNsZS1jb250YWluZXItbGVmdFwiXX1gXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2Rlc2NyaXB0aW9uWzBdfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtcG9wdWxhci1hcnRpY2xlLWNvbnRhaW5lci1yaWdodFwiXX0+XG4gICAgICAgICAgPEltYWdlIHsuLi5pbWFnZVByb3BzfSBhbHQ9XCJGZWF0dXJlZCBJbWFnZVwiIGhlaWdodD17NTAwfSAvPlxuICAgICAgICAgIHsvKiA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImhvbWUtZmVhdHVyZWQtaW1hZ2VcIl19XG4gICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSl9XG4gICAgICAgICAgICBhbHQ9XCJDb2ZmZWVcIlxuICAgICAgICAgIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVDb250YWluZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJ1c2VOZXh0U2FuaXR5SW1hZ2UiLCJnZXRDbGllbnQiLCJ1cmxGb3IiLCJQb3J0YWJsZVRleHQiLCJzdHlsZXMiLCJBcnRpY2xlQ29udGFpbmVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaW5kZXgiLCJub0JvcmRlciIsInNsdWciLCJpbWFnZVByb3BzIiwiaHJlZiIsImFzIiwiY3VycmVudCIsImNsYXNzTmFtZSIsImxpbmsiLCJkaXYiLCJzdHlsZSIsIm9yZGVyIiwiaDEiLCJ2YWx1ZSIsImFsdCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/Popular/Article-Container/Article-Container.js\n"));

/***/ })

});