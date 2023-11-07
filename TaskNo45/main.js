function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: {}
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0];
        var value = option[1];
        car.options[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);
// Display the car object
console.log(myCar);
