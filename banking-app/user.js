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
    // loginPassword = document.querySelector('.login-password'),
    loginBtnSubmit = document.querySelector('.loginSubmit');

loginBtnSubmit.addEventListener('click', function() {
    //nakukuha nya si usersList pero hndi nagaalert si exist
    // var usersList = localStorage.getItem("usersList");
    // JSON.parse(usersList);
    // let exist = usersList.find((user) => {
    //     return user.mobile === loginMobileNumber.value;
    // })
    // alert(exist);
    index = usersList.findIndex(function(user) {
        return user.mobile === loginMobileNumber.value;
    })

    if (index !== -1) {
        // alert("Successfully logged in!");
        window.location.href = "google.com";
        // } else {
        //     alert("Account does not exist!");
        // }
    } else {
        alert('Wrong!')
    }
})



// loginSubmit.addEventListener('click', function() {
//     index = clientList.findIndex(function(item) {
//         return item.email === loginEmail.value;
//     })
//     if (index === -1) {
//         alert('User does not exist!');
//         return;
//     }

//     if (clientList[index].password !== loginPassword.value) {
//         alert('Incorrect password.');
//         return;
//     } else { // User and password matches so redirect to appropriate dashboard
//         if (clientList[index].isAdmin) {
//             window.location.href = "admin-dashboard.html";
//         } else {
//             localStorage.setItem("currentUserIndex", JSON.stringify(index));
//             window.location.href = "user-dashboard.html";
//         }
//     }
// });

//signup

// function signIn(e) {
//     const loginMobileNumber = document.querySelector('.login-mobile-number');
//     let usersList = JSON.parse(localStorage.getItem('usersList')) || [];
//     let exist = formData.length &&
//         usersList.some(user => user.mobile == loginMobileNumber);
//     if (!exist) {
//         alert("Incorrect login credentials");
//     } else {
//         location.href = "user-dashboard.html";
//     }
//     e.preventDefault();
// }

const signupMobileNumber = document.querySelector('.signup-mobile-number'),
    signupFullname = document.querySelector('.signup-fullname'),
    signupPassword = document.querySelector('.signup-password'),
    signupSubmitBtn = document.querySelector('.signupSubmit');

signupSubmitBtn.addEventListener('click', function() {
    let found = usersList.find((user) => {
        return user.mobile === signupMobileNumber.value;
    });

    if (found) {
        alert('Account already exists');
    } else {
        createUser(signupMobileNumber.value, signupPassword.value, signupFullname.value);
        alert("Successfully created an account.");
        window.location = 'user-dashboard.html';
    }
})



// console.log(usersList);