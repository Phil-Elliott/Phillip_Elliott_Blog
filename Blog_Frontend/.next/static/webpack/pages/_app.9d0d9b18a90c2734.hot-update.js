/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/Header/HeaderRight.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/Header/HeaderRight.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HeaderRight_header-right-container__rWZ_Y {\\n  display: flex;\\n  align-items: center;\\n}\\n.HeaderRight_header-right-container__rWZ_Y button {\\n  background-color: #f0f0f0;\\n  border: none;\\n  border-radius: 3px;\\n  color: #0a192f;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  padding: 0.5rem 1rem;\\n  transition: all 0.5s ease-in-out;\\n}\\n.HeaderRight_header-right-container__rWZ_Y button:hover {\\n  cursor: pointer;\\n  background-color: #007a5c;\\n  color: #f0f0f0;\\n}\\n.HeaderRight_header-right-container__rWZ_Y .HeaderRight_searchIcon__GimvS {\\n  color: #f0f0f0;\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  margin-left: 1.5rem;\\n}\\n.HeaderRight_header-right-container__rWZ_Y .HeaderRight_searchIcon__GimvS:hover {\\n  color: white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/layout/Header/HeaderRight.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,mBAAA;AADF;AAGE;EACE,yBCJM;EDKN,YAAA;EACA,kBCqCY;EDpCZ,cCJQ;EDKR,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCCgBe;ADjBnB;AAII;EACE,eAAA;EACA,yBAAA;EAEA,cClBI;ADeV;AAOE;EACE,cCvBM;EDwBN,eAAA;EACA,iBAAA;EACA,mBAAA;AALJ;AAOI;EACE,YAAA;AALN\",\"sourcesContent\":[\"@use \\\"../../abstracts\\\" as *;\\n\\n.header-right-container {\\n  display: flex;\\n  align-items: center;\\n\\n  button {\\n    background-color: $primary;\\n    border: none;\\n    border-radius: $border-radius;\\n    color: $secondary;\\n    font-size: 1rem;\\n    font-weight: 500;\\n    padding: 0.5rem 1rem;\\n    transition: $transistion-ease;\\n    // box-shadow: $box-shadow-light;\\n\\n    &:hover {\\n      cursor: pointer;\\n      background-color: #007a5c;\\n      // background-color: $secondary;\\n      color: $primary;\\n      // box-shadow: $box-shadow;\\n    }\\n  }\\n  .searchIcon {\\n    color: $primary;\\n    cursor: pointer;\\n    font-size: 1.5rem;\\n    margin-left: 1.5rem;\\n\\n    &:hover {\\n      color: white;\\n    }\\n  }\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #f0f0f0;\\n// $secondary: #302f2b;\\n// $tertiary: #d05a49;\\n$secondary: #0a192f;\\n$tertiary: #0a192f;\\n// $tertiary: blue;\\n$light-color: #333333;\\n$border-color: #807e72;\\n\\n// #0A192F\\n// #007A5C\\n// #3D3D3D\\n\\n// #0a192f\\n// #64ffda\\n//#8892b0\\n\\n// #292929\\n\\n//==================================================\\n// Width\\n//==================================================\\n$width: 80%;\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Grid-gap\\n//==================================================\\n$grid-gap: 10%;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header-right-container\": \"HeaderRight_header-right-container__rWZ_Y\",\n\t\"searchIcon\": \"HeaderRight_searchIcon__GimvS\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvSGVhZGVyL0hlYWRlclJpZ2h0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSxzRkFBc0Ysa0JBQWtCLHdCQUF3QixHQUFHLHFEQUFxRCw4QkFBOEIsaUJBQWlCLHVCQUF1QixtQkFBbUIsb0JBQW9CLHFCQUFxQix5QkFBeUIscUNBQXFDLEdBQUcsMkRBQTJELG9CQUFvQiw4QkFBOEIsbUJBQW1CLEdBQUcsNkVBQTZFLG1CQUFtQixvQkFBb0Isc0JBQXNCLHdCQUF3QixHQUFHLG1GQUFtRixpQkFBaUIsR0FBRyxPQUFPLDBKQUEwSixVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsdURBQXVELDZCQUE2QixrQkFBa0Isd0JBQXdCLGNBQWMsaUNBQWlDLG1CQUFtQixvQ0FBb0Msd0JBQXdCLHNCQUFzQix1QkFBdUIsMkJBQTJCLG9DQUFvQyx1Q0FBdUMsaUJBQWlCLHdCQUF3QixrQ0FBa0Msd0NBQXdDLHdCQUF3QixtQ0FBbUMsT0FBTyxLQUFLLGlCQUFpQixzQkFBc0Isc0JBQXNCLHdCQUF3QiwwQkFBMEIsaUJBQWlCLHFCQUFxQixPQUFPLEtBQUssR0FBRyw4SUFBOEkseUJBQXlCLHdCQUF3QixzQkFBc0IscUJBQXFCLHFCQUFxQix3QkFBd0IseUJBQXlCLCtOQUErTix1S0FBdUssNElBQTRJLDhLQUE4SyxxREFBcUQsc0pBQXNKLGtKQUFrSjtBQUNsdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9sYXlvdXQvSGVhZGVyL0hlYWRlclJpZ2h0Lm1vZHVsZS5zY3NzPzk1OTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5IZWFkZXJSaWdodF9oZWFkZXItcmlnaHQtY29udGFpbmVyX19yV1pfWSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLkhlYWRlclJpZ2h0X2hlYWRlci1yaWdodC1jb250YWluZXJfX3JXWl9ZIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICMwYTE5MmY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuLkhlYWRlclJpZ2h0X2hlYWRlci1yaWdodC1jb250YWluZXJfX3JXWl9ZIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YTVjO1xcbiAgY29sb3I6ICNmMGYwZjA7XFxufVxcbi5IZWFkZXJSaWdodF9oZWFkZXItcmlnaHQtY29udGFpbmVyX19yV1pfWSAuSGVhZGVyUmlnaHRfc2VhcmNoSWNvbl9fR2ltdlMge1xcbiAgY29sb3I6ICNmMGYwZjA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcbi5IZWFkZXJSaWdodF9oZWFkZXItcmlnaHQtY29udGFpbmVyX19yV1pfWSAuSGVhZGVyUmlnaHRfc2VhcmNoSWNvbl9fR2ltdlM6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2xheW91dC9IZWFkZXIvSGVhZGVyUmlnaHQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSx5QkNKTTtFREtOLFlBQUE7RUFDQSxrQkNxQ1k7RURwQ1osY0NKUTtFREtSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NDZ0JlO0FEakJuQjtBQUlJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBRUEsY0NsQkk7QURlVjtBQU9FO0VBQ0UsY0N2Qk07RUR3Qk4sZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsWUFBQTtBQUxOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2Fic3RyYWN0c1xcXCIgYXMgKjtcXG5cXG4uaGVhZGVyLXJpZ2h0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBjb2xvcjogJHNlY29uZGFyeTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXN0aW9uLWVhc2U7XFxuICAgIC8vIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWxpZ2h0O1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2E1YztcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICAvLyBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgfVxcbiAgfVxcbiAgLnNlYXJjaEljb24ge1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBDb2xvcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHByaW1hcnk6ICNmMGYwZjA7XFxuLy8gJHNlY29uZGFyeTogIzMwMmYyYjtcXG4vLyAkdGVydGlhcnk6ICNkMDVhNDk7XFxuJHNlY29uZGFyeTogIzBhMTkyZjtcXG4kdGVydGlhcnk6ICMwYTE5MmY7XFxuLy8gJHRlcnRpYXJ5OiBibHVlO1xcbiRsaWdodC1jb2xvcjogIzMzMzMzMztcXG4kYm9yZGVyLWNvbG9yOiAjODA3ZTcyO1xcblxcbi8vICMwQTE5MkZcXG4vLyAjMDA3QTVDXFxuLy8gIzNEM0QzRFxcblxcbi8vICMwYTE5MmZcXG4vLyAjNjRmZmRhXFxuLy8jODg5MmIwXFxuXFxuLy8gIzI5MjkyOVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kd2lkdGg6IDgwJTtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEdyaWQtZ2FwXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBCb3ggU2hhZG93c1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXItcmlnaHQtY29udGFpbmVyXCI6IFwiSGVhZGVyUmlnaHRfaGVhZGVyLXJpZ2h0LWNvbnRhaW5lcl9fcldaX1lcIixcblx0XCJzZWFyY2hJY29uXCI6IFwiSGVhZGVyUmlnaHRfc2VhcmNoSWNvbl9fR2ltdlNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/Header/HeaderRight.module.scss\n"));

/***/ })

});