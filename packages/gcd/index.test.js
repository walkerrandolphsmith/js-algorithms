import test from 'ava';
import sut from './index';

test('largest postive integer that is a factor of both inputs', t => {
    t.true(sut(5, 10) === 5);
});