(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-js", ["big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-js"] = factory(require("big-integer"));
	else
		root["IotaPicoPowJs"] = factory(root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_big_integer__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/dist/error/coreError.js":
/*!***************************************!*\
  !*** ../core/dist/error/coreError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),

/***/ "../core/dist/factories/factoryBase.js":
/*!*********************************************!*\
  !*** ../core/dist/factories/factoryBase.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "../core/dist/helpers/arrayHelper.js":
/*!*******************************************!*\
  !*** ../core/dist/helpers/arrayHelper.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! ./objectHelper */ "../core/dist/helpers/objectHelper.js");
/**
 * Array helper methods.
 */


var ArrayHelper =
/*#__PURE__*/
function () {
  function ArrayHelper() {
    _classCallCheck(this, ArrayHelper);
  }

  _createClass(ArrayHelper, null, [{
    key: "isArray",

    /**
     * Is the value an array.
     * @param value Object to test.
     * @returns True if the value is an array.
     */
    value: function isArray(value) {
      return value === null || value === undefined ? false : Array.isArray(value);
    }
    /**
     * Is the value a empty array.
     * @param value Object to test.
     * @returns True if the value is a empty array.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !ArrayHelper.isArray(value) || value.length === 0;
    }
    /**
     * Is the value a non empty array of specific type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is a non empty array of a specific type.
     */

  }, {
    key: "isTyped",
    value: function isTyped(value, type) {
      return !ArrayHelper.isEmpty(value) && !value.includes(undefined) && !value.includes(null) && value.every(function (a) {
        return objectHelper_1.ObjectHelper.isType(a, type);
      });
    }
  }]);

  return ArrayHelper;
}();

exports.ArrayHelper = ArrayHelper;

/***/ }),

/***/ "../core/dist/helpers/jsonHelper.js":
/*!******************************************!*\
  !*** ../core/dist/helpers/jsonHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),

/***/ "../core/dist/helpers/numberHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/numberHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "../core/dist/helpers/objectHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/objectHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param type The type of the object
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "../core/dist/helpers/stringHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/stringHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "../core/dist/services/timeService.js":
/*!********************************************!*\
  !*** ../core/dist/services/timeService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Represents a class which can provide the time.
 */

var TimeService =
/*#__PURE__*/
function () {
  function TimeService() {
    _classCallCheck(this, TimeService);
  }

  _createClass(TimeService, [{
    key: "msSinceEpoch",

    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    value: function msSinceEpoch() {
      return Date.now();
    }
  }]);

  return TimeService;
}();

exports.TimeService = TimeService;

/***/ }),

/***/ "../crypto/dist/digests/sha3.js":
/*!**************************************!*\
  !*** ../crypto/dist/digests/sha3.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Sha3 implementation.
 */


var Sha3 =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of SHA3.
   * @param bits The number of input bits.
   * @param padding The padding to use.
   * @param outputBits The number of output bits.
   */
  function Sha3(bits, padding, outputBits) {
    _classCallCheck(this, Sha3);

    this._padding = padding;
    this._outputBits = outputBits;
    this._blockCount = 1600 - (bits << 1) >> 5;
    this._byteCount = this._blockCount << 2;
    this._outputBlocks = outputBits >> 5;
    this._extraBytes = (outputBits & 31) >> 3;
    this.reset();
  }
  /**
   * Reset the digest.
   */


  _createClass(Sha3, [{
    key: "reset",
    value: function reset() {
      this._reset = true;
      this._block = 0;
      this._start = 0;
      this._blocks = new Uint32Array(this._blockCount + 1);
      this._state = new Uint32Array(50);
    }
    /**
     * Update the digest.
     * @param input Array of data to use in the update.
     */

  }, {
    key: "update",
    value: function update(input) {
      if (!objectHelper_1.ObjectHelper.isType(input, ArrayBuffer)) {
        throw new cryptoError_1.CryptoError("Input is not of type ArrayBuffer");
      }

      var message = new Uint8Array(input);
      var length = message.length;
      var index = 0;
      var i;

      while (index < length) {
        if (this._reset) {
          this._reset = false;
          this._blocks[0] = this._block;

          for (i = 1; i < this._blockCount + 1; ++i) {
            this._blocks[i] = 0;
          }
        }

        for (i = this._start; index < length && i < this._byteCount; ++index) {
          this._blocks[i >> 2] |= message[index] << Sha3.SHIFT[i++ & 3];
        }

        this._lastByteIndex = i;

        if (i >= this._byteCount) {
          this._start = i - this._byteCount;
          this._block = this._blocks[this._blockCount];

          for (i = 0; i < this._blockCount; ++i) {
            this._state[i] ^= this._blocks[i];
          }

          this.keccakPermutation(this._state);
          this._reset = true;
        } else {
          this._start = i;
        }
      }
    }
    /**
     * Finalize and return the hash for the digest, will also reset the state.
     * @returns Array buffer containing the digest.
     */

  }, {
    key: "digest",
    value: function digest() {
      this.finalize();
      var i = 0;
      var j = 0;
      var bytes = this._outputBits >> 3;
      var buffer;

      if (this._extraBytes) {
        buffer = new ArrayBuffer(this._outputBlocks + 1 << 2);
      } else {
        buffer = new ArrayBuffer(bytes);
      }

      var array = new Uint32Array(buffer);

      while (j < this._outputBlocks) {
        for (i = 0; i < this._blockCount && j < this._outputBlocks; ++i, ++j) {
          array[j] = this._state[i];
        }
      }

      if (this._extraBytes) {
        array[i] = this._state[i];
        buffer = buffer.slice(0, bytes);
      }

      this.reset();
      return buffer;
    }
    /* @internal */

  }, {
    key: "finalize",
    value: function finalize() {
      var i = this._lastByteIndex;
      this._blocks[i >> 2] |= this._padding[i & 3];

      if (this._lastByteIndex === this._byteCount) {
        this._blocks[0] = this._blocks[this._blockCount];

        for (i = 1; i < this._blockCount + 1; ++i) {
          this._blocks[i] = 0;
        }
      }

      this._blocks[this._blockCount - 1] |= 0x80000000;

      for (i = 0; i < this._blockCount; ++i) {
        this._state[i] ^= this._blocks[i];
      }

      this.keccakPermutation(this._state);
    }
    /* @internal */

  }, {
    key: "keccakPermutation",
    value: function keccakPermutation(s) {
      // tslint:disable-next-line:one-variable-per-declaration
      var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;

      for (n = 0; n < 48; n += 2) {
        c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
        c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
        c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
        c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
        c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
        c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
        c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
        c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
        c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
        c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];
        h = c8 ^ (c2 << 1 | c3 >>> 31);
        l = c9 ^ (c3 << 1 | c2 >>> 31);
        s[0] ^= h;
        s[1] ^= l;
        s[10] ^= h;
        s[11] ^= l;
        s[20] ^= h;
        s[21] ^= l;
        s[30] ^= h;
        s[31] ^= l;
        s[40] ^= h;
        s[41] ^= l;
        h = c0 ^ (c4 << 1 | c5 >>> 31);
        l = c1 ^ (c5 << 1 | c4 >>> 31);
        s[2] ^= h;
        s[3] ^= l;
        s[12] ^= h;
        s[13] ^= l;
        s[22] ^= h;
        s[23] ^= l;
        s[32] ^= h;
        s[33] ^= l;
        s[42] ^= h;
        s[43] ^= l;
        h = c2 ^ (c6 << 1 | c7 >>> 31);
        l = c3 ^ (c7 << 1 | c6 >>> 31);
        s[4] ^= h;
        s[5] ^= l;
        s[14] ^= h;
        s[15] ^= l;
        s[24] ^= h;
        s[25] ^= l;
        s[34] ^= h;
        s[35] ^= l;
        s[44] ^= h;
        s[45] ^= l;
        h = c4 ^ (c8 << 1 | c9 >>> 31);
        l = c5 ^ (c9 << 1 | c8 >>> 31);
        s[6] ^= h;
        s[7] ^= l;
        s[16] ^= h;
        s[17] ^= l;
        s[26] ^= h;
        s[27] ^= l;
        s[36] ^= h;
        s[37] ^= l;
        s[46] ^= h;
        s[47] ^= l;
        h = c6 ^ (c0 << 1 | c1 >>> 31);
        l = c7 ^ (c1 << 1 | c0 >>> 31);
        s[8] ^= h;
        s[9] ^= l;
        s[18] ^= h;
        s[19] ^= l;
        s[28] ^= h;
        s[29] ^= l;
        s[38] ^= h;
        s[39] ^= l;
        s[48] ^= h;
        s[49] ^= l;
        b0 = s[0];
        b1 = s[1];
        b32 = s[11] << 4 | s[10] >>> 28;
        b33 = s[10] << 4 | s[11] >>> 28;
        b14 = s[20] << 3 | s[21] >>> 29;
        b15 = s[21] << 3 | s[20] >>> 29;
        b46 = s[31] << 9 | s[30] >>> 23;
        b47 = s[30] << 9 | s[31] >>> 23;
        b28 = s[40] << 18 | s[41] >>> 14;
        b29 = s[41] << 18 | s[40] >>> 14;
        b20 = s[2] << 1 | s[3] >>> 31;
        b21 = s[3] << 1 | s[2] >>> 31;
        b2 = s[13] << 12 | s[12] >>> 20;
        b3 = s[12] << 12 | s[13] >>> 20;
        b34 = s[22] << 10 | s[23] >>> 22;
        b35 = s[23] << 10 | s[22] >>> 22;
        b16 = s[33] << 13 | s[32] >>> 19;
        b17 = s[32] << 13 | s[33] >>> 19;
        b48 = s[42] << 2 | s[43] >>> 30;
        b49 = s[43] << 2 | s[42] >>> 30;
        b40 = s[5] << 30 | s[4] >>> 2;
        b41 = s[4] << 30 | s[5] >>> 2;
        b22 = s[14] << 6 | s[15] >>> 26;
        b23 = s[15] << 6 | s[14] >>> 26;
        b4 = s[25] << 11 | s[24] >>> 21;
        b5 = s[24] << 11 | s[25] >>> 21;
        b36 = s[34] << 15 | s[35] >>> 17;
        b37 = s[35] << 15 | s[34] >>> 17;
        b18 = s[45] << 29 | s[44] >>> 3;
        b19 = s[44] << 29 | s[45] >>> 3;
        b10 = s[6] << 28 | s[7] >>> 4;
        b11 = s[7] << 28 | s[6] >>> 4;
        b42 = s[17] << 23 | s[16] >>> 9;
        b43 = s[16] << 23 | s[17] >>> 9;
        b24 = s[26] << 25 | s[27] >>> 7;
        b25 = s[27] << 25 | s[26] >>> 7;
        b6 = s[36] << 21 | s[37] >>> 11;
        b7 = s[37] << 21 | s[36] >>> 11;
        b38 = s[47] << 24 | s[46] >>> 8;
        b39 = s[46] << 24 | s[47] >>> 8;
        b30 = s[8] << 27 | s[9] >>> 5;
        b31 = s[9] << 27 | s[8] >>> 5;
        b12 = s[18] << 20 | s[19] >>> 12;
        b13 = s[19] << 20 | s[18] >>> 12;
        b44 = s[29] << 7 | s[28] >>> 25;
        b45 = s[28] << 7 | s[29] >>> 25;
        b26 = s[38] << 8 | s[39] >>> 24;
        b27 = s[39] << 8 | s[38] >>> 24;
        b8 = s[48] << 14 | s[49] >>> 18;
        b9 = s[49] << 14 | s[48] >>> 18;
        s[0] = b0 ^ ~b2 & b4;
        s[1] = b1 ^ ~b3 & b5;
        s[10] = b10 ^ ~b12 & b14;
        s[11] = b11 ^ ~b13 & b15;
        s[20] = b20 ^ ~b22 & b24;
        s[21] = b21 ^ ~b23 & b25;
        s[30] = b30 ^ ~b32 & b34;
        s[31] = b31 ^ ~b33 & b35;
        s[40] = b40 ^ ~b42 & b44;
        s[41] = b41 ^ ~b43 & b45;
        s[2] = b2 ^ ~b4 & b6;
        s[3] = b3 ^ ~b5 & b7;
        s[12] = b12 ^ ~b14 & b16;
        s[13] = b13 ^ ~b15 & b17;
        s[22] = b22 ^ ~b24 & b26;
        s[23] = b23 ^ ~b25 & b27;
        s[32] = b32 ^ ~b34 & b36;
        s[33] = b33 ^ ~b35 & b37;
        s[42] = b42 ^ ~b44 & b46;
        s[43] = b43 ^ ~b45 & b47;
        s[4] = b4 ^ ~b6 & b8;
        s[5] = b5 ^ ~b7 & b9;
        s[14] = b14 ^ ~b16 & b18;
        s[15] = b15 ^ ~b17 & b19;
        s[24] = b24 ^ ~b26 & b28;
        s[25] = b25 ^ ~b27 & b29;
        s[34] = b34 ^ ~b36 & b38;
        s[35] = b35 ^ ~b37 & b39;
        s[44] = b44 ^ ~b46 & b48;
        s[45] = b45 ^ ~b47 & b49;
        s[6] = b6 ^ ~b8 & b0;
        s[7] = b7 ^ ~b9 & b1;
        s[16] = b16 ^ ~b18 & b10;
        s[17] = b17 ^ ~b19 & b11;
        s[26] = b26 ^ ~b28 & b20;
        s[27] = b27 ^ ~b29 & b21;
        s[36] = b36 ^ ~b38 & b30;
        s[37] = b37 ^ ~b39 & b31;
        s[46] = b46 ^ ~b48 & b40;
        s[47] = b47 ^ ~b49 & b41;
        s[8] = b8 ^ ~b0 & b2;
        s[9] = b9 ^ ~b1 & b3;
        s[18] = b18 ^ ~b10 & b12;
        s[19] = b19 ^ ~b11 & b13;
        s[28] = b28 ^ ~b20 & b22;
        s[29] = b29 ^ ~b21 & b23;
        s[38] = b38 ^ ~b30 & b32;
        s[39] = b39 ^ ~b31 & b33;
        s[48] = b48 ^ ~b40 & b42;
        s[49] = b49 ^ ~b41 & b43;
        s[0] ^= Sha3.ROUND_CONSTANTS[n];
        s[1] ^= Sha3.ROUND_CONSTANTS[n + 1];
      }
    }
  }]);

  return Sha3;
}();
/* Padding to use for Keccak */


Sha3.KECCAK_PADDING = new Uint32Array([1, 256, 65536, 16777216]);
/* @internal */

Sha3.SHIFT = new Uint8Array([0, 8, 16, 24]);
/* @internal */

Sha3.ROUND_CONSTANTS = new Uint32Array([1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]);
exports.Sha3 = Sha3;

/***/ }),

/***/ "../crypto/dist/error/cryptoError.js":
/*!*******************************************!*\
  !*** ../crypto/dist/error/cryptoError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A crypto implementation of an error.
 */


var CryptoError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(CryptoError, _coreError_1$CoreErro);

  /**
   * Create an instance of CryptoError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CryptoError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CryptoError);

    _this = _possibleConstructorReturn(this, (CryptoError.__proto__ || Object.getPrototypeOf(CryptoError)).call(this, message, additional, innerError));
    _this.domain = "Crypto";
    return _this;
  }

  return CryptoError;
}(coreError_1.CoreError);

exports.CryptoError = CryptoError;

/***/ }),

/***/ "../crypto/dist/factories/spongeFactory.js":
/*!*************************************************!*\
  !*** ../crypto/dist/factories/spongeFactory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/factoryBase */ "../core/dist/factories/factoryBase.js");

var curl_1 = __webpack_require__(/*! ../sponges/curl */ "../crypto/dist/sponges/curl.js");

var kerl_1 = __webpack_require__(/*! ../sponges/kerl */ "../crypto/dist/sponges/kerl.js");
/**
 * Factory to generate sponges.
 */


var SpongeFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(SpongeFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function SpongeFactory() {
    _classCallCheck(this, SpongeFactory);

    return _possibleConstructorReturn(this, (SpongeFactory.__proto__ || Object.getPrototypeOf(SpongeFactory)).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(SpongeFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return SpongeFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!SpongeFactory._instance) {
        SpongeFactory._instance = new SpongeFactory();

        SpongeFactory._instance.register("curl", function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new (Function.prototype.bind.apply(curl_1.Curl, [null].concat(args)))();
        });

        SpongeFactory._instance.register("curl81", function () {
          return new curl_1.Curl(81);
        });

        SpongeFactory._instance.register("curl27", function () {
          return new curl_1.Curl(27);
        });

        SpongeFactory._instance.register("kerl", function () {
          return new kerl_1.Kerl();
        });
      }

      return SpongeFactory._instance;
    }
  }]);

  return SpongeFactory;
}(factoryBase_1.FactoryBase);

exports.SpongeFactory = SpongeFactory;

/***/ }),

/***/ "../crypto/dist/helpers/bigIntegerHelper.js":
/*!**************************************************!*\
  !*** ../crypto/dist/helpers/bigIntegerHelper.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js"); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(/*! big-integer */ "big-integer"));

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var BigIntegerHelper =
/*#__PURE__*/
function () {
  function BigIntegerHelper() {
    _classCallCheck(this, BigIntegerHelper);
  }

  _createClass(BigIntegerHelper, null, [{
    key: "tritsToBigInteger",

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    value: function tritsToBigInteger(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var value = big_integer_1.default.zero;

      for (var i = length - 1; i >= 0; i--) {
        value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
      }

      return value;
    }
    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */

  }, {
    key: "bigIntegerToTrits",
    value: function bigIntegerToTrits(value, trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
        throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (offset + length > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
      }

      var absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;

      for (var i = 0; i < length; i++) {
        var divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
        absoluteValue = divRemainder.quotient;
        var remainder = divRemainder.remainder;

        if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
          remainder = BigIntegerHelper.MIN_TRIT_VALUE;
          absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
        }

        trits[offset + i] = remainder.toJSNumber();
      }

      if (value.compareTo(big_integer_1.default.zero) < 0) {
        for (var _i = 0; _i < length; _i++) {
          // Avoid negative zero
          trits[offset + _i] = trits[offset + _i] === 0 ? 0 : -trits[offset + _i];
        }
      }
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */

  }, {
    key: "bigIntegerToBytes",
    value: function bigIntegerToBytes(value, destination, offset) {
      if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
        throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
      }

      if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The destination must be an array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Destination array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      } // Remember if it is negative for later


      var isNeg = value.isNegative() ? -1 : 0;
      var hexString = value.toString(16);

      if (isNeg === -1) {
        // But remove it for now
        hexString = hexString.slice(1);
      } // Now make sure the hex string is an even length so the regex works


      if (hexString.length % 2 === 1) {
        hexString = "0".concat(hexString);
      }

      var matches = hexString.match(/[0-9a-f]{2}/g); // Convert the hex to numbers

      var signedBytes = new Int8Array(matches.map(function (hex) {
        return parseInt("0x".concat(hex), 16);
      }));

      if (isNeg === -1) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var dataView = new DataView(destination); // Pad the start of the buffer with the neg value

      var i = offset;

      while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
        dataView.setInt8(i++, isNeg);
      } // And copy in the actual bytes


      for (var j = signedBytes.length; j-- > 0;) {
        dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
      }
    }
    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */

  }, {
    key: "bytesToBigInteger",
    value: function bytesToBigInteger(source, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
        throw new cryptoError_1.CryptoError("The source must be a non empty number array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new cryptoError_1.CryptoError("The length must be a number > 0");
      }

      if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
        throw new cryptoError_1.CryptoError("Source array has invalid size, it must be at least ".concat(BigIntegerHelper.BYTE_HASH_LENGTH));
      }

      var dataView = new DataView(source);
      var signedBytes = new Int8Array(dataView.byteLength);

      for (var b = 0; b < dataView.byteLength; b++) {
        signedBytes[b] = dataView.getInt8(b + offset);
      } // Remove the initial padding leaving at least one byte


      var paddingOffset = 0;
      var firstByte = signedBytes[0];
      var isNeg = firstByte < 0; // If the first padding character is negative then reverse the 2s complement
      // but first strip of the leading padding

      if (firstByte === 0 || firstByte === -1) {
        while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
          paddingOffset++;
        } // Strip any padding


        signedBytes = signedBytes.slice(paddingOffset);
      }

      if (isNeg) {
        BigIntegerHelper.twosComplement(signedBytes);
      }

      var hexString = isNeg ? "-" : "";
      var dv = new DataView(signedBytes.buffer);

      for (var h = 0; h < dv.byteLength; h++) {
        hexString += "00".concat(dv.getUint8(h).toString(16)).slice(-2);
      }

      return big_integer_1.default(hexString, 16);
    }
    /* @internal */

  }, {
    key: "twosComplement",
    value: function twosComplement(signedBytes) {
      // if the whole number is negative then
      // change to 2's complements by noting all the numbers
      // and adding 1 to the last i.e. ~bignum+1
      for (var b = 0; b < signedBytes.length; b++) {
        signedBytes[b] = ~signedBytes[b];
      } // Add 1 to last number, if the number is 0xFF continue to carry


      var c = signedBytes.length - 1;

      do {
        signedBytes[c]++;
      } while (signedBytes[c--] === 0 && c > 0);
    }
  }]);

  return BigIntegerHelper;
}();
/* @internal */


BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */

BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */

BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */

BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */

BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;

/***/ }),

/***/ "../crypto/dist/helpers/transactionHelper.js":
/*!***************************************************!*\
  !*** ../crypto/dist/helpers/transactionHelper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var spongeFactory_1 = __webpack_require__(/*! ../factories/spongeFactory */ "../crypto/dist/factories/spongeFactory.js");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */


var TransactionHelper =
/*#__PURE__*/
function () {
  function TransactionHelper() {
    _classCallCheck(this, TransactionHelper);
  }

  _createClass(TransactionHelper, null, [{
    key: "hash",

    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of thr transaction.
     */
    value: function hash(transaction) {
      if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
        throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
      }

      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      var transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
      curl.initialize();
      curl.absorb(transactionTrits, 0, transactionTrits.length);
      var hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
      curl.squeeze(hashTrits, 0, hashTrits.length);
      return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
  }]);

  return TransactionHelper;
}();

exports.TransactionHelper = TransactionHelper;

/***/ }),

/***/ "../crypto/dist/proofOfWork/proofOfWorkBase.js":
/*!*****************************************************!*\
  !*** ../crypto/dist/proofOfWork/proofOfWorkBase.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../crypto/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var timeService_1 = __webpack_require__(/*! @iota-pico/core/dist/services/timeService */ "../core/dist/services/timeService.js");

var hash_1 = __webpack_require__(/*! @iota-pico/data/dist/data/hash */ "../data/dist/data/hash.js");

var tag_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tag */ "../data/dist/data/tag.js");

var transaction_1 = __webpack_require__(/*! @iota-pico/data/dist/data/transaction */ "../data/dist/data/transaction.js");

var tryteNumber_1 = __webpack_require__(/*! @iota-pico/data/dist/data/tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var transactionHelper_1 = __webpack_require__(/*! ../helpers/transactionHelper */ "../crypto/dist/helpers/transactionHelper.js");
/**
 * Base class for proof of work.
 */


