if (true) {
    // compoun statement
    var a = 10;
    console.log(a);
}

// block scope
{
    var u = 105;
    let b = 20;
    const c = 30;

    // console.log(u);
    // console.log(b);
    // console.log(c);

}

console.log(u);
// console.log(b);
// console.log(c);

console.log("************************************************")
// => SHADOWING
var qw = 55;
let n = 600;

{
    var qw = 456;
    let n = 89;
    const i = 99;

    console.log(qw);
    console.log(n);
    console.log(i);
}
console.log(qw);
console.log(n);

