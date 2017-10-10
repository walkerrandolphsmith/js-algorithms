import test from 'ava';
import sut from './index';

test('when k is a factor of n', t => {
    t.true(sut(10, 5));
});

test('when k is not a factor of n', t => {
    t.false(sut(10, 3));
});