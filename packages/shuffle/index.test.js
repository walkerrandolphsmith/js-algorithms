import test from 'ava';
import shuffle from './index';

test('Strings are not valid params.', t => {
    const error = t.throws(() => shuffle('walker'), Error);
    t.is(error.message, 'Array is required, but received type string');
});

test('Objects are not valid params.', t => {
    const error = t.throws(() => shuffle({}), Error);
    t.is(error.message, 'Array is required, but received type object');
});

test('Booleans are not valid params.', t => {
    const error = t.throws(() => shuffle(true), Error);
    t.is(error.message, 'Array is required, but received type boolean');
});

test('The shuffled collection has the same number of elements as the original', t => {
    const collection = [0, 1, 2];
    const actual = shuffle(collection);

    t.is(actual.length, 3);
});

test('The shuffled collection has the same elements as the original', t => {
    const collection = [0, 1, 2];
    const actual = shuffle(collection);
    t.true(actual.includes(0));
    t.true(actual.includes(1));
    t.true(actual.includes(2));
});

test('The order of elements is not the same', t => {
    const collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let wasShuffled = false;
    for(let i = 0; i < 10; i++) {
        const actual = shuffle(collection);
        const shuffled = collection.filter((element, i) => element !== actual[i]);
        if(shuffled.length === collection.length) {
            wasShuffled = true;
            break;
        }
    }

    t.true(wasShuffled);
});