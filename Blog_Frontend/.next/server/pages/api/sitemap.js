"use strict";
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
exports.id = "pages/api/sitemap";
exports.ids = ["pages/api/sitemap"];
exports.modules = {

/***/ "(api)/./pages/api/sitemap.js":
/*!******************************!*\
  !*** ./pages/api/sitemap.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    res.statusCode = 200;\n    res.setHeader(\"Content-Type\", \"text/xml\");\n    // Instructing the Vercel edge to cache the file\n    res.setHeader(\"Cache-control\", \"stale-while-revalidate, s-maxage=3600\");\n    // generate sitemap here\n    const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n      <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"> \n      <url>\n        <loc>https://www.philelliottblog.com</loc>\n        <lastmod>2021-01-01</lastmod>\n      </url>\n      </urlset>`;\n    res.end(xml);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2l0ZW1hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0EsR0FBRyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JCRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFMUMsZ0RBQWdEO0lBQ2hERixHQUFHLENBQUNFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsdUNBQXVDLENBQUMsQ0FBQztJQUV4RSx3QkFBd0I7SUFDeEIsTUFBTUMsR0FBRyxHQUFHLENBQUM7Ozs7OztlQU1BLENBQUM7SUFFZEgsR0FBRyxDQUFDSSxHQUFHLENBQUNELEdBQUcsQ0FBQyxDQUFDO0NBQ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGlsbGlwX0VsbGlvdHRfQmxvZy8uL3BhZ2VzL2FwaS9zaXRlbWFwLmpzP2YwNTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQveG1sXCIpO1xuXG4gIC8vIEluc3RydWN0aW5nIHRoZSBWZXJjZWwgZWRnZSB0byBjYWNoZSB0aGUgZmlsZVxuICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtY29udHJvbFwiLCBcInN0YWxlLXdoaWxlLXJldmFsaWRhdGUsIHMtbWF4YWdlPTM2MDBcIik7XG5cbiAgLy8gZ2VuZXJhdGUgc2l0ZW1hcCBoZXJlXG4gIGNvbnN0IHhtbCA9IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbiAgICAgIDx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+IFxuICAgICAgPHVybD5cbiAgICAgICAgPGxvYz5odHRwczovL3d3dy5waGlsZWxsaW90dGJsb2cuY29tPC9sb2M+XG4gICAgICAgIDxsYXN0bW9kPjIwMjEtMDEtMDE8L2xhc3Rtb2Q+XG4gICAgICA8L3VybD5cbiAgICAgIDwvdXJsc2V0PmA7XG5cbiAgcmVzLmVuZCh4bWwpO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwieG1sIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/sitemap.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sitemap.js"));
module.exports = __webpack_exports__;

})();