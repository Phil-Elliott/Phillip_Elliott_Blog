/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/About.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/About.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".About_about-container__UBsoA {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.About_about-container__UBsoA {\\n  flex-direction: column;\\n}\\n\\n.About_about-container__UBsoA {\\n  margin: 0 auto;\\n  width: 50%;\\n  min-height: 70vh;\\n  padding-top: clamp(3rem, 5%, 5%);\\n  padding-bottom: clamp(3rem, 5%, 5%);\\n}\\n.About_about-container__UBsoA h1 {\\n  color: #66fcf1;\\n  padding-bottom: 5%;\\n  font-size: clamp(1.25rem, 1.75vw, 1.75vw);\\n}\\n.About_about-container__UBsoA h2 {\\n  font-size: clamp(1.5rem, 2.25vw, 2.25vw);\\n  padding-bottom: 4%;\\n}\\n.About_about-container__UBsoA p {\\n  color: #4e4e50;\\n  font-size: 1.15rem;\\n  font-weight: 400;\\n  line-height: 1.9rem;\\n  padding-bottom: 2.5rem;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .About_about-container__UBsoA {\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/About.module.scss\"],\"names\":[],\"mappings\":\"AAqCA;EACE,aAAA;EACA,mBAAA;ACpCF;;AD4DA;EAEE,sBAAA;AC1DF;;AALA;EACE,cAAA;EACA,UAAA;EAEA,gBAAA;EACA,gCAAA;EACA,mCAAA;AAOF;AALE;EACE,cDKO;ECJP,kBAAA;EACA,yCAAA;AAOJ;AALE;EACE,wCAAA;EACA,kBAAA;AAOJ;AALE;EACE,cDHU;ECIV,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;AAOJ;;AAHA;EACE;IACE,UAAA;EAMF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n\\n// Colors\\n// $primary: white;\\n// $secondary: black;\\n// $tertiary: #d91e18;\\n// $light-color: #555555;\\n\\n// $primary: white;\\n// $secondary: black;\\n// $tertiary: #c3073f;\\n// $light-color: #4e4e50;\\n\\n$primary: #1f2833;\\n$secondary: #0b0c10;\\n$tertiary: #66fcf1;\\n$light-color: #4e4e50;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n// $box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n// $box-shadow-light: rgba(0, 0, 0, 0.16) 0px 1px 4px;\\n// $grid-gap: 1rem;\\n// $content-padding: 1.25rem;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./Shared.scss\\\";\\n\\n.about-container {\\n  margin: 0 auto;\\n  width: 50%;\\n  @extend %flex-column;\\n  min-height: 70vh;\\n  padding-top: clamp(3rem, 5%, 5%);\\n  padding-bottom: clamp(3rem, 5%, 5%);\\n\\n  h1 {\\n    color: $tertiary;\\n    padding-bottom: 5%;\\n    font-size: clamp(1.25rem, 1.75vw, 1.75vw);\\n  }\\n  h2 {\\n    font-size: clamp(1.5rem, 2.25vw, 2.25vw);\\n    padding-bottom: 4%;\\n  }\\n  p {\\n    color: $light-color;\\n    font-size: 1.15rem;\\n    font-weight: 400;\\n    line-height: 1.9rem;\\n    padding-bottom: 2.5rem;\\n  }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .about-container {\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"about-container\": \"About_about-container__UBsoA\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9BYm91dC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EseUVBQXlFLGtCQUFrQix3QkFBd0IsR0FBRyxtQ0FBbUMsMkJBQTJCLEdBQUcsbUNBQW1DLG1CQUFtQixlQUFlLHFCQUFxQixxQ0FBcUMsd0NBQXdDLEdBQUcsb0NBQW9DLG1CQUFtQix1QkFBdUIsOENBQThDLEdBQUcsb0NBQW9DLDZDQUE2Qyx1QkFBdUIsR0FBRyxtQ0FBbUMsbUJBQW1CLHVCQUF1QixxQkFBcUIsd0JBQXdCLDJCQUEyQixHQUFHLGdEQUFnRCxtQ0FBbUMsaUJBQWlCLEtBQUssR0FBRyxPQUFPLHlIQUF5SCxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyw2SEFBNkgsdUJBQXVCLHdCQUF3QiwyQkFBMkIsdUJBQXVCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHNCQUFzQixzQkFBc0IscUJBQXFCLHdCQUF3QiwwQkFBMEIsMkRBQTJELGdDQUFnQyxxRUFBcUUsd0RBQXdELHFCQUFxQiwrQkFBK0IsMElBQTBJLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRywwQkFBMEIsMEJBQTBCLDJCQUEyQixHQUFHLGtCQUFrQiwwQkFBMEIsNEJBQTRCLEdBQUcsYUFBYSx3QkFBd0IsNEJBQTRCLEdBQUcsa0JBQWtCLHdCQUF3QiwyQkFBMkIsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyx5QkFBeUIseUJBQXlCLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsdUJBQXVCLGtCQUFrQixtQ0FBbUMsbUJBQW1CLEdBQUcsbUpBQW1KLHNCQUFzQixtQkFBbUIsZUFBZSx5QkFBeUIscUJBQXFCLHFDQUFxQyx3Q0FBd0MsVUFBVSx1QkFBdUIseUJBQXlCLGdEQUFnRCxLQUFLLFFBQVEsK0NBQStDLHlCQUF5QixLQUFLLE9BQU8sMEJBQTBCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLDZCQUE2QixLQUFLLEdBQUcsZ0RBQWdELHNCQUFzQixpQkFBaUIsS0FBSyxHQUFHLHFCQUFxQjtBQUNoakg7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvQWJvdXQubW9kdWxlLnNjc3M/MWFlMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFib3V0X2Fib3V0LWNvbnRhaW5lcl9fVUJzb0Ege1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5BYm91dF9hYm91dC1jb250YWluZXJfX1VCc29BIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5BYm91dF9hYm91dC1jb250YWluZXJfX1VCc29BIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICBwYWRkaW5nLXRvcDogY2xhbXAoM3JlbSwgNSUsIDUlKTtcXG4gIHBhZGRpbmctYm90dG9tOiBjbGFtcCgzcmVtLCA1JSwgNSUpO1xcbn1cXG4uQWJvdXRfYWJvdXQtY29udGFpbmVyX19VQnNvQSBoMSB7XFxuICBjb2xvcjogIzY2ZmNmMTtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbn1cXG4uQWJvdXRfYWJvdXQtY29udGFpbmVyX19VQnNvQSBoMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMi4yNXZ3LCAyLjI1dncpO1xcbiAgcGFkZGluZy1ib3R0b206IDQlO1xcbn1cXG4uQWJvdXRfYWJvdXQtY29udGFpbmVyX19VQnNvQSBwIHtcXG4gIGNvbG9yOiAjNGU0ZTUwO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjlyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLkFib3V0X2Fib3V0LWNvbnRhaW5lcl9fVUJzb0Ege1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1NoYXJlZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL0Fib3V0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ3BDRjs7QUQ0REE7RUFFRSxzQkFBQTtBQzFERjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1DQUFBO0FBT0Y7QUFMRTtFQUNFLGNES087RUNKUCxrQkFBQTtFQUNBLHlDQUFBO0FBT0o7QUFMRTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7QUFPSjtBQUxFO0VBQ0UsY0RIVTtFQ0lWLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBT0o7O0FBSEE7RUFDRTtJQUNFLFVBQUE7RUFNRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFZhcmlhYmxlc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4vLyBDb2xvcnNcXG4vLyAkcHJpbWFyeTogd2hpdGU7XFxuLy8gJHNlY29uZGFyeTogYmxhY2s7XFxuLy8gJHRlcnRpYXJ5OiAjZDkxZTE4O1xcbi8vICRsaWdodC1jb2xvcjogIzU1NTU1NTtcXG5cXG4vLyAkcHJpbWFyeTogd2hpdGU7XFxuLy8gJHNlY29uZGFyeTogYmxhY2s7XFxuLy8gJHRlcnRpYXJ5OiAjYzMwNzNmO1xcbi8vICRsaWdodC1jb2xvcjogIzRlNGU1MDtcXG5cXG4kcHJpbWFyeTogIzFmMjgzMztcXG4kc2Vjb25kYXJ5OiAjMGIwYzEwO1xcbiR0ZXJ0aWFyeTogIzY2ZmNmMTtcXG4kbGlnaHQtY29sb3I6ICM0ZTRlNTA7XFxuXFxuLy8gV2lkdGhcXG4kd2lkdGg6IDgwJTtcXG5cXG4vLyBUcmFuc2l0aW9uXFxuJHRyYW5zaXN0aW9uLWVhc2U6IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbi8vIEdyaWQtZ2FwXFxuJGdyaWQtZ2FwOiAxMCU7XFxuXFxuLy8gb3RoZXIgc3R1ZmZcXG4vLyAkYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuLy8gJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuLy8gJGdyaWQtZ2FwOiAxcmVtO1xcbi8vICRjb250ZW50LXBhZGRpbmc6IDEuMjVyZW07XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBQbGFjZWhvbGRlcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiVmbGV4LWFsaWduIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuLWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVjZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNvbHVtbi1qdXN0aWZ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbi1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJW1haW4td2lkdGgge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4lZ3JpZC10d28tY29sdW1ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAkZ3JpZC1nYXA7XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gTWl4aW5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblwiLFwiQGltcG9ydCBcXFwiLi9TaGFyZWQuc2Nzc1xcXCI7XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA1MCU7XFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICBwYWRkaW5nLXRvcDogY2xhbXAoM3JlbSwgNSUsIDUlKTtcXG4gIHBhZGRpbmctYm90dG9tOiBjbGFtcCgzcmVtLCA1JSwgNSUpO1xcblxcbiAgaDEge1xcbiAgICBjb2xvcjogJHRlcnRpYXJ5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMi4yNXZ3LCAyLjI1dncpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNCU7XFxuICB9XFxuICBwIHtcXG4gICAgY29sb3I6ICRsaWdodC1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS45cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImFib3V0LWNvbnRhaW5lclwiOiBcIkFib3V0X2Fib3V0LWNvbnRhaW5lcl9fVUJzb0FcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/About.module.scss\n"));

/***/ })

});