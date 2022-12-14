// Scope - qamrov

/* if (5 > 4) {
  let a = 5;
//   console.log(a);
};

console.log(a);
 */

// Hoisting

/* console.log(a);
var a = 5; */
/* var a; // undefined
console.log(a);
a = 5; // 5 */

/* hey();

const hey = () => {
  console.log("hey");
}; */

/* console.log(a);

let hey = function () {
  console.log(a);
  var a = 5;
};
hey();
 */

/* for (let i = 0; i < 10; i++) {

} */

// Lexical Environment {a: a, inner: inner}
let a = 50;
function outer() {
  //   let a = 5;
  function inner() {
    // {b: b, a: a}
    let b = 5;
    console.log(a);
  }
  inner();
}
outer();

// Closure
