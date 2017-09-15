import test from 'ava';
import sumOfSquares from './index';

test('1^2 + 2^2 + 3^2 = 14', t => {
    t.is(sumOfSquares(3), 14);
});