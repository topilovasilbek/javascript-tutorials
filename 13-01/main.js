let btn = document.getElementById("btn");
let input = document.getElementById("input");
let box = document.getElementsByClassName("box")[0];

/* box.onmouseover = (e) => {
    console.log('mouse over');
} */

// box.addEventListener('mouseover', ()=>console.log('hey'))

/* box.onmouseout = (e) => {
    console.log('mouse out');
}

box.onmouseenter = (e) => {
    console.log('mouse enter');
}

box.onmouseleave = (e) => {
    console.log('mouse leave');
} */

// box.addEventListener("dblclick", () => console.log("double clicked"));

/* input.addEventListener("paste", function (e) {
  e.preventDefault();
}); */

/* btn.onclick = (e) => {
    console.log('shift', e.shiftKey);
    console.log('ctrl', e.ctrlKey);
    console.log('alt', e.altKey);
    console.log('meta', e.metaKey);
}
 */

/* input.addEventListener("change", (e) => {
  console.log(e);
}); */

/* input.addEventListener("keypress", (e) => {
  console.log(e);
}); */

/* input.addEventListener("keydown", (e) => {
//   console.log(e);
  box.innerHTML += e.key
});
 */

// console.log(window.pageYOffset);
// console.log(window.scrollY);

// console.log(document.body.scrollHeight);
// console.log(window.innerHeight);

window.onscroll = (e) => {
  console.log(
    window.scrollY + window.innerHeight >= document.body.scrollHeight
  );
};
