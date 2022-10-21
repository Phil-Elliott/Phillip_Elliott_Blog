"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscribeUser";
exports.ids = ["pages/api/subscribeUser"];
exports.modules = {

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "(api)/./pages/api/subscribeUser.js":
/*!************************************!*\
  !*** ./pages/api/subscribeUser.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email  } = req.body;\n    console.log({\n        email\n    });\n    if (!email) {\n        return res.status(400).json({\n            error: \"Email is required\"\n        });\n    }\n    try {\n        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;\n        const API_KEY = process.env.MAILCHIMP_API_KEY;\n        const DATACENTER = process.env.MAILCHIMP_API_SERVER;\n        const data = {\n            email_address: email,\n            status: \"subscribed\"\n        };\n        const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {\n            body: JSON.stringify(data),\n            headers: {\n                Authorization: `apikey ${API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\"\n        });\n        if (response.status >= 400) {\n            return res.status(400).json({\n                error: `There was an error subscribing to the newsletter.\n        Hit me up phillippelliott@gmail.com and I'll add you the old fashioned way :(.`\n            });\n        }\n        return res.status(201).json({\n            error: \"\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            error: error.message || error.toString()\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFdkMsaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxJQUFJO0lBRTFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFFSCxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBRXZCLElBQUksQ0FBQ0EsS0FBSyxFQUFFO1FBQ1YsT0FBT0QsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsbUJBQW1CO1NBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBRUQsSUFBSTtRQUNGLE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQjtRQUNyRCxNQUFNQyxPQUFPLEdBQUdILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7UUFDN0MsTUFBTUMsVUFBVSxHQUFHTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ25ELE1BQU1DLElBQUksR0FBRztZQUNYQyxhQUFhLEVBQUVoQixLQUFLO1lBQ3BCSSxNQUFNLEVBQUUsWUFBWTtTQUNyQjtRQUVELE1BQU1hLFFBQVEsR0FBRyxNQUFNcEIseURBQUssQ0FDMUIsQ0FBQyxRQUFRLEVBQUVnQixVQUFVLENBQUMsNkJBQTZCLEVBQUVOLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFFMUU7WUFDRU4sSUFBSSxFQUFFaUIsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQztZQUMxQkssT0FBTyxFQUFFO2dCQUNQQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVWLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RXLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FDRjtRQUVELElBQUlMLFFBQVEsQ0FBQ2IsTUFBTSxJQUFJLEdBQUcsRUFBRTtZQUMxQixPQUFPTCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUMxQkMsS0FBSyxFQUFFLENBQUM7c0ZBQ3NFLENBQUM7YUFDaEYsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPUCxHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUUsQ0FBQyxDQUFDO0tBQzVDLENBQUMsT0FBT0EsS0FBSyxFQUFFO1FBQ2QsT0FBT1AsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ2lCLE9BQU8sSUFBSWpCLEtBQUssQ0FBQ2tCLFFBQVEsRUFBRTtTQUFFLENBQUMsQ0FBQztLQUMzRTtDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaGlsbGlwX0VsbGlvdHRfQmxvZy8uL3BhZ2VzL2FwaS9zdWJzY3JpYmVVc2VyLmpzPzRmZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKHsgZW1haWwgfSk7XG5cbiAgaWYgKCFlbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIkVtYWlsIGlzIHJlcXVpcmVkXCIgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IEFVRElFTkNFX0lEID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FVRElFTkNFX0lEO1xuICAgIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVBJX0tFWTtcbiAgICBjb25zdCBEQVRBQ0VOVEVSID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9TRVJWRVI7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVtYWlsX2FkZHJlc3M6IGVtYWlsLFxuICAgICAgc3RhdHVzOiBcInN1YnNjcmliZWRcIixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovLyR7REFUQUNFTlRFUn0uYXBpLm1haWxjaGltcC5jb20vMy4wL2xpc3RzLyR7QVVESUVOQ0VfSUR9L21lbWJlcnNgLFxuXG4gICAgICB7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYGFwaWtleSAke0FQSV9LRVl9YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiBgVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nIHRvIHRoZSBuZXdzbGV0dGVyLlxuICAgICAgICBIaXQgbWUgdXAgcGhpbGxpcHBlbGxpb3R0QGdtYWlsLmNvbSBhbmQgSSdsbCBhZGQgeW91IHRoZSBvbGQgZmFzaGlvbmVkIHdheSA6KC5gLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZXJyb3I6IFwiXCIgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IudG9TdHJpbmcoKSB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcSIsInJlcyIsImVtYWlsIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJBVURJRU5DRV9JRCIsInByb2Nlc3MiLCJlbnYiLCJNQUlMQ0hJTVBfQVVESUVOQ0VfSUQiLCJBUElfS0VZIiwiTUFJTENISU1QX0FQSV9LRVkiLCJEQVRBQ0VOVEVSIiwiTUFJTENISU1QX0FQSV9TRVJWRVIiLCJkYXRhIiwiZW1haWxfYWRkcmVzcyIsInJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibWV0aG9kIiwibWVzc2FnZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribeUser.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribeUser.js"));
module.exports = __webpack_exports__;

})();