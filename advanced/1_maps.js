var myMap = new Map();

myMap.set(0, "pujyam")
myMap.set(1, "onh")
myMap.set(2, "rand")
myMap.set(3, "muunh")

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key => ${key}`);
// }
// for(let value of myMap.values()){
//     console.log(`value => ${value}`);
// }
for(let [key, value] of myMap){
    console.log(`key => ${key} value => ${value}`);
}

myMap.forEach( (value, key) => console.log(`${value} ${key}`))

myMap.delete(3)
console.log(myMap);