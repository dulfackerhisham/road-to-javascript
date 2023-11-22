// ARROW FUNCTION
var isEven = (num) => {
    // if (num % 2 === 0) {
    //     return true
    // }
    // return false;
    return num % 2 === 0;
};

console.log(isEven(2));

var result = [2, 4, 5, 6].every((e) => (e%2 === 0));
console.log(result);