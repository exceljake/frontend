import {
    parseTime,
} from "./helpers.js"

import {
    users,
    adminAccount,
    User,
    createUser,
    register,
    login,
} from "./user/user.js"

import {
    Transaction,
    transfer,
    showHistory,
    byDate,
    totalBalanceTransactionHistory,

} from "./transaction/transaction.js"

import {
    withdraw,
    createExpense,
    addExpense,
    deleteExpense,
} from "./transaction/expenses.js"

import {
    deposit,
    createIncome,
    addIncome,
    deleteIncome,
} from "./transaction/incomes.js"

let edcel = createUser(1000000002, "password", "edcel");
// let jake = createUser(1000000003, "password", "jake");
// let jake = createUser(1000000003, "password1", "jake");

deposit(edcel, 600)
deposit(edcel, 900)
    // addExpense(users, 100, 1000000002)
    // addExpense(users, 100, 1000000002)
withdraw(edcel, 300)
withdraw(edcel, 400)

// deleteExpense(1000000002, 100279)
// console.log(edcel)
// console.log(showHistory(users, 1000000002));
// showHistory(users, 1000000002);
// totalBalanceTransactionHistory(users, 1000000002)
// console.log(edcel);
console.log(showHistory(users, 1000000002))
console.log(totalBalanceTransactionHistory(users, 1000000002))