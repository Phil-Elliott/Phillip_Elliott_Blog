/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/SliderArticle.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/SliderArticle.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".SliderArticle_home-latest-article__5_JyS {\\n  cursor: pointer;\\n  position: relative;\\n}\\n.SliderArticle_home-latest-article__5_JyS .SliderArticle_home-latest-article-image__TAB93 {\\n  height: 25rem;\\n  position: relative;\\n}\\n.SliderArticle_home-latest-article__5_JyS .SliderArticle_home-latest-article-image__TAB93 img {\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  border-radius: 3px;\\n}\\n.SliderArticle_home-latest-article__5_JyS .SliderArticle_home-latest-article-image__TAB93 h2 {\\n  padding: 1rem;\\n  font-size: clamp(1rem, 1.25vw, 1.25vw);\\n  line-height: 150%;\\n  margin: 0;\\n  z-index: 1;\\n  position: absolute;\\n  bottom: 0;\\n  background-color: black;\\n  opacity: 0.8;\\n  width: 100%;\\n  text-align: center;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  display: -webkit-box;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .SliderArticle_home-latest-article__5_JyS {\\n    padding-bottom: 1rem;\\n  }\\n  .SliderArticle_home-latest-article__5_JyS img {\\n    height: 85%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Pages/Home/Latest/SliderArticle.module.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,eAAA;EAEA,kBAAA;AAFF;AAIE;EACE,aAAA;EACA,kBAAA;AAFJ;AAII;EACE,oBAAA;KAAA,iBAAA;EACA,kBAAA;AAFN;AAKI;EACE,aAAA;EACA,sCAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,oBAAA;AAHN;;AA6BA;EACE;IACE,oBAAA;EA1BF;EA4BE;IACE,WAAA;EA1BJ;AACF\",\"sourcesContent\":[\"@use \\\"../../../abstracts\\\" as *;\\n\\n.home-latest-article {\\n  cursor: pointer;\\n  // height: 30rem;\\n  position: relative;\\n\\n  .home-latest-article-image {\\n    height: 25rem;\\n    position: relative;\\n\\n    img {\\n      object-fit: cover;\\n      border-radius: 3px;\\n    }\\n\\n    h2 {\\n      padding: 1rem;\\n      font-size: clamp(1rem, 1.25vw, 1.25vw);\\n      line-height: 150%;\\n      margin: 0;\\n      z-index: 1;\\n      position: absolute;\\n      bottom: 0;\\n      background-color: black;\\n      opacity: 0.8;\\n      width: 100%;\\n      text-align: center;\\n      overflow: hidden;\\n      text-overflow: ellipsis;\\n      display: -webkit-box;\\n      // -webkit-box-orient: vertical;\\n      // -webkit-line-clamp: N; /* number of lines to show */\\n      // line-height: X; /* fallback */\\n      // max-height: X * N; /* fallback */\\n    }\\n  }\\n\\n  //   .giveMeEllipsis {\\n  //     overflow: hidden;\\n  //     text-overflow: ellipsis;\\n  //     display: -webkit-box;\\n  //     -webkit-box-orient: vertical;\\n  //     -webkit-line-clamp: N; /* number of lines to show */\\n  //     line-height: X;        /* fallback */\\n  //     max-height: X*N;       /* fallback */\\n  //  }\\n\\n  // h2 {\\n  //   padding-top: 1rem;\\n  //   font-size: clamp(1.25rem, 1.5vw, 1.5vw);\\n  //   line-height: 150%;\\n  //   margin: 0;\\n  // }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .home-latest-article {\\n    padding-bottom: 1rem;\\n\\n    img {\\n      height: 85%;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home-latest-article\": \"SliderArticle_home-latest-article__5_JyS\",\n\t\"home-latest-article-image\": \"SliderArticle_home-latest-article-image__TAB93\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9TbGlkZXJBcnRpY2xlLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSxxRkFBcUYsb0JBQW9CLHVCQUF1QixHQUFHLDZGQUE2RixrQkFBa0IsdUJBQXVCLEdBQUcsaUdBQWlHLHlCQUF5Qix5QkFBeUIsdUJBQXVCLEdBQUcsZ0dBQWdHLGtCQUFrQiwyQ0FBMkMsc0JBQXNCLGNBQWMsZUFBZSx1QkFBdUIsY0FBYyw0QkFBNEIsaUJBQWlCLGdCQUFnQix1QkFBdUIscUJBQXFCLDRCQUE0Qix5QkFBeUIsR0FBRyxnREFBZ0QsK0NBQStDLDJCQUEyQixLQUFLLG1EQUFtRCxrQkFBa0IsS0FBSyxHQUFHLE9BQU8sbUhBQW1ILFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSwwREFBMEQsMEJBQTBCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGtDQUFrQyxvQkFBb0IseUJBQXlCLGFBQWEsMEJBQTBCLDJCQUEyQixPQUFPLFlBQVksc0JBQXNCLCtDQUErQywwQkFBMEIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsa0JBQWtCLGdDQUFnQyxxQkFBcUIsb0JBQW9CLDJCQUEyQix5QkFBeUIsZ0NBQWdDLDZCQUE2Qix3Q0FBd0Msa0NBQWtDLHdEQUF3RCw0Q0FBNEMscUJBQXFCLEtBQUssNEJBQTRCLDRCQUE0QixtQ0FBbUMsZ0NBQWdDLHdDQUF3QyxrQ0FBa0MsK0RBQStELGdEQUFnRCx1QkFBdUIsYUFBYSwyQkFBMkIsaURBQWlELDJCQUEyQixtQkFBbUIsUUFBUSxHQUFHLGdEQUFnRCwwQkFBMEIsMkJBQTJCLGFBQWEsb0JBQW9CLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM1N0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9TbGlkZXJBcnRpY2xlLm1vZHVsZS5zY3NzPzQ1NTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZV9fNV9KeVMgLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZS1pbWFnZV9fVEFCOTMge1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZV9fNV9KeVMgLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZS1pbWFnZV9fVEFCOTMgaW1nIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIC5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VfX1RBQjkzIGgyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDEuMjV2dywgMS4yNXZ3KTtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICB9XFxuICAuU2xpZGVyQXJ0aWNsZV9ob21lLWxhdGVzdC1hcnRpY2xlX181X0p5UyBpbWcge1xcbiAgICBoZWlnaHQ6IDg1JTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9TbGlkZXJBcnRpY2xlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBQTtFQUVBLGtCQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUhOOztBQTZCQTtFQUNFO0lBQ0Usb0JBQUE7RUExQkY7RUE0QkU7SUFDRSxXQUFBO0VBMUJKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vLi4vLi4vYWJzdHJhY3RzXFxcIiBhcyAqO1xcblxcbi5ob21lLWxhdGVzdC1hcnRpY2xlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8vIGhlaWdodDogMzByZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuaG9tZS1sYXRlc3QtYXJ0aWNsZS1pbWFnZSB7XFxuICAgIGhlaWdodDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgLy8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAvLyAtd2Via2l0LWxpbmUtY2xhbXA6IE47IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXFxuICAgICAgLy8gbGluZS1oZWlnaHQ6IFg7IC8qIGZhbGxiYWNrICovXFxuICAgICAgLy8gbWF4LWhlaWdodDogWCAqIE47IC8qIGZhbGxiYWNrICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vICAgLmdpdmVNZUVsbGlwc2lzIHtcXG4gIC8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLy8gICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgLy8gICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAvLyAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiBOOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xcbiAgLy8gICAgIGxpbmUtaGVpZ2h0OiBYOyAgICAgICAgLyogZmFsbGJhY2sgKi9cXG4gIC8vICAgICBtYXgtaGVpZ2h0OiBYKk47ICAgICAgIC8qIGZhbGxiYWNrICovXFxuICAvLyAgfVxcblxcbiAgLy8gaDIge1xcbiAgLy8gICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIC8vICAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAxLjV2dywgMS41dncpO1xcbiAgLy8gICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIC8vICAgbWFyZ2luOiAwO1xcbiAgLy8gfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmhvbWUtbGF0ZXN0LWFydGljbGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDg1JTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJob21lLWxhdGVzdC1hcnRpY2xlXCI6IFwiU2xpZGVyQXJ0aWNsZV9ob21lLWxhdGVzdC1hcnRpY2xlX181X0p5U1wiLFxuXHRcImhvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VcIjogXCJTbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VfX1RBQjkzXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/SliderArticle.module.scss\n"));

/***/ })

});