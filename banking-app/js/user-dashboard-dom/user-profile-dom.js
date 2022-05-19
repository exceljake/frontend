import { users, } from "../user/user.js";

const profileName = document.querySelector('.upc-text-name');

profileName.textContent = users[1].fullname;

console.log(users);