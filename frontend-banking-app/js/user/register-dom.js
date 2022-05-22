import { User, users, createUser } from "./user.js"
import { setItem, getItem } from "../local-storage.js";

const registerSubmitBtn = document.querySelector('.register-submit-button');
const mobile = document.querySelector('.mobile-register');
const fullName = document.querySelector('.fullname-register');
const password = document.querySelector('.password-register');

registerSubmitBtn.onclick = function(e) {
    e.preventDefault();
    let result = createUser(mobile.value, password.value, fullName.value);
    if (result !== undefined) {
        window.location = "/user-dashboard-html/user-profile.html";
        mobile = parseInt(mobile.value);
        setItem("currentUser", mobile);
    } else {
        alert("User already exists!")
    }
};