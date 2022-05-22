import {
    users
} from "../user/user.js"

export function Transaction(type, amount) {

    this.id = Math.floor(100000 + Math.random() * 900);
    this.type = type;
    this.amount = amount;
    this.dateTime = new Date();
}

/**************************************/
/**************INCOMES*****************/
/**************************************/

// deposit
export function deposit(user, amount) {
    let income = createIncome("deposit", amount);
    user.incomes.push(income);
    user.balance += amount;
    return user;
}

// create income
// purpose is to create a new transaction
// be called by other income functions
export function createIncome(type, amount) {
    if (!["income", "deposit"].includes(type)) return undefined;
    return new Transaction(type, amount)
}

// for budget app
// function addIncome
export function addIncome(users, amount, mobile) {
    let found = users.find((user) => user.mobile === mobile);

    if (!found) return undefined;

    let income = createIncome("income", amount);
    found.balance += amount;
    found.incomes.push(income);
    return found;
}

//deleteIncome
export function deleteIncome(mobile, transactionId) {
    let found = users.find((user) => user.mobile === mobile);

    if (!found) return undefined;

    let foundId = found.incomes.find((transaction) => transaction.id === transactionId);

    found.balance -= foundId.amount; //updating the balance
    return found;
}

/**************************************/
/**************EXPENSES****************/
/**************************************/

// withdraw
export function withdraw(user, amount) {
    if (user.balance === 0) return undefined;

    let expense = createExpense("withdraw", amount);
    user.expenses.push(expense);
    user.balance -= amount;
    return user;
}

// create expense
// purpose is to create a new transaction
// be called by other expense functions
export function createExpense(type, amount) {
    if (!["expense", "withdraw"].includes(type)) return undefined;

    return new Transaction(type, amount);
}

//for budget app
//addExpense
export function addExpense(users, amount, mobile) {
    let found = users.find((user) => user.mobile === mobile);

    if (!found) return undefined;

    let expense = createExpense("expense", amount);
    found.balance -= amount;
    found.expenses.push(expense);
    return found;

}

//deleteExpense
//the function finds object through identifier mobile
// then it finds an object inside the expenses through identifier transactionId
//then gets the amount from the found object
//adds it to the user balance

export function deleteExpense(mobile, transactionId) {
    let found = users.find((user) => user.mobile === mobile);

    if (!found) return undefined;

    let foundId = found.expenses.find((transaction) => transaction.id === transactionId);

    found.balance += foundId.amount;
    return found;
}
/*******************************************/
/**************TRANSFER********************/
/*****************************************/


export function transfer(from, to, amount) {
    if (from.balance < amount) return undefined;

    from.balance -= amount;
    to.balance += amount;
    let send = new Transaction("expense", amount);
    from.expenses.push(send);
    let receive = new Transaction("income", amount);
    to.incomes.push(receive);
    return true;
}
/*******************************************/
/**************SHOW HISTORY****************/
/*****************************************/


export function showHistory(users, mobile) {
    //check if user is existing
    //if yes combine user.incomes and user.expenses and then sort by date
    let existing = users.find((user) => user.mobile === mobile);

    if (!existing) return undefined;

    let transactionHistory = (existing.incomes).concat(existing.expenses);
    transactionHistory.sort(byDate);
    return transactionHistory;
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
        (partialSum, income) => partialSum + income.amount,
        0
    );

    let totalExpense = existing.expenses.reduce(
        (partialSum, expense) => partialSum - expense.amount,
        0
    );

    let totalBalance = totalIncome + totalExpense;
    return totalBalance;
}