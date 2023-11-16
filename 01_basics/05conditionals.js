var temperature;

// TODO: go to google and get the data

temperature = 39;

if (temperature < 20) {
    console.log("its very cold outside")
}

if (temperature < 30) {
    console.log("its moderate outside")
} else {
    console.log("it's really hot outside")
}

console.log("------------------------------------------------")

// Login checking
var email = true
var facebook = false
var google = false

if (email || facebook || google) {
    console.log("Login Success")
} else {
    console.log("Login Failed")
}
console.log("///////////////////////////////////////////////////////////")

// Ternary operator
var authenticated = true

// if (authenticated) {
//     console.log('Show Logout button')
// } else {
//     console.log("show Login option")
// }

authenticated ? console.log("Logout button") : console.log("Login button");

 