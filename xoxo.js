function xo(str) {

    var xx = 0
    var oo = 0

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            xx++
            
        }else {
            oo++
        }
    }


    if(xx === oo) {
    return true
    }
    return false
    

}

console.log(xo('xoxoxo')); 
console.log(xo('o); // truexooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo'));