var user = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

var hitesh = new user("hitesh", 2)

console.log(hitesh);

var liya = new user("liya", 5)
console.log(liya);