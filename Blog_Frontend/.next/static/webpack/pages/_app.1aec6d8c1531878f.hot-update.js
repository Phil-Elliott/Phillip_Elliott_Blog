"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_SubscribeModal_SubscribeModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubscribeModal/SubscribeModal */ \"./components/SubscribeModal/SubscribeModal.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [displayModal, setDisplayModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const changeModalDisplay = ()=>{\n        setDisplayModal(!displayModal);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_6__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                strategy: \"afterInteractive\",\n                src: \"https://www.googletagmanager.com/gtag/js?id=\".concat(process.env.ANALYTICS_ID)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: \"\\n          window.dataLayer = window.dataLayer || [];\\n          function gtag(){dataLayer.push(arguments);}\\n          gtag('js', new Date());\\n          gtag('config', 'G-HCF2X7344D', {\\n            page_path: window.location.pathname,\\n          });\\n        \"\n                }\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeModal_SubscribeModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeModalDisplay: changeModalDisplay,\n                        displayModal: displayModal\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        changeModalDisplay: changeModalDisplay\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"m5cEk+7qrBBLqpK0PgaJweaOH/w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp); //src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUNGO0FBQytCO0FBQ3hDO0FBQ0Q7QUFDSTtBQUNJO0FBRXhDLFNBQVNPLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDYixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU1ZLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNTyxxQkFBcUIsSUFBTTtRQUMvQkYsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUFULGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxvQkFBb0IsQ0FBQ0MsTUFBUTtZQUNqQ1YsK0NBQWEsQ0FBQ1U7UUFDaEI7UUFFQUgsT0FBT0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSjtRQUV4QyxPQUFPLElBQU07WUFDWEYsT0FBT0ssTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCTDtRQUMzQztJQUNGLEdBQUc7UUFBQ0YsT0FBT0ssTUFBTTtLQUFDO0lBRWxCLHFCQUNFOzswQkFDRSw4REFBQ2Isb0RBQU1BO2dCQUNMZ0IsVUFBUztnQkFDVEMsS0FBSywrQ0FBd0UsT0FBekJDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTs7Ozs7OzBCQUU5RSw4REFBQ3BCLG9EQUFNQTtnQkFDTHFCLElBQUc7Z0JBQ0hMLFVBQVM7Z0JBQ1RNLHlCQUF5QjtvQkFDdkJDLFFBQVM7Z0JBUVg7Ozs7OzswQkFHRiw4REFBQ3pCLDBEQUFNQTs7a0NBQ0wsOERBQUNDLGlGQUFjQTt3QkFDYlUsb0JBQW9CQTt3QkFDcEJILGNBQWNBOzs7Ozs7a0NBRWhCLDhEQUFDRjt3QkFBVyxHQUFHQyxTQUFTO3dCQUFFSSxvQkFBb0JBOzs7Ozs7Ozs7Ozs7OztBQUl0RDtHQWxEU047O1FBRVFELGtEQUFTQTs7O0tBRmpCQztBQW9EVCwrREFBZUEsS0FBS0EsRUFBQyxDQUVyQixpRkFBaUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgU3Vic2NyaWJlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2NyaWJlTW9kYWwvU3Vic2NyaWJlTW9kYWxcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgKiBhcyBndGFnIGZyb20gXCIuLi9saWIvZ3RhZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbZGlzcGxheU1vZGFsLCBzZXREaXNwbGF5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjaGFuZ2VNb2RhbERpc3BsYXkgPSAoKSA9PiB7XG4gICAgc2V0RGlzcGxheU1vZGFsKCFkaXNwbGF5TW9kYWwpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybCk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7cHJvY2Vzcy5lbnYuQU5BTFlUSUNTX0lEfWB9XG4gICAgICAvPlxuICAgICAgPFNjcmlwdFxuICAgICAgICBpZD1cImdvb2dsZS1hbmFseXRpY3NcIlxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLUhDRjJYNzM0NEQnLCB7XG4gICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgYCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxTdWJzY3JpYmVNb2RhbFxuICAgICAgICAgIGNoYW5nZU1vZGFsRGlzcGxheT17Y2hhbmdlTW9kYWxEaXNwbGF5fVxuICAgICAgICAgIGRpc3BsYXlNb2RhbD17ZGlzcGxheU1vZGFsfVxuICAgICAgICAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGNoYW5nZU1vZGFsRGlzcGxheT17Y2hhbmdlTW9kYWxEaXNwbGF5fSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4vL3NyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtwcm9jZXNzLmVudi5BTkFMWVRJQ1NfSUR9YH1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsIlN1YnNjcmliZU1vZGFsIiwiU2NyaXB0IiwiZ3RhZyIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZGlzcGxheU1vZGFsIiwic2V0RGlzcGxheU1vZGFsIiwicm91dGVyIiwiY2hhbmdlTW9kYWxEaXNwbGF5IiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwic3RyYXRlZ3kiLCJzcmMiLCJwcm9jZXNzIiwiZW52IiwiQU5BTFlUSUNTX0lEIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});