function sumOne (a, b){
    return a + b
}

var myA = [4, 2]
// console.log(sumOne(...myA)); ///Spread Operator


// another way of spread


function sumTwo(a, b,...args){ ///Rest operator
    let multi = a * b;
    let sum = 0;
    for(let sub of args){
        sum += sub;
    }

    return {multi, sum};
}

console.log(sumTwo(5, 8, 9, 2));