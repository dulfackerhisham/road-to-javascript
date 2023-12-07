// function run(){
//     let x = "hey there"
//     setTimeout(function (){
//         console.log(x);
//     }, 2000)
//     console.log("executes first >>>>>>>>>");
// }

// run();

// function runs(){
//     for(var i = 1; i <= 5; i++){ ///solution for this is using "let"
//         setTimeout(function () {
//             console.log(i);
//         }, i * 2000);
//     }
//     console.log("executes first >>>>>>>>>");
//     }
    
//     runs();

function execute(){
    for(var i = 1; i <= 5; i++){
        console.log("loop is running", i);
        function close(i){
            console.log("func called ", i);
            setTimeout(function () {
                console.log(i);
            }, i * 2000);
        }
        close(i)
    }
    console.log("executes first >>>>>>>>>");
    }
        
execute();

