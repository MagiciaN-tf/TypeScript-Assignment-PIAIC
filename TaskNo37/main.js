function make_shirt(size = "L", message = "I love TypeScript") {
    console.log("The shirt size is " + size + " and it has the message: '" + message + "'.");
  }
  
  // Calling the function with diferent arguments
  make_shirt(); // Large shirt with default message
  make_shirt("M"); // Medium shirt with default message
  make_shirt("S", "JavaScript is awesome!"); // Small shirt with custom message
  