/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./styles/Article.module.scss":
/*!************************************!*\
  !*** ./styles/Article.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"article-container\": \"Article_article-container__mYVGC\",\n\t\"article-content\": \"Article_article-content__dgLM0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsLWJsb2ctZnJvbnRlbmQvLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuc2Nzcz81MzFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFydGljbGUtY29udGFpbmVyXCI6IFwiQXJ0aWNsZV9hcnRpY2xlLWNvbnRhaW5lcl9fbVlWR0NcIixcblx0XCJhcnRpY2xlLWNvbnRlbnRcIjogXCJBcnRpY2xlX2FydGljbGUtY29udGVudF9fZGdMTTBcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Article.module.scss\n");

/***/ }),

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    dataset: \"production\",\n    projectId: \"wh0nr5m7\",\n    apiVersion: \"2021-10-21\",\n    useCdn: \"production\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7SUFDcEJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE1BQU0sRUFBRSxZQUFZO0NBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmF2ZWwtYmxvZy1mcm9udGVuZC8uL2xpYi9jb25maWcuanM/MDZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcbiAgcHJvamVjdElkOiBcIndoMG5yNW03XCIsXG4gIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxuICB1c2VDZG46IFwicHJvZHVjdGlvblwiLFxufTtcbiJdLCJuYW1lcyI6WyJjb25maWciLCJkYXRhc2V0IiwicHJvamVjdElkIiwiYXBpVmVyc2lvbiIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor),\n/* harmony export */   \"useCurrentUser\": () => (/* binding */ useCurrentUser),\n/* harmony export */   \"usePreviewSubscription\": () => (/* binding */ usePreviewSubscription)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\n\n\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_config__WEBPACK_IMPORTED_MODULE_2__.config).image(source);\nconst usePreviewSubscription = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createPreviewSubscriptionHook)(_config__WEBPACK_IMPORTED_MODULE_2__.config);\nconst useCurrentUser = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createCurrentUserHook)(_config__WEBPACK_IMPORTED_MODULE_2__.config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR3FCO0FBQ2lDO0FBQ3BCO0FBRTNCLE1BQU1JLE1BQU0sR0FBRyxDQUFDQyxNQUFNLEdBQUtILHdEQUFxQixDQUFDQywyQ0FBTSxDQUFDLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUM7QUFFdkUsTUFBTUUsc0JBQXNCLEdBQUdQLDBFQUE2QixDQUFDRywyQ0FBTSxDQUFDLENBQUM7QUFFckUsTUFBTUssY0FBYyxHQUFHUCxrRUFBcUIsQ0FBQ0UsMkNBQU0sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsLWJsb2ctZnJvbnRlbmQvLi9saWIvc2FuaXR5LmpzP2Q4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlUHJldmlld1N1YnNjcmlwdGlvbkhvb2ssXG4gIGNyZWF0ZUN1cnJlbnRVc2VySG9vayxcbn0gZnJvbSBcIm5leHQtc2FuaXR5XCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCB1cmxGb3IgPSAoc291cmNlKSA9PiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xuXG5leHBvcnQgY29uc3QgdXNlUHJldmlld1N1YnNjcmlwdGlvbiA9IGNyZWF0ZVByZXZpZXdTdWJzY3JpcHRpb25Ib29rKGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCB1c2VDdXJyZW50VXNlciA9IGNyZWF0ZUN1cnJlbnRVc2VySG9vayhjb25maWcpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVByZXZpZXdTdWJzY3JpcHRpb25Ib29rIiwiY3JlYXRlQ3VycmVudFVzZXJIb29rIiwiY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJ1c2VQcmV2aWV3U3Vic2NyaXB0aW9uIiwidXNlQ3VycmVudFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sanity.js\n");

/***/ }),

