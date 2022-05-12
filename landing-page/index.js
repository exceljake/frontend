var about = document.getElementById('about')
var div = document.createElement('div');
var newAlert1 = document.createElement('button')
newAlert1.innerHTML = 'Alert!'
newAlert1.style.border = '1px'
newAlert1.style.color = 'gray'
newAlert1.style.margin = '10px'
newAlert1.style.padding = '15px 30px'
newAlert1.style.borderRadius = '15px'
newAlert1.setAttribute('id', 'about-btn');

// document.getElementById('about').style.background = 'red'

div.appendChild(newAlert1)

about.appendChild(div)

document.getElementById('about-btn').addEventListener('click', sayHey)

div.appendChild(newAlert1)

about.appendChild(div)

document.getElementById('about-btn1').addEventListener('click', sayHello)

var paragraph = document.querySelector('.paragraph')

function sayHey() {
    paragraph.textContent = 'Hello World!'
}

function sayHello() {
    alert('Kalbo!')
}


// function sayHey() {
//     alert('Hey')
// }


// document.getElementById('about-btn').addEventListener('click', sayHey)

// function sayHey() {
//     alert('Hey')
// }
// jumbotronTitle - document.querySelector('.jumbotron-title')

// function sayHey() {
//     jumbotronTitle.textContent = '"Arrrf", life?'
// }



//JS tutorial at utube with css//

// let btnText = document.querySelector('#btnText');
// let btnHtml = document.querySelector('#btnHtml');
// let content = document.querySelector('#content');
// let paragraph = document.querySelector('p');

// btnText.addEventListener('click', () => {
//     paragraph.innerText = 'Hello World';
// });

// btnHtml.addEventListener('click', () => {
//     content.innerHTML = '<h1>Hello World</h1>';
// });