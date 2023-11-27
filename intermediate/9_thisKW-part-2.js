console.log(this);

var user = {
    firstName: "Hitesh",
    courseCount: 4,
    getCourseCount: function() {
        console.log("Line 7", this);
        function sayHello(){
            console.log("hey from inner funciton");
            console.log("Line 10", this);
        }
        sayHello();
    },
};

user.getCourseCount();