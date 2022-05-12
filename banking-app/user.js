/*user
 *mobile
 *password
 *fullname
 *balance
 *income
 *expense
 */
//updating JSON usersList and transactionHistory
function updateJSONUsers() {
    users = JSON.stringify(usersList);
    localStorage.setItem("usersList", users);
    transactionHistory_str = JSON.stringify(transactionHistory);
    localStorage.setItem("transactionHistory", transactionHistory_str);
}

var users = localStorage.getItem("usersList");
var transactionHistory_str = localStorage.getItem("transactionHistory");

if (!transactionHistory_str) {
    var transactionHistory = [];
} else {
    var transactionHistory = JSON.parse(transactionHistory_str);
}

if (!users) {
    var usersList = [];
} else {
    var usersList = JSON.parse(users);
}

//create user

function User(mobile, password, fullname, balance, income, expense) {
    this.mobile = mobile;
    this.password = password;
    this.fullname = fullname;
    this.balance = balance;
    this.income = [];
    this.expense = [];
}

//function create user

function createUser(mobile, password, fullname) {
    let user = new User(mobile, password, fullname);
    usersList.push(user);
    updateJSONUsers();
    return user;
}

//function Transaction

function Transaction(type, amount) {
    this.id = Math.floor(100000 + Math.random() * 900);
    this.type = type;
    this.amount = amount;
}
//login 

const loginMobileNumber = document.querySelector('.login-mobile-number'),
    loginPassword = document.querySelector('.login-password'),
    loginBtn = document.querySelector('.loginSubmit');

loginBtn.addEventListener('click', function() {
    let found = usersList.find((user) => {
        return user.mobile === loginMobileNumber.value;
    });
    if (found) {
        window.location.href = "user-dashboard.html";
    } else {
        return "Account not found";
    }
})

//signup

const signupMobileNumber = document.querySelector('.signup-mobile-number'),
    signupFullname = document.querySelector('.signup-fullname'),
    signupPassword = document.querySelector('.signup-password'),
    signupBtn = document.querySelector('.signupSubmit');

signupBtn.addEventListener('click', function() {
    let found = usersList.find((user) => {
        return user.mobile === signupMobileNumber.value;
    });

    if (found) {
        alert('Account already exists');
    } else {
        createUser(signupMobileNumber.value, signupPassword.value, signupFullname.value);
        alert("Successfully created an account.")
    }
})

// console.log(usersList);