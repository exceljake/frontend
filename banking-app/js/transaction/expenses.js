import {
    Transaction,
} from "./transaction.js"
import {
    users
} from "../user/user.js"
import { parseTime, } from "../helpers.js";

/**************************************/
/**************EXPENSES****************/
/**************************************/

// withdraw
export function withdraw(user, amount) {
    if (user.balance !== 0) {
        let expense = createExpense(user.mobile, "withdraw", amount);
        user.expenses.push(expense);
        user.balance -= amount;
        return user;
    } else {
        return undefined;
    }
}

// create expense
// purpose is to create a new transaction
// be called by other expense functions
export function createExpense(mobile, type, amount) {
    if (["expense", "withdraw"].includes(type)) {
        let expense = new Transaction(mobile, type, amount);
        expense.dateTime = parseTime(expense.dateTime);
        return expense;
    } else {
        return undefined;
    }
}

//dummy function createExpense
// export function createExpense(mobile, type, amount, id) {
//     if (["expense", "withdraw"].includes(type)) {
//         let expense = new Transaction(mobile, type, amount, id);
//         return expense;
//     } else {
//         return undefined;
//     }
// }


//for budget app
//addExpense
export function addExpense(users, amount, mobile, ) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    });

    if (found) {
        let expense = createExpense(mobile, "expense", amount);
        found.balance -= amount;
        found.expenses.push(expense);
        return found;
    } else {
        return undefined;
    }
}

//dummy function of addExpense
// export function addExpense(users, amount, mobile, id) {
//     let found = users.find((user) => {
//         return user.mobile === mobile;
//     });

//     if (found) {
//         let expense = createExpense(mobile, "expense", amount, id);
//         found.balance -= amount;
//         found.expenses.push(expense);
//         return found;
//     } else {
//         return undefined;
//     }
// }

//deleteExpense
//the function finds object through identifier mobile
// then it finds an object inside the expenses through identifier transactionId
//then gets the amount from the found object
//adds it to the user balance

export function deleteExpense(mobile, transactionId) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    })
    if (found) {
        let foundId = found.expenses.find((transaction) => {
            return transaction.id === transactionId;
        })
        found.balance += foundId.amount;
        return found;
    } else {
        return undefined;
    }
}