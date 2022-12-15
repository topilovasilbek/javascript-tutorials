// globalThis, old var, IIFE, NFE, setTimeOut, setInterval, call, apply, bind

/* globalThis.a = 10;

let a = 20; */

// if (5 > 3) {
//   let a = 10;
// }

// console.log(a);
// globalThis.a = 11;
// console.log(globalThis.a);

// console.log(globalThis);
/* 
var a = 10;

if (5 > 3) {
  (function() {
    var a = 5;
    console.log(a); // 5
  })();
  let a = () => {
    var a = 5;
    console.log(a);
  }
  a()
}

console.log(a); // 10
 */

/* function test(a, b, ...otherParams) {
  test.counter = 10;
}

console.log(test.name);
console.log(test.length);

test();
test.counter++;

console.log(test.counter); */

/* let test = function func() {
  console.log(111);
  func()
};
test(); */

// console.log(eval("5+4"));

/* let test = new Function("a", "b", "c", "console.log(a + b)");
test(10, 100, null); */

/* setTimeout(
  (name) => {
    console.log(name);
    console.log(1);
  },
  5000,
  "Asilbek"
); */

/* let count = 0;
let myInterval = setInterval(() => {
  if (count === 10) {
    clearInterval(myInterval);
  }
  console.log(count);
  count++;
}, 1000);
 */

function getName(param1) {
  //   this.name = "Asilbek";
  console.log(param1);
  return this.name;
}
// console.log(getName.call({ name: "Muslimbek" }, null));
// console.log(getName.apply({ name: "Muslimbek" }, [null]));

console.log(getName.bind({ name: "Muslimbek" }, null)());
