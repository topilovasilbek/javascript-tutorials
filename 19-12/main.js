// 1 - Error nimada?
/* class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    // super(); super method qolib ketgan
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name); */

// 2 - Error nimada?
class Rabbit extends Object {
  constructor(name) {
    // super(); super method qo`yish kerak yoki extends Object ni olib tashlash kerak
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");
console.log(rabbit.hasOwnProperty("name"));
