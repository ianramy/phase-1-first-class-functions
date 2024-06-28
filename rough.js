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
// Function receivesAFunction
function receivesAFunction(callback) {
    callback();
}

// Function returnsANamedFunction
function returnsANamedFunction() {
    function namedFunction() {
        console.log('I am a named function!');
    }
    return namedFunction;
}

// Function returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log('I am an anonymous function!');
    }
}

// Exporting the functions if needed in a module environment
module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
  