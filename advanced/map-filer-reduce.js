arr = [2,3,6,7]

///map
result = arr.map((X) => X * X)
// console.log(result);

//////////////////////////////////////////

///filter
// function isGreaterThan5(x) {
//     return x > 5;
// }

result1 = arr.filter((x) => x > 5)
// console.log(result1);

///reduce()

// function sum(x) {
//     summ = 0;
//     for(let i = 0; i < arr.length; i++){
//         summ += arr[i];
//     }
//     return summ
// }

// console.log(sum(arr));

const output = arr.reduce(function (total, currentVal) {
    total += currentVal
    return total
})

console.log(output);

// problem 2
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMax(arr));

const output4 = arr.reduce(function (max, curr){
    if (curr > max){
        max = curr;
    }
    return max
})

console.log(output4);

/// complicated problem
const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const mapOut = users.map(x => x.firstName + " " + x.lastName)
console.log(mapOut);

const filterOut = users.filter(x => x.age > 35)

console.log(filterOut);

// const reduceOut = users.reduce(function (total, curr){
//     if()
// })