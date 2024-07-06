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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"(app-pages-browser)/./node_modules/.pnpm/mapbox-gl@3.4.0/node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"(app-pages-browser)/./node_modules/.pnpm/mapbox-gl@3.4.0/node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// import the mapbox-gl styles so that the map is displayed correctly\nconst bins = [\n    {\n        id: 1,\n        created_at: \"2024-06-26T08:42:15.497872+00:00\",\n        name: \"ถังขยะ หน้าตึกแดง มจธ.\",\n        general: 0,\n        recycle: 0,\n        wet: 0,\n        danger: 0,\n        latitude: 13.6500329128963,\n        longitude: 100.494554478255\n    },\n    {\n        id: 2,\n        created_at: \"2024-06-26T08:42:15.497872+00:00\",\n        name: \"ถังขยะ ที่ไหนก็ไม่รู้\",\n        general: 1,\n        recycle: 1,\n        wet: 1,\n        danger: 1,\n        latitude: 14.6500329128963,\n        longitude: 100.494554478255\n    },\n    {\n        id: 3,\n        created_at: \"2024-06-26T08:42:15.497872+00:00\",\n        name: \"ถังขยะ ที่ไหนก็ไม่รู้อีกแล้ว\",\n        general: 2,\n        recycle: 2,\n        wet: 2,\n        danger: 2,\n        latitude: 15.6500329128963,\n        longitude: 100.494554478255\n    }\n];\nfunction MapboxMap() {\n    _s();\n    // this is where the map instance will be stored after initialization\n    const [map, setMap] = react__WEBPACK_IMPORTED_MODULE_1__.useState();\n    // React ref to store a reference to the DOM node that will be used\n    // as a required parameter `container` when initializing the mapbox-gl\n    // will contain `null` by default\n    const mapNode = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const node = mapNode.current;\n        // if the window object is not found, that means\n        // the component is rendered on the server\n        // or the dom node is not initialized, then return early\n        if ( false || node === null) return;\n        // otherwise, create a map instance\n        const mapboxMap = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: node,\n            accessToken: \"pk.eyJ1IjoicmFuZ2ltYW5qZXJhIiwiYSI6ImNseHZtMGlsMTB0Zzgya3BqYTdudm5kYTMifQ.jS4PMe9KKSGE2EEq_03uIg\",\n            style: \"mapbox://styles/mapbox/streets-v11\",\n            center: [\n                100.61125277141514,\n                13.685317408394551\n            ],\n            zoom: 14\n        });\n        // save the map object to React.useState\n        setMap(mapboxMap);\n        // Add markers and popups to the map\n        bins.forEach((bin)=>{\n            const marker = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Marker)().setLngLat([\n                bin.longitude,\n                bin.latitude\n            ]).setPopup(new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Popup)({\n                offset: 25\n            }).setText(bin.name)).addTo(mapboxMap);\n        });\n        return ()=>{\n            mapboxMap.remove();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mapNode,\n        style: {\n            width: \"100%\",\n            height: \"100%\"\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\ModBin\\\\Web\\\\ModBinDashboard\\\\app\\\\components\\\\map.tsx\",\n        lineNumber: 85,\n        columnNumber: 10\n    }, this);\n}\n_s(MapboxMap, \"E4deC0Dq6Lmr2UXOSEU75Gd3fzA=\");\n_c = MapboxMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapboxMap);\nvar _c;\n$RefreshReg$(_c, \"MapboxMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL21hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRStCO0FBQ0U7QUFDSztBQUN0QyxxRUFBcUU7QUFFckUsTUFBTUUsT0FBTztJQUNYO1FBQ0VDLElBQUk7UUFDSkMsWUFBWTtRQUNaQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxXQUFXO0lBQ2I7SUFDQTtRQUNFUixJQUFJO1FBQ0pDLFlBQVk7UUFDWkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsS0FBSztRQUNMQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsV0FBVztJQUNiO0lBQ0E7UUFDRVIsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLEtBQUs7UUFDTEMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLFdBQVc7SUFDYjtDQUNEO0FBRUQsU0FBU0M7O0lBQ1AscUVBQXFFO0lBQ3JFLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHZCwyQ0FBYztJQUVwQyxtRUFBbUU7SUFDbkUsc0VBQXNFO0lBQ3RFLGlDQUFpQztJQUNqQyxNQUFNZ0IsVUFBVWhCLHlDQUFZLENBQUM7SUFFN0JBLDRDQUFlLENBQUM7UUFDZCxNQUFNbUIsT0FBT0gsUUFBUUksT0FBTztRQUM1QixnREFBZ0Q7UUFDaEQsMENBQTBDO1FBQzFDLHdEQUF3RDtRQUN4RCxJQUFJLE1BQTZCLElBQUlELFNBQVMsTUFBTTtRQUVwRCxtQ0FBbUM7UUFDbkMsTUFBTUUsWUFBWSxJQUFJcEIsc0RBQVksQ0FBQztZQUNqQ3NCLFdBQVdKO1lBQ1hLLGFBQWFDLGtHQUFvQztZQUNqREcsT0FBTztZQUNQQyxRQUFRO2dCQUFDO2dCQUFvQjthQUFtQjtZQUNoREMsTUFBTTtRQUNSO1FBRUEsd0NBQXdDO1FBQ3hDaEIsT0FBT087UUFFUCxvQ0FBb0M7UUFDcENuQixLQUFLNkIsT0FBTyxDQUFDQyxDQUFBQTtZQUNYLE1BQU1DLFNBQVMsSUFBSWhDLHlEQUFlLEdBQy9Ca0MsU0FBUyxDQUFDO2dCQUFDSCxJQUFJckIsU0FBUztnQkFBRXFCLElBQUl0QixRQUFRO2FBQUMsRUFDdkMwQixRQUFRLENBQUMsSUFBSW5DLHdEQUFjLENBQUM7Z0JBQUVxQyxRQUFRO1lBQUcsR0FBR0MsT0FBTyxDQUFDUCxJQUFJM0IsSUFBSSxHQUM1RG1DLEtBQUssQ0FBQ25CO1FBQ1g7UUFFQSxPQUFPO1lBQ0xBLFVBQVVvQixNQUFNO1FBQ2xCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNDO1FBQUlDLEtBQUszQjtRQUFTWSxPQUFPO1lBQUVnQixPQUFPO1lBQVFDLFFBQVE7UUFBTzs7Ozs7O0FBQ25FO0dBMUNTakM7S0FBQUE7QUE0Q1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbWFwLnRzeD9iMDE2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1hcGJveGdsIGZyb20gXCJtYXBib3gtZ2xcIjtcclxuaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiOyBcclxuLy8gaW1wb3J0IHRoZSBtYXBib3gtZ2wgc3R5bGVzIHNvIHRoYXQgdGhlIG1hcCBpcyBkaXNwbGF5ZWQgY29ycmVjdGx5XHJcblxyXG5jb25zdCBiaW5zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgY3JlYXRlZF9hdDogXCIyMDI0LTA2LTI2VDA4OjQyOjE1LjQ5Nzg3MiswMDowMFwiLFxyXG4gICAgbmFtZTogXCLguJbguLHguIfguILguKLguLAg4Lir4LiZ4LmJ4Liy4LiV4Li24LiB4LmB4LiU4LiHIOC4oeC4iOC4mC5cIixcclxuICAgIGdlbmVyYWw6IDAsXHJcbiAgICByZWN5Y2xlOiAwLFxyXG4gICAgd2V0OiAwLFxyXG4gICAgZGFuZ2VyOiAwLFxyXG4gICAgbGF0aXR1ZGU6IDEzLjY1MDAzMjkxMjg5NjMsXHJcbiAgICBsb25naXR1ZGU6IDEwMC40OTQ1NTQ0NzgyNTVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgY3JlYXRlZF9hdDogXCIyMDI0LTA2LTI2VDA4OjQyOjE1LjQ5Nzg3MiswMDowMFwiLFxyXG4gICAgbmFtZTogXCLguJbguLHguIfguILguKLguLAg4LiX4Li14LmI4LmE4Lir4LiZ4LiB4LmH4LmE4Lih4LmI4Lij4Li54LmJXCIsXHJcbiAgICBnZW5lcmFsOiAxLFxyXG4gICAgcmVjeWNsZTogMSxcclxuICAgIHdldDogMSxcclxuICAgIGRhbmdlcjogMSxcclxuICAgIGxhdGl0dWRlOiAxNC42NTAwMzI5MTI4OTYzLFxyXG4gICAgbG9uZ2l0dWRlOiAxMDAuNDk0NTU0NDc4MjU1XHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGNyZWF0ZWRfYXQ6IFwiMjAyNC0wNi0yNlQwODo0MjoxNS40OTc4NzIrMDA6MDBcIixcclxuICAgIG5hbWU6IFwi4LiW4Lix4LiH4LiC4Lii4LiwIOC4l+C4teC5iOC5hOC4q+C4meC4geC5h+C5hOC4oeC5iOC4o+C4ueC5ieC4reC4teC4geC5geC4peC5ieC4p1wiLFxyXG4gICAgZ2VuZXJhbDogMixcclxuICAgIHJlY3ljbGU6IDIsXHJcbiAgICB3ZXQ6IDIsXHJcbiAgICBkYW5nZXI6IDIsXHJcbiAgICBsYXRpdHVkZTogMTUuNjUwMDMyOTEyODk2MyxcclxuICAgIGxvbmdpdHVkZTogMTAwLjQ5NDU1NDQ3ODI1NVxyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1hcGJveE1hcCgpIHtcclxuICAvLyB0aGlzIGlzIHdoZXJlIHRoZSBtYXAgaW5zdGFuY2Ugd2lsbCBiZSBzdG9yZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gUmVhY3QudXNlU3RhdGU8bWFwYm94Z2wuTWFwPigpO1xyXG5cclxuICAvLyBSZWFjdCByZWYgdG8gc3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgd2lsbCBiZSB1c2VkXHJcbiAgLy8gYXMgYSByZXF1aXJlZCBwYXJhbWV0ZXIgYGNvbnRhaW5lcmAgd2hlbiBpbml0aWFsaXppbmcgdGhlIG1hcGJveC1nbFxyXG4gIC8vIHdpbGwgY29udGFpbiBgbnVsbGAgYnkgZGVmYXVsdFxyXG4gIGNvbnN0IG1hcE5vZGUgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gbWFwTm9kZS5jdXJyZW50O1xyXG4gICAgLy8gaWYgdGhlIHdpbmRvdyBvYmplY3QgaXMgbm90IGZvdW5kLCB0aGF0IG1lYW5zXHJcbiAgICAvLyB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXJcclxuICAgIC8vIG9yIHRoZSBkb20gbm9kZSBpcyBub3QgaW5pdGlhbGl6ZWQsIHRoZW4gcmV0dXJuIGVhcmx5XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBub2RlID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gb3RoZXJ3aXNlLCBjcmVhdGUgYSBtYXAgaW5zdGFuY2VcclxuICAgIGNvbnN0IG1hcGJveE1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xyXG4gICAgICBjb250YWluZXI6IG5vZGUsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfVE9LRU4sXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcclxuICAgICAgY2VudGVyOiBbMTAwLjYxMTI1Mjc3MTQxNTE0LCAxMy42ODUzMTc0MDgzOTQ1NTFdLFxyXG4gICAgICB6b29tOiAxNCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNhdmUgdGhlIG1hcCBvYmplY3QgdG8gUmVhY3QudXNlU3RhdGVcclxuICAgIHNldE1hcChtYXBib3hNYXApO1xyXG5cclxuICAgIC8vIEFkZCBtYXJrZXJzIGFuZCBwb3B1cHMgdG8gdGhlIG1hcFxyXG4gICAgYmlucy5mb3JFYWNoKGJpbiA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxyXG4gICAgICAgIC5zZXRMbmdMYXQoW2Jpbi5sb25naXR1ZGUsIGJpbi5sYXRpdHVkZV0pXHJcbiAgICAgICAgLnNldFBvcHVwKG5ldyBtYXBib3hnbC5Qb3B1cCh7IG9mZnNldDogMjUgfSkuc2V0VGV4dChiaW4ubmFtZSkpXHJcbiAgICAgICAgLmFkZFRvKG1hcGJveE1hcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBtYXBib3hNYXAucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXttYXBOb2RlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcGJveE1hcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWFwYm94Z2wiLCJiaW5zIiwiaWQiLCJjcmVhdGVkX2F0IiwibmFtZSIsImdlbmVyYWwiLCJyZWN5Y2xlIiwid2V0IiwiZGFuZ2VyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJNYXBib3hNYXAiLCJtYXAiLCJzZXRNYXAiLCJ1c2VTdGF0ZSIsIm1hcE5vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJub2RlIiwiY3VycmVudCIsIm1hcGJveE1hcCIsIk1hcCIsImNvbnRhaW5lciIsImFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01BUEJPWF9UT0tFTiIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsImZvckVhY2giLCJiaW4iLCJtYXJrZXIiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJzZXRQb3B1cCIsIlBvcHVwIiwib2Zmc2V0Iiwic2V0VGV4dCIsImFkZFRvIiwicmVtb3ZlIiwiZGl2IiwicmVmIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/map.tsx\n"));

/***/ })

});