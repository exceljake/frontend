import { addIncome, Transaction, createIncome } from "../transaction/transaction.js";
import { getItem } from "../local-storage.js";
import { users } from "../user/user.js";


// MODAL INCOME

const incomeAdd = document.querySelector('.income-add');
const modalContainer = document.querySelector('.modal-container');
const incomeSubmit = document.querySelector('.income-submit');
const incomeClose = document.querySelector('.close-income');

const tBody = document.querySelector('tbody');

const tableSection = document.querySelector('.table-section');
const table = document.querySelector('.table');

// const incomeType = document.querySelector('.income-type');
const incomePrice = document.querySelector('.income-price');

let current = JSON.parse(localStorage.getItem('currentUser'));
// let users

incomeClose.addEventListener('click', () => {
    modalContainer.classList.remove('show');
    tableSection.classList.remove('hide');
})

incomeAdd.onclick = function(e) {
    e.preventDefault();
    modalContainer.classList.add('show');
    tableSection.classList.add('hide');
}

incomeSubmit.onclick = function() {
    // e.preventDefault();
    parseInt(incomePrice.value);
    let income = addIncome("income", users, incomePrice.value, current);
    alert("Successfully added an income!");
    document.location.reload(true);
    // alert(currentUserIndex);
}

// table.onclick = (e) => {
//     if (!e.target.classList.contains('deleteBtn')) {
//         return;
//     }
//     const btn = e.target;
//     btn.closest('tr').remove();
// }

const deleteBtn = document.querySelector('.deleteBtn');
let currentUserIndex = users.findIndex((u) => u.mobile === current);
for (let i = 0; i < users[currentUserIndex].incomes.length; i++) {
    tBody.innerHTML += `
    <tr>
    <td>${users[currentUserIndex].incomes[i].id}</td>
    <td>${users[currentUserIndex].incomes[i].amount}</td>
    <td>${users[currentUserIndex].incomes[i].dateTime}</td>
    <td><button class="deleteBtn">Delete</button><td/>
    </tr>`;
}