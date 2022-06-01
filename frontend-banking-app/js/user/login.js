import { login } from "./user.js";
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
    if (Number(mobile.value) === "" || password.value === "") alert("Missing credentials, please try again!");
    else {
        let result = login(mobile.value, password.value);
        if (result === undefined) alert("Wrong credentials. Please try again!");
        else {
            if (result !== undefined && result.isAdmin) {
                window.location = "/admin-dashboard-html/create-user.html";
                alert("Welcome Admin!")
                currentUser(mobile.value);
            } else {
                window.location = "/user-dashboard-html/user-profile.html";
                alert(`Welcome ${result.fullname}!`)
                currentUser(mobile.value);
            }
        }
    }
}