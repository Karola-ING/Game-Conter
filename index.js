// Comment
// console.log('Hello world');
// console.log('1' + 1);

// we don't have floats and integers, only integers

let home = 0
let guest = 0
document.getElementById('home').textContent = home
document.getElementById('guest').textContent = guest


function add1toHome() {
    home += 1
    document.getElementById("home").textContent= home
}

function add2toHome() {
    home += 2
    document.getElementById("home").textContent= home
}

function add3toHome() {
    home += 3
    document.getElementById("home").textContent= home
}



function add1toGuest() {
    guest += 1
    document.getElementById("guest").textContent= guest
}

function add2toGuest() {
    guest += 2
    document.getElementById("guest").textContent= guest
}

function add3toGuest() {
    guest += 3
    document.getElementById("guest").textContent= guest
}



function newGame() {
    home = 0
    guest = 0
    document.getElementById("home").textContent= home
    document.getElementById("guest").textContent= guest
}