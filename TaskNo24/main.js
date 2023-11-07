// Tests for equality and inequality with strings
let name = 'John';
console.log("Is name == 'John'? I predict True.");
console.log(name == 'John');

console.log("Is name == 'Jane'? I predict False.");
console.log(name == 'Jane');

console.log("Is name != 'Jane'? I predict True.");
console.log(name != 'Jane');

console.log("Is name != 'John'? I predict False.");
console.log(name != 'John');

// Tests using the lowercase function
let text = 'HELLO';
console.log("Is text lowercase? I predict False.");
console.log(text.toLowerCase() == text);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number = 10;
console.log("Is number == 10? I predict True.");
console.log(number == 10);

console.log("Is number != 5? I predict True.");
console.log(number != 5);

console.log("Is number > 5? I predict True.");
console.log(number > 5);

console.log("Is number < 20? I predict True.");
console.log(number < 20);

console.log("Is number >= 10? I predict True.");
console.log(number >= 10);

console.log("Is number <= 15? I predict True.");
console.log(number <= 15);

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("Is x > 0 and y < 15? I predict True.");
console.log(x > 0 && y < 15);

console.log("Is x > 0 or y > 15? I predict True.");
console.log(x > 0 || y > 15);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.includes('grape'));
