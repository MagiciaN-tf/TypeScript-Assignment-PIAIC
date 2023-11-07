// Unique Usernames - Program to check if usernames are unique

let current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users = ['user3', 'user6', 'user7', 'user8', 'user9'];

for (let i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i])) {
    console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
  } else {
    console.log("The username '" + new_users[i] + "' is available.");
  }
}
