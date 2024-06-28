// Define and export receivesAFunction
function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      throw new Error("Expected a function");
    }
  }
  
  // Define and export returnsANamedFunction
  function returnsANamedFunction() {
    // Named function definition
    function namedFunction() {
      // Optional: implementation details
    }
    return namedFunction;
  }
  
  // Define and export returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    // Anonymous function definition
    return function() {
      // Optional: implementation details
    };
  }
  
  // Export the functions
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };