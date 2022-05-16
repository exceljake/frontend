// import { users, } from "../user/user.js";

export function Transaction(mobile, type, amount) {

    this.id = Math.floor(100000 + Math.random() * 900);
    this.mobile = mobile;
    this.type = type;
    this.amount = amount;
    this.dateTime = new Date();
}
/*******************************************/
/**************TRANSFER********************/
/*****************************************/


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
/*******************************************/
/**************SHOW HISTORY****************/
/*****************************************/


export function showHistory(users, mobile) {
    //check if user is existing
    //if yes combine user.incomes and user.expenses and then sort by date
    let existing = users.find((user) => {
        return user.mobile === mobile;
    });

    if (existing) {
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
    let existing = users.find((user) => {
        return user.mobile === mobile;
    });
    if (existing) {
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
}