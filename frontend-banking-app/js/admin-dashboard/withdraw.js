import { addExpense, createExpense, Transaction } from "../transaction/transaction.js";

const mobile = document.querySelector('.mobile-withdraw');
const amount = document.querySelector('.amount-withdraw')
const submit = document.querySelector('.withdraw-submit')

submit.onclick = () => {
    let withdrawFunction = addExpense("withdraw", amount.value, mobile.value)
    alert("Successfully withdrawn!")

}