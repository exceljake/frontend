import { transfer } from "../transaction/transaction.js";
import { setItem } from "../local-storage.js";

let senderMobile = document.querySelector('.sender')
let receiverMobile = document.querySelector('.receiver')
let amountTransfer = document.querySelector('.amount-transfer')

const transferSubmit = document.querySelector('.transfer-submit')

transferSubmit.onclick = () => {
    let trans = transfer(Number(senderMobile.value), Number(receiverMobile.value), Number(amountTransfer.value));
    if (trans === undefined) {
        alert("Sender's balance is insufficient!");
    } else {
        alert("Successfully transferred!");
    }
}