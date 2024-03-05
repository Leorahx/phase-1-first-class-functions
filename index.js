// The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

// The returnsANamedFunction function should:
// take no arguments
// return a named function

// The returnsAnAnonymousFunction function should:
// take no arguments
// return an anonymous function

function receivesAFunction(callback) {
  callback();
}

receivesAFunction(() => "Hello World");

function returnsANamedFunction() {
  return function cat() {
    return "Hello I am a cat";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "I am an anonymous function";
  };
}
