# ToLength

Per the ECMAScript 2017 (8th Edition) specification

## [5.2 Algorithm Conventions](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-algorithm-conventions)

> Calls to abstract operations return Completion Records. Abstract operations
> referenced using the functional application style and the method 
> application style that are prefixed by **?** indicate that ReturnIfAbrupt 
> should be applied to the resulting Completion Record. For example, 
> ? operationName() is equivalent to ReturnIfAbrupt(operationName()). 
> Similarly, ? someValue.operationName() is equivalent to 
> ReturnIfAbrupt(someValue.operationName()).

## Abstract Operation: [7.1.15 `ToLength`](https://www.ecma-international.org/ecma-262/8.0/index.html#sec-tolength)

> The abstract operation ToLength converts argument to an integer suitable for
> use as the length of an array-like object. It performs the following steps:
> 
> 1.  Let len be ? ToInteger(argument).
> 2.  If len ≤ +0, return +0.
> 3.  Return min(len, 253-1).

**NOTE:** This module substitutes:

-   [`es-abstract-to-integer`](https://www.npmjs.com/package/es-abstract-to-integer)
    for
    `ToInteger(argument)`
