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

class Test {
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
Test.addAge()