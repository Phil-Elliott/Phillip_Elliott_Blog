/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/Latest.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/Latest.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Latest_home-latest-container__YqhLG h1, .Latest_home-latest-slider-articles__AOWv7 {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Latest_home-section-header__TLhjL {\\n  padding-bottom: 2%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  align-self: flex-start;\\n}\\n\\n.Latest_home-latest-container__YqhLG {\\n  border-bottom: 1px solid #807e72;\\n  padding-bottom: 4%;\\n  color: #f0f0f0;\\n}\\n.Latest_home-latest-slider-container__lUuCD {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.Latest_home-latest-slider-articles__AOWv7 {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 3%;\\n  gap: 3%;\\n}\\n\\n.Latest_slider-chevron__J5zZN {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  opacity: 0.7;\\n  margin-inline: 3.5rem;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .Latest_home-latest-container__YqhLG h1 {\\n    width: 90%;\\n  }\\n  .Latest_home-latest-slider-articles__AOWv7 {\\n    padding-top: 1rem;\\n    grid-template-columns: 1fr;\\n    gap: 0;\\n    width: 90%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/abstracts/_placeholders.scss\",\"webpack://styles/abstracts/_variables.scss\",\"webpack://styles/Pages/Home/Latest/Latest.module.scss\"],\"names\":[],\"mappings\":\"AA4CA;EACE,UCjCM;EDkCN,cAAA;AE3CF;;AADA;EAEE,kBAAA;EACA,wCAAA;EAEA,sBAAA;AAEF;;AACA;EACE,gCAAA;EACA,kBAAA;EAEA,cDXQ;ACYV;AAOA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AALF;;AAQA;EACE,aAAA;EACA,kCAAA;EACA,YAAA;EAAA,OAAA;AALF;;AAUA;EACE,eAAA;EACA,iBAAA;EACA,YAAA;EACA,qBAAA;AAPF;;AAeA;EAGI;IACE,UAAA;EAdJ;EAiBA;IACE,iBAAA;IACA,0BAAA;IACA,MAAA;IACA,UAAA;EAfF;AACF\",\"sourcesContent\":[\"@use \\\"variables.scss\\\" as *;\\n\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #f0f0f0;\\n$secondary: #302f2b;\\n$tertiary: #d05a49;\\n$light-color: #333333;\\n$border-color: #807e72;\\n\\n//==================================================\\n// Width\\n//==================================================\\n$width: 80%;\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Grid-gap\\n//==================================================\\n$grid-gap: 10%;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\",\"@use \\\"../../../abstracts\\\" as *;\\n\\n.home-section-header {\\n  // color: $tertiary;\\n  padding-bottom: 2%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  // font-weight: 900;\\n  align-self: flex-start;\\n}\\n\\n.home-latest-container {\\n  border-bottom: 1px solid $border-color;\\n  padding-bottom: 4%;\\n  // background-color: $secondary;\\n  color: $primary;\\n  // background-color: #4e4e50;\\n\\n  h1 {\\n    @extend %main-width;\\n  }\\n}\\n\\n.home-latest-slider-container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.home-latest-slider-articles {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 3%;\\n  // margin-inline: 1rem;\\n  @extend %main-width;\\n}\\n\\n.slider-chevron {\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  opacity: 0.7;\\n  margin-inline: 3.5rem;\\n  // margin-bottom: 6rem;\\n}\\n\\n// .slider-chevron-hide {\\n//   color: white;\\n// }\\n\\n@media only screen and (max-width: 1000px) {\\n  .home-latest-container {\\n    // padding-bottom: 0%;\\n    h1 {\\n      width: 90%;\\n    }\\n  }\\n  .home-latest-slider-articles {\\n    padding-top: 1rem;\\n    grid-template-columns: 1fr;\\n    gap: 0;\\n    width: 90%;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home-latest-container\": \"Latest_home-latest-container__YqhLG\",\n\t\"home-latest-slider-articles\": \"Latest_home-latest-slider-articles__AOWv7\",\n\t\"home-section-header\": \"Latest_home-section-header__TLhjL\",\n\t\"home-latest-slider-container\": \"Latest_home-latest-slider-container__lUuCD\",\n\t\"slider-chevron\": \"Latest_slider-chevron__J5zZN\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9MYXRlc3QubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0S0FBd0Y7QUFDbEk7QUFDQTtBQUNBLCtIQUErSCxlQUFlLG1CQUFtQixHQUFHLHdDQUF3Qyx1QkFBdUIsNkNBQTZDLDJCQUEyQixHQUFHLDBDQUEwQyxxQ0FBcUMsdUJBQXVCLG1CQUFtQixHQUFHLCtDQUErQyxrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLGdEQUFnRCxrQkFBa0IsdUNBQXVDLGlCQUFpQixZQUFZLEdBQUcsbUNBQW1DLG9CQUFvQixzQkFBc0IsaUJBQWlCLDBCQUEwQixHQUFHLGdEQUFnRCw2Q0FBNkMsaUJBQWlCLEtBQUssZ0RBQWdELHdCQUF3QixpQ0FBaUMsYUFBYSxpQkFBaUIsS0FBSyxHQUFHLE9BQU8sME1BQTBNLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssc0RBQXNELGlCQUFpQixrQkFBa0Isd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMEJBQTBCLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0IsMEJBQTBCLDRCQUE0QixHQUFHLGFBQWEsd0JBQXdCLDRCQUE0QixHQUFHLGtCQUFrQix3QkFBd0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLHlCQUF5Qiw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLG1CQUFtQixHQUFHLDhJQUE4SSxzQkFBc0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsc0lBQXNJLHVLQUF1Syw0SUFBNEksOEtBQThLLHFEQUFxRCxzSkFBc0osbUtBQW1LLDBCQUEwQix3QkFBd0IsdUJBQXVCLDZDQUE2Qyx3QkFBd0IsMkJBQTJCLEdBQUcsNEJBQTRCLDJDQUEyQyx1QkFBdUIsb0NBQW9DLG9CQUFvQixpQ0FBaUMsVUFBVSwwQkFBMEIsS0FBSyxHQUFHLG1DQUFtQyxrQkFBa0IsbUNBQW1DLHdCQUF3QixHQUFHLGtDQUFrQyxrQkFBa0IsdUNBQXVDLFlBQVksMkJBQTJCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLGlCQUFpQiwwQkFBMEIsMkJBQTJCLEdBQUcsNkJBQTZCLG9CQUFvQixNQUFNLGdEQUFnRCw0QkFBNEIsNEJBQTRCLFVBQVUsbUJBQW1CLE9BQU8sS0FBSyxrQ0FBa0Msd0JBQXdCLGlDQUFpQyxhQUFhLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCO0FBQzN1SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1BhZ2VzL0hvbWUvTGF0ZXN0L0xhdGVzdC5tb2R1bGUuc2Nzcz9hYTRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGF0ZXN0X2hvbWUtbGF0ZXN0LWNvbnRhaW5lcl9fWXFoTEcgaDEsIC5MYXRlc3RfaG9tZS1sYXRlc3Qtc2xpZGVyLWFydGljbGVzX19BT1d2NyB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5MYXRlc3RfaG9tZS1zZWN0aW9uLWhlYWRlcl9fVExoakwge1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5MYXRlc3RfaG9tZS1sYXRlc3QtY29udGFpbmVyX19ZcWhMRyB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwN2U3MjtcXG4gIHBhZGRpbmctYm90dG9tOiA0JTtcXG4gIGNvbG9yOiAjZjBmMGYwO1xcbn1cXG4uTGF0ZXN0X2hvbWUtbGF0ZXN0LXNsaWRlci1jb250YWluZXJfX2xVdUNEIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uTGF0ZXN0X2hvbWUtbGF0ZXN0LXNsaWRlci1hcnRpY2xlc19fQU9Xdjcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLWdhcDogMyU7XFxuICBnYXA6IDMlO1xcbn1cXG5cXG4uTGF0ZXN0X3NsaWRlci1jaGV2cm9uX19KNXpaTiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIG1hcmdpbi1pbmxpbmU6IDMuNXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5MYXRlc3RfaG9tZS1sYXRlc3QtY29udGFpbmVyX19ZcWhMRyBoMSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAuTGF0ZXN0X2hvbWUtbGF0ZXN0LXNsaWRlci1hcnRpY2xlc19fQU9Xdjcge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9hYnN0cmFjdHMvX3BsYWNlaG9sZGVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL2Fic3RyYWN0cy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvUGFnZXMvSG9tZS9MYXRlc3QvTGF0ZXN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTRDQTtFQUNFLFVDakNNO0VEa0NOLGNBQUE7QUUzQ0Y7O0FBREE7RUFFRSxrQkFBQTtFQUNBLHdDQUFBO0VBRUEsc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFFQSxjRFhRO0FDWVY7QUFPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQUEsT0FBQTtBQUxGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBZUE7RUFHSTtJQUNFLFVBQUE7RUFkSjtFQWlCQTtJQUNFLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtFQWZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwidmFyaWFibGVzLnNjc3NcXFwiIGFzICo7XFxuXFxuJWZsZXgtYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWJldHdlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiVmbGV4LWJldHdlZW4tY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWFsaWduO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWp1c3RpZnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uLWNlbnRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lbWFpbi13aWR0aCB7XFxuICB3aWR0aDogJHdpZHRoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiVncmlkLXR3by1jb2x1bW5zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6ICRncmlkLWdhcDtcXG59XFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjZjBmMGYwO1xcbiRzZWNvbmRhcnk6ICMzMDJmMmI7XFxuJHRlcnRpYXJ5OiAjZDA1YTQ5O1xcbiRsaWdodC1jb2xvcjogIzMzMzMzMztcXG4kYm9yZGVyLWNvbG9yOiAjODA3ZTcyO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kd2lkdGg6IDgwJTtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEdyaWQtZ2FwXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBCb3ggU2hhZG93c1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIixcIkB1c2UgXFxcIi4uLy4uLy4uL2Fic3RyYWN0c1xcXCIgYXMgKjtcXG5cXG4uaG9tZS1zZWN0aW9uLWhlYWRlciB7XFxuICAvLyBjb2xvcjogJHRlcnRpYXJ5O1xcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjVyZW0sIDEuNzV2dywgMS43NXZ3KTtcXG4gIC8vIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaG9tZS1sYXRlc3QtY29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcbiAgcGFkZGluZy1ib3R0b206IDQlO1xcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcXG4gIGNvbG9yOiAkcHJpbWFyeTtcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNTA7XFxuXFxuICBoMSB7XFxuICAgIEBleHRlbmQgJW1haW4td2lkdGg7XFxuICB9XFxufVxcblxcbi5ob21lLWxhdGVzdC1zbGlkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1sYXRlc3Qtc2xpZGVyLWFydGljbGVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAzJTtcXG4gIC8vIG1hcmdpbi1pbmxpbmU6IDFyZW07XFxuICBAZXh0ZW5kICVtYWluLXdpZHRoO1xcbn1cXG5cXG4uc2xpZGVyLWNoZXZyb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBvcGFjaXR5OiAwLjc7XFxuICBtYXJnaW4taW5saW5lOiAzLjVyZW07XFxuICAvLyBtYXJnaW4tYm90dG9tOiA2cmVtO1xcbn1cXG5cXG4vLyAuc2xpZGVyLWNoZXZyb24taGlkZSB7XFxuLy8gICBjb2xvcjogd2hpdGU7XFxuLy8gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuaG9tZS1sYXRlc3QtY29udGFpbmVyIHtcXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDAlO1xcbiAgICBoMSB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbiAgfVxcbiAgLmhvbWUtbGF0ZXN0LXNsaWRlci1hcnRpY2xlcyB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAwO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJob21lLWxhdGVzdC1jb250YWluZXJcIjogXCJMYXRlc3RfaG9tZS1sYXRlc3QtY29udGFpbmVyX19ZcWhMR1wiLFxuXHRcImhvbWUtbGF0ZXN0LXNsaWRlci1hcnRpY2xlc1wiOiBcIkxhdGVzdF9ob21lLWxhdGVzdC1zbGlkZXItYXJ0aWNsZXNfX0FPV3Y3XCIsXG5cdFwiaG9tZS1zZWN0aW9uLWhlYWRlclwiOiBcIkxhdGVzdF9ob21lLXNlY3Rpb24taGVhZGVyX19UTGhqTFwiLFxuXHRcImhvbWUtbGF0ZXN0LXNsaWRlci1jb250YWluZXJcIjogXCJMYXRlc3RfaG9tZS1sYXRlc3Qtc2xpZGVyLWNvbnRhaW5lcl9fbFV1Q0RcIixcblx0XCJzbGlkZXItY2hldnJvblwiOiBcIkxhdGVzdF9zbGlkZXItY2hldnJvbl9fSjV6Wk5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/Latest.module.scss\n"));

/***/ })

});