/***/ "./lib/sanity.server.js":
/*!******************************!*\
  !*** ./lib/sanity.server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClient\": () => (/* binding */ getClient),\n/* harmony export */   \"previewClient\": () => (/* binding */ previewClient),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\n\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_config__WEBPACK_IMPORTED_MODULE_1__.config);\nconst previewClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    ..._config__WEBPACK_IMPORTED_MODULE_1__.config,\n    useCdn: false,\n    token: \"skiu1niw027oKGbhmK3wO83iWQpphzJhozB27kGGTz1TPY0Rd0QCC5EawY3eeRkZEgFpcflMMg75BF01qfROV0QAOqW1vXqtM43ojHJwdEwrQcarhd6MYSoCMiSMYEI2VQR7iDw8APVtmNbE0ZjpFvtM0k9ezjVO7jJYHaaUCdHFLuVNZ4X9\"\n});\nconst getClient = (usePreview)=>usePreview ? previewClient : sanityClient;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LnNlcnZlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDVDtBQUUzQixNQUFNRSxZQUFZLEdBQUdGLHlEQUFZLENBQUNDLDJDQUFNLENBQUMsQ0FBQztBQUUxQyxNQUFNRSxhQUFhLEdBQUdILHlEQUFZLENBQUM7SUFDeEMsR0FBR0MsMkNBQU07SUFDVEcsTUFBTSxFQUFFLEtBQUs7SUFDYkMsS0FBSyxFQUNILHNMQUFzTDtDQUN6TCxDQUFDLENBQUM7QUFFSSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsVUFBVSxHQUNsQ0EsVUFBVSxHQUFHSixhQUFhLEdBQUdELFlBQVksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXZlbC1ibG9nLWZyb250ZW5kLy4vbGliL3Nhbml0eS5zZXJ2ZXIuanM/NjBmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gY3JlYXRlQ2xpZW50KGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgLi4uY29uZmlnLFxuICB1c2VDZG46IGZhbHNlLFxuICB0b2tlbjpcbiAgICBcInNraXUxbml3MDI3b0tHYmhtSzN3TzgzaVdRcHBoekpob3pCMjdrR0dUejFUUFkwUmQwUUNDNUVhd1kzZWVSa1pFZ0ZwY2ZsTU1nNzVCRjAxcWZST1YwUUFPcVcxdlhxdE00M29qSEp3ZEV3clFjYXJoZDZNWVNvQ01pU01ZRUkyVlFSN2lEdzhBUFZ0bU5iRTBaanBGdnRNMGs5ZXpqVk83akpZSGFhVUNkSEZMdVZOWjRYOVwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldykgPT5cbiAgdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY29uZmlnIiwic2FuaXR5Q2xpZW50IiwicHJldmlld0NsaWVudCIsInVzZUNkbiIsInRva2VuIiwiZ2V0Q2xpZW50IiwidXNlUHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sanity.server.js\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_2__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Post = ({ post  })=>{\n    console.log(post);\n    const { title , body , mainImage , publishedAt  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"article-container\"]),\n        children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Last Updated: \",\n                        publishedAt\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(mainImage),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_5___default()[\"article-content\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__.PortableText, {\n                        value: body\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0] {\n      title,\n      \"username\": author->username,\n      \"authorImage\": author->avatar,\n      body,\n      mainImage, \n      publishedAt, \n      categories\n}`;\nasync function getStaticPaths() {\n    const paths = await (0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__.getClient)().fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps({ params , preview =false  }) {\n    const post = await (0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__.getClient)(preview).fetch(query, {\n        slug: params.slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFDMkI7QUFDVDtBQUNVO0FBQ0k7QUFFeEQsTUFBTUssSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUVsQixNQUFNLEVBQUVHLEtBQUssR0FBRUMsSUFBSSxHQUFFQyxTQUFTLEdBQUVDLFdBQVcsR0FBRSxHQUFHTixJQUFJO0lBRXBELHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBRVYseUZBQTJCO2tCQUN4Q0UsSUFBSSxrQkFDSCw4REFBQ1MsU0FBTzs7OEJBQ04sOERBQUNDLElBQUU7OEJBQUVQLEtBQUs7Ozs7OzZCQUFNOzhCQUNoQiw4REFBQ1EsR0FBQzs7d0JBQUMsZ0JBQWM7d0JBQUNMLFdBQVc7Ozs7Ozs2QkFBSzs4QkFDbEMsOERBQUNNLEtBQUc7b0JBQUNDLEdBQUcsRUFBRWpCLG1EQUFNLENBQUNTLFNBQVMsQ0FBQztvQkFBRVMsR0FBRyxFQUFDLEVBQUU7Ozs7OzZCQUFHOzhCQUN0Qyw4REFBQ1AsS0FBRztvQkFBQ0MsU0FBUyxFQUFFVix1RkFBeUI7OEJBQ3ZDLDRFQUFDSCw2REFBWTt3QkFBQ29CLEtBQUssRUFBRVgsSUFBSTs7Ozs7aUNBQUk7Ozs7OzZCQUN6Qjs7Ozs7O3FCQUNFOzs7OztpQkFFUixDQWFOO0NBQ0g7QUFFRCxNQUFNWSxLQUFLLEdBQUd0Qiw2Q0FBSSxDQUFDOzs7Ozs7OztDQVFsQixDQUFDO0FBRUssZUFBZXVCLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUcsTUFBTXJCLDZEQUFTLEVBQUUsQ0FBQ3NCLEtBQUssQ0FDbkN6Qiw2Q0FBSSxDQUFDLDBEQUEwRCxDQUFDLENBQ2pFO0lBRUQsT0FBTztRQUNMd0IsS0FBSyxFQUFFQSxLQUFLLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQUssQ0FBQztnQkFBRUMsTUFBTSxFQUFFO29CQUFFRCxJQUFJO2lCQUFFO2FBQUUsQ0FBQyxDQUFDO1FBQ2xERSxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7Q0FDSDtBQUVNLGVBQWVDLGNBQWMsQ0FBQyxFQUFFRixNQUFNLEdBQUVHLE9BQU8sRUFBRyxLQUFLLEdBQUUsRUFBRTtJQUNoRSxNQUFNekIsSUFBSSxHQUFHLE1BQU1ILDZEQUFTLENBQUM0QixPQUFPLENBQUMsQ0FBQ04sS0FBSyxDQUFDSCxLQUFLLEVBQUU7UUFBRUssSUFBSSxFQUFFQyxNQUFNLENBQUNELElBQUk7S0FBRSxDQUFDO0lBRXpFLE9BQU87UUFDTEssS0FBSyxFQUFFO1lBQ0wxQixJQUFJO1NBQ0w7S0FDRixDQUFDO0NBQ0g7QUFFRCxpRUFBZUQsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhdmVsLWJsb2ctZnJvbnRlbmQvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgeyBnZXRDbGllbnQgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eS5zZXJ2ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhwb3N0KTtcblxuICBjb25zdCB7IHRpdGxlLCBib2R5LCBtYWluSW1hZ2UsIHB1Ymxpc2hlZEF0IH0gPSBwb3N0O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGUtY29udGFpbmVyXCJdfT5cbiAgICAgIHtwb3N0ICYmIChcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxwPkxhc3QgVXBkYXRlZDoge3B1Ymxpc2hlZEF0fTwvcD5cbiAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKG1haW5JbWFnZSl9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImFydGljbGUtY29udGVudFwiXX0+XG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtib2R5fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgLy8gICA8ZGl2PlxuICAgIC8vICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgLy8gICAgIDxwPkxhc3QgVXBkYXRlZDoge3B1Ymxpc2hlZEF0fTwvcD5cbiAgICAvLyAgICAgPGltZyBzcmM9e2FydGljbGUuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRlbnRcIl19PlxuICAgIC8vICAgICAgIHthcnRpY2xlLmNvbnRlbnQubWFwKChwYXJhZ3JhcGgpID0+IChcbiAgICAvLyAgICAgICAgIDxwPntwYXJhZ3JhcGh9PC9wPlxuICAgIC8vICAgICAgICkpfVxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXSB7XG4gICAgICB0aXRsZSxcbiAgICAgIFwidXNlcm5hbWVcIjogYXV0aG9yLT51c2VybmFtZSxcbiAgICAgIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5hdmF0YXIsXG4gICAgICBib2R5LFxuICAgICAgbWFpbkltYWdlLCBcbiAgICAgIHB1Ymxpc2hlZEF0LCBcbiAgICAgIGNhdGVnb3JpZXNcbn1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zLCBwcmV2aWV3ID0gZmFsc2UgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0Q2xpZW50KHByZXZpZXcpLmZldGNoKHF1ZXJ5LCB7IHNsdWc6IHBhcmFtcy5zbHVnIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJncm9xIiwiUG9ydGFibGVUZXh0IiwidXJsRm9yIiwiZ2V0Q2xpZW50Iiwic3R5bGVzIiwiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJib2R5IiwibWFpbkltYWdlIiwicHVibGlzaGVkQXQiLCJkaXYiLCJjbGFzc05hbWUiLCJhcnRpY2xlIiwiaDEiLCJwIiwiaW1nIiwic3JjIiwiYWx0IiwidmFsdWUiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJldmlldyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("groq");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-sanity");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[slug].js"));
module.exports = __webpack_exports__;

})();