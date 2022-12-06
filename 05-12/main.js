// CRUD - Create, Read, Update, Delete

let users = [
  { id: 0, name: "Alew Wilson", age: 23, status: "developer" },
  { id: 1, name: "Morgan Sinclair", age: 30, status: "developer" },
  { id: 2, name: "Justine Everly", age: 60, status: "old" },
  { id: 3, name: "Amelia Edwards", age: 23, status: "developer" },
  { id: 4, name: "Candice Smith", age: 15, status: "pupil" },
  { id: 5, name: "Ashley Roberts", age: 23, status: "developer" },
  { id: 6, name: "Harper Lee", age: 18, status: "student" },
  { id: 7, name: "Bradee Thompson", age: 10, status: "developer" },
  { id: 8, name: "Daniellle Johnson", age: 23, status: "developer" },
  { id: 9, name: "Sienna Garcia", age: 23, status: "developer" },
  { id: 10, name: "Sofia Jones", age: 3, status: "baby" },
];

// Read
/* // console.log(users[0]);
function filterByAge(data) {
  return data.filter((item) => item.age > 23);
}
function sortByAge(data) {
  return data.sort((a, b) => b.age - a.age);
}
// console.log(filterByAge(users));
console.log(sortByAge(users)); */

// Create
/* function addUser(user) {
    users.push(user)
    return users
}
console.log(addUser({id: 11, name: 'Asilbek Topilov', status: 'chef'})); */

// Update
/* function editUser({ id, key, value }) {
  return users.filter((item) => (item.id === id ? (item[key] = value) : item));
}
console.log(editUser({ id: 3, key: "age", value: 200 })); */

// Delete
function deleteUser(id) {
  users = users.filter((item) => (item.id !== id ? item : null /*  */));
}
deleteUser(4);
deleteUser(5);
deleteUser(6);
deleteUser(7);
deleteUser(8);
deleteUser(9);
deleteUser(10);
deleteUser(0);
deleteUser(1);
console.log(users);
