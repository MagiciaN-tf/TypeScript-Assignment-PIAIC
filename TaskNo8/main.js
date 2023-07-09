let names = ["Rafay", "Talha", "Jibran", "Salman", "Haris"];
let msg = "Hello, [name]! How are you doing today?";
for (let i = 0; i < names.length; i++) {
  let msg2 = msg.replace("[name]", names[i]);
  console.log(msg2);
}
