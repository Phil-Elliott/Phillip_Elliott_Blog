/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderRight.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderRight.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".HeaderRight_header-right-container__YxOxK button {\\n  background-color: #f0f0f0;\\n  border: none;\\n  border-radius: 3px;\\n  color: #302f2b;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  padding: 0.5rem 1rem;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n  display: flex;\\n  align-items: center;\\n}\\n.HeaderRight_header-right-container__YxOxK button:hover {\\n  cursor: pointer;\\n  background-color: #302f2b;\\n  color: #f0f0f0;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Header/HeaderRight.module.scss\",\"webpack://styles/Shared.scss\"],\"names\":[],\"mappings\":\"AAGE;EACE,yBCFM;EDGN,YAAA;EACA,kBAAA;EACA,cCHQ;EDIR,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCCIe;EDHf,2CCUe;EDTf,aAAA;EACA,mBAAA;AAFJ;AAII;EACE,eAAA;EAEA,yBCfM;EDgBN,cClBI;EDmBJ,4CAAA;AAHN\",\"sourcesContent\":[\"@import \\\"./../Shared.scss\\\";\\n\\n.header-right-container {\\n  button {\\n    background-color: $primary;\\n    border: none;\\n    border-radius: 3px;\\n    color: $secondary;\\n    font-size: 1rem;\\n    font-weight: 500;\\n    padding: 0.5rem 1rem;\\n    transition: $transistion-ease;\\n    box-shadow: $box-shadow-light;\\n    display: flex;\\n    align-items: center;\\n\\n    &:hover {\\n      cursor: pointer;\\n\\n      background-color: $secondary;\\n      color: $primary;\\n      box-shadow: $box-shadow;\\n    }\\n  }\\n}\\n\",\"// Variables\\n//==================================================\\n$primary: #f0f0f0;\\n// $primary: #f3dfc1;\\n$secondary: #302f2b;\\n// $tertiary: rgba(199, 57, 43, 0.8);\\n// $tertiary: #da564a;\\n$tertiary: #d05a49;\\n$light-color: #302f2b;\\n$border-color: #302f2b;\\n\\n// Width\\n$width: 80%;\\n\\n// Transition\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n// Grid-gap\\n$grid-gap: 10%;\\n\\n// other stuff\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//================================================\\n// Placeholders\\n//================================================\\n%flex-align {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n%flex-between {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n%flex-between-column {\\n  @extend %flex-between;\\n  flex-direction: column;\\n}\\n\\n%flex-center {\\n  @extend %flex-between;\\n  justify-content: center;\\n}\\n\\n%center {\\n  @extend %flex-align;\\n  justify-content: center;\\n}\\n\\n%flex-column {\\n  @extend %flex-align;\\n  flex-direction: column;\\n}\\n\\n%flex-column-justify {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n%flex-column-center {\\n  @extend %flex-column;\\n  justify-content: center;\\n}\\n\\n%main-width {\\n  width: $width;\\n  margin: 0 auto;\\n}\\n\\n%grid-two-columns {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: $grid-gap;\\n}\\n\\n//================================================\\n// Mixin\\n//================================================\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header-right-container\": \"HeaderRight_header-right-container__YxOxK\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9IZWFkZXIvSGVhZGVyUmlnaHQubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLDZGQUE2Riw4QkFBOEIsaUJBQWlCLHVCQUF1QixtQkFBbUIsb0JBQW9CLHFCQUFxQix5QkFBeUIscUNBQXFDLGdEQUFnRCxrQkFBa0Isd0JBQXdCLEdBQUcsMkRBQTJELG9CQUFvQiw4QkFBOEIsbUJBQW1CLGlEQUFpRCxHQUFHLE9BQU8scUlBQXFJLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFlBQVksWUFBWSxzREFBc0QsNkJBQTZCLFlBQVksaUNBQWlDLG1CQUFtQix5QkFBeUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsMkJBQTJCLG9DQUFvQyxvQ0FBb0Msb0JBQW9CLDBCQUEwQixpQkFBaUIsd0JBQXdCLHVDQUF1Qyx3QkFBd0IsZ0NBQWdDLE9BQU8sS0FBSyxHQUFHLDJGQUEyRix1QkFBdUIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDJEQUEyRCxnQ0FBZ0Msa0VBQWtFLHFEQUFxRCwwSUFBMEksa0JBQWtCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxHQUFHLDBCQUEwQiwwQkFBMEIsMkJBQTJCLEdBQUcsa0JBQWtCLDBCQUEwQiw0QkFBNEIsR0FBRyxhQUFhLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isd0JBQXdCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsMkJBQTJCLDRCQUE0QixHQUFHLHlCQUF5Qix5QkFBeUIsNEJBQTRCLEdBQUcsaUJBQWlCLGtCQUFrQixtQkFBbUIsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyxtQkFBbUIsR0FBRyx5SUFBeUk7QUFDdDVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hlYWRlci9IZWFkZXJSaWdodC5tb2R1bGUuc2Nzcz83ZGJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyUmlnaHRfaGVhZGVyLXJpZ2h0LWNvbnRhaW5lcl9fWXhPeEsgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzMwMmYyYjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI2KSAwcHggMnB4IDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uSGVhZGVyUmlnaHRfaGVhZGVyLXJpZ2h0LWNvbnRhaW5lcl9fWXhPeEsgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDJmMmI7XFxuICBjb2xvcjogI2YwZjBmMDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0hlYWRlci9IZWFkZXJSaWdodC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9TaGFyZWQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHRTtFQUNFLHlCQ0ZNO0VER04sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NIUTtFRElSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NDSWU7RURIZiwyQ0NVZTtFRFRmLGFBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBRUEseUJDZk07RURnQk4sY0NsQkk7RURtQkosNENBQUE7QUFITlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLy4uL1NoYXJlZC5zY3NzXFxcIjtcXG5cXG4uaGVhZGVyLXJpZ2h0LWNvbnRhaW5lciB7XFxuICBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpc3Rpb24tZWFzZTtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctbGlnaHQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcXG4gICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8vIFZhcmlhYmxlc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kcHJpbWFyeTogI2YwZjBmMDtcXG4vLyAkcHJpbWFyeTogI2YzZGZjMTtcXG4kc2Vjb25kYXJ5OiAjMzAyZjJiO1xcbi8vICR0ZXJ0aWFyeTogcmdiYSgxOTksIDU3LCA0MywgMC44KTtcXG4vLyAkdGVydGlhcnk6ICNkYTU2NGE7XFxuJHRlcnRpYXJ5OiAjZDA1YTQ5O1xcbiRsaWdodC1jb2xvcjogIzMwMmYyYjtcXG4kYm9yZGVyLWNvbG9yOiAjMzAyZjJiO1xcblxcbi8vIFdpZHRoXFxuJHdpZHRoOiA4MCU7XFxuXFxuLy8gVHJhbnNpdGlvblxcbiR0cmFuc2lzdGlvbi1lYXNlOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG5cXG4vLyBHcmlkLWdhcFxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vIG90aGVyIHN0dWZmXFxuJGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiRib3gtc2hhZG93LWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuMjYpIDBweCAycHggNnB4O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gUGxhY2Vob2xkZXJzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4lZmxleC1hbGlnbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtYmV0d2VlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuJWZsZXgtYmV0d2Vlbi1jb2x1bW4ge1xcbiAgQGV4dGVuZCAlZmxleC1iZXR3ZWVuO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuJWZsZXgtY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuJWZsZXgtY29sdW1uIHtcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ247XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4tanVzdGlmeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4lZmxleC1jb2x1bW4tY2VudGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiVtYWluLXdpZHRoIHtcXG4gIHdpZHRoOiAkd2lkdGg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuJWdyaWQtdHdvLWNvbHVtbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogJGdyaWQtZ2FwO1xcbn1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIE1peGluXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXItcmlnaHQtY29udGFpbmVyXCI6IFwiSGVhZGVyUmlnaHRfaGVhZGVyLXJpZ2h0LWNvbnRhaW5lcl9fWXhPeEtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Header/HeaderRight.module.scss\n"));

/***/ })

});