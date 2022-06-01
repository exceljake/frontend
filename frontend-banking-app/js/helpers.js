import { createUser } from "./user/user.js";
import { setItem } from "./local-storage.js";
import { users } from "./user/user.js";

export let userInitialData = [{
        fullname: "user1",
        mobile: 9293552644,
        password: "password1",
        isAdmin: false,
    },
    {
        fullname: "user2",
        mobile: 9393552644,
        password: "password2",
        isAdmin: false,
    },
    {
        fullname: "user3",
        mobile: 9493552644,
        password: "password3",
        isAdmin: false,
    },
    {
        fullname: "user4",
        mobile: 9593552644,
        password: "password4",
        isAdmin: false,
    },
    {
        fullname: "user5",
        mobile: 9693552644,
        password: "password5",
        isAdmin: false,
    },
    {
        fullname: "user6",
        mobile: 9793552644,
        password: "password6",
        isAdmin: false,
    },
    {
        fullname: "1",
        mobile: 1,
        password: "1",
        isAdmin: false,
    }
];

function addAdmin() {
    const admin = {
        fullname: "admin",
        mobile: 9193552644,
        password: "admin",
        isAdmin: true,
    };
    users.push(admin);
    setItem("userList", users);
}

export function loadData() {
    userInitialData.forEach((d) => {
        return createUser(d.mobile, d.password, d.fullname, d.isAdmin);
    });
    addAdmin();
}


//for dom

export function dateTimeFormat(dateTime) {
    // check if date time is a DATE object 
    // if yes proceed on parsing
    // if not show an error
    if (!dateTime instanceof Date) return undefined;

    let today = dateTime,
        month = today.getMonth() + 1,
        year = today.getFullYear(),
        date = today.getDate(),
        // fullDate = `${month}/${year}/${date}`,
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    //12 hr format
    var amPm = "am";
    if (hours > 12) {
        amPm = "pm";
        hours = hours - 12;
    }

    //put 0 before single-digit numbers 
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    //display dateTime
    dateTime = `${month}/${year}/${date} ${hours}:${minutes}:${seconds}${amPm}`
    return dateTime;
}

export function generateRandomPassword() {
    let randomPassword = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 9; i++) {
        randomPassword.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    return randomPassword.join('');
}