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
