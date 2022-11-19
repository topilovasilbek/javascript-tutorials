// while loop
// let i = 9;
// while (i === 10) {
//     console.log('asd');

//     i++;
// }

// do while loop
// do {
//     console.log('asd');
// } while (true)

// let i = 9;
// do {
//     console.log('asd');

//     i++;
// } while (i === 10)

// Hoisting
// console.log(a);
// let a = 10;
// console.log(a);
// var a = 10;

// myFunction()

// Function Declaration
// function myFunction() {
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
//   console.log("Asilbek Topilov");
// }
// myFunction() // call function
// myFunction() // call function
// myFunction() // call function
// myFunction() // call function
// myFunction() // call function

// Function Expression
// const myFunction = function() {
//     console.log(123);
// }
// myFunction()

// Arrow Function
// const myFunction = () => {
//     console.log(1000);
// }
// myFunction()

// Clean code
// function showName(name, age, abc) {
//   console.log(name); // 100
//   console.log(age);
//   //   abc ? (abc = "") : null;
//   //   abc = abc ?? ''
//   console.log(abc);
//   /* codes */
// }
// showName(100, "Asilbek Topilov", "asd");

// function calcAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(calcAverage(10, 35, 345));

// console.log()
// alert()
// parseInt()

// Callback function
// Callback function is a function which is as parameter of another function
// callback function - bu function ga parametr sifatida berilgan function

function darajaniHisobla(a, b) {
    return a ** b
}

function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}

console.log(     calcAverage(     10, 20, darajaniHisobla(10, 2)      )     )
