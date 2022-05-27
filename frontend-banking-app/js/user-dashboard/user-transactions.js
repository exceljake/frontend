import { showHistory, byDate, totalBalanceTransactionHistory } from "../transaction/transaction.js"
import { setItem, getItem } from "../local-storage.js"
import { users } from "../user/user.js"

// //general
let currentUser = getItem("currentUser");


// showHistoryDom
const tBody = document.querySelector('tbody');

//showTotalBalanceDom
const totalBalanceData = document.querySelector('.total-balance');



function showHistoryDom() {
    // let currentUser = getItem("currentUser");
    let userTransactions = showHistory(users, Number(currentUser));
    setItem("transactionHistory", userTransactions);
    // alert(userTransactions[0].id)

    for (let i = 0; i < userTransactions.length; i++) {
        tBody.innerHTML += `
    <tr>
    <td>${userTransactions[i].id}</td>
    <td>${userTransactions[i].amount}</td>
    <td>${userTransactions[i].dateTime}</td>
    </tr>`;
    }


}

function showTotalBalanceDom() {
    let showTotalBalance = totalBalanceTransactionHistory(users, Number(currentUser));
    totalBalanceData.innerHTML += `${showTotalBalance}`;
}

//INITIALIZATION

showHistoryDom();
showTotalBalanceDom();

//current progress
//done showing the transactions
// next is delete btn functional on income and expense
// total balance at the bottom of user transactions
//finish the user-dashboard, go to admin