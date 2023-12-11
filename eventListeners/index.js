let count = 0
function addingEventListeners (){
    document.getElementById("clickme").addEventListener("click", function ab () {console.log("button clicked", ++count);});

}
addingEventListeners();


console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 5000)

console.log("end");
