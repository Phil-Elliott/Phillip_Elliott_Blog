/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Search/search.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Search/search.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".search_main__f3Llv {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.search_main__f3Llv {\\n  padding-block: 13vh 5vh;\\n}\\n.search_main__f3Llv h1 {\\n  color: #d05a49;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  margin-bottom: 0;\\n  margin-bottom: clamp(2rem, 5%, 5%);\\n}\\n\\n.search_search-container__zV1Hc {\\n  background-color: #d05a49;\\n  background-color: #302f2b;\\n  border-radius: 3px;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  margin-bottom: clamp(2rem, 5%, 5%);\\n  padding: 1.25% 2%;\\n  font-size: clamp(1rem, 1.15vw, 1.25vw);\\n  color: #f0f0f0;\\n}\\n.search_search-container__zV1Hc .search_filter-container-article-count__CejH0 {\\n  font-size: clamp(1rem, 1.15vw, 1.25vw);\\n  margin: 0;\\n}\\n\\n.search_search-input__EqWIL {\\n  background-color: #f0f0f0;\\n  border: none;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  color: #302f2b;\\n  font-size: clamp(1rem, 1.15vw, 1.25vw);\\n  padding: 0.25rem 1rem;\\n  border-radius: 3px;\\n  outline: none;\\n  border-right: 16px solid transparent;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .search_main__f3Llv {\\n    padding-block: 11vh 5vh;\\n    width: 90%;\\n  }\\n  .search_search-container__zV1Hc {\\n    padding: 1% 4%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/abstracts/_placeholders.scss\",\"webpack://styles/abstracts/_variables.scss\",\"webpack://styles/Pages/Search/search.module.scss\"],\"names\":[],\"mappings\":\"AA4CA;EACE,UCjCM;EDkCN,cAAA;AE3CF;;AADA;EAEE,uBAAA;AAGF;AADE;EACE,cDFO;ECGP,wCAAA;EACA,gBAAA;EACA,kCAAA;AAGJ;;AACA;EACE,yBDVS;ECWT,yBDZU;ECaV,kBDgBc;ECfd,4CDSW;ECRX,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;EACA,kCAAA;EACA,iBAAA;EACA,sCAAA;EACA,cDvBQ;ACyBV;AAAE;EACE,sCAAA;EACA,SAAA;AAEJ;;AAEA;EACE,yBDhCQ;ECiCR,YAAA;EACA,4CDVW;ECWX,cDlCU;ECmCV,sCAAA;EACA,qBAAA;EACA,kBAAA;EACA,aAAA;EAEA,oCAAA;AAAF;;AAIA;EACE;IACE,uBAAA;IACA,UAAA;EADF;EAGA;IACE,cAAA;EADF;AACF\",\"sourcesContent\":[\"@use \\\"variables.scss\\\" as *;\\n\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #f0f0f0;\\n$secondary: #302f2b;\\n$tertiary: #d05a49;\\n$light-color: #333333;\\n$border-color: #807e72;\\n\\n//==================================================\\n// Width\\n//==================================================\\n$width: 80%;\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Grid-gap\\n//==================================================\\n$grid-gap: 10%;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\",\"@use \\\"../../abstracts\\\" as *;\\n\\n.main {\\n  @extend %main-width;\\n  padding-block: 13vh 5vh;\\n\\n  h1 {\\n    color: $tertiary;\\n    font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n    margin-bottom: 0;\\n    margin-bottom: clamp(2rem, 5%, 5%);\\n  }\\n}\\n\\n.search-container {\\n  background-color: $tertiary;\\n  background-color: $secondary;\\n  border-radius: $border-radius;\\n  box-shadow: $box-shadow;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 5%;\\n  margin-bottom: clamp(2rem, 5%, 5%);\\n  padding: 1.25% 2%;\\n  font-size: clamp(1rem, 1.15vw, 1.25vw);\\n  color: $primary;\\n\\n  .filter-container-article-count {\\n    font-size: clamp(1rem, 1.15vw, 1.25vw);\\n    margin: 0;\\n  }\\n}\\n\\n.search-input {\\n  background-color: $primary;\\n  border: none;\\n  box-shadow: $box-shadow;\\n  color: $secondary;\\n  font-size: clamp(1rem, 1.15vw, 1.25vw);\\n  padding: 0.25rem 1rem;\\n  border-radius: 3px;\\n  outline: none;\\n  //   width: 100%;\\n  border-right: 16px solid transparent;\\n  //   cursor: pointer;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .main {\\n    padding-block: 11vh 5vh;\\n    width: 90%;\\n  }\\n  .search-container {\\n    padding: 1% 4%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"search_main__f3Llv\",\n\t\"search-container\": \"search_search-container__zV1Hc\",\n\t\"filter-container-article-count\": \"search_filter-container-article-count__CejH0\",\n\t\"search-input\": \"search_search-input__EqWIL\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9QYWdlcy9TZWFyY2gvc2VhcmNoLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSwrREFBK0QsZUFBZSxtQkFBbUIsR0FBRyx5QkFBeUIsNEJBQTRCLEdBQUcsMEJBQTBCLG1CQUFtQiw2Q0FBNkMscUJBQXFCLHVDQUF1QyxHQUFHLHFDQUFxQyw4QkFBOEIsOEJBQThCLHVCQUF1QixpREFBaUQsa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHVDQUF1QyxzQkFBc0IsMkNBQTJDLG1CQUFtQixHQUFHLGlGQUFpRiwyQ0FBMkMsY0FBYyxHQUFHLGlDQUFpQyw4QkFBOEIsaUJBQWlCLGlEQUFpRCxtQkFBbUIsMkNBQTJDLDBCQUEwQix1QkFBdUIsa0JBQWtCLHlDQUF5QyxHQUFHLGdEQUFnRCx5QkFBeUIsOEJBQThCLGlCQUFpQixLQUFLLHFDQUFxQyxxQkFBcUIsS0FBSyxHQUFHLE9BQU8scU1BQXFNLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssc0RBQXNELGlCQUFpQixrQkFBa0Isd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMEJBQTBCLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0IsMEJBQTBCLDRCQUE0QixHQUFHLGFBQWEsd0JBQXdCLDRCQUE0QixHQUFHLGtCQUFrQix3QkFBd0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLHlCQUF5Qiw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLG1CQUFtQixHQUFHLDhJQUE4SSxzQkFBc0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsc0lBQXNJLHVLQUF1Syw0SUFBNEksOEtBQThLLHFEQUFxRCxzSkFBc0osZ0tBQWdLLFdBQVcsd0JBQXdCLDRCQUE0QixVQUFVLHVCQUF1QiwrQ0FBK0MsdUJBQXVCLHlDQUF5QyxLQUFLLEdBQUcsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsa0NBQWtDLDRCQUE0QixrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsdUNBQXVDLHNCQUFzQiwyQ0FBMkMsb0JBQW9CLHVDQUF1Qyw2Q0FBNkMsZ0JBQWdCLEtBQUssR0FBRyxtQkFBbUIsK0JBQStCLGlCQUFpQiw0QkFBNEIsc0JBQXNCLDJDQUEyQywwQkFBMEIsdUJBQXVCLGtCQUFrQixxQkFBcUIseUNBQXlDLHlCQUF5QixHQUFHLGdEQUFnRCxXQUFXLDhCQUE4QixpQkFBaUIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssR0FBRyxxQkFBcUI7QUFDOW5LO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1BhZ2VzL1NlYXJjaC9zZWFyY2gubW9kdWxlLnNjc3M/NzJjZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaF9tYWluX19mM0xsdiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zZWFyY2hfbWFpbl9fZjNMbHYge1xcbiAgcGFkZGluZy1ibG9jazogMTN2aCA1dmg7XFxufVxcbi5zZWFyY2hfbWFpbl9fZjNMbHYgaDEge1xcbiAgY29sb3I6ICNkMDVhNDk7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDJyZW0sIDUlLCA1JSk7XFxufVxcblxcbi5zZWFyY2hfc2VhcmNoLWNvbnRhaW5lcl9felYxSGMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwNWE0OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDJmMmI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxuICBtYXJnaW4tYm90dG9tOiBjbGFtcCgycmVtLCA1JSwgNSUpO1xcbiAgcGFkZGluZzogMS4yNSUgMiU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMTV2dywgMS4yNXZ3KTtcXG4gIGNvbG9yOiAjZjBmMGYwO1xcbn1cXG4uc2VhcmNoX3NlYXJjaC1jb250YWluZXJfX3pWMUhjIC5zZWFyY2hfZmlsdGVyLWNvbnRhaW5lci1hcnRpY2xlLWNvdW50X19DZWpIMCB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMTV2dywgMS4yNXZ3KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaF9zZWFyY2gtaW5wdXRfX0VxV0lMIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIGNvbG9yOiAjMzAyZjJiO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjE1dncsIDEuMjV2dyk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnNlYXJjaF9tYWluX19mM0xsdiB7XFxuICAgIHBhZGRpbmctYmxvY2s6IDExdmggNXZoO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLnNlYXJjaF9zZWFyY2gtY29udGFpbmVyX196VjFIYyB7XFxuICAgIHBhZGRpbmc6IDElIDQlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fic3RyYWN0cy9fcGxhY2Vob2xkZXJzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9QYWdlcy9TZWFyY2gvc2VhcmNoLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTRDQTtFQUNFLFVDakNNO0VEa0NOLGNBQUE7QUUzQ0Y7O0FBREE7RUFFRSx1QkFBQTtBQUdGO0FBREU7RUFDRSxjREZPO0VDR1Asd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBR0o7O0FBQ0E7RUFDRSx5QkRWUztFQ1dULHlCRFpVO0VDYVYsa0JEZ0JjO0VDZmQsNENEU1c7RUNSWCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0R2QlE7QUN5QlY7QUFBRTtFQUNFLHNDQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUVBO0VBQ0UseUJEaENRO0VDaUNSLFlBQUE7RUFDQSw0Q0RWVztFQ1dYLGNEbENVO0VDbUNWLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxvQ0FBQTtBQUFGOztBQUlBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLFVBQUE7RUFERjtFQUdBO0lBQ0UsY0FBQTtFQURGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyaWFibGVzLnNjc3NcXFwiIGFzICo7XFxuXFxuJWZsZXgtYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiVmbGV4LWJldHdlZW4tY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWp1c3RpZnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lbWFpbi13aWR0aCB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiVncmlkLXR3by1jb2x1bW5zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6ICRncmlkLWdhcDtcXG59XFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjZjBmMGYwO1xcbiRzZWNvbmRhcnk6ICMzMDJmMmI7XFxuJHRlcnRpYXJ5OiAjZDA1YTQ5O1xcbiRsaWdodC1jb2xvcjogIzMzMzMzMztcXG4kYm9yZGVyLWNvbG9yOiAjODA3ZTcyO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kd2lkdGg6IDgwJTtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEdyaWQtZ2FwXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBCb3ggU2hhZG93c1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIixcIkB1c2UgXFxcIi4uLy4uL2Fic3RyYWN0c1xcXCIgYXMgKjtcXG5cXG4ubWFpbiB7XFxuICBAZXh0ZW5kICVtYWluLXdpZHRoO1xcbiAgcGFkZGluZy1ibG9jazogMTN2aCA1dmg7XFxuXFxuICBoMSB7XFxuICAgIGNvbG9yOiAkdGVydGlhcnk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCAxLjc1dncsIDEuNzV2dyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKDJyZW0sIDUlLCA1JSk7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XFxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IGNsYW1wKDJyZW0sIDUlLCA1JSk7XFxuICBwYWRkaW5nOiAxLjI1JSAyJTtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xNXZ3LCAxLjI1dncpO1xcbiAgY29sb3I6ICRwcmltYXJ5O1xcblxcbiAgLmZpbHRlci1jb250YWluZXItYXJ0aWNsZS1jb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMS4xNXZ3LCAxLjI1dncpO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gIGNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjE1dncsIDEuMjV2dyk7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLy8gICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yaWdodDogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLm1haW4ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxMXZoIDV2aDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMSUgNCU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJzZWFyY2hfbWFpbl9fZjNMbHZcIixcblx0XCJzZWFyY2gtY29udGFpbmVyXCI6IFwic2VhcmNoX3NlYXJjaC1jb250YWluZXJfX3pWMUhjXCIsXG5cdFwiZmlsdGVyLWNvbnRhaW5lci1hcnRpY2xlLWNvdW50XCI6IFwic2VhcmNoX2ZpbHRlci1jb250YWluZXItYXJ0aWNsZS1jb3VudF9fQ2VqSDBcIixcblx0XCJzZWFyY2gtaW5wdXRcIjogXCJzZWFyY2hfc2VhcmNoLWlucHV0X19FcVdJTFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Search/search.module.scss\n"));

/***/ })

});