var ProofOfWorkBase =
/*#__PURE__*/
function () {
  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkBase(timeService) {
    _classCallCheck(this, ProofOfWorkBase);

    this._timeService = timeService || new timeService_1.TimeService();
  }
  /**
   * Allow the proof of work to perform any initialization.
   * Will throw an exception if the implementation is not supported.
   */


  _createClass(ProofOfWorkBase, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Promise.resolve());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */

  }, {
    key: "pow",
    value: function () {
      var _pow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        var finalTrytes, previousTransactionHash, i, transaction, newTrytes, singleTrytes, returnTransaction;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
                  _context2.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");

              case 2:
                if (objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
                  _context2.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");

              case 4:
                if (arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
                  _context2.next = 6;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");

              case 6:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context2.next = 8;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 8:
                finalTrytes = [];
                i = 0;

              case 10:
                if (!(i < trytes.length)) {
                  _context2.next = 35;
                  break;
                }

                transaction = transaction_1.Transaction.fromTrytes(trytes[i]); // Start with last index transaction
                // Assign it the trunk / branch which the user has supplied
                // If there is a bundle, chain the bundle transactions via
                // trunkTransaction together

                transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
                transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
                transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE); // If this is the first transaction, to be processed
                // Make sure that it's the last in the bundle and then
                // assign it the supplied trunk and branch transactions

                if (!objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                  _context2.next = 22;
                  break;
                }

                if (!(transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber())) {
                  _context2.next = 18;
                  break;
                }

                throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");

              case 18:
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
                _context2.next = 24;
                break;

              case 22:
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;

              case 24:
                newTrytes = transaction.toTrytes();
                _context2.next = 27;
                return this.singlePow(newTrytes, minWeightMagnitude);

              case 27:
                singleTrytes = _context2.sent;
                transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH)); // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry

                returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
                previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
                finalTrytes.push(returnTransaction);

              case 32:
                i++;
                _context2.next = 10;
                break;

              case 35:
                return _context2.abrupt("return", finalTrytes.reverse().map(function (transaction) {
                  return transaction.toTrytes();
                }));

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function pow(_x, _x2, _x3, _x4) {
        return _pow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkBase;
}();
/**
 * The maximum timestamp value used in proof of work.
 */


ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;

/***/ }),

/***/ "../crypto/dist/sponges/curl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/curl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");
/**
 * Implementation of ISponge using Curl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js
 */


var Curl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Curl.
   * @param rounds The number of rounds to use.
   */
  function Curl() {
    var rounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Curl.NUMBER_OF_ROUNDS;

    _classCallCheck(this, Curl);

    this._numberOfRounds = rounds;
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Curl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "NUMBER_OF_ROUNDS":
          {
            return this._numberOfRounds;
          }

        case "HASH_LENGTH":
        case "STATE_LENGTH":
          {
            return Curl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return this._state;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {
      if (state) {
        this._state = state;
      } else {
        this._state = new Int8Array(Curl.STATE_LENGTH);
      }
    }
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initialize();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? localLength : Curl.HASH_LENGTH;

        while (i < limit) {
          this._state[i++] = trits[localOffset++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var i = 0;
        var limit = localLength < Curl.HASH_LENGTH ? length : Curl.HASH_LENGTH;

        while (i < limit) {
          trits[localOffset++] = this._state[i++];
        }

        this.transform();
        localLength -= Curl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Transform the hash.
     * @internal
     */

  }, {
    key: "transform",
    value: function transform() {
      var stateCopy;
      var index = 0;

      for (var round = 0; round < this._numberOfRounds; round++) {
        stateCopy = new Int8Array(this._state.slice());

        for (var i = 0; i < Curl.STATE_LENGTH; i++) {
          this._state[i] = Curl.TRUTH_TABLE[stateCopy[index] + (stateCopy[index += index < 365 ? 364 : -365] << 2) + 5];
        }
      }
    }
  }]);

  return Curl;
}();

Curl.HASH_LENGTH = 243;
Curl.NUMBER_OF_ROUNDS = 81;
Curl.STATE_LENGTH = Curl.HASH_LENGTH * 3;
/* @internal */

Curl.TRUTH_TABLE = new Int8Array([1, 0, -1, 2, 1, -1, 0, 2, -1, 1, 0]);
exports.Curl = Curl;

/***/ }),

/***/ "../crypto/dist/sponges/kerl.js":
/*!**************************************!*\
  !*** ../crypto/dist/sponges/kerl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var sha3_1 = __webpack_require__(/*! ../digests/sha3 */ "../crypto/dist/digests/sha3.js");

var cryptoError_1 = __webpack_require__(/*! ../error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var bigIntegerHelper_1 = __webpack_require__(/*! ../helpers/bigIntegerHelper */ "../crypto/dist/helpers/bigIntegerHelper.js");
/**
 * Implementation of ISponge using Kerl algorithm.
 * https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */


var Kerl =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of Kerl.
   */
  function Kerl() {
    _classCallCheck(this, Kerl);

    this._keccak = new sha3_1.Sha3(384, sha3_1.Sha3.KECCAK_PADDING, 384);
  }
  /**
   * Get the constant for the spone.
   * @name The name of the contant to get.
   * @returns The constant.
   */


  _createClass(Kerl, [{
    key: "getConstant",
    value: function getConstant(name) {
      switch (name) {
        case "HASH_LENGTH":
        case "BIT_HASH_LENGTH":
        case "BYTE_HASH_LENGTH":
          {
            return Kerl[name];
          }

        default:
          throw new cryptoError_1.CryptoError("Unknown constant requested ".concat(name));
      }
    }
    /**
     * Get the state.
     * @returns The state.
     */

  }, {
    key: "getState",
    value: function getState() {
      return undefined;
    }
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */

  }, {
    key: "initialize",
    value: function initialize(state) {}
    /**
     * Reset the hasher.
     */

  }, {
    key: "reset",
    value: function reset() {
      this._keccak.reset();
    }
    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */

  }, {
    key: "absorb",
    value: function absorb(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var tritState = trits.slice(localOffset, localOffset + Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var bigInt = bigIntegerHelper_1.BigIntegerHelper.tritsToBigInteger(tritState, 0, tritState.length);
        var byteState = new ArrayBuffer(Kerl.BYTE_HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToBytes(bigInt, byteState, 0);

        this._keccak.update(byteState);

        localOffset += Kerl.HASH_LENGTH;
        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */

  }, {
    key: "squeeze",
    value: function squeeze(trits, offset, length) {
      if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
        throw new cryptoError_1.CryptoError("Trits must be a non empty Int8Array");
      }

      if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
        throw new cryptoError_1.CryptoError("Offset must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new cryptoError_1.CryptoError("Length must be a number >= 0");
      }

      if (length + offset > trits.length) {
        throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the trits");
      }

      if (length % 243 !== 0) {
        throw new cryptoError_1.CryptoError("Length must be a multiple of ".concat(Kerl.HASH_LENGTH), {
          length: length
        });
      }

      var localOffset = offset;
      var localLength = length;

      do {
        var byteStateBuffer = this._keccak.digest();

        var bigInt = bigIntegerHelper_1.BigIntegerHelper.bytesToBigInteger(byteStateBuffer, 0, Kerl.BYTE_HASH_LENGTH);
        var tritState = new Int8Array(Kerl.HASH_LENGTH);
        bigIntegerHelper_1.BigIntegerHelper.bigIntegerToTrits(bigInt, tritState, 0, Kerl.HASH_LENGTH);
        tritState[Kerl.HASH_LENGTH - 1] = 0;
        var i = 0;

        while (i < Kerl.HASH_LENGTH) {
          trits[localOffset++] = tritState[i++];
        }

        var dv = new DataView(byteStateBuffer);

        for (i = 0; i < dv.byteLength; i++) {
          dv.setUint8(i, dv.getUint8(i) ^ 0xFF);
        }

        this._keccak.update(byteStateBuffer);

        localLength -= Kerl.HASH_LENGTH;
      } while (localLength > 0);
    }
  }]);

  return Kerl;
}();
/* @internal */


Kerl.HASH_LENGTH = 243;
/* @internal */

Kerl.BIT_HASH_LENGTH = 384;
/* @internal */

Kerl.BYTE_HASH_LENGTH = Kerl.BIT_HASH_LENGTH / 8;
exports.Kerl = Kerl;

/***/ }),

/***/ "../crypto/node_modules/@babel/runtime/regenerator/index.js":
/*!******************************************************************!*\
  !*** ../crypto/node_modules/@babel/runtime/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../crypto/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../crypto/node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************!*\
  !*** ../crypto/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../crypto/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../crypto/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************!*\
  !*** ../crypto/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "../data/dist/data/address.js":
/*!************************************!*\
  !*** ../data/dist/data/address.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling addresses.
 */


var Address =
/*#__PURE__*/
function () {
  /* @internal */
  function Address(addressTrytes, checksumTrytes) {
    _classCallCheck(this, Address);

    this._addressTrytes = addressTrytes;
    this._checksumTrytes = checksumTrytes;
  }
  /**
   * Create address from trytes.
   * @param address The trytes to create the address from.
   * @returns An instance of Address.
   */


  _createClass(Address, [{
    key: "toTrytes",

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */

  }, {
    key: "toTrytesWithChecksum",
    value: function toTrytesWithChecksum() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
      } else {
        throw new dataError_1.DataError("This address has no checksum calculated for it");
      }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
        return this._addressTrytes + this._checksumTrytes;
      } else {
        return this._addressTrytes;
      }
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(address) {
      if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The address should be a valid Trytes object");
      }

      var trytesString = address.toString();

      if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
        throw new dataError_1.DataError("The address should either be ".concat(Address.LENGTH, " or ").concat(Address.LENGTH_WITH_CHECKSUM, " characters in length"), {
          length: trytesString.length
        });
      }

      var addressTrytes = trytesString.substr(0, Address.LENGTH);
      var checksumTrytes;

      if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
        checksumTrytes = trytesString.substr(Address.LENGTH);
      }

      return new Address(addressTrytes, checksumTrytes);
    }
  }]);

  return Address;
}();
/**
 * The length for a valid address without checksum (81).
 */


Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */

Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */

Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */

Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;

/***/ }),

/***/ "../data/dist/data/hash.js":
/*!*********************************!*\
  !*** ../data/dist/data/hash.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling hashes.
 */


var Hash =
/*#__PURE__*/
function () {
  /* @internal */
  function Hash(trytes) {
    _classCallCheck(this, Hash);

    this._trytes = trytes;
  }
  /**
   * Create hash from trytes.
   * @param hash The trytes to create the hash from.
   * @returns An instance of Hash.
   */


  _createClass(Hash, [{
    key: "toTrytes",

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(hash) {
      if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The hash should be a valid Trytes object");
      }

      var length = hash.length();

      if (length !== Hash.LENGTH) {
        throw new dataError_1.DataError("The hash should be ".concat(Hash.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new Hash(hash);
    }
  }]);

  return Hash;
}();
/**
 * The length for a valid hash (81).
 */


Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */

Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;

/***/ }),

/***/ "../data/dist/data/signatureMessageFragment.js":
/*!*****************************************************!*\
  !*** ../data/dist/data/signatureMessageFragment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling signature message fragments.
 */


var SignatureMessageFragment =
/*#__PURE__*/
function () {
  /* @internal */
  function SignatureMessageFragment(trytes) {
    _classCallCheck(this, SignatureMessageFragment);

    this._trytes = trytes;
  }
  /**
   * Create signature fragment from trytes.
   * @param signatureMessageFragment The trytes to create the signature fragment from.
   * @returns An instance of SignatureMessageFragment.
   */


  _createClass(SignatureMessageFragment, [{
    key: "toTrytes",

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    value: function toTrytes() {
      return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes.toString();
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(signatureMessageFragment) {
      if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
      }

      var length = signatureMessageFragment.length();

      if (length !== SignatureMessageFragment.LENGTH) {
        throw new dataError_1.DataError("The signatureMessageFragment should be ".concat(SignatureMessageFragment.LENGTH, " characters in length"), {
          length: length
        });
      }

      return new SignatureMessageFragment(signatureMessageFragment);
    }
  }]);

  return SignatureMessageFragment;
}();
/**
 * The length of a valid signature message fragment (2187)
 */


SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */

SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;

/***/ }),

/***/ "../data/dist/data/tag.js":
/*!********************************!*\
  !*** ../data/dist/data/tag.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tags.
 */


var Tag =
/*#__PURE__*/
function () {
  /* @internal */
  function Tag(trytes) {
    _classCallCheck(this, Tag);

    this._trytes = trytes;
  }
  /**
   * Create tag from trytes.
   * @param tag The trytes to create the tag from.
   * @returns An instance of Tag.
   */


  _createClass(Tag, [{
    key: "toTrytes",

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
  }], [{
    key: "fromTrytes",
    value: function fromTrytes(tag) {
      if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The tag should be a valid Trytes object");
      }

      var trytesString = tag.toString();

      if (trytesString.length > Tag.LENGTH) {
        throw new dataError_1.DataError("The tag should be at most ".concat(Tag.LENGTH, " characters in length"), {
          length: trytesString.length
        });
      }

      while (trytesString.length < Tag.LENGTH) {
        trytesString += "9";
      }

      return new Tag(trytesString);
    }
  }]);

  return Tag;
}();
/**
 * The length of a valid tag (27).
 */


Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */

Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;

/***/ }),

/***/ "../data/dist/data/transaction.js":
/*!****************************************!*\
  !*** ../data/dist/data/transaction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var address_1 = __webpack_require__(/*! ./address */ "../data/dist/data/address.js");

var hash_1 = __webpack_require__(/*! ./hash */ "../data/dist/data/hash.js");

var signatureMessageFragment_1 = __webpack_require__(/*! ./signatureMessageFragment */ "../data/dist/data/signatureMessageFragment.js");

var tag_1 = __webpack_require__(/*! ./tag */ "../data/dist/data/tag.js");

var tryteNumber_1 = __webpack_require__(/*! ./tryteNumber */ "../data/dist/data/tryteNumber.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling transactions.
 */


var Transaction =
/*#__PURE__*/
function () {
  /* @internal */
  function Transaction() {
    _classCallCheck(this, Transaction);
  }
  /**
   * Create instance of transaction from parameters.
   * @param signatureMessageFragment The signature message fragment.
   * @param address The address.
   * @param value The value.
   * @param obsoleteTag Obsolete transaction tag.
   * @param timestamp The timestamp.
   * @param currentIndex The current index.
   * @param lastIndex The last index.
   * @param bundle The bundle.
   * @param trunkTransaction The trunk transaction.
   * @param branchTransaction The branch transaction.
   * @param tag The tag.
   * @param attachmentTimestamp The attachment timestamp.
   * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
   * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
   * @param nonce The nonce.
   * @returns New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @returns The transaction as trytes.
     */
    value: function toTrytes() {
      if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
        throw new dataError_1.DataError("The signatureMessageFragment must be set to create transaction trytes", {
          signatureMessageFragment: this.signatureMessageFragment
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
        throw new dataError_1.DataError("The address must be set to create transaction trytes", {
          address: this.address
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
        throw new dataError_1.DataError("The obsoleteTag must be set to create transaction trytes", {
          obsoleteTag: this.obsoleteTag
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
        throw new dataError_1.DataError("The bundle must be set to create transaction trytes", {
          bundle: this.bundle
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The trunkTransaction must be set to create transaction trytes", {
          trunkTransaction: this.trunkTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
        throw new dataError_1.DataError("The branchTransaction must be set to create transaction trytes", {
          branchTransaction: this.branchTransaction
        });
      }

      if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
        throw new dataError_1.DataError("The nonce must be set to create transaction trytes", {
          nonce: this.nonce
        });
      }

      var trytes = this.signatureMessageFragment.toTrytes().toString() + this.address.toTrytes().toString() + (this.value || Transaction.EMPTY_11).toTrytes().toString() + Transaction.CHECK_VALUE + this.obsoleteTag.toTrytes().toString() + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.bundle.toTrytes().toString() + this.trunkTransaction.toTrytes().toString() + this.branchTransaction.toTrytes().toString() + (this.tag || this.obsoleteTag).toTrytes().toString() + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString() + this.nonce.toTrytes().toString();
      var length = trytes.length;

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length ").concat(length), {
          length: length
        });
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "{\n\tsignatureMessageFragment: \"".concat((this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString(), "\"\n\taddress: \"").concat((this.address || address_1.Address.EMPTY).toTrytes().toString(), "\"\n\tvalue: ").concat((this.value || Transaction.EMPTY_11).toNumber(), "\n\tobsoleteTag: \"").concat((this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\ttimestamp: ").concat((this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tcurrentIndex: ").concat((this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tlastIndex: ").concat((this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tbundle: \"").concat((this.bundle || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttrunkTransaction: \"").concat((this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\tbranchTransaction: \"").concat((this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString(), "\"\n\ttag: \"").concat((this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n\tattachmentTimestamp: ").concat((this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampLowerBound: ").concat((this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tattachmentTimestampUpperBound: ").concat((this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber(), "\n\tnonce: \"").concat((this.nonce || tag_1.Tag.EMPTY).toTrytes().toString(), "\"\n}");
    }
  }], [{
    key: "fromParams",
    value: function fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
      var tx = new Transaction();
      tx.signatureMessageFragment = signatureMessageFragment;
      tx.address = address;
      tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
      tx.obsoleteTag = obsoleteTag;
      tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
      tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
      tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
      tx.bundle = bundle;
      tx.trunkTransaction = trunkTransaction;
      tx.branchTransaction = branchTransaction;
      tx.tag = tag;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
      tx.nonce = nonce;
      return tx;
    }
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(trytes) {
      if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The trytes should be a valid Trytes object");
      }

      var length = trytes.length();

      if (length !== Transaction.LENGTH) {
        throw new dataError_1.DataError("The trytes must be ".concat(Transaction.LENGTH, " in length"), {
          length: length
        });
      }

      var checkIndexStart = 2279;
      var checkIndexLength = 16;
      var check = trytes.sub(checkIndexStart, checkIndexLength).toString();

      if (check !== Transaction.CHECK_VALUE) {
        throw new dataError_1.DataError("The trytes between ".concat(checkIndexStart, " and ").concat(checkIndexStart + checkIndexLength, " should be all 9s"), {
          check: check
        });
      }

      var tx = new Transaction();
      var startPos = 0;
      tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
      startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
      tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
      startPos += address_1.Address.LENGTH;
      tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
      startPos += 11;
      startPos += Transaction.CHECK_VALUE_LENGTH;
      tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
      startPos += hash_1.Hash.LENGTH;
      tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      startPos += tag_1.Tag.LENGTH;
      tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
      startPos += tryteNumber_1.TryteNumber.LENGTH_9;
      tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
      return tx;
    }
  }]);

  return Transaction;
}();
/**
 * The length of a valid transaction (2673).
 */


Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */

Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */

Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */

Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;

/***/ }),

/***/ "../data/dist/data/trits.js":
/*!**********************************!*\
  !*** ../data/dist/data/trits.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/arrayHelper */ "../core/dist/helpers/arrayHelper.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling trits.
 */


var Trits =
/*#__PURE__*/
function () {
  /* @internal */
  function Trits(trits) {
    _classCallCheck(this, Trits);

    this._trits = trits;
  }
  /**
   * Create instance of trits from Int8Array array.
   * @param value Trytes used to create trits.
   * @returns An instance of Trits.
   */


  _createClass(Trits, [{
    key: "toArray",

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    value: function toArray() {
      return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */

  }, {
    key: "toNumberArray",
    value: function toNumberArray() {
      return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */

  }, {
    key: "toTrytes",
    value: function toTrytes() {
      var trytes = "";

      for (var i = 0; i < this._trits.length; i += 3) {
        // Iterate over all possible tryte values to find correct trit representation
        for (var j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
          if (Trits.TRYTES_TRITS[j][0] === this._trits[i] && Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] && Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
            trytes += trytes_1.Trytes.ALPHABET.charAt(j);
            break;
          }
        }
      }

      return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      var returnValue = 0;

      for (var i = this._trits.length - 1; i >= 0; i--) {
        returnValue = returnValue * 3 + this._trits[i];
      }

      return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trits.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trits.length));
      }

      return Trits.fromArray(this._trits.slice(start, start + length));
    }
  }], [{
    key: "fromArray",
    value: function fromArray(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumberArray",
    value: function fromNumberArray(value) {
      if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
        throw new dataError_1.DataError("The value does not contain valid trits");
      }

      return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var trytesString = value.toString();
      var trits = new Int8Array(trytesString.length * 3);

      for (var i = 0; i < trytesString.length; i++) {
        var idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
        trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
        trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
        trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
      }

      return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      if (!numberHelper_1.NumberHelper.isInteger(value)) {
        throw new dataError_1.DataError("The value is not an integer");
      }

      var trits = [];
      var absoluteValue = value < 0 ? -value : value;

      while (absoluteValue > 0) {
        var remainder = absoluteValue % 3;
        absoluteValue = Math.floor(absoluteValue / 3);

        if (remainder > 1) {
          remainder = -1;
          absoluteValue++;
        }

        trits[trits.length] = remainder;
      }

      if (value < 0) {
        for (var i = 0; i < trits.length; i++) {
          trits[i] = -trits[i];
        }
      }

      return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */

  }, {
    key: "add",
    value: function add(first, second) {
      if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
        throw new dataError_1.DataError("The first should be a valid Trits object");
      }

      if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
        throw new dataError_1.DataError("The seconds should be a valid Trits object");
      }

      var out = new Int8Array(Math.max(first._trits.length, second._trits.length));
      var carry = 0;
      var iA;
      var iB;

      for (var i = 0; i < out.length; i++) {
        iA = i < first._trits.length ? first._trits[i] : 0;
        iB = i < second._trits.length ? second._trits[i] : 0;
        var fA = Trits.fullAdd(iA, iB, carry);
        out[i] = fA[0];
        carry = fA[1];
      }

      return Trits.fromArray(out);
    }
    /* @internal */

  }, {
    key: "fullAdd",
    value: function fullAdd(a, b, c) {
      var sA = Trits.sum(a, b);
      var cA = Trits.cons(a, b);
      var cB = Trits.cons(sA, c);
      var cOut = Trits.any(cA, cB);
      var sOUt = Trits.sum(sA, c);
      return new Int8Array([sOUt, cOut]);
    }
    /* @internal */

  }, {
    key: "sum",
    value: function sum(a, b) {
      var s = a + b;

      switch (s) {
        case 2:
          return -1;

        case -2:
          return 1;

        default:
          return s;
      }
    }
    /* @internal */

  }, {
    key: "cons",
    value: function cons(a, b) {
      if (a === b) {
        return a;
      }

      return 0;
    }
    /* @internal */

  }, {
    key: "any",
    value: function any(a, b) {
      var s = a + b;

      if (s > 0) {
        return 1;
      } else if (s < 0) {
        return -1;
      }

      return 0;
    }
  }]);

  return Trits;
}();
/* @internal */


Trits.TRYTES_TRITS = [new Int8Array([0, 0, 0]), new Int8Array([1, 0, 0]), new Int8Array([-1, 1, 0]), new Int8Array([0, 1, 0]), new Int8Array([1, 1, 0]), new Int8Array([-1, -1, 1]), new Int8Array([0, -1, 1]), new Int8Array([1, -1, 1]), new Int8Array([-1, 0, 1]), new Int8Array([0, 0, 1]), new Int8Array([1, 0, 1]), new Int8Array([-1, 1, 1]), new Int8Array([0, 1, 1]), new Int8Array([1, 1, 1]), new Int8Array([-1, -1, -1]), new Int8Array([0, -1, -1]), new Int8Array([1, -1, -1]), new Int8Array([-1, 0, -1]), new Int8Array([0, 0, -1]), new Int8Array([1, 0, -1]), new Int8Array([-1, 1, -1]), new Int8Array([0, 1, -1]), new Int8Array([1, 1, -1]), new Int8Array([-1, -1, 0]), new Int8Array([0, -1, 0]), new Int8Array([1, -1, 0]), new Int8Array([-1, 0, 0])];
exports.Trits = Trits;

/***/ }),

/***/ "../data/dist/data/tryteNumber.js":
/*!****************************************!*\
  !*** ../data/dist/data/tryteNumber.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");

var trits_1 = __webpack_require__(/*! ./trits */ "../data/dist/data/trits.js");

