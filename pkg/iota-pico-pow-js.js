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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreError).call(this, message));
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
     * @returns Formatted version of the error.
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
     * @param typeConstructor A callback method which returns an instance of the object.
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CryptoError).call(this, message, additional, innerError));
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

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    return _possibleConstructorReturn(this, _getPrototypeOf(SpongeFactory).call(this));
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

          return _construct(curl_1.Curl, args);
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

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

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
     * @returns Big integer version of trits.
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
     * @returns Big integer version of bytes.
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


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

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
   * @returns Promise.
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
   * @param name The name of the constant to get.
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
   * @param name The name of the constant to get.
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

/***/ "../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!********************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \********************************************************************************************************************************/
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

module.exports = __webpack_require__(/*! ./runtime */ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

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

/***/ "../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*************************************************************************************************************************!*\
  !*** ../crypto/node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*************************************************************************************************************************/
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataError).call(this, message, additional, innerError));
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

var trits_1 = __webpack_require__(/*! @iota-pico/data/dist/data/trits */ "../data/dist/data/trits.js");

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


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    return _possibleConstructorReturn(this, _getPrototypeOf(ProofOfWorkJs).call(this, timeService));
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

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
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

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvc2VydmljZXMvdGltZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGlnZXN0cy9zaGEzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2Vycm9yL2NyeXB0b0Vycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvc3Bvbmdlcy9rZXJsLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vY3J5cHRvL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS9hZGRyZXNzLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2RhdGEvaGFzaC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL3NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vLi4vc3JjL2RhdGEvdHJpdHMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9kYXRhL3RyeXRlcy50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4uLy4uL3NyYy9lcnJvci9kYXRhRXJyb3IudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uLi8uLi9zcmMvcGVhcmxEaXZlci9wZWFybERpdmVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi4vc3JjL3Byb29mT2ZXb3JrSnMudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29Qb3dKcy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL0BiYWJlbC9ydW50aW1lLzcuMC4wLWJldGEuNDkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL0lvdGFQaWNvUG93SnMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9yZWdlbmVyYXRvci1ydW50aW1lLzAuMTEuMS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcmVnZW5lcmF0b3ItcnVudGltZS8wLjExLjEvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1Bvd0pzL2V4dGVybmFsIHtcImFtZFwiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanMyXCI6XCJiaWctaW50ZWdlclwiLFwicm9vdFwiOlwiYmlnSW50XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTtBQUVBOzs7OztJQUdBLFM7Ozs7O0FBZ0JJOzs7Ozs7QUFNQSxxQkFBWSxPQUFaLEVBQTZCLFVBQTdCLEVBQWlFLFVBQWpFLEVBQW1GO0FBQUE7O0FBQUE7O0FBQy9FLG1GQUFNLE9BQU47QUFDQSxVQUFLLFVBQUwsR0FBa0IsYUFBYSxVQUFiLEdBQTBCLEVBQTVDO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsTUFBZDtBQUorRTtBQUtsRjtBQUVEOzs7Ozs7Ozs7O0FBU0E7Ozs7NkJBSWE7QUFBQTs7QUFDVCxVQUFJLE1BQU0sRUFBVjs7QUFFQSxVQUFJLENBQUMsNEJBQWEsT0FBYixDQUFxQixLQUFLLE1BQTFCLENBQUwsRUFBd0M7QUFDcEMseUJBQVUsS0FBSyxNQUFmO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLDRCQUFhLE9BQWIsQ0FBcUIsS0FBSyxPQUExQixDQUFMLEVBQXlDO0FBQ3JDLHlCQUFVLEtBQUssT0FBZjtBQUNIOztBQUVELFVBQU0sT0FBTyxPQUFPLElBQVAsQ0FBWSxLQUFLLFVBQWpCLENBQWI7O0FBQ0EsVUFBSSxLQUFLLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNqQixZQUFJLElBQUksTUFBSixHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLGlCQUFPLElBQVA7QUFDSDs7QUFDRCxhQUFLLE9BQUwsQ0FBYSxlQUFNO0FBQ2YsNkJBQVksR0FBWixlQUFvQix3QkFBVyxTQUFYLENBQXFCLE9BQUssVUFBTCxDQUFnQixHQUFoQixDQUFyQixDQUFwQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFPLEdBQVA7QUFDSDs7OzRCQTdCcUIsRyxFQUFRO0FBQzFCLGFBQU8sUUFBUSxTQUFSLElBQXFCLFFBQVEsSUFBN0IsSUFBcUMsUUFBTyxHQUFQLE1BQWUsUUFBcEQsSUFBZ0UsYUFBYSxHQUE3RSxJQUFvRixnQkFBZ0IsR0FBM0c7QUFDSDs7OztxQkFwQzBCLEs7O0FBQS9CLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7OztJQUlBLFc7OztBQUFBO0FBQUE7O0FBQ0k7QUFDaUIsa0JBQW9ELEVBQXBEO0FBc0RwQjtBQXBERzs7Ozs7Ozs7OzZCQUtnQixJLEVBQWMsZSxFQUFzQztBQUNoRSxXQUFLLFdBQUwsR0FBbUIsTUFBbkIsQ0FBMEIsSUFBMUIsSUFBa0MsZUFBbEM7QUFDSDtBQUVEOzs7Ozs7OytCQUlrQixJLEVBQVk7QUFDMUIsYUFBTyxLQUFLLFdBQUwsR0FBbUIsTUFBbkIsQ0FBMEIsSUFBMUIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzJCQUtjLEksRUFBWTtBQUN0QixhQUFPLEtBQUssV0FBTCxHQUFtQixNQUFuQixDQUEwQixJQUExQixNQUFvQyxTQUEzQztBQUNIO0FBRUQ7Ozs7Ozs7OzRCQUtZO0FBQ1IsYUFBTyxPQUFPLElBQVAsQ0FBWSxLQUFLLFdBQUwsR0FBbUIsTUFBL0IsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OzsyQkFNYyxJLEVBQTRCO0FBQ3RDLFVBQU0sV0FBVyxLQUFLLFdBQUwsRUFBakI7O0FBQ0EsVUFBSSxTQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBSixFQUEyQjtBQUFBOztBQUFBLDBDQUZBLElBRUE7QUFGQSxjQUVBO0FBQUE7O0FBQ3ZCLGVBQU8sNkJBQVMsTUFBVCxFQUFnQixJQUFoQiwwQkFBeUIsSUFBekIsQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sU0FBUDtBQUNIO0FBQ0o7Ozs7OztBQXBETCxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTs7Ozs7SUFHQSxXOzs7Ozs7Ozs7O0FBQ0k7Ozs7OzRCQUtzQixLLEVBQVU7QUFDNUIsYUFBTyxVQUFVLElBQVYsSUFBa0IsVUFBVSxTQUE1QixHQUNELEtBREMsR0FDTyxNQUFNLE9BQU4sQ0FBYyxLQUFkLENBRGQ7QUFFSDtBQUVEOzs7Ozs7Ozs0QkFLc0IsSyxFQUFVO0FBQzVCLGFBQU8sQ0FBQyxZQUFZLE9BQVosQ0FBb0IsS0FBcEIsQ0FBRCxJQUErQixNQUFNLE1BQU4sS0FBaUIsQ0FBdkQ7QUFDSDtBQUVEOzs7Ozs7Ozs7NEJBTXNCLEssRUFBWSxJLEVBQWM7QUFDNUMsYUFBTyxDQUFDLFlBQVksT0FBWixDQUFvQixLQUFwQixDQUFELElBQ0gsQ0FBQyxNQUFNLFFBQU4sQ0FBZSxTQUFmLENBREUsSUFFSCxDQUFDLE1BQU0sUUFBTixDQUFlLElBQWYsQ0FGRSxJQUdILE1BQU0sS0FBTixDQUFZLFVBQUMsQ0FBRDtBQUFBLGVBQVksNEJBQWEsTUFBYixDQUFvQixDQUFwQixFQUF1QixJQUF2QixDQUFaO0FBQUEsT0FBWixDQUhKO0FBSUg7Ozs7OztBQS9CTCxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0lBR0EsVTs7Ozs7Ozs7OztBQUNJOzs7Ozs7OzhCQU93QixLLEVBQVksUSxFQUE2QyxLLEVBQXVCO0FBQ3BHO0FBQ0EsVUFBTSxRQUFlLEVBQXJCOztBQUVBLFVBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLEdBQUQsRUFBYyxZQUFkLEVBQW1DO0FBQ3hELFlBQUksUUFBTyxZQUFQLE1BQXdCLFFBQXhCLElBQW9DLFVBQVUsSUFBOUMsSUFBc0QsaUJBQWlCLFNBQTNFLEVBQXNGO0FBQ2xGLGNBQUksTUFBTSxPQUFOLENBQWMsWUFBZCxNQUFnQyxDQUFDLENBQXJDLEVBQXdDO0FBQ3BDO0FBQ0E7QUFDSCxXQUhELE1BR087QUFDSCxrQkFBTSxJQUFOLENBQVcsWUFBWDtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxXQUFXLFNBQVMsR0FBVCxFQUFjLFlBQWQsQ0FBWCxHQUF5QyxZQUFoRDtBQUNILE9BWEQ7O0FBYUEsYUFBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLGdCQUF0QixFQUF3QyxLQUF4QyxDQUFQO0FBQ0g7Ozs7OztBQTFCTCxnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztJQUdBLFk7Ozs7Ozs7Ozs7QUFDSTs7Ozs7OEJBS3dCLEssRUFBVTtBQUM5QixhQUFPLE9BQU8sU0FBUCxDQUFpQixLQUFqQixLQUEyQixDQUFDLE9BQU8sS0FBUCxDQUFhLEtBQWIsQ0FBNUIsSUFBbUQsT0FBTyxRQUFQLENBQWdCLEtBQWhCLENBQTFEO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLEssRUFBVTtBQUM3QixhQUFPLFVBQVUsU0FBVixJQUF1QixVQUFVLElBQWpDLElBQXlDLE9BQU8sS0FBUCxLQUFpQixRQUExRCxJQUFzRSxDQUFDLE9BQU8sS0FBUCxDQUFhLEtBQWIsQ0FBdkUsSUFBOEYsT0FBTyxRQUFQLENBQWdCLEtBQWhCLENBQXJHO0FBQ0g7QUFFRDs7Ozs7Ozs7a0NBSzRCLEssRUFBYTtBQUNyQyxhQUFPLGdCQUFnQixJQUFoQixDQUFxQixLQUFyQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7b0NBSzhCLEssRUFBYTtBQUN2QyxhQUFPLFVBQVUsSUFBVixDQUFlLEtBQWYsQ0FBUDtBQUNIOzs7Ozs7QUFuQ0wsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztJQUdBLFk7Ozs7Ozs7Ozs7QUFDSTs7Ozs7NEJBS3NCLEssRUFBVTtBQUM1QixhQUFPLFVBQVUsSUFBVixJQUFrQixVQUFVLFNBQW5DO0FBQ0g7QUFFRDs7Ozs7Ozs7NkJBS3VCLEssRUFBVTtBQUM3QixhQUFPLFVBQVUsSUFBVixJQUFrQixVQUFVLFNBQTVCLEdBQ0QsS0FEQyxHQUNPLFFBQU8sS0FBUCxNQUFrQixRQUFsQixJQUE4QixDQUFDLE1BQU0sT0FBTixDQUFjLEtBQWQsQ0FEN0M7QUFFSDtBQUVEOzs7Ozs7Ozs7MkJBTXFCLEssRUFBWSxlLEVBQXlCO0FBQ3RELFVBQU0saUJBQWlCLGFBQWEsWUFBYixDQUEwQixLQUExQixDQUF2QjtBQUNBLGFBQU8sbUJBQW1CLFNBQW5CLElBQWdDLG1CQUFtQixhQUFhLFlBQWIsQ0FBMEIsZUFBMUIsQ0FBMUQ7QUFDSDtBQUVEOzs7Ozs7OztpQ0FLMkIsTSxFQUFXO0FBQ2xDLFVBQUksV0FBVyxJQUFYLElBQW1CLFdBQVcsU0FBbEMsRUFBNkM7QUFDekMsZUFBTyxTQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBTSxlQUFjLE9BQU8sTUFBUCxLQUFrQixVQUFsQixHQUErQixPQUFPLFFBQVAsRUFBL0IsR0FBbUQsT0FBTyxXQUFQLENBQW1CLFFBQW5CLEVBQXZFOztBQUNBLFlBQU0sVUFBVSxhQUFZLEtBQVosQ0FBa0IsTUFBbEIsQ0FBaEI7O0FBQ0EsZUFBUSxXQUFXLFFBQVEsTUFBUixHQUFpQixDQUE3QixHQUFrQyxRQUFRLENBQVIsQ0FBbEMsR0FBK0MsU0FBdEQ7QUFDSDtBQUNKOzs7Ozs7QUE1Q0wsb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7SUFHQSxZOzs7Ozs7Ozs7O0FBQ0k7Ozs7OzZCQUt1QixLLEVBQVU7QUFDN0IsYUFBTyxVQUFVLElBQVYsSUFBa0IsVUFBVSxTQUE1QixHQUNELEtBREMsR0FDTyxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsS0FBL0IsTUFBMEMsaUJBRHhEO0FBRUg7QUFFRDs7Ozs7Ozs7NEJBS3NCLEssRUFBVTtBQUM1QixhQUFPLENBQUMsYUFBYSxRQUFiLENBQXNCLEtBQXRCLENBQUQsSUFBaUMsTUFBTSxNQUFOLEtBQWlCLENBQXpEO0FBQ0g7QUFFRDs7Ozs7Ozs7NEJBS3NCLEssRUFBYTtBQUMvQixhQUFPLFVBQVUsSUFBVixJQUFrQixVQUFVLFNBQTVCLEdBQ0QsS0FEQyxHQUNPLGlCQUFpQixJQUFqQixDQUFzQixLQUF0QixDQURkO0FBRUg7QUFFRDs7Ozs7Ozs7bUNBSzZCLEssRUFBYTtBQUN0QyxhQUFPLGFBQWEsUUFBYixDQUFzQixLQUF0QixJQUErQixNQUFNLE9BQU4sQ0FBYyxrQkFBZCxFQUFrQyxVQUFDLEdBQUQ7QUFBQSw0QkFBZSxjQUFRLElBQUksVUFBSixDQUFlLENBQWYsRUFBa0IsUUFBbEIsQ0FBMkIsRUFBM0IsQ0FBUixFQUEwQyxNQUExQyxDQUFpRCxDQUFDLENBQWxELENBQWY7QUFBQSxPQUFsQyxDQUEvQixHQUEwSSxTQUFqSjtBQUNIO0FBRUQ7Ozs7Ozs7O21DQUs2QixLLEVBQWE7QUFDdEMsYUFBTyxhQUFhLFFBQWIsQ0FBc0IsS0FBdEIsSUFBK0IsTUFBTSxPQUFOLENBQWMsa0JBQWQsRUFBa0MsVUFBQyxLQUFELEVBQVEsR0FBUjtBQUFBLGVBQWdCLE9BQU8sWUFBUCxDQUFvQixTQUFTLEdBQVQsRUFBYyxFQUFkLENBQXBCLENBQWhCO0FBQUEsT0FBbEMsQ0FBL0IsR0FBMkgsU0FBbEk7QUFDSDs7Ozs7O0FBOUNMLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7O0lBR0EsVzs7Ozs7Ozs7OztBQUNJOzs7O21DQUltQjtBQUNmLGFBQU8sS0FBSyxHQUFMLEVBQVA7QUFDSDs7Ozs7O0FBUEwsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUNBO0FBRUE7Ozs7O0lBR0EsSTs7O0FBcUNJOzs7Ozs7QUFNQSxnQkFBWSxJQUFaLEVBQTBCLE9BQTFCLEVBQWdELFVBQWhELEVBQWtFO0FBQUE7O0FBQzlELFNBQUssUUFBTCxHQUFnQixPQUFoQjtBQUNBLFNBQUssV0FBTCxHQUFtQixVQUFuQjtBQUNBLFNBQUssV0FBTCxHQUFvQixRQUFRLFFBQVEsQ0FBaEIsQ0FBRCxJQUF3QixDQUEzQztBQUNBLFNBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsSUFBb0IsQ0FBdEM7QUFDQSxTQUFLLGFBQUwsR0FBcUIsY0FBYyxDQUFuQztBQUNBLFNBQUssV0FBTCxHQUFtQixDQUFDLGFBQWEsRUFBZCxLQUFxQixDQUF4QztBQUVBLFNBQUssS0FBTDtBQUNIO0FBRUQ7Ozs7Ozs7NEJBR1k7QUFDUixXQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBSyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUssTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFLLE9BQUwsR0FBZSxJQUFJLFdBQUosQ0FBZ0IsS0FBSyxXQUFMLEdBQW1CLENBQW5DLENBQWY7QUFDQSxXQUFLLE1BQUwsR0FBYyxJQUFJLFdBQUosQ0FBZ0IsRUFBaEIsQ0FBZDtBQUNIO0FBRUQ7Ozs7Ozs7MkJBSWMsSyxFQUFrQjtBQUM1QixVQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixLQUFwQixFQUEyQixXQUEzQixDQUFMLEVBQThDO0FBQzFDLGNBQU0sSUFBSSx5QkFBSixDQUFnQixrQ0FBaEIsQ0FBTjtBQUNIOztBQUNELFVBQU0sVUFBc0IsSUFBSSxVQUFKLENBQWUsS0FBZixDQUE1QjtBQUNBLFVBQU0sU0FBUyxRQUFRLE1BQXZCO0FBQ0EsVUFBSSxRQUFRLENBQVo7QUFDQSxVQUFJLENBQUo7O0FBRUEsYUFBTyxRQUFRLE1BQWYsRUFBdUI7QUFDbkIsWUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDYixlQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsZUFBSyxPQUFMLENBQWEsQ0FBYixJQUFrQixLQUFLLE1BQXZCOztBQUNBLGVBQUssSUFBSSxDQUFULEVBQVksSUFBSSxLQUFLLFdBQUwsR0FBbUIsQ0FBbkMsRUFBc0MsRUFBRSxDQUF4QyxFQUEyQztBQUN2QyxpQkFBSyxPQUFMLENBQWEsQ0FBYixJQUFrQixDQUFsQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBSyxJQUFJLEtBQUssTUFBZCxFQUFzQixRQUFRLE1BQVIsSUFBa0IsSUFBSSxLQUFLLFVBQWpELEVBQTZELEVBQUUsS0FBL0QsRUFBc0U7QUFDbEUsZUFBSyxPQUFMLENBQWEsS0FBSyxDQUFsQixLQUF3QixRQUFRLEtBQVIsS0FBa0IsS0FBSyxLQUFMLENBQVcsTUFBTSxDQUFqQixDQUExQztBQUNIOztBQUNELGFBQUssY0FBTCxHQUFzQixDQUF0Qjs7QUFDQSxZQUFJLEtBQUssS0FBSyxVQUFkLEVBQTBCO0FBQ3RCLGVBQUssTUFBTCxHQUFjLElBQUksS0FBSyxVQUF2QjtBQUNBLGVBQUssTUFBTCxHQUFjLEtBQUssT0FBTCxDQUFhLEtBQUssV0FBbEIsQ0FBZDs7QUFDQSxlQUFLLElBQUksQ0FBVCxFQUFZLElBQUksS0FBSyxXQUFyQixFQUFrQyxFQUFFLENBQXBDLEVBQXVDO0FBQ25DLGlCQUFLLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBbEI7QUFDSDs7QUFDRCxlQUFLLGlCQUFMLENBQXVCLEtBQUssTUFBNUI7QUFDQSxlQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0gsU0FSRCxNQVFPO0FBQ0gsZUFBSyxNQUFMLEdBQWMsQ0FBZDtBQUNIO0FBQ0o7QUFDSjtBQUVEOzs7Ozs7OzZCQUlhO0FBQ1QsV0FBSyxRQUFMO0FBRUEsVUFBSSxJQUFJLENBQVI7QUFDQSxVQUFJLElBQUksQ0FBUjtBQUNBLFVBQU0sUUFBUSxLQUFLLFdBQUwsSUFBb0IsQ0FBbEM7QUFDQSxVQUFJLE1BQUo7O0FBQ0EsVUFBSSxLQUFLLFdBQVQsRUFBc0I7QUFDbEIsaUJBQVMsSUFBSSxXQUFKLENBQWlCLEtBQUssYUFBTCxHQUFxQixDQUF0QixJQUE0QixDQUE1QyxDQUFUO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsaUJBQVMsSUFBSSxXQUFKLENBQWdCLEtBQWhCLENBQVQ7QUFDSDs7QUFDRCxVQUFNLFFBQVEsSUFBSSxXQUFKLENBQWdCLE1BQWhCLENBQWQ7O0FBQ0EsYUFBTyxJQUFJLEtBQUssYUFBaEIsRUFBK0I7QUFDM0IsYUFBSyxJQUFJLENBQVQsRUFBWSxJQUFJLEtBQUssV0FBVCxJQUF3QixJQUFJLEtBQUssYUFBN0MsRUFBNEQsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFuRSxFQUFzRTtBQUNsRSxnQkFBTSxDQUFOLElBQVcsS0FBSyxNQUFMLENBQVksQ0FBWixDQUFYO0FBQ0g7QUFDSjs7QUFDRCxVQUFJLEtBQUssV0FBVCxFQUFzQjtBQUNsQixjQUFNLENBQU4sSUFBVyxLQUFLLE1BQUwsQ0FBWSxDQUFaLENBQVg7QUFDQSxpQkFBUyxPQUFPLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLEtBQWhCLENBQVQ7QUFDSDs7QUFDRCxXQUFLLEtBQUw7QUFFQSxhQUFPLE1BQVA7QUFDSDtBQUVEOzs7OytCQUNnQjtBQUNaLFVBQUksSUFBSSxLQUFLLGNBQWI7QUFDQSxXQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEtBQXdCLEtBQUssUUFBTCxDQUFjLElBQUksQ0FBbEIsQ0FBeEI7O0FBQ0EsVUFBSSxLQUFLLGNBQUwsS0FBd0IsS0FBSyxVQUFqQyxFQUE2QztBQUN6QyxhQUFLLE9BQUwsQ0FBYSxDQUFiLElBQWtCLEtBQUssT0FBTCxDQUFhLEtBQUssV0FBbEIsQ0FBbEI7O0FBQ0EsYUFBSyxJQUFJLENBQVQsRUFBWSxJQUFJLEtBQUssV0FBTCxHQUFtQixDQUFuQyxFQUFzQyxFQUFFLENBQXhDLEVBQTJDO0FBQ3ZDLGVBQUssT0FBTCxDQUFhLENBQWIsSUFBa0IsQ0FBbEI7QUFDSDtBQUNKOztBQUNELFdBQUssT0FBTCxDQUFhLEtBQUssV0FBTCxHQUFtQixDQUFoQyxLQUFzQyxVQUF0Qzs7QUFDQSxXQUFLLElBQUksQ0FBVCxFQUFZLElBQUksS0FBSyxXQUFyQixFQUFrQyxFQUFFLENBQXBDLEVBQXVDO0FBQ25DLGFBQUssTUFBTCxDQUFZLENBQVosS0FBa0IsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFsQjtBQUNIOztBQUNELFdBQUssaUJBQUwsQ0FBdUIsS0FBSyxNQUE1QjtBQUNIO0FBRUQ7Ozs7c0NBQzBCLEMsRUFBYztBQUNwQztBQUNBLFVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QyxFQUFpRCxFQUFqRCxFQUNJLEVBREosRUFDUSxFQURSLEVBQ1ksRUFEWixFQUNnQixFQURoQixFQUNvQixFQURwQixFQUN3QixFQUR4QixFQUM0QixFQUQ1QixFQUNnQyxFQURoQyxFQUNvQyxFQURwQyxFQUN3QyxFQUR4QyxFQUM0QyxHQUQ1QyxFQUNpRCxHQURqRCxFQUNzRCxHQUR0RCxFQUMyRCxHQUQzRCxFQUNnRSxHQURoRSxFQUNxRSxHQURyRSxFQUMwRSxHQUQxRSxFQUMrRSxHQUQvRSxFQUVJLEdBRkosRUFFUyxHQUZULEVBRWMsR0FGZCxFQUVtQixHQUZuQixFQUV3QixHQUZ4QixFQUU2QixHQUY3QixFQUVrQyxHQUZsQyxFQUV1QyxHQUZ2QyxFQUU0QyxHQUY1QyxFQUVpRCxHQUZqRCxFQUVzRCxHQUZ0RCxFQUUyRCxHQUYzRCxFQUVnRSxHQUZoRSxFQUVxRSxHQUZyRSxFQUUwRSxHQUYxRSxFQUUrRSxHQUYvRSxFQUdJLEdBSEosRUFHUyxHQUhULEVBR2MsR0FIZCxFQUdtQixHQUhuQixFQUd3QixHQUh4QixFQUc2QixHQUg3QixFQUdrQyxHQUhsQyxFQUd1QyxHQUh2QyxFQUc0QyxHQUg1QyxFQUdpRCxHQUhqRCxFQUdzRCxHQUh0RCxFQUcyRCxHQUgzRCxFQUdnRSxHQUhoRSxFQUdxRSxHQUhyRSxFQUcwRSxHQUgxRSxFQUcrRSxHQUgvRTs7QUFJQSxXQUFLLElBQUksQ0FBVCxFQUFZLElBQUksRUFBaEIsRUFBb0IsS0FBSyxDQUF6QixFQUE0QjtBQUN4QixhQUFLLEVBQUUsQ0FBRixJQUFPLEVBQUUsRUFBRixDQUFQLEdBQWUsRUFBRSxFQUFGLENBQWYsR0FBdUIsRUFBRSxFQUFGLENBQXZCLEdBQStCLEVBQUUsRUFBRixDQUFwQztBQUNBLGFBQUssRUFBRSxDQUFGLElBQU8sRUFBRSxFQUFGLENBQVAsR0FBZSxFQUFFLEVBQUYsQ0FBZixHQUF1QixFQUFFLEVBQUYsQ0FBdkIsR0FBK0IsRUFBRSxFQUFGLENBQXBDO0FBQ0EsYUFBSyxFQUFFLENBQUYsSUFBTyxFQUFFLEVBQUYsQ0FBUCxHQUFlLEVBQUUsRUFBRixDQUFmLEdBQXVCLEVBQUUsRUFBRixDQUF2QixHQUErQixFQUFFLEVBQUYsQ0FBcEM7QUFDQSxhQUFLLEVBQUUsQ0FBRixJQUFPLEVBQUUsRUFBRixDQUFQLEdBQWUsRUFBRSxFQUFGLENBQWYsR0FBdUIsRUFBRSxFQUFGLENBQXZCLEdBQStCLEVBQUUsRUFBRixDQUFwQztBQUNBLGFBQUssRUFBRSxDQUFGLElBQU8sRUFBRSxFQUFGLENBQVAsR0FBZSxFQUFFLEVBQUYsQ0FBZixHQUF1QixFQUFFLEVBQUYsQ0FBdkIsR0FBK0IsRUFBRSxFQUFGLENBQXBDO0FBQ0EsYUFBSyxFQUFFLENBQUYsSUFBTyxFQUFFLEVBQUYsQ0FBUCxHQUFlLEVBQUUsRUFBRixDQUFmLEdBQXVCLEVBQUUsRUFBRixDQUF2QixHQUErQixFQUFFLEVBQUYsQ0FBcEM7QUFDQSxhQUFLLEVBQUUsQ0FBRixJQUFPLEVBQUUsRUFBRixDQUFQLEdBQWUsRUFBRSxFQUFGLENBQWYsR0FBdUIsRUFBRSxFQUFGLENBQXZCLEdBQStCLEVBQUUsRUFBRixDQUFwQztBQUNBLGFBQUssRUFBRSxDQUFGLElBQU8sRUFBRSxFQUFGLENBQVAsR0FBZSxFQUFFLEVBQUYsQ0FBZixHQUF1QixFQUFFLEVBQUYsQ0FBdkIsR0FBK0IsRUFBRSxFQUFGLENBQXBDO0FBQ0EsYUFBSyxFQUFFLENBQUYsSUFBTyxFQUFFLEVBQUYsQ0FBUCxHQUFlLEVBQUUsRUFBRixDQUFmLEdBQXVCLEVBQUUsRUFBRixDQUF2QixHQUErQixFQUFFLEVBQUYsQ0FBcEM7QUFDQSxhQUFLLEVBQUUsQ0FBRixJQUFPLEVBQUUsRUFBRixDQUFQLEdBQWUsRUFBRSxFQUFGLENBQWYsR0FBdUIsRUFBRSxFQUFGLENBQXZCLEdBQStCLEVBQUUsRUFBRixDQUFwQztBQUVBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFlBQUksTUFBTyxNQUFNLENBQVAsR0FBYSxPQUFPLEVBQTFCLENBQUo7QUFDQSxZQUFJLE1BQU8sTUFBTSxDQUFQLEdBQWEsT0FBTyxFQUExQixDQUFKO0FBQ0EsVUFBRSxDQUFGLEtBQVEsQ0FBUjtBQUNBLFVBQUUsQ0FBRixLQUFRLENBQVI7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUNBLFVBQUUsRUFBRixLQUFTLENBQVQ7QUFDQSxVQUFFLEVBQUYsS0FBUyxDQUFUO0FBQ0EsVUFBRSxFQUFGLEtBQVMsQ0FBVDtBQUVBLGFBQUssRUFBRSxDQUFGLENBQUw7QUFDQSxhQUFLLEVBQUUsQ0FBRixDQUFMO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxDQUFWLEdBQWdCLEVBQUUsRUFBRixNQUFVLEVBQWhDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxFQUFWLEdBQWlCLEVBQUUsRUFBRixNQUFVLEVBQWpDO0FBQ0EsY0FBTyxFQUFFLEVBQUYsS0FBUyxFQUFWLEdBQWlCLEVBQUUsRUFBRixNQUFVLEVBQWpDO0FBQ0EsY0FBTyxFQUFFLENBQUYsS0FBUSxDQUFULEdBQWUsRUFBRSxDQUFGLE1BQVMsRUFBOUI7QUFDQSxjQUFPLEVBQUUsQ0FBRixLQUFRLENBQVQsR0FBZSxFQUFFLENBQUYsTUFBUyxFQUE5QjtBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxDQUFqQztBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxDQUFGLEtBQVEsRUFBVCxHQUFnQixFQUFFLENBQUYsTUFBUyxDQUEvQjtBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFqQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGNBQU8sRUFBRSxFQUFGLEtBQVMsQ0FBVixHQUFnQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUNBLGFBQU0sRUFBRSxFQUFGLEtBQVMsRUFBVixHQUFpQixFQUFFLEVBQUYsTUFBVSxFQUFoQztBQUVBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsQ0FBRixJQUFPLEtBQU0sQ0FBQyxFQUFELEdBQU0sRUFBbkI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLENBQUYsSUFBTyxLQUFNLENBQUMsRUFBRCxHQUFNLEVBQW5CO0FBQ0EsVUFBRSxDQUFGLElBQU8sS0FBTSxDQUFDLEVBQUQsR0FBTSxFQUFuQjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBQ0EsVUFBRSxFQUFGLElBQVEsTUFBTyxDQUFDLEdBQUQsR0FBTyxHQUF0QjtBQUNBLFVBQUUsRUFBRixJQUFRLE1BQU8sQ0FBQyxHQUFELEdBQU8sR0FBdEI7QUFDQSxVQUFFLEVBQUYsSUFBUSxNQUFPLENBQUMsR0FBRCxHQUFPLEdBQXRCO0FBRUEsVUFBRSxDQUFGLEtBQVEsS0FBSyxlQUFMLENBQXFCLENBQXJCLENBQVI7QUFDQSxVQUFFLENBQUYsS0FBUSxLQUFLLGVBQUwsQ0FBcUIsSUFBSSxDQUF6QixDQUFSO0FBQ0g7QUFDSjs7Ozs7QUFoVkQ7OztBQUN1QixzQkFBOEIsSUFBSSxXQUFKLENBQWdCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxLQUFULEVBQWdCLFFBQWhCLENBQWhCLENBQTlCO0FBQ3ZCOztBQUN3QixhQUFvQixJQUFJLFVBQUosQ0FBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxFQUFXLEVBQVgsQ0FBZixDQUFwQjtBQUN4Qjs7QUFDd0IsdUJBQStCLElBQUksV0FBSixDQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUCxFQUFjLENBQWQsRUFBaUIsS0FBakIsRUFBd0IsVUFBeEIsRUFBb0MsVUFBcEMsRUFBZ0QsVUFBaEQsRUFBNEQsS0FBNUQsRUFBbUUsQ0FBbkUsRUFBc0UsVUFBdEUsRUFDbkUsQ0FEbUUsRUFDaEUsVUFEZ0UsRUFDcEQsVUFEb0QsRUFDeEMsS0FEd0MsRUFDakMsVUFEaUMsRUFDckIsR0FEcUIsRUFDaEIsQ0FEZ0IsRUFDYixHQURhLEVBQ1IsQ0FEUSxFQUNMLFVBREssRUFDTyxDQURQLEVBRW5FLFVBRm1FLEVBRXZELENBRnVELEVBRXBELFVBRm9ELEVBRXhDLENBRndDLEVBRXJDLEdBRnFDLEVBRWhDLFVBRmdDLEVBRXBCLEtBRm9CLEVBRWIsVUFGYSxFQUVELEtBRkMsRUFHbkUsVUFIbUUsRUFHdkQsS0FIdUQsRUFHaEQsVUFIZ0QsRUFHcEMsR0FIb0MsRUFHL0IsVUFIK0IsRUFHbkIsS0FIbUIsRUFHWixDQUhZLEVBR1QsVUFIUyxFQUdHLFVBSEgsRUFJbkUsVUFKbUUsRUFJdkQsVUFKdUQsRUFJM0MsS0FKMkMsRUFJcEMsVUFKb0MsRUFJeEIsVUFKd0IsRUFJWixDQUpZLEVBSVQsVUFKUyxFQUlHLFVBSkgsQ0FBaEIsQ0FBL0I7QUFONUIsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTs7Ozs7SUFHQSxXOzs7OztBQUNJOzs7Ozs7QUFNQSx1QkFBWSxPQUFaLEVBQTZCLFVBQTdCLEVBQWlFLFVBQWpFLEVBQW1GO0FBQUE7O0FBQUE7O0FBQy9FLHFGQUFNLE9BQU4sRUFBZSxVQUFmLEVBQTJCLFVBQTNCO0FBQ0EsVUFBSyxNQUFMLEdBQWMsUUFBZDtBQUYrRTtBQUdsRjs7O0VBVjRCLHFCOztBQUFqQyxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBOztBQUNBO0FBRUE7Ozs7O0lBR0EsYTs7Ozs7QUFJSTs7OztBQUlBO0FBQUE7O0FBQUE7QUFFQztBQUVEOzs7Ozs7Ozs7QUFlQTtrQ0FDcUI7QUFDakIsYUFBTyxjQUFjLFFBQWQsRUFBUDtBQUNIOzs7K0JBZHFCO0FBQ2xCLFVBQUksQ0FBQyxjQUFjLFNBQW5CLEVBQThCO0FBQzFCLHNCQUFjLFNBQWQsR0FBMEIsSUFBSSxhQUFKLEVBQTFCOztBQUNBLHNCQUFjLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsTUFBakMsRUFBeUM7QUFBQSw0Q0FBSSxJQUFKO0FBQUksZ0JBQUo7QUFBQTs7QUFBQSw0QkFBaUIsV0FBakIsRUFBeUIsSUFBekI7QUFBQSxTQUF6Qzs7QUFDQSxzQkFBYyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLFFBQWpDLEVBQTJDO0FBQUEsaUJBQWEsSUFBSSxXQUFKLENBQVMsRUFBVCxDQUFiO0FBQUEsU0FBM0M7O0FBQ0Esc0JBQWMsU0FBZCxDQUF3QixRQUF4QixDQUFpQyxRQUFqQyxFQUEyQztBQUFBLGlCQUFhLElBQUksV0FBSixDQUFTLEVBQVQsQ0FBYjtBQUFBLFNBQTNDOztBQUNBLHNCQUFjLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsTUFBakMsRUFBeUM7QUFBQSxpQkFBYSxJQUFJLFdBQUosRUFBYjtBQUFBLFNBQXpDO0FBQ0g7O0FBQ0QsYUFBTyxjQUFjLFNBQXJCO0FBQ0g7Ozs7RUF6QjhCLHlCOztBQUFuQyxzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTs7Ozs7O0lBSUEsZ0I7Ozs7Ozs7Ozs7QUFhSTs7Ozs7OztzQ0FPZ0MsSyxFQUFrQixNLEVBQWdCLE0sRUFBYztBQUM1RSxVQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixLQUFwQixFQUEyQixTQUEzQixDQUFELElBQTBDLE1BQU0sTUFBTixLQUFpQixDQUEvRCxFQUFrRTtBQUM5RCxjQUFNLElBQUkseUJBQUosQ0FBZ0IseUNBQWhCLENBQU47QUFDSDs7QUFFRCxVQUFJLENBQUMsNEJBQWEsU0FBYixDQUF1QixNQUF2QixDQUFELElBQW1DLFNBQVMsQ0FBaEQsRUFBbUQ7QUFDL0MsY0FBTSxJQUFJLHlCQUFKLENBQWdCLGtDQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxVQUFVLENBQWpELEVBQW9EO0FBQ2hELGNBQU0sSUFBSSx5QkFBSixDQUFnQixpQ0FBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksU0FBUyxNQUFULEdBQWtCLE1BQU0sTUFBNUIsRUFBb0M7QUFDaEMsY0FBTSxJQUFJLHlCQUFKLENBQWdCLHVEQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxRQUFRLHNCQUFPLElBQW5COztBQUVBLFdBQUssSUFBSSxJQUFJLFNBQVMsQ0FBdEIsRUFBeUIsS0FBSyxDQUE5QixFQUFpQyxHQUFqQyxFQUFzQztBQUNsQyxnQkFBUSxNQUFNLFFBQU4sQ0FBZSxpQkFBaUIsS0FBaEMsRUFBdUMsR0FBdkMsQ0FBMkMsc0JBQU8sTUFBTSxTQUFTLENBQWYsQ0FBUCxDQUEzQyxDQUFSO0FBQ0g7O0FBRUQsYUFBTyxLQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7OztzQ0FPZ0MsSyxFQUEwQixLLEVBQWtCLE0sRUFBZ0IsTSxFQUFjO0FBQ3RHLFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQXBCLEVBQTJCLHFCQUEzQixDQUFMLEVBQXlDO0FBQ3JDLGNBQU0sSUFBSSx5QkFBSixDQUFnQixxQ0FBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLEtBQXBCLEVBQTJCLFNBQTNCLENBQUwsRUFBNEM7QUFDeEMsY0FBTSxJQUFJLHlCQUFKLENBQWdCLGdDQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxTQUFTLENBQWhELEVBQW1EO0FBQy9DLGNBQU0sSUFBSSx5QkFBSixDQUFnQixrQ0FBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQUQsSUFBbUMsVUFBVSxDQUFqRCxFQUFvRDtBQUNoRCxjQUFNLElBQUkseUJBQUosQ0FBZ0IsaUNBQWhCLENBQU47QUFDSDs7QUFFRCxVQUFJLFNBQVMsTUFBVCxHQUFrQixNQUFNLE1BQTVCLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSSx5QkFBSixDQUFnQix1REFBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksZ0JBQWdCLE1BQU0sU0FBTixDQUFnQixzQkFBTyxJQUF2QixJQUErQixDQUEvQixHQUFtQyxNQUFNLE1BQU4sRUFBbkMsR0FBb0QsS0FBeEU7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQXBCLEVBQTRCLEdBQTVCLEVBQWlDO0FBQzdCLFlBQU0sZUFBZSxjQUFjLE1BQWQsQ0FBcUIsaUJBQWlCLEtBQXRDLENBQXJCO0FBQ0Esd0JBQWdCLGFBQWEsUUFBN0I7QUFDQSxZQUFJLFlBQVksYUFBYSxTQUE3Qjs7QUFFQSxZQUFJLFlBQVksaUJBQWlCLGNBQWpDLEVBQWlEO0FBQzdDLHNCQUFZLGlCQUFpQixjQUE3QjtBQUNBLDBCQUFnQixjQUFjLEdBQWQsQ0FBa0Isc0JBQU8sR0FBUCxDQUFsQixDQUFoQjtBQUNIOztBQUNELGNBQU0sU0FBUyxDQUFmLElBQW9CLFVBQVUsVUFBVixFQUFwQjtBQUNIOztBQUVELFVBQUksTUFBTSxTQUFOLENBQWdCLHNCQUFPLElBQXZCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDLGFBQUssSUFBSSxLQUFJLENBQWIsRUFBZ0IsS0FBSSxNQUFwQixFQUE0QixJQUE1QixFQUFpQztBQUM3QjtBQUNBLGdCQUFNLFNBQVMsRUFBZixJQUFvQixNQUFNLFNBQVMsRUFBZixNQUFzQixDQUF0QixHQUEwQixDQUExQixHQUE4QixDQUFDLE1BQU0sU0FBUyxFQUFmLENBQW5EO0FBQ0g7QUFDSjtBQUNKO0FBRUQ7Ozs7Ozs7OztzQ0FNZ0MsSyxFQUEwQixXLEVBQTBCLE0sRUFBYztBQUM5RixVQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixLQUFwQixFQUEyQixxQkFBM0IsQ0FBTCxFQUF5QztBQUNyQyxjQUFNLElBQUkseUJBQUosQ0FBZ0IscUNBQWhCLENBQU47QUFDSDs7QUFFRCxVQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixXQUFwQixFQUFpQyxXQUFqQyxDQUFELElBQWtELFlBQVksVUFBWixLQUEyQixDQUFqRixFQUFvRjtBQUNoRixjQUFNLElBQUkseUJBQUosQ0FBZ0Isa0NBQWhCLENBQU47QUFDSDs7QUFFRCxVQUFJLENBQUMsNEJBQWEsU0FBYixDQUF1QixNQUF2QixDQUFELElBQW1DLFNBQVMsQ0FBaEQsRUFBbUQ7QUFDL0MsY0FBTSxJQUFJLHlCQUFKLENBQWdCLGtDQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxZQUFZLFVBQVosR0FBeUIsTUFBekIsR0FBa0MsaUJBQWlCLGdCQUF2RCxFQUF5RTtBQUNyRSxjQUFNLElBQUkseUJBQUosbUVBQTJFLGlCQUFpQixnQkFBNUYsRUFBTjtBQUNILE9BZjZGLENBaUI5Rjs7O0FBQ0EsVUFBTSxRQUFRLE1BQU0sVUFBTixLQUFxQixDQUFDLENBQXRCLEdBQTBCLENBQXhDO0FBRUEsVUFBSSxZQUFZLE1BQU0sUUFBTixDQUFlLEVBQWYsQ0FBaEI7O0FBRUEsVUFBSSxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNkO0FBQ0Esb0JBQVksVUFBVSxLQUFWLENBQWdCLENBQWhCLENBQVo7QUFDSCxPQXpCNkYsQ0EwQjlGOzs7QUFDQSxVQUFJLFVBQVUsTUFBVixHQUFtQixDQUFuQixLQUF5QixDQUE3QixFQUFnQztBQUM1QiwrQkFBZ0IsU0FBaEI7QUFDSDs7QUFDRCxVQUFNLFVBQVUsVUFBVSxLQUFWLENBQWdCLGNBQWhCLENBQWhCLENBOUI4RixDQWdDOUY7O0FBQ0EsVUFBTSxjQUFjLElBQUksU0FBSixDQUFjLFFBQzdCLEdBRDZCLENBQ3pCO0FBQUEsZUFBTyxxQkFBYyxHQUFkLEdBQXFCLEVBQXJCLENBQVA7QUFBQSxPQUR5QixDQUFkLENBQXBCOztBQUdBLFVBQUksVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDZCx5QkFBaUIsY0FBakIsQ0FBZ0MsV0FBaEM7QUFDSDs7QUFFRCxVQUFNLFdBQVcsSUFBSSxRQUFKLENBQWEsV0FBYixDQUFqQixDQXhDOEYsQ0EwQzlGOztBQUNBLFVBQUksSUFBSSxNQUFSOztBQUNBLGFBQU8sSUFBSSxZQUFZLE1BQWhCLEdBQXlCLGlCQUFpQixnQkFBakQsRUFBbUU7QUFDL0QsaUJBQVMsT0FBVCxDQUFpQixHQUFqQixFQUFzQixLQUF0QjtBQUNILE9BOUM2RixDQStDOUY7OztBQUNBLFdBQUssSUFBSSxJQUFJLFlBQVksTUFBekIsRUFBaUMsTUFBTSxDQUF2QyxHQUEyQztBQUN2QyxpQkFBUyxPQUFULENBQWlCLEdBQWpCLEVBQXNCLFlBQVksWUFBWSxNQUFaLEdBQXFCLENBQXJCLEdBQXlCLENBQXJDLENBQXRCO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7O3NDQU9nQyxNLEVBQXFCLE0sRUFBZ0IsTSxFQUFjO0FBQy9FLFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLE1BQXBCLEVBQTRCLFdBQTVCLENBQUQsSUFBNkMsT0FBTyxVQUFQLEtBQXNCLENBQXZFLEVBQTBFO0FBQ3RFLGNBQU0sSUFBSSx5QkFBSixDQUFnQiw2Q0FBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQUQsSUFBbUMsU0FBUyxDQUFoRCxFQUFtRDtBQUMvQyxjQUFNLElBQUkseUJBQUosQ0FBZ0Isa0NBQWhCLENBQU47QUFDSDs7QUFFRCxVQUFJLENBQUMsNEJBQWEsU0FBYixDQUF1QixNQUF2QixDQUFELElBQW1DLFVBQVUsQ0FBakQsRUFBb0Q7QUFDaEQsY0FBTSxJQUFJLHlCQUFKLENBQWdCLGlDQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxPQUFPLFVBQVAsR0FBb0IsTUFBcEIsR0FBNkIsaUJBQWlCLGdCQUFsRCxFQUFvRTtBQUNoRSxjQUFNLElBQUkseUJBQUosOERBQXNFLGlCQUFpQixnQkFBdkYsRUFBTjtBQUNIOztBQUVELFVBQU0sV0FBVyxJQUFJLFFBQUosQ0FBYSxNQUFiLENBQWpCO0FBRUEsVUFBSSxjQUFjLElBQUksU0FBSixDQUFjLFNBQVMsVUFBdkIsQ0FBbEI7O0FBQ0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsVUFBN0IsRUFBeUMsR0FBekMsRUFBOEM7QUFDMUMsb0JBQVksQ0FBWixJQUFpQixTQUFTLE9BQVQsQ0FBaUIsSUFBSSxNQUFyQixDQUFqQjtBQUNILE9BdEI4RSxDQXdCL0U7OztBQUNBLFVBQUksZ0JBQWdCLENBQXBCO0FBQ0EsVUFBTSxZQUFZLFlBQVksQ0FBWixDQUFsQjtBQUNBLFVBQU0sUUFBUSxZQUFZLENBQTFCLENBM0IrRSxDQTZCL0U7QUFDQTs7QUFDQSxVQUFJLGNBQWMsQ0FBZCxJQUFtQixjQUFjLENBQUMsQ0FBdEMsRUFBeUM7QUFDckMsZUFBTyxZQUFZLGFBQVosTUFBK0IsU0FBL0IsSUFBNEMsZ0JBQWdCLFlBQVksTUFBWixHQUFxQixDQUF4RixFQUEyRjtBQUN2RjtBQUNILFNBSG9DLENBSXJDOzs7QUFDQSxzQkFBYyxZQUFZLEtBQVosQ0FBa0IsYUFBbEIsQ0FBZDtBQUNIOztBQUVELFVBQUksS0FBSixFQUFXO0FBQ1AseUJBQWlCLGNBQWpCLENBQWdDLFdBQWhDO0FBQ0g7O0FBRUQsVUFBSSxZQUFZLFFBQVEsR0FBUixHQUFjLEVBQTlCO0FBQ0EsVUFBTSxLQUFLLElBQUksUUFBSixDQUFhLFlBQVksTUFBekIsQ0FBWDs7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksR0FBRyxVQUF2QixFQUFtQyxHQUFuQyxFQUF3QztBQUNwQyxxQkFBYSxZQUFLLEdBQUcsUUFBSCxDQUFZLENBQVosRUFBZSxRQUFmLENBQXdCLEVBQXhCLENBQUwsRUFBbUMsS0FBbkMsQ0FBeUMsQ0FBQyxDQUExQyxDQUFiO0FBQ0g7O0FBRUQsYUFBTyxzQkFBTyxTQUFQLEVBQWtCLEVBQWxCLENBQVA7QUFDSDtBQUVEOzs7O21DQUM4QixXLEVBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxZQUFZLE1BQWhDLEVBQXdDLEdBQXhDLEVBQTZDO0FBQ3pDLG9CQUFZLENBQVosSUFBaUIsQ0FBQyxZQUFZLENBQVosQ0FBbEI7QUFDSCxPQU4rQyxDQU9oRDs7O0FBQ0EsVUFBSSxJQUFJLFlBQVksTUFBWixHQUFxQixDQUE3Qjs7QUFDQSxTQUFHO0FBQ0Msb0JBQVksQ0FBWjtBQUNILE9BRkQsUUFFUyxZQUFZLEdBQVosTUFBcUIsQ0FBckIsSUFBMEIsSUFBSSxDQUZ2QztBQUdIOzs7OztBQWxPRDs7O0FBQ3dCLHlCQUEyQixzQkFBTyxDQUFQLENBQTNCO0FBQ3hCOztBQUN3QixrQ0FBb0MsaUJBQWlCLEtBQWpCLENBQXVCLEtBQXZCLENBQTZCLENBQTdCLEVBQWdDLE1BQWhDLENBQXVDLENBQXZDLENBQXBDO0FBQ3hCOztBQUN3QixrQ0FBb0MsaUJBQWlCLGNBQWpCLENBQWdDLE1BQWhDLEVBQXBDO0FBRXhCOztBQUN3QixtQ0FBMEIsR0FBMUI7QUFDeEI7O0FBQ3dCLG9DQUEyQixpQkFBaUIsZUFBakIsR0FBbUMsQ0FBOUQ7QUFYNUIsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBRUE7Ozs7OztJQUlBLGlCOzs7Ozs7Ozs7O0FBQ0k7Ozs7O3lCQUttQixXLEVBQXdCO0FBQ3ZDLFVBQUksQ0FBQyw0QkFBYSxNQUFiLENBQW9CLFdBQXBCLEVBQWlDLHlCQUFqQyxDQUFMLEVBQW9EO0FBQ2hELGNBQU0sSUFBSSx5QkFBSixDQUFnQiw2Q0FBaEIsQ0FBTjtBQUNIOztBQUVELFVBQU0sT0FBTyw4QkFBYyxRQUFkLEdBQXlCLE1BQXpCLENBQWdDLE1BQWhDLENBQWI7QUFDQSxVQUFNLG1CQUFtQixjQUFNLFVBQU4sQ0FBaUIsWUFBWSxRQUFaLEVBQWpCLEVBQXlDLE9BQXpDLEVBQXpCO0FBRUEsV0FBSyxVQUFMO0FBQ0EsV0FBSyxNQUFMLENBQVksZ0JBQVosRUFBOEIsQ0FBOUIsRUFBaUMsaUJBQWlCLE1BQWxEO0FBRUEsVUFBTSxZQUFZLElBQUksU0FBSixDQUFjLEtBQUssV0FBTCxDQUFpQixhQUFqQixDQUFkLENBQWxCO0FBQ0EsV0FBSyxPQUFMLENBQWEsU0FBYixFQUF3QixDQUF4QixFQUEyQixVQUFVLE1BQXJDO0FBRUEsYUFBTyxZQUFLLFVBQUwsQ0FBZ0IsY0FBTSxTQUFOLENBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQWhCLENBQVA7QUFDSDs7Ozs7O0FBckJMLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUdBOzs7OztJQUdBLGU7OztBQVNJOzs7O0FBSUEsMkJBQVksV0FBWixFQUFzQztBQUFBOztBQUNsQyxTQUFLLFlBQUwsR0FBb0IsZUFBZSxJQUFJLHlCQUFKLEVBQW5DO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBTVcsUUFBUSxPQUFSLEU7Ozs7Ozs7Ozs7Ozs7O0FBR1g7Ozs7Ozs7Ozs7Ozs7O2tEQVFpQixnQixFQUF3QixpQixFQUF5QixNLEVBQWtCLGtCOzs7Ozs7b0JBQzNFLDRCQUFhLE1BQWIsQ0FBb0IsZ0JBQXBCLEVBQXNDLFdBQXRDLEM7Ozs7O3NCQUNLLElBQUkseUJBQUosQ0FBZ0IscURBQWhCLEM7OztvQkFFTCw0QkFBYSxNQUFiLENBQW9CLGlCQUFwQixFQUF1QyxXQUF2QyxDOzs7OztzQkFDSyxJQUFJLHlCQUFKLENBQWdCLHNEQUFoQixDOzs7b0JBRUwsMEJBQVksT0FBWixDQUFvQixNQUFwQixFQUE0QixlQUE1QixDOzs7OztzQkFDSyxJQUFJLHlCQUFKLENBQWdCLDRDQUFoQixDOzs7c0JBRU4sQ0FBQyw0QkFBYSxTQUFiLENBQXVCLGtCQUF2QixDQUFELElBQStDLHNCQUFzQixDOzs7OztzQkFDL0QsSUFBSSx5QkFBSixDQUFnQixvQ0FBaEIsQzs7O0FBR0osMkIsR0FBYyxFO0FBSVgsaUIsR0FBSSxDOzs7c0JBQUcsSUFBSSxPQUFPLE07Ozs7O0FBQ2pCLDJCLEdBQWMsMEJBQVksVUFBWixDQUF1QixPQUFPLENBQVAsQ0FBdkIsQyxFQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSw0QkFBWSxtQkFBWixHQUFrQywwQkFBWSxVQUFaLENBQXVCLEtBQUssWUFBTCxDQUFrQixZQUFsQixFQUF2QixDQUFsQztBQUNBLDRCQUFZLDZCQUFaLEdBQTRDLDBCQUFZLFVBQVosQ0FBdUIsQ0FBdkIsQ0FBNUM7QUFDQSw0QkFBWSw2QkFBWixHQUE0QywwQkFBWSxVQUFaLENBQXVCLGdCQUFnQixtQkFBdkMsQ0FBNUMsQyxDQUVBO0FBQ0E7QUFDQTs7cUJBRUksNEJBQWEsT0FBYixDQUFxQix1QkFBckIsQzs7Ozs7c0JBRUksWUFBWSxTQUFaLENBQXNCLFFBQXRCLE9BQXFDLFlBQVksWUFBWixDQUF5QixRQUF6QixFOzs7OztzQkFDL0IsSUFBSSx5QkFBSixDQUFnQix3RkFBaEIsQzs7O0FBRVYsNEJBQVksZ0JBQVosR0FBK0IsZ0JBQS9CO0FBQ0EsNEJBQVksaUJBQVosR0FBZ0MsaUJBQWhDOzs7OztBQUVBLDRCQUFZLGdCQUFaLEdBQStCLHVCQUEvQjtBQUNBLDRCQUFZLGlCQUFaLEdBQWdDLGdCQUFoQzs7O0FBR0UseUIsR0FBWSxZQUFZLFFBQVosRTs7dUJBRVMsS0FBSyxTQUFMLENBQWUsU0FBZixFQUEwQixrQkFBMUIsQzs7O0FBQXJCLDRCO0FBRU4sNEJBQVksS0FBWixHQUFvQixVQUFJLFVBQUosQ0FBZSxhQUFhLEdBQWIsQ0FBaUIsMEJBQVksTUFBWixHQUFxQixVQUFJLE1BQTFDLEVBQWtELFVBQUksTUFBdEQsQ0FBZixDQUFwQixDLENBRUE7O0FBQ00saUMsR0FBb0IsMEJBQVksVUFBWixDQUF1QixZQUF2QixDO0FBQzFCLDBDQUEwQixzQ0FBa0IsSUFBbEIsQ0FBdUIsaUJBQXZCLENBQTFCO0FBRUEsNEJBQVksSUFBWixDQUFpQixpQkFBakI7OztBQXJDK0IsbUI7Ozs7O2tEQXdDNUIsWUFBWSxPQUFaLEdBQXNCLEdBQXRCLENBQTBCO0FBQUEseUJBQWUsWUFBWSxRQUFaLEVBQWY7QUFBQSxpQkFBMUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM0ZYOzs7OztBQUd1QixzQ0FBOEIsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksRUFBWixJQUFrQixDQUFuQixJQUF3QixDQUF0RDtBQUozQiwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOztBQUNBOztBQUNBO0FBR0E7Ozs7OztJQUlBLEk7OztBQWFJOzs7O0FBSUEsa0JBQWtEO0FBQUEsUUFBdEMsTUFBc0MsdUVBQXJCLEtBQUssZ0JBQWdCOztBQUFBOztBQUM5QyxTQUFLLGVBQUwsR0FBdUIsTUFBdkI7QUFDSDtBQUVEOzs7Ozs7Ozs7Z0NBS21CLEksRUFBWTtBQUMzQixjQUFRLElBQVI7QUFDSSxhQUFLLGtCQUFMO0FBQXlCO0FBQ3JCLG1CQUFPLEtBQUssZUFBWjtBQUNIOztBQUNELGFBQUssYUFBTDtBQUNBLGFBQUssY0FBTDtBQUNBO0FBQ0ksbUJBQU8sS0FBSyxJQUFMLENBQVA7QUFDSDs7QUFDRDtBQUFTLGdCQUFNLElBQUkseUJBQUosc0NBQThDLElBQTlDLEVBQU47QUFUYjtBQVdIO0FBRUQ7Ozs7Ozs7K0JBSWU7QUFDWCxhQUFPLEtBQUssTUFBWjtBQUNIO0FBRUQ7Ozs7Ozs7K0JBSWtCLEssRUFBaUI7QUFDL0IsVUFBSSxLQUFKLEVBQVc7QUFDUCxhQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBSyxNQUFMLEdBQWMsSUFBSSxTQUFKLENBQWMsS0FBSyxZQUFuQixDQUFkO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7NEJBR1k7QUFDUixXQUFLLFVBQUw7QUFDSDtBQUVEOzs7Ozs7Ozs7MkJBTWMsSyxFQUFrQixNLEVBQWdCLE0sRUFBYztBQUMxRCxVQUFJLENBQUMsNEJBQWEsTUFBYixDQUFvQixLQUFwQixFQUEyQixTQUEzQixDQUFELElBQTBDLE1BQU0sTUFBTixLQUFpQixDQUEvRCxFQUFrRTtBQUM5RCxjQUFNLElBQUkseUJBQUosQ0FBZ0IscUNBQWhCLENBQU47QUFDSDs7QUFDRCxVQUFJLENBQUMsNEJBQWEsU0FBYixDQUF1QixNQUF2QixDQUFELElBQW1DLFNBQVMsQ0FBaEQsRUFBbUQ7QUFDL0MsY0FBTSxJQUFJLHlCQUFKLENBQWdCLDhCQUFoQixDQUFOO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxTQUFTLENBQWhELEVBQW1EO0FBQy9DLGNBQU0sSUFBSSx5QkFBSixDQUFnQiw4QkFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksU0FBUyxNQUFULEdBQWtCLE1BQU0sTUFBNUIsRUFBb0M7QUFDaEMsY0FBTSxJQUFJLHlCQUFKLENBQWdCLHVEQUFoQixDQUFOO0FBQ0g7O0FBRUQsVUFBSSxjQUFjLE1BQWxCO0FBQ0EsVUFBSSxjQUFjLE1BQWxCOztBQUVBLFNBQUc7QUFDQyxZQUFJLElBQUksQ0FBUjtBQUNBLFlBQU0sUUFBUSxjQUFjLEtBQUssV0FBbkIsR0FBaUMsV0FBakMsR0FBK0MsS0FBSyxXQUFsRTs7QUFFQSxlQUFPLElBQUksS0FBWCxFQUFrQjtBQUNkLGVBQUssTUFBTCxDQUFZLEdBQVosSUFBbUIsTUFBTSxhQUFOLENBQW5CO0FBQ0g7O0FBRUQsYUFBSyxTQUFMO0FBRUEsdUJBQWUsS0FBSyxXQUFwQjtBQUNILE9BWEQsUUFXUyxjQUFjLENBWHZCO0FBWUg7QUFFRDs7Ozs7Ozs7OzRCQU1lLEssRUFBa0IsTSxFQUFnQixNLEVBQWM7QUFDM0QsVUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkIsU0FBM0IsQ0FBRCxJQUEwQyxNQUFNLE1BQU4sS0FBaUIsQ0FBL0QsRUFBa0U7QUFDOUQsY0FBTSxJQUFJLHlCQUFKLENBQWdCLHFDQUFoQixDQUFOO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxTQUFTLENBQWhELEVBQW1EO0FBQy9DLGNBQU0sSUFBSSx5QkFBSixDQUFnQiw4QkFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQUQsSUFBbUMsU0FBUyxDQUFoRCxFQUFtRDtBQUMvQyxjQUFNLElBQUkseUJBQUosQ0FBZ0IsOEJBQWhCLENBQU47QUFDSDs7QUFDRCxVQUFJLFNBQVMsTUFBVCxHQUFrQixNQUFNLE1BQTVCLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSSx5QkFBSixDQUFnQix1REFBaEIsQ0FBTjtBQUNIOztBQUVELFVBQUksY0FBYyxNQUFsQjtBQUNBLFVBQUksY0FBYyxNQUFsQjs7QUFFQSxTQUFHO0FBRUMsWUFBSSxJQUFJLENBQVI7QUFDQSxZQUFNLFFBQVEsY0FBYyxLQUFLLFdBQW5CLEdBQWlDLE1BQWpDLEdBQTBDLEtBQUssV0FBN0Q7O0FBRUEsZUFBTyxJQUFJLEtBQVgsRUFBa0I7QUFDZCxnQkFBTSxhQUFOLElBQXVCLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBdkI7QUFDSDs7QUFFRCxhQUFLLFNBQUw7QUFFQSx1QkFBZSxLQUFLLFdBQXBCO0FBQ0gsT0FaRCxRQVlTLGNBQWMsQ0FadkI7QUFhSDtBQUVEOzs7Ozs7O2dDQUlpQjtBQUNiLFVBQUksU0FBSjtBQUNBLFVBQUksUUFBUSxDQUFaOztBQUVBLFdBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsS0FBSyxlQUFqQyxFQUFrRCxPQUFsRCxFQUEyRDtBQUN2RCxvQkFBWSxJQUFJLFNBQUosQ0FBYyxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQWQsQ0FBWjs7QUFFQSxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxZQUF6QixFQUF1QyxHQUF2QyxFQUE0QztBQUV4QyxlQUFLLE1BQUwsQ0FBWSxDQUFaLElBQWlCLEtBQUssV0FBTCxDQUFpQixVQUFVLEtBQVYsS0FBb0IsVUFBVSxTQUFVLFFBQVEsR0FBUixHQUFjLEdBQWQsR0FBb0IsQ0FBQyxHQUF6QyxLQUFrRCxDQUF0RSxJQUEyRSxDQUE1RixDQUFqQjtBQUNIO0FBQ0o7QUFDSjs7Ozs7O0FBN0pzQixtQkFBc0IsR0FBdEI7QUFDQSx3QkFBMkIsRUFBM0I7QUFDQSxvQkFBdUIsS0FBSyxXQUFMLEdBQW1CLENBQTFDO0FBRXZCOztBQUN3QixtQkFBeUIsSUFBSSxTQUFKLENBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBQyxDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxDQUFkLENBQXpCO0FBTjVCLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUdBOzs7Ozs7SUFJQSxJOzs7QUFXSTs7O0FBR0E7QUFBQTs7QUFDSSxTQUFLLE9BQUwsR0FBZSxJQUFJLFdBQUosQ0FBUyxHQUFULEVBQWMsWUFBSyxjQUFuQixFQUFtQyxHQUFuQyxDQUFmO0FBQ0g7QUFFRDs7Ozs7Ozs7O2dDQUttQixJLEVBQVk7QUFDM0IsY0FBUSxJQUFSO0FBQ0ksYUFBSyxhQUFMO0FBQ0EsYUFBSyxpQkFBTDtBQUNBLGFBQUssa0JBQUw7QUFDQTtBQUNJLG1CQUFPLEtBQUssSUFBTCxDQUFQO0FBQ0g7O0FBQ0Q7QUFBUyxnQkFBTSxJQUFJLHlCQUFKLHNDQUE4QyxJQUE5QyxFQUFOO0FBUGI7QUFTSDtBQUVEOzs7Ozs7OytCQUllO0FBQ1gsYUFBTyxTQUFQO0FBQ0g7QUFFRDs7Ozs7OzsrQkFJa0IsSyxFQUFpQixDQUNsQztBQUVEOzs7Ozs7NEJBR1k7QUFDUixXQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0g7QUFFRDs7Ozs7Ozs7OzJCQU1jLEssRUFBa0IsTSxFQUFnQixNLEVBQWM7QUFDMUQsVUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkIsU0FBM0IsQ0FBRCxJQUEwQyxNQUFNLE1BQU4sS0FBaUIsQ0FBL0QsRUFBa0U7QUFDOUQsY0FBTSxJQUFJLHlCQUFKLENBQWdCLHFDQUFoQixDQUFOO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxTQUFTLENBQWhELEVBQW1EO0FBQy9DLGNBQU0sSUFBSSx5QkFBSixDQUFnQiw4QkFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQUQsSUFBbUMsU0FBUyxDQUFoRCxFQUFtRDtBQUMvQyxjQUFNLElBQUkseUJBQUosQ0FBZ0IsOEJBQWhCLENBQU47QUFDSDs7QUFDRCxVQUFJLFNBQVMsTUFBVCxHQUFrQixNQUFNLE1BQTVCLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSSx5QkFBSixDQUFnQix1REFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksU0FBUyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGNBQU0sSUFBSSx5QkFBSix3Q0FBZ0QsS0FBSyxXQUFyRCxHQUFvRTtBQUFFO0FBQUYsU0FBcEUsQ0FBTjtBQUNIOztBQUVELFVBQUksY0FBYyxNQUFsQjtBQUNBLFVBQUksY0FBYyxNQUFsQjs7QUFFQSxTQUFHO0FBQ0MsWUFBTSxZQUFZLE1BQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsY0FBYyxLQUFLLFdBQTVDLENBQWxCO0FBRUEsa0JBQVUsS0FBSyxXQUFMLEdBQW1CLENBQTdCLElBQWtDLENBQWxDO0FBQ0EsWUFBTSxTQUFTLG9DQUFpQixpQkFBakIsQ0FBbUMsU0FBbkMsRUFBOEMsQ0FBOUMsRUFBaUQsVUFBVSxNQUEzRCxDQUFmO0FBQ0EsWUFBTSxZQUFZLElBQUksV0FBSixDQUFnQixLQUFLLGdCQUFyQixDQUFsQjtBQUNBLDRDQUFpQixpQkFBakIsQ0FBbUMsTUFBbkMsRUFBMkMsU0FBM0MsRUFBc0QsQ0FBdEQ7O0FBRUEsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixTQUFwQjs7QUFFQSx1QkFBZSxLQUFLLFdBQXBCO0FBQ0EsdUJBQWUsS0FBSyxXQUFwQjtBQUNILE9BWkQsUUFZUyxjQUFjLENBWnZCO0FBYUg7QUFFRDs7Ozs7Ozs7OzRCQU1lLEssRUFBa0IsTSxFQUFnQixNLEVBQWM7QUFDM0QsVUFBSSxDQUFDLDRCQUFhLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkIsU0FBM0IsQ0FBRCxJQUEwQyxNQUFNLE1BQU4sS0FBaUIsQ0FBL0QsRUFBa0U7QUFDOUQsY0FBTSxJQUFJLHlCQUFKLENBQWdCLHFDQUFoQixDQUFOO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLDRCQUFhLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBRCxJQUFtQyxTQUFTLENBQWhELEVBQW1EO0FBQy9DLGNBQU0sSUFBSSx5QkFBSixDQUFnQiw4QkFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksQ0FBQyw0QkFBYSxTQUFiLENBQXVCLE1BQXZCLENBQUQsSUFBbUMsU0FBUyxDQUFoRCxFQUFtRDtBQUMvQyxjQUFNLElBQUkseUJBQUosQ0FBZ0IsOEJBQWhCLENBQU47QUFDSDs7QUFDRCxVQUFJLFNBQVMsTUFBVCxHQUFrQixNQUFNLE1BQTVCLEVBQW9DO0FBQ2hDLGNBQU0sSUFBSSx5QkFBSixDQUFnQix1REFBaEIsQ0FBTjtBQUNIOztBQUNELFVBQUksU0FBUyxHQUFULEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLGNBQU0sSUFBSSx5QkFBSix3Q0FBZ0QsS0FBSyxXQUFyRCxHQUFvRTtBQUFFO0FBQUYsU0FBcEUsQ0FBTjtBQUNIOztBQUVELFVBQUksY0FBYyxNQUFsQjtBQUNBLFVBQUksY0FBYyxNQUFsQjs7QUFFQSxTQUFHO0FBQ0MsWUFBTSxrQkFBa0IsS0FBSyxPQUFMLENBQWEsTUFBYixFQUF4Qjs7QUFFQSxZQUFNLFNBQVMsb0NBQWlCLGlCQUFqQixDQUFtQyxlQUFuQyxFQUFvRCxDQUFwRCxFQUF1RCxLQUFLLGdCQUE1RCxDQUFmO0FBRUEsWUFBTSxZQUF1QixJQUFJLFNBQUosQ0FBYyxLQUFLLFdBQW5CLENBQTdCO0FBQ0EsNENBQWlCLGlCQUFqQixDQUFtQyxNQUFuQyxFQUEyQyxTQUEzQyxFQUFzRCxDQUF0RCxFQUF5RCxLQUFLLFdBQTlEO0FBRUEsa0JBQVUsS0FBSyxXQUFMLEdBQW1CLENBQTdCLElBQWtDLENBQWxDO0FBRUEsWUFBSSxJQUFJLENBQVI7O0FBQ0EsZUFBTyxJQUFJLEtBQUssV0FBaEIsRUFBNkI7QUFDekIsZ0JBQU0sYUFBTixJQUF1QixVQUFVLEdBQVYsQ0FBdkI7QUFDSDs7QUFFRCxZQUFNLEtBQUssSUFBSSxRQUFKLENBQWEsZUFBYixDQUFYOztBQUNBLGFBQUssSUFBSSxDQUFULEVBQVksSUFBSSxHQUFHLFVBQW5CLEVBQStCLEdBQS9CLEVBQW9DO0FBQ2hDLGFBQUcsUUFBSCxDQUFZLENBQVosRUFBZSxHQUFHLFFBQUgsQ0FBWSxDQUFaLElBQWlCLElBQWhDO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixlQUFwQjs7QUFFQSx1QkFBZSxLQUFLLFdBQXBCO0FBQ0gsT0F2QkQsUUF1QlMsY0FBYyxDQXZCdkI7QUF3Qkg7Ozs7O0FBbkpEOzs7QUFDd0IsbUJBQXNCLEdBQXRCO0FBQ3hCOztBQUN3Qix1QkFBMEIsR0FBMUI7QUFDeEI7O0FBQ3dCLHdCQUEyQixLQUFLLGVBQUwsR0FBdUIsQ0FBbEQ7QUFONUIsb0I7Ozs7Ozs7Ozs7O0FDWEE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGNBQWM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7Ozs7Ozs7Ozs7OztBQ3R0QkEseUQiLCJmaWxlIjoiaW90YS1waWNvLXBvdy1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9wb3ctanNcIiwgW1wiYmlnLWludGVnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9wb3ctanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29Qb3dKc1wiXSA9IGZhY3Rvcnkocm9vdFtcImJpZ0ludFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iaWdfaW50ZWdlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0L2luZGV4LmpzXCIpO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBqc29uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9qc29uSGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuLyoqXHJcbiAqIEEgY29yZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENvcmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwgPyBhZGRpdGlvbmFsIDoge307XHJcbiAgICAgICAgdGhpcy5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ29yZVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhbiBvYmplY3QgY291bGQgYmUgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gY2hlY2sgaWYgaXQgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIElmIHRoZSB0ZXN0ZWQgb2JqZWN0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFcnJvcihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgXCJtZXNzYWdlXCIgaW4gb2JqICYmIFwiYWRkaXRpb25hbFwiIGluIG9iajtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRm9ybWF0IHRoZSBlcnJvciB0byBhIHJlYWRhYmxlIHZlcnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBGb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGUgZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICBsZXQgb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuZG9tYWluKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5kb21haW59OiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5hZGRpdGlvbmFsKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gYFxcdCR7a2V5fTogJHtqc29uSGVscGVyXzEuSnNvbkhlbHBlci5zdHJpbmdpZnkodGhpcy5hZGRpdGlvbmFsW2tleV0pfVxcbmA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ29yZUVycm9yID0gQ29yZUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl5WlVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJOdmNtVkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYzBSQlFXMUVPMEZCUTI1RUxEQkVRVUYxUkR0QlFVVjJSRHM3UjBGRlJ6dEJRVU5JTEdWQlFYVkNMRk5CUVZFc1MwRkJTenRKUVdkQ2FFTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTm1MRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVlVzUTBGQlF6dFJRVU0zUWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlVUdFJRVU14UWl4UFFVRlBMRWRCUVVjc1MwRkJTeXhUUVVGVExFbEJRVWtzUjBGQlJ5eExRVUZMTEVsQlFVa3NTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFbEJRVWtzVTBGQlV5eEpRVUZKTEVkQlFVY3NTVUZCU1N4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRE8wbEJRMjVJTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTzFGQlExUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJSV0lzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0WlFVTndReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNN1UwRkROMEk3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMWxCUTNKRExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVNMVFqdFJRVVZFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUXpGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRha0lzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRGFFSXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJRenRoUVVObU8xbEJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRuUWtGRFppeEhRVUZITEVsQlFVa3NTMEZCU3l4SFFVRkhMRXRCUVVzc2RVSkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZEZGtVc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRFRqdFJRVVZFTEU5QlFVOHNSMEZCUnl4RFFVRkRPMGxCUTJZc1EwRkJRenREUVVOS08wRkJhRVZFTERoQ1FXZEZReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzWkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6ZEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlN4RlFVRkZMRWxCUVdNN1VVRkROVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRemxDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE1VSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dFpRVU55UWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNNVJDeERRVUZETzBOQlJVbzdRVUZxUTBRc2EwTkJhVU5ESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzU1VGQlNTeFBRVUZQTEZsQlFWa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOc1JpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNCRExIZERRVUYzUXp0dlFrRkRlRU1zVDBGQlR6dHBRa0ZEVmp0eFFrRkJUVHR2UWtGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0aFFVTktPMWxCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnFSU3hEUVVGRExFTkJRVU03VVVGRlJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3huUTBFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBmbG9hdCBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUZsb2F0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNrWXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVlU3VVVGRE4wSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoSkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRmhPMUZCUTNKRExFOUJRVThzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJZVHRSUVVOMlF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0RFFVTktPMEZCY0VORUxHOURRVzlEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIEEgY2FsbGJhY2sgbWV0aG9kIHdoaWNoIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZUdFJRVU0xUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVVc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRlZMRVZCUVVVc1pVRkJlVUk3VVVGRGRFUXNUVUZCVFN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hQUVVGUExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla01zVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRUUVVOdVJUdEpRVU5NTEVOQlFVTTdRMEZEU2p0QlFUZERSQ3h2UTBFMlEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHbENRVUZwUWl4RFFVRkRPMGxCUXpsRkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhPMUZCUXk5Q0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETDBvc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTJoS0xFTkJRVU03UTBGRFNqdEJRUzlEUkN4dlEwRXJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjbGFzcyB3aGljaCBjYW4gcHJvdmlkZSB0aGUgdGltZS5cclxuICovXHJcbmNsYXNzIFRpbWVTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwLzAxLzAxLlxyXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgbXNTaW5jZUVwb2NoKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVGltZVNlcnZpY2UgPSBUaW1lU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEdsdFpWTmxjblpwWTJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YzJWeWRtbGpaWE12ZEdsdFpWTmxjblpwWTJVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVVZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3TzA5QlIwYzdTVUZEU1N4WlFVRlpPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEZEVJc1EwRkJRenREUVVOS08wRkJVa1FzYTBOQlVVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIFNoYTMgaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBTaGEzIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFNIQTMuXHJcbiAgICAgKiBAcGFyYW0gYml0cyBUaGUgbnVtYmVyIG9mIGlucHV0IGJpdHMuXHJcbiAgICAgKiBAcGFyYW0gcGFkZGluZyBUaGUgcGFkZGluZyB0byB1c2UuXHJcbiAgICAgKiBAcGFyYW0gb3V0cHV0Qml0cyBUaGUgbnVtYmVyIG9mIG91dHB1dCBiaXRzLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihiaXRzLCBwYWRkaW5nLCBvdXRwdXRCaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fcGFkZGluZyA9IHBhZGRpbmc7XHJcbiAgICAgICAgdGhpcy5fb3V0cHV0Qml0cyA9IG91dHB1dEJpdHM7XHJcbiAgICAgICAgdGhpcy5fYmxvY2tDb3VudCA9ICgxNjAwIC0gKGJpdHMgPDwgMSkpID4+IDU7XHJcbiAgICAgICAgdGhpcy5fYnl0ZUNvdW50ID0gdGhpcy5fYmxvY2tDb3VudCA8PCAyO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJsb2NrcyA9IG91dHB1dEJpdHMgPj4gNTtcclxuICAgICAgICB0aGlzLl9leHRyYUJ5dGVzID0gKG91dHB1dEJpdHMgJiAzMSkgPj4gMztcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBkaWdlc3QuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9ibG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrcyA9IG5ldyBVaW50MzJBcnJheSh0aGlzLl9ibG9ja0NvdW50ICsgMSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgVWludDMyQXJyYXkoNTApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGRpZ2VzdC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBBcnJheSBvZiBkYXRhIHRvIHVzZSBpbiB0aGUgdXBkYXRlLlxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoaW5wdXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoaW5wdXQsIEFycmF5QnVmZmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIklucHV0IGlzIG5vdCBvZiB0eXBlIEFycmF5QnVmZmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG1lc3NhZ2UubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoaSA9IHRoaXMuX3N0YXJ0OyBpbmRleCA8IGxlbmd0aCAmJiBpIDwgdGhpcy5fYnl0ZUNvdW50OyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSBtZXNzYWdlW2luZGV4XSA8PCBTaGEzLlNISUZUW2krKyAmIDNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RCeXRlSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9ieXRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaSAtIHRoaXMuX2J5dGVDb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrID0gdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldIF49IHRoaXMuX2Jsb2Nrc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMua2VjY2FrUGVybXV0YXRpb24odGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5hbGl6ZSBhbmQgcmV0dXJuIHRoZSBoYXNoIGZvciB0aGUgZGlnZXN0LCB3aWxsIGFsc28gcmVzZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5fb3V0cHV0Qml0cyA+PiAzO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCh0aGlzLl9vdXRwdXRCbG9ja3MgKyAxKSA8PCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgd2hpbGUgKGogPCB0aGlzLl9vdXRwdXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgJiYgaiA8IHRoaXMuX291dHB1dEJsb2NrczsgKytpLCArK2opIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYXJyYXlbaV0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKDAsIGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5fbGFzdEJ5dGVJbmRleDtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSB0aGlzLl9wYWRkaW5nW2kgJiAzXTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdEJ5dGVJbmRleCA9PT0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnQgLSAxXSB8PSAweDgwMDAwMDAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAga2VjY2FrUGVybXV0YXRpb24ocykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXHJcbiAgICAgICAgbGV0IGgsIGwsIG4sIGMwLCBjMSwgYzIsIGMzLCBjNCwgYzUsIGM2LCBjNywgYzgsIGM5LCBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSwgYjE2LCBiMTcsIGIxOCwgYjE5LCBiMjAsIGIyMSwgYjIyLCBiMjMsIGIyNCwgYjI1LCBiMjYsIGIyNywgYjI4LCBiMjksIGIzMCwgYjMxLCBiMzIsIGIzMywgYjM0LCBiMzUsIGIzNiwgYjM3LCBiMzgsIGIzOSwgYjQwLCBiNDEsIGI0MiwgYjQzLCBiNDQsIGI0NSwgYjQ2LCBiNDcsIGI0OCwgYjQ5O1xyXG4gICAgICAgIGZvciAobiA9IDA7IG4gPCA0ODsgbiArPSAyKSB7XHJcbiAgICAgICAgICAgIGMwID0gc1swXSBeIHNbMTBdIF4gc1syMF0gXiBzWzMwXSBeIHNbNDBdO1xyXG4gICAgICAgICAgICBjMSA9IHNbMV0gXiBzWzExXSBeIHNbMjFdIF4gc1szMV0gXiBzWzQxXTtcclxuICAgICAgICAgICAgYzIgPSBzWzJdIF4gc1sxMl0gXiBzWzIyXSBeIHNbMzJdIF4gc1s0Ml07XHJcbiAgICAgICAgICAgIGMzID0gc1szXSBeIHNbMTNdIF4gc1syM10gXiBzWzMzXSBeIHNbNDNdO1xyXG4gICAgICAgICAgICBjNCA9IHNbNF0gXiBzWzE0XSBeIHNbMjRdIF4gc1szNF0gXiBzWzQ0XTtcclxuICAgICAgICAgICAgYzUgPSBzWzVdIF4gc1sxNV0gXiBzWzI1XSBeIHNbMzVdIF4gc1s0NV07XHJcbiAgICAgICAgICAgIGM2ID0gc1s2XSBeIHNbMTZdIF4gc1syNl0gXiBzWzM2XSBeIHNbNDZdO1xyXG4gICAgICAgICAgICBjNyA9IHNbN10gXiBzWzE3XSBeIHNbMjddIF4gc1szN10gXiBzWzQ3XTtcclxuICAgICAgICAgICAgYzggPSBzWzhdIF4gc1sxOF0gXiBzWzI4XSBeIHNbMzhdIF4gc1s0OF07XHJcbiAgICAgICAgICAgIGM5ID0gc1s5XSBeIHNbMTldIF4gc1syOV0gXiBzWzM5XSBeIHNbNDldO1xyXG4gICAgICAgICAgICBoID0gYzggXiAoKGMyIDw8IDEpIHwgKGMzID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzkgXiAoKGMzIDw8IDEpIHwgKGMyID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxMV0gXj0gbDtcclxuICAgICAgICAgICAgc1syMF0gXj0gaDtcclxuICAgICAgICAgICAgc1syMV0gXj0gbDtcclxuICAgICAgICAgICAgc1szMF0gXj0gaDtcclxuICAgICAgICAgICAgc1szMV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0MF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0MV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMwIF4gKChjNCA8PCAxKSB8IChjNSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMxIF4gKChjNSA8PCAxKSB8IChjNCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1syXSBePSBoO1xyXG4gICAgICAgICAgICBzWzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDNdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMiBeICgoYzYgPDwgMSkgfCAoYzcgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMyBeICgoYzcgPDwgMSkgfCAoYzYgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNF0gXj0gaDtcclxuICAgICAgICAgICAgc1s1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ1XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzQgXiAoKGM4IDw8IDEpIHwgKGM5ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzUgXiAoKGM5IDw8IDEpIHwgKGM4ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbN10gXj0gbDtcclxuICAgICAgICAgICAgc1sxNl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxN10gXj0gbDtcclxuICAgICAgICAgICAgc1syNl0gXj0gaDtcclxuICAgICAgICAgICAgc1syN10gXj0gbDtcclxuICAgICAgICAgICAgc1szNl0gXj0gaDtcclxuICAgICAgICAgICAgc1szN10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Nl0gXj0gaDtcclxuICAgICAgICAgICAgc1s0N10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM2IF4gKChjMCA8PCAxKSB8IChjMSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM3IF4gKChjMSA8PCAxKSB8IChjMCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMThdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDldIF49IGw7XHJcbiAgICAgICAgICAgIGIwID0gc1swXTtcclxuICAgICAgICAgICAgYjEgPSBzWzFdO1xyXG4gICAgICAgICAgICBiMzIgPSAoc1sxMV0gPDwgNCkgfCAoc1sxMF0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjMzID0gKHNbMTBdIDw8IDQpIHwgKHNbMTFdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIxNCA9IChzWzIwXSA8PCAzKSB8IChzWzIxXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiMTUgPSAoc1syMV0gPDwgMykgfCAoc1syMF0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjQ2ID0gKHNbMzFdIDw8IDkpIHwgKHNbMzBdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGI0NyA9IChzWzMwXSA8PCA5KSB8IChzWzMxXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiMjggPSAoc1s0MF0gPDwgMTgpIHwgKHNbNDFdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyOSA9IChzWzQxXSA8PCAxOCkgfCAoc1s0MF0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjIwID0gKHNbMl0gPDwgMSkgfCAoc1szXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMjEgPSAoc1szXSA8PCAxKSB8IChzWzJdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyID0gKHNbMTNdIDw8IDEyKSB8IChzWzEyXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMyA9IChzWzEyXSA8PCAxMikgfCAoc1sxM10gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjM0ID0gKHNbMjJdIDw8IDEwKSB8IChzWzIzXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMzUgPSAoc1syM10gPDwgMTApIHwgKHNbMjJdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIxNiA9IChzWzMzXSA8PCAxMykgfCAoc1szMl0gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjE3ID0gKHNbMzJdIDw8IDEzKSB8IChzWzMzXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiNDggPSAoc1s0Ml0gPDwgMikgfCAoc1s0M10gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQ5ID0gKHNbNDNdIDw8IDIpIHwgKHNbNDJdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0MCA9IChzWzVdIDw8IDMwKSB8IChzWzRdID4+PiAyKTtcclxuICAgICAgICAgICAgYjQxID0gKHNbNF0gPDwgMzApIHwgKHNbNV0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiMjIgPSAoc1sxNF0gPDwgNikgfCAoc1sxNV0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjIzID0gKHNbMTVdIDw8IDYpIHwgKHNbMTRdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGI0ID0gKHNbMjVdIDw8IDExKSB8IChzWzI0XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiNSA9IChzWzI0XSA8PCAxMSkgfCAoc1syNV0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjM2ID0gKHNbMzRdIDw8IDE1KSB8IChzWzM1XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMzcgPSAoc1szNV0gPDwgMTUpIHwgKHNbMzRdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIxOCA9IChzWzQ1XSA8PCAyOSkgfCAoc1s0NF0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTkgPSAoc1s0NF0gPDwgMjkpIHwgKHNbNDVdID4+PiAzKTtcclxuICAgICAgICAgICAgYjEwID0gKHNbNl0gPDwgMjgpIHwgKHNbN10gPj4+IDQpO1xyXG4gICAgICAgICAgICBiMTEgPSAoc1s3XSA8PCAyOCkgfCAoc1s2XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGI0MiA9IChzWzE3XSA8PCAyMykgfCAoc1sxNl0gPj4+IDkpO1xyXG4gICAgICAgICAgICBiNDMgPSAoc1sxNl0gPDwgMjMpIHwgKHNbMTddID4+PiA5KTtcclxuICAgICAgICAgICAgYjI0ID0gKHNbMjZdIDw8IDI1KSB8IChzWzI3XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGIyNSA9IChzWzI3XSA8PCAyNSkgfCAoc1syNl0gPj4+IDcpO1xyXG4gICAgICAgICAgICBiNiA9IChzWzM2XSA8PCAyMSkgfCAoc1szN10gPj4+IDExKTtcclxuICAgICAgICAgICAgYjcgPSAoc1szN10gPDwgMjEpIHwgKHNbMzZdID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGIzOCA9IChzWzQ3XSA8PCAyNCkgfCAoc1s0Nl0gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzkgPSAoc1s0Nl0gPDwgMjQpIHwgKHNbNDddID4+PiA4KTtcclxuICAgICAgICAgICAgYjMwID0gKHNbOF0gPDwgMjcpIHwgKHNbOV0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMzEgPSAoc1s5XSA8PCAyNykgfCAoc1s4XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIxMiA9IChzWzE4XSA8PCAyMCkgfCAoc1sxOV0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjEzID0gKHNbMTldIDw8IDIwKSB8IChzWzE4XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiNDQgPSAoc1syOV0gPDwgNykgfCAoc1syOF0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjQ1ID0gKHNbMjhdIDw8IDcpIHwgKHNbMjldID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGIyNiA9IChzWzM4XSA8PCA4KSB8IChzWzM5XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiMjcgPSAoc1szOV0gPDwgOCkgfCAoc1szOF0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjggPSAoc1s0OF0gPDwgMTQpIHwgKHNbNDldID4+PiAxOCk7XHJcbiAgICAgICAgICAgIGI5ID0gKHNbNDldIDw8IDE0KSB8IChzWzQ4XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBzWzBdID0gYjAgXiAofmIyICYgYjQpO1xyXG4gICAgICAgICAgICBzWzFdID0gYjEgXiAofmIzICYgYjUpO1xyXG4gICAgICAgICAgICBzWzEwXSA9IGIxMCBeICh+YjEyICYgYjE0KTtcclxuICAgICAgICAgICAgc1sxMV0gPSBiMTEgXiAofmIxMyAmIGIxNSk7XHJcbiAgICAgICAgICAgIHNbMjBdID0gYjIwIF4gKH5iMjIgJiBiMjQpO1xyXG4gICAgICAgICAgICBzWzIxXSA9IGIyMSBeICh+YjIzICYgYjI1KTtcclxuICAgICAgICAgICAgc1szMF0gPSBiMzAgXiAofmIzMiAmIGIzNCk7XHJcbiAgICAgICAgICAgIHNbMzFdID0gYjMxIF4gKH5iMzMgJiBiMzUpO1xyXG4gICAgICAgICAgICBzWzQwXSA9IGI0MCBeICh+YjQyICYgYjQ0KTtcclxuICAgICAgICAgICAgc1s0MV0gPSBiNDEgXiAofmI0MyAmIGI0NSk7XHJcbiAgICAgICAgICAgIHNbMl0gPSBiMiBeICh+YjQgJiBiNik7XHJcbiAgICAgICAgICAgIHNbM10gPSBiMyBeICh+YjUgJiBiNyk7XHJcbiAgICAgICAgICAgIHNbMTJdID0gYjEyIF4gKH5iMTQgJiBiMTYpO1xyXG4gICAgICAgICAgICBzWzEzXSA9IGIxMyBeICh+YjE1ICYgYjE3KTtcclxuICAgICAgICAgICAgc1syMl0gPSBiMjIgXiAofmIyNCAmIGIyNik7XHJcbiAgICAgICAgICAgIHNbMjNdID0gYjIzIF4gKH5iMjUgJiBiMjcpO1xyXG4gICAgICAgICAgICBzWzMyXSA9IGIzMiBeICh+YjM0ICYgYjM2KTtcclxuICAgICAgICAgICAgc1szM10gPSBiMzMgXiAofmIzNSAmIGIzNyk7XHJcbiAgICAgICAgICAgIHNbNDJdID0gYjQyIF4gKH5iNDQgJiBiNDYpO1xyXG4gICAgICAgICAgICBzWzQzXSA9IGI0MyBeICh+YjQ1ICYgYjQ3KTtcclxuICAgICAgICAgICAgc1s0XSA9IGI0IF4gKH5iNiAmIGI4KTtcclxuICAgICAgICAgICAgc1s1XSA9IGI1IF4gKH5iNyAmIGI5KTtcclxuICAgICAgICAgICAgc1sxNF0gPSBiMTQgXiAofmIxNiAmIGIxOCk7XHJcbiAgICAgICAgICAgIHNbMTVdID0gYjE1IF4gKH5iMTcgJiBiMTkpO1xyXG4gICAgICAgICAgICBzWzI0XSA9IGIyNCBeICh+YjI2ICYgYjI4KTtcclxuICAgICAgICAgICAgc1syNV0gPSBiMjUgXiAofmIyNyAmIGIyOSk7XHJcbiAgICAgICAgICAgIHNbMzRdID0gYjM0IF4gKH5iMzYgJiBiMzgpO1xyXG4gICAgICAgICAgICBzWzM1XSA9IGIzNSBeICh+YjM3ICYgYjM5KTtcclxuICAgICAgICAgICAgc1s0NF0gPSBiNDQgXiAofmI0NiAmIGI0OCk7XHJcbiAgICAgICAgICAgIHNbNDVdID0gYjQ1IF4gKH5iNDcgJiBiNDkpO1xyXG4gICAgICAgICAgICBzWzZdID0gYjYgXiAofmI4ICYgYjApO1xyXG4gICAgICAgICAgICBzWzddID0gYjcgXiAofmI5ICYgYjEpO1xyXG4gICAgICAgICAgICBzWzE2XSA9IGIxNiBeICh+YjE4ICYgYjEwKTtcclxuICAgICAgICAgICAgc1sxN10gPSBiMTcgXiAofmIxOSAmIGIxMSk7XHJcbiAgICAgICAgICAgIHNbMjZdID0gYjI2IF4gKH5iMjggJiBiMjApO1xyXG4gICAgICAgICAgICBzWzI3XSA9IGIyNyBeICh+YjI5ICYgYjIxKTtcclxuICAgICAgICAgICAgc1szNl0gPSBiMzYgXiAofmIzOCAmIGIzMCk7XHJcbiAgICAgICAgICAgIHNbMzddID0gYjM3IF4gKH5iMzkgJiBiMzEpO1xyXG4gICAgICAgICAgICBzWzQ2XSA9IGI0NiBeICh+YjQ4ICYgYjQwKTtcclxuICAgICAgICAgICAgc1s0N10gPSBiNDcgXiAofmI0OSAmIGI0MSk7XHJcbiAgICAgICAgICAgIHNbOF0gPSBiOCBeICh+YjAgJiBiMik7XHJcbiAgICAgICAgICAgIHNbOV0gPSBiOSBeICh+YjEgJiBiMyk7XHJcbiAgICAgICAgICAgIHNbMThdID0gYjE4IF4gKH5iMTAgJiBiMTIpO1xyXG4gICAgICAgICAgICBzWzE5XSA9IGIxOSBeICh+YjExICYgYjEzKTtcclxuICAgICAgICAgICAgc1syOF0gPSBiMjggXiAofmIyMCAmIGIyMik7XHJcbiAgICAgICAgICAgIHNbMjldID0gYjI5IF4gKH5iMjEgJiBiMjMpO1xyXG4gICAgICAgICAgICBzWzM4XSA9IGIzOCBeICh+YjMwICYgYjMyKTtcclxuICAgICAgICAgICAgc1szOV0gPSBiMzkgXiAofmIzMSAmIGIzMyk7XHJcbiAgICAgICAgICAgIHNbNDhdID0gYjQ4IF4gKH5iNDAgJiBiNDIpO1xyXG4gICAgICAgICAgICBzWzQ5XSA9IGI0OSBeICh+YjQxICYgYjQzKTtcclxuICAgICAgICAgICAgc1swXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuXTtcclxuICAgICAgICAgICAgc1sxXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIFBhZGRpbmcgdG8gdXNlIGZvciBLZWNjYWsgKi9cclxuU2hhMy5LRUNDQUtfUEFERElORyA9IG5ldyBVaW50MzJBcnJheShbMSwgMjU2LCA2NTUzNiwgMTY3NzcyMTZdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuU0hJRlQgPSBuZXcgVWludDhBcnJheShbMCwgOCwgMTYsIDI0XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlJPVU5EX0NPTlNUQU5UUyA9IG5ldyBVaW50MzJBcnJheShbMSwgMCwgMzI4OTgsIDAsIDMyOTA2LCAyMTQ3NDgzNjQ4LCAyMTQ3NTE2NDE2LCAyMTQ3NDgzNjQ4LCAzMjkwNywgMCwgMjE0NzQ4MzY0OSxcclxuICAgIDAsIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyNzc3LCAyMTQ3NDgzNjQ4LCAxMzgsIDAsIDEzNiwgMCwgMjE0NzUxNjQyNSwgMCxcclxuICAgIDIxNDc0ODM2NTgsIDAsIDIxNDc1MTY1NTUsIDAsIDEzOSwgMjE0NzQ4MzY0OCwgMzI5MDUsIDIxNDc0ODM2NDgsIDMyNzcxLFxyXG4gICAgMjE0NzQ4MzY0OCwgMzI3NzAsIDIxNDc0ODM2NDgsIDEyOCwgMjE0NzQ4MzY0OCwgMzI3NzgsIDAsIDIxNDc0ODM2NTgsIDIxNDc0ODM2NDgsXHJcbiAgICAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjg5NiwgMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0OSwgMCwgMjE0NzUxNjQyNCwgMjE0NzQ4MzY0OF0pO1xyXG5leHBvcnRzLlNoYTMgPSBTaGEzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmhoTXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdkbGMzUnpMM05vWVRNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFYRkRTVHM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzU1VGQldTeEZRVUZGTEU5QlFXOUNMRVZCUVVVc1ZVRkJhMEk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWVUZCVlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQmEwSTdVVUZETlVJc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlJUdFpRVU14UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTVRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWT0xFOUJRVThzUzBGQlN5eEhRVUZITEUxQlFVMHNSVUZCUlR0WlFVTnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTJJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdaMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dG5Ra0ZET1VJc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlR0dlFrRkRka01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEzWkNPMkZCUTBvN1dVRkRSQ3hMUVVGTExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVU3WjBKQlEyeEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEZPMWxCUTBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF6dG5Ra0ZEYkVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dG5Ra0ZETjBNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzI5Q1FVTnVReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNKRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM0JETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRM1JDTzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTI1Q08xTkJRMG83U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVFVGQlRUdFJRVU5VTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWb1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRWaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEVml4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndReXhKUVVGSkxFMUJRVTBzUTBGQlF6dFJRVU5ZTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeE5RVUZOTEVkQlFVY3NTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRek5FTzJGQlFVMDdXVUZEU0N4TlFVRk5MRWRCUVVjc1NVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYmtNN1VVRkRSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOMFF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xbEJRek5DTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRuUWtGRGJFVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkROMEk3VTBGRFNqdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRaUVVOc1FpeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhRaXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGJrTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03VVVGRllpeFBRVUZQTEUxQlFVMHNRMEZCUXp0SlFVTnNRaXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEZGQlFWRTdVVUZEV2l4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFbEJRVWtzU1VGQlNTeERRVUZETEdOQlFXTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xbEJRM3BETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGFrUXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdG5Ra0ZEZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka0k3VTBGRFNqdFJRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNN1VVRkRha1FzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnlRenRSUVVORUxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRUxHVkJRV1U3U1VGRFVDeHBRa0ZCYVVJc1EwRkJReXhEUVVGak8xRkJRM0JETEhkRVFVRjNSRHRSUVVONFJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGREwwTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlF6bEZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGRE9VVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xRkJRMjVHTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRlRUlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRE1VTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdXVUZETVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRk1VTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRWaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRldDeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMVlzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOV0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlJYQkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGRrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM1pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYUVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzWkRPMGxCUTB3c1EwRkJRenM3UVVGb1ZrUXNLMEpCUVN0Q08wRkJRMUlzYlVKQlFXTXNSMEZCWjBJc1NVRkJTU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEyaEhMR1ZCUVdVN1FVRkRVeXhWUVVGTExFZEJRV1VzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpORkxHVkJRV1U3UVVGRFV5eHZRa0ZCWlN4SFFVRm5RaXhKUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VlFVRlZPMGxCUTI1S0xFTkJRVU1zUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETzBsQlF6TkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNTMEZCU3p0SlFVTjJSU3hWUVVGVkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRhRVlzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGV00wWXNiMEpCYTFaREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY3J5cHRvIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ3J5cHRvRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ3J5cHRvRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiQ3J5cHRvXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5DcnlwdG9FcnJvciA9IENyeXB0b0Vycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0o1Y0hSdlJYSnliM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaWEp5YjNJdlkzSjVjSFJ2UlhKeWIzSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxHOUZRVUZwUlR0QlFVVnFSVHM3UjBGRlJ6dEJRVU5JTEdsQ1FVRjVRaXhUUVVGUkxIRkNRVUZUTzBsQlEzUkRPenM3T3p0UFFVdEhPMGxCUTBnc1dVRkJXU3hQUVVGbExFVkJRVVVzVlVGQmEwTXNSVUZCUlN4VlFVRnJRanRSUVVNdlJTeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU4yUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF6dEpRVU16UWl4RFFVRkRPME5CUTBvN1FVRllSQ3hyUTBGWFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlXCIpO1xyXG5jb25zdCBjdXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9jdXJsXCIpO1xyXG5jb25zdCBrZXJsXzEgPSByZXF1aXJlKFwiLi4vc3Bvbmdlcy9rZXJsXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBzcG9uZ2VzLlxyXG4gKi9cclxuY2xhc3MgU3BvbmdlRmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgU3BvbmdlRmFjdG9yeSgpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImN1cmxcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCguLi5hcmdzKSk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybDgxXCIsICguLi5hcmdzKSA9PiBuZXcgY3VybF8xLkN1cmwoODEpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJjdXJsMjdcIiwgKC4uLmFyZ3MpID0+IG5ldyBjdXJsXzEuQ3VybCgyNykpO1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZS5yZWdpc3RlcihcImtlcmxcIiwgKC4uLmFyZ3MpID0+IG5ldyBrZXJsXzEuS2VybCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU3BvbmdlRmFjdG9yeSA9IFNwb25nZUZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzQnZibWRsUm1GamRHOXllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OW1ZV04wYjNKcFpYTXZjM0J2Ym1kbFJtRmpkRzl5ZVM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUlhwRkxEQkRRVUYxUXp0QlFVTjJReXd3UTBGQmRVTTdRVUZGZGtNN08wZEJSVWM3UVVGRFNDeHRRa0ZCTWtJc1UwRkJVU3g1UWtGQmIwSTdTVUZKYmtRN096dFBRVWRITzBsQlEwZzdVVUZEU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU14UWl4aFFVRmhMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZET1VNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NWMEZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UlN4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeFhRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFJTeGhRVUZoTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hYUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pGTzFGQlEwUXNUMEZCVHl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeFBRVUZQTEdGQlFXRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOd1F5eERRVUZETzBOQlEwbzdRVUV2UWtRc2MwTkJLMEpESW4wPSIsInZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgdG8gY29udmVydCBiZXR3ZWVuIEJpZ0ludGVnZXIgYW5kIG90aGVyIHR5cGVzLlxyXG4gKiBDb252ZXJ0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pcmkvYmxvYi9kZXYvc3JjL21haW4vamF2YS9jb20vaW90YS9pcmkvaGFzaC9LZXJsLmphdmFcclxuICovXHJcbmNsYXNzIEJpZ0ludGVnZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRyaXRzIHRvIGEgYmlnSW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RhcnQuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHRyaXRzIGFycmF5IHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcmV0dXJucyBCaWcgaW50ZWdlciB2ZXJzaW9uIG9mIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJpdHNUb0JpZ0ludGVnZXIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubXVsdGlwbHkoQmlnSW50ZWdlckhlbHBlci5SQURJWCkuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCh0cml0c1tvZmZzZXQgKyBpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYmlnSW50ZWdlciB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYmlnSW50ZWdlciB0byBjb252ZXJ0IHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSBhcnJheSB0byByZWNlaXZlIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBwbGFjZSB0aGUgdHJpdHMgaW4gdGhlIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb1RyaXRzKHZhbHVlLCB0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYW4gSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwID8gdmFsdWUubmVnYXRlKCkgOiB2YWx1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUuZGl2bW9kKEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gZGl2UmVtYWluZGVyLnF1b3RpZW50O1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gZGl2UmVtYWluZGVyLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IEJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gYWJzb2x1dGVWYWx1ZS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0W1wiMVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSByZW1haW5kZXIudG9KU051bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgbmVnYXRpdmUgemVyb1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSB0cml0c1tvZmZzZXQgKyBpXSA9PT0gMCA/IDAgOiAtdHJpdHNbb2Zmc2V0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGJpZ0ludGVnZXIgaW50byBieXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvQnl0ZXModmFsdWUsIGRlc3RpbmF0aW9uLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRlc3RpbmF0aW9uLCBBcnJheUJ1ZmZlcikgfHwgZGVzdGluYXRpb24uYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkZXN0aW5hdGlvbiBtdXN0IGJlIGFuIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBEZXN0aW5hdGlvbiBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1lbWJlciBpZiBpdCBpcyBuZWdhdGl2ZSBmb3IgbGF0ZXJcclxuICAgICAgICBjb25zdCBpc05lZyA9IHZhbHVlLmlzTmVnYXRpdmUoKSA/IC0xIDogMDtcclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gQnV0IHJlbW92ZSBpdCBmb3Igbm93XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGhleFN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IG1ha2Ugc3VyZSB0aGUgaGV4IHN0cmluZyBpcyBhbiBldmVuIGxlbmd0aCBzbyB0aGUgcmVnZXggd29ya3NcclxuICAgICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gYDAke2hleFN0cmluZ31gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9bMC05YS1mXXsyfS9nKTtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBoZXggdG8gbnVtYmVyc1xyXG4gICAgICAgIGNvbnN0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShtYXRjaGVzXHJcbiAgICAgICAgICAgIC5tYXAoaGV4ID0+IHBhcnNlSW50KGAweCR7aGV4fWAsIDE2KSkpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAvLyBQYWQgdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXIgd2l0aCB0aGUgbmVnIHZhbHVlXHJcbiAgICAgICAgbGV0IGkgPSBvZmZzZXQ7XHJcbiAgICAgICAgd2hpbGUgKGkgKyBzaWduZWRCeXRlcy5sZW5ndGggPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIGlzTmVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5kIGNvcHkgaW4gdGhlIGFjdHVhbCBieXRlc1xyXG4gICAgICAgIGZvciAobGV0IGogPSBzaWduZWRCeXRlcy5sZW5ndGg7IGotLSA+IDA7KSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBzaWduZWRCeXRlc1tzaWduZWRCeXRlcy5sZW5ndGggLSAxIC0gal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBieXRlcyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBieXRlcyB0byBzdGFydCBjb252ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBieXRlcyB0byB1c2UgZm9yIGNvbnZlcnNpb24uXHJcbiAgICAgKiBAcmV0dXJucyBCaWcgaW50ZWdlciB2ZXJzaW9uIG9mIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYnl0ZXNUb0JpZ0ludGVnZXIoc291cmNlLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzb3VyY2UsIEFycmF5QnVmZmVyKSB8fCBzb3VyY2UuYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBzb3VyY2UgbXVzdCBiZSBhIG5vbiBlbXB0eSBudW1iZXIgYXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgbGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPiAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc291cmNlLmJ5dGVMZW5ndGggLSBvZmZzZXQgPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFNvdXJjZSBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhzb3VyY2UpO1xyXG4gICAgICAgIGxldCBzaWduZWRCeXRlcyA9IG5ldyBJbnQ4QXJyYXkoZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBkYXRhVmlldy5ieXRlTGVuZ3RoOyBiKyspIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbYl0gPSBkYXRhVmlldy5nZXRJbnQ4KGIgKyBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWwgcGFkZGluZyBsZWF2aW5nIGF0IGxlYXN0IG9uZSBieXRlXHJcbiAgICAgICAgbGV0IHBhZGRpbmdPZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0Qnl0ZSA9IHNpZ25lZEJ5dGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IGlzTmVnID0gZmlyc3RCeXRlIDwgMDtcclxuICAgICAgICAvLyBJZiB0aGUgZmlyc3QgcGFkZGluZyBjaGFyYWN0ZXIgaXMgbmVnYXRpdmUgdGhlbiByZXZlcnNlIHRoZSAycyBjb21wbGVtZW50XHJcbiAgICAgICAgLy8gYnV0IGZpcnN0IHN0cmlwIG9mIHRoZSBsZWFkaW5nIHBhZGRpbmdcclxuICAgICAgICBpZiAoZmlyc3RCeXRlID09PSAwIHx8IGZpcnN0Qnl0ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNpZ25lZEJ5dGVzW3BhZGRpbmdPZmZzZXRdID09PSBmaXJzdEJ5dGUgJiYgcGFkZGluZ09mZnNldCA8IHNpZ25lZEJ5dGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdPZmZzZXQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBTdHJpcCBhbnkgcGFkZGluZ1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlcyA9IHNpZ25lZEJ5dGVzLnNsaWNlKHBhZGRpbmdPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZWcpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoZXhTdHJpbmcgPSBpc05lZyA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhzaWduZWRCeXRlcy5idWZmZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgZHYuYnl0ZUxlbmd0aDsgaCsrKSB7XHJcbiAgICAgICAgICAgIGhleFN0cmluZyArPSBgMDAke2R2LmdldFVpbnQ4KGgpLnRvU3RyaW5nKDE2KX1gLnNsaWNlKC0yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChoZXhTdHJpbmcsIDE2KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIHdob2xlIG51bWJlciBpcyBuZWdhdGl2ZSB0aGVuXHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIDIncyBjb21wbGVtZW50cyBieSBub3RpbmcgYWxsIHRoZSBudW1iZXJzXHJcbiAgICAgICAgLy8gYW5kIGFkZGluZyAxIHRvIHRoZSBsYXN0IGkuZS4gfmJpZ251bSsxXHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBzaWduZWRCeXRlcy5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IH5zaWduZWRCeXRlc1tiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIDEgdG8gbGFzdCBudW1iZXIsIGlmIHRoZSBudW1iZXIgaXMgMHhGRiBjb250aW51ZSB0byBjYXJyeVxyXG4gICAgICAgIGxldCBjID0gc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2NdKys7XHJcbiAgICAgICAgfSB3aGlsZSAoc2lnbmVkQnl0ZXNbYy0tXSA9PT0gMCAmJiBjID4gMCk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuUkFESVggPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoMyk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5SQURJWC5taW51cygxKS5kaXZpZGUoMik7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLk1JTl9UUklUX1ZBTFVFID0gQmlnSW50ZWdlckhlbHBlci5NQVhfVFJJVF9WQUxVRS5uZWdhdGUoKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIID0gQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLkJpZ0ludGVnZXJIZWxwZXIgPSBCaWdJbnRlZ2VySGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZbWxuU1c1MFpXZGxja2hsYkhCbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5b1pXeHdaWEp6TDJKcFowbHVkR1ZuWlhKSVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzT0VSQlFXbERPMEZCUTJwRExITkVRVUZ0UkR0QlFVVnVSRHM3TzBkQlIwYzdRVUZEU0R0SlFXRkpPenM3T3pzN1QwRk5SenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpWRkxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZVVOQlFYbERMRU5CUVVNc1EwRkJRenRUUVVOd1JUdFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1UwRkROMFE3VVVGRlJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPMU5CUXpWRU8xRkJSVVFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVVZFTEVsQlFVa3NTMEZCU3l4SFFVRkhMSEZDUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlJYaENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEyeERMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4eFFrRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBHTzFGQlJVUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRha0lzUTBGQlF6dEpRVVZFT3pzN096czdUMEZOUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4TFFVRjNRaXhGUVVGRkxFdEJRV2RDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRkRWNzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeHhRa0ZCVFN4RFFVRkRMRVZCUVVVN1dVRkRja01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVWRUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVWQlFVVTdXVUZEZUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNaME5CUVdkRExFTkJRVU1zUTBGQlF6dFRRVU16UkR0UlFVVkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF5OURMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEd0RFFVRnJReXhEUVVGRExFTkJRVU03VTBGRE4wUTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHBRMEZCYVVNc1EwRkJReXhEUVVGRE8xTkJRelZFTzFGQlJVUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFRRVU5zUmp0UlFVVkVMRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNjVUpCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUlRsRkxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3haUVVGWkxFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTnNSU3hoUVVGaExFZEJRVWNzV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXp0WlFVTjBReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUlhaRExFbEJRVWtzVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUlVGQlJUdG5Ra0ZETjBNc1UwRkJVeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMR05CUVdNc1EwRkJRenRuUWtGRE5VTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnhFTzFsQlEwUXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1UwRkRPVU03VVVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc2NVSkJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkROMElzYzBKQlFYTkNPMmRDUVVOMFFpeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTjRSVHRUUVVOS08wbEJRMHdzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFYZENMRVZCUVVVc1YwRkJkMElzUlVGQlJTeE5RVUZqTzFGQlF6bEdMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc2NVSkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzSkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGFFVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTJoR0xFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVMEZETjBRN1VVRkZSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4clEwRkJhME1zUTBGQlF5eERRVUZETzFOQlF6ZEVPMUZCUlVRc1NVRkJTU3hYUVVGWExFTkJRVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRaUVVOeVJTeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXd5UkVGQk1rUXNaMEpCUVdkQ0xFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM3BJTzFGQlJVUXNkVU5CUVhWRE8xRkJRM1pETEUxQlFVMHNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVV4UXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUlc1RExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMWxCUTJRc2QwSkJRWGRDTzFsQlEzaENMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4RE8xRkJRMFFzYjBWQlFXOUZPMUZCUTNCRkxFbEJRVWtzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRelZDTEZOQlFWTXNSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSU3hEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVVm9SQ3cyUWtGQk5rSTdVVUZETjBJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNUMEZCVHp0aFFVTndReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZNME1zU1VGQlNTeExRVUZMTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1dVRkRaQ3huUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VTBGRGFFUTdVVUZGUkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVXpReXhwUkVGQmFVUTdVVUZEYWtRc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEyWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0WlFVTXZSQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMmhETzFGQlEwUXNLMEpCUVN0Q08xRkJReTlDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjN1dVRkRka01zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVFVGQmJVSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNdlJTeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZkQlFWY3NRMEZCUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzUkZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU12UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xTkJRemRFTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRUUVVNMVJEdFJRVVZFTEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhOUVVGTkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVTdXVUZEYUVVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjMFJCUVhORUxHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTndTRHRSUVVWRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJSWFJETEVsQlFVa3NWMEZCVnl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTXhReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkZSQ3gxUkVGQmRVUTdVVUZEZGtRc1NVRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzUkNMRTFCUVUwc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRWQ0xEUkZRVUUwUlR0UlFVTTFSU3g1UTBGQmVVTTdVVUZEZWtNc1NVRkJTU3hUUVVGVExFdEJRVXNzUTBGQlF5eEpRVUZKTEZOQlFWTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRaUVVOeVF5eFBRVUZQTEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhUUVVGVExFbEJRVWtzWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4yUml4aFFVRmhMRVZCUVVVc1EwRkJRenRoUVVOdVFqdFpRVU5FTEc5Q1FVRnZRanRaUVVOd1FpeFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dFRRVU5zUkR0UlFVVkVMRWxCUVVrc1MwRkJTeXhGUVVGRk8xbEJRMUFzWjBKQlFXZENMRU5CUVVNc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFOQlEyaEVPMUZCUlVRc1NVRkJTU3hUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVU5xUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRjRU1zVTBGQlV5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTNSRHRSUVVWRUxFOUJRVThzY1VKQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEZkQlFYTkNPMUZCUTJoRUxIVkRRVUYxUXp0UlFVTjJReXh6UkVGQmMwUTdVVUZEZEVRc01FTkJRVEJETzFGQlF6RkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzcERMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOd1F6dFJRVU5FTEdkRlFVRm5SVHRSUVVOb1JTeEpRVUZKTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU12UWl4SFFVRkhPMWxCUTBNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVMEZEY0VJc1VVRkJVU3hYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEpRVU01UXl4RFFVRkRPenRCUVd4UFJDeGxRVUZsTzBGQlExTXNjMEpCUVVzc1IwRkJjMElzY1VKQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1JDeGxRVUZsTzBGQlExTXNLMEpCUVdNc1IwRkJjMElzWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFY3NaVUZCWlR0QlFVTlRMQ3RDUVVGakxFZEJRWE5DTEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0QlFVVnlSeXhsUVVGbE8wRkJRMU1zWjBOQlFXVXNSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRkRkRVFzWlVGQlpUdEJRVU5UTEdsRFFVRm5RaXhIUVVGWExHZENRVUZuUWl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGWU5VWXNORU5CYjA5REluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBoYXNoXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS9oYXNoXCIpO1xyXG5jb25zdCB0cmFuc2FjdGlvbl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJhbnNhY3Rpb25cIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIi4uL2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIGZvciB0cmFuc2FjdGlvbnMuXHJcbiAqIENvbnZlcnRlZCBodHRwczovL2dpdGh1Yi5jb20vaW90YWxlZGdlci9pb3RhLmxpYi5qcy9ibG9iL21hc3Rlci9saWIvY3J5cHRvL3NpZ25pbmcvc2lnbmluZy5qc1xyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb25IZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGhhc2ggZm9yIGEgdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVGhlIHRyYW5zYWN0aW9uIHRvIGdlbmVyYXRlIHRoZSBoYXNoLlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhyIHRyYW5zYWN0aW9uLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaGFzaCh0cmFuc2FjdGlvbikge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cmFuc2FjdGlvbiwgdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJhbnNhY3Rpb24gbXVzdCBiZSBvZiB0eXBlIFRyYW5zYWN0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uVHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSkudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRyYW5zYWN0aW9uVHJpdHMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBoYXNoVHJpdHMgPSBuZXcgSW50OEFycmF5KGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKSk7XHJcbiAgICAgICAgY3VybC5zcXVlZXplKGhhc2hUcml0cywgMCwgaGFzaFRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJpdHNfMS5Ucml0cy5mcm9tQXJyYXkoaGFzaFRyaXRzKS50b1RyeXRlcygpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRyYW5zYWN0aW9uSGVscGVyID0gVHJhbnNhY3Rpb25IZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISmhibk5oWTNScGIyNUlaV3h3WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YUdWc2NHVnljeTkwY21GdWMyRmpkR2x2YmtobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTEhsRVFVRnpSRHRCUVVOMFJDeDFSVUZCYjBVN1FVRkRjRVVzTWtSQlFYZEVPMEZCUTNoRUxITkVRVUZ0UkR0QlFVTnVSQ3c0UkVGQk1rUTdRVUZGTTBRN096dEhRVWRITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGM1FqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMSGxDUVVGWExFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzJRMEZCTmtNc1EwRkJReXhEUVVGRE8xTkJRM2hGTzFGQlJVUXNUVUZCVFN4SlFVRkpMRWRCUVVjc05rSkJRV0VzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRGNrUXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eGhRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUlRWRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVVV4UkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVVM1F5eFBRVUZQTEZkQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1lVRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMnhGTEVOQlFVTTdRMEZEU2p0QlFYUkNSQ3c0UTBGelFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgdGltZVNlcnZpY2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyXCIpO1xyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcHJvb2Ygb2Ygd29yay5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlcnZpY2UgPSB0aW1lU2VydmljZSB8fCBuZXcgdGltZVNlcnZpY2VfMS5UaW1lU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyB0aGUgcHJvb2Ygb2Ygd29yayB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbi5cclxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rVHJhbnNhY3Rpb24gdG8gdXNlIGZvciB0aGUgcG93LlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2hUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG93KHRydW5rVHJhbnNhY3Rpb24sIGJyYW5jaFRyYW5zYWN0aW9uLCB0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnVua1RyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ1bmtUcmFuc2FjdGlvbiBtdXN0IGJlIGFuIG9iamVjdCBvZiB0eXBlIEhhc2hcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShicmFuY2hUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGJyYW5jaFRyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcnJheUhlbHBlcl8xLkFycmF5SGVscGVyLmlzVHlwZWQodHJ5dGVzLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyeXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR5cGUgVHJ5dGVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobWluV2VpZ2h0TWFnbml0dWRlKSB8fCBtaW5XZWlnaHRNYWduaXR1ZGUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBtaW5XZWlnaHRNYWduaXR1ZGUgbXVzdCBiZSA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbmFsVHJ5dGVzID0gW107XHJcbiAgICAgICAgbGV0IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5UcmFuc2FjdGlvbi5mcm9tVHJ5dGVzKHRyeXRlc1tpXSk7XHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHdpdGggbGFzdCBpbmRleCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAvLyBBc3NpZ24gaXQgdGhlIHRydW5rIC8gYnJhbmNoIHdoaWNoIHRoZSB1c2VyIGhhcyBzdXBwbGllZFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJ1bmRsZSwgY2hhaW4gdGhlIGJ1bmRsZSB0cmFuc2FjdGlvbnMgdmlhXHJcbiAgICAgICAgICAgIC8vIHRydW5rVHJhbnNhY3Rpb24gdG9nZXRoZXJcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih0aGlzLl90aW1lU2VydmljZS5tc1NpbmNlRXBvY2goKSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDApO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihQcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSk7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IHRyYW5zYWN0aW9uLCB0byBiZSBwcm9jZXNzZWRcclxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgaXQncyB0aGUgbGFzdCBpbiB0aGUgYnVuZGxlIGFuZCB0aGVuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBpdCB0aGUgc3VwcGxpZWQgdHJ1bmsgYW5kIGJyYW5jaCB0cmFuc2FjdGlvbnNcclxuICAgICAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgbGFzdCB0cmFuc2FjdGlvbiBpbiB0aGUgYnVuZGxlXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24ubGFzdEluZGV4LnRvTnVtYmVyKCkgIT09IHRyYW5zYWN0aW9uLmN1cnJlbnRJbmRleC50b051bWJlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJXcm9uZyBidW5kbGUgb3JkZXIuIFRoZSBidW5kbGUgc2hvdWxkIGJlIG9yZGVyZWQgaW4gZGVzY2VuZGluZyBvcmRlciBmcm9tIGN1cnJlbnRJbmRleFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnRydW5rVHJhbnNhY3Rpb24gPSBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaDtcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmJyYW5jaFRyYW5zYWN0aW9uID0gdHJ1bmtUcmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZXdUcnl0ZXMgPSB0cmFuc2FjdGlvbi50b1RyeXRlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVUcnl0ZXMgPSBhd2FpdCB0aGlzLnNpbmdsZVBvdyhuZXdUcnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm5vbmNlID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzLnN1Yih0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLkxFTkdUSCAtIHRhZ18xLlRhZy5MRU5HVEgsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBoYXNoIG9mIHRoZSBuZXcgdHJhbnNhY3Rpb24gd2l0aCBub25jZSBhbmQgdXNlIHRoYXQgYXMgdGhlIHByZXZpb3VzIGhhc2ggZm9yIG5leHQgZW50cnlcclxuICAgICAgICAgICAgY29uc3QgcmV0dXJuVHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXMoc2luZ2xlVHJ5dGVzKTtcclxuICAgICAgICAgICAgcHJldmlvdXNUcmFuc2FjdGlvbkhhc2ggPSB0cmFuc2FjdGlvbkhlbHBlcl8xLlRyYW5zYWN0aW9uSGVscGVyLmhhc2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgICAgICBmaW5hbFRyeXRlcy5wdXNoKHJldHVyblRyYW5zYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV2ZXJzZSB0aGUgb3JkZXIgc28gdGhhdCBpdCdzIGFzY2VuZGluZyBmcm9tIGN1cnJlbnRJbmRleFxyXG4gICAgICAgIHJldHVybiBmaW5hbFRyeXRlcy5yZXZlcnNlKCkubWFwKHRyYW5zYWN0aW9uID0+IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbWF4aW11bSB0aW1lc3RhbXAgdmFsdWUgdXNlZCBpbiBwcm9vZiBvZiB3b3JrLlxyXG4gKi9cclxuUHJvb2ZPZldvcmtCYXNlLk1BWF9USU1FU1RBTVBfVkFMVUUgPSAoTWF0aC5wb3coMywgMjcpIC0gMSkgLyAyO1xyXG5leHBvcnRzLlByb29mT2ZXb3JrQmFzZSA9IFByb29mT2ZXb3JrQmFzZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210Q1lYTmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzQnliMjltVDJaWGIzSnJMM0J5YjI5bVQyWlhiM0pyUW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNNa1ZCUVhkRk8wRkJRM2hGTEhsRVFVRnpSRHRCUVVOMFJDeDFSRUZCYjBRN1FVRkRjRVFzZFVWQlFXOUZPMEZCUTNCRkxIVkZRVUZ2UlR0QlFVTndSU3cyUkVGQk1FUTdRVUZETVVRc2MwUkJRVzFFTzBGQlEyNUVMRzlGUVVGcFJUdEJRVWRxUlRzN1IwRkZSenRCUVVOSU8wbEJVMGs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hYUVVFd1FqdFJRVU5zUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGZEJRVmNzU1VGQlNTeEpRVUZKTEhsQ1FVRlhMRVZCUVVVc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VlFVRlZPMUZCUTI1Q0xFOUJRVThzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eG5Ra0ZCYzBJc1JVRkJSU3hwUWtGQmRVSXNSVUZCUlN4TlFVRm5RaXhGUVVGRkxHdENRVUV3UWp0UlFVTXhSeXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRVZCUVVVN1dVRkRPVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0VFFVTm9SanRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh6UkVGQmMwUXNRMEZCUXl4RFFVRkRPMU5CUTJwR08xRkJRMFFzU1VGQlNTeERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTjBReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMUZCUTBRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEzaEZMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03VTBGREwwUTdVVUZGUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRmRrSXNTVUZCU1N4MVFrRkJOa0lzUTBGQlF6dFJRVVZzUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVVYwUkN4dlEwRkJiME03V1VGRGNFTXNNa1JCUVRKRU8xbEJRek5FTERCRVFVRXdSRHRaUVVNeFJDdzBRa0ZCTkVJN1dVRkROVUlzVjBGQlZ5eERRVUZETEcxQ1FVRnRRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTXpSaXhYUVVGWExFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRVVzVjBGQlZ5eERRVUZETERaQ1FVRTJRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVdVc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMWxCUlhoSExHOUVRVUZ2UkR0WlFVTndSQ3h6UkVGQmMwUTdXVUZEZEVRc2RVUkJRWFZFTzFsQlJYWkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJUdG5Ra0ZETDBNc01FTkJRVEJETzJkQ1FVTXhReXhKUVVGSkxGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1YwRkJWeXhEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0dlFrRkRNVVVzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2QwWkJRWGRHTEVOQlFVTXNRMEZCUXp0cFFrRkRia2c3WjBKQlEwUXNWMEZCVnl4RFFVRkRMR2RDUVVGblFpeEhRVUZITEdkQ1FVRm5RaXhEUVVGRE8yZENRVU5vUkN4WFFVRlhMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU03WVVGRGNrUTdhVUpCUVUwN1owSkJRMGdzVjBGQlZ5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMmRDUVVOMlJDeFhRVUZYTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1lVRkRjRVE3V1VGRlJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRmVrTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSVUZCUlN4clFrRkJhMElzUTBGQlF5eERRVUZETzFsQlJYcEZMRmRCUVZjc1EwRkJReXhMUVVGTExFZEJRVWNzVTBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZiRWNzZDBkQlFYZEhPMWxCUTNoSExFMUJRVTBzYVVKQlFXbENMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1dVRkRMMFFzZFVKQlFYVkNMRWRCUVVjc2NVTkJRV2xDTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdXVUZGY0VVc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8xTkJRM1pETzFGQlEwUXNOa1JCUVRaRU8xRkJRemRFTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlF6VkZMRU5CUVVNN08wRkJOVVpFT3p0SFFVVkhPMEZCUTI5Q0xHMURRVUZ0UWl4SFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlNtNUdMREJEUVhOSFF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgQ3VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vY3VybC9jdXJsLmpzXHJcbiAqL1xyXG5jbGFzcyBDdXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEN1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm91bmRzIFRoZSBudW1iZXIgb2Ygcm91bmRzIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iocm91bmRzID0gQ3VybC5OVU1CRVJfT0ZfUk9VTkRTKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZSb3VuZHMgPSByb3VuZHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb25zdGFudCB0byBnZXQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY29uc3RhbnQuXHJcbiAgICAgKi9cclxuICAgIGdldENvbnN0YW50KG5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9ST1VORFNcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mUm91bmRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiU1RBVEVfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEN1cmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIGhhc2hlci5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBUaGUgaW5pdGlhbCBzdGF0ZSBmb3IgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgSW50OEFycmF5KEN1cmwuU1RBVEVfTEVOR1RIKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBYnNvcmIgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IGludG8gdGhlIHRyaXRzIHRvIGFic29yYiBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIGFic29yYi5cclxuICAgICAqL1xyXG4gICAgYWJzb3JiKHRyaXRzLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cml0cywgSW50OEFycmF5KSB8fCB0cml0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUcml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIk9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJMZW5ndGggbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuZ3RoICsgb2Zmc2V0ID4gdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCArIGxlbmd0aCBpcyBiZXlvbmQgdGhlIGxlbmd0aCBvZiB0aGUgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gbG9jYWxMZW5ndGggPCBDdXJsLkhBU0hfTEVOR1RIID8gbG9jYWxMZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpKytdID0gdHJpdHNbbG9jYWxPZmZzZXQrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsZW5ndGggOiBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tsb2NhbE9mZnNldCsrXSA9IHRoaXMuX3N0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gQ3VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGhhc2guXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgdHJhbnNmb3JtKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZUNvcHk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyT2ZSb3VuZHM7IHJvdW5kKyspIHtcclxuICAgICAgICAgICAgc3RhdGVDb3B5ID0gbmV3IEludDhBcnJheSh0aGlzLl9zdGF0ZS5zbGljZSgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDdXJsLlNUQVRFX0xFTkdUSDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSA9IEN1cmwuVFJVVEhfVEFCTEVbc3RhdGVDb3B5W2luZGV4XSArIChzdGF0ZUNvcHlbaW5kZXggKz0gKGluZGV4IDwgMzY1ID8gMzY0IDogLTM2NSldIDw8IDIpICsgNV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQ3VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuQ3VybC5OVU1CRVJfT0ZfUk9VTkRTID0gODE7XHJcbkN1cmwuU1RBVEVfTEVOR1RIID0gQ3VybC5IQVNIX0xFTkdUSCAqIDM7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5DdXJsLlRSVVRIX1RBQkxFID0gbmV3IEludDhBcnJheShbMSwgMCwgLTEsIDIsIDEsIC0xLCAwLCAyLCAtMSwgMSwgMF0pO1xyXG5leHBvcnRzLkN1cmwgPSBDdXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMk4xY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzYzBSQlFXMUVPMEZCUjI1RU96czdSMEZIUnp0QlFVTklPMGxCWVVrN096dFBRVWRITzBsQlEwZ3NXVUZCV1N4VFFVRnBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMUZCUXpsRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRPMGxCUTJ4RExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVjBGQlZ5eERRVUZETEVsQlFWazdVVUZETTBJc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFZpeExRVUZMTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03WjBKQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF6dGhRVU12UWp0WlFVTkVMRXRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRMjVDTEV0QlFVc3NZMEZCWXp0blFrRkRia0k3YjBKQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YVVKQlEzSkNPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRlRVU3U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVlVGQlZTeERRVUZETEV0QlFXbENPMUZCUXk5Q0xFbEJRVWtzUzBGQlN5eEZRVUZGTzFsQlExQXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03VTBGRGRrSTdZVUZCVFR0WlFVTklMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xTkJRMnhFTzBsQlEwd3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzUzBGQlN6dFJRVU5TTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRKUVVOMFFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTXhSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemxFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRhRVU3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1UwRkRiRVk3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xbEJSVGxGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRXRCUVVzc1JVRkJSVHRuUWtGRFpDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRNME03V1VGRlJDeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkZha0lzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRia01zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRPVVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTm9SVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTXZReXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFOQlEzcEVPMUZCUTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0VFFVTnNSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVWRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTldMRTFCUVUwc1MwRkJTeXhIUVVGSExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkZla1VzVDBGQlR5eERRVUZETEVkQlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVOa0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTXpRenRaUVVWRUxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0WlFVVnFRaXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkxMRk5CUVZNN1VVRkRZaXhKUVVGSkxGTkJRVzlDTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlJXUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGRrUXNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVdlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRuUWtGRmVFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU51U0R0VFFVTktPMGxCUTB3c1EwRkJRenM3UVVFM1NuTkNMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlF6RkNMSEZDUVVGblFpeEhRVUZYTEVWQlFVVXNRMEZCUXp0QlFVTTVRaXhwUWtGQldTeEhRVUZYTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSVzVGTEdWQlFXVTdRVUZEVXl4blFrRkJWeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZPZWtjc2IwSkJLMHBESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzaGEzXzEgPSByZXF1aXJlKFwiLi4vZGlnZXN0cy9zaGEzXCIpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBiaWdJbnRlZ2VySGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9iaWdJbnRlZ2VySGVscGVyXCIpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgSVNwb25nZSB1c2luZyBLZXJsIGFsZ29yaXRobS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBLZXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEtlcmwuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2tlY2NhayA9IG5ldyBzaGEzXzEuU2hhMygzODQsIHNoYTNfMS5TaGEzLktFQ0NBS19QQURESU5HLCAzODQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNvbnN0YW50IGZvciB0aGUgc3BvbmUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29uc3RhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQklUX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCWVRFX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEtlcmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBoYXNoZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgVGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoc3RhdGUpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fa2VjY2FrLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSB0cml0cy5zbGljZShsb2NhbE9mZnNldCwgbG9jYWxPZmZzZXQgKyBLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgdHJpdFN0YXRlW0tlcmwuSEFTSF9MRU5HVEggLSAxXSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLnRyaXRzVG9CaWdJbnRlZ2VyKHRyaXRTdGF0ZSwgMCwgdHJpdFN0YXRlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZSA9IG5ldyBBcnJheUJ1ZmZlcihLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9CeXRlcyhiaWdJbnQsIGJ5dGVTdGF0ZSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlKTtcclxuICAgICAgICAgICAgbG9jYWxPZmZzZXQgKz0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RhdGVCdWZmZXIgPSB0aGlzLl9rZWNjYWsuZGlnZXN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJ5dGVzVG9CaWdJbnRlZ2VyKGJ5dGVTdGF0ZUJ1ZmZlciwgMCwgS2VybC5CWVRFX0hBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpdFN0YXRlID0gbmV3IEludDhBcnJheShLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYmlnSW50ZWdlclRvVHJpdHMoYmlnSW50LCB0cml0U3RhdGUsIDAsIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IEtlcmwuSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdHJpdFN0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGR2LmJ5dGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZHYuc2V0VWludDgoaSwgZHYuZ2V0VWludDgoaSkgXiAweEZGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9rZWNjYWsudXBkYXRlKGJ5dGVTdGF0ZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuLyogQGludGVybmFsICovXHJcbktlcmwuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CWVRFX0hBU0hfTEVOR1RIID0gS2VybC5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLktlcmwgPSBLZXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhMlZ5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMnRsY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzTUVOQlFYVkRPMEZCUTNaRExITkVRVUZ0UkR0QlFVTnVSQ3hyUlVGQkswUTdRVUZITDBRN096dEhRVWRITzBGQlEwZzdTVUZYU1RzN1QwRkZSenRKUVVOSU8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRmRCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzVjBGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNelJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEZkQlFWY3NRMEZCUXl4SlFVRlpPMUZCUXpOQ0xGRkJRVkVzU1VGQlNTeEZRVUZGTzFsQlExWXNTMEZCU3l4aFFVRmhMRU5CUVVNN1dVRkRia0lzUzBGQlN5eHBRa0ZCYVVJc1EwRkJRenRaUVVOMlFpeExRVUZMTEd0Q1FVRnJRanRuUWtGRGRrSTdiMEpCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdhVUpCUTNKQ08xbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFVTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1UwRkJVeXhEUVVGRE8wbEJRM0pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTMEZCYVVJN1NVRkRia01zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1MwRkJTenRSUVVOU0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRXRCUVdkQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZETVVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVNNVJDeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUTJoRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRMME1zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0VFFVTjZSRHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXk5RExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVMEZEZWtRN1VVRkRSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMU5CUTJ4R08xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOd1FpeE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhuUTBGQlowTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjZSanRSUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdVVUZGZWtJc1IwRkJSenRaUVVORExFMUJRVTBzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkZNMFVzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFsQlEyeEdMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETzFsQlEzcEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZla1FzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03V1VGRkwwSXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRGFFTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGJrTXNVVUZCVVN4WFFVRlhMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRemxDTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTlCUVU4c1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOb1JUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1UwRkRla1E3VVVGRFJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNdlF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMU5CUTNwRU8xRkJRMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zZFVSQlFYVkVMRU5CUVVNc1EwRkJRenRUUVVOc1JqdFJRVU5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zWjBOQlFXZERMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRla1k3VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWM3V1VGRFF5eE5RVUZOTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFsQlJUbERMRTFCUVUwc1RVRkJUU3hIUVVGSExHMURRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNN1dVRkZOMFlzVFVGQlRTeFRRVUZUTEVkQlFXTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlF6ZEVMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVVV6UlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZjRU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTFZc1QwRkJUeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRla0lzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEZWtNN1dVRkZSQ3hOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEZGQlFWRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVONlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRMmhETEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGVrTTdXVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0WlFVVnlReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTnVReXhSUVVGUkxGZEJRVmNzUjBGQlJ5eERRVUZETEVWQlFVVTdTVUZET1VJc1EwRkJRenM3UVVGdVNrUXNaVUZCWlR0QlFVTlRMR2RDUVVGWExFZEJRVmNzUjBGQlJ5eERRVUZETzBGQlEyeEVMR1ZCUVdVN1FVRkRVeXh2UWtGQlpTeEhRVUZYTEVkQlFVY3NRMEZCUXp0QlFVTjBSQ3hsUVVGbE8wRkJRMU1zY1VKQlFXZENMRWRCUVZjc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZPYUVZc2IwSkJjVXBESW4wPSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGFkZHJlc3Nlcy5cclxuICovXHJcbmNsYXNzIEFkZHJlc3Mge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3NUcnl0ZXMgPSBhZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrc3VtVHJ5dGVzID0gY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhZGRyZXNzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGFkZHJlc3Mgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gYWRkcmVzcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSCAmJiB0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIHNob3VsZCBlaXRoZXIgYmUgJHtBZGRyZXNzLkxFTkdUSH0gb3IgJHtBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cigwLCBBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID09PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIGNoZWNrc3VtVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cihBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzcyhhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggYSBjaGVja3N1bSwgY3JlYXRpbmcgYSBibGFuayBvbmUgaWYgbmVlZGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBjaGVja3N1LC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXNXaXRoQ2hlY2tzdW0oKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGlzIGFkZHJlc3MgaGFzIG5vIGNoZWNrc3VtIGNhbGN1bGF0ZWQgZm9yIGl0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBhZGRyZXNzIHdpdGhvdXQgY2hlY2tzdW0gKDgxKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhbiBhZGRyZXNzIGNoZWNrc3VtICg5KS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNID0gOTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIHZhbGlkIGFkZHJlc3Mgd2l0aCBjaGVja3N1bSAoOTApLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSA9IEFkZHJlc3MuTEVOR1RIICsgQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU07XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkFkZHJlc3MuRU1QVFkgPSBBZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEFkZHJlc3MuTEVOR1RIKSkpO1xyXG5leHBvcnRzLkFkZHJlc3MgPSBBZGRyZXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMkZrWkhKbGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGM1Fra3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRWEZDTEVWQlFVVXNZMEZCYzBJN1VVRkROMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCU1N4alFVRmpMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRjRU1zU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeGxRVUZOTEVOQlFVTXNSVUZCUlR0WlFVTjJReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlEwRkJOa01zUTBGQlF5eERRVUZETzFOQlEzUkZPMUZCUlVRc1RVRkJUU3haUVVGWkxFZEJRVWNzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlhoRExFbEJRVWtzV1VGQldTeERRVUZETEUxQlFVMHNTMEZCU3l4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxGbEJRVmtzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTzFsQlEyaEhMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRFFVRm5ReXhQUVVGUExFTkJRVU1zVFVGQlRTeFBRVUZQTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRiRXM3VVVGRlJDeE5RVUZOTEdGQlFXRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkROMFFzU1VGQlNTeGpRVUZqTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3haUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzUlVGQlJUdFpRVU4wUkN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkRlRVE3VVVGRFJDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF6dEpRVU4wUkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1NVRkRiRVFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHOUNRVUZ2UWp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRTlCUVU4c1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6dFRRVU40UlR0aFFVRk5PMWxCUTBnc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNaMFJCUVdkRUxFTkJRVU1zUTBGQlF6dFRRVU42UlR0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUlVGQlJUdFpRVU0zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXp0VFFVTnlSRHRoUVVGTk8xbEJRMGdzVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRPMU5CUXpsQ08wbEJRMHdzUTBGQlF6czdRVUZ1UmtRN08wZEJSVWM3UVVGRGIwSXNZMEZCVFN4SFFVRlhMRVZCUVVVc1EwRkJRenRCUVVNelF6czdSMEZGUnp0QlFVTnZRaXgxUWtGQlpTeEhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTnVSRHM3UjBGRlJ6dEJRVU52UWl3MFFrRkJiMElzUjBGQlZ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU03UVVGRkwwWTdPMGRCUlVjN1FVRkRiMElzWVVGQlN5eEhRVUZaTEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1pVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZxUWpsSExEQkNRWEZHUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBoYXNoZXMuXHJcbiAqL1xyXG5jbGFzcyBIYXNoIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaGFzaCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBoYXNoIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBoYXNoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBIYXNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhoYXNoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGhhc2gsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBoYXNoIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhhc2gubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gSGFzaC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGhhc2ggc2hvdWxkIGJlICR7SGFzaC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSGFzaChoYXNoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgaGFzaCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgaGFzaC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBoYXNoICg4MSkuXHJcbiAqL1xyXG5IYXNoLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5IYXNoLkVNUFRZID0gSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChIYXNoLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5IYXNoID0gSGFzaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdGemFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMmhoYzJndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUZoU1N4bFFVRmxPMGxCUTJZc1dVRkJiMElzVFVGQll6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU5xUXl4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMR1ZCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0JETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEQkRRVUV3UXl4RFFVRkRMRU5CUVVNN1UwRkRia1U3VVVGRlJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03VVVGRE4wSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU40UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExFMUJRVTBzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZEdPMUZCUlVRc1QwRkJUeXhKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVOdVF5eERRVUZET3p0QlFXcEVSRHM3UjBGRlJ6dEJRVU52UWl4WFFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGVkJRVXNzUjBGQlV5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVuSkhMRzlDUVcxRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnRzLlxyXG4gKi9cclxuY2xhc3MgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBUaGUgdHJ5dGVzIHRvIGNyZWF0ZSB0aGUgc2lnbmF0dXJlIGZyYWdtZW50IGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50Lmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgJHtTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudChzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHNpZ25hdHVyZSBmcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBvZiBhIHZhbGlkIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50ICgyMTg3KVxyXG4gKi9cclxuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCA9IDIxODc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudCBhbGwgOXMuXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuZnJvbVRyeXRlcyh0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyhcIjlcIi5yZXBlYXQoU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpKTtcclxuZXhwb3J0cy5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgPSBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmMybG5ibUYwZFhKbFRXVnpjMkZuWlVaeVlXZHRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMSGRDUVVGblF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdXVUZEZUVRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRVJCUVRoRUxFTkJRVU1zUTBGQlF6dFRRVU4yUmp0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExIZENRVUYzUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRMnBFTEVsQlFVa3NUVUZCVFN4TFFVRkxMSGRDUVVGM1FpeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVTTFReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3d1EwRkJNRU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGNrazdVVUZEUkN4UFFVRlBMRWxCUVVrc2QwSkJRWGRDTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF6dEpRVU5zUlN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnVReXhEUVVGRE96dEJRV2hFUkRzN1IwRkZSenRCUVVOdlFpd3JRa0ZCVFN4SFFVRlhMRWxCUVVrc1EwRkJRenRCUVVNM1F6czdSMEZGUnp0QlFVTnZRaXc0UWtGQlN5eEhRVUUyUWl4M1FrRkJkMElzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFWSnFTeXcwUkVGclJFTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBUYWcge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0YWcgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSB0YWcgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRhZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModGFnKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRhZywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRhZyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVzU3RyaW5nID0gdGFnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPiBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0YWcgc2hvdWxkIGJlIGF0IG1vc3QgJHtUYWcuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVzU3RyaW5nLmxlbmd0aCA8IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdHJ5dGVzU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRhZyh0cnl0ZXNTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0YWcgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRhZy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdGFnICgyNykuXHJcbiAqL1xyXG5UYWcuTEVOR1RIID0gMjc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSB0YWcgYWxsIDlzLlxyXG4gKi9cclxuVGFnLkVNUFRZID0gVGFnLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFRhZy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuVGFnID0gVGFnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR0ZuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRHRm5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVmM3VVVGRGFFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4bFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOdVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXg1UTBGQmVVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8xRkJSVVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xRkJSV3hETEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEyeERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhIUVVGSExFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVONFNEdFJRVVZFTEU5QlFVOHNXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzSkRMRmxCUVZrc1NVRkJTU3hIUVVGSExFTkJRVU03VTBGRGRrSTdVVUZGUkN4UFFVRlBMRWxCUVVrc1IwRkJSeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZET3p0QlFYUkVSRHM3UjBGRlJ6dEJRVU52UWl4VlFVRk5MRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJRek5ET3p0SFFVVkhPMEZCUTI5Q0xGTkJRVXNzUjBGQlVTeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVteEhMR3RDUVhkRVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IGFkZHJlc3NfMSA9IHJlcXVpcmUoXCIuL2FkZHJlc3NcIik7XHJcbmNvbnN0IGhhc2hfMSA9IHJlcXVpcmUoXCIuL2hhc2hcIik7XHJcbmNvbnN0IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xID0gcmVxdWlyZShcIi4vc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCIuL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyYW5zYWN0aW9ucy5cclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbiBmcm9tIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudC5cclxuICAgICAqIEBwYXJhbSBhZGRyZXNzIFRoZSBhZGRyZXNzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBvYnNvbGV0ZVRhZyBPYnNvbGV0ZSB0cmFuc2FjdGlvbiB0YWcuXHJcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIFRoZSB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudEluZGV4IFRoZSBjdXJyZW50IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGxhc3RJbmRleCBUaGUgbGFzdCBpbmRleC5cclxuICAgICAqIEBwYXJhbSBidW5kbGUgVGhlIGJ1bmRsZS5cclxuICAgICAqIEBwYXJhbSB0cnVua1RyYW5zYWN0aW9uIFRoZSB0cnVuayB0cmFuc2FjdGlvbi5cclxuICAgICAqIEBwYXJhbSBicmFuY2hUcmFuc2FjdGlvbiBUaGUgYnJhbmNoIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRhZyBUaGUgdGFnLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIFRoZSBhdHRhY2htZW50IHRpbWVzdGFtcCBsb3dlciBib3VuZC5cclxuICAgICAqIEBwYXJhbSBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCAgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIHVwcGVyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIG5vbmNlIFRoZSBub25jZS5cclxuICAgICAqIEByZXR1cm5zIE5ldyBpbnN0YW5jZSBvZiB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21QYXJhbXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LCBhZGRyZXNzLCB2YWx1ZSwgb2Jzb2xldGVUYWcsIHRpbWVzdGFtcCwgY3VycmVudEluZGV4LCBsYXN0SW5kZXgsIGJ1bmRsZSwgdHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRhZywgYXR0YWNobWVudFRpbWVzdGFtcCwgYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQsIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kLCBub25jZSkge1xyXG4gICAgICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCk7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50O1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHZhbHVlLCAxMSk7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSBvYnNvbGV0ZVRhZztcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIodGltZXN0YW1wKTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoY3VycmVudEluZGV4KTtcclxuICAgICAgICB0eC5sYXN0SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIobGFzdEluZGV4KTtcclxuICAgICAgICB0eC5idW5kbGUgPSBidW5kbGU7XHJcbiAgICAgICAgdHgudHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBicmFuY2hUcmFuc2FjdGlvbjtcclxuICAgICAgICB0eC50YWcgPSB0YWc7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wKTtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcihhdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQpO1xyXG4gICAgICAgIHR4Lm5vbmNlID0gbm9uY2U7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24gZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgZm9yIHRoZSB0aGlzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgdGhpcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModHJ5dGVzKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRyeXRlcyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0cnl0ZXMubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gVHJhbnNhY3Rpb24uTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnl0ZXMgbXVzdCBiZSAke1RyYW5zYWN0aW9uLkxFTkdUSH0gaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhTdGFydCA9IDIyNzk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tJbmRleExlbmd0aCA9IDE2O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdHJ5dGVzLnN1YihjaGVja0luZGV4U3RhcnQsIGNoZWNrSW5kZXhMZW5ndGgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKGNoZWNrICE9PSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIGJldHdlZW4gJHtjaGVja0luZGV4U3RhcnR9IGFuZCAke2NoZWNrSW5kZXhTdGFydCArIGNoZWNrSW5kZXhMZW5ndGh9IHNob3VsZCBiZSBhbGwgOXNgLCB7IGNoZWNrIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IDA7XHJcbiAgICAgICAgdHguc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50ID0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEuU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEg7XHJcbiAgICAgICAgdHguYWRkcmVzcyA9IGFkZHJlc3NfMS5BZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gYWRkcmVzc18xLkFkZHJlc3MuTEVOR1RIO1xyXG4gICAgICAgIHR4LnZhbHVlID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIDExKSwgMTEpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IDExO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IFRyYW5zYWN0aW9uLkNIRUNLX1ZBTFVFX0xFTkdUSDtcclxuICAgICAgICB0eC5vYnNvbGV0ZVRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LnRpbWVzdGFtcCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5jdXJyZW50SW5kZXggPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmJ1bmRsZSA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC5icmFuY2hUcmFuc2FjdGlvbiA9IGhhc2hfMS5IYXNoLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgaGFzaF8xLkhhc2guTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gaGFzaF8xLkhhc2guTEVOR1RIO1xyXG4gICAgICAgIHR4LnRhZyA9IHRhZ18xLlRhZy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRhZ18xLlRhZy5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0YWdfMS5UYWcuTEVOR1RIO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcFVwcGVyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHgubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgcmV0dXJuIHR4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cmFuc2FjdGlvbiB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNhY3Rpb24gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5hZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3MgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYWRkcmVzczogdGhpcy5hZGRyZXNzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5vYnNvbGV0ZVRhZywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgb2Jzb2xldGVUYWcgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgb2Jzb2xldGVUYWc6IHRoaXMub2Jzb2xldGVUYWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJ1bmRsZSwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBidW5kbGUgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnVuZGxlOiB0aGlzLmJ1bmRsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMudHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHRydW5rVHJhbnNhY3Rpb246IHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnJhbmNoVHJhbnNhY3Rpb246IHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm5vbmNlLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBub25jZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBub25jZTogdGhpcy5ub25jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzID0gdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICArIHRoaXMub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy50cnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5ub25jZS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGggJHtsZW5ndGh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcblxcdHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogXCIkeyh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB8fCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YWRkcmVzczogXCIkeyh0aGlzLmFkZHJlc3MgfHwgYWRkcmVzc18xLkFkZHJlc3MuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dmFsdWU6ICR7KHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvTnVtYmVyKCl9XG5cXHRvYnNvbGV0ZVRhZzogXCIkeyh0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0aW1lc3RhbXA6ICR7KHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGN1cnJlbnRJbmRleDogJHsodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bGFzdEluZGV4OiAkeyh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRidW5kbGU6IFwiJHsodGhpcy5idW5kbGUgfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dHJ1bmtUcmFuc2FjdGlvbjogXCIkeyh0aGlzLnRydW5rVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YnJhbmNoVHJhbnNhY3Rpb246IFwiJHsodGhpcy5icmFuY2hUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0YWc6IFwiJHsodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YXR0YWNobWVudFRpbWVzdGFtcDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdG5vbmNlOiBcIiR7KHRoaXMubm9uY2UgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcbn1gO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdHJhbnNhY3Rpb24gKDI2NzMpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uTEVOR1RIID0gMjY3MztcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBjaGVjayB2YWx1ZSAoMTYpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIID0gMTY7XHJcbi8qKlxyXG4gKiBUaGUgY2hlY2sgdmFsdWUgZm9yIGJ1bmRsZXMgYWxsIDlzLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUgPSBcIjlcIi5yZXBlYXQoVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIKTtcclxuLyogQGludGVybmFsICovXHJcblRyYW5zYWN0aW9uLkVNUFRZXzExID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIDExKTtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMkZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVU12UXl4MVEwRkJiME03UVVGRGNFTXNhVU5CUVRoQ08wRkJRemxDTEhsRlFVRnpSVHRCUVVOMFJTd3JRa0ZCTkVJN1FVRkROVUlzSzBOQlFUUkRPMEZCUXpWRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQlowWkpMR1ZCUVdVN1NVRkRaanRKUVVOQkxFTkJRVU03U1VGRlJEczdPenM3T3pzN096czdPenM3T3pzN08wOUJhMEpITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmEwUXNSVUZEYkVRc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRmRCUVdkQ0xFVkJRMmhDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMRk5CUVdsQ0xFVkJRMnBDTEUxQlFWa3NSVUZEV2l4blFrRkJjMElzUlVGRGRFSXNhVUpCUVhWQ0xFVkJRM1pDTEVkQlFWRXNSVUZEVWl4dFFrRkJNa0lzUlVGRE0wSXNOa0pCUVhGRExFVkJRM0pETERaQ1FVRnhReXhGUVVOeVF5eExRVUZWTzFGQlF5OUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEzWkVMRVZCUVVVc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFrUXNSVUZCUlN4RFFVRkRMRmxCUVZrc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNVMEZCVXl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTI1Q0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRmpPMUZCUTI1RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzWlVGQlRTeERRVUZETEVWQlFVVTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNORU5CUVRSRExFTkJRVU1zUTBGQlF6dFRRVU55UlR0UlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0UlFVTXZRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXk5Q0xFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5DUVVGelFpeFhRVUZYTEVOQlFVTXNUVUZCVFN4WlFVRlpMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzcEdPMUZCUlVRc1RVRkJUU3hsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlF6ZENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1pVRkJaU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRmRrVXNTVUZCU1N4TFFVRkxMRXRCUVVzc1YwRkJWeXhEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU51UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1pVRkJaU3hSUVVGUkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCWjBJc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM1JKTzFGQlJVUXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hYUVVGWExFVkJRVVVzUTBGQlF6dFJRVVUzUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGFrSXNSVUZCUlN4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEcxRVFVRjNRaXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3h0UkVGQmQwSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BJTEZGQlFWRXNTVUZCU1N4dFJFRkJkMElzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETlVNc1JVRkJSU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBRa0ZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4cFFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZEVVc1VVRkJVU3hKUVVGSkxHbENRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUXpOQ0xFVkJRVVVzUTBGQlF5eExRVUZMTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYUVVc1VVRkJVU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5tTEZGQlFWRXNTVUZCU1N4WFFVRlhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdVVUZETTBNc1JVRkJSU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFRRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhGTEZGQlFWRXNTVUZCU1N4VFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM1pDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55Uml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExGTkJRVk1zUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVZc1VVRkJVU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRPMUZCUTJwRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU12UkN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU42UlN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc2FVSkJRV2xDTEVkQlFVY3NWMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU14UlN4UlFVRlJMRWxCUVVrc1YwRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU40UWl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExGTkJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzVVVGQlVTeEpRVUZKTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExEWkNRVUUyUWl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxIbENRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFJ5eFJRVUZSTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU03VVVGRGFrTXNSVUZCUlN4RFFVRkRMRFpDUVVFMlFpeEhRVUZITEhsQ1FVRlhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMSGxDUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjBSeXhSUVVGUkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNN1VVRkRha01zUlVGQlJTeERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRk5CUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlJUVkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhGUVVGRkxHMUVRVUYzUWl4RFFVRkRMRVZCUVVVN1dVRkRMMFVzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2RVVkJRWFZGTEVWQlFVVXNSVUZCUlN4M1FrRkJkMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6ZEtPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzYVVKQlFVOHNRMEZCUXl4RlFVRkZPMWxCUXpkRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5FUVVGelJDeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6RkhPMUZCUlVRc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzVTBGQlJ5eERRVUZETEVWQlFVVTdXVUZETjBNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRVJCUVRCRUxFVkJRVVVzUlVGQlJTeFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGRFZzdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hYUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU42UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOMlJ6dFJRVVZFTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVWQlFVVTdXVUZEYmtRc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNLMFJCUVN0RUxFVkJRVVVzUlVGQlJTeG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0pKTzFGQlJVUXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeFhRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTndSQ3hOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4blJVRkJaMFVzUlVGQlJTeEZRVUZGTEdsQ1FVRnBRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGVFazdVVUZGUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGSExFTkJRVU1zUlVGQlJUdFpRVU4yUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHZSRUZCYjBRc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOd1J6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE5VUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYkVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETVVRc1YwRkJWeXhEUVVGRExGZEJRVmM3WTBGRGRrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZEVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUXpkRUxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVOb1JTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRE4wUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEYWtNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU16UXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRelZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRM0JFTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTNaRkxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEycEdMRU5CUVVNc1NVRkJTU3hEUVVGRExEWkNRVUUyUWl4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRMnBHTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZGZGtNc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUXk5Q0xFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMSE5DUVVGelFpeFhRVUZYTEVOQlFVTXNUVUZCVFN4alFVRmpMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTnVSenRSUVVWRUxFOUJRVThzWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVOeVF5eERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEU5QlFVODdLMEpCUTJkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhKUVVGSkxHMUVRVUYzUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTjRSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NhVUpCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1YwRkRlRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdhMEpCUTNoRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4VFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMlZCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0clFrRkRMME1zUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4SlFVRkpMSGxDUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZPMlZCUTNoRUxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0aFFVTndSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVsQlFVa3NWMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0MVFrRkRka01zUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFbEJRVWtzVjBGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdDNRa0ZETVVRc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRWxCUVVrc1YwRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRWUVVNeFJTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeFRRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzNsQ1FVTnNSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1NVRkJTU3g1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHR0UTBGRGJFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc05rSkJRVFpDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTNSRkxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRemRHTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hUUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8wVkJRM3BFTEVOQlFVTTdTVUZEUXl4RFFVRkRPenRCUVhCU1JEczdSMEZGUnp0QlFVTnZRaXhyUWtGQlRTeEhRVUZYTEVsQlFVa3NRMEZCUXp0QlFVVTNRenM3UjBGRlJ6dEJRVU52UWl3NFFrRkJhMElzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZGZGtRN08wZEJSVWM3UVVGRGIwSXNkVUpCUVZjc1IwRkJWeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzBGQlJYaEdMR1ZCUVdVN1FVRkRVeXh2UWtGQlVTeEhRVUZuUWl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRnFRbXhHTEd0RFFYTlNReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyaXRzLlxyXG4gKi9cclxuY2xhc3MgVHJpdHMge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cml0cykge1xyXG4gICAgICAgIHRoaXMuX3RyaXRzID0gdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIEludDhBcnJheSBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21BcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgSW50OEFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXIgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyQXJyYXkodmFsdWUpIHtcclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh2YWx1ZSwgTnVtYmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGRvZXMgbm90IGNvbnRhaW4gdmFsaWQgdHJpdHNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVHJ5dGVzIHVzZWQgdG8gY3JlYXRlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodHJ5dGVzU3RyaW5nLmxlbmd0aCAqIDMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJ5dGVzU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRyeXRlc18xLlRyeXRlcy5BTFBIQUJFVC5pbmRleE9mKHRyeXRlc1N0cmluZy5jaGFyQXQoaSkpO1xyXG4gICAgICAgICAgICB0cml0c1tpICogM10gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVswXTtcclxuICAgICAgICAgICAgdHJpdHNbaSAqIDMgKyAxXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzFdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDJdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHModHJpdHMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaW5zdGFuY2Ugb2YgdHJpdHMgZnJvbSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBOdW1iZXIgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gW107XHJcbiAgICAgICAgbGV0IGFic29sdXRlVmFsdWUgPSB2YWx1ZSA8IDAgPyAtdmFsdWUgOiB2YWx1ZTtcclxuICAgICAgICB3aGlsZSAoYWJzb2x1dGVWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUgJSAzO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gTWF0aC5mbG9vcihhYnNvbHV0ZVZhbHVlIC8gMyk7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSAtMTtcclxuICAgICAgICAgICAgICAgIGFic29sdXRlVmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cml0c1t0cml0cy5sZW5ndGhdID0gcmVtYWluZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2ldID0gLXRyaXRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVHJpdHMobmV3IEludDhBcnJheSh0cml0cykpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgdHdvIHRyaXRzIHRvZ2V0aGVyLlxyXG4gICAgICogQHBhcmFtIGZpcnN0IFRoZSBmaXJzdCB0cml0LlxyXG4gICAgICogQHBhcmFtIHNlY29uZCBUaGUgc2Vjb25kIHRyaXQuXHJcbiAgICAgKiBAcmV0dXJucyBOZXcgdHJpdCB3aGljaCBpcyB0aGUgYWRkaXRpb24gb2YgdGhlIGEgKyBiLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkKGZpcnN0LCBzZWNvbmQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoZmlyc3QsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGZpcnN0IHNob3VsZCBiZSBhIHZhbGlkIFRyaXRzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNlY29uZCwgVHJpdHMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc2Vjb25kcyBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG91dCA9IG5ldyBJbnQ4QXJyYXkoTWF0aC5tYXgoZmlyc3QuX3RyaXRzLmxlbmd0aCwgc2Vjb25kLl90cml0cy5sZW5ndGgpKTtcclxuICAgICAgICBsZXQgY2FycnkgPSAwO1xyXG4gICAgICAgIGxldCBpQTtcclxuICAgICAgICBsZXQgaUI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaUEgPSBpIDwgZmlyc3QuX3RyaXRzLmxlbmd0aCA/IGZpcnN0Ll90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGlCID0gaSA8IHNlY29uZC5fdHJpdHMubGVuZ3RoID8gc2Vjb25kLl90cml0c1tpXSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZBID0gVHJpdHMuZnVsbEFkZChpQSwgaUIsIGNhcnJ5KTtcclxuICAgICAgICAgICAgb3V0W2ldID0gZkFbMF07XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gZkFbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcml0cy5mcm9tQXJyYXkob3V0KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGZ1bGxBZGQoYSwgYiwgYykge1xyXG4gICAgICAgIGNvbnN0IHNBID0gVHJpdHMuc3VtKGEsIGIpO1xyXG4gICAgICAgIGNvbnN0IGNBID0gVHJpdHMuY29ucyhhLCBiKTtcclxuICAgICAgICBjb25zdCBjQiA9IFRyaXRzLmNvbnMoc0EsIGMpO1xyXG4gICAgICAgIGNvbnN0IGNPdXQgPSBUcml0cy5hbnkoY0EsIGNCKTtcclxuICAgICAgICBjb25zdCBzT1V0ID0gVHJpdHMuc3VtKHNBLCBjKTtcclxuICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShbc09VdCwgY091dF0pO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgc3VtKGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgc3dpdGNoIChzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICBjYXNlIC0yOiByZXR1cm4gMTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgY29ucyhhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPT09IGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgYW55KGEsIGIpIHtcclxuICAgICAgICBjb25zdCBzID0gYSArIGI7XHJcbiAgICAgICAgaWYgKHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9BcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIHRyaXRzIGFycmF5IGFzIGEgbnVtYmVyIGFycmF5LlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyaXRzLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlckFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX3RyaXRzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBJbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIGxldCB0cnl0ZXMgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdHJpdHMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSB0cnl0ZSB2YWx1ZXMgdG8gZmluZCBjb3JyZWN0IHRyaXQgcmVwcmVzZW50YXRpb25cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChUcml0cy5UUllURVNfVFJJVFNbal1bMF0gPT09IHRoaXMuX3RyaXRzW2ldICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzFdID09PSB0aGlzLl90cml0c1tpICsgMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBUcml0cy5UUllURVNfVFJJVFNbal1bMl0gPT09IHRoaXMuX3RyaXRzW2kgKyAyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeXRlcyArPSB0cnl0ZXNfMS5Ucnl0ZXMuQUxQSEFCRVQuY2hhckF0KGopO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHRyaXRzIGFzIGEgbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIGNvbnZlcnRlZCB0byBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXIoKSB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdHJpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZSAqIDMgKyB0aGlzLl90cml0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGF0IGlzIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHJldHVybnMgTGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cml0cy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhIHN1YiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uIHRvIGdldCB0aGUgc3ViLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdWIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJpdHMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBzdGFydCArIGxlbmd0aCBtdXN0IDw9ICR7dGhpcy5fdHJpdHMubGVuZ3RofWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KHRoaXMuX3RyaXRzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5Ucml0cy5UUllURVNfVFJJVFMgPSBbXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAwLCAwXSlcclxuXTtcclxuZXhwb3J0cy5Ucml0cyA9IFRyaXRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpwZEhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbWwwY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVWQlFYVkZPMEZCUTNaRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZEZWtVc2EwUkJRU3RETzBGQlF5OURMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJiVU5KTEdWQlFXVTdTVUZEWml4WlFVRnZRaXhMUVVGblFqdFJRVU5vUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlowSTdVVUZEY0VNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJUdFpRVU40UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eDNRMEZCZDBNc1EwRkJReXhEUVVGRE8xTkJRMnBGTzFGQlEwUXNUMEZCVHl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlpUdFJRVU42UXl4SlFVRkpMRU5CUVVNc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8xbEJRM0pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVNN1UwRkRha1U3VVVGRFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhEUVVGRE8xTkJRM0JGTzFGQlEwUXNUVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlEzUkRMRTFCUVUwc1MwRkJTeXhIUVVGakxFbEJRVWtzVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE1VTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1pVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6VkVMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemxETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYWtRN1VVRkRSQ3hQUVVGUExFbEJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhPMUZCUTJ4RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzJRa0ZCTmtJc1EwRkJReXhEUVVGRE8xTkJRM1JFTzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVdFc1JVRkJSU3hEUVVGRE8xRkJRek5DTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRkwwTXNUMEZCVHl4aFFVRmhMRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRM1JDTEVsQlFVa3NVMEZCVXl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlRsRExFbEJRVWtzVTBGQlV5eEhRVUZITEVOQlFVTXNSVUZCUlR0blFrRkRaaXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJZc1lVRkJZU3hGUVVGRkxFTkJRVU03WVVGRGJrSTdXVUZGUkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTnVRenRSUVVORUxFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTllMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTnVReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVFSTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNelF5eERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVmtzUlVGQlJTeE5RVUZoTzFGQlEzcERMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNFTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zTUVOQlFUQkRMRU5CUVVNc1EwRkJRenRUUVVOdVJUdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRja01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05FTkJRVFJETEVOQlFVTXNRMEZCUXp0VFFVTnlSVHRSUVVWRUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXk5RkxFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTmtMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMUFzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZGVUN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVVZxUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrUXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRaUVVONFF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyWXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0UlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJVeXhGUVVGRkxFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyeEVMRTFCUVUwc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFMUJRVTBzUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6ZENMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJReTlDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRsQ0xFOUJRVThzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOUUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRia01zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVWb1FpeFJRVUZSTEVOQlFVTXNSVUZCUlR0WlFVTlFMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRja0k3U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY0VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlExUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkRXanRSUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzBsQlEySXNRMEZCUXp0SlFVVkVMR1ZCUVdVN1NVRkRVQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFWTXNSVUZCUlN4RFFVRlRPMUZCUTI1RExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkZhRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTFBc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRFdqdGhRVUZOTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOa0xFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEWWp0UlFVVkVMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRMklzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRka0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxHRkJRV0U3VVVGRGFFSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1VVRkJVVHRSUVVOWUxFbEJRVWtzVFVGQlRTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVm9RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVF5dzJSVUZCTmtVN1dVRkROMFVzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHVkJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU0zUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpORExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU12UXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOcVJDeE5RVUZOTEVsQlFVa3NaVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTNCRExFMUJRVTA3YVVKQlExUTdZVUZEU2p0VFFVTktPMUZCUlVRc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzU1VGQlNTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlhCQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE9VTXNWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JEdFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTk8xRkJRMVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGNFTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE4wTXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRUUVVNeFJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNeFJTeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6TkZPMUZCUTBRc1QwRkJUeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOeVJTeERRVUZET3p0QlFYWlJSQ3hsUVVGbE8wRkJRMU1zYTBKQlFWa3NSMEZCWjBJN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETVVJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTXhRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1EwRkROVUlzUTBGQlF6dEJRVGxDVGl4elFrRXdVVU1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiLi90cml0c1wiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5jbGFzcyBUcnl0ZU51bWJlciB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlIG51bWJlciBmcm9tIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgbnVtYmVyIHZhbHVlIHRvIGNyZWF0ZSB0aGUgb2JqZWN0IGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSB0cnl0ZSBsZW5ndGggdG8gcGFkIHRoZSBudW1iZXIgd2l0aC5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyeXRlTnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSwgbGVuZ3RoID0gVHJ5dGVOdW1iZXIuTEVOR1RIXzkpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzO1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgbGVuZ3RoIHNob3VsZCBiZSBhIG51bWJlciA+IDBcIiwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHJ5dGVzID0gXCI5XCIucmVwZWF0KGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGlzIG5vdCBhbiBpbnRlZ2VyXCIsIHsgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdHJpdHMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXIodmFsdWUpLnRvTnVtYmVyQXJyYXkoKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRyaXRzLmxlbmd0aCA8IGxlbmd0aCAqIDMpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzLnB1c2goMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5dGVzID0gdHJpdHNfMS5Ucml0cy5mcm9tTnVtYmVyQXJyYXkodHJpdHMpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh2YWx1ZSwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0cnl0ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRyeXRlU3RyaW5nLmxlbmd0aCA+IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHZhbHVlIGNvbnRhaW5zIHRvbyBtYW55IGNoYXJhY3RlcnNcIiwgeyBsZW5ndGg6IHRyeXRlU3RyaW5nLmxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHRyeXRlU3RyaW5nLmxlbmd0aCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0cnl0ZVN0cmluZyArPSBcIjlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcnl0ZU51bWJlcih0cnl0ZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHRyeXRlIG51bWJlciB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIG51bWJlciB2YWx1ZSBvZiB0aGUgdHJ5dGUgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICB0b051bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcykpLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdmFsdWVPZigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b051bWJlcigpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBMZW5ndGggb2YgYSBudW1iZXIgdGhhdCB1c2VzIDkgdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuTEVOR1RIXzkgPSA5O1xyXG4vKipcclxuICogQW4gZW1wdHkgOSBsZW5ndGggdHJ5dGUgbnVtYmVyLlxyXG4gKi9cclxuVHJ5dGVOdW1iZXIuRU1QVFlfOSA9IFRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCwgVHJ5dGVOdW1iZXIuTEVOR1RIXzkpO1xyXG5leHBvcnRzLlRyeXRlTnVtYmVyID0gVHJ5dGVOdW1iZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1ZPZFcxaVpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY25sMFpVNTFiV0psY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2JVTkJRV2RETzBGQlEyaERMSEZEUVVGclF6dEJRVVZzUXpzN1IwRkZSenRCUVVOSU8wbEJZVWtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNWMEZCVnl4RFFVRkRMRkZCUVZFN1VVRkRla1VzU1VGQlNTeE5RVUZOTEVOQlFVTTdVVUZGV0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU5vUkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHRRMEZCYlVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEZUVVN1VVRkZSQ3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRemRDTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlF5OUNPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEyaERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnFSVHRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUZITEdGQlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdXVUZGZEVRc1QwRkJUeXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRemxDTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGFrSTdXVUZGUkN4TlFVRk5MRWRCUVVjc1lVRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFRRVU12UkR0UlFVVkVMRTlCUVU4c1NVRkJTU3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEYmtNc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRmhMRVZCUVVVc1UwRkJhVUlzVjBGQlZ5eERRVUZETEZGQlFWRTdVVUZEZWtVc1NVRkJTU3hEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUlVGQlJUdFpRVU55UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhEUVVGRE8xTkJRM0JGTzFGQlEwUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXNURMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlEyaEVMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEcxRFFVRnRReXhGUVVGRkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVTjRSVHRSUVVWRUxFbEJRVWtzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRVZCUVVVN1dVRkROMElzVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYWtjN1VVRkZSQ3hQUVVGUExGZEJRVmNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZPMWxCUTJoRExGZEJRVmNzU1VGQlNTeEhRVUZITEVOQlFVTTdVMEZEZEVJN1VVRkZSQ3hQUVVGUExFbEJRVWtzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU16UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRPMGxCUTNoQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hQUVVGUE8xRkJRMVlzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6czdRVUV4UjBRN08wZEJSVWM3UVVGRGIwSXNiMEpCUVZFc1IwRkJWeXhEUVVGRExFTkJRVU03UVVGRE5VTTdPMGRCUlVjN1FVRkRiMElzYlVKQlFVOHNSMEZCWjBJc1YwRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJVbXhITEd0RFFUUkhReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlcy5cclxuICovXHJcbmNsYXNzIFRyeXRlcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlcyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdHJ5dGVzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVRyeXRlcy5pc1ZhbGlkKHZhbHVlLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgYW5kIGxlbmd0aCBkbyBub3QgY29udGFpbiB2YWxpZCB0cnl0ZXNcIiwgeyB2YWx1ZSwgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHZhbHVlIGNvbnRhaW4gdmFsaWQgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIHZhbGlkYXRlIGFzIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IHdhcyB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ZhbGlkKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeWzlBLVpdeyR7bGVuZ3RoID8gbGVuZ3RoIDogXCIwLFwifX0kYCkudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZXMgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXMgPSBUcnl0ZXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRISjVkR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVVV2UXpzN1IwRkZSenRCUVVOSU8wbEJVMGtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNRMEZCUXp0UlFVTjBSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGREwwSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYzBOQlFYTkRMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVU5FTEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJReTlETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1UwRkRiRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNhMFJCUVd0RUxFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNNVJqdFJRVU5FTEU5QlFVOHNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZETDBJc1QwRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdZVUZCVFR0WlFVTklMRTlCUVU4c1NVRkJTU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGVFVTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUVUZCVFR0UlFVTlVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUjBGQlJ5eERRVUZETEV0QlFXRXNSVUZCUlN4TlFVRmpPMUZCUTNCRExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpkRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2xEUVVGcFF5eERRVUZETEVOQlFVTTdVMEZETVVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZETTBVc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNPRUpCUVRoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVNMVJUdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPenRCUVRWRlJEczdSMEZGUnp0QlFVTlhMR1ZCUVZFc1IwRkJWeXcyUWtGQk5rSXNRMEZCUXp0QlFVcHVSU3gzUWtFNFJVTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGRhdGEgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBEYXRhRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRGF0YUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkRhdGFcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkRhdGFFcnJvciA9IERhdGFFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdGMFlVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyUmhkR0ZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2IwVkJRV2xGTzBGQlJXcEZPenRIUVVWSE8wRkJRMGdzWlVGQmRVSXNVMEZCVVN4eFFrRkJVenRKUVVOd1F6czdPenM3VDBGTFJ6dEpRVU5JTEZsQlFWa3NUMEZCWlN4RlFVRkZMRlZCUVd0RExFVkJRVVVzVlVGQmEwSTdVVUZETDBVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRla0lzUTBGQlF6dERRVU5LTzBGQldFUXNPRUpCVjBNaWZRPT0iLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vcHJvb2ZPZldvcmtKc1wiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2NVTkJRV2RESW4wPSIsInZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc3BvbmdlRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY3J5cHRvL2Rpc3QvZmFjdG9yaWVzL3Nwb25nZUZhY3RvcnlcIik7XHJcbmNvbnN0IHRyaXRzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cml0c1wiKTtcclxuY29uc3QgYmlnX2ludGVnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xyXG4vKipcclxuICogUGVhcmxEaXZlciBpbXBsZW1lbnRhdGlvbiBpbiBwbGFpbiBKYXZhU2NyaXB0LlxyXG4gKi9cclxuY2xhc3MgUGVhcmxEaXZlciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQZWFybERpdmVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBjdXJsID0gc3BvbmdlRmFjdG9yeV8xLlNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKS5jcmVhdGUoXCJjdXJsXCIpO1xyXG4gICAgICAgIHRoaXMuX2hhc2hMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGVMZW5ndGggPSBjdXJsLmdldENvbnN0YW50KFwiU1RBVEVfTEVOR1RIXCIpO1xyXG4gICAgICAgIHRoaXMuX251bWJlclJvdW5kcyA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJOVU1CRVJfT0ZfUk9VTkRTXCIpO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAqIDMzO1xyXG4gICAgICAgIHRoaXMuX25vbmNlTGVuZ3RoID0gdGhpcy5faGFzaExlbmd0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VTdGFydCA9IHRoaXMuX2hhc2hMZW5ndGggLSB0aGlzLl9ub25jZUxlbmd0aDtcclxuICAgICAgICBjb25zdCBPRkZTRVRfTEVOR1RIID0gNDtcclxuICAgICAgICB0aGlzLl9ub25jZUluaXRTdGFydCA9IHRoaXMuX25vbmNlU3RhcnQgKyBPRkZTRVRfTEVOR1RIO1xyXG4gICAgICAgIGNvbnN0IElOVF9MRU5HVEggPSB0aGlzLl9ub25jZUxlbmd0aCAvIDM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VJbmNyZW1lbnRTdGFydCA9IHRoaXMuX25vbmNlSW5pdFN0YXJ0ICsgSU5UX0xFTkdUSDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgc2VhcmNoV2l0aFRyeXRlcyh0cnl0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cmxTdGF0ZSA9IHRoaXMucHJlcGFyZSh0cnl0ZXMpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFN0YXRlcyA9IHRoaXMuc2VhcmNoSW5pdChjdXJsU3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2goc2VhcmNoU3RhdGVzLCBtaW5XZWlnaHRNYWduaXR1ZGUpIHtcclxuICAgICAgICBsZXQgc2VhcmNoaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0cml0cyA9IG5ldyBJbnQ4QXJyYXkodGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbWlkU3RhdGVDb3B5ID0ge1xyXG4gICAgICAgICAgICBsb3c6IHNlYXJjaFN0YXRlcy5sb3cuc2xpY2UoKSxcclxuICAgICAgICAgICAgaGlnaDogc2VhcmNoU3RhdGVzLmhpZ2guc2xpY2UoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKHNlYXJjaGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudChtaWRTdGF0ZUNvcHksIHRoaXMuX25vbmNlSW5jcmVtZW50U3RhcnQsIHRoaXMuX2hhc2hMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGxvdzogbWlkU3RhdGVDb3B5Lmxvdy5zbGljZSgpLFxyXG4gICAgICAgICAgICAgICAgaGlnaDogbWlkU3RhdGVDb3B5LmhpZ2guc2xpY2UoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlUHJvYmUgPSB0aGlzLmlzRm91bmRGYXN0KHN0YXRlLCBtaW5XZWlnaHRNYWduaXR1ZGUpO1xyXG4gICAgICAgICAgICBpZiAobm9uY2VQcm9iZS50b0pTTnVtYmVyKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBub25jZU91dHB1dCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgxKTtcclxuICAgICAgICAgICAgLy8gQml0IHNjYW4gZm9yd2FyZFxyXG4gICAgICAgICAgICB3aGlsZSAobm9uY2VPdXRwdXQuYW5kKG5vbmNlUHJvYmUpLnRvSlNOdW1iZXIoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm9uY2VPdXRwdXQgPSBub25jZU91dHB1dC5zaGlmdExlZnQoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faGFzaExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cml0c1tpXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKG1pZFN0YXRlQ29weS5sb3dbaV0uYW5kKG5vbmNlT3V0cHV0KSkudG9KU051bWJlcigpID09PSAwID8gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG1pZFN0YXRlQ29weS5oaWdoW2ldLmFuZChub25jZU91dHB1dCkudG9KU051bWJlcigpID09PSAwID8gLTEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21BcnJheSh0cml0cykudG9Ucnl0ZXMoKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybShzZWFyY2hTdGF0ZXMpIHtcclxuICAgICAgICBsZXQgY3VybFNjcmF0Y2hwYWRJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcm91bmQgPSAwOyByb3VuZCA8IHRoaXMuX251bWJlclJvdW5kczsgcm91bmQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJsU2NyYXRjaHBhZCA9IHtcclxuICAgICAgICAgICAgICAgIGxvdzogc2VhcmNoU3RhdGVzLmxvdy5zbGljZSgpLFxyXG4gICAgICAgICAgICAgICAgaGlnaDogc2VhcmNoU3RhdGVzLmhpZ2guc2xpY2UoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzdGF0ZUluZGV4ID0gMDsgc3RhdGVJbmRleCA8IHRoaXMuX3N0YXRlTGVuZ3RoOyBzdGF0ZUluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFscGhhID0gY3VybFNjcmF0Y2hwYWQubG93W2N1cmxTY3JhdGNocGFkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmV0YSA9IGN1cmxTY3JhdGNocGFkLmhpZ2hbY3VybFNjcmF0Y2hwYWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VybFNjcmF0Y2hwYWRJbmRleCA8IDM2NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cmxTY3JhdGNocGFkSW5kZXggKz0gMzY0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VybFNjcmF0Y2hwYWRJbmRleCArPSAtMzY1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtbWEgPSBjdXJsU2NyYXRjaHBhZC5oaWdoW2N1cmxTY3JhdGNocGFkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG93WG9yQmV0YSA9IGN1cmxTY3JhdGNocGFkLmxvd1tjdXJsU2NyYXRjaHBhZEluZGV4XS54b3IoYmV0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RHYW1tYSA9IGdhbW1hLm5vdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGFPck5vdEdhbW1hID0gYWxwaGEub3Iobm90R2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBhbHBoYU9yTm90R2FtbWEuYW5kKGxvd1hvckJldGEpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmxvd1tzdGF0ZUluZGV4XSA9IGRlbHRhLm5vdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGFYb3JHYW1tYSA9IGFscGhhLnhvcihnYW1tYSk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMuaGlnaFtzdGF0ZUluZGV4XSA9IGFscGhhWG9yR2FtbWEub3IoZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5jcmVtZW50KHNlYXJjaFN0YXRlcywgZnJvbUluZGV4LCB0b0luZGV4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZyb21JbmRleDsgaSA8IHRvSW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoU3RhdGVzLmxvd1tpXS50b0pTTnVtYmVyKCkgPT09IFBlYXJsRGl2ZXIuTE9XX0JJVFMpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFN0YXRlcy5sb3dbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmhpZ2hbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5MT1dfQklUUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoU3RhdGVzLmhpZ2hbaV0udG9KU051bWJlcigpID09PSBQZWFybERpdmVyLkxPV19CSVRTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmhpZ2hbaV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmxvd1tpXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkxPV19CSVRTKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlcGFyZSh0cmFuc2FjdGlvblRyeXRlcykge1xyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgY3VybC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ucml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbVRyeXRlcyh0cmFuc2FjdGlvblRyeXRlcykudG9BcnJheSgpO1xyXG4gICAgICAgIGN1cmwuYWJzb3JiKHRyYW5zYWN0aW9uVHJpdHMsIDAsIHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY3VybFN0YXRlID0gY3VybC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uVHJpdHNcclxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuX3RyYW5zYWN0aW9uTGVuZ3RoIC0gdGhpcy5faGFzaExlbmd0aCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGgpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY3VybFN0YXRlW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdXJsU3RhdGU7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hJbml0KGN1cmxTdGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlcyA9IHtcclxuICAgICAgICAgICAgbG93OiBbXSxcclxuICAgICAgICAgICAgaGlnaDogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGN1cmxTdGF0ZS5mb3JFYWNoKCh0cml0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRyaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuSElHSF9CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkxPV19CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMubG93W2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLmhpZ2hbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuTE9XX0JJVFMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPZmZzZXQoc3RhdGVzLCB0aGlzLl9ub25jZVN0YXJ0KTtcclxuICAgICAgICByZXR1cm4gc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoT2Zmc2V0KHN0YXRlcywgb2Zmc2V0KSB7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAwXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0yNjM1MjQ5MTUzMzg3MDc4ODAzXCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAwXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi01MjcwNDk4MzA2Nzc0MTU3NjA1XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDFdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTEwMTA3ODA0OTcxODk1NjQ0NzNcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDFdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTgwODYyNDM5Nzc1MTY1MTU3NzdcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5sb3dbb2Zmc2V0ICsgMl0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCI5MjIzMzM2OTIxMjAxOTAyMDc5XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAyXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0xNzk3OTIxNDI3MTM0ODczN1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAzXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIi0xODAxNDM5ODM3NTI2NDI1N1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgM10gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCIxODAxNDM5ODUwOTQ4MTk4M1wiLCAxMCk7XHJcbiAgICB9XHJcbiAgICBpc0ZvdW5kRmFzdChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGxldCBsYXN0TWVhc3VyZW1lbnQgPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBtaW5XZWlnaHRNYWduaXR1ZGUgLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb3cgPSBzZWFyY2hTdGF0ZXMubG93W3RoaXMuX2hhc2hMZW5ndGggLSAxIC0gaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZ2ggPSBzZWFyY2hTdGF0ZXMuaGlnaFt0aGlzLl9oYXNoTGVuZ3RoIC0gMSAtIGldO1xyXG4gICAgICAgICAgICBjb25zdCBsb3dYb3JIaWdoID0gbG93LnhvcihoaWdoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90TG93WG9ySGlnaCA9IGxvd1hvckhpZ2gubm90KCk7XHJcbiAgICAgICAgICAgIGxhc3RNZWFzdXJlbWVudCA9IGxhc3RNZWFzdXJlbWVudC5hbmQobm90TG93WG9ySGlnaCk7XHJcbiAgICAgICAgICAgIGlmIChsYXN0TWVhc3VyZW1lbnQudG9KU051bWJlcigpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGFzdE1lYXN1cmVtZW50O1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkhJR0hfQklUUyA9IC0xO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuUGVhcmxEaXZlci5MT1dfQklUUyA9IDA7XHJcbmV4cG9ydHMuUGVhcmxEaXZlciA9IFBlYXJsRGl2ZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHVmhjbXhFYVhabGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d1pXRnliRVJwZG1WeUwzQmxZWEpzUkdsMlpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMR3RHUVVFclJUdEJRVU12UlN3eVJFRkJkMFE3UVVGRmVFUXNPRVJCUVdsRE8wRkJSMnBET3p0SFFVVkhPMEZCUTBnN1NVRjFRa2s3TzA5QlJVYzdTVUZEU0R0UlFVTkpMRTFCUVUwc1NVRkJTU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzSkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZEY2tRc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTTdVVUZETVVRc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEyaEVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla01zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdVVUZEZUVRc1RVRkJUU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaENMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGVrTXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1ZVRkJWU3hEUVVGRE8wbEJRMnhGTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMR2RDUVVGblFpeERRVUZETEUxQlFXTXNSVUZCUlN4clFrRkJNRUk3VVVGRE9VUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVVjJReXhOUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJSV2hFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVVzYTBKQlFXdENMRU5CUVVNc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlJVOHNUVUZCVFN4RFFVRkRMRmxCUVc5RExFVkJRVVVzYTBKQlFUQkNPMUZCUXpORkxFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVVnlRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRk9VTXNUVUZCVFN4WlFVRlpMRWRCUVRKQ08xbEJRM3BETEVkQlFVY3NSVUZCUlN4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU0zUWl4SlFVRkpMRVZCUVVVc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdVMEZEYkVNc1EwRkJRenRSUVVWR0xFOUJRVThzVTBGQlV5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVVXhSU3hOUVVGTkxFdEJRVXNzUjBGQk1rSTdaMEpCUTJ4RExFZEJRVWNzUlVGQlJTeFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRuUWtGRE4wSXNTVUZCU1N4RlFVRkZMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzJGQlEyeERMRU5CUVVNN1dVRkZSaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUlhSQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1dVRkZMMFFzU1VGQlNTeFZRVUZWTEVOQlFVTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8yZENRVU12UWl4VFFVRlRPMkZCUTFvN1dVRkZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSVFZDTEcxQ1FVRnRRanRaUVVOdVFpeFBRVUZQTEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMmRDUVVOdVJDeFhRVUZYTEVkQlFVY3NWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UXp0WlFVVkVMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03V1VGRmJFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEwb3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRGVrUXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTXZSVHRUUVVOS08xRkJSVVFzVDBGQlR5eGhRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRkZUeXhUUVVGVExFTkJRVU1zV1VGQmIwTTdVVUZEYkVRc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUzBGQlN5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1dVRkRja1FzVFVGQlRTeGpRVUZqTEVkQlFUSkNPMmRDUVVNelF5eEhRVUZITEVWQlFVVXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlF6ZENMRWxCUVVrc1JVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0aFFVTnNReXhEUVVGRE8xbEJSVVlzUzBGQlN5eEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNWVUZCVlN4RlFVRkZMRVZCUVVVN1owSkJRMjVGTEUxQlFVMHNTMEZCU3l4SFFVRkhMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRuUWtGRGRFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8yZENRVU4wUkN4SlFVRkpMRzFDUVVGdFFpeEhRVUZITEVkQlFVY3NSVUZCUlR0dlFrRkRNMElzYlVKQlFXMUNMRWxCUVVrc1IwRkJSeXhEUVVGRE8ybENRVU01UWp0eFFrRkJUVHR2UWtGRFNDeHRRa0ZCYlVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dHBRa0ZETDBJN1owSkJRMFFzVFVGQlRTeExRVUZMTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMmRDUVVOMlJDeE5RVUZOTEZWQlFWVXNSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTnlSU3hOUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRemRDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUXpORExFMUJRVTBzUzBGQlN5eEhRVUZITEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlJUbERMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU16UXl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOMlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkRNMFE3VTBGRFNqdEpRVU5NTEVOQlFVTTdTVUZGVHl4VFFVRlRMRU5CUVVNc1dVRkJiME1zUlVGQlJTeFRRVUZwUWl4RlFVRkZMRTlCUVdVN1VVRkRkRVlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTjBReXhKUVVGSkxGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzVlVGQlZTeERRVUZETEZGQlFWRXNSVUZCUlR0blFrRkRNVVFzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRGJrUXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU4wUkR0cFFrRkJUVHRuUWtGRFNDeEpRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSVHR2UWtGRE0wUXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHBRa0ZEZGtRN2NVSkJRVTA3YjBKQlEwZ3NXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dHBRa0ZEY2tRN1owSkJRMFFzVFVGQlRUdGhRVU5VTzFOQlEwbzdTVUZEVEN4RFFVRkRPMGxCUlU4c1QwRkJUeXhEUVVGRExHbENRVUY1UWp0UlFVTnlReXhOUVVGTkxFbEJRVWtzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZEYkVJc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4aFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRGRrVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFJRVU0zUlN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYkVNc1owSkJRV2RDTzJGQlExZ3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRoUVVNeFJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRmhMRVZCUVVVc1MwRkJZU3hGUVVGRkxFVkJRVVU3V1VGRGRFTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOUUxFOUJRVThzVTBGQlV5eERRVUZETzBsQlEzSkNMRU5CUVVNN1NVRkZUeXhWUVVGVkxFTkJRVU1zVTBGQmIwSTdVVUZEYmtNc1RVRkJUU3hOUVVGTkxFZEJRVEpDTzFsQlEyNURMRWRCUVVjc1JVRkJSU3hGUVVGRk8xbEJRMUFzU1VGQlNTeEZRVUZGTEVWQlFVVTdVMEZEV0N4RFFVRkRPMUZCUTBZc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFWa3NSVUZCUlN4TFFVRmhMRVZCUVVVc1JVRkJSVHRaUVVNNVF5eFJRVUZSTEVsQlFVa3NSVUZCUlR0blFrRkRWaXhMUVVGTExFTkJRVU03YjBKQlEwWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHZRa0ZEYWtRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0dlFrRkRiRVFzVFVGQlRUdG5Ra0ZEVml4TFFVRkxMRU5CUVVNN2IwSkJRMFlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenR2UWtGRGFFUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dHZRa0ZEYkVRc1RVRkJUVHRuUWtGRFZqdHZRa0ZEU1N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTnFSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMSEZDUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTNoRU8xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkZOVU1zVDBGQlR5eE5RVUZOTEVOQlFVTTdTVUZEYkVJc1EwRkJRenRKUVVWUExGbEJRVmtzUTBGQlF5eE5RVUU0UWl4RlFVRkZMRTFCUVdNN1VVRkRMMFFzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4elFrRkJjMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZEVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMSEZDUVVGTkxFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE5VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVUwc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1JDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExIRkNRVUZOTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETTBRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRemxFTEVOQlFVTTdTVUZGVHl4WFFVRlhMRU5CUVVNc1dVRkJiME1zUlVGQlJTeHJRa0ZCTUVJN1VVRkRhRVlzU1VGQlNTeGxRVUZsTEVkQlFVY3NjVUpCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZEYmtRc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVNNVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrUXNUVUZCVFN4VlFVRlZMRWRCUVVjc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTnFReXhOUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRka01zWlVGQlpTeEhRVUZITEdWQlFXVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03V1VGRGNrUXNTVUZCU1N4bFFVRmxMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzJkQ1FVTndReXhOUVVGTk8yRkJRMVE3VTBGRFNqdFJRVU5FTEU5QlFVOHNaVUZCWlN4RFFVRkRPMGxCUXpOQ0xFTkJRVU03TzBGQk9VMUVMR1ZCUVdVN1FVRkRVeXh2UWtGQlV5eEhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXk5RExHVkJRV1U3UVVGRFV5eHRRa0ZCVVN4SFFVRlhMRU5CUVVNc1EwRkJRenRCUVVwcVJDeG5RMEZuVGtNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0Jhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IHBlYXJsRGl2ZXJfMSA9IHJlcXVpcmUoXCIuL3BlYXJsRGl2ZXIvcGVhcmxEaXZlclwiKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIEphdmFTY3JpcHQuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0pzIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0aW1lU2VydmljZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBuZXcgcGVhcmxEaXZlcl8xLlBlYXJsRGl2ZXIoKS5zZWFyY2hXaXRoVHJ5dGVzKHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICBjb25zdCBub25jZVN0cmluZyA9IG5vbmNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgdHJ5dGVzU3RyaW5nLmxlbmd0aCAtIG5vbmNlU3RyaW5nLmxlbmd0aCkgKyBub25jZVN0cmluZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya0pzID0gUHJvb2ZPZldvcmtKcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210S2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl3Y205dlprOW1WMjl5YTBwekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJSWHBGTERCRlFVRjFSVHRCUVVOMlJTeDNSa0ZCY1VZN1FVRkRja1lzTmtSQlFUQkVPMEZCUXpGRUxIZEVRVUZ4UkR0QlFVVnlSRHM3UjBGRlJ6dEJRVU5JTEcxQ1FVRXlRaXhUUVVGUkxHbERRVUZsTzBsQlF6bERPenM3VDBGSFJ6dEpRVU5JTEZsQlFWa3NWMEZCTUVJN1VVRkRiRU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJZeXhGUVVGRkxHdENRVUV3UWp0UlFVTTNSQ3hKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxHVkJRVTBzUTBGQlF5eEZRVUZGTzFsQlEzUkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VTBGRGVFVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRGVFVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRUUVVNdlJEdFJRVU5FTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc2RVSkJRVlVzUlVGQlJTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xRkJRelZGTEUxQlFVMHNWMEZCVnl4SFFVRlhMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVU0zUXl4TlFVRk5MRmxCUVZrc1IwRkJWeXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZETDBNc1QwRkJUeXhsUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxGbEJRVmtzUTBGQlF5eE5RVUZOTEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExGZEJRVmNzUTBGQlF5eERRVUZETzBsQlF6ZEhMRU5CUVVNN1EwRkRTanRCUVROQ1JDeHpRMEV5UWtNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iaWdfaW50ZWdlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=