//While-loop

    var ulang = 2;
    var itung = 1;
    console.log('LOOPING PERTAMA') 


while(ulang <= 20) {
    var cek = ulang%2;
    if (cek === 0) {
        console.log(ulang+' - I Love Coding')
    }
    ulang = ulang + 1;
}

console.log('LOOPING KEDUA')
while(ulang >= 2) {
    var cek = ulang%2;
    if (cek === 0) {
        console.log(ulang+' - I Will Become Full Stack Developer')
    }
    ulang = ulang - 1;
}
//For-loop

console.log('Looping Pertama')
for (count=1; count<=20; count++) {
    console.log(count+' - I love Coding!');
    if (count === 20){
        break;
    }
  }
  
  console.log('Looping Ke Dua');
  
  for (count=20; count>=1; count--) {
    console.log(count+' - I will become fullstack developer!');
    if (count === 1){
        break;
    }
  }

  //Ganjil-genap

  var ganjilGenap = 1;
  
  while (ganjilGenap <= 100) {
      console.log('');
      console.log(ganjilGenap);
    var hasil = ganjilGenap%2;
    if (hasil === 0) {
        console.log('Genap')
    }else if (hasil !== 0){
        console.log('Ganjil')
    }
    ganjilGenap++;  
}

//Kelipatan 3

var lipatTiga = 1;

while (lipatTiga<=100) {
    console.log(' ');
    var hasil = lipatTiga%3;
    if (hasil === 0) {
        console.log(lipatTiga+' KELIPATAN 3');
    } else if (hasil !== 0){
      console.log(lipatTiga+'  "" ')
    }
    lipatTiga++;
}

//Kelipatan 6

var lipatEnam = 1;

while (lipatEnam<=100) {
    console.log(' ');
    var hasil = lipatEnam%6;
    if (hasil === 0) {
        console.log(lipatEnam+' KELIPATAN 6');
    } else if (hasil !== 0){
      console.log(lipatEnam+'  "" ')
    }
    lipatEnam++;
}

//Kelipatan 10

var lipatSepuluh;

lipatSepuluh = 1;

while (lipatSepuluh<=100) {
    console.log(' ');
    var hasil = lipatSepuluh%10;
    if (hasil === 0) {
        console.log(lipatSepuluh+' KELIPATAN 10');
    } else if (hasil !== 0){
      console.log(lipatSepuluh+'  "" ')
    }
    lipatSepuluh++;
}