var trytes_1 = __webpack_require__(/*! ./trytes */ "../data/dist/data/trytes.js");
/**
 * A class for handling tryte number.
 */


var TryteNumber =
/*#__PURE__*/
function () {
  /* @internal */
  function TryteNumber(trytes) {
    _classCallCheck(this, TryteNumber);

    this._trytes = trytes;
  }
  /**
   * Create tryte number from number.
   * @param value The number value to create the object from.
   * @param length The tryte length to pad the number with.
   * @returns An instance of TryteNumber.
   */


  _createClass(TryteNumber, [{
    key: "toTrytes",

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    value: function toTrytes() {
      return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toNumber();
    }
  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;
      var trytes;

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (objectHelper_1.ObjectHelper.isEmpty(value)) {
        trytes = "9".repeat(length);
      } else {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
          throw new dataError_1.DataError("The value is not an integer", {
            value: value
          });
        }

        var trits = trits_1.Trits.fromNumber(value).toNumberArray();

        while (trits.length < length * 3) {
          trits.push(0);
        }

        trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
      }

      return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */

  }, {
    key: "fromTrytes",
    value: function fromTrytes(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TryteNumber.LENGTH_9;

      if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
        throw new dataError_1.DataError("The value should be a valid Trytes object");
      }

      var tryteString = value.toString();

      if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
        throw new dataError_1.DataError("The length should be a number > 0", {
          length: length
        });
      }

      if (tryteString.length > length) {
        throw new dataError_1.DataError("The value contains too many characters", {
          length: tryteString.length
        });
      }

      while (tryteString.length < length) {
        tryteString += "9";
      }

      return new TryteNumber(tryteString);
    }
  }]);

  return TryteNumber;
}();
/**
 * Length of a number that uses 9 trytes.
 */


TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */

TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;

/***/ }),

/***/ "../data/dist/data/trytes.js":
/*!***********************************!*\
  !*** ../data/dist/data/trytes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var dataError_1 = __webpack_require__(/*! ../error/dataError */ "../data/dist/error/dataError.js");
/**
 * A class for handling trytes.
 */


var Trytes =
/*#__PURE__*/
function () {
  /* @internal */
  function Trytes(trytes) {
    _classCallCheck(this, Trytes);

    this._trytes = trytes;
  }
  /**
   * Create trytes from a string.
   * @param value A string to create the trytes from.
   * @param length An optional validation length for the trytes, 0 means ignore length.
   * @returns An instance of Trytes.
   */


  _createClass(Trytes, [{
    key: "toString",

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    value: function toString() {
      return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */

  }, {
    key: "length",
    value: function length() {
      return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */

  }, {
    key: "sub",
    value: function sub(start, length) {
      if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
        throw new dataError_1.DataError("The start must be a number >= 0");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || start + length > this._trytes.length) {
        throw new dataError_1.DataError("The start + length must <= ".concat(this._trytes.length));
      }

      return Trytes.fromString(this._trytes.substr(start, length));
    }
  }], [{
    key: "fromString",
    value: function fromString(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        throw new dataError_1.DataError("The value must be a non empty string");
      }

      if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
        throw new dataError_1.DataError("The length must be >= 0");
      }

      if (!Trytes.isValid(value, length)) {
        throw new dataError_1.DataError("The value and length do not contain valid trytes", {
          value: value,
          length: length
        });
      }

      return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */

  }, {
    key: "isValid",
    value: function isValid(value) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!stringHelper_1.StringHelper.isString(value)) {
        return false;
      } else {
        return new RegExp("^[9A-Z]{".concat(length ? length : "0,", "}$")).test(value);
      }
    }
  }]);

  return Trytes;
}();
/**
 * All the characters that can be used in trytes.
 */


Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;

/***/ }),

/***/ "../data/dist/error/dataError.js":
/*!***************************************!*\
  !*** ../data/dist/error/dataError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/coreError */ "../core/dist/error/coreError.js");
/**
 * A data implementation of an error.
 */


var DataError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(DataError, _coreError_1$CoreErro);

  /**
   * Create an instance of DataError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function DataError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, DataError);

    _this = _possibleConstructorReturn(this, (DataError.__proto__ || Object.getPrototypeOf(DataError)).call(this, message, additional, innerError));
    _this.domain = "Data";
    return _this;
  }

  return DataError;
}(coreError_1.CoreError);

exports.DataError = DataError;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./proofOfWorkJs */ "./dist/proofOfWorkJs.js"));

/***/ }),

/***/ "./dist/pearlDiver/pearlDiver.js":
/*!***************************************!*\
  !*** ./dist/pearlDiver/pearlDiver.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var spongeFactory_1 = __webpack_require__(/*! @iota-pico/crypto/dist/factories/spongeFactory */ "../crypto/dist/factories/spongeFactory.js");

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js"); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(/*! big-integer */ "big-integer"));
/**
 * PearlDiver implementation in plain JavaScript.
 */


var PearlDiver =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of PearlDiver.
   */
  function PearlDiver() {
    _classCallCheck(this, PearlDiver);

    var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
    this._hashLength = curl.getConstant("HASH_LENGTH");
    this._stateLength = curl.getConstant("STATE_LENGTH");
    this._numberRounds = curl.getConstant("NUMBER_OF_ROUNDS");
    this._transactionLength = this._hashLength * 33;
    this._nonceLength = this._hashLength / 3;
    this._nonceStart = this._hashLength - this._nonceLength;
    var OFFSET_LENGTH = 4;
    this._nonceInitStart = this._nonceStart + OFFSET_LENGTH;
    var INT_LENGTH = this._nonceLength / 3;
    this._nonceIncrementStart = this._nonceInitStart + INT_LENGTH;
  }
  /**
   * Perform a proof of work on the data.
   * @param trytes The trytes to perform the pow on.
   * @param minWeightMagnitude The minimum weight magnitude.
   * @returns The trytes produced by the proof of work.
   */


  _createClass(PearlDiver, [{
    key: "searchWithTrytes",
    value: function searchWithTrytes(trytes, minWeightMagnitude) {
      var curlState = this.prepare(trytes);
      var searchStates = this.searchInit(curlState);
      return this.search(searchStates, minWeightMagnitude);
    }
  }, {
    key: "search",
    value: function search(searchStates, minWeightMagnitude) {
      var searching = true;
      var trits = new Int8Array(this._hashLength);
      var midStateCopy = {
        low: searchStates.low.slice(),
        high: searchStates.high.slice()
      };

      while (searching) {
        this.increment(midStateCopy, this._nonceIncrementStart, this._hashLength);
        var state = {
          low: midStateCopy.low.slice(),
          high: midStateCopy.high.slice()
        };
        this.transform(state);
        var nonceProbe = this.isFoundFast(state, minWeightMagnitude);

        if (nonceProbe.toJSNumber() === 0) {
          continue;
        }

        var nonceOutput = big_integer_1.default(1); // Bit scan forward

        while (nonceOutput.and(nonceProbe).toJSNumber() === 0) {
          nonceOutput = nonceOutput.shiftLeft(1);
        }

        searching = false;

        for (var i = 0; i < this._hashLength; i++) {
          trits[i] = midStateCopy.low[i].and(nonceOutput).toJSNumber() === 0 ? 1 : midStateCopy.high[i].and(nonceOutput).toJSNumber() === 0 ? -1 : 0;
        }
      }

      return trits_1.Trits.fromArray(trits).toTrytes();
    }
  }, {
    key: "transform",
    value: function transform(searchStates) {
      var curlScratchpadIndex = 0;

      for (var round = 0; round < this._numberRounds; round++) {
        var curlScratchpad = {
          low: searchStates.low.slice(),
          high: searchStates.high.slice()
        };

        for (var stateIndex = 0; stateIndex < this._stateLength; stateIndex++) {
          var alpha = curlScratchpad.low[curlScratchpadIndex];
          var beta = curlScratchpad.high[curlScratchpadIndex];

          if (curlScratchpadIndex < 365) {
            curlScratchpadIndex += 364;
          } else {
            curlScratchpadIndex += -365;
          }

          var gamma = curlScratchpad.high[curlScratchpadIndex];
          var lowXorBeta = curlScratchpad.low[curlScratchpadIndex].xor(beta);
          var notGamma = gamma.not();
          var alphaOrNotGamma = alpha.or(notGamma);
          var delta = alphaOrNotGamma.and(lowXorBeta);
          searchStates.low[stateIndex] = delta.not();
          var alphaXorGamma = alpha.xor(gamma);
          searchStates.high[stateIndex] = alphaXorGamma.or(delta);
        }
      }
    }
  }, {
    key: "increment",
    value: function increment(searchStates, fromIndex, toIndex) {
      for (var i = fromIndex; i < toIndex; i++) {
        if (searchStates.low[i].toJSNumber() === PearlDiver.LOW_BITS) {
          searchStates.low[i] = big_integer_1.default(PearlDiver.HIGH_BITS);
          searchStates.high[i] = big_integer_1.default(PearlDiver.LOW_BITS);
        } else {
          if (searchStates.high[i].toJSNumber() === PearlDiver.LOW_BITS) {
            searchStates.high[i] = big_integer_1.default(PearlDiver.HIGH_BITS);
          } else {
            searchStates.low[i] = big_integer_1.default(PearlDiver.LOW_BITS);
          }

          break;
        }
      }
    }
  }, {
    key: "prepare",
    value: function prepare(transactionTrytes) {
      var curl = spongeFactory_1.SpongeFactory.instance().create("curl");
      curl.initialize();
      var transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes).toArray();
      curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
      var curlState = curl.getState();
      transactionTrits.slice(this._transactionLength - this._hashLength, this._transactionLength).forEach(function (value, index) {
        curlState[index] = value;
      });
      return curlState;
    }
  }, {
    key: "searchInit",
    value: function searchInit(curlState) {
      var states = {
        low: [],
        high: []
      };
      curlState.forEach(function (trit, index) {
        switch (trit) {
          case 0:
            states.low[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
            states.high[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
            break;

          case 1:
            states.low[index] = big_integer_1.default(PearlDiver.LOW_BITS);
            states.high[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
            break;

          default:
            states.low[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
            states.high[index] = big_integer_1.default(PearlDiver.LOW_BITS);
        }
      });
      this.searchOffset(states, this._nonceStart);
      return states;
    }
  }, {
    key: "searchOffset",
    value: function searchOffset(states, offset) {
      states.low[offset + 0] = big_integer_1.default("-2635249153387078803", 10);
      states.high[offset + 0] = big_integer_1.default("-5270498306774157605", 10);
      states.low[offset + 1] = big_integer_1.default("-1010780497189564473", 10);
      states.high[offset + 1] = big_integer_1.default("-8086243977516515777", 10);
      states.low[offset + 2] = big_integer_1.default("9223336921201902079", 10);
      states.high[offset + 2] = big_integer_1.default("-17979214271348737", 10);
      states.low[offset + 3] = big_integer_1.default("-18014398375264257", 10);
      states.high[offset + 3] = big_integer_1.default("18014398509481983", 10);
    }
  }, {
    key: "isFoundFast",
    value: function isFoundFast(searchStates, minWeightMagnitude) {
      var lastMeasurement = big_integer_1.default(PearlDiver.HIGH_BITS);

      for (var i = minWeightMagnitude - 1; i >= 0; i--) {
        var low = searchStates.low[this._hashLength - 1 - i];
        var high = searchStates.high[this._hashLength - 1 - i];
        var lowXorHigh = low.xor(high);
        var notLowXorHigh = lowXorHigh.not();
        lastMeasurement = lastMeasurement.and(notLowXorHigh);

        if (lastMeasurement.toJSNumber() === 0) {
          break;
        }
      }

      return lastMeasurement;
    }
  }]);

  return PearlDiver;
}();
/* @internal */


PearlDiver.HIGH_BITS = -1;
/* @internal */

PearlDiver.LOW_BITS = 0;
exports.PearlDiver = PearlDiver;

/***/ }),

/***/ "./dist/proofOfWorkJs.js":
/*!*******************************!*\
  !*** ./dist/proofOfWorkJs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var cryptoError_1 = __webpack_require__(/*! @iota-pico/crypto/dist/error/cryptoError */ "../crypto/dist/error/cryptoError.js");

var proofOfWorkBase_1 = __webpack_require__(/*! @iota-pico/crypto/dist/proofOfWork/proofOfWorkBase */ "../crypto/dist/proofOfWork/proofOfWorkBase.js");

var trytes_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trytes */ "../data/dist/data/trytes.js");

var pearlDiver_1 = __webpack_require__(/*! ./pearlDiver/pearlDiver */ "./dist/pearlDiver/pearlDiver.js");
/**
 * ProofOfWork implementation using JavaScript.
 */


var ProofOfWorkJs =
/*#__PURE__*/
function (_proofOfWorkBase_1$Pr) {
  _inherits(ProofOfWorkJs, _proofOfWorkBase_1$Pr);

  /**
   * Create an instance of ProofOfWork.
   * @param timeService Service to get the time for attachments.
   */
  function ProofOfWorkJs(timeService) {
    _classCallCheck(this, ProofOfWorkJs);

    return _possibleConstructorReturn(this, (ProofOfWorkJs.__proto__ || Object.getPrototypeOf(ProofOfWorkJs)).call(this, timeService));
  }
  /**
   * Perform a proof of work on a single item.
   * @param trytes The trytes to perform the pow on.
   * @param minWeightMagnitude The minimum weight magnitude.
   * @returns The trytes produced by the proof of work.
   */


  _createClass(ProofOfWorkJs, [{
    key: "singlePow",
    value: function () {
      var _singlePow = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(trytes, minWeightMagnitude) {
        var nonce, nonceString, trytesString;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
                  _context.next = 2;
                  break;
                }

                throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");

              case 2:
                if (!(!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0)) {
                  _context.next = 4;
                  break;
                }

                throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");

              case 4:
                nonce = new pearlDiver_1.PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
                nonceString = nonce.toString();
                trytesString = trytes.toString();
                return _context.abrupt("return", trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length) + nonceString));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function singlePow(_x, _x2) {
        return _singlePow.apply(this, arguments);
      };
    }()
  }]);

  return ProofOfWorkJs;
}(proofOfWorkBase_1.ProofOfWorkBase);

