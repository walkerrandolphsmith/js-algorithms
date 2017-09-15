export default (a, b) => {
    let c;
    while ( a !== 0 ) {
        c = a;
        a = b % a;
        b = c;
    }
    return b;
}