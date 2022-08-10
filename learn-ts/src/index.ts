/* eslint @typescript-eslint/no-explicit-any: "off" */


export function echo(input: string | number): string | number {
  return input;
}

// export type T = typeof echo;


// const echo2: T = (input) => input;

// console.log(echo2('test'));

// export const EMPLOYEE_TYPE_EMPLOYEE = "EMPLOYEE";
// export const EMPLOYEE_TYPE_CONTRACTOR = "CONTRACTOR";
// export const EMPLOYEE_TYPE_VENDOR = "VENDOR";

// export enum EmployeeType {
//   Employee = "Employee",
//   Contractor = "Contractor",
//   Vendor = "Vendor"
// }


export type EmployeeType = 'associate' | 'contractor' | 'vendor';


export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  employeeType: EmployeeType;
  // employeeType: string;

};

export type NewPerson = Omit<Person, 'id'>;


const newPerson: NewPerson = {
  firstName: 'Bob',
  lastName: 'Smith',
  employeeType: 'associate'
};

const createPerson = (p: NewPerson) => {
  // do something to create the person
  console.log('created: ', p);

  const person: Person = {
    ...p,
    id: 1,
  };

  return person;
};


const person = createPerson(newPerson);

console.log(person.id);

const x = person.id + 12;

console.log(x);

console.log(person);

