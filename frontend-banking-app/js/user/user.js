import { setItem, getItem } from "../local-storage.js";

export let users = JSON.parse(getItem("userList")) || [];
/*
 * User
 * mobile - unique + 11 digits
 * password - string
 * fullname - string
 * balance - number
 * incomes - [] of Transaction of Income
 * expenses - [] of Transaction of Expense
 */
export function User(mobile, password, fullname, isAdmin = false) {
    this.mobile = parseInt(mobile);
    this.password = password;
    this.fullname = fullname;
    this.isAdmin = isAdmin;
    this.balance = 0;
    this.incomes = [];
    this.expenses = [];
}

// create user
// find user
// if exisiting, return an error
// if not, add to the list
// and then return user
export function createUser(mobile, password, fullname, balance) {
    mobile = Number(mobile);
    let found = users.find((u) => u.mobile === mobile);

    if (found) return undefined;

    let user = new User(mobile, password, fullname);
    user.balance += Number(balance);
    users.push(user);
    setItem("userList", users);
    return user;
}

export function login(mobile, password) {
    let found = users.find((u) => u.mobile === Number(mobile));

    if (!found) {
        return undefined;
    }
    if (found.password !== password) {
        return undefined;
    } else {
        return found;
    }
}

export function register(mobile, password, fullname) {
    let user = createUser(mobile, password, fullname);

    if (user !== undefined) return user;
    else return undefined;
}

export function currentUser(mobile) {
    mobile = parseInt(mobile);
    setItem("currentUser", mobile);
    return true;
}