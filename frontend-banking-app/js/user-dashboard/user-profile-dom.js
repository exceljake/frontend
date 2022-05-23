import { addIncome, Transaction, createIncome } from "../transaction/transaction.js";
import { getItem } from "../local-storage.js";
import { users } from "../user/user.js";


// MODAL INCOME

const incomeAdd = document.querySelector('.income-add');
const modalContainer = document.querySelector('.modal-container');
const incomeSubmit = document.querySelector('.income-submit');

// const incomeType = document.querySelector('.income-type');
const incomePrice = document.querySelector('.income-price');

let current = JSON.parse(localStorage.getItem('currentUser'));

incomeSubmit.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})

incomeAdd.onclick = function(e) {
    e.preventDefault();
    modalContainer.classList.add('show');
}

incomeSubmit.onclick = function(e) {
    e.preventDefault();
    parseInt(incomePrice.value);
    let result = addIncome(users, incomePrice.value, current);
    alert(result);
    return true;
}

//Modal Expense

const expenseAdd = document.querySelector('.expense-add');
const modalContainerExpense = document.querySelector('.modal-container-expense');
const expenseSubmit = document.querySelector('.expense-submit');

expenseSubmit.addEventListener('click', () => {
    modalContainerExpense.classList.remove('show');
})

expenseAdd.onclick = function(e) {
    e.preventDefault();
    modalContainerExpense.classList.add('show');
}