exports.ProofOfWorkJs = ProofOfWorkJs;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "big-integer":
/*!*********************************************************************************************************!*\
  !*** external {"amd":"big-integer","commonjs":"big-integer","commonjs2":"big-integer","root":"bigInt"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_big_integer__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2Vycm9yL2NyeXB0b0Vycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uL2NyeXB0by9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS90YWcudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL3RyaXRzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZXJyb3IvZGF0YUVycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uL3NyYy9wcm9vZk9mV29ya0pzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvZXh0ZXJuYWwge1wiYW1kXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanNcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qczJcIjpcImJpZy1pbnRlZ2VyXCIsXCJyb290XCI6XCJiaWdJbnRcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtB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TUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxZQUFRLE1BQUksTUFBUyxDQUFaLEdBQWUsT0FBVTtBQUNsQyxVQUFHLE1BQU07QUFDVCxVQUFHLE1BQU07QUFDVCxVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFDVixVQUFJLE9BQU07QUFFVCxhQUFJLEVBQUk7QUFDUixhQUFJLEVBQUk7QUFDUCxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDbEMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2xDLGNBQUssRUFBRyxNQUFTLENBQWQsR0FBZ0IsRUFBRyxPQUFTO0FBQy9CLGNBQUssRUFBRyxNQUFTLENBQWQsR0FBZ0IsRUFBRyxPQUFTO0FBQ2hDLGFBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUztBQUNsQyxhQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDakMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2xDLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUztBQUNsQyxjQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDbEMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2xDLGNBQUssRUFBSSxPQUFTLENBQWYsR0FBaUIsRUFBSSxRQUFTO0FBQ2pDLGNBQUssRUFBSSxPQUFTLENBQWYsR0FBaUIsRUFBSSxRQUFTO0FBQ2pDLGNBQUssRUFBRyxNQUFVLEVBQWYsR0FBaUIsRUFBRyxPQUFRO0FBQy9CLGNBQUssRUFBRyxNQUFVLEVBQWYsR0FBaUIsRUFBRyxPQUFRO0FBQy9CLGNBQUssRUFBSSxPQUFTLENBQWYsR0FBaUIsRUFBSSxRQUFTO0FBQ2pDLGNBQUssRUFBSSxPQUFTLENBQWYsR0FBaUIsRUFBSSxRQUFTO0FBQ2xDLGFBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUztBQUNsQyxhQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDakMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2xDLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUztBQUNsQyxjQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVE7QUFDakMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFRO0FBQ2pDLGNBQUssRUFBRyxNQUFVLEVBQWYsR0FBaUIsRUFBRyxPQUFRO0FBQy9CLGNBQUssRUFBRyxNQUFVLEVBQWYsR0FBaUIsRUFBRyxPQUFRO0FBQy9CLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUTtBQUNqQyxjQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVE7QUFDakMsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFRO0FBQ2pDLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUTtBQUNsQyxhQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDbEMsYUFBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2pDLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUTtBQUNqQyxjQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVE7QUFDakMsY0FBSyxFQUFHLE1BQVUsRUFBZixHQUFpQixFQUFHLE9BQVE7QUFDL0IsY0FBSyxFQUFHLE1BQVUsRUFBZixHQUFpQixFQUFHLE9BQVE7QUFDL0IsY0FBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBQ2xDLGNBQUssRUFBSSxPQUFVLEVBQWhCLEdBQWtCLEVBQUksUUFBUztBQUNsQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNqQyxjQUFLLEVBQUksT0FBUyxDQUFmLEdBQWlCLEVBQUksUUFBUztBQUNsQyxhQUFLLEVBQUksT0FBVSxFQUFoQixHQUFrQixFQUFJLFFBQVM7QUFDbEMsYUFBSyxFQUFJLE9BQVUsRUFBaEIsR0FBa0IsRUFBSSxRQUFTO0FBRW5DLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUcsS0FBUSxLQUFDLENBQUcsS0FBTztBQUN0QixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIsVUFBSSxNQUFTLE1BQUMsQ0FBSSxNQUFRO0FBQzFCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFHLEtBQVEsS0FBQyxDQUFHLEtBQU87QUFDdEIsVUFBRyxLQUFRLEtBQUMsQ0FBRyxLQUFPO0FBQ3RCLFVBQUksTUFBUyxNQUFDLENBQUksTUFBUTtBQUMxQixVQUFJLE1BQVMsTUFBQyxDQUFJLE1BQVE7QUFDMUIs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REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUcsR0FBSyxLQUN6QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUssS0FDeEIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3hCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDMUIsSUFBYSxVQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3hCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBSyxLQUN4QixJQUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUcsR0FBSyxLQUN6QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUssS0FDeEIsSUFBYSxVQUFDLENBQUUsR0FBRyxHQUFLLEtBQ3hCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRSxDQUFFLEdBQUUsQ0FBSSxLQUMzQixJQUFhLFVBQUMsQ0FBRSxHQUFFLENBQUUsR0FBRSxDQUFJLEtBQzFCLElBQWEsVUFBQyxDQUFFLEdBQUUsQ0FBRSxHQUFFLENBQUksS0FDMUIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUMxQixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUN6QixJQUFhLFVBQUMsQ0FBRSxHQUFHLEdBQUUsQ0FBSSxLQUN6QixJQUFhLFVBQUMsQ0FBQyxDQUFFLEdBQUcsR0FBRSxDQUFJLEtBQzFCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBRSxDQUFJLEtBQ3pCLElBQWEsVUFBQyxDQUFFLEdBQUcsR0FBRSxDQUFJLEtBQ3pCLElBQWEsVUFBQyxDQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDMUIsSUFBYSxVQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUUsR0FBRSxDQUFFLEdBQUssS0FDekIsSUFBYSxVQUFDLENBQUMsQ0FBRSxHQUFHLEdB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S0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7Ozs7Ozs7Ozs7OztBQ3R0QkEseUQiLCJmaWxlIjoiaW90YS1waWNvLXBvdy1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9wb3ctanNcIiwgW1wiYmlnLWludGVnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9wb3ctanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29Qb3dKc1wiXSA9IGZhY3Rvcnkocm9vdFtcImJpZ0ludFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iaWdfaW50ZWdlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeFBRVUZQTEVkQlFVY3NTMEZCU3l4VFFVRlRMRWxCUVVrc1IwRkJSeXhMUVVGTExFbEJRVWtzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRWxCUVVrc1UwRkJVeXhKUVVGSkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVsQlFVa3NSMEZCUnl4RFFVRkRPMGxCUTI1SUxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTkpMRTFCUVUwN1VVRkRWQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGWWl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0JETEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF6dFRRVU0zUWp0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3V1VGRGNrTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlF6VkNPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRE1VTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5xUWl4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTm9RaXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETzJGQlEyWTdXVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzJkQ1FVTm1MRWRCUVVjc1NVRkJTU3hMUVVGTExFZEJRVWNzUzBGQlN5eDFRa0ZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOMlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTk9PMUZCUlVRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBOQlEwbzdRVUV2UkVRc09FSkJLMFJESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTNwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVZrc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEzQkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjJRaXhQUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU42UXp0aFFVRk5PMWxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03VTBGRGNFSTdTVUZEVEN4RFFVRkRPME5CU1VvN1FVRjRSRVFzYTBOQmQwUkRJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCIuL29iamVjdEhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEFycmF5IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGVtcHR5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBlbXB0eSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbm9uIGVtcHR5IGFycmF5IG9mIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG5vbiBlbXB0eSBhcnJheSBvZiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGVkKHZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuICFBcnJheUhlbHBlci5pc0VtcHR5KHZhbHVlKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXModW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICAgICAhdmFsdWUuaW5jbHVkZXMobnVsbCkgJiZcclxuICAgICAgICAgICAgdmFsdWUuZXZlcnkoKGEpID0+IG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYSwgdHlwZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQXJyYXlIZWxwZXIgPSBBcnJheUhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhKeVlYbElaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTloY25KaGVVaGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYVVSQlFUaERPMEZCUlRsRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemRFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZTeEZRVUZGTEVsQlFXTTdVVUZETlVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUXpsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRNVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVOeVFpeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVSQ3hEUVVGRE8wTkJSVW83UVVGcVEwUXNhME5CYVVOREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBKc29uIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgSnNvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIFN0cmluZ2lmeSBhbiBvYmplY3Qgd2l0aCByZWN1cnNpb24gYnJlYWtpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheSwgdG8gYmUgY29udmVydGVkLlxyXG4gICAgICogQHBhcmFtIHJlcGxhY2VyIEEgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSByZXN1bHRzLlxyXG4gICAgICogQHBhcmFtIHNwYWNlIEFkZHMgaW5kZW50YXRpb24sIHdoaXRlIHNwYWNlLCBhbmQgbGluZSBicmVhayBjaGFyYWN0ZXJzIHRvIHRoZSByZXR1cm4tdmFsdWUgSlNPTiB0ZXh0IHRvIG1ha2UgaXQgZWFzaWVyIHRvIHJlYWQuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgdmVyc2lvbiBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcclxuICAgICAgICAvLyBlbGltaW5hdGVzIGFueSByZWN1cnNpb24gaW4gdGhlIHN0cmluZ2lmeVxyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gW107XHJcbiAgICAgICAgY29uc3QgcmVjdXNpb25SZXBsYWNlciA9IChrZXksIHJlcGxhY2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiByZXBsYWNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlLmluZGV4T2YocmVwbGFjZVZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaXJjdWxhciByZWZlcmVuY2UgZm91bmQsIGRpc2NhcmQga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUucHVzaChyZXBsYWNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlciA/IHJlcGxhY2VyKGtleSwgcmVwbGFjZVZhbHVlKSA6IHJlcGxhY2VWYWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVjdXNpb25SZXBsYWNlciwgc3BhY2UpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSnNvbkhlbHBlciA9IEpzb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFuTnZia2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJwemIyNUlaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVFeVF5eEZRVUZGTEV0QlFYVkNPMUZCUTNCSExEUkRRVUUwUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlZTeEZRVUZGTEVOQlFVTTdVVUZGZUVJc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRWRCUVZjc1JVRkJSU3haUVVGcFFpeEZRVUZGTEVWQlFVVTdXVUZEZUVRc1NVRkJTU3hQUVVGUExGbEJRVmtzUzBGQlN5eFJRVUZSTEVsQlFVa3NTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3haUVVGWkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTnNSaXhKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEzQkRMSGREUVVGM1F6dHZRa0ZEZUVNc1QwRkJUenRwUWtGRFZqdHhRa0ZCVFR0dlFrRkRTQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMmxDUVVNMVFqdGhRVU5LTzFsQlJVUXNUMEZCVHl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU5xUlN4RFFVRkRMRU5CUVVNN1VVRkZSaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMR2RDUVVGblFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpGRUxFTkJRVU03UTBGRFNqdEJRVE5DUkN4blEwRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG51bWJlcnluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZmxvYXQgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VGbG9hdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNGbG9hdFN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKlxcLj9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGludGVnZXIgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VJbnQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlclN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAvXi0/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVtYmVySGVscGVyID0gTnVtYmVySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZ0WW1WeVNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZiblZ0WW1WeVNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJWVHRSUVVNNVFpeFBRVUZQTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRja1lzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVZVN1VVRkROMElzVDBGQlR5eExRVUZMTEV0QlFVc3NVMEZCVXl4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaEpMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZoTzFGQlEzSkRMRTlCUVU4c1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhQUVVGUExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dERRVU5LTzBGQmNFTkVMRzlEUVc5RFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRkRVVzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGVkxFVkJRVVVzWlVGQmVVSTdVVUZEZEVRc1RVRkJUU3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVONFJDeFBRVUZQTEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGVrTXNUMEZCVHl4VFFVRlRMRU5CUVVNN1UwRkRjRUk3WVVGQlRUdFpRVU5JTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1QwRkJUeXhEUVVGRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dFRRVU51UlR0SlFVTk1MRU5CUVVNN1EwRkRTanRCUVRkRFJDeHZRMEUyUTBNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBTdHJpbmcgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBzdHJpbmd5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZyB0aGF0IGlzIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbm8gZW1wdHluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gIVN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgc3RyaW5nIGFsbCBBU0NJSSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIHN0cmluZyB0byB0ZXN0IGlmIGlzIGlzIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGFsbCBBU0NJSS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzQXNjaWkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogL15bXFx4MDAtXFx4RkZdKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmNvZGUgbm9uIEFTQ0lJIGNoYXJhY3RlcnMgd2l0aCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB2YWx1ZSB0byBlc2NhcGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlbmNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvW1xcdTAwN0YtXFx1RkZGRl0vZywgKGNocikgPT4gYFxcXFx1JHsoYDAwMDAke2Noci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KX1gKS5zdWJzdHIoLTQpfWApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgY29udHJvbCBjaGFyYWN0ZXJzIHRvIEFTQ0lJLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBlbmNvZGVkIHN0cmluZyB0byBjb252ZXJ0IGJhY2sgdG8gQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVOb25BU0NJSSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpID8gdmFsdWUucmVwbGFjZSgvXFxcXHUoW1xcZFxcd117NH0pL2dpLCAobWF0Y2gsIGdycCkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChncnAsIDE2KSkpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3RyaW5nSGVscGVyID0gU3RyaW5nSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1J5YVc1blNHVnNjR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMmhsYkhCbGNuTXZjM1J5YVc1blNHVnNjR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTzBsQlEwazdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNM1FpeFBRVUZQTEV0QlFVc3NTMEZCU3l4SlFVRkpMRWxCUVVrc1MwRkJTeXhMUVVGTExGTkJRVk03V1VGRGVFTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEdsQ1FVRnBRaXhEUVVGRE8wbEJRemxGTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGVk8xRkJRelZDTEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJReTlFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGaE8xRkJReTlDTEU5QlFVOHNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRMMG9zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVdFN1VVRkRkRU1zVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMmhLTEVOQlFVTTdRMEZEU2p0QlFTOURSQ3h2UTBFclEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNsYXNzIHdoaWNoIGNhbiBwcm92aWRlIHRoZSB0aW1lLlxyXG4gKi9cclxuY2xhc3MgVGltZVNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAvMDEvMDEuXHJcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBtc1NpbmNlRXBvY2goKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UaW1lU2VydmljZSA9IFRpbWVTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2x0WlZObGNuWnBZMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjMlZ5ZG1salpYTXZkR2x0WlZObGNuWnBZMlV1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVVkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPMDlCUjBjN1NVRkRTU3haUVVGWk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRkRUlzUTBGQlF6dERRVU5LTzBGQlVrUXNhME5CVVVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogU2hhMyBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbmNsYXNzIFNoYTMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgU0hBMy5cclxuICAgICAqIEBwYXJhbSBiaXRzIFRoZSBudW1iZXIgb2YgaW5wdXQgYml0cy5cclxuICAgICAqIEBwYXJhbSBwYWRkaW5nIFRoZSBwYWRkaW5nIHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBvdXRwdXRCaXRzIFRoZSBudW1iZXIgb2Ygb3V0cHV0IGJpdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJpdHMsIHBhZGRpbmcsIG91dHB1dEJpdHMpIHtcclxuICAgICAgICB0aGlzLl9wYWRkaW5nID0gcGFkZGluZztcclxuICAgICAgICB0aGlzLl9vdXRwdXRCaXRzID0gb3V0cHV0Qml0cztcclxuICAgICAgICB0aGlzLl9ibG9ja0NvdW50ID0gKDE2MDAgLSAoYml0cyA8PCAxKSkgPj4gNTtcclxuICAgICAgICB0aGlzLl9ieXRlQ291bnQgPSB0aGlzLl9ibG9ja0NvdW50IDw8IDI7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0QmxvY2tzID0gb3V0cHV0Qml0cyA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2V4dHJhQnl0ZXMgPSAob3V0cHV0Qml0cyAmIDMxKSA+PiAzO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrID0gMDtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuX2Jsb2NrQ291bnQgKyAxKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBVaW50MzJBcnJheSg1MCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgZGlnZXN0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFycmF5IG9mIGRhdGEgdG8gdXNlIGluIHRoZSB1cGRhdGUuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShpbnB1dCwgQXJyYXlCdWZmZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiSW5wdXQgaXMgbm90IG9mIHR5cGUgQXJyYXlCdWZmZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgVWludDhBcnJheShpbnB1dCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbWVzc2FnZS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzWzBdID0gdGhpcy5fYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy5fYmxvY2tDb3VudCArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gdGhpcy5fc3RhcnQ7IGluZGV4IDwgbGVuZ3RoICYmIGkgPCB0aGlzLl9ieXRlQ291bnQ7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpID4+IDJdIHw9IG1lc3NhZ2VbaW5kZXhdIDw8IFNoYTMuU0hJRlRbaSsrICYgM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGFzdEJ5dGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuX2J5dGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpIC0gdGhpcy5fYnl0ZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2sgPSB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZWNjYWtQZXJtdXRhdGlvbih0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZpbmFsaXplIGFuZCByZXR1cm4gdGhlIGhhc2ggZm9yIHRoZSBkaWdlc3QsIHdpbGwgYWxzbyByZXNldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSBidWZmZXIgY29udGFpbmluZyB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICBkaWdlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgaiA9IDA7XHJcbiAgICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLl9vdXRwdXRCaXRzID4+IDM7XHJcbiAgICAgICAgbGV0IGJ1ZmZlcjtcclxuICAgICAgICBpZiAodGhpcy5fZXh0cmFCeXRlcykge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKHRoaXMuX291dHB1dEJsb2NrcyArIDEpIDw8IDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcclxuICAgICAgICB3aGlsZSAoaiA8IHRoaXMuX291dHB1dEJsb2Nrcykge1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fYmxvY2tDb3VudCAmJiBqIDwgdGhpcy5fb3V0cHV0QmxvY2tzOyArK2ksICsraikge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbal0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXh0cmFCeXRlcykge1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IHRoaXMuX3N0YXRlW2ldO1xyXG4gICAgICAgICAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoMCwgYnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZmluYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9sYXN0Qnl0ZUluZGV4O1xyXG4gICAgICAgIHRoaXMuX2Jsb2Nrc1tpID4+IDJdIHw9IHRoaXMuX3BhZGRpbmdbaSAmIDNdO1xyXG4gICAgICAgIGlmICh0aGlzLl9sYXN0Qnl0ZUluZGV4ID09PSB0aGlzLl9ieXRlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmxvY2tzWzBdID0gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnRdO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgdGhpcy5fYmxvY2tDb3VudCArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9ibG9ja3NbdGhpcy5fYmxvY2tDb3VudCAtIDFdIHw9IDB4ODAwMDAwMDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2VjY2FrUGVybXV0YXRpb24odGhpcy5fc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBrZWNjYWtQZXJtdXRhdGlvbihzKSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb25cclxuICAgICAgICBsZXQgaCwgbCwgbiwgYzAsIGMxLCBjMiwgYzMsIGM0LCBjNSwgYzYsIGM3LCBjOCwgYzksIGIwLCBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIGI5LCBiMTAsIGIxMSwgYjEyLCBiMTMsIGIxNCwgYjE1LCBiMTYsIGIxNywgYjE4LCBiMTksIGIyMCwgYjIxLCBiMjIsIGIyMywgYjI0LCBiMjUsIGIyNiwgYjI3LCBiMjgsIGIyOSwgYjMwLCBiMzEsIGIzMiwgYjMzLCBiMzQsIGIzNSwgYjM2LCBiMzcsIGIzOCwgYjM5LCBiNDAsIGI0MSwgYjQyLCBiNDMsIGI0NCwgYjQ1LCBiNDYsIGI0NywgYjQ4LCBiNDk7XHJcbiAgICAgICAgZm9yIChuID0gMDsgbiA8IDQ4OyBuICs9IDIpIHtcclxuICAgICAgICAgICAgYzAgPSBzWzBdIF4gc1sxMF0gXiBzWzIwXSBeIHNbMzBdIF4gc1s0MF07XHJcbiAgICAgICAgICAgIGMxID0gc1sxXSBeIHNbMTFdIF4gc1syMV0gXiBzWzMxXSBeIHNbNDFdO1xyXG4gICAgICAgICAgICBjMiA9IHNbMl0gXiBzWzEyXSBeIHNbMjJdIF4gc1szMl0gXiBzWzQyXTtcclxuICAgICAgICAgICAgYzMgPSBzWzNdIF4gc1sxM10gXiBzWzIzXSBeIHNbMzNdIF4gc1s0M107XHJcbiAgICAgICAgICAgIGM0ID0gc1s0XSBeIHNbMTRdIF4gc1syNF0gXiBzWzM0XSBeIHNbNDRdO1xyXG4gICAgICAgICAgICBjNSA9IHNbNV0gXiBzWzE1XSBeIHNbMjVdIF4gc1szNV0gXiBzWzQ1XTtcclxuICAgICAgICAgICAgYzYgPSBzWzZdIF4gc1sxNl0gXiBzWzI2XSBeIHNbMzZdIF4gc1s0Nl07XHJcbiAgICAgICAgICAgIGM3ID0gc1s3XSBeIHNbMTddIF4gc1syN10gXiBzWzM3XSBeIHNbNDddO1xyXG4gICAgICAgICAgICBjOCA9IHNbOF0gXiBzWzE4XSBeIHNbMjhdIF4gc1szOF0gXiBzWzQ4XTtcclxuICAgICAgICAgICAgYzkgPSBzWzldIF4gc1sxOV0gXiBzWzI5XSBeIHNbMzldIF4gc1s0OV07XHJcbiAgICAgICAgICAgIGggPSBjOCBeICgoYzIgPDwgMSkgfCAoYzMgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjOSBeICgoYzMgPDwgMSkgfCAoYzIgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzEwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzExXSBePSBsO1xyXG4gICAgICAgICAgICBzWzIwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzIxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzMwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzMxXSBePSBsO1xyXG4gICAgICAgICAgICBzWzQwXSBePSBoO1xyXG4gICAgICAgICAgICBzWzQxXSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzAgXiAoKGM0IDw8IDEpIHwgKGM1ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzEgXiAoKGM1IDw8IDEpIHwgKGM0ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbM10gXj0gbDtcclxuICAgICAgICAgICAgc1sxMl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxM10gXj0gbDtcclxuICAgICAgICAgICAgc1syMl0gXj0gaDtcclxuICAgICAgICAgICAgc1syM10gXj0gbDtcclxuICAgICAgICAgICAgc1szMl0gXj0gaDtcclxuICAgICAgICAgICAgc1szM10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Ml0gXj0gaDtcclxuICAgICAgICAgICAgc1s0M10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMyIF4gKChjNiA8PCAxKSB8IChjNyA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMzIF4gKChjNyA8PCAxKSB8IChjNiA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzVdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDRdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDVdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjNCBeICgoYzggPDwgMSkgfCAoYzkgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjNSBeICgoYzkgPDwgMSkgfCAoYzggPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNl0gXj0gaDtcclxuICAgICAgICAgICAgc1s3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM3XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ2XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ3XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzYgXiAoKGMwIDw8IDEpIHwgKGMxID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzcgXiAoKGMxIDw8IDEpIHwgKGMwID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbOV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxOF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxOV0gXj0gbDtcclxuICAgICAgICAgICAgc1syOF0gXj0gaDtcclxuICAgICAgICAgICAgc1syOV0gXj0gbDtcclxuICAgICAgICAgICAgc1szOF0gXj0gaDtcclxuICAgICAgICAgICAgc1szOV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0OF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0OV0gXj0gbDtcclxuICAgICAgICAgICAgYjAgPSBzWzBdO1xyXG4gICAgICAgICAgICBiMSA9IHNbMV07XHJcbiAgICAgICAgICAgIGIzMiA9IChzWzExXSA8PCA0KSB8IChzWzEwXSA+Pj4gMjgpO1xyXG4gICAgICAgICAgICBiMzMgPSAoc1sxMF0gPDwgNCkgfCAoc1sxMV0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjE0ID0gKHNbMjBdIDw8IDMpIHwgKHNbMjFdID4+PiAyOSk7XHJcbiAgICAgICAgICAgIGIxNSA9IChzWzIxXSA8PCAzKSB8IChzWzIwXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiNDYgPSAoc1szMV0gPDwgOSkgfCAoc1szMF0gPj4+IDIzKTtcclxuICAgICAgICAgICAgYjQ3ID0gKHNbMzBdIDw8IDkpIHwgKHNbMzFdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGIyOCA9IChzWzQwXSA8PCAxOCkgfCAoc1s0MV0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjI5ID0gKHNbNDFdIDw8IDE4KSB8IChzWzQwXSA+Pj4gMTQpO1xyXG4gICAgICAgICAgICBiMjAgPSAoc1syXSA8PCAxKSB8IChzWzNdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyMSA9IChzWzNdIDw8IDEpIHwgKHNbMl0gPj4+IDMxKTtcclxuICAgICAgICAgICAgYjIgPSAoc1sxM10gPDwgMTIpIHwgKHNbMTJdID4+PiAyMCk7XHJcbiAgICAgICAgICAgIGIzID0gKHNbMTJdIDw8IDEyKSB8IChzWzEzXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMzQgPSAoc1syMl0gPDwgMTApIHwgKHNbMjNdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIzNSA9IChzWzIzXSA8PCAxMCkgfCAoc1syMl0gPj4+IDIyKTtcclxuICAgICAgICAgICAgYjE2ID0gKHNbMzNdIDw8IDEzKSB8IChzWzMyXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiMTcgPSAoc1szMl0gPDwgMTMpIHwgKHNbMzNdID4+PiAxOSk7XHJcbiAgICAgICAgICAgIGI0OCA9IChzWzQyXSA8PCAyKSB8IChzWzQzXSA+Pj4gMzApO1xyXG4gICAgICAgICAgICBiNDkgPSAoc1s0M10gPDwgMikgfCAoc1s0Ml0gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQwID0gKHNbNV0gPDwgMzApIHwgKHNbNF0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiNDEgPSAoc1s0XSA8PCAzMCkgfCAoc1s1XSA+Pj4gMik7XHJcbiAgICAgICAgICAgIGIyMiA9IChzWzE0XSA8PCA2KSB8IChzWzE1XSA+Pj4gMjYpO1xyXG4gICAgICAgICAgICBiMjMgPSAoc1sxNV0gPDwgNikgfCAoc1sxNF0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjQgPSAoc1syNV0gPDwgMTEpIHwgKHNbMjRdID4+PiAyMSk7XHJcbiAgICAgICAgICAgIGI1ID0gKHNbMjRdIDw8IDExKSB8IChzWzI1XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiMzYgPSAoc1szNF0gPDwgMTUpIHwgKHNbMzVdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIzNyA9IChzWzM1XSA8PCAxNSkgfCAoc1szNF0gPj4+IDE3KTtcclxuICAgICAgICAgICAgYjE4ID0gKHNbNDVdIDw8IDI5KSB8IChzWzQ0XSA+Pj4gMyk7XHJcbiAgICAgICAgICAgIGIxOSA9IChzWzQ0XSA8PCAyOSkgfCAoc1s0NV0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTAgPSAoc1s2XSA8PCAyOCkgfCAoc1s3XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGIxMSA9IChzWzddIDw8IDI4KSB8IChzWzZdID4+PiA0KTtcclxuICAgICAgICAgICAgYjQyID0gKHNbMTddIDw8IDIzKSB8IChzWzE2XSA+Pj4gOSk7XHJcbiAgICAgICAgICAgIGI0MyA9IChzWzE2XSA8PCAyMykgfCAoc1sxN10gPj4+IDkpO1xyXG4gICAgICAgICAgICBiMjQgPSAoc1syNl0gPDwgMjUpIHwgKHNbMjddID4+PiA3KTtcclxuICAgICAgICAgICAgYjI1ID0gKHNbMjddIDw8IDI1KSB8IChzWzI2XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGI2ID0gKHNbMzZdIDw8IDIxKSB8IChzWzM3XSA+Pj4gMTEpO1xyXG4gICAgICAgICAgICBiNyA9IChzWzM3XSA8PCAyMSkgfCAoc1szNl0gPj4+IDExKTtcclxuICAgICAgICAgICAgYjM4ID0gKHNbNDddIDw8IDI0KSB8IChzWzQ2XSA+Pj4gOCk7XHJcbiAgICAgICAgICAgIGIzOSA9IChzWzQ2XSA8PCAyNCkgfCAoc1s0N10gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzAgPSAoc1s4XSA8PCAyNykgfCAoc1s5XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIzMSA9IChzWzldIDw8IDI3KSB8IChzWzhdID4+PiA1KTtcclxuICAgICAgICAgICAgYjEyID0gKHNbMThdIDw8IDIwKSB8IChzWzE5XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiMTMgPSAoc1sxOV0gPDwgMjApIHwgKHNbMThdID4+PiAxMik7XHJcbiAgICAgICAgICAgIGI0NCA9IChzWzI5XSA8PCA3KSB8IChzWzI4XSA+Pj4gMjUpO1xyXG4gICAgICAgICAgICBiNDUgPSAoc1syOF0gPDwgNykgfCAoc1syOV0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjI2ID0gKHNbMzhdIDw8IDgpIHwgKHNbMzldID4+PiAyNCk7XHJcbiAgICAgICAgICAgIGIyNyA9IChzWzM5XSA8PCA4KSB8IChzWzM4XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiOCA9IChzWzQ4XSA8PCAxNCkgfCAoc1s0OV0gPj4+IDE4KTtcclxuICAgICAgICAgICAgYjkgPSAoc1s0OV0gPDwgMTQpIHwgKHNbNDhdID4+PiAxOCk7XHJcbiAgICAgICAgICAgIHNbMF0gPSBiMCBeICh+YjIgJiBiNCk7XHJcbiAgICAgICAgICAgIHNbMV0gPSBiMSBeICh+YjMgJiBiNSk7XHJcbiAgICAgICAgICAgIHNbMTBdID0gYjEwIF4gKH5iMTIgJiBiMTQpO1xyXG4gICAgICAgICAgICBzWzExXSA9IGIxMSBeICh+YjEzICYgYjE1KTtcclxuICAgICAgICAgICAgc1syMF0gPSBiMjAgXiAofmIyMiAmIGIyNCk7XHJcbiAgICAgICAgICAgIHNbMjFdID0gYjIxIF4gKH5iMjMgJiBiMjUpO1xyXG4gICAgICAgICAgICBzWzMwXSA9IGIzMCBeICh+YjMyICYgYjM0KTtcclxuICAgICAgICAgICAgc1szMV0gPSBiMzEgXiAofmIzMyAmIGIzNSk7XHJcbiAgICAgICAgICAgIHNbNDBdID0gYjQwIF4gKH5iNDIgJiBiNDQpO1xyXG4gICAgICAgICAgICBzWzQxXSA9IGI0MSBeICh+YjQzICYgYjQ1KTtcclxuICAgICAgICAgICAgc1syXSA9IGIyIF4gKH5iNCAmIGI2KTtcclxuICAgICAgICAgICAgc1szXSA9IGIzIF4gKH5iNSAmIGI3KTtcclxuICAgICAgICAgICAgc1sxMl0gPSBiMTIgXiAofmIxNCAmIGIxNik7XHJcbiAgICAgICAgICAgIHNbMTNdID0gYjEzIF4gKH5iMTUgJiBiMTcpO1xyXG4gICAgICAgICAgICBzWzIyXSA9IGIyMiBeICh+YjI0ICYgYjI2KTtcclxuICAgICAgICAgICAgc1syM10gPSBiMjMgXiAofmIyNSAmIGIyNyk7XHJcbiAgICAgICAgICAgIHNbMzJdID0gYjMyIF4gKH5iMzQgJiBiMzYpO1xyXG4gICAgICAgICAgICBzWzMzXSA9IGIzMyBeICh+YjM1ICYgYjM3KTtcclxuICAgICAgICAgICAgc1s0Ml0gPSBiNDIgXiAofmI0NCAmIGI0Nik7XHJcbiAgICAgICAgICAgIHNbNDNdID0gYjQzIF4gKH5iNDUgJiBiNDcpO1xyXG4gICAgICAgICAgICBzWzRdID0gYjQgXiAofmI2ICYgYjgpO1xyXG4gICAgICAgICAgICBzWzVdID0gYjUgXiAofmI3ICYgYjkpO1xyXG4gICAgICAgICAgICBzWzE0XSA9IGIxNCBeICh+YjE2ICYgYjE4KTtcclxuICAgICAgICAgICAgc1sxNV0gPSBiMTUgXiAofmIxNyAmIGIxOSk7XHJcbiAgICAgICAgICAgIHNbMjRdID0gYjI0IF4gKH5iMjYgJiBiMjgpO1xyXG4gICAgICAgICAgICBzWzI1XSA9IGIyNSBeICh+YjI3ICYgYjI5KTtcclxuICAgICAgICAgICAgc1szNF0gPSBiMzQgXiAofmIzNiAmIGIzOCk7XHJcbiAgICAgICAgICAgIHNbMzVdID0gYjM1IF4gKH5iMzcgJiBiMzkpO1xyXG4gICAgICAgICAgICBzWzQ0XSA9IGI0NCBeICh+YjQ2ICYgYjQ4KTtcclxuICAgICAgICAgICAgc1s0NV0gPSBiNDUgXiAofmI0NyAmIGI0OSk7XHJcbiAgICAgICAgICAgIHNbNl0gPSBiNiBeICh+YjggJiBiMCk7XHJcbiAgICAgICAgICAgIHNbN10gPSBiNyBeICh+YjkgJiBiMSk7XHJcbiAgICAgICAgICAgIHNbMTZdID0gYjE2IF4gKH5iMTggJiBiMTApO1xyXG4gICAgICAgICAgICBzWzE3XSA9IGIxNyBeICh+YjE5ICYgYjExKTtcclxuICAgICAgICAgICAgc1syNl0gPSBiMjYgXiAofmIyOCAmIGIyMCk7XHJcbiAgICAgICAgICAgIHNbMjddID0gYjI3IF4gKH5iMjkgJiBiMjEpO1xyXG4gICAgICAgICAgICBzWzM2XSA9IGIzNiBeICh+YjM4ICYgYjMwKTtcclxuICAgICAgICAgICAgc1szN10gPSBiMzcgXiAofmIzOSAmIGIzMSk7XHJcbiAgICAgICAgICAgIHNbNDZdID0gYjQ2IF4gKH5iNDggJiBiNDApO1xyXG4gICAgICAgICAgICBzWzQ3XSA9IGI0NyBeICh+YjQ5ICYgYjQxKTtcclxuICAgICAgICAgICAgc1s4XSA9IGI4IF4gKH5iMCAmIGIyKTtcclxuICAgICAgICAgICAgc1s5XSA9IGI5IF4gKH5iMSAmIGIzKTtcclxuICAgICAgICAgICAgc1sxOF0gPSBiMTggXiAofmIxMCAmIGIxMik7XHJcbiAgICAgICAgICAgIHNbMTldID0gYjE5IF4gKH5iMTEgJiBiMTMpO1xyXG4gICAgICAgICAgICBzWzI4XSA9IGIyOCBeICh+YjIwICYgYjIyKTtcclxuICAgICAgICAgICAgc1syOV0gPSBiMjkgXiAofmIyMSAmIGIyMyk7XHJcbiAgICAgICAgICAgIHNbMzhdID0gYjM4IF4gKH5iMzAgJiBiMzIpO1xyXG4gICAgICAgICAgICBzWzM5XSA9IGIzOSBeICh+YjMxICYgYjMzKTtcclxuICAgICAgICAgICAgc1s0OF0gPSBiNDggXiAofmI0MCAmIGI0Mik7XHJcbiAgICAgICAgICAgIHNbNDldID0gYjQ5IF4gKH5iNDEgJiBiNDMpO1xyXG4gICAgICAgICAgICBzWzBdIF49IFNoYTMuUk9VTkRfQ09OU1RBTlRTW25dO1xyXG4gICAgICAgICAgICBzWzFdIF49IFNoYTMuUk9VTkRfQ09OU1RBTlRTW24gKyAxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyogUGFkZGluZyB0byB1c2UgZm9yIEtlY2NhayAqL1xyXG5TaGEzLktFQ0NBS19QQURESU5HID0gbmV3IFVpbnQzMkFycmF5KFsxLCAyNTYsIDY1NTM2LCAxNjc3NzIxNl0pO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuU2hhMy5TSElGVCA9IG5ldyBVaW50OEFycmF5KFswLCA4LCAxNiwgMjRdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuUk9VTkRfQ09OU1RBTlRTID0gbmV3IFVpbnQzMkFycmF5KFsxLCAwLCAzMjg5OCwgMCwgMzI5MDYsIDIxNDc0ODM2NDgsIDIxNDc1MTY0MTYsIDIxNDc0ODM2NDgsIDMyOTA3LCAwLCAyMTQ3NDgzNjQ5LFxyXG4gICAgMCwgMjE0NzUxNjU0NSwgMjE0NzQ4MzY0OCwgMzI3NzcsIDIxNDc0ODM2NDgsIDEzOCwgMCwgMTM2LCAwLCAyMTQ3NTE2NDI1LCAwLFxyXG4gICAgMjE0NzQ4MzY1OCwgMCwgMjE0NzUxNjU1NSwgMCwgMTM5LCAyMTQ3NDgzNjQ4LCAzMjkwNSwgMjE0NzQ4MzY0OCwgMzI3NzEsXHJcbiAgICAyMTQ3NDgzNjQ4LCAzMjc3MCwgMjE0NzQ4MzY0OCwgMTI4LCAyMTQ3NDgzNjQ4LCAzMjc3OCwgMCwgMjE0NzQ4MzY1OCwgMjE0NzQ4MzY0OCxcclxuICAgIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyODk2LCAyMTQ3NDgzNjQ4LCAyMTQ3NDgzNjQ5LCAwLCAyMTQ3NTE2NDI0LCAyMTQ3NDgzNjQ4XSk7XHJcbmV4cG9ydHMuU2hhMyA9IFNoYTM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMyaGhNeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV2RsYzNSekwzTm9ZVE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4elJFRkJiVVE3UVVGRmJrUTdPMGRCUlVjN1FVRkRTRHRKUVhGRFNUczdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NTVUZCV1N4RlFVRkZMRTlCUVc5Q0xFVkJRVVVzVlVGQmEwSTdVVUZET1VRc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVVUZEZUVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1ZVRkJWU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU55UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVVeFF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1MwRkJTenRSUVVOU0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCYTBJN1VVRkROVUlzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFhRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTXhReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUTBRc1RVRkJUU3hQUVVGUExFZEJRV1VzU1VGQlNTeFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRiRVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNNVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVZPTEU5QlFVOHNTMEZCU3l4SFFVRkhMRTFCUVUwc1JVRkJSVHRaUVVOdVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMklzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1owSkJRM0JDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRPVUlzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHR2UWtGRGRrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdhVUpCUTNaQ08yRkJRMG83V1VGRFJDeExRVUZMTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVTdaMEpCUTJ4RkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJwRk8xbEJRMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRlRUlzU1VGQlNTeERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXp0blFrRkRiRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkROME1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMjlDUVVOdVF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRM0pETzJkQ1FVTkVMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03WjBKQlEzQkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzJGQlEzUkNPMmxDUVVGTk8yZENRVU5JTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRMjVDTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFR0UlFVTlVMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVZvUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRFZpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1F5eEpRVUZKTEUxQlFVMHNRMEZCUXp0UlFVTllMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU5zUWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFOQlF6TkVPMkZCUVUwN1dVRkRTQ3hOUVVGTkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRia003VVVGRFJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU4wUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFsQlF6TkNMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdG5Ra0ZEYkVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE4wSTdVMEZEU2p0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU5zUWl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFFpeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYmtNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdVVUZGWWl4UFFVRlBMRTFCUVUwc1EwRkJRenRKUVVOc1FpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRkZCUVZFN1VVRkRXaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRemRETEVsQlFVa3NTVUZCU1N4RFFVRkRMR05CUVdNc1MwRkJTeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFsQlEzcERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYWtRc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0blFrRkRka01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRGRrSTdVMEZEU2p0UlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU03VVVGRGFrUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOeVF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4cFFrRkJhVUlzUTBGQlF5eERRVUZqTzFGQlEzQkRMSGRFUVVGM1JEdFJRVU40UkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZETDBNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUXpsRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZET1VVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETzFGQlEyNUdMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGVFSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZGTVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5XTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGV0N4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExWXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5XTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMnhETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnNReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRja01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUlhCRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRk0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNaRE8wbEJRMHdzUTBGQlF6czdRVUZvVmtRc0swSkJRU3RDTzBGQlExSXNiVUpCUVdNc1IwRkJaMElzU1VGQlNTeFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJoSExHVkJRV1U3UVVGRFV5eFZRVUZMTEVkQlFXVXNTVUZCU1N4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRek5GTEdWQlFXVTdRVUZEVXl4dlFrRkJaU3hIUVVGblFpeEpRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hWUVVGVk8wbEJRMjVLTEVOQlFVTXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRPMGxCUXpORkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTenRKUVVOMlJTeFZRVUZWTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hIUVVGSExFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRGFFWXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZXTTBZc2IwSkJhMVpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29yZUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjcnlwdG8gaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDcnlwdG9FcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDcnlwdG9FcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDcnlwdG9cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNyeXB0b0Vycm9yID0gQ3J5cHRvRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSjVjSFJ2UlhKeWIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpYSnliM0l2WTNKNWNIUnZSWEp5YjNJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEc5RlFVRnBSVHRCUVVWcVJUczdSMEZGUnp0QlFVTklMR2xDUVVGNVFpeFRRVUZSTEhGQ1FVRlRPMGxCUTNSRE96czdPenRQUVV0SE8wbEJRMGdzV1VGQldTeFBRVUZsTEVWQlFVVXNWVUZCYTBNc1JVRkJSU3hWUVVGclFqdFJRVU12UlN4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTXpRaXhEUVVGRE8wTkJRMG83UVVGWVJDeHJRMEZYUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbmNvbnN0IGN1cmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2N1cmxcIik7XHJcbmNvbnN0IGtlcmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2tlcmxcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHNwb25nZXMuXHJcbiAqL1xyXG5jbGFzcyBTcG9uZ2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBTcG9uZ2VGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybFwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKC4uLmFyZ3MpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsODFcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCg4MSkpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmwyN1wiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKDI3KSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwia2VybFwiLCAoLi4uYXJncykgPT4gbmV3IGtlcmxfMS5LZXJsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TcG9uZ2VGYWN0b3J5ID0gU3BvbmdlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNCdmJtZGxSbUZqZEc5eWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5bVlXTjBiM0pwWlhNdmMzQnZibWRsUm1GamRHOXllUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJSWHBGTERCRFFVRjFRenRCUVVOMlF5d3dRMEZCZFVNN1FVRkZka003TzBkQlJVYzdRVUZEU0N4dFFrRkJNa0lzVTBGQlVTeDVRa0ZCYjBJN1NVRkpia1E3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTXhRaXhoUVVGaExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkRPVU1zWVVGQllTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1YwRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkZPMUZCUTBRc1QwRkJUeXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETzBsQlEyNURMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMR0ZCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU53UXl4RFFVRkRPME5CUTBvN1FVRXZRa1FzYzBOQkswSkRJbjA9IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTppbXBvcnQtbmFtZVxyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgdG8gY29udmVydCBiZXR3ZWVuIEJpZ0ludGVnZXIgYW5kIG90aGVyIHR5cGVzLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEJpZ0ludGVnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyaXRzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RhcnQuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHRyaXRzIGFycmF5IHRvIGNvbnZlcnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB0cml0c1RvQmlnSW50ZWdlcih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tdWx0aXBseShCaWdJbnRlZ2VySGVscGVyLlJBRElYKS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0KHRyaXRzW29mZnNldCArIGldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBiaWdJbnRlZ2VyIHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBiaWdJbnRlZ2VyIHRvIGNvbnZlcnQgdG8gdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIGFycmF5IHRvIHJlY2VpdmUgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHRvIHBsYWNlIHRoZSB0cml0cyBpbiB0aGUgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvVHJpdHModmFsdWUsIHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJpdHMgbXVzdCBiZSBhbiBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2Zmc2V0ICsgbGVuZ3RoID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhYnNvbHV0ZVZhbHVlID0gdmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDAgPyB2YWx1ZS5uZWdhdGUoKSA6IHZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGl2UmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZS5kaXZtb2QoQmlnSW50ZWdlckhlbHBlci5SQURJWCk7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBkaXZSZW1haW5kZXIucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIGxldCByZW1haW5kZXIgPSBkaXZSZW1haW5kZXIucmVtYWluZGVyO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyID4gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBhYnNvbHV0ZVZhbHVlLmFkZChiaWdfaW50ZWdlcl8xLmRlZmF1bHRbXCIxXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHJlbWFpbmRlci50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5jb21wYXJlVG8oYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm8pIDwgMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBuZWdhdGl2ZSB6ZXJvXHJcbiAgICAgICAgICAgICAgICB0cml0c1tvZmZzZXQgKyBpXSA9IHRyaXRzW29mZnNldCArIGldID09PSAwID8gMCA6IC10cml0c1tvZmZzZXQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYmlnSW50ZWdlciBpbnRvIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxyXG4gICAgICogQHBhcmFtIGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBhcnJheSB0byBzdG9yZSB0aGUgYnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaWdJbnRlZ2VyVG9CeXRlcyh2YWx1ZSwgZGVzdGluYXRpb24sIG9mZnNldCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgYmlnX2ludGVnZXJfMS5kZWZhdWx0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgYmlnSW50ZWdlciB0eXBlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZGVzdGluYXRpb24sIEFycmF5QnVmZmVyKSB8fCBkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGRlc3RpbmF0aW9uIG11c3QgYmUgYW4gYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYERlc3RpbmF0aW9uIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbWVtYmVyIGlmIGl0IGlzIG5lZ2F0aXZlIGZvciBsYXRlclxyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gdmFsdWUuaXNOZWdhdGl2ZSgpID8gLTEgOiAwO1xyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBCdXQgcmVtb3ZlIGl0IGZvciBub3dcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gaGV4U3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBOb3cgbWFrZSBzdXJlIHRoZSBoZXggc3RyaW5nIGlzIGFuIGV2ZW4gbGVuZ3RoIHNvIHRoZSByZWdleCB3b3Jrc1xyXG4gICAgICAgIGlmIChoZXhTdHJpbmcubGVuZ3RoICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgPSBgMCR7aGV4U3RyaW5nfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBoZXhTdHJpbmcubWF0Y2goL1swLTlhLWZdezJ9L2cpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGhleCB0byBudW1iZXJzXHJcbiAgICAgICAgY29uc3Qgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KG1hdGNoZXNcclxuICAgICAgICAgICAgLm1hcChoZXggPT4gcGFyc2VJbnQoYDB4JHtoZXh9YCwgMTYpKSk7XHJcbiAgICAgICAgaWYgKGlzTmVnID09PSAtMSkge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoZGVzdGluYXRpb24pO1xyXG4gICAgICAgIC8vIFBhZCB0aGUgc3RhcnQgb2YgdGhlIGJ1ZmZlciB3aXRoIHRoZSBuZWcgdmFsdWVcclxuICAgICAgICBsZXQgaSA9IG9mZnNldDtcclxuICAgICAgICB3aGlsZSAoaSArIHNpZ25lZEJ5dGVzLmxlbmd0aCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICBkYXRhVmlldy5zZXRJbnQ4KGkrKywgaXNOZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbmQgY29weSBpbiB0aGUgYWN0dWFsIGJ5dGVzXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHNpZ25lZEJ5dGVzLmxlbmd0aDsgai0tID4gMDspIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIHNpZ25lZEJ5dGVzW3NpZ25lZEJ5dGVzLmxlbmd0aCAtIDEgLSBqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGJ5dGVzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSBieXRlcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB3aXRoaW4gdGhlIGJ5dGVzIHRvIHN0YXJ0IGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGJ5dGVzIHRvIHVzZSBmb3IgY29udmVyc2lvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJ5dGVzVG9CaWdJbnRlZ2VyKHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc291cmNlLCBBcnJheUJ1ZmZlcikgfHwgc291cmNlLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgc291cmNlIG11c3QgYmUgYSBub24gZW1wdHkgbnVtYmVyIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvdXJjZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBTb3VyY2UgYXJyYXkgaGFzIGludmFsaWQgc2l6ZSwgaXQgbXVzdCBiZSBhdCBsZWFzdCAke0JpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoc291cmNlKTtcclxuICAgICAgICBsZXQgc2lnbmVkQnl0ZXMgPSBuZXcgSW50OEFycmF5KGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgZGF0YVZpZXcuYnl0ZUxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gZGF0YVZpZXcuZ2V0SW50OChiICsgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbml0aWFsIHBhZGRpbmcgbGVhdmluZyBhdCBsZWFzdCBvbmUgYnl0ZVxyXG4gICAgICAgIGxldCBwYWRkaW5nT2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBmaXJzdEJ5dGUgPSBzaWduZWRCeXRlc1swXTtcclxuICAgICAgICBjb25zdCBpc05lZyA9IGZpcnN0Qnl0ZSA8IDA7XHJcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IHBhZGRpbmcgY2hhcmFjdGVyIGlzIG5lZ2F0aXZlIHRoZW4gcmV2ZXJzZSB0aGUgMnMgY29tcGxlbWVudFxyXG4gICAgICAgIC8vIGJ1dCBmaXJzdCBzdHJpcCBvZiB0aGUgbGVhZGluZyBwYWRkaW5nXHJcbiAgICAgICAgaWYgKGZpcnN0Qnl0ZSA9PT0gMCB8fCBmaXJzdEJ5dGUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzaWduZWRCeXRlc1twYWRkaW5nT2Zmc2V0XSA9PT0gZmlyc3RCeXRlICYmIHBhZGRpbmdPZmZzZXQgPCBzaWduZWRCeXRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nT2Zmc2V0Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU3RyaXAgYW55IHBhZGRpbmdcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXMgPSBzaWduZWRCeXRlcy5zbGljZShwYWRkaW5nT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmVnKSB7XHJcbiAgICAgICAgICAgIEJpZ0ludGVnZXJIZWxwZXIudHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gaXNOZWcgPyBcIi1cIiA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoc2lnbmVkQnl0ZXMuYnVmZmVyKTtcclxuICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IGR2LmJ5dGVMZW5ndGg7IGgrKykge1xyXG4gICAgICAgICAgICBoZXhTdHJpbmcgKz0gYDAwJHtkdi5nZXRVaW50OChoKS50b1N0cmluZygxNil9YC5zbGljZSgtMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoaGV4U3RyaW5nLCAxNik7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyB0d29zQ29tcGxlbWVudChzaWduZWRCeXRlcykge1xyXG4gICAgICAgIC8vIGlmIHRoZSB3aG9sZSBudW1iZXIgaXMgbmVnYXRpdmUgdGhlblxyXG4gICAgICAgIC8vIGNoYW5nZSB0byAyJ3MgY29tcGxlbWVudHMgYnkgbm90aW5nIGFsbCB0aGUgbnVtYmVyc1xyXG4gICAgICAgIC8vIGFuZCBhZGRpbmcgMSB0byB0aGUgbGFzdCBpLmUuIH5iaWdudW0rMVxyXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc2lnbmVkQnl0ZXMubGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSB+c2lnbmVkQnl0ZXNbYl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCAxIHRvIGxhc3QgbnVtYmVyLCBpZiB0aGUgbnVtYmVyIGlzIDB4RkYgY29udGludWUgdG8gY2FycnlcclxuICAgICAgICBsZXQgYyA9IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tjXSsrO1xyXG4gICAgICAgIH0gd2hpbGUgKHNpZ25lZEJ5dGVzW2MtLV0gPT09IDAgJiYgYyA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLlJBRElYID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KDMpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuUkFESVgubWludXMoMSkuZGl2aWRlKDIpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5NSU5fVFJJVF9WQUxVRSA9IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUubmVnYXRlKCk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCA9IDM4NDtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCA9IEJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIIC8gODtcclxuZXhwb3J0cy5CaWdJbnRlZ2VySGVscGVyID0gQmlnSW50ZWdlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW1sblNXNTBaV2RsY2tobGJIQmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW9aV3h3WlhKekwySnBaMGx1ZEdWblpYSklaV3h3WlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2RVTkJRWFZETzBGQlEzWkRMRGhFUVVGcFF6dEJRVU5xUXl4elJFRkJiVVE3UVVGRmJrUTdPenRIUVVkSE8wRkJRMGc3U1VGaFNUczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRelZGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNlVU5CUVhsRExFTkJRVU1zUTBGQlF6dFRRVU53UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1MwRkJTeXhIUVVGSExIRkNRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRPMUZCUlhoQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXh4UWtGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEycEdPMUZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03U1VGRGFrSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGM1FpeEZRVUZGTEV0QlFXZENMRVZCUVVVc1RVRkJZeXhGUVVGRkxFMUJRV003VVVGRGRFY3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRlRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1owTkJRV2RETEVOQlFVTXNRMEZCUXp0VFFVTXpSRHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFOQlF6VkVPMUZCUlVRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSVGxGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkROMElzVFVGQlRTeFpRVUZaTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVOc1JTeGhRVUZoTEVkQlFVY3NXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOMFF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRE8xbEJSWFpETEVsQlFVa3NVMEZCVXl4SFFVRkhMR2RDUVVGblFpeERRVUZETEdOQlFXTXNSVUZCUlR0blFrRkROME1zVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZETlVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNjVUpCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVPMWxCUTBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VTBGRE9VTTdVVUZGUkN4SlFVRkpMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGJFTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRE4wSXNjMEpCUVhOQ08yZENRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVONFJUdFRRVU5LTzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVhkQ0xFVkJRVVVzVjBGQmQwSXNSVUZCUlN4TlFVRmpPMUZCUXpsR0xFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzY1VKQlFVMHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYUVVN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMmhHTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUlVGQlJUdFpRVU55UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5d3lSRUZCTWtRc1owSkJRV2RDTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcElPMUZCUlVRc2RVTkJRWFZETzFGQlEzWkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSVzVETEVsQlFVa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRMlFzZDBKQlFYZENPMWxCUTNoQ0xGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNiMFZCUVc5Rk8xRkJRM0JGTEVsQlFVa3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUlVGQlJTeERRVUZETzFOQlF5OUNPMUZCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVWb1JDdzJRa0ZCTmtJN1VVRkROMElzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4VFFVRlRMRU5CUVVNc1QwRkJUenRoUVVOd1F5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk0wTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3V1VGRFpDeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYUVRN1VVRkZSQ3hOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVelF5eHBSRUZCYVVRN1VVRkRha1FzU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTJZc1QwRkJUeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRaUVVNdlJDeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEyaERPMUZCUTBRc0swSkJRU3RDTzFGQlF5OUNMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWM3V1VGRGRrTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eE5RVUZ0UWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJReTlGTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEZEVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNOa05CUVRaRExFTkJRVU1zUTBGQlF6dFRRVU40UlR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTm9SU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4elJFRkJjMFFzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNCSU8xRkJSVVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0VFFVTnFSRHRSUVVWRUxIVkVRVUYxUkR0UlFVTjJSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVJc1RVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwRExFMUJRVTBzUzBGQlN5eEhRVUZITEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZOVUlzTkVWQlFUUkZPMUZCUXpWRkxIbERRVUY1UXp0UlFVTjZReXhKUVVGSkxGTkJRVk1zUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xbEJRM0pETEU5QlFVOHNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExGTkJRVk1zU1VGQlNTeGhRVUZoTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEzWkdMR0ZCUVdFc1JVRkJSU3hEUVVGRE8yRkJRMjVDTzFsQlEwUXNiMEpCUVc5Q08xbEJRM0JDTEZkQlFWY3NSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlEyeEVPMUZCUlVRc1NVRkJTU3hMUVVGTExFVkJRVVU3V1VGRFVDeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEYUVRN1VVRkZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlEycERMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNMVF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1F5eFRRVUZUTEVsQlFVa3NTMEZCU3l4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUXpkRU8xRkJSVVFzVDBGQlR5eHhRa0ZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCYzBJN1VVRkRhRVFzZFVOQlFYVkRPMUZCUTNaRExITkVRVUZ6UkR0UlFVTjBSQ3d3UTBGQk1FTTdVVUZETVVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZWtNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JETzFGQlEwUXNaMFZCUVdkRk8xRkJRMmhGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF5OUNMRWRCUVVjN1dVRkRReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0VFFVTndRaXhSUVVGUkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bERMRU5CUVVNN08wRkJhRTlFTEdWQlFXVTdRVUZEVXl4elFrRkJTeXhIUVVGelFpeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemRFTEdWQlFXVTdRVUZEVXl3clFrRkJZeXhIUVVGelFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUnl4bFFVRmxPMEZCUTFNc0swSkJRV01zUjBGQmMwSXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUlhKSExHVkJRV1U3UVVGRFV5eG5RMEZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNhVU5CUVdkQ0xFZEJRVmNzWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVmcxUml3MFEwRnJUME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL2hhc2hcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi4vZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHRyYW5zYWN0aW9ucy5cclxuICogQ29udmVydGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vc2lnbmluZy9zaWduaW5nLmpzXHJcbiAqL1xyXG5jbGFzcyBUcmFuc2FjdGlvbkhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgaGFzaCBmb3IgYSB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGhhc2guXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aHIgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBoYXNoKHRyYW5zYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyYW5zYWN0aW9uLCB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cmFuc2FjdGlvbiBtdXN0IGJlIG9mIHR5cGUgVHJhbnNhY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvbi50b1RyeXRlcygpKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdHJhbnNhY3Rpb25Ucml0cy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGhhc2hUcml0cyA9IG5ldyBJbnQ4QXJyYXkoY3VybC5nZXRDb25zdGFudChcIkhBU0hfTEVOR1RIXCIpKTtcclxuICAgICAgICBjdXJsLnNxdWVlemUoaGFzaFRyaXRzLCAwLCBoYXNoVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cml0c18xLlRyaXRzLmZyb21BcnJheShoYXNoVHJpdHMpLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVHJhbnNhY3Rpb25IZWxwZXIgPSBUcmFuc2FjdGlvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKaGJuTmhZM1JwYjI1SVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OTBjbUZ1YzJGamRHbHZia2hsYkhCbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMSGxFUVVGelJEdEJRVU4wUkN4MVJVRkJiMFU3UVVGRGNFVXNNa1JCUVhkRU8wRkJRM2hFTEhORVFVRnRSRHRCUVVOdVJDdzRSRUZCTWtRN1FVRkZNMFE3T3p0SFFVZEhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUYzUWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxIbENRVUZYTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFOQlEzaEZPMUZCUlVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4aFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSVFZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOc1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVXhSQ3hOUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVUzUXl4UFFVRlBMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1EwRkRTanRCUVhSQ1JDdzRRMEZ6UWtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCB0aW1lU2VydmljZV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L3NlcnZpY2VzL3RpbWVTZXJ2aWNlXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RhZ1wiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl90aW1lU2VydmljZSA9IHRpbWVTZXJ2aWNlIHx8IG5ldyB0aW1lU2VydmljZV8xLlRpbWVTZXJ2aWNlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHRoZSBwcm9vZiBvZiB3b3JrIHRvIHBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uLlxyXG4gICAgICogV2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgdGhlIGltcGxlbWVudGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVua1RyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvdyh0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0eXBlIFRyeXRlc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG1pbldlaWdodE1hZ25pdHVkZSkgfHwgbWluV2VpZ2h0TWFnbml0dWRlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbWluV2VpZ2h0TWFnbml0dWRlIG11c3QgYmUgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmaW5hbFRyeXRlcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyeXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyh0cnl0ZXNbaV0pO1xyXG4gICAgICAgICAgICAvLyBTdGFydCB3aXRoIGxhc3QgaW5kZXggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgLy8gQXNzaWduIGl0IHRoZSB0cnVuayAvIGJyYW5jaCB3aGljaCB0aGUgdXNlciBoYXMgc3VwcGxpZWRcclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBidW5kbGUsIGNoYWluIHRoZSBidW5kbGUgdHJhbnNhY3Rpb25zIHZpYVxyXG4gICAgICAgICAgICAvLyB0cnVua1RyYW5zYWN0aW9uIHRvZ2V0aGVyXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGhpcy5fdGltZVNlcnZpY2UubXNTaW5jZUVwb2NoKCkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0cmFuc2FjdGlvbiwgdG8gYmUgcHJvY2Vzc2VkXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGl0J3MgdGhlIGxhc3QgaW4gdGhlIGJ1bmRsZSBhbmQgdGhlblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gaXQgdGhlIHN1cHBsaWVkIHRydW5rIGFuZCBicmFuY2ggdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGxhc3QgdHJhbnNhY3Rpb24gaW4gdGhlIGJ1bmRsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmxhc3RJbmRleC50b051bWJlcigpICE9PSB0cmFuc2FjdGlvbi5jdXJyZW50SW5kZXgudG9OdW1iZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiV3JvbmcgYnVuZGxlIG9yZGVyLiBUaGUgYnVuZGxlIHNob3VsZCBiZSBvcmRlcmVkIGluIGRlc2NlbmRpbmcgb3JkZXIgZnJvbSBjdXJyZW50SW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi50cnVua1RyYW5zYWN0aW9uID0gcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3VHJ5dGVzID0gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlVHJ5dGVzID0gYXdhaXQgdGhpcy5zaW5nbGVQb3cobmV3VHJ5dGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcy5zdWIodHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5MRU5HVEggLSB0YWdfMS5UYWcuTEVOR1RILCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGFzaCBvZiB0aGUgbmV3IHRyYW5zYWN0aW9uIHdpdGggbm9uY2UgYW5kIHVzZSB0aGF0IGFzIHRoZSBwcmV2aW91cyBoYXNoIGZvciBuZXh0IGVudHJ5XHJcbiAgICAgICAgICAgIGNvbnN0IHJldHVyblRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHNpbmdsZVRyeXRlcyk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IZWxwZXJfMS5UcmFuc2FjdGlvbkhlbHBlci5oYXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICAgICAgZmluYWxUcnl0ZXMucHVzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldmVyc2UgdGhlIG9yZGVyIHNvIHRoYXQgaXQncyBhc2NlbmRpbmcgZnJvbSBjdXJyZW50SW5kZXhcclxuICAgICAgICByZXR1cm4gZmluYWxUcnl0ZXMucmV2ZXJzZSgpLm1hcCh0cmFuc2FjdGlvbiA9PiB0cmFuc2FjdGlvbi50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIG1heGltdW0gdGltZXN0YW1wIHZhbHVlIHVzZWQgaW4gcHJvb2Ygb2Ygd29yay5cclxuICovXHJcblByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFID0gKE1hdGgucG93KDMsIDI3KSAtIDEpIC8gMjtcclxuZXhwb3J0cy5Qcm9vZk9mV29ya0Jhc2UgPSBQcm9vZk9mV29ya0Jhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdENZWE5sTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM0J5YjI5bVQyWlhiM0pyTDNCeWIyOW1UMlpYYjNKclFtRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkZla1VzTWtWQlFYZEZPMEZCUTNoRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUkVGQmIwUTdRVUZEY0VRc2RVVkJRVzlGTzBGQlEzQkZMSFZGUVVGdlJUdEJRVU53UlN3MlJFRkJNRVE3UVVGRE1VUXNjMFJCUVcxRU8wRkJRMjVFTEc5RlFVRnBSVHRCUVVkcVJUczdSMEZGUnp0QlFVTklPMGxCVTBrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4WFFVRXdRanRSUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxIbENRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1MwRkJTeXhEUVVGRExGVkJRVlU3VVVGRGJrSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVPenM3T3pzN08wOUJUMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2RDUVVGelFpeEZRVUZGTEdsQ1FVRjFRaXhGUVVGRkxFMUJRV2RDTEVWQlFVVXNhMEpCUVRCQ08xRkJRekZITEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhSRUZCY1VRc1EwRkJReXhEUVVGRE8xTkJRMmhHTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxGZEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhORVFVRnpSQ3hEUVVGRExFTkJRVU03VTBGRGFrWTdVVUZEUkN4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1UwRkRka1U3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNRMEZCUXp0VFFVTXZSRHRSUVVWRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVjJRaXhKUVVGSkxIVkNRVUUyUWl4RFFVRkRPMUZCUld4RExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNCRExFMUJRVTBzVjBGQlZ5eEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhSRUxHOURRVUZ2UXp0WlFVTndReXd5UkVGQk1rUTdXVUZETTBRc01FUkJRVEJFTzFsQlF6RkVMRFJDUVVFMFFqdFpRVU0xUWl4WFFVRlhMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRek5HTEZkQlFWY3NRMEZCUXl3MlFrRkJOa0lzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUlN4WFFVRlhMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlpTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU03V1VGRmVFY3NiMFJCUVc5RU8xbEJRM0JFTEhORVFVRnpSRHRaUVVOMFJDeDFSRUZCZFVRN1dVRkZka1FzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RlFVRkZPMmRDUVVNdlF5d3dRMEZCTUVNN1owSkJRekZETEVsQlFVa3NWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8yOUNRVU14UlN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDNSa0ZCZDBZc1EwRkJReXhEUVVGRE8ybENRVU51U0R0blFrRkRSQ3hYUVVGWExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdaMEpCUTJoRUxGZEJRVmNzUTBGQlF5eHBRa0ZCYVVJc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXp0aFFVTnlSRHRwUWtGQlRUdG5Ra0ZEU0N4WFFVRlhMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU03WjBKQlEzWkVMRmRCUVZjc1EwRkJReXhwUWtGQmFVSXNSMEZCUnl4blFrRkJaMElzUTBGQlF6dGhRVU53UkR0WlFVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0WlFVVjZReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eE5RVUZOTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkZla1VzVjBGQlZ5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNlVUpCUVZjc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVZzUnl4M1IwRkJkMGM3V1VGRGVFY3NUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFpRVU12UkN4MVFrRkJkVUlzUjBGQlJ5eHhRMEZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRaUVVWd1JTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVMEZEZGtNN1VVRkRSQ3cyUkVGQk5rUTdVVUZETjBRc1QwRkJUeXhYUVVGWExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkROVVVzUTBGQlF6czdRVUV6UmtRN08wZEJSVWM3UVVGRGIwSXNiVU5CUVcxQ0xFZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRktia1lzTUVOQmNVZERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJU3BvbmdlIHVzaW5nIEN1cmwgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL2N1cmwvY3VybC5qc1xyXG4gKi9cclxuY2xhc3MgQ3VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBDdXJsLlxyXG4gICAgICogQHBhcmFtIHJvdW5kcyBUaGUgbnVtYmVyIG9mIHJvdW5kcyB0byB1c2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJvdW5kcyA9IEN1cmwuTlVNQkVSX09GX1JPVU5EUykge1xyXG4gICAgICAgIHRoaXMuX251bWJlck9mUm91bmRzID0gcm91bmRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50OEFycmF5KEN1cmwuU1RBVEVfTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbG9jYWxMZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpKytdID0gdHJpdHNbbG9jYWxPZmZzZXQrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRoaXMuX3N0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGhhc2guXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNvcHk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyT2ZSb3VuZHM7IHJvdW5kKyspIHtcclxuICAgICAgICAgICAgc3RhdGVDb3B5ID0gbmV3IEludDhBcnJheSh0aGlzLl9zdGF0ZS5zbGljZSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDdXJsLlNUQVRFX0xFTkdUSDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSA9IEN1cmwuVFJVVEhfVEFCTEVbc3RhdGVDb3B5W2luZGV4XSArIChzdGF0ZUNvcHlbaW5kZXggKz0gKGluZGV4IDwgMzY1ID8gMzY0IDogLTM2NSldIDw8IDIpICsgNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQ3VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuQ3VybC5OVU1CRVJfT0ZfUk9VTkRTID0gODE7XHJcbkN1cmwuU1RBVEVfTEVOR1RIID0gQ3VybC5IQVNIX0xFTkdUSCAqIDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5DdXJsLlRSVVRIX1RBQkxFID0gbmV3IEludDhBcnJheShbMSwgMCwgLTEsIDIsIDEsIC0xLCAwLCAyLCAtMSwgMSwgMF0pO1xyXG5leHBvcnRzLkN1cmwgPSBDdXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMk4xY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYzBSQlFXMUVPMEZCUjI1RU96czdSMEZIUnp0QlFVTklPMGxCWVVrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4VFFVRnBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVjBGQlZ5eERRVUZETEVsQlFWazdVVUZETTBJc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFZpeExRVUZMTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dGhRVU12UWp0WlFVTkVMRXRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRMjVDTEV0QlFVc3NZMEZCWXp0blFrRkRia0k3YjBKQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzSkNPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVlVGQlZTeERRVUZETEV0QlFXbENPMUZCUXk5Q0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGRrSTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRMnhFTzBsQlEwd3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemxFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1UwRkRiRVk3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSVGxGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRNME03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVWRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZla1VzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVOa0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXpRenRaUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0WlFVVnFRaXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkxMRk5CUVZNN1VVRkRZaXhKUVVGSkxGTkJRVzlDTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVdlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU51U0R0VFFVTktPMGxCUTB3c1EwRkJRenM3UVVFM1NuTkNMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlF6RkNMSEZDUVVGblFpeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhwUWtGQldTeEhRVUZYTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSVzVGTEdWQlFXVTdRVUZEVXl4blFrRkJWeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZPZWtjc2IwSkJLMHBESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29udGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCSVRfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgY2FzZSBcIkJZVEVfSEFTSF9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gS2VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsucmVzZXQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWJzb3JiIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBhYnNvcmIgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKi9cclxuICAgIGFic29yYih0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaXRTdGF0ZSA9IHRyaXRzLnNsaWNlKGxvY2FsT2Zmc2V0LCBsb2NhbE9mZnNldCArIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIudHJpdHNUb0JpZ0ludGVnZXIodHJpdFN0YXRlLCAwLCB0cml0U3RhdGUubGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZVN0YXRlID0gbmV3IEFycmF5QnVmZmVyKEtlcmwuQllURV9IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJpZ0ludGVnZXJUb0J5dGVzKGJpZ0ludCwgYnl0ZVN0YXRlLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5fa2VjY2FrLnVwZGF0ZShieXRlU3RhdGUpO1xyXG4gICAgICAgICAgICBsb2NhbE9mZnNldCArPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBLZXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICUgMjQzICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7S2VybC5IQVNIX0xFTkdUSH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZUJ1ZmZlciA9IHRoaXMuX2tlY2Nhay5kaWdlc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgYmlnSW50ID0gYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYnl0ZXNUb0JpZ0ludGVnZXIoYnl0ZVN0YXRlQnVmZmVyLCAwLCBLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSBuZXcgSW50OEFycmF5KEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9Ucml0cyhiaWdJbnQsIHRyaXRTdGF0ZSwgMCwgS2VybC5IQVNIX0xFTkdUSCk7XHJcbiAgICAgICAgICAgIHRyaXRTdGF0ZVtLZXJsLkhBU0hfTEVOR1RIIC0gMV0gPSAwO1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgS2VybC5IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbbG9jYWxPZmZzZXQrK10gPSB0cml0U3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhieXRlU3RhdGVCdWZmZXIpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZHYuYnl0ZUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkdi5zZXRVaW50OChpLCBkdi5nZXRVaW50OChpKSBeIDB4RkYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5LZXJsLkJZVEVfSEFTSF9MRU5HVEggPSBLZXJsLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuS2VybCA9IEtlcmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWEyVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwydGxjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNNRU5CUVhWRE8wRkJRM1pETEhORVFVRnRSRHRCUVVOdVJDeHJSVUZCSzBRN1FVRkhMMFE3T3p0SFFVZEhPMEZCUTBnN1NVRlhTVHM3VDBGRlJ6dEpRVU5JTzFGQlEwa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxGZEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU16UkN4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRmRCUVZjc1EwRkJReXhKUVVGWk8xRkJRek5DTEZGQlFWRXNTVUZCU1N4RlFVRkZPMWxCUTFZc1MwRkJTeXhoUVVGaExFTkJRVU03V1VGRGJrSXNTMEZCU3l4cFFrRkJhVUlzUTBGQlF6dFpRVU4yUWl4TFFVRkxMR3RDUVVGclFqdG5Ra0ZEZGtJN2IwSkJRMGtzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2FVSkJRM0pDTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1MwRkJhVUk3U1VGRGJrTXNRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRNVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU01UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMmhGTzFGQlEwUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGREwwTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRUUVVONlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xTkJRMnhHTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU53UWl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONlJqdFJRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVONlFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkZla0lzUjBGQlJ6dFpRVU5ETEUxQlFVMHNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRk0wVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNCRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMWxCUTJ4R0xFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmVrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZGTDBJc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdXVUZEYUVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEYmtNc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bENMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFOUJRVThzUTBGQlF5eExRVUZuUWl4RlFVRkZMRTFCUVdNc1JVRkJSU3hOUVVGak8xRkJRek5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03VTBGRGVrUTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xTkJRM3BFTzFGQlEwUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVTkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNaME5CUVdkRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVrWTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVYzdXVUZEUXl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUlRsRExFMUJRVTBzVFVGQlRTeEhRVUZITEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03V1VGRk4wWXNUVUZCVFN4VFFVRlRMRWRCUVdNc1NVRkJTU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMWxCUXpkRUxHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVVXpSU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRmNFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMVlzVDBGQlR5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRGVrSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRla003V1VGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFpRVU42UXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEyaERMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVWeVF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOdVF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6czdRVUZ1U2tRc1pVRkJaVHRCUVVOVExHZENRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRPMEZCUTJ4RUxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNjVUpCUVdkQ0xFZEJRVmNzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRk9hRVlzYjBKQmNVcERJbjA9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgYWRkcmVzc2VzLlxyXG4gKi9cclxuY2xhc3MgQWRkcmVzcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkcmVzc1RyeXRlcyA9IGFkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tzdW1Ucnl0ZXMgPSBjaGVja3N1bVRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFkZHJlc3MgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gYWRkcmVzcyBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgYWRkcmVzcyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgQWRkcmVzcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoYWRkcmVzcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhZGRyZXNzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgYWRkcmVzcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSBhZGRyZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIICYmIHRyeXRlc1N0cmluZy5sZW5ndGggIT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3Mgc2hvdWxkIGVpdGhlciBiZSAke0FkZHJlc3MuTEVOR1RIfSBvciAke0FkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU19IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NUcnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICBsZXQgY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPT09IEFkZHJlc3MuTEVOR1RIX1dJVEhfQ0hFQ0tTVU0pIHtcclxuICAgICAgICAgICAgY2hlY2tzdW1Ucnl0ZXMgPSB0cnl0ZXNTdHJpbmcuc3Vic3RyKEFkZHJlc3MuTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzKGFkZHJlc3NUcnl0ZXMsIGNoZWNrc3VtVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBubyBjaGVja3N1bS5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBhZGRyZXNzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl9hZGRyZXNzVHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgYWRkcmVzcyB0byB0cnl0ZXMgd2l0aCBhIGNoZWNrc3VtLCBjcmVhdGluZyBhIGJsYW5rIG9uZSBpZiBuZWVkZWQuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIGNoZWNrc3UsLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlc1dpdGhDaGVja3N1bSgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoaXMgYWRkcmVzcyBoYXMgbm8gY2hlY2tzdW0gY2FsY3VsYXRlZCBmb3IgaXRgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHRoaXMuX2NoZWNrc3VtVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzc1RyeXRlcyArIHRoaXMuX2NoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGFkZHJlc3Mgd2l0aG91dCBjaGVja3N1bSAoODEpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEggPSA4MTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIGFuIGFkZHJlc3MgY2hlY2tzdW0gKDkpLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU0gPSA5O1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgdmFsaWQgYWRkcmVzcyB3aXRoIGNoZWNrc3VtICg5MCkuXHJcbiAqL1xyXG5BZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNID0gQWRkcmVzcy5MRU5HVEggKyBBZGRyZXNzLkxFTkdUSF9DSEVDS1NVTTtcclxuLyoqXHJcbiAqIEFuIGVtcHR5IGhhc2ggYWxsIDlzLlxyXG4gKi9cclxuQWRkcmVzcy5FTVBUWSA9IEFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoQWRkcmVzcy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuQWRkcmVzcyA9IEFkZHJlc3M7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlXUmtjbVZ6Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyRmtaSEpsYzNNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUYzUWtrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEdGQlFYRkNMRVZCUVVVc1kwRkJjMEk3VVVGRE4wUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhoUVVGaExFTkJRVU03VVVGRGNFTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJTU3hqUVVGakxFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRV1U3VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXcyUTBGQk5rTXNRMEZCUXl4RFFVRkRPMU5CUTNSRk8xRkJSVVFzVFVGQlRTeFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSWGhETEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1QwRkJUeXhEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMWxCUTJoSExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2REUVVGblF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4UFFVRlBMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJFczdVVUZGUkN4TlFVRk5MR0ZCUVdFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRE4wUXNTVUZCU1N4alFVRmpMRU5CUVVNN1VVRkRia0lzU1VGQlNTeFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTjBSQ3hqUVVGakxFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGVFUTdVVUZEUkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEc5Q1FVRnZRanRSUVVOMlFpeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMWxCUXpkRExFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0VFFVTjRSVHRoUVVGTk8xbEJRMGdzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0VFFVTjZSVHRKUVVOTUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0WlFVTTNReXhQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJRenRUUVVOeVJEdGhRVUZOTzFsQlEwZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRE8xTkJRemxDTzBsQlEwd3NRMEZCUXpzN1FVRnVSa1E3TzBkQlJVYzdRVUZEYjBJc1kwRkJUU3hIUVVGWExFVkJRVVVzUTBGQlF6dEJRVU16UXpzN1IwRkZSenRCUVVOdlFpeDFRa0ZCWlN4SFFVRlhMRU5CUVVNc1EwRkJRenRCUVVOdVJEczdSMEZGUnp0QlFVTnZRaXcwUWtGQmIwSXNSMEZCVnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTTdRVUZGTDBZN08wZEJSVWM3UVVGRGIwSXNZVUZCU3l4SFFVRlpMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRnFRamxITERCQ1FYRkdReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGhhc2hlcy5cclxuICovXHJcbmNsYXNzIEhhc2gge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBoYXNoIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGhhc2ggVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGhhc2ggZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEhhc2guXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGhhc2gpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaGFzaCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGhhc2ggc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gaGFzaC5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBIYXNoLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgaGFzaCBzaG91bGQgYmUgJHtIYXNoLkxFTkdUSH0gY2hhcmFjdGVycyBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIYXNoKGhhc2gpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBoYXNoIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSBoYXNoLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhIHZhbGlkIGhhc2ggKDgxKS5cclxuICovXHJcbkhhc2guTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkhhc2guRU1QVFkgPSBIYXNoLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEhhc2guTEVOR1RIKSkpO1xyXG5leHBvcnRzLkhhc2ggPSBIYXNoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhR0Z6YUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrWVhSaEwyaGhjMmd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN4clJFRkJLME03UVVGREwwTXNjVU5CUVd0RE8wRkJSV3hET3p0SFFVVkhPMEZCUTBnN1NVRmhTU3hsUVVGbE8wbEJRMllzV1VGQmIwSXNUVUZCWXp0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTnFReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzQkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VTBGRGJrVTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVVUZETjBJc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTjRRaXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzU1VGQlNTeERRVUZETEUxQlFVMHNkVUpCUVhWQ0xFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkR08xRkJSVVFzVDBGQlR5eEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU51UXl4RFFVRkRPenRCUVdwRVJEczdSMEZGUnp0QlFVTnZRaXhYUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZWQlFVc3NSMEZCVXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW5KSExHOUNRVzFFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRlRVFzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FUkJRVGhFTEVOQlFVTXNRMEZCUXp0VFFVTjJSanRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlEycEVMRWxCUVVrc1RVRkJUU3hMUVVGTExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNMVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEY2trN1VVRkRSQ3hQUVVGUExFbEJRVWtzZDBKQlFYZENMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUXp0SlFVTnNSU3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOdVF5eERRVUZET3p0QlFXaEVSRHM3UjBGRlJ6dEJRVU52UWl3clFrRkJUU3hIUVVGWExFbEJRVWtzUTBGQlF6dEJRVU0zUXpzN1IwRkZSenRCUVVOdlFpdzRRa0ZCU3l4SFFVRTJRaXgzUWtGQmQwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVZKcVN5dzBSRUZyUkVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdGFncy5cclxuICovXHJcbmNsYXNzIFRhZyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRhZyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0YWcgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIHRhZyBmcm9tLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVGFnLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0YWcpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGFnLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdGFnIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZXNTdHJpbmcgPSB0YWcudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAodHJ5dGVzU3RyaW5nLmxlbmd0aCA+IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRhZyBzaG91bGQgYmUgYXQgbW9zdCAke1RhZy5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGg6IHRyeXRlc1N0cmluZy5sZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0cnl0ZXNTdHJpbmcubGVuZ3RoIDwgVGFnLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0cnl0ZXNTdHJpbmcgKz0gXCI5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVGFnKHRyeXRlc1N0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRhZyB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdGFnLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0YWcgKDI3KS5cclxuICovXHJcblRhZy5MRU5HVEggPSAyNztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHRhZyBhbGwgOXMuXHJcbiAqL1xyXG5UYWcuRU1QVFkgPSBUYWcuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoVGFnLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5UYWcgPSBUYWc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHRm5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEdGbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWVVrc1pVRkJaVHRKUVVObUxGbEJRVzlDTEUxQlFXTTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFWYzdVVUZEYUVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDVRMEZCZVVNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNTVUZCU1N4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXeERMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTJ4RExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEVOQlFVTXNUVUZCVFN4MVFrRkJkVUlzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU40U0R0UlFVVkVMRTlCUVU4c1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNKRExGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEZGtJN1VVRkZSQ3hQUVVGUExFbEJRVWtzUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTJwRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPenRCUVhSRVJEczdSMEZGUnp0QlFVTnZRaXhWUVVGTkxFZEJRVmNzUlVGQlJTeERRVUZETzBGQlF6TkRPenRIUVVWSE8wRkJRMjlDTEZOQlFVc3NSMEZCVVN4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCVW14SExHdENRWGRFUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIi4vYWRkcmVzc1wiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIi4vaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIi4vdGFnXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIi4vdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJhbnNhY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb24ge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG9ic29sZXRlVGFnIE9ic29sZXRlIHRyYW5zYWN0aW9uIHRhZy5cclxuICAgICAqIEBwYXJhbSB0aW1lc3RhbXAgVGhlIHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBjdXJyZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gbGFzdEluZGV4IFRoZSBsYXN0IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2ggdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIGxvd2VyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kICBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgdXBwZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gbm9uY2UgVGhlIG5vbmNlLlxyXG4gICAgICogQHJldHVybnMgTmV3IGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVBhcmFtcyhzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIGFkZHJlc3MsIHZhbHVlLCBvYnNvbGV0ZVRhZywgdGltZXN0YW1wLCBjdXJyZW50SW5kZXgsIGxhc3RJbmRleCwgYnVuZGxlLCB0cnVua1RyYW5zYWN0aW9uLCBicmFuY2hUcmFuc2FjdGlvbiwgdGFnLCBhdHRhY2htZW50VGltZXN0YW1wLCBhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCwgYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQsIG5vbmNlKSB7XHJcbiAgICAgICAgY29uc3QgdHggPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodmFsdWUsIDExKTtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IG9ic29sZXRlVGFnO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihjdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIHR4Lmxhc3RJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihsYXN0SW5kZXgpO1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGJ1bmRsZTtcclxuICAgICAgICB0eC50cnVua1RyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZztcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXApO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCk7XHJcbiAgICAgICAgdHgubm9uY2UgPSBub25jZTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyBmb3IgdGhlIHRoaXMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiB0aGlzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyh0cnl0ZXMpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdHJ5dGVzIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRyeXRlcy5sZW5ndGgoKTtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGhgLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleFN0YXJ0ID0gMjI3OTtcclxuICAgICAgICBjb25zdCBjaGVja0luZGV4TGVuZ3RoID0gMTY7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0cnl0ZXMuc3ViKGNoZWNrSW5kZXhTdGFydCwgY2hlY2tJbmRleExlbmd0aCkudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoY2hlY2sgIT09IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgYmV0d2VlbiAke2NoZWNrSW5kZXhTdGFydH0gYW5kICR7Y2hlY2tJbmRleFN0YXJ0ICsgY2hlY2tJbmRleExlbmd0aH0gc2hvdWxkIGJlIGFsbCA5c2AsIHsgY2hlY2sgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gMDtcclxuICAgICAgICB0eC5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSDtcclxuICAgICAgICB0eC5hZGRyZXNzID0gYWRkcmVzc18xLkFkZHJlc3MuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBhZGRyZXNzXzEuQWRkcmVzcy5MRU5HVEg7XHJcbiAgICAgICAgdHgudmFsdWUgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgMTEpLCAxMSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gMTE7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIO1xyXG4gICAgICAgIHR4Lm9ic29sZXRlVGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHgudGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmN1cnJlbnRJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYnVuZGxlID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LmJyYW5jaFRyYW5zYWN0aW9uID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHgudGFnID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRhZ18xLlRhZy5MRU5HVEg7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5ub25jZSA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICByZXR1cm4gdHg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyYW5zYWN0aW9uIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cmFuc2FjdGlvbiBhcyB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmFkZHJlc3MsIGFkZHJlc3NfMS5BZGRyZXNzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYWRkcmVzcyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBhZGRyZXNzOiB0aGlzLmFkZHJlc3MgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm9ic29sZXRlVGFnLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBvYnNvbGV0ZVRhZyBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBvYnNvbGV0ZVRhZzogdGhpcy5vYnNvbGV0ZVRhZyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnVuZGxlLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGJ1bmRsZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBidW5kbGU6IHRoaXMuYnVuZGxlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy50cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRydW5rVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgdHJ1bmtUcmFuc2FjdGlvbjogdGhpcy50cnVua1RyYW5zYWN0aW9uIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5icmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBicmFuY2hUcmFuc2FjdGlvbiBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBicmFuY2hUcmFuc2FjdGlvbjogdGhpcy5icmFuY2hUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMubm9uY2UsIHRhZ18xLlRhZykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIG5vbmNlIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IG5vbmNlOiB0aGlzLm5vbmNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXMgPSB0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmFkZHJlc3MudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFXHJcbiAgICAgICAgICAgICsgdGhpcy5vYnNvbGV0ZVRhZy50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5sYXN0SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLmJ1bmRsZS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLnRydW5rVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5icmFuY2hUcmFuc2FjdGlvbi50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZykudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyB0aGlzLm5vbmNlLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aCAke2xlbmd0aH1gLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1xuXFx0c2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50OiBcIiR7KHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHx8IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhZGRyZXNzOiBcIiR7KHRoaXMuYWRkcmVzcyB8fCBhZGRyZXNzXzEuQWRkcmVzcy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR2YWx1ZTogJHsodGhpcy52YWx1ZSB8fCBUcmFuc2FjdGlvbi5FTVBUWV8xMSkudG9OdW1iZXIoKX1cblxcdG9ic29sZXRlVGFnOiBcIiR7KHRoaXMub2Jzb2xldGVUYWcgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRpbWVzdGFtcDogJHsodGhpcy50aW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0Y3VycmVudEluZGV4OiAkeyh0aGlzLmN1cnJlbnRJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRsYXN0SW5kZXg6ICR7KHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGJ1bmRsZTogXCIkeyh0aGlzLmJ1bmRsZSB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0cnVua1RyYW5zYWN0aW9uOiBcIiR7KHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRicmFuY2hUcmFuc2FjdGlvbjogXCIkeyh0aGlzLmJyYW5jaFRyYW5zYWN0aW9uIHx8IGhhc2hfMS5IYXNoLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcblxcdHRhZzogXCIkeyh0aGlzLnRhZyB8fCB0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHRhdHRhY2htZW50VGltZXN0YW1wOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0YXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQ6ICR7KHRoaXMuYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bm9uY2U6IFwiJHsodGhpcy5ub25jZSB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxufWA7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCB0cmFuc2FjdGlvbiAoMjY3MykuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5MRU5HVEggPSAyNjczO1xyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIGNoZWNrIHZhbHVlICgxNikuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEggPSAxNjtcclxuLyoqXHJcbiAqIFRoZSBjaGVjayB2YWx1ZSBmb3IgYnVuZGxlcyBhbGwgOXMuXHJcbiAqL1xyXG5UcmFuc2FjdGlvbi5DSEVDS19WQUxVRSA9IFwiOVwiLnJlcGVhdChUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJhbnNhY3Rpb24uRU1QVFlfMTEgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgMTEpO1xyXG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21GdWMyRmpkR2x2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVTXZReXgxUTBGQmIwTTdRVUZEY0VNc2FVTkJRVGhDTzBGQlF6bENMSGxGUVVGelJUdEJRVU4wUlN3clFrRkJORUk3UVVGRE5VSXNLME5CUVRSRE8wRkJRelZETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCWjBaSkxHVkJRV1U3U1VGRFpqdEpRVU5CTEVOQlFVTTdTVUZGUkRzN096czdPenM3T3pzN096czdPenM3TzA5QmEwSkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eDNRa0ZCYTBRc1JVRkRiRVFzVDBGQlowSXNSVUZEYUVJc1MwRkJZU3hGUVVOaUxGZEJRV2RDTEVWQlEyaENMRk5CUVdsQ0xFVkJRMnBDTEZsQlFXOUNMRVZCUTNCQ0xGTkJRV2xDTEVWQlEycENMRTFCUVZrc1JVRkRXaXhuUWtGQmMwSXNSVUZEZEVJc2FVSkJRWFZDTEVWQlEzWkNMRWRCUVZFc1JVRkRVaXh0UWtGQk1rSXNSVUZETTBJc05rSkJRWEZETEVWQlEzSkRMRFpDUVVGeFF5eEZRVU55UXl4TFFVRlZPMUZCUXk5Q0xFMUJRVTBzUlVGQlJTeEhRVUZITEVsQlFVa3NWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkROMElzUlVGQlJTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExIZENRVUYzUWl4RFFVRkRPMUZCUTNaRUxFVkJRVVVzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUTNKQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYWtRc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU4yUkN4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRMnBFTEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJRMjVDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJRenRSUVVOMlF5eEZRVUZGTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzYVVKQlFXbENMRU5CUVVNN1VVRkRla01zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNN1VVRkRZaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dFJRVU55UlN4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zTmtKQlFUWkNMRU5CUVVNc1EwRkJRenRSUVVONlJpeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTnFRaXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGak8xRkJRMjVETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0VFFVTnlSVHRSUVVWRUxFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVNdlFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3haUVVGWkxFVkJRVVVzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNwR08xRkJSVVFzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRelZDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zWlVGQlpTeEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGZGtVc1NVRkJTU3hMUVVGTExFdEJRVXNzVjBGQlZ5eERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTnVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elFrRkJjMElzWlVGQlpTeFJRVUZSTEdWQlFXVXNSMEZCUnl4blFrRkJaMElzYlVKQlFXMUNMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkpPMUZCUlVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYWtJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMRzFFUVVGM1FpeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeHRSRUZCZDBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzcElMRkZCUVZFc1NVRkJTU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkROVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSMEZCUnl4cFFrRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hwUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzVVVGQlVTeEpRVUZKTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRek5DTEVWQlFVVXNRMEZCUXl4TFFVRkxMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVVVGQlVTeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm1MRkZCUVZFc1NVRkJTU3hYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1VVRkRNME1zUlVGQlJTeERRVUZETEZkQlFWY3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEZMRkZCUVZFc1NVRkJTU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEzWkNMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEdMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zV1VGQldTeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSQ3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1YwRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSU3hSUVVGUkxFbEJRVWtzVjBGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjRRaXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE1VUXNVVUZCVVN4SlFVRkpMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGRrSXNSVUZCUlN4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTFSaXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUnl4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1IwRkJSeXhUUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxGTkJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRWRUxFOUJRVThzUlVGQlJTeERRVUZETzBsQlEyUXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEcxRVFVRjNRaXhEUVVGRExFVkJRVVU3V1VGREwwVXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpkS08xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVUpCUVU4c1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkVRVUZ6UkN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpGSE8xRkJSVVFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNVMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROME1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc01FUkJRVEJFTEVWQlFVVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZEVnN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTjZReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4eFJFRkJjVVFzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUnp0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc0swUkJRU3RFTEVWQlFVVXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkpPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOd1JDeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXhuUlVGQlowVXNSVUZCUlN4RlFVRkZMR2xDUVVGcFFpeEZRVUZGTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVrN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZITEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dlJFRkJiMFFzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53Unp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRiRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRNVVFzVjBGQlZ5eERRVUZETEZkQlFWYzdZMEZEZGtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRkRU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRemRFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5vUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha01zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTXpReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlF6VkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzQkVMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRM1pGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJwR0xFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEycEdMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkZka01zVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNM1FpeEpRVUZKTEUxQlFVMHNTMEZCU3l4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJReTlDTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExITkNRVUZ6UWl4WFFVRlhMRU5CUVVNc1RVRkJUU3hqUVVGakxFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOdVJ6dFJRVVZFTEU5QlFVOHNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU55UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4N0swSkJRMmRDTEVOQlFVTXNTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVONFJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWxCUVVrc2FVSkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3VjBGRGVFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2EwSkJRM2hETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRyUWtGREwwTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yVkJRM2hFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRoUVVOd1JDeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQxUWtGRGRrTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0M1FrRkRNVVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdFZRVU14UlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPM2xDUVVOc1JDeERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdHRRMEZEYkVRc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN2JVTkJRM1JGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRFpDUVVFMlFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF6ZEdMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzBWQlEzcEVMRU5CUVVNN1NVRkRReXhEUVVGRE96dEJRWEJTUkRzN1IwRkZSenRCUVVOdlFpeHJRa0ZCVFN4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVVM1F6czdSMEZGUnp0QlFVTnZRaXc0UWtGQmEwSXNSMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkZka1E3TzBkQlJVYzdRVUZEYjBJc2RVSkJRVmNzUjBGQlZ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMEZCUlhoR0xHVkJRV1U3UVVGRFV5eHZRa0ZCVVN4SFFVRm5RaXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGcVFteEdMR3REUVhOU1F5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJpdHMuXHJcbiAqL1xyXG5jbGFzcyBUcml0cyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJpdHMgPSB0cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gSW50OEFycmF5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlciBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXJBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHZhbHVlLCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0cnl0ZXNTdHJpbmcubGVuZ3RoICogMyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzU3RyaW5nLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzBdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDFdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMV07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMl0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh0cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIE51bWJlciB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBbXTtcclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZSAlIDM7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBNYXRoLmZsb29yKGFic29sdXRlVmFsdWUgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW3RyaXRzLmxlbmd0aF0gPSByZW1haW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbaV0gPSAtdHJpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHRyaXRzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0d28gdHJpdHMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IHRyaXQuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgdHJpdC5cclxuICAgICAqIEByZXR1cm5zIE5ldyB0cml0IHdoaWNoIGlzIHRoZSBhZGRpdGlvbiBvZiB0aGUgYSArIGIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGQoZmlyc3QsIHNlY29uZCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShmaXJzdCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgZmlyc3Qgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoc2Vjb25kLCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzZWNvbmRzIHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IEludDhBcnJheShNYXRoLm1heChmaXJzdC5fdHJpdHMubGVuZ3RoLCBzZWNvbmQuX3RyaXRzLmxlbmd0aCkpO1xyXG4gICAgICAgIGxldCBjYXJyeSA9IDA7XHJcbiAgICAgICAgbGV0IGlBO1xyXG4gICAgICAgIGxldCBpQjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpQSA9IGkgPCBmaXJzdC5fdHJpdHMubGVuZ3RoID8gZmlyc3QuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgaUIgPSBpIDwgc2Vjb25kLl90cml0cy5sZW5ndGggPyBzZWNvbmQuX3RyaXRzW2ldIDogMDtcclxuICAgICAgICAgICAgY29uc3QgZkEgPSBUcml0cy5mdWxsQWRkKGlBLCBpQiwgY2FycnkpO1xyXG4gICAgICAgICAgICBvdXRbaV0gPSBmQVswXTtcclxuICAgICAgICAgICAgY2FycnkgPSBmQVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheShvdXQpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgZnVsbEFkZChhLCBiLCBjKSB7XHJcbiAgICAgICAgY29uc3Qgc0EgPSBUcml0cy5zdW0oYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0EgPSBUcml0cy5jb25zKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNCID0gVHJpdHMuY29ucyhzQSwgYyk7XHJcbiAgICAgICAgY29uc3QgY091dCA9IFRyaXRzLmFueShjQSwgY0IpO1xyXG4gICAgICAgIGNvbnN0IHNPVXQgPSBUcml0cy5zdW0oc0EsIGMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KFtzT1V0LCBjT3V0XSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBzdW0oYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBzd2l0Y2ggKHMpIHtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIGNhc2UgLTI6IHJldHVybiAxO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBjb25zKGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBhbnkoYSwgYikge1xyXG4gICAgICAgIGNvbnN0IHMgPSBhICsgYjtcclxuICAgICAgICBpZiAocyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHMgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b0FycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkgYXMgYSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5fdHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIEluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHRyeXRlcyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90cml0cy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIHRyeXRlIHZhbHVlcyB0byBmaW5kIGNvcnJlY3QgdHJpdCByZXByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRyaXRzLlRSWVRFU19UUklUU1tqXVswXSA9PT0gdGhpcy5fdHJpdHNbaV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMV0gPT09IHRoaXMuX3RyaXRzW2kgKyAxXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsyXSA9PT0gdGhpcy5fdHJpdHNbaSArIDJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5dGVzICs9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5jaGFyQXQoaik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgYSBudW1iZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgY29udmVydGVkIHRvIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl90cml0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlICogMyArIHRoaXMuX3RyaXRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFdoYXQgaXMgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBMZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgc3ViIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHN0YXJ0ICsgbGVuZ3RoIG11c3QgPD0gJHt0aGlzLl90cml0cy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkodGhpcy5fdHJpdHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgbGVuZ3RoKSk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblRyaXRzLlRSWVRFU19UUklUUyA9IFtcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDAsIDBdKVxyXG5dO1xyXG5leHBvcnRzLlRyaXRzID0gVHJpdHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISnBkSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtbDBjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNRVZCUVhWRk8wRkJRM1pGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQmJVTkpMR1ZCUVdVN1NVRkRaaXhaUVVGdlFpeExRVUZuUWp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCWjBJN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTjRReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4M1EwRkJkME1zUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUTBRc1QwRkJUeXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhKUVVGSkxFTkJRVU1zZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VTBGRGFrVTdVVUZEUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1RVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTNSRExFMUJRVTBzUzBGQlN5eEhRVUZqTEVsQlFVa3NVMEZCVXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzWlVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRUxFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha1E3VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaE8xRkJRMnhETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUTBGQlF5eERRVUZETzFOQlEzUkVPMUZCUTBRc1RVRkJUU3hMUVVGTExFZEJRV0VzUlVGQlJTeERRVUZETzFGQlF6TkNMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZGTDBNc1QwRkJUeXhoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlEzUkNMRWxCUVVrc1UwRkJVeXhIUVVGSExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEYkVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSVGxETEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFppeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMllzWVVGQllTeEZRVUZGTEVOQlFVTTdZVUZEYmtJN1dVRkZSQ3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVOdVF6dFJRVU5FTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOWUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMmRDUVVOdVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEZUVJN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFWa3NSVUZCUlN4TlFVRmhPMUZCUTNwRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY0VNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU51UlR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTkVOQlFUUkRMRU5CUVVNc1EwRkJRenRUUVVOeVJUdFJRVVZFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlGTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOa0xFbEJRVWtzUlVGQlJTeERRVUZETzFGQlExQXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkZVQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVVnFReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtRc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU40UXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnFRanRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOb1F5eERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTJ4RUxFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF5OUNMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVGxDTEU5QlFVOHNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk03VVVGRGJrTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZvUWl4UlFVRlJMRU5CUVVNc1JVRkJSVHRaUVVOUUxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRGNrSTdTVUZEVEN4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRjRU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTFRc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRFdqdFJRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVZNc1JVRkJSU3hEUVVGVE8xRkJRMjVETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRmFFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRMUFzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZEV2p0aFFVRk5MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRZanRSUVVWRUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEU5QlFVODdVVUZEVml4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGRGRrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEdGQlFXRTdVVUZEYUVJc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOdVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEVsQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWb1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUXl3MlJVRkJOa1U3V1VGRE4wVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdWQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTTNReXhKUVVGSkxFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRek5ETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTXZReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU5xUkN4TlFVRk5MRWxCUVVrc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM0JETEUxQlFVMDdhVUpCUTFRN1lVRkRTanRUUVVOS08xRkJSVVFzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZET1VNc1YwRkJWeXhIUVVGSExGZEJRVmNzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRTlCUVU4c1YwRkJWeXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU01UWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZGTEUxQlFXTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFRRVU14UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU14UlN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRRa0ZCT0VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUXpORk8xRkJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU55UlN4RFFVRkRPenRCUVhaUlJDeGxRVUZsTzBGQlExTXNhMEpCUVZrc1IwRkJaMEk3U1VGRGFFUXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZUVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXpRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6RkNMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE1VSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UTBGRE5VSXNRMEZCUXp0QlFUbENUaXh6UWtFd1VVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRlJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6ZENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMU5CUXk5Q08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTJoRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRFpDUVVFMlFpeEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOcVJUdFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlF6bENMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYWtJN1dVRkZSQ3hOUVVGTkxFZEJRVWNzWVVGQlN5eERRVUZETEdWQlFXVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0VFFVTXZSRHRSUVVWRUxFOUJRVThzU1VGQlNTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1NVRkRia01zUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTnlReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3eVEwRkJNa01zUTBGQlF5eERRVUZETzFOQlEzQkZPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVVZFTEVsQlFVa3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVU3V1VGRE4wSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRha2M3VVVGRlJDeFBRVUZQTEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xbEJRMmhETEZkQlFWY3NTVUZCU1N4SFFVRkhMRU5CUVVNN1UwRkRkRUk3VVVGRlJDeFBRVUZQTEVsQlFVa3NWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzWVVGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM2hGTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8wbEJRM2hDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFBRVUZQTzFGQlExWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE0wSXNRMEZCUXpzN1FVRXhSMFE3TzBkQlJVYzdRVUZEYjBJc2IwSkJRVkVzUjBGQlZ5eERRVUZETEVOQlFVTTdRVUZETlVNN08wZEJSVWM3UVVGRGIwSXNiVUpCUVU4c1IwRkJaMElzVjBGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlVteEhMR3REUVRSSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJ5dGVzLlxyXG4gKi9cclxuY2xhc3MgVHJ5dGVzIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGVzIGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gY3JlYXRlIHRoZSB0cnl0ZXMgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVHJ5dGVzLmlzVmFsaWQodmFsdWUsIGxlbmd0aCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBhbmQgbGVuZ3RoIGRvIG5vdCBjb250YWluIHZhbGlkIHRyeXRlc1wiLCB7IHZhbHVlLCBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJ5dGVzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgdmFsdWUgY29udGFpbiB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgdG8gdmFsaWRhdGUgYXMgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBBbiBvcHRpb25hbCB2YWxpZGF0aW9uIGxlbmd0aCBmb3IgdGhlIHRyeXRlcywgMCBtZWFucyBpZ25vcmUgbGVuZ3RoLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgaW5wdXQgd2FzIHZhbGlkIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVmFsaWQodmFsdWUsIGxlbmd0aCA9IDApIHtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYF5bOUEtWl17JHtsZW5ndGggPyBsZW5ndGggOiBcIjAsXCJ9fSRgKS50ZXN0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlcyB0byBhIHN0cmluZy5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxlbmd0aCBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBzdWIuXHJcbiAgICAgKi9cclxuICAgIHN1YihzdGFydCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHN0YXJ0KSB8fCBzdGFydCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzdGFydCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IChzdGFydCArIGxlbmd0aCkgPiB0aGlzLl90cnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJ5dGVzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcy5zdWJzdHIoc3RhcnQsIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBbGwgdGhlIGNoYXJhY3RlcnMgdGhhdCBjYW4gYmUgdXNlZCBpbiB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZXMuQUxQSEFCRVQgPSBcIjlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xyXG5leHBvcnRzLlRyeXRlcyA9IFRyeXRlcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2ZEhKNWRHVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUTNwRkxHdEVRVUVyUXp0QlFVVXZRenM3UjBGRlJ6dEJRVU5JTzBsQlUwa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETDBJc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUTBGQlF6dFRRVU12UkR0UlFVTkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsQ1FVRjVRaXhEUVVGRExFTkJRVU03VTBGRGJFUTdVVUZEUkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2EwUkJRV3RFTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU01Ump0UlFVTkVMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRMMElzVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEYUVJN1lVRkJUVHRaUVVOSUxFOUJRVThzU1VGQlNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEZUVVN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NSMEZCUnl4RFFVRkRMRXRCUVdFc1JVRkJSU3hOUVVGak8xRkJRM0JETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemRETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHbERRVUZwUXl4RFFVRkRMRU5CUVVNN1UwRkRNVVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRNMFVzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU0xUlR0UlFVTkVMRTlCUVU4c1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTnFSU3hEUVVGRE96dEJRVFZGUkRzN1IwRkZSenRCUVVOWExHVkJRVkVzUjBGQlZ5dzJRa0ZCTmtJc1EwRkJRenRCUVVwdVJTeDNRa0U0UlVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgZGF0YSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIERhdGFFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBEYXRhRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiRGF0YVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YUVycm9yID0gRGF0YUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR0YwWVVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJSaGRHRkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYjBWQlFXbEZPMEZCUldwRk96dEhRVVZITzBGQlEwZ3NaVUZCZFVJc1UwRkJVU3h4UWtGQlV6dEpRVU53UXpzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1QwRkJaU3hGUVVGRkxGVkJRV3RETEVWQlFVVXNWVUZCYTBJN1VVRkRMMFVzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0RFFVTktPMEZCV0VRc09FSkJWME1pZlE9PSIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wcm9vZk9mV29ya0pzXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzY1VOQlFXZERJbjA9IiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzcG9uZ2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyaXRzXCIpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW1wb3J0LW5hbWVcclxuY29uc3QgYmlnX2ludGVnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xyXG4vKipcclxuICogUGVhcmxEaXZlciBpbXBsZW1lbnRhdGlvbiBpbiBwbGFpbiBKYXZhU2NyaXB0LlxyXG4gKi9cclxuY2xhc3MgUGVhcmxEaXZlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQZWFybERpdmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIHRoaXMuX2hhc2hMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGVMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiU1RBVEVfTEVOR1RIXCIpO1xyXG4gICAgICAgIHRoaXMuX251bWJlclJvdW5kcyA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJOVU1CRVJfT0ZfUk9VTkRTXCIpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAqIDMzO1xyXG4gICAgICAgIHRoaXMuX25vbmNlTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VTdGFydCA9IHRoaXMuX2hhc2hMZW5ndGggLSB0aGlzLl9ub25jZUxlbmd0aDtcclxuICAgICAgICBjb25zdCBPRkZTRVRfTEVOR1RIID0gNDtcclxuICAgICAgICB0aGlzLl9ub25jZUluaXRTdGFydCA9IHRoaXMuX25vbmNlU3RhcnQgKyBPRkZTRVRfTEVOR1RIO1xyXG4gICAgICAgIGNvbnN0IElOVF9MRU5HVEggPSB0aGlzLl9ub25jZUxlbmd0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VJbmNyZW1lbnRTdGFydCA9IHRoaXMuX25vbmNlSW5pdFN0YXJ0ICsgSU5UX0xFTkdUSDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cmxTdGF0ZSA9IHRoaXMucHJlcGFyZSh0cnl0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFN0YXRlcyA9IHRoaXMuc2VhcmNoSW5pdChjdXJsU3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2goc2VhcmNoU3RhdGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBsZXQgc2VhcmNoaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbWlkU3RhdGVDb3B5ID0ge1xyXG4gICAgICAgICAgICBsb3c6IHNlYXJjaFN0YXRlcy5sb3cuc2xpY2UoKSxcclxuICAgICAgICAgICAgaGlnaDogc2VhcmNoU3RhdGVzLmhpZ2guc2xpY2UoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKHNlYXJjaGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudChtaWRTdGF0ZUNvcHksIHRoaXMuX25vbmNlSW5jcmVtZW50U3RhcnQsIHRoaXMuX2hhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGxvdzogbWlkU3RhdGVDb3B5Lmxvdy5zbGljZSgpLFxyXG4gICAgICAgICAgICAgICAgaGlnaDogbWlkU3RhdGVDb3B5LmhpZ2guc2xpY2UoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlUHJvYmUgPSB0aGlzLmlzRm91bmRGYXN0KHN0YXRlLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICBpZiAobm9uY2VQcm9iZS50b0pTTnVtYmVyKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBub25jZU91dHB1dCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgxKTtcclxuICAgICAgICAgICAgLy8gQml0IHNjYW4gZm9yd2FyZFxyXG4gICAgICAgICAgICB3aGlsZSAobm9uY2VPdXRwdXQuYW5kKG5vbmNlUHJvYmUpLnRvSlNOdW1iZXIoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9uY2VPdXRwdXQgPSBub25jZU91dHB1dC5zaGlmdExlZnQoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faGFzaExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tpXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKG1pZFN0YXRlQ29weS5sb3dbaV0uYW5kKG5vbmNlT3V0cHV0KSkudG9KU051bWJlcigpID09PSAwID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1pZFN0YXRlQ29weS5oaWdoW2ldLmFuZChub25jZU91dHB1dCkudG9KU051bWJlcigpID09PSAwID8gLTEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21BcnJheSh0cml0cykudG9Ucnl0ZXMoKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzZWFyY2hTdGF0ZXMpIHtcclxuICAgICAgICBsZXQgY3VybFNjcmF0Y2hwYWRJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcm91bmQgPSAwOyByb3VuZCA8IHRoaXMuX251bWJlclJvdW5kczsgcm91bmQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJsU2NyYXRjaHBhZCA9IHtcclxuICAgICAgICAgICAgICAgIGxvdzogc2VhcmNoU3RhdGVzLmxvdy5zbGljZSgpLFxyXG4gICAgICAgICAgICAgICAgaGlnaDogc2VhcmNoU3RhdGVzLmhpZ2guc2xpY2UoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdGF0ZUluZGV4ID0gMDsgc3RhdGVJbmRleCA8IHRoaXMuX3N0YXRlTGVuZ3RoOyBzdGF0ZUluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gY3VybFNjcmF0Y2hwYWQubG93W2N1cmxTY3JhdGNocGFkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmV0YSA9IGN1cmxTY3JhdGNocGFkLmhpZ2hbY3VybFNjcmF0Y2hwYWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VybFNjcmF0Y2hwYWRJbmRleCA8IDM2NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cmxTY3JhdGNocGFkSW5kZXggKz0gMzY0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VybFNjcmF0Y2hwYWRJbmRleCArPSAtMzY1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtbWEgPSBjdXJsU2NyYXRjaHBhZC5oaWdoW2N1cmxTY3JhdGNocGFkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG93WG9yQmV0YSA9IGN1cmxTY3JhdGNocGFkLmxvd1tjdXJsU2NyYXRjaHBhZEluZGV4XS54b3IoYmV0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RHYW1tYSA9IGdhbW1hLm5vdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGFPck5vdEdhbW1hID0gYWxwaGEub3Iobm90R2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBhbHBoYU9yTm90R2FtbWEuYW5kKGxvd1hvckJldGEpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmxvd1tzdGF0ZUluZGV4XSA9IGRlbHRhLm5vdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGFYb3JHYW1tYSA9IGFscGhhLnhvcihnYW1tYSk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMuaGlnaFtzdGF0ZUluZGV4XSA9IGFscGhhWG9yR2FtbWEub3IoZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5jcmVtZW50KHNlYXJjaFN0YXRlcywgZnJvbUluZGV4LCB0b0luZGV4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZyb21JbmRleDsgaSA8IHRvSW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RhdGVzLmxvd1tpXS50b0pTTnVtYmVyKCkgPT09IFBlYXJsRGl2ZXIuTE9XX0JJVFMpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFN0YXRlcy5sb3dbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmhpZ2hbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5MT1dfQklUUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoU3RhdGVzLmhpZ2hbaV0udG9KU051bWJlcigpID09PSBQZWFybERpdmVyLkxPV19CSVRTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmhpZ2hbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmxvd1tpXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkxPV19CSVRTKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlcGFyZSh0cmFuc2FjdGlvblRyeXRlcykge1xyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvblRyeXRlcykudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY3VybFN0YXRlID0gY3VybC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uVHJpdHNcclxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3VybFN0YXRlW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdXJsU3RhdGU7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hJbml0KGN1cmxTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IHtcclxuICAgICAgICAgICAgbG93OiBbXSxcclxuICAgICAgICAgICAgaGlnaDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGN1cmxTdGF0ZS5mb3JFYWNoKCh0cml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRyaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuSElHSF9CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkxPV19CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuTE9XX0JJVFMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPZmZzZXQoc3RhdGVzLCB0aGlzLl9ub25jZVN0YXJ0KTtcclxuICAgICAgICByZXR1cm4gc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoT2Zmc2V0KHN0YXRlcywgb2Zmc2V0KSB7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAwXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0yNjM1MjQ5MTUzMzg3MDc4ODAzXCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAwXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi01MjcwNDk4MzA2Nzc0MTU3NjA1XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDFdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTEwMTA3ODA0OTcxODk1NjQ0NzNcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDFdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTgwODYyNDM5Nzc1MTY1MTU3NzdcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5sb3dbb2Zmc2V0ICsgMl0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCI5MjIzMzM2OTIxMjAxOTAyMDc5XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAyXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0xNzk3OTIxNDI3MTM0ODczN1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAzXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0xODAxNDM5ODM3NTI2NDI1N1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgM10gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCIxODAxNDM5ODUwOTQ4MTk4M1wiLCAxMCk7XHJcbiAgICB9XHJcbiAgICBpc0ZvdW5kRmFzdChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGxldCBsYXN0TWVhc3VyZW1lbnQgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBtaW5XZWlnaHRNYWduaXR1ZGUgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb3cgPSBzZWFyY2hTdGF0ZXMubG93W3RoaXMuX2hhc2hMZW5ndGggLSAxIC0gaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBzZWFyY2hTdGF0ZXMuaGlnaFt0aGlzLl9oYXNoTGVuZ3RoIC0gMSAtIGldO1xyXG4gICAgICAgICAgICBjb25zdCBsb3dYb3JIaWdoID0gbG93LnhvcihoaWdoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90TG93WG9ySGlnaCA9IGxvd1hvckhpZ2gubm90KCk7XHJcbiAgICAgICAgICAgIGxhc3RNZWFzdXJlbWVudCA9IGxhc3RNZWFzdXJlbWVudC5hbmQobm90TG93WG9ySGlnaCk7XHJcbiAgICAgICAgICAgIGlmIChsYXN0TWVhc3VyZW1lbnQudG9KU051bWJlcigpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFzdE1lYXN1cmVtZW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfQklUUyA9IC0xO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfQklUUyA9IDA7XHJcbmV4cG9ydHMuUGVhcmxEaXZlciA9IFBlYXJsRGl2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHVmhjbXhFYVhabGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d1pXRnliRVJwZG1WeUwzQmxZWEpzUkdsMlpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMR3RHUVVFclJUdEJRVU12UlN3eVJFRkJkMFE3UVVGRmVFUXNkVU5CUVhWRE8wRkJRM1pETERoRVFVRnBRenRCUVVkcVF6czdSMEZGUnp0QlFVTklPMGxCZFVKSk96dFBRVVZITzBsQlEwZzdVVUZEU1N4TlFVRk5MRWxCUVVrc1IwRkJSeXcyUWtGQllTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1VVRkRia1FzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzFGQlEzSkVMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzFGQlF6RkVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU5vUkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTNwRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzFGQlEzaEVMRTFCUVUwc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NZVUZCWVN4RFFVRkRPMUZCUTNoRUxFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVOc1JTeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4blFrRkJaMElzUTBGQlF5eE5RVUZqTEVWQlFVVXNhMEpCUVRCQ08xRkJRemxFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGZGtNc1RVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVWb1JDeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZQTEUxQlFVMHNRMEZCUXl4WlFVRnZReXhGUVVGRkxHdENRVUV3UWp0UlFVTXpSU3hKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZGY2tJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSVGxETEUxQlFVMHNXVUZCV1N4SFFVRXlRanRaUVVONlF5eEhRVUZITEVWQlFVVXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRE4wSXNTVUZCU1N4RlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFOQlEyeERMRU5CUVVNN1VVRkZSaXhQUVVGUExGTkJRVk1zUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZGTVVVc1RVRkJUU3hMUVVGTExFZEJRVEpDTzJkQ1FVTnNReXhIUVVGSExFVkJRVVVzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVN1owSkJRemRDTEVsQlFVa3NSVUZCUlN4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdGhRVU5zUXl4RFFVRkRPMWxCUlVZc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVVjBRaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUlM5RUxFbEJRVWtzVlVGQlZTeERRVUZETEZWQlFWVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGREwwSXNVMEZCVXp0aFFVTmFPMWxCUlVRc1NVRkJTU3hYUVVGWExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVVMVFpeHRRa0ZCYlVJN1dVRkRia0lzVDBGQlR5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRia1FzVjBGQlZ5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VTTdXVUZGUkN4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJSV3hDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU4yUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU5LTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJRM3BFTEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETDBVN1UwRkRTanRSUVVWRUxFOUJRVThzWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU0zUXl4RFFVRkRPMGxCUlU4c1UwRkJVeXhEUVVGRExGbEJRVzlETzFGQlEyeEVMRWxCUVVrc2JVSkJRVzFDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFdEJRVXNzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMWxCUTNKRUxFMUJRVTBzWTBGQll5eEhRVUV5UWp0blFrRkRNME1zUjBGQlJ5eEZRVUZGTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU0zUWl4SlFVRkpMRVZCUVVVc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdZVUZEYkVNc1EwRkJRenRaUVVWR0xFdEJRVXNzU1VGQlNTeFZRVUZWTEVkQlFVY3NRMEZCUXl4RlFVRkZMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RlFVRkZPMmRDUVVOdVJTeE5RVUZOTEV0QlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1owSkJRM1JFTEUxQlFVMHNTVUZCU1N4SFFVRkhMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRuUWtGRGRFUXNTVUZCU1N4dFFrRkJiVUlzUjBGQlJ5eEhRVUZITEVWQlFVVTdiMEpCUXpOQ0xHMUNRVUZ0UWl4SlFVRkpMRWRCUVVjc1EwRkJRenRwUWtGRE9VSTdjVUpCUVUwN2IwSkJRMGdzYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03YVVKQlF5OUNPMmRDUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0blFrRkRka1FzVFVGQlRTeFZRVUZWTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEY2tVc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVNM1FpeE5RVUZOTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTXpReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8yZENRVVU1UXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRE0wTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRka01zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhoUVVGaExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUXpORU8xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVOHNVMEZCVXl4RFFVRkRMRmxCUVc5RExFVkJRVVVzVTBGQmFVSXNSVUZCUlN4UFFVRmxPMUZCUTNSR0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NVMEZCVXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEZEVNc1NVRkJTU3haUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVTdaMEpCUXpGRUxGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMjVFTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WVVGRGRFUTdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVN2IwSkJRek5FTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YVVKQlEzWkVPM0ZDUVVGTk8yOUNRVU5JTEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03YVVKQlEzSkVPMmRDUVVORUxFMUJRVTA3WVVGRFZEdFRRVU5LTzBsQlEwd3NRMEZCUXp0SlFVVlBMRTlCUVU4c1EwRkJReXhwUWtGQmVVSTdVVUZEY2tNc1RVRkJUU3hKUVVGSkxFZEJRVWNzTmtKQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlEyeENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRM1pGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRE4wVXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEyeERMR2RDUVVGblFqdGhRVU5ZTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1lVRkRNVVVzVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCWVN4RlFVRkZMRXRCUVdFc1JVRkJSU3hGUVVGRk8xbEJRM1JETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE4wSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRVQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCUlU4c1ZVRkJWU3hEUVVGRExGTkJRVzlDTzFGQlEyNURMRTFCUVUwc1RVRkJUU3hIUVVFeVFqdFpRVU51UXl4SFFVRkhMRVZCUVVVc1JVRkJSVHRaUVVOUUxFbEJRVWtzUlVGQlJTeEZRVUZGTzFOQlExZ3NRMEZCUXp0UlFVTkdMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZaTEVWQlFVVXNTMEZCWVN4RlFVRkZMRVZCUVVVN1dVRkRPVU1zVVVGQlVTeEpRVUZKTEVWQlFVVTdaMEpCUTFZc1MwRkJTeXhEUVVGRE8yOUNRVU5HTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YjBKQlEycEVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NjVUpCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUTJ4RUxFMUJRVTA3WjBKQlExWXNTMEZCU3l4RFFVRkRPMjlDUVVOR0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRMmhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YjBKQlEyeEVMRTFCUVUwN1owSkJRMVk3YjBKQlEwa3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHZRa0ZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTjRSRHRSUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUlRWRExFOUJRVThzVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZUeXhaUVVGWkxFTkJRVU1zVFVGQk9FSXNSVUZCUlN4TlFVRmpPMUZCUXk5RUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExIRkNRVUZOTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETlVRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU0zUkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRelZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROMFFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTXpSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEc5Q1FVRnZRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6TkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMSEZDUVVGTkxFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE1VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVUwc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBsQlJVOHNWMEZCVnl4RFFVRkRMRmxCUVc5RExFVkJRVVVzYTBKQlFUQkNPMUZCUTJoR0xFbEJRVWtzWlVGQlpTeEhRVUZITEhGQ1FVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlEyNUVMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzYTBKQlFXdENMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMlJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM3BFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTNaRExHVkJRV1VzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xbEJRM0pFTEVsQlFVa3NaVUZCWlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdG5Ra0ZEY0VNc1RVRkJUVHRoUVVOVU8xTkJRMG83VVVGRFJDeFBRVUZQTEdWQlFXVXNRMEZCUXp0SlFVTXpRaXhEUVVGRE96dEJRVGxOUkN4bFFVRmxPMEZCUTFNc2IwSkJRVk1zUjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTXZReXhsUVVGbE8wRkJRMU1zYlVKQlFWRXNSMEZCVnl4RFFVRkRMRU5CUVVNN1FVRktha1FzWjBOQlowNURJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgcHJvb2ZPZldvcmtCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jcnlwdG8vZGlzdC9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2VcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJ5dGVzXCIpO1xyXG5jb25zdCBwZWFybERpdmVyXzEgPSByZXF1aXJlKFwiLi9wZWFybERpdmVyL3BlYXJsRGl2ZXJcIik7XHJcbi8qKlxyXG4gKiBQcm9vZk9mV29yayBpbXBsZW1lbnRhdGlvbiB1c2luZyBKYXZhU2NyaXB0LlxyXG4gKi9cclxuY2xhc3MgUHJvb2ZPZldvcmtKcyBleHRlbmRzIHByb29mT2ZXb3JrQmFzZV8xLlByb29mT2ZXb3JrQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIodGltZVNlcnZpY2UpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiBhIHNpbmdsZSBpdGVtLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIHRvIHBlcmZvcm0gdGhlIHBvdyBvbi5cclxuICAgICAqIEBwYXJhbSBtaW5XZWlnaHRNYWduaXR1ZGUgVGhlIG1pbmltdW0gd2VpZ2h0IG1hZ25pdHVkZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgcHJvZHVjZWQgYnkgdGhlIHByb29mIG9mIHdvcmsuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNpbmdsZVBvdyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ5dGVzIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgVHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBtaW5XZWlnaHRNYWduaXR1ZGUgbXVzdCBiZSA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5vbmNlID0gbmV3IHBlYXJsRGl2ZXJfMS5QZWFybERpdmVyKCkuc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgY29uc3Qgbm9uY2VTdHJpbmcgPSBub25jZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyeXRlc1N0cmluZyA9IHRyeXRlcy50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXNTdHJpbmcuc3Vic3RyKDAsIHRyeXRlc1N0cmluZy5sZW5ndGggLSBub25jZVN0cmluZy5sZW5ndGgpICsgbm9uY2VTdHJpbmcpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtKcyA9IFByb29mT2ZXb3JrSnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNISnZiMlpQWmxkdmNtdEtjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5d2NtOXZaazltVjI5eWEwcHpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzTkVWQlFYbEZPMEZCUlhwRkxEQkZRVUYxUlR0QlFVTjJSU3gzUmtGQmNVWTdRVUZEY2tZc05rUkJRVEJFTzBGQlF6RkVMSGRFUVVGeFJEdEJRVVZ5UkRzN1IwRkZSenRCUVVOSUxHMUNRVUV5UWl4VFFVRlJMR2xEUVVGbE8wbEJRemxET3pzN1QwRkhSenRKUVVOSUxGbEJRVmtzVjBGQk1FSTdVVUZEYkVNc1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCWXl4RlFVRkZMR3RDUVVFd1FqdFJRVU0zUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2IwTkJRVzlETEVOQlFVTXNRMEZCUXp0VFFVTXZSRHRSUVVORUxFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NkVUpCUVZVc1JVRkJSU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUXpWRkxFMUJRVTBzVjBGQlZ5eEhRVUZYTEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVNM1F5eE5RVUZOTEZsQlFWa3NSMEZCVnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGREwwTXNUMEZCVHl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmxCUVZrc1EwRkJReXhOUVVGTkxFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRemRITEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3h6UTBFeVFrTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmlnX2ludGVnZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9