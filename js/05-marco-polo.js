for(let num = 0; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(`Marco Polo`);
    } else if (num % 5 === 0){
        console.log(`Polo`);
    } else if (num % 3 === 0) {
        console.log(`Marco`);
    }
}