let PlacesToVisit = ["Japan", "Turkey", "Islamabad", "Germany", "America"];
console.log("Original Order:");
console.log(PlacesToVisit);

console.log("Alphabetical Order:");
console.log([...PlacesToVisit].sort());

console.log("Original order (still intact):");
console.log(PlacesToVisit);

console.log("Reverse alphabetical order:");
console.log([...PlacesToVisit].sort().reverse());

console.log("Original order (still intact):");
console.log(PlacesToVisit);

console.log("Reversed Order:");
console.log(PlacesToVisit.reverse());

console.log("Reversed Order(Original):");
console.log(PlacesToVisit.reverse());

console.log("Alphabetical Order:");
PlacesToVisit.sort();
console.log(PlacesToVisit);

console.log("Reversed Order:");
PlacesToVisit.reverse();
console.log(PlacesToVisit);