/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Home/Popular/Popular.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Home/Popular/Popular.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Popular_home-popular-container__jBCSx {\\n  width: 80%;\\n  margin: 0 auto;\\n}\\n\\n.Popular_home-section-header__mIGRU {\\n  color: #d05a49;\\n  padding-bottom: 2%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  align-self: flex-start;\\n}\\n\\n.Popular_home-popular-container__jBCSx {\\n  padding-block: 2.5%;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .Popular_home-popular-container__jBCSx {\\n    width: 90%;\\n  }\\n  .Popular_home-popular-articles-container__utSJ7 {\\n    gap: 0;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Home/Popular/Popular.module.scss\"],\"names\":[],\"mappings\":\"AAqEA;EACE,UA1DM;EA2DN,cAAA;ACpEF;;AADA;EACE,cDIS;ECHT,kBAAA;EACA,wCAAA;EACA,sBAAA;AAIF;;AADA;EAEE,mBAAA;AAGF;;AAKA;EACE;IACE,UAAA;EAFF;EAKA;IACE,MAAA;EAHF;AACF\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f3eee5;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./../../Shared.scss\\\";\\n\\n.home-section-header {\\n  color: $tertiary;\\n  padding-bottom: 2%;\\n  font-size: clamp(1.5rem, 1.75vw, 1.75vw);\\n  align-self: flex-start;\\n}\\n\\n.home-popular-container {\\n  @extend %main-width;\\n  padding-block: 2.5%;\\n}\\n\\n.home-popular-articles-container {\\n  // display: grid;\\n  // gap: 3%;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .home-popular-container {\\n    width: 90%;\\n    // padding-block: 25% 0%;\\n  }\\n  .home-popular-articles-container {\\n    gap: 0;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home-popular-container\": \"Popular_home-popular-container__jBCSx\",\n\t\"home-section-header\": \"Popular_home-section-header__mIGRU\",\n\t\"home-popular-articles-container\": \"Popular_home-popular-articles-container__utSJ7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9Ib21lL1BvcHVsYXIvUG9wdWxhci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0Esa0ZBQWtGLGVBQWUsbUJBQW1CLEdBQUcseUNBQXlDLG1CQUFtQix1QkFBdUIsNkNBQTZDLDJCQUEyQixHQUFHLDRDQUE0Qyx3QkFBd0IsR0FBRyxnREFBZ0QsNENBQTRDLGlCQUFpQixLQUFLLHFEQUFxRCxhQUFhLEtBQUssR0FBRyxPQUFPLHdJQUF3SSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLCtHQUErRyx1QkFBdUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDJEQUEyRCxnQ0FBZ0Msa0VBQWtFLHFEQUFxRCwwSUFBMEksa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDBCQUEwQiwwQkFBMEIsMkJBQTJCLEdBQUcsa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyxhQUFhLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isd0JBQXdCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxtQkFBbUIsR0FBRyx5SkFBeUosMEJBQTBCLHFCQUFxQix1QkFBdUIsNkNBQTZDLDJCQUEyQixHQUFHLDZCQUE2Qix3QkFBd0Isd0JBQXdCLEdBQUcsc0NBQXNDLHFCQUFxQixlQUFlLEdBQUcsZ0RBQWdELDZCQUE2QixpQkFBaUIsK0JBQStCLEtBQUssc0NBQXNDLGFBQWEsS0FBSyxHQUFHLHFCQUFxQjtBQUN4M0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUvUG9wdWxhci9Qb3B1bGFyLm1vZHVsZS5zY3NzPzRjOTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Qb3B1bGFyX2hvbWUtcG9wdWxhci1jb250YWluZXJfX2pCQ1N4IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLlBvcHVsYXJfaG9tZS1zZWN0aW9uLWhlYWRlcl9fbUlHUlUge1xcbiAgY29sb3I6ICNkMDVhNDk7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLlBvcHVsYXJfaG9tZS1wb3B1bGFyLWNvbnRhaW5lcl9fakJDU3gge1xcbiAgcGFkZGluZy1ibG9jazogMi41JTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5Qb3B1bGFyX2hvbWUtcG9wdWxhci1jb250YWluZXJfX2pCQ1N4IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC5Qb3B1bGFyX2hvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJfX3V0U0o3IHtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL1NoYXJlZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL0hvbWUvUG9wdWxhci9Qb3B1bGFyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXFFQTtFQUNFLFVBMURNO0VBMkROLGNBQUE7QUNwRUY7O0FBREE7RUFDRSxjRElTO0VDSFQsa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFFRSxtQkFBQTtBQUdGOztBQUtBO0VBQ0U7SUFDRSxVQUFBO0VBRkY7RUFLQTtJQUNFLE1BQUE7RUFIRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFZhcmlhYmxlc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kcHJpbWFyeTogI2YzZWVlNTtcXG4vLyAkcHJpbWFyeTogI2YzZGZjMTtcXG4kc2Vjb25kYXJ5OiAjMzAyZjJiO1xcbi8vICR0ZXJ0aWFyeTogcmdiYSgxOTksIDU3LCA0MywgMC44KTtcXG4vLyAkdGVydGlhcnk6ICNkYTU2NGE7XFxuJHRlcnRpYXJ5OiAjZDA1YTQ5O1xcbiRsaWdodC1jb2xvcjogIzMwMmYyYjtcXG4kYm9yZGVyLWNvbG9yOiAjMzAyZjJiO1xcblxcbi8vIFdpZHRoXFxuJHdpZHRoOiA4MCU7XFxuXFxuLy8gVHJhbnNpdGlvblxcbiR0cmFuc2lzdGlvbi1lYXNlOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG5cXG4vLyBHcmlkLWdhcFxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vIG90aGVyIHN0dWZmXFxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiRib3gtc2hhZG93LWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuMjYpIDBweCAycHggNnB4O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gUGxhY2Vob2xkZXJzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4lZmxleC1hbGlnbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtYmV0d2VlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuJWZsZXgtYmV0d2Vlbi1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ247XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4tanVzdGlmeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4tY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVtYWluLXdpZHRoIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuJWdyaWQtdHdvLWNvbHVtbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogJGdyaWQtZ2FwO1xcbn1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIE1peGluXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIixcIkBpbXBvcnQgXFxcIi4vLi4vLi4vU2hhcmVkLnNjc3NcXFwiO1xcblxcbi5ob21lLXNlY3Rpb24taGVhZGVyIHtcXG4gIGNvbG9yOiAkdGVydGlhcnk7XFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgMS43NXZ3LCAxLjc1dncpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmhvbWUtcG9wdWxhci1jb250YWluZXIge1xcbiAgQGV4dGVuZCAlbWFpbi13aWR0aDtcXG4gIHBhZGRpbmctYmxvY2s6IDIuNSU7XFxufVxcblxcbi5ob21lLXBvcHVsYXItYXJ0aWNsZXMtY29udGFpbmVyIHtcXG4gIC8vIGRpc3BsYXk6IGdyaWQ7XFxuICAvLyBnYXA6IDMlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmhvbWUtcG9wdWxhci1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICAvLyBwYWRkaW5nLWJsb2NrOiAyNSUgMCU7XFxuICB9XFxuICAuaG9tZS1wb3B1bGFyLWFydGljbGVzLWNvbnRhaW5lciB7XFxuICAgIGdhcDogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaG9tZS1wb3B1bGFyLWNvbnRhaW5lclwiOiBcIlBvcHVsYXJfaG9tZS1wb3B1bGFyLWNvbnRhaW5lcl9fakJDU3hcIixcblx0XCJob21lLXNlY3Rpb24taGVhZGVyXCI6IFwiUG9wdWxhcl9ob21lLXNlY3Rpb24taGVhZGVyX19tSUdSVVwiLFxuXHRcImhvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJcIjogXCJQb3B1bGFyX2hvbWUtcG9wdWxhci1hcnRpY2xlcy1jb250YWluZXJfX3V0U0o3XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Home/Popular/Popular.module.scss\n"));

/***/ })

});