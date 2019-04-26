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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ \"./constants/constants.js\");\n\n\n\nconst addColor = (title, color, rating) => ({\n  type: _constants_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ADD_COLOR,\n  id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])(),\n  title,\n  color,\n  rating,\n  timestamp: new Date().toString()\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addColor);\n\n\n//# sourceURL=webpack:///./actionCreators/addColor.js?");

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

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer;\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers);\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass a single function as the first argument,\n * and get a function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var keys = Object.keys(actionCreators);\n  var boundActionCreators = {};\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error(\"Dispatching while constructing your middleware is not allowed. \" + \"Other middleware would not be applied to this dispatch.\");\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([bth[buf[i++]], bth[buf[i++]], \n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]], '-',\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]],\n\tbth[buf[i++]], bth[buf[i++]]]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/lib/rng.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Unique ID creation requires a high quality random # generator.  In node.js\n// this is pretty straight-forward - we use the crypto API.\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nmodule.exports = function nodeRNG() {\n  return crypto.randomBytes(16);\n};\n\n\n//# sourceURL=webpack:///./node_modules/uuid/lib/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/broofa/node-uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack:///./node_modules/uuid/v4.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _reducers_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/colors */ \"./reducers/colors.js\");\n/* harmony import */ var _reducers_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/sort */ \"./reducers/sort.js\");\n/* harmony import */ var _actionCreators_addColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionCreators/addColor */ \"./actionCreators/addColor.js\");\n/* harmony import */ var _actionCreators_rateColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionCreators/rateColor */ \"./actionCreators/rateColor.js\");\n/* harmony import */ var _actionCreators_removeColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionCreators/removeColor */ \"./actionCreators/removeColor.js\");\n/* harmony import */ var _actionCreators_sortColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionCreators/sortColor */ \"./actionCreators/sortColor.js\");\n/* harmony import */ var _dataStore_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataStore/data */ \"./dataStore/data.js\");\n/* harmony import */ var _constants_colorConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/colorConstants */ \"./constants/colorConstants.js\");\n\n\n\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(\n  Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({ colors: _reducers_colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"], sort: _reducers_sort__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n  _dataStore_data__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n);\n\nconst print = action => console.log('Action:', action);\n\nconsole.log('Default color count:', store.getState().colors.length);\nconsole.log('Initial State:', store.getState());\n\nstore.subscribe(() => console.log('New State:', store.getState()));\nstore.subscribe(() => console.log('Color count:', store.getState().colors.length), '\\n');\n\nprint('Adding color...');\nstore.dispatch(Object(_actionCreators_addColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_constants_colorConstants__WEBPACK_IMPORTED_MODULE_8__[\"default\"].black, 'black', 5));\n\nprint('Rating color...');\nstore.dispatch(Object(_actionCreators_rateColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('3315e1p5-3abl-0p523-30e4-8001l8yf4457', 4));\n\nprint('Removing color...');\nstore.dispatch(Object(_actionCreators_removeColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('3315e1p5-3abl-0p523-30e4-8001l8yf4457'));\n\nprint('Altering sort value...');\nstore.dispatch(Object(_actionCreators_sortColor__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('SORTED_BY_TITLE'));\n\n\n//# sourceURL=webpack:///./store.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ })

/******/ });