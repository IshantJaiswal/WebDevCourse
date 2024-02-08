let person1 = { name: "Prateek", age: 20 };
let person2 = { name: "Jatin", age: 21 };
function introduce() {
  console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}
introduce.call(person2);
