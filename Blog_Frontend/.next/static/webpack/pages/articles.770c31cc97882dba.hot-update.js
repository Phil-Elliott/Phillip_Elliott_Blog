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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Articles_main-articles-container__Dibr5 {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Articles_main-articles-container__Dibr5 {\\n  padding-block: 15vh 5vh;\\n}\\n.Articles_main-articles-container__Dibr5 .Articles_main-articles-container-header__RpEBZ {\\n  color: #d05a49;\\n  padding-bottom: 3%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n}\\n\\n.Articles_main-articles-filter-container__CzrSz {\\n  background-color: #d05a49;\\n  border-radius: 10px;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: #f0f0f0;\\n}\\n\\n.Articles_filter-container-categories__HPCpn select {\\n  background-color: #f0f0f0;\\n  border: none;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  color: #f0f0f0;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  padding: 0.5rem 1rem;\\n  border-radius: 10px;\\n  outline: none;\\n  width: 100%;\\n  border-right: 16px solid transparent;\\n  cursor: pointer;\\n}\\n@media only screen and (max-width: 1000px) {\\n  .Articles_main-articles-container__Dibr5 {\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Articles.module.scss\"],\"names\":[],\"mappings\":\"AAqEA;EACE,UA1DM;EA2DN,cAAA;ACpEF;;AADA;EAEE,uBAAA;AAGF;AADE;EACE,cAAA;EACA,kBAAA;EACA,wCAAA;AAGJ;;AACA;EACE,yBDPS;ECQT,mBAAA;EACA,4CDKW;ECJX,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sCAAA;EACA,cDrBQ;ACuBV;;AAEE;EACE,yBD1BM;EC4BN,YAAA;EACA,4CDVS;ECYT,cD/BM;ECiCN,sCAAA;EACA,oBAAA;EACA,mBAAA;EACA,aAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AAFJ;AAWA;EACE;IAEE,UAAA;EAVF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f0f0f0;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./Shared.scss\\\";\\n\\n.main-articles-container {\\n  @extend %main-width;\\n  padding-block: 15vh 5vh;\\n\\n  .main-articles-container-header {\\n    color: $tertiary;\\n    padding-bottom: 3%;\\n    font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  }\\n}\\n\\n.main-articles-filter-container {\\n  background-color: $tertiary;\\n  border-radius: 10px;\\n  box-shadow: $box-shadow;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: $primary;\\n}\\n\\n.filter-container-categories {\\n  select {\\n    background-color: $primary;\\n    // background-color: $secondary;\\n    border: none;\\n    box-shadow: $box-shadow;\\n\\n    color: $primary;\\n    // color: $secondary;\\n    font-size: clamp(1rem, 1.25vw, 1.25vw);\\n    padding: 0.5rem 1rem;\\n    border-radius: 10px;\\n    outline: none;\\n    width: 100%;\\n    border-right: 16px solid transparent;\\n    cursor: pointer;\\n\\n    option {\\n      &:hover {\\n      }\\n    }\\n  }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main-articles-container {\\n    // padding-block: 15vh 5vh;\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main-articles-container\": \"Articles_main-articles-container__Dibr5\",\n\t\"main-articles-container-header\": \"Articles_main-articles-container-header__RpEBZ\",\n\t\"main-articles-filter-container\": \"Articles_main-articles-filter-container__CzrSz\",\n\t\"filter-container-categories\": \"Articles_filter-container-categories__HPCpn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLGVBQWUsbUJBQW1CLEdBQUcsOENBQThDLDRCQUE0QixHQUFHLDRGQUE0RixtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHFEQUFxRCw4QkFBOEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IseUJBQXlCLDJDQUEyQyxtQkFBbUIsR0FBRyx5REFBeUQsOEJBQThCLGlCQUFpQixpREFBaUQsbUJBQW1CLDJDQUEyQyx5QkFBeUIsd0JBQXdCLGtCQUFrQixnQkFBZ0IseUNBQXlDLG9CQUFvQixHQUFHLDhDQUE4Qyw4Q0FBOEMsaUJBQWlCLEtBQUssR0FBRyxPQUFPLDRIQUE0SCxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLCtHQUErRyx1QkFBdUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDJEQUEyRCxnQ0FBZ0Msa0VBQWtFLHFEQUFxRCwwSUFBMEksa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDBCQUEwQiwwQkFBMEIsMkJBQTJCLEdBQUcsa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyxhQUFhLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isd0JBQXdCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxtQkFBbUIsR0FBRyxtSkFBbUosOEJBQThCLHdCQUF3Qiw0QkFBNEIsdUNBQXVDLHVCQUF1Qix5QkFBeUIsK0NBQStDLEtBQUssR0FBRyxxQ0FBcUMsZ0NBQWdDLHdCQUF3Qiw0QkFBNEIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHlCQUF5QiwyQ0FBMkMsb0JBQW9CLEdBQUcsa0NBQWtDLFlBQVksaUNBQWlDLHNDQUFzQyxtQkFBbUIsOEJBQThCLHdCQUF3QiwyQkFBMkIsNkNBQTZDLDJCQUEyQiwwQkFBMEIsb0JBQW9CLGtCQUFrQiwyQ0FBMkMsc0JBQXNCLGdCQUFnQixpQkFBaUIsU0FBUyxPQUFPLEtBQUssR0FBRyxnREFBZ0QsOEJBQThCLGlDQUFpQyxpQkFBaUIsS0FBSyxHQUFHLHFCQUFxQjtBQUM1Mkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvQXJ0aWNsZXMubW9kdWxlLnNjc3M/NDcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyX19EaWJyNSB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUge1xcbiAgcGFkZGluZy1ibG9jazogMTV2aCA1dmg7XFxufVxcbi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUgLkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlcl9fUnBFQloge1xcbiAgY29sb3I6ICNkMDVhNDk7XFxuICBwYWRkaW5nLWJvdHRvbTogMyU7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbn1cXG5cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyX19DenJTeiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA1YTQ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBjb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLkFydGljbGVzX2ZpbHRlci1jb250YWluZXItY2F0ZWdvcmllc19fSFBDcG4gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIGNvbG9yOiAjZjBmMGYwO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1jb250YWluZXJfX0RpYnI1IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9TaGFyZWQuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFxRUE7RUFDRSxVQTFETTtFQTJETixjQUFBO0FDcEVGOztBQURBO0VBRUUsdUJBQUE7QUFHRjtBQURFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFHSjs7QUFDQTtFQUNFLHlCRFBTO0VDUVQsbUJBQUE7RUFDQSw0Q0RLVztFQ0pYLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0RyQlE7QUN1QlY7O0FBRUU7RUFDRSx5QkQxQk07RUM0Qk4sWUFBQTtFQUNBLDRDRFZTO0VDWVQsY0QvQk07RUNpQ04sc0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFGSjtBQVdBO0VBQ0U7SUFFRSxVQUFBO0VBVkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBWYXJpYWJsZXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHByaW1hcnk6ICNmMGYwZjA7XFxuLy8gJHByaW1hcnk6ICNmM2RmYzE7XFxuJHNlY29uZGFyeTogIzMwMmYyYjtcXG4vLyAkdGVydGlhcnk6IHJnYmEoMTk5LCA1NywgNDMsIDAuOCk7XFxuLy8gJHRlcnRpYXJ5OiAjZGE1NjRhO1xcbiR0ZXJ0aWFyeTogI2QwNWE0OTtcXG4kbGlnaHQtY29sb3I6ICMzMDJmMmI7XFxuJGJvcmRlci1jb2xvcjogIzMwMmYyYjtcXG5cXG4vLyBXaWR0aFxcbiR3aWR0aDogODAlO1xcblxcbi8vIFRyYW5zaXRpb25cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy8gR3JpZC1nYXBcXG4kZ3JpZC1nYXA6IDEwJTtcXG5cXG4vLyBvdGhlciBzdHVmZlxcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4kYm94LXNoYWRvdy1saWdodDogcmdiYSgwLCAwLCAwLCAwLjI2KSAwcHggMnB4IDZweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIFBsYWNlaG9sZGVyc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJWZsZXgtYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiVmbGV4LWJldHdlZW4tY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWp1c3RpZnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lbWFpbi13aWR0aCB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiVncmlkLXR3by1jb2x1bW5zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6ICRncmlkLWdhcDtcXG59XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBNaXhpblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXCIsXCJAaW1wb3J0IFxcXCIuL1NoYXJlZC5zY3NzXFxcIjtcXG5cXG4ubWFpbi1hcnRpY2xlcy1jb250YWluZXIge1xcbiAgQGV4dGVuZCAlbWFpbi13aWR0aDtcXG4gIHBhZGRpbmctYmxvY2s6IDE1dmggNXZoO1xcblxcbiAgLm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkdGVydGlhcnk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG4gIH1cXG59XFxuXFxuLm1haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIGNvbG9yOiAkcHJpbWFyeTtcXG59XFxuXFxuLmZpbHRlci1jb250YWluZXItY2F0ZWdvcmllcyB7XFxuICBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG5cXG4gICAgY29sb3I6ICRwcmltYXJ5O1xcbiAgICAvLyBjb2xvcjogJHNlY29uZGFyeTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIG9wdGlvbiB7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAubWFpbi1hcnRpY2xlcy1jb250YWluZXIge1xcbiAgICAvLyBwYWRkaW5nLWJsb2NrOiAxNXZoIDV2aDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbi1hcnRpY2xlcy1jb250YWluZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjVcIixcblx0XCJtYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJfX1JwRUJaXCIsXG5cdFwibWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyXCI6IFwiQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1maWx0ZXItY29udGFpbmVyX19DenJTelwiLFxuXHRcImZpbHRlci1jb250YWluZXItY2F0ZWdvcmllc1wiOiBcIkFydGljbGVzX2ZpbHRlci1jb250YWluZXItY2F0ZWdvcmllc19fSFBDcG5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss\n"));

/***/ })

});