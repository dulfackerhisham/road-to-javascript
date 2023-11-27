// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

const myStates = ['Rajastan', 'Kerala', 2008, 'Goa', 'Banglore']

for(let i = 0; i < myStates.length; i++){
    if (typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);
}

let i = 0;

while(i < myStates.length){
    console.log(myStates[i]);
    i++;
}

let x = 30;

do {
    console.log(x);
    x++;
} while (x < 10);