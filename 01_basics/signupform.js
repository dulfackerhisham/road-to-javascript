const uid = "325g23j4k5245j"

var firstName = "Hisham"
var lastName = "Dulfacker"
var email = "dulfackerhisham@gmail.com"
var password = "123456"
var confirmPassword = "123456"
var country = "India"
var phone = "9988776655"
var logCount = 0
var isLoggedInFromGoogle = false;

// prompt("Enter your name");
console.log("UID : ", uid);
console.log("Full Name : " + firstName);
console.log("Email : " + email);


// INTERPOLATION
console.log(`
with unique ID: ${uid}
User fullname: ${firstName + lastName}
Email: ${email}
User country ${country}

`)