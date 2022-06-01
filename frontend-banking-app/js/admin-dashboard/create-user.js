import { createUser } from "../user/user.js"
import { generateRandomPassword } from "../helpers.js"

const mobile = document.querySelector('.mobile')
const fullName = document.querySelector('.fullname')
const balance = document.querySelector('.balance')
const create = document.querySelector('.create-user-submit')

create.onclick = function adminCreateUser() {
    let create = createUser(Number(mobile.value), generateRandomPassword(), fullName.value, Number(balance.value));
    alert("Created new account!");
};