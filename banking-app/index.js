import {
    Transaction,
    addIncome,
    addExpense,
    transfer,
    // totalBalance,
    withdraw,
    deposit,
} from "./transaction.js";
import User, { createUser, users } from "./user.js";
let edcel = createUser(1000000002, "password", "edcel");
let jake = createUser(1000000003, "password1", "jake")
deposit(edcel, 400);
transfer(edcel, jake, 200)
console.log(edcel);
console.log(jake);