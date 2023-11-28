function init() {
    var firstName = "muhammed"
    console.log("im init");
    function sayName() {
        console.log(firstName);
    }
    return sayName;
}

var value = init();
value();


// another example
function doAddition(x){
    return function(y) {
        return x + y;
    }
}

var add5 = doAddition(5)
console.log(add5(6));

console.log(doAddition(6)(7));