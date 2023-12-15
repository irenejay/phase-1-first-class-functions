const receivesAFunction = function(callback) {
    console.log("Calling the provided callback function:");
    callback();
  };
  
  // Example callback function
  const myCallback = function() {
    console.log("This is the callback function!");
  };
  
  // Test the function
  receivesAFunction(myCallback);


  const returnsANamedFunction = function() {
    // Define a named function
    const namedFunction = function() {
      console.log("This is the named function!");
    };
  
    // Return the named function
    return namedFunction;
  };
  
  // Call the function to get the named function
  const myNamedFunction = returnsANamedFunction();
  
  // Test the named function
  myNamedFunction();
  

  const returnsAnAnonymousFunction = function() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function!");
    };
  };
  
  // Call the function to get the anonymous function
  const myAnonymousFunction = returnsAnAnonymousFunction();
  
  // Test the anonymous function
  myAnonymousFunction();