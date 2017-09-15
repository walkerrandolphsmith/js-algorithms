import test from 'ava';
import gcd from './index';

test('largest postive integer that is a factor of both inputs', t => {
    t.true(gcd(5, 10) === 5);
});