import test from 'ava';
import sut from './index';

test('1^2 + 2^2 + 3^2 = 14', t => t.is(sut(3), 14));