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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Articles_main-articles-container__Dibr5 {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Articles_main-articles-container__Dibr5 {\\n  padding-block: 15vh 5vh;\\n}\\n.Articles_main-articles-container__Dibr5 .Articles_main-articles-container-header__RpEBZ {\\n  color: #d05a49;\\n  padding-bottom: 3%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n}\\n\\n.Articles_main-articles-filter-container__CzrSz {\\n  background-color: #302f2b;\\n  border-radius: 10px;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: #f0f0f0;\\n}\\n\\n.Articles_filter-container-categories__HPCpn {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none;\\n  outline: 0;\\n  background: green;\\n  background-image: none;\\n  color: black;\\n  cursor: pointer;\\n  border: 1px solid black;\\n  border-radius: 3px;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .Articles_main-articles-container__Dibr5 {\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Articles.module.scss\"],\"names\":[],\"mappings\":\"AAqEA;EACE,UA1DM;EA2DN,cAAA;ACpEF;;AADA;EAEE,uBAAA;AAGF;AADE;EACE,cAAA;EACA,kBAAA;EACA,wCAAA;AAGJ;;AACA;EACE,yBDVU;ECWV,mBAAA;EACA,4CDKW;ECJX,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,sCAAA;EACA,cDrBQ;ACuBV;;AAqBA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,UAAA;EACA,iBAAA;EACA,sBAAA;EAGA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,kBAAA;AApBF;;AAuBA;EACE;IAEE,UAAA;EArBF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f0f0f0;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./Shared.scss\\\";\\n\\n.main-articles-container {\\n  @extend %main-width;\\n  padding-block: 15vh 5vh;\\n\\n  .main-articles-container-header {\\n    color: $tertiary;\\n    padding-bottom: 3%;\\n    font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  }\\n}\\n\\n.main-articles-filter-container {\\n  background-color: $secondary;\\n  border-radius: 10px;\\n  box-shadow: $box-shadow;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  padding: 0.5rem 2rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  color: $primary;\\n\\n  // select {\\n  //   background-color: black;\\n  //   border: none;\\n  //   box-shadow: $box-shadow;\\n  //   // color: $secondary;\\n  //   color: $primary;\\n  //   font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  //   padding: 0.5rem 1rem;\\n  //   border-radius: 10px;\\n  //   outline: none;\\n  //   width: 100%;\\n  //   border-right: 16px solid transparent;\\n  //   cursor: pointer;\\n\\n  //   option {\\n  //     &:hover {\\n  //     }\\n  // }\\n  // }\\n}\\n\\n.filter-container-categories {\\n  appearance: none;\\n  outline: 0;\\n  background: green;\\n  background-image: none;\\n  // width: 100%;\\n  // height: 100%;\\n  color: black;\\n  cursor: pointer;\\n  border: 1px solid black;\\n  border-radius: 3px;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main-articles-container {\\n    // padding-block: 15vh 5vh;\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main-articles-container\": \"Articles_main-articles-container__Dibr5\",\n\t\"main-articles-container-header\": \"Articles_main-articles-container-header__RpEBZ\",\n\t\"main-articles-filter-container\": \"Articles_main-articles-filter-container__CzrSz\",\n\t\"filter-container-categories\": \"Articles_filter-container-categories__HPCpn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9BcnRpY2xlcy5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esb0ZBQW9GLGVBQWUsbUJBQW1CLEdBQUcsOENBQThDLDRCQUE0QixHQUFHLDRGQUE0RixtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHFEQUFxRCw4QkFBOEIsd0JBQXdCLGlEQUFpRCxrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IseUJBQXlCLDJDQUEyQyxtQkFBbUIsR0FBRyxrREFBa0QsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsZUFBZSxzQkFBc0IsMkJBQTJCLGlCQUFpQixvQkFBb0IsNEJBQTRCLHVCQUF1QixHQUFHLGdEQUFnRCw4Q0FBOEMsaUJBQWlCLEtBQUssR0FBRyxPQUFPLDRIQUE0SCxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSwrR0FBK0csdUJBQXVCLHNCQUFzQix1Q0FBdUMsd0JBQXdCLHFCQUFxQix3QkFBd0IseUJBQXlCLDBCQUEwQiwyREFBMkQsZ0NBQWdDLGtFQUFrRSxxREFBcUQsMElBQTBJLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRywwQkFBMEIsMEJBQTBCLDJCQUEyQixHQUFHLGtCQUFrQiwwQkFBMEIsNEJBQTRCLEdBQUcsYUFBYSx3QkFBd0IsNEJBQTRCLEdBQUcsa0JBQWtCLHdCQUF3QiwyQkFBMkIsR0FBRywwQkFBMEIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyx5QkFBeUIseUJBQXlCLDRCQUE0QixHQUFHLGlCQUFpQixrQkFBa0IsbUJBQW1CLEdBQUcsdUJBQXVCLGtCQUFrQixtQ0FBbUMsbUJBQW1CLEdBQUcsbUpBQW1KLDhCQUE4Qix3QkFBd0IsNEJBQTRCLHVDQUF1Qyx1QkFBdUIseUJBQXlCLCtDQUErQyxLQUFLLEdBQUcscUNBQXFDLGlDQUFpQyx3QkFBd0IsNEJBQTRCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHNCQUFzQix5QkFBeUIsMkNBQTJDLG9CQUFvQixpQkFBaUIsaUNBQWlDLHNCQUFzQixpQ0FBaUMsOEJBQThCLHlCQUF5QixnREFBZ0QsOEJBQThCLDZCQUE2Qix1QkFBdUIscUJBQXFCLDhDQUE4Qyx5QkFBeUIsbUJBQW1CLG9CQUFvQixZQUFZLFFBQVEsUUFBUSxHQUFHLGtDQUFrQyxxQkFBcUIsZUFBZSxzQkFBc0IsMkJBQTJCLG1CQUFtQixvQkFBb0IsaUJBQWlCLG9CQUFvQiw0QkFBNEIsdUJBQXVCLEdBQUcsZ0RBQWdELDhCQUE4QixpQ0FBaUMsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUI7QUFDaGdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzPzQ3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1jb250YWluZXJfX0RpYnI1IHtcXG4gIHBhZGRpbmctYmxvY2s6IDE1dmggNXZoO1xcbn1cXG4uQXJ0aWNsZXNfbWFpbi1hcnRpY2xlcy1jb250YWluZXJfX0RpYnI1IC5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lci1oZWFkZXJfX1JwRUJaIHtcXG4gIGNvbG9yOiAjZDA1YTQ5O1xcbiAgcGFkZGluZy1ib3R0b206IDMlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG59XFxuXFxuLkFydGljbGVzX21haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lcl9fQ3pyU3oge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyYjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgY29sb3I6ICNmMGYwZjA7XFxufVxcblxcbi5BcnRpY2xlc19maWx0ZXItY29udGFpbmVyLWNhdGVnb3JpZXNfX0hQQ3BuIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5BcnRpY2xlc19tYWluLWFydGljbGVzLWNvbnRhaW5lcl9fRGlicjUge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1NoYXJlZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL0FydGljbGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFFQTtFQUNFLFVBMURNO0VBMkROLGNBQUE7QUNwRUY7O0FBREE7RUFFRSx1QkFBQTtBQUdGO0FBREU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQUdKOztBQUNBO0VBQ0UseUJEVlU7RUNXVixtQkFBQTtFQUNBLDRDREtXO0VDSlgsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxjRHJCUTtBQ3VCVjs7QUFxQkE7RUFDRSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUdBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUF1QkE7RUFDRTtJQUVFLFVBQUE7RUFyQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBWYXJpYWJsZXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHByaW1hcnk6ICNmMGYwZjA7XFxuLy8gJHByaW1hcnk6ICNmM2RmYzE7XFxuJHNlY29uZGFyeTogIzMwMmYyYjtcXG4vLyAkdGVydGlhcnk6IHJnYmEoMTk5LCA1NywgNDMsIDAuOCk7XFxuLy8gJHRlcnRpYXJ5OiAjZGE1NjRhO1xcbiR0ZXJ0aWFyeTogI2QwNWE0OTtcXG4kbGlnaHQtY29sb3I6ICMzMDJmMmI7XFxuJGJvcmRlci1jb2xvcjogIzMwMmYyYjtcXG5cXG4vLyBXaWR0aFxcbiR3aWR0aDogODAlO1xcblxcbi8vIFRyYW5zaXRpb25cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy8gR3JpZC1nYXBcXG4kZ3JpZC1nYXA6IDEwJTtcXG5cXG4vLyBvdGhlciBzdHVmZlxcbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4kYm94LXNoYWRvdy1saWdodDogcmdiYSgwLCAwLCAwLCAwLjI2KSAwcHggMnB4IDZweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIFBsYWNlaG9sZGVyc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJWZsZXgtYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiVmbGV4LWJldHdlZW4tY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWp1c3RpZnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lbWFpbi13aWR0aCB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiVncmlkLXR3by1jb2x1bW5zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6ICRncmlkLWdhcDtcXG59XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBNaXhpblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXCIsXCJAaW1wb3J0IFxcXCIuL1NoYXJlZC5zY3NzXFxcIjtcXG5cXG4ubWFpbi1hcnRpY2xlcy1jb250YWluZXIge1xcbiAgQGV4dGVuZCAlbWFpbi13aWR0aDtcXG4gIHBhZGRpbmctYmxvY2s6IDE1dmggNXZoO1xcblxcbiAgLm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlciB7XFxuICAgIGNvbG9yOiAkdGVydGlhcnk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG4gIH1cXG59XFxuXFxuLm1haW4tYXJ0aWNsZXMtZmlsdGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBjb2xvcjogJHByaW1hcnk7XFxuXFxuICAvLyBzZWxlY3Qge1xcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIC8vICAgYm9yZGVyOiBub25lO1xcbiAgLy8gICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gIC8vICAgLy8gY29sb3I6ICRzZWNvbmRhcnk7XFxuICAvLyAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gIC8vICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICAvLyAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLy8gICBvdXRsaW5lOiBub25lO1xcbiAgLy8gICB3aWR0aDogMTAwJTtcXG4gIC8vICAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgLy8gICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAvLyAgIG9wdGlvbiB7XFxuICAvLyAgICAgJjpob3ZlciB7XFxuICAvLyAgICAgfVxcbiAgLy8gfVxcbiAgLy8gfVxcbn1cXG5cXG4uZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgLy8gd2lkdGg6IDEwMCU7XFxuICAvLyBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5tYWluLWFydGljbGVzLWNvbnRhaW5lciB7XFxuICAgIC8vIHBhZGRpbmctYmxvY2s6IDE1dmggNXZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluLWFydGljbGVzLWNvbnRhaW5lclwiOiBcIkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyX19EaWJyNVwiLFxuXHRcIm1haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlclwiOiBcIkFydGljbGVzX21haW4tYXJ0aWNsZXMtY29udGFpbmVyLWhlYWRlcl9fUnBFQlpcIixcblx0XCJtYWluLWFydGljbGVzLWZpbHRlci1jb250YWluZXJcIjogXCJBcnRpY2xlc19tYWluLWFydGljbGVzLWZpbHRlci1jb250YWluZXJfX0N6clN6XCIsXG5cdFwiZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzXCI6IFwiQXJ0aWNsZXNfZmlsdGVyLWNvbnRhaW5lci1jYXRlZ29yaWVzX19IUENwblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Articles.module.scss\n"));

/***/ })

});