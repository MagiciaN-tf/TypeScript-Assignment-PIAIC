let guest = ["Jibran", "Asad", "Rafay", "Jaweria", "Umair"];

console.log(
  "Unfortunately, the new dinner table won't arrive in time. We can only invite two people for dinner."
);
while (guest.length > 2) {
  let removeguest = guest.pop();
  console.log(
    "Sorry, " + removeguest + ", we won't be able to invite you to dinner."
  );
}

for (let i = 0; i < guest.length; i++);
{
  console.log("Dear" + guest + " you are still invited to the dinner!");
}

guest.length = 0;
console.log("Final guest list:", guest);
