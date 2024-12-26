const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedArray = [...numbersList].sort((firstValue, secondValue) => firstValue - secondValue);

console.log(`The original array is: ${numbersList}. The new one is: ${copiedArray}`)