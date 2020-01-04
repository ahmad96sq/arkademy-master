var input = (str) => {
    var huruf = /[a-z]/g;
    var special = /[/_.,]/g;

    // menghapus huruf
    var hapus = str.replace(huruf, "");
    // mengubah string menjadi array
    var arr = hapus.split("");
    // mengurutkan array
    var urut = arr.sort();
    var string = urut.toString();
    // menghapus tanda koma
    var koma = string.replace(special, "");

    // untuk kondisi jika parameter tidak ada angka
    if (arr <= 1) {
        console.log('No number found in parameter!');
    } else {
        console.log(koma);
    }

}

input('48172a94') // hasil 1244789
input('abc') // hasil No number found in parameter!
input('94a') // hasil 49