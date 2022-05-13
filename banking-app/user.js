/*user
 *mobile
 *password
 *fullname
 *balance
 *income
 *expense
 */

//hide functions 
const homeBtn = document.querySelector('.home'),
    loginBtn = document.querySelector('.login'),
    signupBtn = document.querySelector('.signup'),

    homeContent = document.querySelector('.home-content'),
    loginContent = document.querySelector('.login-content'),
    signupContent = document.querySelector('.signup-content');


homeBtn.addEventListener('click', function() {
    homeContent.classList.remove('hide');
    loginContent.classList.add('hide');
    signupContent.classList.add('hide');
});

loginBtn.addEventListener('click', function() {
    homeContent.classList.add('hide');
    loginContent.classList.remove('hide');
    signupContent.classList.add('hide');
});

signupBtn.addEventListener('click', function() {
    homeContent.classList.add('hide');
    loginContent.classList.add('hide');
    signupContent.classList.remove('hide');
});
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
    loginBtnSubmit = document.querySelector('.loginSubmit');

loginBtnSubmit.addEventListener('click', function() {
    index = usersList.findIndex(function(user) {
        return user.mobile === loginMobileNumber.value;
    })

    if (index === -1) {
        alert("Account does not exist!");
        return
    }

    if (usersList[index].password !== loginPassword.value) {
        alert("Wrong password!")
        return
    } else {
        alert("Successfully logged in!")
        window.location.href = "user-dashboard.html";
    }
})

//signup

const signupMobileNumber = document.querySelector('.signup-mobile-number'),
    signupFullname = document.querySelector('.signup-fullname'),
    signupPassword = document.querySelector('.signup-password'),
    signupSubmitBtn = document.querySelector('.signupSubmit');

signupSubmitBtn.addEventListener('click', function() {
    let found = usersList.findIndex(function(user) {
        return user.mobile === signupMobileNumber.value;
    });

    if (found !== -1) {
        alert('Account already exists');
    } else {
        createUser(signupMobileNumber.value, signupPassword.value, signupFullname.value);
        alert("Successfully created an account!");
        window.location.href = "user-dashboard.html";
    }
})



// console.log(usersList);

// spare codes
//href
// window.location.href = "user-dashboard.html";
// document.location.href = "user-dashboard.html"
// window.location.replace = "user-dashboard.html";
// setTimeout(function() { document.location.href = "user-dashboard.html;" }, 100);