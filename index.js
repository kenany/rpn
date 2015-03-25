function rpn(postfix) {
  if (postfix.length === 0) {
    return 0;
  }

  // Split into array of tokens
  postfix = postfix.split(/\s+/);

  var stack = [];

  for (var i = 0; i < postfix.length; i++) {
    var token = postfix[i];

    // Token is a value, push it onto the stack
    if (token == +token) {
      stack.push(parseFloat(token));
    }

    // Token is operator
    else {

      // Every operation requires two arguments
      if (stack.length < 2) {
        throw new Error('Insufficient values in expression.');
      }

      // Pop two items from the top of the stack and push the result of the
      // operation onto the stack.
      var y = stack.pop();
      var x = stack.pop();
      stack.push(eval(x + token + ' ' + y));
    }
  }

  if (stack.length > 1) {
    throw new Error('Inputted expression has too many values.');
  }

  return stack.pop();
}

module.exports = rpn;
