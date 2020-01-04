var huruf_kapital = /[A-Z]/g;
var huruf_kecil = /[a-z]/g;
var number = /[0-9]/g;
var special = /[/_.]/g;


function nama_valid(nama) {
    if (nama.length >= 3 && nama.match(huruf_kapital)) {
        return true;
    } else {
        return false;
    }
}

function umur_valid(umur) {
    if (umur.length == 2 && number.test(umur)) {
        return true;
    } else {
        return false;
    }
}

function username_valid(username) {
    if (username.length == 8 &&
        username.match(huruf_kecil).length == 4 &&
        username.match(special).length == 1 &&
        username.match(number).length == 3) {
        return true;
    } else {
        return false;
    }
}

// Tes
console.log(nama_valid('ahmad')); // false
console.log(umur_valid('24')); // true 
console.log(username_valid('ahma/234')); // true