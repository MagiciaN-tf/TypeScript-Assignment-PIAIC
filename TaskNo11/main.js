let guest = ["Jibran", "Ayesha", "Asad"];

console.log("Oh no! It turns out " + guest[1] + " can't make it to the dinner.");

guest[1] = "Rafay";

for (let i = 0; i < guest.length; i++) {
  console.log("Dear " + guest[i] + ", you are cordially invited to dinner at my place. Please join us!");
}
