function checkIfNumberIsPrime(number) {
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    console.log(isPrime);
}