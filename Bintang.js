/*var bintang = '';
for( var i = 0 ; i<5; i++){
    for(var j = 0 ; j<=10; j++){
        bintang += '*';
    }
    bintang +='\n';
}
console.log(bintang);*/

/*var bintang = '';
for( var i = 0 ; i<5; i++){
    bintang += '*'
    console.log(bintang);
}*/

/*var bintang = '';
for( var baris = 0 ; baris<5; baris++){
    for(var kolom = 0 ; kolom<=2; kolom++){
        bintang += '*';
    }
    bintang +='\n';
}
console.log(bintang);*/

var bintang = '';
for( var baris = 0 ; baris<5; baris++){
    for(var kolom = 0 ; kolom<=baris; kolom++){
        bintang += '*';
    }
    bintang +='\n';
}
console.log(bintang);