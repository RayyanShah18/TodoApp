"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [UserInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todolist, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodolist([\n            UserInput,\n            ...todolist\n        ]);\n        setUserInput(\"\");\n    };\n    const handleDelete = (todo)=>{\n        const updatedArr = todolist.filter((todoitem)=>todolist.indexOf(todoitem) != todolist.indexOf(todo));\n        setTodolist(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Todo Application\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"font\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: UserInput,\n                        placeholder: \"Enter Todo Item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 105\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Enter a\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todolist.length >= 1 ? todolist.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"remove\"\n                            }, void 0, false, {\n                                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 47\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 27\n                    }, undefined);\n                }) : \"Made by Rayyan\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(index, \"S3nvbimgGjclvDnW0vowgOFjXLE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ1U7QUFHMUMsTUFBTUUsUUFBUSxJQUFNOztJQUVoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTU8sZUFBZSxDQUFDQyxJQUFNO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCTCxhQUFhSSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyxlQUFlLENBQUNKLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFHaEJILFlBQVk7WUFDUkg7ZUFDR0U7U0FDTjtRQUVERCxhQUFhO0lBQ2pCO0lBRUEsTUFBTVMsZUFBZUMsQ0FBQUEsT0FBTztRQUN4QixNQUFNQyxhQUFhVixTQUFTVyxNQUFNLENBQUNDLENBQUFBLFdBQVlaLFNBQVNhLE9BQU8sQ0FBQ0QsYUFBYVosU0FBU2EsT0FBTyxDQUFDSjtRQUU5RlIsWUFBWVM7SUFDaEI7SUFNQSxxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7a0NBQ0QsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPWixPQUFPUjt3QkFBV3FCLGFBQVk7d0JBQWtCQyxVQUFVbEI7Ozs7OztrQ0FBZSw4REFBQ21CO3dCQUFPQyxTQUFTZjtrQ0FBYzs7Ozs7O2tDQUMzSCw4REFBQ2dCO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBSUosOERBQUNDOzBCQUVHeEIsU0FBU3lCLE1BQU0sSUFBRyxJQUFJekIsU0FBUzBCLEdBQUcsQ0FBQyxDQUFDakIsTUFBTWtCLE1BQVE7b0JBQzlDLHFCQUFNLDhEQUFDQzs7NEJBQWNuQjswQ0FBSyw4REFBQ1k7Z0NBQU9DLFNBQVMsQ0FBQ25CLElBQUk7b0NBQzVDQSxFQUFFQyxjQUFjO29DQUNoQkksYUFBYUM7Z0NBRWpCOzBDQUFHOzs7Ozs7O3VCQUpZa0I7Ozs7O2dCQUtuQixLQUNFLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FBS2xDO0dBeERNOUI7QUF5RE4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW1VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9saXN0LCBzZXRUb2RvbGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRvZG9saXN0KFtcclxuICAgICAgICAgICAgVXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvbGlzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dCgnJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSB0b2RvID0+e1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvbGlzdC5maWx0ZXIodG9kb2l0ZW0gPT4gdG9kb2xpc3QuaW5kZXhPZih0b2RvaXRlbSkgIT0gdG9kb2xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICAgICAgc2V0VG9kb2xpc3QodXBkYXRlZEFycilcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VG9kbyBBcHBsaWNhdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIDxmb250PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17VXNlcklucHV0fSBwbGFjZWhvbGRlcj0nRW50ZXIgVG9kbyBJdGVtJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICBFbnRlciBhIFxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2ZvbnQ+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvZG9saXN0Lmxlbmd0aCA+PTEgPyB0b2RvbGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjxsaSBrZXk9e2lkeH0+e3RvZG99PGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5yZW1vdmU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogJ01hZGUgYnkgUmF5eWFuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkaW5nIiwiaW5kZXgiLCJVc2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvbGlzdCIsInNldFRvZG9saXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlZEFyciIsImZpbHRlciIsInRvZG9pdGVtIiwiaW5kZXhPZiIsImRpdiIsImgzIiwiZm9udCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});