import { createIncome, addIncome, Transaction } from "../transaction/transaction.js";

const mobile = document.querySelector('.mobile-deposit');
const amount = document.querySelector('.amount-deposit')
const submit = document.querySelector('.deposit-submit')

submit.onclick = () => {
    let depositFunction = addIncome("deposit", mobile.value, amount.value)
    alert("Successfully deposited!")
}