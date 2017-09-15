import test from 'ava';
import isFactor from './index';

test('when k is a factor of n', t => {
    t.true(isFactor(10, 5));
});

test('when k is not a factor of n', t => {
    t.false(isFactor(10, 3));
});