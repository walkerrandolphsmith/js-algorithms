import gcd from '@quillio/gcd';

export default (x, y) => Math.abs(x * y) / gcd(x, y)