import test from 'ava';
import sut from './index';

test('(1 + 2 + 3)^2 = 36', t => t.is(sut(3), 36));