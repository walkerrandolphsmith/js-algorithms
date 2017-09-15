import isFactor from '@quillio/isFactor';

export default (n) => {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
        return false;
    }
    let m = Math.sqrt(n);
    let i;
    for (i = 2; i <= m; i++){
        if (isFactor(n, i)) {
            return false;
        }
    }
    return true;
}