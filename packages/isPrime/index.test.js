import test from 'ava';
import isPrime from './index';

test('non numbers are not prime', t => t.false(isPrime('notNumber')));

test('0 is not prime', t => t.false(isPrime(0)));

test('1 is not prime', t => t.false(isPrime(1)));

test('2 is prime', t => t.true(isPrime(2)));

test('3 is prime', t => t.true(isPrime(3)));

test('31 is prime', t => t.true(isPrime(31)));

test('100 is composite', t => t.false(isPrime(100)));

