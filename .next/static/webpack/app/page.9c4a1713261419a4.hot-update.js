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

/***/ "(app-pages-browser)/./src/app/components/HeroSection.jsx":
/*!********************************************!*\
  !*** ./src/app/components/HeroSection.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-type-animation */ \"(app-pages-browser)/./node_modules/react-type-animation/dist/esm/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst handleDownloadCV = ()=>{\n    const cvFilePath = \"/haider.pdf\";\n    const link = document.createElement(\"a\");\n    link.href = cvFilePath;\n    link.download = \"haider.pdf\";\n    document.body.appendChild(link);\n    link.click();\n    document.body.removeChild(link);\n};\nconst HeroSection = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 sm:grid-cols-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-7 place-self-center text-center sm:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600\",\n                                    children: [\n                                        \"Hello, I'm \",\n                                        \"\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 89\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_type_animation__WEBPACK_IMPORTED_MODULE_3__.TypeAnimation, {\n                                    sequence: [\n                                        // 'Syed Haider Ali Zaidi',\n                                        // 5000,\n                                        \"Backend Engineer\",\n                                        3000,\n                                        \"AI Developer\",\n                                        100,\n                                        \"Cloud Practioner\",\n                                        100\n                                    ],\n                                    wrapper: \"span\",\n                                    speed: 50,\n                                    repeat: Infinity\n                                }, void 0, false, {\n                                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl\",\n                            children: \"Software Engineer at Conovo Technologies\"\n                        }, void 0, false, {\n                            fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white\",\n                                    href: \"/#contact\",\n                                    children: \"Hire Me\"\n                                }, void 0, false, {\n                                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3\",\n                                    onClick: handleDownloadCV,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2\",\n                                        children: \"Download CV\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 189\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-5 place-self-center mt-4 lg:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/images/Hero.png\",\n                            alt: \"hero image\",\n                            className: \"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2\",\n                            width: 300,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/haider/Documents/Personal/portfolio-nextjs/portfolio-website/src/app/components/HeroSection.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZXJvU2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDSztBQUN1QjtBQUVyRCxNQUFNRyxtQkFBbUI7SUFDckIsTUFBTUMsYUFBYTtJQUVuQixNQUFNQyxPQUFPQyxTQUFTQyxhQUFhLENBQUM7SUFDcENGLEtBQUtHLElBQUksR0FBR0o7SUFFWkMsS0FBS0ksUUFBUSxHQUFHO0lBRWhCSCxTQUFTSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ047SUFFMUJBLEtBQUtPLEtBQUs7SUFFVk4sU0FBU0ksSUFBSSxDQUFDRyxXQUFXLENBQUNSO0FBQzVCO0FBR0YsTUFBTVMsY0FBYztJQUNoQixxQkFDSSw4REFBQ0M7a0JBQ0QsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNDOzRCQUFHRCxXQUFVOzs4Q0FBa0UsOERBQUNFO29DQUFLRixXQUFVOzt3Q0FBNkU7d0NBQVk7Ozs7Ozs7OENBQ3pMLDhEQUFDRzs7Ozs7OENBQ0QsOERBQUNsQiwrREFBYUE7b0NBQ2RtQixVQUFVO3dDQUNOLDJCQUEyQjt3Q0FDM0IsUUFBUTt3Q0FDUjt3Q0FDQTt3Q0FDQTt3Q0FDQTt3Q0FDQTt3Q0FDQTtxQ0FDSDtvQ0FDREMsU0FBUTtvQ0FDUkMsT0FBTztvQ0FDUEMsUUFBUUM7Ozs7Ozs7Ozs7OztzQ0FJUiw4REFBQ0M7NEJBQUVULFdBQVU7c0NBQXNEOzs7Ozs7c0NBQ25FLDhEQUFDRDs7OENBQ0QsOERBQUNXO29DQUFPVixXQUFVO29DQUF1SVQsTUFBSzs4Q0FBWTs7Ozs7OzhDQUMxSyw4REFBQ21CO29DQUFPVixXQUFVO29DQUF1SVcsU0FBU3pCOzhDQUFrQiw0RUFBQ2dCO3dDQUFLRixXQUFVO2tEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSW5RLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBRWYsNEVBQUNoQixtREFBS0E7NEJBQUM0QixLQUFJOzRCQUFtQkMsS0FBSTs0QkFBYWIsV0FBVTs0QkFBeUVjLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xSjtLQXhDRWxCO0FBMENGLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZXJvU2VjdGlvbi5qc3g/OTNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgVHlwZUFuaW1hdGlvbiB9IGZyb20gJ3JlYWN0LXR5cGUtYW5pbWF0aW9uJztcblxuY29uc3QgaGFuZGxlRG93bmxvYWRDViA9ICgpID0+IHtcbiAgICBjb25zdCBjdkZpbGVQYXRoID0gJy9oYWlkZXIucGRmJztcbiAgICBcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IGN2RmlsZVBhdGg7XG4gICAgXG4gICAgbGluay5kb3dubG9hZCA9ICdoYWlkZXIucGRmJztcbiAgXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgXG4gICAgbGluay5jbGljaygpO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9O1xuXG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMTInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tNyBwbGFjZS1zZWxmLWNlbnRlciB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQnPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG1iLTQgdGV4dC00eGwgc206dGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1leHRyYWJvbGQnPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNDAwIHRvLXBpbmstNjAwXCI+SGVsbG8sIEknbSB7XCJcIn08L3NwYW4+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8VHlwZUFuaW1hdGlvblxuICAgICAgICBzZXF1ZW5jZT17W1xuICAgICAgICAgICAgLy8gJ1N5ZWQgSGFpZGVyIEFsaSBaYWlkaScsXG4gICAgICAgICAgICAvLyA1MDAwLFxuICAgICAgICAgICAgJ0JhY2tlbmQgRW5naW5lZXInLFxuICAgICAgICAgICAgMzAwMCxcbiAgICAgICAgICAgICdBSSBEZXZlbG9wZXInLFxuICAgICAgICAgICAgMTAwLFxuICAgICAgICAgICAgJ0Nsb3VkIFByYWN0aW9uZXInLFxuICAgICAgICAgICAgMTAwXG4gICAgICAgIF19XG4gICAgICAgIHdyYXBwZXI9XCJzcGFuXCJcbiAgICAgICAgc3BlZWQ9ezUwfVxuICAgICAgICByZXBlYXQ9e0luZmluaXR5fVxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LVsjQURCN0JFXSB0ZXh0LWJhc2UgbWItNiBzbTp0ZXh0LWxnIGxnOnRleHQteGwnPlNvZnR3YXJlIEVuZ2luZWVyIGF0IENvbm92byBUZWNobm9sb2dpZXM8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweC02IHB5LTMgdy1mdWxsIHNtOnctZml0IHJvdW5kZWQtZnVsbCBtci00IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS01MDAgdmlhLXB1cnBsZS01MDAgdG8tcGluay01MDAgaG92ZXI6Ymctc2xhdGUtMjAwIHRleHQtd2hpdGUnIGhyZWY9XCIvI2NvbnRhY3RcIj5IaXJlIE1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdweC0xIHB5LTEgdy1mdWxsIHNtOnctZml0IHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLWJsdWUtNTAwIHZpYS1wdXJwbGUtNTAwIHRvLXBpbmstNTAwIGhvdmVyOmJnLXNsYXRlLTgwMCB0ZXh0LXdoaXRlIG10LTMnIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkQ1Z9PjxzcGFuIGNsYXNzTmFtZT0nYmxvY2sgYmctWyMxMjEyMTJdIGhvdmVyOmJnLXNsYXRlLTgwMCByb3VuZGVkLWZ1bGwgcHgtNSBweS0yJz5Eb3dubG9hZCBDVjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zcGFuLTUgcGxhY2Utc2VsZi1jZW50ZXIgbXQtNCBsZzptdC0wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctWyMxODE4MThdIHctWzI1MHB4XSBoLVsyNTBweF0gbGc6dy1bNDAwcHhdIGxnOmgtWzQwMHB4XSByZWxhdGl2ZVwiPlxuICAgICAgICBcbiAgICAgICAgPEltYWdlIHNyYz0nL2ltYWdlcy9IZXJvLnBuZycgYWx0PSdoZXJvIGltYWdlJyBjbGFzc05hbWU9J2Fic29sdXRlIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdG9wLTEvMiBsZWZ0LTEvMicgIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb25cbiAgICAiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIlR5cGVBbmltYXRpb24iLCJoYW5kbGVEb3dubG9hZENWIiwiY3ZGaWxlUGF0aCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiSGVyb1NlY3Rpb24iLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwiYnIiLCJzZXF1ZW5jZSIsIndyYXBwZXIiLCJzcGVlZCIsInJlcGVhdCIsIkluZmluaXR5IiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HeroSection.jsx\n"));

/***/ })

});