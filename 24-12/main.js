// function* generator() {
//   let smth = 123;

//   yield smth;
//   yield 33;
//   yield "Asilbek";
//   return 999;
// }

// const gen = generator();
// const a = generator();

// console.log(gen.next());
// console.log(a.next());

// [...gen].map((v) => console.log(v));

// console.log([...gen]);

// for (value of gen) {
//     console.log(value);
// }

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* generateId() {
//   let id = 0;
//   while (true) {
//     let nextValue = yield ++id;
//     console.log(nextValue);
//   }
// }
// let getId = generateId();

// getId.next(1);
// getId.next(2);
// getId.next(3);
