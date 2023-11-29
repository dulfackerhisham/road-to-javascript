const user = ["hisham", 2, "admin"];
// var role = user[2]
// var name = user[0]

// var [name, courseCount, role] = user;
// console.log(role);

const myUser = {
    name: "izaan",
    courseCount: "4",
    role: "sub-admin",
};
console.log(myUser.courseCount);

// destructuring using objects
// names must same as keys
const {name, courseCount, role} = myUser
console.log(role);