// Recursion function
/* function main(n1, n2) {
  if (n1 > n2) return;
  console.log(n1);
  n1++;
  main(n1, n2);
}

main(5, 10); */

function factorial(num, res = 1) {
  if (num === 1) {
    return res;
  }
  res *= num;
  num--;
  return factorial(num, res);
}

console.log(factorial(4)); // 4 * 3 * 2 * 1

// ( ( ( ( ) ) ) )


/* {
var var

}

{
function

} */