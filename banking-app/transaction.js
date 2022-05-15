import { users, } from "./user.js";

export function Transaction(mobile, type, amount, date) {

    this.id = Math.floor(100000 + Math.random() * 900);
    this.mobile = mobile;
    this.type = type;
    this.amount = amount;
    this.dateTime = date;
    // this.dateTime = new Date();
    // this.date = curren;
    // this.time = currentTime;
}

// function addZero(num) {
//     return num < 10 ? `0${num}` : num;
// }

export function addIncome(users, amount, mobile) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    });
    if (found) {
        let income = createIncome(found, "income", amount);
        found.balance += amount;
        found.incomes.push(income);
        return found;
    } else {
        return undefined;
    }
}

export function addExpense(users, amount, mobile) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    });

    if (found && found.balance !== 0) {
        let expense = createExpense("expense", amount);
        found.balance -= amount;
        found.expenses.push(expense);
        return found;
    } else {
        return undefined;
    }
}
// create income
export function createIncome(mobile, type, amount, date) {
    if (["income", "deposit"].includes(type)) {
        let income = new Transaction(mobile, type, amount, date);
        return income;
    } else {
        return undefined;
    }
}

// export function createIncome(mobile, type, amount) {
//     if (["income", "deposit"].includes(type)) {
//         let income = new Transaction(mobile, type, amount);
//         return income;
//     } else {
//         return undefined;
//     }
// }

// create expense
//dummy function
export function createExpense(mobile, type, amount, date) {
    if (["expense", "withdraw"].includes(type)) {
        let expense = new Transaction(mobile, type, amount, date);
        return expense;
    } else {
        return undefined;
    }
}
// export function createExpense(mobile, type, amount) {
//     if (["expense", "withdraw"].includes(type)) {
//         let expense = new Transaction(mobile, type, amount);
//         return expense;
//     } else {
//         return undefined;
//     }
// }
// deposit
//dummy function to see sort by date
export function deposit(user, amount, date) {
    let income = createIncome(user.mobile, "deposit", amount, date);
    user.incomes.push(income);
    user.balance += amount;
    return user;
}

// export function deposit(user, amount) {
//     let income = createIncome(user.mobile, "deposit", amount);
//     user.incomes.push(income);
//     user.balance += amount;
//     return user;
// }



export function showHistory(users, mobile) {
    //check if user is existing
    //if yes combine user.incomes and user.expenses and then sort by date
    //
    // let history = [];
    let existing = users.find((user) => {
        return user.mobile === mobile;
    });
    if (existing) {
        let incomesExpensesArray = (existing.incomes).concat(existing.expenses);
        /*
        // SORT by date
        console.log(incomesExpensesArray.sort(byDate));
        */
        /*
        //current progress been able to show amounts of all that the deposit as type
        //blockers: adding them together
        
        for (let i = 0; i < incomesExpensesArray.length; i++) {
        if (incomesExpensesArray[i].type === "deposit") {
        console.log(incomesExpensesArray[i]);
        */
    }
}

function byDate(a, b) {
    return new Date(b.dateTime).valueOf() - new Date(a.dateTime).valueOf();
}


// compute total balance
// current problem, cant implement to showHistory
// export function totalBalance(users, mobile) {
//     let user = users.find((u) => {
//         return u.mobile === mobile;
//     });
//     if (user) {
//         let totalIncome = user.incomes.reduce(
//             (partialSum, income) => partialSum + income.amount,
//             0
//         );

//         let totalExpense = user.expenses.reduce(
//             (partialSum, expense) => partialSum - expense.amount,
//             0
//         );
//         user.balance = user.balance + totalIncome - totalExpense;
//         return user;
//     } else {
//         return undefined;
//     }
// }

export function transfer(from, to, amount) {
    if (from.balance > amount) {
        from.balance -= amount;
        to.balance += amount;
        let send = new Transaction(from.mobile, "expense", amount);
        from.expenses.push(send);
        let receive = new Transaction(to.mobile, "income", amount);
        to.incomes.push(receive);
        return true;
    } else {
        return undefined;
    }
}


// withdraw
// dummy function to check the sort.date
export function withdraw(user, amount, date) {
    if (user.balance !== 0) {
        let expense = createExpense(user.mobile, "withdraw", amount, date);
        user.expenses.push(expense);
        user.balance -= amount;
        return user;
    } else {
        return undefined;
    }
}

// export function withdraw(user, amount) {
//     if (user.balance !== 0) {
//         let expense = createExpense(user.mobile, "withdraw", amount);
//         user.expenses.push(expense);
//         user.balance -= amount;
//         return user;
//     } else {
//         return undefined;
//     }
// }


//spare code
//for (let i; i < users.length; i++) {
// && users[i].mobile === from.mobile && users[i].mobile === to.mobile