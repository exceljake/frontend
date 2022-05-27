import { createUser } from "../user/user.js"
import { generateRandomPassword } from "../helpers.js"

const mobile = document.querySelector('.mobile')
const fullName = document.querySelector('.fullname')
const balance = document.querySelector('.balance')
const create = document.querySelector('.create-user-submit')

create.onclick = function adminCreateUser() {
    let create = createUser(mobile.value, generateRandomPassword(), fullName.value, balance.value);
    alert(create.balance);
}