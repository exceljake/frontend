import {
    Transaction,
    addIncome,
    addExpense,
    transfer,
    withdraw,
    deposit,
    createIncome,
} from "./transaction.js";
import User, { createUser, users, adminAccount, login, usersHistory } from "./user.js";
let edcel = createUser(1000000002, "password", "edcel");
let jake = createUser(1000000003, "password1", "jake");
deposit(edcel, 400);
withdraw(edcel, 100);
transfer(edcel, jake, 200);
// addExpense(users, 100, 1000000003);
// deposit(jake, 200);
// console.log(edcel);
// console.log(jake);
// console.log(admin);
// console.log(users);
// login(123456, "adminpassword");
// login(1000000003, "password1");
// console.log(edcel);
// console.log(usersHistory);
console.log(usersHistory);