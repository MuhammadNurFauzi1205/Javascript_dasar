// loop atau iteration atau pengulangan
/*
var a= 1;
while(a<=5){
        console.log('hello world');
        a++;
}
*/

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= angkotBeroperasi){
    console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for(noAngkot = 7 ; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No.'+ noAngkot + ' sedang tidak beroperasi');

}