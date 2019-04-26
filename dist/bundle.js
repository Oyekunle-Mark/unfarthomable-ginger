/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./store.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actionCreators/addColor.js":
/*!************************************!*\
  !*** ./actionCreators/addColor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\n\nconst addColor = (title, color, rating) => ({\n  type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ADD_COLOR,\n  id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])(),\n  title,\n  color,\n  rating,\n  timestamp: new Date().toString()\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addColor);\n\n\n//# sourceURL=webpack:///./actionCreators/addColor.js?");

/***/ }),

/***/ "./actionCreators/rateColor.js":
/*!*************************************!*\
  !*** ./actionCreators/rateColor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\nconst rateColor = (id, rating) => ({\n  type: _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RATE_COLOR,\n  id,\n  rating\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rateColor);\n\n\n//# sourceURL=webpack:///./actionCreators/rateColor.js?");

/***/ }),

/***/ "./actionCreators/removeColor.js":
/*!***************************************!*\
  !*** ./actionCreators/removeColor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\nconst removeColor = id => ({\n  type: _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RATE_COLOR,\n  id\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeColor);\n\n\n//# sourceURL=webpack:///./actionCreators/removeColor.js?");

/***/ }),

/***/ "./actionCreators/sortColor.js":
/*!*************************************!*\
  !*** ./actionCreators/sortColor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\nconst sortColor = (sortBy) => {\n  switch (sortBy) {\n    case 'rating':\n      return {\n        type: _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORT_COLORS,\n        sortBy: 'SORTED_BY_RATING'\n      };\n    case 'title':\n      return {\n        type: _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORT_COLORS,\n        sortBy: 'SORTED_BY_TITLE'\n      };\n    default:\n      return {\n        type: _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORT_COLORS,\n        sortBy: 'SORTED_BY_DATE'\n      };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sortColor);\n\n\n//# sourceURL=webpack:///./actionCreators/sortColor.js?");

/***/ }),

/***/ "./constants/colorConstants.js":
/*!*************************************!*\
  !*** ./constants/colorConstants.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// this constant provides some basic colors and their hex values\n\nconst colors = {\n  black: '#000000',\n  white: '#FFFFFF',\n  red: '#FF0000',\n  green: '#00FF00',\n  blue: '#0000FF'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (colors);\n\n\n//# sourceURL=webpack:///./constants/colorConstants.js?");

/***/ }),

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst constants = {\n  SORT_COLORS: 'SORT_COLORS',\n  ADD_COLOR: 'ADD_COLOR',\n  RATE_COLOR: 'RATE_COLOR',\n  REMOVE_COLOR: 'REMOVE_COLOR'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);\n\n\n//# sourceURL=webpack:///./constants/constants.js?");

/***/ }),

/***/ "./dataStore/data.js":
/*!***************************!*\
  !*** ./dataStore/data.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\n  colors: [\n    {\n      id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',\n      title: 'Ocean Blue',\n      color: '#0070ff',\n      rating: 3,\n      timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)'\n    },\n    {\n      id: 'f9005b4e-975e-433d-a646-79df172e1dbb',\n      title: 'Tomato',\n      color: '#d10012',\n      rating: 2,\n      timestamp: 'Fri Mar 11 2016 12:00:00 GMT-0800 (PST)'\n    },\n    {\n      id: '3315e1p5-3abl-0p523-30e4-8001l8yf4457',\n      title: 'Crazy Green',\n      color: '#00FF00',\n      rating: 0,\n      timestamp: 'Fri Mar 11 2016 12:00:00 GMT-0800 (PST)'\n    }\n  ],\n  sort: 'SORTED_BY_DATE'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n//# sourceURL=webpack:///./dataStore/data.js?");

/***/ }),

/***/ "./reducers/color.js":
/*!***************************!*\
  !*** ./reducers/color.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\nconst color = (state = {}, action) => {\n  switch (action.type) {\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_COLOR:\n      return {\n        id: action.id,\n        title: action.title,\n        color: action.color,\n        rating: action.rating,\n        timestamp: action.timestamp\n      };\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RATE_COLOR:\n      return (state.id !== action.id) ? state : {\n        ...state,\n        rating: action.rating\n      };\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (color);\n\n\n//# sourceURL=webpack:///./reducers/color.js?");

/***/ }),

/***/ "./reducers/colors.js":
/*!****************************!*\
  !*** ./reducers/colors.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./reducers/color.js\");\n\n\n\nconst colors = (state = [], action) => {\n  switch (action.type) {\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_COLOR:\n      return [\n        ...state,\n        Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, action)\n      ];\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RATE_COLOR:\n      return state.map(c => Object(_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(c, action));\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REMOVE_COLOR:\n      return state.filter(c => c.id !== action.id);\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (colors);\n\n\n//# sourceURL=webpack:///./reducers/colors.js?");

/***/ }),

/***/ "./reducers/sort.js":
/*!**************************!*\
  !*** ./reducers/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\nconst sort = (state = 'SORTED_BY_DATE', action) => {\n  switch (action.type) {\n    case _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SORT_COLORS:\n      return action.sortBy;\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sort);\n\n\n//# sourceURL=webpack:///./reducers/sort.js?");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/colors */ \"./reducers/colors.js\");\n/* harmony import */ var _reducers_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/sort */ \"./reducers/sort.js\");\n/* harmony import */ var _actionCreators_addColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionCreators/addColor */ \"./actionCreators/addColor.js\");\n/* harmony import */ var _actionCreators_rateColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionCreators/rateColor */ \"./actionCreators/rateColor.js\");\n/* harmony import */ var _actionCreators_removeColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionCreators/removeColor */ \"./actionCreators/removeColor.js\");\n/* harmony import */ var _actionCreators_sortColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators/sortColor */ \"./actionCreators/sortColor.js\");\n/* harmony import */ var _dataStore_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataStore/data */ \"./dataStore/data.js\");\n/* harmony import */ var _constants_colorConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/colorConstants */ \"./constants/colorConstants.js\");\n\n\n\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(\n  Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({ colors: _reducers_colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"], sort: _reducers_sort__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n  _dataStore_data__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n);\n\nconst print = action => console.log('Action:', action);\n\nconsole.log('Default color count:', store.getState().colors.length);\nconsole.log('Initial State:', store.getState());\n\nstore.subscribe(() => console.log('New State:', store.getState()));\nstore.subscribe(() => console.log('Color count:', store.getState().colors.length), '\\n');\n\nprint('Adding color...');\nstore.dispatch(Object(_actionCreators_addColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_constants_colorConstants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].black, 'black', 5));\n\nprint('Rating color...');\nstore.dispatch(Object(_actionCreators_rateColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('3315e1p5-3abl-0p523-30e4-8001l8yf4457', 4));\n\nprint('Removing color...');\nstore.dispatch(Object(_actionCreators_removeColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('3315e1p5-3abl-0p523-30e4-8001l8yf4457'));\n\nprint('Altering sort value...');\nstore.dispatch(Object(_actionCreators_sortColor__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('SORTED_BY_TITLE'));\n\n\n//# sourceURL=webpack:///./store.js?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });