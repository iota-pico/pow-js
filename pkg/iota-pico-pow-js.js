(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("big-integer"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pow-js", ["big-integer"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pow-js"] = factory(require("big-integer"));
	else
		root["IotaPicoPowJs"] = factory(root["bigInt"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var stringHelper_1 = __webpack_require__(8);

var dataError_1 = __webpack_require__(3);
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
/* 2 */
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
     * @return True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @return True if the number is formatted correctly.
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
/* 3 */
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

var coreError_1 = __webpack_require__(7);
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
/* 4 */
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

var coreError_1 = __webpack_require__(7);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(9);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
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
     * @return New trit which is the addition of the a + b.
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
/* 7 */
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

var jsonHelper_1 = __webpack_require__(20);

var stringHelper_1 = __webpack_require__(8);
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var address_1 = __webpack_require__(26);

var hash_1 = __webpack_require__(5);

var signatureMessageFragment_1 = __webpack_require__(27);

var tag_1 = __webpack_require__(10);

var tryteNumber_1 = __webpack_require__(12);

var trytes_1 = __webpack_require__(1);
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
   * @return New instance of transaction.
   */


  _createClass(Transaction, [{
    key: "toTrytes",

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trits_1 = __webpack_require__(6);

var trytes_1 = __webpack_require__(1);
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
/* 13 */
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

var factoryBase_1 = __webpack_require__(29);

var curl_1 = __webpack_require__(30);

var kerl_1 = __webpack_require__(31);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
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

__export(__webpack_require__(16));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(17));

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

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);

var proofOfWorkBase_1 = __webpack_require__(21);

var trytes_1 = __webpack_require__(1);

var pearlDiver_1 = __webpack_require__(34);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
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

module.exports = __webpack_require__(19);

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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var arrayHelper_1 = __webpack_require__(9);

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var timeService_1 = __webpack_require__(25);

var hash_1 = __webpack_require__(5);

var tag_1 = __webpack_require__(10);

var transaction_1 = __webpack_require__(11);

var tryteNumber_1 = __webpack_require__(12);

var trytes_1 = __webpack_require__(1);

var cryptoError_1 = __webpack_require__(4);

var transactionHelper_1 = __webpack_require__(28);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
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

module.exports = __webpack_require__(24);

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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var dataError_1 = __webpack_require__(3);

var trytes_1 = __webpack_require__(1);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var hash_1 = __webpack_require__(5);

var transaction_1 = __webpack_require__(11);

var trits_1 = __webpack_require__(6);

var cryptoError_1 = __webpack_require__(4);

var spongeFactory_1 = __webpack_require__(13);
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0);

var sha3_1 = __webpack_require__(32);

var cryptoError_1 = __webpack_require__(4);

var bigIntegerHelper_1 = __webpack_require__(33);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var objectHelper_1 = __webpack_require__(0);

var cryptoError_1 = __webpack_require__(4);
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
     * @return Array buffer containing the digest.
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
/* 33 */
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

var numberHelper_1 = __webpack_require__(2);

var objectHelper_1 = __webpack_require__(0); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(14));

var cryptoError_1 = __webpack_require__(4);
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
/* 34 */
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

var spongeFactory_1 = __webpack_require__(13);

var trits_1 = __webpack_require__(6); // tslint:disable-next-line:import-name


var big_integer_1 = __importDefault(__webpack_require__(14));
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYjhhNDUyNmJjMDk2NjRiZmIyYSIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cnl0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2NyeXB0b0Vycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS9oYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy9hcnJheUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdGFnLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvdHJ5dGVOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiYW1kXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanNcIjpcImJpZy1pbnRlZ2VyXCIsXCJjb21tb25qczJcIjpcImJpZy1pbnRlZ2VyXCIsXCJyb290XCI6XCJiaWdJbnRcIn0iLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Byb29mT2ZXb3JrSnMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wcm9vZk9mV29yay9wcm9vZk9mV29ya0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4uL2lvdGEtcGljby1jcnlwdG8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9pb3RhLXBpY28tY3J5cHRvL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uLi9pb3RhLXBpY28tY3J5cHRvL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zZXJ2aWNlcy90aW1lU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3Nwb25nZXMvY3VybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3Nwb25nZXMva2VybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2RpZ2VzdHMvc2hhMy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7Ozs7Ozs7O0FBTXlCOzs7Ozs0QkFBVztBQUN0QixhQUFNLFVBQVMsUUFBUyxVQUNsQztBQUFDO0FBT3FCOzs7Ozs7Ozs2QkFBVztBQUN2QixhQUFNLFVBQVMsUUFBUyxVQUN6QixZQUFRLFFBQU8sUUFBTyxXQUFhLFlBQUksQ0FBTSxNQUFRLFFBQzlEO0FBQUM7QUFRbUI7Ozs7Ozs7OzsyQkFBVyxPQUEyQjtBQUN0RCxVQUFvQixpQkFBZSxhQUFhLGFBQVE7QUFDbEQsYUFBZSxtQkFBYyxhQUFrQixtQkFBaUIsYUFBYSxhQUN2RjtBQUFDO0FBT3lCOzs7Ozs7OztpQ0FBWTtBQUMvQixVQUFPLFdBQVMsUUFBVSxXQUFlLFdBQUU7QUFDcEMsZUFDVjtBQUFNLGFBQUU7QUFDSixZQUFpQixlQUFHLE9BQWEsV0FBaUIsYUFBTyxPQUFhLGFBQU8sT0FBWSxZQUFZ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QUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7Ozs7Ozs7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QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUs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YUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFDeEMsYUFBSSxFQUFHLEtBQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSztBQUN4QyxhQUFJLEVBQUcsS0FBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUksTUFBSSxFQUFLO0FBQ3hDLGFBQUksRUFBRyxLQUFJLEVBQUksTUFBSSxFQUFJLE1BQUksRUFBSSxNQUFJLEVBQUs7QUFFekMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsVUFBRyxNQUFNO0FBQ1QsVUFBRyxNQUFNO0FBQ1QsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsVUFBRyxNQUFNO0FBQ1QsVUFBRyxNQUFNO0FBQ1QsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsVUFBRyxNQUFNO0FBQ1QsVUFBRyxNQUFNO0FBQ1QsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsVUFBRyxNQUFNO0FBQ1QsVUFBRyxNQUFNO0FBQ1QsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsWUFBUSxNQUFJLE1BQVMsQ0FBWixHQUFlLE9BQVU7QUFDbEMsVUFBRyxNQUFNO0FBQ1QsVUFBRyxNQUFNO0FBQ1QsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBQ1YsVUFBSSxPQUFNO0FBRVQsYUFBSSxFQUFJO0FBQ1IsYUFBSSxFQUFJO0FBQ1AsY0FBSyxFQUFJLE9BQVMsQ0FBZixHQUFpQixFQUFJLFFBQVM7QUFDakMsY0FBSyxFQUFJLE9BQVMsQ0FBZixHQUFpQixFQUFJLFFBQVM7QUFDakMsY0FBSyxFQUFJLE9BQVMsQ0FBZixHQUFpQixFQUFJLFFBQVM7QUFDakMsY0FBSyxFQUFJLE9BQVMsQ0FBZixHQUFpQixFQUFJ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cUJBQUksR0FBRyxLQUFLLEdBQUssS0FBRztBQUMvQyxZQUFTLE1BQWUsYUFBSSxJQUFLLEtBQVksY0FBSSxJQUFNO0FBQ3ZELFlBQVUsT0FBZSxhQUFLLEtBQUssS0FBWSxjQUFJLElBQU07QUFDekQsWUFBZ0IsYUFBTSxJQUFJLElBQU87QUFDakMsWUFBbUIsZ0JBQWEsV0FBTztBQUN4QiwwQkFBa0IsZ0JBQUksSUFBZ0I7O0FBQ2xELFlBQWdCLGdCQUFhLGlCQUFPLEdBQUU7QUFFekM7QUFDSjtBQUFDOztBQUNLLGFBQ1Y7QUFBQzs7Ozs7QUE5TWM7OztBQUNTLFdBQVMsWUFBVyxDQUFHO0FBQ2hDOztBQUNTLFdBQVEsV0FBYTtBQUpqRCxxQkFnTkMsVyIsImZpbGUiOiJpb3RhLXBpY28tcG93LWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL3Bvdy1qc1wiLCBbXCJiaWctaW50ZWdlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAaW90YS1waWNvL3Bvdy1qc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJpZy1pbnRlZ2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb1Bvd0pzXCJdID0gZmFjdG9yeShyb290W1wiYmlnSW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFiOGE0NTI2YmMwOTY2NGJmYjJhIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogT2JqZWN0IGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgT2JqZWN0SGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGVtcHR5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgZW1wdHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiB0eXBlb2YgKHZhbHVlKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBvYmplY3QgaWYgZ2l2ZW4gdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZUdFJRVU0xUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXl4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRlZPMUZCUXpkQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4SlFVRkpMRXRCUVVzc1MwRkJTeXhUUVVGVE8xbEJRM2hETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRkxFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJWU3hGUVVGRkxHVkJRWGxDTzFGQlEzUkVMRTFCUVUwc1kwRkJZeXhIUVVGSExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRlRVFzVFVGQlRTeERRVUZETEdOQlFXTXNTMEZCU3l4VFFVRlRMRWxCUVVrc1kwRkJZeXhMUVVGTExGbEJRVmtzUTBGQlF5eFpRVUZaTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1NVRkRla2NzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVZjN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRWxCUVVrc1NVRkJTU3hOUVVGTkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXhReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzSkNMRU5CUVVNN1VVRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5LTEUxQlFVMHNWMEZCVnl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xbEJRM0pITEUxQlFVMHNUMEZCVHl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlEzQkZMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMG83UVVFM1EwUXNiME5CTmtOREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlcy5cclxuICovXHJcbmNsYXNzIFRyeXRlcyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX3RyeXRlcyA9IHRyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyeXRlcyBmcm9tIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIGNyZWF0ZSB0aGUgdHJ5dGVzIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIEFuIG9wdGlvbmFsIHZhbGlkYXRpb24gbGVuZ3RoIGZvciB0aGUgdHJ5dGVzLCAwIG1lYW5zIGlnbm9yZSBsZW5ndGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVRyeXRlcy5pc1ZhbGlkKHZhbHVlLCBsZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgYW5kIGxlbmd0aCBkbyBub3QgY29udGFpbiB2YWxpZCB0cnl0ZXNcIiwgeyB2YWx1ZSwgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIHZhbHVlIGNvbnRhaW4gdmFsaWQgdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHRvIHZhbGlkYXRlIGFzIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggQW4gb3B0aW9uYWwgdmFsaWRhdGlvbiBsZW5ndGggZm9yIHRoZSB0cnl0ZXMsIDAgbWVhbnMgaWdub3JlIGxlbmd0aC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGlucHV0IHdhcyB2YWxpZCB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ZhbGlkKHZhbHVlLCBsZW5ndGggPSAwKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKGBeWzlBLVpdeyR7bGVuZ3RoID8gbGVuZ3RoIDogXCIwLFwifX0kYCkudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZXMgdG8gYSBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsZW5ndGggb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24gdG8gZ2V0IHRoZSBzdWIuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN1Yi5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cnl0ZXMgc3ViLlxyXG4gICAgICovXHJcbiAgICBzdWIoc3RhcnQsIGxlbmd0aCkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihzdGFydCkgfHwgc3RhcnQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgc3RhcnQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCAoc3RhcnQgKyBsZW5ndGgpID4gdGhpcy5fdHJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyeXRlcy5sZW5ndGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBUcnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQWxsIHRoZSBjaGFyYWN0ZXJzIHRoYXQgY2FuIGJlIHVzZWQgaW4gdHJ5dGVzLlxyXG4gKi9cclxuVHJ5dGVzLkFMUEhBQkVUID0gXCI5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuZXhwb3J0cy5Ucnl0ZXMgPSBUcnl0ZXM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRISjVkR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRISjVkR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3cwUlVGQmVVVTdRVUZEZWtVc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVVV2UXpzN1IwRkZSenRCUVVOSU8wbEJVMGtzWlVGQlpUdEpRVU5tTEZsQlFXOUNMRTFCUVdNN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGaExFVkJRVVVzVTBGQmFVSXNRMEZCUXp0UlFVTjBSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9ReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzFGQlEyaEZMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExIbENRVUY1UWl4RFFVRkRMRU5CUVVNN1VVRkRia1FzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHdEVRVUZyUkN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBZc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRV0VzUlVGQlJTeFRRVUZwUWl4RFFVRkRPMUZCUTI1RUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZEYWtJc1EwRkJRenRSUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEwb3NUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGZEJRVmNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEVkQlFVY3NRMEZCUXl4TFFVRmhMRVZCUVVVc1RVRkJZenRSUVVOd1F5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdsRFFVRnBReXhEUVVGRExFTkJRVU03VVVGRE0wUXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpWRkxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRGhDUVVFNFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03TzBGQk5VVkVPenRIUVVWSE8wRkJRMWNzWlVGQlVTeEhRVUZYTERaQ1FVRTJRaXhEUVVGRE8wRkJTbTVGTEhkQ1FUaEZReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyeXRlcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE51bWJlciBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE51bWJlckhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBpbnRlZ2VyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgaW50ZWdlcm5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBpbnRlZ2VyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIG51bWJlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG51bWJlcnluZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZmxvYXQgbnVtYmVyIGZvcm1hdHRlZCBhcyBhIHN0cmluZywgY2FuIGJlIHVzZWQgZm9yIGJpZyBudW1iZXJzIHRoYXQgd291bGQgb3ZlcmZsb3cgcGFyc2VGbG9hdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5vU1N4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQllUdFJRVU55UXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlEwbzdRVUZ3UTBRc2IwTkJiME5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgZGF0YSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIERhdGFFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBEYXRhRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiRGF0YVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRGF0YUVycm9yID0gRGF0YUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR0YwWVVWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDJSaGRHRkZjbkp2Y2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYjBWQlFXbEZPMEZCUldwRk96dEhRVVZITzBGQlEwZ3NaVUZCZFVJc1UwRkJVU3h4UWtGQlV6dEpRVU53UXpzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1QwRkJaU3hGUVVGRkxGVkJRV3RETEVWQlFVVXNWVUZCYTBJN1VVRkRMMFVzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGVrSXNRMEZCUXp0RFFVTktPMEZCV0VRc09FSkJWME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvZGF0YUVycm9yLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9jb3JlRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBBIGNyeXB0byBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIENyeXB0b0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIENyeXB0b0Vycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcik7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNyeXB0b1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ3J5cHRvRXJyb3IgPSBDcnlwdG9FcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKNWNIUnZSWEp5YjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WlhKeWIzSXZZM0o1Y0hSdlJYSnliM0l1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRzlGUVVGcFJUdEJRVVZxUlRzN1IwRkZSenRCUVVOSUxHbENRVUY1UWl4VFFVRlJMSEZDUVVGVE8wbEJRM1JET3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4UFFVRmxMRVZCUVVVc1ZVRkJhME1zUlVGQlJTeFZRVUZyUWp0UlFVTXZSU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVNelFpeERRVUZETzBOQlEwbzdRVUZZUkN4clEwRlhReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9jcnlwdG9FcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBoYXNoZXMuXHJcbiAqL1xyXG5jbGFzcyBIYXNoIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgaGFzaCBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSBoYXNoIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBoYXNoIGZyb20uXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBIYXNoLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbVRyeXRlcyhoYXNoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGhhc2gsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBoYXNoIHNob3VsZCBiZSBhIHZhbGlkIFRyeXRlcyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhhc2gubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gSGFzaC5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGhhc2ggc2hvdWxkIGJlICR7SGFzaC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSGFzaChoYXNoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgaGFzaCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgaGFzaC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBoYXNoICg4MSkuXHJcbiAqL1xyXG5IYXNoLkxFTkdUSCA9IDgxO1xyXG4vKipcclxuICogQW4gZW1wdHkgaGFzaCBhbGwgOXMuXHJcbiAqL1xyXG5IYXNoLkVNUFRZID0gSGFzaC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChIYXNoLkxFTkdUSCkpKTtcclxuZXhwb3J0cy5IYXNoID0gSGFzaDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYUdGemFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMmhoYzJndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zY1VOQlFXdERPMEZCUld4RE96dEhRVVZITzBGQlEwZzdTVUZoU1N4bFFVRmxPMGxCUTJZc1dVRkJiMElzVFVGQll6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQldUdFJRVU5xUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hsUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFJRVU53UlN4RFFVRkRPMUZCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpkQ0xFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UWl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hEUVVGRExFMUJRVTBzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bEdMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRU5CUVVNN08wRkJha1JFT3p0SFFVVkhPMEZCUTI5Q0xGZEJRVTBzUjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZETTBNN08wZEJSVWM3UVVGRGIwSXNWVUZCU3l4SFFVRlRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRlNja2NzYjBKQmJVUkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL2hhc2gudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFycmF5SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9hcnJheUhlbHBlclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBkYXRhRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9kYXRhRXJyb3JcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJpdHMuXHJcbiAqL1xyXG5jbGFzcyBUcml0cyB7XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRyaXRzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJpdHMgPSB0cml0cztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyaXRzIGZyb20gSW50OEFycmF5IGFycmF5LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRyeXRlcyB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlciBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21OdW1iZXJBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghYXJyYXlIZWxwZXJfMS5BcnJheUhlbHBlci5pc1R5cGVkKHZhbHVlLCBOdW1iZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgZG9lcyBub3QgY29udGFpbiB2YWxpZCB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIHRyeXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUcnl0ZXMgdXNlZCB0byBjcmVhdGUgdHJpdHMuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcml0cy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0cnl0ZXNTdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0cnl0ZXNTdHJpbmcubGVuZ3RoICogMyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXNTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmluZGV4T2YodHJ5dGVzU3RyaW5nLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzXSA9IFRyaXRzLlRSWVRFU19UUklUU1tpZHhdWzBdO1xyXG4gICAgICAgICAgICB0cml0c1tpICogMyArIDFdID0gVHJpdHMuVFJZVEVTX1RSSVRTW2lkeF1bMV07XHJcbiAgICAgICAgICAgIHRyaXRzW2kgKiAzICsgMl0gPSBUcml0cy5UUllURVNfVFJJVFNbaWR4XVsyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyh0cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBpbnN0YW5jZSBvZiB0cml0cyBmcm9tIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIE51bWJlciB1c2VkIHRvIGNyZWF0ZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRyaXRzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB2YWx1ZSBpcyBub3QgYW4gaW50ZWdlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJpdHMgPSBbXTtcclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlO1xyXG4gICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gYWJzb2x1dGVWYWx1ZSAlIDM7XHJcbiAgICAgICAgICAgIGFic29sdXRlVmFsdWUgPSBNYXRoLmZsb29yKGFic29sdXRlVmFsdWUgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYWJzb2x1dGVWYWx1ZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyaXRzW3RyaXRzLmxlbmd0aF0gPSByZW1haW5kZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbaV0gPSAtdHJpdHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcml0cyhuZXcgSW50OEFycmF5KHRyaXRzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCB0d28gdHJpdHMgdG9nZXRoZXIuXHJcbiAgICAgKiBAcGFyYW0gZmlyc3QgVGhlIGZpcnN0IHRyaXQuXHJcbiAgICAgKiBAcGFyYW0gc2Vjb25kIFRoZSBzZWNvbmQgdHJpdC5cclxuICAgICAqIEByZXR1cm4gTmV3IHRyaXQgd2hpY2ggaXMgdGhlIGFkZGl0aW9uIG9mIHRoZSBhICsgYi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGZpcnN0LCBUcml0cykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBmaXJzdCBzaG91bGQgYmUgYSB2YWxpZCBUcml0cyBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShzZWNvbmQsIFRyaXRzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNlY29uZHMgc2hvdWxkIGJlIGEgdmFsaWQgVHJpdHMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgSW50OEFycmF5KE1hdGgubWF4KGZpcnN0Ll90cml0cy5sZW5ndGgsIHNlY29uZC5fdHJpdHMubGVuZ3RoKSk7XHJcbiAgICAgICAgbGV0IGNhcnJ5ID0gMDtcclxuICAgICAgICBsZXQgaUE7XHJcbiAgICAgICAgbGV0IGlCO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlBID0gaSA8IGZpcnN0Ll90cml0cy5sZW5ndGggPyBmaXJzdC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBpQiA9IGkgPCBzZWNvbmQuX3RyaXRzLmxlbmd0aCA/IHNlY29uZC5fdHJpdHNbaV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBmQSA9IFRyaXRzLmZ1bGxBZGQoaUEsIGlCLCBjYXJyeSk7XHJcbiAgICAgICAgICAgIG91dFtpXSA9IGZBWzBdO1xyXG4gICAgICAgICAgICBjYXJyeSA9IGZBWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVHJpdHMuZnJvbUFycmF5KG91dCk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIHN0YXRpYyBmdWxsQWRkKGEsIGIsIGMpIHtcclxuICAgICAgICBjb25zdCBzQSA9IFRyaXRzLnN1bShhLCBiKTtcclxuICAgICAgICBjb25zdCBjQSA9IFRyaXRzLmNvbnMoYSwgYik7XHJcbiAgICAgICAgY29uc3QgY0IgPSBUcml0cy5jb25zKHNBLCBjKTtcclxuICAgICAgICBjb25zdCBjT3V0ID0gVHJpdHMuYW55KGNBLCBjQik7XHJcbiAgICAgICAgY29uc3Qgc09VdCA9IFRyaXRzLnN1bShzQSwgYyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoW3NPVXQsIGNPdXRdKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIHN1bShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIHN3aXRjaCAocykge1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiAtMTtcclxuICAgICAgICAgICAgY2FzZSAtMjogcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGNvbnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgc3RhdGljIGFueShhLCBiKSB7XHJcbiAgICAgICAgY29uc3QgcyA9IGEgKyBiO1xyXG4gICAgICAgIGlmIChzID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocyA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiB0aGUgdHJpdHMgYXJyYXkuXHJcbiAgICAgKiBAcmV0dXJucyBBcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIHRvQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyaXRzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSB0cml0cyBhcnJheSBhcyBhIG51bWJlciBhcnJheS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0cml0cy5cclxuICAgICAqL1xyXG4gICAgdG9OdW1iZXJBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl90cml0cyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdHJpdHMgYXMgdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgSW5zdGFuY2Ugb2YgVHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBsZXQgdHJ5dGVzID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RyaXRzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgdHJ5dGUgdmFsdWVzIHRvIGZpbmQgY29ycmVjdCB0cml0IHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzBdID09PSB0aGlzLl90cml0c1tpXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFRyaXRzLlRSWVRFU19UUklUU1tqXVsxXSA9PT0gdGhpcy5fdHJpdHNbaSArIDFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgVHJpdHMuVFJZVEVTX1RSSVRTW2pdWzJdID09PSB0aGlzLl90cml0c1tpICsgMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnl0ZXMgKz0gdHJ5dGVzXzEuVHJ5dGVzLkFMUEhBQkVULmNoYXJBdChqKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodHJ5dGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB0cml0cyBhcyBhIG51bWJlci5cclxuICAgICAqIEByZXR1cm5zIFRoZSB0cml0cyBjb252ZXJ0ZWQgdG8gYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX3RyaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUgKiAzICsgdGhpcy5fdHJpdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0cy5cclxuICAgICAqIEByZXR1cm5zIExlbmd0aCBvZiB0aGUgdHJpdHMuXHJcbiAgICAgKi9cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJpdHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdWIgb2YgdGhlIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbiB0byBnZXQgdGhlIHN1Yi5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3ViLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyaXRzIHN1Yi5cclxuICAgICAqL1xyXG4gICAgc3ViKHN0YXJ0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIoc3RhcnQpIHx8IHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHN0YXJ0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgKHN0YXJ0ICsgbGVuZ3RoKSA+IHRoaXMuX3RyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc3RhcnQgKyBsZW5ndGggbXVzdCA8PSAke3RoaXMuX3RyaXRzLmxlbmd0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyaXRzLmZyb21BcnJheSh0aGlzLl90cml0cy5zbGljZShzdGFydCwgc3RhcnQgKyBsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuVHJpdHMuVFJZVEVTX1RSSVRTID0gW1xyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAxXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMCwgMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIDEsIDFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIC0xLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgLTEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzAsIDAsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFsxLCAwLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbLTEsIDEsIC0xXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFswLCAxLCAtMV0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMSwgMSwgLTFdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWy0xLCAtMSwgMF0pLFxyXG4gICAgbmV3IEludDhBcnJheShbMCwgLTEsIDBdKSxcclxuICAgIG5ldyBJbnQ4QXJyYXkoWzEsIC0xLCAwXSksXHJcbiAgICBuZXcgSW50OEFycmF5KFstMSwgMCwgMF0pXHJcbl07XHJcbmV4cG9ydHMuVHJpdHMgPSBUcml0cztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKcGRITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlpHRjBZUzkwY21sMGN5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01FVkJRWFZGTzBGQlEzWkZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNhMFJCUVN0RE8wRkJReTlETEhGRFFVRnJRenRCUVVWc1F6czdSMEZGUnp0QlFVTklPMGxCYlVOSkxHVkJRV1U3U1VGRFppeFpRVUZ2UWl4TFFVRm5RanRSUVVOb1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJaMEk3VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcERMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03VVVGRGJFVXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWlR0UlFVTjZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRkRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2QwTkJRWGRETEVOQlFVTXNRMEZCUXp0UlFVTnNSU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRTdVVUZEYkVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzWlVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNSRExFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMREpEUVVFeVF5eERRVUZETEVOQlFVTTdVVUZEY2tVc1EwRkJRenRSUVVORUxFMUJRVTBzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOMFF5eE5RVUZOTEV0QlFVc3NSMEZCWXl4SlFVRkpMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEUxQlFVMHNSMEZCUnl4SFFVRkhMR1ZCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0xUkN4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkROVUlzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVdFN1VVRkRiRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjJSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeExRVUZMTEVkQlFXRXNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkZMME1zVDBGQlR5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRka0lzU1VGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOc1F5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGT1VNc1JVRkJSU3hEUVVGRExFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMmhDTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFppeGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTndRaXhEUVVGRE8xbEJSVVFzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRGNFTXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTFvc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRM0JETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjZRaXhEUVVGRE8xRkJRMHdzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJXU3hGUVVGRkxFMUJRV0U3VVVGRGVrTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VVVGRGNFVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MFEwRkJORU1zUTBGQlF5eERRVUZETzFGQlEzUkZMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXZSU3hKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEWkN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVOUUxFbEJRVWtzUlVGQlJTeERRVUZETzFGQlJWQXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZGYkVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRVZCUVVVc1IwRkJSeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4TlFVRk5MRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGVFTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm1MRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRMmhETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZUTEVWQlFVVXNRMEZCVXl4RlFVRkZMRU5CUVZNN1VVRkRiRVFzVFVGQlRTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBJc1RVRkJUU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VSXNUVUZCVFN4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkROMElzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETDBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk9VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFTEdWQlFXVTdTVUZEVUN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVk1zUlVGQlJTeERRVUZUTzFGQlEyNURMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZGYUVJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRXRCUVVzc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRUlzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEY0VNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRWaXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEySXNRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETzBsQlJVUXNaVUZCWlR0SlFVTlFMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlV5eEZRVUZGTEVOQlFWTTdVVUZEYmtNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVm9RaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOU0xFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEWWl4RFFVRkRPMUZCUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMllzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJRc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEWWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NUMEZCVHp0UlFVTldMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4aFFVRmhPMUZCUTJoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NVVUZCVVR0UlFVTllMRWxCUVVrc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZvUWl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNM1F5dzJSVUZCTmtVN1dVRkROMFVzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzJkQ1FVTTVReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8yOUNRVU16UXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRMME1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTJ4RUxFMUJRVTBzU1VGQlNTeGxRVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEY0VNc1MwRkJTeXhEUVVGRE8yZENRVU5XTEVOQlFVTTdXVUZEVEN4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSWEJDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRMME1zVjBGQlZ5eEhRVUZITEZkQlFWY3NSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUTdPenM3TzA5QlMwYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRGNFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFGQlF6TkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNelJTeE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkZMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNrVXNRMEZCUXpzN1FVRjJVVVFzWlVGQlpUdEJRVU5UTEd0Q1FVRlpMRWRCUVdkQ08wbEJRMmhFTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVFSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRla0lzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM3BDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRlRUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU14UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNVUlzU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGVrSXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNeFFpeEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UWl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRekZDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzcENMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRelZDTEVOQlFVTTdRVUU1UWs0c2MwSkJNRkZESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cml0cy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QganNvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvanNvbkhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbi8qKlxyXG4gKiBBIGNvcmUgaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBDb3JlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBDb3JlRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWwgPSBhZGRpdGlvbmFsID8gYWRkaXRpb25hbCA6IHt9O1xyXG4gICAgICAgIHRoaXMuaW5uZXJFcnJvciA9IGlubmVyRXJyb3I7XHJcbiAgICAgICAgdGhpcy5kb21haW4gPSBcIkNvcmVcIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGNvdWxkIGJlIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIGlmIGl0IGlzIGEgQ29yZUVycm9yLlxyXG4gICAgICogQHJldHVybnMgdHJ1ZSBJZiB0aGUgdGVzdGVkIG9iamVjdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRXJyb3Iob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIFwibWVzc2FnZVwiIGluIG9iaiAmJiBcImFkZGl0aW9uYWxcIiBpbiBvYmo7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgZXJyb3IgdG8gYSByZWFkYWJsZSB2ZXJzaW9uLlxyXG4gICAgICovXHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLmRvbWFpbikpIHtcclxuICAgICAgICAgICAgb3V0ICs9IGAke3RoaXMuZG9tYWlufTogYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYWRkaXRpb25hbCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAob3V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBcIlxcblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3V0ICs9IGBcXHQke2tleX06ICR7anNvbkhlbHBlcl8xLkpzb25IZWxwZXIuc3RyaW5naWZ5KHRoaXMuYWRkaXRpb25hbFtrZXldKX1cXG5gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNvcmVFcnJvciA9IENvcmVFcnJvcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5eVpVVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyTnZjbVZGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc2MwUkJRVzFFTzBGQlEyNUVMREJFUVVGMVJEdEJRVVYyUkRzN1IwRkZSenRCUVVOSUxHVkJRWFZDTEZOQlFWRXNTMEZCU3p0SlFXZENhRU03T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFJRVU5tTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRSUVVNM1FpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJVVHRSUVVNeFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRk5CUVZNc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1NVRkJTU3hUUVVGVExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWa3NTVUZCU1N4SFFVRkhMRU5CUVVNN1NVRkRia2dzUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUVHRSUVVOVUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVmlMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNN1VVRkRPVUlzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4wUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1EwRkJRenRSUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF6RkRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTTdXVUZEYUVJc1EwRkJRenRaUVVORUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRMllzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TFFVRkxMSFZDUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzWkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMUFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRaaXhEUVVGRE8wTkJRMG83UVVFdlJFUXNPRUpCSzBSREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFN0cmluZyBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIHN0cmluZ3luZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nIHRoYXQgaXMgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBubyBlbXB0eW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gZW1wdHkgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSBzdHJpbmcgYWxsIEFTQ0lJIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgc3RyaW5nIHRvIHRlc3QgaWYgaXMgaXMgQVNDSUkuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYWxsIEFTQ0lJLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBc2NpaSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiAvXltcXHgwMC1cXHhGRl0qJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVuY29kZSBub24gQVNDSUkgY2hhcmFjdGVycyB3aXRoIGNvbnRyb2wgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RyaW5nIHZhbHVlIHRvIGVzY2FwZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9bXFx1MDA3Ri1cXHVGRkZGXS9nLCAoY2hyKSA9PiBgXFxcXHUkeyhgMDAwMCR7Y2hyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLnN1YnN0cigtNCl9YCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSBjb250cm9sIGNoYXJhY3RlcnMgdG8gQVNDSUkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGVuY29kZWQgc3RyaW5nIHRvIGNvbnZlcnQgYmFjayB0byBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNvZGVkIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY29kZU5vbkFTQ0lJKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ0hlbHBlci5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC9cXFxcdShbXFxkXFx3XXs0fSkvZ2ksIChtYXRjaCwgZ3JwKSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGdycCwgMTYpKSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TdHJpbmdIZWxwZXIgPSBTdHJpbmdIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlhVzVuU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmMzUnlhVzVuU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlZUdFJRVU0zUWl4TlFVRk5MRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeExRVUZMTEV0QlFVc3NVMEZCVXp0WlFVTjRReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc2FVSkJRV2xDTEVOQlFVTTdTVUZET1VVc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1RVRkJUU3hEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTXZSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCWVR0UlFVTXZRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTXZTaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCWVR0UlFVTjBReXhOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVOb1NpeERRVUZETzBOQlEwbzdRVUV2UTBRc2IwTkJLME5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIi4vb2JqZWN0SGVscGVyXCIpO1xyXG4vKipcclxuICogQXJyYXkgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhbiBhcnJheS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgZW1wdHkgYXJyYXkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIGVtcHR5IGFycmF5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAhQXJyYXlIZWxwZXIuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBub24gZW1wdHkgYXJyYXkgb2Ygc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEBwYXJhbSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbm9uIGVtcHR5IGFycmF5IG9mIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZWQodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gIUFycmF5SGVscGVyLmlzRW1wdHkodmFsdWUpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyh1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhudWxsKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5ldmVyeSgoYSkgPT4gb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZShhLCB0eXBlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BcnJheUhlbHBlciA9IEFycmF5SGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEp5WVhsSVpXeHdaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZhR1ZzY0dWeWN5OWhjbkpoZVVobGJIQmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNhVVJCUVRoRE8wRkJSVGxET3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZWTzFGQlF6VkNMRTFCUVUwc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4VFFVRlRPMWxCUTNoRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFWVTdVVUZETlVJc1RVRkJUU3hEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVc1JVRkJSU3hKUVVGak8xRkJRelZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlF6bENMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETVVJc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUlVvN1FVRnFRMFFzYTBOQmFVTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL2FycmF5SGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRhZ3MuXHJcbiAqL1xyXG5jbGFzcyBUYWcge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0YWcgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSB0YWcgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFRhZy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModGFnKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRhZywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHRhZyBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdHJ5dGVzU3RyaW5nID0gdGFnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRyeXRlc1N0cmluZy5sZW5ndGggPiBUYWcuTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0YWcgc2hvdWxkIGJlIGF0IG1vc3QgJHtUYWcuTEVOR1RIfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVzU3RyaW5nLmxlbmd0aCA8IFRhZy5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdHJ5dGVzU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRhZyh0cnl0ZXNTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0YWcgdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIHRhZy5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX3RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RyaW5nIHZpZXcgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdGFnICgyNykuXHJcbiAqL1xyXG5UYWcuTEVOR1RIID0gMjc7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSB0YWcgYWxsIDlzLlxyXG4gKi9cclxuVGFnLkVNUFRZID0gVGFnLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KFRhZy5MRU5HVEgpKSk7XHJcbmV4cG9ydHMuVGFnID0gVGFnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR0ZuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlJoZEdFdmRHRm5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVmM3VVVGRGFFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEhsRFFVRjVReXhEUVVGRExFTkJRVU03VVVGRGJrVXNRMEZCUXp0UlFVVkVMRWxCUVVrc1dVRkJXU3hIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVVnNReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETERaQ1FVRTJRaXhIUVVGSExFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlNDeERRVUZETzFGQlJVUXNUMEZCVHl4WlFVRlpMRU5CUVVNc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTjBReXhaUVVGWkxFbEJRVWtzUjBGQlJ5eERRVUZETzFGQlEzaENMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1NVRkRha01zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNaVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0SlFVTjRRaXhEUVVGRE96dEJRWFJFUkRzN1IwRkZSenRCUVVOdlFpeFZRVUZOTEVkQlFWY3NSVUZCUlN4RFFVRkRPMEZCUXpORE96dEhRVVZITzBGQlEyOUNMRk5CUVVzc1IwRkJVU3hIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEdWQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJVbXhITEd0Q1FYZEVReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RhZy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgYWRkcmVzc18xID0gcmVxdWlyZShcIi4vYWRkcmVzc1wiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIi4vaGFzaFwiKTtcclxuY29uc3Qgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50XzEgPSByZXF1aXJlKFwiLi9zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRcIik7XHJcbmNvbnN0IHRhZ18xID0gcmVxdWlyZShcIi4vdGFnXCIpO1xyXG5jb25zdCB0cnl0ZU51bWJlcl8xID0gcmVxdWlyZShcIi4vdHJ5dGVOdW1iZXJcIik7XHJcbmNvbnN0IHRyeXRlc18xID0gcmVxdWlyZShcIi4vdHJ5dGVzXCIpO1xyXG4vKipcclxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgdHJhbnNhY3Rpb25zLlxyXG4gKi9cclxuY2xhc3MgVHJhbnNhY3Rpb24ge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gcGFyYW1ldGVycy5cclxuICAgICAqIEBwYXJhbSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQgVGhlIHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50LlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIGFkZHJlc3MuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG9ic29sZXRlVGFnIE9ic29sZXRlIHRyYW5zYWN0aW9uIHRhZy5cclxuICAgICAqIEBwYXJhbSB0aW1lc3RhbXAgVGhlIHRpbWVzdGFtcC5cclxuICAgICAqIEBwYXJhbSBjdXJyZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgKiBAcGFyYW0gbGFzdEluZGV4IFRoZSBsYXN0IGluZGV4LlxyXG4gICAgICogQHBhcmFtIGJ1bmRsZSBUaGUgYnVuZGxlLlxyXG4gICAgICogQHBhcmFtIHRydW5rVHJhbnNhY3Rpb24gVGhlIHRydW5rIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJyYW5jaFRyYW5zYWN0aW9uIFRoZSBicmFuY2ggdHJhbnNhY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gdGFnIFRoZSB0YWcuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcCBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgVGhlIGF0dGFjaG1lbnQgdGltZXN0YW1wIGxvd2VyIGJvdW5kLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kICBUaGUgYXR0YWNobWVudCB0aW1lc3RhbXAgdXBwZXIgYm91bmQuXHJcbiAgICAgKiBAcGFyYW0gbm9uY2UgVGhlIG5vbmNlLlxyXG4gICAgICogQHJldHVybiBOZXcgaW5zdGFuY2Ugb2YgdHJhbnNhY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tUGFyYW1zKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgYWRkcmVzcywgdmFsdWUsIG9ic29sZXRlVGFnLCB0aW1lc3RhbXAsIGN1cnJlbnRJbmRleCwgbGFzdEluZGV4LCBidW5kbGUsIHRydW5rVHJhbnNhY3Rpb24sIGJyYW5jaFRyYW5zYWN0aW9uLCB0YWcsIGF0dGFjaG1lbnRUaW1lc3RhbXAsIGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kLCBhdHRhY2htZW50VGltZXN0YW1wVXBwZXJCb3VuZCwgbm9uY2UpIHtcclxuICAgICAgICBjb25zdCB0eCA9IG5ldyBUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIHR4LnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuICAgICAgICB0eC5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICB0eC52YWx1ZSA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbU51bWJlcih2YWx1ZSwgMTEpO1xyXG4gICAgICAgIHR4Lm9ic29sZXRlVGFnID0gb2Jzb2xldGVUYWc7XHJcbiAgICAgICAgdHgudGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgdHguY3VycmVudEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgdHgubGFzdEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGxhc3RJbmRleCk7XHJcbiAgICAgICAgdHguYnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgIHR4LnRydW5rVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgIHR4LmJyYW5jaFRyYW5zYWN0aW9uID0gYnJhbmNoVHJhbnNhY3Rpb247XHJcbiAgICAgICAgdHgudGFnID0gdGFnO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcCk7XHJcbiAgICAgICAgdHguYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQpO1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kKTtcclxuICAgICAgICB0eC5ub25jZSA9IG5vbmNlO1xyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGluc3RhbmNlIG9mIHRyYW5zYWN0aW9uIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIHRyeXRlcyBUaGUgdHJ5dGVzIGZvciB0aGUgdGhpcy5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIHRoaXMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKHRyeXRlcykge1xyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSB0cnl0ZXMgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aCgpO1xyXG4gICAgICAgIGlmIChsZW5ndGggIT09IFRyYW5zYWN0aW9uLkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgdHJ5dGVzIG11c3QgYmUgJHtUcmFuc2FjdGlvbi5MRU5HVEh9IGluIGxlbmd0aGAsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGVja0luZGV4U3RhcnQgPSAyMjc5O1xyXG4gICAgICAgIGNvbnN0IGNoZWNrSW5kZXhMZW5ndGggPSAxNjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRyeXRlcy5zdWIoY2hlY2tJbmRleFN0YXJ0LCBjaGVja0luZGV4TGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChjaGVjayAhPT0gVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBiZXR3ZWVuICR7Y2hlY2tJbmRleFN0YXJ0fSBhbmQgJHtjaGVja0luZGV4U3RhcnQgKyBjaGVja0luZGV4TGVuZ3RofSBzaG91bGQgYmUgYWxsIDlzYCwgeyBjaGVjayB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHggPSBuZXcgVHJhbnNhY3Rpb24oKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSAwO1xyXG4gICAgICAgIHR4LnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIO1xyXG4gICAgICAgIHR4LmFkZHJlc3MgPSBhZGRyZXNzXzEuQWRkcmVzcy5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGFkZHJlc3NfMS5BZGRyZXNzLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGFkZHJlc3NfMS5BZGRyZXNzLkxFTkdUSDtcclxuICAgICAgICB0eC52YWx1ZSA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCAxMSksIDExKTtcclxuICAgICAgICBzdGFydFBvcyArPSAxMTtcclxuICAgICAgICBzdGFydFBvcyArPSBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRV9MRU5HVEg7XHJcbiAgICAgICAgdHgub2Jzb2xldGVUYWcgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdGFnXzEuVGFnLkxFTkdUSDtcclxuICAgICAgICB0eC50aW1lc3RhbXAgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOSkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzk7XHJcbiAgICAgICAgdHguY3VycmVudEluZGV4ID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4Lmxhc3RJbmRleCA9IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85KSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5MRU5HVEhfOTtcclxuICAgICAgICB0eC5idW5kbGUgPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC50cnVua1RyYW5zYWN0aW9uID0gaGFzaF8xLkhhc2guZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCBoYXNoXzEuSGFzaC5MRU5HVEgpKTtcclxuICAgICAgICBzdGFydFBvcyArPSBoYXNoXzEuSGFzaC5MRU5HVEg7XHJcbiAgICAgICAgdHguYnJhbmNoVHJhbnNhY3Rpb24gPSBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIGhhc2hfMS5IYXNoLkxFTkdUSCkpO1xyXG4gICAgICAgIHN0YXJ0UG9zICs9IGhhc2hfMS5IYXNoLkxFTkdUSDtcclxuICAgICAgICB0eC50YWcgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyh0cnl0ZXMuc3ViKHN0YXJ0UG9zLCB0YWdfMS5UYWcuTEVOR1RIKSk7XHJcbiAgICAgICAgc3RhcnRQb3MgKz0gdGFnXzEuVGFnLkxFTkdUSDtcclxuICAgICAgICB0eC5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4LmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tVHJ5dGVzKHRyeXRlcy5zdWIoc3RhcnRQb3MsIHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuTEVOR1RIXzkpKTtcclxuICAgICAgICBzdGFydFBvcyArPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkxFTkdUSF85O1xyXG4gICAgICAgIHR4Lm5vbmNlID0gdGFnXzEuVGFnLmZyb21Ucnl0ZXModHJ5dGVzLnN1YihzdGFydFBvcywgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgIHJldHVybiB0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJhbnNhY3Rpb24gdG8gdHJ5dGVzLlxyXG4gICAgICogQHJldHVybiBUaGUgdHJhbnNhY3Rpb24gYXMgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQsIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudF8xLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQ6IHRoaXMuc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5hZGRyZXNzLCBhZGRyZXNzXzEuQWRkcmVzcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIGFkZHJlc3MgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYWRkcmVzczogdGhpcy5hZGRyZXNzIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodGhpcy5vYnNvbGV0ZVRhZywgdGFnXzEuVGFnKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgb2Jzb2xldGVUYWcgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgb2Jzb2xldGVUYWc6IHRoaXMub2Jzb2xldGVUYWcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLmJ1bmRsZSwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBidW5kbGUgbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnVuZGxlOiB0aGlzLmJ1bmRsZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMudHJ1bmtUcmFuc2FjdGlvbiwgaGFzaF8xLkhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgc2V0IHRvIGNyZWF0ZSB0cmFuc2FjdGlvbiB0cnl0ZXNgLCB7IHRydW5rVHJhbnNhY3Rpb246IHRoaXMudHJ1bmtUcmFuc2FjdGlvbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBzZXQgdG8gY3JlYXRlIHRyYW5zYWN0aW9uIHRyeXRlc2AsIHsgYnJhbmNoVHJhbnNhY3Rpb246IHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzVHlwZSh0aGlzLm5vbmNlLCB0YWdfMS5UYWcpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBub25jZSBtdXN0IGJlIHNldCB0byBjcmVhdGUgdHJhbnNhY3Rpb24gdHJ5dGVzYCwgeyBub25jZTogdGhpcy5ub25jZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzID0gdGhpcy5zaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5hZGRyZXNzLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLnZhbHVlIHx8IFRyYW5zYWN0aW9uLkVNUFRZXzExKS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyBUcmFuc2FjdGlvbi5DSEVDS19WQUxVRVxyXG4gICAgICAgICAgICArIHRoaXMub2Jzb2xldGVUYWcudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMuY3VycmVudEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMubGFzdEluZGV4IHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5idW5kbGUudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy50cnVua1RyYW5zYWN0aW9uLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArIHRoaXMuYnJhbmNoVHJhbnNhY3Rpb24udG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgKHRoaXMudGFnIHx8IHRoaXMub2Jzb2xldGVUYWcpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXAgfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b1RyeXRlcygpLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgKyAodGhpcy5hdHRhY2htZW50VGltZXN0YW1wTG93ZXJCb3VuZCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICArICh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9Ucnl0ZXMoKS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICsgdGhpcy5ub25jZS50b1RyeXRlcygpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdHJ5dGVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBUcmFuc2FjdGlvbi5MRU5HVEgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihgVGhlIHRyeXRlcyBtdXN0IGJlICR7VHJhbnNhY3Rpb24uTEVOR1RIfSBpbiBsZW5ndGggJHtsZW5ndGh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcblxcdHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDogXCIkeyh0aGlzLnNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCB8fCBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnRfMS5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YWRkcmVzczogXCIkeyh0aGlzLmFkZHJlc3MgfHwgYWRkcmVzc18xLkFkZHJlc3MuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dmFsdWU6ICR7KHRoaXMudmFsdWUgfHwgVHJhbnNhY3Rpb24uRU1QVFlfMTEpLnRvTnVtYmVyKCl9XG5cXHRvYnNvbGV0ZVRhZzogXCIkeyh0aGlzLm9ic29sZXRlVGFnIHx8IHRhZ18xLlRhZy5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0aW1lc3RhbXA6ICR7KHRoaXMudGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGN1cnJlbnRJbmRleDogJHsodGhpcy5jdXJyZW50SW5kZXggfHwgdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5FTVBUWV85KS50b051bWJlcigpfVxuXFx0bGFzdEluZGV4OiAkeyh0aGlzLmxhc3RJbmRleCB8fCB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLkVNUFRZXzkpLnRvTnVtYmVyKCl9XG5cXHRidW5kbGU6IFwiJHsodGhpcy5idW5kbGUgfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0dHJ1bmtUcmFuc2FjdGlvbjogXCIkeyh0aGlzLnRydW5rVHJhbnNhY3Rpb24gfHwgaGFzaF8xLkhhc2guRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YnJhbmNoVHJhbnNhY3Rpb246IFwiJHsodGhpcy5icmFuY2hUcmFuc2FjdGlvbiB8fCBoYXNoXzEuSGFzaC5FTVBUWSkudG9Ucnl0ZXMoKS50b1N0cmluZygpfVwiXG5cXHR0YWc6IFwiJHsodGhpcy50YWcgfHwgdGhpcy5vYnNvbGV0ZVRhZyB8fCB0YWdfMS5UYWcuRU1QVFkpLnRvVHJ5dGVzKCkudG9TdHJpbmcoKX1cIlxuXFx0YXR0YWNobWVudFRpbWVzdGFtcDogJHsodGhpcy5hdHRhY2htZW50VGltZXN0YW1wIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBMb3dlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdGF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kOiAkeyh0aGlzLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kIHx8IHRyeXRlTnVtYmVyXzEuVHJ5dGVOdW1iZXIuRU1QVFlfOSkudG9OdW1iZXIoKX1cblxcdG5vbmNlOiBcIiR7KHRoaXMubm9uY2UgfHwgdGFnXzEuVGFnLkVNUFRZKS50b1RyeXRlcygpLnRvU3RyaW5nKCl9XCJcbn1gO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgdHJhbnNhY3Rpb24gKDI2NzMpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uTEVOR1RIID0gMjY3MztcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggb2YgYSB2YWxpZCBjaGVjayB2YWx1ZSAoMTYpLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIID0gMTY7XHJcbi8qKlxyXG4gKiBUaGUgY2hlY2sgdmFsdWUgZm9yIGJ1bmRsZXMgYWxsIDlzLlxyXG4gKi9cclxuVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUUgPSBcIjlcIi5yZXBlYXQoVHJhbnNhY3Rpb24uQ0hFQ0tfVkFMVUVfTEVOR1RIKTtcclxuLyogQGludGVybmFsICovXHJcblRyYW5zYWN0aW9uLkVNUFRZXzExID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKDAsIDExKTtcclxuZXhwb3J0cy5UcmFuc2FjdGlvbiA9IFRyYW5zYWN0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZaR0YwWVM5MGNtRnVjMkZqZEdsdmJpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMR3RFUVVFclF6dEJRVU12UXl4MVEwRkJiME03UVVGRGNFTXNhVU5CUVRoQ08wRkJRemxDTEhsRlFVRnpSVHRCUVVOMFJTd3JRa0ZCTkVJN1FVRkROVUlzSzBOQlFUUkRPMEZCUXpWRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQlowWkpMR1ZCUVdVN1NVRkRaanRKUVVOQkxFTkJRVU03U1VGRlJEczdPenM3T3pzN096czdPenM3T3pzN08wOUJhMEpITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXgzUWtGQmEwUXNSVUZEYkVRc1QwRkJaMElzUlVGRGFFSXNTMEZCWVN4RlFVTmlMRmRCUVdkQ0xFVkJRMmhDTEZOQlFXbENMRVZCUTJwQ0xGbEJRVzlDTEVWQlEzQkNMRk5CUVdsQ0xFVkJRMnBDTEUxQlFWa3NSVUZEV2l4blFrRkJjMElzUlVGRGRFSXNhVUpCUVhWQ0xFVkJRM1pDTEVkQlFWRXNSVUZEVWl4dFFrRkJNa0lzUlVGRE0wSXNOa0pCUVhGRExFVkJRM0pETERaQ1FVRnhReXhGUVVOeVF5eExRVUZWTzFGQlF5OUNMRTFCUVUwc1JVRkJSU3hIUVVGSExFbEJRVWtzVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1JVRkJSU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMSGRDUVVGM1FpeERRVUZETzFGQlEzWkVMRVZCUVVVc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEzSkNMRVZCUVVVc1EwRkJReXhMUVVGTExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6ZERMRVZCUVVVc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhUUVVGVExFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VVVGRGFrUXNSVUZCUlN4RFFVRkRMRmxCUVZrc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOMlJDeEZRVUZGTEVOQlFVTXNVMEZCVXl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTJwRUxFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUTI1Q0xFVkJRVVVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhuUWtGQlowSXNRMEZCUXp0UlFVTjJReXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTTdVVUZEZWtNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdVVUZEWWl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRSUVVOeVJTeEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNRMEZCUXp0UlFVTjZSaXhGUVVGRkxFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dFJRVU42Uml4RlFVRkZMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRMlFzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVdNN1VVRkRia01zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1pETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEUkRRVUUwUXl4RFFVRkRMRU5CUVVNN1VVRkRkRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dFJRVU12UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRU1zVFVGQlRTeEpRVUZKTEhGQ1FVRlRMRU5CUVVNc2MwSkJRWE5DTEZkQlFWY3NRMEZCUXl4TlFVRk5MRmxCUVZrc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVZc1EwRkJRenRSUVVWRUxFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTTNRaXhOUVVGTkxHZENRVUZuUWl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVNMVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExHVkJRV1VzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJYWkZMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUzBGQlN5eFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNaVUZCWlN4UlFVRlJMR1ZCUVdVc1IwRkJSeXhuUWtGQlowSXNiVUpCUVcxQ0xFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNaSkxFTkJRVU03VVVGRlJDeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVGRDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOcVFpeEZRVUZGTEVOQlFVTXNkMEpCUVhkQ0xFZEJRVWNzYlVSQlFYZENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRzFFUVVGM1FpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRla2dzVVVGQlVTeEpRVUZKTEcxRVFVRjNRaXhEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU0xUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhIUVVGSExHbENRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEdsQ1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUlN4UlFVRlJMRWxCUVVrc2FVSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZETTBJc1JVRkJSU3hEUVVGRExFdEJRVXNzUjBGQlJ5eDVRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUlN4UlFVRlJMRWxCUVVrc1JVRkJSU3hEUVVGRE8xRkJRMllzVVVGQlVTeEpRVUZKTEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFJRVU16UXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhIUVVGSExGTkJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVVzVVVGQlVTeEpRVUZKTEZOQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRka0lzUlVGQlJTeERRVUZETEZOQlFWTXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRVlzVVVGQlVTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJRMnBETEVWQlFVVXNRMEZCUXl4WlFVRlpMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0pHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhIUVVGSExIbENRVUZYTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEhsQ1FVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5zUml4UlFVRlJMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVVUZEYWtNc1JVRkJSU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlFTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM3BGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eFhRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRekZGTEZGQlFWRXNTVUZCU1N4WFFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1UwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hUUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hSUVVGUkxFbEJRVWtzVTBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzZVVKQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZHTEZGQlFWRXNTVUZCU1N4NVFrRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6dFJRVU5xUXl4RlFVRkZMRU5CUVVNc05rSkJRVFpDTEVkQlFVY3NlVUpCUVZjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc2VVSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSSExGRkJRVkVzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRkZCUVZFc1EwRkJRenRSUVVOcVF5eEZRVUZGTEVOQlFVTXNOa0pCUVRaQ0xFZEJRVWNzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNlVUpCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzUkhMRkZCUVZFc1NVRkJTU3g1UWtGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXp0UlFVTnFReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNVMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRk5VUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzYlVSQlFYZENMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFWXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZFVWQlFYVkZMRVZCUVVVc1JVRkJSU3gzUWtGQmQwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpsS0xFTkJRVU03VVVGRlJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc2FVSkJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTTVReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl4elJFRkJjMFFzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU16Unl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNNVF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UkVGQk1FUXNSVUZCUlN4RlFVRkZMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjJTQ3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5eHhSRUZCY1VRc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONFJ5eERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWMEZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExDdEVRVUVyUkN4RlFVRkZMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjBTU3hEUVVGRE8xRkJSVVFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMR2RGUVVGblJTeEZRVUZGTEVWQlFVVXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42U1N4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh2UkVGQmIwUXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlSeXhEUVVGRE8xRkJSVVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGRDUVVGM1FpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNMVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5zUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU14UkN4WFFVRlhMRU5CUVVNc1YwRkJWenRqUVVOMlFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU4wUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZETjBRc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTJoRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHRqUVVNM1JDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU5xUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8yTkJRek5ETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkROVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRjRVFzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEZGtVc1EwRkJReXhKUVVGSkxFTkJRVU1zTmtKQlFUWkNMRWxCUVVrc2VVSkJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGFrWXNRMEZCUXl4SlFVRkpMRU5CUVVNc05rSkJRVFpDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1kwRkRha1lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVYyUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6ZENMRVZCUVVVc1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOb1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXh6UWtGQmMwSXNWMEZCVnl4RFFVRkRMRTFCUVUwc1kwRkJZeXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRjRWNzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4bFFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzSkRMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1RVRkJUU3hEUVVGRE95dENRVU5uUWl4RFFVRkRMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNTVUZCU1N4dFJFRkJkMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGVFY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxHbENRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFkQlEzaEVMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8ydENRVU40UXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzVTBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3YTBKQlF5OURMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJUdGxRVU40UkN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFbEJRVWtzZVVKQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVU3WVVGRGNFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxGZEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVU3ZFVKQlEzWkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SlFVRkpMRmRCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN2QwSkJRekZFTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEpRVUZKTEZkQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVTdWVUZETVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1UwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1JVRkJSVHQ1UWtGRGJFUXNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVsQlFVa3NlVUpCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVTdiVU5CUTJ4RUxFTkJRVU1zU1VGQlNTeERRVUZETERaQ1FVRTJRaXhKUVVGSkxIbENRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk8yMURRVU4wUlN4RFFVRkRMRWxCUVVrc1EwRkJReXcyUWtGQk5rSXNTVUZCU1N4NVFrRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTTNSaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NVMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlR0RlFVTjZSQ3hEUVVGRE8wbEJRME1zUTBGQlF6czdRVUZ3VWtRN08wZEJSVWM3UVVGRGIwSXNhMEpCUVUwc1IwRkJWeXhKUVVGSkxFTkJRVU03UVVGRk4wTTdPMGRCUlVjN1FVRkRiMElzT0VKQlFXdENMRWRCUVZjc1JVRkJSU3hEUVVGRE8wRkJSWFpFT3p0SFFVVkhPMEZCUTI5Q0xIVkNRVUZYTEVkQlFWY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRCUVVWNFJpeGxRVUZsTzBGQlExTXNiMEpCUVZFc1IwRkJaMElzZVVKQlFWY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBGQmFrSnNSaXhyUTBGelVrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kYXRhL3RyYW5zYWN0aW9uLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJpdHNfMSA9IHJlcXVpcmUoXCIuL3RyaXRzXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIHRyeXRlIG51bWJlci5cclxuICovXHJcbmNsYXNzIFRyeXRlTnVtYmVyIHtcclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgY29uc3RydWN0b3IodHJ5dGVzKSB7XHJcbiAgICAgICAgdGhpcy5fdHJ5dGVzID0gdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJ5dGUgbnVtYmVyIGZyb20gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBudW1iZXIgdmFsdWUgdG8gY3JlYXRlIHRoZSBvYmplY3QgZnJvbS5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIHRyeXRlIGxlbmd0aCB0byBwYWQgdGhlIG51bWJlciB3aXRoLlxyXG4gICAgICogQHJldHVybnMgQW4gaW5zdGFuY2Ugb2YgVHJ5dGVOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlLCBsZW5ndGggPSBUcnl0ZU51bWJlci5MRU5HVEhfOSkge1xyXG4gICAgICAgIGxldCB0cnl0ZXM7XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGRhdGFFcnJvcl8xLkRhdGFFcnJvcihcIlRoZSBsZW5ndGggc2hvdWxkIGJlIGEgbnVtYmVyID4gMFwiLCB7IGxlbmd0aCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cnl0ZXMgPSBcIjlcIi5yZXBlYXQobGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgaXMgbm90IGFuIGludGVnZXJcIiwgeyB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cml0cyA9IHRyaXRzXzEuVHJpdHMuZnJvbU51bWJlcih2YWx1ZSkudG9OdW1iZXJBcnJheSgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJpdHMubGVuZ3RoIDwgbGVuZ3RoICogMykge1xyXG4gICAgICAgICAgICAgICAgdHJpdHMucHVzaCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnl0ZXMgPSB0cml0c18xLlRyaXRzLmZyb21OdW1iZXJBcnJheSh0cml0cykudG9Ucnl0ZXMoKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0cnl0ZSBudW1iZXIgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG51bWJlciB2YWx1ZSB0byBjcmVhdGUgdGhlIG9iamVjdCBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgdHJ5dGUgbGVuZ3RoIHRvIHBhZCB0aGUgbnVtYmVyIHdpdGguXHJcbiAgICAgKiBAcmV0dXJucyBBbiBpbnN0YW5jZSBvZiBUcnl0ZU51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXModmFsdWUsIGxlbmd0aCA9IFRyeXRlTnVtYmVyLkxFTkdUSF85KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHZhbHVlLCB0cnl0ZXNfMS5Ucnl0ZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyeXRlU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGxlbmd0aCBzaG91bGQgYmUgYSBudW1iZXIgPiAwXCIsIHsgbGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJ5dGVTdHJpbmcubGVuZ3RoID4gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoXCJUaGUgdmFsdWUgY29udGFpbnMgdG9vIG1hbnkgY2hhcmFjdGVyc1wiLCB7IGxlbmd0aDogdHJ5dGVTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAodHJ5dGVTdHJpbmcubGVuZ3RoIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRyeXRlU3RyaW5nICs9IFwiOVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRyeXRlTnVtYmVyKHRyeXRlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0aGUgdHJ5dGUgbnVtYmVyIHRvIHRyeXRlcy5cclxuICAgICAqIEByZXR1cm5zIFRyeXRlcyB2ZXJzaW9uIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvVHJ5dGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0cnl0ZXNfMS5Ucnl0ZXMuZnJvbVN0cmluZyh0aGlzLl90cnl0ZXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IHRoZSB0cnl0ZSBudW1iZXIgdG8gbnVtYmVyLlxyXG4gICAgICogQHJldHVybnMgbnVtYmVyIHZhbHVlIG9mIHRoZSB0cnl0ZSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHRvTnVtYmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0cml0c18xLlRyaXRzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fdHJ5dGVzKSkudG9OdW1iZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBzdHJpbmcgdmlldyBvZiB0aGUgb2JqZWN0LlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nIG9mIHRoZSB0cnl0ZXMuXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyBvZiB0aGUgdHJ5dGVzLlxyXG4gICAgICovXHJcbiAgICB2YWx1ZU9mKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKCk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExlbmd0aCBvZiBhIG51bWJlciB0aGF0IHVzZXMgOSB0cnl0ZXMuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5MRU5HVEhfOSA9IDk7XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSA5IGxlbmd0aCB0cnl0ZSBudW1iZXIuXHJcbiAqL1xyXG5Ucnl0ZU51bWJlci5FTVBUWV85ID0gVHJ5dGVOdW1iZXIuZnJvbU51bWJlcigwLCBUcnl0ZU51bWJlci5MRU5HVEhfOSk7XHJcbmV4cG9ydHMuVHJ5dGVOdW1iZXIgPSBUcnl0ZU51bWJlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZEhKNWRHVk9kVzFpWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WkdGMFlTOTBjbmwwWlU1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTeHJSRUZCSzBNN1FVRkRMME1zYlVOQlFXZERPMEZCUTJoRExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZoTEVWQlFVVXNVMEZCYVVJc1YwRkJWeXhEUVVGRExGRkJRVkU3VVVGRGVrVXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkZXQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBFTEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExHMURRVUZ0UXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU42UlN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6bENMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJoRExFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnFReXhOUVVGTkxFbEJRVWtzY1VKQlFWTXNRMEZCUXl3MlFrRkJOa0lzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRVVzUTBGQlF6dFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMR0ZCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNN1dVRkZkRVFzVDBGQlR5eExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF6dG5Ra0ZETDBJc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhEUVVGRE8xbEJSVVFzVFVGQlRTeEhRVUZITEdGQlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1VVRkRhRVVzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEpRVU51UXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFXRXNSVUZCUlN4VFFVRnBRaXhYUVVGWExFTkJRVU1zVVVGQlVUdFJRVU42UlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hsUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVNc1RVRkJUU3hKUVVGSkxIRkNRVUZUTEVOQlFVTXNNa05CUVRKRExFTkJRVU1zUTBGQlF6dFJRVU55UlN4RFFVRkRPMUZCUTBRc1NVRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUlc1RExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlEzcEZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SlFVRkpMSEZDUVVGVExFTkJRVU1zZDBOQlFYZERMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRiRWNzUTBGQlF6dFJRVVZFTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU5xUXl4WFFVRlhMRWxCUVVrc1IwRkJSeXhEUVVGRE8xRkJRM1pDTEVOQlFVTTdVVUZGUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdTVUZEZUVNc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRkZCUVZFN1VVRkRXQ3hOUVVGTkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRkxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hSUVVGUk8xRkJRMWdzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFOUJRVTg3VVVGRFZpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdPMEZCTVVkRU96dEhRVVZITzBGQlEyOUNMRzlDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETzBGQlF6VkRPenRIUVVWSE8wRkJRMjlDTEcxQ1FVRlBMRWRCUVdkQ0xGZEJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVkpzUnl4clEwRTBSME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvZmFjdG9yeUJhc2VcIik7XHJcbmNvbnN0IGN1cmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2N1cmxcIik7XHJcbmNvbnN0IGtlcmxfMSA9IHJlcXVpcmUoXCIuLi9zcG9uZ2VzL2tlcmxcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHNwb25nZXMuXHJcbiAqL1xyXG5jbGFzcyBTcG9uZ2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBTcG9uZ2VGYWN0b3J5KCk7XHJcbiAgICAgICAgICAgIFNwb25nZUZhY3RvcnkuX2luc3RhbmNlLnJlZ2lzdGVyKFwiY3VybFwiLCAoLi4uYXJncykgPT4gbmV3IGN1cmxfMS5DdXJsKC4uLmFyZ3MpKTtcclxuICAgICAgICAgICAgU3BvbmdlRmFjdG9yeS5faW5zdGFuY2UucmVnaXN0ZXIoXCJrZXJsXCIsICguLi5hcmdzKSA9PiBuZXcga2VybF8xLktlcmwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTcG9uZ2VGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNwb25nZUZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlNwb25nZUZhY3RvcnkgPSBTcG9uZ2VGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM0J2Ym1kbFJtRmpkRzl5ZVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTltWVdOMGIzSnBaWE12YzNCdmJtZGxSbUZqZEc5eWVTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc05FVkJRWGxGTzBGQlJYcEZMREJEUVVGMVF6dEJRVU4yUXl3d1EwRkJkVU03UVVGRmRrTTdPMGRCUlVjN1FVRkRTQ3h0UWtGQk1rSXNVMEZCVVN4NVFrRkJiMEk3U1VGSmJrUTdPenRQUVVkSE8wbEJRMGc3VVVGRFNTeExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTmFMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVVHRSUVVOc1FpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6TkNMR0ZCUVdFc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTTVReXhoUVVGaExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4WFFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcEZMR0ZCUVdFc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEZkQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRVVzUTBGQlF6dFJRVU5FTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRMjVETEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTB3c1YwRkJWenRSUVVOcVFpeE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8wbEJRM0JETEVOQlFVTTdRMEZEU2p0QlFUZENSQ3h6UTBFMlFrTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImFtZFwiOlwiYmlnLWludGVnZXJcIixcImNvbW1vbmpzXCI6XCJiaWctaW50ZWdlclwiLFwiY29tbW9uanMyXCI6XCJiaWctaW50ZWdlclwiLFwicm9vdFwiOlwiYmlnSW50XCJ9XG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxuX19leHBvcnQocmVxdWlyZShcIi4vcHJvb2ZPZldvcmtKc1wiKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0SFFVVkhPMEZCUTBnc2NVTkJRV2RESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvaW5kZXgudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG5jb25zdCBwcm9vZk9mV29ya0Jhc2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZVwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cnl0ZXNcIik7XHJcbmNvbnN0IHBlYXJsRGl2ZXJfMSA9IHJlcXVpcmUoXCIuL3BlYXJsRGl2ZXIvcGVhcmxEaXZlclwiKTtcclxuLyoqXHJcbiAqIFByb29mT2ZXb3JrIGltcGxlbWVudGF0aW9uIHVzaW5nIEphdmFTY3JpcHQuXHJcbiAqL1xyXG5jbGFzcyBQcm9vZk9mV29ya0pzIGV4dGVuZHMgcHJvb2ZPZldvcmtCYXNlXzEuUHJvb2ZPZldvcmtCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFByb29mT2ZXb3JrLlxyXG4gICAgICogQHBhcmFtIHRpbWVTZXJ2aWNlIFNlcnZpY2UgdG8gZ2V0IHRoZSB0aW1lIGZvciBhdHRhY2htZW50cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGltZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcih0aW1lU2VydmljZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYSBwcm9vZiBvZiB3b3JrIG9uIGEgc2luZ2xlIGl0ZW0uXHJcbiAgICAgKiBAcGFyYW0gdHJ5dGVzIFRoZSB0cnl0ZXMgdG8gcGVyZm9ybSB0aGUgcG93IG9uLlxyXG4gICAgICogQHBhcmFtIG1pbldlaWdodE1hZ25pdHVkZSBUaGUgbWluaW11bSB3ZWlnaHQgbWFnbml0dWRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHRyeXRlcyBwcm9kdWNlZCBieSB0aGUgcHJvb2Ygb2Ygd29yay5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2luZ2xlUG93KHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyeXRlcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnl0ZXMgbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBuZXcgcGVhcmxEaXZlcl8xLlBlYXJsRGl2ZXIoKS5zZWFyY2hXaXRoVHJ5dGVzKHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICBjb25zdCBub25jZVN0cmluZyA9IG5vbmNlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gdHJ5dGVzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRyeXRlc1N0cmluZy5zdWJzdHIoMCwgdHJ5dGVzU3RyaW5nLmxlbmd0aCAtIG5vbmNlU3RyaW5nLmxlbmd0aCkgKyBub25jZVN0cmluZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Qcm9vZk9mV29ya0pzID0gUHJvb2ZPZldvcmtKcztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0hKdmIyWlBabGR2Y210S2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTl3Y205dlprOW1WMjl5YTBwekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVN3MFJVRkJlVVU3UVVGRGVrVXNORVZCUVhsRk8wRkJSWHBGTERCRlFVRjFSVHRCUVVOMlJTeDNSa0ZCY1VZN1FVRkRja1lzTmtSQlFUQkVPMEZCUXpGRUxIZEVRVUZ4UkR0QlFVVnlSRHM3UjBGRlJ6dEJRVU5JTEcxQ1FVRXlRaXhUUVVGUkxHbERRVUZsTzBsQlF6bERPenM3VDBGSFJ6dEpRVU5JTEZsQlFWa3NWMEZCTUVJN1VVRkRiRU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJZeXhGUVVGRkxHdENRVUV3UWp0UlFVTTNSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeGxRVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc05rTkJRVFpETEVOQlFVTXNRMEZCUXp0UlFVTjZSU3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxHdENRVUZyUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrVXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYjBOQlFXOURMRU5CUVVNc1EwRkJRenRSUVVOb1JTeERRVUZETzFGQlEwUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3gxUWtGQlZTeEZRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03VVVGRE5VVXNUVUZCVFN4WFFVRlhMRWRCUVZjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlF6ZERMRTFCUVUwc1dVRkJXU3hIUVVGWExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTXZReXhOUVVGTkxFTkJRVU1zWlVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXp0SlFVTTNSeXhEUVVGRE8wTkJRMG83UVVFelFrUXNjME5CTWtKREluMD1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL3Byb29mT2ZXb3JrSnMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4WlFVRlpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NXVUZCV1N4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyNUdMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlReXgzUTBGQmQwTTdiMEpCUTNoRExFMUJRVTBzUTBGQlF6dG5Ra0ZEV0N4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTktMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUXpkQ0xFTkJRVU03V1VGRFRDeERRVUZETzFsQlJVUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlEycEZMRU5CUVVNc1EwRkJRenRSUVVWR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUV6UWtRc1owTkJNa0pESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcnJheUhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvYXJyYXlIZWxwZXJcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgdGltZVNlcnZpY2VfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9zZXJ2aWNlcy90aW1lU2VydmljZVwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90YWdcIik7XHJcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9kYXRhL2Rpc3QvZGF0YS90cmFuc2FjdGlvblwiKTtcclxuY29uc3QgdHJ5dGVOdW1iZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlTnVtYmVyXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyeXRlc1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3RyYW5zYWN0aW9uSGVscGVyXCIpO1xyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgcHJvb2Ygb2Ygd29yay5cclxuICovXHJcbmNsYXNzIFByb29mT2ZXb3JrQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBQcm9vZk9mV29yay5cclxuICAgICAqIEBwYXJhbSB0aW1lU2VydmljZSBTZXJ2aWNlIHRvIGdldCB0aGUgdGltZSBmb3IgYXR0YWNobWVudHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpbWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdGltZVNlcnZpY2UgPSB0aW1lU2VydmljZSB8fCBuZXcgdGltZVNlcnZpY2VfMS5UaW1lU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyB0aGUgcHJvb2Ygb2Ygd29yayB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbi5cclxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHRoZSBpbXBsZW1lbnRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHByb29mIG9mIHdvcmsgb24gdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gdHJ1bmtUcmFuc2FjdGlvbiBUaGUgdHJ1bmtUcmFuc2FjdGlvbiB0byB1c2UgZm9yIHRoZSBwb3cuXHJcbiAgICAgKiBAcGFyYW0gYnJhbmNoVHJhbnNhY3Rpb24gVGhlIGJyYW5jaFRyYW5zYWN0aW9uIHRvIHVzZSBmb3IgdGhlIHBvdy5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBwb3cgb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHByb2R1Y2VkIGJ5IHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3codHJ1bmtUcmFuc2FjdGlvbiwgYnJhbmNoVHJhbnNhY3Rpb24sIHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRydW5rVHJhbnNhY3Rpb24sIGhhc2hfMS5IYXNoKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cnVua1RyYW5zYWN0aW9uIG11c3QgYmUgYW4gb2JqZWN0IG9mIHR5cGUgSGFzaFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGJyYW5jaFRyYW5zYWN0aW9uLCBoYXNoXzEuSGFzaCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgYnJhbmNoVHJhbnNhY3Rpb24gbXVzdCBiZSBhbiBvYmplY3Qgb2YgdHlwZSBIYXNoXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFycmF5SGVscGVyXzEuQXJyYXlIZWxwZXIuaXNUeXBlZCh0cnl0ZXMsIHRyeXRlc18xLlRyeXRlcykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdHJ5dGVzIG11c3QgYmUgYW4gYXJyYXkgb2YgdHlwZSBUcnl0ZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihtaW5XZWlnaHRNYWduaXR1ZGUpIHx8IG1pbldlaWdodE1hZ25pdHVkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG1pbldlaWdodE1hZ25pdHVkZSBtdXN0IGJlID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZmluYWxUcnl0ZXMgPSBbXTtcclxuICAgICAgICBsZXQgcHJldmlvdXNUcmFuc2FjdGlvbkhhc2g7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbl8xLlRyYW5zYWN0aW9uLmZyb21Ucnl0ZXModHJ5dGVzW2ldKTtcclxuICAgICAgICAgICAgLy8gU3RhcnQgd2l0aCBsYXN0IGluZGV4IHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBpdCB0aGUgdHJ1bmsgLyBicmFuY2ggd2hpY2ggdGhlIHVzZXIgaGFzIHN1cHBsaWVkXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYnVuZGxlLCBjaGFpbiB0aGUgYnVuZGxlIHRyYW5zYWN0aW9ucyB2aWFcclxuICAgICAgICAgICAgLy8gdHJ1bmtUcmFuc2FjdGlvbiB0b2dldGhlclxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbi5hdHRhY2htZW50VGltZXN0YW1wID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKHRoaXMuX3RpbWVTZXJ2aWNlLm1zU2luY2VFcG9jaCgpKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24uYXR0YWNobWVudFRpbWVzdGFtcExvd2VyQm91bmQgPSB0cnl0ZU51bWJlcl8xLlRyeXRlTnVtYmVyLmZyb21OdW1iZXIoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmF0dGFjaG1lbnRUaW1lc3RhbXBVcHBlckJvdW5kID0gdHJ5dGVOdW1iZXJfMS5Ucnl0ZU51bWJlci5mcm9tTnVtYmVyKFByb29mT2ZXb3JrQmFzZS5NQVhfVElNRVNUQU1QX1ZBTFVFKTtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdHJhbnNhY3Rpb24sIHRvIGJlIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBpdCdzIHRoZSBsYXN0IGluIHRoZSBidW5kbGUgYW5kIHRoZW5cclxuICAgICAgICAgICAgLy8gYXNzaWduIGl0IHRoZSBzdXBwbGllZCB0cnVuayBhbmQgYnJhbmNoIHRyYW5zYWN0aW9uc1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkocHJldmlvdXNUcmFuc2FjdGlvbkhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBsYXN0IHRyYW5zYWN0aW9uIGluIHRoZSBidW5kbGVcclxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5sYXN0SW5kZXgudG9OdW1iZXIoKSAhPT0gdHJhbnNhY3Rpb24uY3VycmVudEluZGV4LnRvTnVtYmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIldyb25nIGJ1bmRsZSBvcmRlci4gVGhlIGJ1bmRsZSBzaG91bGQgYmUgb3JkZXJlZCBpbiBkZXNjZW5kaW5nIG9yZGVyIGZyb20gY3VycmVudEluZGV4XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHJ1bmtUcmFuc2FjdGlvbiA9IHRydW5rVHJhbnNhY3Rpb247XHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5icmFuY2hUcmFuc2FjdGlvbiA9IGJyYW5jaFRyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24udHJ1bmtUcmFuc2FjdGlvbiA9IHByZXZpb3VzVHJhbnNhY3Rpb25IYXNoO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uYnJhbmNoVHJhbnNhY3Rpb24gPSB0cnVua1RyYW5zYWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyeXRlcyA9IHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVRyeXRlcyA9IGF3YWl0IHRoaXMuc2luZ2xlUG93KG5ld1RyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb24ubm9uY2UgPSB0YWdfMS5UYWcuZnJvbVRyeXRlcyhzaW5nbGVUcnl0ZXMuc3ViKHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uTEVOR1RIIC0gdGFnXzEuVGFnLkxFTkdUSCwgdGFnXzEuVGFnLkxFTkdUSCkpO1xyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGhhc2ggb2YgdGhlIG5ldyB0cmFuc2FjdGlvbiB3aXRoIG5vbmNlIGFuZCB1c2UgdGhhdCBhcyB0aGUgcHJldmlvdXMgaGFzaCBmb3IgbmV4dCBlbnRyeVxyXG4gICAgICAgICAgICBjb25zdCByZXR1cm5UcmFuc2FjdGlvbiA9IHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24uZnJvbVRyeXRlcyhzaW5nbGVUcnl0ZXMpO1xyXG4gICAgICAgICAgICBwcmV2aW91c1RyYW5zYWN0aW9uSGFzaCA9IHRyYW5zYWN0aW9uSGVscGVyXzEuVHJhbnNhY3Rpb25IZWxwZXIuaGFzaChyZXR1cm5UcmFuc2FjdGlvbik7XHJcbiAgICAgICAgICAgIGZpbmFsVHJ5dGVzLnB1c2gocmV0dXJuVHJhbnNhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXZlcnNlIHRoZSBvcmRlciBzbyB0aGF0IGl0J3MgYXNjZW5kaW5nIGZyb20gY3VycmVudEluZGV4XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVHJ5dGVzLnJldmVyc2UoKS5tYXAodHJhbnNhY3Rpb24gPT4gdHJhbnNhY3Rpb24udG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIHRpbWVzdGFtcCB2YWx1ZSB1c2VkIGluIHByb29mIG9mIHdvcmsuXHJcbiAqL1xyXG5Qcm9vZk9mV29ya0Jhc2UuTUFYX1RJTUVTVEFNUF9WQUxVRSA9IChNYXRoLnBvdygzLCAyNykgLSAxKSAvIDI7XHJcbmV4cG9ydHMuUHJvb2ZPZldvcmtCYXNlID0gUHJvb2ZPZldvcmtCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSEp2YjJaUFpsZHZjbXRDWVhObExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNCeWIyOW1UMlpYYjNKckwzQnliMjltVDJaWGIzSnJRbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTUVWQlFYVkZPMEZCUTNaRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZGZWtVc01rVkJRWGRGTzBGQlEzaEZMSGxFUVVGelJEdEJRVU4wUkN4MVJFRkJiMFE3UVVGRGNFUXNkVVZCUVc5Rk8wRkJRM0JGTEhWRlFVRnZSVHRCUVVOd1JTdzJSRUZCTUVRN1FVRkRNVVFzYzBSQlFXMUVPMEZCUTI1RUxHOUZRVUZwUlR0QlFVZHFSVHM3UjBGRlJ6dEJRVU5JTzBsQlUwazdPenRQUVVkSE8wbEJRMGdzV1VGQldTeFhRVUV3UWp0UlFVTnNReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZkQlFWY3NTVUZCU1N4SlFVRkpMSGxDUVVGWExFVkJRVVVzUTBGQlF6dEpRVU42UkN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NTMEZCU3l4RFFVRkRMRlZCUVZVN1VVRkRia0lzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUTdPenM3T3pzN1QwRlBSenRKUVVOSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVhOQ0xFVkJRVVVzYVVKQlFYVkNMRVZCUVVVc1RVRkJaMElzUlVGQlJTeHJRa0ZCTUVJN1VVRkRNVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hYUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjVVJCUVhGRUxFTkJRVU1zUTBGQlF6dFJRVU5xUml4RFFVRkRPMUZCUTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4WFFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYzBSQlFYTkVMRU5CUVVNc1EwRkJRenRSUVVOc1JpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXg1UWtGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1pVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERSRFFVRTBReXhEUVVGRExFTkJRVU03VVVGRGVFVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4clFrRkJhMElzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdVVUZEYUVVc1EwRkJRenRSUVVWRUxFMUJRVTBzVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVjJRaXhKUVVGSkxIVkNRVUUyUWl4RFFVRkRPMUZCUld4RExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRM0pETEUxQlFVMHNWMEZCVnl4SFFVRkhMSGxDUVVGWExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSWFJFTEc5RFFVRnZRenRaUVVOd1F5d3lSRUZCTWtRN1dVRkRNMFFzTUVSQlFUQkVPMWxCUXpGRUxEUkNRVUUwUWp0WlFVTTFRaXhYUVVGWExFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6TkdMRmRCUVZjc1EwRkJReXcyUWtGQk5rSXNSMEZCUnl4NVFrRkJWeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hYUVVGWExFTkJRVU1zTmtKQlFUWkNMRWRCUVVjc2VVSkJRVmNzUTBGQlF5eFZRVUZWTEVOQlFVTXNaVUZCWlN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdXVUZGZUVjc2IwUkJRVzlFTzFsQlEzQkVMSE5FUVVGelJEdFpRVU4wUkN4MVJFRkJkVVE3V1VGRmRrUXNSVUZCUlN4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJoRUxEQkRRVUV3UXp0blFrRkRNVU1zUlVGQlJTeERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eFhRVUZYTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETTBVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkMFpCUVhkR0xFTkJRVU1zUTBGQlF6dG5Ra0ZEY0Vnc1EwRkJRenRuUWtGRFJDeFhRVUZYTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1owSkJRMmhFTEZkQlFWY3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRaUVVOMFJDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zVjBGQlZ5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExIVkNRVUYxUWl4RFFVRkRPMmRDUVVOMlJDeFhRVUZYTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1dVRkRja1FzUTBGQlF6dFpRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRmRCUVZjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVVY2UXl4TlFVRk5MRmxCUVZrc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RlFVRkZMR3RDUVVGclFpeERRVUZETEVOQlFVTTdXVUZGZWtVc1YwRkJWeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFRRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zZVVKQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeFRRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVWc1J5eDNSMEZCZDBjN1dVRkRlRWNzVFVGQlRTeHBRa0ZCYVVJc1IwRkJSeXg1UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRaUVVNdlJDeDFRa0ZCZFVJc1IwRkJSeXh4UTBGQmFVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0WlFVVndSU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGRGVFTXNRMEZCUXp0UlFVTkVMRFpFUVVFMlJEdFJRVU0zUkN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXpWRkxFTkJRVU03TzBGQk0wWkVPenRIUVVWSE8wRkJRMjlDTEcxRFFVRnRRaXhIUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCU201R0xEQkRRWEZIUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvcHJvb2ZPZldvcmsvcHJvb2ZPZldvcmtCYXNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2lvdGEtcGljby1jcnlwdG8vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9pb3RhLXBpY28tY3J5cHRvL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vaW90YS1waWNvLWNyeXB0by9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY2xhc3Mgd2hpY2ggY2FuIHByb3ZpZGUgdGhlIHRpbWUuXHJcbiAqL1xyXG5jbGFzcyBUaW1lU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MC8wMS8wMS5cclxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIG1zU2luY2VFcG9jaCgpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRpbWVTZXJ2aWNlID0gVGltZVNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRHbHRaVk5sY25acFkyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmMyVnlkbWxqWlhNdmRHbHRaVk5sY25acFkyVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN08wOUJSMGM3U1VGRFNTeFpRVUZaTzFGQlEyWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPME5CUTBvN1FVRlNSQ3hyUTBGUlF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL3NlcnZpY2VzL3RpbWVTZXJ2aWNlLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgZGF0YUVycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvZGF0YUVycm9yXCIpO1xyXG5jb25zdCB0cnl0ZXNfMSA9IHJlcXVpcmUoXCIuL3RyeXRlc1wiKTtcclxuLyoqXHJcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIGFkZHJlc3Nlcy5cclxuICovXHJcbmNsYXNzIEFkZHJlc3Mge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcykge1xyXG4gICAgICAgIHRoaXMuX2FkZHJlc3NUcnl0ZXMgPSBhZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIHRoaXMuX2NoZWNrc3VtVHJ5dGVzID0gY2hlY2tzdW1Ucnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhZGRyZXNzIGZyb20gdHJ5dGVzLlxyXG4gICAgICogQHBhcmFtIGFkZHJlc3MgVGhlIHRyeXRlcyB0byBjcmVhdGUgdGhlIGFkZHJlc3MgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIEFkZHJlc3MuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmcm9tVHJ5dGVzKGFkZHJlc3MpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUoYWRkcmVzcywgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIGFkZHJlc3Mgc2hvdWxkIGJlIGEgdmFsaWQgVHJ5dGVzIG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHJ5dGVzU3RyaW5nID0gYWRkcmVzcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSCAmJiB0cnl0ZXNTdHJpbmcubGVuZ3RoICE9PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBkYXRhRXJyb3JfMS5EYXRhRXJyb3IoYFRoZSBhZGRyZXNzIHNob3VsZCBlaXRoZXIgYmUgJHtBZGRyZXNzLkxFTkdUSH0gb3IgJHtBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNfSBjaGFyYWN0ZXJzIGluIGxlbmd0aGAsIHsgbGVuZ3RoOiB0cnl0ZXNTdHJpbmcubGVuZ3RoIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhZGRyZXNzVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cigwLCBBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgbGV0IGNoZWNrc3VtVHJ5dGVzO1xyXG4gICAgICAgIGlmICh0cnl0ZXNTdHJpbmcubGVuZ3RoID09PSBBZGRyZXNzLkxFTkdUSF9XSVRIX0NIRUNLU1VNKSB7XHJcbiAgICAgICAgICAgIGNoZWNrc3VtVHJ5dGVzID0gdHJ5dGVzU3RyaW5nLnN1YnN0cihBZGRyZXNzLkxFTkdUSCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzcyhhZGRyZXNzVHJ5dGVzLCBjaGVja3N1bVRyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggbm8gY2hlY2tzdW0uXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgYWRkcmVzcyB3aXRoIG5vIGNoZWNrc3VtLlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcodGhpcy5fYWRkcmVzc1RyeXRlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGFkZHJlc3MgdG8gdHJ5dGVzIHdpdGggYSBjaGVja3N1bSwgY3JlYXRpbmcgYSBibGFuayBvbmUgaWYgbmVlZGVkLlxyXG4gICAgICogQHJldHVybnMgVHJ5dGVzIHZlcnNpb24gb2YgdGhlIGFkZHJlc3Mgd2l0aCBjaGVja3N1LC5cclxuICAgICAqL1xyXG4gICAgdG9Ucnl0ZXNXaXRoQ2hlY2tzdW0oKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGlzIGFkZHJlc3MgaGFzIG5vIGNoZWNrc3VtIGNhbGN1bGF0ZWQgZm9yIGl0YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eSh0aGlzLl9jaGVja3N1bVRyeXRlcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3NUcnl0ZXMgKyB0aGlzLl9jaGVja3N1bVRyeXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzVHJ5dGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogVGhlIGxlbmd0aCBmb3IgYSB2YWxpZCBhZGRyZXNzIHdpdGhvdXQgY2hlY2tzdW0gKDgxKS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIID0gODE7XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIGZvciBhbiBhZGRyZXNzIGNoZWNrc3VtICg5KS5cclxuICovXHJcbkFkZHJlc3MuTEVOR1RIX0NIRUNLU1VNID0gOTtcclxuLyoqXHJcbiAqIFRoZSBsZW5ndGggZm9yIHZhbGlkIGFkZHJlc3Mgd2l0aCBjaGVja3N1bSAoOTApLlxyXG4gKi9cclxuQWRkcmVzcy5MRU5HVEhfV0lUSF9DSEVDS1NVTSA9IEFkZHJlc3MuTEVOR1RIICsgQWRkcmVzcy5MRU5HVEhfQ0hFQ0tTVU07XHJcbi8qKlxyXG4gKiBBbiBlbXB0eSBoYXNoIGFsbCA5cy5cclxuICovXHJcbkFkZHJlc3MuRU1QVFkgPSBBZGRyZXNzLmZyb21Ucnl0ZXModHJ5dGVzXzEuVHJ5dGVzLmZyb21TdHJpbmcoXCI5XCIucmVwZWF0KEFkZHJlc3MuTEVOR1RIKSkpO1xyXG5leHBvcnRzLkFkZHJlc3MgPSBBZGRyZXNzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZV1JrY21WemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5a1lYUmhMMkZrWkhKbGMzTXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxEUkZRVUY1UlR0QlFVTjZSU3hyUkVGQkswTTdRVUZETDBNc2NVTkJRV3RETzBGQlJXeERPenRIUVVWSE8wRkJRMGc3U1VGM1Fra3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xHRkJRWEZDTEVWQlFVVXNZMEZCYzBJN1VVRkROMFFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRU5CUVVNN1VVRkRjRU1zU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCU1N4alFVRmpMRU5CUVVNN1NVRkRNME1zUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVdVN1VVRkRjRU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hETEUxQlFVMHNTVUZCU1N4eFFrRkJVeXhEUVVGRExEWkRRVUUyUXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzUTBGQlF6dFJRVVZFTEUxQlFVMHNXVUZCV1N4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVY0UXl4RlFVRkZMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUzBGQlN5eFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEhMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRFFVRm5ReXhQUVVGUExFTkJRVU1zVFVGQlRTeFBRVUZQTEU5QlFVOHNRMEZCUXl4dlFrRkJiMElzZFVKQlFYVkNMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRia3NzUTBGQlF6dFJRVVZFTEUxQlFVMHNZVUZCWVN4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNM1JDeEpRVUZKTEdOQlFXTXNRMEZCUXp0UlFVTnVRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzcEVMRU5CUVVNN1VVRkRSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFJRVUZSTzFGQlExZ3NUVUZCVFN4RFFVRkRMR1ZCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3h2UWtGQmIwSTdVVUZEZGtJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1NVRkJTU3h4UWtGQlV5eERRVUZETEdkRVFVRm5SQ3hEUVVGRExFTkJRVU03VVVGRE1VVXNRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4UlFVRlJPMUZCUTFnc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRGRFUXNRMEZCUXp0UlFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMG9zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkRMMElzUTBGQlF6dEpRVU5NTEVOQlFVTTdPMEZCYmtaRU96dEhRVVZITzBGQlEyOUNMR05CUVUwc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE0wTTdPMGRCUlVjN1FVRkRiMElzZFVKQlFXVXNSMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkRia1E3TzBkQlJVYzdRVUZEYjBJc05FSkJRVzlDTEVkQlFWY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETzBGQlJTOUdPenRIUVVWSE8wRkJRMjlDTEdGQlFVc3NSMEZCV1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExHVkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCYWtJNVJ5d3dRa0Z4UmtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvYWRkcmVzcy50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGRhdGFFcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2RhdGFFcnJvclwiKTtcclxuY29uc3QgdHJ5dGVzXzEgPSByZXF1aXJlKFwiLi90cnl0ZXNcIik7XHJcbi8qKlxyXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBzaWduYXR1cmUgbWVzc2FnZSBmcmFnbWVudHMuXHJcbiAqL1xyXG5jbGFzcyBTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQge1xyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0cnl0ZXMpIHtcclxuICAgICAgICB0aGlzLl90cnl0ZXMgPSB0cnl0ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbSB0cnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IFRoZSB0cnl0ZXMgdG8gY3JlYXRlIHRoZSBzaWduYXR1cmUgZnJhZ21lbnQgZnJvbS5cclxuICAgICAqIEByZXR1cm5zIEFuIGluc3RhbmNlIG9mIFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZyb21Ucnl0ZXMoc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCwgdHJ5dGVzXzEuVHJ5dGVzKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKFwiVGhlIHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCBzaG91bGQgYmUgYSB2YWxpZCBUcnl0ZXMgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZW5ndGggPSBzaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQubGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LkxFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgZGF0YUVycm9yXzEuRGF0YUVycm9yKGBUaGUgc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50IHNob3VsZCBiZSAke1NpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5MRU5HVEh9IGNoYXJhY3RlcnMgaW4gbGVuZ3RoYCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50KHNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIHNpZ25hdHVyZSBmcmFnbWVudCB0byB0cnl0ZXMuXHJcbiAgICAgKiBAcmV0dXJucyBUcnl0ZXMgdmVyc2lvbiBvZiB0aGUgc2lnbmF0dXJlIGZyYWdtZW50LlxyXG4gICAgICovXHJcbiAgICB0b1RyeXRlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5dGVzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0cmluZyB2aWV3IG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmcgb2YgdGhlIHRyeXRlcy5cclxuICAgICAqL1xyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyeXRlcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBUaGUgbGVuZ3RoIG9mIGEgdmFsaWQgc2lnbmF0dXJlIG1lc3NhZ2UgZnJhZ21lbnQgKDIxODcpXHJcbiAqL1xyXG5TaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIID0gMjE4NztcclxuLyoqXHJcbiAqIEFuIGVtcHR5IHNpZ25hdHVyZSBtZXNzYWdlIGZyYWdtZW50IGFsbCA5cy5cclxuICovXHJcblNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5FTVBUWSA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudC5mcm9tVHJ5dGVzKHRyeXRlc18xLlRyeXRlcy5mcm9tU3RyaW5nKFwiOVwiLnJlcGVhdChTaWduYXR1cmVNZXNzYWdlRnJhZ21lbnQuTEVOR1RIKSkpO1xyXG5leHBvcnRzLlNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudCA9IFNpZ25hdHVyZU1lc3NhZ2VGcmFnbWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyUmhkR0V2YzJsbmJtRjBkWEpsVFdWemMyRm5aVVp5WVdkdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTdzBSVUZCZVVVN1FVRkRla1VzYTBSQlFTdERPMEZCUXk5RExIRkRRVUZyUXp0QlFVVnNRenM3UjBGRlJ6dEJRVU5JTzBsQllVa3NaVUZCWlR0SlFVTm1MRmxCUVc5Q0xFMUJRV003VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExIZENRVUZuUXp0UlFVTnlSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMR1ZCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UkN4TlFVRk5MRWxCUVVrc2NVSkJRVk1zUTBGQlF5dzRSRUZCT0VRc1EwRkJReXhEUVVGRE8xRkJRM2hHTEVOQlFVTTdVVUZGUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXgzUWtGQmQwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRSUVVOcVJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc2QwSkJRWGRDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNM1F5eE5RVUZOTEVsQlFVa3NjVUpCUVZNc1EwRkJReXd3UTBGQk1FTXNkMEpCUVhkQ0xFTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZEVrc1EwRkJRenRSUVVORUxFMUJRVTBzUTBGQlF5eEpRVUZKTEhkQ1FVRjNRaXhEUVVGRExIZENRVUYzUWl4RFFVRkRMRU5CUVVNN1NVRkRiRVVzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGRkJRVkU3VVVGRFdDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlEyNURMRU5CUVVNN08wRkJhRVJFT3p0SFFVVkhPMEZCUTI5Q0xDdENRVUZOTEVkQlFWY3NTVUZCU1N4RFFVRkRPMEZCUXpkRE96dEhRVVZITzBGQlEyOUNMRGhDUVVGTExFZEJRVFpDTEhkQ1FVRjNRaXhEUVVGRExGVkJRVlVzUTBGQlF5eGxRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlVtcExMRFJFUVd0RVF5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgaGFzaF8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvaGFzaFwiKTtcclxuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2RhdGEvZGlzdC9kYXRhL3RyYW5zYWN0aW9uXCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuLi9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeVwiKTtcclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyBmb3IgdHJhbnNhY3Rpb25zLlxyXG4gKiBDb252ZXJ0ZWQgaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaW90YS5saWIuanMvYmxvYi9tYXN0ZXIvbGliL2NyeXB0by9zaWduaW5nL3NpZ25pbmcuanNcclxuICovXHJcbmNsYXNzIFRyYW5zYWN0aW9uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBoYXNoIGZvciBhIHRyYW5zYWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRoZSB0cmFuc2FjdGlvbiB0byBnZW5lcmF0ZSB0aGUgaGFzaC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBoYXNoIG9mIHRociB0cmFuc2FjdGlvbi5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGhhc2godHJhbnNhY3Rpb24pIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJhbnNhY3Rpb24sIHRyYW5zYWN0aW9uXzEuVHJhbnNhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyYW5zYWN0aW9uIG11c3QgYmUgb2YgdHlwZSBUcmFuc2FjdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uLnRvVHJ5dGVzKCkpLnRvQXJyYXkoKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjdXJsLmFic29yYih0cmFuc2FjdGlvblRyaXRzLCAwLCB0cmFuc2FjdGlvblRyaXRzLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaGFzaFRyaXRzID0gbmV3IEludDhBcnJheShjdXJsLmdldENvbnN0YW50KFwiSEFTSF9MRU5HVEhcIikpO1xyXG4gICAgICAgIGN1cmwuc3F1ZWV6ZShoYXNoVHJpdHMsIDAsIGhhc2hUcml0cy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBoYXNoXzEuSGFzaC5mcm9tVHJ5dGVzKHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KGhhc2hUcml0cykudG9Ucnl0ZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UcmFuc2FjdGlvbkhlbHBlciA9IFRyYW5zYWN0aW9uSGVscGVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkSEpoYm5OaFkzUnBiMjVJWld4d1pYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFHVnNjR1Z5Y3k5MGNtRnVjMkZqZEdsdmJraGxiSEJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxIbEVRVUZ6UkR0QlFVTjBSQ3gxUlVGQmIwVTdRVUZEY0VVc01rUkJRWGRFTzBGQlEzaEVMSE5FUVVGdFJEdEJRVU51UkN3NFJFRkJNa1E3UVVGRk0wUTdPenRIUVVkSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRjNRanRSUVVOMlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4NVFrRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETERaRFFVRTJReXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExEWkNRVUZoTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzSkVMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NZVUZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVVMVJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZETEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTVVRc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycEZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRk4wTXNUVUZCVFN4RFFVRkRMRmRCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyeEZMRU5CUVVNN1EwRkRTanRCUVhSQ1JDdzRRMEZ6UWtNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL2hlbHBlcnMvdHJhbnNhY3Rpb25IZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHR5cGVzLlxyXG4gKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICovXHJcbmNsYXNzIEZhY3RvcnlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgICAgIHRoaXMuX3R5cGVzID0ge307XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHR5cGUgd2l0aCB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHJlZ2lzdGVyLlxyXG4gICAgICogQHBhcmFtIHR5cGVDb25zdHJ1Y3RvciBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLlxyXG4gICAgICovXHJcbiAgICByZWdpc3RlcihuYW1lLCB0eXBlQ29uc3RydWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdID0gdHlwZUNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVbnJlZ2lzdGVyIGEgdHlwZSBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gdW5yZWdpc3Rlci5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERvZXMgdGhlIGZhY3RvcnkgY29udGFpbiBhIHNwZWNpZmljIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICBleGlzdHMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCTmtNMVJTeERRVUZETzBsQk0wTkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUVUZCVFN4RFFVRkRMRWxCUVZrc1JVRkJSU3hIUVVGSExFbEJRVmM3VVVGRGRFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlEzQkRMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM2hDTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRNVU1zUTBGQlF6dFJRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTBvc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU55UWl4RFFVRkRPMGxCUTB3c1EwRkJRenREUVVsS08wRkJMME5FTEd0RFFTdERReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgQ3VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lvdGEubGliLmpzL2Jsb2IvbWFzdGVyL2xpYi9jcnlwdG8vY3VybC9jdXJsLmpzXHJcbiAqL1xyXG5jbGFzcyBDdXJsIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEN1cmwuXHJcbiAgICAgKiBAcGFyYW0gcm91bmRzIFRoZSBudW1iZXIgb2Ygcm91bmRzIHRvIHVzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iocm91bmRzID0gQ3VybC5OVU1CRVJfT0ZfUk9VTkRTKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZSb3VuZHMgPSByb3VuZHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY29uc3RhbnQgZm9yIHRoZSBzcG9uZS5cclxuICAgICAqIEBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb250YW50IHRvIGdldC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjb25zdGFudC5cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uc3RhbnQobmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiTlVNQkVSX09GX1JPVU5EU1wiOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZSb3VuZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcIkhBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJTVEFURV9MRU5HVEhcIjpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ3VybFtuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoYFVua25vd24gY29uc3RhbnQgcmVxdWVzdGVkICR7bmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgc3RhdGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSB0aGUgaGFzaGVyLlxyXG4gICAgICogQHBhcmFtIHN0YXRlIFRoZSBpbml0aWFsIHN0YXRlIGZvciB0aGUgaGFzaGVyLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ldyBJbnQ4QXJyYXkoQ3VybC5TVEFURV9MRU5HVEgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvY2FsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIGxldCBsb2NhbExlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBsb2NhbExlbmd0aCA8IEN1cmwuSEFTSF9MRU5HVEggPyBsb2NhbExlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2krK10gPSB0cml0c1tsb2NhbE9mZnNldCsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNxdWVlemUgdHJpdHMgaW50byB0aGUgaGFzaC5cclxuICAgICAqIEBwYXJhbSB0cml0cyBUaGUgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCBpbnRvIHRoZSB0cml0cyB0byBzcXVlZXplIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gc3F1ZWV6ZS5cclxuICAgICAqL1xyXG4gICAgc3F1ZWV6ZSh0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodHJpdHMsIEludDhBcnJheSkgfHwgdHJpdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVHJpdHMgbXVzdCBiZSBhIG5vbiBlbXB0eSBJbnQ4QXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihvZmZzZXQpIHx8IG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJPZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiTGVuZ3RoIG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCArIG9mZnNldCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIHRyaXRzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9jYWxPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgbGV0IGxvY2FsTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGxvY2FsTGVuZ3RoIDwgQ3VybC5IQVNIX0xFTkdUSCA/IGxlbmd0aCA6IEN1cmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGltaXQpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdGhpcy5fc3RhdGVbaSsrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSgpO1xyXG4gICAgICAgICAgICBsb2NhbExlbmd0aCAtPSBDdXJsLkhBU0hfTEVOR1RIO1xyXG4gICAgICAgIH0gd2hpbGUgKGxvY2FsTGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zZm9ybSB0aGUgaGFzaC5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICB0cmFuc2Zvcm0oKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlQ29weTtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHJvdW5kID0gMDsgcm91bmQgPCB0aGlzLl9udW1iZXJPZlJvdW5kczsgcm91bmQrKykge1xyXG4gICAgICAgICAgICBzdGF0ZUNvcHkgPSBuZXcgSW50OEFycmF5KHRoaXMuX3N0YXRlLnNsaWNlKCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEN1cmwuU1RBVEVfTEVOR1RIOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlW2ldID0gQ3VybC5UUlVUSF9UQUJMRVtzdGF0ZUNvcHlbaW5kZXhdICsgKHN0YXRlQ29weVtpbmRleCArPSAoaW5kZXggPCAzNjUgPyAzNjQgOiAtMzY1KV0gPDwgMikgKyA1XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5DdXJsLkhBU0hfTEVOR1RIID0gMjQzO1xyXG5DdXJsLk5VTUJFUl9PRl9ST1VORFMgPSA4MTtcclxuQ3VybC5TVEFURV9MRU5HVEggPSBDdXJsLkhBU0hfTEVOR1RIICogMztcclxuLyogQGludGVybmFsICovXHJcbkN1cmwuVFJVVEhfVEFCTEUgPSBuZXcgSW50OEFycmF5KFsxLCAwLCAtMSwgMiwgMSwgLTEsIDAsIDIsIC0xLCAxLCAwXSk7XHJcbmV4cG9ydHMuQ3VybCA9IEN1cmw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpjRzl1WjJWekwyTjFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNjMFJCUVcxRU8wRkJSMjVFT3pzN1IwRkhSenRCUVVOSU8wbEJZVWs3T3p0UFFVZEhPMGxCUTBnc1dVRkJXU3hUUVVGcFFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ08xRkJRemxETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRMnhETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NWMEZCVnl4RFFVRkRMRWxCUVZrN1VVRkRNMElzVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOWUxFdEJRVXNzYTBKQlFXdENMRVZCUVVVc1EwRkJRenRuUWtGRGRFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU03V1VGRGFFTXNRMEZCUXp0WlFVTkVMRXRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRMjVDTEV0QlFVc3NZMEZCWXp0blFrRkRia0lzUTBGQlF6dHZRa0ZEUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTjBRaXhEUVVGRE8xbEJRMFFzVTBGQlV5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXc0UWtGQk9FSXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVONlJTeERRVUZETzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5KTEZGQlFWRTdVVUZEV0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwa3NWVUZCVlN4RFFVRkRMRXRCUVdsQ08xRkJReTlDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVONFFpeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dFJRVU51UkN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQlowSXNSVUZCUlN4TlFVRmpMRVZCUVVVc1RVRkJZenRSUVVNeFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRMMFFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0UlFVTnFSU3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xRkJRekZFTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNkVVJCUVhWRUxFTkJRVU1zUTBGQlF6dFJRVU51Uml4RFFVRkRPMUZCUlVRc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzcENMRWxCUVVrc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVY2UWl4SFFVRkhMRU5CUVVNN1dVRkRRU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEVml4TlFVRk5MRXRCUVVzc1IwRkJSeXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMWxCUlRsRkxFOUJRVThzUTBGQlF5eEhRVUZITEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVObUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTTFReXhEUVVGRE8xbEJSVVFzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMWxCUldwQ0xGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTNCRExFTkJRVU1zVVVGQlVTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RlFVRkZPMGxCUXpsQ0xFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4TFFVRm5RaXhGUVVGRkxFMUJRV01zUlVGQlJTeE5RVUZqTzFGQlF6TkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU12UkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVVUZETVVRc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRSUVVNeFJDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMUZCUTI1R0xFTkJRVU03VVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRla0lzU1VGQlNTeFhRVUZYTEVkQlFVY3NUVUZCVFN4RFFVRkRPMUZCUlhwQ0xFZEJRVWNzUTBGQlF6dFpRVVZCTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOV0xFMUJRVTBzUzBGQlN5eEhRVUZITEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03V1VGRmVrVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEyWXNTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRelZETEVOQlFVTTdXVUZGUkN4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRmFrSXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNFTXNRMEZCUXl4UlFVRlJMRmRCUVZjc1IwRkJSeXhEUVVGRExFVkJRVVU3U1VGRE9VSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5MTEZOQlFWTTdVVUZEWWl4SlFVRkpMRk5CUVc5Q0xFTkJRVU03VVVGRGVrSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJSV1FzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRGVFUXNVMEZCVXl4SFFVRkhMRWxCUVVrc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVVdlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dG5Ra0ZGZWtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndTQ3hEUVVGRE8xRkJRMHdzUTBGQlF6dEpRVU5NTEVOQlFVTTdPMEZCTjBwelFpeG5Ra0ZCVnl4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVNeFFpeHhRa0ZCWjBJc1IwRkJWeXhGUVVGRkxFTkJRVU03UVVGRE9VSXNhVUpCUVZrc1IwRkJWeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVVnVSU3hsUVVGbE8wRkJRMU1zWjBKQlFWY3NSMEZCWXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJUbnBITEc5Q1FTdEtReUo5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9zcG9uZ2VzL2N1cmwudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc2hhM18xID0gcmVxdWlyZShcIi4uL2RpZ2VzdHMvc2hhM1wiKTtcclxuY29uc3QgY3J5cHRvRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9lcnJvci9jcnlwdG9FcnJvclwiKTtcclxuY29uc3QgYmlnSW50ZWdlckhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvYmlnSW50ZWdlckhlbHBlclwiKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElTcG9uZ2UgdXNpbmcgS2VybCBhbGdvcml0aG0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb3RhbGVkZ2VyL2lyaS9ibG9iL2Rldi9zcmMvbWFpbi9qYXZhL2NvbS9pb3RhL2lyaS9oYXNoL0tlcmwuamF2YVxyXG4gKi9cclxuY2xhc3MgS2VybCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBLZXJsLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9rZWNjYWsgPSBuZXcgc2hhM18xLlNoYTMoMzg0LCBzaGEzXzEuU2hhMy5LRUNDQUtfUEFERElORywgMzg0KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb25zdGFudCBmb3IgdGhlIHNwb25lLlxyXG4gICAgICogQG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbnRhbnQgdG8gZ2V0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGNvbnN0YW50LlxyXG4gICAgICovXHJcbiAgICBnZXRDb25zdGFudChuYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIQVNIX0xFTkdUSFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiQklUX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJCWVRFX0hBU0hfTEVOR1RIXCI6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEtlcmxbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBVbmtub3duIGNvbnN0YW50IHJlcXVlc3RlZCAke25hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0YXRlLlxyXG4gICAgICogQHJldHVybnMgVGhlIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBoYXNoZXIuXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUgVGhlIGluaXRpYWwgc3RhdGUgZm9yIHRoZSBoYXNoZXIuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoc3RhdGUpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIGhhc2hlci5cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5fa2VjY2FrLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFic29yYiB0cml0cyBpbnRvIHRoZSBoYXNoLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSB0cml0cyB0byBhYnNvcmIuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gYWJzb3JiIGZyb20uXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgdHJpdHMgdG8gYWJzb3JiLlxyXG4gICAgICovXHJcbiAgICBhYnNvcmIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCB0cml0U3RhdGUgPSB0cml0cy5zbGljZShsb2NhbE9mZnNldCwgbG9jYWxPZmZzZXQgKyBLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgdHJpdFN0YXRlW0tlcmwuSEFTSF9MRU5HVEggLSAxXSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLnRyaXRzVG9CaWdJbnRlZ2VyKHRyaXRTdGF0ZSwgMCwgdHJpdFN0YXRlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVTdGF0ZSA9IG5ldyBBcnJheUJ1ZmZlcihLZXJsLkJZVEVfSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICBiaWdJbnRlZ2VySGVscGVyXzEuQmlnSW50ZWdlckhlbHBlci5iaWdJbnRlZ2VyVG9CeXRlcyhiaWdJbnQsIGJ5dGVTdGF0ZSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2tlY2Nhay51cGRhdGUoYnl0ZVN0YXRlKTtcclxuICAgICAgICAgICAgbG9jYWxPZmZzZXQgKz0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICAgICAgbG9jYWxMZW5ndGggLT0gS2VybC5IQVNIX0xFTkdUSDtcclxuICAgICAgICB9IHdoaWxlIChsb2NhbExlbmd0aCA+IDApO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcXVlZXplIHRyaXRzIGludG8gdGhlIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgaW50byB0aGUgdHJpdHMgdG8gc3F1ZWV6ZSBmcm9tLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbnVtYmVyIG9mIHRyaXRzIHRvIHNxdWVlemUuXHJcbiAgICAgKi9cclxuICAgIHNxdWVlemUodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRyaXRzIG11c3QgYmUgYSBub24gZW1wdHkgSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiT2Zmc2V0IG11c3QgYmUgYSBudW1iZXIgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKGxlbmd0aCkgfHwgbGVuZ3RoIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIkxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggKyBvZmZzZXQgPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSB0cml0c1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCAlIDI0MyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAke0tlcmwuSEFTSF9MRU5HVEh9YCwgeyBsZW5ndGggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb2NhbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBsZXQgbG9jYWxMZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlU3RhdGVCdWZmZXIgPSB0aGlzLl9rZWNjYWsuZGlnZXN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpZ0ludCA9IGJpZ0ludGVnZXJIZWxwZXJfMS5CaWdJbnRlZ2VySGVscGVyLmJ5dGVzVG9CaWdJbnRlZ2VyKGJ5dGVTdGF0ZUJ1ZmZlciwgMCwgS2VybC5CWVRFX0hBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgY29uc3QgdHJpdFN0YXRlID0gbmV3IEludDhBcnJheShLZXJsLkhBU0hfTEVOR1RIKTtcclxuICAgICAgICAgICAgYmlnSW50ZWdlckhlbHBlcl8xLkJpZ0ludGVnZXJIZWxwZXIuYmlnSW50ZWdlclRvVHJpdHMoYmlnSW50LCB0cml0U3RhdGUsIDAsIEtlcmwuSEFTSF9MRU5HVEgpO1xyXG4gICAgICAgICAgICB0cml0U3RhdGVbS2VybC5IQVNIX0xFTkdUSCAtIDFdID0gMDtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IEtlcmwuSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2xvY2FsT2Zmc2V0KytdID0gdHJpdFN0YXRlW2krK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnl0ZVN0YXRlQnVmZmVyKTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGR2LmJ5dGVMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZHYuc2V0VWludDgoaSwgZHYuZ2V0VWludDgoaSkgXiAweEZGKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9rZWNjYWsudXBkYXRlKGJ5dGVTdGF0ZUJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGxvY2FsTGVuZ3RoIC09IEtlcmwuSEFTSF9MRU5HVEg7XHJcbiAgICAgICAgfSB3aGlsZSAobG9jYWxMZW5ndGggPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5IQVNIX0xFTkdUSCA9IDI0MztcclxuLyogQGludGVybmFsICovXHJcbktlcmwuQklUX0hBU0hfTEVOR1RIID0gMzg0O1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuS2VybC5CWVRFX0hBU0hfTEVOR1RIID0gS2VybC5CSVRfSEFTSF9MRU5HVEggLyA4O1xyXG5leHBvcnRzLktlcmwgPSBLZXJsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhMlZ5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl6Y0c5dVoyVnpMMnRsY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkRla1VzTUVOQlFYVkRPMEZCUTNaRExITkVRVUZ0UkR0QlFVTnVSQ3hyUlVGQkswUTdRVUZITDBRN096dEhRVWRITzBGQlEwZzdTVUZYU1RzN1QwRkZSenRKUVVOSU8xRkJRMGtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRmRCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzVjBGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNelJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEZkQlFWY3NRMEZCUXl4SlFVRlpPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRXQ3hMUVVGTExHRkJRV0VzUTBGQlF6dFpRVU51UWl4TFFVRkxMR2xDUVVGcFFpeERRVUZETzFsQlEzWkNMRXRCUVVzc2EwSkJRV3RDTzJkQ1FVTjJRaXhEUVVGRE8yOUNRVU5ITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlEzUkNMRU5CUVVNN1dVRkRSQ3hUUVVGVExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRGhDUVVFNFFpeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNwRkxFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGtzVVVGQlVUdFJRVU5ZTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxGVkJRVlVzUTBGQlF5eExRVUZwUWp0SlFVTnVReXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TFFVRkxPMUZCUTFJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCWjBJc1JVRkJSU3hOUVVGakxFVkJRVVVzVFVGQll6dFJRVU14UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGREwwUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRSUVVOcVJTeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTm9SQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3NFFrRkJPRUlzUTBGQlF5eERRVUZETzFGQlF6RkVMRU5CUVVNN1VVRkRSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExEaENRVUU0UWl4RFFVRkRMRU5CUVVNN1VVRkRNVVFzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRha01zVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc2RVUkJRWFZFTEVOQlFVTXNRMEZCUXp0UlFVTnVSaXhEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkNMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEdkRFFVRm5ReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRekZHTEVOQlFVTTdVVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU03VVVGRGVrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1RVRkJUU3hEUVVGRE8xRkJSWHBDTEVkQlFVY3NRMEZCUXp0WlFVTkJMRTFCUVUwc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZGTTBVc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM0JETEUxQlFVMHNUVUZCVFN4SFFVRkhMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlFVVXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xbEJRMnhHTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8xbEJRM3BFTEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZGZWtRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkZMMElzVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1dVRkRhRU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRjRU1zUTBGQlF5eFJRVUZSTEZkQlFWY3NSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRPVUlzUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NUMEZCVHl4RFFVRkRMRXRCUVdkQ0xFVkJRVVVzVFVGQll5eEZRVUZGTEUxQlFXTTdVVUZETTBRc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF5OUVMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VVVGRGFrVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRhRVFzVFVGQlRTeEpRVUZKTEhsQ1FVRlhMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUkN4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xRkJRekZFTEVOQlFVTTdVVUZEUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIVkVRVUYxUkN4RFFVRkRMRU5CUVVNN1VVRkRia1lzUTBGQlF6dFJRVU5FTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4blEwRkJaME1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU14Uml4RFFVRkRPMUZCUlVRc1NVRkJTU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETzFGQlEzcENMRWxCUVVrc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dFJRVVY2UWl4SFFVRkhMRU5CUVVNN1dVRkRRU3hOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJSVGxETEUxQlFVMHNUVUZCVFN4SFFVRkhMRzFEUVVGblFpeERRVUZETEdsQ1FVRnBRaXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdXVUZGTjBZc1RVRkJUU3hUUVVGVExFZEJRV01zU1VGQlNTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRemRFTEcxRFFVRm5RaXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVVelJTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZGY0VNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlExWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJkQ1FVTXhRaXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU14UXl4RFFVRkRPMWxCUlVRc1RVRkJUU3hGUVVGRkxFZEJRVWNzU1VGQlNTeFJRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1dVRkRla01zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8yZENRVU5xUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlF6RkRMRU5CUVVNN1dVRkZSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenRaUVVWeVF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVOd1F5eERRVUZETEZGQlFWRXNWMEZCVnl4SFFVRkhMRU5CUVVNc1JVRkJSVHRKUVVNNVFpeERRVUZET3p0QlFXNUtSQ3hsUVVGbE8wRkJRMU1zWjBKQlFWY3NSMEZCVnl4SFFVRkhMRU5CUVVNN1FVRkRiRVFzWlVGQlpUdEJRVU5UTEc5Q1FVRmxMRWRCUVZjc1IwRkJSeXhEUVVGRE8wRkJRM1JFTEdWQlFXVTdRVUZEVXl4eFFrRkJaMElzUjBGQlZ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVU1b1JpeHZRa0Z4U2tNaWZRPT1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL3Nwb25nZXMva2VybC50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0b0Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3IvY3J5cHRvRXJyb3JcIik7XHJcbi8qKlxyXG4gKiBTaGEzIGltcGxlbWVudGF0aW9uLlxyXG4gKi9cclxuY2xhc3MgU2hhMyB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBTSEEzLlxyXG4gICAgICogQHBhcmFtIGJpdHMgVGhlIG51bWJlciBvZiBpbnB1dCBiaXRzLlxyXG4gICAgICogQHBhcmFtIHBhZGRpbmcgVGhlIHBhZGRpbmcgdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIG91dHB1dEJpdHMgVGhlIG51bWJlciBvZiBvdXRwdXQgYml0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYml0cywgcGFkZGluZywgb3V0cHV0Qml0cykge1xyXG4gICAgICAgIHRoaXMuX3BhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuX291dHB1dEJpdHMgPSBvdXRwdXRCaXRzO1xyXG4gICAgICAgIHRoaXMuX2Jsb2NrQ291bnQgPSAoMTYwMCAtIChiaXRzIDw8IDEpKSA+PiA1O1xyXG4gICAgICAgIHRoaXMuX2J5dGVDb3VudCA9IHRoaXMuX2Jsb2NrQ291bnQgPDwgMjtcclxuICAgICAgICB0aGlzLl9vdXRwdXRCbG9ja3MgPSBvdXRwdXRCaXRzID4+IDU7XHJcbiAgICAgICAgdGhpcy5fZXh0cmFCeXRlcyA9IChvdXRwdXRCaXRzICYgMzEpID4+IDM7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCB0aGUgZGlnZXN0LlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLl9yZXNldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmxvY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gMDtcclxuICAgICAgICB0aGlzLl9ibG9ja3MgPSBuZXcgVWludDMyQXJyYXkodGhpcy5fYmxvY2tDb3VudCArIDEpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbmV3IFVpbnQzMkFycmF5KDUwKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBkaWdlc3QuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQXJyYXkgb2YgZGF0YSB0byB1c2UgaW4gdGhlIHVwZGF0ZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGlucHV0LCBBcnJheUJ1ZmZlcikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJJbnB1dCBpcyBub3Qgb2YgdHlwZSBBcnJheUJ1ZmZlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KGlucHV0KTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLmxlbmd0aDtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3NbMF0gPSB0aGlzLl9ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB0aGlzLl9ibG9ja0NvdW50ICsgMTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2ldID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSB0aGlzLl9zdGFydDsgaW5kZXggPCBsZW5ndGggJiYgaSA8IHRoaXMuX2J5dGVDb3VudDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzW2kgPj4gMl0gfD0gbWVzc2FnZVtpbmRleF0gPDwgU2hhMy5TSElGVFtpKysgJiAzXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sYXN0Qnl0ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IGkgLSB0aGlzLl9ieXRlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9jayA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZVtpXSBePSB0aGlzLl9ibG9ja3NbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRmluYWxpemUgYW5kIHJldHVybiB0aGUgaGFzaCBmb3IgdGhlIGRpZ2VzdCwgd2lsbCBhbHNvIHJlc2V0IHRoZSBzdGF0ZS5cclxuICAgICAqIEByZXR1cm4gQXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGRpZ2VzdC5cclxuICAgICAqL1xyXG4gICAgZGlnZXN0KCkge1xyXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IGogPSAwO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5fb3V0cHV0Qml0cyA+PiAzO1xyXG4gICAgICAgIGxldCBidWZmZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKCh0aGlzLl9vdXRwdXRCbG9ja3MgKyAxKSA8PCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgd2hpbGUgKGogPCB0aGlzLl9vdXRwdXRCbG9ja3MpIHtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgJiYgaiA8IHRoaXMuX291dHB1dEJsb2NrczsgKytpLCArK2opIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdID0gdGhpcy5fc3RhdGVbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJhQnl0ZXMpIHtcclxuICAgICAgICAgICAgYXJyYXlbaV0gPSB0aGlzLl9zdGF0ZVtpXTtcclxuICAgICAgICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKDAsIGJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIGxldCBpID0gdGhpcy5fbGFzdEJ5dGVJbmRleDtcclxuICAgICAgICB0aGlzLl9ibG9ja3NbaSA+PiAyXSB8PSB0aGlzLl9wYWRkaW5nW2kgJiAzXTtcclxuICAgICAgICBpZiAodGhpcy5fbGFzdEJ5dGVJbmRleCA9PT0gdGhpcy5fYnl0ZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1swXSA9IHRoaXMuX2Jsb2Nrc1t0aGlzLl9ibG9ja0NvdW50XTtcclxuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IHRoaXMuX2Jsb2NrQ291bnQgKyAxOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrc1tpXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmxvY2tzW3RoaXMuX2Jsb2NrQ291bnQgLSAxXSB8PSAweDgwMDAwMDAwO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9ibG9ja0NvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGVbaV0gXj0gdGhpcy5fYmxvY2tzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtlY2Nha1Blcm11dGF0aW9uKHRoaXMuX3N0YXRlKTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAga2VjY2FrUGVybXV0YXRpb24ocykge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uXHJcbiAgICAgICAgbGV0IGgsIGwsIG4sIGMwLCBjMSwgYzIsIGMzLCBjNCwgYzUsIGM2LCBjNywgYzgsIGM5LCBiMCwgYjEsIGIyLCBiMywgYjQsIGI1LCBiNiwgYjcsIGI4LCBiOSwgYjEwLCBiMTEsIGIxMiwgYjEzLCBiMTQsIGIxNSwgYjE2LCBiMTcsIGIxOCwgYjE5LCBiMjAsIGIyMSwgYjIyLCBiMjMsIGIyNCwgYjI1LCBiMjYsIGIyNywgYjI4LCBiMjksIGIzMCwgYjMxLCBiMzIsIGIzMywgYjM0LCBiMzUsIGIzNiwgYjM3LCBiMzgsIGIzOSwgYjQwLCBiNDEsIGI0MiwgYjQzLCBiNDQsIGI0NSwgYjQ2LCBiNDcsIGI0OCwgYjQ5O1xyXG4gICAgICAgIGZvciAobiA9IDA7IG4gPCA0ODsgbiArPSAyKSB7XHJcbiAgICAgICAgICAgIGMwID0gc1swXSBeIHNbMTBdIF4gc1syMF0gXiBzWzMwXSBeIHNbNDBdO1xyXG4gICAgICAgICAgICBjMSA9IHNbMV0gXiBzWzExXSBeIHNbMjFdIF4gc1szMV0gXiBzWzQxXTtcclxuICAgICAgICAgICAgYzIgPSBzWzJdIF4gc1sxMl0gXiBzWzIyXSBeIHNbMzJdIF4gc1s0Ml07XHJcbiAgICAgICAgICAgIGMzID0gc1szXSBeIHNbMTNdIF4gc1syM10gXiBzWzMzXSBeIHNbNDNdO1xyXG4gICAgICAgICAgICBjNCA9IHNbNF0gXiBzWzE0XSBeIHNbMjRdIF4gc1szNF0gXiBzWzQ0XTtcclxuICAgICAgICAgICAgYzUgPSBzWzVdIF4gc1sxNV0gXiBzWzI1XSBeIHNbMzVdIF4gc1s0NV07XHJcbiAgICAgICAgICAgIGM2ID0gc1s2XSBeIHNbMTZdIF4gc1syNl0gXiBzWzM2XSBeIHNbNDZdO1xyXG4gICAgICAgICAgICBjNyA9IHNbN10gXiBzWzE3XSBeIHNbMjddIF4gc1szN10gXiBzWzQ3XTtcclxuICAgICAgICAgICAgYzggPSBzWzhdIF4gc1sxOF0gXiBzWzI4XSBeIHNbMzhdIF4gc1s0OF07XHJcbiAgICAgICAgICAgIGM5ID0gc1s5XSBeIHNbMTldIF4gc1syOV0gXiBzWzM5XSBeIHNbNDldO1xyXG4gICAgICAgICAgICBoID0gYzggXiAoKGMyIDw8IDEpIHwgKGMzID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzkgXiAoKGMzIDw8IDEpIHwgKGMyID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzBdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMV0gXj0gbDtcclxuICAgICAgICAgICAgc1sxMF0gXj0gaDtcclxuICAgICAgICAgICAgc1sxMV0gXj0gbDtcclxuICAgICAgICAgICAgc1syMF0gXj0gaDtcclxuICAgICAgICAgICAgc1syMV0gXj0gbDtcclxuICAgICAgICAgICAgc1szMF0gXj0gaDtcclxuICAgICAgICAgICAgc1szMV0gXj0gbDtcclxuICAgICAgICAgICAgc1s0MF0gXj0gaDtcclxuICAgICAgICAgICAgc1s0MV0gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGMwIF4gKChjNCA8PCAxKSB8IChjNSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGMxIF4gKChjNSA8PCAxKSB8IChjNCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1syXSBePSBoO1xyXG4gICAgICAgICAgICBzWzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMTJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzNdIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDJdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDNdIF49IGw7XHJcbiAgICAgICAgICAgIGggPSBjMiBeICgoYzYgPDwgMSkgfCAoYzcgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIGwgPSBjMyBeICgoYzcgPDwgMSkgfCAoYzYgPj4+IDMxKSk7XHJcbiAgICAgICAgICAgIHNbNF0gXj0gaDtcclxuICAgICAgICAgICAgc1s1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzE0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzE1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzI0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzI1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzM0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzM1XSBePSBsO1xyXG4gICAgICAgICAgICBzWzQ0XSBePSBoO1xyXG4gICAgICAgICAgICBzWzQ1XSBePSBsO1xyXG4gICAgICAgICAgICBoID0gYzQgXiAoKGM4IDw8IDEpIHwgKGM5ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBsID0gYzUgXiAoKGM5IDw8IDEpIHwgKGM4ID4+PiAzMSkpO1xyXG4gICAgICAgICAgICBzWzZdIF49IGg7XHJcbiAgICAgICAgICAgIHNbN10gXj0gbDtcclxuICAgICAgICAgICAgc1sxNl0gXj0gaDtcclxuICAgICAgICAgICAgc1sxN10gXj0gbDtcclxuICAgICAgICAgICAgc1syNl0gXj0gaDtcclxuICAgICAgICAgICAgc1syN10gXj0gbDtcclxuICAgICAgICAgICAgc1szNl0gXj0gaDtcclxuICAgICAgICAgICAgc1szN10gXj0gbDtcclxuICAgICAgICAgICAgc1s0Nl0gXj0gaDtcclxuICAgICAgICAgICAgc1s0N10gXj0gbDtcclxuICAgICAgICAgICAgaCA9IGM2IF4gKChjMCA8PCAxKSB8IChjMSA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgbCA9IGM3IF4gKChjMSA8PCAxKSB8IChjMCA+Pj4gMzEpKTtcclxuICAgICAgICAgICAgc1s4XSBePSBoO1xyXG4gICAgICAgICAgICBzWzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMThdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMTldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMjhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMjldIF49IGw7XHJcbiAgICAgICAgICAgIHNbMzhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbMzldIF49IGw7XHJcbiAgICAgICAgICAgIHNbNDhdIF49IGg7XHJcbiAgICAgICAgICAgIHNbNDldIF49IGw7XHJcbiAgICAgICAgICAgIGIwID0gc1swXTtcclxuICAgICAgICAgICAgYjEgPSBzWzFdO1xyXG4gICAgICAgICAgICBiMzIgPSAoc1sxMV0gPDwgNCkgfCAoc1sxMF0gPj4+IDI4KTtcclxuICAgICAgICAgICAgYjMzID0gKHNbMTBdIDw8IDQpIHwgKHNbMTFdID4+PiAyOCk7XHJcbiAgICAgICAgICAgIGIxNCA9IChzWzIwXSA8PCAzKSB8IChzWzIxXSA+Pj4gMjkpO1xyXG4gICAgICAgICAgICBiMTUgPSAoc1syMV0gPDwgMykgfCAoc1syMF0gPj4+IDI5KTtcclxuICAgICAgICAgICAgYjQ2ID0gKHNbMzFdIDw8IDkpIHwgKHNbMzBdID4+PiAyMyk7XHJcbiAgICAgICAgICAgIGI0NyA9IChzWzMwXSA8PCA5KSB8IChzWzMxXSA+Pj4gMjMpO1xyXG4gICAgICAgICAgICBiMjggPSAoc1s0MF0gPDwgMTgpIHwgKHNbNDFdID4+PiAxNCk7XHJcbiAgICAgICAgICAgIGIyOSA9IChzWzQxXSA8PCAxOCkgfCAoc1s0MF0gPj4+IDE0KTtcclxuICAgICAgICAgICAgYjIwID0gKHNbMl0gPDwgMSkgfCAoc1szXSA+Pj4gMzEpO1xyXG4gICAgICAgICAgICBiMjEgPSAoc1szXSA8PCAxKSB8IChzWzJdID4+PiAzMSk7XHJcbiAgICAgICAgICAgIGIyID0gKHNbMTNdIDw8IDEyKSB8IChzWzEyXSA+Pj4gMjApO1xyXG4gICAgICAgICAgICBiMyA9IChzWzEyXSA8PCAxMikgfCAoc1sxM10gPj4+IDIwKTtcclxuICAgICAgICAgICAgYjM0ID0gKHNbMjJdIDw8IDEwKSB8IChzWzIzXSA+Pj4gMjIpO1xyXG4gICAgICAgICAgICBiMzUgPSAoc1syM10gPDwgMTApIHwgKHNbMjJdID4+PiAyMik7XHJcbiAgICAgICAgICAgIGIxNiA9IChzWzMzXSA8PCAxMykgfCAoc1szMl0gPj4+IDE5KTtcclxuICAgICAgICAgICAgYjE3ID0gKHNbMzJdIDw8IDEzKSB8IChzWzMzXSA+Pj4gMTkpO1xyXG4gICAgICAgICAgICBiNDggPSAoc1s0Ml0gPDwgMikgfCAoc1s0M10gPj4+IDMwKTtcclxuICAgICAgICAgICAgYjQ5ID0gKHNbNDNdIDw8IDIpIHwgKHNbNDJdID4+PiAzMCk7XHJcbiAgICAgICAgICAgIGI0MCA9IChzWzVdIDw8IDMwKSB8IChzWzRdID4+PiAyKTtcclxuICAgICAgICAgICAgYjQxID0gKHNbNF0gPDwgMzApIHwgKHNbNV0gPj4+IDIpO1xyXG4gICAgICAgICAgICBiMjIgPSAoc1sxNF0gPDwgNikgfCAoc1sxNV0gPj4+IDI2KTtcclxuICAgICAgICAgICAgYjIzID0gKHNbMTVdIDw8IDYpIHwgKHNbMTRdID4+PiAyNik7XHJcbiAgICAgICAgICAgIGI0ID0gKHNbMjVdIDw8IDExKSB8IChzWzI0XSA+Pj4gMjEpO1xyXG4gICAgICAgICAgICBiNSA9IChzWzI0XSA8PCAxMSkgfCAoc1syNV0gPj4+IDIxKTtcclxuICAgICAgICAgICAgYjM2ID0gKHNbMzRdIDw8IDE1KSB8IChzWzM1XSA+Pj4gMTcpO1xyXG4gICAgICAgICAgICBiMzcgPSAoc1szNV0gPDwgMTUpIHwgKHNbMzRdID4+PiAxNyk7XHJcbiAgICAgICAgICAgIGIxOCA9IChzWzQ1XSA8PCAyOSkgfCAoc1s0NF0gPj4+IDMpO1xyXG4gICAgICAgICAgICBiMTkgPSAoc1s0NF0gPDwgMjkpIHwgKHNbNDVdID4+PiAzKTtcclxuICAgICAgICAgICAgYjEwID0gKHNbNl0gPDwgMjgpIHwgKHNbN10gPj4+IDQpO1xyXG4gICAgICAgICAgICBiMTEgPSAoc1s3XSA8PCAyOCkgfCAoc1s2XSA+Pj4gNCk7XHJcbiAgICAgICAgICAgIGI0MiA9IChzWzE3XSA8PCAyMykgfCAoc1sxNl0gPj4+IDkpO1xyXG4gICAgICAgICAgICBiNDMgPSAoc1sxNl0gPDwgMjMpIHwgKHNbMTddID4+PiA5KTtcclxuICAgICAgICAgICAgYjI0ID0gKHNbMjZdIDw8IDI1KSB8IChzWzI3XSA+Pj4gNyk7XHJcbiAgICAgICAgICAgIGIyNSA9IChzWzI3XSA8PCAyNSkgfCAoc1syNl0gPj4+IDcpO1xyXG4gICAgICAgICAgICBiNiA9IChzWzM2XSA8PCAyMSkgfCAoc1szN10gPj4+IDExKTtcclxuICAgICAgICAgICAgYjcgPSAoc1szN10gPDwgMjEpIHwgKHNbMzZdID4+PiAxMSk7XHJcbiAgICAgICAgICAgIGIzOCA9IChzWzQ3XSA8PCAyNCkgfCAoc1s0Nl0gPj4+IDgpO1xyXG4gICAgICAgICAgICBiMzkgPSAoc1s0Nl0gPDwgMjQpIHwgKHNbNDddID4+PiA4KTtcclxuICAgICAgICAgICAgYjMwID0gKHNbOF0gPDwgMjcpIHwgKHNbOV0gPj4+IDUpO1xyXG4gICAgICAgICAgICBiMzEgPSAoc1s5XSA8PCAyNykgfCAoc1s4XSA+Pj4gNSk7XHJcbiAgICAgICAgICAgIGIxMiA9IChzWzE4XSA8PCAyMCkgfCAoc1sxOV0gPj4+IDEyKTtcclxuICAgICAgICAgICAgYjEzID0gKHNbMTldIDw8IDIwKSB8IChzWzE4XSA+Pj4gMTIpO1xyXG4gICAgICAgICAgICBiNDQgPSAoc1syOV0gPDwgNykgfCAoc1syOF0gPj4+IDI1KTtcclxuICAgICAgICAgICAgYjQ1ID0gKHNbMjhdIDw8IDcpIHwgKHNbMjldID4+PiAyNSk7XHJcbiAgICAgICAgICAgIGIyNiA9IChzWzM4XSA8PCA4KSB8IChzWzM5XSA+Pj4gMjQpO1xyXG4gICAgICAgICAgICBiMjcgPSAoc1szOV0gPDwgOCkgfCAoc1szOF0gPj4+IDI0KTtcclxuICAgICAgICAgICAgYjggPSAoc1s0OF0gPDwgMTQpIHwgKHNbNDldID4+PiAxOCk7XHJcbiAgICAgICAgICAgIGI5ID0gKHNbNDldIDw8IDE0KSB8IChzWzQ4XSA+Pj4gMTgpO1xyXG4gICAgICAgICAgICBzWzBdID0gYjAgXiAofmIyICYgYjQpO1xyXG4gICAgICAgICAgICBzWzFdID0gYjEgXiAofmIzICYgYjUpO1xyXG4gICAgICAgICAgICBzWzEwXSA9IGIxMCBeICh+YjEyICYgYjE0KTtcclxuICAgICAgICAgICAgc1sxMV0gPSBiMTEgXiAofmIxMyAmIGIxNSk7XHJcbiAgICAgICAgICAgIHNbMjBdID0gYjIwIF4gKH5iMjIgJiBiMjQpO1xyXG4gICAgICAgICAgICBzWzIxXSA9IGIyMSBeICh+YjIzICYgYjI1KTtcclxuICAgICAgICAgICAgc1szMF0gPSBiMzAgXiAofmIzMiAmIGIzNCk7XHJcbiAgICAgICAgICAgIHNbMzFdID0gYjMxIF4gKH5iMzMgJiBiMzUpO1xyXG4gICAgICAgICAgICBzWzQwXSA9IGI0MCBeICh+YjQyICYgYjQ0KTtcclxuICAgICAgICAgICAgc1s0MV0gPSBiNDEgXiAofmI0MyAmIGI0NSk7XHJcbiAgICAgICAgICAgIHNbMl0gPSBiMiBeICh+YjQgJiBiNik7XHJcbiAgICAgICAgICAgIHNbM10gPSBiMyBeICh+YjUgJiBiNyk7XHJcbiAgICAgICAgICAgIHNbMTJdID0gYjEyIF4gKH5iMTQgJiBiMTYpO1xyXG4gICAgICAgICAgICBzWzEzXSA9IGIxMyBeICh+YjE1ICYgYjE3KTtcclxuICAgICAgICAgICAgc1syMl0gPSBiMjIgXiAofmIyNCAmIGIyNik7XHJcbiAgICAgICAgICAgIHNbMjNdID0gYjIzIF4gKH5iMjUgJiBiMjcpO1xyXG4gICAgICAgICAgICBzWzMyXSA9IGIzMiBeICh+YjM0ICYgYjM2KTtcclxuICAgICAgICAgICAgc1szM10gPSBiMzMgXiAofmIzNSAmIGIzNyk7XHJcbiAgICAgICAgICAgIHNbNDJdID0gYjQyIF4gKH5iNDQgJiBiNDYpO1xyXG4gICAgICAgICAgICBzWzQzXSA9IGI0MyBeICh+YjQ1ICYgYjQ3KTtcclxuICAgICAgICAgICAgc1s0XSA9IGI0IF4gKH5iNiAmIGI4KTtcclxuICAgICAgICAgICAgc1s1XSA9IGI1IF4gKH5iNyAmIGI5KTtcclxuICAgICAgICAgICAgc1sxNF0gPSBiMTQgXiAofmIxNiAmIGIxOCk7XHJcbiAgICAgICAgICAgIHNbMTVdID0gYjE1IF4gKH5iMTcgJiBiMTkpO1xyXG4gICAgICAgICAgICBzWzI0XSA9IGIyNCBeICh+YjI2ICYgYjI4KTtcclxuICAgICAgICAgICAgc1syNV0gPSBiMjUgXiAofmIyNyAmIGIyOSk7XHJcbiAgICAgICAgICAgIHNbMzRdID0gYjM0IF4gKH5iMzYgJiBiMzgpO1xyXG4gICAgICAgICAgICBzWzM1XSA9IGIzNSBeICh+YjM3ICYgYjM5KTtcclxuICAgICAgICAgICAgc1s0NF0gPSBiNDQgXiAofmI0NiAmIGI0OCk7XHJcbiAgICAgICAgICAgIHNbNDVdID0gYjQ1IF4gKH5iNDcgJiBiNDkpO1xyXG4gICAgICAgICAgICBzWzZdID0gYjYgXiAofmI4ICYgYjApO1xyXG4gICAgICAgICAgICBzWzddID0gYjcgXiAofmI5ICYgYjEpO1xyXG4gICAgICAgICAgICBzWzE2XSA9IGIxNiBeICh+YjE4ICYgYjEwKTtcclxuICAgICAgICAgICAgc1sxN10gPSBiMTcgXiAofmIxOSAmIGIxMSk7XHJcbiAgICAgICAgICAgIHNbMjZdID0gYjI2IF4gKH5iMjggJiBiMjApO1xyXG4gICAgICAgICAgICBzWzI3XSA9IGIyNyBeICh+YjI5ICYgYjIxKTtcclxuICAgICAgICAgICAgc1szNl0gPSBiMzYgXiAofmIzOCAmIGIzMCk7XHJcbiAgICAgICAgICAgIHNbMzddID0gYjM3IF4gKH5iMzkgJiBiMzEpO1xyXG4gICAgICAgICAgICBzWzQ2XSA9IGI0NiBeICh+YjQ4ICYgYjQwKTtcclxuICAgICAgICAgICAgc1s0N10gPSBiNDcgXiAofmI0OSAmIGI0MSk7XHJcbiAgICAgICAgICAgIHNbOF0gPSBiOCBeICh+YjAgJiBiMik7XHJcbiAgICAgICAgICAgIHNbOV0gPSBiOSBeICh+YjEgJiBiMyk7XHJcbiAgICAgICAgICAgIHNbMThdID0gYjE4IF4gKH5iMTAgJiBiMTIpO1xyXG4gICAgICAgICAgICBzWzE5XSA9IGIxOSBeICh+YjExICYgYjEzKTtcclxuICAgICAgICAgICAgc1syOF0gPSBiMjggXiAofmIyMCAmIGIyMik7XHJcbiAgICAgICAgICAgIHNbMjldID0gYjI5IF4gKH5iMjEgJiBiMjMpO1xyXG4gICAgICAgICAgICBzWzM4XSA9IGIzOCBeICh+YjMwICYgYjMyKTtcclxuICAgICAgICAgICAgc1szOV0gPSBiMzkgXiAofmIzMSAmIGIzMyk7XHJcbiAgICAgICAgICAgIHNbNDhdID0gYjQ4IF4gKH5iNDAgJiBiNDIpO1xyXG4gICAgICAgICAgICBzWzQ5XSA9IGI0OSBeICh+YjQxICYgYjQzKTtcclxuICAgICAgICAgICAgc1swXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuXTtcclxuICAgICAgICAgICAgc1sxXSBePSBTaGEzLlJPVU5EX0NPTlNUQU5UU1tuICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIFBhZGRpbmcgdG8gdXNlIGZvciBLZWNjYWsgKi9cclxuU2hhMy5LRUNDQUtfUEFERElORyA9IG5ldyBVaW50MzJBcnJheShbMSwgMjU2LCA2NTUzNiwgMTY3NzcyMTZdKTtcclxuLyogQGludGVybmFsICovXHJcblNoYTMuU0hJRlQgPSBuZXcgVWludDhBcnJheShbMCwgOCwgMTYsIDI0XSk7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5TaGEzLlJPVU5EX0NPTlNUQU5UUyA9IG5ldyBVaW50MzJBcnJheShbMSwgMCwgMzI4OTgsIDAsIDMyOTA2LCAyMTQ3NDgzNjQ4LCAyMTQ3NTE2NDE2LCAyMTQ3NDgzNjQ4LCAzMjkwNywgMCwgMjE0NzQ4MzY0OSxcclxuICAgIDAsIDIxNDc1MTY1NDUsIDIxNDc0ODM2NDgsIDMyNzc3LCAyMTQ3NDgzNjQ4LCAxMzgsIDAsIDEzNiwgMCwgMjE0NzUxNjQyNSwgMCxcclxuICAgIDIxNDc0ODM2NTgsIDAsIDIxNDc1MTY1NTUsIDAsIDEzOSwgMjE0NzQ4MzY0OCwgMzI5MDUsIDIxNDc0ODM2NDgsIDMyNzcxLFxyXG4gICAgMjE0NzQ4MzY0OCwgMzI3NzAsIDIxNDc0ODM2NDgsIDEyOCwgMjE0NzQ4MzY0OCwgMzI3NzgsIDAsIDIxNDc0ODM2NTgsIDIxNDc0ODM2NDgsXHJcbiAgICAyMTQ3NTE2NTQ1LCAyMTQ3NDgzNjQ4LCAzMjg5NiwgMjE0NzQ4MzY0OCwgMjE0NzQ4MzY0OSwgMCwgMjE0NzUxNjQyNCwgMjE0NzQ4MzY0OF0pO1xyXG5leHBvcnRzLlNoYTMgPSBTaGEzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljMmhoTXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdkbGMzUnpMM05vWVRNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTERSRlFVRjVSVHRCUVVONlJTeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFYRkRTVHM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzU1VGQldTeEZRVUZGTEU5QlFXOUNMRVZCUVVVc1ZVRkJhMEk3VVVGRE9VUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNoRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NWVUZCVlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEYWtJc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NTMEZCU3p0UlFVTlNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEyNUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU55UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zUzBGQmEwSTdVVUZETlVJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpORExFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVORUxFMUJRVTBzVDBGQlR5eEhRVUZsTEVsQlFVa3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnhFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRMlFzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZGVGl4UFFVRlBMRXRCUVVzc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF6dFpRVU53UWl4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRaQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0blFrRkRjRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzJkQ1FVTTVRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8yOUNRVU40UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkRlRUlzUTBGQlF6dFpRVU5NTEVOQlFVTTdXVUZEUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEyNUZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeEZMRU5CUVVNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjRRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNN1owSkJRMnhETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRemRETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZEY0VNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTjBReXhEUVVGRE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1owSkJRM0JETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRM1pDTEVOQlFVTTdXVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRFNpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOd1FpeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFGQlJXaENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU5XTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOV0xFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0JETEVsQlFVa3NUVUZCVFN4RFFVRkRPMUZCUTFnc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia0lzVFVGQlRTeEhRVUZITEVsQlFVa3NWMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNMVJDeERRVUZETzFGQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRTaXhOUVVGTkxFZEJRVWNzU1VGQlNTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRjRU1zUTBGQlF6dFJRVU5FTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEzUkRMRTlCUVU4c1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTTFRaXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRMjVGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsQ0xFTkJRVU03VVVGRFRDeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtJc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE1VSXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTNCRExFTkJRVU03VVVGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1VVRkZZaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETzBsQlEyeENMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMUFzVVVGQlVUdFJRVU5hTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETjBNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU14UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFsQlEycEVMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1owSkJRM2hETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEzaENMRU5CUVVNN1VVRkRUQ3hEUVVGRE8xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEZWQlFWVXNRMEZCUXp0UlFVTnFSQ3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1dVRkRjRU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNSRExFTkJRVU03VVVGRFJDeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNoRExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlExQXNhVUpCUVdsQ0xFTkJRVU1zUTBGQll6dFJRVU53UXl4M1JFRkJkMFE3VVVGRGVFUXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlF5OURMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVTTVSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlF6bEZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6dFJRVU51Uml4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzFsQlEzcENMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRekZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6RkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUlRGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNURMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExWXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOV0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJrTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEVml4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMjVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFZpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMVlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFnc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTllMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU51UXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTFZc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTldMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEV0N4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlExZ3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5ZTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRFdDeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRMWdzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOWUxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkRXQ3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUlZnc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTldMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVml4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU5zUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY2tNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRiRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEY0VNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0JETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNrTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNKRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyeERMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0JETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTndReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzQkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOc1F5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM0pETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnlReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGNFTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNCRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU53UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRjRU1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzQkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVWd1F5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNaQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlF6TkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU16UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzWkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRE0wSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRek5DTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVNelFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRNMElzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUXpOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTXpRaXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZETTBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzFsQlJUTkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONFF5eERRVUZETzBsQlEwd3NRMEZCUXpzN1FVRm9Wa1FzSzBKQlFTdENPMEZCUTFJc2JVSkJRV01zUjBGQlowSXNTVUZCU1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMmhITEdWQlFXVTdRVUZEVXl4VlFVRkxMRWRCUVdVc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6TkZMR1ZCUVdVN1FVRkRVeXh2UWtGQlpTeEhRVUZuUWl4SlFVRkpMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeFZRVUZWTzBsQlEyNUtMRU5CUVVNc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRek5GTEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzUzBGQlN6dEpRVU4yUlN4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeEhRVUZITEVWQlFVVXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZEYUVZc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRldNMFlzYjBKQmExWkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9kaWdlc3RzL3NoYTMudHMiLCJ2YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6aW1wb3J0LW5hbWVcclxuY29uc3QgYmlnX2ludGVnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYmlnLWludGVnZXJcIikpO1xyXG5jb25zdCBjcnlwdG9FcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9yL2NyeXB0b0Vycm9yXCIpO1xyXG4vKipcclxuICogSGVscGVyIGNsYXNzIHRvIGNvbnZlcnQgYmV0d2VlbiBCaWdJbnRlZ2VyIGFuZCBvdGhlciB0eXBlcy5cclxuICogQ29udmVydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2lvdGFsZWRnZXIvaXJpL2Jsb2IvZGV2L3NyYy9tYWluL2phdmEvY29tL2lvdGEvaXJpL2hhc2gvS2VybC5qYXZhXHJcbiAqL1xyXG5jbGFzcyBCaWdJbnRlZ2VySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCB0cml0cyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdHJpdHMgVGhlIHRyaXRzIHRvIGNvbnZlcnQuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IE9mZnNldCB3aXRoaW4gdGhlIGFycmF5IHRvIHN0YXJ0LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSB0cml0cyBhcnJheSB0byBjb252ZXJ0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJpdHNUb0JpZ0ludGVnZXIodHJpdHMsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpIHx8IHRyaXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSB0cml0cyBtdXN0IGJlIGEgbm9uIGVtcHR5IEludDhBcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvZmZzZXQgKyBsZW5ndGggPiB0cml0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgb2Zmc2V0ICsgbGVuZ3RoIGlzIGJleW9uZCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubXVsdGlwbHkoQmlnSW50ZWdlckhlbHBlci5SQURJWCkuYWRkKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCh0cml0c1tvZmZzZXQgKyBpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgYmlnSW50ZWdlciB0byB0cml0cy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgYmlnSW50ZWdlciB0byBjb252ZXJ0IHRvIHRyaXRzLlxyXG4gICAgICogQHBhcmFtIHRyaXRzIFRoZSBhcnJheSB0byByZWNlaXZlIHRoZSB0cml0cy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgVGhlIG9mZnNldCB0byBwbGFjZSB0aGUgdHJpdHMgaW4gdGhlIGFycmF5LlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBhcnJheS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJpZ0ludGVnZXJUb1RyaXRzKHZhbHVlLCB0cml0cywgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHRyaXRzLCBJbnQ4QXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHRyaXRzIG11c3QgYmUgYW4gSW50OEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcihsZW5ndGgpIHx8IGxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIGxlbmd0aCBtdXN0IGJlIGEgbnVtYmVyID4gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9mZnNldCArIGxlbmd0aCA+IHRyaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgKyBsZW5ndGggaXMgYmV5b25kIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWJzb2x1dGVWYWx1ZSA9IHZhbHVlLmNvbXBhcmVUbyhiaWdfaW50ZWdlcl8xLmRlZmF1bHQuemVybykgPCAwID8gdmFsdWUubmVnYXRlKCkgOiB2YWx1ZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdlJlbWFpbmRlciA9IGFic29sdXRlVmFsdWUuZGl2bW9kKEJpZ0ludGVnZXJIZWxwZXIuUkFESVgpO1xyXG4gICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gZGl2UmVtYWluZGVyLnF1b3RpZW50O1xyXG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gZGl2UmVtYWluZGVyLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlciA+IEJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUpIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IEJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICBhYnNvbHV0ZVZhbHVlID0gYWJzb2x1dGVWYWx1ZS5hZGQoYmlnX2ludGVnZXJfMS5kZWZhdWx0W1wiMVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSByZW1haW5kZXIudG9KU051bWJlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUuY29tcGFyZVRvKGJpZ19pbnRlZ2VyXzEuZGVmYXVsdC56ZXJvKSA8IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgbmVnYXRpdmUgemVyb1xyXG4gICAgICAgICAgICAgICAgdHJpdHNbb2Zmc2V0ICsgaV0gPSB0cml0c1tvZmZzZXQgKyBpXSA9PT0gMCA/IDAgOiAtdHJpdHNbb2Zmc2V0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGhlIGJpZ0ludGVnZXIgaW50byBieXRlcy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cclxuICAgICAqIEBwYXJhbSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBUaGUgb2Zmc2V0IHdpdGhpbiB0aGUgYXJyYXkgdG8gc3RvcmUgdGhlIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYmlnSW50ZWdlclRvQnl0ZXModmFsdWUsIGRlc3RpbmF0aW9uLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc1R5cGUodmFsdWUsIGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IGNyeXB0b0Vycm9yXzEuQ3J5cHRvRXJyb3IoXCJUaGUgdmFsdWUgbXVzdCBiZSBhIGJpZ0ludGVnZXIgdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKGRlc3RpbmF0aW9uLCBBcnJheUJ1ZmZlcikgfHwgZGVzdGluYXRpb24uYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBkZXN0aW5hdGlvbiBtdXN0IGJlIGFuIGFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIob2Zmc2V0KSB8fCBvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIG9mZnNldCBtdXN0IGJlIGEgbnVtYmVyID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5ieXRlTGVuZ3RoIC0gb2Zmc2V0IDwgQmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKGBEZXN0aW5hdGlvbiBhcnJheSBoYXMgaW52YWxpZCBzaXplLCBpdCBtdXN0IGJlIGF0IGxlYXN0ICR7QmlnSW50ZWdlckhlbHBlci5CWVRFX0hBU0hfTEVOR1RIfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1lbWJlciBpZiBpdCBpcyBuZWdhdGl2ZSBmb3IgbGF0ZXJcclxuICAgICAgICBjb25zdCBpc05lZyA9IHZhbHVlLmlzTmVnYXRpdmUoKSA/IC0xIDogMDtcclxuICAgICAgICBsZXQgaGV4U3RyaW5nID0gdmFsdWUudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gQnV0IHJlbW92ZSBpdCBmb3Igbm93XHJcbiAgICAgICAgICAgIGhleFN0cmluZyA9IGhleFN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm93IG1ha2Ugc3VyZSB0aGUgaGV4IHN0cmluZyBpcyBhbiBldmVuIGxlbmd0aCBzbyB0aGUgcmVnZXggd29ya3NcclxuICAgICAgICBpZiAoaGV4U3RyaW5nLmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nID0gYDAke2hleFN0cmluZ31gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gaGV4U3RyaW5nLm1hdGNoKC9bMC05YS1mXXsyfS9nKTtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBoZXggdG8gbnVtYmVyc1xyXG4gICAgICAgIGNvbnN0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShtYXRjaGVzXHJcbiAgICAgICAgICAgIC5tYXAoaGV4ID0+IHBhcnNlSW50KGAweCR7aGV4fWAsIDE2KSkpO1xyXG4gICAgICAgIGlmIChpc05lZyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgQmlnSW50ZWdlckhlbHBlci50d29zQ29tcGxlbWVudChzaWduZWRCeXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAvLyBQYWQgdGhlIHN0YXJ0IG9mIHRoZSBidWZmZXIgd2l0aCB0aGUgbmVnIHZhbHVlXHJcbiAgICAgICAgbGV0IGkgPSBvZmZzZXQ7XHJcbiAgICAgICAgd2hpbGUgKGkgKyBzaWduZWRCeXRlcy5sZW5ndGggPCBCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEgpIHtcclxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0SW50OChpKyssIGlzTmVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW5kIGNvcHkgaW4gdGhlIGFjdHVhbCBieXRlc1xyXG4gICAgICAgIGZvciAobGV0IGogPSBzaWduZWRCeXRlcy5sZW5ndGg7IGotLSA+IDA7KSB7XHJcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldEludDgoaSsrLCBzaWduZWRCeXRlc1tzaWduZWRCeXRlcy5sZW5ndGggLSAxIC0gal0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBieXRlcyB0byBhIGJpZ0ludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgYnl0ZXMuXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0IFRoZSBvZmZzZXQgd2l0aGluIHRoZSBieXRlcyB0byBzdGFydCBjb252ZXJzaW9uLlxyXG4gICAgICogQHBhcmFtIGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBieXRlcyB0byB1c2UgZm9yIGNvbnZlcnNpb24uXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBieXRlc1RvQmlnSW50ZWdlcihzb3VyY2UsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNUeXBlKHNvdXJjZSwgQXJyYXlCdWZmZXIpIHx8IHNvdXJjZS5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBjcnlwdG9FcnJvcl8xLkNyeXB0b0Vycm9yKFwiVGhlIHNvdXJjZSBtdXN0IGJlIGEgbm9uIGVtcHR5IG51bWJlciBhcnJheVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKG9mZnNldCkgfHwgb2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBvZmZzZXQgbXVzdCBiZSBhIG51bWJlciA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIobGVuZ3RoKSB8fCBsZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihcIlRoZSBsZW5ndGggbXVzdCBiZSBhIG51bWJlciA+IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb3VyY2UuYnl0ZUxlbmd0aCAtIG9mZnNldCA8IEJpZ0ludGVnZXJIZWxwZXIuQllURV9IQVNIX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgY3J5cHRvRXJyb3JfMS5DcnlwdG9FcnJvcihgU291cmNlIGFycmF5IGhhcyBpbnZhbGlkIHNpemUsIGl0IG11c3QgYmUgYXQgbGVhc3QgJHtCaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KHNvdXJjZSk7XHJcbiAgICAgICAgbGV0IHNpZ25lZEJ5dGVzID0gbmV3IEludDhBcnJheShkYXRhVmlldy5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRhdGFWaWV3LmJ5dGVMZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICBzaWduZWRCeXRlc1tiXSA9IGRhdGFWaWV3LmdldEludDgoYiArIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbCBwYWRkaW5nIGxlYXZpbmcgYXQgbGVhc3Qgb25lIGJ5dGVcclxuICAgICAgICBsZXQgcGFkZGluZ09mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgZmlyc3RCeXRlID0gc2lnbmVkQnl0ZXNbMF07XHJcbiAgICAgICAgY29uc3QgaXNOZWcgPSBmaXJzdEJ5dGUgPCAwO1xyXG4gICAgICAgIC8vIElmIHRoZSBmaXJzdCBwYWRkaW5nIGNoYXJhY3RlciBpcyBuZWdhdGl2ZSB0aGVuIHJldmVyc2UgdGhlIDJzIGNvbXBsZW1lbnRcclxuICAgICAgICAvLyBidXQgZmlyc3Qgc3RyaXAgb2YgdGhlIGxlYWRpbmcgcGFkZGluZ1xyXG4gICAgICAgIGlmIChmaXJzdEJ5dGUgPT09IDAgfHwgZmlyc3RCeXRlID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoc2lnbmVkQnl0ZXNbcGFkZGluZ09mZnNldF0gPT09IGZpcnN0Qnl0ZSAmJiBwYWRkaW5nT2Zmc2V0IDwgc2lnbmVkQnl0ZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ09mZnNldCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0cmlwIGFueSBwYWRkaW5nXHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzID0gc2lnbmVkQnl0ZXMuc2xpY2UocGFkZGluZ09mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05lZykge1xyXG4gICAgICAgICAgICBCaWdJbnRlZ2VySGVscGVyLnR3b3NDb21wbGVtZW50KHNpZ25lZEJ5dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhleFN0cmluZyA9IGlzTmVnID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGR2ID0gbmV3IERhdGFWaWV3KHNpZ25lZEJ5dGVzLmJ1ZmZlcik7XHJcbiAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBkdi5ieXRlTGVuZ3RoOyBoKyspIHtcclxuICAgICAgICAgICAgaGV4U3RyaW5nICs9IGAwMCR7ZHYuZ2V0VWludDgoaCkudG9TdHJpbmcoMTYpfWAuc2xpY2UoLTIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnX2ludGVnZXJfMS5kZWZhdWx0KGhleFN0cmluZywgMTYpO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBzdGF0aWMgdHdvc0NvbXBsZW1lbnQoc2lnbmVkQnl0ZXMpIHtcclxuICAgICAgICAvLyBpZiB0aGUgd2hvbGUgbnVtYmVyIGlzIG5lZ2F0aXZlIHRoZW5cclxuICAgICAgICAvLyBjaGFuZ2UgdG8gMidzIGNvbXBsZW1lbnRzIGJ5IG5vdGluZyBhbGwgdGhlIG51bWJlcnNcclxuICAgICAgICAvLyBhbmQgYWRkaW5nIDEgdG8gdGhlIGxhc3QgaS5lLiB+YmlnbnVtKzFcclxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IHNpZ25lZEJ5dGVzLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHNpZ25lZEJ5dGVzW2JdID0gfnNpZ25lZEJ5dGVzW2JdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgMSB0byBsYXN0IG51bWJlciwgaWYgdGhlIG51bWJlciBpcyAweEZGIGNvbnRpbnVlIHRvIGNhcnJ5XHJcbiAgICAgICAgbGV0IGMgPSBzaWduZWRCeXRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgc2lnbmVkQnl0ZXNbY10rKztcclxuICAgICAgICB9IHdoaWxlIChzaWduZWRCeXRlc1tjLS1dID09PSAwICYmIGMgPiAwKTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5SQURJWCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdCgzKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUFYX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLlJBRElYLm1pbnVzKDEpLmRpdmlkZSgyKTtcclxuLyogQGludGVybmFsICovXHJcbkJpZ0ludGVnZXJIZWxwZXIuTUlOX1RSSVRfVkFMVUUgPSBCaWdJbnRlZ2VySGVscGVyLk1BWF9UUklUX1ZBTFVFLm5lZ2F0ZSgpO1xyXG4vKiBAaW50ZXJuYWwgKi9cclxuQmlnSW50ZWdlckhlbHBlci5CSVRfSEFTSF9MRU5HVEggPSAzODQ7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5CaWdJbnRlZ2VySGVscGVyLkJZVEVfSEFTSF9MRU5HVEggPSBCaWdJbnRlZ2VySGVscGVyLkJJVF9IQVNIX0xFTkdUSCAvIDg7XHJcbmV4cG9ydHMuQmlnSW50ZWdlckhlbHBlciA9IEJpZ0ludGVnZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVltbG5TVzUwWldkbGNraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMkpwWjBsdWRHVm5aWEpJWld4d1pYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRGVrVXNkVU5CUVhWRE8wRkJRM1pETERoRVFVRnBRenRCUVVOcVF5eHpSRUZCYlVRN1FVRkZia1E3T3p0SFFVZEhPMEZCUTBnN1NVRmhTVHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGblFpeEZRVUZGTEUxQlFXTXNSVUZCUlN4TlFVRmpPMUZCUXpWRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXZSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4NVEwRkJlVU1zUTBGQlF5eERRVUZETzFGQlEzSkZMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMmhFTEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtRc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zUTBGQlF6dFJRVU0zUkN4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eDFSRUZCZFVRc1EwRkJReXhEUVVGRE8xRkJRMjVHTEVOQlFVTTdVVUZGUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXh4UWtGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVVjRRaXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOdVF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zY1VKQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNSaXhEUVVGRE8xRkJSVVFzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTnFRaXhEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlEwa3NUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFYZENMRVZCUVVVc1MwRkJaMElzUlVGQlJTeE5RVUZqTEVWQlFVVXNUVUZCWXp0UlFVTjBSeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM1JETEUxQlFVMHNTVUZCU1N4NVFrRkJWeXhEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRha1VzUTBGQlF6dFJRVVZFTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU42UXl4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhEUVVGRE8xRkJRelZFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYVVOQlFXbERMRU5CUVVNc1EwRkJRenRSUVVNM1JDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVF5eE5RVUZOTEVsQlFVa3NlVUpCUVZjc1EwRkJReXgxUkVGQmRVUXNRMEZCUXl4RFFVRkRPMUZCUTI1R0xFTkJRVU03VVVGRlJDeEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExIRkNRVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dFJRVVU1UlN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzFsQlF6bENMRTFCUVUwc1dVRkJXU3hIUVVGSExHRkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZEYkVVc1lVRkJZU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZEZEVNc1NVRkJTU3hUUVVGVExFZEJRVWNzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVVjJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRPVU1zVTBGQlV5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHTkJRV01zUTBGQlF6dG5Ra0ZETlVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNjVUpCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUVMRU5CUVVNN1dVRkRSQ3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU12UXl4RFFVRkRPMUZCUlVRc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4eFFrRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRia01zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRuUWtGRE9VSXNjMEpCUVhOQ08yZENRVU4wUWl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONlJTeERRVUZETzFGQlEwd3NRMEZCUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGM1FpeEZRVUZGTEZkQlFYZENMRVZCUVVVc1RVRkJZenRSUVVNNVJpeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4eFFrRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzUkRMRTFCUVUwc1NVRkJTU3g1UWtGQlZ5eERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VVVGRGFrVXNRMEZCUXp0UlFVVkVMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEpRVUZKTEZkQlFWY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUml4TlFVRk5MRWxCUVVrc2VVSkJRVmNzUTBGQlF5eHJRMEZCYTBNc1EwRkJReXhEUVVGRE8xRkJRemxFTEVOQlFVTTdVVUZGUkN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJoRUxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMR3REUVVGclF5eERRVUZETEVOQlFVTTdVVUZET1VRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBSU3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl3eVJFRkJNa1FzWjBKQlFXZENMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpGSUxFTkJRVU03VVVGRlJDeDFRMEZCZFVNN1VVRkRka01zVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVEZETEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGYmtNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVObUxIZENRVUYzUWp0WlFVTjRRaXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOdVF5eERRVUZETzFGQlEwUXNiMFZCUVc5Rk8xRkJRM0JGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzVTBGQlV5eEhRVUZITEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRhRU1zUTBGQlF6dFJRVU5FTEUxQlFVMHNUMEZCVHl4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdVVUZGYUVRc05rSkJRVFpDTzFGQlF6ZENMRTFCUVUwc1YwRkJWeXhIUVVGSExFbEJRVWtzVTBGQlV5eERRVUZETEU5QlFVODdZVUZEY0VNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlRORExFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFppeG5Ra0ZCWjBJc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEYWtRc1EwRkJRenRSUVVWRUxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJSVE5ETEdsRVFVRnBSRHRSUVVOcVJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1VVRkRaaXhQUVVGUExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4SFFVRkhMR2RDUVVGblFpeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03V1VGRGFFVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhEUVVGRE8xRkJRMFFzSzBKQlFTdENPMUZCUXk5Q0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNN1dVRkRlRU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UlN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFMUJRVzFDTEVWQlFVVXNUVUZCWXl4RlFVRkZMRTFCUVdNN1VVRkRMMFVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNaRkxFMUJRVTBzU1VGQlNTeDVRa0ZCVnl4RFFVRkRMRFpEUVVFMlF5eERRVUZETEVOQlFVTTdVVUZEZWtVc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFFUXNUVUZCVFN4SlFVRkpMSGxDUVVGWExFTkJRVU1zYTBOQlFXdERMRU5CUVVNc1EwRkJRenRSUVVNNVJDeERRVUZETzFGQlJVUXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSQ3hOUVVGTkxFbEJRVWtzZVVKQlFWY3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzFGQlF6ZEVMRU5CUVVNN1VVRkZSQ3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYWtVc1RVRkJUU3hKUVVGSkxIbENRVUZYTEVOQlFVTXNjMFJCUVhORUxHZENRVUZuUWl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTnlTQ3hEUVVGRE8xRkJSVVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VVVGRmRFTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1NVRkJTU3hUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRek5ETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOc1JDeERRVUZETzFGQlJVUXNkVVJCUVhWRU8xRkJRM1pFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMFFpeE5RVUZOTEZOQlFWTXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVUxUWl3MFJVRkJORVU3VVVGRE5VVXNlVU5CUVhsRE8xRkJRM3BETEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1MwRkJTeXhEUVVGRExFbEJRVWtzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eFBRVUZQTEZkQlFWY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhUUVVGVExFbEJRVWtzWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU03WjBKQlEzaEdMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xbEJRM0JDTEVOQlFVTTdXVUZEUkN4dlFrRkJiMEk3V1VGRGNFSXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdVVUZEYmtRc1EwRkJRenRSUVVWRUxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVaXhuUWtGQlowSXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGFrUXNRMEZCUXp0UlFVVkVMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRGFrTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1NVRkJTU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpWRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRM0pETEZOQlFWTXNTVUZCU1N4TFFVRkxMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVFzUTBGQlF6dFJRVVZFTEUxQlFVMHNRMEZCUXl4eFFrRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5RTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJjMEk3VVVGRGFFUXNkVU5CUVhWRE8xRkJRM1pETEhORVFVRnpSRHRSUVVOMFJDd3dRMEZCTUVNN1VVRkRNVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRE1VTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU03VVVGRFJDeG5SVUZCWjBVN1VVRkRhRVVzU1VGQlNTeERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwSXNSMEZCUnl4RFFVRkRPMWxCUTBFc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEY2tJc1EwRkJReXhSUVVGUkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBsQlF6bERMRU5CUVVNN08wRkJhRTlFTEdWQlFXVTdRVUZEVXl4elFrRkJTeXhIUVVGelFpeHhRa0ZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemRFTEdWQlFXVTdRVUZEVXl3clFrRkJZeXhIUVVGelFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4wUnl4bFFVRmxPMEZCUTFNc0swSkJRV01zUjBGQmMwSXNaMEpCUVdkQ0xFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMEZCUlhKSExHVkJRV1U3UVVGRFV5eG5RMEZCWlN4SFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOMFJDeGxRVUZsTzBGQlExTXNhVU5CUVdkQ0xFZEJRVmNzWjBKQlFXZENMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVmcxUml3MFEwRnJUME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9iaWdJbnRlZ2VySGVscGVyLnRzIiwidmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNwb25nZUZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NyeXB0by9kaXN0L2ZhY3Rvcmllcy9zcG9uZ2VGYWN0b3J5XCIpO1xyXG5jb25zdCB0cml0c18xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vZGF0YS9kaXN0L2RhdGEvdHJpdHNcIik7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTppbXBvcnQtbmFtZVxyXG5jb25zdCBiaWdfaW50ZWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiaWctaW50ZWdlclwiKSk7XHJcbi8qKlxyXG4gKiBQZWFybERpdmVyIGltcGxlbWVudGF0aW9uIGluIHBsYWluIEphdmFTY3JpcHQuXHJcbiAqL1xyXG5jbGFzcyBQZWFybERpdmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFBlYXJsRGl2ZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cmwgPSBzcG9uZ2VGYWN0b3J5XzEuU3BvbmdlRmFjdG9yeS5pbnN0YW5jZSgpLmNyZWF0ZShcImN1cmxcIik7XHJcbiAgICAgICAgdGhpcy5faGFzaExlbmd0aCA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJIQVNIX0xFTkdUSFwiKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZUxlbmd0aCA9IGN1cmwuZ2V0Q29uc3RhbnQoXCJTVEFURV9MRU5HVEhcIik7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyUm91bmRzID0gY3VybC5nZXRDb25zdGFudChcIk5VTUJFUl9PRl9ST1VORFNcIik7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggPSB0aGlzLl9oYXNoTGVuZ3RoICogMzM7XHJcbiAgICAgICAgdGhpcy5fbm9uY2VMZW5ndGggPSB0aGlzLl9oYXNoTGVuZ3RoIC8gMztcclxuICAgICAgICB0aGlzLl9ub25jZVN0YXJ0ID0gdGhpcy5faGFzaExlbmd0aCAtIHRoaXMuX25vbmNlTGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IE9GRlNFVF9MRU5HVEggPSA0O1xyXG4gICAgICAgIHRoaXMuX25vbmNlSW5pdFN0YXJ0ID0gdGhpcy5fbm9uY2VTdGFydCArIE9GRlNFVF9MRU5HVEg7XHJcbiAgICAgICAgY29uc3QgSU5UX0xFTkdUSCA9IHRoaXMuX25vbmNlTGVuZ3RoIC8gMztcclxuICAgICAgICB0aGlzLl9ub25jZUluY3JlbWVudFN0YXJ0ID0gdGhpcy5fbm9uY2VJbml0U3RhcnQgKyBJTlRfTEVOR1RIO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGEgcHJvb2Ygb2Ygd29yayBvbiB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSB0cnl0ZXMgVGhlIHRyeXRlcyB0byBwZXJmb3JtIHRoZSBwb3cgb24uXHJcbiAgICAgKiBAcGFyYW0gbWluV2VpZ2h0TWFnbml0dWRlIFRoZSBtaW5pbXVtIHdlaWdodCBtYWduaXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgdHJ5dGVzIHByb2R1Y2VkIGJ5IHRoZSBwcm9vZiBvZiB3b3JrLlxyXG4gICAgICovXHJcbiAgICBzZWFyY2hXaXRoVHJ5dGVzKHRyeXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgY29uc3QgY3VybFN0YXRlID0gdGhpcy5wcmVwYXJlKHRyeXRlcyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoU3RhdGVzID0gdGhpcy5zZWFyY2hJbml0KGN1cmxTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoKHNlYXJjaFN0YXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKTtcclxuICAgIH1cclxuICAgIHNlYXJjaChzZWFyY2hTdGF0ZXMsIG1pbldlaWdodE1hZ25pdHVkZSkge1xyXG4gICAgICAgIGxldCBzZWFyY2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRyaXRzID0gbmV3IEludDhBcnJheSh0aGlzLl9oYXNoTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBtaWRTdGF0ZUNvcHkgPSB7XHJcbiAgICAgICAgICAgIGxvdzogc2VhcmNoU3RhdGVzLmxvdy5zbGljZSgpLFxyXG4gICAgICAgICAgICBoaWdoOiBzZWFyY2hTdGF0ZXMuaGlnaC5zbGljZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aGlsZSAoc2VhcmNoaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KG1pZFN0YXRlQ29weSwgdGhpcy5fbm9uY2VJbmNyZW1lbnRTdGFydCwgdGhpcy5faGFzaExlbmd0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgbG93OiBtaWRTdGF0ZUNvcHkubG93LnNsaWNlKCksXHJcbiAgICAgICAgICAgICAgICBoaWdoOiBtaWRTdGF0ZUNvcHkuaGlnaC5zbGljZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHN0YXRlKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9uY2VQcm9iZSA9IHRoaXMuaXNGb3VuZEZhc3Qoc3RhdGUsIG1pbldlaWdodE1hZ25pdHVkZSk7XHJcbiAgICAgICAgICAgIGlmIChub25jZVByb2JlLnRvSlNOdW1iZXIoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5vbmNlT3V0cHV0ID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KDEpO1xyXG4gICAgICAgICAgICAvLyBCaXQgc2NhbiBmb3J3YXJkXHJcbiAgICAgICAgICAgIHdoaWxlIChub25jZU91dHB1dC5hbmQobm9uY2VQcm9iZSkudG9KU051bWJlcigpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBub25jZU91dHB1dCA9IG5vbmNlT3V0cHV0LnNoaWZ0TGVmdCgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWFyY2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9oYXNoTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyaXRzW2ldID1cclxuICAgICAgICAgICAgICAgICAgICAobWlkU3RhdGVDb3B5Lmxvd1tpXS5hbmQobm9uY2VPdXRwdXQpKS50b0pTTnVtYmVyKCkgPT09IDAgPyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbWlkU3RhdGVDb3B5LmhpZ2hbaV0uYW5kKG5vbmNlT3V0cHV0KS50b0pTTnVtYmVyKCkgPT09IDAgPyAtMSA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRyaXRzXzEuVHJpdHMuZnJvbUFycmF5KHRyaXRzKS50b1RyeXRlcygpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtKHNlYXJjaFN0YXRlcykge1xyXG4gICAgICAgIGxldCBjdXJsU2NyYXRjaHBhZEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCByb3VuZCA9IDA7IHJvdW5kIDwgdGhpcy5fbnVtYmVyUm91bmRzOyByb3VuZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cmxTY3JhdGNocGFkID0ge1xyXG4gICAgICAgICAgICAgICAgbG93OiBzZWFyY2hTdGF0ZXMubG93LnNsaWNlKCksXHJcbiAgICAgICAgICAgICAgICBoaWdoOiBzZWFyY2hTdGF0ZXMuaGlnaC5zbGljZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZvciAobGV0IHN0YXRlSW5kZXggPSAwOyBzdGF0ZUluZGV4IDwgdGhpcy5fc3RhdGVMZW5ndGg7IHN0YXRlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxwaGEgPSBjdXJsU2NyYXRjaHBhZC5sb3dbY3VybFNjcmF0Y2hwYWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiZXRhID0gY3VybFNjcmF0Y2hwYWQuaGlnaFtjdXJsU2NyYXRjaHBhZEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJsU2NyYXRjaHBhZEluZGV4IDwgMzY1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VybFNjcmF0Y2hwYWRJbmRleCArPSAzNjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJsU2NyYXRjaHBhZEluZGV4ICs9IC0zNjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnYW1tYSA9IGN1cmxTY3JhdGNocGFkLmhpZ2hbY3VybFNjcmF0Y2hwYWRJbmRleF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb3dYb3JCZXRhID0gY3VybFNjcmF0Y2hwYWQubG93W2N1cmxTY3JhdGNocGFkSW5kZXhdLnhvcihiZXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdEdhbW1hID0gZ2FtbWEubm90KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYU9yTm90R2FtbWEgPSBhbHBoYS5vcihub3RHYW1tYSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IGFscGhhT3JOb3RHYW1tYS5hbmQobG93WG9yQmV0YSk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMubG93W3N0YXRlSW5kZXhdID0gZGVsdGEubm90KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHBoYVhvckdhbW1hID0gYWxwaGEueG9yKGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFN0YXRlcy5oaWdoW3N0YXRlSW5kZXhdID0gYWxwaGFYb3JHYW1tYS5vcihkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbmNyZW1lbnQoc2VhcmNoU3RhdGVzLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gZnJvbUluZGV4OyBpIDwgdG9JbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hTdGF0ZXMubG93W2ldLnRvSlNOdW1iZXIoKSA9PT0gUGVhcmxEaXZlci5MT1dfQklUUykge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU3RhdGVzLmxvd1tpXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMuaGlnaFtpXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkxPV19CSVRTKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hTdGF0ZXMuaGlnaFtpXS50b0pTTnVtYmVyKCkgPT09IFBlYXJsRGl2ZXIuTE9XX0JJVFMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMuaGlnaFtpXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdGF0ZXMubG93W2ldID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuTE9XX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVwYXJlKHRyYW5zYWN0aW9uVHJ5dGVzKSB7XHJcbiAgICAgICAgY29uc3QgY3VybCA9IHNwb25nZUZhY3RvcnlfMS5TcG9uZ2VGYWN0b3J5Lmluc3RhbmNlKCkuY3JlYXRlKFwiY3VybFwiKTtcclxuICAgICAgICBjdXJsLmluaXRpYWxpemUoKTtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvblRyaXRzID0gdHJpdHNfMS5Ucml0cy5mcm9tVHJ5dGVzKHRyYW5zYWN0aW9uVHJ5dGVzKS50b0FycmF5KCk7XHJcbiAgICAgICAgY3VybC5hYnNvcmIodHJhbnNhY3Rpb25Ucml0cywgMCwgdGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjdXJsU3RhdGUgPSBjdXJsLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25Ucml0c1xyXG4gICAgICAgICAgICAuc2xpY2UodGhpcy5fdHJhbnNhY3Rpb25MZW5ndGggLSB0aGlzLl9oYXNoTGVuZ3RoLCB0aGlzLl90cmFuc2FjdGlvbkxlbmd0aClcclxuICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJsU3RhdGVbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGN1cmxTdGF0ZTtcclxuICAgIH1cclxuICAgIHNlYXJjaEluaXQoY3VybFN0YXRlKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBsb3c6IFtdLFxyXG4gICAgICAgICAgICBoaWdoOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY3VybFN0YXRlLmZvckVhY2goKHRyaXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJpdCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuSElHSF9CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5ISUdIX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuTE9XX0JJVFMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5oaWdoW2luZGV4XSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5sb3dbaW5kZXhdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFBlYXJsRGl2ZXIuSElHSF9CSVRTKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMuaGlnaFtpbmRleF0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoUGVhcmxEaXZlci5MT1dfQklUUyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlYXJjaE9mZnNldChzdGF0ZXMsIHRoaXMuX25vbmNlU3RhcnQpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZXM7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hPZmZzZXQoc3RhdGVzLCBvZmZzZXQpIHtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDBdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTI2MzUyNDkxNTMzODcwNzg4MDNcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDBdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTUyNzA0OTgzMDY3NzQxNTc2MDVcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5sb3dbb2Zmc2V0ICsgMV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCItMTAxMDc4MDQ5NzE4OTU2NDQ3M1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmhpZ2hbb2Zmc2V0ICsgMV0gPSBiaWdfaW50ZWdlcl8xLmRlZmF1bHQoXCItODA4NjI0Mzk3NzUxNjUxNTc3N1wiLCAxMCk7XHJcbiAgICAgICAgc3RhdGVzLmxvd1tvZmZzZXQgKyAyXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIjkyMjMzMzY5MjEyMDE5MDIwNzlcIiwgMTApO1xyXG4gICAgICAgIHN0YXRlcy5oaWdoW29mZnNldCArIDJdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTE3OTc5MjE0MjcxMzQ4NzM3XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMubG93W29mZnNldCArIDNdID0gYmlnX2ludGVnZXJfMS5kZWZhdWx0KFwiLTE4MDE0Mzk4Mzc1MjY0MjU3XCIsIDEwKTtcclxuICAgICAgICBzdGF0ZXMuaGlnaFtvZmZzZXQgKyAzXSA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChcIjE4MDE0Mzk4NTA5NDgxOTgzXCIsIDEwKTtcclxuICAgIH1cclxuICAgIGlzRm91bmRGYXN0KHNlYXJjaFN0YXRlcywgbWluV2VpZ2h0TWFnbml0dWRlKSB7XHJcbiAgICAgICAgbGV0IGxhc3RNZWFzdXJlbWVudCA9IGJpZ19pbnRlZ2VyXzEuZGVmYXVsdChQZWFybERpdmVyLkhJR0hfQklUUyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IG1pbldlaWdodE1hZ25pdHVkZSAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHNlYXJjaFN0YXRlcy5sb3dbdGhpcy5faGFzaExlbmd0aCAtIDEgLSBpXTtcclxuICAgICAgICAgICAgY29uc3QgaGlnaCA9IHNlYXJjaFN0YXRlcy5oaWdoW3RoaXMuX2hhc2hMZW5ndGggLSAxIC0gaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd1hvckhpZ2ggPSBsb3cueG9yKGhpZ2gpO1xyXG4gICAgICAgICAgICBjb25zdCBub3RMb3dYb3JIaWdoID0gbG93WG9ySGlnaC5ub3QoKTtcclxuICAgICAgICAgICAgbGFzdE1lYXN1cmVtZW50ID0gbGFzdE1lYXN1cmVtZW50LmFuZChub3RMb3dYb3JIaWdoKTtcclxuICAgICAgICAgICAgaWYgKGxhc3RNZWFzdXJlbWVudC50b0pTTnVtYmVyKCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXN0TWVhc3VyZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblBlYXJsRGl2ZXIuSElHSF9CSVRTID0gLTE7XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QZWFybERpdmVyLkxPV19CSVRTID0gMDtcclxuZXhwb3J0cy5QZWFybERpdmVyID0gUGVhcmxEaXZlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dWaGNteEVhWFpsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WldGeWJFUnBkbVZ5TDNCbFlYSnNSR2wyWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxHdEdRVUVyUlR0QlFVTXZSU3d5UkVGQmQwUTdRVUZGZUVRc2RVTkJRWFZETzBGQlEzWkRMRGhFUVVGcFF6dEJRVWRxUXpzN1IwRkZSenRCUVVOSU8wbEJkVUpKT3p0UFFVVkhPMGxCUTBnN1VVRkRTU3hOUVVGTkxFbEJRVWtzUjBGQlJ5dzJRa0ZCWVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTNKRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUTNoRUxFMUJRVTBzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjRRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1lVRkJZU3hEUVVGRE8xRkJRM2hFTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzcERMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExGVkJRVlVzUTBGQlF6dEpRVU5zUlN4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3huUWtGQlowSXNRMEZCUXl4TlFVRmpMRVZCUVVVc2EwSkJRVEJDTzFGQlF6bEVMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZka01zVFVGQlRTeFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVVZvUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEpRVU42UkN4RFFVRkRPMGxCUlU4c1RVRkJUU3hEUVVGRExGbEJRVzlETEVWQlFVVXNhMEpCUVRCQ08xRkJRek5GTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVWeVFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGT1VNc1RVRkJUU3haUVVGWkxFZEJRVEpDTzFsQlEzcERMRWRCUVVjc1JVRkJSU3haUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTTNRaXhKUVVGSkxFVkJRVVVzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1UwRkRiRU1zUTBGQlF6dFJRVVZHTEU5QlFVOHNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRaaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJSVEZGTEUxQlFVMHNTMEZCU3l4SFFVRXlRanRuUWtGRGJFTXNSMEZCUnl4RlFVRkZMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFVkJRVVVzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1lVRkRiRU1zUTBGQlF6dFpRVVZHTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRmRFSXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFpRVVV2UkN4RlFVRkZMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGFFTXNVVUZCVVN4RFFVRkRPMWxCUTJJc1EwRkJRenRaUVVWRUxFbEJRVWtzVjBGQlZ5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRk5VSXNiVUpCUVcxQ08xbEJRMjVDTEU5QlFVOHNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRuUWtGRGNFUXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETTBNc1EwRkJRenRaUVVWRUxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZGYkVJc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJRM2hETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRMG9zUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRla1FzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5vUml4RFFVRkRPMUZCUTB3c1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eGhRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRkZUeXhUUVVGVExFTkJRVU1zV1VGQmIwTTdVVUZEYkVRc1NVRkJTU3h0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkROVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRGRFUXNUVUZCVFN4alFVRmpMRWRCUVRKQ08yZENRVU16UXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdaMEpCUXpkQ0xFbEJRVWtzUlVGQlJTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRoUVVOc1F5eERRVUZETzFsQlJVWXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTTdaMEpCUTNCRkxFMUJRVTBzUzBGQlN5eEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0blFrRkRkRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRPMmRDUVVOMFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVNMVFpeHRRa0ZCYlVJc1NVRkJTU3hIUVVGSExFTkJRVU03WjBKQlF5OUNMRU5CUVVNN1owSkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTBvc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1owSkJRMmhETEVOQlFVTTdaMEpCUTBRc1RVRkJUU3hMUVVGTExFZEJRVWNzWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVU55UlN4TlFVRk5MRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMEpCUXpkQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlF6TkRMRTFCUVUwc1MwRkJTeXhIUVVGSExHVkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJSVGxETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVNelF5eE5RVUZOTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTjJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETlVRc1EwRkJRenRSUVVOTUxFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVOHNVMEZCVXl4RFFVRkRMRmxCUVc5RExFVkJRVVVzVTBGQmFVSXNSVUZCUlN4UFFVRmxPMUZCUTNSR0xFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRk5CUVZNc1JVRkJSU3hEUVVGRExFZEJRVWNzVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRka01zUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZETTBRc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRia1FzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVOMlJDeERRVUZETzFsQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJRMG9zUlVGQlJTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVXNTMEZCU3l4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETlVRc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4eFFrRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0blFrRkRlRVFzUTBGQlF6dG5Ra0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRFNpeFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExIRkNRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU4wUkN4RFFVRkRPMmRDUVVORUxFdEJRVXNzUTBGQlF6dFpRVU5XTEVOQlFVTTdVVUZEVEN4RFFVRkRPMGxCUTB3c1EwRkJRenRKUVVWUExFOUJRVThzUTBGQlF5eHBRa0ZCZVVJN1VVRkRja01zVFVGQlRTeEpRVUZKTEVkQlFVY3NOa0pCUVdFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRja1FzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1lVRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFGQlEzWkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZETjBVc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUTJ4RExHZENRVUZuUWp0aFFVTllMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03WVVGRE1VVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJZU3hGUVVGRkxFdEJRV0VzUlVGQlJTeEZRVUZGTzFsQlEzUkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZETjBJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNKQ0xFTkJRVU03U1VGRlR5eFZRVUZWTEVOQlFVTXNVMEZCYjBJN1VVRkRia01zVFVGQlRTeE5RVUZOTEVkQlFUSkNPMWxCUTI1RExFZEJRVWNzUlVGQlJTeEZRVUZGTzFsQlExQXNTVUZCU1N4RlFVRkZMRVZCUVVVN1UwRkRXQ3hEUVVGRE8xRkJRMFlzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVZrc1JVRkJSU3hMUVVGaExFVkJRVVVzUlVGQlJUdFpRVU01UXl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTllMRXRCUVVzc1EwRkJRenR2UWtGRFJpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExIRkNRVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8yOUNRVU5xUkN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTnNSQ3hMUVVGTExFTkJRVU03WjBKQlExWXNTMEZCU3l4RFFVRkRPMjlDUVVOR0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN2IwSkJRMmhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YjBKQlEyeEVMRXRCUVVzc1EwRkJRenRuUWtGRFZqdHZRa0ZEU1N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzI5Q1FVTnFSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMSEZDUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxFTkJRVU03VVVGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTklMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRSUVVVMVF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGRlR5eFpRVUZaTEVOQlFVTXNUVUZCT0VJc1JVRkJSU3hOUVVGak8xRkJReTlFTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEhGQ1FVRk5MRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkROVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzY1VKQlFVMHNRMEZCUXl4elFrRkJjMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXh4UWtGQlRTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6VkVMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMSEZDUVVGTkxFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NjVUpCUVUwc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNelJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eHhRa0ZCVFN4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpORUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExIRkNRVUZOTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZETVVRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc2NVSkJRVTBzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPMGxCUlU4c1YwRkJWeXhEUVVGRExGbEJRVzlETEVWQlFVVXNhMEpCUVRCQ08xRkJRMmhHTEVsQlFVa3NaVUZCWlN4SFFVRkhMSEZDUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTI1RUxFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMR3RDUVVGclFpeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZETDBNc1RVRkJUU3hIUVVGSExFZEJRVWNzV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjJSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNwRUxFMUJRVTBzVlVGQlZTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGFrTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEzWkRMR1ZCUVdVc1IwRkJSeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFVkJRVVVzUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTnlReXhMUVVGTExFTkJRVU03V1VGRFZpeERRVUZETzFGQlEwd3NRMEZCUXp0UlFVTkVMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU03U1VGRE0wSXNRMEZCUXpzN1FVRTVUVVFzWlVGQlpUdEJRVU5UTEc5Q1FVRlRMRWRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGREwwTXNaVUZCWlR0QlFVTlRMRzFDUVVGUkxFZEJRVmNzUTBGQlF5eERRVUZETzBGQlNtcEVMR2REUVdkT1F5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vc3JjL3BlYXJsRGl2ZXIvcGVhcmxEaXZlci50cyJdLCJzb3VyY2VSb290IjoiIn0=