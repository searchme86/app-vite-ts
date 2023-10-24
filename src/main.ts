import "../index.css";

let a = 2;
let b = 4;
console.log(a + b);

class Person {
  public full: string;

  constructor(public city: string) {
    this.full = ` ( ${city})`;
  }
}
let person = new Person("seoul");
console.log("person", person);
