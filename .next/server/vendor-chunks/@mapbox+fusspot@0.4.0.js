"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@mapbox+fusspot@0.4.0";
exports.ids = ["vendor-chunks/@mapbox+fusspot@0.4.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@mapbox+fusspot@0.4.0/node_modules/@mapbox/fusspot/lib/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@mapbox+fusspot@0.4.0/node_modules/@mapbox/fusspot/lib/index.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/**\n * Validators are functions which assert certain type.\n * They can return a string which can then be used\n * to display a helpful error message.\n * They can also return a function for a custom error message.\n */\nvar isPlainObject = __webpack_require__(/*! is-plain-obj */ \"(ssr)/./node_modules/.pnpm/is-plain-obj@1.1.0/node_modules/is-plain-obj/index.js\");\nvar xtend = __webpack_require__(/*! xtend */ \"(ssr)/./node_modules/.pnpm/xtend@4.0.2/node_modules/xtend/immutable.js\");\n\nvar DEFAULT_ERROR_PATH = 'value';\nvar NEWLINE_INDENT = '\\n  ';\n\nvar v = {};\n\n/**\n * Runners\n *\n * Take root validators and run assertion\n */\nv.assert = function(rootValidator, options) {\n  options = options || {};\n  return function(value) {\n    var message = validate(rootValidator, value);\n    // all good\n    if (!message) {\n      return;\n    }\n\n    var errorMessage = processMessage(message, options);\n\n    if (options.apiName) {\n      errorMessage = options.apiName + ': ' + errorMessage;\n    }\n\n    throw new Error(errorMessage);\n  };\n};\n\n/**\n * Higher Order Validators\n *\n * validators which take other validators as input\n * and output a new validator\n */\nv.shape = function shape(validatorObj) {\n  var validators = objectEntries(validatorObj);\n  return function shapeValidator(value) {\n    var validationResult = validate(v.plainObject, value);\n\n    if (validationResult) {\n      return validationResult;\n    }\n\n    var key, validator;\n    var errorMessages = [];\n\n    for (var i = 0; i < validators.length; i++) {\n      key = validators[i].key;\n      validator = validators[i].value;\n      validationResult = validate(validator, value[key]);\n\n      if (validationResult) {\n        // return [key].concat(validationResult);\n        errorMessages.push([key].concat(validationResult));\n      }\n    }\n\n    if (errorMessages.length < 2) {\n      return errorMessages[0];\n    }\n\n    // enumerate all the error messages\n    return function(options) {\n      errorMessages = errorMessages.map(function(message) {\n        var key = message[0];\n        var renderedMessage = processMessage(message, options)\n          .split('\\n')\n          .join(NEWLINE_INDENT); // indents any inner nesting\n        return '- ' + key + ': ' + renderedMessage;\n      });\n\n      var objectId = options.path.join('.');\n      var ofPhrase = objectId === DEFAULT_ERROR_PATH ? '' : ' of ' + objectId;\n\n      return (\n        'The following properties' +\n        ofPhrase +\n        ' have invalid values:' +\n        NEWLINE_INDENT +\n        errorMessages.join(NEWLINE_INDENT)\n      );\n    };\n  };\n};\n\nv.strictShape = function strictShape(validatorObj) {\n  var shapeValidator = v.shape(validatorObj);\n  return function strictShapeValidator(value) {\n    var shapeResult = shapeValidator(value);\n    if (shapeResult) {\n      return shapeResult;\n    }\n\n    var invalidKeys = Object.keys(value).reduce(function(memo, valueKey) {\n      if (validatorObj[valueKey] === undefined) {\n        memo.push(valueKey);\n      }\n      return memo;\n    }, []);\n\n    if (invalidKeys.length !== 0) {\n      return function() {\n        return 'The following keys are invalid: ' + invalidKeys.join(', ');\n      };\n    }\n  };\n};\n\nv.arrayOf = function arrayOf(validator) {\n  return createArrayValidator(validator);\n};\n\nv.tuple = function tuple() {\n  var validators = Array.isArray(arguments[0])\n    ? arguments[0]\n    : Array.prototype.slice.call(arguments);\n  return createArrayValidator(validators);\n};\n\n// Currently array validation fails when the first invalid item is found.\nfunction createArrayValidator(validators) {\n  var validatingTuple = Array.isArray(validators);\n  var getValidator = function(index) {\n    if (validatingTuple) {\n      return validators[index];\n    }\n    return validators;\n  };\n\n  return function arrayValidator(value) {\n    var validationResult = validate(v.plainArray, value);\n    if (validationResult) {\n      return validationResult;\n    }\n\n    if (validatingTuple && value.length !== validators.length) {\n      return 'an array with ' + validators.length + ' items';\n    }\n\n    for (var i = 0; i < value.length; i++) {\n      validationResult = validate(getValidator(i), value[i]);\n      if (validationResult) {\n        return [i].concat(validationResult);\n      }\n    }\n  };\n}\n\nv.required = function required(validator) {\n  function requiredValidator(value) {\n    if (value == null) {\n      return function(options) {\n        return formatErrorMessage(\n          options,\n          isArrayCulprit(options.path)\n            ? 'cannot be undefined/null.'\n            : 'is required.'\n        );\n      };\n    }\n    return validator.apply(this, arguments);\n  }\n  requiredValidator.__required = true;\n\n  return requiredValidator;\n};\n\nv.oneOfType = function oneOfType() {\n  var validators = Array.isArray(arguments[0])\n    ? arguments[0]\n    : Array.prototype.slice.call(arguments);\n  return function oneOfTypeValidator(value) {\n    var messages = validators\n      .map(function(validator) {\n        return validate(validator, value);\n      })\n      .filter(Boolean);\n\n    // If we don't have as many messages as no. of validators,\n    // then at least one validator was ok with the value.\n    if (messages.length !== validators.length) {\n      return;\n    }\n\n    // check primitive type\n    if (\n      messages.every(function(message) {\n        return message.length === 1 && typeof message[0] === 'string';\n      })\n    ) {\n      return orList(\n        messages.map(function(m) {\n          return m[0];\n        })\n      );\n    }\n\n    // Complex oneOfTypes like\n    // `v.oneOftypes(v.shape({name: v.string})`, `v.shape({name: v.number}))`\n    // are complex ¯\\_(ツ)_/¯. For the current scope only returning the longest message.\n    return messages.reduce(function(max, arr) {\n      return arr.length > max.length ? arr : max;\n    });\n  };\n};\n\n/**\n * Meta Validators\n * which take options as argument (not validators)\n * and return a new primitive validator\n */\nv.equal = function equal(compareWith) {\n  return function equalValidator(value) {\n    if (value !== compareWith) {\n      return JSON.stringify(compareWith);\n    }\n  };\n};\n\nv.oneOf = function oneOf() {\n  var options = Array.isArray(arguments[0])\n    ? arguments[0]\n    : Array.prototype.slice.call(arguments);\n  var validators = options.map(function(value) {\n    return v.equal(value);\n  });\n\n  return v.oneOfType.apply(this, validators);\n};\n\nv.range = function range(compareWith) {\n  var min = compareWith[0];\n  var max = compareWith[1];\n  return function rangeValidator(value) {\n    var validationResult = validate(v.number, value);\n\n    if (validationResult || value < min || value > max) {\n      return 'number between ' + min + ' & ' + max + ' (inclusive)';\n    }\n  };\n};\n\n/**\n * Primitive validators\n *\n * simple validators which return a string or undefined\n */\nv.any = function any() {\n  return;\n};\n\nv.boolean = function boolean(value) {\n  if (typeof value !== 'boolean') {\n    return 'boolean';\n  }\n};\n\nv.number = function number(value) {\n  if (typeof value !== 'number') {\n    return 'number';\n  }\n};\n\nv.plainArray = function plainArray(value) {\n  if (!Array.isArray(value)) {\n    return 'array';\n  }\n};\n\nv.plainObject = function plainObject(value) {\n  if (!isPlainObject(value)) {\n    return 'object';\n  }\n};\n\nv.string = function string(value) {\n  if (typeof value !== 'string') {\n    return 'string';\n  }\n};\n\nv.func = function func(value) {\n  if (typeof value !== 'function') {\n    return 'function';\n  }\n};\n\nfunction validate(validator, value) {\n  // assertions are optional by default unless wrapped in v.require\n  if (value == null && !validator.hasOwnProperty('__required')) {\n    return;\n  }\n\n  var result = validator(value);\n\n  if (result) {\n    return Array.isArray(result) ? result : [result];\n  }\n}\n\nfunction processMessage(message, options) {\n  // message array follows the convention\n  // [...path, result]\n  // path is an array of object keys / array indices\n  // result is output of the validator\n  var len = message.length;\n\n  var result = message[len - 1];\n  var path = message.slice(0, len - 1);\n\n  if (path.length === 0) {\n    path = [DEFAULT_ERROR_PATH];\n  }\n  options = xtend(options, { path: path });\n\n  return typeof result === 'function'\n    ? result(options) // allows customization of result\n    : formatErrorMessage(options, prettifyResult(result));\n}\n\nfunction orList(list) {\n  if (list.length < 2) {\n    return list[0];\n  }\n  if (list.length === 2) {\n    return list.join(' or ');\n  }\n  return list.slice(0, -1).join(', ') + ', or ' + list.slice(-1);\n}\n\nfunction prettifyResult(result) {\n  return 'must be ' + addArticle(result) + '.';\n}\n\nfunction addArticle(nounPhrase) {\n  if (/^an? /.test(nounPhrase)) {\n    return nounPhrase;\n  }\n  if (/^[aeiou]/i.test(nounPhrase)) {\n    return 'an ' + nounPhrase;\n  }\n  if (/^[a-z]/i.test(nounPhrase)) {\n    return 'a ' + nounPhrase;\n  }\n  return nounPhrase;\n}\n\nfunction formatErrorMessage(options, prettyResult) {\n  var arrayCulprit = isArrayCulprit(options.path);\n  var output = options.path.join('.') + ' ' + prettyResult;\n  var prepend = arrayCulprit ? 'Item at position ' : '';\n\n  return prepend + output;\n}\n\nfunction isArrayCulprit(path) {\n  return typeof path[path.length - 1] == 'number' || typeof path[0] == 'number';\n}\n\nfunction objectEntries(obj) {\n  return Object.keys(obj || {}).map(function(key) {\n    return { key: key, value: obj[key] };\n  });\n}\n\nv.validate = validate;\nv.processMessage = processMessage;\n\nmodule.exports = v;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG1hcGJveCtmdXNzcG90QDAuNC4wL25vZGVfbW9kdWxlcy9AbWFwYm94L2Z1c3Nwb3QvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsc0dBQWM7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHFGQUFPOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZUFBZSxjQUFjLGVBQWU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2IsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2RiaW4vLi9ub2RlX21vZHVsZXMvLnBucG0vQG1hcGJveCtmdXNzcG90QDAuNC4wL25vZGVfbW9kdWxlcy9AbWFwYm94L2Z1c3Nwb3QvbGliL2luZGV4LmpzPzkwOGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBWYWxpZGF0b3JzIGFyZSBmdW5jdGlvbnMgd2hpY2ggYXNzZXJ0IGNlcnRhaW4gdHlwZS5cbiAqIFRoZXkgY2FuIHJldHVybiBhIHN0cmluZyB3aGljaCBjYW4gdGhlbiBiZSB1c2VkXG4gKiB0byBkaXNwbGF5IGEgaGVscGZ1bCBlcnJvciBtZXNzYWdlLlxuICogVGhleSBjYW4gYWxzbyByZXR1cm4gYSBmdW5jdGlvbiBmb3IgYSBjdXN0b20gZXJyb3IgbWVzc2FnZS5cbiAqL1xudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBERUZBVUxUX0VSUk9SX1BBVEggPSAndmFsdWUnO1xudmFyIE5FV0xJTkVfSU5ERU5UID0gJ1xcbiAgJztcblxudmFyIHYgPSB7fTtcblxuLyoqXG4gKiBSdW5uZXJzXG4gKlxuICogVGFrZSByb290IHZhbGlkYXRvcnMgYW5kIHJ1biBhc3NlcnRpb25cbiAqL1xudi5hc3NlcnQgPSBmdW5jdGlvbihyb290VmFsaWRhdG9yLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IHZhbGlkYXRlKHJvb3RWYWxpZGF0b3IsIHZhbHVlKTtcbiAgICAvLyBhbGwgZ29vZFxuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBwcm9jZXNzTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLmFwaU5hbWUpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IG9wdGlvbnMuYXBpTmFtZSArICc6ICcgKyBlcnJvck1lc3NhZ2U7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIEhpZ2hlciBPcmRlciBWYWxpZGF0b3JzXG4gKlxuICogdmFsaWRhdG9ycyB3aGljaCB0YWtlIG90aGVyIHZhbGlkYXRvcnMgYXMgaW5wdXRcbiAqIGFuZCBvdXRwdXQgYSBuZXcgdmFsaWRhdG9yXG4gKi9cbnYuc2hhcGUgPSBmdW5jdGlvbiBzaGFwZSh2YWxpZGF0b3JPYmopIHtcbiAgdmFyIHZhbGlkYXRvcnMgPSBvYmplY3RFbnRyaWVzKHZhbGlkYXRvck9iaik7XG4gIHJldHVybiBmdW5jdGlvbiBzaGFwZVZhbGlkYXRvcih2YWx1ZSkge1xuICAgIHZhciB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUodi5wbGFpbk9iamVjdCwgdmFsdWUpO1xuXG4gICAgaWYgKHZhbGlkYXRpb25SZXN1bHQpIHtcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uUmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBrZXksIHZhbGlkYXRvcjtcbiAgICB2YXIgZXJyb3JNZXNzYWdlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWxpZGF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSB2YWxpZGF0b3JzW2ldLmtleTtcbiAgICAgIHZhbGlkYXRvciA9IHZhbGlkYXRvcnNbaV0udmFsdWU7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUodmFsaWRhdG9yLCB2YWx1ZVtrZXldKTtcblxuICAgICAgaWYgKHZhbGlkYXRpb25SZXN1bHQpIHtcbiAgICAgICAgLy8gcmV0dXJuIFtrZXldLmNvbmNhdCh2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKFtrZXldLmNvbmNhdCh2YWxpZGF0aW9uUmVzdWx0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZXNbMF07XG4gICAgfVxuXG4gICAgLy8gZW51bWVyYXRlIGFsbCB0aGUgZXJyb3IgbWVzc2FnZXNcbiAgICByZXR1cm4gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgZXJyb3JNZXNzYWdlcyA9IGVycm9yTWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGtleSA9IG1lc3NhZ2VbMF07XG4gICAgICAgIHZhciByZW5kZXJlZE1lc3NhZ2UgPSBwcm9jZXNzTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zKVxuICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAuam9pbihORVdMSU5FX0lOREVOVCk7IC8vIGluZGVudHMgYW55IGlubmVyIG5lc3RpbmdcbiAgICAgICAgcmV0dXJuICctICcgKyBrZXkgKyAnOiAnICsgcmVuZGVyZWRNZXNzYWdlO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBvYmplY3RJZCA9IG9wdGlvbnMucGF0aC5qb2luKCcuJyk7XG4gICAgICB2YXIgb2ZQaHJhc2UgPSBvYmplY3RJZCA9PT0gREVGQVVMVF9FUlJPUl9QQVRIID8gJycgOiAnIG9mICcgKyBvYmplY3RJZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgJ1RoZSBmb2xsb3dpbmcgcHJvcGVydGllcycgK1xuICAgICAgICBvZlBocmFzZSArXG4gICAgICAgICcgaGF2ZSBpbnZhbGlkIHZhbHVlczonICtcbiAgICAgICAgTkVXTElORV9JTkRFTlQgK1xuICAgICAgICBlcnJvck1lc3NhZ2VzLmpvaW4oTkVXTElORV9JTkRFTlQpXG4gICAgICApO1xuICAgIH07XG4gIH07XG59O1xuXG52LnN0cmljdFNoYXBlID0gZnVuY3Rpb24gc3RyaWN0U2hhcGUodmFsaWRhdG9yT2JqKSB7XG4gIHZhciBzaGFwZVZhbGlkYXRvciA9IHYuc2hhcGUodmFsaWRhdG9yT2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN0cmljdFNoYXBlVmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgdmFyIHNoYXBlUmVzdWx0ID0gc2hhcGVWYWxpZGF0b3IodmFsdWUpO1xuICAgIGlmIChzaGFwZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIHNoYXBlUmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBpbnZhbGlkS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKS5yZWR1Y2UoZnVuY3Rpb24obWVtbywgdmFsdWVLZXkpIHtcbiAgICAgIGlmICh2YWxpZGF0b3JPYmpbdmFsdWVLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVtby5wdXNoKHZhbHVlS2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtZW1vO1xuICAgIH0sIFtdKTtcblxuICAgIGlmIChpbnZhbGlkS2V5cy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICdUaGUgZm9sbG93aW5nIGtleXMgYXJlIGludmFsaWQ6ICcgKyBpbnZhbGlkS2V5cy5qb2luKCcsICcpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59O1xuXG52LmFycmF5T2YgPSBmdW5jdGlvbiBhcnJheU9mKHZhbGlkYXRvcikge1xuICByZXR1cm4gY3JlYXRlQXJyYXlWYWxpZGF0b3IodmFsaWRhdG9yKTtcbn07XG5cbnYudHVwbGUgPSBmdW5jdGlvbiB0dXBsZSgpIHtcbiAgdmFyIHZhbGlkYXRvcnMgPSBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSlcbiAgICA/IGFyZ3VtZW50c1swXVxuICAgIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgcmV0dXJuIGNyZWF0ZUFycmF5VmFsaWRhdG9yKHZhbGlkYXRvcnMpO1xufTtcblxuLy8gQ3VycmVudGx5IGFycmF5IHZhbGlkYXRpb24gZmFpbHMgd2hlbiB0aGUgZmlyc3QgaW52YWxpZCBpdGVtIGlzIGZvdW5kLlxuZnVuY3Rpb24gY3JlYXRlQXJyYXlWYWxpZGF0b3IodmFsaWRhdG9ycykge1xuICB2YXIgdmFsaWRhdGluZ1R1cGxlID0gQXJyYXkuaXNBcnJheSh2YWxpZGF0b3JzKTtcbiAgdmFyIGdldFZhbGlkYXRvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKHZhbGlkYXRpbmdUdXBsZSkge1xuICAgICAgcmV0dXJuIHZhbGlkYXRvcnNbaW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gYXJyYXlWYWxpZGF0b3IodmFsdWUpIHtcbiAgICB2YXIgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRlKHYucGxhaW5BcnJheSwgdmFsdWUpO1xuICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGluZ1R1cGxlICYmIHZhbHVlLmxlbmd0aCAhPT0gdmFsaWRhdG9ycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnYW4gYXJyYXkgd2l0aCAnICsgdmFsaWRhdG9ycy5sZW5ndGggKyAnIGl0ZW1zJztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gdmFsaWRhdGUoZ2V0VmFsaWRhdG9yKGkpLCB2YWx1ZVtpXSk7XG4gICAgICBpZiAodmFsaWRhdGlvblJlc3VsdCkge1xuICAgICAgICByZXR1cm4gW2ldLmNvbmNhdCh2YWxpZGF0aW9uUmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnYucmVxdWlyZWQgPSBmdW5jdGlvbiByZXF1aXJlZCh2YWxpZGF0b3IpIHtcbiAgZnVuY3Rpb24gcmVxdWlyZWRWYWxpZGF0b3IodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEVycm9yTWVzc2FnZShcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGlzQXJyYXlDdWxwcml0KG9wdGlvbnMucGF0aClcbiAgICAgICAgICAgID8gJ2Nhbm5vdCBiZSB1bmRlZmluZWQvbnVsbC4nXG4gICAgICAgICAgICA6ICdpcyByZXF1aXJlZC4nXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgcmVxdWlyZWRWYWxpZGF0b3IuX19yZXF1aXJlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHJlcXVpcmVkVmFsaWRhdG9yO1xufTtcblxudi5vbmVPZlR5cGUgPSBmdW5jdGlvbiBvbmVPZlR5cGUoKSB7XG4gIHZhciB2YWxpZGF0b3JzID0gQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pXG4gICAgPyBhcmd1bWVudHNbMF1cbiAgICA6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHJldHVybiBmdW5jdGlvbiBvbmVPZlR5cGVWYWxpZGF0b3IodmFsdWUpIHtcbiAgICB2YXIgbWVzc2FnZXMgPSB2YWxpZGF0b3JzXG4gICAgICAubWFwKGZ1bmN0aW9uKHZhbGlkYXRvcikge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodmFsaWRhdG9yLCB2YWx1ZSk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYXMgbWFueSBtZXNzYWdlcyBhcyBuby4gb2YgdmFsaWRhdG9ycyxcbiAgICAvLyB0aGVuIGF0IGxlYXN0IG9uZSB2YWxpZGF0b3Igd2FzIG9rIHdpdGggdGhlIHZhbHVlLlxuICAgIGlmIChtZXNzYWdlcy5sZW5ndGggIT09IHZhbGlkYXRvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgcHJpbWl0aXZlIHR5cGVcbiAgICBpZiAoXG4gICAgICBtZXNzYWdlcy5ldmVyeShmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgbWVzc2FnZVswXSA9PT0gJ3N0cmluZyc7XG4gICAgICB9KVxuICAgICkge1xuICAgICAgcmV0dXJuIG9yTGlzdChcbiAgICAgICAgbWVzc2FnZXMubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICByZXR1cm4gbVswXTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ29tcGxleCBvbmVPZlR5cGVzIGxpa2VcbiAgICAvLyBgdi5vbmVPZnR5cGVzKHYuc2hhcGUoe25hbWU6IHYuc3RyaW5nfSlgLCBgdi5zaGFwZSh7bmFtZTogdi5udW1iZXJ9KSlgXG4gICAgLy8gYXJlIGNvbXBsZXggwq9cXF8o44OEKV8vwq8uIEZvciB0aGUgY3VycmVudCBzY29wZSBvbmx5IHJldHVybmluZyB0aGUgbG9uZ2VzdCBtZXNzYWdlLlxuICAgIHJldHVybiBtZXNzYWdlcy5yZWR1Y2UoZnVuY3Rpb24obWF4LCBhcnIpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoID4gbWF4Lmxlbmd0aCA/IGFyciA6IG1heDtcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogTWV0YSBWYWxpZGF0b3JzXG4gKiB3aGljaCB0YWtlIG9wdGlvbnMgYXMgYXJndW1lbnQgKG5vdCB2YWxpZGF0b3JzKVxuICogYW5kIHJldHVybiBhIG5ldyBwcmltaXRpdmUgdmFsaWRhdG9yXG4gKi9cbnYuZXF1YWwgPSBmdW5jdGlvbiBlcXVhbChjb21wYXJlV2l0aCkge1xuICByZXR1cm4gZnVuY3Rpb24gZXF1YWxWYWxpZGF0b3IodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IGNvbXBhcmVXaXRoKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tcGFyZVdpdGgpO1xuICAgIH1cbiAgfTtcbn07XG5cbnYub25lT2YgPSBmdW5jdGlvbiBvbmVPZigpIHtcbiAgdmFyIG9wdGlvbnMgPSBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSlcbiAgICA/IGFyZ3VtZW50c1swXVxuICAgIDogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIHZhbGlkYXRvcnMgPSBvcHRpb25zLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2LmVxdWFsKHZhbHVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHYub25lT2ZUeXBlLmFwcGx5KHRoaXMsIHZhbGlkYXRvcnMpO1xufTtcblxudi5yYW5nZSA9IGZ1bmN0aW9uIHJhbmdlKGNvbXBhcmVXaXRoKSB7XG4gIHZhciBtaW4gPSBjb21wYXJlV2l0aFswXTtcbiAgdmFyIG1heCA9IGNvbXBhcmVXaXRoWzFdO1xuICByZXR1cm4gZnVuY3Rpb24gcmFuZ2VWYWxpZGF0b3IodmFsdWUpIHtcbiAgICB2YXIgdmFsaWRhdGlvblJlc3VsdCA9IHZhbGlkYXRlKHYubnVtYmVyLCB2YWx1ZSk7XG5cbiAgICBpZiAodmFsaWRhdGlvblJlc3VsdCB8fCB2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgcmV0dXJuICdudW1iZXIgYmV0d2VlbiAnICsgbWluICsgJyAmICcgKyBtYXggKyAnIChpbmNsdXNpdmUpJztcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFByaW1pdGl2ZSB2YWxpZGF0b3JzXG4gKlxuICogc2ltcGxlIHZhbGlkYXRvcnMgd2hpY2ggcmV0dXJuIGEgc3RyaW5nIG9yIHVuZGVmaW5lZFxuICovXG52LmFueSA9IGZ1bmN0aW9uIGFueSgpIHtcbiAgcmV0dXJuO1xufTtcblxudi5ib29sZWFuID0gZnVuY3Rpb24gYm9vbGVhbih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gJ2Jvb2xlYW4nO1xuICB9XG59O1xuXG52Lm51bWJlciA9IGZ1bmN0aW9uIG51bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxufTtcblxudi5wbGFpbkFycmF5ID0gZnVuY3Rpb24gcGxhaW5BcnJheSh2YWx1ZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cbn07XG5cbnYucGxhaW5PYmplY3QgPSBmdW5jdGlvbiBwbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdvYmplY3QnO1xuICB9XG59O1xuXG52LnN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAnc3RyaW5nJztcbiAgfVxufTtcblxudi5mdW5jID0gZnVuY3Rpb24gZnVuYyh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdmdW5jdGlvbic7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbGlkYXRvciwgdmFsdWUpIHtcbiAgLy8gYXNzZXJ0aW9ucyBhcmUgb3B0aW9uYWwgYnkgZGVmYXVsdCB1bmxlc3Mgd3JhcHBlZCBpbiB2LnJlcXVpcmVcbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXZhbGlkYXRvci5oYXNPd25Qcm9wZXJ0eSgnX19yZXF1aXJlZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvcih2YWx1ZSk7XG5cbiAgaWYgKHJlc3VsdCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyByZXN1bHQgOiBbcmVzdWx0XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZShtZXNzYWdlLCBvcHRpb25zKSB7XG4gIC8vIG1lc3NhZ2UgYXJyYXkgZm9sbG93cyB0aGUgY29udmVudGlvblxuICAvLyBbLi4ucGF0aCwgcmVzdWx0XVxuICAvLyBwYXRoIGlzIGFuIGFycmF5IG9mIG9iamVjdCBrZXlzIC8gYXJyYXkgaW5kaWNlc1xuICAvLyByZXN1bHQgaXMgb3V0cHV0IG9mIHRoZSB2YWxpZGF0b3JcbiAgdmFyIGxlbiA9IG1lc3NhZ2UubGVuZ3RoO1xuXG4gIHZhciByZXN1bHQgPSBtZXNzYWdlW2xlbiAtIDFdO1xuICB2YXIgcGF0aCA9IG1lc3NhZ2Uuc2xpY2UoMCwgbGVuIC0gMSk7XG5cbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcGF0aCA9IFtERUZBVUxUX0VSUk9SX1BBVEhdO1xuICB9XG4gIG9wdGlvbnMgPSB4dGVuZChvcHRpb25zLCB7IHBhdGg6IHBhdGggfSk7XG5cbiAgcmV0dXJuIHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbidcbiAgICA/IHJlc3VsdChvcHRpb25zKSAvLyBhbGxvd3MgY3VzdG9taXphdGlvbiBvZiByZXN1bHRcbiAgICA6IGZvcm1hdEVycm9yTWVzc2FnZShvcHRpb25zLCBwcmV0dGlmeVJlc3VsdChyZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gb3JMaXN0KGxpc3QpIHtcbiAgaWYgKGxpc3QubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBsaXN0WzBdO1xuICB9XG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiBsaXN0LmpvaW4oJyBvciAnKTtcbiAgfVxuICByZXR1cm4gbGlzdC5zbGljZSgwLCAtMSkuam9pbignLCAnKSArICcsIG9yICcgKyBsaXN0LnNsaWNlKC0xKTtcbn1cblxuZnVuY3Rpb24gcHJldHRpZnlSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiAnbXVzdCBiZSAnICsgYWRkQXJ0aWNsZShyZXN1bHQpICsgJy4nO1xufVxuXG5mdW5jdGlvbiBhZGRBcnRpY2xlKG5vdW5QaHJhc2UpIHtcbiAgaWYgKC9eYW4/IC8udGVzdChub3VuUGhyYXNlKSkge1xuICAgIHJldHVybiBub3VuUGhyYXNlO1xuICB9XG4gIGlmICgvXlthZWlvdV0vaS50ZXN0KG5vdW5QaHJhc2UpKSB7XG4gICAgcmV0dXJuICdhbiAnICsgbm91blBocmFzZTtcbiAgfVxuICBpZiAoL15bYS16XS9pLnRlc3Qobm91blBocmFzZSkpIHtcbiAgICByZXR1cm4gJ2EgJyArIG5vdW5QaHJhc2U7XG4gIH1cbiAgcmV0dXJuIG5vdW5QaHJhc2U7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yTWVzc2FnZShvcHRpb25zLCBwcmV0dHlSZXN1bHQpIHtcbiAgdmFyIGFycmF5Q3VscHJpdCA9IGlzQXJyYXlDdWxwcml0KG9wdGlvbnMucGF0aCk7XG4gIHZhciBvdXRwdXQgPSBvcHRpb25zLnBhdGguam9pbignLicpICsgJyAnICsgcHJldHR5UmVzdWx0O1xuICB2YXIgcHJlcGVuZCA9IGFycmF5Q3VscHJpdCA/ICdJdGVtIGF0IHBvc2l0aW9uICcgOiAnJztcblxuICByZXR1cm4gcHJlcGVuZCArIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheUN1bHByaXQocGF0aCkge1xuICByZXR1cm4gdHlwZW9mIHBhdGhbcGF0aC5sZW5ndGggLSAxXSA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcGF0aFswXSA9PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gb2JqZWN0RW50cmllcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB7IGtleToga2V5LCB2YWx1ZTogb2JqW2tleV0gfTtcbiAgfSk7XG59XG5cbnYudmFsaWRhdGUgPSB2YWxpZGF0ZTtcbnYucHJvY2Vzc01lc3NhZ2UgPSBwcm9jZXNzTWVzc2FnZTtcblxubW9kdWxlLmV4cG9ydHMgPSB2O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@mapbox+fusspot@0.4.0/node_modules/@mapbox/fusspot/lib/index.js\n");

/***/ })

};
;