"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/map.tsx":
/*!********************************!*\
  !*** ./app/components/map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"(app-pages-browser)/./node_modules/.pnpm/mapbox-gl@3.4.0/node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ \"(app-pages-browser)/./node_modules/.pnpm/@mapbox+mapbox-gl-geocoder@5.0.2/node_modules/@mapbox/mapbox-gl-geocoder/lib/index.js\");\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"(app-pages-browser)/./node_modules/.pnpm/mapbox-gl@3.4.0/node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var _mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css */ \"(app-pages-browser)/./node_modules/.pnpm/@mapbox+mapbox-gl-geocoder@5.0.2/node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css\");\n/* harmony import */ var _public_binMarker_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/binMarker.png */ \"(app-pages-browser)/./public/binMarker.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MapboxMap() {\n    _s();\n    const mapNode = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [bins, setBins] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);\n    const mapboxMapRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const fetchBins = async ()=>{\n            try {\n                const response = await fetch(\"https://bodmin-exrtqap6lq-uc.a.run.app/api/home\");\n                const result = await response.json();\n                setBins(result.data);\n                console.log(result.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchBins();\n        const intervalId = setInterval(fetchBins, 1000); // Fetch data every 1 minute\n        const node = mapNode.current;\n        if ( false || node === null) return;\n        const mapboxMap = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: node,\n            accessToken: \"pk.eyJ1IjoicmFuZ2ltYW5qZXJhIiwiYSI6ImNseHZtMGlsMTB0Zzgya3BqYTdudm5kYTMifQ.jS4PMe9KKSGE2EEq_03uIg\",\n            style: \"mapbox://styles/mapbox/streets-v11\",\n            center: [\n                100.61125277141514,\n                13.685317408394551\n            ],\n            zoom: 14\n        });\n        mapboxMapRef.current = mapboxMap;\n        const geocoder = new (_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_3___default())({\n            accessToken: \"pk.eyJ1IjoicmFuZ2ltYW5qZXJhIiwiYSI6ImNseHZtMGlsMTB0Zzgya3BqYTdudm5kYTMifQ.jS4PMe9KKSGE2EEq_03uIg\",\n            mapboxgl: (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default())\n        });\n        mapboxMap.addControl(geocoder);\n        geocoder.on(\"result\", (event)=>{\n            const { result } = event;\n            if (result && result.center) {\n                mapboxMap.flyTo({\n                    center: result.center,\n                    zoom: 14\n                });\n            }\n        });\n        return ()=>{\n            clearInterval(intervalId);\n            mapboxMap.remove();\n        };\n    }, []);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        if (bins.length === 0 || !mapboxMapRef.current) return;\n        const mapboxMap = mapboxMapRef.current;\n        // Remove existing markers\n        const existingMarkers = document.getElementsByClassName(\"custom-marker\");\n        while(existingMarkers.length > 0){\n            var _existingMarkers__parentNode;\n            (_existingMarkers__parentNode = existingMarkers[0].parentNode) === null || _existingMarkers__parentNode === void 0 ? void 0 : _existingMarkers__parentNode.removeChild(existingMarkers[0]);\n        }\n        bins.forEach((bin)=>{\n            const popupContent = \"\\n        <div class='w-64 h-fit bg-white rounded-xl shadow-2xl text-center p-5'>\\n          <h1 class='text-[#fd8d14] font-bold text-lg'>\".concat(bin.name, \"</h1>\\n            <div class='flex flex-col gap-2 my-3 px-6'>\\n              <div class='flex justify-between'>\\n                <p class='text-sm'>ขยะรีไซเคิล</p>\\n                <div class='text-sm font-bold bg-[#ffde00] w-10 rounded-2xl'>\").concat(bin.recycle, \"</div>\\n              </div>\\n              <div class='flex justify-between'>\\n                <p class='text-sm'>ขยะทั่วไป</p>\\n                <div class='text-sm font-bold bg-[#155bec] w-10 rounded-2xl'>\").concat(bin.general, \"</div>\\n              </div>\\n              <div class='flex justify-between'>\\n                <p class='text-sm'>ขยะเปียก</p>\\n                <div class='text-sm font-bold bg-[#5b9e57] w-10 rounded-2xl'>\").concat(bin.wet, \"</div>\\n              </div>\\n              <div class='flex justify-between'>\\n                <p class='text-sm'>ขยะอันตราย</p>\\n                <div class='text-sm font-bold bg-[#ec4d5a] w-10 rounded-2xl'>\").concat(bin.danger, \"</div>\\n              </div>\\n            </div>\\n          <div class='text-sm font-bold'>\\n            สถานะถังขยะ:\\n            \").concat(!bin.status && bin.empty ? \"<span class='text-red-500'>ถังยังไม่เต็ม (ยังไม่ถูกเก็บ)</span>\" : bin.status && bin.empty ? \"<span class='text-green-500'>ยังไม่เต็ม (ถูกเก็บแล้ว)</span>\" : \"<span class='text-red-500'>ถังขยะเต็ม</span>\", \"\\n          </div>\\n        </div>\\n      \");\n            const markerElement = document.createElement(\"div\");\n            markerElement.className = \"custom-marker\";\n            markerElement.style.width = \"40px\";\n            markerElement.style.height = \"40px\";\n            markerElement.style.backgroundImage = \"url(\".concat(_public_binMarker_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src, \")\");\n            markerElement.style.backgroundSize = \"cover\";\n            new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Marker)({\n                element: markerElement\n            }).setLngLat([\n                bin.longitude,\n                bin.latitude\n            ]).setPopup(new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Popup)({\n                offset: 25\n            }).setHTML(popupContent)).addTo(mapboxMap);\n        });\n    }, [\n        bins\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"relative\",\n            width: \"100%\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mapNode,\n            style: {\n                width: \"100%\",\n                height: \"100%\"\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\Project\\\\ModBin\\\\Web\\\\ModBinDashboard\\\\app\\\\components\\\\map.tsx\",\n            lineNumber: 138,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ModBin\\\\Web\\\\ModBinDashboard\\\\app\\\\components\\\\map.tsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, this);\n}\n_s(MapboxMap, \"DSXX++XQShZPuA8O2uVuoLCx6Ss=\");\n_c = MapboxMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapboxMap);\nvar _c;\n$RefreshReg$(_c, \"MapboxMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNFO0FBQ21DO0FBQzlCO0FBQzBCO0FBQ2I7QUFlbkQsU0FBU0k7O0lBQ1AsTUFBTUMsVUFBVUwseUNBQVksQ0FBaUI7SUFDN0MsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLDJDQUFjLENBQVksRUFBRTtJQUNwRCxNQUFNVSxlQUFlVix5Q0FBWSxDQUFzQjtJQUV2REEsNENBQWUsQ0FBQztRQUNkLE1BQU1ZLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLFNBQVMsTUFBTUYsU0FBU0csSUFBSTtnQkFDbENSLFFBQVFPLE9BQU9FLElBQUk7Z0JBQ25CQyxRQUFRQyxHQUFHLENBQUNKLE9BQU9FLElBQUk7WUFDekIsRUFBRSxPQUFPRyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFSO1FBQ0EsTUFBTVMsYUFBYUMsWUFBWVYsV0FBVyxPQUFPLDRCQUE0QjtRQUU3RSxNQUFNVyxPQUFPbEIsUUFBUW1CLE9BQU87UUFDNUIsSUFBSSxNQUE2QixJQUFJRCxTQUFTLE1BQU07UUFFcEQsTUFBTUUsWUFBWSxJQUFJeEIsc0RBQVksQ0FBQztZQUNqQzBCLFdBQVdKO1lBQ1hLLGFBQWFDLGtHQUFvQztZQUNqREcsT0FBTztZQUNQQyxRQUFRO2dCQUFDO2dCQUFvQjthQUFtQjtZQUNoREMsTUFBTTtRQUNSO1FBRUF4QixhQUFhYyxPQUFPLEdBQUdDO1FBRXZCLE1BQU1VLFdBQVcsSUFBSWpDLG1FQUFjQSxDQUFDO1lBQ2xDMEIsYUFBYUMsa0dBQW9DO1lBQ2pENUIsVUFBVUEsa0RBQVFBO1FBQ3BCO1FBRUF3QixVQUFVVyxVQUFVLENBQUNEO1FBRXJCQSxTQUFTRSxFQUFFLENBQUMsVUFBVSxDQUFDQztZQUNyQixNQUFNLEVBQUV2QixNQUFNLEVBQUUsR0FBR3VCO1lBQ25CLElBQUl2QixVQUFVQSxPQUFPa0IsTUFBTSxFQUFFO2dCQUMzQlIsVUFBVWMsS0FBSyxDQUFDO29CQUNkTixRQUFRbEIsT0FBT2tCLE1BQU07b0JBQ3JCQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtRQUVBLE9BQU87WUFDTE0sY0FBY25CO1lBQ2RJLFVBQVVnQixNQUFNO1FBQ2xCO0lBQ0YsR0FBRyxFQUFFO0lBRUx6Qyw0Q0FBZSxDQUFDO1FBQ2QsSUFBSU8sS0FBS21DLE1BQU0sS0FBSyxLQUFLLENBQUNoQyxhQUFhYyxPQUFPLEVBQUU7UUFFaEQsTUFBTUMsWUFBWWYsYUFBYWMsT0FBTztRQUV0QywwQkFBMEI7UUFDMUIsTUFBTW1CLGtCQUFrQkMsU0FBU0Msc0JBQXNCLENBQUM7UUFDeEQsTUFBT0YsZ0JBQWdCRCxNQUFNLEdBQUcsRUFBRztnQkFDakNDO2FBQUFBLCtCQUFBQSxlQUFlLENBQUMsRUFBRSxDQUFDRyxVQUFVLGNBQTdCSCxtREFBQUEsNkJBQStCSSxXQUFXLENBQUNKLGVBQWUsQ0FBQyxFQUFFO1FBQy9EO1FBRUFwQyxLQUFLeUMsT0FBTyxDQUFDLENBQUNDO1lBQ1osTUFBTUMsZUFBZSw2SUFNb0RELE9BSnRCQSxJQUFJRSxJQUFJLEVBQUMsdVBBUWFGLE9BSkFBLElBQUlHLE9BQU8sRUFBQyxtTkFRWkgsT0FKQUEsSUFBSUksT0FBTyxFQUFDLGtOQVFaSixPQUpBQSxJQUFJSyxHQUFHLEVBQUMsb05BU3pFLE9BTGlFTCxJQUFJTSxNQUFNLEVBQUMsdUlBUTdFLE9BSEMsQ0FBQ04sSUFBSU8sTUFBTSxJQUFJUCxJQUFJUSxLQUFLLEdBQUksb0VBQzVCUixJQUFJTyxNQUFNLElBQUlQLElBQUlRLEtBQUssR0FBSSxpRUFDMUIsZ0RBQ0Y7WUFLUCxNQUFNQyxnQkFBZ0JkLFNBQVNlLGFBQWEsQ0FBQztZQUM3Q0QsY0FBY0UsU0FBUyxHQUFHO1lBQzFCRixjQUFjMUIsS0FBSyxDQUFDNkIsS0FBSyxHQUFHO1lBQzVCSCxjQUFjMUIsS0FBSyxDQUFDOEIsTUFBTSxHQUFHO1lBQzdCSixjQUFjMUIsS0FBSyxDQUFDK0IsZUFBZSxHQUFHLE9BQXFCLE9BQWQ1RCw2REFBU0EsQ0FBQzZELEdBQUcsRUFBQztZQUMzRE4sY0FBYzFCLEtBQUssQ0FBQ2lDLGNBQWMsR0FBRztZQUVyQyxJQUFJaEUseURBQWUsQ0FBQztnQkFBRWtFLFNBQVNUO1lBQWMsR0FDMUNVLFNBQVMsQ0FBQztnQkFBQ25CLElBQUlvQixTQUFTO2dCQUFFcEIsSUFBSXFCLFFBQVE7YUFBQyxFQUN2Q0MsUUFBUSxDQUFDLElBQUl0RSx3REFBYyxDQUFDO2dCQUFFd0UsUUFBUTtZQUFHLEdBQUdDLE9BQU8sQ0FBQ3hCLGVBQ3BEeUIsS0FBSyxDQUFDbEQ7UUFDWDtJQUNGLEdBQUc7UUFBQ2xCO0tBQUs7SUFFVCxxQkFDRSw4REFBQ3FFO1FBQUk1QyxPQUFPO1lBQUU2QyxVQUFVO1lBQVloQixPQUFPO1lBQVFDLFFBQVE7UUFBTztrQkFDaEUsNEVBQUNjO1lBQUlFLEtBQUt6RTtZQUFTMkIsT0FBTztnQkFBRTZCLE9BQU87Z0JBQVFDLFFBQVE7WUFBTzs7Ozs7Ozs7Ozs7QUFHaEU7R0F0SFMxRDtLQUFBQTtBQXdIVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYXAudHN4P2IwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbWFwYm94Z2wgZnJvbSBcIm1hcGJveC1nbFwiO1xyXG5pbXBvcnQgTWFwYm94R2VvY29kZXIsIHsgUmVzdWx0IH0gZnJvbSAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXInO1xyXG5pbXBvcnQgXCJtYXBib3gtZ2wvZGlzdC9tYXBib3gtZ2wuY3NzXCI7XHJcbmltcG9ydCAnQG1hcGJveC9tYXBib3gtZ2wtZ2VvY29kZXIvZGlzdC9tYXBib3gtZ2wtZ2VvY29kZXIuY3NzJztcclxuaW1wb3J0IGJpbk1hcmtlciBmcm9tIFwiLi4vLi4vcHVibGljL2Jpbk1hcmtlci5wbmdcIjtcclxuXHJcbmludGVyZmFjZSBCaW5TdGF0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWN5Y2xlOiBudW1iZXI7XHJcbiAgZ2VuZXJhbDogbnVtYmVyO1xyXG4gIHdldDogbnVtYmVyO1xyXG4gIGRhbmdlcjogbnVtYmVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgZW1wdHk6IGJvb2xlYW47XHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYXBib3hNYXAoKSB7XHJcbiAgY29uc3QgbWFwTm9kZSA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgW2JpbnMsIHNldEJpbnNdID0gUmVhY3QudXNlU3RhdGU8QmluU3RhdFtdPihbXSk7XHJcbiAgY29uc3QgbWFwYm94TWFwUmVmID0gUmVhY3QudXNlUmVmPG1hcGJveGdsLk1hcCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hCaW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2JvZG1pbi1leHJ0cWFwNmxxLXVjLmEucnVuLmFwcC9hcGkvaG9tZVwiKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0QmlucyhyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hCaW5zKCk7XHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZmV0Y2hCaW5zLCAxMDAwKTsgLy8gRmV0Y2ggZGF0YSBldmVyeSAxIG1pbnV0ZVxyXG5cclxuICAgIGNvbnN0IG5vZGUgPSBtYXBOb2RlLmN1cnJlbnQ7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBub2RlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbWFwYm94TWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICAgIGNvbnRhaW5lcjogbm9kZSxcclxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9UT0tFTiEsXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcclxuICAgICAgY2VudGVyOiBbMTAwLjYxMTI1Mjc3MTQxNTE0LCAxMy42ODUzMTc0MDgzOTQ1NTFdLFxyXG4gICAgICB6b29tOiAxNCxcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcGJveE1hcFJlZi5jdXJyZW50ID0gbWFwYm94TWFwO1xyXG5cclxuICAgIGNvbnN0IGdlb2NvZGVyID0gbmV3IE1hcGJveEdlb2NvZGVyKHtcclxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9UT0tFTiEsXHJcbiAgICAgIG1hcGJveGdsOiBtYXBib3hnbFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwYm94TWFwLmFkZENvbnRyb2woZ2VvY29kZXIpO1xyXG5cclxuICAgIGdlb2NvZGVyLm9uKCdyZXN1bHQnLCAoZXZlbnQ6IHsgcmVzdWx0OiBSZXN1bHQgfSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHJlc3VsdCB9ID0gZXZlbnQ7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmNlbnRlcikge1xyXG4gICAgICAgIG1hcGJveE1hcC5mbHlUbyh7XHJcbiAgICAgICAgICBjZW50ZXI6IHJlc3VsdC5jZW50ZXIsXHJcbiAgICAgICAgICB6b29tOiAxNFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICBtYXBib3hNYXAucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChiaW5zLmxlbmd0aCA9PT0gMCB8fCAhbWFwYm94TWFwUmVmLmN1cnJlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBtYXBib3hNYXAgPSBtYXBib3hNYXBSZWYuY3VycmVudDtcclxuXHJcbiAgICAvLyBSZW1vdmUgZXhpc3RpbmcgbWFya2Vyc1xyXG4gICAgY29uc3QgZXhpc3RpbmdNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY3VzdG9tLW1hcmtlcicpO1xyXG4gICAgd2hpbGUgKGV4aXN0aW5nTWFya2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGV4aXN0aW5nTWFya2Vyc1swXS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChleGlzdGluZ01hcmtlcnNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbnMuZm9yRWFjaCgoYmluOiBCaW5TdGF0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSd3LTY0IGgtZml0IGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LTJ4bCB0ZXh0LWNlbnRlciBwLTUnPlxyXG4gICAgICAgICAgPGgxIGNsYXNzPSd0ZXh0LVsjZmQ4ZDE0XSBmb250LWJvbGQgdGV4dC1sZyc+JHtiaW4ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGZsZXgtY29sIGdhcC0yIG15LTMgcHgtNic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9J3RleHQtc20nPuC4guC4ouC4sOC4o+C4teC5hOC4i+C5gOC4hOC4tOC4pTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3RleHQtc20gZm9udC1ib2xkIGJnLVsjZmZkZTAwXSB3LTEwIHJvdW5kZWQtMnhsJz4ke2Jpbi5yZWN5Y2xlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPSd0ZXh0LXNtJz7guILguKLguLDguJfguLHguYjguKfguYTguJs8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZXh0LXNtIGZvbnQtYm9sZCBiZy1bIzE1NWJlY10gdy0xMCByb3VuZGVkLTJ4bCc+JHtiaW4uZ2VuZXJhbH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1zbSc+4LiC4Lii4Liw4LmA4Lib4Li14Lii4LiBPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGV4dC1zbSBmb250LWJvbGQgYmctWyM1YjllNTddIHctMTAgcm91bmRlZC0yeGwnPiR7YmluLndldH08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ndGV4dC1zbSc+4LiC4Lii4Liw4Lit4Lix4LiZ4LiV4Lij4Liy4LiiPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndGV4dC1zbSBmb250LWJvbGQgYmctWyNlYzRkNWFdIHctMTAgcm91bmRlZC0yeGwnPiR7YmluLmRhbmdlcn08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSd0ZXh0LXNtIGZvbnQtYm9sZCc+XHJcbiAgICAgICAgICAgIOC4quC4luC4suC4meC4sOC4luC4seC4h+C4guC4ouC4sDpcclxuICAgICAgICAgICAgJHshYmluLnN0YXR1cyAmJiBiaW4uZW1wdHkgPyBgPHNwYW4gY2xhc3M9J3RleHQtcmVkLTUwMCc+4LiW4Lix4LiH4Lii4Lix4LiH4LmE4Lih4LmI4LmA4LiV4LmH4LihICjguKLguLHguIfguYTguKHguYjguJbguLnguIHguYDguIHguYfguJopPC9zcGFuPmAgOiBcclxuICAgICAgICAgICAgICBiaW4uc3RhdHVzICYmIGJpbi5lbXB0eSA/IGA8c3BhbiBjbGFzcz0ndGV4dC1ncmVlbi01MDAnPuC4ouC4seC4h+C5hOC4oeC5iOC5gOC4leC5h+C4oSAo4LiW4Li54LiB4LmA4LiB4LmH4Lia4LmB4Lil4LmJ4LinKTwvc3Bhbj5gIDogXHJcbiAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPSd0ZXh0LXJlZC01MDAnPuC4luC4seC4h+C4guC4ouC4sOC5gOC4leC5h+C4oTwvc3Bhbj5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgY29uc3QgbWFya2VyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBtYXJrZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdjdXN0b20tbWFya2VyJztcclxuICAgICAgbWFya2VyRWxlbWVudC5zdHlsZS53aWR0aCA9ICc0MHB4JztcclxuICAgICAgbWFya2VyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnNDBweCc7XHJcbiAgICAgIG1hcmtlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Jpbk1hcmtlci5zcmN9KWA7XHJcbiAgICAgIG1hcmtlckVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xyXG5cclxuICAgICAgbmV3IG1hcGJveGdsLk1hcmtlcih7IGVsZW1lbnQ6IG1hcmtlckVsZW1lbnQgfSlcclxuICAgICAgICAuc2V0TG5nTGF0KFtiaW4ubG9uZ2l0dWRlLCBiaW4ubGF0aXR1ZGVdKVxyXG4gICAgICAgIC5zZXRQb3B1cChuZXcgbWFwYm94Z2wuUG9wdXAoeyBvZmZzZXQ6IDI1IH0pLnNldEhUTUwocG9wdXBDb250ZW50KSlcclxuICAgICAgICAuYWRkVG8obWFwYm94TWFwKTtcclxuICAgIH0pO1xyXG4gIH0sIFtiaW5zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0+XHJcbiAgICAgIDxkaXYgcmVmPXttYXBOb2RlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveE1hcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFwYm94Z2wiLCJNYXBib3hHZW9jb2RlciIsImJpbk1hcmtlciIsIk1hcGJveE1hcCIsIm1hcE5vZGUiLCJ1c2VSZWYiLCJiaW5zIiwic2V0QmlucyIsInVzZVN0YXRlIiwibWFwYm94TWFwUmVmIiwidXNlRWZmZWN0IiwiZmV0Y2hCaW5zIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwibm9kZSIsImN1cnJlbnQiLCJtYXBib3hNYXAiLCJNYXAiLCJjb250YWluZXIiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBCT1hfVE9LRU4iLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJnZW9jb2RlciIsImFkZENvbnRyb2wiLCJvbiIsImV2ZW50IiwiZmx5VG8iLCJjbGVhckludGVydmFsIiwicmVtb3ZlIiwibGVuZ3RoIiwiZXhpc3RpbmdNYXJrZXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsImJpbiIsInBvcHVwQ29udGVudCIsIm5hbWUiLCJyZWN5Y2xlIiwiZ2VuZXJhbCIsIndldCIsImRhbmdlciIsInN0YXR1cyIsImVtcHR5IiwibWFya2VyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImJhY2tncm91bmRTaXplIiwiTWFya2VyIiwiZWxlbWVudCIsInNldExuZ0xhdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwic2V0UG9wdXAiLCJQb3B1cCIsIm9mZnNldCIsInNldEhUTUwiLCJhZGRUbyIsImRpdiIsInBvc2l0aW9uIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/map.tsx\n"));

/***/ })

});