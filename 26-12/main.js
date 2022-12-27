/* function curry() {
  console.log("hey, I'm outside");
  let s = 0;
  return () => {
    console.log("hey, I'm inside");
    console.log(++s);
  };
}

let out = curry();

out();
out();
out(); */

/* function sum(params) {
  return eval(params.join("+"));
}

function out(...params) {
  return sum(params);
}

console.log(out(1, 2, 3)); */

// Proxy

let obj = {
  name: "Asilbek",
  age: 22,
};

let proxy = new Proxy(obj, {
  // Get if prop exists in object
  get(target, prop, receiver) {
    if (prop in target) return prop[target];
    return "This property does not exist!";
  },
  // Add if type of value is string
  set(target, prop, value) {
    if (typeof value === "string") target[prop] = value;
    return false
  },
});

// console.log(obj);
// console.log(proxy.wferfrf);
proxy.surname = 12;
console.log(proxy);

console.log(typeof {});
console.log(typeof []);
console.log(typeof (()=>{}));