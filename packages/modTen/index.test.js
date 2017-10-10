import test from 'ava';
import sut from './index';

test('Valid card.', t => t.true(sut(912030)));

test('Invalid card.', t => t.false(sut(891)));

