// Data types
// Primitive:      string number bigint boolean null undefined symbol
// Non Primitive:  objects(object, array, function)

// let name = "Asilbek";
// let surname = "Topilov";
// let age = 19;
// let status = "developer";

// let myObject2 = new Object();

// let myObject = {
//   name: "Asilbek",
//   surname: "Topilov",
//   age: 19,
//   status: "developer",
//   0: "men 0 man",
//   false: true,
//   'my full name': 'Asilbek Topilov'
// };

// let myName = "name";
// let name = 'name'

// console.log(myObject[myName]);
// console.log(myObject['name']);
// console.log(myObject.myName);
// console.log(myObject[0]);
// console.log(myObject['0']);
// console.log(myObject.false);
// console.log(myObject['false']);
// console.log(myObject[name]);

// function getUserInfo(name, surname, age) {
//   return {
//     name,
//     surname,
//     age,
//   };
// }

// console.log(getUserInfo("Muslimbek", "Ilxomov", 28));

// let myName = "Muslimbek";

// let myObject = {
//   myName,
// };

// console.log(myObject);

// const myObject = {
//   name: "Asilbek",
//   age: 20,
// };

// // Object.freeze(myObject)
// Object.seal(myObject)

// myObject.name = "Muslimbek"; // update
// myObject.age = 22; // update

// myObject.name = "asdasdasdasdsa"; // update item
// delete myObject.name; // delete item
// myObject.surname = "Topilov"; // add

// console.log(myObject); // get

// const myObject1 = {
//     name: 'Asilbek'
// };

// const myObject2 = myObject1;
// myObject2.name = 'Muslimbek';

// console.log(myObject1 === myObject2);
// console.log(myObject1);
// console.log(myObject2);

// const myObject1 = {
//   name: "Asilbek",
// };

// const myObject2 = structuredClone(myObject1);

// Object.assign(myObject2, myObject1)

// console.log(myObject1 === myObject2);
// console.log(myObject1);
// console.log(myObject2);

const myObject1 = {
  name: "Asilbek",
  age: 20,
  birthYear: 1990,
};

for (let i in myObject1) {
    console.log(myObject1[i]);
}

// console.log('ages' in myObject1);
// if ('ages' in myObject1) {
//     myObject1.age++
// }
// console.log(myObject1);