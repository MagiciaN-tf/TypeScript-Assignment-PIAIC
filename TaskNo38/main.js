function describe_city(city, country = "Unknown") {
    console.log(city + " is in " + country + ".");
  }
  
  // Calling the function for different cities
  describe_city("Karachi", "Pakistan");
  describe_city("Paris", "France");
  describe_city("Sydney"); // Default country (Unknown)
  
  