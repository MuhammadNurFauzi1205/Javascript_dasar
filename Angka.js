/*hasilnya 123456789-1
var angka = '';
for( var baris = 10 ; baris>0; baris--){
    for(var kolom = 1 ; kolom<baris; kolom++){
        angka += kolom;
    }
    angka +='\n';
}
console.log(angka);*/

/*hasilnya 1-12345
var angka = '';
for( var baris = 1 ; baris<6; baris++){
    for(var kolom = 1 ; kolom<=baris; kolom++){
        angka += kolom;
    }
    angka +='\n';
}
console.log(angka);*/

/*cara simpel 1-12345
var angka = '';
for( var baris = 1 ; baris<=5; baris++){
    angka += baris;
    console.log(angka);
}*/

/*hasilnya 5-54321
var angka = '';
for( var baris = 1 ; baris<=5; baris++){
    angka += 6-baris;
    console.log(angka);
}*/

function segitiga4(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '* '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga4(10));
