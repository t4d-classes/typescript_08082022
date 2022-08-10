// add code here...

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  hasTowHitch: boolean;
};

export interface Car2 {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  hasTowHitch: boolean;
}

export class Car3 {
  id!: number;
  make!: string;
  model!: string;
  year!: number;
  color!: string;
  price!: number;
  hasTowHitch!: boolean;
}



export const printCar = (car: Car3) => {
  const { id, make, model, year, color, price, hasTowHitch } = car;
  return `ID: ${id}, Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}, Price: ${price}, Has Tow Hitch: ${hasTowHitch}`;
};

export function copyCar(car: Car) {
  return {
    ...car,
  };
}

