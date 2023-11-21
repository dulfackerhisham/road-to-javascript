var countries = ["India", "USA", "Japan", "Palestine"]

let footballClubs = new Array("barcelona", "real madrid", "man city", "arsenal")

console.log(countries[3]);
console.log(footballClubs.length);


footballClubs[1] = "bvb"
console.log(footballClubs);
footballClubs.pop()
console.log(footballClubs);

footballClubs.unshift("NEW")
console.log(footballClubs);

footballClubs.shift()
console.log(footballClubs);

console.log(footballClubs.indexOf("bvb"));

// adding Strings to array
// **from ** convert to anything to array

console.log(Array.from("hisham"));
