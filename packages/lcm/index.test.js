import test from 'ava';
import sut from './index';

test('smallest positive int divisible by both inputs', t => {
    t.true(sut(4, 10) === 20);
});

test('least common multiple of x and x is itself', t => {
    t.true(sut(5, 5) === 5);
});