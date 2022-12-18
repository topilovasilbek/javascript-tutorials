/* const getCached = (func) => {
  let cache = new Map();
  return function (smth) {
    if (cache.has(smth)) {
      console.log(cache.get(smth));
      return cache.get(smth);
    }
    let res = func();
    console.log(res);
    return cache.set(smth, res);
  };
};

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

getPosts = getCached(getPosts);

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

getUsers = getCached(getUsers) */

/* let obj = {
  name: "Asilbek",
  age: 20,
};

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// Object.defineProperty(obj, 'name', { configurable: false });
Object.defineProperties(obj, {
  name: {
    configurable: false,
  },
  age: {
    configurable: false,
  },
});

delete obj.name;
delete obj.age;

console.log(obj); */

/* let data = {
  first: "Asilbek",
  last: "Topilov",
  get returnFull() {
    console.log(this.first, this.last);
  },
  set returnFull(value) {
    this.first = value.first;
    this.last = value.last;
  },
};

data.returnFull;
data.returnFull = { first: "Muslimbek", last: "Ilxomov" };
data.returnFull;
 */

/* let obj1 = {
  key: "value",
};

let obj2 = {
  key2: "value 2",
};

// console.log(Object.assign(obj1, obj2));?

obj1.__proto__ = obj2;

console.log(obj1.key2); */

Object.prototype.concat = function (obj) {
  return Object.assign(this, obj);
};

let obj1 = { name: "Asilbek" };

console.log(obj1.concat({ surname: "Topilov" }));
