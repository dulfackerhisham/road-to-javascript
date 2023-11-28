const hitesh = {
    firstName : "Hitesh",
    lastName : "Choudhary",
    role : "Admin",
    courseCount : 3,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying  ${this.courseCount} courses
        `);
        // here this keyword is pointing to the keys object 'hitesh'
    }
}

const dj = {
    firstName : "blend",
    lastName : "dk",
    role : "Sub-Admin",
    courseCount : 4,
}
hitesh.getInfo.bind(dj)()
var djInfo= hitesh.getInfo.bind(dj)
djInfo()