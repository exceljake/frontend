import { transfer } from "../transaction/transaction.js";
import { setItem } from "../local-storage.js";

const senderMobile = document.querySelector('.sender')
const receiverMobile = document.querySelector('.receiver')
const amountTransfer = document.querySelector('.amount')

const transferSubmit = document.querySelector('.transfer-submit')

transferSubmit.onclick = () => {
    let trans = transfer(senderMobile.value, receiverMobile.value, amountTransfer.value);
    alert("Successfully transferred!")
}