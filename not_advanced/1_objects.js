// constructor functions and New keyword
var user = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

user.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
};

var father = new user("dulfacker", 2);
father.getCourseCount()
father.getFirstName()

console.log(father);

var mother = new user("jouhara", 5)
mother.getCourseCount()
mother.getFirstName()

console.log(mother);