// a();
// run();

/// function statement
function a () {
    console.log("func a");
}
a();

/// function expression
var run = function (){
    console.log("func run");
}
run();

/// Anonymous function
// function () {
//     console.log("hello world");
// }

/// Named Function Expressions
var abc = function xyz() {
    console.log("named function expression", xyz);
}
abc()