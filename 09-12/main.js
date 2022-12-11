// Destructure | Object | Array | Object.assign | map

let student = {
  age: 30,
  status: "developer",
  name: {
    firstName: "Asilbek",
    lastName: "Topilov",
  },
};

let status = "asdasdasdasd";

let {
  key,
  age,
  status: status2,
  name: { firstName: name },
} = student; // let age = student.age; let status = student.status;

// console.log(name);

/* function getName({ name2: { age = 123 } }) {
  console.log(age);
}

getName(student);
 */

/* let arr = [1, 2, 3, 4];

let [first, second, ...others] = arr;

console.log(first);
console.log(second);
console.log(others); */

let object = {
  name: "Asilbek",
  age: 41,
};

let arr = Object.entries(object);

console.log(arr);

arr.map(([key, value]) => {
  console.log(key, value);
});
