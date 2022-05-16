/*
 * User
 * mobile - unique + 11 digits
 * password - string
 * fullname - string
 * balance - number
 * incomes - [] of Transaction of Income
 * expenses - [] of Transaction of Expense
 */

export let users = [];
export let adminAccount = { mobile: 123456, password: "adminpassword", fullname: "admin", isAdmin: true };
users.push(adminAccount);

export function User(mobile, password, fullname, isAdmin) {
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
export function createUser(mobile, password, fullname, isAdmin) {
    let found = users.find((u) => u.mobile === mobile);

    if (found) return undefined;

    let user = new User(mobile, password, fullname, isAdmin === false);
    users.push(user);
    return user;
}

export function register(mobile, password, fullname) {
    let user = createUser(mobile, password, fullname, isAdmin === false);

    if (user !== undefined) return user;
    else return undefined;
}

export function login(mobile, password) {
    // let existing = users.find((user) => {
    //     return user.mobile === mobile;
    mobile = parseInt(mobile);
    let found = users.find((u) => u.mobile === mobile);

    if (!found) return undefined;

    //will direct to admin dashboard in DOM
    if (found.isAdmin === true && found.password === password) return true;

    //will direct to user dashboard in DOM
    if (found.isAdmin === true && found.password === password) return true;

    else return undefined;
}