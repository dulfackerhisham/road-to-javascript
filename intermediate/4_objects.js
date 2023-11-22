var user = {
    firstName : "hisham",
    lastName : "dulfacker",
    role : "admin",
    loginCount : 32,
    instaSignedIn : true,
};

console.log(user["role"]);

user.loginCount = 55;
console.log(user.loginCount);

console.table(user)
