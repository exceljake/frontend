import { addIncome, Transaction, createIncome } from "../transaction/transaction.js";
import { getItem, setItem } from "../local-storage.js";
import { users } from "../user/user.js";


// MODAL INCOME

const incomeAdd = document.querySelector('.income-add');
const modalContainer = document.querySelector('.modal-container');
const incomeSubmit = document.querySelector('.income-submit');
const incomeClose = document.querySelector('.close-income');

const tBody = document.querySelector('tbody');

const tableSection = document.querySelector('.table-section');

const incomePrice = document.querySelector('.income-price');

let current = JSON.parse(localStorage.getItem('currentUser'));
let currentUserIndex = users.findIndex((u) => u.mobile === current);


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
    let income = addIncome("income", Number(current), Number(incomePrice.value));
    alert("Successfully added an income!");
    document.location.reload(true);
}

for (let i = 0; i < users[currentUserIndex].incomes.length; i++) {
    tBody.innerHTML += `
    <tr>
    <td>${users[currentUserIndex].incomes[i].id}</td>
    <td>${users[currentUserIndex].incomes[i].amount}</td>
    <td>${users[currentUserIndex].incomes[i].dateTime}</td>
    </tr>`;
}

//Delete income

const deleteBtn = document.querySelector('.income-delete');

deleteBtn.onclick = function() {
    let totalIncome = users[currentUserIndex].incomes.reduce(
        (partialSum, income) => Number(partialSum) + Number(income.amount),
        0
    );
    const incomesLength = users[currentUserIndex].incomes.length;
    users[currentUserIndex].incomes.splice(0, incomesLength);
    users[currentUserIndex].balance -= totalIncome;
    setItem("userList", users);
    document.location.reload(true);
};