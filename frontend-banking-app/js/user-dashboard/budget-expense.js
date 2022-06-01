import { addExpense, Transaction, createExpense } from "../transaction/transaction.js";
import { setItem } from "../local-storage.js";
import { users } from "../user/user.js";

//Modal Expense

const expenseAdd = document.querySelector('.expense-add');
const modalContainerExpense = document.querySelector('.modal-container-expense');
const expenseSubmit = document.querySelector('.expense-submit');
const expenseClose = document.querySelector('.close-expense');
const expensePrice = document.querySelector('.expense-price')

const tBody = document.querySelector('tbody');

const tableSection = document.querySelector('.table-section');

let current = JSON.parse(localStorage.getItem('currentUser'));

expenseClose.addEventListener('click', () => {
    modalContainerExpense.classList.remove('show');
    tableSection.classList.remove('hide');
})

expenseAdd.onclick = function(e) {
    e.preventDefault();
    modalContainerExpense.classList.add('show');
    tableSection.classList.add('hide');
}

expenseSubmit.onclick = function() {
    let expense = addExpense("expense", Number(expensePrice.value), Number(current));
    alert("Successfully added an expense!");
    document.location.reload(true);
    // alert(currentUserIndex);
}


let currentUserIndex = users.findIndex((u) => u.mobile === current);
for (let i = 0; i < users[currentUserIndex].expenses.length; i++) {
    tBody.innerHTML += `
    <tr>
    <td>${users[currentUserIndex].expenses[i].id}</td>
    <td>${users[currentUserIndex].expenses[i].amount}</td>
    <td>${users[currentUserIndex].expenses[i].dateTime}</td>
    </tr>`;
}

//Delete Expense

const deleteBtn = document.querySelector('.expense-delete');

deleteBtn.onclick = function() {
    let totalExpense = users[currentUserIndex].expenses.reduce(
        (partialSum, expense) => Number(partialSum) - Number(expense.amount),
        0
    );
    const expensesLength = users[currentUserIndex].expenses.length;
    users[currentUserIndex].expenses.splice(0, expensesLength);
    users[currentUserIndex].balance -= totalExpense;
    setItem("userList", users);
    document.location.reload(true);
};