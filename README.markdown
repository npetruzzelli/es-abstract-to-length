# ToLength

A method to convert an argument to an integer suitable for use as the length of
an array-like object. This method follows ECMAScript's specification for the
'ToLength' abstract operation.

Currently, this module only supports the ES2017 (ES8) specification.

## Installation Using [npm](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```
npm install es-abstract-to-integer
```

## Example Usage

```javascript
var toLength = require('es-abstract-to-length')

console.log(toLength(-3.14))     // =>    0
console.log(toLength(3.14))      // =>    3
console.log(toLength(42))        // =>   42
console.log(toLength("9001"))    // => 9001
console.log(toLength(null))      // =>    0
console.log(toLength(false))     // =>    0
console.log(toLength(true))      // =>    1

console.log(toLength("foo"))     // =>    0
console.log(toLength({}))        // =>    0
console.log(toLength([]))        // =>    0

console.log(toLength(-Infinity)) // =>    0
console.log(toLength(Infinity))  // => 9007199254740991
```

## Documentation

-   [API](#api)
-   [ECMAScript Specification References](./docs/ToLength-es2017.markdown)

## API

### ToLength ( argument )

The abstract operation ToLength converts argument to an integer suitable for use
as the length of an array-like object.

A Number value is returned.

A `TypeError` exception may be thrown for arguments that are Symbols or Objects
that lack a `valueOf` method or a `toString` method capable of returning a 
non-object value.

#### argument

Type: `*`

The value to convert.

## Related Projects

-   **[es-abstract](https://github.com/ljharb/es-abstract)**: a single library
    for multiple ECMAScript abstract operations.
