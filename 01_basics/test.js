///in here let and const also gives same output
var y = 111;
a();
b();
console.log(y);

function a () {
    var y = "func a"
    console.log(y);
}

function b () {
    var y = "func b"
    console.log(y);
}
