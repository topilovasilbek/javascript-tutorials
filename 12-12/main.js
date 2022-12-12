// Date objects and JSON

// console.log(Date());

// let date = new Date();

// console.log(new Date(1100000000000));
// console.log(Date.now());
// console.log(date.getTime());

// console.log(date);
// console.log(date.constructor);
/* console.log(date.getDay()); // Hafta kuni 0-6
console.log(date.getDate()); // Kun 1-31
console.log(date.getMonth()); // Oy 0-11
console.log(date.getFullYear()); */

/* console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds()); */

// console.log(date.getTimezoneOffset());

/* let obj = {
  name: "Asilbek",
  age: 20,
  data: {
    firstName: "Muslimbek",
    lastName: "Ilxomov",
  },
};
// console.log(obj);

let json = JSON.stringify(obj, {}, 4); // convert obj to JSON

let obj2 = JSON.parse(json); // convert JSON to object

console.log(obj2); */

/* let obj = {
  name: "Asilbek",
  age: 22,
};

let arr = Object.entries(obj); */

// console.log(arr);

/* let mapObject = new Map(arr);
mapObject.name = "Asilbek 2";

mapObject.set("status", "developer"); */
// console.log(mapObject);

// mapObject.delete("status")
// mapObject.clear()
// console.log(Array.from(mapObject));
// console.log(Object.fromEntries(mapObject));
// console.log(mapObject.get('status'));

// mapObject.forEach((item) => console.log(item));

/* console.log(mapObject.entries()); // map Entries
console.log(Object.entries(mapObject)); //  simple object key&values
console.log(mapObject.size); */

/* let set = new Set([3, 0, 1, 2, 3, 3, 3, 0]);

console.log(set); */

/* let obj = { name: "Asilbek" };

obj = null; */

/* let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj, "Asilbek");

console.log(weakMap.get(obj)); */

// console.log(new WeakSet());

/* let obj = {
  null: 1,
};

console.log(obj.null); */

let mapObject = new Map();

mapObject.set({}, 1);

console.log(mapObject.get(null));
