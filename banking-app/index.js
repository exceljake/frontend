import {
    Transaction,
    addIncome,
    addExpense,
    transfer,
    withdraw,
    deposit,
    createIncome,
    showHistory,
} from "./transaction.js";
import User, {
    createUser,
    users,
    adminAccount,
    login,
} from "./user.js";
let edcel = createUser(1000000002, "password", "edcel");
// let jake = createUser(1000000003, "password", "jake");
// let jake = createUser(1000000003, "password1", "jake");
deposit(edcel, 400, '2021-12-07');
deposit(edcel, 400, '2021-12-25');
// // transfer(edcel, jake, 200);
withdraw(edcel, 100, '2021-12-01');
withdraw(edcel, 100, '2021-12-12');
// deposit(jake, 200)
// transfer(edcel, jake, 200);
// addExpense(users, 100, 1000000003);
// deposit(jake, 200);
// console.log(edcel);
// console.log(jake);
// console.log(admin);
// console.log(edcel);
// console.log(edcel);
// console.log(showHistory(users, 1000000002));
showHistory(users, 1000000002);