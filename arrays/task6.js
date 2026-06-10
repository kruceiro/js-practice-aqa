const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedNumbersList = numbersList.slice();
copiedNumbersList.sort((a, b) => a - b);

console.log(`Original array: ${numbersList}`);
console.log(`Sorted array: ${copiedNumbersList}`);
