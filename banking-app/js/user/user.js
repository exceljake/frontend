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

export function getUsers() {
    return users.filter((u) => u.isAdmin === false);
}

// create user
// find user
// if exisiting, return an error
// if not, add to the list
// and then return user
export function createUser(mobile, password, fullname, isAdmin = false) {
    let found = users.find((u) => u.mobile === mobile);

    if (found) return undefined;

    let user = new User(mobile, password, fullname, isAdmin);
    users.push(user);
    setItem("userList", users);
    return user;
}

export function login(mobile, password) {
    mobile = parseInt(mobile);
    let found = users.find((u) => u.mobile === mobile);

    if (!found) return undefined;
    if (!found || !found.mobile === mobile || !found.password === password)
        return undefined;
    return found;
}

export function register(mobile, password, fullname) {
    let user = createUser(mobile, password, fullname);

    if (user !== undefined) return user;
    else return undefined;
}