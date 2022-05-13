export function Transaction(type, amount) {
    this.id = Math.floor(100000 + Math.random() * 900);
    this.type = type;
    this.amount = amount;
}

export function addIncome(users, amount, mobile) {
    let found = users.find((user) => {
        return user.mobile === mobile;
    });
    if (found) {
        let income = createIncome("income", amount);
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
export function createIncome(type, amount) {
    if (["income", "deposit"].includes(type)) {
        let income = new Transaction(type, amount);
        return income;
    } else {
        return undefined;
    }
}

// create expense
export function createExpense(type, amount) {
    if (["expense", "withdraw"].includes(type)) {
        let expense = new Transaction(type, amount);
        return expense;
    } else {
        return undefined;
    }
}
// deposit
export function deposit(user, amount) {
    let income = createIncome("deposit", amount);
    user.incomes.push(income);
    user.balance += amount;
    return user;
}
// compute total balance
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
        let send = new Transaction("expense", amount);
        from.expenses.push(send)
        let receive = new Transaction("income", amount);
        to.incomes.push(receive)
        return true;
    } else {
        return false;
    }
}

// withdraw
export function withdraw(user, amount) {
    if (user.balance !== 0) {
        let expense = createExpense("withdraw", amount);
        user.expenses.push(expense);
        user.balance -= amount;
        return user;
    } else {
        return undefined;
    }
}