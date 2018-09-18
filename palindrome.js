function balikKata(kata){
    let balik=kata.split('').reverse().join('');
    return balik;

}
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 