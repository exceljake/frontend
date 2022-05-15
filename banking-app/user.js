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

export default function User(mobile, password, fullname, isAdmin) {
    this.mobile = mobile;
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
    let found = users.find((u) => {
        return u.mobile === mobile;
    })
    if (found) {
        return undefined;
    } else {
        let user = new User(mobile, password, fullname, isAdmin === false);
        users.push(user);
        return user;
    }
}



export function register(mobile, password, fullname) {
    let user = createUser(mobile, password, fullname, isAdmin === false);

    if (user !== undefined) console.info("error");
    else console.error("error");
}

export function login(mobile, password) {
    let existing = users.find((user) => {
        return user.mobile === mobile;
    })
    if (existing) {
        if (existing.isAdmin === true && existing.password === password) {
            return true;
        }
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

// export function createAdmin(mobile, password, fullname) {

//     return adminAccount;
// }

// let admin = {
//     email: "admin-piggybank@gmail.com",
//     password: "piggy123",
//     isAdmin: true
// };
// clientList.push(admin);
// }
// })();

// export function createAdmin(mobile, password, fullname, isAdmin) {
//     let found = users.find((u) => {
//         return u.mobile === mobile;
//     });
//     if (found) {
//         return undefined;
//     } else {
//         let user = new User(mobile, password, fullname, isAdmin === true);
//         users.push(user);
//         return user;
//     }
// }