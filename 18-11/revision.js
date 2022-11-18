// While

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

console.log("-----------------");

// Do while

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

console.log("-----------------");

let k = 0;
do {
  console.log(k);
  k++;
} while (k === 5);
// Here we see 0 in console.
// Because |do while| works before condition checking
// That is the difference between |while| and |do while| I know

console.log("-----------------");

// Functions are chunk of codes that we can call repeatedly anywhere we want
function showName() { /* Function Declaration */
  console.log("Asilbek Topilov");
  console.log("Asilbek Topilov");
  console.log("Asilbek Topilov");
  console.log("Asilbek Topilov");
  console.log("Asilbek Topilov");
}
showName(); /* Calling that function */
