// Proxy - ownKeys(), has(), Reflect

/* let obj = {
  name: "Asilbek",
  surname: "Topilov",
  age: 22,
  status: "developer",
};

let proxy = new Proxy(obj, {
  ownKeys(target) {
    return Object.keys(target).filter((vl) => vl !== "status");
  },
});

for (let key in proxy) {
  console.log(proxy);
  console.log(proxy[key]);
} */

/* let obj = {
  name: false,
  surname: "Topilov",
  age: 22,
  status: "developer",
};

let proxy = new Proxy(obj, {
  has(target, key) {
    return key === "status" ? false : key in target;
  },
});

console.log(proxy);
console.log("age" in proxy); */

/* let obj = {
  name: "Asilbek",
  surname: "Topilov",
  age: 22,
  status: "developer",
};

let proxy = new Proxy(obj, {});

// console.log(Reflect.get(obj, "name"));
console.log(proxy);
console.log(Reflect.set(proxy, "name", "Muslimbek"));
console.log(proxy); */


let tg = document.getElementsByTagName('main')[0];
let cl = document.getElementsByClassName('child');
let nm = document.getElementsByName('asilbek');
let id = document.getElementById('sibling');
let selector = document.querySelector('#sibling');
let selectors = document.querySelectorAll('#sibling');

let lastChild = document.getElementsByClassName('child')[2]

console.log(lastChild);