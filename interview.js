function Person(val) {
  this.name= val;
}
Person.prototype.sayMyName = function () {
  console.log(this.name);
};
let p1 = new Person("john")
// p1.sayMyName()
const buffer = Buffer.from("h");

console.log(buffer);