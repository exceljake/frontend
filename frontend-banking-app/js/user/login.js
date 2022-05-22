import { createUser, login } from "./user.js";
import { loadData } from "../helpers.js";
import { currentUser } from "./user.js"


let loadBtn = document.querySelector("#load-data-btn");
const mobile = document.querySelector('.mobile-login');
const password = document.querySelector('.password-login');
const loginSubmitBtn = document.querySelector('.login-submit');

loadBtn.onclick = function(e) {
    e.preventDefault();
    loadData();
};

loginSubmitBtn.onclick = function(e) {
    e.preventDefault();

    let result = login(mobile.value, password.value);
    if (result !== undefined && result.isAdmin) {
        window.location = "/admin-dashboard.html";
        currentUser(mobile.value);
    }
    if (result !== undefined && result.isAdmin === false) {
        window.location = "/user-dashboard-html/user-profile.html";
        currentUser(mobile.value);
    } else alert("Wrong credentials!");
}