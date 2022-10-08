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

eval("// Exports\nmodule.exports = {\n\t\"article-container\": \"Article_article-container__mYVGC\",\n\t\"main-img\": \"Article_main-img__XH0qq\",\n\t\"article-content\": \"Article_article-content__dgLM0\",\n\t\"post-image\": \"Article_post-image__p5myc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQXJ0aWNsZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXZlbC1ibG9nLWZyb250ZW5kLy4vc3R5bGVzL0FydGljbGUubW9kdWxlLnNjc3M/NTMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcnRpY2xlLWNvbnRhaW5lclwiOiBcIkFydGljbGVfYXJ0aWNsZS1jb250YWluZXJfX21ZVkdDXCIsXG5cdFwibWFpbi1pbWdcIjogXCJBcnRpY2xlX21haW4taW1nX19YSDBxcVwiLFxuXHRcImFydGljbGUtY29udGVudFwiOiBcIkFydGljbGVfYXJ0aWNsZS1jb250ZW50X19kZ0xNMFwiLFxuXHRcInBvc3QtaW1hZ2VcIjogXCJBcnRpY2xlX3Bvc3QtaW1hZ2VfX3A1bXljXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Article.module.scss\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/sanity.server */ \"./lib/sanity.server.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ \"react-moment\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../styles/Article.module.scss */ \"./styles/Article.module.scss\");\n/* harmony import */ var _styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_2__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst PostComponents = {\n    types: {\n        image: ({ value  })=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"post-image\"]),\n                alt: value.alt || \" \",\n                src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(value)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"article-container\"]),\n        children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        \"Phil Elliott |\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            format: \"MM/DD/YYYY\",\n                            children: post.publishedAt\n                        }, void 0, false, {\n                            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"main-img\"]),\n                    src: (0,_lib_sanity__WEBPACK_IMPORTED_MODULE_3__.urlFor)(post.mainImage),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Article_module_scss__WEBPACK_IMPORTED_MODULE_6___default()[\"article-content\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__.PortableText, {\n                        value: post.body,\n                        components: PostComponents\n                    }, void 0, false, {\n                        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/phil/Programming/Phillip_Elliott_Blog/Blog_Frontend/pages/posts/[slug].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0] {\n      title,\n      \"username\": author->username,\n      \"authorImage\": author->avatar,\n      body,\n      mainImage, \n      publishedAt, \n      categories\n}`;\nasync function getStaticPaths() {\n    const paths = await (0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__.getClient)().fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps({ params , preview =false  }) {\n    const post = await (0,_lib_sanity_server__WEBPACK_IMPORTED_MODULE_4__.getClient)(preview).fetch(query, {\n        slug: params.slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUMyQjtBQUNUO0FBQ1U7QUFDbEI7QUFDc0I7QUFFeEQsTUFBTU0sY0FBYyxHQUFHO0lBQ3JCQyxLQUFLLEVBQUU7UUFDTEMsS0FBSyxFQUFFLENBQUMsRUFBRUMsS0FBSyxHQUFFLEdBQUs7WUFDcEIscUJBQ0UsOERBQUNDLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBRU4sa0ZBQW9CO2dCQUMvQk8sR0FBRyxFQUFFSCxLQUFLLENBQUNHLEdBQUcsSUFBSSxHQUFHO2dCQUNyQkMsR0FBRyxFQUFFWCxtREFBTSxDQUFDTyxLQUFLLENBQUM7Ozs7O3lCQUNsQixDQUNGO1NBQ0g7S0FDRjtDQUNGO0FBRUQsTUFBTUssSUFBSSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDekIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0wsU0FBUyxFQUFFTix5RkFBMkI7a0JBQ3hDVSxJQUFJLGtCQUNILDhEQUFDRSxTQUFPOzs4QkFDTiw4REFBQ0MsSUFBRTs4QkFBRUgsSUFBSSxDQUFDSSxLQUFLOzs7Ozs2QkFBTTs4QkFDckIsOERBQUNDLElBQUU7O3dCQUFDLGdCQUNZO3dCQUFDLEdBQUc7c0NBQ2xCLDhEQUFDaEIscURBQU07NEJBQUNpQixNQUFNLEVBQUMsWUFBWTtzQ0FBRU4sSUFBSSxDQUFDTyxXQUFXOzs7OztxQ0FBVTs7Ozs7OzZCQUNwRDs4QkFDTCw4REFBQ1osS0FBRztvQkFDRkMsU0FBUyxFQUFFTixnRkFBa0I7b0JBQzdCUSxHQUFHLEVBQUVYLG1EQUFNLENBQUNhLElBQUksQ0FBQ1EsU0FBUyxDQUFDO29CQUMzQlgsR0FBRyxFQUFDLEVBQUU7Ozs7OzZCQUNOOzhCQUNGLDhEQUFDSSxLQUFHO29CQUFDTCxTQUFTLEVBQUVOLHVGQUF5Qjs4QkFDdkMsNEVBQUNKLDZEQUFZO3dCQUFDUSxLQUFLLEVBQUVNLElBQUksQ0FBQ1MsSUFBSTt3QkFBRUMsVUFBVSxFQUFFbkIsY0FBYzs7Ozs7aUNBQUk7Ozs7OzZCQUMxRDs7Ozs7O3FCQUNFOzs7OztpQkFFUixDQUNOO0NBQ0g7QUFFRCxNQUFNb0IsS0FBSyxHQUFHMUIsNkNBQUksQ0FBQzs7Ozs7Ozs7Q0FRbEIsQ0FBQztBQUVLLGVBQWUyQixjQUFjLEdBQUc7SUFDckMsTUFBTUMsS0FBSyxHQUFHLE1BQU16Qiw2REFBUyxFQUFFLENBQUMwQixLQUFLLENBQ25DN0IsNkNBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUNqRTtJQUVELE9BQU87UUFDTDRCLEtBQUssRUFBRUEsS0FBSyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLLENBQUM7Z0JBQUVDLE1BQU0sRUFBRTtvQkFBRUQsSUFBSTtpQkFBRTthQUFFLENBQUMsQ0FBQztRQUNsREUsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0NBQ0g7QUFFTSxlQUFlQyxjQUFjLENBQUMsRUFBRUYsTUFBTSxHQUFFRyxPQUFPLEVBQUcsS0FBSyxHQUFFLEVBQUU7SUFDaEUsTUFBTXBCLElBQUksR0FBRyxNQUFNWiw2REFBUyxDQUFDZ0MsT0FBTyxDQUFDLENBQUNOLEtBQUssQ0FBQ0gsS0FBSyxFQUFFO1FBQUVLLElBQUksRUFBRUMsTUFBTSxDQUFDRCxJQUFJO0tBQUUsQ0FBQztJQUV6RSxPQUFPO1FBQ0xLLEtBQUssRUFBRTtZQUNMckIsSUFBSTtTQUNMO0tBQ0YsQ0FBQztDQUNIO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyYXZlbC1ibG9nLWZyb250ZW5kLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzPzY5MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9zYW5pdHkuc2VydmVyXCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9zdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtaW1hZ2VcIl19XG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRhaW5lclwiXX0+XG4gICAgICB7cG9zdCAmJiAoXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIFBoaWwgRWxsaW90dCB8e1wiIFwifVxuICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTS9ERC9ZWVlZXCI+e3Bvc3QucHVibGlzaGVkQXR9PC9Nb21lbnQ+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcIm1haW4taW1nXCJdfVxuICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5tYWluSW1hZ2UpfVxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnRpY2xlLWNvbnRlbnRcIl19PlxuICAgICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17cG9zdC5ib2R5fSBjb21wb25lbnRzPXtQb3N0Q29tcG9uZW50c30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF0ge1xuICAgICAgdGl0bGUsXG4gICAgICBcInVzZXJuYW1lXCI6IGF1dGhvci0+dXNlcm5hbWUsXG4gICAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+YXZhdGFyLFxuICAgICAgYm9keSxcbiAgICAgIG1haW5JbWFnZSwgXG4gICAgICBwdWJsaXNoZWRBdCwgXG4gICAgICBjYXRlZ29yaWVzXG59YDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoKFxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldENsaWVudChwcmV2aWV3KS5mZXRjaChxdWVyeSwgeyBzbHVnOiBwYXJhbXMuc2x1ZyB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiZ3JvcSIsIlBvcnRhYmxlVGV4dCIsInVybEZvciIsImdldENsaWVudCIsIk1vbWVudCIsInN0eWxlcyIsIlBvc3RDb21wb25lbnRzIiwidHlwZXMiLCJpbWFnZSIsInZhbHVlIiwiaW1nIiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiUG9zdCIsInBvc3QiLCJkaXYiLCJhcnRpY2xlIiwiaDEiLCJ0aXRsZSIsImgzIiwiZm9ybWF0IiwicHVibGlzaGVkQXQiLCJtYWluSW1hZ2UiLCJib2R5IiwiY29tcG9uZW50cyIsInF1ZXJ5IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwibWFwIiwic2x1ZyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmV2aWV3IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-moment");

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