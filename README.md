# rpn

[![Build Status](https://travis-ci.org/KenanY/rpn.svg?branch=master)](https://travis-ci.org/KenanY/rpn)
[![Dependency Status](https://gemnasium.com/KenanY/rpn.svg)](https://gemnasium.com/KenanY/rpn)

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

Evalutes the postfix `expression` and returns the result.