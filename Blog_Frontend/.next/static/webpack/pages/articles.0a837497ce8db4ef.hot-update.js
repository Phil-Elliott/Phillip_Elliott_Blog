/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Articles_main-articles-container__Dibr5 {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Articles_main-articles-container__Dibr5 {\\n  padding-block: 15vh 5vh;\\n}\\n.Articles_main-articles-container__Dibr5 .Articles_main-articles-container-header__RpEBZ {\\n  color: #d05a49;\\n  padding-bottom: 5%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n}\\n\\n.Articles_main-articles-filter-container__CzrSz {\\n  background-color: #d05a49;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 5%;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .Articles_main-articles-container__Dibr5 {\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Articles.module.scss\"],\"names\":[],\"mappings\":\"AAqEA;EACE,UA1DM;EA2DN,cAAA;ACpEF;;AADA;EAEE,uBAAA;AAGF;AADE;EACE,cAAA;EACA,kBAAA;EACA,wCAAA;AAGJ;;AACA;EACE,yBDPS;ECQT,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,sCAAA;AAEF;;AACA;EACE;IAEE,UAAA;EACF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f0f0f0;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./Shared.scss\\\";\\n\\n.main-articles-container {\\n  @extend %main-width;\\n  padding-block: 15vh 5vh;\\n\\n  .main-articles-container-header {\\n    color: $tertiary;\\n    padding-bottom: 5%;\\n    font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  }\\n}\\n\\n.main-articles-filter-container {\\n  background-color: $tertiary;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 5%;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main-articles-container {\\n    // padding-block: 15vh 5vh;\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main-articles-container\": \"Articles_main-articles-container__Dibr5\",\n\t\"main-articles-container-header\": \"Articles_main-articles-container-header__RpEBZ\",\n\t\"main-articles-filter-container\": \"Articles_main-articles-filter-container__CzrSz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLGVBQWUsbUJBQW1CLEdBQUcsOENBQThDLDRCQUE0QixHQUFHLDRGQUE0RixtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHFEQUFxRCw4QkFBOEIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLGdCQUFnQiwyQ0FBMkMsR0FBRyxnREFBZ0QsOENBQThDLGlCQUFpQixLQUFLLEdBQUcsT0FBTyw0SEFBNEgsV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssK0dBQStHLHVCQUF1QixzQkFBc0IsdUNBQXVDLHdCQUF3QixxQkFBcUIsd0JBQXdCLHlCQUF5QiwwQkFBMEIsMkRBQTJELGdDQUFnQyxrRUFBa0UscURBQXFELDBJQUEwSSxrQkFBa0Isd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMEJBQTBCLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0IsMEJBQTBCLDRCQUE0QixHQUFHLGFBQWEsd0JBQXdCLDRCQUE0QixHQUFHLGtCQUFrQix3QkFBd0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLHlCQUF5Qiw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLG1CQUFtQixHQUFHLG1KQUFtSiw4QkFBOEIsd0JBQXdCLDRCQUE0Qix1Q0FBdUMsdUJBQXVCLHlCQUF5QiwrQ0FBK0MsS0FBSyxHQUFHLHFDQUFxQyxnQ0FBZ0Msa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLGdCQUFnQiwyQ0FBMkMsR0FBRyxnREFBZ0QsOEJBQThCLGlDQUFpQyxpQkFBaUIsS0FBSyxHQUFHLHFCQUFxQjtBQUM5c0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzPzQ3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1jb250YWluZXJfX0RpYnI1IHtcXG4gIHBhZGRpbmctYmxvY2s6IDE1dmggNXZoO1xcbn1cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1jb250YWluZXJfX0RpYnI1IC5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJfX1JwRUJaIHtcXG4gIGNvbG9yOiAjZDA1YTQ5O1xcbiAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG59XFxuXFxuLkFydGljbGVzX21haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lcl9fQ3pyU3oge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNWE0OTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyX19EaWJyNSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU2hhcmVkLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBcUVBO0VBQ0UsVUExRE07RUEyRE4sY0FBQTtBQ3BFRjs7QUFEQTtFQUVFLHVCQUFBO0FBR0Y7QUFERTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBR0o7O0FBQ0E7RUFDRSx5QkRQUztFQ1FULGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUFFRjs7QUFDQTtFQUNFO0lBRUUsVUFBQTtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gVmFyaWFibGVzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjZjBmMGYwO1xcbi8vICRwcmltYXJ5OiAjZjNkZmMxO1xcbiRzZWNvbmRhcnk6ICMzMDJmMmI7XFxuLy8gJHRlcnRpYXJ5OiByZ2JhKDE5OSwgNTcsIDQzLCAwLjgpO1xcbi8vICR0ZXJ0aWFyeTogI2RhNTY0YTtcXG4kdGVydGlhcnk6ICNkMDVhNDk7XFxuJGxpZ2h0LWNvbG9yOiAjMzAyZjJiO1xcbiRib3JkZXItY29sb3I6ICMzMDJmMmI7XFxuXFxuLy8gV2lkdGhcXG4kd2lkdGg6IDgwJTtcXG5cXG4vLyBUcmFuc2l0aW9uXFxuJHRyYW5zaXN0aW9uLWVhc2U6IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbi8vIEdyaWQtZ2FwXFxuJGdyaWQtZ2FwOiAxMCU7XFxuXFxuLy8gb3RoZXIgc3R1ZmZcXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBQbGFjZWhvbGRlcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiVmbGV4LWFsaWduIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuLWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVjZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNvbHVtbi1qdXN0aWZ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbi1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJW1haW4td2lkdGgge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4lZ3JpZC10d28tY29sdW1ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAkZ3JpZC1nYXA7XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gTWl4aW5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblwiLFwiQGltcG9ydCBcXFwiLi9TaGFyZWQuc2Nzc1xcXCI7XFxuXFxuLm1haW4tYXJ0aWNsZXMtY29udGFpbmVyIHtcXG4gIEBleHRlbmQgJW1haW4td2lkdGg7XFxuICBwYWRkaW5nLWJsb2NrOiAxNXZoIDV2aDtcXG5cXG4gIC5tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXIge1xcbiAgICBjb2xvcjogJHRlcnRpYXJ5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjc1dncsIDEuNzV2dyk7XFxuICB9XFxufVxcblxcbi5tYWluLWFydGljbGVzLWZpbHRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1hcnRpY2xlcy1jb250YWluZXIge1xcbiAgICAvLyBwYWRkaW5nLWJsb2NrOiAxNXZoIDV2aDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbi1hcnRpY2xlcy1jb250YWluZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjVcIixcblx0XCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJfX1JwRUJaXCIsXG5cdFwibWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyXCI6IFwiQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyX19DenJTelwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss\n"));

/***/ })

});