/*Budget App nav hide and show */

const budgetAppButton = document.querySelector('.budget-app');
const incomeButton = document.querySelector('.budget-app-income');
const expenseButton = document.querySelector('.budget-app-expense');

budgetAppButton.onclick = function() {
    if (incomeButton.classList.contains('hide') || expenseButton.classList.contains('hide')) {
        incomeButton.classList.remove('hide');
        expenseButton.classList.remove('hide');
    } else {
        incomeButton.classList.add('hide');
        expenseButton.classList.add('hide');
    }
}