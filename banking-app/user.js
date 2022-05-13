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
export default function User(mobile, password, fullname) {
    this.mobile = mobile;
    this.password = password;
    this.fullname = fullname;
    this.balance = 0;
    this.incomes = [];
    this.expenses = [];
}

// create user
// find user
// if exisiting, return an error
// if not, add to the list
// and then return user
export function createUser(mobile, password, fullname) {
    let found = users.find((u) => {
        return u.mobile === mobile;
    });
    if (found) {
        return undefined;
    } else {
        let user = new User(mobile, password, fullname);
        users.push(user);
        return user;
    }
}

export function register(mobile, password, fullname) {
    let user = createUser(mobile, password, fullname);

    if (user !== undefined) console.info("error");
    else console.error("error");
}

export function login(mobile, password) {
    let existing = users.find((user) => {
            return user.mobile === mobile;
        })
        // console.log(existing);
    if (existing) {
        if (existing.password === password) {
            return true;
        } else {
            return false;
        }
        // }
    } else {
        return undefined;
    }
}