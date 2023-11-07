function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string, modelName: string, options: { [key: string]: any } } {
    const car: { manufacturer: string, modelName: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: {}
    };

    for (const option of options) {
        const key = option[0];
        const value = option[1];
        car.options[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);

// Display the car object
console.log(myCar);