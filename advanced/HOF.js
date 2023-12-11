function f() {
    console.log("this is callback function");
}

function t(f){
    console.log("this is higher order function");
    f();
}

t(f);

// /this is just an example to be familiar