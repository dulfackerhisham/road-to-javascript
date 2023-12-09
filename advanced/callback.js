// function c (func) {
//     console.log(func);
// }

// c(function abc() {})

setTimeout(function () {
    console.log("timer");
}, 1000);

function a(b) {
    console.log("called function a");
    b();
    
}

a(function b() {
    console.log("function b called");
})