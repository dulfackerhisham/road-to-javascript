function x () {
    var number = 77;
    function b (){
        console.log(number);
    }
    number = 500;
    return b;
}

var call = x();
console.log(call);

call();