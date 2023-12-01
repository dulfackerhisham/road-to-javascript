// import Mobile from "./4_class";

const Mobile = require("./4_class.js")

const iphonex = new Mobile("iphone15", "promax");

console.log(iphonex.getInfo());

iphonex.enrollMobile({"iphone14": "pro"})
iphonex.enrollMobile({"samsung": "s22"})
console.log(iphonex.getMobile());


console.log("=======================================");
let phones = iphonex.getMobile();

phones.forEach((c) => console.log(c));
