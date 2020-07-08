var test = require('tape');
var rpn = require('../');

test('exports', function(t) {
  t.plan(1);

  t.ok(typeof rpn === 'function');
});

test('works', function(t) {
  var EXPRESSIONS = [
    ['0', 0],
    ['3 4 +', 7],
    ['3.5 4.5 +', 8],
    ['3 4 - 5 +', 4],
    ['4 5 + 6 *', 54],
    ['6 4 5 + *', 54],
    ['2 2 3 3 / * /', 1],
    ['5 1 2 + 4 * + 3 -', 14]
  ];

  t.plan(EXPRESSIONS.length);

  EXPRESSIONS.forEach(function(expression) {
    t.equal(rpn(expression[0]), expression[1], expression[0]);
  });
});

test('returns zero for empty expression', function(t) {
  t.plan(1);

  t.equal(rpn(''), 0);
});

test('throws on insufficient values', function(t) {
  t.plan(1);

  t.throws(rpn.bind(null, '3 +'), new RegExp(/Insufficient/));
});

test('throws on too many values', function(t) {
  t.plan(1);

  t.throws(rpn.bind(null, '1 2 + 3'), new RegExp(/too many/));
});
