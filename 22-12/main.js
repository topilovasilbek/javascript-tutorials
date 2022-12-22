/* try {
  console.log(a);
} catch(error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} */

// console.log("Asilbek");

/* try {
  //   console.log(JSON.parse('{name:"Asilbek"}'));
  let myError = Error("Hey");
//   throw myError;
} catch (error) {
  //   console.log(
  //     `Sizda ${error.name} bo\`lyapti. Qani bir kodizni ko\`rib chiqingchi`
  //   );
  console.log(error.message);
} finally {
    console.log('Tugadi');
}
 */

// Callback functions

// Callback hell

/* function test(end) {
  setTimeout(() => {
    console.log("It is the function");
    end("Asilbek");
  }, 1000);
}

console.log("----START----");
test((name) => {
  console.log(name);
  console.log("----END----");
});
 */

// fetch('') => Promise
// axios

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (5 > 4) resolve(123);
    else reject(10);
  }, 1000);
});

const getData = async () => {
  let res = await promise;
  console.log(res);
};
getData();
