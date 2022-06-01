import { User, users, createUser } from "./user.js"
import { setItem, getItem } from "../local-storage.js";

const registerSubmitBtn = document.querySelector('.register-submit-button');
let mobile = document.querySelector('.mobile-register');
const fullName = document.querySelector('.fullname-register');
const password = document.querySelector('.password-register');

registerSubmitBtn.onclick = function(e) {
    e.preventDefault();
    if (Number(mobile.value) === "" || password.value === "" || fullName.value === "") {
        alert("Missing credentials, please try again!");
    } else {
        let result = createUser(mobile.value, password.value, fullName.value, 0);
        if (result !== undefined) {
            mobile = Number(mobile.value);
            setItem("currentUser", mobile);
            alert("Welcome new user!");
            window.location = "/user-dashboard-html/user-profile.html";
        } else {
            alert("User already exists!")
        }
    }
};