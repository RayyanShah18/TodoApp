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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst index = ()=>{\n    _s();\n    const [UserInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todolist, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodolist([\n            UserInput,\n            ...todolist\n        ]);\n        setUserInput(\"\");\n    };\n    const handleDelete = (todo)=>{\n        const updatedArr = todolist.filter((todoitem)=>todolist.indexOf(todoitem) != todolist.indexOf(todo));\n        setTodolist(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Todo Application\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"font\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: UserInput,\n                        placeholder: \"Enter Todo Item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 105\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Made by Rayyan\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todolist.length >= 1 ? todolist.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"remove\"\n                            }, void 0, false, {\n                                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 47\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 27\n                    }, undefined);\n                }) : \"Made by rayyan\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(index, \"S3nvbimgGjclvDnW0vowgOFjXLE=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ1U7QUFHMUMsTUFBTUUsUUFBUSxJQUFNOztJQUVoQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFM0MsTUFBTU8sZUFBZSxDQUFDQyxJQUFNO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCTCxhQUFhSSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7SUFDL0I7SUFFQSxNQUFNQyxlQUFlLENBQUNKLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFHaEJILFlBQVk7WUFDUkg7ZUFDR0U7U0FDTjtRQUVERCxhQUFhO0lBQ2pCO0lBRUEsTUFBTVMsZUFBZUMsQ0FBQUEsT0FBTztRQUN4QixNQUFNQyxhQUFhVixTQUFTVyxNQUFNLENBQUNDLENBQUFBLFdBQVlaLFNBQVNhLE9BQU8sQ0FBQ0QsYUFBYVosU0FBU2EsT0FBTyxDQUFDSjtRQUU5RlIsWUFBWVM7SUFDaEI7SUFNQSxxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7a0NBQ0QsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPWixPQUFPUjt3QkFBV3FCLGFBQVk7d0JBQWtCQyxVQUFVbEI7Ozs7OztrQ0FBZSw4REFBQ21CO3dCQUFPQyxTQUFTZjtrQ0FBYzs7Ozs7O2tDQUMzSCw4REFBQ1E7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFJSiw4REFBQ1E7MEJBRUd2QixTQUFTd0IsTUFBTSxJQUFHLElBQUl4QixTQUFTeUIsR0FBRyxDQUFDLENBQUNoQixNQUFNaUIsTUFBUTtvQkFDOUMscUJBQU0sOERBQUNDOzs0QkFBY2xCOzBDQUFLLDhEQUFDWTtnQ0FBT0MsU0FBUyxDQUFDbkIsSUFBSTtvQ0FDNUNBLEVBQUVDLGNBQWM7b0NBQ2hCSSxhQUFhQztnQ0FFakI7MENBQUc7Ozs7Ozs7dUJBSllpQjs7Ozs7Z0JBS25CLEtBQ0UsZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUFLbEM7R0F4RE03QjtBQXlETiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbVXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbdG9kb2xpc3QsIHNldFRvZG9saXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VG9kb2xpc3QoW1xyXG4gICAgICAgICAgICBVc2VySW5wdXQsXHJcbiAgICAgICAgICAgIC4uLnRvZG9saXN0XHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgc2V0VXNlcklucHV0KCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHRvZG8gPT57XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEFyciA9IHRvZG9saXN0LmZpbHRlcih0b2RvaXRlbSA9PiB0b2RvbGlzdC5pbmRleE9mKHRvZG9pdGVtKSAhPSB0b2RvbGlzdC5pbmRleE9mKHRvZG8pKVxyXG5cclxuICAgICAgICBzZXRUb2RvbGlzdCh1cGRhdGVkQXJyKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5Ub2RvIEFwcGxpY2F0aW9uPC9oMz5cclxuICAgICAgICAgICAgPGZvbnQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtVc2VySW5wdXR9IHBsYWNlaG9sZGVyPSdFbnRlciBUb2RvIEl0ZW0nIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz48YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIE1hZGUgYnkgUmF5eWFuXHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZm9udD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9kb2xpc3QubGVuZ3RoID49MSA/IHRvZG9saXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH19PnJlbW92ZTwvYnV0dG9uPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOiAnTWFkZSBieSByYXl5YW4nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRpbmciLCJpbmRleCIsIlVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9saXN0Iiwic2V0VG9kb2xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb2l0ZW0iLCJpbmRleE9mIiwiZGl2IiwiaDMiLCJmb250IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});