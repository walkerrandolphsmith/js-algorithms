import test from 'ava';
import squareOfSums from './index';

test('(1 + 2 + 3)^2 = 36', t => {
    t.is(squareOfSums(3), 36);
});