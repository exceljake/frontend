import { users } from "../user/user.js";
import { setItem, getItem } from "../local-storage.js";
import { dateTimeFormat } from "../helpers.js"

export function Transaction(type, amount) {

    this.id = Math.floor(100000 + Math.random() * 900);
    this.type = type;
    this.amount = amount;
    this.dateTime = dateTimeFormat(new Date());
}

/**************************************/
/**************INCOMES*****************/
/**************************************/

// deposit
// export function deposit(users, amount, mobile) {

//     let found = users.findIndex((user) => user.mobile === mobile);

//     if (!found) return undefined;

//     parseInt(amount);
//     parseInt(users[found].balance);
//     let income = createIncome("deposit", amount);
//     users[found].incomes.push(income);
//     users[found].balance += Number(amount);
//     setItem("userList", users);
//     return income;
// }

// create income
// purpose is to create a new transaction
// be called by other income functions
export function createIncome(type, amount) {
    if (!["income", "deposit"].includes(type)) return undefined;
    return new Transaction(type, amount)
}

// for budget app
// function addIncome
// export function addIncome(type, users, amount, mobile) {
export function addIncome(type, mobile, amount) {
    // JSON.stringify(mobile);
    let found = users.find((user) => user.mobile === Number(mobile));

    if (!found) return undefined;

    found.balance += Number(amount);
    let income = createIncome(type, amount);
    found.incomes.push(income);
    setItem("userList", users);
    return;
}

/**************************************/
/**************EXPENSES****************/
/**************************************/

// withdraw
// export function withdraw(user, amount) {
//     if (user.balance === 0) return undefined;

//     let expense = createExpense("withdraw", amount);
//     user.expenses.push(expense);
//     user.balance -= amount;
//     return user;
// }

// create expense
// purpose is to create a new transaction
// be called by other expense functions
export function createExpense(type, amount) {
    if (!["expense", "withdraw"].includes(type)) return undefined;

    return new Transaction(type, amount);
}

//for budget app
//addExpense
export function addExpense(type, amount, mobile) {
    // export function addExpense(mobile) {

    let found = users.find((user) => user.mobile === Number(mobile));

    if (!found) return undefined;

    found.balance -= Number(amount);
    let expense = createExpense(type, amount);
    found.expenses.push(expense)
    setItem("userList", users);
    return found;
}

/*******************************************/
/**************TRANSFER********************/
/*****************************************/

export function transfer(from, to, amount) {
    let fromIndex = users.findIndex((user) => user.mobile === Number(from))

    let toIndex = users.findIndex((user) => user.mobile === Number(to))

    if (users[fromIndex].balance < Number(amount)) {
        return undefined;
    } else {
        users[fromIndex].balance -= Number(amount);
        users[toIndex].balance += Number(amount);
        let send = new Transaction("expense", Number(amount));
        users[fromIndex].expenses.push(send);
        let receive = new Transaction("income", Number(amount));
        users[toIndex].incomes.push(receive);
        setItem("userList", users);
        return true;
    }
}
/*******************************************/
/**************SHOW HISTORY****************/
/*****************************************/


export function showHistory(users, mobile) {
    //check if user is existing
    //if yes combine user.incomes and user.expenses and then sort by date
    let existing = users.find((user) => user.mobile === mobile);

    if (!existing) return undefined;
    else {
        let transactionHistory = (existing.incomes).concat(existing.expenses);
        transactionHistory.sort(byDate);
        return transactionHistory;
    }
}


// bydate function to arrange dates in transaction history
export function byDate(a, b) {
    return new Date(b.dateTime).valueOf() - new Date(a.dateTime).valueOf();
}

/*******************************************/
/**************TOTAL BALANCE****************/
/*****************************************/

export function totalBalanceTransactionHistory(users, mobile) {
    let existing = users.find((user) => user.mobile === mobile);

    if (!existing) return undefined;

    let totalIncome = existing.incomes.reduce(
        (partialSum, income) => Number(partialSum) + Number(income.amount),
        0
    );

    let totalExpense = existing.expenses.reduce(
        (partialSum, expense) => Number(partialSum) - Number(expense.amount),
        0
    );

    let totalBalance = totalIncome + totalExpense;
    return totalBalance;
}