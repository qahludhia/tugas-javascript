function konversiMenit(menit) {
    var menitnya = Math.floor(menit / 60)
    var detiknya = menit % 60

    if (String(detiknya).length = 1) {
        detiknya = "0" +detiknya
    }
    var hasil = menitnya + ":" + detiknya

    return String(hasil)
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 