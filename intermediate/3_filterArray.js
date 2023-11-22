var testArray = [2, 4, 5, 6, 1, 9, 7]

console.log(testArray.fill("new world", 3, 6));

const myNumber = [23, 24, 44, 55, 66, 77, 88, 99, 22]

// const result = myNumber.filter((num) => num != 23 )
const result = myNumber.filter((num) => num < 50 )

console.log(result);