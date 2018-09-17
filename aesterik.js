var rows1 = 5;
var counterRows1 = 1;

while(counterRows1<rows1) {
    console.log('*');
    counterRows1++;
}

var rows2 = 5;

var j=0;
while (j<rows2) {
    var bintang = '*';
    var k = 1;
    while (k<rows2) {
        bintang = bintang + '*';
        k++;
    }
    console.log(bintang);
    j++;
}

var rows3 = 5;

var apa = 1;
var a = 0;

while(a<rows3) {
   var piramit = '*';
   var b = 0;
   while (b<a) { 
    piramit = piramit + '*';
    b++;
   }
   console.log(piramit);
   a++;
}