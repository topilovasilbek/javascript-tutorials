// let n = [1, 2, 3, 4, 5, 6];

/* let res = n.forEach((item, index, array) => {
    return 5;
    console.log(item, index, array);
    // console.log(item, index, n);
});
console.log(res); */

/* let res = n.map((item, index, array) => {
  return item * 2;
  console.log(item, index, array);
});

console.log(res); */

// let nums = [77, 6, 1, 10, 40, 1];

/* let res = nums.findLastIndex((item) => item === 1);
console.log(res); */

/* let res = nums.findIndex((item) => item % 10 === 0);
console.log(res); */

// find
/* // console.log(Boolean(50));
let res = nums.find((item, index, array) => item % 2 === 0);
console.log(res); */

/* let numbers = [4, 2, 80, 5, 9];
let letters = ["banana", "Grape", "apple", "Lemon"];

// let res = numbers.sort((a, b) => a - b);
let res = letters.sort((a, b) => a.localeCompare(b));
console.log(res); */

/* let nums = [0, 5, 18, 29];

let res = nums.filter((item, index, array) => item < 10);
console.log(res); */

/* let str = ["Asilbek", "Muslimbek", "asdasd", "asd"];

let res = str.every((item) => item.length > 0); // true && true && false && false
let res1 = str.some((item) => item.length > 6); // true || true || false || false

console.log(res);
console.log(res1); */

/* let numbers = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0];

// numbers.fill(7)
numbers.copyWithin(6, 0, 3)

console.log(numbers); */

/* let arr = [[['a'],['b']], ['c','d'], ['e','f'], ['g','h']];

// console.log(arr);
console.log(arr.flat(Infinity)); */

/* let arr = [
  [["a"], ["b"]],
  ["c", "d"],
  ["e", "f"],
  ["g", "h"],
];

console.log(arr.flatMap((item) => [item + 'w'])); */

/* let str = undefined;

// console.log(str.split(''));
console.log(Array.from([50, 500], (item) => item * 10)); */

/* let res = new Set([1, 2, 2, 3, 4, 4, 10, 2]);

console.log(res);
console.log(Array.from(res)); */

/* let obj = {
  name: "Asilbek",
  age: 22,
  status: "developer",
};
let arr = Object.entries(obj);

console.log(obj);
console.log(arr);
console.log(new Map(arr));
 */

/* const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = inventory.group(({ type }) => type);

console.log(result); */

/* let n = [1, 2, 3, 4, 5];

let res = n.reduce(
  (value, currentValue, currentIndex, array) => array,
  100
);

console.log(res);
// console.log(n); */
