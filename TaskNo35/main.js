let animals = ['Dog', 'Cat', 'Rabbit'];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  
  console.log(animal);

  if (animal === 'Dog') {
    console.log("A " + animal + " would make a great pet.");
  } else if (animal === 'Cat') {
    console.log("A " + animal + " would make a great companion.");
  } else if (animal === 'Rabbit') {
    console.log("A " + animal + " would make a great addition to a family.");
  }
}

console.log("Any of these animals would make a great pet!");
