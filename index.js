let B = false,
    I = false,
    N = false,
    G = false,
    O = false;
function generatenumber(maxNumber) {
    let generatenumber = Math.floor(Math.random() * maxNumber) + 1;
    if (generatenumber <= 15) {
        B = true;
        console.log('The number is in B');
    } else if (generatenumber >= 16 && generatenumber <= 30) {
        I = true;
        console.log('The number is in I'); 
    } else if (generatenumber >= 31 && generatenumber <=45) {
        N = true;
        console.log('The number is in N');
    } else if (generatenumber >= 46 && generatenumber <=60) {
            G = true;
            console.log('The number is in G');
    } else if (generatenumber >= 61 && generatenumber <=75) {
        O = true;
        console.log('The number is in O');
    }
    else{
        console.log('the number is invalid');
    }

     if (B == true && I == true && N == true && G == true && O == true) {
        console.log('BINGOOO!!!');
}
return console.log(generatenumber);
}