import test from 'ava';
import generatePrimes from './index';

test('first n primes are correct', t => {
    const generator = generatePrimes();

    const expected = [2, 3, 5, 7, 11, 13, 17];
    const actual = Array.from(Array(7), (_, i) => i).map(i => generator.next().value);

    t.deepEqual(actual, expected);
});