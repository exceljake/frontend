import { getItem } from "../local-storage.js";
import { users } from "../user/user.js";


const tBody = document.querySelector('tbody');

for (let i = 0; i < users.length; i++) {
    tBody.innerHTML += `
    <tr>
    <td>${users[i].fullname}</td>
    <td>${users[i].mobile}</td>
    <td>${users[i].balance}</td>
    </tr>`;
}