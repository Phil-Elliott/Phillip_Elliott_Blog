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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Articles_main-articles-container__Dibr5 {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Articles_main-articles-container__Dibr5 {\\n  padding-block: 15vh 5vh;\\n}\\n.Articles_main-articles-container__Dibr5 .Articles_main-articles-container-header__RpEBZ {\\n  color: #d05a49;\\n  padding-bottom: 3%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n}\\n\\n.Articles_main-articles-filter-container__CzrSz {\\n  background-color: #302f2b;\\n  border-radius: 10px;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: #f0f0f0;\\n}\\n.Articles_main-articles-filter-container__CzrSz select {\\n  background-color: black;\\n  border: none;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  color: #f0f0f0;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  padding: 0.5rem 1rem;\\n  border-radius: 10px;\\n  outline: none;\\n  width: 100%;\\n  border-right: 16px solid transparent;\\n  cursor: pointer;\\n}\\n@media only screen and (max-width: 1000px) {\\n  .Articles_main-articles-container__Dibr5 {\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Articles.module.scss\"],\"names\":[],\"mappings\":\"AAqEA;EACE,UA1DM;EA2DN,cAAA;ACpEF;;AADA;EAEE,uBAAA;AAGF;AADE;EACE,cAAA;EACA,kBAAA;EACA,wCAAA;AAGJ;;AACA;EACE,yBDVU;ECWV,mBAAA;EACA,4CDKW;ECJX,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sCAAA;EACA,cDrBQ;ACuBV;AAAE;EACE,uBAAA;EACA,YAAA;EACA,4CDPS;ECST,cD5BM;EC6BN,sCAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AACJ;AAMA;EACE;IAEE,UAAA;EALF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f0f0f0;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./Shared.scss\\\";\\n\\n.main-articles-container {\\n  @extend %main-width;\\n  padding-block: 15vh 5vh;\\n\\n  .main-articles-container-header {\\n    color: $tertiary;\\n    padding-bottom: 3%;\\n    font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  }\\n}\\n\\n.main-articles-filter-container {\\n  background-color: $secondary;\\n  border-radius: 10px;\\n  box-shadow: $box-shadow;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: $primary;\\n\\n  select {\\n    background-color: black;\\n    border: none;\\n    box-shadow: $box-shadow;\\n    // color: $secondary;\\n    color: $primary;\\n    font-size: clamp(1rem, 1.25vw, 1.25vw);\\n    padding: 0.5rem 1rem;\\n    border-radius: 10px;\\n    outline: none;\\n    width: 100%;\\n    border-right: 16px solid transparent;\\n    cursor: pointer;\\n\\n    option {\\n    }\\n  }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main-articles-container {\\n    // padding-block: 15vh 5vh;\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main-articles-container\": \"Articles_main-articles-container__Dibr5\",\n\t\"main-articles-container-header\": \"Articles_main-articles-container-header__RpEBZ\",\n\t\"main-articles-filter-container\": \"Articles_main-articles-filter-container__CzrSz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLGVBQWUsbUJBQW1CLEdBQUcsOENBQThDLDRCQUE0QixHQUFHLDRGQUE0RixtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHFEQUFxRCw4QkFBOEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IseUJBQXlCLDJDQUEyQyxtQkFBbUIsR0FBRywwREFBMEQsNEJBQTRCLGlCQUFpQixpREFBaUQsbUJBQW1CLDJDQUEyQyx5QkFBeUIsd0JBQXdCLGtCQUFrQixnQkFBZ0IseUNBQXlDLG9CQUFvQixHQUFHLDhDQUE4Qyw4Q0FBOEMsaUJBQWlCLEtBQUssR0FBRyxPQUFPLDRIQUE0SCxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLCtHQUErRyx1QkFBdUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDJEQUEyRCxnQ0FBZ0Msa0VBQWtFLHFEQUFxRCwwSUFBMEksa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDBCQUEwQiwwQkFBMEIsMkJBQTJCLEdBQUcsa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyxhQUFhLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isd0JBQXdCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxtQkFBbUIsR0FBRyxtSkFBbUosOEJBQThCLHdCQUF3Qiw0QkFBNEIsdUNBQXVDLHVCQUF1Qix5QkFBeUIsK0NBQStDLEtBQUssR0FBRyxxQ0FBcUMsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHlCQUF5QiwyQ0FBMkMsb0JBQW9CLGNBQWMsOEJBQThCLG1CQUFtQiw4QkFBOEIsMkJBQTJCLHNCQUFzQiw2Q0FBNkMsMkJBQTJCLDBCQUEwQixvQkFBb0Isa0JBQWtCLDJDQUEyQyxzQkFBc0IsZ0JBQWdCLE9BQU8sS0FBSyxHQUFHLGdEQUFnRCw4QkFBOEIsaUNBQWlDLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQ2p3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3M/NDcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyX19EaWJyNSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUge1xcbiAgcGFkZGluZy1ibG9jazogMTV2aCA1dmg7XFxufVxcbi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUgLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlcl9fUnBFQloge1xcbiAgY29sb3I6ICNkMDVhNDk7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbn1cXG5cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyX19DenJTeiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAyZjJiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBjb2xvcjogI2YwZjBmMDtcXG59XFxuLkFydGljbGVzX21haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lcl9fQ3pyU3ogc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICBjb2xvcjogI2YwZjBmMDtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyX19EaWJyNSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU2hhcmVkLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBcUVBO0VBQ0UsVUExRE07RUEyRE4sY0FBQTtBQ3BFRjs7QUFEQTtFQUVFLHVCQUFBO0FBR0Y7QUFERTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBR0o7O0FBQ0E7RUFDRSx5QkRWVTtFQ1dWLG1CQUFBO0VBQ0EsNENES1c7RUNKWCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGNEckJRO0FDdUJWO0FBQUU7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0RQUztFQ1NULGNENUJNO0VDNkJOLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBQ0o7QUFNQTtFQUNFO0lBRUUsVUFBQTtFQUxGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gVmFyaWFibGVzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjZjBmMGYwO1xcbi8vICRwcmltYXJ5OiAjZjNkZmMxO1xcbiRzZWNvbmRhcnk6ICMzMDJmMmI7XFxuLy8gJHRlcnRpYXJ5OiByZ2JhKDE5OSwgNTcsIDQzLCAwLjgpO1xcbi8vICR0ZXJ0aWFyeTogI2RhNTY0YTtcXG4kdGVydGlhcnk6ICNkMDVhNDk7XFxuJGxpZ2h0LWNvbG9yOiAjMzAyZjJiO1xcbiRib3JkZXItY29sb3I6ICMzMDJmMmI7XFxuXFxuLy8gV2lkdGhcXG4kd2lkdGg6IDgwJTtcXG5cXG4vLyBUcmFuc2l0aW9uXFxuJHRyYW5zaXN0aW9uLWVhc2U6IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbi8vIEdyaWQtZ2FwXFxuJGdyaWQtZ2FwOiAxMCU7XFxuXFxuLy8gb3RoZXIgc3R1ZmZcXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBQbGFjZWhvbGRlcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiVmbGV4LWFsaWduIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuLWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVjZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNvbHVtbi1qdXN0aWZ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbi1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJW1haW4td2lkdGgge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4lZ3JpZC10d28tY29sdW1ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAkZ3JpZC1nYXA7XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gTWl4aW5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblwiLFwiQGltcG9ydCBcXFwiLi9TaGFyZWQuc2Nzc1xcXCI7XFxuXFxuLm1haW4tYXJ0aWNsZXMtY29udGFpbmVyIHtcXG4gIEBleHRlbmQgJW1haW4td2lkdGg7XFxuICBwYWRkaW5nLWJsb2NrOiAxNXZoIDV2aDtcXG5cXG4gIC5tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXIge1xcbiAgICBjb2xvcjogJHRlcnRpYXJ5O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjc1dncsIDEuNzV2dyk7XFxuICB9XFxufVxcblxcbi5tYWluLWFydGljbGVzLWZpbHRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgY29sb3I6ICRwcmltYXJ5O1xcblxcbiAgc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIC8vIGNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yaWdodDogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBvcHRpb24ge1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1hcnRpY2xlcy1jb250YWluZXIge1xcbiAgICAvLyBwYWRkaW5nLWJsb2NrOiAxNXZoIDV2aDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbi1hcnRpY2xlcy1jb250YWluZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjVcIixcblx0XCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJfX1JwRUJaXCIsXG5cdFwibWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyXCI6IFwiQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyX19DenJTelwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss\n"));

/***/ })

});