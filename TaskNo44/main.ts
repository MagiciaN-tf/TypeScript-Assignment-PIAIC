function orderSandwich(...items: string[]): void {
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please select some items.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
}

// Call the function with different numbers of arguments
orderSandwich("Lettuce", "Tomato", "Cheese");
orderSandwich("Ham", "Turkey", "Bacon", "Swiss Cheese", "Mustard");
orderSandwich("Peanut Butter", "Jelly");

