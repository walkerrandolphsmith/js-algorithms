export default (n) => n
    .toString()
    .split('')
    .map(Number)
    .reverse()
    .reduce((sum, digit, index) => {
        if (index & 1) digit <<= 1;
        if (digit > 9) digit -= 9;
        return sum + digit;
    }, 0) % 10 == 0;