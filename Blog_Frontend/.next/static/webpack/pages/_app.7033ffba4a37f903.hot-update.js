/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderNav.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderNav.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HeaderNav_header-nav-container__1wmPy ul {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.HeaderNav_header-nav-container__1wmPy ul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n.HeaderNav_header-nav-container__1wmPy ul li {\\n  cursor: pointer;\\n  padding: 1rem;\\n  margin-inline: 0.5rem;\\n  font-weight: 500;\\n}\\n.HeaderNav_header-nav-container__1wmPy ul li:hover {\\n  color: white;\\n}\\n\\n.HeaderNav_header-nav-link-active__gDI1d {\\n  color: rgba(199, 57, 43, 0.8);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Shared.scss\",\"webpack://styles/Header/HeaderNav.module.scss\"],\"names\":[],\"mappings\":\"AA8BA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AC7BF;;AADE;EAEE,gBAAA;EACA,SAAA;EACA,UAAA;AAGJ;AADI;EACE,eAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;AAGN;AADM;EACE,YAAA;AAGR;;AAGA;EACE,6BDlBS;ACkBX\",\"sourcesContent\":[\"// Variables\\n//==================================================\\n$primary: #f3eee5;\\n// $primary: #f0e7d6;\\n$secondary: rgba(26, 28, 26, 0.9);\\n$tertiary: rgba(199, 57, 43, 0.8);\\n$light-color: rgba(26, 28, 26, 0.9);\\n$border-color: rgba(26, 28, 26, 0.9);\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.16) 0px 1px 4px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\",\"@import \\\"./../Shared.scss\\\";\\n\\n.header-nav-container {\\n  ul {\\n    @extend %flex-between;\\n    list-style: none;\\n    margin: 0;\\n    padding: 0;\\n\\n    li {\\n      cursor: pointer;\\n      padding: 1rem;\\n      margin-inline: 0.5rem;\\n      font-weight: 500;\\n\\n      &:hover {\\n        color: white;\\n      }\\n    }\\n  }\\n}\\n\\n.header-nav-link-active {\\n  color: $tertiary;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header-nav-container\": \"HeaderNav_header-nav-container__1wmPy\",\n\t\"header-nav-link-active\": \"HeaderNav_header-nav-link-active__gDI1d\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9IZWFkZXIvSGVhZGVyTmF2Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSxxRkFBcUYsa0JBQWtCLHdCQUF3QixtQ0FBbUMsR0FBRywrQ0FBK0MscUJBQXFCLGNBQWMsZUFBZSxHQUFHLGdEQUFnRCxvQkFBb0Isa0JBQWtCLDBCQUEwQixxQkFBcUIsR0FBRyxzREFBc0QsaUJBQWlCLEdBQUcsOENBQThDLGtDQUFrQyxHQUFHLE9BQU8sb0lBQW9JLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxnSEFBZ0gsdUJBQXVCLG9DQUFvQyxvQ0FBb0Msc0NBQXNDLHVDQUF1QywwQkFBMEIsMkRBQTJELGdDQUFnQyxrRUFBa0UscURBQXFELDBJQUEwSSxrQkFBa0Isd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUNBQW1DLEdBQUcsMEJBQTBCLDBCQUEwQiwyQkFBMkIsR0FBRyxrQkFBa0IsMEJBQTBCLDRCQUE0QixHQUFHLGFBQWEsd0JBQXdCLDRCQUE0QixHQUFHLGtCQUFrQix3QkFBd0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLHlCQUF5Qiw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLG1CQUFtQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLG1CQUFtQixHQUFHLHNKQUFzSiwyQkFBMkIsUUFBUSw0QkFBNEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsWUFBWSx3QkFBd0Isc0JBQXNCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLHVCQUF1QixTQUFTLE9BQU8sS0FBSyxHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDMXdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvSGVhZGVyL0hlYWRlck5hdi5tb2R1bGUuc2Nzcz84NTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyTmF2X2hlYWRlci1uYXYtY29udGFpbmVyX18xd21QeSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLkhlYWRlck5hdl9oZWFkZXItbmF2LWNvbnRhaW5lcl9fMXdtUHkgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5IZWFkZXJOYXZfaGVhZGVyLW5hdi1jb250YWluZXJfXzF3bVB5IHVsIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4taW5saW5lOiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uSGVhZGVyTmF2X2hlYWRlci1uYXYtY29udGFpbmVyX18xd21QeSB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5IZWFkZXJOYXZfaGVhZGVyLW5hdi1saW5rLWFjdGl2ZV9fZ0RJMWQge1xcbiAgY29sb3I6IHJnYmEoMTk5LCA1NywgNDMsIDAuOCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU2hhcmVkLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvSGVhZGVyL0hlYWRlck5hdi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUE4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQzdCRjs7QUFERTtFQUVFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHSjtBQURJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBR047QUFETTtFQUNFLFlBQUE7QUFHUjs7QUFHQTtFQUNFLDZCRGxCUztBQ2tCWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBWYXJpYWJsZXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJHByaW1hcnk6ICNmM2VlZTU7XFxuLy8gJHByaW1hcnk6ICNmMGU3ZDY7XFxuJHNlY29uZGFyeTogcmdiYSgyNiwgMjgsIDI2LCAwLjkpO1xcbiR0ZXJ0aWFyeTogcmdiYSgxOTksIDU3LCA0MywgMC44KTtcXG4kbGlnaHQtY29sb3I6IHJnYmEoMjYsIDI4LCAyNiwgMC45KTtcXG4kYm9yZGVyLWNvbG9yOiByZ2JhKDI2LCAyOCwgMjYsIDAuOSk7XFxuXFxuLy8gV2lkdGhcXG4kd2lkdGg6IDgwJTtcXG5cXG4vLyBUcmFuc2l0aW9uXFxuJHRyYW5zaXN0aW9uLWVhc2U6IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcblxcbi8vIEdyaWQtZ2FwXFxuJGdyaWQtZ2FwOiAxMCU7XFxuXFxuLy8gb3RoZXIgc3R1ZmZcXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBQbGFjZWhvbGRlcnNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiVmbGV4LWFsaWduIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4lZmxleC1iZXR3ZWVuLWNvbHVtbiB7XFxuICBAZXh0ZW5kICVmbGV4LWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVjZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1hbGlnbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiVmbGV4LWNvbHVtbi1qdXN0aWZ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVmbGV4LWNvbHVtbi1jZW50ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJW1haW4td2lkdGgge1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4lZ3JpZC10d28tY29sdW1ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAkZ3JpZC1nYXA7XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gTWl4aW5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblwiLFwiQGltcG9ydCBcXFwiLi8uLi9TaGFyZWQuc2Nzc1xcXCI7XFxuXFxuLmhlYWRlci1uYXYtY29udGFpbmVyIHtcXG4gIHVsIHtcXG4gICAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGxpIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBtYXJnaW4taW5saW5lOiAwLjVyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmhlYWRlci1uYXYtbGluay1hY3RpdmUge1xcbiAgY29sb3I6ICR0ZXJ0aWFyeTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyLW5hdi1jb250YWluZXJcIjogXCJIZWFkZXJOYXZfaGVhZGVyLW5hdi1jb250YWluZXJfXzF3bVB5XCIsXG5cdFwiaGVhZGVyLW5hdi1saW5rLWFjdGl2ZVwiOiBcIkhlYWRlck5hdl9oZWFkZXItbmF2LWxpbmstYWN0aXZlX19nREkxZFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderNav.module.scss\n"));

/***/ })

});