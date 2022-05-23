import { getItem } from "../local-storage.js"
// import { users } from "../user/user.js"

/*USER PROFILE*/
const userProfileName = document.querySelector('.upc-text-name');
const userProfileMobile = document.querySelector('.upc-text-mobile');
const userProfileBalance = document.querySelector('.upc-text-balance');

let current = JSON.parse(localStorage.getItem('currentUser'));
var users = JSON.parse(localStorage.getItem('userList'));

function setCurrentUserProfile() {
    let currentUser = users.findIndex((u) => u.mobile === current);
    userProfileName.textContent = users[currentUser].fullname;
    userProfileMobile.textContent = `Mobile: ${users[currentUser].mobile}`;
    userProfileBalance.textContent = `Balance: ₱${users[currentUser].balance}.00`
}

/*USER TRANSACTIONS */


// To Do List 

// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click', function() {
//     var paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerText = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     inputField.value = "";
//     paragraph.addEventListener('click', function() {
//         paragraph.style.textDecoration = "line-through";
//     })
//     paragraph.addEventListener('dblclick', function() {
//         toDoContainer.removeChild(paragraph);
//     })
// })



// INITIALIZATION
setCurrentUserProfile();