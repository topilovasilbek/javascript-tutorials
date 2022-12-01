// Array | 1st part

// let arr = ['Asilbek', 20, null, undefined, {key: 'value'}, 999n, true, false, function(){console.log('asdasd')}];
// console.log(arr);

/* let arr1 = [5, 10]; // modern way
let arr2 = new Array(5); // old way

console.log(arr1);
console.log(arr2); */

/* let arr = [1, 2, 3, [[1, 2]]];
// Arrays, objects are mutable, strings are immutable
arr[0] = 10;

console.log(arr); */

/* let str = 'Asilbek';
let arr = str.split('');
console.log(arr);
// console.log(String(arr));
// console.log(arr.join('')); */

// console.log([1, 2] - [3, 4]); '1,23,4'

// console.log(typeof {});
// console.log(typeof []);
// console.log(Array.isArray([])); // return true if param is array, otherwise false

/* console.log(Boolean('0'));
console.log('0' == true);
console.log([] == '0');
console.log(Boolean([])); */

/* console.log('' == 0); // true
console.log('' == '0'); // false */

// Loops

// let arr = ['abc', 'def', 'ghi']
// console.log(arr.length);

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */ // can get indexes and values
/* for (let value of arr) {
    console.log(value);
} */ // values
/* for (let index in arr) {
    console.log(index-1);
} */ // indexes

// let arr = [0, 1, 2, 3, 4];
// console.log(arr.at(-2));

// let arr = [0, 1, 2, 3, 4];
/* console.log(arr.pop()); // remove last item | get last item
console.log(arr);
arr.push(10) // add an item from end
console.log(arr); */
/* // arr.shift();
// console.log(arr.shift()); // remove first item | get first item
console.log(arr);
// console.log(arr.unshift(-50));
arr.unshift(-50); // add an item from start
console.log(arr); */

let arr = ["a", "b", "c", "d", "e", "f", 1141, "c"];
// arr.reverse();
console.log(arr.reverse());
console.log(arr);
// console.log(arr.includes(1141));
// console.log(arr.indexOf("c"));
// console.log(arr.lastIndexOf("c"));
// console.log([1, 2].concat([10, 100]));
// console.log(arr.slice(1, 3));
// console.log(arr);
// console.log(arr.splice(1, 0, 1203, 1000));
// console.log(arr);
