export const shuffle = (original) => {
    const collection = original.slice();

    const randomNumber = Math.random();
    let length = collection.length;
    let randomIndex;
    let temp;

    while(length) {
        randomIndex = Math.floor(randomNumber * length);
        length -= 1;
        temp = collection[length];
        collection[length] = collection[randomIndex];
        collection[randomIndex] = temp;
    }

    return collection;
};

export default (collection) => {
    if (!Array.isArray(collection))
        throw new Error(`Array is required, but received type ${typeof collection}`);
    return shuffle(collection);
}
