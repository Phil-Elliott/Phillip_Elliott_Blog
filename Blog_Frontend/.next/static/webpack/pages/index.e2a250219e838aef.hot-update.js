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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".SliderArticle_home-latest-article__5_JyS {\\n  cursor: pointer;\\n  position: relative;\\n}\\n.SliderArticle_home-latest-article__5_JyS .SliderArticle_home-latest-article-image__TAB93 {\\n  height: clamp(25rem, 20vw, 25vw);\\n  position: relative;\\n}\\n.SliderArticle_home-latest-article__5_JyS .SliderArticle_home-latest-article-image__TAB93 img {\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  border-radius: 3px;\\n}\\n.SliderArticle_image-content-container___g71W {\\n  position: relative;\\n  border-radius: 3px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100%;\\n  width: 100%;\\n  opacity: 0.85;\\n  line-height: 150%;\\n  color: white;\\n  transition: all 1s ease-in-out;\\n  overflow: hidden;\\n}\\n.SliderArticle_image-content-container___g71W h2 {\\n  background-color: black;\\n  font-size: clamp(1.15rem, 1.25vw, 1.25vw);\\n  margin: 0;\\n  line-height: 150%;\\n  padding: 1rem;\\n  text-align: center;\\n  transition: all 0.5s ease-in-out;\\n  transition: all 1s ease-in-out;\\n  width: 100%;\\n  opacity: 0;\\n}\\n.SliderArticle_image-content-container___g71W p {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  line-height: 150%;\\n  padding: 0 1rem;\\n  text-align: center;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  transition: all 0.15s ease-in-out;\\n  opacity: 0;\\n  margin-block: auto;\\n}\\n.SliderArticle_image-content-container___g71W button {\\n  background-color: black;\\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n  border: none;\\n  border-radius: 3px;\\n  color: #f0f0f0;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  padding: 0.5rem 2rem;\\n  transition: all 0.5s ease-in-out;\\n  margin-inline: auto;\\n  margin-top: 1rem;\\n  position: relative;\\n  opacity: 0;\\n}\\n.SliderArticle_image-content-container___g71W button:hover {\\n  cursor: pointer;\\n  opacity: 0.75;\\n}\\n.SliderArticle_image-content-container___g71W:hover {\\n  background-color: #d05a49;\\n  padding-block: 2rem;\\n  transition: all 0.5s ease-in-out;\\n}\\n.SliderArticle_image-content-container___g71W:hover h2 {\\n  opacity: 1;\\n  position: relative;\\n  transition: all 0.5s ease-in-out;\\n}\\n.SliderArticle_image-content-container___g71W:hover p {\\n  opacity: 1;\\n  transition: all 1s ease-in-out;\\n}\\n.SliderArticle_image-content-container___g71W:hover button {\\n  opacity: 1;\\n  transition: all 0.5s ease-in-out;\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .SliderArticle_home-latest-article__5_JyS {\\n    padding-bottom: 2rem;\\n  }\\n}\\n/*\\n  go back to have the title and elipsis at the bottom of the image\\n  have everything else happen on hover\\n\\n\\n  could have everything slide up on hover\\n  have color change \\n  have image scale in a little bit\\n\\n\\n\\n\\n\\n  try using grid \\n  and use order to change the header to the top \\n  could have the other elements display\\n\\n\\n  could also have two title components \\n  bottom one dissapears on hover\\n  top one appears on hover and translates in and out \\n  wont leave the box because of the overflow hidden\\n\\n\\n\\n  only have change at 650 \\n  show title at bottom or full hover effect \\n\\n*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Pages/Home/Latest/SliderArticle.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,eAAA;EAEA,kBAAA;AAFF;AAIE;EACE,gCAAA;EAEA,kBAAA;AAHJ;AAKI;EACE,oBAAA;KAAA,iBAAA;EACA,kBAAA;AAHN;AA+BA;EACE,kBAAA;EACA,kBCXc;EDYd,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,8BAAA;EACA,gBAAA;AA7BF;AA+BE;EACE,uBAAA;EACA,yCAAA;EACA,SAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,gCC9Ce;ED+Cf,8BAAA;EACA,WAAA;EACA,UAAA;AA7BJ;AAqCE;EACE,gCAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,iCAAA;EACA,UAAA;EACA,kBAAA;AAnCJ;AAqCE;EACE,uBAAA;EACA,4CC5DS;ED6DT,YAAA;EACA,kBCxDY;EDyDZ,cCvFM;EDwFN,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,gCC7Ee;ED8Ef,mBAAA;EACA,gBAAA;EAEA,kBAAA;EACA,UAAA;AApCJ;AAsCI;EACE,eAAA;EACA,aAAA;AApCN;AAwCE;EACE,yBCvGO;EDwGP,mBAAA;EACA,gCC7Fe;ADuDnB;AAwCI;EACE,UAAA;EACA,kBAAA;EAEA,gCCnGa;AD4DnB;AA4CI;EACE,UAAA;EACA,8BAAA;AA1CN;AA4CI;EACE,UAAA;EACA,gCC9Ga;ADoEnB;;AA+CA;EACE;IACE,oBAAA;EA5CF;AACF;AA+CA;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAAA\",\"sourcesContent\":[\"@use \\\"../../../abstracts\\\" as *;\\n\\n.home-latest-article {\\n  cursor: pointer;\\n  // height: 30rem;\\n  position: relative;\\n\\n  .home-latest-article-image {\\n    height: clamp(25rem, 20vw, 25vw);\\n    // height: 25rem;\\n    position: relative;\\n\\n    img {\\n      object-fit: cover;\\n      border-radius: 3px;\\n    }\\n\\n    h2 {\\n      // padding: 1rem;\\n      // font-size: clamp(1rem, 1.25vw, 1.25vw);\\n      // line-height: 150%;\\n      // margin: 0;\\n      // z-index: 1;\\n      // position: absolute;\\n      // bottom: 0;\\n      // background-color: $secondary;\\n      // opacity: 0.9;\\n      // text-align: center;\\n      // overflow: hidden;\\n      // white-space: nowrap;\\n      // text-overflow: ellipsis;\\n      // width: 100%;\\n    }\\n\\n    // &:hover {\\n    //   h2 {\\n    //     bottom: 70%;\\n    //   }\\n    // }\\n  }\\n}\\n\\n.image-content-container {\\n  position: relative;\\n  border-radius: $border-radius;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100%;\\n  width: 100%;\\n  opacity: 0.85;\\n  line-height: 150%;\\n  color: white;\\n  transition: all 1s ease-in-out;\\n  overflow: hidden;\\n\\n  h2 {\\n    background-color: black;\\n    font-size: clamp(1.15rem, 1.25vw, 1.25vw);\\n    margin: 0;\\n    line-height: 150%;\\n    padding: 1rem;\\n    text-align: center;\\n    transition: $transistion-ease;\\n    transition: all 1s ease-in-out;\\n    width: 100%;\\n    opacity: 0;\\n    // margin-block: auto;\\n    // position: absolute;\\n    // bottom: 0;\\n    // bottom: 0rem;\\n    // transition-delay: position 0.5s;\\n  }\\n\\n  p {\\n    font-size: clamp(1rem, 1vw, 1vw);\\n    line-height: 150%;\\n    padding: 0 1rem;\\n    text-align: center;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n    transition: all 0.15s ease-in-out;\\n    opacity: 0;\\n    margin-block: auto;\\n  }\\n  button {\\n    background-color: black;\\n    box-shadow: $box-shadow;\\n    border: none;\\n    border-radius: $border-radius;\\n    color: $primary;\\n    font-size: 1rem;\\n    font-weight: 500;\\n    padding: 0.5rem 2rem;\\n    transition: $transistion-ease;\\n    margin-inline: auto;\\n    margin-top: 1rem;\\n    // overflow: hidden;\\n    position: relative;\\n    opacity: 0;\\n\\n    &:hover {\\n      cursor: pointer;\\n      opacity: 0.75;\\n    }\\n  }\\n\\n  &:hover {\\n    background-color: $tertiary;\\n    padding-block: 2rem;\\n    transition: $transistion-ease;\\n\\n    h2 {\\n      opacity: 1;\\n      position: relative;\\n      // margin-top: 0rem;\\n      transition: $transistion-ease;\\n      // transform: translateY(-100%);\\n      // bottom: -10rem;\\n      // bottom: 15rem;\\n    }\\n    p {\\n      opacity: 1;\\n      transition: all 1s ease-in-out;\\n    }\\n    button {\\n      opacity: 1;\\n      transition: $transistion-ease;\\n    }\\n  }\\n}\\n\\n@media only screen and (max-width: 1000px) {\\n  .home-latest-article {\\n    padding-bottom: 2rem;\\n  }\\n}\\n\\n/*\\n  go back to have the title and elipsis at the bottom of the image\\n  have everything else happen on hover\\n\\n\\n  could have everything slide up on hover\\n  have color change \\n  have image scale in a little bit\\n\\n\\n\\n\\n\\n  try using grid \\n  and use order to change the header to the top \\n  could have the other elements display\\n\\n\\n  could also have two title components \\n  bottom one dissapears on hover\\n  top one appears on hover and translates in and out \\n  wont leave the box because of the overflow hidden\\n\\n\\n\\n  only have change at 650 \\n  show title at bottom or full hover effect \\n\\n*/\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #f0f0f0;\\n$secondary: #302f2b;\\n$tertiary: #d05a49;\\n$light-color: #333333;\\n$border-color: #807e72;\\n\\n//==================================================\\n// Width\\n//==================================================\\n$width: 80%;\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Grid-gap\\n//==================================================\\n$grid-gap: 10%;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$box-shadow-light: rgba(0, 0, 0, 0.26) 0px 2px 6px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"home-latest-article\": \"SliderArticle_home-latest-article__5_JyS\",\n\t\"home-latest-article-image\": \"SliderArticle_home-latest-article-image__TAB93\",\n\t\"image-content-container\": \"SliderArticle_image-content-container___g71W\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9TbGlkZXJBcnRpY2xlLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNEtBQXdGO0FBQ2xJO0FBQ0E7QUFDQSxxRkFBcUYsb0JBQW9CLHVCQUF1QixHQUFHLDZGQUE2RixxQ0FBcUMsdUJBQXVCLEdBQUcsaUdBQWlHLHlCQUF5Qix5QkFBeUIsdUJBQXVCLEdBQUcsaURBQWlELHVCQUF1Qix1QkFBdUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsaUJBQWlCLGdCQUFnQixrQkFBa0Isc0JBQXNCLGlCQUFpQixtQ0FBbUMscUJBQXFCLEdBQUcsb0RBQW9ELDRCQUE0Qiw4Q0FBOEMsY0FBYyxzQkFBc0Isa0JBQWtCLHVCQUF1QixxQ0FBcUMsbUNBQW1DLGdCQUFnQixlQUFlLEdBQUcsbURBQW1ELHFDQUFxQyxzQkFBc0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsNEJBQTRCLHNDQUFzQyxlQUFlLHVCQUF1QixHQUFHLHdEQUF3RCw0QkFBNEIsaURBQWlELGlCQUFpQix1QkFBdUIsbUJBQW1CLG9CQUFvQixxQkFBcUIseUJBQXlCLHFDQUFxQyx3QkFBd0IscUJBQXFCLHVCQUF1QixlQUFlLEdBQUcsOERBQThELG9CQUFvQixrQkFBa0IsR0FBRyx1REFBdUQsOEJBQThCLHdCQUF3QixxQ0FBcUMsR0FBRywwREFBMEQsZUFBZSx1QkFBdUIscUNBQXFDLEdBQUcseURBQXlELGVBQWUsbUNBQW1DLEdBQUcsOERBQThELGVBQWUscUNBQXFDLEdBQUcsZ0RBQWdELCtDQUErQywyQkFBMkIsS0FBSyxHQUFHLHltQkFBeW1CLGdLQUFnSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFFBQVEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLGlDQUFpQywwREFBMEQsMEJBQTBCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGtDQUFrQyx1Q0FBdUMsdUJBQXVCLHlCQUF5QixhQUFhLDBCQUEwQiwyQkFBMkIsT0FBTyxZQUFZLHlCQUF5QixrREFBa0QsNkJBQTZCLHFCQUFxQixzQkFBc0IsOEJBQThCLHFCQUFxQix3Q0FBd0Msd0JBQXdCLDhCQUE4Qiw0QkFBNEIsK0JBQStCLG1DQUFtQyx1QkFBdUIsT0FBTyxvQkFBb0IsZUFBZSx5QkFBeUIsWUFBWSxVQUFVLEtBQUssR0FBRyw4QkFBOEIsdUJBQXVCLGtDQUFrQyxrQkFBa0IsMkJBQTJCLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLGtCQUFrQixzQkFBc0IsaUJBQWlCLG1DQUFtQyxxQkFBcUIsVUFBVSw4QkFBOEIsZ0RBQWdELGdCQUFnQix3QkFBd0Isb0JBQW9CLHlCQUF5QixvQ0FBb0MscUNBQXFDLGtCQUFrQixpQkFBaUIsNEJBQTRCLDRCQUE0QixtQkFBbUIsc0JBQXNCLHlDQUF5QyxLQUFLLFNBQVMsdUNBQXVDLHdCQUF3QixzQkFBc0IseUJBQXlCLHVCQUF1Qiw4QkFBOEIsd0NBQXdDLGlCQUFpQix5QkFBeUIsS0FBSyxZQUFZLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLG9DQUFvQyxzQkFBc0Isc0JBQXNCLHVCQUF1QiwyQkFBMkIsb0NBQW9DLDBCQUEwQix1QkFBdUIsMEJBQTBCLHlCQUF5QixpQkFBaUIsaUJBQWlCLHdCQUF3QixzQkFBc0IsT0FBTyxLQUFLLGVBQWUsa0NBQWtDLDBCQUEwQixvQ0FBb0MsWUFBWSxtQkFBbUIsMkJBQTJCLDRCQUE0QixzQ0FBc0Msd0NBQXdDLDBCQUEwQix5QkFBeUIsT0FBTyxTQUFTLG1CQUFtQix1Q0FBdUMsT0FBTyxjQUFjLG1CQUFtQixzQ0FBc0MsT0FBTyxLQUFLLEdBQUcsZ0RBQWdELDBCQUEwQiwyQkFBMkIsS0FBSyxHQUFHLGt2QkFBa3ZCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHlCQUF5QixzSUFBc0ksdUtBQXVLLDRJQUE0SSw4S0FBOEsscURBQXFELHNKQUFzSixrSkFBa0o7QUFDcHJSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9QYWdlcy9Ib21lL0xhdGVzdC9TbGlkZXJBcnRpY2xlLm1vZHVsZS5zY3NzPzQ1NTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZV9fNV9KeVMgLlNsaWRlckFydGljbGVfaG9tZS1sYXRlc3QtYXJ0aWNsZS1pbWFnZV9fVEFCOTMge1xcbiAgaGVpZ2h0OiBjbGFtcCgyNXJlbSwgMjB2dywgMjV2dyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIC5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VfX1RBQjkzIGltZyB7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuODU7XFxuICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5TbGlkZXJBcnRpY2xlX2ltYWdlLWNvbnRlbnQtY29udGFpbmVyX19fZzcxVyBoMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4xNXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5TbGlkZXJBcnRpY2xlX2ltYWdlLWNvbnRlbnQtY29udGFpbmVyX19fZzcxVyBwIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxdncpO1xcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVcgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogI2YwZjBmMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVcgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcbi5TbGlkZXJBcnRpY2xlX2ltYWdlLWNvbnRlbnQtY29udGFpbmVyX19fZzcxVzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA1YTQ5O1xcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVc6aG92ZXIgaDIge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVc6aG92ZXIgcCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbn1cXG4uU2xpZGVyQXJ0aWNsZV9pbWFnZS1jb250ZW50LWNvbnRhaW5lcl9fX2c3MVc6aG92ZXIgYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5TbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGVfXzVfSnlTIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICB9XFxufVxcbi8qXFxuICBnbyBiYWNrIHRvIGhhdmUgdGhlIHRpdGxlIGFuZCBlbGlwc2lzIGF0IHRoZSBib3R0b20gb2YgdGhlIGltYWdlXFxuICBoYXZlIGV2ZXJ5dGhpbmcgZWxzZSBoYXBwZW4gb24gaG92ZXJcXG5cXG5cXG4gIGNvdWxkIGhhdmUgZXZlcnl0aGluZyBzbGlkZSB1cCBvbiBob3ZlclxcbiAgaGF2ZSBjb2xvciBjaGFuZ2UgXFxuICBoYXZlIGltYWdlIHNjYWxlIGluIGEgbGl0dGxlIGJpdFxcblxcblxcblxcblxcblxcbiAgdHJ5IHVzaW5nIGdyaWQgXFxuICBhbmQgdXNlIG9yZGVyIHRvIGNoYW5nZSB0aGUgaGVhZGVyIHRvIHRoZSB0b3AgXFxuICBjb3VsZCBoYXZlIHRoZSBvdGhlciBlbGVtZW50cyBkaXNwbGF5XFxuXFxuXFxuICBjb3VsZCBhbHNvIGhhdmUgdHdvIHRpdGxlIGNvbXBvbmVudHMgXFxuICBib3R0b20gb25lIGRpc3NhcGVhcnMgb24gaG92ZXJcXG4gIHRvcCBvbmUgYXBwZWFycyBvbiBob3ZlciBhbmQgdHJhbnNsYXRlcyBpbiBhbmQgb3V0IFxcbiAgd29udCBsZWF2ZSB0aGUgYm94IGJlY2F1c2Ugb2YgdGhlIG92ZXJmbG93IGhpZGRlblxcblxcblxcblxcbiAgb25seSBoYXZlIGNoYW5nZSBhdCA2NTAgXFxuICBzaG93IHRpdGxlIGF0IGJvdHRvbSBvciBmdWxsIGhvdmVyIGVmZmVjdCBcXG5cXG4qL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvUGFnZXMvSG9tZS9MYXRlc3QvU2xpZGVyQXJ0aWNsZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBQTtFQUVBLGtCQUFBO0FBRkY7QUFJRTtFQUNFLGdDQUFBO0VBRUEsa0JBQUE7QUFISjtBQUtJO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBSE47QUErQkE7RUFDRSxrQkFBQTtFQUNBLGtCQ1hjO0VEWWQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBN0JGO0FBK0JFO0VBQ0UsdUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQzlDZTtFRCtDZiw4QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBN0JKO0FBcUNFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQW5DSjtBQXFDRTtFQUNFLHVCQUFBO0VBQ0EsNENDNURTO0VENkRULFlBQUE7RUFDQSxrQkN4RFk7RUR5RFosY0N2Rk07RUR3Rk4sZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0M3RWU7RUQ4RWYsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtBQXBDSjtBQXNDSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBcENOO0FBd0NFO0VBQ0UseUJDdkdPO0VEd0dQLG1CQUFBO0VBQ0EsZ0NDN0ZlO0FEdURuQjtBQXdDSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGdDQ25HYTtBRDREbkI7QUE0Q0k7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUExQ047QUE0Q0k7RUFDRSxVQUFBO0VBQ0EsZ0NDOUdhO0FEb0VuQjs7QUErQ0E7RUFDRTtJQUNFLG9CQUFBO0VBNUNGO0FBQ0Y7QUErQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi8uLi9hYnN0cmFjdHNcXFwiIGFzICo7XFxuXFxuLmhvbWUtbGF0ZXN0LWFydGljbGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLy8gaGVpZ2h0OiAzMHJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5ob21lLWxhdGVzdC1hcnRpY2xlLWltYWdlIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNXJlbSwgMjB2dywgMjV2dyk7XFxuICAgIC8vIGhlaWdodDogMjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgaDIge1xcbiAgICAgIC8vIHBhZGRpbmc6IDFyZW07XFxuICAgICAgLy8gZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICAgICAgLy8gbGluZS1oZWlnaHQ6IDE1MCU7XFxuICAgICAgLy8gbWFyZ2luOiAwO1xcbiAgICAgIC8vIHotaW5kZXg6IDE7XFxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIC8vIGJvdHRvbTogMDtcXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5O1xcbiAgICAgIC8vIG9wYWNpdHk6IDAuOTtcXG4gICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgIC8vIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC8vICY6aG92ZXIge1xcbiAgICAvLyAgIGgyIHtcXG4gICAgLy8gICAgIGJvdHRvbTogNzAlO1xcbiAgICAvLyAgIH1cXG4gICAgLy8gfVxcbiAgfVxcbn1cXG5cXG4uaW1hZ2UtY29udGVudC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC44NTtcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGgyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4xNXJlbSwgMS4yNXZ3LCAxLjI1dncpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2lzdGlvbi1lYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAvLyBtYXJnaW4tYmxvY2s6IGF1dG87XFxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLy8gYm90dG9tOiAwO1xcbiAgICAvLyBib3R0b206IDByZW07XFxuICAgIC8vIHRyYW5zaXRpb24tZGVsYXk6IHBvc2l0aW9uIDAuNXM7XFxuICB9XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDF2dyk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBjb2xvcjogJHByaW1hcnk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgIHRyYW5zaXRpb246ICR0cmFuc2lzdGlvbi1lYXNlO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICB9XFxuICB9XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5O1xcbiAgICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpc3Rpb24tZWFzZTtcXG5cXG4gICAgaDIge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIC8vIG1hcmdpbi10b3A6IDByZW07XFxuICAgICAgdHJhbnNpdGlvbjogJHRyYW5zaXN0aW9uLWVhc2U7XFxuICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAvLyBib3R0b206IC0xMHJlbTtcXG4gICAgICAvLyBib3R0b206IDE1cmVtO1xcbiAgICB9XFxuICAgIHAge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuICAgIGJ1dHRvbiB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICB0cmFuc2l0aW9uOiAkdHJhbnNpc3Rpb24tZWFzZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLmhvbWUtbGF0ZXN0LWFydGljbGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIH1cXG59XFxuXFxuLypcXG4gIGdvIGJhY2sgdG8gaGF2ZSB0aGUgdGl0bGUgYW5kIGVsaXBzaXMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW1hZ2VcXG4gIGhhdmUgZXZlcnl0aGluZyBlbHNlIGhhcHBlbiBvbiBob3ZlclxcblxcblxcbiAgY291bGQgaGF2ZSBldmVyeXRoaW5nIHNsaWRlIHVwIG9uIGhvdmVyXFxuICBoYXZlIGNvbG9yIGNoYW5nZSBcXG4gIGhhdmUgaW1hZ2Ugc2NhbGUgaW4gYSBsaXR0bGUgYml0XFxuXFxuXFxuXFxuXFxuXFxuICB0cnkgdXNpbmcgZ3JpZCBcXG4gIGFuZCB1c2Ugb3JkZXIgdG8gY2hhbmdlIHRoZSBoZWFkZXIgdG8gdGhlIHRvcCBcXG4gIGNvdWxkIGhhdmUgdGhlIG90aGVyIGVsZW1lbnRzIGRpc3BsYXlcXG5cXG5cXG4gIGNvdWxkIGFsc28gaGF2ZSB0d28gdGl0bGUgY29tcG9uZW50cyBcXG4gIGJvdHRvbSBvbmUgZGlzc2FwZWFycyBvbiBob3ZlclxcbiAgdG9wIG9uZSBhcHBlYXJzIG9uIGhvdmVyIGFuZCB0cmFuc2xhdGVzIGluIGFuZCBvdXQgXFxuICB3b250IGxlYXZlIHRoZSBib3ggYmVjYXVzZSBvZiB0aGUgb3ZlcmZsb3cgaGlkZGVuXFxuXFxuXFxuXFxuICBvbmx5IGhhdmUgY2hhbmdlIGF0IDY1MCBcXG4gIHNob3cgdGl0bGUgYXQgYm90dG9tIG9yIGZ1bGwgaG92ZXIgZWZmZWN0IFxcblxcbiovXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjZjBmMGYwO1xcbiRzZWNvbmRhcnk6ICMzMDJmMmI7XFxuJHRlcnRpYXJ5OiAjZDA1YTQ5O1xcbiRsaWdodC1jb2xvcjogIzMzMzMzMztcXG4kYm9yZGVyLWNvbG9yOiAjODA3ZTcyO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kd2lkdGg6IDgwJTtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEdyaWQtZ2FwXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRncmlkLWdhcDogMTAlO1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBCb3ggU2hhZG93c1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuJGJveC1zaGFkb3ctbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4yNikgMHB4IDJweCA2cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJob21lLWxhdGVzdC1hcnRpY2xlXCI6IFwiU2xpZGVyQXJ0aWNsZV9ob21lLWxhdGVzdC1hcnRpY2xlX181X0p5U1wiLFxuXHRcImhvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VcIjogXCJTbGlkZXJBcnRpY2xlX2hvbWUtbGF0ZXN0LWFydGljbGUtaW1hZ2VfX1RBQjkzXCIsXG5cdFwiaW1hZ2UtY29udGVudC1jb250YWluZXJcIjogXCJTbGlkZXJBcnRpY2xlX2ltYWdlLWNvbnRlbnQtY29udGFpbmVyX19fZzcxV1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Pages/Home/Latest/SliderArticle.module.scss\n"));

/***/ })

});