let coinFlip;
let userInput= parseInt(prompt('How many times you want to flip the coin?'));

for (i=0; i < userInput; i++) {
    coinFlip = Math.round(Math.random());   
    if (coinFlip === 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }

}