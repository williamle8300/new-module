
/**
 * Module dependencies.
 */

var test = require('tape');
var arithmFun = require('_/arithm-fun');

/**
 * Tests
 */

test('generic', function (t) {

  t.plan(3);

  t.equal(arithmFun(1), 3);
  t.equal(arithmFun(2), 4);
  t.equal(arithmFun(3), 5);
  
});

