// City Names - Function to format city and country as a string

function city_country(city: string, country: string): string {
    return city + ", " + country;
  }
  
  // Calling the function with different city-country pairs
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("London", "United Kingdom"));
  console.log(city_country("Tokyo", "Japan"));
  