const ToInteger = require('es-abstract-to-integer')

/**
 * ECMAScript 2017 (8th Edition): `ToLength` Abstract Operation.
 *
 * The abstract operation ToLength converts argument to an integer suitable for
 * use as the length of an array-like object. It performs the following steps:
 *
 * 1.  Let len be ? ToInteger(argument).
 * 2.  If len ≤ +0, return +0.
 * 3.  Return min(len, 253-1).
 *
 * **NOTE:** This module substitutes:
 *
 * -   [`es-abstract-to-integer`](https://www.npmjs.com/package/es-abstract-to-integer)
 *     for
 *     `ToInteger(argument)`
 */
function ToLength(argument) {
  var MAX_SAFE_INTEGER
  var len = ToInteger(argument)
  if (len <= 0) {
    return 0
  }
  MAX_SAFE_INTEGER = 9007199254740991 // (2^53)-1 ; Number.MAX_SAFE_INTEGER
  return Math.min(len, MAX_SAFE_INTEGER)
}

module.exports = ToLength
