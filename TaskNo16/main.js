let guest = ["Jibran", "Ayesha", "Asad"];

console.log("Great news! We found a bigger dinner table!");

guest.unshift("Jaweria"); /*unshift() adds a new guest, "Jaweria", to the beginning of the array. */
guest.splice(Math.floor(guest.length / 2), 0, "Rafay"); /* splice() is used to insert a new guest, "Rafay", at the middle index of the array.*/
guest.push("Haris"); /*push() appends a new guest, "Haris", to the end of the array. */

for (let i = 0; i < guest.length; i++) {
  console.log(
    "Dear " +
      guest[i] +
      ", you are cordially invited to dinner at my place. Please join us!"
  );
}

/*Math.floor(guestList.length / 2) is the index at which we want to insert the new element.
Here, we divide the length of the guestList array by 2 and then use Math.floor() to get the rounded down integer value.
This ensures that the new element is inserted at the middle index of the array.
0 represents the number of elements we want to remove from the array.
Since we don't want to remove any elements, we specify 0. */