/************************/
/*****HIDE FUNCTION*****/
/**********************/

const userProfile = document.querySelector('.user-profile-section'),
    userTransactions = document.querySelector('.user-transactions-section'),
    budgetApp = document.querySelector('.budget-app-section'),

    userProfileBtn = document.querySelector('.user-profile'),
    userTransactionsBtn = document.querySelector('.user-transactions'),
    budgetAppBtn = document.querySelector('.budget-app');


userProfileBtn.addEventListener('click', function() {
    userProfile.classList.remove('hide');
    userTransactions.classList.add('hide');
    budgetApp.classList.add('hide');
});

userTransactionsBtn.addEventListener('click', function() {
    userProfile.classList.add('hide');
    userTransactions.classList.remove('hide');
    budgetApp.classList.add('hide');
});

budgetAppBtn.addEventListener('click', function() {
    userProfile.classList.add('hide');
    userTransactions.classList.add('hide');
    budgetApp.classList.remove('hide');
});