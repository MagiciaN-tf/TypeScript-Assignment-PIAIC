function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Initial array of magicians
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call make_great to modify the magicians' names
make_great(magicians);

// Call show_magicians to display the modified list
show_magicians(magicians);
