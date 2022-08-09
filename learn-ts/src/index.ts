/* eslint @typescript-eslint/no-explicit-any: "off" */


export function echo(input: string | number): string | number {
  return input;
}

// const message = 'It works!';

// console.log(echo(message));

let t: any = undefined;

console.log(typeof t); // undefined


t = 'hello';
console.log(typeof t); // string

t = 42;
console.log(typeof t); // number

const y = 42n;
console.log(typeof y); // bigint

console.log(BigInt(t) + y);

t = true;
console.log(typeof t); // boolean

t = Symbol();
console.log(typeof t); // symbol

t = null
console.log(typeof t); // null

t = { firstName: 'Bob' };
console.log(typeof t); // object

t = [1,2,3,4,5];
console.log(typeof t); // object
console.log(t instanceof Array); // true
console.log(t instanceof Object); // true

t = function() { return; };
console.log(typeof t); // function
console.log(t instanceof Function); // true
console.log(t instanceof Object); // true


console.dir(t);

// typescript - type alias
type Person = {
  firstName: string;
  lastName: string;
};

interface Person3 {
  firstName: string;
  lastName: string;
}

// javascript
class Person2 {
  firstName!: string;
  lastName!: string;
}

const person: Person = {
  firstName: "Bob",
  lastName: "Smith",
};

const person2: Person2 = person;
const person3: Person3 = person;


console.log(person.firstName);
console.log(person.lastName);

console.log(person2.firstName);
console.log(person2.lastName);


// C#

// class Fruit {
//   public string Name { get; set; }
// }

// class Fruit2 {
//   public string Name { get; set; }
// }

// Fruit fruit1 = new Fruit2();