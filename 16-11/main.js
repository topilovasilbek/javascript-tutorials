// let n = 10;

// if (n != 10) {console.log(10)} else if() {} else {};

// switch (n) {
//   case 10 /* if n===10 */:
//     console.log("10 ga teng");
//     break;
//   case 5 /* else if n===5 */:
//     console.log("5 ga teng");
//     break;
//   case 0 /* else if n===0 */:
//     console.log("0 ga teng");
//     break;
//   default:
//     console.log("Hech biriga teng emas");
// }

// for (startingPoint; condition; step) {code}

// let i = 0;

// for (;;) {
//   console.log("Asilbek Topilov");
// }

// console.log(i);

// 0 dan n gacha bo`lgan toq sonlarni chiqaring
// let n = 10;

// for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

/* let s = 0;
for (let i = 0; i < 10; i++) {
    console.log(i);
    s += i;
    if (s===10) {
        console.log('Tugadi');
        break;
    }
} */

/* for (let i = 0; i < 10; i++) {
  if (i % 5 === 0) continue;
  console.log(i);
} */

myloop: for (let i = 0; i < 5; i++) {
    console.log();
  for (let j = 0; j < 5; j++) {
    if (j===4) {
        continue myloop;
    }
    console.log(j)
  }
}
