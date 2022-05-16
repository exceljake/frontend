import {
    Transaction,
} from "./transaction.js"

import {
    users
} from "../user/user.js"

import {
    parseTime,
} from "../helpers.js"
/**************************************/
/**************INCOMES*****************/
/**************************************/

// deposit
export function deposit(user, amount) {
    let income = createIncome(user.mobile, "deposit", amount);
    user.incomes.push(income);
    user.balance += amount;
    return user;
}

// create income
// purpose is to create a new transaction
// be called by other income functions
export function createIncome(mobile, type, amount) {
    if (["income", "deposit"].includes(type)) {
        let income = new Transaction(mobile, type, amount);
        income.dateTime = parseTime(income.dateTime);
        return income;
    } else {
        return undefined;
    }
}

//dummy function of createIncome (for testing deleteExpense)
// export function createIncome(mobile, type, amount, id) {
//     if (["income", "deposit"].includes(type)) {
//         let income = new Transaction(mobile, type, amount, id);
//         return income;
//     } else {
//         return undefined;
//     }
// }

// for budget app
// function addIncome
export function addIncome(users, amount, mobile) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    });
    if (found) {
        let income = createIncome(mobile, "income", amount);
        found.balance += amount;
        found.incomes.push(income);
        return found;
    } else {
        return undefined;
    }
}

//dummy function of addIncome
// export function addIncome(users, amount, mobile, id) {
//     let found = users.find((user) => {
//         return user.mobile === mobile;
//     });
//     if (found) {
//         let income = createIncome(mobile, "income", amount, id);
//         found.balance += amount;
//         found.incomes.push(income);
//         return found;
//     } else {
//         return undefined;
//     }
// }

//deleteIncome
export function deleteIncome(mobile, transactionId) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    })
    if (found) {
        let foundId = found.incomes.find((transaction) => {
            return transaction.id === transactionId;
        })
        found.balance -= foundId.amount;
        return found;
    } else {
        return undefined;
    }
}