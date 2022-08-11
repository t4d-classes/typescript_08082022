

export type ItemId = number;

export interface Item {
  id: ItemId;
  clone(): Item
}


export abstract class Fruit implements Item {
  id = NaN;

  constructor(public readonly name: string) {}

  abstract eat(): void;

  abstract clone(): Item;
}

export class Apple extends Fruit {
  constructor() {
    super("apple");
  }
  
  eat() {
    console.log("wash");
    console.log("bite into it");
  }

  clone() {
    return Object.assign(new Apple(), this);
  }
}

export class Orange extends Fruit {
  constructor() {
    super("orange");
  }
  
  eat() {
    console.log("peel it");
    console.log("pull it apart");
    console.log("bite into it");
  }

  clone() {
    return Object.assign(new Orange(), this);
  }
}