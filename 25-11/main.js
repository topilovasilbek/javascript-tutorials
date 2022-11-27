/* this.name = "Muslimbek";

let obj = {
  name: "Asilbek",
  show() {
    // console.log(this);
    console.log(this.name);
  },
};

const obj2 = obj;
obj = null;

obj2.show(); */

// console.log(this) // global object - {}

// const myObject = {
//   name: "Asilbek",
//   show() {
//     return () => {
//       console.log(this.name);
//     };
//   },
// };

// myObject.show()();

// this.name = 'Muslimbek'

// function func() {
//     this.name = 'Asilbek'
//     console.log(typeof new.target)
// }

// func()

// const adv = {
//   name: "Alice",
//   cat: {
//     name: "Dinah",
//   },
//   dog: function() {
//     console.log('hey')
//   }
// };

// const dogName = adv.dog?.name;
// console.log(dogName)

/* const id = Symbol('id');
const id2 = Symbol('id');

const obj = {
    [id]: 'asdasdaasd',
    [id2]: 'a'
}
console.log(obj[id])
console.log(obj[id2]) */

/* const obj1 = {
    age: 10
}
const obj2 = {
    age: 11
}
console.log(String(obj1))
console.log(String(obj2))
console.log(obj1 + obj2) */

/* const obj = {
  name: "Asilbek",
  surname: "Topilov",
  age: 20,
  status: "developer",
  child: {
    name: "Muslimbek",
    child: {
      n: 10,
      asdda: {},
    },
  },
};

const {
  name,
  surname,
  age,
  status: st,
  child: {
    name: name2,
    child: {
      n,
      asdda: {},
    },
  },
} = obj;

// console.log(name);
// console.log(age);
// console.log(surname);
// console.log(st);
// console.log(name2);
console.log(n); */


const obj = {
    name: 'Asilbek',
    age: 20
}

const obj2 = {
    ...obj,
    surname: 'Topilov',
}

// console.log(obj === obj2)
console.log(obj2)