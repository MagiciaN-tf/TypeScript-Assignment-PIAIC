// Magicians - Function to show the names of magicians

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Creating an array of magician's names
  const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Calling the show_magicians() function with the magicians array
  show_magicians(magicians);
  