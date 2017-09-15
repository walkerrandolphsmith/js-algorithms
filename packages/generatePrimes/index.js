import isPrime from '@quillio/isPrime';

function *generatePrimes() {
    let count = 0;
    while(1) {
        if(isPrime(count)) yield count;
        count++;
    }
}

export default generatePrimes;