// import { userInitialData, loadData } from "../helpers.js";
// import { createUser } from "../user/user.js";

const homeBtn = document.querySelector('.home-button'),
    loginBtn = document.querySelector('.login-button'),
    registerBtn = document.querySelector('.register-button'),

    homeSection = document.querySelector('.home-section'),
    loginSection = document.querySelector('.login-section'),
    registerSection = document.querySelector('.register-section');

homeBtn.onclick = function() {
    homeSection.classList.remove('hide');
    loginSection.classList.add('hide');
    registerSection.classList.add('hide');
}

loginBtn.onclick = function() {
    homeSection.classList.add('hide');
    loginSection.classList.remove('hide');
    registerSection.classList.add('hide');
}

registerBtn.onclick = function() {
    homeSection.classList.add('hide');
    loginSection.classList.add('hide');
    registerSection.classList.remove('hide');
}

/*LOAD DATA */
const loadInitialData = document.querySelector('.load-data');

loadInitialData.onclick = () => {
    loadData();
}