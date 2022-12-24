// function test() {}

// {} this

/* class Test {
  constructor(second) {
    this.second = second;
  }
  name = "Asilbek";
  getName() {
    return this.second;
  }
}

let a = new Test("Muslimbek");

console.log(typeof Test); */

/* class Test {
  name = "Asilbek";
  ['asdasd  asd'] = 10;
  get funcName() {
    return this.name;
  }
  set funcName(value) {
    this.name = value;
  }
}

let a = new Test("Muslimbek");

a.funcName = "Muslimbek";

console.log(a.funcName); */

/* class A {
  constructor(hey) {
    console.log(hey);
  }
  a_name = "Asilbek";
  getName() {
    return this.a_name;
  }
}

class B extends A {
  constructor() {
    super('Hey')
    console.log('I am constructor');
  }

}

console.log(new B().getName()); */

/* class Parent {
  name = "webbrain";
  constructor() {
    console.log(this.name);
  }
}

class Child extends Parent {
  name = "wba";
}

new Parent()
new Child() */

/* class Parent {
  surname = "webbrain";
}

class Child {
  #name = "wba";
  getName() {
    return this.#name;
  }
} */

// Child.__proto__ = Parent;
/* 
console.log(new Parent());
Object.assign(new Child().__proto__, new Parent())
console.log(new Child());
console.log(new Child().surname); */

// console.log(new Child() instanceof Function);

/* let child = new Child();

console.log(child.getName()); */

/* class Test {
  static age = 0;
  static addAge() {
    console.log(++this.age);
  }
}

let a = new Test();
let b = new Test();

Test.addAge()
Test.addAge()
Test.addAge()
Test.addAge()
Test.addAge() */

// Classes in JS || Revision
/* class Test {
  name = "Asilbek";
  myFunc() {
    console.log("my func " + this.name);
  };
  get getStmh() {
    return this.name;
  };
  set getSmth(value) {
    this.name = value;
  };
  ["asilbek" + "Topilov"](v) {
    return v
  };
  ['a'+4+5] = 'a---4---5';
} */

// let a = new Test();
// let b = new Test();

// console.log(a.getStmh);

// console.log(a);
// console.log(b);

// console.log(Test());


// console.log(a.asilbekTopilov('Muslimbek'));

// a.getSmth = "Muslimbek";
// console.log(a.getStmh);

// console.log(typeof Test); // function

// console.log(a);
// a.myFunc();
// console.log(a.name);

class Fruits {
  constructor() {
    this.name = 'Asilbek'
  }
}

class Apple extends Fruits {
  surname = 'Topilov'
  constructor() {
    super();
    this.surname = this.name
  }
  getName() {
    return this.name
  }
}

let fruits = new Fruits();
let apple = new Apple();

console.log(apple.surname);