// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    /*12 hour format */
    var amPm = "am";
    if (hour > 12) {
        amPm = "pm";
        hour = hour - 12;
    }

    /* put zero before numbers < 10 */

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    /*display current time */

    var time = hour + ' : ' + min + ' : ' + sec + ' ' + amPm;
    document.getElementById("time").innerHTML = time;

    setTimeout(showTime, 1000);
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://miro.medium.com/max/1400/1*O3xI0Bt2WKEzFY2grLiNuQ.jpeg')";
        greeting.textContent = 'Good Morning, ';
        document.getElementById("h2Focus").style.fontSize = '30px';
        document.getElementById("focus").style.fontSize = '30px';
        document.getElementById("todo-h1").style.color = 'white';
        document.getElementById('containerId').style.backgroundColor = 'rgba(39, 60, 90, 1)';
        document.getElementById('toDoContainer').style.color = 'white';

    } else if (hour < 18) {
        // Afternoon OKNA
        document.body.style.backgroundImage = "url('https://backend.artreview.com/wp-content/uploads/2021/03/M11-4-of-4.jpg')";
        greeting.textContent = 'Good Afternoon, ';
        document.body.style.color = 'white';


    } else {
        // Evening
        document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/63/70/hSyJLq.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
        document.getElementById('containerId').style.backgroundColor = 'rgba(123, 137,147,1)';


    }
}





// To Do List 

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})


// Get Name
function getName() {
    let name = document.getElementById('name');

    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    let name = document.getElementById('name');

    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    let focus = document.getElementById('focus');

    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter your Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    let focus = document.getElementById('focus');

    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//QUOTES
var i = 0;
var quotes = ['"Change the world by being yourself."', '"Get busy living or get busy dying."'];

function divChange() {

    document.getElementById("diffQuotes").textContent = quotes[i];

    i = (i + 1) % quotes.length;
}
setInterval(divChange, 2000)

// document.getElementById("addQuoteButton").onclick = function addArray() {
//     var name = document.getElementById("addQuote").value;
//     quotes.push(name);
//     alert("Thank you for adding a new quote!");
// }

//SHOW/HIDE TODO LIST

var a;

function showHide() {
    if (a == 1) {
        document.getElementById("containerId").style.display = "inline";
        return a = 0;
    } else {
        document.getElementById("containerId").style.display = "none";
        return a = 1;
    }
}

// Run
showTime();
setBgGreet();
getName();
getFocus();
showHide();