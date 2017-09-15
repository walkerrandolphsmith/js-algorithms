import test from 'ava';
import lcm from './index';

test('smallest positive int divisible by both inputs', t => {
    t.true(lcm(4, 10) === 20);
});

test('least common multiple of x and x is itself', t => {
    t.true(lcm(5, 5) === 5);
});