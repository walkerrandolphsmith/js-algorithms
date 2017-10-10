import test from 'ava';
import sut from './index';

test('non numbers are not prime', t => t.false(sut('notNumber')));

test('0 is not prime', t => t.false(sut(0)));

test('1 is not prime', t => t.false(sut(1)));

test('2 is prime', t => t.true(sut(2)));

test('3 is prime', t => t.true(sut(3)));

test('31 is prime', t => t.true(sut(31)));

test('100 is composite', t => t.false(sut(100)));

