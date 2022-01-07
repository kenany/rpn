# rpn

Reverse Polish Notation implementation.

## Example

``` javascript
var rpn = require('rpn');

rpn('3 4 +');
// => 7
```

## Installation

``` bash
$ npm install rpn
```

## API

``` javascript
var rpn = require('rpn');
```

### rpn(expression)

Evaluates the postfix `expression` and returns the result.
