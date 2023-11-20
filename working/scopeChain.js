var name = "nidal"

console.log(`Line no.3 ${name}`);

function sayName(){
    var name = "izaan"
    console.log(`Line no.6 ${name}`);
    nameTwo()
    function nameTwo(){
        var name = "hisham"
        console.log(`Line no.10 ${name}`);
    }
}

sayName();