const userProfileBtn = document.querySelector('.user-profile'),
    userTransactionsBtn = document.querySelector('.user-transactions'),
    incomeBtn = document.querySelector('.budget-app-income'),
    expenseBtn = document.querySelector('.budget-app-expense'),
    budgetAppBtn = document.querySelector('.budget-app'),

    userProfileSection = document.querySelector('.user-profile-section'),
    userTransactionsSection = document.querySelector('.user-transactions-section'),
    incomeSection = document.querySelector('.budget-app-income-section'),
    expenseSection = document.querySelector('.budget-app-expense-section');

userProfileBtn.onclick = function() {
    userProfileSection.classList.remove("hide");
    userTransactionsSection.classList.add("hide");
    incomeSection.classList.add("hide");
    expenseSection.classList.add("hide");
    incomeBtn.classList.add("hide");
    expenseBtn.classList.add("hide");
}

userTransactionsBtn.onclick = function() {
    userProfileSection.classList.add("hide");
    userTransactionsSection.classList.remove("hide");
    incomeSection.classList.add("hide");
    expenseSection.classList.add("hide");
    incomeBtn.classList.add("hide");
    expenseBtn.classList.add("hide");
}

budgetAppBtn.onclick = function() {
    incomeBtn.classList.remove("hide");
    expenseBtn.classList.remove("hide");
}

incomeBtn.onclick = function() {
    userProfileSection.classList.add("hide");
    userTransactionsSection.classList.add("hide");
    incomeSection.classList.remove("hide");
    expenseSection.classList.add("hide");
}

expenseBtn.onclick = function() {
    userProfileSection.classList.add("hide");
    userTransactionsSection.classList.add("hide");
    incomeSection.classList.add("hide");
    expenseSection.classList.remove("hide");
}