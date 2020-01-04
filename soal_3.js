// menggunakan fungsi deklarasi
var input = (str) => {
    // mencari string vocal
    var vocal = str.match(/A|I|U|E|O|a|i|u|e|o/gi);
    // mencari string konsonan
    var konsonan = str.match(/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z/gi, "");

    // untuk menyimpan string
    var s = '';
    //untuk menelusuri huruf vocal 
    for (let i = 0; i < vocal.length; i++) {
        s += vocal[i];
        s += '\n';
    }

    //untuk menelusuri huruf konsonan 
    for (let i = 0; i < konsonan.length; i++) {
        s += konsonan[i];
        s += '\n';
    }

    // menampilkan hasil
    console.log(s);
}

input('Aaxazazs');

// hasil => 
// A
// A 
// E
// R 
// K 
// D 
// M 
// Y