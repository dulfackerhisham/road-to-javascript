var user = {
    firstName : "hisham",
    lastName : "dulfacker",
    role : "admin",
    loginCount : 32,
    instaSignedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`
    },
};

var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("react js")
user.buyCourse("redux")
console.log(user.getCourseCount());


