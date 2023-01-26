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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst index = ()=>{\n    const [UserInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todolist, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodolist([\n            UserInput,\n            ...todolist\n        ]);\n        setUserInput(\"\");\n    };\n    const handleDelete = (todo)=>{\n        const updatedArr = todolist.filter((todoitem)=>todolist.indexOf(todoitem) != todolist.indexOf(todo));\n        setTodolist(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Todo Application\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"font\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: UserInput,\n                        placeholder: \"Enter Todo Item\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 105\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Enter a Todo Item\"\n                    }, void 0, false, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todolist.length >= 1 ? todolist.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"remove\"\n                            }, void 0, false, {\n                                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 47\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 27\n                    }, undefined);\n                }) : \"Made by Rayyan\"\n            }, void 0, false, {\n                fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"R:\\\\Programming stuff\\\\Next.JS\\\\TodoApp\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1U7QUFHMUMsTUFBTUUsUUFBUSxJQUFNO0lBRWhCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNTyxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEJMLGFBQWFJLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0osSUFBTTtRQUN4QkEsRUFBRUMsY0FBYztRQUdoQkgsWUFBWTtZQUNSSDtlQUNHRTtTQUNOO1FBRURELGFBQWE7SUFDakI7SUFFQSxNQUFNUyxlQUFlQyxDQUFBQSxPQUFPO1FBQ3hCLE1BQU1DLGFBQWFWLFNBQVNXLE1BQU0sQ0FBQ0MsQ0FBQUEsV0FBWVosU0FBU2EsT0FBTyxDQUFDRCxhQUFhWixTQUFTYSxPQUFPLENBQUNKO1FBRTlGUixZQUFZUztJQUNoQjtJQU1BLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDRCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9aLE9BQU9SO3dCQUFXcUIsYUFBWTt3QkFBa0JDLFVBQVVsQjs7Ozs7O2tDQUFlLDhEQUFDbUI7d0JBQU9DLFNBQVNmO2tDQUFjOzs7Ozs7a0NBQzNILDhEQUFDZ0I7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFJSiw4REFBQ0M7MEJBRUd4QixTQUFTeUIsTUFBTSxJQUFHLElBQUl6QixTQUFTMEIsR0FBRyxDQUFDLENBQUNqQixNQUFNa0IsTUFBUTtvQkFDOUMscUJBQU0sOERBQUNDOzs0QkFBY25COzBDQUFLLDhEQUFDWTtnQ0FBT0MsU0FBUyxDQUFDbkIsSUFBSTtvQ0FDNUNBLEVBQUVDLGNBQWM7b0NBQ2hCSSxhQUFhQztnQ0FFakI7MENBQUc7Ozs7Ozs7dUJBSllrQjs7Ozs7Z0JBS25CLEtBQ0UsZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUFLbEM7QUFDQSxpRUFBZTlCLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgW1VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9saXN0LCBzZXRUb2RvbGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRvZG9saXN0KFtcclxuICAgICAgICAgICAgVXNlcklucHV0LFxyXG4gICAgICAgICAgICAuLi50b2RvbGlzdFxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dCgnJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSB0b2RvID0+e1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvbGlzdC5maWx0ZXIodG9kb2l0ZW0gPT4gdG9kb2xpc3QuaW5kZXhPZih0b2RvaXRlbSkgIT0gdG9kb2xpc3QuaW5kZXhPZih0b2RvKSlcclxuXHJcbiAgICAgICAgc2V0VG9kb2xpc3QodXBkYXRlZEFycilcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+VG9kbyBBcHBsaWNhdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIDxmb250PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17VXNlcklucHV0fSBwbGFjZWhvbGRlcj0nRW50ZXIgVG9kbyBJdGVtJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICBFbnRlciBhIFRvZG8gSXRlbVxyXG4gICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2ZvbnQ+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvZG9saXN0Lmxlbmd0aCA+PTEgPyB0b2RvbGlzdC5tYXAoKHRvZG8sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjxsaSBrZXk9e2lkeH0+e3RvZG99PGJ1dHRvbiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5yZW1vdmU8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogJ01hZGUgYnkgUmF5eWFuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkaW5nIiwiaW5kZXgiLCJVc2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJ0b2RvbGlzdCIsInNldFRvZG9saXN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlZEFyciIsImZpbHRlciIsInRvZG9pdGVtIiwiaW5kZXhPZiIsImRpdiIsImgzIiwiZm9udCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDQiLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();