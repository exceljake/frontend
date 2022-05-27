const transactBtn = document.querySelector('.transact-nav-button')
const depositBtn = document.querySelector('.deposit-nav-button')
const withdrawBtn = document.querySelector('.withdraw-nav-button')
const transferBtn = document.querySelector('.transfer-nav-button')

transactBtn.onclick = function() {
    if (depositBtn.classList.contains('hide')) {
        depositBtn.classList.remove('hide')
        withdrawBtn.classList.remove('hide')
        transferBtn.classList.remove('hide')
    } else {
        depositBtn.classList.add('hide')
        withdrawBtn.classList.add('hide')
        transferBtn.classList.add('hide')
    }
}